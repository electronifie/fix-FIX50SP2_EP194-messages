var invert = require('invert-obj');

function ComplexEventBusinessCenter (complexEventBusinessCenter) {
  this.message = complexEventBusinessCenter;
}

ComplexEventBusinessCenter.prototype.value = function () {
  return this.message;
};

ComplexEventBusinessCenter.Tag = '41012';

ComplexEventBusinessCenter.Type = 'STRING';

module.exports = ComplexEventBusinessCenter;