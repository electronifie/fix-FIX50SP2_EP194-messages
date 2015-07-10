var invert = require('invert-obj');

function LegDeliveryStreamDeliveryContingency (legDeliveryStreamDeliveryContingency) {
  this.message = legDeliveryStreamDeliveryContingency;
}

LegDeliveryStreamDeliveryContingency.prototype.value = function () {
  return this.message;
};

LegDeliveryStreamDeliveryContingency.Tag = '41435';

LegDeliveryStreamDeliveryContingency.Type = 'STRING';

module.exports = LegDeliveryStreamDeliveryContingency;