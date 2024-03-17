import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { toggleSidebar } from '../features/sidebar/sidebarSlice';
import { links } from '../utils';

const NavLinks = () => {
  const dispatch = useDispatch();

  return (
    <div className="nav-links">
      {links.map((link) => {
        const { id, icon, text, path } = link;
        return (
          <NavLink
            to={path}
            key={id}
            end
            className={({ isActive }) => {
              return isActive ? 'nav-link active ' : 'nav-link';
            }}
            onClick={() => dispatch(toggleSidebar())}
          >
            <span className="icon">{icon}</span>
            <span>{text}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
