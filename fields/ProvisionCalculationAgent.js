var invert = require('invert-obj');

function ProvisionCalculationAgent (provisionCalculationAgent) {
  this.message = provisionCalculationAgent;
}

ProvisionCalculationAgent.prototype.value = function () {
  return this.message;
};


ProvisionCalculationAgent.Keys = {
  'EXERCISING_PARTY': '0',
  'NON_EXERCISING_PARTY': '1',
  'AS_SPECIFIED_IN_THE_MASTER_AGREEMENT': '2',
  'AS_SPECIFIED_IN_THE_STANDARD_TERMS_SUPPLEMENT': '3',
};

ProvisionCalculationAgent.Tag = '40098';

ProvisionCalculationAgent.Type = 'INT';

ProvisionCalculationAgent.Values = invert(ProvisionCalculationAgent.Keys);

module.exports = ProvisionCalculationAgent;