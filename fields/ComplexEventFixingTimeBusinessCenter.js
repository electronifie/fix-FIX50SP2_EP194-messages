var invert = require('invert-obj');

function ComplexEventFixingTimeBusinessCenter (complexEventFixingTimeBusinessCenter) {
  this.message = complexEventFixingTimeBusinessCenter;
}

ComplexEventFixingTimeBusinessCenter.prototype.value = function () {
  return this.message;
};

ComplexEventFixingTimeBusinessCenter.Tag = '41028';

ComplexEventFixingTimeBusinessCenter.Type = 'STRING';

module.exports = ComplexEventFixingTimeBusinessCenter;