var invert = require('invert-obj');

function RelatedSymbol (relatedSymbol) {
  this.message = relatedSymbol;
}

RelatedSymbol.prototype.value = function () {
  return this.message;
};

RelatedSymbol.Tag = '1649';

RelatedSymbol.Type = 'STRING';

module.exports = RelatedSymbol;