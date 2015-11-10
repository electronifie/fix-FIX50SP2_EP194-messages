var Instrument = require('../components/Instrument');
var InstrumentExtension = require('../components/InstrumentExtension');
var FinancingDetails = require('../components/FinancingDetails');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var SecurityReqID = require('../fields/SecurityReqID');
var SecurityListRequestType = require('../fields/SecurityListRequestType');
var SecurityListID = require('../fields/SecurityListID');
var SecurityListType = require('../fields/SecurityListType');
var SecurityListTypeSource = require('../fields/SecurityListTypeSource');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');
var Currency = require('../fields/Currency');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var SubscriptionRequestType = require('../fields/SubscriptionRequestType');

function SecurityListRequest (securityListRequest) {
  this.message = securityListRequest;
}

SecurityListRequest.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityListRequest.Tags.Instrument] === undefined) return null;
  return this.message.groups[SecurityListRequest.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

SecurityListRequest.prototype.instrumentExtension = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityListRequest.Tags.InstrumentExtension] === undefined) return null;
  return this.message.groups[SecurityListRequest.Tags.InstrumentExtension]
    .map(function (instrumentExtension) {
      return new InstrumentExtension(instrumentExtension);
  });
};

SecurityListRequest.prototype.financingDetails = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityListRequest.Tags.FinancingDetails] === undefined) return null;
  return this.message.groups[SecurityListRequest.Tags.FinancingDetails]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

SecurityListRequest.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityListRequest.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[SecurityListRequest.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

SecurityListRequest.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityListRequest.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[SecurityListRequest.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

SecurityListRequest.prototype.securityReqId = function () {
  return new SecurityReqID(this.message.tags[SecurityListRequest.Tags.SecurityReqID]);
};

SecurityListRequest.prototype.securityListRequestType = function () {
  return new SecurityListRequestType(this.message.tags[SecurityListRequest.Tags.SecurityListRequestType]);
};

SecurityListRequest.prototype.securityListId = function () {
  return new SecurityListID(this.message.tags[SecurityListRequest.Tags.SecurityListID]);
};

SecurityListRequest.prototype.securityListType = function () {
  return new SecurityListType(this.message.tags[SecurityListRequest.Tags.SecurityListType]);
};

SecurityListRequest.prototype.securityListTypeSource = function () {
  return new SecurityListTypeSource(this.message.tags[SecurityListRequest.Tags.SecurityListTypeSource]);
};

SecurityListRequest.prototype.marketId = function () {
  return new MarketID(this.message.tags[SecurityListRequest.Tags.MarketID]);
};

SecurityListRequest.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[SecurityListRequest.Tags.MarketSegmentID]);
};

SecurityListRequest.prototype.currency = function () {
  return new Currency(this.message.tags[SecurityListRequest.Tags.Currency]);
};

SecurityListRequest.prototype.text = function () {
  return new Text(this.message.tags[SecurityListRequest.Tags.Text]);
};

SecurityListRequest.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[SecurityListRequest.Tags.EncodedTextLen]);
};

SecurityListRequest.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[SecurityListRequest.Tags.EncodedText]);
};

SecurityListRequest.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[SecurityListRequest.Tags.TradingSessionID]);
};

SecurityListRequest.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[SecurityListRequest.Tags.TradingSessionSubID]);
};

SecurityListRequest.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[SecurityListRequest.Tags.SubscriptionRequestType]);
};

SecurityListRequest.Tags = {
  Instrument: '55',
  InstrumentExtension: '668',
  FinancingDetails: '913',
  UndInstrmtGrp: '711',
  InstrmtLegGrp: '555',
  SecurityReqID: '320',
  SecurityListRequestType: '559',
  SecurityListID: '1465',
  SecurityListType: '1470',
  SecurityListTypeSource: '1471',
  MarketID: '1301',
  MarketSegmentID: '1300',
  Currency: '15',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  TradingSessionID: '336',
  TradingSessionSubID: '625',
  SubscriptionRequestType: '263',
};

SecurityListRequest.msgType = 'x';

module.exports = SecurityListRequest;