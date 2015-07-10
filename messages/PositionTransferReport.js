var Parties = require('../components/Parties');
var TargetParties = require('../components/TargetParties');
var Instrument = require('../components/Instrument');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var PositionQty = require('../components/PositionQty');
var PositionAmountData = require('../components/PositionAmountData');
var TransferInstructionID = require('../fields/TransferInstructionID');
var TransferReportID = require('../fields/TransferReportID');
var TransferID = require('../fields/TransferID');
var TransferTransType = require('../fields/TransferTransType');
var TransferReportType = require('../fields/TransferReportType');
var TransferStatus = require('../fields/TransferStatus');
var TransferRejectReason = require('../fields/TransferRejectReason');
var TransferScope = require('../fields/TransferScope');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var TradeDate = require('../fields/TradeDate');
var TransactTime = require('../fields/TransactTime');
var ClearingTradePrice = require('../fields/ClearingTradePrice');
var Currency = require('../fields/Currency');
var PriceType = require('../fields/PriceType');
var RejectText = require('../fields/RejectText');
var EncodedRejectTextLen = require('../fields/EncodedRejectTextLen');
var EncodedRejectText = require('../fields/EncodedRejectText');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function PositionTransferReport (positionTransferReport) {
  this.message = positionTransferReport;
}

PositionTransferReport.prototype.parties = function () {
  return this.message.groups[PositionTransferReport.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

PositionTransferReport.prototype.targetParties = function () {
  return this.message.groups[PositionTransferReport.Tags.TargetParties]
    .map(function (targetParties) {
      return new TargetParties(targetParties);
  });
};

PositionTransferReport.prototype.instrument = function () {
  return this.message.groups[PositionTransferReport.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

PositionTransferReport.prototype.undInstrmtGrp = function () {
  return this.message.groups[PositionTransferReport.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

PositionTransferReport.prototype.positionQty = function () {
  return this.message.groups[PositionTransferReport.Tags.PositionQty]
    .map(function (positionQty) {
      return new PositionQty(positionQty);
  });
};

PositionTransferReport.prototype.positionAmountData = function () {
  return this.message.groups[PositionTransferReport.Tags.PositionAmountData]
    .map(function (positionAmountData) {
      return new PositionAmountData(positionAmountData);
  });
};

PositionTransferReport.prototype.transferInstructionId = function () {
  return new TransferInstructionID(this.message.tags[PositionTransferReport.Tags.TransferInstructionID]);
};

PositionTransferReport.prototype.transferReportId = function () {
  return new TransferReportID(this.message.tags[PositionTransferReport.Tags.TransferReportID]);
};

PositionTransferReport.prototype.transferId = function () {
  return new TransferID(this.message.tags[PositionTransferReport.Tags.TransferID]);
};

PositionTransferReport.prototype.transferTransType = function () {
  return new TransferTransType(this.message.tags[PositionTransferReport.Tags.TransferTransType]);
};

PositionTransferReport.prototype.transferReportType = function () {
  return new TransferReportType(this.message.tags[PositionTransferReport.Tags.TransferReportType]);
};

PositionTransferReport.prototype.transferStatus = function () {
  return new TransferStatus(this.message.tags[PositionTransferReport.Tags.TransferStatus]);
};

PositionTransferReport.prototype.transferRejectReason = function () {
  return new TransferRejectReason(this.message.tags[PositionTransferReport.Tags.TransferRejectReason]);
};

PositionTransferReport.prototype.transferScope = function () {
  return new TransferScope(this.message.tags[PositionTransferReport.Tags.TransferScope]);
};

PositionTransferReport.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[PositionTransferReport.Tags.ClearingBusinessDate]);
};

PositionTransferReport.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[PositionTransferReport.Tags.TradeDate]);
};

PositionTransferReport.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[PositionTransferReport.Tags.TransactTime]);
};

PositionTransferReport.prototype.clearingTradePrice = function () {
  return new ClearingTradePrice(this.message.tags[PositionTransferReport.Tags.ClearingTradePrice]);
};

PositionTransferReport.prototype.currency = function () {
  return new Currency(this.message.tags[PositionTransferReport.Tags.Currency]);
};

PositionTransferReport.prototype.priceType = function () {
  return new PriceType(this.message.tags[PositionTransferReport.Tags.PriceType]);
};

PositionTransferReport.prototype.rejectText = function () {
  return new RejectText(this.message.tags[PositionTransferReport.Tags.RejectText]);
};

PositionTransferReport.prototype.encodedRejectTextLen = function () {
  return new EncodedRejectTextLen(this.message.tags[PositionTransferReport.Tags.EncodedRejectTextLen]);
};

PositionTransferReport.prototype.encodedRejectText = function () {
  return new EncodedRejectText(this.message.tags[PositionTransferReport.Tags.EncodedRejectText]);
};

PositionTransferReport.prototype.text = function () {
  return new Text(this.message.tags[PositionTransferReport.Tags.Text]);
};

PositionTransferReport.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[PositionTransferReport.Tags.EncodedTextLen]);
};

PositionTransferReport.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[PositionTransferReport.Tags.EncodedText]);
};

PositionTransferReport.Tags = {
  Parties: '453',
  TargetParties: '1461',
  Instrument: '55',
  UndInstrmtGrp: '711',
  PositionQty: '702',
  PositionAmountData: '753',
  TransferInstructionID: '2436',
  TransferReportID: '2438',
  TransferID: '2437',
  TransferTransType: '2439',
  TransferReportType: '2444',
  TransferStatus: '2442',
  TransferRejectReason: '2443',
  TransferScope: '2441',
  ClearingBusinessDate: '715',
  TradeDate: '75',
  TransactTime: '60',
  ClearingTradePrice: '1596',
  Currency: '15',
  PriceType: '423',
  RejectText: '1328',
  EncodedRejectTextLen: '1664',
  EncodedRejectText: '1665',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

PositionTransferReport.msgType = 'DN';

module.exports = PositionTransferReport;