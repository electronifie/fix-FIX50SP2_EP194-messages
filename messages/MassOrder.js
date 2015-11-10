var Parties = require('../components/Parties');
var OrderEntryGrp = require('../components/OrderEntryGrp');
var MassOrderRequestID = require('../fields/MassOrderRequestID');
var OrderResponseLevel = require('../fields/OrderResponseLevel');
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
var ThrottleInst = require('../fields/ThrottleInst');
var TotNoOrderEntries = require('../fields/TotNoOrderEntries');
var LastFragment = require('../fields/LastFragment');

function MassOrder (massOrder) {
  this.message = massOrder;
}

MassOrder.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MassOrder.Tags.Parties] === undefined) return null;
  return this.message.groups[MassOrder.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

MassOrder.prototype.orderEntryGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MassOrder.Tags.OrderEntryGrp] === undefined) return null;
  return this.message.groups[MassOrder.Tags.OrderEntryGrp]
    .map(function (orderEntryGrp) {
      return new OrderEntryGrp(orderEntryGrp);
  });
};

MassOrder.prototype.massOrderRequestId = function () {
  return new MassOrderRequestID(this.message.tags[MassOrder.Tags.MassOrderRequestID]);
};

MassOrder.prototype.orderResponseLevel = function () {
  return new OrderResponseLevel(this.message.tags[MassOrder.Tags.OrderResponseLevel]);
};

MassOrder.prototype.marketId = function () {
  return new MarketID(this.message.tags[MassOrder.Tags.MarketID]);
};

MassOrder.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[MassOrder.Tags.MarketSegmentID]);
};

MassOrder.prototype.tradingCapacity = function () {
  return new TradingCapacity(this.message.tags[MassOrder.Tags.TradingCapacity]);
};

MassOrder.prototype.clearingAccountType = function () {
  return new ClearingAccountType(this.message.tags[MassOrder.Tags.ClearingAccountType]);
};

MassOrder.prototype.account = function () {
  return new Account(this.message.tags[MassOrder.Tags.Account]);
};

MassOrder.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[MassOrder.Tags.AcctIDSource]);
};

MassOrder.prototype.accountType = function () {
  return new AccountType(this.message.tags[MassOrder.Tags.AccountType]);
};

MassOrder.prototype.orderCapacity = function () {
  return new OrderCapacity(this.message.tags[MassOrder.Tags.OrderCapacity]);
};

MassOrder.prototype.orderRestrictions = function () {
  return new OrderRestrictions(this.message.tags[MassOrder.Tags.OrderRestrictions]);
};

MassOrder.prototype.custOrderCapacity = function () {
  return new CustOrderCapacity(this.message.tags[MassOrder.Tags.CustOrderCapacity]);
};

MassOrder.prototype.manualOrderIndicator = function () {
  return new ManualOrderIndicator(this.message.tags[MassOrder.Tags.ManualOrderIndicator]);
};

MassOrder.prototype.custOrderHandlingInst = function () {
  return new CustOrderHandlingInst(this.message.tags[MassOrder.Tags.CustOrderHandlingInst]);
};

MassOrder.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[MassOrder.Tags.TransactTime]);
};

MassOrder.prototype.text = function () {
  return new Text(this.message.tags[MassOrder.Tags.Text]);
};

MassOrder.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[MassOrder.Tags.EncodedTextLen]);
};

MassOrder.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[MassOrder.Tags.EncodedText]);
};

MassOrder.prototype.throttleInst = function () {
  return new ThrottleInst(this.message.tags[MassOrder.Tags.ThrottleInst]);
};

MassOrder.prototype.totNoOrderEntries = function () {
  return new TotNoOrderEntries(this.message.tags[MassOrder.Tags.TotNoOrderEntries]);
};

MassOrder.prototype.lastFragment = function () {
  return new LastFragment(this.message.tags[MassOrder.Tags.LastFragment]);
};

MassOrder.Tags = {
  Parties: '453',
  OrderEntryGrp: '2428',
  MassOrderRequestID: '2423',
  OrderResponseLevel: '2427',
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
  ThrottleInst: '1685',
  TotNoOrderEntries: '2432',
  LastFragment: '893',
};

MassOrder.msgType = 'DJ';

module.exports = MassOrder;