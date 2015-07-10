var invert = require('invert-obj');

function DealingCapacity (dealingCapacity) {
  this.message = dealingCapacity;
}

DealingCapacity.prototype.value = function () {
  return this.message;
};


DealingCapacity.Keys = {
  AGENT: 'A',
  PRINCIPAL: 'P',
  RISKLESS_PRINCIPAL: 'R',
};

DealingCapacity.Tag = '1048';

DealingCapacity.Type = 'CHAR';

DealingCapacity.Values = invert(DealingCapacity.Keys);

module.exports = DealingCapacity;