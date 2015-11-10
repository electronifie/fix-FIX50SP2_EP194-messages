var Parties = require('../components/Parties');
var Instrument = require('../components/Instrument');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var MDStatisticReqGrp = require('../components/MDStatisticReqGrp');
var MDStatisticReqID = require('../fields/MDStatisticReqID');
var SubscriptionRequestType = require('../fields/SubscriptionRequestType');
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

function MarketDataStatisticsRequest (marketDataStatisticsRequest) {
  this.message = marketDataStatisticsRequest;
}

MarketDataStatisticsRequest.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarketDataStatisticsRequest.Tags.Parties] === undefined) return null;
  return this.message.groups[MarketDataStatisticsRequest.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

MarketDataStatisticsRequest.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarketDataStatisticsRequest.Tags.Instrument] === undefined) return null;
  return this.message.groups[MarketDataStatisticsRequest.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

MarketDataStatisticsRequest.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarketDataStatisticsRequest.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[MarketDataStatisticsRequest.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

MarketDataStatisticsRequest.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarketDataStatisticsRequest.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[MarketDataStatisticsRequest.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

MarketDataStatisticsRequest.prototype.mdstatisticReqGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarketDataStatisticsRequest.Tags.MDStatisticReqGrp] === undefined) return null;
  return this.message.groups[MarketDataStatisticsRequest.Tags.MDStatisticReqGrp]
    .map(function (mdstatisticReqGrp) {
      return new MDStatisticReqGrp(mdstatisticReqGrp);
  });
};

MarketDataStatisticsRequest.prototype.mdstatisticReqId = function () {
  return new MDStatisticReqID(this.message.tags[MarketDataStatisticsRequest.Tags.MDStatisticReqID]);
};

MarketDataStatisticsRequest.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[MarketDataStatisticsRequest.Tags.SubscriptionRequestType]);
};

MarketDataStatisticsRequest.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[MarketDataStatisticsRequest.Tags.TradeDate]);
};

MarketDataStatisticsRequest.prototype.marketId = function () {
  return new MarketID(this.message.tags[MarketDataStatisticsRequest.Tags.MarketID]);
};

MarketDataStatisticsRequest.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[MarketDataStatisticsRequest.Tags.MarketSegmentID]);
};

MarketDataStatisticsRequest.prototype.marketSegmentDesc = function () {
  return new MarketSegmentDesc(this.message.tags[MarketDataStatisticsRequest.Tags.MarketSegmentDesc]);
};

MarketDataStatisticsRequest.prototype.encodedMktSegmDescLen = function () {
  return new EncodedMktSegmDescLen(this.message.tags[MarketDataStatisticsRequest.Tags.EncodedMktSegmDescLen]);
};

MarketDataStatisticsRequest.prototype.encodedMktSegmDesc = function () {
  return new EncodedMktSegmDesc(this.message.tags[MarketDataStatisticsRequest.Tags.EncodedMktSegmDesc]);
};

MarketDataStatisticsRequest.prototype.securityListId = function () {
  return new SecurityListID(this.message.tags[MarketDataStatisticsRequest.Tags.SecurityListID]);
};

MarketDataStatisticsRequest.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[MarketDataStatisticsRequest.Tags.TransactTime]);
};

MarketDataStatisticsRequest.prototype.text = function () {
  return new Text(this.message.tags[MarketDataStatisticsRequest.Tags.Text]);
};

MarketDataStatisticsRequest.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[MarketDataStatisticsRequest.Tags.EncodedTextLen]);
};

MarketDataStatisticsRequest.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[MarketDataStatisticsRequest.Tags.EncodedText]);
};

MarketDataStatisticsRequest.Tags = {
  Parties: '453',
  Instrument: '55',
  UndInstrmtGrp: '711',
  InstrmtLegGrp: '555',
  MDStatisticReqGrp: '2474',
  MDStatisticReqID: '2452',
  SubscriptionRequestType: '263',
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

MarketDataStatisticsRequest.msgType = 'DO';

module.exports = MarketDataStatisticsRequest;