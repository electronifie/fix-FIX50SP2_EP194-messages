var invert = require('invert-obj');

function MDStatisticScopeType (mdstatisticScopeType) {
  this.message = mdstatisticScopeType;
}

MDStatisticScopeType.prototype.value = function () {
  return this.message;
};


MDStatisticScopeType.Keys = {
  'ENTRY_RATE': '1',
  'MODIFICATION_RATE': '2',
  'CANCEL_RATE': '3',
  'DOWNWARD_MOVE': '4',
  'UPWARD_MOVE': '5',
};

MDStatisticScopeType.Tag = '2459';

MDStatisticScopeType.Type = 'INT';

MDStatisticScopeType.Values = invert(MDStatisticScopeType.Keys);

module.exports = MDStatisticScopeType;