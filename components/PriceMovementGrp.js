var NoPriceMovements = require('../fields/NoPriceMovements');
var PriceMovementValueGrp = require('../components/PriceMovementValueGrp');
var ClearingAccountTypeGrp = require('../components/ClearingAccountTypeGrp');

function PriceMovementGrp (priceMovementGrp) {
  this.message = priceMovementGrp;
}

/* group */

/* component */
PriceMovementGrp.prototype.priceMovementValueGrp = function () {
  return this.message.groups[PriceMovementValueGrp.Tag]
    .map(function (priceMovementValueGrp) {
      return new PriceMovementValueGrp(priceMovementValueGrp);
  });
};

/* component */
PriceMovementGrp.prototype.clearingAccountTypeGrp = function () {
  return this.message.groups[ClearingAccountTypeGrp.Tag]
    .map(function (clearingAccountTypeGrp) {
      return new ClearingAccountTypeGrp(clearingAccountTypeGrp);
  });
};

/* end group */

PriceMovementGrp.Tag = '1919';

module.exports = PriceMovementGrp;