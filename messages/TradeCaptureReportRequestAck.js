var Instrument = require('../components/Instrument');
var InstrumentExtension = require('../components/InstrumentExtension');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var TradeRequestID = require('../fields/TradeRequestID');
var TradeID = require('../fields/TradeID');
var SecondaryTradeID = require('../fields/SecondaryTradeID');
var FirmTradeID = require('../fields/FirmTradeID');
var SecondaryFirmTradeID = require('../fields/SecondaryFirmTradeID');
var TradeRequestType = require('../fields/TradeRequestType');
var SubscriptionRequestType = require('../fields/SubscriptionRequestType');
var TotNumTradeReports = require('../fields/TotNumTradeReports');
var TradeRequestResult = require('../fields/TradeRequestResult');
var TradeRequestStatus = require('../fields/TradeRequestStatus');
var MultiLegReportingType = require('../fields/MultiLegReportingType');
var ResponseTransportType = require('../fields/ResponseTransportType');
var ResponseDestination = require('../fields/ResponseDestination');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var MessageEventSource = require('../fields/MessageEventSource');

function TradeCaptureReportRequestAck (tradeCaptureReportRequestAck) {
  this.message = tradeCaptureReportRequestAck;
}

TradeCaptureReportRequestAck.prototype.instrument = function () {
  return this.message.groups[TradeCaptureReportRequestAck.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

TradeCaptureReportRequestAck.prototype.instrumentExtension = function () {
  return this.message.groups[TradeCaptureReportRequestAck.Tags.InstrumentExtension]
    .map(function (instrumentExtension) {
      return new InstrumentExtension(instrumentExtension);
  });
};

TradeCaptureReportRequestAck.prototype.undInstrmtGrp = function () {
  return this.message.groups[TradeCaptureReportRequestAck.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

TradeCaptureReportRequestAck.prototype.instrmtLegGrp = function () {
  return this.message.groups[TradeCaptureReportRequestAck.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

TradeCaptureReportRequestAck.prototype.tradeRequestId = function () {
  return new TradeRequestID(this.message.tags[TradeCaptureReportRequestAck.Tags.TradeRequestID]);
};

TradeCaptureReportRequestAck.prototype.tradeId = function () {
  return new TradeID(this.message.tags[TradeCaptureReportRequestAck.Tags.TradeID]);
};

TradeCaptureReportRequestAck.prototype.secondaryTradeId = function () {
  return new SecondaryTradeID(this.message.tags[TradeCaptureReportRequestAck.Tags.SecondaryTradeID]);
};

TradeCaptureReportRequestAck.prototype.firmTradeId = function () {
  return new FirmTradeID(this.message.tags[TradeCaptureReportRequestAck.Tags.FirmTradeID]);
};

TradeCaptureReportRequestAck.prototype.secondaryFirmTradeId = function () {
  return new SecondaryFirmTradeID(this.message.tags[TradeCaptureReportRequestAck.Tags.SecondaryFirmTradeID]);
};

TradeCaptureReportRequestAck.prototype.tradeRequestType = function () {
  return new TradeRequestType(this.message.tags[TradeCaptureReportRequestAck.Tags.TradeRequestType]);
};

TradeCaptureReportRequestAck.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[TradeCaptureReportRequestAck.Tags.SubscriptionRequestType]);
};

TradeCaptureReportRequestAck.prototype.totNumTradeReports = function () {
  return new TotNumTradeReports(this.message.tags[TradeCaptureReportRequestAck.Tags.TotNumTradeReports]);
};

TradeCaptureReportRequestAck.prototype.tradeRequestResult = function () {
  return new TradeRequestResult(this.message.tags[TradeCaptureReportRequestAck.Tags.TradeRequestResult]);
};

TradeCaptureReportRequestAck.prototype.tradeRequestStatus = function () {
  return new TradeRequestStatus(this.message.tags[TradeCaptureReportRequestAck.Tags.TradeRequestStatus]);
};

TradeCaptureReportRequestAck.prototype.multiLegReportingType = function () {
  return new MultiLegReportingType(this.message.tags[TradeCaptureReportRequestAck.Tags.MultiLegReportingType]);
};

TradeCaptureReportRequestAck.prototype.responseTransportType = function () {
  return new ResponseTransportType(this.message.tags[TradeCaptureReportRequestAck.Tags.ResponseTransportType]);
};

TradeCaptureReportRequestAck.prototype.responseDestination = function () {
  return new ResponseDestination(this.message.tags[TradeCaptureReportRequestAck.Tags.ResponseDestination]);
};

TradeCaptureReportRequestAck.prototype.text = function () {
  return new Text(this.message.tags[TradeCaptureReportRequestAck.Tags.Text]);
};

TradeCaptureReportRequestAck.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[TradeCaptureReportRequestAck.Tags.EncodedTextLen]);
};

TradeCaptureReportRequestAck.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[TradeCaptureReportRequestAck.Tags.EncodedText]);
};

TradeCaptureReportRequestAck.prototype.messageEventSource = function () {
  return new MessageEventSource(this.message.tags[TradeCaptureReportRequestAck.Tags.MessageEventSource]);
};

TradeCaptureReportRequestAck.Tags = {
  Instrument: '55',
  InstrumentExtension: '668',
  UndInstrmtGrp: '711',
  InstrmtLegGrp: '555',
  TradeRequestID: '568',
  TradeID: '1003',
  SecondaryTradeID: '1040',
  FirmTradeID: '1041',
  SecondaryFirmTradeID: '1042',
  TradeRequestType: '569',
  SubscriptionRequestType: '263',
  TotNumTradeReports: '748',
  TradeRequestResult: '749',
  TradeRequestStatus: '750',
  MultiLegReportingType: '442',
  ResponseTransportType: '725',
  ResponseDestination: '726',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  MessageEventSource: '1011',
};

TradeCaptureReportRequestAck.msgType = 'AQ';

module.exports = TradeCaptureReportRequestAck;