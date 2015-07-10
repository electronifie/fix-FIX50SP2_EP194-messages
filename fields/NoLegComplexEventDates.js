var invert = require('invert-obj');

function NoLegComplexEventDates (noLegComplexEventDates) {
  this.message = noLegComplexEventDates;
}

NoLegComplexEventDates.prototype.value = function () {
  return this.message;
};

NoLegComplexEventDates.Tag = '2250';

NoLegComplexEventDates.Type = 'NUMINGROUP';

module.exports = NoLegComplexEventDates;