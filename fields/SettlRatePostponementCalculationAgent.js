var invert = require('invert-obj');

function SettlRatePostponementCalculationAgent (settlRatePostponementCalculationAgent) {
  this.message = settlRatePostponementCalculationAgent;
}

SettlRatePostponementCalculationAgent.prototype.value = function () {
  return this.message;
};

SettlRatePostponementCalculationAgent.Tag = '40089';

SettlRatePostponementCalculationAgent.Type = 'INT';

module.exports = SettlRatePostponementCalculationAgent;