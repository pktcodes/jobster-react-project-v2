import { customFetch } from '../../utils';
import { logoutUser } from '../user/userSlice';

export const getAllJobsThunk = async (_, thunkAPI) => {
  const { search, status, jobType, sort, page } =
    thunkAPI.getState().allJobsState;

  /* Alternative */
  // const url = `/jobs?search=${search}&status=${status}&jobType=${jobType}&sort=${sort}&page=${page}`;

  try {
    const response = await customFetch.get('/jobs', {
      headers: {
        Authorization: `Bearer ${thunkAPI.getState().userState.user.token}`,
      },
      params: {
        search: search,
        status: status,
        jobType: jobType,
        sort: sort,
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error.response);
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue('Unauthorized! Logging out...');
    }
    return thunkAPI.rejectWithValue(
      error.response.data.msg || 'There was an error'
    );
  }
};
