// @flow
import Fetch from '../../utils/fetch';
import config from '../../config';

export function get(type: string, params: Object) {
  return Fetch.get(`${type}/`, {
    params,
  });
}

export function create(type: string, id:String) {
  return Fetch(`${config.api}/${type}/delete/${id.toString()}`);
}

export function remove(type: string, id:String) {
  return Fetch(`${config.api}/${type}/delete/${id.toString()}`);
}

export function save(type: string, id:String, data:Object) {
  return Fetch(`${config.api}/${type}/update/${id.toString()}/${data.toString()}`);
}
