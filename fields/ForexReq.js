var invert = require('invert-obj');

function ForexReq (forexReq) {
  this.message = forexReq;
}

ForexReq.prototype.value = function () {
  return this.message;
};


ForexReq.Keys = {
  'DO_NOT_EXECUTE_FOREX_AFTER_SECURITY_TRADE': 'N',
  'EXECUTE_FOREX_AFTER_SECURITY_TRADE': 'Y',
};

ForexReq.Tag = '121';

ForexReq.Type = 'BOOLEAN';

ForexReq.Values = invert(ForexReq.Keys);

module.exports = ForexReq;