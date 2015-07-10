var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var Parties = require('../components/Parties');
var ThrottleResponse = require('../components/ThrottleResponse');
var OrderEntryAckGrp = require('../components/OrderEntryAckGrp');
var MassOrderRequestID = require('../fields/MassOrderRequestID');
var MassOrderReportID = require('../fields/MassOrderReportID');
var MassOrderRequestStatus = require('../fields/MassOrderRequestStatus');
var MassOrderRequestResult = require('../fields/MassOrderRequestResult');
var OrderResponseLevel = require('../fields/OrderResponseLevel');
var RejectText = require('../fields/RejectText');
var EncodedRejectTextLen = require('../fields/EncodedRejectTextLen');
var EncodedRejectText = require('../fields/EncodedRejectText');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');
var TradingCapacity = require('../fields/TradingCapacity');
var ClearingAccountType = require('../fields/ClearingAccountType');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var AccountType = require('../fields/AccountType');
var OrderCapacity = require('../fields/OrderCapacity');
var OrderRestrictions = require('../fields/OrderRestrictions');
var CustOrderCapacity = require('../fields/CustOrderCapacity');
var ManualOrderIndicator = require('../fields/ManualOrderIndicator');
var CustOrderHandlingInst = require('../fields/CustOrderHandlingInst');
var TransactTime = require('../fields/TransactTime');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var CopyMsgIndicator = require('../fields/CopyMsgIndicator');
var TotNoOrderEntries = require('../fields/TotNoOrderEntries');
var LastFragment = require('../fields/LastFragment');

function MassOrderAck (massOrderAck) {
  this.message = massOrderAck;
}

MassOrderAck.prototype.applicationSequenceControl = function () {
  return this.message.groups[MassOrderAck.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

MassOrderAck.prototype.parties = function () {
  return this.message.groups[MassOrderAck.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

MassOrderAck.prototype.throttleResponse = function () {
  return this.message.groups[MassOrderAck.Tags.ThrottleResponse]
    .map(function (throttleResponse) {
      return new ThrottleResponse(throttleResponse);
  });
};

MassOrderAck.prototype.orderEntryAckGrp = function () {
  return this.message.groups[MassOrderAck.Tags.OrderEntryAckGrp]
    .map(function (orderEntryAckGrp) {
      return new OrderEntryAckGrp(orderEntryAckGrp);
  });
};

MassOrderAck.prototype.massOrderRequestId = function () {
  return new MassOrderRequestID(this.message.tags[MassOrderAck.Tags.MassOrderRequestID]);
};

MassOrderAck.prototype.massOrderReportId = function () {
  return new MassOrderReportID(this.message.tags[MassOrderAck.Tags.MassOrderReportID]);
};

MassOrderAck.prototype.massOrderRequestStatus = function () {
  return new MassOrderRequestStatus(this.message.tags[MassOrderAck.Tags.MassOrderRequestStatus]);
};

MassOrderAck.prototype.massOrderRequestResult = function () {
  return new MassOrderRequestResult(this.message.tags[MassOrderAck.Tags.MassOrderRequestResult]);
};

MassOrderAck.prototype.orderResponseLevel = function () {
  return new OrderResponseLevel(this.message.tags[MassOrderAck.Tags.OrderResponseLevel]);
};

MassOrderAck.prototype.rejectText = function () {
  return new RejectText(this.message.tags[MassOrderAck.Tags.RejectText]);
};

MassOrderAck.prototype.encodedRejectTextLen = function () {
  return new EncodedRejectTextLen(this.message.tags[MassOrderAck.Tags.EncodedRejectTextLen]);
};

MassOrderAck.prototype.encodedRejectText = function () {
  return new EncodedRejectText(this.message.tags[MassOrderAck.Tags.EncodedRejectText]);
};

MassOrderAck.prototype.marketId = function () {
  return new MarketID(this.message.tags[MassOrderAck.Tags.MarketID]);
};

MassOrderAck.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[MassOrderAck.Tags.MarketSegmentID]);
};

MassOrderAck.prototype.tradingCapacity = function () {
  return new TradingCapacity(this.message.tags[MassOrderAck.Tags.TradingCapacity]);
};

MassOrderAck.prototype.clearingAccountType = function () {
  return new ClearingAccountType(this.message.tags[MassOrderAck.Tags.ClearingAccountType]);
};

MassOrderAck.prototype.account = function () {
  return new Account(this.message.tags[MassOrderAck.Tags.Account]);
};

MassOrderAck.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[MassOrderAck.Tags.AcctIDSource]);
};

MassOrderAck.prototype.accountType = function () {
  return new AccountType(this.message.tags[MassOrderAck.Tags.AccountType]);
};

MassOrderAck.prototype.orderCapacity = function () {
  return new OrderCapacity(this.message.tags[MassOrderAck.Tags.OrderCapacity]);
};

MassOrderAck.prototype.orderRestrictions = function () {
  return new OrderRestrictions(this.message.tags[MassOrderAck.Tags.OrderRestrictions]);
};

MassOrderAck.prototype.custOrderCapacity = function () {
  return new CustOrderCapacity(this.message.tags[MassOrderAck.Tags.CustOrderCapacity]);
};

MassOrderAck.prototype.manualOrderIndicator = function () {
  return new ManualOrderIndicator(this.message.tags[MassOrderAck.Tags.ManualOrderIndicator]);
};

MassOrderAck.prototype.custOrderHandlingInst = function () {
  return new CustOrderHandlingInst(this.message.tags[MassOrderAck.Tags.CustOrderHandlingInst]);
};

MassOrderAck.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[MassOrderAck.Tags.TransactTime]);
};

MassOrderAck.prototype.text = function () {
  return new Text(this.message.tags[MassOrderAck.Tags.Text]);
};

MassOrderAck.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[MassOrderAck.Tags.EncodedTextLen]);
};

MassOrderAck.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[MassOrderAck.Tags.EncodedText]);
};

MassOrderAck.prototype.copyMsgIndicator = function () {
  return new CopyMsgIndicator(this.message.tags[MassOrderAck.Tags.CopyMsgIndicator]);
};

MassOrderAck.prototype.totNoOrderEntries = function () {
  return new TotNoOrderEntries(this.message.tags[MassOrderAck.Tags.TotNoOrderEntries]);
};

MassOrderAck.prototype.lastFragment = function () {
  return new LastFragment(this.message.tags[MassOrderAck.Tags.LastFragment]);
};

MassOrderAck.Tags = {
  ApplicationSequenceControl: '1180',
  Parties: '453',
  ThrottleResponse: '1685',
  OrderEntryAckGrp: '2428',
  MassOrderRequestID: '2423',
  MassOrderReportID: '2424',
  MassOrderRequestStatus: '2425',
  MassOrderRequestResult: '2426',
  OrderResponseLevel: '2427',
  RejectText: '1328',
  EncodedRejectTextLen: '1664',
  EncodedRejectText: '1665',
  MarketID: '1301',
  MarketSegmentID: '1300',
  TradingCapacity: '1815',
  ClearingAccountType: '1816',
  Account: '1',
  AcctIDSource: '660',
  AccountType: '581',
  OrderCapacity: '528',
  OrderRestrictions: '529',
  CustOrderCapacity: '582',
  ManualOrderIndicator: '1028',
  CustOrderHandlingInst: '1031',
  TransactTime: '60',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  CopyMsgIndicator: '797',
  TotNoOrderEntries: '2432',
  LastFragment: '893',
};

MassOrderAck.msgType = 'DK';

module.exports = MassOrderAck;