var invert = require('invert-obj');

function NoUnderlyingPhysicalSettlDeliverableObligations (noUnderlyingPhysicalSettlDeliverableObligations) {
  this.message = noUnderlyingPhysicalSettlDeliverableObligations;
}

NoUnderlyingPhysicalSettlDeliverableObligations.prototype.value = function () {
  return this.message;
};

NoUnderlyingPhysicalSettlDeliverableObligations.Tag = '42065';

NoUnderlyingPhysicalSettlDeliverableObligations.Type = 'NUMINGROUP';

module.exports = NoUnderlyingPhysicalSettlDeliverableObligations;