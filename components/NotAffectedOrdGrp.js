var NoNotAffectedOrders = require('../fields/NoNotAffectedOrders');
var NotAffOrigClOrdID = require('../fields/NotAffOrigClOrdID');
var NotAffectedOrderID = require('../fields/NotAffectedOrderID');
var NotAffSecondaryOrderID = require('../fields/NotAffSecondaryOrderID');

function NotAffectedOrdGrp (notAffectedOrdGrp) {
  this.message = notAffectedOrdGrp;
}

/* group */

/* field */
NotAffectedOrdGrp.prototype.notAffOrigClOrdId = function () {
  return new NotAffOrigClOrdID(this.message.tags[NotAffOrigClOrdID.Tag]);
};

/* field */
NotAffectedOrdGrp.prototype.notAffectedOrderId = function () {
  return new NotAffectedOrderID(this.message.tags[NotAffectedOrderID.Tag]);
};

/* field */
NotAffectedOrdGrp.prototype.notAffSecondaryOrderId = function () {
  return new NotAffSecondaryOrderID(this.message.tags[NotAffSecondaryOrderID.Tag]);
};

/* end group */

NotAffectedOrdGrp.Tag = '1370';

module.exports = NotAffectedOrdGrp;