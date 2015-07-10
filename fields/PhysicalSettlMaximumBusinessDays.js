var invert = require('invert-obj');

function PhysicalSettlMaximumBusinessDays (physicalSettlMaximumBusinessDays) {
  this.message = physicalSettlMaximumBusinessDays;
}

PhysicalSettlMaximumBusinessDays.prototype.value = function () {
  return this.message;
};

PhysicalSettlMaximumBusinessDays.Tag = '40207';

PhysicalSettlMaximumBusinessDays.Type = 'INT';

module.exports = PhysicalSettlMaximumBusinessDays;