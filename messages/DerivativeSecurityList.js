var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var UnderlyingInstrument = require('../components/UnderlyingInstrument');
var DerivativeSecurityDefinition = require('../components/DerivativeSecurityDefinition');
var RelSymDerivSecGrp = require('../components/RelSymDerivSecGrp');
var SecurityReportID = require('../fields/SecurityReportID');
var SecurityReqID = require('../fields/SecurityReqID');
var SecurityResponseID = require('../fields/SecurityResponseID');
var SecurityRequestResult = require('../fields/SecurityRequestResult');
var SecurityRejectReason = require('../fields/SecurityRejectReason');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var LastUpdateTime = require('../fields/LastUpdateTime');
var TransactTime = require('../fields/TransactTime');
var TotNoRelatedSym = require('../fields/TotNoRelatedSym');
var LastFragment = require('../fields/LastFragment');

function DerivativeSecurityList (derivativeSecurityList) {
  this.message = derivativeSecurityList;
}

DerivativeSecurityList.prototype.applicationSequenceControl = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[DerivativeSecurityList.Tags.ApplicationSequenceControl] === undefined) return null;
  return this.message.groups[DerivativeSecurityList.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

DerivativeSecurityList.prototype.underlyingInstrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[DerivativeSecurityList.Tags.UnderlyingInstrument] === undefined) return null;
  return this.message.groups[DerivativeSecurityList.Tags.UnderlyingInstrument]
    .map(function (underlyingInstrument) {
      return new UnderlyingInstrument(underlyingInstrument);
  });
};

DerivativeSecurityList.prototype.derivativeSecurityDefinition = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[DerivativeSecurityList.Tags.DerivativeSecurityDefinition] === undefined) return null;
  return this.message.groups[DerivativeSecurityList.Tags.DerivativeSecurityDefinition]
    .map(function (derivativeSecurityDefinition) {
      return new DerivativeSecurityDefinition(derivativeSecurityDefinition);
  });
};

DerivativeSecurityList.prototype.relSymDerivSecGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[DerivativeSecurityList.Tags.RelSymDerivSecGrp] === undefined) return null;
  return this.message.groups[DerivativeSecurityList.Tags.RelSymDerivSecGrp]
    .map(function (relSymDerivSecGrp) {
      return new RelSymDerivSecGrp(relSymDerivSecGrp);
  });
};

DerivativeSecurityList.prototype.securityReportId = function () {
  return new SecurityReportID(this.message.tags[DerivativeSecurityList.Tags.SecurityReportID]);
};

DerivativeSecurityList.prototype.securityReqId = function () {
  return new SecurityReqID(this.message.tags[DerivativeSecurityList.Tags.SecurityReqID]);
};

DerivativeSecurityList.prototype.securityResponseId = function () {
  return new SecurityResponseID(this.message.tags[DerivativeSecurityList.Tags.SecurityResponseID]);
};

DerivativeSecurityList.prototype.securityRequestResult = function () {
  return new SecurityRequestResult(this.message.tags[DerivativeSecurityList.Tags.SecurityRequestResult]);
};

DerivativeSecurityList.prototype.securityRejectReason = function () {
  return new SecurityRejectReason(this.message.tags[DerivativeSecurityList.Tags.SecurityRejectReason]);
};

DerivativeSecurityList.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[DerivativeSecurityList.Tags.ClearingBusinessDate]);
};

DerivativeSecurityList.prototype.lastUpdateTime = function () {
  return new LastUpdateTime(this.message.tags[DerivativeSecurityList.Tags.LastUpdateTime]);
};

DerivativeSecurityList.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[DerivativeSecurityList.Tags.TransactTime]);
};

DerivativeSecurityList.prototype.totNoRelatedSym = function () {
  return new TotNoRelatedSym(this.message.tags[DerivativeSecurityList.Tags.TotNoRelatedSym]);
};

DerivativeSecurityList.prototype.lastFragment = function () {
  return new LastFragment(this.message.tags[DerivativeSecurityList.Tags.LastFragment]);
};

DerivativeSecurityList.Tags = {
  ApplicationSequenceControl: '1180',
  UnderlyingInstrument: '311',
  DerivativeSecurityDefinition: '1214',
  RelSymDerivSecGrp: '146',
  SecurityReportID: '964',
  SecurityReqID: '320',
  SecurityResponseID: '322',
  SecurityRequestResult: '560',
  SecurityRejectReason: '1607',
  ClearingBusinessDate: '715',
  LastUpdateTime: '779',
  TransactTime: '60',
  TotNoRelatedSym: '393',
  LastFragment: '893',
};

DerivativeSecurityList.msgType = 'AA';

module.exports = DerivativeSecurityList;