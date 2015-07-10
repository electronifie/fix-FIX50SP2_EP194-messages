var invert = require('invert-obj');

function UnderlyingMarketDisruptionMaterialityPercentage (underlyingMarketDisruptionMaterialityPercentage) {
  this.message = underlyingMarketDisruptionMaterialityPercentage;
}

UnderlyingMarketDisruptionMaterialityPercentage.prototype.value = function () {
  return this.message;
};

UnderlyingMarketDisruptionMaterialityPercentage.Tag = '41862';

UnderlyingMarketDisruptionMaterialityPercentage.Type = 'PERCENTAGE';

module.exports = UnderlyingMarketDisruptionMaterialityPercentage;