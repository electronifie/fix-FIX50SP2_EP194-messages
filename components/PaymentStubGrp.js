var NoPaymentStubs = require('../fields/NoPaymentStubs');
var PaymentStubType = require('../fields/PaymentStubType');
var PaymentStubLength = require('../fields/PaymentStubLength');
var PaymentStubRate = require('../fields/PaymentStubRate');
var PaymentStubFixedAmount = require('../fields/PaymentStubFixedAmount');
var PaymentStubFixedCurrency = require('../fields/PaymentStubFixedCurrency');
var PaymentStubIndex = require('../fields/PaymentStubIndex');
var PaymentStubIndexSource = require('../fields/PaymentStubIndexSource');
var PaymentStubIndexCurvePeriod = require('../fields/PaymentStubIndexCurvePeriod');
var PaymentStubIndexCurveUnit = require('../fields/PaymentStubIndexCurveUnit');
var PaymentStubIndexRateMultiplier = require('../fields/PaymentStubIndexRateMultiplier');
var PaymentStubIndexRateSpread = require('../fields/PaymentStubIndexRateSpread');
var PaymentStubIndexRateSpreadPositionType = require('../fields/PaymentStubIndexRateSpreadPositionType');
var PaymentStubIndexRateTreatment = require('../fields/PaymentStubIndexRateTreatment');
var PaymentStubIndexCapRate = require('../fields/PaymentStubIndexCapRate');
var PaymentStubIndexCapRateBuySide = require('../fields/PaymentStubIndexCapRateBuySide');
var PaymentStubIndexCapRateSellSide = require('../fields/PaymentStubIndexCapRateSellSide');
var PaymentStubIndexFloorRate = require('../fields/PaymentStubIndexFloorRate');
var PaymentStubIndexFloorRateBuySide = require('../fields/PaymentStubIndexFloorRateBuySide');
var PaymentStubIndexFloorRateSellSide = require('../fields/PaymentStubIndexFloorRateSellSide');
var PaymentStubIndex2 = require('../fields/PaymentStubIndex2');
var PaymentStubIndex2Source = require('../fields/PaymentStubIndex2Source');
var PaymentStubIndex2CurvePeriod = require('../fields/PaymentStubIndex2CurvePeriod');
var PaymentStubIndex2CurveUnit = require('../fields/PaymentStubIndex2CurveUnit');
var PaymentStubIndex2RateMultiplier = require('../fields/PaymentStubIndex2RateMultiplier');
var PaymentStubIndex2RateSpread = require('../fields/PaymentStubIndex2RateSpread');
var PaymentStubIndex2RateSpreadPositionType = require('../fields/PaymentStubIndex2RateSpreadPositionType');
var PaymentStubIndex2RateTreatment = require('../fields/PaymentStubIndex2RateTreatment');
var PaymentStubIndex2CapRate = require('../fields/PaymentStubIndex2CapRate');
var PaymentStubIndex2FloorRate = require('../fields/PaymentStubIndex2FloorRate');

function PaymentStubGrp (paymentStubGrp) {
  this.message = paymentStubGrp;
}

/* group */

/* field */
PaymentStubGrp.prototype.paymentStubType = function () {
  return new PaymentStubType(this.message.tags[PaymentStubType.Tag]);
};

/* field */
PaymentStubGrp.prototype.paymentStubLength = function () {
  return new PaymentStubLength(this.message.tags[PaymentStubLength.Tag]);
};

/* field */
PaymentStubGrp.prototype.paymentStubRate = function () {
  return new PaymentStubRate(this.message.tags[PaymentStubRate.Tag]);
};

/* field */
PaymentStubGrp.prototype.paymentStubFixedAmount = function () {
  return new PaymentStubFixedAmount(this.message.tags[PaymentStubFixedAmount.Tag]);
};

/* field */
PaymentStubGrp.prototype.paymentStubFixedCurrency = function () {
  return new PaymentStubFixedCurrency(this.message.tags[PaymentStubFixedCurrency.Tag]);
};

/* field */
PaymentStubGrp.prototype.paymentStubIndex = function () {
  return new PaymentStubIndex(this.message.tags[PaymentStubIndex.Tag]);
};

/* field */
PaymentStubGrp.prototype.paymentStubIndexSource = function () {
  return new PaymentStubIndexSource(this.message.tags[PaymentStubIndexSource.Tag]);
};

/* field */
PaymentStubGrp.prototype.paymentStubIndexCurvePeriod = function () {
  return new PaymentStubIndexCurvePeriod(this.message.tags[PaymentStubIndexCurvePeriod.Tag]);
};

/* field */
PaymentStubGrp.prototype.paymentStubIndexCurveUnit = function () {
  return new PaymentStubIndexCurveUnit(this.message.tags[PaymentStubIndexCurveUnit.Tag]);
};

/* field */
PaymentStubGrp.prototype.paymentStubIndexRateMultiplier = function () {
  return new PaymentStubIndexRateMultiplier(this.message.tags[PaymentStubIndexRateMultiplier.Tag]);
};

/* field */
PaymentStubGrp.prototype.paymentStubIndexRateSpread = function () {
  return new PaymentStubIndexRateSpread(this.message.tags[PaymentStubIndexRateSpread.Tag]);
};

/* field */
PaymentStubGrp.prototype.paymentStubIndexRateSpreadPositionType = function () {
  return new PaymentStubIndexRateSpreadPositionType(this.message.tags[PaymentStubIndexRateSpreadPositionType.Tag]);
};

/* field */
PaymentStubGrp.prototype.paymentStubIndexRateTreatment = function () {
  return new PaymentStubIndexRateTreatment(this.message.tags[PaymentStubIndexRateTreatment.Tag]);
};

/* field */
PaymentStubGrp.prototype.paymentStubIndexCapRate = function () {
  return new PaymentStubIndexCapRate(this.message.tags[PaymentStubIndexCapRate.Tag]);
};

/* field */
PaymentStubGrp.prototype.paymentStubIndexCapRateBuySide = function () {
  return new PaymentStubIndexCapRateBuySide(this.message.tags[PaymentStubIndexCapRateBuySide.Tag]);
};

/* field */
PaymentStubGrp.prototype.paymentStubIndexCapRateSellSide = function () {
  return new PaymentStubIndexCapRateSellSide(this.message.tags[PaymentStubIndexCapRateSellSide.Tag]);
};

/* field */
PaymentStubGrp.prototype.paymentStubIndexFloorRate = function () {
  return new PaymentStubIndexFloorRate(this.message.tags[PaymentStubIndexFloorRate.Tag]);
};

/* field */
PaymentStubGrp.prototype.paymentStubIndexFloorRateBuySide = function () {
  return new PaymentStubIndexFloorRateBuySide(this.message.tags[PaymentStubIndexFloorRateBuySide.Tag]);
};

/* field */
PaymentStubGrp.prototype.paymentStubIndexFloorRateSellSide = function () {
  return new PaymentStubIndexFloorRateSellSide(this.message.tags[PaymentStubIndexFloorRateSellSide.Tag]);
};

/* field */
PaymentStubGrp.prototype.paymentStubIndex2 = function () {
  return new PaymentStubIndex2(this.message.tags[PaymentStubIndex2.Tag]);
};

/* field */
PaymentStubGrp.prototype.paymentStubIndex2Source = function () {
  return new PaymentStubIndex2Source(this.message.tags[PaymentStubIndex2Source.Tag]);
};

/* field */
PaymentStubGrp.prototype.paymentStubIndex2CurvePeriod = function () {
  return new PaymentStubIndex2CurvePeriod(this.message.tags[PaymentStubIndex2CurvePeriod.Tag]);
};

/* field */
PaymentStubGrp.prototype.paymentStubIndex2CurveUnit = function () {
  return new PaymentStubIndex2CurveUnit(this.message.tags[PaymentStubIndex2CurveUnit.Tag]);
};

/* field */
PaymentStubGrp.prototype.paymentStubIndex2RateMultiplier = function () {
  return new PaymentStubIndex2RateMultiplier(this.message.tags[PaymentStubIndex2RateMultiplier.Tag]);
};

/* field */
PaymentStubGrp.prototype.paymentStubIndex2RateSpread = function () {
  return new PaymentStubIndex2RateSpread(this.message.tags[PaymentStubIndex2RateSpread.Tag]);
};

/* field */
PaymentStubGrp.prototype.paymentStubIndex2RateSpreadPositionType = function () {
  return new PaymentStubIndex2RateSpreadPositionType(this.message.tags[PaymentStubIndex2RateSpreadPositionType.Tag]);
};

/* field */
PaymentStubGrp.prototype.paymentStubIndex2RateTreatment = function () {
  return new PaymentStubIndex2RateTreatment(this.message.tags[PaymentStubIndex2RateTreatment.Tag]);
};

/* field */
PaymentStubGrp.prototype.paymentStubIndex2CapRate = function () {
  return new PaymentStubIndex2CapRate(this.message.tags[PaymentStubIndex2CapRate.Tag]);
};

/* field */
PaymentStubGrp.prototype.paymentStubIndex2FloorRate = function () {
  return new PaymentStubIndex2FloorRate(this.message.tags[PaymentStubIndex2FloorRate.Tag]);
};

/* end group */

PaymentStubGrp.Tag = '40872';

module.exports = PaymentStubGrp;