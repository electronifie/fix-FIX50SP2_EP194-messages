var invert = require('invert-obj');

function LegDeliveryStreamDeliveryRestriction (legDeliveryStreamDeliveryRestriction) {
  this.message = legDeliveryStreamDeliveryRestriction;
}

LegDeliveryStreamDeliveryRestriction.prototype.value = function () {
  return this.message;
};

LegDeliveryStreamDeliveryRestriction.Tag = '41434';

LegDeliveryStreamDeliveryRestriction.Type = 'INT';

module.exports = LegDeliveryStreamDeliveryRestriction;