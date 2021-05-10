import * as moment from 'moment-timezone';

let data = moment.now();
console.log(data);

const time = new Date();
  const timeZone = moment.tz.guess();
  const ab moment.tz.zone(timeZone).abbr(time.getTime());