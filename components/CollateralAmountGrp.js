var NoCollateralAmounts = require('../fields/NoCollateralAmounts');
var CurrentCollateralAmount = require('../fields/CurrentCollateralAmount');
var CollateralCurrency = require('../fields/CollateralCurrency');
var CollateralFXRate = require('../fields/CollateralFXRate');
var CollateralFXRateCalc = require('../fields/CollateralFXRateCalc');
var CollateralType = require('../fields/CollateralType');
var CollateralAmountMarketSegmentID = require('../fields/CollateralAmountMarketSegmentID');
var CollateralAmountMarketID = require('../fields/CollateralAmountMarketID');
var HaircutIndicator = require('../fields/HaircutIndicator');
var CollateralPortfolioID = require('../fields/CollateralPortfolioID');

function CollateralAmountGrp (collateralAmountGrp) {
  this.message = collateralAmountGrp;
}

/* group */

/* field */
CollateralAmountGrp.prototype.currentCollateralAmount = function () {
  return new CurrentCollateralAmount(this.message.tags[CurrentCollateralAmount.Tag]);
};

/* field */
CollateralAmountGrp.prototype.collateralCurrency = function () {
  return new CollateralCurrency(this.message.tags[CollateralCurrency.Tag]);
};

/* field */
CollateralAmountGrp.prototype.collateralFxrate = function () {
  return new CollateralFXRate(this.message.tags[CollateralFXRate.Tag]);
};

/* field */
CollateralAmountGrp.prototype.collateralFxrateCalc = function () {
  return new CollateralFXRateCalc(this.message.tags[CollateralFXRateCalc.Tag]);
};

/* field */
CollateralAmountGrp.prototype.collateralType = function () {
  return new CollateralType(this.message.tags[CollateralType.Tag]);
};

/* field */
CollateralAmountGrp.prototype.collateralAmountMarketSegmentId = function () {
  return new CollateralAmountMarketSegmentID(this.message.tags[CollateralAmountMarketSegmentID.Tag]);
};

/* field */
CollateralAmountGrp.prototype.collateralAmountMarketId = function () {
  return new CollateralAmountMarketID(this.message.tags[CollateralAmountMarketID.Tag]);
};

/* field */
CollateralAmountGrp.prototype.haircutIndicator = function () {
  return new HaircutIndicator(this.message.tags[HaircutIndicator.Tag]);
};

/* field */
CollateralAmountGrp.prototype.collateralPortfolioId = function () {
  return new CollateralPortfolioID(this.message.tags[CollateralPortfolioID.Tag]);
};

/* end group */

CollateralAmountGrp.Tag = '1703';

module.exports = CollateralAmountGrp;