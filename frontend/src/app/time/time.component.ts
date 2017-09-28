import { Component, OnInit, Inject } from '@angular/core';
import { DateAdapter, NativeDateAdapter} from '@angular/material';
import { TimeService } from './services/time.service';
import { RepositoryService, ISchool} from '../services/repository.service'
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Rx'
import {MdDialog, MD_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'psi-time',
    templateUrl: './time.component.html'
})
export class TimeComponent implements OnInit{
    public minDate = new Date();
    public selectedDate = new Date();
    public maxDate = new Date(2018, 0, 1);
    public selectedValue_start: string;
    public selectedValue_end: string;
    public selectedDistricts: string[];
    public selectedSchools: string[];

    public districts: string[] = new Array<string>();
    public schools: string[] = new Array<string>();
    public dataSource : MyDataSource;
    public displayedColumns = ['Name', 'District', 'Address'];

    public get times_start() : string[] {
        return this.timeService.posibleTime('18:00', '21:00', 'end', this.timeService.decreaseHour(this.selectedValue_end));
    }

    public get times_end() : string[] {
        return this.timeService.posibleTime('19:00', '22:00', 'start', this.timeService.increaseHour(this.selectedValue_start));
    }

    constructor(public dialog: MdDialog, dateAdapter: DateAdapter<NativeDateAdapter>, public timeService: TimeService, public repositoryService: RepositoryService){
        dateAdapter.setLocale('lt-LT');
        this.dataSource = new MyDataSource(repositoryService);
    }

    ngOnInit(){
        this.repositoryService.getSchools().subscribe(x => {
            this.districts = x.map(x => x.District).filter((x, i, a) => x && a.indexOf(x) === i);
            this.schools = x.map(x => x.Name); 
        })
    }

    public dataPicked(x : any) {
        let y : Date = x.value; 
        console.log(y);
    }

    public doSomething(){
        this.dataSource = new MyDataSource(this.repositoryService, this.selectedDate, this.selectedValue_start, this.selectedValue_end, this.selectedDistricts, this.selectedSchools);
    }

    public doSomethingMore(x : ISchool){
        this.dialog.open(DetailDialog, {width: '80%', data: x});
    }
}

export class MyDataSource extends DataSource<any>{

    constructor(private repositoryService : RepositoryService, private date? : Date,private startTime?  : string,private endTime? : string,private districts? : string[],private schools? : string[]){
        super();
    }

    connect(): Observable<ISchool[]> {
        if (this.date === null || this.date === undefined)
            return this.repositoryService.getSchoolsBy(new Date());
        return this.repositoryService.getSchoolsBy(this.date, this.startTime, this.endTime, this.districts, this.schools);
    }
    
    disconnect(): void {    }

}

@Component({
    selector: 'psi-dialog-detail',
    templateUrl: './detail.dialog.html'
})
export class DetailDialog{
    constructor(@Inject(MD_DIALOG_DATA) public data: ISchool) {}
}