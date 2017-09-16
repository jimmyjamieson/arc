// @flow
import Fetch from '../../utils/fetch';
import config from '../../config';

export function getPeople(params: Object) {
  return Fetch.get('people/', {
    params,
  });
}

export function deletePerson(id:String) {
  return Fetch(`${config.api}/people/delete/${id.toString()}`);
}

export function savePerson(id:String, data:Object) {
  return Fetch(`${config.api}/people/update/${id.toString()}/${data.toString()}`);
}
