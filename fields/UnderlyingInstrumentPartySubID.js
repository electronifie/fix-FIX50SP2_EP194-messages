var invert = require('invert-obj');

function UnderlyingInstrumentPartySubID (underlyingInstrumentPartySubId) {
  this.message = underlyingInstrumentPartySubId;
}

UnderlyingInstrumentPartySubID.prototype.value = function () {
  return this.message;
};

UnderlyingInstrumentPartySubID.Tag = '1063';

UnderlyingInstrumentPartySubID.Type = 'STRING';

module.exports = UnderlyingInstrumentPartySubID;