var invert = require('invert-obj');

function NoUnderlyingStreamCommodityAltIDs (noUnderlyingStreamCommodityAltIds) {
  this.message = noUnderlyingStreamCommodityAltIds;
}

NoUnderlyingStreamCommodityAltIDs.prototype.value = function () {
  return this.message;
};

NoUnderlyingStreamCommodityAltIDs.Tag = '41990';

NoUnderlyingStreamCommodityAltIDs.Type = 'NUMINGROUP';

module.exports = NoUnderlyingStreamCommodityAltIDs;