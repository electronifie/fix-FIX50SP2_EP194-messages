var invert = require('invert-obj');

function RequestingPartyRole (requestingPartyRole) {
  this.message = requestingPartyRole;
}

RequestingPartyRole.prototype.value = function () {
  return this.message;
};

RequestingPartyRole.Tag = '1660';

RequestingPartyRole.Type = 'INT';

module.exports = RequestingPartyRole;