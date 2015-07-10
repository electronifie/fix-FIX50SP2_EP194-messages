var invert = require('invert-obj');

function ComplexEventDateAdjusted (complexEventDateAdjusted) {
  this.message = complexEventDateAdjusted;
}

ComplexEventDateAdjusted.prototype.value = function () {
  return this.message;
};

ComplexEventDateAdjusted.Tag = '41026';

ComplexEventDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = ComplexEventDateAdjusted;