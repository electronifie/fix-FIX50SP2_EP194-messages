var invert = require('invert-obj');

function DeliveryStreamDeliveryRestriction (deliveryStreamDeliveryRestriction) {
  this.message = deliveryStreamDeliveryRestriction;
}

DeliveryStreamDeliveryRestriction.prototype.value = function () {
  return this.message;
};


DeliveryStreamDeliveryRestriction.Keys = {
  'FIRM': '1',
  'INTERRUPTABLE_OR_NON_FIRM': '2',
  'FORCE_MAJEURE': '3',
  'SYSTEM_FIRM': '4',
  'UNIT_FIRM': '5',
};

DeliveryStreamDeliveryRestriction.Tag = '41063';

DeliveryStreamDeliveryRestriction.Type = 'INT';

DeliveryStreamDeliveryRestriction.Values = invert(DeliveryStreamDeliveryRestriction.Keys);

module.exports = DeliveryStreamDeliveryRestriction;