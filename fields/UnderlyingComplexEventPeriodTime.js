var invert = require('invert-obj');

function UnderlyingComplexEventPeriodTime (underlyingComplexEventPeriodTime) {
  this.message = underlyingComplexEventPeriodTime;
}

UnderlyingComplexEventPeriodTime.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventPeriodTime.Tag = '41728';

UnderlyingComplexEventPeriodTime.Type = 'LOCALMKTTIME';

module.exports = UnderlyingComplexEventPeriodTime;