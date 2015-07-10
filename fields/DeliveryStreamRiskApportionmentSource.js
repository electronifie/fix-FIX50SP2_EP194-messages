var invert = require('invert-obj');

function DeliveryStreamRiskApportionmentSource (deliveryStreamRiskApportionmentSource) {
  this.message = deliveryStreamRiskApportionmentSource;
}

DeliveryStreamRiskApportionmentSource.prototype.value = function () {
  return this.message;
};

DeliveryStreamRiskApportionmentSource.Tag = '41218';

DeliveryStreamRiskApportionmentSource.Type = 'STRING';

module.exports = DeliveryStreamRiskApportionmentSource;