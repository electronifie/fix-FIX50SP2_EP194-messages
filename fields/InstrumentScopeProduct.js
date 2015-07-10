var invert = require('invert-obj');

function InstrumentScopeProduct (instrumentScopeProduct) {
  this.message = instrumentScopeProduct;
}

InstrumentScopeProduct.prototype.value = function () {
  return this.message;
};

InstrumentScopeProduct.Tag = '1543';

InstrumentScopeProduct.Type = 'INT';

module.exports = InstrumentScopeProduct;