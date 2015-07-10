var invert = require('invert-obj');

function StreamAsgnRptID (streamAsgnRptId) {
  this.message = streamAsgnRptId;
}

StreamAsgnRptID.prototype.value = function () {
  return this.message;
};

StreamAsgnRptID.Tag = '1501';

StreamAsgnRptID.Type = 'STRING';

module.exports = StreamAsgnRptID;