var invert = require('invert-obj');

function LanguageCode (languageCode) {
  this.message = languageCode;
}

LanguageCode.prototype.value = function () {
  return this.message;
};

LanguageCode.Tag = '1474';

LanguageCode.Type = 'LANGUAGE';

module.exports = LanguageCode;