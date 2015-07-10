var invert = require('invert-obj');

function DeliveryStreamPipeline (deliveryStreamPipeline) {
  this.message = deliveryStreamPipeline;
}

DeliveryStreamPipeline.prototype.value = function () {
  return this.message;
};

DeliveryStreamPipeline.Tag = '41059';

DeliveryStreamPipeline.Type = 'STRING';

module.exports = DeliveryStreamPipeline;