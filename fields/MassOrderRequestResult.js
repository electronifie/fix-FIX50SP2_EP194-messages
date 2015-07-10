var invert = require('invert-obj');

function MassOrderRequestResult (massOrderRequestResult) {
  this.message = massOrderRequestResult;
}

MassOrderRequestResult.prototype.value = function () {
  return this.message;
};


MassOrderRequestResult.Keys = {
  SUCCESSFUL: '0',
  RESPONSE_LEVEL_NOT_SUPPORTED: '1',
  INVALID_MARKET: '2',
  INVALID_MARKET_SEGMENT: '3',
  OTHER: '99',
};

MassOrderRequestResult.Tag = '2426';

MassOrderRequestResult.Type = 'INT';

MassOrderRequestResult.Values = invert(MassOrderRequestResult.Keys);

module.exports = MassOrderRequestResult;