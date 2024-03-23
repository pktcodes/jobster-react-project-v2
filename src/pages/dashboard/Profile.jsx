import { useState } from 'react';

import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import { FormRow } from '../../components';

/* PATCH */
const endpoint = '/auth/updateUser';

const Profile = () => {
  const { isLoading, user } = useSelector((state) => state.userState);

  const [userData, setUserData] = useState({
    name: user?.name || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    location: user?.location || '',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, lastName, email, location } = userData;
    if (!name || !lastName || !email || !location) {
      toast.error('please provide all the values');
      return;
    }
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile</h3>
        <div className="form-center">
          <FormRow
            label="name"
            type="text"
            name="name"
            value={userData.name}
            handleChange={handleChange}
          />
          <FormRow
            label="last name"
            type="text"
            name="lastName"
            value={userData.lastName}
            handleChange={handleChange}
          />
          <FormRow
            label="email"
            type="email"
            name="email"
            value={userData.email}
            handleChange={handleChange}
          />
          <FormRow
            label="location"
            type="text"
            name="location"
            value={userData.location}
            handleChange={handleChange}
          />
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {isLoading ? 'please wait...' : 'save changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);
  h3 {
    margin-top: 0;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
`;

export default Profile;
