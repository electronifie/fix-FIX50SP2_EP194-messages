var invert = require('invert-obj');

function UnderlyingStreamCommodityXIDRef (underlyingStreamCommodityXidref) {
  this.message = underlyingStreamCommodityXidref;
}

UnderlyingStreamCommodityXIDRef.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommodityXIDRef.Tag = '41989';

UnderlyingStreamCommodityXIDRef.Type = 'XIDREF';

module.exports = UnderlyingStreamCommodityXIDRef;