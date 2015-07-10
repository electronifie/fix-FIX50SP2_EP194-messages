var invert = require('invert-obj');

function NoAttachments (noAttachments) {
  this.message = noAttachments;
}

NoAttachments.prototype.value = function () {
  return this.message;
};

NoAttachments.Tag = '2104';

NoAttachments.Type = 'NUMINGROUP';

module.exports = NoAttachments;