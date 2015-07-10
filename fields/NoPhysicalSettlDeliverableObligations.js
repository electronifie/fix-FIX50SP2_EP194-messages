var invert = require('invert-obj');

function NoPhysicalSettlDeliverableObligations (noPhysicalSettlDeliverableObligations) {
  this.message = noPhysicalSettlDeliverableObligations;
}

NoPhysicalSettlDeliverableObligations.prototype.value = function () {
  return this.message;
};

NoPhysicalSettlDeliverableObligations.Tag = '40209';

NoPhysicalSettlDeliverableObligations.Type = 'NUMINGROUP';

module.exports = NoPhysicalSettlDeliverableObligations;