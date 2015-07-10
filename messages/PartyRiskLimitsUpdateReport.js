var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var PartyRiskLimitsUpdateGrp = require('../components/PartyRiskLimitsUpdateGrp');
var RiskLimitReportID = require('../fields/RiskLimitReportID');
var RiskLimitRequestID = require('../fields/RiskLimitRequestID');
var RiskLimitRequestType = require('../fields/RiskLimitRequestType');
var TotNoParties = require('../fields/TotNoParties');
var LastFragment = require('../fields/LastFragment');
var TransactTime = require('../fields/TransactTime');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function PartyRiskLimitsUpdateReport (partyRiskLimitsUpdateReport) {
  this.message = partyRiskLimitsUpdateReport;
}

PartyRiskLimitsUpdateReport.prototype.applicationSequenceControl = function () {
  return this.message.groups[PartyRiskLimitsUpdateReport.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

PartyRiskLimitsUpdateReport.prototype.partyRiskLimitsUpdateGrp = function () {
  return this.message.groups[PartyRiskLimitsUpdateReport.Tags.PartyRiskLimitsUpdateGrp]
    .map(function (partyRiskLimitsUpdateGrp) {
      return new PartyRiskLimitsUpdateGrp(partyRiskLimitsUpdateGrp);
  });
};

PartyRiskLimitsUpdateReport.prototype.riskLimitReportId = function () {
  return new RiskLimitReportID(this.message.tags[PartyRiskLimitsUpdateReport.Tags.RiskLimitReportID]);
};

PartyRiskLimitsUpdateReport.prototype.riskLimitRequestId = function () {
  return new RiskLimitRequestID(this.message.tags[PartyRiskLimitsUpdateReport.Tags.RiskLimitRequestID]);
};

PartyRiskLimitsUpdateReport.prototype.riskLimitRequestType = function () {
  return new RiskLimitRequestType(this.message.tags[PartyRiskLimitsUpdateReport.Tags.RiskLimitRequestType]);
};

PartyRiskLimitsUpdateReport.prototype.totNoParties = function () {
  return new TotNoParties(this.message.tags[PartyRiskLimitsUpdateReport.Tags.TotNoParties]);
};

PartyRiskLimitsUpdateReport.prototype.lastFragment = function () {
  return new LastFragment(this.message.tags[PartyRiskLimitsUpdateReport.Tags.LastFragment]);
};

PartyRiskLimitsUpdateReport.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[PartyRiskLimitsUpdateReport.Tags.TransactTime]);
};

PartyRiskLimitsUpdateReport.prototype.text = function () {
  return new Text(this.message.tags[PartyRiskLimitsUpdateReport.Tags.Text]);
};

PartyRiskLimitsUpdateReport.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[PartyRiskLimitsUpdateReport.Tags.EncodedTextLen]);
};

PartyRiskLimitsUpdateReport.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[PartyRiskLimitsUpdateReport.Tags.EncodedText]);
};

PartyRiskLimitsUpdateReport.Tags = {
  ApplicationSequenceControl: '1180',
  PartyRiskLimitsUpdateGrp: '1677',
  RiskLimitReportID: '1667',
  RiskLimitRequestID: '1666',
  RiskLimitRequestType: '1760',
  TotNoParties: '1512',
  LastFragment: '893',
  TransactTime: '60',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

PartyRiskLimitsUpdateReport.msgType = 'CR';

module.exports = PartyRiskLimitsUpdateReport;