var invert = require('invert-obj');

function LegProvisionCalculationAgent (legProvisionCalculationAgent) {
  this.message = legProvisionCalculationAgent;
}

LegProvisionCalculationAgent.prototype.value = function () {
  return this.message;
};

LegProvisionCalculationAgent.Tag = '40456';

LegProvisionCalculationAgent.Type = 'INT';

module.exports = LegProvisionCalculationAgent;