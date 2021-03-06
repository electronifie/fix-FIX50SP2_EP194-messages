var NoAllocs = require('../fields/NoAllocs');
var NestedParties = require('../components/NestedParties');
var AllocAccount = require('../fields/AllocAccount');
var AllocAcctIDSource = require('../fields/AllocAcctIDSource');
var AllocSettlCurrency = require('../fields/AllocSettlCurrency');
var IndividualAllocID = require('../fields/IndividualAllocID');
var AllocQty = require('../fields/AllocQty');
var CustodialLotID = require('../fields/CustodialLotID');
var VersusPurchaseDate = require('../fields/VersusPurchaseDate');
var VersusPurchasePrice = require('../fields/VersusPurchasePrice');
var CurrentCostBasis = require('../fields/CurrentCostBasis');

function PreAllocGrp (preAllocGrp) {
  this.message = preAllocGrp;
}

/* group */

/* component */
PreAllocGrp.prototype.nestedParties = function () {
  return this.message.groups[NestedParties.Tag]
    .map(function (nestedParties) {
      return new NestedParties(nestedParties);
  });
};

/* field */
PreAllocGrp.prototype.allocAccount = function () {
  return new AllocAccount(this.message.tags[AllocAccount.Tag]);
};

/* field */
PreAllocGrp.prototype.allocAcctIdsource = function () {
  return new AllocAcctIDSource(this.message.tags[AllocAcctIDSource.Tag]);
};

/* field */
PreAllocGrp.prototype.allocSettlCurrency = function () {
  return new AllocSettlCurrency(this.message.tags[AllocSettlCurrency.Tag]);
};

/* field */
PreAllocGrp.prototype.individualAllocId = function () {
  return new IndividualAllocID(this.message.tags[IndividualAllocID.Tag]);
};

/* field */
PreAllocGrp.prototype.allocQty = function () {
  return new AllocQty(this.message.tags[AllocQty.Tag]);
};

/* field */
PreAllocGrp.prototype.custodialLotId = function () {
  return new CustodialLotID(this.message.tags[CustodialLotID.Tag]);
};

/* field */
PreAllocGrp.prototype.versusPurchaseDate = function () {
  return new VersusPurchaseDate(this.message.tags[VersusPurchaseDate.Tag]);
};

/* field */
PreAllocGrp.prototype.versusPurchasePrice = function () {
  return new VersusPurchasePrice(this.message.tags[VersusPurchasePrice.Tag]);
};

/* field */
PreAllocGrp.prototype.currentCostBasis = function () {
  return new CurrentCostBasis(this.message.tags[CurrentCostBasis.Tag]);
};

/* end group */

PreAllocGrp.Tag = '78';

module.exports = PreAllocGrp;