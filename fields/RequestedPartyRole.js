var invert = require('invert-obj');

function RequestedPartyRole (requestedPartyRole) {
  this.message = requestedPartyRole;
}

RequestedPartyRole.prototype.value = function () {
  return this.message;
};

RequestedPartyRole.Tag = '1509';

RequestedPartyRole.Type = 'INT';

module.exports = RequestedPartyRole;