var invert = require('invert-obj');

function LegStreamCommoditySecurityID (legStreamCommoditySecurityId) {
  this.message = legStreamCommoditySecurityId;
}

LegStreamCommoditySecurityID.prototype.value = function () {
  return this.message;
};

LegStreamCommoditySecurityID.Tag = '41650';

LegStreamCommoditySecurityID.Type = 'STRING';

module.exports = LegStreamCommoditySecurityID;