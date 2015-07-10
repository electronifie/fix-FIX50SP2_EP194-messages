var invert = require('invert-obj');

function PayCollectMarketID (payCollectMarketId) {
  this.message = payCollectMarketId;
}

PayCollectMarketID.prototype.value = function () {
  return this.message;
};

PayCollectMarketID.Tag = '1713';

PayCollectMarketID.Type = 'STRING';

module.exports = PayCollectMarketID;