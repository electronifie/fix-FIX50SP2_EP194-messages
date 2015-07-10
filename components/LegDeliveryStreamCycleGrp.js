var NoLegDeliveryStreamCycles = require('../fields/NoLegDeliveryStreamCycles');
var LegDeliveryStreamCycleDesc = require('../fields/LegDeliveryStreamCycleDesc');
var EncodedLegDeliveryStreamCycleDescLen = require('../fields/EncodedLegDeliveryStreamCycleDescLen');
var EncodedLegDeliveryStreamCycleDesc = require('../fields/EncodedLegDeliveryStreamCycleDesc');

function LegDeliveryStreamCycleGrp (legDeliveryStreamCycleGrp) {
  this.message = legDeliveryStreamCycleGrp;
}

/* group */

/* field */
LegDeliveryStreamCycleGrp.prototype.legDeliveryStreamCycleDesc = function () {
  return new LegDeliveryStreamCycleDesc(this.message.tags[LegDeliveryStreamCycleDesc.Tag]);
};

/* field */
LegDeliveryStreamCycleGrp.prototype.encodedLegDeliveryStreamCycleDescLen = function () {
  return new EncodedLegDeliveryStreamCycleDescLen(this.message.tags[EncodedLegDeliveryStreamCycleDescLen.Tag]);
};

/* field */
LegDeliveryStreamCycleGrp.prototype.encodedLegDeliveryStreamCycleDesc = function () {
  return new EncodedLegDeliveryStreamCycleDesc(this.message.tags[EncodedLegDeliveryStreamCycleDesc.Tag]);
};

/* end group */

LegDeliveryStreamCycleGrp.Tag = '41456';

module.exports = LegDeliveryStreamCycleGrp;