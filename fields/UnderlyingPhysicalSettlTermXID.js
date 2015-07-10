var invert = require('invert-obj');

function UnderlyingPhysicalSettlTermXID (underlyingPhysicalSettlTermXid) {
  this.message = underlyingPhysicalSettlTermXid;
}

UnderlyingPhysicalSettlTermXID.prototype.value = function () {
  return this.message;
};

UnderlyingPhysicalSettlTermXID.Tag = '42064';

UnderlyingPhysicalSettlTermXID.Type = 'XID';

module.exports = UnderlyingPhysicalSettlTermXID;