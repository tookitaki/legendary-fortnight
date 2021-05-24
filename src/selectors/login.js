export const getLoginDetails = (state) => {
  const { loading, isLoggedIn, data, error } = state.login;
  return {
    loading,
    isLoggedIn,
    error,
    data
  };
};
