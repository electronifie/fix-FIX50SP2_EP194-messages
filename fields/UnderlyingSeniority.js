var invert = require('invert-obj');

function UnderlyingSeniority (underlyingSeniority) {
  this.message = underlyingSeniority;
}

UnderlyingSeniority.prototype.value = function () {
  return this.message;
};

UnderlyingSeniority.Tag = '1454';

UnderlyingSeniority.Type = 'STRING';

module.exports = UnderlyingSeniority;