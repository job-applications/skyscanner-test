class SkyscannerTimeParser {
  constructor(string){
    this.components = this.constructor.getTimeComponents(string);
  }

  getTime(){
    return this.components.time
  }

  getDate(){
    return this.components.date;
  }

  static getTimeComponents(string){
    const segments = string.split('T');
    const time = segments[1].split(':');

    return {
      date: segments[0],
      time: time[0] + ':' + time[1]
    }
  }

  static getTimeFromString(string){
    let instance = new this(string);
    return instance.getTime();
  }

  static getDateFromString(string){
    let instance = new this(string);
    return instance.getDate();
  }

  static twoDigitZeroPadded(number){
    return number < 10 ? '0' + number : number;
  }

  static getDateInSearchFormat(date){
    const strings = {
      year: date.getFullYear().toString(),
      month: SkyscannerTimeParser.twoDigitZeroPadded( date.getMonth() + 1 ),
      date: SkyscannerTimeParser.twoDigitZeroPadded( date.getDate() )
    };

    return `${ strings.year }-${ strings.month }-${ strings.date }`
  }

  static minutesToTime(totalMinutes){
    const hours = Math.floor( totalMinutes / 60 );
    const minutes = totalMinutes % 60;
    return hours + 'h ' + minutes;
  }

  static getNextMonday(){
    const d = new Date();
    const monday = d.getDate() - d.getDay() + 8;
    return new Date( d.setDate(monday) );
  }

  static getFollowingDay(date){
    const d = new Date(date);
    const nextDay = d.getDate() + 1;
    return new Date( d.setDate(nextDay) );
  }
}



module.exports = SkyscannerTimeParser;