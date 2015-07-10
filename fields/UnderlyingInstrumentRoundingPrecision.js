var invert = require('invert-obj');

function UnderlyingInstrumentRoundingPrecision (underlyingInstrumentRoundingPrecision) {
  this.message = underlyingInstrumentRoundingPrecision;
}

UnderlyingInstrumentRoundingPrecision.prototype.value = function () {
  return this.message;
};

UnderlyingInstrumentRoundingPrecision.Tag = '2299';

UnderlyingInstrumentRoundingPrecision.Type = 'INT';

module.exports = UnderlyingInstrumentRoundingPrecision;