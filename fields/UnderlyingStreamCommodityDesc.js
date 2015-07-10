var invert = require('invert-obj');

function UnderlyingStreamCommodityDesc (underlyingStreamCommodityDesc) {
  this.message = underlyingStreamCommodityDesc;
}

UnderlyingStreamCommodityDesc.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommodityDesc.Tag = '41968';

UnderlyingStreamCommodityDesc.Type = 'STRING';

module.exports = UnderlyingStreamCommodityDesc;