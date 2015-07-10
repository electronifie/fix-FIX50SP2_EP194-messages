var invert = require('invert-obj');

function UnderlyingPhysicalSettlDeliverableObligationType (underlyingPhysicalSettlDeliverableObligationType) {
  this.message = underlyingPhysicalSettlDeliverableObligationType;
}

UnderlyingPhysicalSettlDeliverableObligationType.prototype.value = function () {
  return this.message;
};

UnderlyingPhysicalSettlDeliverableObligationType.Tag = '42066';

UnderlyingPhysicalSettlDeliverableObligationType.Type = 'STRING';

module.exports = UnderlyingPhysicalSettlDeliverableObligationType;