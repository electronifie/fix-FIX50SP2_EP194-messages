var NoRelatedSym = require('../fields/NoRelatedSym');
var Instrument = require('../components/Instrument');
var SecondaryPriceLimits = require('../components/SecondaryPriceLimits');
var InstrumentExtension = require('../components/InstrumentExtension');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var Currency = require('../fields/Currency');
var CorporateAction = require('../fields/CorporateAction');
var RelSymTransactTime = require('../fields/RelSymTransactTime');
var NumOfSimpleInstruments = require('../fields/NumOfSimpleInstruments');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function RelSymDerivSecGrp (relSymDerivSecGrp) {
  this.message = relSymDerivSecGrp;
}

/* group */

/* component */
RelSymDerivSecGrp.prototype.instrument = function () {
  return this.message.groups[Instrument.Tag]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

/* component */
RelSymDerivSecGrp.prototype.secondaryPriceLimits = function () {
  return this.message.groups[SecondaryPriceLimits.Tag]
    .map(function (secondaryPriceLimits) {
      return new SecondaryPriceLimits(secondaryPriceLimits);
  });
};

/* component */
RelSymDerivSecGrp.prototype.instrumentExtension = function () {
  return this.message.groups[InstrumentExtension.Tag]
    .map(function (instrumentExtension) {
      return new InstrumentExtension(instrumentExtension);
  });
};

/* component */
RelSymDerivSecGrp.prototype.instrmtLegGrp = function () {
  return this.message.groups[InstrmtLegGrp.Tag]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

/* field */
RelSymDerivSecGrp.prototype.currency = function () {
  return new Currency(this.message.tags[Currency.Tag]);
};

/* field */
RelSymDerivSecGrp.prototype.corporateAction = function () {
  return new CorporateAction(this.message.tags[CorporateAction.Tag]);
};

/* field */
RelSymDerivSecGrp.prototype.relSymTransactTime = function () {
  return new RelSymTransactTime(this.message.tags[RelSymTransactTime.Tag]);
};

/* field */
RelSymDerivSecGrp.prototype.numOfSimpleInstruments = function () {
  return new NumOfSimpleInstruments(this.message.tags[NumOfSimpleInstruments.Tag]);
};

/* field */
RelSymDerivSecGrp.prototype.text = function () {
  return new Text(this.message.tags[Text.Tag]);
};

/* field */
RelSymDerivSecGrp.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[EncodedTextLen.Tag]);
};

/* field */
RelSymDerivSecGrp.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[EncodedText.Tag]);
};

/* end group */

RelSymDerivSecGrp.Tag = '146';

module.exports = RelSymDerivSecGrp;