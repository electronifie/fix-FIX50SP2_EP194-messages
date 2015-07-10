var invert = require('invert-obj');

function PaymentScheduleType (paymentScheduleType) {
  this.message = paymentScheduleType;
}

PaymentScheduleType.prototype.value = function () {
  return this.message;
};


PaymentScheduleType.Keys = {
  NOTIONAL: '0',
  CASH_FLOW: '1',
  FX_LINKED_NOTIONAL: '2',
  FIXED_RATE: '3',
  FUTURE_VALUE_NOTIONAL: '4',
  KNOWN_AMOUNT: '5',
  FLOATING_RATE_MULTIPLIER: '6',
  SPREAD: '7',
  CAP_RATE: '8',
  FLOOR_RATE: '9',
  NON_DELIVERABLE_SETTLEMENT_PAYMENT_DATES: '10',
  NON_DELIVERABLE_SETTLEMENT_CALCULATION_DATES: '11',
  NON_DELIVERABLE_FIXING_DATES_: '12',
  SETTLEMENT_PERIOD_NOTIONAL: '13',
  SETTLEMENT_PERIOD_PRICE: '14',
  CALCULATION_PERIOD: '15',
};

PaymentScheduleType.Tag = '40829';

PaymentScheduleType.Type = 'INT';

PaymentScheduleType.Values = invert(PaymentScheduleType.Keys);

module.exports = PaymentScheduleType;