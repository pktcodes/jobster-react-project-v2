import PropTypes from 'prop-types';

const Loading = ({ center }) => {
  return <div className={center ? 'loading loading-center' : 'loading'}></div>;
};

Loading.propTypes = {
  center: PropTypes.bool,
};

export default Loading;
