var invert = require('invert-obj');

function StreamCommodityXIDRef (streamCommodityXidref) {
  this.message = streamCommodityXidref;
}

StreamCommodityXIDRef.prototype.value = function () {
  return this.message;
};

StreamCommodityXIDRef.Tag = '41276';

StreamCommodityXIDRef.Type = 'XIDREF';

module.exports = StreamCommodityXIDRef;