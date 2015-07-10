var invert = require('invert-obj');

function RegulatoryTradeID (regulatoryTradeId) {
  this.message = regulatoryTradeId;
}

RegulatoryTradeID.prototype.value = function () {
  return this.message;
};

RegulatoryTradeID.Tag = '1903';

RegulatoryTradeID.Type = 'STRING';

module.exports = RegulatoryTradeID;