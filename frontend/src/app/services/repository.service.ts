import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';

@Injectable()
export class RepositoryService{

    private url: string = 'http://localhost:58249/api/Schools';

    constructor(private http: Http){}

    public getSchools() : Observable<ISchool[]>{
        return this.http.get(this.url).map(x => <ISchool[]>x.json());
    }

    public getSchoolsBy(date: Date, startTime? : string, endTime? : string, districts? : string[], schools? : string[]) : Observable<ISchool[]>{
        return this.http.get(this.url + this.constructQueryString(date, startTime, endTime, districts, schools)).map(x => <ISchool[]>x.json());
    }

    private constructQueryString(date: Date, startTime? : string, endTime? : string, districts? : string[], schools? : string[]){
        let result : string = `?date=${this.ConvertDate(date)}`;
        if (districts)
            if (districts.length !== 0)
                result += `&district=${this.ArrToString(districts)}`;
        if (schools)
            if (schools.length !== 0)
                result += `&name=${this.ArrToString(schools)}`;
        if (startTime)
            result += `&from=${startTime}`;
        if (endTime)
            result += `&till=${endTime}`;
        
        result.replace(' ', '%20');
        console.log(result);
        return result;
    }

    private ConvertDate(date : Date) : string{
        return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
    }

    private ArrToString(x : string[]) : string {
        let result : string = '';
        console.log(x.length);
        x.forEach((x,i) => { if (i === 0) result += x; else result += `,${x}`; } )
        return result;
    }

}

export interface ISchool{
    Id: number;
    Name: string;
    Foto: string;
    District: string;
    Address: string;
    Number: string;
    Email: string;
}