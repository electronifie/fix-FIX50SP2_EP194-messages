var Parties = require('../components/Parties');
var TargetParties = require('../components/TargetParties');
var PreAllocMlegGrp = require('../components/PreAllocMlegGrp');
var MatchingInstructions = require('../components/MatchingInstructions');
var DisplayInstruction = require('../components/DisplayInstruction');
var DisclosureInstructionGrp = require('../components/DisclosureInstructionGrp');
var TrdgSesGrp = require('../components/TrdgSesGrp');
var Instrument = require('../components/Instrument');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var LegOrdGrp = require('../components/LegOrdGrp');
var OrderQtyData = require('../components/OrderQtyData');
var TriggeringInstruction = require('../components/TriggeringInstruction');
var CommissionData = require('../components/CommissionData');
var PegInstructions = require('../components/PegInstructions');
var DiscretionInstructions = require('../components/DiscretionInstructions');
var StrategyParametersGrp = require('../components/StrategyParametersGrp');
var OrderID = require('../fields/OrderID');
var OrderRequestID = require('../fields/OrderRequestID');
var OrigClOrdID = require('../fields/OrigClOrdID');
var ClOrdID = require('../fields/ClOrdID');
var SecondaryClOrdID = require('../fields/SecondaryClOrdID');
var ClOrdLinkID = require('../fields/ClOrdLinkID');
var OrigOrdModTime = require('../fields/OrigOrdModTime');
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
var Side = require('../fields/Side');
var ShortMarkingExemptIndicator = require('../fields/ShortMarkingExemptIndicator');
var PrevClosePx = require('../fields/PrevClosePx');
var SwapPoints = require('../fields/SwapPoints');
var LocateReqd = require('../fields/LocateReqd');
var TransactTime = require('../fields/TransactTime');
var QtyType = require('../fields/QtyType');
var OrdType = require('../fields/OrdType');
var MultilegModel = require('../fields/MultilegModel');
var MultilegPriceMethod = require('../fields/MultilegPriceMethod');
var PriceType = require('../fields/PriceType');
var Price = require('../fields/Price');
var PriceProtectionScope = require('../fields/PriceProtectionScope');
var StopPx = require('../fields/StopPx');
var Currency = require('../fields/Currency');
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
var CustOrderCapacity = require('../fields/CustOrderCapacity');
var ForexReq = require('../fields/ForexReq');
var SettlCurrency = require('../fields/SettlCurrency');
var BookingType = require('../fields/BookingType');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var ClearingAccountType = require('../fields/ClearingAccountType');
var PositionEffect = require('../fields/PositionEffect');
var CoveredOrUncovered = require('../fields/CoveredOrUncovered');
var MaxShow = require('../fields/MaxShow');
var TargetStrategy = require('../fields/TargetStrategy');
var TargetStrategyParameters = require('../fields/TargetStrategyParameters');
var RiskFreeRate = require('../fields/RiskFreeRate');
var ParticipationRate = require('../fields/ParticipationRate');
var CancellationRights = require('../fields/CancellationRights');
var MoneyLaunderingStatus = require('../fields/MoneyLaunderingStatus');
var RegistID = require('../fields/RegistID');
var Designation = require('../fields/Designation');
var MultiLegRptTypeReq = require('../fields/MultiLegRptTypeReq');
var ThrottleInst = require('../fields/ThrottleInst');
var AuctionType = require('../fields/AuctionType');
var AuctionAllocationPct = require('../fields/AuctionAllocationPct');
var RelatedHighPrice = require('../fields/RelatedHighPrice');
var RelatedLowPrice = require('../fields/RelatedLowPrice');
var RelatedPriceSource = require('../fields/RelatedPriceSource');

function MultilegOrderCancelReplace (multilegOrderCancelReplace) {
  this.message = multilegOrderCancelReplace;
}

MultilegOrderCancelReplace.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MultilegOrderCancelReplace.Tags.Parties] === undefined) return null;
  return this.message.groups[MultilegOrderCancelReplace.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

MultilegOrderCancelReplace.prototype.targetParties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MultilegOrderCancelReplace.Tags.TargetParties] === undefined) return null;
  return this.message.groups[MultilegOrderCancelReplace.Tags.TargetParties]
    .map(function (targetParties) {
      return new TargetParties(targetParties);
  });
};

MultilegOrderCancelReplace.prototype.preAllocMlegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MultilegOrderCancelReplace.Tags.PreAllocMlegGrp] === undefined) return null;
  return this.message.groups[MultilegOrderCancelReplace.Tags.PreAllocMlegGrp]
    .map(function (preAllocMlegGrp) {
      return new PreAllocMlegGrp(preAllocMlegGrp);
  });
};

MultilegOrderCancelReplace.prototype.matchingInstructions = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MultilegOrderCancelReplace.Tags.MatchingInstructions] === undefined) return null;
  return this.message.groups[MultilegOrderCancelReplace.Tags.MatchingInstructions]
    .map(function (matchingInstructions) {
      return new MatchingInstructions(matchingInstructions);
  });
};

MultilegOrderCancelReplace.prototype.displayInstruction = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MultilegOrderCancelReplace.Tags.DisplayInstruction] === undefined) return null;
  return this.message.groups[MultilegOrderCancelReplace.Tags.DisplayInstruction]
    .map(function (displayInstruction) {
      return new DisplayInstruction(displayInstruction);
  });
};

MultilegOrderCancelReplace.prototype.disclosureInstructionGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MultilegOrderCancelReplace.Tags.DisclosureInstructionGrp] === undefined) return null;
  return this.message.groups[MultilegOrderCancelReplace.Tags.DisclosureInstructionGrp]
    .map(function (disclosureInstructionGrp) {
      return new DisclosureInstructionGrp(disclosureInstructionGrp);
  });
};

MultilegOrderCancelReplace.prototype.trdgSesGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MultilegOrderCancelReplace.Tags.TrdgSesGrp] === undefined) return null;
  return this.message.groups[MultilegOrderCancelReplace.Tags.TrdgSesGrp]
    .map(function (trdgSesGrp) {
      return new TrdgSesGrp(trdgSesGrp);
  });
};

MultilegOrderCancelReplace.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MultilegOrderCancelReplace.Tags.Instrument] === undefined) return null;
  return this.message.groups[MultilegOrderCancelReplace.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

MultilegOrderCancelReplace.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MultilegOrderCancelReplace.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[MultilegOrderCancelReplace.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

MultilegOrderCancelReplace.prototype.legOrdGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MultilegOrderCancelReplace.Tags.LegOrdGrp] === undefined) return null;
  return this.message.groups[MultilegOrderCancelReplace.Tags.LegOrdGrp]
    .map(function (legOrdGrp) {
      return new LegOrdGrp(legOrdGrp);
  });
};

MultilegOrderCancelReplace.prototype.orderQtyData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MultilegOrderCancelReplace.Tags.OrderQtyData] === undefined) return null;
  return this.message.groups[MultilegOrderCancelReplace.Tags.OrderQtyData]
    .map(function (orderQtyData) {
      return new OrderQtyData(orderQtyData);
  });
};

MultilegOrderCancelReplace.prototype.triggeringInstruction = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MultilegOrderCancelReplace.Tags.TriggeringInstruction] === undefined) return null;
  return this.message.groups[MultilegOrderCancelReplace.Tags.TriggeringInstruction]
    .map(function (triggeringInstruction) {
      return new TriggeringInstruction(triggeringInstruction);
  });
};

MultilegOrderCancelReplace.prototype.commissionData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MultilegOrderCancelReplace.Tags.CommissionData] === undefined) return null;
  return this.message.groups[MultilegOrderCancelReplace.Tags.CommissionData]
    .map(function (commissionData) {
      return new CommissionData(commissionData);
  });
};

MultilegOrderCancelReplace.prototype.pegInstructions = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MultilegOrderCancelReplace.Tags.PegInstructions] === undefined) return null;
  return this.message.groups[MultilegOrderCancelReplace.Tags.PegInstructions]
    .map(function (pegInstructions) {
      return new PegInstructions(pegInstructions);
  });
};

MultilegOrderCancelReplace.prototype.discretionInstructions = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MultilegOrderCancelReplace.Tags.DiscretionInstructions] === undefined) return null;
  return this.message.groups[MultilegOrderCancelReplace.Tags.DiscretionInstructions]
    .map(function (discretionInstructions) {
      return new DiscretionInstructions(discretionInstructions);
  });
};

MultilegOrderCancelReplace.prototype.strategyParametersGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[MultilegOrderCancelReplace.Tags.StrategyParametersGrp] === undefined) return null;
  return this.message.groups[MultilegOrderCancelReplace.Tags.StrategyParametersGrp]
    .map(function (strategyParametersGrp) {
      return new StrategyParametersGrp(strategyParametersGrp);
  });
};

MultilegOrderCancelReplace.prototype.orderId = function () {
  return new OrderID(this.message.tags[MultilegOrderCancelReplace.Tags.OrderID]);
};

MultilegOrderCancelReplace.prototype.orderRequestId = function () {
  return new OrderRequestID(this.message.tags[MultilegOrderCancelReplace.Tags.OrderRequestID]);
};

MultilegOrderCancelReplace.prototype.origClOrdId = function () {
  return new OrigClOrdID(this.message.tags[MultilegOrderCancelReplace.Tags.OrigClOrdID]);
};

MultilegOrderCancelReplace.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[MultilegOrderCancelReplace.Tags.ClOrdID]);
};

MultilegOrderCancelReplace.prototype.secondaryClOrdId = function () {
  return new SecondaryClOrdID(this.message.tags[MultilegOrderCancelReplace.Tags.SecondaryClOrdID]);
};

MultilegOrderCancelReplace.prototype.clOrdLinkId = function () {
  return new ClOrdLinkID(this.message.tags[MultilegOrderCancelReplace.Tags.ClOrdLinkID]);
};

MultilegOrderCancelReplace.prototype.origOrdModTime = function () {
  return new OrigOrdModTime(this.message.tags[MultilegOrderCancelReplace.Tags.OrigOrdModTime]);
};

MultilegOrderCancelReplace.prototype.tradeOriginationDate = function () {
  return new TradeOriginationDate(this.message.tags[MultilegOrderCancelReplace.Tags.TradeOriginationDate]);
};

MultilegOrderCancelReplace.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[MultilegOrderCancelReplace.Tags.TradeDate]);
};

MultilegOrderCancelReplace.prototype.account = function () {
  return new Account(this.message.tags[MultilegOrderCancelReplace.Tags.Account]);
};

MultilegOrderCancelReplace.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[MultilegOrderCancelReplace.Tags.AcctIDSource]);
};

MultilegOrderCancelReplace.prototype.accountType = function () {
  return new AccountType(this.message.tags[MultilegOrderCancelReplace.Tags.AccountType]);
};

MultilegOrderCancelReplace.prototype.dayBookingInst = function () {
  return new DayBookingInst(this.message.tags[MultilegOrderCancelReplace.Tags.DayBookingInst]);
};

MultilegOrderCancelReplace.prototype.bookingUnit = function () {
  return new BookingUnit(this.message.tags[MultilegOrderCancelReplace.Tags.BookingUnit]);
};

MultilegOrderCancelReplace.prototype.preallocMethod = function () {
  return new PreallocMethod(this.message.tags[MultilegOrderCancelReplace.Tags.PreallocMethod]);
};

MultilegOrderCancelReplace.prototype.allocId = function () {
  return new AllocID(this.message.tags[MultilegOrderCancelReplace.Tags.AllocID]);
};

MultilegOrderCancelReplace.prototype.settlType = function () {
  return new SettlType(this.message.tags[MultilegOrderCancelReplace.Tags.SettlType]);
};

MultilegOrderCancelReplace.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[MultilegOrderCancelReplace.Tags.SettlDate]);
};

MultilegOrderCancelReplace.prototype.cashMargin = function () {
  return new CashMargin(this.message.tags[MultilegOrderCancelReplace.Tags.CashMargin]);
};

MultilegOrderCancelReplace.prototype.clearingFeeIndicator = function () {
  return new ClearingFeeIndicator(this.message.tags[MultilegOrderCancelReplace.Tags.ClearingFeeIndicator]);
};

MultilegOrderCancelReplace.prototype.handlInst = function () {
  return new HandlInst(this.message.tags[MultilegOrderCancelReplace.Tags.HandlInst]);
};

MultilegOrderCancelReplace.prototype.execInst = function () {
  return new ExecInst(this.message.tags[MultilegOrderCancelReplace.Tags.ExecInst]);
};

MultilegOrderCancelReplace.prototype.auctionInstruction = function () {
  return new AuctionInstruction(this.message.tags[MultilegOrderCancelReplace.Tags.AuctionInstruction]);
};

MultilegOrderCancelReplace.prototype.minQty = function () {
  return new MinQty(this.message.tags[MultilegOrderCancelReplace.Tags.MinQty]);
};

MultilegOrderCancelReplace.prototype.minQtyMethod = function () {
  return new MinQtyMethod(this.message.tags[MultilegOrderCancelReplace.Tags.MinQtyMethod]);
};

MultilegOrderCancelReplace.prototype.matchIncrement = function () {
  return new MatchIncrement(this.message.tags[MultilegOrderCancelReplace.Tags.MatchIncrement]);
};

MultilegOrderCancelReplace.prototype.maxPriceLevels = function () {
  return new MaxPriceLevels(this.message.tags[MultilegOrderCancelReplace.Tags.MaxPriceLevels]);
};

MultilegOrderCancelReplace.prototype.maxFloor = function () {
  return new MaxFloor(this.message.tags[MultilegOrderCancelReplace.Tags.MaxFloor]);
};

MultilegOrderCancelReplace.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[MultilegOrderCancelReplace.Tags.MarketSegmentID]);
};

MultilegOrderCancelReplace.prototype.exDestination = function () {
  return new ExDestination(this.message.tags[MultilegOrderCancelReplace.Tags.ExDestination]);
};

MultilegOrderCancelReplace.prototype.exDestinationIdsource = function () {
  return new ExDestinationIDSource(this.message.tags[MultilegOrderCancelReplace.Tags.ExDestinationIDSource]);
};

MultilegOrderCancelReplace.prototype.processCode = function () {
  return new ProcessCode(this.message.tags[MultilegOrderCancelReplace.Tags.ProcessCode]);
};

MultilegOrderCancelReplace.prototype.side = function () {
  return new Side(this.message.tags[MultilegOrderCancelReplace.Tags.Side]);
};

MultilegOrderCancelReplace.prototype.shortMarkingExemptIndicator = function () {
  return new ShortMarkingExemptIndicator(this.message.tags[MultilegOrderCancelReplace.Tags.ShortMarkingExemptIndicator]);
};

MultilegOrderCancelReplace.prototype.prevClosePx = function () {
  return new PrevClosePx(this.message.tags[MultilegOrderCancelReplace.Tags.PrevClosePx]);
};

MultilegOrderCancelReplace.prototype.swapPoints = function () {
  return new SwapPoints(this.message.tags[MultilegOrderCancelReplace.Tags.SwapPoints]);
};

MultilegOrderCancelReplace.prototype.locateReqd = function () {
  return new LocateReqd(this.message.tags[MultilegOrderCancelReplace.Tags.LocateReqd]);
};

MultilegOrderCancelReplace.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[MultilegOrderCancelReplace.Tags.TransactTime]);
};

MultilegOrderCancelReplace.prototype.qtyType = function () {
  return new QtyType(this.message.tags[MultilegOrderCancelReplace.Tags.QtyType]);
};

MultilegOrderCancelReplace.prototype.ordType = function () {
  return new OrdType(this.message.tags[MultilegOrderCancelReplace.Tags.OrdType]);
};

MultilegOrderCancelReplace.prototype.multilegModel = function () {
  return new MultilegModel(this.message.tags[MultilegOrderCancelReplace.Tags.MultilegModel]);
};

MultilegOrderCancelReplace.prototype.multilegPriceMethod = function () {
  return new MultilegPriceMethod(this.message.tags[MultilegOrderCancelReplace.Tags.MultilegPriceMethod]);
};

MultilegOrderCancelReplace.prototype.priceType = function () {
  return new PriceType(this.message.tags[MultilegOrderCancelReplace.Tags.PriceType]);
};

MultilegOrderCancelReplace.prototype.price = function () {
  return new Price(this.message.tags[MultilegOrderCancelReplace.Tags.Price]);
};

MultilegOrderCancelReplace.prototype.priceProtectionScope = function () {
  return new PriceProtectionScope(this.message.tags[MultilegOrderCancelReplace.Tags.PriceProtectionScope]);
};

MultilegOrderCancelReplace.prototype.stopPx = function () {
  return new StopPx(this.message.tags[MultilegOrderCancelReplace.Tags.StopPx]);
};

MultilegOrderCancelReplace.prototype.currency = function () {
  return new Currency(this.message.tags[MultilegOrderCancelReplace.Tags.Currency]);
};

MultilegOrderCancelReplace.prototype.complianceId = function () {
  return new ComplianceID(this.message.tags[MultilegOrderCancelReplace.Tags.ComplianceID]);
};

MultilegOrderCancelReplace.prototype.complianceText = function () {
  return new ComplianceText(this.message.tags[MultilegOrderCancelReplace.Tags.ComplianceText]);
};

MultilegOrderCancelReplace.prototype.encodedComplianceTextLen = function () {
  return new EncodedComplianceTextLen(this.message.tags[MultilegOrderCancelReplace.Tags.EncodedComplianceTextLen]);
};

MultilegOrderCancelReplace.prototype.encodedComplianceText = function () {
  return new EncodedComplianceText(this.message.tags[MultilegOrderCancelReplace.Tags.EncodedComplianceText]);
};

MultilegOrderCancelReplace.prototype.solicitedFlag = function () {
  return new SolicitedFlag(this.message.tags[MultilegOrderCancelReplace.Tags.SolicitedFlag]);
};

MultilegOrderCancelReplace.prototype.ioiid = function () {
  return new IOIID(this.message.tags[MultilegOrderCancelReplace.Tags.IOIID]);
};

MultilegOrderCancelReplace.prototype.quoteId = function () {
  return new QuoteID(this.message.tags[MultilegOrderCancelReplace.Tags.QuoteID]);
};

MultilegOrderCancelReplace.prototype.timeInForce = function () {
  return new TimeInForce(this.message.tags[MultilegOrderCancelReplace.Tags.TimeInForce]);
};

MultilegOrderCancelReplace.prototype.effectiveTime = function () {
  return new EffectiveTime(this.message.tags[MultilegOrderCancelReplace.Tags.EffectiveTime]);
};

MultilegOrderCancelReplace.prototype.expireDate = function () {
  return new ExpireDate(this.message.tags[MultilegOrderCancelReplace.Tags.ExpireDate]);
};

MultilegOrderCancelReplace.prototype.expireTime = function () {
  return new ExpireTime(this.message.tags[MultilegOrderCancelReplace.Tags.ExpireTime]);
};

MultilegOrderCancelReplace.prototype.gtbookingInst = function () {
  return new GTBookingInst(this.message.tags[MultilegOrderCancelReplace.Tags.GTBookingInst]);
};

MultilegOrderCancelReplace.prototype.exposureDuration = function () {
  return new ExposureDuration(this.message.tags[MultilegOrderCancelReplace.Tags.ExposureDuration]);
};

MultilegOrderCancelReplace.prototype.exposureDurationUnit = function () {
  return new ExposureDurationUnit(this.message.tags[MultilegOrderCancelReplace.Tags.ExposureDurationUnit]);
};

MultilegOrderCancelReplace.prototype.orderCapacity = function () {
  return new OrderCapacity(this.message.tags[MultilegOrderCancelReplace.Tags.OrderCapacity]);
};

MultilegOrderCancelReplace.prototype.orderRestrictions = function () {
  return new OrderRestrictions(this.message.tags[MultilegOrderCancelReplace.Tags.OrderRestrictions]);
};

MultilegOrderCancelReplace.prototype.tradingCapacity = function () {
  return new TradingCapacity(this.message.tags[MultilegOrderCancelReplace.Tags.TradingCapacity]);
};

MultilegOrderCancelReplace.prototype.preTradeAnonymity = function () {
  return new PreTradeAnonymity(this.message.tags[MultilegOrderCancelReplace.Tags.PreTradeAnonymity]);
};

MultilegOrderCancelReplace.prototype.custOrderCapacity = function () {
  return new CustOrderCapacity(this.message.tags[MultilegOrderCancelReplace.Tags.CustOrderCapacity]);
};

MultilegOrderCancelReplace.prototype.forexReq = function () {
  return new ForexReq(this.message.tags[MultilegOrderCancelReplace.Tags.ForexReq]);
};

MultilegOrderCancelReplace.prototype.settlCurrency = function () {
  return new SettlCurrency(this.message.tags[MultilegOrderCancelReplace.Tags.SettlCurrency]);
};

MultilegOrderCancelReplace.prototype.bookingType = function () {
  return new BookingType(this.message.tags[MultilegOrderCancelReplace.Tags.BookingType]);
};

MultilegOrderCancelReplace.prototype.text = function () {
  return new Text(this.message.tags[MultilegOrderCancelReplace.Tags.Text]);
};

MultilegOrderCancelReplace.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[MultilegOrderCancelReplace.Tags.EncodedTextLen]);
};

MultilegOrderCancelReplace.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[MultilegOrderCancelReplace.Tags.EncodedText]);
};

MultilegOrderCancelReplace.prototype.clearingAccountType = function () {
  return new ClearingAccountType(this.message.tags[MultilegOrderCancelReplace.Tags.ClearingAccountType]);
};

MultilegOrderCancelReplace.prototype.positionEffect = function () {
  return new PositionEffect(this.message.tags[MultilegOrderCancelReplace.Tags.PositionEffect]);
};

MultilegOrderCancelReplace.prototype.coveredOrUncovered = function () {
  return new CoveredOrUncovered(this.message.tags[MultilegOrderCancelReplace.Tags.CoveredOrUncovered]);
};

MultilegOrderCancelReplace.prototype.maxShow = function () {
  return new MaxShow(this.message.tags[MultilegOrderCancelReplace.Tags.MaxShow]);
};

MultilegOrderCancelReplace.prototype.targetStrategy = function () {
  return new TargetStrategy(this.message.tags[MultilegOrderCancelReplace.Tags.TargetStrategy]);
};

MultilegOrderCancelReplace.prototype.targetStrategyParameters = function () {
  return new TargetStrategyParameters(this.message.tags[MultilegOrderCancelReplace.Tags.TargetStrategyParameters]);
};

MultilegOrderCancelReplace.prototype.riskFreeRate = function () {
  return new RiskFreeRate(this.message.tags[MultilegOrderCancelReplace.Tags.RiskFreeRate]);
};

MultilegOrderCancelReplace.prototype.participationRate = function () {
  return new ParticipationRate(this.message.tags[MultilegOrderCancelReplace.Tags.ParticipationRate]);
};

MultilegOrderCancelReplace.prototype.cancellationRights = function () {
  return new CancellationRights(this.message.tags[MultilegOrderCancelReplace.Tags.CancellationRights]);
};

MultilegOrderCancelReplace.prototype.moneyLaunderingStatus = function () {
  return new MoneyLaunderingStatus(this.message.tags[MultilegOrderCancelReplace.Tags.MoneyLaunderingStatus]);
};

MultilegOrderCancelReplace.prototype.registId = function () {
  return new RegistID(this.message.tags[MultilegOrderCancelReplace.Tags.RegistID]);
};

MultilegOrderCancelReplace.prototype.designation = function () {
  return new Designation(this.message.tags[MultilegOrderCancelReplace.Tags.Designation]);
};

MultilegOrderCancelReplace.prototype.multiLegRptTypeReq = function () {
  return new MultiLegRptTypeReq(this.message.tags[MultilegOrderCancelReplace.Tags.MultiLegRptTypeReq]);
};

MultilegOrderCancelReplace.prototype.throttleInst = function () {
  return new ThrottleInst(this.message.tags[MultilegOrderCancelReplace.Tags.ThrottleInst]);
};

MultilegOrderCancelReplace.prototype.auctionType = function () {
  return new AuctionType(this.message.tags[MultilegOrderCancelReplace.Tags.AuctionType]);
};

MultilegOrderCancelReplace.prototype.auctionAllocationPct = function () {
  return new AuctionAllocationPct(this.message.tags[MultilegOrderCancelReplace.Tags.AuctionAllocationPct]);
};

MultilegOrderCancelReplace.prototype.relatedHighPrice = function () {
  return new RelatedHighPrice(this.message.tags[MultilegOrderCancelReplace.Tags.RelatedHighPrice]);
};

MultilegOrderCancelReplace.prototype.relatedLowPrice = function () {
  return new RelatedLowPrice(this.message.tags[MultilegOrderCancelReplace.Tags.RelatedLowPrice]);
};

MultilegOrderCancelReplace.prototype.relatedPriceSource = function () {
  return new RelatedPriceSource(this.message.tags[MultilegOrderCancelReplace.Tags.RelatedPriceSource]);
};

MultilegOrderCancelReplace.Tags = {
  Parties: '453',
  TargetParties: '1461',
  PreAllocMlegGrp: '78',
  MatchingInstructions: '1624',
  DisplayInstruction: '1138',
  DisclosureInstructionGrp: '1812',
  TrdgSesGrp: '386',
  Instrument: '55',
  UndInstrmtGrp: '711',
  LegOrdGrp: '555',
  OrderQtyData: '38',
  TriggeringInstruction: '1100',
  CommissionData: '12',
  PegInstructions: '211',
  DiscretionInstructions: '388',
  StrategyParametersGrp: '957',
  OrderID: '37',
  OrderRequestID: '2422',
  OrigClOrdID: '41',
  ClOrdID: '11',
  SecondaryClOrdID: '526',
  ClOrdLinkID: '583',
  OrigOrdModTime: '586',
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
  Side: '54',
  ShortMarkingExemptIndicator: '2102',
  PrevClosePx: '140',
  SwapPoints: '1069',
  LocateReqd: '114',
  TransactTime: '60',
  QtyType: '854',
  OrdType: '40',
  MultilegModel: '1377',
  MultilegPriceMethod: '1378',
  PriceType: '423',
  Price: '44',
  PriceProtectionScope: '1092',
  StopPx: '99',
  Currency: '15',
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
  CustOrderCapacity: '582',
  ForexReq: '121',
  SettlCurrency: '120',
  BookingType: '775',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  ClearingAccountType: '1816',
  PositionEffect: '77',
  CoveredOrUncovered: '203',
  MaxShow: '210',
  TargetStrategy: '847',
  TargetStrategyParameters: '848',
  RiskFreeRate: '1190',
  ParticipationRate: '849',
  CancellationRights: '480',
  MoneyLaunderingStatus: '481',
  RegistID: '513',
  Designation: '494',
  MultiLegRptTypeReq: '563',
  ThrottleInst: '1685',
  AuctionType: '1803',
  AuctionAllocationPct: '1804',
  RelatedHighPrice: '1819',
  RelatedLowPrice: '1820',
  RelatedPriceSource: '1821',
};

MultilegOrderCancelReplace.msgType = 'AC';

module.exports = MultilegOrderCancelReplace;