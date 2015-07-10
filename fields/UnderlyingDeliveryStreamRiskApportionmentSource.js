var invert = require('invert-obj');

function UnderlyingDeliveryStreamRiskApportionmentSource (underlyingDeliveryStreamRiskApportionmentSource) {
  this.message = underlyingDeliveryStreamRiskApportionmentSource;
}

UnderlyingDeliveryStreamRiskApportionmentSource.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryStreamRiskApportionmentSource.Tag = '41587';

UnderlyingDeliveryStreamRiskApportionmentSource.Type = 'STRING';

module.exports = UnderlyingDeliveryStreamRiskApportionmentSource;