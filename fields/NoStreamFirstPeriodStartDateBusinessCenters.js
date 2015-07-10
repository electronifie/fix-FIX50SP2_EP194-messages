var invert = require('invert-obj');

function NoStreamFirstPeriodStartDateBusinessCenters (noStreamFirstPeriodStartDateBusinessCenters) {
  this.message = noStreamFirstPeriodStartDateBusinessCenters;
}

NoStreamFirstPeriodStartDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoStreamFirstPeriodStartDateBusinessCenters.Tag = '40959';

NoStreamFirstPeriodStartDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoStreamFirstPeriodStartDateBusinessCenters;