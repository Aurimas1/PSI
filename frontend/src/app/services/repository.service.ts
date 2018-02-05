import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class RepositoryService {

    private hardcodedSchool: ISchool[] = [
        { Name : 'S. Stanevičiaus progimnazija', District : 'Fabijoniškės', Address : 'S. Stanevičiaus g. 25' },
        { Name : '"Ateities" vidurinė mokykla', District : 'Fabijoniškės', Address : 'S. Stanevičiaus g. 98' },
        { Name : 'A. Kulviečio klasikinė gimnazija', District : 'Fabijoniškės', Address : 'Gedvydžių g. 8' },
        { Name : 'Fabijoniškių mokykla', District : 'Fabijoniškės', Address : 'P. Žadeikos g. 2' },
        { Name : 'Žemynos gimnazija', District : 'Pašilaičiai', Address : 'Čiobiškio g. 16' },
        { Name : 'Žemynos progimnazija', District : 'Pašilaičiai', Address : 'Žemynos g' },
        { Name : 'Gabijos gimnazija', District : 'Pašilaičiai', Address : 'Pašilaičių g. 13' },
        { Name : 'Vilniaus Antakalnio gimnazija', District : 'Antakalnis', Address : 'Antakalnio g. 29' },
        { Name : 'VGTU inžinerijos licėjus', District : 'Antakalnis', Address : 'Antakalnio g. 120' },
        { Name : 'Vilniaus Baltupių progimnazija', District : 'Baltupiai', Address : 'Didlaukio g. 23' },
        { Name : 'Jeruzalės progimnazija', District : 'Jeruzalė', Address : 'Mokyklos g. 9' },
        { Name : 'Taikos progimnazija', District : 'Justiniškės', Address : 'Taikos g. 157' },
        { Name : 'Mykolo Biržiškos gimnazija', District : 'Justiniškės', Address : 'Taikos g. 81' },
        { Name : 'Levo Karsavino vidurinė mokykla', District : 'Justiniškės', Address : 'Justiniškių g. 43' },
        { Name : 'Vilniaus "Saulės" privati gimnazija', District : 'Justiniškės', Address : 'Justiniškių g. 84' },
        { Name : 'Karoliniškių gimnazija', District : 'Karoliniškės', Address : 'Sausio 13-osios g. 17' },
        { Name : 'Spindulio pagrindinė mokykla', District : 'Karoliniškės', Address : 'R. Jankausko g. 17' },
        { Name : 'Šv. Jono Pauliaus II gimnazija', District : 'Karoliniškės', Address : 'V. Druskio g. 11' },
        { Name : 'Lazdynų vidurinė mokykla', District : 'Lazdynai', Address : 'Žėručio g. 4' },
        { Name : '"Ąžuolyno" progimnazija', District : 'Lazdynai', Address : 'Architektų g. 68' },
        { Name : 'Teofilijaus Matulionio gimnazja', District : 'Lazdynai', Address : 'Architektų g. 85' },
        { Name : 'Minties gimnazija', District : 'Lazdynai', Address : 'Erfurto g. 23' },
        { Name : 'Martyno Mažvydo progimnazija', District : 'Pilaitė', Address : 'Vydūno g. 17A' },
        { Name : 'Pilaitės gimnazija', District : 'Pilaitė', Address : 'Įsruties g. 3' },
        { Name : 'Žirmūnų gimnazija', District : 'Žirmūnai', Address : 'Žirmūnų g. 37' },
        { Name : 'Emilijos Pliaterytės progimnazija', District : 'Žirmūnai', Address : 'Žirmūnų g. 119' }];

    public getSchools(): Observable<ISchool[]> {
        return Observable.of(this.hardcodedSchool);
    }

    public getSchoolsBy(districts?: string[], schools?: string[]): Observable<ISchool[]> {
        if ((districts === undefined || districts === null) && (schools === undefined || schools === null)) {
            return this.getSchools();
        } else if (districts && districts !== null) {
            if (districts.length === 0) {
                return this.getSchoolsBy(undefined, schools);
            }
        } else if (schools.length === 0) {
            return this.getSchoolsBy(districts, undefined);
        }
        if (districts === undefined) {
            districts = [];
        }
        if (schools === undefined) {
            schools = [];
        }
        return Observable.of(this.hardcodedSchool.filter(x => districts.indexOf(x.District) > -1 || schools.indexOf(x.Name) > -1));
    }
}

export interface ISchool {
    Name: string;
    District: string;
    Address: string;
    Foto?: string;
}
