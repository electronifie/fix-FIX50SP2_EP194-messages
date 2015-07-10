var invert = require('invert-obj');

function InstrAttribType (instrAttribType) {
  this.message = instrAttribType;
}

InstrAttribType.prototype.value = function () {
  return this.message;
};


InstrAttribType.Keys = {
  FLAT: '1',
  ZERO_COUPON: '2',
  INTEREST_BEARING: '3',
  NO_PERIODIC_PAYMENTS: '4',
  VARIABLE_RATE: '5',
  LESS_FEE_FOR_PUT: '6',
  STEPPED_COUPON: '7',
  COUPON_PERIOD: '8',
  WHEN_AND_IF_ISSUED: '9',
  ORIGINAL_ISSUE_DISCOUNT: '10',
  CALLABLE_PUTTABLE: '11',
  ESCROWED_TO_MATURITY: '12',
  ESCROWED_TO_REDEMPTION_DATE_CALLABLE: '13',
  PRE_REFUNDED: '14',
  IN_DEFAULT: '15',
  UNRATED: '16',
  TAXABLE: '17',
  INDEXED: '18',
  SUBJECT_TO_ALTERNATIVE_MINIMUM_TAX: '19',
  ORIGINAL_ISSUE_DISCOUNT_PRICE: '20',
  CALLABLE_BELOW_MATURITY_VALUE: '21',
  CALLABLE_WITHOUT_NOTICE_BY_MAIL_TO_HOLDER_UNLESS_REGISTERED: '22',
  PRICE_TICK_RULES_FOR_SECURITY: '23',
  TRADE_TYPE_ELIGIBILITY_DETAILS_FOR_SECURITY: '24',
  INSTRUMENT_DENOMINATOR: '25',
  INSTRUMENT_NUMERATOR: '26',
  INSTRUMENT_PRICE_PRECISION: '27',
  INSTRUMENT_STRIKE_PRICE: '28',
  TRADEABLE_INDICATOR: '29',
  INSTRUMENT_IS_ELIGIBLE_TO_ACCEPT_ANONYMOUS_ORDERS: '30',
  MINIMUM_GUARANTEED_FILL_VOLUME: '31',
  MINIMUM_GUARANTEED_FILL_STATUS: '32',
  TRADE_AT_SETTLEMENT_ELIGIBILITY: '33',
  TEST_INSTRUMENT: '34',
  DUMMY_INSTRUMENT: '35',
  NEGATIVE_SETTLEMENT_PRICE_ELIGIBILITY: '36',
  NEGATIVE_STRIKE_PRICE_ELIGIBILITY: '37',
  US_STANDARD_CONTRACT_INDICATOR: '38',
  TEXT: '99',
};

InstrAttribType.Tag = '871';

InstrAttribType.Type = 'INT';

InstrAttribType.Values = invert(InstrAttribType.Keys);

module.exports = InstrAttribType;