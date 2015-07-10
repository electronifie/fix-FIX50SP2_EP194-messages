var invert = require('invert-obj');

function EncodedUnderlyingStreamCommodityDesc (encodedUnderlyingStreamCommodityDesc) {
  this.message = encodedUnderlyingStreamCommodityDesc;
}

EncodedUnderlyingStreamCommodityDesc.prototype.value = function () {
  return this.message;
};

EncodedUnderlyingStreamCommodityDesc.Tag = '41970';

EncodedUnderlyingStreamCommodityDesc.Type = 'DATA';

module.exports = EncodedUnderlyingStreamCommodityDesc;