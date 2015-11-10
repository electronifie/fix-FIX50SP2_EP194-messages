var invert = require('invert-obj');

function PositionCapacity (positionCapacity) {
  this.message = positionCapacity;
}

PositionCapacity.prototype.value = function () {
  return this.message;
};


PositionCapacity.Keys = {
  'PRINCIPAL': '0',
  'AGENT': '1',
  'CUSTOMER': '2',
  'COUNTERPARTY': '3',
};

PositionCapacity.Tag = '1834';

PositionCapacity.Type = 'INT';

PositionCapacity.Values = invert(PositionCapacity.Keys);

module.exports = PositionCapacity;