var Parties = require('../components/Parties');
var QuoteID = require('../fields/QuoteID');
var QuoteMsgID = require('../fields/QuoteMsgID');
var QuoteReqID = require('../fields/QuoteReqID');
var QuoteType = require('../fields/QuoteType');
var QuoteCancelType = require('../fields/QuoteCancelType');
var SecondaryQuoteID = require('../fields/SecondaryQuoteID');
var QuoteAckStatus = require('../fields/QuoteAckStatus');
var QuoteRejectReason = require('../fields/QuoteRejectReason');
var RejectText = require('../fields/RejectText');
var EncodedRejectTextLen = require('../fields/EncodedRejectTextLen');
var EncodedRejectText = require('../fields/EncodedRejectText');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function QuoteAck (quoteAck) {
  this.message = quoteAck;
}

QuoteAck.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[QuoteAck.Tags.Parties] === undefined) return null;
  return this.message.groups[QuoteAck.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

QuoteAck.prototype.quoteId = function () {
  return new QuoteID(this.message.tags[QuoteAck.Tags.QuoteID]);
};

QuoteAck.prototype.quoteMsgId = function () {
  return new QuoteMsgID(this.message.tags[QuoteAck.Tags.QuoteMsgID]);
};

QuoteAck.prototype.quoteReqId = function () {
  return new QuoteReqID(this.message.tags[QuoteAck.Tags.QuoteReqID]);
};

QuoteAck.prototype.quoteType = function () {
  return new QuoteType(this.message.tags[QuoteAck.Tags.QuoteType]);
};

QuoteAck.prototype.quoteCancelType = function () {
  return new QuoteCancelType(this.message.tags[QuoteAck.Tags.QuoteCancelType]);
};

QuoteAck.prototype.secondaryQuoteId = function () {
  return new SecondaryQuoteID(this.message.tags[QuoteAck.Tags.SecondaryQuoteID]);
};

QuoteAck.prototype.quoteAckStatus = function () {
  return new QuoteAckStatus(this.message.tags[QuoteAck.Tags.QuoteAckStatus]);
};

QuoteAck.prototype.quoteRejectReason = function () {
  return new QuoteRejectReason(this.message.tags[QuoteAck.Tags.QuoteRejectReason]);
};

QuoteAck.prototype.rejectText = function () {
  return new RejectText(this.message.tags[QuoteAck.Tags.RejectText]);
};

QuoteAck.prototype.encodedRejectTextLen = function () {
  return new EncodedRejectTextLen(this.message.tags[QuoteAck.Tags.EncodedRejectTextLen]);
};

QuoteAck.prototype.encodedRejectText = function () {
  return new EncodedRejectText(this.message.tags[QuoteAck.Tags.EncodedRejectText]);
};

QuoteAck.prototype.text = function () {
  return new Text(this.message.tags[QuoteAck.Tags.Text]);
};

QuoteAck.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[QuoteAck.Tags.EncodedTextLen]);
};

QuoteAck.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[QuoteAck.Tags.EncodedText]);
};

QuoteAck.Tags = {
  Parties: '453',
  QuoteID: '117',
  QuoteMsgID: '1166',
  QuoteReqID: '131',
  QuoteType: '537',
  QuoteCancelType: '298',
  SecondaryQuoteID: '1751',
  QuoteAckStatus: '1865',
  QuoteRejectReason: '300',
  RejectText: '1328',
  EncodedRejectTextLen: '1664',
  EncodedRejectText: '1665',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

QuoteAck.msgType = 'CW';

module.exports = QuoteAck;