var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var Parties = require('../components/Parties');
var Instrument = require('../components/Instrument');
var MarginAmount = require('../components/MarginAmount');
var MarginReqmtRptID = require('../fields/MarginReqmtRptID');
var MarginReqmtInqID = require('../fields/MarginReqmtInqID');
var MarginReqmtRptType = require('../fields/MarginReqmtRptType');
var TotNumReports = require('../fields/TotNumReports');
var LastRptRequested = require('../fields/LastRptRequested');
var UnsolicitedIndicator = require('../fields/UnsolicitedIndicator');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var SettlSessID = require('../fields/SettlSessID');
var SettlSessSubID = require('../fields/SettlSessSubID');
var MarginClass = require('../fields/MarginClass');
var Currency = require('../fields/Currency');
var TransactTime = require('../fields/TransactTime');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function MarginRequirementReport (marginRequirementReport) {
  this.message = marginRequirementReport;
}

MarginRequirementReport.prototype.applicationSequenceControl = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarginRequirementReport.Tags.ApplicationSequenceControl] === undefined) return null;
  return this.message.groups[MarginRequirementReport.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

MarginRequirementReport.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarginRequirementReport.Tags.Parties] === undefined) return null;
  return this.message.groups[MarginRequirementReport.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

MarginRequirementReport.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarginRequirementReport.Tags.Instrument] === undefined) return null;
  return this.message.groups[MarginRequirementReport.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

MarginRequirementReport.prototype.marginAmount = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MarginRequirementReport.Tags.MarginAmount] === undefined) return null;
  return this.message.groups[MarginRequirementReport.Tags.MarginAmount]
    .map(function (marginAmount) {
      return new MarginAmount(marginAmount);
  });
};

MarginRequirementReport.prototype.marginReqmtRptId = function () {
  return new MarginReqmtRptID(this.message.tags[MarginRequirementReport.Tags.MarginReqmtRptID]);
};

MarginRequirementReport.prototype.marginReqmtInqId = function () {
  return new MarginReqmtInqID(this.message.tags[MarginRequirementReport.Tags.MarginReqmtInqID]);
};

MarginRequirementReport.prototype.marginReqmtRptType = function () {
  return new MarginReqmtRptType(this.message.tags[MarginRequirementReport.Tags.MarginReqmtRptType]);
};

MarginRequirementReport.prototype.totNumReports = function () {
  return new TotNumReports(this.message.tags[MarginRequirementReport.Tags.TotNumReports]);
};

MarginRequirementReport.prototype.lastRptRequested = function () {
  return new LastRptRequested(this.message.tags[MarginRequirementReport.Tags.LastRptRequested]);
};

MarginRequirementReport.prototype.unsolicitedIndicator = function () {
  return new UnsolicitedIndicator(this.message.tags[MarginRequirementReport.Tags.UnsolicitedIndicator]);
};

MarginRequirementReport.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[MarginRequirementReport.Tags.ClearingBusinessDate]);
};

MarginRequirementReport.prototype.settlSessId = function () {
  return new SettlSessID(this.message.tags[MarginRequirementReport.Tags.SettlSessID]);
};

MarginRequirementReport.prototype.settlSessSubId = function () {
  return new SettlSessSubID(this.message.tags[MarginRequirementReport.Tags.SettlSessSubID]);
};

MarginRequirementReport.prototype.marginClass = function () {
  return new MarginClass(this.message.tags[MarginRequirementReport.Tags.MarginClass]);
};

MarginRequirementReport.prototype.currency = function () {
  return new Currency(this.message.tags[MarginRequirementReport.Tags.Currency]);
};

MarginRequirementReport.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[MarginRequirementReport.Tags.TransactTime]);
};

MarginRequirementReport.prototype.text = function () {
  return new Text(this.message.tags[MarginRequirementReport.Tags.Text]);
};

MarginRequirementReport.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[MarginRequirementReport.Tags.EncodedTextLen]);
};

MarginRequirementReport.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[MarginRequirementReport.Tags.EncodedText]);
};

MarginRequirementReport.Tags = {
  ApplicationSequenceControl: '1180',
  Parties: '453',
  Instrument: '55',
  MarginAmount: '1643',
  MarginReqmtRptID: '1642',
  MarginReqmtInqID: '1635',
  MarginReqmtRptType: '1638',
  TotNumReports: '911',
  LastRptRequested: '912',
  UnsolicitedIndicator: '325',
  ClearingBusinessDate: '715',
  SettlSessID: '716',
  SettlSessSubID: '717',
  MarginClass: '1639',
  Currency: '15',
  TransactTime: '60',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

MarginRequirementReport.msgType = 'CJ';

module.exports = MarginRequirementReport;