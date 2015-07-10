var invert = require('invert-obj');

function CollRptRejectReason (collRptRejectReason) {
  this.message = collRptRejectReason;
}

CollRptRejectReason.prototype.value = function () {
  return this.message;
};


CollRptRejectReason.Keys = {
  UNKNOWN_TRADE_OR_TRANSACTION: '0',
  UNKNOWN_OR_INVALID_INSTRUMENT: '1',
  UNKNOWN_OR_INVALID_COUNTERPARTY: '2',
  UNKNOWN_OR_INVALID_POSITION: '3',
  UNACCEPTABLE_OR_INVALID_TYPE_OF_COLLATERAL: '4',
  OTHER: '99',
};

CollRptRejectReason.Tag = '2487';

CollRptRejectReason.Type = 'INT';

CollRptRejectReason.Values = invert(CollRptRejectReason.Keys);

module.exports = CollRptRejectReason;