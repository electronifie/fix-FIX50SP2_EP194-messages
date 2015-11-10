var invert = require('invert-obj');

function TrdSubType (trdSubType) {
  this.message = trdSubType;
}

TrdSubType.prototype.value = function () {
  return this.message;
};


TrdSubType.Keys = {
  'CMTA': '0',
  'INTERNAL_TRANSFER_OR_ADJUSTMENT': '1',
  'EXTERNAL_TRANSFER_OR_TRANSFER_OF_ACCOUNT': '2',
  'REJECT_FOR_SUBMITTING_SIDE': '3',
  'ADVISORY_FOR_CONTRA_SIDE': '4',
  'OFFSET_DUE_TO_AN_ALLOCATION': '5',
  'ONSET_DUE_TO_AN_ALLOCATION': '6',
  'DIFFERENTIAL_SPREAD': '7',
  'IMPLIED_SPREAD_LEG_EXECUTED_AGAINST_AN_OUTRIGHT': '8',
  'TRANSACTION_FROM_EXERCISE': '9',
  'TRANSACTION_FROM_ASSIGNMENT': '10',
  'ACATS': '11',
  'AI': '14',
  'B': '15',
  'K': '16',
  'LC': '17',
  'M': '18',
  'N': '19',
  'NM_TRANSACTION_WHERE_EXCHANGE_HAS_GRANTED_PERMISSION_FOR_NON_PUBLICATION_II_IDB_IS_REPORTING_AS_SELLER_III_SUBMITTING_A_TRANSACTION_REPORT_TO_THE_EXCHANGE_WHERE_THE_TRANSACTION_REPORT_IS_NOT_ALSO_A_TRADE_REPORT_': '20',
  'NR': '21',
  'P': '22',
  'PA': '23',
  'PC': '24',
  'PN': '25',
  'R_OR': '26',
  'RO': '27',
  'RT': '28',
  'SW': '29',
  'T': '30',
  'WN': '31',
  'WT': '32',
  'OFF_HOURS_TRADE': '33',
  'ON_HOURS_TRADE': '34',
  'OTC_QUOTE': '35',
  'CONVERTED_SWAP': '36',
  'CROSSED_TRADE': '37',
  'INTERIM_PROTECTED_TRADE': '38',
  'LARGE_IN_SCALE': '39',
  'WASH_TRADE': '40',
  'TRADE_AT_SETTLEMENT': '41',
  'AUCTION_TRADE': '42',
  'TRADE_AT_MARKER': '43',
  'DEFAULT': '44',
  'RESTRUCTURING': '45',
  'MERGER': '46',
  'SPIN_OFF': '47',
};

TrdSubType.Tag = '829';

TrdSubType.Type = 'INT';

TrdSubType.Values = invert(TrdSubType.Keys);

module.exports = TrdSubType;