var invert = require('invert-obj');

function StreamCommodityAltIDSource (streamCommodityAltIdsource) {
  this.message = streamCommodityAltIdsource;
}

StreamCommodityAltIDSource.prototype.value = function () {
  return this.message;
};

StreamCommodityAltIDSource.Tag = '41279';

StreamCommodityAltIDSource.Type = 'STRING';

module.exports = StreamCommodityAltIDSource;