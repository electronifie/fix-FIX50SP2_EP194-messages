var invert = require('invert-obj');

function EncodedLegStreamCommodityDesc (encodedLegStreamCommodityDesc) {
  this.message = encodedLegStreamCommodityDesc;
}

EncodedLegStreamCommodityDesc.prototype.value = function () {
  return this.message;
};

EncodedLegStreamCommodityDesc.Tag = '41654';

EncodedLegStreamCommodityDesc.Type = 'DATA';

module.exports = EncodedLegStreamCommodityDesc;