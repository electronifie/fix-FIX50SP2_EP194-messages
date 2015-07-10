var invert = require('invert-obj');

function ComplexEventCalculationAgent (complexEventCalculationAgent) {
  this.message = complexEventCalculationAgent;
}

ComplexEventCalculationAgent.prototype.value = function () {
  return this.message;
};

ComplexEventCalculationAgent.Tag = '2129';

ComplexEventCalculationAgent.Type = 'INT';

module.exports = ComplexEventCalculationAgent;