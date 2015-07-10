var invert = require('invert-obj');

function MDSecSizeType (mdsecSizeType) {
  this.message = mdsecSizeType;
}

MDSecSizeType.prototype.value = function () {
  return this.message;
};


MDSecSizeType.Keys = {
  CUSTOMER: '1',
  CUSTOMER_PROFESSIONAL: '2',
  DO_NOT_TRADE_THROUGH: '3',
};

MDSecSizeType.Tag = '1178';

MDSecSizeType.Type = 'INT';

MDSecSizeType.Values = invert(MDSecSizeType.Keys);

module.exports = MDSecSizeType;