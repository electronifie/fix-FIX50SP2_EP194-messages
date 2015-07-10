var invert = require('invert-obj');

function UnderlyingInstrumentPartyID (underlyingInstrumentPartyId) {
  this.message = underlyingInstrumentPartyId;
}

UnderlyingInstrumentPartyID.prototype.value = function () {
  return this.message;
};

UnderlyingInstrumentPartyID.Tag = '1059';

UnderlyingInstrumentPartyID.Type = 'STRING';

module.exports = UnderlyingInstrumentPartyID;