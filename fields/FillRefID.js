var invert = require('invert-obj');

function FillRefID (fillRefId) {
  this.message = fillRefId;
}

FillRefID.prototype.value = function () {
  return this.message;
};

FillRefID.Tag = '2421';

FillRefID.Type = 'STRING';

module.exports = FillRefID;