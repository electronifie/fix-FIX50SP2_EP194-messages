var invert = require('invert-obj');

function NoPayCollects (noPayCollects) {
  this.message = noPayCollects;
}

NoPayCollects.prototype.value = function () {
  return this.message;
};

NoPayCollects.Tag = '1707';

NoPayCollects.Type = 'NUMINGROUP';

module.exports = NoPayCollects;