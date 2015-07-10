var invert = require('invert-obj');

function LegDeliveryStreamToleranceType (legDeliveryStreamToleranceType) {
  this.message = legDeliveryStreamToleranceType;
}

LegDeliveryStreamToleranceType.prototype.value = function () {
  return this.message;
};

LegDeliveryStreamToleranceType.Tag = '41445';

LegDeliveryStreamToleranceType.Type = 'INT';

module.exports = LegDeliveryStreamToleranceType;