var invert = require('invert-obj');

function LegDeliveryStreamDeliveryPointSource (legDeliveryStreamDeliveryPointSource) {
  this.message = legDeliveryStreamDeliveryPointSource;
}

LegDeliveryStreamDeliveryPointSource.prototype.value = function () {
  return this.message;
};

LegDeliveryStreamDeliveryPointSource.Tag = '42194';

LegDeliveryStreamDeliveryPointSource.Type = 'INT';

module.exports = LegDeliveryStreamDeliveryPointSource;