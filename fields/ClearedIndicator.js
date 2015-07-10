var invert = require('invert-obj');

function ClearedIndicator (clearedIndicator) {
  this.message = clearedIndicator;
}

ClearedIndicator.prototype.value = function () {
  return this.message;
};


ClearedIndicator.Keys = {
  NOT_CLEARED: '0',
  CLEARED: '1',
};

ClearedIndicator.Tag = '1832';

ClearedIndicator.Type = 'INT';

ClearedIndicator.Values = invert(ClearedIndicator.Keys);

module.exports = ClearedIndicator;