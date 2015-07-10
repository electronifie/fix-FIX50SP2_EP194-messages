var invert = require('invert-obj');

function NoStreamCommodityAltIDs (noStreamCommodityAltIds) {
  this.message = noStreamCommodityAltIds;
}

NoStreamCommodityAltIDs.prototype.value = function () {
  return this.message;
};

NoStreamCommodityAltIDs.Tag = '41277';

NoStreamCommodityAltIDs.Type = 'NUMINGROUP';

module.exports = NoStreamCommodityAltIDs;