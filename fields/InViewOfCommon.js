var invert = require('invert-obj');

function InViewOfCommon (inViewOfCommon) {
  this.message = inViewOfCommon;
}

InViewOfCommon.prototype.value = function () {
  return this.message;
};


InViewOfCommon.Keys = {
  'HALT_WAS_NOT_RELATED_TO_A_HALT_OF_THE_COMMON_STOCK': 'N',
  'HALT_WAS_DUE_TO_COMMON_STOCK_BEING_HALTED': 'Y',
};

InViewOfCommon.Tag = '328';

InViewOfCommon.Type = 'BOOLEAN';

InViewOfCommon.Values = invert(InViewOfCommon.Keys);

module.exports = InViewOfCommon;