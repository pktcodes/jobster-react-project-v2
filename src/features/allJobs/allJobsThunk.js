import { customFetch, validateAuthorization } from '../../utils';

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
    return validateAuthorization(error, thunkAPI);
  }
};
