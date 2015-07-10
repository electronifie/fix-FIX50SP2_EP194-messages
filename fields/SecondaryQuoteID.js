var invert = require('invert-obj');

function SecondaryQuoteID (secondaryQuoteId) {
  this.message = secondaryQuoteId;
}

SecondaryQuoteID.prototype.value = function () {
  return this.message;
};

SecondaryQuoteID.Tag = '1751';

SecondaryQuoteID.Type = 'STRING';

module.exports = SecondaryQuoteID;