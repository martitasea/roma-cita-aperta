import PropTypes from 'prop-types';

export const poiFeature = PropTypes.shape({
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  style: PropTypes.string,
  price: PropTypes.string,
  web: PropTypes.string,
  image: PropTypes.string,
  plan: PropTypes.string,
  doc: PropTypes.string,
  book: PropTypes.string,
  alert_timetable: PropTypes.string,
  alert_visit: PropTypes.string,
  timetable: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    opening: PropTypes.shape({
      open: PropTypes.string,
      closed: PropTypes.string
    })
  })),
});