var NoUnderlyingPaymentStubs = require('../fields/NoUnderlyingPaymentStubs');
var UnderlyingPaymentStubType = require('../fields/UnderlyingPaymentStubType');
var UnderlyingPaymentStubLength = require('../fields/UnderlyingPaymentStubLength');
var UnderlyingPaymentStubRate = require('../fields/UnderlyingPaymentStubRate');
var UnderlyingPaymentStubFixedAmount = require('../fields/UnderlyingPaymentStubFixedAmount');
var UnderlyingPaymentStubFixedCurrency = require('../fields/UnderlyingPaymentStubFixedCurrency');
var UnderlyingPaymentStubIndex = require('../fields/UnderlyingPaymentStubIndex');
var UnderlyingPaymentStubIndexSource = require('../fields/UnderlyingPaymentStubIndexSource');
var UnderlyingPaymentStubIndexCurvePeriod = require('../fields/UnderlyingPaymentStubIndexCurvePeriod');
var UnderlyingPaymentStubIndexCurveUnit = require('../fields/UnderlyingPaymentStubIndexCurveUnit');
var UnderlyingPaymentStubIndexRateMultiplier = require('../fields/UnderlyingPaymentStubIndexRateMultiplier');
var UnderlyingPaymentStubIndexRateSpread = require('../fields/UnderlyingPaymentStubIndexRateSpread');
var UnderlyingPaymentStubIndexRateSpreadPositionType = require('../fields/UnderlyingPaymentStubIndexRateSpreadPositionType');
var UnderlyingPaymentStubIndexRateTreatment = require('../fields/UnderlyingPaymentStubIndexRateTreatment');
var UnderlyingPaymentStubIndexCapRate = require('../fields/UnderlyingPaymentStubIndexCapRate');
var UnderlyingPaymentStubIndexCapRateBuySide = require('../fields/UnderlyingPaymentStubIndexCapRateBuySide');
var UnderlyingPaymentStubIndexCapRateSellSide = require('../fields/UnderlyingPaymentStubIndexCapRateSellSide');
var UnderlyingPaymentStubIndexFloorRate = require('../fields/UnderlyingPaymentStubIndexFloorRate');
var UnderlyingPaymentStubIndexFloorRateBuySide = require('../fields/UnderlyingPaymentStubIndexFloorRateBuySide');
var UnderlyingPaymentStubIndexFloorRateSellSide = require('../fields/UnderlyingPaymentStubIndexFloorRateSellSide');
var UnderlyingPaymentStubIndex2 = require('../fields/UnderlyingPaymentStubIndex2');
var UnderlyingPaymentStubIndex2Source = require('../fields/UnderlyingPaymentStubIndex2Source');
var UnderlyingPaymentStubIndex2CurvePeriod = require('../fields/UnderlyingPaymentStubIndex2CurvePeriod');
var UnderlyingPaymentStubIndex2CurveUnit = require('../fields/UnderlyingPaymentStubIndex2CurveUnit');
var UnderlyingPaymentStubIndex2RateMultiplier = require('../fields/UnderlyingPaymentStubIndex2RateMultiplier');
var UnderlyingPaymentStubIndex2RateSpread = require('../fields/UnderlyingPaymentStubIndex2RateSpread');
var UnderlyingPaymentStubIndex2RateSpreadPositionType = require('../fields/UnderlyingPaymentStubIndex2RateSpreadPositionType');
var UnderlyingPaymentStubIndex2RateTreatment = require('../fields/UnderlyingPaymentStubIndex2RateTreatment');
var UnderlyingPaymentStubIndex2CapRate = require('../fields/UnderlyingPaymentStubIndex2CapRate');
var UnderlyingPaymentStubIndex2FloorRate = require('../fields/UnderlyingPaymentStubIndex2FloorRate');

function UnderlyingPaymentStubGrp (underlyingPaymentStubGrp) {
  this.message = underlyingPaymentStubGrp;
}

/* group */

/* field */
UnderlyingPaymentStubGrp.prototype.underlyingPaymentStubType = function () {
  return new UnderlyingPaymentStubType(this.message.tags[UnderlyingPaymentStubType.Tag]);
};

/* field */
UnderlyingPaymentStubGrp.prototype.underlyingPaymentStubLength = function () {
  return new UnderlyingPaymentStubLength(this.message.tags[UnderlyingPaymentStubLength.Tag]);
};

/* field */
UnderlyingPaymentStubGrp.prototype.underlyingPaymentStubRate = function () {
  return new UnderlyingPaymentStubRate(this.message.tags[UnderlyingPaymentStubRate.Tag]);
};

/* field */
UnderlyingPaymentStubGrp.prototype.underlyingPaymentStubFixedAmount = function () {
  return new UnderlyingPaymentStubFixedAmount(this.message.tags[UnderlyingPaymentStubFixedAmount.Tag]);
};

/* field */
UnderlyingPaymentStubGrp.prototype.underlyingPaymentStubFixedCurrency = function () {
  return new UnderlyingPaymentStubFixedCurrency(this.message.tags[UnderlyingPaymentStubFixedCurrency.Tag]);
};

/* field */
UnderlyingPaymentStubGrp.prototype.underlyingPaymentStubIndex = function () {
  return new UnderlyingPaymentStubIndex(this.message.tags[UnderlyingPaymentStubIndex.Tag]);
};

/* field */
UnderlyingPaymentStubGrp.prototype.underlyingPaymentStubIndexSource = function () {
  return new UnderlyingPaymentStubIndexSource(this.message.tags[UnderlyingPaymentStubIndexSource.Tag]);
};

/* field */
UnderlyingPaymentStubGrp.prototype.underlyingPaymentStubIndexCurvePeriod = function () {
  return new UnderlyingPaymentStubIndexCurvePeriod(this.message.tags[UnderlyingPaymentStubIndexCurvePeriod.Tag]);
};

/* field */
UnderlyingPaymentStubGrp.prototype.underlyingPaymentStubIndexCurveUnit = function () {
  return new UnderlyingPaymentStubIndexCurveUnit(this.message.tags[UnderlyingPaymentStubIndexCurveUnit.Tag]);
};

/* field */
UnderlyingPaymentStubGrp.prototype.underlyingPaymentStubIndexRateMultiplier = function () {
  return new UnderlyingPaymentStubIndexRateMultiplier(this.message.tags[UnderlyingPaymentStubIndexRateMultiplier.Tag]);
};

/* field */
UnderlyingPaymentStubGrp.prototype.underlyingPaymentStubIndexRateSpread = function () {
  return new UnderlyingPaymentStubIndexRateSpread(this.message.tags[UnderlyingPaymentStubIndexRateSpread.Tag]);
};

/* field */
UnderlyingPaymentStubGrp.prototype.underlyingPaymentStubIndexRateSpreadPositionType = function () {
  return new UnderlyingPaymentStubIndexRateSpreadPositionType(this.message.tags[UnderlyingPaymentStubIndexRateSpreadPositionType.Tag]);
};

/* field */
UnderlyingPaymentStubGrp.prototype.underlyingPaymentStubIndexRateTreatment = function () {
  return new UnderlyingPaymentStubIndexRateTreatment(this.message.tags[UnderlyingPaymentStubIndexRateTreatment.Tag]);
};

/* field */
UnderlyingPaymentStubGrp.prototype.underlyingPaymentStubIndexCapRate = function () {
  return new UnderlyingPaymentStubIndexCapRate(this.message.tags[UnderlyingPaymentStubIndexCapRate.Tag]);
};

/* field */
UnderlyingPaymentStubGrp.prototype.underlyingPaymentStubIndexCapRateBuySide = function () {
  return new UnderlyingPaymentStubIndexCapRateBuySide(this.message.tags[UnderlyingPaymentStubIndexCapRateBuySide.Tag]);
};

/* field */
UnderlyingPaymentStubGrp.prototype.underlyingPaymentStubIndexCapRateSellSide = function () {
  return new UnderlyingPaymentStubIndexCapRateSellSide(this.message.tags[UnderlyingPaymentStubIndexCapRateSellSide.Tag]);
};

/* field */
UnderlyingPaymentStubGrp.prototype.underlyingPaymentStubIndexFloorRate = function () {
  return new UnderlyingPaymentStubIndexFloorRate(this.message.tags[UnderlyingPaymentStubIndexFloorRate.Tag]);
};

/* field */
UnderlyingPaymentStubGrp.prototype.underlyingPaymentStubIndexFloorRateBuySide = function () {
  return new UnderlyingPaymentStubIndexFloorRateBuySide(this.message.tags[UnderlyingPaymentStubIndexFloorRateBuySide.Tag]);
};

/* field */
UnderlyingPaymentStubGrp.prototype.underlyingPaymentStubIndexFloorRateSellSide = function () {
  return new UnderlyingPaymentStubIndexFloorRateSellSide(this.message.tags[UnderlyingPaymentStubIndexFloorRateSellSide.Tag]);
};

/* field */
UnderlyingPaymentStubGrp.prototype.underlyingPaymentStubIndex2 = function () {
  return new UnderlyingPaymentStubIndex2(this.message.tags[UnderlyingPaymentStubIndex2.Tag]);
};

/* field */
UnderlyingPaymentStubGrp.prototype.underlyingPaymentStubIndex2Source = function () {
  return new UnderlyingPaymentStubIndex2Source(this.message.tags[UnderlyingPaymentStubIndex2Source.Tag]);
};

/* field */
UnderlyingPaymentStubGrp.prototype.underlyingPaymentStubIndex2CurvePeriod = function () {
  return new UnderlyingPaymentStubIndex2CurvePeriod(this.message.tags[UnderlyingPaymentStubIndex2CurvePeriod.Tag]);
};

/* field */
UnderlyingPaymentStubGrp.prototype.underlyingPaymentStubIndex2CurveUnit = function () {
  return new UnderlyingPaymentStubIndex2CurveUnit(this.message.tags[UnderlyingPaymentStubIndex2CurveUnit.Tag]);
};

/* field */
UnderlyingPaymentStubGrp.prototype.underlyingPaymentStubIndex2RateMultiplier = function () {
  return new UnderlyingPaymentStubIndex2RateMultiplier(this.message.tags[UnderlyingPaymentStubIndex2RateMultiplier.Tag]);
};

/* field */
UnderlyingPaymentStubGrp.prototype.underlyingPaymentStubIndex2RateSpread = function () {
  return new UnderlyingPaymentStubIndex2RateSpread(this.message.tags[UnderlyingPaymentStubIndex2RateSpread.Tag]);
};

/* field */
UnderlyingPaymentStubGrp.prototype.underlyingPaymentStubIndex2RateSpreadPositionType = function () {
  return new UnderlyingPaymentStubIndex2RateSpreadPositionType(this.message.tags[UnderlyingPaymentStubIndex2RateSpreadPositionType.Tag]);
};

/* field */
UnderlyingPaymentStubGrp.prototype.underlyingPaymentStubIndex2RateTreatment = function () {
  return new UnderlyingPaymentStubIndex2RateTreatment(this.message.tags[UnderlyingPaymentStubIndex2RateTreatment.Tag]);
};

/* field */
UnderlyingPaymentStubGrp.prototype.underlyingPaymentStubIndex2CapRate = function () {
  return new UnderlyingPaymentStubIndex2CapRate(this.message.tags[UnderlyingPaymentStubIndex2CapRate.Tag]);
};

/* field */
UnderlyingPaymentStubGrp.prototype.underlyingPaymentStubIndex2FloorRate = function () {
  return new UnderlyingPaymentStubIndex2FloorRate(this.message.tags[UnderlyingPaymentStubIndex2FloorRate.Tag]);
};

/* end group */

UnderlyingPaymentStubGrp.Tag = '40708';

module.exports = UnderlyingPaymentStubGrp;