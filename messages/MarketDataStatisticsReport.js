var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var Parties = require('../components/Parties');
var Instrument = require('../components/Instrument');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var MDStatisticRptGrp = require('../components/MDStatisticRptGrp');
var MDStatisticRptID = require('../fields/MDStatisticRptID');
var MDStatisticReqID = require('../fields/MDStatisticReqID');
var MDStatisticRequestResult = require('../fields/MDStatisticRequestResult');
var UnsolicitedIndicator = require('../fields/UnsolicitedIndicator');
var TradeDate = require('../fields/TradeDate');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');
var MarketSegmentDesc = require('../fields/MarketSegmentDesc');
var EncodedMktSegmDescLen = require('../fields/EncodedMktSegmDescLen');
var EncodedMktSegmDesc = require('../fields/EncodedMktSegmDesc');
var SecurityListID = require('../fields/SecurityListID');
var TransactTime = require('../fields/TransactTime');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function MarketDataStatisticsReport (marketDataStatisticsReport) {
  this.message = marketDataStatisticsReport;
}

MarketDataStatisticsReport.prototype.applicationSequenceControl = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarketDataStatisticsReport.Tags.ApplicationSequenceControl] === undefined) return null;
  return this.message.groups[MarketDataStatisticsReport.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

MarketDataStatisticsReport.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarketDataStatisticsReport.Tags.Parties] === undefined) return null;
  return this.message.groups[MarketDataStatisticsReport.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

MarketDataStatisticsReport.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarketDataStatisticsReport.Tags.Instrument] === undefined) return null;
  return this.message.groups[MarketDataStatisticsReport.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

MarketDataStatisticsReport.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarketDataStatisticsReport.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[MarketDataStatisticsReport.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

MarketDataStatisticsReport.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarketDataStatisticsReport.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[MarketDataStatisticsReport.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

MarketDataStatisticsReport.prototype.mdstatisticRptGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarketDataStatisticsReport.Tags.MDStatisticRptGrp] === undefined) return null;
  return this.message.groups[MarketDataStatisticsReport.Tags.MDStatisticRptGrp]
    .map(function (mdstatisticRptGrp) {
      return new MDStatisticRptGrp(mdstatisticRptGrp);
  });
};

MarketDataStatisticsReport.prototype.mdstatisticRptId = function () {
  return new MDStatisticRptID(this.message.tags[MarketDataStatisticsReport.Tags.MDStatisticRptID]);
};

MarketDataStatisticsReport.prototype.mdstatisticReqId = function () {
  return new MDStatisticReqID(this.message.tags[MarketDataStatisticsReport.Tags.MDStatisticReqID]);
};

MarketDataStatisticsReport.prototype.mdstatisticRequestResult = function () {
  return new MDStatisticRequestResult(this.message.tags[MarketDataStatisticsReport.Tags.MDStatisticRequestResult]);
};

MarketDataStatisticsReport.prototype.unsolicitedIndicator = function () {
  return new UnsolicitedIndicator(this.message.tags[MarketDataStatisticsReport.Tags.UnsolicitedIndicator]);
};

MarketDataStatisticsReport.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[MarketDataStatisticsReport.Tags.TradeDate]);
};

MarketDataStatisticsReport.prototype.marketId = function () {
  return new MarketID(this.message.tags[MarketDataStatisticsReport.Tags.MarketID]);
};

MarketDataStatisticsReport.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[MarketDataStatisticsReport.Tags.MarketSegmentID]);
};

MarketDataStatisticsReport.prototype.marketSegmentDesc = function () {
  return new MarketSegmentDesc(this.message.tags[MarketDataStatisticsReport.Tags.MarketSegmentDesc]);
};

MarketDataStatisticsReport.prototype.encodedMktSegmDescLen = function () {
  return new EncodedMktSegmDescLen(this.message.tags[MarketDataStatisticsReport.Tags.EncodedMktSegmDescLen]);
};

MarketDataStatisticsReport.prototype.encodedMktSegmDesc = function () {
  return new EncodedMktSegmDesc(this.message.tags[MarketDataStatisticsReport.Tags.EncodedMktSegmDesc]);
};

MarketDataStatisticsReport.prototype.securityListId = function () {
  return new SecurityListID(this.message.tags[MarketDataStatisticsReport.Tags.SecurityListID]);
};

MarketDataStatisticsReport.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[MarketDataStatisticsReport.Tags.TransactTime]);
};

MarketDataStatisticsReport.prototype.text = function () {
  return new Text(this.message.tags[MarketDataStatisticsReport.Tags.Text]);
};

MarketDataStatisticsReport.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[MarketDataStatisticsReport.Tags.EncodedTextLen]);
};

MarketDataStatisticsReport.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[MarketDataStatisticsReport.Tags.EncodedText]);
};

MarketDataStatisticsReport.Tags = {
  ApplicationSequenceControl: '1180',
  Parties: '453',
  Instrument: '55',
  UndInstrmtGrp: '711',
  InstrmtLegGrp: '555',
  MDStatisticRptGrp: '2474',
  MDStatisticRptID: '2453',
  MDStatisticReqID: '2452',
  MDStatisticRequestResult: '2473',
  UnsolicitedIndicator: '325',
  TradeDate: '75',
  MarketID: '1301',
  MarketSegmentID: '1300',
  MarketSegmentDesc: '1396',
  EncodedMktSegmDescLen: '1397',
  EncodedMktSegmDesc: '1398',
  SecurityListID: '1465',
  TransactTime: '60',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

MarketDataStatisticsReport.msgType = 'DP';

module.exports = MarketDataStatisticsReport;