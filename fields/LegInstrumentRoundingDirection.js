var invert = require('invert-obj');

function LegInstrumentRoundingDirection (legInstrumentRoundingDirection) {
  this.message = legInstrumentRoundingDirection;
}

LegInstrumentRoundingDirection.prototype.value = function () {
  return this.message;
};

LegInstrumentRoundingDirection.Tag = '2214';

LegInstrumentRoundingDirection.Type = 'INT';

module.exports = LegInstrumentRoundingDirection;