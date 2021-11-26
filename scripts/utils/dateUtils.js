const date = require('date-and-time');

class DateHandler {
    constructor(){
        this.dateTimestamp = Date.now();
    };

    add(amount, type){
        switch (type){
            case 'months':
                this.dateTimestamp = Date.parse(date.addMonths(new Date(Date.now()), amount));
                return this.dateTimestamp / 1000;
            case 'days':
                this.dateTimestamp = Date.parse(date.addDays(new Date(Date.now()), amount));
                return this.dateTimestamp / 1000;
            case 'years':
                this.dateTimestamp = Date.parse(date.addYears(new Date(Date.now()), amount));
                return this.dateTimestamp / 1000;
            case 'hours':
                 this.dateTimestamp = Date.parse(date.addHours(new Date(Date.now()), amount));
                return dateTimestamp / 1000;
            case 'minutes':
                this.dateTimestamp = Date.parse(date.addMinutes(new Date(Date.now()), amount));
                return dateTimestamp / 1000;
            case 'seconds':
                this.dateTimestamp = Date.parse(date.addSeconds(new Date(Date.now()), amount));
                return dateTimestamp / 1000;
            case 'milliseconds':
                this.dateTimestamp = Date.parse(date.addMilliseconds(new Date(Date.now()), amount));
                return dateTimestamp / 1000;
            default:
                return new Error(`Addition is not possible on ${type}`);
        }
    }

    async now(){
        return (Date.parse(new Date(Date.now())) / 1000);
    }
}

module.exports = {
    DateHandler
}