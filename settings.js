const SERVICE_ACCT_ID = 'dd-service-account@dd-groupme-bot-1545258832711.iam.gserviceaccount.com';
const TIMEZONE = 'UTC+08:00';
const CALENDAR_ID = {
	'primary': 'carpbrock7@gmail.com',
	'calendar-1': 'hrvt7kjiabpc162vunc3gkkfq4@group.calendar.google.com'
};
const CALENDAR_URL = 'https://calendar.google.com/calendar/embed?src=hrvt7kjiabpc162vunc3gkkfq4%40group.calendar.google.com&ctz=America%2FChicago';

module.exports.serviceAcctId = SERVICE_ACCT_ID;
module.exports.timezone = TIMEZONE;
module.exports.calendarId = CALENDAR_ID;
module.exports.calendarUrl = CALENDAR_URL;
// Using json key
var key = require('./googleapi-key.json').private_key;
module.exports.key = key;