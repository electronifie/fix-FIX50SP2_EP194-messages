var invert = require('invert-obj');

function InstrumentRoundingPrecision (instrumentRoundingPrecision) {
  this.message = instrumentRoundingPrecision;
}

InstrumentRoundingPrecision.prototype.value = function () {
  return this.message;
};

InstrumentRoundingPrecision.Tag = '2145';

InstrumentRoundingPrecision.Type = 'INT';

module.exports = InstrumentRoundingPrecision;