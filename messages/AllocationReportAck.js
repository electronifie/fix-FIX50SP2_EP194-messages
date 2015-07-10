var Instrument = require('../components/Instrument');
var Parties = require('../components/Parties');
var RegulatoryTradeIDGrp = require('../components/RegulatoryTradeIDGrp');
var AllocAckGrp = require('../components/AllocAckGrp');
var AllocReportID = require('../fields/AllocReportID');
var AllocID = require('../fields/AllocID');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var AvgPxIndicator = require('../fields/AvgPxIndicator');
var Quantity = require('../fields/Quantity');
var AllocTransType = require('../fields/AllocTransType');
var SecondaryAllocID = require('../fields/SecondaryAllocID');
var AllocGroupID = require('../fields/AllocGroupID');
var FirmGroupID = require('../fields/FirmGroupID');
var AvgPxGroupID = require('../fields/AvgPxGroupID');
var TradeDate = require('../fields/TradeDate');
var TransactTime = require('../fields/TransactTime');
var AllocStatus = require('../fields/AllocStatus');
var AllocRejCode = require('../fields/AllocRejCode');
var AllocReportType = require('../fields/AllocReportType');
var AllocIntermedReqType = require('../fields/AllocIntermedReqType');
var MatchStatus = require('../fields/MatchStatus');
var CustOrderHandlingInst = require('../fields/CustOrderHandlingInst');
var OrderHandlingInstSource = require('../fields/OrderHandlingInstSource');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var RejectText = require('../fields/RejectText');
var EncodedRejectTextLen = require('../fields/EncodedRejectTextLen');
var EncodedRejectText = require('../fields/EncodedRejectText');

function AllocationReportAck (allocationReportAck) {
  this.message = allocationReportAck;
}

AllocationReportAck.prototype.instrument = function () {
  return this.message.groups[AllocationReportAck.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

AllocationReportAck.prototype.parties = function () {
  return this.message.groups[AllocationReportAck.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

AllocationReportAck.prototype.regulatoryTradeIdgrp = function () {
  return this.message.groups[AllocationReportAck.Tags.RegulatoryTradeIDGrp]
    .map(function (regulatoryTradeIdgrp) {
      return new RegulatoryTradeIDGrp(regulatoryTradeIdgrp);
  });
};

AllocationReportAck.prototype.allocAckGrp = function () {
  return this.message.groups[AllocationReportAck.Tags.AllocAckGrp]
    .map(function (allocAckGrp) {
      return new AllocAckGrp(allocAckGrp);
  });
};

AllocationReportAck.prototype.allocReportId = function () {
  return new AllocReportID(this.message.tags[AllocationReportAck.Tags.AllocReportID]);
};

AllocationReportAck.prototype.allocId = function () {
  return new AllocID(this.message.tags[AllocationReportAck.Tags.AllocID]);
};

AllocationReportAck.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[AllocationReportAck.Tags.ClearingBusinessDate]);
};

AllocationReportAck.prototype.avgPxIndicator = function () {
  return new AvgPxIndicator(this.message.tags[AllocationReportAck.Tags.AvgPxIndicator]);
};

AllocationReportAck.prototype.quantity = function () {
  return new Quantity(this.message.tags[AllocationReportAck.Tags.Quantity]);
};

AllocationReportAck.prototype.allocTransType = function () {
  return new AllocTransType(this.message.tags[AllocationReportAck.Tags.AllocTransType]);
};

AllocationReportAck.prototype.secondaryAllocId = function () {
  return new SecondaryAllocID(this.message.tags[AllocationReportAck.Tags.SecondaryAllocID]);
};

AllocationReportAck.prototype.allocGroupId = function () {
  return new AllocGroupID(this.message.tags[AllocationReportAck.Tags.AllocGroupID]);
};

AllocationReportAck.prototype.firmGroupId = function () {
  return new FirmGroupID(this.message.tags[AllocationReportAck.Tags.FirmGroupID]);
};

AllocationReportAck.prototype.avgPxGroupId = function () {
  return new AvgPxGroupID(this.message.tags[AllocationReportAck.Tags.AvgPxGroupID]);
};

AllocationReportAck.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[AllocationReportAck.Tags.TradeDate]);
};

AllocationReportAck.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[AllocationReportAck.Tags.TransactTime]);
};

AllocationReportAck.prototype.allocStatus = function () {
  return new AllocStatus(this.message.tags[AllocationReportAck.Tags.AllocStatus]);
};

AllocationReportAck.prototype.allocRejCode = function () {
  return new AllocRejCode(this.message.tags[AllocationReportAck.Tags.AllocRejCode]);
};

AllocationReportAck.prototype.allocReportType = function () {
  return new AllocReportType(this.message.tags[AllocationReportAck.Tags.AllocReportType]);
};

AllocationReportAck.prototype.allocIntermedReqType = function () {
  return new AllocIntermedReqType(this.message.tags[AllocationReportAck.Tags.AllocIntermedReqType]);
};

AllocationReportAck.prototype.matchStatus = function () {
  return new MatchStatus(this.message.tags[AllocationReportAck.Tags.MatchStatus]);
};

AllocationReportAck.prototype.custOrderHandlingInst = function () {
  return new CustOrderHandlingInst(this.message.tags[AllocationReportAck.Tags.CustOrderHandlingInst]);
};

AllocationReportAck.prototype.orderHandlingInstSource = function () {
  return new OrderHandlingInstSource(this.message.tags[AllocationReportAck.Tags.OrderHandlingInstSource]);
};

AllocationReportAck.prototype.text = function () {
  return new Text(this.message.tags[AllocationReportAck.Tags.Text]);
};

AllocationReportAck.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[AllocationReportAck.Tags.EncodedTextLen]);
};

AllocationReportAck.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[AllocationReportAck.Tags.EncodedText]);
};

AllocationReportAck.prototype.rejectText = function () {
  return new RejectText(this.message.tags[AllocationReportAck.Tags.RejectText]);
};

AllocationReportAck.prototype.encodedRejectTextLen = function () {
  return new EncodedRejectTextLen(this.message.tags[AllocationReportAck.Tags.EncodedRejectTextLen]);
};

AllocationReportAck.prototype.encodedRejectText = function () {
  return new EncodedRejectText(this.message.tags[AllocationReportAck.Tags.EncodedRejectText]);
};

AllocationReportAck.Tags = {
  Instrument: '55',
  Parties: '453',
  RegulatoryTradeIDGrp: '1907',
  AllocAckGrp: '78',
  AllocReportID: '755',
  AllocID: '70',
  ClearingBusinessDate: '715',
  AvgPxIndicator: '819',
  Quantity: '53',
  AllocTransType: '71',
  SecondaryAllocID: '793',
  AllocGroupID: '1730',
  FirmGroupID: '1728',
  AvgPxGroupID: '1731',
  TradeDate: '75',
  TransactTime: '60',
  AllocStatus: '87',
  AllocRejCode: '88',
  AllocReportType: '794',
  AllocIntermedReqType: '808',
  MatchStatus: '573',
  CustOrderHandlingInst: '1031',
  OrderHandlingInstSource: '1032',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  RejectText: '1328',
  EncodedRejectTextLen: '1664',
  EncodedRejectText: '1665',
};

AllocationReportAck.msgType = 'AT';

module.exports = AllocationReportAck;