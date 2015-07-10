var NoPositions = require('../fields/NoPositions');
var NestedParties = require('../components/NestedParties');
var PosType = require('../fields/PosType');
var LongQty = require('../fields/LongQty');
var ShortQty = require('../fields/ShortQty');
var CoveredQty = require('../fields/CoveredQty');
var PosQtyStatus = require('../fields/PosQtyStatus');
var QuantityDate = require('../fields/QuantityDate');
var PosQtyUnitOfMeasure = require('../fields/PosQtyUnitOfMeasure');
var PosQtyUnitOfMeasureCurrency = require('../fields/PosQtyUnitOfMeasureCurrency');

function PositionQty (positionQty) {
  this.message = positionQty;
}

/* group */

/* component */
PositionQty.prototype.nestedParties = function () {
  return this.message.groups[NestedParties.Tag]
    .map(function (nestedParties) {
      return new NestedParties(nestedParties);
  });
};

/* field */
PositionQty.prototype.posType = function () {
  return new PosType(this.message.tags[PosType.Tag]);
};

/* field */
PositionQty.prototype.longQty = function () {
  return new LongQty(this.message.tags[LongQty.Tag]);
};

/* field */
PositionQty.prototype.shortQty = function () {
  return new ShortQty(this.message.tags[ShortQty.Tag]);
};

/* field */
PositionQty.prototype.coveredQty = function () {
  return new CoveredQty(this.message.tags[CoveredQty.Tag]);
};

/* field */
PositionQty.prototype.posQtyStatus = function () {
  return new PosQtyStatus(this.message.tags[PosQtyStatus.Tag]);
};

/* field */
PositionQty.prototype.quantityDate = function () {
  return new QuantityDate(this.message.tags[QuantityDate.Tag]);
};

/* field */
PositionQty.prototype.posQtyUnitOfMeasure = function () {
  return new PosQtyUnitOfMeasure(this.message.tags[PosQtyUnitOfMeasure.Tag]);
};

/* field */
PositionQty.prototype.posQtyUnitOfMeasureCurrency = function () {
  return new PosQtyUnitOfMeasureCurrency(this.message.tags[PosQtyUnitOfMeasureCurrency.Tag]);
};

/* end group */

PositionQty.Tag = '702';

module.exports = PositionQty;