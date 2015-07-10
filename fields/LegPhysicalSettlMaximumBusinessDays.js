var invert = require('invert-obj');

function LegPhysicalSettlMaximumBusinessDays (legPhysicalSettlMaximumBusinessDays) {
  this.message = legPhysicalSettlMaximumBusinessDays;
}

LegPhysicalSettlMaximumBusinessDays.prototype.value = function () {
  return this.message;
};

LegPhysicalSettlMaximumBusinessDays.Tag = '41603';

LegPhysicalSettlMaximumBusinessDays.Type = 'INT';

module.exports = LegPhysicalSettlMaximumBusinessDays;