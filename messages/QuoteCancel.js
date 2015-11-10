var Parties = require('../components/Parties');
var TargetParties = require('../components/TargetParties');
var QuotCxlEntriesGrp = require('../components/QuotCxlEntriesGrp');
var QuoteReqID = require('../fields/QuoteReqID');
var QuoteID = require('../fields/QuoteID');
var SecondaryQuoteID = require('../fields/SecondaryQuoteID');
var QuoteMsgID = require('../fields/QuoteMsgID');
var QuoteCancelType = require('../fields/QuoteCancelType');
var QuoteType = require('../fields/QuoteType');
var QuoteResponseLevel = require('../fields/QuoteResponseLevel');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var AccountType = require('../fields/AccountType');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');

function QuoteCancel (quoteCancel) {
  this.message = quoteCancel;
}

QuoteCancel.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteCancel.Tags.Parties] === undefined) return null;
  return this.message.groups[QuoteCancel.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

QuoteCancel.prototype.targetParties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteCancel.Tags.TargetParties] === undefined) return null;
  return this.message.groups[QuoteCancel.Tags.TargetParties]
    .map(function (targetParties) {
      return new TargetParties(targetParties);
  });
};

QuoteCancel.prototype.quotCxlEntriesGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteCancel.Tags.QuotCxlEntriesGrp] === undefined) return null;
  return this.message.groups[QuoteCancel.Tags.QuotCxlEntriesGrp]
    .map(function (quotCxlEntriesGrp) {
      return new QuotCxlEntriesGrp(quotCxlEntriesGrp);
  });
};

QuoteCancel.prototype.quoteReqId = function () {
  return new QuoteReqID(this.message.tags[QuoteCancel.Tags.QuoteReqID]);
};

QuoteCancel.prototype.quoteId = function () {
  return new QuoteID(this.message.tags[QuoteCancel.Tags.QuoteID]);
};

QuoteCancel.prototype.secondaryQuoteId = function () {
  return new SecondaryQuoteID(this.message.tags[QuoteCancel.Tags.SecondaryQuoteID]);
};

QuoteCancel.prototype.quoteMsgId = function () {
  return new QuoteMsgID(this.message.tags[QuoteCancel.Tags.QuoteMsgID]);
};

QuoteCancel.prototype.quoteCancelType = function () {
  return new QuoteCancelType(this.message.tags[QuoteCancel.Tags.QuoteCancelType]);
};

QuoteCancel.prototype.quoteType = function () {
  return new QuoteType(this.message.tags[QuoteCancel.Tags.QuoteType]);
};

QuoteCancel.prototype.quoteResponseLevel = function () {
  return new QuoteResponseLevel(this.message.tags[QuoteCancel.Tags.QuoteResponseLevel]);
};

QuoteCancel.prototype.account = function () {
  return new Account(this.message.tags[QuoteCancel.Tags.Account]);
};

QuoteCancel.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[QuoteCancel.Tags.AcctIDSource]);
};

QuoteCancel.prototype.accountType = function () {
  return new AccountType(this.message.tags[QuoteCancel.Tags.AccountType]);
};

QuoteCancel.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[QuoteCancel.Tags.TradingSessionID]);
};

QuoteCancel.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[QuoteCancel.Tags.TradingSessionSubID]);
};

QuoteCancel.Tags = {
  Parties: '453',
  TargetParties: '1461',
  QuotCxlEntriesGrp: '295',
  QuoteReqID: '131',
  QuoteID: '117',
  SecondaryQuoteID: '1751',
  QuoteMsgID: '1166',
  QuoteCancelType: '298',
  QuoteType: '537',
  QuoteResponseLevel: '301',
  Account: '1',
  AcctIDSource: '660',
  AccountType: '581',
  TradingSessionID: '336',
  TradingSessionSubID: '625',
};

QuoteCancel.msgType = 'Z';

module.exports = QuoteCancel;