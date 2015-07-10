var invert = require('invert-obj');

function NoLegComplexEventSchedules (noLegComplexEventSchedules) {
  this.message = noLegComplexEventSchedules;
}

NoLegComplexEventSchedules.prototype.value = function () {
  return this.message;
};

NoLegComplexEventSchedules.Tag = '41400';

NoLegComplexEventSchedules.Type = 'NUMINGROUP';

module.exports = NoLegComplexEventSchedules;