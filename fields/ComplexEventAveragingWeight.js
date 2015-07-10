var invert = require('invert-obj');

function ComplexEventAveragingWeight (complexEventAveragingWeight) {
  this.message = complexEventAveragingWeight;
}

ComplexEventAveragingWeight.prototype.value = function () {
  return this.message;
};

ComplexEventAveragingWeight.Tag = '40996';

ComplexEventAveragingWeight.Type = 'FLOAT';

module.exports = ComplexEventAveragingWeight;