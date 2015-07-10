var invert = require('invert-obj');

function RegulatoryTradeIDScope (regulatoryTradeIdscope) {
  this.message = regulatoryTradeIdscope;
}

RegulatoryTradeIDScope.prototype.value = function () {
  return this.message;
};


RegulatoryTradeIDScope.Keys = {
  CLEARING_MEMBER: '1',
  CLIENT: '2',
};

RegulatoryTradeIDScope.Tag = '2397';

RegulatoryTradeIDScope.Type = 'INT';

RegulatoryTradeIDScope.Values = invert(RegulatoryTradeIDScope.Keys);

module.exports = RegulatoryTradeIDScope;