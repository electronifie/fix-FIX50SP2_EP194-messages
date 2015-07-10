var invert = require('invert-obj');

function LegTradeID (legTradeId) {
  this.message = legTradeId;
}

LegTradeID.prototype.value = function () {
  return this.message;
};

LegTradeID.Tag = '1894';

LegTradeID.Type = 'STRING';

module.exports = LegTradeID;