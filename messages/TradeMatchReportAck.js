var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var TrdMatchID = require('../fields/TrdMatchID');
var TradeMatchAckStatus = require('../fields/TradeMatchAckStatus');
var TradeMatchRejectReason = require('../fields/TradeMatchRejectReason');
var RejectText = require('../fields/RejectText');
var EncodedRejectTextLen = require('../fields/EncodedRejectTextLen');
var EncodedRejectText = require('../fields/EncodedRejectText');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function TradeMatchReportAck (tradeMatchReportAck) {
  this.message = tradeMatchReportAck;
}

TradeMatchReportAck.prototype.applicationSequenceControl = function () {
  return this.message.groups[TradeMatchReportAck.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

TradeMatchReportAck.prototype.trdMatchId = function () {
  return new TrdMatchID(this.message.tags[TradeMatchReportAck.Tags.TrdMatchID]);
};

TradeMatchReportAck.prototype.tradeMatchAckStatus = function () {
  return new TradeMatchAckStatus(this.message.tags[TradeMatchReportAck.Tags.TradeMatchAckStatus]);
};

TradeMatchReportAck.prototype.tradeMatchRejectReason = function () {
  return new TradeMatchRejectReason(this.message.tags[TradeMatchReportAck.Tags.TradeMatchRejectReason]);
};

TradeMatchReportAck.prototype.rejectText = function () {
  return new RejectText(this.message.tags[TradeMatchReportAck.Tags.RejectText]);
};

TradeMatchReportAck.prototype.encodedRejectTextLen = function () {
  return new EncodedRejectTextLen(this.message.tags[TradeMatchReportAck.Tags.EncodedRejectTextLen]);
};

TradeMatchReportAck.prototype.encodedRejectText = function () {
  return new EncodedRejectText(this.message.tags[TradeMatchReportAck.Tags.EncodedRejectText]);
};

TradeMatchReportAck.prototype.text = function () {
  return new Text(this.message.tags[TradeMatchReportAck.Tags.Text]);
};

TradeMatchReportAck.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[TradeMatchReportAck.Tags.EncodedTextLen]);
};

TradeMatchReportAck.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[TradeMatchReportAck.Tags.EncodedText]);
};

TradeMatchReportAck.Tags = {
  ApplicationSequenceControl: '1180',
  TrdMatchID: '880',
  TradeMatchAckStatus: '1896',
  TradeMatchRejectReason: '1897',
  RejectText: '1328',
  EncodedRejectTextLen: '1664',
  EncodedRejectText: '1665',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

TradeMatchReportAck.msgType = 'DD';

module.exports = TradeMatchReportAck;