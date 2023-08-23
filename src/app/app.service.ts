import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(
  
  ) { }

  skils: any = [
    {
      'id': '1',
      'skill': 'ANGULAR',
      'progress': '50%'
    },
    {
      'id': '2',
      'skill': 'NODE JS',
      'progress': '60%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT ',
      'progress': '40%'
    },
    {
      'id': '4',
      'skill': 'SQL , postgres',
      'progress': '40%'
    },
    {
      'id': '5',
      'skill': 'html',
      'progress': '80%'
    },
    {
      'id': '6',
      'skill': 'SCSS, css',
      'progress': '80%'
    }
  ];
}
