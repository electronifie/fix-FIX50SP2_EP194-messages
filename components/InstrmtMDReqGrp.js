var NoRelatedSym = require('../fields/NoRelatedSym');
var Instrument = require('../components/Instrument');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var SpreadOrBenchmarkCurveData = require('../components/SpreadOrBenchmarkCurveData');
var Currency = require('../fields/Currency');
var QuoteType = require('../fields/QuoteType');
var SettlType = require('../fields/SettlType');
var SettlDate = require('../fields/SettlDate');
var MDEntrySize = require('../fields/MDEntrySize');
var MDStreamID = require('../fields/MDStreamID');

function InstrmtMDReqGrp (instrmtMdreqGrp) {
  this.message = instrmtMdreqGrp;
}

/* group */

/* component */
InstrmtMDReqGrp.prototype.instrument = function () {
  return this.message.groups[Instrument.Tag]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

/* component */
InstrmtMDReqGrp.prototype.undInstrmtGrp = function () {
  return this.message.groups[UndInstrmtGrp.Tag]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

/* component */
InstrmtMDReqGrp.prototype.instrmtLegGrp = function () {
  return this.message.groups[InstrmtLegGrp.Tag]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

/* component */
InstrmtMDReqGrp.prototype.spreadOrBenchmarkCurveData = function () {
  return this.message.groups[SpreadOrBenchmarkCurveData.Tag]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

/* field */
InstrmtMDReqGrp.prototype.currency = function () {
  return new Currency(this.message.tags[Currency.Tag]);
};

/* field */
InstrmtMDReqGrp.prototype.quoteType = function () {
  return new QuoteType(this.message.tags[QuoteType.Tag]);
};

/* field */
InstrmtMDReqGrp.prototype.settlType = function () {
  return new SettlType(this.message.tags[SettlType.Tag]);
};

/* field */
InstrmtMDReqGrp.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[SettlDate.Tag]);
};

/* field */
InstrmtMDReqGrp.prototype.mdentrySize = function () {
  return new MDEntrySize(this.message.tags[MDEntrySize.Tag]);
};

/* field */
InstrmtMDReqGrp.prototype.mdstreamId = function () {
  return new MDStreamID(this.message.tags[MDStreamID.Tag]);
};

/* end group */

InstrmtMDReqGrp.Tag = '146';

module.exports = InstrmtMDReqGrp;