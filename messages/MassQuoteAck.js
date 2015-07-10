var Parties = require('../components/Parties');
var TargetParties = require('../components/TargetParties');
var QuotSetAckGrp = require('../components/QuotSetAckGrp');
var ThrottleResponse = require('../components/ThrottleResponse');
var QuoteReqID = require('../fields/QuoteReqID');
var QuoteID = require('../fields/QuoteID');
var QuoteStatus = require('../fields/QuoteStatus');
var QuoteRejectReason = require('../fields/QuoteRejectReason');
var QuoteResponseLevel = require('../fields/QuoteResponseLevel');
var QuoteType = require('../fields/QuoteType');
var QuoteCancelType = require('../fields/QuoteCancelType');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var AccountType = require('../fields/AccountType');
var ComplianceID = require('../fields/ComplianceID');
var ComplianceText = require('../fields/ComplianceText');
var EncodedComplianceTextLen = require('../fields/EncodedComplianceTextLen');
var EncodedComplianceText = require('../fields/EncodedComplianceText');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function MassQuoteAck (massQuoteAck) {
  this.message = massQuoteAck;
}

MassQuoteAck.prototype.parties = function () {
  return this.message.groups[MassQuoteAck.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

MassQuoteAck.prototype.targetParties = function () {
  return this.message.groups[MassQuoteAck.Tags.TargetParties]
    .map(function (targetParties) {
      return new TargetParties(targetParties);
  });
};

MassQuoteAck.prototype.quotSetAckGrp = function () {
  return this.message.groups[MassQuoteAck.Tags.QuotSetAckGrp]
    .map(function (quotSetAckGrp) {
      return new QuotSetAckGrp(quotSetAckGrp);
  });
};

MassQuoteAck.prototype.throttleResponse = function () {
  return this.message.groups[MassQuoteAck.Tags.ThrottleResponse]
    .map(function (throttleResponse) {
      return new ThrottleResponse(throttleResponse);
  });
};

MassQuoteAck.prototype.quoteReqId = function () {
  return new QuoteReqID(this.message.tags[MassQuoteAck.Tags.QuoteReqID]);
};

MassQuoteAck.prototype.quoteId = function () {
  return new QuoteID(this.message.tags[MassQuoteAck.Tags.QuoteID]);
};

MassQuoteAck.prototype.quoteStatus = function () {
  return new QuoteStatus(this.message.tags[MassQuoteAck.Tags.QuoteStatus]);
};

MassQuoteAck.prototype.quoteRejectReason = function () {
  return new QuoteRejectReason(this.message.tags[MassQuoteAck.Tags.QuoteRejectReason]);
};

MassQuoteAck.prototype.quoteResponseLevel = function () {
  return new QuoteResponseLevel(this.message.tags[MassQuoteAck.Tags.QuoteResponseLevel]);
};

MassQuoteAck.prototype.quoteType = function () {
  return new QuoteType(this.message.tags[MassQuoteAck.Tags.QuoteType]);
};

MassQuoteAck.prototype.quoteCancelType = function () {
  return new QuoteCancelType(this.message.tags[MassQuoteAck.Tags.QuoteCancelType]);
};

MassQuoteAck.prototype.account = function () {
  return new Account(this.message.tags[MassQuoteAck.Tags.Account]);
};

MassQuoteAck.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[MassQuoteAck.Tags.AcctIDSource]);
};

MassQuoteAck.prototype.accountType = function () {
  return new AccountType(this.message.tags[MassQuoteAck.Tags.AccountType]);
};

MassQuoteAck.prototype.complianceId = function () {
  return new ComplianceID(this.message.tags[MassQuoteAck.Tags.ComplianceID]);
};

MassQuoteAck.prototype.complianceText = function () {
  return new ComplianceText(this.message.tags[MassQuoteAck.Tags.ComplianceText]);
};

MassQuoteAck.prototype.encodedComplianceTextLen = function () {
  return new EncodedComplianceTextLen(this.message.tags[MassQuoteAck.Tags.EncodedComplianceTextLen]);
};

MassQuoteAck.prototype.encodedComplianceText = function () {
  return new EncodedComplianceText(this.message.tags[MassQuoteAck.Tags.EncodedComplianceText]);
};

MassQuoteAck.prototype.text = function () {
  return new Text(this.message.tags[MassQuoteAck.Tags.Text]);
};

MassQuoteAck.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[MassQuoteAck.Tags.EncodedTextLen]);
};

MassQuoteAck.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[MassQuoteAck.Tags.EncodedText]);
};

MassQuoteAck.Tags = {
  Parties: '453',
  TargetParties: '1461',
  QuotSetAckGrp: '296',
  ThrottleResponse: '1685',
  QuoteReqID: '131',
  QuoteID: '117',
  QuoteStatus: '297',
  QuoteRejectReason: '300',
  QuoteResponseLevel: '301',
  QuoteType: '537',
  QuoteCancelType: '298',
  Account: '1',
  AcctIDSource: '660',
  AccountType: '581',
  ComplianceID: '376',
  ComplianceText: '2404',
  EncodedComplianceTextLen: '2351',
  EncodedComplianceText: '2352',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

MassQuoteAck.msgType = 'b';

module.exports = MassQuoteAck;