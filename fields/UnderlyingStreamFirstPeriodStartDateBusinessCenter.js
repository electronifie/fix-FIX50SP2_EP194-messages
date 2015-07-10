var invert = require('invert-obj');

function UnderlyingStreamFirstPeriodStartDateBusinessCenter (underlyingStreamFirstPeriodStartDateBusinessCenter) {
  this.message = underlyingStreamFirstPeriodStartDateBusinessCenter;
}

UnderlyingStreamFirstPeriodStartDateBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingStreamFirstPeriodStartDateBusinessCenter.Tag = '40560';

UnderlyingStreamFirstPeriodStartDateBusinessCenter.Type = 'STRING';

module.exports = UnderlyingStreamFirstPeriodStartDateBusinessCenter;