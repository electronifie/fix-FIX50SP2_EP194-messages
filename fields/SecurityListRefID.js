var invert = require('invert-obj');

function SecurityListRefID (securityListRefId) {
  this.message = securityListRefId;
}

SecurityListRefID.prototype.value = function () {
  return this.message;
};

SecurityListRefID.Tag = '1466';

SecurityListRefID.Type = 'STRING';

module.exports = SecurityListRefID;