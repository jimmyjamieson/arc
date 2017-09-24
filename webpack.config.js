// https://github.com/diegohaz/arc/wiki/Webpack
const path = require('path');
const devServer = require('@webpack-blocks/dev-server2');
const splitVendor = require('webpack-blocks-split-vendor');
const happypack = require('webpack-blocks-happypack');
const serverSourceMap = require('webpack-blocks-server-source-map');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const AssetsByTypePlugin = require('webpack-assets-by-type-plugin');
const ChildConfigPlugin = require('webpack-child-config-plugin');
const SpawnPlugin = require('webpack-spawn-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const {
  addPlugins, createConfig, entryPoint, env, setOutput,
  sourceMaps, defineConstants, webpack, group,
} = require('@webpack-blocks/webpack2');

const host = process.env.HOST || 'localhost';
const port = (+process.env.PORT + 1) || 3001;
const sourceDir = process.env.SOURCE || 'src';
const publicPath = `/${process.env.PUBLIC_PATH || ''}/`.replace('//', '/');
const sourcePath = path.join(process.cwd(), sourceDir);
const outputPath = path.join(process.cwd(), 'dist/public');
const assetsPath = path.join(process.cwd(), 'dist/assets.json');
const clientEntryPath = path.join(sourcePath, 'client.js');
const serverEntryPath = path.join(sourcePath, 'server.js');
const devDomain = `http://${host}:${port}/`;

const babel = () => () => ({
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
});

const assets = () => () => ({
  module: {
    rules: [
      { test: /\.(png|jpe?g|svg|woff2?|ttf|eot|gif)$/, loader: 'url-loader?limit=8000' },
      { test: /\.(scss)$/,
        use: [
          {
            loader: 'isomorphic-style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
          },
          {
            loader: 'resolve-url-loader',
          },
        ],
      },
    ],
  },
});

const resolveModules = modules => () => ({
  resolve: {
    modules: [].concat(modules, ['node_modules']),
  },
});

const base = () => group([
  setOutput({
    filename: '[name].js',
    path: outputPath,
    publicPath,
  }),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV,
    'process.env.PUBLIC_PATH': publicPath.replace(/\/$/, ''),
  }),
  addPlugins([
    new webpack.ProgressPlugin(),
    new LodashModuleReplacementPlugin({
      currying: true,
      flattening: true,
      paths: true,
      placeholders: true,
      shorthands: true,
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ]),
  happypack([
    babel(),
  ]),
  assets(),
  resolveModules(sourceDir),

  env('development', [
    setOutput({
      publicPath: devDomain,
    }),
  ]),
]);

const server = createConfig([
  base(),
  entryPoint({ server: serverEntryPath }),
  setOutput({
    filename: '../[name].js',
    libraryTarget: 'commonjs2',
  }),
  addPlugins([
    new webpack.BannerPlugin({
      banner: 'global.assets = require("./assets.json");',
      raw: true,
    }),
  ]),
  () => ({
    target: 'node',
    externals: [nodeExternals()],
    stats: 'errors-only',
  }),

  env('development', [
    serverSourceMap(),
    addPlugins([
      new SpawnPlugin('npm', ['start']),
    ]),
    () => ({
      watch: true,
    }),
  ]),
]);

const client = createConfig([
  base(),
  entryPoint({ client: clientEntryPath }),
  addPlugins([
    new AssetsByTypePlugin({ path: assetsPath }),
    new ChildConfigPlugin(server),
    new Visualizer({
      filename: './build-stats.html',
    }),
    new SWPrecacheWebpackPlugin(
      {
        cacheId: 'affectli',
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        filename: 'service-worker.js',
        minify: true,
        // navigateFallback: client + 'index.html',
        staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
      }
    ),
  ]),

  env('development', [
    devServer({
      contentBase: 'public',
      stats: 'errors-only',
      historyApiFallback: { index: publicPath },
      headers: { 'Access-Control-Allow-Origin': '*' },
      host,
      port,
    }),
    sourceMaps(),
    addPlugins([
      new webpack.NamedModulesPlugin(),
    ]),
  ]),

  env('production', [
    splitVendor(),
    addPlugins([
      new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    ]),
  ]),
]);

module.exports = client;
