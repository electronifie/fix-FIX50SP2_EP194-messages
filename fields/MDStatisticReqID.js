var invert = require('invert-obj');

function MDStatisticReqID (mdstatisticReqId) {
  this.message = mdstatisticReqId;
}

MDStatisticReqID.prototype.value = function () {
  return this.message;
};

MDStatisticReqID.Tag = '2452';

MDStatisticReqID.Type = 'STRING';

module.exports = MDStatisticReqID;