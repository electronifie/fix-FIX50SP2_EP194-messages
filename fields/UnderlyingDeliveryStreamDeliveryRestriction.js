var invert = require('invert-obj');

function UnderlyingDeliveryStreamDeliveryRestriction (underlyingDeliveryStreamDeliveryRestriction) {
  this.message = underlyingDeliveryStreamDeliveryRestriction;
}

UnderlyingDeliveryStreamDeliveryRestriction.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryStreamDeliveryRestriction.Tag = '41782';

UnderlyingDeliveryStreamDeliveryRestriction.Type = 'INT';

module.exports = UnderlyingDeliveryStreamDeliveryRestriction;