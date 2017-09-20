import React from 'react';
import styled, { css } from 'styled-components';

const LoaderAnimation = css`
.cssload-fond{
	position:relative;
	margin: auto;
}

.cssload-container-general
{
	animation:cssload-animball_two 1.15s infinite;
		-o-animation:cssload-animball_two 1.15s infinite;
		-ms-animation:cssload-animball_two 1.15s infinite;
		-webkit-animation:cssload-animball_two 1.15s infinite;
		-moz-animation:cssload-animball_two 1.15s infinite;
	width:25px; height:25px;
}
.cssload-internal
{
	width:25px; height:25px; position:absolute;
}
.cssload-ballcolor
{
	width: 11px;
	height: 11px;
	border-radius: 50%;
}
.cssload-ball_1, .cssload-ball_2, .cssload-ball_3, .cssload-ball_4
{
	position: absolute;
	animation:cssload-animball_one 1.15s infinite ease;
		-o-animation:cssload-animball_one 1.15s infinite ease;
		-ms-animation:cssload-animball_one 1.15s infinite ease;
		-webkit-animation:cssload-animball_one 1.15s infinite ease;
		-moz-animation:cssload-animball_one 1.15s infinite ease;
}
.cssload-ball_1
{
	background-color:rgb(203,32,37);
	top:0; left:0;
}
.cssload-ball_2
{
	background-color:rgb(248,179,52);
	top:0; left:14px;
}
.cssload-ball_3
{
	background-color:rgb(0,160,150);
	top:14px; left:0;
}
.cssload-ball_4
{
	background-color:rgb(151,191,13);
	top:14px; left:14px;
}





@keyframes cssload-animball_one
{
	0%{ position: absolute;}
	50%{top:7px; left:7px; position: absolute;opacity:0.5;}
	100%{ position: absolute;}
}

@-o-keyframes cssload-animball_one
{
	0%{ position: absolute;}
	50%{top:7px; left:7px; position: absolute;opacity:0.5;}
	100%{ position: absolute;}
}

@-ms-keyframes cssload-animball_one
{
	0%{ position: absolute;}
	50%{top:7px; left:7px; position: absolute;opacity:0.5;}
	100%{ position: absolute;}
}

@-webkit-keyframes cssload-animball_one
{
	0%{ position: absolute;}
	50%{top:7px; left:7px; position: absolute;opacity:0.5;}
	100%{ position: absolute;}
}

@-moz-keyframes cssload-animball_one
{
	0%{ position: absolute;}
	50%{top:7px; left:7px; position: absolute;opacity:0.5;}
	100%{ position: absolute;}
}

@keyframes cssload-animball_two
{
	0%{transform:rotate(0deg) scale(1);}
	50%{transform:rotate(360deg) scale(1.3);}
	100%{transform:rotate(720deg) scale(1);}
}

@-o-keyframes cssload-animball_two
{
	0%{-o-transform:rotate(0deg) scale(1);}
	50%{-o-transform:rotate(360deg) scale(1.3);}
	100%{-o-transform:rotate(720deg) scale(1);}
}

@-ms-keyframes cssload-animball_two
{
	0%{-ms-transform:rotate(0deg) scale(1);}
	50%{-ms-transform:rotate(360deg) scale(1.3);}
	100%{-ms-transform:rotate(720deg) scale(1);}
}

@-webkit-keyframes cssload-animball_two
{
	0%{-webkit-transform:rotate(0deg) scale(1);}
	50%{-webkit-transform:rotate(360deg) scale(1.3);}
	100%{-webkit-transform:rotate(720deg) scale(1);}
}

@-moz-keyframes cssload-animball_two
{
	0%{-moz-transform:rotate(0deg) scale(1);}
	50%{-moz-transform:rotate(360deg) scale(1.3);}
	100%{-moz-transform:rotate(720deg) scale(1);}
}
`;

const LoaderStyle = styled.div`
  ${LoaderAnimation}
`;

export const Loader = () => {
  return (
    <LoaderStyle align="center" className="cssload-fond">
      <div className="cssload-container-general">
        <div className="cssload-internal"><div className="cssload-ballcolor cssload-ball_1"> </div></div>
        <div className="cssload-internal"><div className="cssload-ballcolor cssload-ball_2"> </div></div>
        <div className="cssload-internal"><div className="cssload-ballcolor cssload-ball_3"> </div></div>
        <div className="cssload-internal"><div className="cssload-ballcolor cssload-ball_4"> </div></div>
      </div>
    </LoaderStyle>
  );
};
