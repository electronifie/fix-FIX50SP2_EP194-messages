var invert = require('invert-obj');

function RegulatoryTransactionType (regulatoryTransactionType) {
  this.message = regulatoryTransactionType;
}

RegulatoryTransactionType.prototype.value = function () {
  return this.message;
};


RegulatoryTransactionType.Keys = {
  NONE: '0',
  SWAP_EXECUTION_FACILITY_REQUIRED_TRANSACTION: '1',
  SWAP_EXECUTION_FACILITY_PERMITTED_TRANSACTION: '2',
};

RegulatoryTransactionType.Tag = '2347';

RegulatoryTransactionType.Type = 'INT';

RegulatoryTransactionType.Values = invert(RegulatoryTransactionType.Keys);

module.exports = RegulatoryTransactionType;