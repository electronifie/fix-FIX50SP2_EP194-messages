var NoInstrmtMatchSides = require('../fields/NoInstrmtMatchSides');
var Instrument = require('../components/Instrument');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var TrdMatchSideGrp = require('../components/TrdMatchSideGrp');
var TrdMatchSubID = require('../fields/TrdMatchSubID');
var Quantity = require('../fields/Quantity');
var Currency = require('../fields/Currency');
var SettlCurrency = require('../fields/SettlCurrency');
var QtyType = require('../fields/QtyType');
var LastQty = require('../fields/LastQty');
var PriceType = require('../fields/PriceType');
var LastPx = require('../fields/LastPx');
var LastMkt = require('../fields/LastMkt');

function InstrmtMatchSideGrp (instrmtMatchSideGrp) {
  this.message = instrmtMatchSideGrp;
}

/* group */

/* component */
InstrmtMatchSideGrp.prototype.instrument = function () {
  return this.message.groups[Instrument.Tag]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

/* component */
InstrmtMatchSideGrp.prototype.instrmtLegGrp = function () {
  return this.message.groups[InstrmtLegGrp.Tag]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

/* component */
InstrmtMatchSideGrp.prototype.undInstrmtGrp = function () {
  return this.message.groups[UndInstrmtGrp.Tag]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

/* component */
InstrmtMatchSideGrp.prototype.trdMatchSideGrp = function () {
  return this.message.groups[TrdMatchSideGrp.Tag]
    .map(function (trdMatchSideGrp) {
      return new TrdMatchSideGrp(trdMatchSideGrp);
  });
};

/* field */
InstrmtMatchSideGrp.prototype.trdMatchSubId = function () {
  return new TrdMatchSubID(this.message.tags[TrdMatchSubID.Tag]);
};

/* field */
InstrmtMatchSideGrp.prototype.quantity = function () {
  return new Quantity(this.message.tags[Quantity.Tag]);
};

/* field */
InstrmtMatchSideGrp.prototype.currency = function () {
  return new Currency(this.message.tags[Currency.Tag]);
};

/* field */
InstrmtMatchSideGrp.prototype.settlCurrency = function () {
  return new SettlCurrency(this.message.tags[SettlCurrency.Tag]);
};

/* field */
InstrmtMatchSideGrp.prototype.qtyType = function () {
  return new QtyType(this.message.tags[QtyType.Tag]);
};

/* field */
InstrmtMatchSideGrp.prototype.lastQty = function () {
  return new LastQty(this.message.tags[LastQty.Tag]);
};

/* field */
InstrmtMatchSideGrp.prototype.priceType = function () {
  return new PriceType(this.message.tags[PriceType.Tag]);
};

/* field */
InstrmtMatchSideGrp.prototype.lastPx = function () {
  return new LastPx(this.message.tags[LastPx.Tag]);
};

/* field */
InstrmtMatchSideGrp.prototype.lastMkt = function () {
  return new LastMkt(this.message.tags[LastMkt.Tag]);
};

/* end group */

InstrmtMatchSideGrp.Tag = '1889';

module.exports = InstrmtMatchSideGrp;