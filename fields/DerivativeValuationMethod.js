var invert = require('invert-obj');

function DerivativeValuationMethod (derivativeValuationMethod) {
  this.message = derivativeValuationMethod;
}

DerivativeValuationMethod.prototype.value = function () {
  return this.message;
};

DerivativeValuationMethod.Tag = '1319';

DerivativeValuationMethod.Type = 'STRING';

module.exports = DerivativeValuationMethod;