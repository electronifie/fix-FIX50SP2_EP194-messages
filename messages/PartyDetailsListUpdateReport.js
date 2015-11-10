var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var PartyDetailsUpdateGrp = require('../components/PartyDetailsUpdateGrp');
var PartyDetailsListReportID = require('../fields/PartyDetailsListReportID');
var PartyDetailsListRequestID = require('../fields/PartyDetailsListRequestID');
var TotNoParties = require('../fields/TotNoParties');
var LastFragment = require('../fields/LastFragment');
var TransactTime = require('../fields/TransactTime');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function PartyDetailsListUpdateReport (partyDetailsListUpdateReport) {
  this.message = partyDetailsListUpdateReport;
}

PartyDetailsListUpdateReport.prototype.applicationSequenceControl = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PartyDetailsListUpdateReport.Tags.ApplicationSequenceControl] === undefined) return null;
  return this.message.groups[PartyDetailsListUpdateReport.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

PartyDetailsListUpdateReport.prototype.partyDetailsUpdateGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PartyDetailsListUpdateReport.Tags.PartyDetailsUpdateGrp] === undefined) return null;
  return this.message.groups[PartyDetailsListUpdateReport.Tags.PartyDetailsUpdateGrp]
    .map(function (partyDetailsUpdateGrp) {
      return new PartyDetailsUpdateGrp(partyDetailsUpdateGrp);
  });
};

PartyDetailsListUpdateReport.prototype.partyDetailsListReportId = function () {
  return new PartyDetailsListReportID(this.message.tags[PartyDetailsListUpdateReport.Tags.PartyDetailsListReportID]);
};

PartyDetailsListUpdateReport.prototype.partyDetailsListRequestId = function () {
  return new PartyDetailsListRequestID(this.message.tags[PartyDetailsListUpdateReport.Tags.PartyDetailsListRequestID]);
};

PartyDetailsListUpdateReport.prototype.totNoParties = function () {
  return new TotNoParties(this.message.tags[PartyDetailsListUpdateReport.Tags.TotNoParties]);
};

PartyDetailsListUpdateReport.prototype.lastFragment = function () {
  return new LastFragment(this.message.tags[PartyDetailsListUpdateReport.Tags.LastFragment]);
};

PartyDetailsListUpdateReport.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[PartyDetailsListUpdateReport.Tags.TransactTime]);
};

PartyDetailsListUpdateReport.prototype.text = function () {
  return new Text(this.message.tags[PartyDetailsListUpdateReport.Tags.Text]);
};

PartyDetailsListUpdateReport.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[PartyDetailsListUpdateReport.Tags.EncodedTextLen]);
};

PartyDetailsListUpdateReport.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[PartyDetailsListUpdateReport.Tags.EncodedText]);
};

PartyDetailsListUpdateReport.Tags = {
  ApplicationSequenceControl: '1180',
  PartyDetailsUpdateGrp: '1676',
  PartyDetailsListReportID: '1510',
  PartyDetailsListRequestID: '1505',
  TotNoParties: '1512',
  LastFragment: '893',
  TransactTime: '60',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

PartyDetailsListUpdateReport.msgType = 'CK';

module.exports = PartyDetailsListUpdateReport;