var invert = require('invert-obj');

function UnderlyingInstrumentPartySubIDType (underlyingInstrumentPartySubIdtype) {
  this.message = underlyingInstrumentPartySubIdtype;
}

UnderlyingInstrumentPartySubIDType.prototype.value = function () {
  return this.message;
};

UnderlyingInstrumentPartySubIDType.Tag = '1064';

UnderlyingInstrumentPartySubIDType.Type = 'INT';

module.exports = UnderlyingInstrumentPartySubIDType;