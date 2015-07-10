var invert = require('invert-obj');

function RequestingPartySubIDType (requestingPartySubIdtype) {
  this.message = requestingPartySubIdtype;
}

RequestingPartySubIDType.prototype.value = function () {
  return this.message;
};

RequestingPartySubIDType.Tag = '1663';

RequestingPartySubIDType.Type = 'INT';

module.exports = RequestingPartySubIDType;