var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var SecLstUpdRelSymGrp = require('../components/SecLstUpdRelSymGrp');
var SecurityReportID = require('../fields/SecurityReportID');
var SecurityListID = require('../fields/SecurityListID');
var SecurityListRefID = require('../fields/SecurityListRefID');
var SecurityListDesc = require('../fields/SecurityListDesc');
var EncodedSecurityListDescLen = require('../fields/EncodedSecurityListDescLen');
var EncodedSecurityListDesc = require('../fields/EncodedSecurityListDesc');
var SecurityListType = require('../fields/SecurityListType');
var SecurityListTypeSource = require('../fields/SecurityListTypeSource');
var SecurityReqID = require('../fields/SecurityReqID');
var SecurityResponseID = require('../fields/SecurityResponseID');
var SecurityRequestResult = require('../fields/SecurityRequestResult');
var TotNoRelatedSym = require('../fields/TotNoRelatedSym');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var SecurityUpdateAction = require('../fields/SecurityUpdateAction');
var CorporateAction = require('../fields/CorporateAction');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');
var TransactTime = require('../fields/TransactTime');
var LastFragment = require('../fields/LastFragment');

function SecurityListUpdateReport (securityListUpdateReport) {
  this.message = securityListUpdateReport;
}

SecurityListUpdateReport.prototype.applicationSequenceControl = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityListUpdateReport.Tags.ApplicationSequenceControl] === undefined) return null;
  return this.message.groups[SecurityListUpdateReport.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

SecurityListUpdateReport.prototype.secLstUpdRelSymGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityListUpdateReport.Tags.SecLstUpdRelSymGrp] === undefined) return null;
  return this.message.groups[SecurityListUpdateReport.Tags.SecLstUpdRelSymGrp]
    .map(function (secLstUpdRelSymGrp) {
      return new SecLstUpdRelSymGrp(secLstUpdRelSymGrp);
  });
};

SecurityListUpdateReport.prototype.securityReportId = function () {
  return new SecurityReportID(this.message.tags[SecurityListUpdateReport.Tags.SecurityReportID]);
};

SecurityListUpdateReport.prototype.securityListId = function () {
  return new SecurityListID(this.message.tags[SecurityListUpdateReport.Tags.SecurityListID]);
};

SecurityListUpdateReport.prototype.securityListRefId = function () {
  return new SecurityListRefID(this.message.tags[SecurityListUpdateReport.Tags.SecurityListRefID]);
};

SecurityListUpdateReport.prototype.securityListDesc = function () {
  return new SecurityListDesc(this.message.tags[SecurityListUpdateReport.Tags.SecurityListDesc]);
};

SecurityListUpdateReport.prototype.encodedSecurityListDescLen = function () {
  return new EncodedSecurityListDescLen(this.message.tags[SecurityListUpdateReport.Tags.EncodedSecurityListDescLen]);
};

SecurityListUpdateReport.prototype.encodedSecurityListDesc = function () {
  return new EncodedSecurityListDesc(this.message.tags[SecurityListUpdateReport.Tags.EncodedSecurityListDesc]);
};

SecurityListUpdateReport.prototype.securityListType = function () {
  return new SecurityListType(this.message.tags[SecurityListUpdateReport.Tags.SecurityListType]);
};

SecurityListUpdateReport.prototype.securityListTypeSource = function () {
  return new SecurityListTypeSource(this.message.tags[SecurityListUpdateReport.Tags.SecurityListTypeSource]);
};

SecurityListUpdateReport.prototype.securityReqId = function () {
  return new SecurityReqID(this.message.tags[SecurityListUpdateReport.Tags.SecurityReqID]);
};

SecurityListUpdateReport.prototype.securityResponseId = function () {
  return new SecurityResponseID(this.message.tags[SecurityListUpdateReport.Tags.SecurityResponseID]);
};

SecurityListUpdateReport.prototype.securityRequestResult = function () {
  return new SecurityRequestResult(this.message.tags[SecurityListUpdateReport.Tags.SecurityRequestResult]);
};

SecurityListUpdateReport.prototype.totNoRelatedSym = function () {
  return new TotNoRelatedSym(this.message.tags[SecurityListUpdateReport.Tags.TotNoRelatedSym]);
};

SecurityListUpdateReport.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[SecurityListUpdateReport.Tags.ClearingBusinessDate]);
};

SecurityListUpdateReport.prototype.securityUpdateAction = function () {
  return new SecurityUpdateAction(this.message.tags[SecurityListUpdateReport.Tags.SecurityUpdateAction]);
};

SecurityListUpdateReport.prototype.corporateAction = function () {
  return new CorporateAction(this.message.tags[SecurityListUpdateReport.Tags.CorporateAction]);
};

SecurityListUpdateReport.prototype.marketId = function () {
  return new MarketID(this.message.tags[SecurityListUpdateReport.Tags.MarketID]);
};

SecurityListUpdateReport.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[SecurityListUpdateReport.Tags.MarketSegmentID]);
};

SecurityListUpdateReport.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[SecurityListUpdateReport.Tags.TransactTime]);
};

SecurityListUpdateReport.prototype.lastFragment = function () {
  return new LastFragment(this.message.tags[SecurityListUpdateReport.Tags.LastFragment]);
};

SecurityListUpdateReport.Tags = {
  ApplicationSequenceControl: '1180',
  SecLstUpdRelSymGrp: '146',
  SecurityReportID: '964',
  SecurityListID: '1465',
  SecurityListRefID: '1466',
  SecurityListDesc: '1467',
  EncodedSecurityListDescLen: '1468',
  EncodedSecurityListDesc: '1469',
  SecurityListType: '1470',
  SecurityListTypeSource: '1471',
  SecurityReqID: '320',
  SecurityResponseID: '322',
  SecurityRequestResult: '560',
  TotNoRelatedSym: '393',
  ClearingBusinessDate: '715',
  SecurityUpdateAction: '980',
  CorporateAction: '292',
  MarketID: '1301',
  MarketSegmentID: '1300',
  TransactTime: '60',
  LastFragment: '893',
};

SecurityListUpdateReport.msgType = 'BK';

module.exports = SecurityListUpdateReport;