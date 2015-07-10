var invert = require('invert-obj');

function NoLegPhysicalSettlDeliverableObligations (noLegPhysicalSettlDeliverableObligations) {
  this.message = noLegPhysicalSettlDeliverableObligations;
}

NoLegPhysicalSettlDeliverableObligations.prototype.value = function () {
  return this.message;
};

NoLegPhysicalSettlDeliverableObligations.Tag = '41604';

NoLegPhysicalSettlDeliverableObligations.Type = 'NUMINGROUP';

module.exports = NoLegPhysicalSettlDeliverableObligations;