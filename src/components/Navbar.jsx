import { FaAlignLeft, FaCaretDown, FaUserCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { toggleSidebar } from '../features/sidebar/sidebarSlice';
import Logo from './Logo';

const Navbar = () => {
  const { user } = useSelector((state) => state.userState);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className="nav-center">
        {/* TOGGLE BUTTON */}
        <button
          type="button"
          className="toggle-btn"
          onClick={() => dispatch(toggleSidebar())}
        >
          <FaAlignLeft />
        </button>

        {/* LOGO */}
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>

        {/* TOGGLE DROPDOWN - LOGOUT */}
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => console.log('Toggle Logout Dropdown')}
          >
            <FaUserCircle />
            <span>{user?.name}</span>
            <FaCaretDown />
          </button>
          <div className="dropdown show-dropdown">
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => console.log('Logout User Clicked')}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  background: var(--white);
  .btn-container {
    position: relative;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
  }

  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }
  .logo-text {
    display: none;
    margin: 0;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;

    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`;

export default Navbar;
