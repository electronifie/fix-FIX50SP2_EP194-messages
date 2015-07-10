var PartyRiskLimitsUpdateGrp = require('../components/PartyRiskLimitsUpdateGrp');
var RiskLimitReportID = require('../fields/RiskLimitReportID');
var RiskLimitRequestID = require('../fields/RiskLimitRequestID');
var RiskLimitReportStatus = require('../fields/RiskLimitReportStatus');
var RiskLimitReportRejectReason = require('../fields/RiskLimitReportRejectReason');
var TransactTime = require('../fields/TransactTime');
var RejectText = require('../fields/RejectText');
var EncodedRejectTextLen = require('../fields/EncodedRejectTextLen');
var EncodedRejectText = require('../fields/EncodedRejectText');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function PartyRiskLimitsReportAck (partyRiskLimitsReportAck) {
  this.message = partyRiskLimitsReportAck;
}

PartyRiskLimitsReportAck.prototype.partyRiskLimitsUpdateGrp = function () {
  return this.message.groups[PartyRiskLimitsReportAck.Tags.PartyRiskLimitsUpdateGrp]
    .map(function (partyRiskLimitsUpdateGrp) {
      return new PartyRiskLimitsUpdateGrp(partyRiskLimitsUpdateGrp);
  });
};

PartyRiskLimitsReportAck.prototype.riskLimitReportId = function () {
  return new RiskLimitReportID(this.message.tags[PartyRiskLimitsReportAck.Tags.RiskLimitReportID]);
};

PartyRiskLimitsReportAck.prototype.riskLimitRequestId = function () {
  return new RiskLimitRequestID(this.message.tags[PartyRiskLimitsReportAck.Tags.RiskLimitRequestID]);
};

PartyRiskLimitsReportAck.prototype.riskLimitReportStatus = function () {
  return new RiskLimitReportStatus(this.message.tags[PartyRiskLimitsReportAck.Tags.RiskLimitReportStatus]);
};

PartyRiskLimitsReportAck.prototype.riskLimitReportRejectReason = function () {
  return new RiskLimitReportRejectReason(this.message.tags[PartyRiskLimitsReportAck.Tags.RiskLimitReportRejectReason]);
};

PartyRiskLimitsReportAck.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[PartyRiskLimitsReportAck.Tags.TransactTime]);
};

PartyRiskLimitsReportAck.prototype.rejectText = function () {
  return new RejectText(this.message.tags[PartyRiskLimitsReportAck.Tags.RejectText]);
};

PartyRiskLimitsReportAck.prototype.encodedRejectTextLen = function () {
  return new EncodedRejectTextLen(this.message.tags[PartyRiskLimitsReportAck.Tags.EncodedRejectTextLen]);
};

PartyRiskLimitsReportAck.prototype.encodedRejectText = function () {
  return new EncodedRejectText(this.message.tags[PartyRiskLimitsReportAck.Tags.EncodedRejectText]);
};

PartyRiskLimitsReportAck.prototype.text = function () {
  return new Text(this.message.tags[PartyRiskLimitsReportAck.Tags.Text]);
};

PartyRiskLimitsReportAck.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[PartyRiskLimitsReportAck.Tags.EncodedTextLen]);
};

PartyRiskLimitsReportAck.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[PartyRiskLimitsReportAck.Tags.EncodedText]);
};

PartyRiskLimitsReportAck.Tags = {
  PartyRiskLimitsUpdateGrp: '1677',
  RiskLimitReportID: '1667',
  RiskLimitRequestID: '1666',
  RiskLimitReportStatus: '2316',
  RiskLimitReportRejectReason: '2317',
  TransactTime: '60',
  RejectText: '1328',
  EncodedRejectTextLen: '1664',
  EncodedRejectText: '1665',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

PartyRiskLimitsReportAck.msgType = 'DE';

module.exports = PartyRiskLimitsReportAck;