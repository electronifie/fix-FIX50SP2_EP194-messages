var invert = require('invert-obj');

function LegDeliveryStreamToleranceOptionSide (legDeliveryStreamToleranceOptionSide) {
  this.message = legDeliveryStreamToleranceOptionSide;
}

LegDeliveryStreamToleranceOptionSide.prototype.value = function () {
  return this.message;
};

LegDeliveryStreamToleranceOptionSide.Tag = '41446';

LegDeliveryStreamToleranceOptionSide.Type = 'INT';

module.exports = LegDeliveryStreamToleranceOptionSide;