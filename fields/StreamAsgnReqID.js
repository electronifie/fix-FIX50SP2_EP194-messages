var invert = require('invert-obj');

function StreamAsgnReqID (streamAsgnReqId) {
  this.message = streamAsgnReqId;
}

StreamAsgnReqID.prototype.value = function () {
  return this.message;
};

StreamAsgnReqID.Tag = '1497';

StreamAsgnReqID.Type = 'STRING';

module.exports = StreamAsgnReqID;