var invert = require('invert-obj');

function ExecRestatementReason (execRestatementReason) {
  this.message = execRestatementReason;
}

ExecRestatementReason.prototype.value = function () {
  return this.message;
};


ExecRestatementReason.Keys = {
  GT_CORPORATE_ACTION: '0',
  GT_RENEWAL_RESTATEMENT: '1',
  VERBAL_CHANGE: '2',
  REPRICING_OF_ORDER: '3',
  BROKER_OPTION: '4',
  PARTIAL_DECLINE_OF_ORDERQTY: '5',
  CANCEL_ON_TRADING_HALT: '6',
  CANCEL_ON_SYSTEM_FAILURE: '7',
  MARKET_OPTION: '8',
  CANCELED_NOT_BEST: '9',
  WAREHOUSE_RECAP: '10',
  PEG_REFRESH: '11',
  CANCEL_ON_CONNECTION_LOSS: '12',
  CANCEL_ON_LOGOUT: '13',
  ASSIGN_TIME_PRIORITY: '14',
  CANCELLED_TRADE_PRICE_VIOLATION: '15',
  CANCELLED_CROSS_IMBALANCE: '16',
  OTHER: '99',
};

ExecRestatementReason.Tag = '378';

ExecRestatementReason.Type = 'INT';

ExecRestatementReason.Values = invert(ExecRestatementReason.Keys);

module.exports = ExecRestatementReason;