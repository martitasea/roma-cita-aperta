import PropTypes from 'prop-types';

export const poiFeature = PropTypes.shape({
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  style: PropTypes.string,
  price: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  web: PropTypes.string,
  image: PropTypes.string,
  plan: PropTypes.string,
  doc: PropTypes.string,
  book: PropTypes.string,
  alert_timetable: PropTypes.string,
  alert_visit: PropTypes.string,
  timetable: PropTypes.string,
  /*timetable: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    open: PropTypes.arrayOf(PropTypes.string).isRequired,
    close: PropTypes.arrayOf(PropTypes.string).isRequired,
  })),*/
});