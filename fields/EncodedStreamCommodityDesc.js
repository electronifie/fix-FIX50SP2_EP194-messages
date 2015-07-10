var invert = require('invert-obj');

function EncodedStreamCommodityDesc (encodedStreamCommodityDesc) {
  this.message = encodedStreamCommodityDesc;
}

EncodedStreamCommodityDesc.prototype.value = function () {
  return this.message;
};

EncodedStreamCommodityDesc.Tag = '41257';

EncodedStreamCommodityDesc.Type = 'DATA';

module.exports = EncodedStreamCommodityDesc;