var NoComplexEventCreditEvents = require('../fields/NoComplexEventCreditEvents');
var ComplexEventCreditEventQualifierGrp = require('../components/ComplexEventCreditEventQualifierGrp');
var ComplexEventCreditEventType = require('../fields/ComplexEventCreditEventType');
var ComplexEventCreditEventValue = require('../fields/ComplexEventCreditEventValue');
var ComplexEventCreditEventCurrency = require('../fields/ComplexEventCreditEventCurrency');
var ComplexEventCreditEventPeriod = require('../fields/ComplexEventCreditEventPeriod');
var ComplexEventCreditEventUnit = require('../fields/ComplexEventCreditEventUnit');
var ComplexEventCreditEventDayType = require('../fields/ComplexEventCreditEventDayType');
var ComplexEventCreditEventRateSource = require('../fields/ComplexEventCreditEventRateSource');

function ComplexEventCreditEventGrp (complexEventCreditEventGrp) {
  this.message = complexEventCreditEventGrp;
}

/* group */

/* component */
ComplexEventCreditEventGrp.prototype.complexEventCreditEventQualifierGrp = function () {
  return this.message.groups[ComplexEventCreditEventQualifierGrp.Tag]
    .map(function (complexEventCreditEventQualifierGrp) {
      return new ComplexEventCreditEventQualifierGrp(complexEventCreditEventQualifierGrp);
  });
};

/* field */
ComplexEventCreditEventGrp.prototype.complexEventCreditEventType = function () {
  return new ComplexEventCreditEventType(this.message.tags[ComplexEventCreditEventType.Tag]);
};

/* field */
ComplexEventCreditEventGrp.prototype.complexEventCreditEventValue = function () {
  return new ComplexEventCreditEventValue(this.message.tags[ComplexEventCreditEventValue.Tag]);
};

/* field */
ComplexEventCreditEventGrp.prototype.complexEventCreditEventCurrency = function () {
  return new ComplexEventCreditEventCurrency(this.message.tags[ComplexEventCreditEventCurrency.Tag]);
};

/* field */
ComplexEventCreditEventGrp.prototype.complexEventCreditEventPeriod = function () {
  return new ComplexEventCreditEventPeriod(this.message.tags[ComplexEventCreditEventPeriod.Tag]);
};

/* field */
ComplexEventCreditEventGrp.prototype.complexEventCreditEventUnit = function () {
  return new ComplexEventCreditEventUnit(this.message.tags[ComplexEventCreditEventUnit.Tag]);
};

/* field */
ComplexEventCreditEventGrp.prototype.complexEventCreditEventDayType = function () {
  return new ComplexEventCreditEventDayType(this.message.tags[ComplexEventCreditEventDayType.Tag]);
};

/* field */
ComplexEventCreditEventGrp.prototype.complexEventCreditEventRateSource = function () {
  return new ComplexEventCreditEventRateSource(this.message.tags[ComplexEventCreditEventRateSource.Tag]);
};

/* end group */

ComplexEventCreditEventGrp.Tag = '40997';

module.exports = ComplexEventCreditEventGrp;