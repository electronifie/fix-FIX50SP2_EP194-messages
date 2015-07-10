var invert = require('invert-obj');

function NoTradeQtys (noTradeQtys) {
  this.message = noTradeQtys;
}

NoTradeQtys.prototype.value = function () {
  return this.message;
};

NoTradeQtys.Tag = '1841';

NoTradeQtys.Type = 'NUMINGROUP';

module.exports = NoTradeQtys;