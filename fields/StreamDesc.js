var invert = require('invert-obj');

function StreamDesc (streamDesc) {
  this.message = streamDesc;
}

StreamDesc.prototype.value = function () {
  return this.message;
};

StreamDesc.Tag = '40051';

StreamDesc.Type = 'STRING';

module.exports = StreamDesc;