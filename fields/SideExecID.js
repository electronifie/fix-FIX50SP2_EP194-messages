var invert = require('invert-obj');

function SideExecID (sideExecId) {
  this.message = sideExecId;
}

SideExecID.prototype.value = function () {
  return this.message;
};

SideExecID.Tag = '1427';

SideExecID.Type = 'STRING';

module.exports = SideExecID;