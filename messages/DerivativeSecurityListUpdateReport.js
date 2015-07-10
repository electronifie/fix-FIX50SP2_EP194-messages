var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var UnderlyingInstrument = require('../components/UnderlyingInstrument');
var DerivativeSecurityDefinition = require('../components/DerivativeSecurityDefinition');
var RelSymDerivSecUpdGrp = require('../components/RelSymDerivSecUpdGrp');
var SecurityReqID = require('../fields/SecurityReqID');
var SecurityResponseID = require('../fields/SecurityResponseID');
var SecurityRequestResult = require('../fields/SecurityRequestResult');
var SecurityUpdateAction = require('../fields/SecurityUpdateAction');
var LastUpdateTime = require('../fields/LastUpdateTime');
var TransactTime = require('../fields/TransactTime');
var TotNoRelatedSym = require('../fields/TotNoRelatedSym');
var LastFragment = require('../fields/LastFragment');

function DerivativeSecurityListUpdateReport (derivativeSecurityListUpdateReport) {
  this.message = derivativeSecurityListUpdateReport;
}

DerivativeSecurityListUpdateReport.prototype.applicationSequenceControl = function () {
  return this.message.groups[DerivativeSecurityListUpdateReport.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

DerivativeSecurityListUpdateReport.prototype.underlyingInstrument = function () {
  return this.message.groups[DerivativeSecurityListUpdateReport.Tags.UnderlyingInstrument]
    .map(function (underlyingInstrument) {
      return new UnderlyingInstrument(underlyingInstrument);
  });
};

DerivativeSecurityListUpdateReport.prototype.derivativeSecurityDefinition = function () {
  return this.message.groups[DerivativeSecurityListUpdateReport.Tags.DerivativeSecurityDefinition]
    .map(function (derivativeSecurityDefinition) {
      return new DerivativeSecurityDefinition(derivativeSecurityDefinition);
  });
};

DerivativeSecurityListUpdateReport.prototype.relSymDerivSecUpdGrp = function () {
  return this.message.groups[DerivativeSecurityListUpdateReport.Tags.RelSymDerivSecUpdGrp]
    .map(function (relSymDerivSecUpdGrp) {
      return new RelSymDerivSecUpdGrp(relSymDerivSecUpdGrp);
  });
};

DerivativeSecurityListUpdateReport.prototype.securityReqId = function () {
  return new SecurityReqID(this.message.tags[DerivativeSecurityListUpdateReport.Tags.SecurityReqID]);
};

DerivativeSecurityListUpdateReport.prototype.securityResponseId = function () {
  return new SecurityResponseID(this.message.tags[DerivativeSecurityListUpdateReport.Tags.SecurityResponseID]);
};

DerivativeSecurityListUpdateReport.prototype.securityRequestResult = function () {
  return new SecurityRequestResult(this.message.tags[DerivativeSecurityListUpdateReport.Tags.SecurityRequestResult]);
};

DerivativeSecurityListUpdateReport.prototype.securityUpdateAction = function () {
  return new SecurityUpdateAction(this.message.tags[DerivativeSecurityListUpdateReport.Tags.SecurityUpdateAction]);
};

DerivativeSecurityListUpdateReport.prototype.lastUpdateTime = function () {
  return new LastUpdateTime(this.message.tags[DerivativeSecurityListUpdateReport.Tags.LastUpdateTime]);
};

DerivativeSecurityListUpdateReport.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[DerivativeSecurityListUpdateReport.Tags.TransactTime]);
};

DerivativeSecurityListUpdateReport.prototype.totNoRelatedSym = function () {
  return new TotNoRelatedSym(this.message.tags[DerivativeSecurityListUpdateReport.Tags.TotNoRelatedSym]);
};

DerivativeSecurityListUpdateReport.prototype.lastFragment = function () {
  return new LastFragment(this.message.tags[DerivativeSecurityListUpdateReport.Tags.LastFragment]);
};

DerivativeSecurityListUpdateReport.Tags = {
  ApplicationSequenceControl: '1180',
  UnderlyingInstrument: '311',
  DerivativeSecurityDefinition: '1214',
  RelSymDerivSecUpdGrp: '146',
  SecurityReqID: '320',
  SecurityResponseID: '322',
  SecurityRequestResult: '560',
  SecurityUpdateAction: '980',
  LastUpdateTime: '779',
  TransactTime: '60',
  TotNoRelatedSym: '393',
  LastFragment: '893',
};

DerivativeSecurityListUpdateReport.msgType = 'BR';

module.exports = DerivativeSecurityListUpdateReport;