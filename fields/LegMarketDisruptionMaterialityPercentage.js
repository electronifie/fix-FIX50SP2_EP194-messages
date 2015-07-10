var invert = require('invert-obj');

function LegMarketDisruptionMaterialityPercentage (legMarketDisruptionMaterialityPercentage) {
  this.message = legMarketDisruptionMaterialityPercentage;
}

LegMarketDisruptionMaterialityPercentage.prototype.value = function () {
  return this.message;
};

LegMarketDisruptionMaterialityPercentage.Tag = '41465';

LegMarketDisruptionMaterialityPercentage.Type = 'PERCENTAGE';

module.exports = LegMarketDisruptionMaterialityPercentage;