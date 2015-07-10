var invert = require('invert-obj');

function NoComplexEventPeriods (noComplexEventPeriods) {
  this.message = noComplexEventPeriods;
}

NoComplexEventPeriods.prototype.value = function () {
  return this.message;
};

NoComplexEventPeriods.Tag = '41010';

NoComplexEventPeriods.Type = 'NUMINGROUP';

module.exports = NoComplexEventPeriods;