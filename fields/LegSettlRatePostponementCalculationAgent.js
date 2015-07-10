var invert = require('invert-obj');

function LegSettlRatePostponementCalculationAgent (legSettlRatePostponementCalculationAgent) {
  this.message = legSettlRatePostponementCalculationAgent;
}

LegSettlRatePostponementCalculationAgent.prototype.value = function () {
  return this.message;
};

LegSettlRatePostponementCalculationAgent.Tag = '40906';

LegSettlRatePostponementCalculationAgent.Type = 'INT';

module.exports = LegSettlRatePostponementCalculationAgent;