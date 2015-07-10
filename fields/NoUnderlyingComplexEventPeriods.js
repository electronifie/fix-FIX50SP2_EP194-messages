var invert = require('invert-obj');

function NoUnderlyingComplexEventPeriods (noUnderlyingComplexEventPeriods) {
  this.message = noUnderlyingComplexEventPeriods;
}

NoUnderlyingComplexEventPeriods.prototype.value = function () {
  return this.message;
};

NoUnderlyingComplexEventPeriods.Tag = '41729';

NoUnderlyingComplexEventPeriods.Type = 'NUMINGROUP';

module.exports = NoUnderlyingComplexEventPeriods;