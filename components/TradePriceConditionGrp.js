var NoTradePriceConditions = require('../fields/NoTradePriceConditions');
var TradePriceCondition = require('../fields/TradePriceCondition');

function TradePriceConditionGrp (tradePriceConditionGrp) {
  this.message = tradePriceConditionGrp;
}

/* group */

/* field */
TradePriceConditionGrp.prototype.tradePriceCondition = function () {
  return new TradePriceCondition(this.message.tags[TradePriceCondition.Tag]);
};

/* end group */

TradePriceConditionGrp.Tag = '1838';

module.exports = TradePriceConditionGrp;