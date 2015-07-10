var invert = require('invert-obj');

function CollateralPortfolioID (collateralPortfolioId) {
  this.message = collateralPortfolioId;
}

CollateralPortfolioID.prototype.value = function () {
  return this.message;
};

CollateralPortfolioID.Tag = '2350';

CollateralPortfolioID.Type = 'STRING';

module.exports = CollateralPortfolioID;