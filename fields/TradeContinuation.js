var invert = require('invert-obj');

function TradeContinuation (tradeContinuation) {
  this.message = tradeContinuation;
}

TradeContinuation.prototype.value = function () {
  return this.message;
};


TradeContinuation.Keys = {
  'NOVATION': '0',
  'PARTIAL_NOVATION': '1',
  'TRADE_UNWIND': '2',
  'PARTIAL_TRADE_UNWIND': '3',
  'EXERCISE': '4',
  'COMPRESSION_NETTING': '5',
  'FULL_NETTING': '6',
  'PARTIAL_NETTING': '7',
  'AMENDMENT': '8',
  'INCREASE': '9',
  'CREDIT_EVENT': '10',
  'STRATEGIC_RESTRUCTURING': '11',
  'SUCCESSION_EVENT_REORGANIZATION': '12',
  'SUCCESSION_EVENT_RENAMING': '13',
  'PORTING': '14',
  'WITHDRAWAL': '15',
  'VOID': '16',
  'ACCOUNT_TRANSFER': '17',
  'GIVE_UP': '18',
  'TAKEUP': '19',
  'AVERAGE_PRICING': '20',
  'REVERSAL': '21',
  'ALLOCATION_TRADE_POSTING': '22',
  'CASCADE': '23',
  'DELIVERY': '24',
  'OPTION_ASSIGNMENT': '25',
  'EXPIRATION': '26',
  'MATURITY': '27',
  'EQUAL_POSITION_ADJUSTMENT': '28',
  'UNEQUAL_POSITION_ADJUSTMENT': '29',
  'CORRECTION': '30',
  'OTHER_PRICE_FORMING_CONTINUATION_DATA': '99',
};

TradeContinuation.Tag = '1937';

TradeContinuation.Type = 'INT';

TradeContinuation.Values = invert(TradeContinuation.Keys);

module.exports = TradeContinuation;