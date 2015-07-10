var invert = require('invert-obj');

function InstrumentRoundingDirection (instrumentRoundingDirection) {
  this.message = instrumentRoundingDirection;
}

InstrumentRoundingDirection.prototype.value = function () {
  return this.message;
};

InstrumentRoundingDirection.Tag = '2144';

InstrumentRoundingDirection.Type = 'INT';

module.exports = InstrumentRoundingDirection;