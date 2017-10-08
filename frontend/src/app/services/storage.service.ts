import { Injectable } from '@angular/core'

@Injectable()
export class StorageService{
    public get(name: string): string {
        return window.localStorage.getItem(name);
    }
    public set(name: string, value: string): void{
        window.localStorage.setItem(name, value);
    }
    public delete(name: string): void {
        window.localStorage.removeItem(name);
    }
}