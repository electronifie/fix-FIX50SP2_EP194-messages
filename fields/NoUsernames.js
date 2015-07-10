var invert = require('invert-obj');

function NoUsernames (noUsernames) {
  this.message = noUsernames;
}

NoUsernames.prototype.value = function () {
  return this.message;
};

NoUsernames.Tag = '809';

NoUsernames.Type = 'NUMINGROUP';

module.exports = NoUsernames;