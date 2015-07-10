var NoRelatedSym = require('../fields/NoRelatedSym');
var Instrument = require('../components/Instrument');
var InstrumentExtension = require('../components/InstrumentExtension');
var SecurityClassificationGrp = require('../components/SecurityClassificationGrp');
var FinancingDetails = require('../components/FinancingDetails');
var SecurityTradingRules = require('../components/SecurityTradingRules');
var StrikeRules = require('../components/StrikeRules');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var Stipulations = require('../components/Stipulations');
var InstrmtLegSecListGrp = require('../components/InstrmtLegSecListGrp');
var SpreadOrBenchmarkCurveData = require('../components/SpreadOrBenchmarkCurveData');
var YieldData = require('../components/YieldData');
var PriceMovementGrp = require('../components/PriceMovementGrp');
var Currency = require('../fields/Currency');
var RelSymTransactTime = require('../fields/RelSymTransactTime');
var NumOfSimpleInstruments = require('../fields/NumOfSimpleInstruments');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function SecListGrp (secListGrp) {
  this.message = secListGrp;
}

/* group */

/* component */
SecListGrp.prototype.instrument = function () {
  return this.message.groups[Instrument.Tag]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

/* component */
SecListGrp.prototype.instrumentExtension = function () {
  return this.message.groups[InstrumentExtension.Tag]
    .map(function (instrumentExtension) {
      return new InstrumentExtension(instrumentExtension);
  });
};

/* component */
SecListGrp.prototype.securityClassificationGrp = function () {
  return this.message.groups[SecurityClassificationGrp.Tag]
    .map(function (securityClassificationGrp) {
      return new SecurityClassificationGrp(securityClassificationGrp);
  });
};

/* component */
SecListGrp.prototype.financingDetails = function () {
  return this.message.groups[FinancingDetails.Tag]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

/* component */
SecListGrp.prototype.securityTradingRules = function () {
  return this.message.groups[SecurityTradingRules.Tag]
    .map(function (securityTradingRules) {
      return new SecurityTradingRules(securityTradingRules);
  });
};

/* component */
SecListGrp.prototype.strikeRules = function () {
  return this.message.groups[StrikeRules.Tag]
    .map(function (strikeRules) {
      return new StrikeRules(strikeRules);
  });
};

/* component */
SecListGrp.prototype.undInstrmtGrp = function () {
  return this.message.groups[UndInstrmtGrp.Tag]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

/* component */
SecListGrp.prototype.stipulations = function () {
  return this.message.groups[Stipulations.Tag]
    .map(function (stipulations) {
      return new Stipulations(stipulations);
  });
};

/* component */
SecListGrp.prototype.instrmtLegSecListGrp = function () {
  return this.message.groups[InstrmtLegSecListGrp.Tag]
    .map(function (instrmtLegSecListGrp) {
      return new InstrmtLegSecListGrp(instrmtLegSecListGrp);
  });
};

/* component */
SecListGrp.prototype.spreadOrBenchmarkCurveData = function () {
  return this.message.groups[SpreadOrBenchmarkCurveData.Tag]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

/* component */
SecListGrp.prototype.yieldData = function () {
  return this.message.groups[YieldData.Tag]
    .map(function (yieldData) {
      return new YieldData(yieldData);
  });
};

/* component */
SecListGrp.prototype.priceMovementGrp = function () {
  return this.message.groups[PriceMovementGrp.Tag]
    .map(function (priceMovementGrp) {
      return new PriceMovementGrp(priceMovementGrp);
  });
};

/* field */
SecListGrp.prototype.currency = function () {
  return new Currency(this.message.tags[Currency.Tag]);
};

/* field */
SecListGrp.prototype.relSymTransactTime = function () {
  return new RelSymTransactTime(this.message.tags[RelSymTransactTime.Tag]);
};

/* field */
SecListGrp.prototype.numOfSimpleInstruments = function () {
  return new NumOfSimpleInstruments(this.message.tags[NumOfSimpleInstruments.Tag]);
};

/* field */
SecListGrp.prototype.text = function () {
  return new Text(this.message.tags[Text.Tag]);
};

/* field */
SecListGrp.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[EncodedTextLen.Tag]);
};

/* field */
SecListGrp.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[EncodedText.Tag]);
};

/* end group */

SecListGrp.Tag = '146';

module.exports = SecListGrp;