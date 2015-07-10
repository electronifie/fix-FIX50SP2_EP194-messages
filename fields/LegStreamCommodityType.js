var invert = require('invert-obj');

function LegStreamCommodityType (legStreamCommodityType) {
  this.message = legStreamCommodityType;
}

LegStreamCommodityType.prototype.value = function () {
  return this.message;
};

LegStreamCommodityType.Tag = '41649';

LegStreamCommodityType.Type = 'STRING';

module.exports = LegStreamCommodityType;