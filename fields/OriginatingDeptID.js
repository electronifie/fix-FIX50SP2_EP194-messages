var invert = require('invert-obj');

function OriginatingDeptID (originatingDeptId) {
  this.message = originatingDeptId;
}

OriginatingDeptID.prototype.value = function () {
  return this.message;
};

OriginatingDeptID.Tag = '1725';

OriginatingDeptID.Type = 'STRING';

module.exports = OriginatingDeptID;