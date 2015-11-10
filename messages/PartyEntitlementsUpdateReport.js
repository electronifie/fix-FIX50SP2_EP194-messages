var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var PartyEntitlementUpdateGrp = require('../components/PartyEntitlementUpdateGrp');
var EntitlementReportID = require('../fields/EntitlementReportID');
var EntitlementRequestID = require('../fields/EntitlementRequestID');
var TotNoParties = require('../fields/TotNoParties');
var LastFragment = require('../fields/LastFragment');
var TransactTime = require('../fields/TransactTime');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function PartyEntitlementsUpdateReport (partyEntitlementsUpdateReport) {
  this.message = partyEntitlementsUpdateReport;
}

PartyEntitlementsUpdateReport.prototype.applicationSequenceControl = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PartyEntitlementsUpdateReport.Tags.ApplicationSequenceControl] === undefined) return null;
  return this.message.groups[PartyEntitlementsUpdateReport.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

PartyEntitlementsUpdateReport.prototype.partyEntitlementUpdateGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PartyEntitlementsUpdateReport.Tags.PartyEntitlementUpdateGrp] === undefined) return null;
  return this.message.groups[PartyEntitlementsUpdateReport.Tags.PartyEntitlementUpdateGrp]
    .map(function (partyEntitlementUpdateGrp) {
      return new PartyEntitlementUpdateGrp(partyEntitlementUpdateGrp);
  });
};

PartyEntitlementsUpdateReport.prototype.entitlementReportId = function () {
  return new EntitlementReportID(this.message.tags[PartyEntitlementsUpdateReport.Tags.EntitlementReportID]);
};

PartyEntitlementsUpdateReport.prototype.entitlementRequestId = function () {
  return new EntitlementRequestID(this.message.tags[PartyEntitlementsUpdateReport.Tags.EntitlementRequestID]);
};

PartyEntitlementsUpdateReport.prototype.totNoParties = function () {
  return new TotNoParties(this.message.tags[PartyEntitlementsUpdateReport.Tags.TotNoParties]);
};

PartyEntitlementsUpdateReport.prototype.lastFragment = function () {
  return new LastFragment(this.message.tags[PartyEntitlementsUpdateReport.Tags.LastFragment]);
};

PartyEntitlementsUpdateReport.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[PartyEntitlementsUpdateReport.Tags.TransactTime]);
};

PartyEntitlementsUpdateReport.prototype.text = function () {
  return new Text(this.message.tags[PartyEntitlementsUpdateReport.Tags.Text]);
};

PartyEntitlementsUpdateReport.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[PartyEntitlementsUpdateReport.Tags.EncodedTextLen]);
};

PartyEntitlementsUpdateReport.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[PartyEntitlementsUpdateReport.Tags.EncodedText]);
};

PartyEntitlementsUpdateReport.Tags = {
  ApplicationSequenceControl: '1180',
  PartyEntitlementUpdateGrp: '1772',
  EntitlementReportID: '1771',
  EntitlementRequestID: '1770',
  TotNoParties: '1512',
  LastFragment: '893',
  TransactTime: '60',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

PartyEntitlementsUpdateReport.msgType = 'CZ';

module.exports = PartyEntitlementsUpdateReport;