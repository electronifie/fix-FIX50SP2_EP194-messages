var invert = require('invert-obj');

function LegStreamCommoditySecurityIDSource (legStreamCommoditySecurityIdsource) {
  this.message = legStreamCommoditySecurityIdsource;
}

LegStreamCommoditySecurityIDSource.prototype.value = function () {
  return this.message;
};

LegStreamCommoditySecurityIDSource.Tag = '41651';

LegStreamCommoditySecurityIDSource.Type = 'STRING';

module.exports = LegStreamCommoditySecurityIDSource;