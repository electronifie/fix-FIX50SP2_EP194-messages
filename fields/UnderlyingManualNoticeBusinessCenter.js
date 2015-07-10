var invert = require('invert-obj');

function UnderlyingManualNoticeBusinessCenter (underlyingManualNoticeBusinessCenter) {
  this.message = underlyingManualNoticeBusinessCenter;
}

UnderlyingManualNoticeBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingManualNoticeBusinessCenter.Tag = '41816';

UnderlyingManualNoticeBusinessCenter.Type = 'STRING';

module.exports = UnderlyingManualNoticeBusinessCenter;