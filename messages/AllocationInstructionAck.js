var Instrument = require('../components/Instrument');
var Parties = require('../components/Parties');
var RegulatoryTradeIDGrp = require('../components/RegulatoryTradeIDGrp');
var AllocAckGrp = require('../components/AllocAckGrp');
var AllocID = require('../fields/AllocID');
var SecondaryAllocID = require('../fields/SecondaryAllocID');
var AllocGroupID = require('../fields/AllocGroupID');
var FirmGroupID = require('../fields/FirmGroupID');
var AvgPxGroupID = require('../fields/AvgPxGroupID');
var TradeDate = require('../fields/TradeDate');
var TransactTime = require('../fields/TransactTime');
var AllocStatus = require('../fields/AllocStatus');
var AllocRejCode = require('../fields/AllocRejCode');
var AllocType = require('../fields/AllocType');
var AllocIntermedReqType = require('../fields/AllocIntermedReqType');
var MatchStatus = require('../fields/MatchStatus');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var RejectText = require('../fields/RejectText');
var EncodedRejectTextLen = require('../fields/EncodedRejectTextLen');
var EncodedRejectText = require('../fields/EncodedRejectText');

function AllocationInstructionAck (allocationInstructionAck) {
  this.message = allocationInstructionAck;
}

AllocationInstructionAck.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationInstructionAck.Tags.Instrument] === undefined) return null;
  return this.message.groups[AllocationInstructionAck.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

AllocationInstructionAck.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationInstructionAck.Tags.Parties] === undefined) return null;
  return this.message.groups[AllocationInstructionAck.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

AllocationInstructionAck.prototype.regulatoryTradeIdgrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationInstructionAck.Tags.RegulatoryTradeIDGrp] === undefined) return null;
  return this.message.groups[AllocationInstructionAck.Tags.RegulatoryTradeIDGrp]
    .map(function (regulatoryTradeIdgrp) {
      return new RegulatoryTradeIDGrp(regulatoryTradeIdgrp);
  });
};

AllocationInstructionAck.prototype.allocAckGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AllocationInstructionAck.Tags.AllocAckGrp] === undefined) return null;
  return this.message.groups[AllocationInstructionAck.Tags.AllocAckGrp]
    .map(function (allocAckGrp) {
      return new AllocAckGrp(allocAckGrp);
  });
};

AllocationInstructionAck.prototype.allocId = function () {
  return new AllocID(this.message.tags[AllocationInstructionAck.Tags.AllocID]);
};

AllocationInstructionAck.prototype.secondaryAllocId = function () {
  return new SecondaryAllocID(this.message.tags[AllocationInstructionAck.Tags.SecondaryAllocID]);
};

AllocationInstructionAck.prototype.allocGroupId = function () {
  return new AllocGroupID(this.message.tags[AllocationInstructionAck.Tags.AllocGroupID]);
};

AllocationInstructionAck.prototype.firmGroupId = function () {
  return new FirmGroupID(this.message.tags[AllocationInstructionAck.Tags.FirmGroupID]);
};

AllocationInstructionAck.prototype.avgPxGroupId = function () {
  return new AvgPxGroupID(this.message.tags[AllocationInstructionAck.Tags.AvgPxGroupID]);
};

AllocationInstructionAck.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[AllocationInstructionAck.Tags.TradeDate]);
};

AllocationInstructionAck.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[AllocationInstructionAck.Tags.TransactTime]);
};

AllocationInstructionAck.prototype.allocStatus = function () {
  return new AllocStatus(this.message.tags[AllocationInstructionAck.Tags.AllocStatus]);
};

AllocationInstructionAck.prototype.allocRejCode = function () {
  return new AllocRejCode(this.message.tags[AllocationInstructionAck.Tags.AllocRejCode]);
};

AllocationInstructionAck.prototype.allocType = function () {
  return new AllocType(this.message.tags[AllocationInstructionAck.Tags.AllocType]);
};

AllocationInstructionAck.prototype.allocIntermedReqType = function () {
  return new AllocIntermedReqType(this.message.tags[AllocationInstructionAck.Tags.AllocIntermedReqType]);
};

AllocationInstructionAck.prototype.matchStatus = function () {
  return new MatchStatus(this.message.tags[AllocationInstructionAck.Tags.MatchStatus]);
};

AllocationInstructionAck.prototype.text = function () {
  return new Text(this.message.tags[AllocationInstructionAck.Tags.Text]);
};

AllocationInstructionAck.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[AllocationInstructionAck.Tags.EncodedTextLen]);
};

AllocationInstructionAck.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[AllocationInstructionAck.Tags.EncodedText]);
};

AllocationInstructionAck.prototype.rejectText = function () {
  return new RejectText(this.message.tags[AllocationInstructionAck.Tags.RejectText]);
};

AllocationInstructionAck.prototype.encodedRejectTextLen = function () {
  return new EncodedRejectTextLen(this.message.tags[AllocationInstructionAck.Tags.EncodedRejectTextLen]);
};

AllocationInstructionAck.prototype.encodedRejectText = function () {
  return new EncodedRejectText(this.message.tags[AllocationInstructionAck.Tags.EncodedRejectText]);
};

AllocationInstructionAck.Tags = {
  Instrument: '55',
  Parties: '453',
  RegulatoryTradeIDGrp: '1907',
  AllocAckGrp: '78',
  AllocID: '70',
  SecondaryAllocID: '793',
  AllocGroupID: '1730',
  FirmGroupID: '1728',
  AvgPxGroupID: '1731',
  TradeDate: '75',
  TransactTime: '60',
  AllocStatus: '87',
  AllocRejCode: '88',
  AllocType: '626',
  AllocIntermedReqType: '808',
  MatchStatus: '573',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  RejectText: '1328',
  EncodedRejectTextLen: '1664',
  EncodedRejectText: '1665',
};

AllocationInstructionAck.msgType = 'P';

module.exports = AllocationInstructionAck;