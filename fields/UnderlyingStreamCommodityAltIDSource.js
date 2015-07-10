var invert = require('invert-obj');

function UnderlyingStreamCommodityAltIDSource (underlyingStreamCommodityAltIdsource) {
  this.message = underlyingStreamCommodityAltIdsource;
}

UnderlyingStreamCommodityAltIDSource.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommodityAltIDSource.Tag = '41992';

UnderlyingStreamCommodityAltIDSource.Type = 'STRING';

module.exports = UnderlyingStreamCommodityAltIDSource;