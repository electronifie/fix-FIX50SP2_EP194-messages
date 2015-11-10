var invert = require('invert-obj');

function StreamAsgnAckType (streamAsgnAckType) {
  this.message = streamAsgnAckType;
}

StreamAsgnAckType.prototype.value = function () {
  return this.message;
};


StreamAsgnAckType.Keys = {
  'ASSIGNMENT_ACCEPTED': '0',
  'ASSIGNMENT_REJECTED': '1',
};

StreamAsgnAckType.Tag = '1503';

StreamAsgnAckType.Type = 'INT';

StreamAsgnAckType.Values = invert(StreamAsgnAckType.Keys);

module.exports = StreamAsgnAckType;