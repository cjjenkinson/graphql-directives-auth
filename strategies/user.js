const adminStrategy = require('./admin');

const USER_SECRET = 'JsRoundabout';

const userStrategy = (requestData = {}) => {
  const isAdmin = adminStrategy(requestData);
  if(isAdmin) {
    return true;
  }

  const { headers } = requestData;

  if (!headers || !headers.authorization) {
    return false;
  }

  const authHeader = headers.authorization;
  return authHeader === USER_SECRET;
};

module.exports = userStrategy;
