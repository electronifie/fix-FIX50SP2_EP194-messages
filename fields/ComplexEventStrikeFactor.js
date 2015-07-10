var invert = require('invert-obj');

function ComplexEventStrikeFactor (complexEventStrikeFactor) {
  this.message = complexEventStrikeFactor;
}

ComplexEventStrikeFactor.prototype.value = function () {
  return this.message;
};

ComplexEventStrikeFactor.Tag = '2131';

ComplexEventStrikeFactor.Type = 'FLOAT';

module.exports = ComplexEventStrikeFactor;