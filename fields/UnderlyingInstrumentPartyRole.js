var invert = require('invert-obj');

function UnderlyingInstrumentPartyRole (underlyingInstrumentPartyRole) {
  this.message = underlyingInstrumentPartyRole;
}

UnderlyingInstrumentPartyRole.prototype.value = function () {
  return this.message;
};

UnderlyingInstrumentPartyRole.Tag = '1061';

UnderlyingInstrumentPartyRole.Type = 'INT';

module.exports = UnderlyingInstrumentPartyRole;