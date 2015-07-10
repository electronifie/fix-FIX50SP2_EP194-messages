var invert = require('invert-obj');

function UnderlyingInstrumentRoundingDirection (underlyingInstrumentRoundingDirection) {
  this.message = underlyingInstrumentRoundingDirection;
}

UnderlyingInstrumentRoundingDirection.prototype.value = function () {
  return this.message;
};

UnderlyingInstrumentRoundingDirection.Tag = '2298';

UnderlyingInstrumentRoundingDirection.Type = 'INT';

module.exports = UnderlyingInstrumentRoundingDirection;