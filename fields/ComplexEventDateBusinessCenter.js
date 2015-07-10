var invert = require('invert-obj');

function ComplexEventDateBusinessCenter (complexEventDateBusinessCenter) {
  this.message = complexEventDateBusinessCenter;
}

ComplexEventDateBusinessCenter.prototype.value = function () {
  return this.message;
};

ComplexEventDateBusinessCenter.Tag = '41019';

ComplexEventDateBusinessCenter.Type = 'STRING';

module.exports = ComplexEventDateBusinessCenter;