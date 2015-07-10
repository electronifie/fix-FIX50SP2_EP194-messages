var invert = require('invert-obj');

function NumOfCompetitors (numOfCompetitors) {
  this.message = numOfCompetitors;
}

NumOfCompetitors.prototype.value = function () {
  return this.message;
};

NumOfCompetitors.Tag = '1913';

NumOfCompetitors.Type = 'INT';

module.exports = NumOfCompetitors;