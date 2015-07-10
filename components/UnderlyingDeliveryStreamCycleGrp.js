var NoUnderlyingDeliveryStreamCycles = require('../fields/NoUnderlyingDeliveryStreamCycles');
var UnderlyingDeliveryStreamCycleDesc = require('../fields/UnderlyingDeliveryStreamCycleDesc');
var EncodedUnderlyingDeliveryStreamCycleDescLen = require('../fields/EncodedUnderlyingDeliveryStreamCycleDescLen');
var EncodedUnderlyingDeliveryStreamCycleDesc = require('../fields/EncodedUnderlyingDeliveryStreamCycleDesc');

function UnderlyingDeliveryStreamCycleGrp (underlyingDeliveryStreamCycleGrp) {
  this.message = underlyingDeliveryStreamCycleGrp;
}

/* group */

/* field */
UnderlyingDeliveryStreamCycleGrp.prototype.underlyingDeliveryStreamCycleDesc = function () {
  return new UnderlyingDeliveryStreamCycleDesc(this.message.tags[UnderlyingDeliveryStreamCycleDesc.Tag]);
};

/* field */
UnderlyingDeliveryStreamCycleGrp.prototype.encodedUnderlyingDeliveryStreamCycleDescLen = function () {
  return new EncodedUnderlyingDeliveryStreamCycleDescLen(this.message.tags[EncodedUnderlyingDeliveryStreamCycleDescLen.Tag]);
};

/* field */
UnderlyingDeliveryStreamCycleGrp.prototype.encodedUnderlyingDeliveryStreamCycleDesc = function () {
  return new EncodedUnderlyingDeliveryStreamCycleDesc(this.message.tags[EncodedUnderlyingDeliveryStreamCycleDesc.Tag]);
};

/* end group */

UnderlyingDeliveryStreamCycleGrp.Tag = '41804';

module.exports = UnderlyingDeliveryStreamCycleGrp;