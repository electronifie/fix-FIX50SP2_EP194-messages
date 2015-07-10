var invert = require('invert-obj');

function UnderlyingComplexEventCalculationAgent (underlyingComplexEventCalculationAgent) {
  this.message = underlyingComplexEventCalculationAgent;
}

UnderlyingComplexEventCalculationAgent.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventCalculationAgent.Tag = '2273';

UnderlyingComplexEventCalculationAgent.Type = 'INT';

module.exports = UnderlyingComplexEventCalculationAgent;