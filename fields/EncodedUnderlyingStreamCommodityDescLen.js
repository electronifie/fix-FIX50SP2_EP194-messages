var invert = require('invert-obj');

function EncodedUnderlyingStreamCommodityDescLen (encodedUnderlyingStreamCommodityDescLen) {
  this.message = encodedUnderlyingStreamCommodityDescLen;
}

EncodedUnderlyingStreamCommodityDescLen.prototype.value = function () {
  return this.message;
};

EncodedUnderlyingStreamCommodityDescLen.Tag = '41969';

EncodedUnderlyingStreamCommodityDescLen.Type = 'LENGTH';

module.exports = EncodedUnderlyingStreamCommodityDescLen;