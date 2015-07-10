var invert = require('invert-obj');

function LegComplexEventCalculationAgent (legComplexEventCalculationAgent) {
  this.message = legComplexEventCalculationAgent;
}

LegComplexEventCalculationAgent.prototype.value = function () {
  return this.message;
};

LegComplexEventCalculationAgent.Tag = '2238';

LegComplexEventCalculationAgent.Type = 'INT';

module.exports = LegComplexEventCalculationAgent;