var invert = require('invert-obj');

function UnderlyingPhysicalSettlDeliverableObligationValue (underlyingPhysicalSettlDeliverableObligationValue) {
  this.message = underlyingPhysicalSettlDeliverableObligationValue;
}

UnderlyingPhysicalSettlDeliverableObligationValue.prototype.value = function () {
  return this.message;
};

UnderlyingPhysicalSettlDeliverableObligationValue.Tag = '42067';

UnderlyingPhysicalSettlDeliverableObligationValue.Type = 'STRING';

module.exports = UnderlyingPhysicalSettlDeliverableObligationValue;