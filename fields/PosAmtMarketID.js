var invert = require('invert-obj');

function PosAmtMarketID (posAmtMarketId) {
  this.message = posAmtMarketId;
}

PosAmtMarketID.prototype.value = function () {
  return this.message;
};

PosAmtMarketID.Tag = '2100';

PosAmtMarketID.Type = 'STRING';

module.exports = PosAmtMarketID;