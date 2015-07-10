var invert = require('invert-obj');

function PhysicalSettlDeliverableObligationValue (physicalSettlDeliverableObligationValue) {
  this.message = physicalSettlDeliverableObligationValue;
}

PhysicalSettlDeliverableObligationValue.prototype.value = function () {
  return this.message;
};

PhysicalSettlDeliverableObligationValue.Tag = '40211';

PhysicalSettlDeliverableObligationValue.Type = 'STRING';

module.exports = PhysicalSettlDeliverableObligationValue;