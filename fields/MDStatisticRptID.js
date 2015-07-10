var invert = require('invert-obj');

function MDStatisticRptID (mdstatisticRptId) {
  this.message = mdstatisticRptId;
}

MDStatisticRptID.prototype.value = function () {
  return this.message;
};

MDStatisticRptID.Tag = '2453';

MDStatisticRptID.Type = 'STRING';

module.exports = MDStatisticRptID;