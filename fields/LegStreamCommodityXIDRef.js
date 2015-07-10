var invert = require('invert-obj');

function LegStreamCommodityXIDRef (legStreamCommodityXidref) {
  this.message = legStreamCommodityXidref;
}

LegStreamCommodityXIDRef.prototype.value = function () {
  return this.message;
};

LegStreamCommodityXIDRef.Tag = '41673';

LegStreamCommodityXIDRef.Type = 'XIDREF';

module.exports = LegStreamCommodityXIDRef;