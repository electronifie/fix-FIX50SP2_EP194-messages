var invert = require('invert-obj');

function ComplexEventRateSource (complexEventRateSource) {
  this.message = complexEventRateSource;
}

ComplexEventRateSource.prototype.value = function () {
  return this.message;
};

ComplexEventRateSource.Tag = '41014';

ComplexEventRateSource.Type = 'INT';

module.exports = ComplexEventRateSource;