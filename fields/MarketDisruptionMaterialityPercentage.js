var invert = require('invert-obj');

function MarketDisruptionMaterialityPercentage (marketDisruptionMaterialityPercentage) {
  this.message = marketDisruptionMaterialityPercentage;
}

MarketDisruptionMaterialityPercentage.prototype.value = function () {
  return this.message;
};

MarketDisruptionMaterialityPercentage.Tag = '41090';

MarketDisruptionMaterialityPercentage.Type = 'PERCENTAGE';

module.exports = MarketDisruptionMaterialityPercentage;