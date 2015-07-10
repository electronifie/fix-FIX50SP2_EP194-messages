var invert = require('invert-obj');

function UnderlyingComplexEventStrikeFactor (underlyingComplexEventStrikeFactor) {
  this.message = underlyingComplexEventStrikeFactor;
}

UnderlyingComplexEventStrikeFactor.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventStrikeFactor.Tag = '2275';

UnderlyingComplexEventStrikeFactor.Type = 'FLOAT';

module.exports = UnderlyingComplexEventStrikeFactor;