var invert = require('invert-obj');

function LegDeliveryStreamRiskApportionmentSource (legDeliveryStreamRiskApportionmentSource) {
  this.message = legDeliveryStreamRiskApportionmentSource;
}

LegDeliveryStreamRiskApportionmentSource.prototype.value = function () {
  return this.message;
};

LegDeliveryStreamRiskApportionmentSource.Tag = '41219';

LegDeliveryStreamRiskApportionmentSource.Type = 'STRING';

module.exports = LegDeliveryStreamRiskApportionmentSource;