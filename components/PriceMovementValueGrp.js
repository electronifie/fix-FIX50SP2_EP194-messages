var NoPriceMovementValues = require('../fields/NoPriceMovementValues');
var PriceMovementValue = require('../fields/PriceMovementValue');
var PriceMovementPoint = require('../fields/PriceMovementPoint');
var PriceMovementType = require('../fields/PriceMovementType');

function PriceMovementValueGrp (priceMovementValueGrp) {
  this.message = priceMovementValueGrp;
}

/* group */

/* field */
PriceMovementValueGrp.prototype.priceMovementValue = function () {
  return new PriceMovementValue(this.message.tags[PriceMovementValue.Tag]);
};

/* field */
PriceMovementValueGrp.prototype.priceMovementPoint = function () {
  return new PriceMovementPoint(this.message.tags[PriceMovementPoint.Tag]);
};

/* field */
PriceMovementValueGrp.prototype.priceMovementType = function () {
  return new PriceMovementType(this.message.tags[PriceMovementType.Tag]);
};

/* end group */

PriceMovementValueGrp.Tag = '1920';

module.exports = PriceMovementValueGrp;