var invert = require('invert-obj');

function SecurityClassificationValue (securityClassificationValue) {
  this.message = securityClassificationValue;
}

SecurityClassificationValue.prototype.value = function () {
  return this.message;
};

SecurityClassificationValue.Tag = '1584';

SecurityClassificationValue.Type = 'STRING';

module.exports = SecurityClassificationValue;