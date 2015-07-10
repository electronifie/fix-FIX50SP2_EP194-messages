var invert = require('invert-obj');

function NoUnderlyingComplexEventDates (noUnderlyingComplexEventDates) {
  this.message = noUnderlyingComplexEventDates;
}

NoUnderlyingComplexEventDates.prototype.value = function () {
  return this.message;
};

NoUnderlyingComplexEventDates.Tag = '2053';

NoUnderlyingComplexEventDates.Type = 'NUMINGROUP';

module.exports = NoUnderlyingComplexEventDates;