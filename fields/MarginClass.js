var invert = require('invert-obj');

function MarginClass (marginClass) {
  this.message = marginClass;
}

MarginClass.prototype.value = function () {
  return this.message;
};

MarginClass.Tag = '1639';

MarginClass.Type = 'STRING';

module.exports = MarginClass;