var invert = require('invert-obj');

function StreamCommoditySecurityIDSource (streamCommoditySecurityIdsource) {
  this.message = streamCommoditySecurityIdsource;
}

StreamCommoditySecurityIDSource.prototype.value = function () {
  return this.message;
};

StreamCommoditySecurityIDSource.Tag = '41254';

StreamCommoditySecurityIDSource.Type = 'STRING';

module.exports = StreamCommoditySecurityIDSource;