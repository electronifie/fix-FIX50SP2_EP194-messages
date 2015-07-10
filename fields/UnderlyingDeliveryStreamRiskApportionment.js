var invert = require('invert-obj');

function UnderlyingDeliveryStreamRiskApportionment (underlyingDeliveryStreamRiskApportionment) {
  this.message = underlyingDeliveryStreamRiskApportionment;
}

UnderlyingDeliveryStreamRiskApportionment.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryStreamRiskApportionment.Tag = '41786';

UnderlyingDeliveryStreamRiskApportionment.Type = 'STRING';

module.exports = UnderlyingDeliveryStreamRiskApportionment;