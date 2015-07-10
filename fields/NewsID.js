var invert = require('invert-obj');

function NewsID (newsId) {
  this.message = newsId;
}

NewsID.prototype.value = function () {
  return this.message;
};

NewsID.Tag = '1472';

NewsID.Type = 'STRING';

module.exports = NewsID;