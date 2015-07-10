var invert = require('invert-obj');

function LegInstrumentPartyIDSource (legInstrumentPartyIdsource) {
  this.message = legInstrumentPartyIdsource;
}

LegInstrumentPartyIDSource.prototype.value = function () {
  return this.message;
};

LegInstrumentPartyIDSource.Tag = '2256';

LegInstrumentPartyIDSource.Type = 'CHAR';

module.exports = LegInstrumentPartyIDSource;