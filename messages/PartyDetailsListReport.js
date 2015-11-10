var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var PartyDetailGrp = require('../components/PartyDetailGrp');
var PartyDetailsListReportID = require('../fields/PartyDetailsListReportID');
var PartyDetailsListRequestID = require('../fields/PartyDetailsListRequestID');
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

function PartyDetailsListReport (partyDetailsListReport) {
  this.message = partyDetailsListReport;
}

PartyDetailsListReport.prototype.applicationSequenceControl = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PartyDetailsListReport.Tags.ApplicationSequenceControl] === undefined) return null;
  return this.message.groups[PartyDetailsListReport.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

PartyDetailsListReport.prototype.partyDetailGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PartyDetailsListReport.Tags.PartyDetailGrp] === undefined) return null;
  return this.message.groups[PartyDetailsListReport.Tags.PartyDetailGrp]
    .map(function (partyDetailGrp) {
      return new PartyDetailGrp(partyDetailGrp);
  });
};

PartyDetailsListReport.prototype.partyDetailsListReportId = function () {
  return new PartyDetailsListReportID(this.message.tags[PartyDetailsListReport.Tags.PartyDetailsListReportID]);
};

PartyDetailsListReport.prototype.partyDetailsListRequestId = function () {
  return new PartyDetailsListRequestID(this.message.tags[PartyDetailsListReport.Tags.PartyDetailsListRequestID]);
};

PartyDetailsListReport.prototype.requestResult = function () {
  return new RequestResult(this.message.tags[PartyDetailsListReport.Tags.RequestResult]);
};

PartyDetailsListReport.prototype.totNoParties = function () {
  return new TotNoParties(this.message.tags[PartyDetailsListReport.Tags.TotNoParties]);
};

PartyDetailsListReport.prototype.lastFragment = function () {
  return new LastFragment(this.message.tags[PartyDetailsListReport.Tags.LastFragment]);
};

PartyDetailsListReport.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[PartyDetailsListReport.Tags.TransactTime]);
};

PartyDetailsListReport.prototype.text = function () {
  return new Text(this.message.tags[PartyDetailsListReport.Tags.Text]);
};

PartyDetailsListReport.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[PartyDetailsListReport.Tags.EncodedTextLen]);
};

PartyDetailsListReport.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[PartyDetailsListReport.Tags.EncodedText]);
};

PartyDetailsListReport.prototype.rejectText = function () {
  return new RejectText(this.message.tags[PartyDetailsListReport.Tags.RejectText]);
};

PartyDetailsListReport.prototype.encodedRejectTextLen = function () {
  return new EncodedRejectTextLen(this.message.tags[PartyDetailsListReport.Tags.EncodedRejectTextLen]);
};

PartyDetailsListReport.prototype.encodedRejectText = function () {
  return new EncodedRejectText(this.message.tags[PartyDetailsListReport.Tags.EncodedRejectText]);
};

PartyDetailsListReport.Tags = {
  ApplicationSequenceControl: '1180',
  PartyDetailGrp: '1671',
  PartyDetailsListReportID: '1510',
  PartyDetailsListRequestID: '1505',
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

PartyDetailsListReport.msgType = 'CG';

module.exports = PartyDetailsListReport;