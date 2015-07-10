var invert = require('invert-obj');

function UnderlyingDeliveryStreamPipeline (underlyingDeliveryStreamPipeline) {
  this.message = underlyingDeliveryStreamPipeline;
}

UnderlyingDeliveryStreamPipeline.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryStreamPipeline.Tag = '41778';

UnderlyingDeliveryStreamPipeline.Type = 'STRING';

module.exports = UnderlyingDeliveryStreamPipeline;