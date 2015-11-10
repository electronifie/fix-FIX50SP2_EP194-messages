var invert = require('invert-obj');

function DateRollConvention (dateRollConvention) {
  this.message = dateRollConvention;
}

DateRollConvention.prototype.value = function () {
  return this.message;
};


DateRollConvention.Keys = {
  '_1ST_DAY_OF_THE_MONTH': '1',
  '_2ND_DAY_OF_THE_MONTH': '2',
  '_3RD_DAY_OF_THE_MONTH': '3',
  '_4TH_DAY_OF_THE_MONTH': '4',
  '_5TH_DAY_OF_THE_MONTH': '5',
  '_6THD_DAY_OF_THE_MONTH': '6',
  '_7TH_DAY_OF_THE_MONTH': '7',
  '_8TH_DAY_OF_THE_MONTH': '8',
  '_9TH_DAY_OF_THE_MONTH': '9',
  '_10TH_DAY_OF_THE_MONTH': '10',
  '_11TH_DAY_OF_THE_MONTH': '11',
  '_12TH_DAY_OF_THE_MONTH': '12',
  '_13TH_DAY_OF_THE_MONTH': '13',
  '_14TH_DAY_OF_THE_MONTH': '14',
  '_15TH_DAY_OF_THE_MONTH': '15',
  '_16TH_DAY_OF_THE_MONTH': '16',
  '_17TH_DAY_OF_THE_MONTH': '17',
  '_18TH_DAY_OF_THE_MONTH': '18',
  '_19TH_DAY_OF_THE_MONTH': '19',
  '_20TH_DAY_OF_THE_MONTH': '20',
  '_21ST_DAY_OF_THE_MONTH': '21',
  '_22ND_DAY_OF_THE_MONTH': '22',
  '_23RD_DAY_OF_THE_MONTH': '23',
  '_24TH_DAY_OF_THE_MONTH': '24',
  '_25TH_DAY_OF_THE_MONTH': '25',
  '_26TH_DAY_OF_THE_MONTH': '26',
  '_27TH_DAY_OF_THE_MONTH': '27',
  '_28TH_DAY_OF_THE_MONTH': '28',
  '_29TH_DAY_OF_THE_MONTH': '29',
  '_30TH_DAY_OF_THE_MONTH': '30',
  'THE_END_OF_THE_MONTH_': 'EOM',
  'THE_FLOATING_RATE_NOTE_CONVENTION_OR_EURODOLLAR_CONVENTION_': 'FRN',
  'THE_INTERNATIONAL_MONEY_MARKET_SETTLEMENT_DATE_I_E_THE_3RD_WEDNESDAY_OF_THE_MONTH_': 'IMM',
  'THE_LAST_TRADING_DAY_EXPIRATION_DAY_OF_THE_CANADIAN_DERIVATIVES_EXCHANGE_': 'IMMCAD',
  'THE_LAST_TRADING_DAY_OF_THE_SYDNEY_FUTURES_EXCHANGE_AUSTRALIAN_90_DAY_BANK_ACCEPTED_BILL_FUTURES_CONTRACT_': 'IMMAUD',
  'THE_LAST_TRADING_DAY_OF_THE_SYDNEY_FUTURES_EXCHANGE_NEW_ZEALAND_90_DAY_BANK_BILL_FUTURES_CONTRACT_': 'IMMNZD',
  'THE_SYDNEY_FUTURES_EXCHANGE_90_DAY_BANK_ACCEPTED_BILL_FUTURES_SETTLEMENT_DATES_': 'SFE',
  'NO_ADJUSTMENT': 'NONE',
  'THE_13_WEEK_AND_26_WEEK_U_S_TREASURY_BILL_AUCTION_DATES_': 'TBILL',
  'MONDAY': 'MON',
  'TUESDAY': 'TUE',
  'WEDNESDAY': 'WED',
  'THURSDAY': 'THU',
  'FRIDAY': 'FRI',
  'SATURDAY': 'SAT',
  'SUNDAY': 'SUN',
};

DateRollConvention.Tag = '40922';

DateRollConvention.Type = 'STRING';

DateRollConvention.Values = invert(DateRollConvention.Keys);

module.exports = DateRollConvention;