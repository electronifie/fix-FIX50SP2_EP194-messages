var Parties = require('../components/Parties');
var TargetParties = require('../components/TargetParties');
var TransferInstructionID = require('../fields/TransferInstructionID');
var TransferID = require('../fields/TransferID');
var TransferTransType = require('../fields/TransferTransType');
var TransferType = require('../fields/TransferType');
var TransferStatus = require('../fields/TransferStatus');
var TransferRejectReason = require('../fields/TransferRejectReason');
var TransferScope = require('../fields/TransferScope');
var TransactTime = require('../fields/TransactTime');
var RejectText = require('../fields/RejectText');
var EncodedRejectTextLen = require('../fields/EncodedRejectTextLen');
var EncodedRejectText = require('../fields/EncodedRejectText');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function PositionTransferInstructionAck (positionTransferInstructionAck) {
  this.message = positionTransferInstructionAck;
}

PositionTransferInstructionAck.prototype.parties = function () {
  return this.message.groups[PositionTransferInstructionAck.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

PositionTransferInstructionAck.prototype.targetParties = function () {
  return this.message.groups[PositionTransferInstructionAck.Tags.TargetParties]
    .map(function (targetParties) {
      return new TargetParties(targetParties);
  });
};

PositionTransferInstructionAck.prototype.transferInstructionId = function () {
  return new TransferInstructionID(this.message.tags[PositionTransferInstructionAck.Tags.TransferInstructionID]);
};

PositionTransferInstructionAck.prototype.transferId = function () {
  return new TransferID(this.message.tags[PositionTransferInstructionAck.Tags.TransferID]);
};

PositionTransferInstructionAck.prototype.transferTransType = function () {
  return new TransferTransType(this.message.tags[PositionTransferInstructionAck.Tags.TransferTransType]);
};

PositionTransferInstructionAck.prototype.transferType = function () {
  return new TransferType(this.message.tags[PositionTransferInstructionAck.Tags.TransferType]);
};

PositionTransferInstructionAck.prototype.transferStatus = function () {
  return new TransferStatus(this.message.tags[PositionTransferInstructionAck.Tags.TransferStatus]);
};

PositionTransferInstructionAck.prototype.transferRejectReason = function () {
  return new TransferRejectReason(this.message.tags[PositionTransferInstructionAck.Tags.TransferRejectReason]);
};

PositionTransferInstructionAck.prototype.transferScope = function () {
  return new TransferScope(this.message.tags[PositionTransferInstructionAck.Tags.TransferScope]);
};

PositionTransferInstructionAck.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[PositionTransferInstructionAck.Tags.TransactTime]);
};

PositionTransferInstructionAck.prototype.rejectText = function () {
  return new RejectText(this.message.tags[PositionTransferInstructionAck.Tags.RejectText]);
};

PositionTransferInstructionAck.prototype.encodedRejectTextLen = function () {
  return new EncodedRejectTextLen(this.message.tags[PositionTransferInstructionAck.Tags.EncodedRejectTextLen]);
};

PositionTransferInstructionAck.prototype.encodedRejectText = function () {
  return new EncodedRejectText(this.message.tags[PositionTransferInstructionAck.Tags.EncodedRejectText]);
};

PositionTransferInstructionAck.prototype.text = function () {
  return new Text(this.message.tags[PositionTransferInstructionAck.Tags.Text]);
};

PositionTransferInstructionAck.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[PositionTransferInstructionAck.Tags.EncodedTextLen]);
};

PositionTransferInstructionAck.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[PositionTransferInstructionAck.Tags.EncodedText]);
};

PositionTransferInstructionAck.Tags = {
  Parties: '453',
  TargetParties: '1461',
  TransferInstructionID: '2436',
  TransferID: '2437',
  TransferTransType: '2439',
  TransferType: '2440',
  TransferStatus: '2442',
  TransferRejectReason: '2443',
  TransferScope: '2441',
  TransactTime: '60',
  RejectText: '1328',
  EncodedRejectTextLen: '1664',
  EncodedRejectText: '1665',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

PositionTransferInstructionAck.msgType = 'DM';

module.exports = PositionTransferInstructionAck;