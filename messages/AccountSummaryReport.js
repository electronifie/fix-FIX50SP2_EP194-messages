var SettlementAmountGrp = require('../components/SettlementAmountGrp');
var MarginAmount = require('../components/MarginAmount');
var Parties = require('../components/Parties');
var CollateralAmountGrp = require('../components/CollateralAmountGrp');
var PayCollectGrp = require('../components/PayCollectGrp');
var PositionAmountData = require('../components/PositionAmountData');
var AccountSummaryReportID = require('../fields/AccountSummaryReportID');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var Currency = require('../fields/Currency');
var TotalNetValue = require('../fields/TotalNetValue');
var MarginExcess = require('../fields/MarginExcess');
var SettlSessID = require('../fields/SettlSessID');
var SettlSessSubID = require('../fields/SettlSessSubID');
var TransactTime = require('../fields/TransactTime');

function AccountSummaryReport (accountSummaryReport) {
  this.message = accountSummaryReport;
}

AccountSummaryReport.prototype.settlementAmountGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AccountSummaryReport.Tags.SettlementAmountGrp] === undefined) return null;
  return this.message.groups[AccountSummaryReport.Tags.SettlementAmountGrp]
    .map(function (settlementAmountGrp) {
      return new SettlementAmountGrp(settlementAmountGrp);
  });
};

AccountSummaryReport.prototype.marginAmount = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AccountSummaryReport.Tags.MarginAmount] === undefined) return null;
  return this.message.groups[AccountSummaryReport.Tags.MarginAmount]
    .map(function (marginAmount) {
      return new MarginAmount(marginAmount);
  });
};

AccountSummaryReport.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AccountSummaryReport.Tags.Parties] === undefined) return null;
  return this.message.groups[AccountSummaryReport.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

AccountSummaryReport.prototype.collateralAmountGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AccountSummaryReport.Tags.CollateralAmountGrp] === undefined) return null;
  return this.message.groups[AccountSummaryReport.Tags.CollateralAmountGrp]
    .map(function (collateralAmountGrp) {
      return new CollateralAmountGrp(collateralAmountGrp);
  });
};

AccountSummaryReport.prototype.payCollectGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AccountSummaryReport.Tags.PayCollectGrp] === undefined) return null;
  return this.message.groups[AccountSummaryReport.Tags.PayCollectGrp]
    .map(function (payCollectGrp) {
      return new PayCollectGrp(payCollectGrp);
  });
};

AccountSummaryReport.prototype.positionAmountData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[AccountSummaryReport.Tags.PositionAmountData] === undefined) return null;
  return this.message.groups[AccountSummaryReport.Tags.PositionAmountData]
    .map(function (positionAmountData) {
      return new PositionAmountData(positionAmountData);
  });
};

AccountSummaryReport.prototype.accountSummaryReportId = function () {
  return new AccountSummaryReportID(this.message.tags[AccountSummaryReport.Tags.AccountSummaryReportID]);
};

AccountSummaryReport.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[AccountSummaryReport.Tags.ClearingBusinessDate]);
};

AccountSummaryReport.prototype.currency = function () {
  return new Currency(this.message.tags[AccountSummaryReport.Tags.Currency]);
};

AccountSummaryReport.prototype.totalNetValue = function () {
  return new TotalNetValue(this.message.tags[AccountSummaryReport.Tags.TotalNetValue]);
};

AccountSummaryReport.prototype.marginExcess = function () {
  return new MarginExcess(this.message.tags[AccountSummaryReport.Tags.MarginExcess]);
};

AccountSummaryReport.prototype.settlSessId = function () {
  return new SettlSessID(this.message.tags[AccountSummaryReport.Tags.SettlSessID]);
};

AccountSummaryReport.prototype.settlSessSubId = function () {
  return new SettlSessSubID(this.message.tags[AccountSummaryReport.Tags.SettlSessSubID]);
};

AccountSummaryReport.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[AccountSummaryReport.Tags.TransactTime]);
};

AccountSummaryReport.Tags = {
  SettlementAmountGrp: '1700',
  MarginAmount: '1643',
  Parties: '453',
  CollateralAmountGrp: '1703',
  PayCollectGrp: '1707',
  PositionAmountData: '753',
  AccountSummaryReportID: '1699',
  ClearingBusinessDate: '715',
  Currency: '15',
  TotalNetValue: '900',
  MarginExcess: '899',
  SettlSessID: '716',
  SettlSessSubID: '717',
  TransactTime: '60',
};

AccountSummaryReport.msgType = 'CQ';

module.exports = AccountSummaryReport;