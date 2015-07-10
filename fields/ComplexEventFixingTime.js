var invert = require('invert-obj');

function ComplexEventFixingTime (complexEventFixingTime) {
  this.message = complexEventFixingTime;
}

ComplexEventFixingTime.prototype.value = function () {
  return this.message;
};

ComplexEventFixingTime.Tag = '41027';

ComplexEventFixingTime.Type = 'LOCALMKTTIME';

module.exports = ComplexEventFixingTime;