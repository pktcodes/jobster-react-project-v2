import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { links } from '../utils';

const Links = ({ closeSidebar }) => {
  const dispatch = useDispatch();

  return (
    <div className="links">
      {links.map((link) => {
        const { id, icon, text, path } = link;
        return (
          <NavLink
            to={path}
            key={id}
            end
            className={({ isActive }) => {
              return isActive ? 'link active' : 'link';
            }}
            onClick={() => {
              closeSidebar ? dispatch(closeSidebar()) : null;
            }}
          >
            <span className="icon">{icon}</span>
            <span>{text}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

Links.propTypes = {
  closeSidebar: PropTypes.func,
};

export default Links;
