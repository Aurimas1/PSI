import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
    public get(name: string): string {
        return sessionStorage.getItem(name);
    }
    public set(name: string, value: string): void {
        sessionStorage.setItem(name, value);
    }
    public delete(name: string): void {
        sessionStorage.removeItem(name);
    }
}
