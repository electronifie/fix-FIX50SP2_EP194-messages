var invert = require('invert-obj');

function DeliveryStreamDeliveryPointSource (deliveryStreamDeliveryPointSource) {
  this.message = deliveryStreamDeliveryPointSource;
}

DeliveryStreamDeliveryPointSource.prototype.value = function () {
  return this.message;
};


DeliveryStreamDeliveryPointSource.Keys = {
  PROPRIETARY: '0',
  ENERGY_IDENTIFICATION_CODE: '1',
};

DeliveryStreamDeliveryPointSource.Tag = '42192';

DeliveryStreamDeliveryPointSource.Type = 'INT';

DeliveryStreamDeliveryPointSource.Values = invert(DeliveryStreamDeliveryPointSource.Keys);

module.exports = DeliveryStreamDeliveryPointSource;