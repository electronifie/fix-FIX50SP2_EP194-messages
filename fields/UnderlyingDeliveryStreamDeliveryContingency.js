var invert = require('invert-obj');

function UnderlyingDeliveryStreamDeliveryContingency (underlyingDeliveryStreamDeliveryContingency) {
  this.message = underlyingDeliveryStreamDeliveryContingency;
}

UnderlyingDeliveryStreamDeliveryContingency.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryStreamDeliveryContingency.Tag = '41783';

UnderlyingDeliveryStreamDeliveryContingency.Type = 'STRING';

module.exports = UnderlyingDeliveryStreamDeliveryContingency;