var invert = require('invert-obj');

function SettlObligSource (settlObligSource) {
  this.message = settlObligSource;
}

SettlObligSource.prototype.value = function () {
  return this.message;
};


SettlObligSource.Keys = {
  INSTRUCTIONS_OF_BROKER: '1',
  INSTRUCTIONS_FOR_INSTITUTION: '2',
  INVESTOR: '3',
  BUYERS_SETTLEMENT_INSTRUCTIONS: '4',
  SELLERS_SETTLEMENT_INSTRUCTIONS: '5',
};

SettlObligSource.Tag = '1164';

SettlObligSource.Type = 'CHAR';

SettlObligSource.Values = invert(SettlObligSource.Keys);

module.exports = SettlObligSource;