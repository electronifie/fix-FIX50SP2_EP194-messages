var invert = require('invert-obj');

function AllocGroupID (allocGroupId) {
  this.message = allocGroupId;
}

AllocGroupID.prototype.value = function () {
  return this.message;
};

AllocGroupID.Tag = '1730';

AllocGroupID.Type = 'STRING';

module.exports = AllocGroupID;