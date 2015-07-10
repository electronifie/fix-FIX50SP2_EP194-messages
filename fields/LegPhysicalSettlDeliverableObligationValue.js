var invert = require('invert-obj');

function LegPhysicalSettlDeliverableObligationValue (legPhysicalSettlDeliverableObligationValue) {
  this.message = legPhysicalSettlDeliverableObligationValue;
}

LegPhysicalSettlDeliverableObligationValue.prototype.value = function () {
  return this.message;
};

LegPhysicalSettlDeliverableObligationValue.Tag = '41606';

LegPhysicalSettlDeliverableObligationValue.Type = 'STRING';

module.exports = LegPhysicalSettlDeliverableObligationValue;