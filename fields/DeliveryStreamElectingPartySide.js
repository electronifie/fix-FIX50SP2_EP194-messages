var invert = require('invert-obj');

function DeliveryStreamElectingPartySide (deliveryStreamElectingPartySide) {
  this.message = deliveryStreamElectingPartySide;
}

DeliveryStreamElectingPartySide.prototype.value = function () {
  return this.message;
};


DeliveryStreamElectingPartySide.Keys = {
  'BUYER': '0',
  'SELLER': '1',
};

DeliveryStreamElectingPartySide.Tag = '41080';

DeliveryStreamElectingPartySide.Type = 'INT';

DeliveryStreamElectingPartySide.Values = invert(DeliveryStreamElectingPartySide.Keys);

module.exports = DeliveryStreamElectingPartySide;