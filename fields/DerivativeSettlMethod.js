var invert = require('invert-obj');

function DerivativeSettlMethod (derivativeSettlMethod) {
  this.message = derivativeSettlMethod;
}

DerivativeSettlMethod.prototype.value = function () {
  return this.message;
};

DerivativeSettlMethod.Tag = '1317';

DerivativeSettlMethod.Type = 'STRING';

module.exports = DerivativeSettlMethod;