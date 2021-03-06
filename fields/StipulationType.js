var invert = require('invert-obj');

function StipulationType (stipulationType) {
  this.message = stipulationType;
}

StipulationType.prototype.value = function () {
  return this.message;
};


StipulationType.Keys = {
  'ALTERNATIVE_MINIMUM_TAX': 'AMT',
  'ABSOLUTE_PREPAYMENT_SPEED': 'ABS',
  'INCURRED_RECOVERY': 'INCURRCVY',
  'AUTO_REINVESTMENT_AT_RATE_OR_BETTER': 'AUTOREINV',
  'CONSTANT_PREPAYMENT_PENALTY': 'CPP',
  'ADDITIONAL_TERM': 'ADDTRM',
  'BANK_QUALIFIED': 'BANKQUAL',
  'CONSTANT_PREPAYMENT_RATE': 'CPR',
  'MODIFIED_EQUITY_DELIVERY': 'MODEQTYDLVY',
  'BARGAIN_CONDITIONS': 'BGNCON',
  'CONSTANT_PREPAYMENT_YIELD': 'CPY',
  'NO_REFERENCE_OBLIGATION': 'NOREFOBLIG',
  'COUPON_RANGE': 'COUPON',
  'FINAL_CPR_OF_HOME_EQUITY_PREPAYMENT_CURVE': 'HEP',
  'UNKNOWN_REFERENCE_OBLIGATION': 'UNKREFOBLIG',
  'ISO_CURRENCY_CODE': 'CURRENCY',
  'PERCENT_OF_MANUFACTURED_HOUSING_PREPAYMENT_CURVE': 'MHP',
  'ALL_GUARANTEES': 'ALLGUARANTEES',
  'CUSTOM_START_END_DATE': 'CUSTOMDATE',
  'MONTHLY_PREPAYMENT_RATE': 'MPR',
  'REFERENCE_PRICE': 'REFPX',
  'GEOGRAPHICS_AND_RANGE': 'GEOG',
  'PERCENT_OF_PROSPECTUS_PREPAYMENT_CURVE': 'PPC',
  'REFERENCE_POLICY': 'REFPOLICY',
  'VALUATION_DISCOUNT': 'HAIRCUT',
  'PERCENT_OF_BMA_PREPAYMENT_CURVE': 'PSA',
  'SECURED_LIST': 'SECRDLIST',
  'INSURED': 'INSURED',
  'SINGLE_MONTHLY_MORTALITY': 'SMM',
  'YEAR_OR_YEAR_MONTH_OF_ISSUE': 'ISSUE',
  'ISSUERS_TICKER': 'ISSUER',
  'ISSUE_SIZE_RANGE': 'ISSUESIZE',
  'LOOKBACK_DAYS': 'LOOKBACK',
  'EXPLICIT_LOT_IDENTIFIER': 'LOT',
  'LOT_VARIANCE': 'LOTVAR',
  'MATURITY_YEAR_AND_MONTH': 'MAT',
  'MATURITY_RANGE': 'MATURITY',
  'MAXIMUM_SUBSTITUTIONS': 'MAXSUBS',
  'MINIMUM_DENOMINATION': 'MINDNOM',
  'MINIMUM_INCREMENT': 'MININCR',
  'MINIMUM_QUANTITY': 'MINQTY',
  'PAYMENT_FREQUENCY_CALENDAR': 'PAYFREQ',
  'NUMBER_OF_PIECES': 'PIECES',
  'POOLS_MAXIMUM': 'PMAX',
  'POOLS_PER_LOT': 'PPL',
  'POOLS_PER_MILLION': 'PPM',
  'POOLS_PER_TRADE': 'PPT',
  'PRICE_RANGE': 'PRICE',
  'PRICING_FREQUENCY': 'PRICEFREQ',
  'PRODUCTION_YEAR': 'PROD',
  'CALL_PROTECTION': 'PROTECT',
  'PURPOSE': 'PURPOSE',
  'BENCHMARK_PRICE_SOURCE': 'PXSOURCE',
  'RATING_SOURCE_AND_RANGE': 'RATING',
  'TYPE_OF_REDEMPTION_VALUES_ARE_NONCALLABLE_PREFUNDED_ESCROWEDTOMATURITY_PUTABLE_CONVERTIBLE': 'REDEMPTION',
  'RESTRICTED': 'RESTRICTED',
  'MARKET_SECTOR': 'SECTOR',
  'SECURITY_TYPE_INCLUDED_OR_EXCLUDED': 'SECTYPE',
  'STRUCTURE': 'STRUCT',
  'SUBSTITUTIONS_FREQUENCY': 'SUBSFREQ',
  'SUBSTITUTIONS_LEFT': 'SUBSLEFT',
  'FREEFORM_TEXT': 'TEXT',
  'TRADE_VARIANCE': 'TRDVAR',
  'WEIGHTED_AVERAGE_COUPON_VALUE_IN_PERCENT': 'WAC',
  'WEIGHTED_AVERAGE_LIFE_COUPON_VALUE_IN_PERCENT': 'WAL',
  'WEIGHTED_AVERAGE_LOAN_AGE_VALUE_IN_MONTHS': 'WALA',
  'WEIGHTED_AVERAGE_MATURITY_VALUE_IN_MONTHS': 'WAM',
  'WHOLE_POOL': 'WHOLE',
  'YIELD_RANGE': 'YIELD',
  'AVERAGE_FICO_SCORE': 'AVFICO',
  'ORIGINAL_AMOUNT': 'ORIGAMT',
  'AVERAGE_LOAN_SIZE': 'AVSIZE',
  'POOL_EFFECTIVE_DATE': 'POOLEFFDT',
  'MAXIMUM_LOAN_BALANCE': 'MAXBAL',
  'POOL_INITIAL_FACTOR': 'POOLINITFCTR',
  'POOL_IDENTIFIER': 'POOL',
  'TRANCHE_IDENTIFIER': 'TRANCHE',
  'TYPE_OF_ROLL_TRADE': 'ROLLTYPE',
  'SUBSTITUTION': 'SUBSTITUTION',
  'REFERENCE_TO_ROLLING_OR_CLOSING_TRADE': 'REFTRADE',
  'PRINCIPAL_OF_ROLLING_OR_CLOSING_TRADE': 'REFPRIN',
  'INTEREST_OF_ROLLING_OR_CLOSING_TRADE': 'REFINT',
  'AVAILABLE_OFFER_QUANTITY_TO_BE_SHOWN_TO_THE_STREET': 'AVAILQTY',
  'BROKERS_SALES_CREDIT': 'BROKERCREDIT',
  'OFFER_PRICE_TO_BE_SHOWN_TO_INTERNAL_BROKERS': 'INTERNALPX',
  'OFFER_QUANTITY_TO_BE_SHOWN_TO_INTERNAL_BROKERS': 'INTERNALQTY',
  'THE_MINIMUM_RESIDUAL_OFFER_QUANTITY': 'LEAVEQTY',
  'MAXIMUM_ORDER_SIZE': 'MAXORDQTY',
  'ORDER_QUANTITY_INCREMENT': 'ORDRINCR',
  'PRIMARY_OR_SECONDARY_MARKET_INDICATOR': 'PRIMARY',
  'BROKER_SALES_CREDIT_OVERRIDE': 'SALESCREDITOVR',
  'TRADERS_CREDIT': 'TRADERCREDIT',
  'DISCOUNT_RATE': 'DISCOUNT',
  'YIELD_TO_MATURITY': 'YTM',
};

StipulationType.Tag = '233';

StipulationType.Type = 'STRING';

StipulationType.Values = invert(StipulationType.Keys);

module.exports = StipulationType;