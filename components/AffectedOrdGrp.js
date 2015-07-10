var NoAffectedOrders = require('../fields/NoAffectedOrders');
var AffectedOrigClOrdID = require('../fields/AffectedOrigClOrdID');
var AffectedOrderID = require('../fields/AffectedOrderID');
var AffectedSecondaryOrderID = require('../fields/AffectedSecondaryOrderID');

function AffectedOrdGrp (affectedOrdGrp) {
  this.message = affectedOrdGrp;
}

/* group */

/* field */
AffectedOrdGrp.prototype.affectedOrigClOrdId = function () {
  return new AffectedOrigClOrdID(this.message.tags[AffectedOrigClOrdID.Tag]);
};

/* field */
AffectedOrdGrp.prototype.affectedOrderId = function () {
  return new AffectedOrderID(this.message.tags[AffectedOrderID.Tag]);
};

/* field */
AffectedOrdGrp.prototype.affectedSecondaryOrderId = function () {
  return new AffectedSecondaryOrderID(this.message.tags[AffectedSecondaryOrderID.Tag]);
};

/* end group */

AffectedOrdGrp.Tag = '534';

module.exports = AffectedOrdGrp;