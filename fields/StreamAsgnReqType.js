var invert = require('invert-obj');

function StreamAsgnReqType (streamAsgnReqType) {
  this.message = streamAsgnReqType;
}

StreamAsgnReqType.prototype.value = function () {
  return this.message;
};


StreamAsgnReqType.Keys = {
  'STREAM_ASSIGNMENT_FOR_NEW_CUSTOMER': '1',
  'STREAM_ASSIGNMENT_FOR_EXISTING_CUSTOMER': '2',
};

StreamAsgnReqType.Tag = '1498';

StreamAsgnReqType.Type = 'INT';

StreamAsgnReqType.Values = invert(StreamAsgnReqType.Keys);

module.exports = StreamAsgnReqType;