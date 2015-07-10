var NoAllocs = require('../fields/NoAllocs');
var AllocRegulatoryTradeIDGrp = require('../components/AllocRegulatoryTradeIDGrp');
var NestedParties = require('../components/NestedParties');
var CommissionData = require('../components/CommissionData');
var MiscFeesGrp = require('../components/MiscFeesGrp');
var ClrInstGrp = require('../components/ClrInstGrp');
var SettlInstructionsData = require('../components/SettlInstructionsData');
var TradeAllocAmtGrp = require('../components/TradeAllocAmtGrp');
var AllocAccount = require('../fields/AllocAccount');
var AllocAcctIDSource = require('../fields/AllocAcctIDSource');
var MatchStatus = require('../fields/MatchStatus');
var AllocPrice = require('../fields/AllocPrice');
var AllocQty = require('../fields/AllocQty');
var AllocCalculatedCcyQty = require('../fields/AllocCalculatedCcyQty');
var CustodialLotID = require('../fields/CustodialLotID');
var VersusPurchaseDate = require('../fields/VersusPurchaseDate');
var VersusPurchasePrice = require('../fields/VersusPurchasePrice');
var CurrentCostBasis = require('../fields/CurrentCostBasis');
var IndividualAllocID = require('../fields/IndividualAllocID');
var FirmMnemonic = require('../fields/FirmMnemonic');
var ParentAllocID = require('../fields/ParentAllocID');
var ProcessCode = require('../fields/ProcessCode');
var SecondaryIndividualAllocID = require('../fields/SecondaryIndividualAllocID');
var AllocMethod = require('../fields/AllocMethod');
var AllocationRollupInstruction = require('../fields/AllocationRollupInstruction');
var AllocCustomerCapacity = require('../fields/AllocCustomerCapacity');
var AllocPositionEffect = require('../fields/AllocPositionEffect');
var IndividualAllocType = require('../fields/IndividualAllocType');
var NotifyBrokerOfCredit = require('../fields/NotifyBrokerOfCredit');
var AllocHandlInst = require('../fields/AllocHandlInst');
var AllocText = require('../fields/AllocText');
var EncodedAllocTextLen = require('../fields/EncodedAllocTextLen');
var EncodedAllocText = require('../fields/EncodedAllocText');
var FirmAllocText = require('../fields/FirmAllocText');
var EncodedFirmAllocTextLen = require('../fields/EncodedFirmAllocTextLen');
var EncodedFirmAllocText = require('../fields/EncodedFirmAllocText');
var AllocAvgPx = require('../fields/AllocAvgPx');
var AllocNetMoney = require('../fields/AllocNetMoney');
var SettlCurrAmt = require('../fields/SettlCurrAmt');
var AllocGrossTradeAmt = require('../fields/AllocGrossTradeAmt');
var AllocSettlCurrAmt = require('../fields/AllocSettlCurrAmt');
var SettlCurrency = require('../fields/SettlCurrency');
var AllocSettlCurrency = require('../fields/AllocSettlCurrency');
var SettlCurrFxRate = require('../fields/SettlCurrFxRate');
var SettlCurrFxRateCalc = require('../fields/SettlCurrFxRateCalc');
var AllocAccruedInterestAmt = require('../fields/AllocAccruedInterestAmt');
var AllocInterestAtMaturity = require('../fields/AllocInterestAtMaturity');
var ClearingFeeIndicator = require('../fields/ClearingFeeIndicator');
var AllocSettlInstType = require('../fields/AllocSettlInstType');
var AllocRefRiskLimitCheckID = require('../fields/AllocRefRiskLimitCheckID');
var AllocRefRiskLimitCheckIDType = require('../fields/AllocRefRiskLimitCheckIDType');
var AllocRiskLimitCheckStatus = require('../fields/AllocRiskLimitCheckStatus');

function AllocGrp (allocGrp) {
  this.message = allocGrp;
}

/* group */

/* component */
AllocGrp.prototype.allocRegulatoryTradeIdgrp = function () {
  return this.message.groups[AllocRegulatoryTradeIDGrp.Tag]
    .map(function (allocRegulatoryTradeIdgrp) {
      return new AllocRegulatoryTradeIDGrp(allocRegulatoryTradeIdgrp);
  });
};

/* component */
AllocGrp.prototype.nestedParties = function () {
  return this.message.groups[NestedParties.Tag]
    .map(function (nestedParties) {
      return new NestedParties(nestedParties);
  });
};

/* component */
AllocGrp.prototype.commissionData = function () {
  return this.message.groups[CommissionData.Tag]
    .map(function (commissionData) {
      return new CommissionData(commissionData);
  });
};

/* component */
AllocGrp.prototype.miscFeesGrp = function () {
  return this.message.groups[MiscFeesGrp.Tag]
    .map(function (miscFeesGrp) {
      return new MiscFeesGrp(miscFeesGrp);
  });
};

/* component */
AllocGrp.prototype.clrInstGrp = function () {
  return this.message.groups[ClrInstGrp.Tag]
    .map(function (clrInstGrp) {
      return new ClrInstGrp(clrInstGrp);
  });
};

/* component */
AllocGrp.prototype.settlInstructionsData = function () {
  return this.message.groups[SettlInstructionsData.Tag]
    .map(function (settlInstructionsData) {
      return new SettlInstructionsData(settlInstructionsData);
  });
};

/* component */
AllocGrp.prototype.tradeAllocAmtGrp = function () {
  return this.message.groups[TradeAllocAmtGrp.Tag]
    .map(function (tradeAllocAmtGrp) {
      return new TradeAllocAmtGrp(tradeAllocAmtGrp);
  });
};

/* field */
AllocGrp.prototype.allocAccount = function () {
  return new AllocAccount(this.message.tags[AllocAccount.Tag]);
};

/* field */
AllocGrp.prototype.allocAcctIdsource = function () {
  return new AllocAcctIDSource(this.message.tags[AllocAcctIDSource.Tag]);
};

/* field */
AllocGrp.prototype.matchStatus = function () {
  return new MatchStatus(this.message.tags[MatchStatus.Tag]);
};

/* field */
AllocGrp.prototype.allocPrice = function () {
  return new AllocPrice(this.message.tags[AllocPrice.Tag]);
};

/* field */
AllocGrp.prototype.allocQty = function () {
  return new AllocQty(this.message.tags[AllocQty.Tag]);
};

/* field */
AllocGrp.prototype.allocCalculatedCcyQty = function () {
  return new AllocCalculatedCcyQty(this.message.tags[AllocCalculatedCcyQty.Tag]);
};

/* field */
AllocGrp.prototype.custodialLotId = function () {
  return new CustodialLotID(this.message.tags[CustodialLotID.Tag]);
};

/* field */
AllocGrp.prototype.versusPurchaseDate = function () {
  return new VersusPurchaseDate(this.message.tags[VersusPurchaseDate.Tag]);
};

/* field */
AllocGrp.prototype.versusPurchasePrice = function () {
  return new VersusPurchasePrice(this.message.tags[VersusPurchasePrice.Tag]);
};

/* field */
AllocGrp.prototype.currentCostBasis = function () {
  return new CurrentCostBasis(this.message.tags[CurrentCostBasis.Tag]);
};

/* field */
AllocGrp.prototype.individualAllocId = function () {
  return new IndividualAllocID(this.message.tags[IndividualAllocID.Tag]);
};

/* field */
AllocGrp.prototype.firmMnemonic = function () {
  return new FirmMnemonic(this.message.tags[FirmMnemonic.Tag]);
};

/* field */
AllocGrp.prototype.parentAllocId = function () {
  return new ParentAllocID(this.message.tags[ParentAllocID.Tag]);
};

/* field */
AllocGrp.prototype.processCode = function () {
  return new ProcessCode(this.message.tags[ProcessCode.Tag]);
};

/* field */
AllocGrp.prototype.secondaryIndividualAllocId = function () {
  return new SecondaryIndividualAllocID(this.message.tags[SecondaryIndividualAllocID.Tag]);
};

/* field */
AllocGrp.prototype.allocMethod = function () {
  return new AllocMethod(this.message.tags[AllocMethod.Tag]);
};

/* field */
AllocGrp.prototype.allocationRollupInstruction = function () {
  return new AllocationRollupInstruction(this.message.tags[AllocationRollupInstruction.Tag]);
};

/* field */
AllocGrp.prototype.allocCustomerCapacity = function () {
  return new AllocCustomerCapacity(this.message.tags[AllocCustomerCapacity.Tag]);
};

/* field */
AllocGrp.prototype.allocPositionEffect = function () {
  return new AllocPositionEffect(this.message.tags[AllocPositionEffect.Tag]);
};

/* field */
AllocGrp.prototype.individualAllocType = function () {
  return new IndividualAllocType(this.message.tags[IndividualAllocType.Tag]);
};

/* field */
AllocGrp.prototype.notifyBrokerOfCredit = function () {
  return new NotifyBrokerOfCredit(this.message.tags[NotifyBrokerOfCredit.Tag]);
};

/* field */
AllocGrp.prototype.allocHandlInst = function () {
  return new AllocHandlInst(this.message.tags[AllocHandlInst.Tag]);
};

/* field */
AllocGrp.prototype.allocText = function () {
  return new AllocText(this.message.tags[AllocText.Tag]);
};

/* field */
AllocGrp.prototype.encodedAllocTextLen = function () {
  return new EncodedAllocTextLen(this.message.tags[EncodedAllocTextLen.Tag]);
};

/* field */
AllocGrp.prototype.encodedAllocText = function () {
  return new EncodedAllocText(this.message.tags[EncodedAllocText.Tag]);
};

/* field */
AllocGrp.prototype.firmAllocText = function () {
  return new FirmAllocText(this.message.tags[FirmAllocText.Tag]);
};

/* field */
AllocGrp.prototype.encodedFirmAllocTextLen = function () {
  return new EncodedFirmAllocTextLen(this.message.tags[EncodedFirmAllocTextLen.Tag]);
};

/* field */
AllocGrp.prototype.encodedFirmAllocText = function () {
  return new EncodedFirmAllocText(this.message.tags[EncodedFirmAllocText.Tag]);
};

/* field */
AllocGrp.prototype.allocAvgPx = function () {
  return new AllocAvgPx(this.message.tags[AllocAvgPx.Tag]);
};

/* field */
AllocGrp.prototype.allocNetMoney = function () {
  return new AllocNetMoney(this.message.tags[AllocNetMoney.Tag]);
};

/* field */
AllocGrp.prototype.settlCurrAmt = function () {
  return new SettlCurrAmt(this.message.tags[SettlCurrAmt.Tag]);
};

/* field */
AllocGrp.prototype.allocGrossTradeAmt = function () {
  return new AllocGrossTradeAmt(this.message.tags[AllocGrossTradeAmt.Tag]);
};

/* field */
AllocGrp.prototype.allocSettlCurrAmt = function () {
  return new AllocSettlCurrAmt(this.message.tags[AllocSettlCurrAmt.Tag]);
};

/* field */
AllocGrp.prototype.settlCurrency = function () {
  return new SettlCurrency(this.message.tags[SettlCurrency.Tag]);
};

/* field */
AllocGrp.prototype.allocSettlCurrency = function () {
  return new AllocSettlCurrency(this.message.tags[AllocSettlCurrency.Tag]);
};

/* field */
AllocGrp.prototype.settlCurrFxRate = function () {
  return new SettlCurrFxRate(this.message.tags[SettlCurrFxRate.Tag]);
};

/* field */
AllocGrp.prototype.settlCurrFxRateCalc = function () {
  return new SettlCurrFxRateCalc(this.message.tags[SettlCurrFxRateCalc.Tag]);
};

/* field */
AllocGrp.prototype.allocAccruedInterestAmt = function () {
  return new AllocAccruedInterestAmt(this.message.tags[AllocAccruedInterestAmt.Tag]);
};

/* field */
AllocGrp.prototype.allocInterestAtMaturity = function () {
  return new AllocInterestAtMaturity(this.message.tags[AllocInterestAtMaturity.Tag]);
};

/* field */
AllocGrp.prototype.clearingFeeIndicator = function () {
  return new ClearingFeeIndicator(this.message.tags[ClearingFeeIndicator.Tag]);
};

/* field */
AllocGrp.prototype.allocSettlInstType = function () {
  return new AllocSettlInstType(this.message.tags[AllocSettlInstType.Tag]);
};

/* field */
AllocGrp.prototype.allocRefRiskLimitCheckId = function () {
  return new AllocRefRiskLimitCheckID(this.message.tags[AllocRefRiskLimitCheckID.Tag]);
};

/* field */
AllocGrp.prototype.allocRefRiskLimitCheckIdtype = function () {
  return new AllocRefRiskLimitCheckIDType(this.message.tags[AllocRefRiskLimitCheckIDType.Tag]);
};

/* field */
AllocGrp.prototype.allocRiskLimitCheckStatus = function () {
  return new AllocRiskLimitCheckStatus(this.message.tags[AllocRiskLimitCheckStatus.Tag]);
};

/* end group */

AllocGrp.Tag = '78';

module.exports = AllocGrp;