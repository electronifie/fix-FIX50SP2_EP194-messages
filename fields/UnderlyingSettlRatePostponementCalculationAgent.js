var invert = require('invert-obj');

function UnderlyingSettlRatePostponementCalculationAgent (underlyingSettlRatePostponementCalculationAgent) {
  this.message = underlyingSettlRatePostponementCalculationAgent;
}

UnderlyingSettlRatePostponementCalculationAgent.prototype.value = function () {
  return this.message;
};

UnderlyingSettlRatePostponementCalculationAgent.Tag = '40663';

UnderlyingSettlRatePostponementCalculationAgent.Type = 'INT';

module.exports = UnderlyingSettlRatePostponementCalculationAgent;