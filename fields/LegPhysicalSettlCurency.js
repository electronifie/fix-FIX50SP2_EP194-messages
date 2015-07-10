var invert = require('invert-obj');

function LegPhysicalSettlCurency (legPhysicalSettlCurency) {
  this.message = legPhysicalSettlCurency;
}

LegPhysicalSettlCurency.prototype.value = function () {
  return this.message;
};

LegPhysicalSettlCurency.Tag = '41601';

LegPhysicalSettlCurency.Type = 'CURRENCY';

module.exports = LegPhysicalSettlCurency;