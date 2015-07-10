var invert = require('invert-obj');

function ReceivingDeptID (receivingDeptId) {
  this.message = receivingDeptId;
}

ReceivingDeptID.prototype.value = function () {
  return this.message;
};

ReceivingDeptID.Tag = '1726';

ReceivingDeptID.Type = 'STRING';

module.exports = ReceivingDeptID;