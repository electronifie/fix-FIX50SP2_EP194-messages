var invert = require('invert-obj');

function LegDeliveryStreamPipeline (legDeliveryStreamPipeline) {
  this.message = legDeliveryStreamPipeline;
}

LegDeliveryStreamPipeline.prototype.value = function () {
  return this.message;
};

LegDeliveryStreamPipeline.Tag = '41430';

LegDeliveryStreamPipeline.Type = 'STRING';

module.exports = LegDeliveryStreamPipeline;