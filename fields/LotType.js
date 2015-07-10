var invert = require('invert-obj');

function LotType (lotType) {
  this.message = lotType;
}

LotType.prototype.value = function () {
  return this.message;
};


LotType.Keys = {
  ODD_LOT: '1',
  ROUND_LOT: '2',
  BLOCK_LOT: '3',
  ROUND_LOT_BASED_UPON_UNITOFMEASURE: '4',
};

LotType.Tag = '1093';

LotType.Type = 'CHAR';

LotType.Values = invert(LotType.Keys);

module.exports = LotType;