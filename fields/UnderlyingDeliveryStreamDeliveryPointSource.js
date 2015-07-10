var invert = require('invert-obj');

function UnderlyingDeliveryStreamDeliveryPointSource (underlyingDeliveryStreamDeliveryPointSource) {
  this.message = underlyingDeliveryStreamDeliveryPointSource;
}

UnderlyingDeliveryStreamDeliveryPointSource.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryStreamDeliveryPointSource.Tag = '42196';

UnderlyingDeliveryStreamDeliveryPointSource.Type = 'INT';

module.exports = UnderlyingDeliveryStreamDeliveryPointSource;