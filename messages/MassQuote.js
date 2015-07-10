var Parties = require('../components/Parties');
var QuotSetGrp = require('../components/QuotSetGrp');
var QuoteReqID = require('../fields/QuoteReqID');
var QuoteID = require('../fields/QuoteID');
var QuoteType = require('../fields/QuoteType');
var QuoteModelType = require('../fields/QuoteModelType');
var QuoteResponseLevel = require('../fields/QuoteResponseLevel');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var AccountType = require('../fields/AccountType');
var DefBidSize = require('../fields/DefBidSize');
var DefOfferSize = require('../fields/DefOfferSize');
var ThrottleInst = require('../fields/ThrottleInst');
var ComplianceID = require('../fields/ComplianceID');
var ComplianceText = require('../fields/ComplianceText');
var EncodedComplianceTextLen = require('../fields/EncodedComplianceTextLen');
var EncodedComplianceText = require('../fields/EncodedComplianceText');

function MassQuote (massQuote) {
  this.message = massQuote;
}

MassQuote.prototype.parties = function () {
  return this.message.groups[MassQuote.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

MassQuote.prototype.quotSetGrp = function () {
  return this.message.groups[MassQuote.Tags.QuotSetGrp]
    .map(function (quotSetGrp) {
      return new QuotSetGrp(quotSetGrp);
  });
};

MassQuote.prototype.quoteReqId = function () {
  return new QuoteReqID(this.message.tags[MassQuote.Tags.QuoteReqID]);
};

MassQuote.prototype.quoteId = function () {
  return new QuoteID(this.message.tags[MassQuote.Tags.QuoteID]);
};

MassQuote.prototype.quoteType = function () {
  return new QuoteType(this.message.tags[MassQuote.Tags.QuoteType]);
};

MassQuote.prototype.quoteModelType = function () {
  return new QuoteModelType(this.message.tags[MassQuote.Tags.QuoteModelType]);
};

MassQuote.prototype.quoteResponseLevel = function () {
  return new QuoteResponseLevel(this.message.tags[MassQuote.Tags.QuoteResponseLevel]);
};

MassQuote.prototype.account = function () {
  return new Account(this.message.tags[MassQuote.Tags.Account]);
};

MassQuote.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[MassQuote.Tags.AcctIDSource]);
};

MassQuote.prototype.accountType = function () {
  return new AccountType(this.message.tags[MassQuote.Tags.AccountType]);
};

MassQuote.prototype.defBidSize = function () {
  return new DefBidSize(this.message.tags[MassQuote.Tags.DefBidSize]);
};

MassQuote.prototype.defOfferSize = function () {
  return new DefOfferSize(this.message.tags[MassQuote.Tags.DefOfferSize]);
};

MassQuote.prototype.throttleInst = function () {
  return new ThrottleInst(this.message.tags[MassQuote.Tags.ThrottleInst]);
};

MassQuote.prototype.complianceId = function () {
  return new ComplianceID(this.message.tags[MassQuote.Tags.ComplianceID]);
};

MassQuote.prototype.complianceText = function () {
  return new ComplianceText(this.message.tags[MassQuote.Tags.ComplianceText]);
};

MassQuote.prototype.encodedComplianceTextLen = function () {
  return new EncodedComplianceTextLen(this.message.tags[MassQuote.Tags.EncodedComplianceTextLen]);
};

MassQuote.prototype.encodedComplianceText = function () {
  return new EncodedComplianceText(this.message.tags[MassQuote.Tags.EncodedComplianceText]);
};

MassQuote.Tags = {
  Parties: '453',
  QuotSetGrp: '296',
  QuoteReqID: '131',
  QuoteID: '117',
  QuoteType: '537',
  QuoteModelType: '2403',
  QuoteResponseLevel: '301',
  Account: '1',
  AcctIDSource: '660',
  AccountType: '581',
  DefBidSize: '293',
  DefOfferSize: '294',
  ThrottleInst: '1685',
  ComplianceID: '376',
  ComplianceText: '2404',
  EncodedComplianceTextLen: '2351',
  EncodedComplianceText: '2352',
};

MassQuote.msgType = 'i';

module.exports = MassQuote;