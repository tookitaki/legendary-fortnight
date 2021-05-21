export const getLoginDetails = ({
  login: { loading, token, userId, name, error }
}) => ({
  loading,
  token,
  userId,
  name,
  error
});
