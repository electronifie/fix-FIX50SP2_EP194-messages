var ThrottleParamsGrp = require('../components/ThrottleParamsGrp');
var UserRequestID = require('../fields/UserRequestID');
var Username = require('../fields/Username');
var UserStatus = require('../fields/UserStatus');
var UserStatusText = require('../fields/UserStatusText');

function UserResponse (userResponse) {
  this.message = userResponse;
}

UserResponse.prototype.throttleParamsGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[UserResponse.Tags.ThrottleParamsGrp] === undefined) return null;
  return this.message.groups[UserResponse.Tags.ThrottleParamsGrp]
    .map(function (throttleParamsGrp) {
      return new ThrottleParamsGrp(throttleParamsGrp);
  });
};

UserResponse.prototype.userRequestId = function () {
  return new UserRequestID(this.message.tags[UserResponse.Tags.UserRequestID]);
};

UserResponse.prototype.username = function () {
  return new Username(this.message.tags[UserResponse.Tags.Username]);
};

UserResponse.prototype.userStatus = function () {
  return new UserStatus(this.message.tags[UserResponse.Tags.UserStatus]);
};

UserResponse.prototype.userStatusText = function () {
  return new UserStatusText(this.message.tags[UserResponse.Tags.UserStatusText]);
};

UserResponse.Tags = {
  ThrottleParamsGrp: '1610',
  UserRequestID: '923',
  Username: '553',
  UserStatus: '926',
  UserStatusText: '927',
};

UserResponse.msgType = 'BF';

module.exports = UserResponse;