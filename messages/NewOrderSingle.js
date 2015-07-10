var Parties = require('../components/Parties');
var TargetParties = require('../components/TargetParties');
var PreAllocGrp = require('../components/PreAllocGrp');
var MatchingInstructions = require('../components/MatchingInstructions');
var DisplayInstruction = require('../components/DisplayInstruction');
var DisclosureInstructionGrp = require('../components/DisclosureInstructionGrp');
var TrdgSesGrp = require('../components/TrdgSesGrp');
var Instrument = require('../components/Instrument');
var FinancingDetails = require('../components/FinancingDetails');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var Stipulations = require('../components/Stipulations');
var OrderQtyData = require('../components/OrderQtyData');
var TriggeringInstruction = require('../components/TriggeringInstruction');
var SpreadOrBenchmarkCurveData = require('../components/SpreadOrBenchmarkCurveData');
var YieldData = require('../components/YieldData');
var CommissionData = require('../components/CommissionData');
var PegInstructions = require('../components/PegInstructions');
var DiscretionInstructions = require('../components/DiscretionInstructions');
var StrategyParametersGrp = require('../components/StrategyParametersGrp');
var TrdRegTimestamps = require('../components/TrdRegTimestamps');
var ClOrdID = require('../fields/ClOrdID');
var OrderRequestID = require('../fields/OrderRequestID');
var SecondaryClOrdID = require('../fields/SecondaryClOrdID');
var ClOrdLinkID = require('../fields/ClOrdLinkID');
var TradeOriginationDate = require('../fields/TradeOriginationDate');
var TradeDate = require('../fields/TradeDate');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var AccountType = require('../fields/AccountType');
var DayBookingInst = require('../fields/DayBookingInst');
var BookingUnit = require('../fields/BookingUnit');
var PreallocMethod = require('../fields/PreallocMethod');
var AllocID = require('../fields/AllocID');
var SettlType = require('../fields/SettlType');
var SettlDate = require('../fields/SettlDate');
var CashMargin = require('../fields/CashMargin');
var ClearingFeeIndicator = require('../fields/ClearingFeeIndicator');
var HandlInst = require('../fields/HandlInst');
var ExecInst = require('../fields/ExecInst');
var AuctionInstruction = require('../fields/AuctionInstruction');
var MinQty = require('../fields/MinQty');
var MinQtyMethod = require('../fields/MinQtyMethod');
var MatchIncrement = require('../fields/MatchIncrement');
var MaxPriceLevels = require('../fields/MaxPriceLevels');
var MaxFloor = require('../fields/MaxFloor');
var MarketSegmentID = require('../fields/MarketSegmentID');
var ExDestination = require('../fields/ExDestination');
var ExDestinationIDSource = require('../fields/ExDestinationIDSource');
var ProcessCode = require('../fields/ProcessCode');
var PrevClosePx = require('../fields/PrevClosePx');
var Side = require('../fields/Side');
var ShortMarkingExemptIndicator = require('../fields/ShortMarkingExemptIndicator');
var ShortSaleExemptionReason = require('../fields/ShortSaleExemptionReason');
var LocateReqd = require('../fields/LocateReqd');
var TransactTime = require('../fields/TransactTime');
var QtyType = require('../fields/QtyType');
var OrdType = require('../fields/OrdType');
var PriceType = require('../fields/PriceType');
var Price = require('../fields/Price');
var PriceProtectionScope = require('../fields/PriceProtectionScope');
var StopPx = require('../fields/StopPx');
var Currency = require('../fields/Currency');
var TradePriceNegotiationMethod = require('../fields/TradePriceNegotiationMethod');
var UpfrontPriceType = require('../fields/UpfrontPriceType');
var UpfrontPrice = require('../fields/UpfrontPrice');
var ComplianceID = require('../fields/ComplianceID');
var ComplianceText = require('../fields/ComplianceText');
var EncodedComplianceTextLen = require('../fields/EncodedComplianceTextLen');
var EncodedComplianceText = require('../fields/EncodedComplianceText');
var SolicitedFlag = require('../fields/SolicitedFlag');
var IOIID = require('../fields/IOIID');
var QuoteID = require('../fields/QuoteID');
var TimeInForce = require('../fields/TimeInForce');
var EffectiveTime = require('../fields/EffectiveTime');
var ExpireDate = require('../fields/ExpireDate');
var ExpireTime = require('../fields/ExpireTime');
var GTBookingInst = require('../fields/GTBookingInst');
var ExposureDuration = require('../fields/ExposureDuration');
var ExposureDurationUnit = require('../fields/ExposureDurationUnit');
var OrderCapacity = require('../fields/OrderCapacity');
var OrderRestrictions = require('../fields/OrderRestrictions');
var TradingCapacity = require('../fields/TradingCapacity');
var PreTradeAnonymity = require('../fields/PreTradeAnonymity');
var TradePublishIndicator = require('../fields/TradePublishIndicator');
var CustOrderCapacity = require('../fields/CustOrderCapacity');
var ForexReq = require('../fields/ForexReq');
var SettlCurrency = require('../fields/SettlCurrency');
var BookingType = require('../fields/BookingType');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var SettlDate2 = require('../fields/SettlDate2');
var OrderQty2 = require('../fields/OrderQty2');
var Price2 = require('../fields/Price2');
var ClearingAccountType = require('../fields/ClearingAccountType');
var PositionEffect = require('../fields/PositionEffect');
var CoveredOrUncovered = require('../fields/CoveredOrUncovered');
var MaxShow = require('../fields/MaxShow');
var TargetStrategy = require('../fields/TargetStrategy');
var TargetStrategyParameters = require('../fields/TargetStrategyParameters');
var ParticipationRate = require('../fields/ParticipationRate');
var CancellationRights = require('../fields/CancellationRights');
var MoneyLaunderingStatus = require('../fields/MoneyLaunderingStatus');
var RegistID = require('../fields/RegistID');
var Designation = require('../fields/Designation');
var ManualOrderIndicator = require('../fields/ManualOrderIndicator');
var CustDirectedOrder = require('../fields/CustDirectedOrder');
var ReceivedDeptID = require('../fields/ReceivedDeptID');
var CustOrderHandlingInst = require('../fields/CustOrderHandlingInst');
var OrderHandlingInstSource = require('../fields/OrderHandlingInstSource');
var OrderOrigination = require('../fields/OrderOrigination');
var OriginatingDeptID = require('../fields/OriginatingDeptID');
var ReceivingDeptID = require('../fields/ReceivingDeptID');
var OwnerType = require('../fields/OwnerType');
var RefOrderID = require('../fields/RefOrderID');
var RefOrderIDSource = require('../fields/RefOrderIDSource');
var ThrottleInst = require('../fields/ThrottleInst');
var RefClOrdID = require('../fields/RefClOrdID');
var AuctionType = require('../fields/AuctionType');
var AuctionAllocationPct = require('../fields/AuctionAllocationPct');

function NewOrderSingle (newOrderSingle) {
  this.message = newOrderSingle;
}

NewOrderSingle.prototype.parties = function () {
  return this.message.groups[NewOrderSingle.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

NewOrderSingle.prototype.targetParties = function () {
  return this.message.groups[NewOrderSingle.Tags.TargetParties]
    .map(function (targetParties) {
      return new TargetParties(targetParties);
  });
};

NewOrderSingle.prototype.preAllocGrp = function () {
  return this.message.groups[NewOrderSingle.Tags.PreAllocGrp]
    .map(function (preAllocGrp) {
      return new PreAllocGrp(preAllocGrp);
  });
};

NewOrderSingle.prototype.matchingInstructions = function () {
  return this.message.groups[NewOrderSingle.Tags.MatchingInstructions]
    .map(function (matchingInstructions) {
      return new MatchingInstructions(matchingInstructions);
  });
};

NewOrderSingle.prototype.displayInstruction = function () {
  return this.message.groups[NewOrderSingle.Tags.DisplayInstruction]
    .map(function (displayInstruction) {
      return new DisplayInstruction(displayInstruction);
  });
};

NewOrderSingle.prototype.disclosureInstructionGrp = function () {
  return this.message.groups[NewOrderSingle.Tags.DisclosureInstructionGrp]
    .map(function (disclosureInstructionGrp) {
      return new DisclosureInstructionGrp(disclosureInstructionGrp);
  });
};

NewOrderSingle.prototype.trdgSesGrp = function () {
  return this.message.groups[NewOrderSingle.Tags.TrdgSesGrp]
    .map(function (trdgSesGrp) {
      return new TrdgSesGrp(trdgSesGrp);
  });
};

NewOrderSingle.prototype.instrument = function () {
  return this.message.groups[NewOrderSingle.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

NewOrderSingle.prototype.financingDetails = function () {
  return this.message.groups[NewOrderSingle.Tags.FinancingDetails]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

NewOrderSingle.prototype.undInstrmtGrp = function () {
  return this.message.groups[NewOrderSingle.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

NewOrderSingle.prototype.stipulations = function () {
  return this.message.groups[NewOrderSingle.Tags.Stipulations]
    .map(function (stipulations) {
      return new Stipulations(stipulations);
  });
};

NewOrderSingle.prototype.orderQtyData = function () {
  return this.message.groups[NewOrderSingle.Tags.OrderQtyData]
    .map(function (orderQtyData) {
      return new OrderQtyData(orderQtyData);
  });
};

NewOrderSingle.prototype.triggeringInstruction = function () {
  return this.message.groups[NewOrderSingle.Tags.TriggeringInstruction]
    .map(function (triggeringInstruction) {
      return new TriggeringInstruction(triggeringInstruction);
  });
};

NewOrderSingle.prototype.spreadOrBenchmarkCurveData = function () {
  return this.message.groups[NewOrderSingle.Tags.SpreadOrBenchmarkCurveData]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

NewOrderSingle.prototype.yieldData = function () {
  return this.message.groups[NewOrderSingle.Tags.YieldData]
    .map(function (yieldData) {
      return new YieldData(yieldData);
  });
};

NewOrderSingle.prototype.commissionData = function () {
  return this.message.groups[NewOrderSingle.Tags.CommissionData]
    .map(function (commissionData) {
      return new CommissionData(commissionData);
  });
};

NewOrderSingle.prototype.pegInstructions = function () {
  return this.message.groups[NewOrderSingle.Tags.PegInstructions]
    .map(function (pegInstructions) {
      return new PegInstructions(pegInstructions);
  });
};

NewOrderSingle.prototype.discretionInstructions = function () {
  return this.message.groups[NewOrderSingle.Tags.DiscretionInstructions]
    .map(function (discretionInstructions) {
      return new DiscretionInstructions(discretionInstructions);
  });
};

NewOrderSingle.prototype.strategyParametersGrp = function () {
  return this.message.groups[NewOrderSingle.Tags.StrategyParametersGrp]
    .map(function (strategyParametersGrp) {
      return new StrategyParametersGrp(strategyParametersGrp);
  });
};

NewOrderSingle.prototype.trdRegTimestamps = function () {
  return this.message.groups[NewOrderSingle.Tags.TrdRegTimestamps]
    .map(function (trdRegTimestamps) {
      return new TrdRegTimestamps(trdRegTimestamps);
  });
};

NewOrderSingle.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[NewOrderSingle.Tags.ClOrdID]);
};

NewOrderSingle.prototype.orderRequestId = function () {
  return new OrderRequestID(this.message.tags[NewOrderSingle.Tags.OrderRequestID]);
};

NewOrderSingle.prototype.secondaryClOrdId = function () {
  return new SecondaryClOrdID(this.message.tags[NewOrderSingle.Tags.SecondaryClOrdID]);
};

NewOrderSingle.prototype.clOrdLinkId = function () {
  return new ClOrdLinkID(this.message.tags[NewOrderSingle.Tags.ClOrdLinkID]);
};

NewOrderSingle.prototype.tradeOriginationDate = function () {
  return new TradeOriginationDate(this.message.tags[NewOrderSingle.Tags.TradeOriginationDate]);
};

NewOrderSingle.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[NewOrderSingle.Tags.TradeDate]);
};

NewOrderSingle.prototype.account = function () {
  return new Account(this.message.tags[NewOrderSingle.Tags.Account]);
};

NewOrderSingle.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[NewOrderSingle.Tags.AcctIDSource]);
};

NewOrderSingle.prototype.accountType = function () {
  return new AccountType(this.message.tags[NewOrderSingle.Tags.AccountType]);
};

NewOrderSingle.prototype.dayBookingInst = function () {
  return new DayBookingInst(this.message.tags[NewOrderSingle.Tags.DayBookingInst]);
};

NewOrderSingle.prototype.bookingUnit = function () {
  return new BookingUnit(this.message.tags[NewOrderSingle.Tags.BookingUnit]);
};

NewOrderSingle.prototype.preallocMethod = function () {
  return new PreallocMethod(this.message.tags[NewOrderSingle.Tags.PreallocMethod]);
};

NewOrderSingle.prototype.allocId = function () {
  return new AllocID(this.message.tags[NewOrderSingle.Tags.AllocID]);
};

NewOrderSingle.prototype.settlType = function () {
  return new SettlType(this.message.tags[NewOrderSingle.Tags.SettlType]);
};

NewOrderSingle.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[NewOrderSingle.Tags.SettlDate]);
};

NewOrderSingle.prototype.cashMargin = function () {
  return new CashMargin(this.message.tags[NewOrderSingle.Tags.CashMargin]);
};

NewOrderSingle.prototype.clearingFeeIndicator = function () {
  return new ClearingFeeIndicator(this.message.tags[NewOrderSingle.Tags.ClearingFeeIndicator]);
};

NewOrderSingle.prototype.handlInst = function () {
  return new HandlInst(this.message.tags[NewOrderSingle.Tags.HandlInst]);
};

NewOrderSingle.prototype.execInst = function () {
  return new ExecInst(this.message.tags[NewOrderSingle.Tags.ExecInst]);
};

NewOrderSingle.prototype.auctionInstruction = function () {
  return new AuctionInstruction(this.message.tags[NewOrderSingle.Tags.AuctionInstruction]);
};

NewOrderSingle.prototype.minQty = function () {
  return new MinQty(this.message.tags[NewOrderSingle.Tags.MinQty]);
};

NewOrderSingle.prototype.minQtyMethod = function () {
  return new MinQtyMethod(this.message.tags[NewOrderSingle.Tags.MinQtyMethod]);
};

NewOrderSingle.prototype.matchIncrement = function () {
  return new MatchIncrement(this.message.tags[NewOrderSingle.Tags.MatchIncrement]);
};

NewOrderSingle.prototype.maxPriceLevels = function () {
  return new MaxPriceLevels(this.message.tags[NewOrderSingle.Tags.MaxPriceLevels]);
};

NewOrderSingle.prototype.maxFloor = function () {
  return new MaxFloor(this.message.tags[NewOrderSingle.Tags.MaxFloor]);
};

NewOrderSingle.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[NewOrderSingle.Tags.MarketSegmentID]);
};

NewOrderSingle.prototype.exDestination = function () {
  return new ExDestination(this.message.tags[NewOrderSingle.Tags.ExDestination]);
};

NewOrderSingle.prototype.exDestinationIdsource = function () {
  return new ExDestinationIDSource(this.message.tags[NewOrderSingle.Tags.ExDestinationIDSource]);
};

NewOrderSingle.prototype.processCode = function () {
  return new ProcessCode(this.message.tags[NewOrderSingle.Tags.ProcessCode]);
};

NewOrderSingle.prototype.prevClosePx = function () {
  return new PrevClosePx(this.message.tags[NewOrderSingle.Tags.PrevClosePx]);
};

NewOrderSingle.prototype.side = function () {
  return new Side(this.message.tags[NewOrderSingle.Tags.Side]);
};

NewOrderSingle.prototype.shortMarkingExemptIndicator = function () {
  return new ShortMarkingExemptIndicator(this.message.tags[NewOrderSingle.Tags.ShortMarkingExemptIndicator]);
};

NewOrderSingle.prototype.shortSaleExemptionReason = function () {
  return new ShortSaleExemptionReason(this.message.tags[NewOrderSingle.Tags.ShortSaleExemptionReason]);
};

NewOrderSingle.prototype.locateReqd = function () {
  return new LocateReqd(this.message.tags[NewOrderSingle.Tags.LocateReqd]);
};

NewOrderSingle.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[NewOrderSingle.Tags.TransactTime]);
};

NewOrderSingle.prototype.qtyType = function () {
  return new QtyType(this.message.tags[NewOrderSingle.Tags.QtyType]);
};

NewOrderSingle.prototype.ordType = function () {
  return new OrdType(this.message.tags[NewOrderSingle.Tags.OrdType]);
};

NewOrderSingle.prototype.priceType = function () {
  return new PriceType(this.message.tags[NewOrderSingle.Tags.PriceType]);
};

NewOrderSingle.prototype.price = function () {
  return new Price(this.message.tags[NewOrderSingle.Tags.Price]);
};

NewOrderSingle.prototype.priceProtectionScope = function () {
  return new PriceProtectionScope(this.message.tags[NewOrderSingle.Tags.PriceProtectionScope]);
};

NewOrderSingle.prototype.stopPx = function () {
  return new StopPx(this.message.tags[NewOrderSingle.Tags.StopPx]);
};

NewOrderSingle.prototype.currency = function () {
  return new Currency(this.message.tags[NewOrderSingle.Tags.Currency]);
};

NewOrderSingle.prototype.tradePriceNegotiationMethod = function () {
  return new TradePriceNegotiationMethod(this.message.tags[NewOrderSingle.Tags.TradePriceNegotiationMethod]);
};

NewOrderSingle.prototype.upfrontPriceType = function () {
  return new UpfrontPriceType(this.message.tags[NewOrderSingle.Tags.UpfrontPriceType]);
};

NewOrderSingle.prototype.upfrontPrice = function () {
  return new UpfrontPrice(this.message.tags[NewOrderSingle.Tags.UpfrontPrice]);
};

NewOrderSingle.prototype.complianceId = function () {
  return new ComplianceID(this.message.tags[NewOrderSingle.Tags.ComplianceID]);
};

NewOrderSingle.prototype.complianceText = function () {
  return new ComplianceText(this.message.tags[NewOrderSingle.Tags.ComplianceText]);
};

NewOrderSingle.prototype.encodedComplianceTextLen = function () {
  return new EncodedComplianceTextLen(this.message.tags[NewOrderSingle.Tags.EncodedComplianceTextLen]);
};

NewOrderSingle.prototype.encodedComplianceText = function () {
  return new EncodedComplianceText(this.message.tags[NewOrderSingle.Tags.EncodedComplianceText]);
};

NewOrderSingle.prototype.solicitedFlag = function () {
  return new SolicitedFlag(this.message.tags[NewOrderSingle.Tags.SolicitedFlag]);
};

NewOrderSingle.prototype.ioiid = function () {
  return new IOIID(this.message.tags[NewOrderSingle.Tags.IOIID]);
};

NewOrderSingle.prototype.quoteId = function () {
  return new QuoteID(this.message.tags[NewOrderSingle.Tags.QuoteID]);
};

NewOrderSingle.prototype.timeInForce = function () {
  return new TimeInForce(this.message.tags[NewOrderSingle.Tags.TimeInForce]);
};

NewOrderSingle.prototype.effectiveTime = function () {
  return new EffectiveTime(this.message.tags[NewOrderSingle.Tags.EffectiveTime]);
};

NewOrderSingle.prototype.expireDate = function () {
  return new ExpireDate(this.message.tags[NewOrderSingle.Tags.ExpireDate]);
};

NewOrderSingle.prototype.expireTime = function () {
  return new ExpireTime(this.message.tags[NewOrderSingle.Tags.ExpireTime]);
};

NewOrderSingle.prototype.gtbookingInst = function () {
  return new GTBookingInst(this.message.tags[NewOrderSingle.Tags.GTBookingInst]);
};

NewOrderSingle.prototype.exposureDuration = function () {
  return new ExposureDuration(this.message.tags[NewOrderSingle.Tags.ExposureDuration]);
};

NewOrderSingle.prototype.exposureDurationUnit = function () {
  return new ExposureDurationUnit(this.message.tags[NewOrderSingle.Tags.ExposureDurationUnit]);
};

NewOrderSingle.prototype.orderCapacity = function () {
  return new OrderCapacity(this.message.tags[NewOrderSingle.Tags.OrderCapacity]);
};

NewOrderSingle.prototype.orderRestrictions = function () {
  return new OrderRestrictions(this.message.tags[NewOrderSingle.Tags.OrderRestrictions]);
};

NewOrderSingle.prototype.tradingCapacity = function () {
  return new TradingCapacity(this.message.tags[NewOrderSingle.Tags.TradingCapacity]);
};

NewOrderSingle.prototype.preTradeAnonymity = function () {
  return new PreTradeAnonymity(this.message.tags[NewOrderSingle.Tags.PreTradeAnonymity]);
};

NewOrderSingle.prototype.tradePublishIndicator = function () {
  return new TradePublishIndicator(this.message.tags[NewOrderSingle.Tags.TradePublishIndicator]);
};

NewOrderSingle.prototype.custOrderCapacity = function () {
  return new CustOrderCapacity(this.message.tags[NewOrderSingle.Tags.CustOrderCapacity]);
};

NewOrderSingle.prototype.forexReq = function () {
  return new ForexReq(this.message.tags[NewOrderSingle.Tags.ForexReq]);
};

NewOrderSingle.prototype.settlCurrency = function () {
  return new SettlCurrency(this.message.tags[NewOrderSingle.Tags.SettlCurrency]);
};

NewOrderSingle.prototype.bookingType = function () {
  return new BookingType(this.message.tags[NewOrderSingle.Tags.BookingType]);
};

NewOrderSingle.prototype.text = function () {
  return new Text(this.message.tags[NewOrderSingle.Tags.Text]);
};

NewOrderSingle.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[NewOrderSingle.Tags.EncodedTextLen]);
};

NewOrderSingle.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[NewOrderSingle.Tags.EncodedText]);
};

NewOrderSingle.prototype.settlDate2 = function () {
  return new SettlDate2(this.message.tags[NewOrderSingle.Tags.SettlDate2]);
};

NewOrderSingle.prototype.orderQty2 = function () {
  return new OrderQty2(this.message.tags[NewOrderSingle.Tags.OrderQty2]);
};

NewOrderSingle.prototype.price2 = function () {
  return new Price2(this.message.tags[NewOrderSingle.Tags.Price2]);
};

NewOrderSingle.prototype.clearingAccountType = function () {
  return new ClearingAccountType(this.message.tags[NewOrderSingle.Tags.ClearingAccountType]);
};

NewOrderSingle.prototype.positionEffect = function () {
  return new PositionEffect(this.message.tags[NewOrderSingle.Tags.PositionEffect]);
};

NewOrderSingle.prototype.coveredOrUncovered = function () {
  return new CoveredOrUncovered(this.message.tags[NewOrderSingle.Tags.CoveredOrUncovered]);
};

NewOrderSingle.prototype.maxShow = function () {
  return new MaxShow(this.message.tags[NewOrderSingle.Tags.MaxShow]);
};

NewOrderSingle.prototype.targetStrategy = function () {
  return new TargetStrategy(this.message.tags[NewOrderSingle.Tags.TargetStrategy]);
};

NewOrderSingle.prototype.targetStrategyParameters = function () {
  return new TargetStrategyParameters(this.message.tags[NewOrderSingle.Tags.TargetStrategyParameters]);
};

NewOrderSingle.prototype.participationRate = function () {
  return new ParticipationRate(this.message.tags[NewOrderSingle.Tags.ParticipationRate]);
};

NewOrderSingle.prototype.cancellationRights = function () {
  return new CancellationRights(this.message.tags[NewOrderSingle.Tags.CancellationRights]);
};

NewOrderSingle.prototype.moneyLaunderingStatus = function () {
  return new MoneyLaunderingStatus(this.message.tags[NewOrderSingle.Tags.MoneyLaunderingStatus]);
};

NewOrderSingle.prototype.registId = function () {
  return new RegistID(this.message.tags[NewOrderSingle.Tags.RegistID]);
};

NewOrderSingle.prototype.designation = function () {
  return new Designation(this.message.tags[NewOrderSingle.Tags.Designation]);
};

NewOrderSingle.prototype.manualOrderIndicator = function () {
  return new ManualOrderIndicator(this.message.tags[NewOrderSingle.Tags.ManualOrderIndicator]);
};

NewOrderSingle.prototype.custDirectedOrder = function () {
  return new CustDirectedOrder(this.message.tags[NewOrderSingle.Tags.CustDirectedOrder]);
};

NewOrderSingle.prototype.receivedDeptId = function () {
  return new ReceivedDeptID(this.message.tags[NewOrderSingle.Tags.ReceivedDeptID]);
};

NewOrderSingle.prototype.custOrderHandlingInst = function () {
  return new CustOrderHandlingInst(this.message.tags[NewOrderSingle.Tags.CustOrderHandlingInst]);
};

NewOrderSingle.prototype.orderHandlingInstSource = function () {
  return new OrderHandlingInstSource(this.message.tags[NewOrderSingle.Tags.OrderHandlingInstSource]);
};

NewOrderSingle.prototype.orderOrigination = function () {
  return new OrderOrigination(this.message.tags[NewOrderSingle.Tags.OrderOrigination]);
};

NewOrderSingle.prototype.originatingDeptId = function () {
  return new OriginatingDeptID(this.message.tags[NewOrderSingle.Tags.OriginatingDeptID]);
};

NewOrderSingle.prototype.receivingDeptId = function () {
  return new ReceivingDeptID(this.message.tags[NewOrderSingle.Tags.ReceivingDeptID]);
};

NewOrderSingle.prototype.ownerType = function () {
  return new OwnerType(this.message.tags[NewOrderSingle.Tags.OwnerType]);
};

NewOrderSingle.prototype.refOrderId = function () {
  return new RefOrderID(this.message.tags[NewOrderSingle.Tags.RefOrderID]);
};

NewOrderSingle.prototype.refOrderIdsource = function () {
  return new RefOrderIDSource(this.message.tags[NewOrderSingle.Tags.RefOrderIDSource]);
};

NewOrderSingle.prototype.throttleInst = function () {
  return new ThrottleInst(this.message.tags[NewOrderSingle.Tags.ThrottleInst]);
};

NewOrderSingle.prototype.refClOrdId = function () {
  return new RefClOrdID(this.message.tags[NewOrderSingle.Tags.RefClOrdID]);
};

NewOrderSingle.prototype.auctionType = function () {
  return new AuctionType(this.message.tags[NewOrderSingle.Tags.AuctionType]);
};

NewOrderSingle.prototype.auctionAllocationPct = function () {
  return new AuctionAllocationPct(this.message.tags[NewOrderSingle.Tags.AuctionAllocationPct]);
};

NewOrderSingle.Tags = {
  Parties: '453',
  TargetParties: '1461',
  PreAllocGrp: '78',
  MatchingInstructions: '1624',
  DisplayInstruction: '1138',
  DisclosureInstructionGrp: '1812',
  TrdgSesGrp: '386',
  Instrument: '55',
  FinancingDetails: '913',
  UndInstrmtGrp: '711',
  Stipulations: '232',
  OrderQtyData: '38',
  TriggeringInstruction: '1100',
  SpreadOrBenchmarkCurveData: '218',
  YieldData: '235',
  CommissionData: '12',
  PegInstructions: '211',
  DiscretionInstructions: '388',
  StrategyParametersGrp: '957',
  TrdRegTimestamps: '768',
  ClOrdID: '11',
  OrderRequestID: '2422',
  SecondaryClOrdID: '526',
  ClOrdLinkID: '583',
  TradeOriginationDate: '229',
  TradeDate: '75',
  Account: '1',
  AcctIDSource: '660',
  AccountType: '581',
  DayBookingInst: '589',
  BookingUnit: '590',
  PreallocMethod: '591',
  AllocID: '70',
  SettlType: '63',
  SettlDate: '64',
  CashMargin: '544',
  ClearingFeeIndicator: '635',
  HandlInst: '21',
  ExecInst: '18',
  AuctionInstruction: '1805',
  MinQty: '110',
  MinQtyMethod: '1822',
  MatchIncrement: '1089',
  MaxPriceLevels: '1090',
  MaxFloor: '111',
  MarketSegmentID: '1300',
  ExDestination: '100',
  ExDestinationIDSource: '1133',
  ProcessCode: '81',
  PrevClosePx: '140',
  Side: '54',
  ShortMarkingExemptIndicator: '2102',
  ShortSaleExemptionReason: '1688',
  LocateReqd: '114',
  TransactTime: '60',
  QtyType: '854',
  OrdType: '40',
  PriceType: '423',
  Price: '44',
  PriceProtectionScope: '1092',
  StopPx: '99',
  Currency: '15',
  TradePriceNegotiationMethod: '1740',
  UpfrontPriceType: '1741',
  UpfrontPrice: '1742',
  ComplianceID: '376',
  ComplianceText: '2404',
  EncodedComplianceTextLen: '2351',
  EncodedComplianceText: '2352',
  SolicitedFlag: '377',
  IOIID: '23',
  QuoteID: '117',
  TimeInForce: '59',
  EffectiveTime: '168',
  ExpireDate: '432',
  ExpireTime: '126',
  GTBookingInst: '427',
  ExposureDuration: '1629',
  ExposureDurationUnit: '1916',
  OrderCapacity: '528',
  OrderRestrictions: '529',
  TradingCapacity: '1815',
  PreTradeAnonymity: '1091',
  TradePublishIndicator: '1390',
  CustOrderCapacity: '582',
  ForexReq: '121',
  SettlCurrency: '120',
  BookingType: '775',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  SettlDate2: '193',
  OrderQty2: '192',
  Price2: '640',
  ClearingAccountType: '1816',
  PositionEffect: '77',
  CoveredOrUncovered: '203',
  MaxShow: '210',
  TargetStrategy: '847',
  TargetStrategyParameters: '848',
  ParticipationRate: '849',
  CancellationRights: '480',
  MoneyLaunderingStatus: '481',
  RegistID: '513',
  Designation: '494',
  ManualOrderIndicator: '1028',
  CustDirectedOrder: '1029',
  ReceivedDeptID: '1030',
  CustOrderHandlingInst: '1031',
  OrderHandlingInstSource: '1032',
  OrderOrigination: '1724',
  OriginatingDeptID: '1725',
  ReceivingDeptID: '1726',
  OwnerType: '522',
  RefOrderID: '1080',
  RefOrderIDSource: '1081',
  ThrottleInst: '1685',
  RefClOrdID: '1806',
  AuctionType: '1803',
  AuctionAllocationPct: '1804',
};

NewOrderSingle.msgType = 'D';

module.exports = NewOrderSingle;