var invert = require('invert-obj');

function PosAmtReason (posAmtReason) {
  this.message = posAmtReason;
}

PosAmtReason.prototype.value = function () {
  return this.message;
};


PosAmtReason.Keys = {
  OPTIONS_SETTLEMENT: '0',
  PENDING_EROSION_ADJUSTMENT: '1',
  FINAL_EROSION_ADJUSTMENT: '2',
  TEAR_UP_COUPON_AMOUNT: '3',
  PRICE_ALIGNMENT_INTEREST: '4',
  DELIVERY_INVOICE_CHARGES: '5',
  DELIVERY_STORAGE_CHARGES: '6',
};

PosAmtReason.Tag = '1585';

PosAmtReason.Type = 'INT';

PosAmtReason.Values = invert(PosAmtReason.Keys);

module.exports = PosAmtReason;