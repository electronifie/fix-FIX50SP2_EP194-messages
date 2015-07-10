var MDStatisticType = require('../fields/MDStatisticType');
var MDStatisticScope = require('../fields/MDStatisticScope');
var MDStatisticSubScope = require('../fields/MDStatisticSubScope');
var MDStatisticScopeType = require('../fields/MDStatisticScopeType');
var MDStatisticName = require('../fields/MDStatisticName');
var MDStatisticDesc = require('../fields/MDStatisticDesc');
var EncodedMDStatisticDescLen = require('../fields/EncodedMDStatisticDescLen');
var EncodedMDStatisticDesc = require('../fields/EncodedMDStatisticDesc');
var MarketDepth = require('../fields/MarketDepth');
var MDStatisticFrequencyPeriod = require('../fields/MDStatisticFrequencyPeriod');
var MDStatisticFrequencyUnit = require('../fields/MDStatisticFrequencyUnit');
var MDStatisticDelayPeriod = require('../fields/MDStatisticDelayPeriod');
var MDStatisticDelayUnit = require('../fields/MDStatisticDelayUnit');
var MDStatisticIntervalType = require('../fields/MDStatisticIntervalType');
var MDStatisticIntervalTypeUnit = require('../fields/MDStatisticIntervalTypeUnit');
var MDStatisticIntervalPeriod = require('../fields/MDStatisticIntervalPeriod');
var MDStatisticIntervalUnit = require('../fields/MDStatisticIntervalUnit');
var MDStatisticStartDate = require('../fields/MDStatisticStartDate');
var MDStatisticEndDate = require('../fields/MDStatisticEndDate');
var MDStatisticStartTime = require('../fields/MDStatisticStartTime');
var MDStatisticEndTime = require('../fields/MDStatisticEndTime');
var MDStatisticRatioType = require('../fields/MDStatisticRatioType');
var TradingCapacity = require('../fields/TradingCapacity');
var OrdType = require('../fields/OrdType');
var TimeInForce = require('../fields/TimeInForce');
var QuoteCondition = require('../fields/QuoteCondition');
var TradeCondition = require('../fields/TradeCondition');
var Side = require('../fields/Side');
var TradeInputSource = require('../fields/TradeInputSource');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');

function MDStatisticParameters (mdstatisticParameters) {
  this.message = mdstatisticParameters;
}
/* field */
MDStatisticParameters.prototype.mdstatisticType = function () {
  return new MDStatisticType(this.message.tags[MDStatisticType.Tag]);
};

/* field */
MDStatisticParameters.prototype.mdstatisticScope = function () {
  return new MDStatisticScope(this.message.tags[MDStatisticScope.Tag]);
};

/* field */
MDStatisticParameters.prototype.mdstatisticSubScope = function () {
  return new MDStatisticSubScope(this.message.tags[MDStatisticSubScope.Tag]);
};

/* field */
MDStatisticParameters.prototype.mdstatisticScopeType = function () {
  return new MDStatisticScopeType(this.message.tags[MDStatisticScopeType.Tag]);
};

/* field */
MDStatisticParameters.prototype.mdstatisticName = function () {
  return new MDStatisticName(this.message.tags[MDStatisticName.Tag]);
};

/* field */
MDStatisticParameters.prototype.mdstatisticDesc = function () {
  return new MDStatisticDesc(this.message.tags[MDStatisticDesc.Tag]);
};

/* field */
MDStatisticParameters.prototype.encodedMdstatisticDescLen = function () {
  return new EncodedMDStatisticDescLen(this.message.tags[EncodedMDStatisticDescLen.Tag]);
};

/* field */
MDStatisticParameters.prototype.encodedMdstatisticDesc = function () {
  return new EncodedMDStatisticDesc(this.message.tags[EncodedMDStatisticDesc.Tag]);
};

/* field */
MDStatisticParameters.prototype.marketDepth = function () {
  return new MarketDepth(this.message.tags[MarketDepth.Tag]);
};

/* field */
MDStatisticParameters.prototype.mdstatisticFrequencyPeriod = function () {
  return new MDStatisticFrequencyPeriod(this.message.tags[MDStatisticFrequencyPeriod.Tag]);
};

/* field */
MDStatisticParameters.prototype.mdstatisticFrequencyUnit = function () {
  return new MDStatisticFrequencyUnit(this.message.tags[MDStatisticFrequencyUnit.Tag]);
};

/* field */
MDStatisticParameters.prototype.mdstatisticDelayPeriod = function () {
  return new MDStatisticDelayPeriod(this.message.tags[MDStatisticDelayPeriod.Tag]);
};

/* field */
MDStatisticParameters.prototype.mdstatisticDelayUnit = function () {
  return new MDStatisticDelayUnit(this.message.tags[MDStatisticDelayUnit.Tag]);
};

/* field */
MDStatisticParameters.prototype.mdstatisticIntervalType = function () {
  return new MDStatisticIntervalType(this.message.tags[MDStatisticIntervalType.Tag]);
};

/* field */
MDStatisticParameters.prototype.mdstatisticIntervalTypeUnit = function () {
  return new MDStatisticIntervalTypeUnit(this.message.tags[MDStatisticIntervalTypeUnit.Tag]);
};

/* field */
MDStatisticParameters.prototype.mdstatisticIntervalPeriod = function () {
  return new MDStatisticIntervalPeriod(this.message.tags[MDStatisticIntervalPeriod.Tag]);
};

/* field */
MDStatisticParameters.prototype.mdstatisticIntervalUnit = function () {
  return new MDStatisticIntervalUnit(this.message.tags[MDStatisticIntervalUnit.Tag]);
};

/* field */
MDStatisticParameters.prototype.mdstatisticStartDate = function () {
  return new MDStatisticStartDate(this.message.tags[MDStatisticStartDate.Tag]);
};

/* field */
MDStatisticParameters.prototype.mdstatisticEndDate = function () {
  return new MDStatisticEndDate(this.message.tags[MDStatisticEndDate.Tag]);
};

/* field */
MDStatisticParameters.prototype.mdstatisticStartTime = function () {
  return new MDStatisticStartTime(this.message.tags[MDStatisticStartTime.Tag]);
};

/* field */
MDStatisticParameters.prototype.mdstatisticEndTime = function () {
  return new MDStatisticEndTime(this.message.tags[MDStatisticEndTime.Tag]);
};

/* field */
MDStatisticParameters.prototype.mdstatisticRatioType = function () {
  return new MDStatisticRatioType(this.message.tags[MDStatisticRatioType.Tag]);
};

/* field */
MDStatisticParameters.prototype.tradingCapacity = function () {
  return new TradingCapacity(this.message.tags[TradingCapacity.Tag]);
};

/* field */
MDStatisticParameters.prototype.ordType = function () {
  return new OrdType(this.message.tags[OrdType.Tag]);
};

/* field */
MDStatisticParameters.prototype.timeInForce = function () {
  return new TimeInForce(this.message.tags[TimeInForce.Tag]);
};

/* field */
MDStatisticParameters.prototype.quoteCondition = function () {
  return new QuoteCondition(this.message.tags[QuoteCondition.Tag]);
};

/* field */
MDStatisticParameters.prototype.tradeCondition = function () {
  return new TradeCondition(this.message.tags[TradeCondition.Tag]);
};

/* field */
MDStatisticParameters.prototype.side = function () {
  return new Side(this.message.tags[Side.Tag]);
};

/* field */
MDStatisticParameters.prototype.tradeInputSource = function () {
  return new TradeInputSource(this.message.tags[TradeInputSource.Tag]);
};

/* field */
MDStatisticParameters.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[TradingSessionID.Tag]);
};

/* field */
MDStatisticParameters.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[TradingSessionSubID.Tag]);
};



MDStatisticParameters.Tag = '2456';

module.exports = MDStatisticParameters;