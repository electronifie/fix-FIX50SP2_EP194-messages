var invert = require('invert-obj');

function LegDeliveryStreamDeliveryPoint (legDeliveryStreamDeliveryPoint) {
  this.message = legDeliveryStreamDeliveryPoint;
}

LegDeliveryStreamDeliveryPoint.prototype.value = function () {
  return this.message;
};

LegDeliveryStreamDeliveryPoint.Tag = '41433';

LegDeliveryStreamDeliveryPoint.Type = 'STRING';

module.exports = LegDeliveryStreamDeliveryPoint;