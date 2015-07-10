var invert = require('invert-obj');

function ComplexEventDateBusinessDayConvention (complexEventDateBusinessDayConvention) {
  this.message = complexEventDateBusinessDayConvention;
}

ComplexEventDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

ComplexEventDateBusinessDayConvention.Tag = '41025';

ComplexEventDateBusinessDayConvention.Type = 'INT';

module.exports = ComplexEventDateBusinessDayConvention;