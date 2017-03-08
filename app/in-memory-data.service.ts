import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            { id: 110, name: 'Mr. Nice1' },
            { id: 111, name: 'Mr. Nice2' },
            { id: 112, name: 'Mr. Nice3' },
            { id: 113, name: 'Mr. Nice4' },
            { id: 114, name: 'Mr. Nice5' },
            { id: 115, name: 'Mr. Nice6' },
            { id: 116, name: 'Mr. Nice7' },
            { id: 117, name: 'Mr. Nice8' },
            { id: 118, name: 'Mr. Nice9' },
            { id: 119, name: 'Mr. Nice0' }
        ];
        return { heroes };
    }
}