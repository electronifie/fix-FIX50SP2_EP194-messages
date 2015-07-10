var NoDeliveryStreamCycles = require('../fields/NoDeliveryStreamCycles');
var DeliveryStreamCycleDesc = require('../fields/DeliveryStreamCycleDesc');
var EncodedDeliveryStreamCycleDescLen = require('../fields/EncodedDeliveryStreamCycleDescLen');
var EncodedDeliveryStreamCycleDesc = require('../fields/EncodedDeliveryStreamCycleDesc');

function DeliveryStreamCycleGrp (deliveryStreamCycleGrp) {
  this.message = deliveryStreamCycleGrp;
}

/* group */

/* field */
DeliveryStreamCycleGrp.prototype.deliveryStreamCycleDesc = function () {
  return new DeliveryStreamCycleDesc(this.message.tags[DeliveryStreamCycleDesc.Tag]);
};

/* field */
DeliveryStreamCycleGrp.prototype.encodedDeliveryStreamCycleDescLen = function () {
  return new EncodedDeliveryStreamCycleDescLen(this.message.tags[EncodedDeliveryStreamCycleDescLen.Tag]);
};

/* field */
DeliveryStreamCycleGrp.prototype.encodedDeliveryStreamCycleDesc = function () {
  return new EncodedDeliveryStreamCycleDesc(this.message.tags[EncodedDeliveryStreamCycleDesc.Tag]);
};

/* end group */

DeliveryStreamCycleGrp.Tag = '41081';

module.exports = DeliveryStreamCycleGrp;