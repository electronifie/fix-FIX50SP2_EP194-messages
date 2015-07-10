var invert = require('invert-obj');

function LegStreamCommodityXID (legStreamCommodityXid) {
  this.message = legStreamCommodityXid;
}

LegStreamCommodityXID.prototype.value = function () {
  return this.message;
};

LegStreamCommodityXID.Tag = '41672';

LegStreamCommodityXID.Type = 'XID';

module.exports = LegStreamCommodityXID;