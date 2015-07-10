var invert = require('invert-obj');

function PhysicalSettlBusinessDays (physicalSettlBusinessDays) {
  this.message = physicalSettlBusinessDays;
}

PhysicalSettlBusinessDays.prototype.value = function () {
  return this.message;
};

PhysicalSettlBusinessDays.Tag = '40206';

PhysicalSettlBusinessDays.Type = 'INT';

module.exports = PhysicalSettlBusinessDays;