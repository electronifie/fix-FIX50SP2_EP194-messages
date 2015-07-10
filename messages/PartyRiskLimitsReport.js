var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var PartyRiskLimitsGrp = require('../components/PartyRiskLimitsGrp');
var RiskLimitReportID = require('../fields/RiskLimitReportID');
var RiskLimitRequestID = require('../fields/RiskLimitRequestID');
var RiskLimitRequestType = require('../fields/RiskLimitRequestType');
var RequestResult = require('../fields/RequestResult');
var TotNoParties = require('../fields/TotNoParties');
var LastFragment = require('../fields/LastFragment');
var TransactTime = require('../fields/TransactTime');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var RejectText = require('../fields/RejectText');
var EncodedRejectTextLen = require('../fields/EncodedRejectTextLen');
var EncodedRejectText = require('../fields/EncodedRejectText');

function PartyRiskLimitsReport (partyRiskLimitsReport) {
  this.message = partyRiskLimitsReport;
}

PartyRiskLimitsReport.prototype.applicationSequenceControl = function () {
  return this.message.groups[PartyRiskLimitsReport.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

PartyRiskLimitsReport.prototype.partyRiskLimitsGrp = function () {
  return this.message.groups[PartyRiskLimitsReport.Tags.PartyRiskLimitsGrp]
    .map(function (partyRiskLimitsGrp) {
      return new PartyRiskLimitsGrp(partyRiskLimitsGrp);
  });
};

PartyRiskLimitsReport.prototype.riskLimitReportId = function () {
  return new RiskLimitReportID(this.message.tags[PartyRiskLimitsReport.Tags.RiskLimitReportID]);
};

PartyRiskLimitsReport.prototype.riskLimitRequestId = function () {
  return new RiskLimitRequestID(this.message.tags[PartyRiskLimitsReport.Tags.RiskLimitRequestID]);
};

PartyRiskLimitsReport.prototype.riskLimitRequestType = function () {
  return new RiskLimitRequestType(this.message.tags[PartyRiskLimitsReport.Tags.RiskLimitRequestType]);
};

PartyRiskLimitsReport.prototype.requestResult = function () {
  return new RequestResult(this.message.tags[PartyRiskLimitsReport.Tags.RequestResult]);
};

PartyRiskLimitsReport.prototype.totNoParties = function () {
  return new TotNoParties(this.message.tags[PartyRiskLimitsReport.Tags.TotNoParties]);
};

PartyRiskLimitsReport.prototype.lastFragment = function () {
  return new LastFragment(this.message.tags[PartyRiskLimitsReport.Tags.LastFragment]);
};

PartyRiskLimitsReport.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[PartyRiskLimitsReport.Tags.TransactTime]);
};

PartyRiskLimitsReport.prototype.text = function () {
  return new Text(this.message.tags[PartyRiskLimitsReport.Tags.Text]);
};

PartyRiskLimitsReport.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[PartyRiskLimitsReport.Tags.EncodedTextLen]);
};

PartyRiskLimitsReport.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[PartyRiskLimitsReport.Tags.EncodedText]);
};

PartyRiskLimitsReport.prototype.rejectText = function () {
  return new RejectText(this.message.tags[PartyRiskLimitsReport.Tags.RejectText]);
};

PartyRiskLimitsReport.prototype.encodedRejectTextLen = function () {
  return new EncodedRejectTextLen(this.message.tags[PartyRiskLimitsReport.Tags.EncodedRejectTextLen]);
};

PartyRiskLimitsReport.prototype.encodedRejectText = function () {
  return new EncodedRejectText(this.message.tags[PartyRiskLimitsReport.Tags.EncodedRejectText]);
};

PartyRiskLimitsReport.Tags = {
  ApplicationSequenceControl: '1180',
  PartyRiskLimitsGrp: '1677',
  RiskLimitReportID: '1667',
  RiskLimitRequestID: '1666',
  RiskLimitRequestType: '1760',
  RequestResult: '1511',
  TotNoParties: '1512',
  LastFragment: '893',
  TransactTime: '60',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  RejectText: '1328',
  EncodedRejectTextLen: '1664',
  EncodedRejectText: '1665',
};

PartyRiskLimitsReport.msgType = 'CM';

module.exports = PartyRiskLimitsReport;