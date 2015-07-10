var invert = require('invert-obj');

function DeliveryStreamRiskApportionment (deliveryStreamRiskApportionment) {
  this.message = deliveryStreamRiskApportionment;
}

DeliveryStreamRiskApportionment.prototype.value = function () {
  return this.message;
};

DeliveryStreamRiskApportionment.Tag = '41067';

DeliveryStreamRiskApportionment.Type = 'STRING';

module.exports = DeliveryStreamRiskApportionment;