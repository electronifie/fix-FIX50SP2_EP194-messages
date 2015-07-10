var invert = require('invert-obj');

function PhysicalSettlDeliverableObligationType (physicalSettlDeliverableObligationType) {
  this.message = physicalSettlDeliverableObligationType;
}

PhysicalSettlDeliverableObligationType.prototype.value = function () {
  return this.message;
};

PhysicalSettlDeliverableObligationType.Tag = '40210';

PhysicalSettlDeliverableObligationType.Type = 'STRING';

module.exports = PhysicalSettlDeliverableObligationType;