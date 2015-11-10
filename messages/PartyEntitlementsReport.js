var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var PartyEntitlementGrp = require('../components/PartyEntitlementGrp');
var EntitlementReportID = require('../fields/EntitlementReportID');
var EntitlementRequestID = require('../fields/EntitlementRequestID');
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

function PartyEntitlementsReport (partyEntitlementsReport) {
  this.message = partyEntitlementsReport;
}

PartyEntitlementsReport.prototype.applicationSequenceControl = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PartyEntitlementsReport.Tags.ApplicationSequenceControl] === undefined) return null;
  return this.message.groups[PartyEntitlementsReport.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

PartyEntitlementsReport.prototype.partyEntitlementGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PartyEntitlementsReport.Tags.PartyEntitlementGrp] === undefined) return null;
  return this.message.groups[PartyEntitlementsReport.Tags.PartyEntitlementGrp]
    .map(function (partyEntitlementGrp) {
      return new PartyEntitlementGrp(partyEntitlementGrp);
  });
};

PartyEntitlementsReport.prototype.entitlementReportId = function () {
  return new EntitlementReportID(this.message.tags[PartyEntitlementsReport.Tags.EntitlementReportID]);
};

PartyEntitlementsReport.prototype.entitlementRequestId = function () {
  return new EntitlementRequestID(this.message.tags[PartyEntitlementsReport.Tags.EntitlementRequestID]);
};

PartyEntitlementsReport.prototype.requestResult = function () {
  return new RequestResult(this.message.tags[PartyEntitlementsReport.Tags.RequestResult]);
};

PartyEntitlementsReport.prototype.totNoParties = function () {
  return new TotNoParties(this.message.tags[PartyEntitlementsReport.Tags.TotNoParties]);
};

PartyEntitlementsReport.prototype.lastFragment = function () {
  return new LastFragment(this.message.tags[PartyEntitlementsReport.Tags.LastFragment]);
};

PartyEntitlementsReport.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[PartyEntitlementsReport.Tags.TransactTime]);
};

PartyEntitlementsReport.prototype.text = function () {
  return new Text(this.message.tags[PartyEntitlementsReport.Tags.Text]);
};

PartyEntitlementsReport.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[PartyEntitlementsReport.Tags.EncodedTextLen]);
};

PartyEntitlementsReport.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[PartyEntitlementsReport.Tags.EncodedText]);
};

PartyEntitlementsReport.prototype.rejectText = function () {
  return new RejectText(this.message.tags[PartyEntitlementsReport.Tags.RejectText]);
};

PartyEntitlementsReport.prototype.encodedRejectTextLen = function () {
  return new EncodedRejectTextLen(this.message.tags[PartyEntitlementsReport.Tags.EncodedRejectTextLen]);
};

PartyEntitlementsReport.prototype.encodedRejectText = function () {
  return new EncodedRejectText(this.message.tags[PartyEntitlementsReport.Tags.EncodedRejectText]);
};

PartyEntitlementsReport.Tags = {
  ApplicationSequenceControl: '1180',
  PartyEntitlementGrp: '1772',
  EntitlementReportID: '1771',
  EntitlementRequestID: '1770',
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

PartyEntitlementsReport.msgType = 'CV';

module.exports = PartyEntitlementsReport;