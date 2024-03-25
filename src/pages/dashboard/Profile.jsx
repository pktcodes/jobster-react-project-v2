import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { FormRow } from '../../components';
import { updateUser } from '../../features/user/userSlice';

import Wrapper from './wrappers/FormStyles';

const Profile = () => {
  const { isLoading, user } = useSelector((state) => state.userState);
  const dispatch = useDispatch();

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
      toast.error('please fill out all the fields');
      return;
    }
    dispatch(
      updateUser({
        name: name,
        lastName: lastName,
        email: email,
        location: location,
      })
    );
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile</h3>
        <div className="form-center">
          {/* NAME */}
          <FormRow
            label="name"
            type="text"
            name="name"
            value={userData.name}
            handleChange={handleChange}
          />
          {/* LAST NAME */}
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

export default Profile;
