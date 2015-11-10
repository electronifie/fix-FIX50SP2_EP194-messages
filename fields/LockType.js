var invert = require('invert-obj');

function LockType (lockType) {
  this.message = lockType;
}

LockType.prototype.value = function () {
  return this.message;
};


LockType.Keys = {
  'NOT_LOCKED': '0',
  'AWAY_MARKET_BETTER': '1',
  'THREE_TICK_LOCKED': '2',
  'LOCKED_BY_MARKET_MAKER': '3',
  'DIRECTED_ORDER_LOCK': '4',
  'MULTILEG_LOCK': '5',
  'MARKET_ORDER_LOCK': '6',
  'PRE_ASSIGNMENT_LOCK': '7',
};

LockType.Tag = '1807';

LockType.Type = 'INT';

LockType.Values = invert(LockType.Keys);

module.exports = LockType;