var invert = require('invert-obj');

function NoComplexEventDates (noComplexEventDates) {
  this.message = noComplexEventDates;
}

NoComplexEventDates.prototype.value = function () {
  return this.message;
};

NoComplexEventDates.Tag = '1491';

NoComplexEventDates.Type = 'NUMINGROUP';

module.exports = NoComplexEventDates;