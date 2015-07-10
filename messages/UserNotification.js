var UsernameGrp = require('../components/UsernameGrp');
var ThrottleParamsGrp = require('../components/ThrottleParamsGrp');
var UserStatus = require('../fields/UserStatus');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function UserNotification (userNotification) {
  this.message = userNotification;
}

UserNotification.prototype.usernameGrp = function () {
  return this.message.groups[UserNotification.Tags.UsernameGrp]
    .map(function (usernameGrp) {
      return new UsernameGrp(usernameGrp);
  });
};

UserNotification.prototype.throttleParamsGrp = function () {
  return this.message.groups[UserNotification.Tags.ThrottleParamsGrp]
    .map(function (throttleParamsGrp) {
      return new ThrottleParamsGrp(throttleParamsGrp);
  });
};

UserNotification.prototype.userStatus = function () {
  return new UserStatus(this.message.tags[UserNotification.Tags.UserStatus]);
};

UserNotification.prototype.text = function () {
  return new Text(this.message.tags[UserNotification.Tags.Text]);
};

UserNotification.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[UserNotification.Tags.EncodedTextLen]);
};

UserNotification.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[UserNotification.Tags.EncodedText]);
};

UserNotification.Tags = {
  UsernameGrp: '809',
  ThrottleParamsGrp: '1610',
  UserStatus: '926',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

UserNotification.msgType = 'CB';

module.exports = UserNotification;