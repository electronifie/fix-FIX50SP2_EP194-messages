var invert = require('invert-obj');

function LegInstrumentRoundingPrecision (legInstrumentRoundingPrecision) {
  this.message = legInstrumentRoundingPrecision;
}

LegInstrumentRoundingPrecision.prototype.value = function () {
  return this.message;
};

LegInstrumentRoundingPrecision.Tag = '2215';

LegInstrumentRoundingPrecision.Type = 'INT';

module.exports = LegInstrumentRoundingPrecision;