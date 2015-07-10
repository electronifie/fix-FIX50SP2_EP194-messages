var NoLimitAmts = require('../fields/NoLimitAmts');
var LimitAmtType = require('../fields/LimitAmtType');
var LastLimitAmt = require('../fields/LastLimitAmt');
var LimitAmtRemaining = require('../fields/LimitAmtRemaining');
var LimitUtilizationAmt = require('../fields/LimitUtilizationAmt');
var LimitAmt = require('../fields/LimitAmt');
var LimitAmtCurrency = require('../fields/LimitAmtCurrency');
var LimitRole = require('../fields/LimitRole');

function LimitAmts (limitAmts) {
  this.message = limitAmts;
}

/* group */

/* field */
LimitAmts.prototype.limitAmtType = function () {
  return new LimitAmtType(this.message.tags[LimitAmtType.Tag]);
};

/* field */
LimitAmts.prototype.lastLimitAmt = function () {
  return new LastLimitAmt(this.message.tags[LastLimitAmt.Tag]);
};

/* field */
LimitAmts.prototype.limitAmtRemaining = function () {
  return new LimitAmtRemaining(this.message.tags[LimitAmtRemaining.Tag]);
};

/* field */
LimitAmts.prototype.limitUtilizationAmt = function () {
  return new LimitUtilizationAmt(this.message.tags[LimitUtilizationAmt.Tag]);
};

/* field */
LimitAmts.prototype.limitAmt = function () {
  return new LimitAmt(this.message.tags[LimitAmt.Tag]);
};

/* field */
LimitAmts.prototype.limitAmtCurrency = function () {
  return new LimitAmtCurrency(this.message.tags[LimitAmtCurrency.Tag]);
};

/* field */
LimitAmts.prototype.limitRole = function () {
  return new LimitRole(this.message.tags[LimitRole.Tag]);
};

/* end group */

LimitAmts.Tag = '1630';

module.exports = LimitAmts;