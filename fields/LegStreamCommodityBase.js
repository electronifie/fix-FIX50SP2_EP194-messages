var invert = require('invert-obj');

function LegStreamCommodityBase (legStreamCommodityBase) {
  this.message = legStreamCommodityBase;
}

LegStreamCommodityBase.prototype.value = function () {
  return this.message;
};

LegStreamCommodityBase.Tag = '41648';

LegStreamCommodityBase.Type = 'STRING';

module.exports = LegStreamCommodityBase;