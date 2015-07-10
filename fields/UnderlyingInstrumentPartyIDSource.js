var invert = require('invert-obj');

function UnderlyingInstrumentPartyIDSource (underlyingInstrumentPartyIdsource) {
  this.message = underlyingInstrumentPartyIdsource;
}

UnderlyingInstrumentPartyIDSource.prototype.value = function () {
  return this.message;
};

UnderlyingInstrumentPartyIDSource.Tag = '1060';

UnderlyingInstrumentPartyIDSource.Type = 'CHAR';

module.exports = UnderlyingInstrumentPartyIDSource;