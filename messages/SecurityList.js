var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var SecListGrp = require('../components/SecListGrp');
var SecurityReportID = require('../fields/SecurityReportID');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
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
var SecurityRejectReason = require('../fields/SecurityRejectReason');
var TransactTime = require('../fields/TransactTime');
var TotNoRelatedSym = require('../fields/TotNoRelatedSym');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');
var LastFragment = require('../fields/LastFragment');

function SecurityList (securityList) {
  this.message = securityList;
}

SecurityList.prototype.applicationSequenceControl = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityList.Tags.ApplicationSequenceControl] === undefined) return null;
  return this.message.groups[SecurityList.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

SecurityList.prototype.secListGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[SecurityList.Tags.SecListGrp] === undefined) return null;
  return this.message.groups[SecurityList.Tags.SecListGrp]
    .map(function (secListGrp) {
      return new SecListGrp(secListGrp);
  });
};

SecurityList.prototype.securityReportId = function () {
  return new SecurityReportID(this.message.tags[SecurityList.Tags.SecurityReportID]);
};

SecurityList.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[SecurityList.Tags.ClearingBusinessDate]);
};

SecurityList.prototype.securityListId = function () {
  return new SecurityListID(this.message.tags[SecurityList.Tags.SecurityListID]);
};

SecurityList.prototype.securityListRefId = function () {
  return new SecurityListRefID(this.message.tags[SecurityList.Tags.SecurityListRefID]);
};

SecurityList.prototype.securityListDesc = function () {
  return new SecurityListDesc(this.message.tags[SecurityList.Tags.SecurityListDesc]);
};

SecurityList.prototype.encodedSecurityListDescLen = function () {
  return new EncodedSecurityListDescLen(this.message.tags[SecurityList.Tags.EncodedSecurityListDescLen]);
};

SecurityList.prototype.encodedSecurityListDesc = function () {
  return new EncodedSecurityListDesc(this.message.tags[SecurityList.Tags.EncodedSecurityListDesc]);
};

SecurityList.prototype.securityListType = function () {
  return new SecurityListType(this.message.tags[SecurityList.Tags.SecurityListType]);
};

SecurityList.prototype.securityListTypeSource = function () {
  return new SecurityListTypeSource(this.message.tags[SecurityList.Tags.SecurityListTypeSource]);
};

SecurityList.prototype.securityReqId = function () {
  return new SecurityReqID(this.message.tags[SecurityList.Tags.SecurityReqID]);
};

SecurityList.prototype.securityResponseId = function () {
  return new SecurityResponseID(this.message.tags[SecurityList.Tags.SecurityResponseID]);
};

SecurityList.prototype.securityRequestResult = function () {
  return new SecurityRequestResult(this.message.tags[SecurityList.Tags.SecurityRequestResult]);
};

SecurityList.prototype.securityRejectReason = function () {
  return new SecurityRejectReason(this.message.tags[SecurityList.Tags.SecurityRejectReason]);
};

SecurityList.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[SecurityList.Tags.TransactTime]);
};

SecurityList.prototype.totNoRelatedSym = function () {
  return new TotNoRelatedSym(this.message.tags[SecurityList.Tags.TotNoRelatedSym]);
};

SecurityList.prototype.marketId = function () {
  return new MarketID(this.message.tags[SecurityList.Tags.MarketID]);
};

SecurityList.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[SecurityList.Tags.MarketSegmentID]);
};

SecurityList.prototype.lastFragment = function () {
  return new LastFragment(this.message.tags[SecurityList.Tags.LastFragment]);
};

SecurityList.Tags = {
  ApplicationSequenceControl: '1180',
  SecListGrp: '146',
  SecurityReportID: '964',
  ClearingBusinessDate: '715',
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
  SecurityRejectReason: '1607',
  TransactTime: '60',
  TotNoRelatedSym: '393',
  MarketID: '1301',
  MarketSegmentID: '1300',
  LastFragment: '893',
};

SecurityList.msgType = 'y';

module.exports = SecurityList;