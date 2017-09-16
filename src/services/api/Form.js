
// import fetch from 'isomorphic-fetch';
// import config from '../config';

export function getForm() {
  return [
    {
      name: 'fieldName',
    },
    {
      name: 'fieldName2',
    },
  ];
}

export function saveForm(data) {
  return window.alert(data);
}
