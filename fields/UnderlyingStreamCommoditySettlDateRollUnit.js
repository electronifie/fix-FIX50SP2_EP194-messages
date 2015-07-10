var invert = require('invert-obj');

function UnderlyingStreamCommoditySettlDateRollUnit (underlyingStreamCommoditySettlDateRollUnit) {
  this.message = underlyingStreamCommoditySettlDateRollUnit;
}

UnderlyingStreamCommoditySettlDateRollUnit.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommoditySettlDateRollUnit.Tag = '41986';

UnderlyingStreamCommoditySettlDateRollUnit.Type = 'STRING';

module.exports = UnderlyingStreamCommoditySettlDateRollUnit;