var invert = require('invert-obj');

function EncodedStreamCommodityDescLen (encodedStreamCommodityDescLen) {
  this.message = encodedStreamCommodityDescLen;
}

EncodedStreamCommodityDescLen.prototype.value = function () {
  return this.message;
};

EncodedStreamCommodityDescLen.Tag = '41256';

EncodedStreamCommodityDescLen.Type = 'LENGTH';

module.exports = EncodedStreamCommodityDescLen;