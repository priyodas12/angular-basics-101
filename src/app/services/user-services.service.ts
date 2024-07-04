import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserServicesService {
  appliationUserNames: string[] = [
    'John Smith',
    'Emily Johnson',
    'Michael Williams',
    'Jessica Brown',
    'David Jones',
    'Sarah Miller',
    'Daniel Davis',
    'Laura Wilson',
    'Robert Anderson',
    'Olivia Taylor',
    'James Thomas',
    'Emma Moore',
    'William Jackson',
    'Sophia Martin',
    'Joseph White',
    'Isabella Harris',
    'Christopher Clark',
    'Mia Lewis',
    'Benjamin Young',
    'Ava Walker',
  ];

  test: string = '';

  constructor() {}
}
