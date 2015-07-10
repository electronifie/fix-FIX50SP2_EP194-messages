var invert = require('invert-obj');

function TradSesControl (tradSesControl) {
  this.message = tradSesControl;
}

TradSesControl.prototype.value = function () {
  return this.message;
};


TradSesControl.Keys = {
  AUTOMATIC: '0',
  MANUAL: '1',
};

TradSesControl.Tag = '1785';

TradSesControl.Type = 'INT';

TradSesControl.Values = invert(TradSesControl.Keys);

module.exports = TradSesControl;