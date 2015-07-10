var invert = require('invert-obj');

function PhysicalSettlTermXID (physicalSettlTermXid) {
  this.message = physicalSettlTermXid;
}

PhysicalSettlTermXID.prototype.value = function () {
  return this.message;
};

PhysicalSettlTermXID.Tag = '40208';

PhysicalSettlTermXID.Type = 'XID';

module.exports = PhysicalSettlTermXID;