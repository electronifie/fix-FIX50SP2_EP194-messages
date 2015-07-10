var invert = require('invert-obj');

function UnderlyingStreamCommodityXID (underlyingStreamCommodityXid) {
  this.message = underlyingStreamCommodityXid;
}

UnderlyingStreamCommodityXID.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommodityXID.Tag = '41988';

UnderlyingStreamCommodityXID.Type = 'XID';

module.exports = UnderlyingStreamCommodityXID;