var invert = require('invert-obj');

function ComplexEventDateOffsetPeriod (complexEventDateOffsetPeriod) {
  this.message = complexEventDateOffsetPeriod;
}

ComplexEventDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

ComplexEventDateOffsetPeriod.Tag = '41022';

ComplexEventDateOffsetPeriod.Type = 'INT';

module.exports = ComplexEventDateOffsetPeriod;