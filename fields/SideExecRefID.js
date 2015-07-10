var invert = require('invert-obj');

function SideExecRefID (sideExecRefId) {
  this.message = sideExecRefId;
}

SideExecRefID.prototype.value = function () {
  return this.message;
};

SideExecRefID.Tag = '1900';

SideExecRefID.Type = 'STRING';

module.exports = SideExecRefID;