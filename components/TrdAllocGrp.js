var NoAllocs = require('../fields/NoAllocs');
var AllocRegulatoryTradeIDGrp = require('../components/AllocRegulatoryTradeIDGrp');
var NestedParties2 = require('../components/NestedParties2');
var TradeAllocAmtGrp = require('../components/TradeAllocAmtGrp');
var AllocAccount = require('../fields/AllocAccount');
var AllocAcctIDSource = require('../fields/AllocAcctIDSource');
var AllocSettlCurrency = require('../fields/AllocSettlCurrency');
var IndividualAllocID = require('../fields/IndividualAllocID');
var ParentAllocID = require('../fields/ParentAllocID');
var FirmMnemonic = require('../fields/FirmMnemonic');
var AllocQty = require('../fields/AllocQty');
var AllocCalculatedCcyQty = require('../fields/AllocCalculatedCcyQty');
var CustodialLotID = require('../fields/CustodialLotID');
var VersusPurchaseDate = require('../fields/VersusPurchaseDate');
var VersusPurchasePrice = require('../fields/VersusPurchasePrice');
var CurrentCostBasis = require('../fields/CurrentCostBasis');
var AllocCustomerCapacity = require('../fields/AllocCustomerCapacity');
var AllocMethod = require('../fields/AllocMethod');
var SecondaryIndividualAllocID = require('../fields/SecondaryIndividualAllocID');
var AllocClearingFeeIndicator = require('../fields/AllocClearingFeeIndicator');
var TradeAllocStatus = require('../fields/TradeAllocStatus');
var AllocationRollupInstruction = require('../fields/AllocationRollupInstruction');
var AllocText = require('../fields/AllocText');
var EncodedAllocTextLen = require('../fields/EncodedAllocTextLen');
var EncodedAllocText = require('../fields/EncodedAllocText');
var FirmAllocText = require('../fields/FirmAllocText');
var EncodedFirmAllocTextLen = require('../fields/EncodedFirmAllocTextLen');
var EncodedFirmAllocText = require('../fields/EncodedFirmAllocText');
var AllocRefRiskLimitCheckID = require('../fields/AllocRefRiskLimitCheckID');
var AllocRefRiskLimitCheckIDType = require('../fields/AllocRefRiskLimitCheckIDType');

function TrdAllocGrp (trdAllocGrp) {
  this.message = trdAllocGrp;
}

/* group */

/* component */
TrdAllocGrp.prototype.allocRegulatoryTradeIdgrp = function () {
  return this.message.groups[AllocRegulatoryTradeIDGrp.Tag]
    .map(function (allocRegulatoryTradeIdgrp) {
      return new AllocRegulatoryTradeIDGrp(allocRegulatoryTradeIdgrp);
  });
};

/* component */
TrdAllocGrp.prototype.nestedParties2 = function () {
  return this.message.groups[NestedParties2.Tag]
    .map(function (nestedParties2) {
      return new NestedParties2(nestedParties2);
  });
};

/* component */
TrdAllocGrp.prototype.tradeAllocAmtGrp = function () {
  return this.message.groups[TradeAllocAmtGrp.Tag]
    .map(function (tradeAllocAmtGrp) {
      return new TradeAllocAmtGrp(tradeAllocAmtGrp);
  });
};

/* field */
TrdAllocGrp.prototype.allocAccount = function () {
  return new AllocAccount(this.message.tags[AllocAccount.Tag]);
};

/* field */
TrdAllocGrp.prototype.allocAcctIdsource = function () {
  return new AllocAcctIDSource(this.message.tags[AllocAcctIDSource.Tag]);
};

/* field */
TrdAllocGrp.prototype.allocSettlCurrency = function () {
  return new AllocSettlCurrency(this.message.tags[AllocSettlCurrency.Tag]);
};

/* field */
TrdAllocGrp.prototype.individualAllocId = function () {
  return new IndividualAllocID(this.message.tags[IndividualAllocID.Tag]);
};

/* field */
TrdAllocGrp.prototype.parentAllocId = function () {
  return new ParentAllocID(this.message.tags[ParentAllocID.Tag]);
};

/* field */
TrdAllocGrp.prototype.firmMnemonic = function () {
  return new FirmMnemonic(this.message.tags[FirmMnemonic.Tag]);
};

/* field */
TrdAllocGrp.prototype.allocQty = function () {
  return new AllocQty(this.message.tags[AllocQty.Tag]);
};

/* field */
TrdAllocGrp.prototype.allocCalculatedCcyQty = function () {
  return new AllocCalculatedCcyQty(this.message.tags[AllocCalculatedCcyQty.Tag]);
};

/* field */
TrdAllocGrp.prototype.custodialLotId = function () {
  return new CustodialLotID(this.message.tags[CustodialLotID.Tag]);
};

/* field */
TrdAllocGrp.prototype.versusPurchaseDate = function () {
  return new VersusPurchaseDate(this.message.tags[VersusPurchaseDate.Tag]);
};

/* field */
TrdAllocGrp.prototype.versusPurchasePrice = function () {
  return new VersusPurchasePrice(this.message.tags[VersusPurchasePrice.Tag]);
};

/* field */
TrdAllocGrp.prototype.currentCostBasis = function () {
  return new CurrentCostBasis(this.message.tags[CurrentCostBasis.Tag]);
};

/* field */
TrdAllocGrp.prototype.allocCustomerCapacity = function () {
  return new AllocCustomerCapacity(this.message.tags[AllocCustomerCapacity.Tag]);
};

/* field */
TrdAllocGrp.prototype.allocMethod = function () {
  return new AllocMethod(this.message.tags[AllocMethod.Tag]);
};

/* field */
TrdAllocGrp.prototype.secondaryIndividualAllocId = function () {
  return new SecondaryIndividualAllocID(this.message.tags[SecondaryIndividualAllocID.Tag]);
};

/* field */
TrdAllocGrp.prototype.allocClearingFeeIndicator = function () {
  return new AllocClearingFeeIndicator(this.message.tags[AllocClearingFeeIndicator.Tag]);
};

/* field */
TrdAllocGrp.prototype.tradeAllocStatus = function () {
  return new TradeAllocStatus(this.message.tags[TradeAllocStatus.Tag]);
};

/* field */
TrdAllocGrp.prototype.allocationRollupInstruction = function () {
  return new AllocationRollupInstruction(this.message.tags[AllocationRollupInstruction.Tag]);
};

/* field */
TrdAllocGrp.prototype.allocText = function () {
  return new AllocText(this.message.tags[AllocText.Tag]);
};

/* field */
TrdAllocGrp.prototype.encodedAllocTextLen = function () {
  return new EncodedAllocTextLen(this.message.tags[EncodedAllocTextLen.Tag]);
};

/* field */
TrdAllocGrp.prototype.encodedAllocText = function () {
  return new EncodedAllocText(this.message.tags[EncodedAllocText.Tag]);
};

/* field */
TrdAllocGrp.prototype.firmAllocText = function () {
  return new FirmAllocText(this.message.tags[FirmAllocText.Tag]);
};

/* field */
TrdAllocGrp.prototype.encodedFirmAllocTextLen = function () {
  return new EncodedFirmAllocTextLen(this.message.tags[EncodedFirmAllocTextLen.Tag]);
};

/* field */
TrdAllocGrp.prototype.encodedFirmAllocText = function () {
  return new EncodedFirmAllocText(this.message.tags[EncodedFirmAllocText.Tag]);
};

/* field */
TrdAllocGrp.prototype.allocRefRiskLimitCheckId = function () {
  return new AllocRefRiskLimitCheckID(this.message.tags[AllocRefRiskLimitCheckID.Tag]);
};

/* field */
TrdAllocGrp.prototype.allocRefRiskLimitCheckIdtype = function () {
  return new AllocRefRiskLimitCheckIDType(this.message.tags[AllocRefRiskLimitCheckIDType.Tag]);
};

/* end group */

TrdAllocGrp.Tag = '78';

module.exports = TrdAllocGrp;