var invert = require('invert-obj');

function ManualNoticeBusinessCenter (manualNoticeBusinessCenter) {
  this.message = manualNoticeBusinessCenter;
}

ManualNoticeBusinessCenter.prototype.value = function () {
  return this.message;
};

ManualNoticeBusinessCenter.Tag = '41112';

ManualNoticeBusinessCenter.Type = 'STRING';

module.exports = ManualNoticeBusinessCenter;