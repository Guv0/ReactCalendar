import moment from 'moment';

export const formatDate = function(d) {
  return moment(d).format('Do MMMM YYYY, hh:mm a');
}
