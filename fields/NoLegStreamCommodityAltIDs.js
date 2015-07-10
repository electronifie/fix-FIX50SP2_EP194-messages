var invert = require('invert-obj');

function NoLegStreamCommodityAltIDs (noLegStreamCommodityAltIds) {
  this.message = noLegStreamCommodityAltIds;
}

NoLegStreamCommodityAltIDs.prototype.value = function () {
  return this.message;
};

NoLegStreamCommodityAltIDs.Tag = '41674';

NoLegStreamCommodityAltIDs.Type = 'NUMINGROUP';

module.exports = NoLegStreamCommodityAltIDs;