var invert = require('invert-obj');

function UnderlyingStreamCommoditySecurityIDSource (underlyingStreamCommoditySecurityIdsource) {
  this.message = underlyingStreamCommoditySecurityIdsource;
}

UnderlyingStreamCommoditySecurityIDSource.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommoditySecurityIDSource.Tag = '41967';

UnderlyingStreamCommoditySecurityIDSource.Type = 'STRING';

module.exports = UnderlyingStreamCommoditySecurityIDSource;