var invert = require('invert-obj');

function PayCollectFXRate (payCollectFxrate) {
  this.message = payCollectFxrate;
}

PayCollectFXRate.prototype.value = function () {
  return this.message;
};

PayCollectFXRate.Tag = '2094';

PayCollectFXRate.Type = 'FLOAT';

module.exports = PayCollectFXRate;