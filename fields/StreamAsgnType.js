var invert = require('invert-obj');

function StreamAsgnType (streamAsgnType) {
  this.message = streamAsgnType;
}

StreamAsgnType.prototype.value = function () {
  return this.message;
};


StreamAsgnType.Keys = {
  ASSIGNMENT: '1',
  REJECTED: '2',
  TERMINATE_UNASSIGN: '3',
};

StreamAsgnType.Tag = '1617';

StreamAsgnType.Type = 'INT';

StreamAsgnType.Values = invert(StreamAsgnType.Keys);

module.exports = StreamAsgnType;