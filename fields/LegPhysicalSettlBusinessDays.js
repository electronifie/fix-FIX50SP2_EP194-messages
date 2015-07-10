var invert = require('invert-obj');

function LegPhysicalSettlBusinessDays (legPhysicalSettlBusinessDays) {
  this.message = legPhysicalSettlBusinessDays;
}

LegPhysicalSettlBusinessDays.prototype.value = function () {
  return this.message;
};

LegPhysicalSettlBusinessDays.Tag = '41602';

LegPhysicalSettlBusinessDays.Type = 'INT';

module.exports = LegPhysicalSettlBusinessDays;