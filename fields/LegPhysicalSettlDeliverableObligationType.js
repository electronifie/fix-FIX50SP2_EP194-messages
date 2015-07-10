var invert = require('invert-obj');

function LegPhysicalSettlDeliverableObligationType (legPhysicalSettlDeliverableObligationType) {
  this.message = legPhysicalSettlDeliverableObligationType;
}

LegPhysicalSettlDeliverableObligationType.prototype.value = function () {
  return this.message;
};

LegPhysicalSettlDeliverableObligationType.Tag = '41605';

LegPhysicalSettlDeliverableObligationType.Type = 'STRING';

module.exports = LegPhysicalSettlDeliverableObligationType;