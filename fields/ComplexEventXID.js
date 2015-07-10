var invert = require('invert-obj');

function ComplexEventXID (complexEventXid) {
  this.message = complexEventXid;
}

ComplexEventXID.prototype.value = function () {
  return this.message;
};

ComplexEventXID.Tag = '2138';

ComplexEventXID.Type = 'XID';

module.exports = ComplexEventXID;