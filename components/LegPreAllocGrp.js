var NoLegAllocs = require('../fields/NoLegAllocs');
var NestedParties2 = require('../components/NestedParties2');
var LegAllocAccount = require('../fields/LegAllocAccount');
var LegIndividualAllocID = require('../fields/LegIndividualAllocID');
var LegAllocQty = require('../fields/LegAllocQty');
var LegAllocAcctIDSource = require('../fields/LegAllocAcctIDSource');
var LegAllocSettlCurrency = require('../fields/LegAllocSettlCurrency');
var LegCustodialLotID = require('../fields/LegCustodialLotID');
var LegVersusPurchaseDate = require('../fields/LegVersusPurchaseDate');
var LegVersusPurchasePrice = require('../fields/LegVersusPurchasePrice');
var LegCurrentCostBasis = require('../fields/LegCurrentCostBasis');

function LegPreAllocGrp (legPreAllocGrp) {
  this.message = legPreAllocGrp;
}

/* group */

/* component */
LegPreAllocGrp.prototype.nestedParties2 = function () {
  return this.message.groups[NestedParties2.Tag]
    .map(function (nestedParties2) {
      return new NestedParties2(nestedParties2);
  });
};

/* field */
LegPreAllocGrp.prototype.legAllocAccount = function () {
  return new LegAllocAccount(this.message.tags[LegAllocAccount.Tag]);
};

/* field */
LegPreAllocGrp.prototype.legIndividualAllocId = function () {
  return new LegIndividualAllocID(this.message.tags[LegIndividualAllocID.Tag]);
};

/* field */
LegPreAllocGrp.prototype.legAllocQty = function () {
  return new LegAllocQty(this.message.tags[LegAllocQty.Tag]);
};

/* field */
LegPreAllocGrp.prototype.legAllocAcctIdsource = function () {
  return new LegAllocAcctIDSource(this.message.tags[LegAllocAcctIDSource.Tag]);
};

/* field */
LegPreAllocGrp.prototype.legAllocSettlCurrency = function () {
  return new LegAllocSettlCurrency(this.message.tags[LegAllocSettlCurrency.Tag]);
};

/* field */
LegPreAllocGrp.prototype.legCustodialLotId = function () {
  return new LegCustodialLotID(this.message.tags[LegCustodialLotID.Tag]);
};

/* field */
LegPreAllocGrp.prototype.legVersusPurchaseDate = function () {
  return new LegVersusPurchaseDate(this.message.tags[LegVersusPurchaseDate.Tag]);
};

/* field */
LegPreAllocGrp.prototype.legVersusPurchasePrice = function () {
  return new LegVersusPurchasePrice(this.message.tags[LegVersusPurchasePrice.Tag]);
};

/* field */
LegPreAllocGrp.prototype.legCurrentCostBasis = function () {
  return new LegCurrentCostBasis(this.message.tags[LegCurrentCostBasis.Tag]);
};

/* end group */

LegPreAllocGrp.Tag = '670';

module.exports = LegPreAllocGrp;