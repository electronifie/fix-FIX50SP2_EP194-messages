var invert = require('invert-obj');

function ComplexEventStrikeNumberOfOptions (complexEventStrikeNumberOfOptions) {
  this.message = complexEventStrikeNumberOfOptions;
}

ComplexEventStrikeNumberOfOptions.prototype.value = function () {
  return this.message;
};

ComplexEventStrikeNumberOfOptions.Tag = '2132';

ComplexEventStrikeNumberOfOptions.Type = 'INT';

module.exports = ComplexEventStrikeNumberOfOptions;