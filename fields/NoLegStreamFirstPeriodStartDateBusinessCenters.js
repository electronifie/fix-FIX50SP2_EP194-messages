var invert = require('invert-obj');

function NoLegStreamFirstPeriodStartDateBusinessCenters (noLegStreamFirstPeriodStartDateBusinessCenters) {
  this.message = noLegStreamFirstPeriodStartDateBusinessCenters;
}

NoLegStreamFirstPeriodStartDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoLegStreamFirstPeriodStartDateBusinessCenters.Tag = '40941';

NoLegStreamFirstPeriodStartDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoLegStreamFirstPeriodStartDateBusinessCenters;