var NoLegPaymentStreamPaymentDates = require('../fields/NoLegPaymentStreamPaymentDates');
var LegPaymentStreamPaymentDate = require('../fields/LegPaymentStreamPaymentDate');
var LegPaymentStreamPaymentDateType = require('../fields/LegPaymentStreamPaymentDateType');

function LegPaymentStreamPaymentDateGrp (legPaymentStreamPaymentDateGrp) {
  this.message = legPaymentStreamPaymentDateGrp;
}

/* group */

/* field */
LegPaymentStreamPaymentDateGrp.prototype.legPaymentStreamPaymentDate = function () {
  return new LegPaymentStreamPaymentDate(this.message.tags[LegPaymentStreamPaymentDate.Tag]);
};

/* field */
LegPaymentStreamPaymentDateGrp.prototype.legPaymentStreamPaymentDateType = function () {
  return new LegPaymentStreamPaymentDateType(this.message.tags[LegPaymentStreamPaymentDateType.Tag]);
};

/* end group */

LegPaymentStreamPaymentDateGrp.Tag = '41589';

module.exports = LegPaymentStreamPaymentDateGrp;