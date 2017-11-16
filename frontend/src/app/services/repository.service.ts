import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RepositoryService {

    private url = 'http://localhost:58249/api/Schools';

    constructor(private http: Http) { }

    public getSchools(): Observable<ISchool[]> {
        return this.http.get(this.url).map(x => <ISchool[]>x.json());
    }

    public getSchoolsBy(districts?: string[], schools?: string[]): Observable<ISchool[]> {
        return this.http.get(this.url + this.constructQueryString(districts, schools)).map(x => <ISchool[]>x.json());
    }

    private constructQueryString(districts?: string[], schools?: string[]) {
        let result = `?`;
        if (districts) {
            if (districts.length !== 0) {
                result += `district=${this.ArrToString(districts)}`;
            }
        }

        if (districts && schools) {
            result += '&';
        }

        if (schools) {
            if (schools.length !== 0) {
                result += `name=${this.ArrToString(schools)}`;
            }
        }
        result.replace(' ', '%20');
        return result;
    }

    private ConvertDate(date: Date): string {
        return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
    }

    private ArrToString(x: string[]): string {
        let result = '';
        console.log(x.length);
        x.forEach((y, i) => { if (i === 0) { result += y; } else {result += `,${y}`; }} );
        return result;
    }

}

export interface ISchool {
    Name: string;
    District: string;
    Address: string;
}
