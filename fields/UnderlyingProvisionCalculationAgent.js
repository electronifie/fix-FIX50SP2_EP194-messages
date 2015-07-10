var invert = require('invert-obj');

function UnderlyingProvisionCalculationAgent (underlyingProvisionCalculationAgent) {
  this.message = underlyingProvisionCalculationAgent;
}

UnderlyingProvisionCalculationAgent.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionCalculationAgent.Tag = '42156';

UnderlyingProvisionCalculationAgent.Type = 'INT';

module.exports = UnderlyingProvisionCalculationAgent;