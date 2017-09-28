import { Injectable } from '@angular/core'

export type adjustTime = 'start' | 'end'

@Injectable()
export class TimeService{

    /**
     * return array of time strings diference 30 mins both times are included
     * @param start example 16:00
     * @param end example 22:00
     */
    public posibleTime(start: string, end: string, when?: adjustTime, time?: string) : string[] {
        if(time !== undefined && time !== null)
            if (when === 'start')
                start = time;
            else
                end = time;
        if (start > end)
            return null;
        if (start === end)
            return [start];
        let result : string[] = [start];
        while (start !== end){
            let element = this.increaseHalfHour(start);
            result.push(element);
            start = element;
        }
        return result;
    }

    public increaseHour(time: string): string{
        if (!time)
            return time;
        if (time[1] === '9')
            return (+time[0] + 1) + '0' + time[2] + time[3] + time[4];
        return time[0] + (+time[1] + 1) + time[2] + time[3] + time[4];
    }

    public decreaseHour(time: string): string{
        if (!time)
            return time;
        if (time[1] === '0')
            if(time[0] === '1')
                return '09:' + time[3] + time[4];
            else
                return '19:' + time[3] + time[4];
        return time[0] + (+time[1] - 1) + time[2] + time[3] + time[4];
    }

    public increaseHalfHour(time: string): string{
        if (!time)
            return time;
        if (time[3] === '0')
            return time[0] + time[1] + ':30';
        if (time[3] === '3')
            if (time[1] === '9')
                return (+time[0] + 1) + '0:00';
            else
                return time[0] + (+time[1] + 1) + ':00'
    }

}