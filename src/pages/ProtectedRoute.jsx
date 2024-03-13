import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.userState);

  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.element,
};

export default ProtectedRoute;
