var invert = require('invert-obj');

function PosType (posType) {
  this.message = posType;
}

PosType.prototype.value = function () {
  return this.message;
};


PosType.Keys = {
  'ALLOCATION_TRADE_QTY': 'ALC',
  'OPTION_ASSIGNMENT': 'AS',
  'AS_OF_TRADE_QTY': 'ASF',
  'DELIVERY_QTY': 'DLV',
  'ELECTRONIC_TRADE_QTY': 'ETR',
  'OPTION_EXERCISE_QTY': 'EX',
  'END_OF_DAY_QTY': 'FIN',
  'INTRA_SPREAD_QTY': 'IAS',
  'INTER_SPREAD_QTY': 'IES',
  'ADJUSTMENT_QTY': 'PA',
  'PIT_TRADE_QTY': 'PIT',
  'START_OF_DAY_QTY': 'SOD',
  'INTEGRAL_SPLIT': 'SPL',
  'TRANSACTION_FROM_ASSIGNMENT': 'TA',
  'TOTAL_TRANSACTION_QTY': 'TOT',
  'TRANSACTION_QUANTITY': 'TQ',
  'TRANSFER_TRADE_QTY': 'TRF',
  'TRANSACTION_FROM_EXERCISE': 'TX',
  'CROSS_MARGIN_QTY': 'XM',
  'RECEIVE_QUANTITY': 'RCV',
  'CORPORATE_ACTION_ADJUSTMENT': 'CAA',
  'DELIVERY_NOTICE_QTY': 'DN',
  'EXCHANGE_FOR_PHYSICAL_QTY': 'EP',
  'PRIVATELY_NEGOTIATED_TRADE_QTY': 'PNTN',
  'NET_DELTA_QTY': 'DLT',
  'CREDIT_EVENT_ADJUSTMENT': 'CEA',
  'SUCCESSION_EVENT_ADJUSTMENT': 'SEA',
  'NET_QTY': 'NET',
  'GROSS_QTY': 'GRS',
  'INTRADAY_QTY': 'ITD',
  'GROSS_NON_DELTA_ADJUSTED_SWAPTION_POSITION': 'NDAS',
  'DELTA_ADJUSTED_PAIRED_SWAPTION_POSITION': 'DAS',
  'EXPIRING_QUANTITY': 'EXP',
  'QUANTITY_NOT_EXERCISED': 'UNEX',
  'REQUESTED_EXERCISE_QUANTITY': 'REQ',
  'CASH_FUTURES_EQUIVALENT_QUANTITY': 'CFE',
};

PosType.Tag = '703';

PosType.Type = 'STRING';

PosType.Values = invert(PosType.Keys);

module.exports = PosType;