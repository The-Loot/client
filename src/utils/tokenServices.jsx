// Gets the token from local storage
function getToken() {
  const token = localStorage.getItem('app-token');
  if (!token) {
    return null;
  }
  return token;
}

// Remove token from local storage ex: Logging out
function removeToken() {
  localStorage.removeItem('app-token');
}

module.exports = {
  getToken,
  removeToken,
};
