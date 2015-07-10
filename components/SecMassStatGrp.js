var NoRelatedSym = require('../fields/NoRelatedSym');
var Instrument = require('../components/Instrument');
var InstrumentExtension = require('../components/InstrumentExtension');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var SecurityTradingStatus = require('../fields/SecurityTradingStatus');
var SecurityTradingEvent = require('../fields/SecurityTradingEvent');
var HaltReason = require('../fields/HaltReason');
var FinancialStatus = require('../fields/FinancialStatus');
var CorporateAction = require('../fields/CorporateAction');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function SecMassStatGrp (secMassStatGrp) {
  this.message = secMassStatGrp;
}

/* group */

/* component */
SecMassStatGrp.prototype.instrument = function () {
  return this.message.groups[Instrument.Tag]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

/* component */
SecMassStatGrp.prototype.instrumentExtension = function () {
  return this.message.groups[InstrumentExtension.Tag]
    .map(function (instrumentExtension) {
      return new InstrumentExtension(instrumentExtension);
  });
};

/* component */
SecMassStatGrp.prototype.undInstrmtGrp = function () {
  return this.message.groups[UndInstrmtGrp.Tag]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

/* component */
SecMassStatGrp.prototype.instrmtLegGrp = function () {
  return this.message.groups[InstrmtLegGrp.Tag]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

/* field */
SecMassStatGrp.prototype.securityTradingStatus = function () {
  return new SecurityTradingStatus(this.message.tags[SecurityTradingStatus.Tag]);
};

/* field */
SecMassStatGrp.prototype.securityTradingEvent = function () {
  return new SecurityTradingEvent(this.message.tags[SecurityTradingEvent.Tag]);
};

/* field */
SecMassStatGrp.prototype.haltReason = function () {
  return new HaltReason(this.message.tags[HaltReason.Tag]);
};

/* field */
SecMassStatGrp.prototype.financialStatus = function () {
  return new FinancialStatus(this.message.tags[FinancialStatus.Tag]);
};

/* field */
SecMassStatGrp.prototype.corporateAction = function () {
  return new CorporateAction(this.message.tags[CorporateAction.Tag]);
};

/* field */
SecMassStatGrp.prototype.text = function () {
  return new Text(this.message.tags[Text.Tag]);
};

/* field */
SecMassStatGrp.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[EncodedTextLen.Tag]);
};

/* field */
SecMassStatGrp.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[EncodedText.Tag]);
};

/* end group */

SecMassStatGrp.Tag = '146';

module.exports = SecMassStatGrp;