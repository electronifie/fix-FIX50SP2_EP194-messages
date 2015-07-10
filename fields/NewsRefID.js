var invert = require('invert-obj');

function NewsRefID (newsRefId) {
  this.message = newsRefId;
}

NewsRefID.prototype.value = function () {
  return this.message;
};

NewsRefID.Tag = '1476';

NewsRefID.Type = 'STRING';

module.exports = NewsRefID;