var invert = require('invert-obj');

function EncodedLegStreamCommodityDescLen (encodedLegStreamCommodityDescLen) {
  this.message = encodedLegStreamCommodityDescLen;
}

EncodedLegStreamCommodityDescLen.prototype.value = function () {
  return this.message;
};

EncodedLegStreamCommodityDescLen.Tag = '41653';

EncodedLegStreamCommodityDescLen.Type = 'LENGTH';

module.exports = EncodedLegStreamCommodityDescLen;