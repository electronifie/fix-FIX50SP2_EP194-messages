var invert = require('invert-obj');

function AvgPxGroupID (avgPxGroupId) {
  this.message = avgPxGroupId;
}

AvgPxGroupID.prototype.value = function () {
  return this.message;
};

AvgPxGroupID.Tag = '1731';

AvgPxGroupID.Type = 'STRING';

module.exports = AvgPxGroupID;