var NoPayCollects = require('../fields/NoPayCollects');
var PayCollectType = require('../fields/PayCollectType');
var PayCollectCurrency = require('../fields/PayCollectCurrency');
var PayCollectFXRate = require('../fields/PayCollectFXRate');
var PayCollectFXRateCalc = require('../fields/PayCollectFXRateCalc');
var PayAmount = require('../fields/PayAmount');
var CollectAmount = require('../fields/CollectAmount');
var PayCollectMarketSegmentID = require('../fields/PayCollectMarketSegmentID');
var PayCollectMarketID = require('../fields/PayCollectMarketID');

function PayCollectGrp (payCollectGrp) {
  this.message = payCollectGrp;
}

/* group */

/* field */
PayCollectGrp.prototype.payCollectType = function () {
  return new PayCollectType(this.message.tags[PayCollectType.Tag]);
};

/* field */
PayCollectGrp.prototype.payCollectCurrency = function () {
  return new PayCollectCurrency(this.message.tags[PayCollectCurrency.Tag]);
};

/* field */
PayCollectGrp.prototype.payCollectFxrate = function () {
  return new PayCollectFXRate(this.message.tags[PayCollectFXRate.Tag]);
};

/* field */
PayCollectGrp.prototype.payCollectFxrateCalc = function () {
  return new PayCollectFXRateCalc(this.message.tags[PayCollectFXRateCalc.Tag]);
};

/* field */
PayCollectGrp.prototype.payAmount = function () {
  return new PayAmount(this.message.tags[PayAmount.Tag]);
};

/* field */
PayCollectGrp.prototype.collectAmount = function () {
  return new CollectAmount(this.message.tags[CollectAmount.Tag]);
};

/* field */
PayCollectGrp.prototype.payCollectMarketSegmentId = function () {
  return new PayCollectMarketSegmentID(this.message.tags[PayCollectMarketSegmentID.Tag]);
};

/* field */
PayCollectGrp.prototype.payCollectMarketId = function () {
  return new PayCollectMarketID(this.message.tags[PayCollectMarketID.Tag]);
};

/* end group */

PayCollectGrp.Tag = '1707';

module.exports = PayCollectGrp;