var NoLegPaymentStubs = require('../fields/NoLegPaymentStubs');
var LegPaymentStubType = require('../fields/LegPaymentStubType');
var LegPaymentStubLength = require('../fields/LegPaymentStubLength');
var LegPaymentStubRate = require('../fields/LegPaymentStubRate');
var LegPaymentStubFixedAmount = require('../fields/LegPaymentStubFixedAmount');
var LegPaymentStubFixedCurrency = require('../fields/LegPaymentStubFixedCurrency');
var LegPaymentStubIndex = require('../fields/LegPaymentStubIndex');
var LegPaymentStubIndexSource = require('../fields/LegPaymentStubIndexSource');
var LegPaymentStubIndexCurvePeriod = require('../fields/LegPaymentStubIndexCurvePeriod');
var LegPaymentStubIndexCurveUnit = require('../fields/LegPaymentStubIndexCurveUnit');
var LegPaymentStubIndexRateMultiplier = require('../fields/LegPaymentStubIndexRateMultiplier');
var LegPaymentStubIndexRateSpread = require('../fields/LegPaymentStubIndexRateSpread');
var LegPaymentStubIndexRateSpreadPositionType = require('../fields/LegPaymentStubIndexRateSpreadPositionType');
var LegPaymentStubIndexRateTreatment = require('../fields/LegPaymentStubIndexRateTreatment');
var LegPaymentStubIndexCapRate = require('../fields/LegPaymentStubIndexCapRate');
var LegPaymentStubIndexCapRateBuySide = require('../fields/LegPaymentStubIndexCapRateBuySide');
var LegPaymentStubIndexCapRateSellSide = require('../fields/LegPaymentStubIndexCapRateSellSide');
var LegPaymentStubIndexFloorRate = require('../fields/LegPaymentStubIndexFloorRate');
var LegPaymentStubIndexFloorRateBuySide = require('../fields/LegPaymentStubIndexFloorRateBuySide');
var LegPaymentStubIndexFloorRateSellSide = require('../fields/LegPaymentStubIndexFloorRateSellSide');
var LegPaymentStubIndex2 = require('../fields/LegPaymentStubIndex2');
var LegPaymentStubIndex2Source = require('../fields/LegPaymentStubIndex2Source');
var LegPaymentStubIndex2CurvePeriod = require('../fields/LegPaymentStubIndex2CurvePeriod');
var LegPaymentStubIndex2CurveUnit = require('../fields/LegPaymentStubIndex2CurveUnit');
var LegPaymentStubIndex2RateMultiplier = require('../fields/LegPaymentStubIndex2RateMultiplier');
var LegPaymentStubIndex2RateSpread = require('../fields/LegPaymentStubIndex2RateSpread');
var LegPaymentStubIndex2RateSpreadPositionType = require('../fields/LegPaymentStubIndex2RateSpreadPositionType');
var LegPaymentStubIndex2RateTreatment = require('../fields/LegPaymentStubIndex2RateTreatment');
var LegPaymentStubIndex2CapRate = require('../fields/LegPaymentStubIndex2CapRate');
var LegPaymentStubIndex2FloorRate = require('../fields/LegPaymentStubIndex2FloorRate');

function LegPaymentStubGrp (legPaymentStubGrp) {
  this.message = legPaymentStubGrp;
}

/* group */

/* field */
LegPaymentStubGrp.prototype.legPaymentStubType = function () {
  return new LegPaymentStubType(this.message.tags[LegPaymentStubType.Tag]);
};

/* field */
LegPaymentStubGrp.prototype.legPaymentStubLength = function () {
  return new LegPaymentStubLength(this.message.tags[LegPaymentStubLength.Tag]);
};

/* field */
LegPaymentStubGrp.prototype.legPaymentStubRate = function () {
  return new LegPaymentStubRate(this.message.tags[LegPaymentStubRate.Tag]);
};

/* field */
LegPaymentStubGrp.prototype.legPaymentStubFixedAmount = function () {
  return new LegPaymentStubFixedAmount(this.message.tags[LegPaymentStubFixedAmount.Tag]);
};

/* field */
LegPaymentStubGrp.prototype.legPaymentStubFixedCurrency = function () {
  return new LegPaymentStubFixedCurrency(this.message.tags[LegPaymentStubFixedCurrency.Tag]);
};

/* field */
LegPaymentStubGrp.prototype.legPaymentStubIndex = function () {
  return new LegPaymentStubIndex(this.message.tags[LegPaymentStubIndex.Tag]);
};

/* field */
LegPaymentStubGrp.prototype.legPaymentStubIndexSource = function () {
  return new LegPaymentStubIndexSource(this.message.tags[LegPaymentStubIndexSource.Tag]);
};

/* field */
LegPaymentStubGrp.prototype.legPaymentStubIndexCurvePeriod = function () {
  return new LegPaymentStubIndexCurvePeriod(this.message.tags[LegPaymentStubIndexCurvePeriod.Tag]);
};

/* field */
LegPaymentStubGrp.prototype.legPaymentStubIndexCurveUnit = function () {
  return new LegPaymentStubIndexCurveUnit(this.message.tags[LegPaymentStubIndexCurveUnit.Tag]);
};

/* field */
LegPaymentStubGrp.prototype.legPaymentStubIndexRateMultiplier = function () {
  return new LegPaymentStubIndexRateMultiplier(this.message.tags[LegPaymentStubIndexRateMultiplier.Tag]);
};

/* field */
LegPaymentStubGrp.prototype.legPaymentStubIndexRateSpread = function () {
  return new LegPaymentStubIndexRateSpread(this.message.tags[LegPaymentStubIndexRateSpread.Tag]);
};

/* field */
LegPaymentStubGrp.prototype.legPaymentStubIndexRateSpreadPositionType = function () {
  return new LegPaymentStubIndexRateSpreadPositionType(this.message.tags[LegPaymentStubIndexRateSpreadPositionType.Tag]);
};

/* field */
LegPaymentStubGrp.prototype.legPaymentStubIndexRateTreatment = function () {
  return new LegPaymentStubIndexRateTreatment(this.message.tags[LegPaymentStubIndexRateTreatment.Tag]);
};

/* field */
LegPaymentStubGrp.prototype.legPaymentStubIndexCapRate = function () {
  return new LegPaymentStubIndexCapRate(this.message.tags[LegPaymentStubIndexCapRate.Tag]);
};

/* field */
LegPaymentStubGrp.prototype.legPaymentStubIndexCapRateBuySide = function () {
  return new LegPaymentStubIndexCapRateBuySide(this.message.tags[LegPaymentStubIndexCapRateBuySide.Tag]);
};

/* field */
LegPaymentStubGrp.prototype.legPaymentStubIndexCapRateSellSide = function () {
  return new LegPaymentStubIndexCapRateSellSide(this.message.tags[LegPaymentStubIndexCapRateSellSide.Tag]);
};

/* field */
LegPaymentStubGrp.prototype.legPaymentStubIndexFloorRate = function () {
  return new LegPaymentStubIndexFloorRate(this.message.tags[LegPaymentStubIndexFloorRate.Tag]);
};

/* field */
LegPaymentStubGrp.prototype.legPaymentStubIndexFloorRateBuySide = function () {
  return new LegPaymentStubIndexFloorRateBuySide(this.message.tags[LegPaymentStubIndexFloorRateBuySide.Tag]);
};

/* field */
LegPaymentStubGrp.prototype.legPaymentStubIndexFloorRateSellSide = function () {
  return new LegPaymentStubIndexFloorRateSellSide(this.message.tags[LegPaymentStubIndexFloorRateSellSide.Tag]);
};

/* field */
LegPaymentStubGrp.prototype.legPaymentStubIndex2 = function () {
  return new LegPaymentStubIndex2(this.message.tags[LegPaymentStubIndex2.Tag]);
};

/* field */
LegPaymentStubGrp.prototype.legPaymentStubIndex2Source = function () {
  return new LegPaymentStubIndex2Source(this.message.tags[LegPaymentStubIndex2Source.Tag]);
};

/* field */
LegPaymentStubGrp.prototype.legPaymentStubIndex2CurvePeriod = function () {
  return new LegPaymentStubIndex2CurvePeriod(this.message.tags[LegPaymentStubIndex2CurvePeriod.Tag]);
};

/* field */
LegPaymentStubGrp.prototype.legPaymentStubIndex2CurveUnit = function () {
  return new LegPaymentStubIndex2CurveUnit(this.message.tags[LegPaymentStubIndex2CurveUnit.Tag]);
};

/* field */
LegPaymentStubGrp.prototype.legPaymentStubIndex2RateMultiplier = function () {
  return new LegPaymentStubIndex2RateMultiplier(this.message.tags[LegPaymentStubIndex2RateMultiplier.Tag]);
};

/* field */
LegPaymentStubGrp.prototype.legPaymentStubIndex2RateSpread = function () {
  return new LegPaymentStubIndex2RateSpread(this.message.tags[LegPaymentStubIndex2RateSpread.Tag]);
};

/* field */
LegPaymentStubGrp.prototype.legPaymentStubIndex2RateSpreadPositionType = function () {
  return new LegPaymentStubIndex2RateSpreadPositionType(this.message.tags[LegPaymentStubIndex2RateSpreadPositionType.Tag]);
};

/* field */
LegPaymentStubGrp.prototype.legPaymentStubIndex2RateTreatment = function () {
  return new LegPaymentStubIndex2RateTreatment(this.message.tags[LegPaymentStubIndex2RateTreatment.Tag]);
};

/* field */
LegPaymentStubGrp.prototype.legPaymentStubIndex2CapRate = function () {
  return new LegPaymentStubIndex2CapRate(this.message.tags[LegPaymentStubIndex2CapRate.Tag]);
};

/* field */
LegPaymentStubGrp.prototype.legPaymentStubIndex2FloorRate = function () {
  return new LegPaymentStubIndex2FloorRate(this.message.tags[LegPaymentStubIndex2FloorRate.Tag]);
};

/* end group */

LegPaymentStubGrp.Tag = '40418';

module.exports = LegPaymentStubGrp;