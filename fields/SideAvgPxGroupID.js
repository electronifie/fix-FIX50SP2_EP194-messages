var invert = require('invert-obj');

function SideAvgPxGroupID (sideAvgPxGroupId) {
  this.message = sideAvgPxGroupId;
}

SideAvgPxGroupID.prototype.value = function () {
  return this.message;
};

SideAvgPxGroupID.Tag = '1854';

SideAvgPxGroupID.Type = 'STRING';

module.exports = SideAvgPxGroupID;