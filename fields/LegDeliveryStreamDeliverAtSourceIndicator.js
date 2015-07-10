var invert = require('invert-obj');

function LegDeliveryStreamDeliverAtSourceIndicator (legDeliveryStreamDeliverAtSourceIndicator) {
  this.message = legDeliveryStreamDeliverAtSourceIndicator;
}

LegDeliveryStreamDeliverAtSourceIndicator.prototype.value = function () {
  return this.message;
};

LegDeliveryStreamDeliverAtSourceIndicator.Tag = '41437';

LegDeliveryStreamDeliverAtSourceIndicator.Type = 'BOOLEAN';

module.exports = LegDeliveryStreamDeliverAtSourceIndicator;