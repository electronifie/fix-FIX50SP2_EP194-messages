var invert = require('invert-obj');

function MarginAmtType (marginAmtType) {
  this.message = marginAmtType;
}

MarginAmtType.prototype.value = function () {
  return this.message;
};


MarginAmtType.Keys = {
  'ADDITIONAL_MARGIN': '1',
  'ADJUSTED_MARGIN': '2',
  'UNADJUSTED_MARGIN': '3',
  'BINARY_ADD_ON_AMOUNT': '4',
  'CASH_BALANCE_AMOUNT': '5',
  'CONCENTRATION_MARGIN': '6',
  'CORE_MARGIN': '7',
  'DELIVERY_MARGIN': '8',
  'DISCRETIONARY_MARGIN': '9',
  'FUTURES_SPREAD_MARGIN': '10',
  'INITIAL_MARGIN': '11',
  'LIQUIDATING_MARGIN': '12',
  'MARGIN_CALL_AMOUNT': '13',
  'MARGIN_DEFICIT_AMOUNT': '14',
  'MARGIN_EXCESS_AMOUNT': '15',
  'OPTION_PREMIUM_AMOUNT': '16',
  'PREMIUM_MARGIN': '17',
  'RESERVE_MARGIN': '18',
  'SECURITY_COLLATERAL_AMOUNT': '19',
  'STRESS_TEST_ADD_ON_AMOUNT': '20',
  'SUPER_MARGIN': '21',
  'TOTAL_MARGIN': '22',
  'VARIATION_MARGIN': '23',
  'SECONDARY_VARIATION_MARGIN': '24',
  'ROLLED_UP_MARGIN_DEFICIT': '25',
  'SPREAD_RESPONSE_MARGIN': '26',
  'SYSTEMIC_RISK_MARGIN': '27',
  'CURVE_RISK_MARGIN': '28',
  'INDEX_SPREAD_RISK_MARGIN': '29',
  'SECTOR_RISK_MARGIN': '30',
  'JUMP_TO_DEFAULT_RISK_MARGIN': '31',
  'BASIS_RISK_MARGIN': '32',
  'INTEREST_RATE_RISK_MARGIN': '33',
  'JUMP_TO_HEALTH_RISK_MARGIN': '34',
  'OTHER_RISK_MARGIN': '35',
};

MarginAmtType.Tag = '1644';

MarginAmtType.Type = 'INT';

MarginAmtType.Values = invert(MarginAmtType.Keys);

module.exports = MarginAmtType;