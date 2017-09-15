import moment from 'moment';

export function shortDate(date) {
  return moment(date).format('ddd, hA');
}

export function longDate(date) {
  return moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a');
}
