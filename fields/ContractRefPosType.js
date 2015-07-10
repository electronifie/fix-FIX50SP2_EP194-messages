var invert = require('invert-obj');

function ContractRefPosType (contractRefPosType) {
  this.message = contractRefPosType;
}

ContractRefPosType.prototype.value = function () {
  return this.message;
};


ContractRefPosType.Keys = {
  TWO_COMPONENT_INTERCOMMODITY_SPREAD: '0',
  INDEX_OR_BASKET: '1',
  TWO_COMPONENT_LOCATIONAL_BASIS: '2',
  OTHER: '99',
};

ContractRefPosType.Tag = '1833';

ContractRefPosType.Type = 'INT';

ContractRefPosType.Values = invert(ContractRefPosType.Keys);

module.exports = ContractRefPosType;