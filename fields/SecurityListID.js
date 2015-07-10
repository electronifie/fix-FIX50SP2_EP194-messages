var invert = require('invert-obj');

function SecurityListID (securityListId) {
  this.message = securityListId;
}

SecurityListID.prototype.value = function () {
  return this.message;
};

SecurityListID.Tag = '1465';

SecurityListID.Type = 'STRING';

module.exports = SecurityListID;