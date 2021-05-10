export const getLoginDetails = (state) => {
  const { loading, isLoggedIn, error } = state.login;
  return {
    loading,
    isLoggedIn,
    error
  };
};
