var invert = require('invert-obj');

function LegManualNoticeBusinessCenter (legManualNoticeBusinessCenter) {
  this.message = legManualNoticeBusinessCenter;
}

LegManualNoticeBusinessCenter.prototype.value = function () {
  return this.message;
};

LegManualNoticeBusinessCenter.Tag = '41487';

LegManualNoticeBusinessCenter.Type = 'STRING';

module.exports = LegManualNoticeBusinessCenter;