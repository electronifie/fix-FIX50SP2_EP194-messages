var invert = require('invert-obj');

function ComplexEventDateOffsetUnit (complexEventDateOffsetUnit) {
  this.message = complexEventDateOffsetUnit;
}

ComplexEventDateOffsetUnit.prototype.value = function () {
  return this.message;
};

ComplexEventDateOffsetUnit.Tag = '41023';

ComplexEventDateOffsetUnit.Type = 'STRING';

module.exports = ComplexEventDateOffsetUnit;