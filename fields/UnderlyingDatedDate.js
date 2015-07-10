var invert = require('invert-obj');

function UnderlyingDatedDate (underlyingDatedDate) {
  this.message = underlyingDatedDate;
}

UnderlyingDatedDate.prototype.value = function () {
  return this.message;
};

UnderlyingDatedDate.Tag = '2041';

UnderlyingDatedDate.Type = 'LOCALMKTDATE';

module.exports = UnderlyingDatedDate;