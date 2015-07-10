var invert = require('invert-obj');

function UnderlyingStreamCommodityBase (underlyingStreamCommodityBase) {
  this.message = underlyingStreamCommodityBase;
}

UnderlyingStreamCommodityBase.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommodityBase.Tag = '41964';

UnderlyingStreamCommodityBase.Type = 'STRING';

module.exports = UnderlyingStreamCommodityBase;