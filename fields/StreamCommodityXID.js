var invert = require('invert-obj');

function StreamCommodityXID (streamCommodityXid) {
  this.message = streamCommodityXid;
}

StreamCommodityXID.prototype.value = function () {
  return this.message;
};

StreamCommodityXID.Tag = '41275';

StreamCommodityXID.Type = 'XID';

module.exports = StreamCommodityXID;