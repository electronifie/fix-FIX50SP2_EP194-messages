var invert = require('invert-obj');

function FirmGroupID (firmGroupId) {
  this.message = firmGroupId;
}

FirmGroupID.prototype.value = function () {
  return this.message;
};

FirmGroupID.Tag = '1728';

FirmGroupID.Type = 'STRING';

module.exports = FirmGroupID;