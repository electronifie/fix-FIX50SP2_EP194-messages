var invert = require('invert-obj');

function LegStreamCommodityDesc (legStreamCommodityDesc) {
  this.message = legStreamCommodityDesc;
}

LegStreamCommodityDesc.prototype.value = function () {
  return this.message;
};

LegStreamCommodityDesc.Tag = '41652';

LegStreamCommodityDesc.Type = 'STRING';

module.exports = LegStreamCommodityDesc;