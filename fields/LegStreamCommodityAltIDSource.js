var invert = require('invert-obj');

function LegStreamCommodityAltIDSource (legStreamCommodityAltIdsource) {
  this.message = legStreamCommodityAltIdsource;
}

LegStreamCommodityAltIDSource.prototype.value = function () {
  return this.message;
};

LegStreamCommodityAltIDSource.Tag = '41676';

LegStreamCommodityAltIDSource.Type = 'STRING';

module.exports = LegStreamCommodityAltIDSource;