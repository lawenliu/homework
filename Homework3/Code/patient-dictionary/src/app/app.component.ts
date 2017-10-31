import { Component } from '@angular/core';

export class Patient {
  firstName: string;
  lastName: string;
  emailAddress: string;
  doctorLastName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Patient Dictionary';

  searchResult: Patient[] = [];
  searchText: string;

  patientList: Patient[] = [{
    firstName: 'Olivia',
    lastName:  'Ayala',
    emailAddress: 'oliviaayalay@gmail.com',
    doctorLastName: 'johnson'
  },{
    firstName: 'Adrian',
    lastName: 'Baran',
    emailAddress: 'adrian.baran.30@gmail.com',
    doctorLastName: 'johnson'
  },{
    firstName: 'Gabriel',
    lastName: 'Bouzard',
    emailAddress: 'gabrielbouzard14@gmail.com',
    doctorLastName: 'johnson'
  },{
    firstName: 'Nathaniel',
    lastName: 'Brengle',
    emailAddress: 'nathaniel.brengle@gmail.com',
    doctorLastName: 'johnson'
  },{
    firstName: 'Benjamin',
    lastName: 'Conrad',
    emailAddress: 'bconrad18@gmail.com',
    doctorLastName: 'johnson'
  },{
    firstName: 'Ru',
    lastName: 'Fang',
    emailAddress: 'RFANG2@mail.depaul.edu',
    doctorLastName: 'johnson'
  },{
    firstName: 'Chandler',
    lastName: 'Gegg',
    emailAddress: 'chandlergegg@gmail.com',
    doctorLastName: 'johnson'
  },{
    firstName: 'Gaurav',
    lastName: 'Gupta',
    emailAddress: 'gauravkrishn30@gmail.com',
    doctorLastName: 'johnson'
  },{
    firstName: 'Andrew',
    lastName: 'Johnson',
    emailAddress: 'avumimus@aol.com',
    doctorLastName: 'gegg'
  },{
    firstName: 'Jing',
    lastName: 'Li',
    emailAddress: 'jane.jingli.0810@gmail.com',
    doctorLastName: 'gegg'
  },{
    firstName: 'Wenchuang',
    lastName: 'Liu',
    emailAddress: 'lwc541117@hotmail.com',
    doctorLastName: 'gegg'
  },{
    firstName: 'Li-Wey',
    lastName: 'Lu',
    emailAddress: 'LIWEYLU@GMAIL.COM',
    doctorLastName: 'gegg'
  },{
    firstName: 'Sviatlana',
    lastName: 'Matchenia',
    emailAddress: 'vibirau@gmail.com',
    doctorLastName: 'gegg'
  },{
    firstName: 'Karrin',
    lastName: 'Melton',
    emailAddress: 'karrinjmelton@gmail.com',
    doctorLastName: 'gegg'
  },{
    firstName: 'Jay',
    lastName: 'Pan',
    emailAddress: 'jay.pan67@gmail.com',
    doctorLastName: 'gegg'
  },{
    firstName: 'Dmitry',
    lastName: 'Shatalov',
    emailAddress: 'WIZARD511@HOTMAIL.COM',
    doctorLastName: 'gegg'
  },{
    firstName: 'Junhua',
    lastName: 'Shi',
    emailAddress: 'shijh302@gmail.com',
    doctorLastName: 'gegg'
  },{
    firstName: 'Manish',
    lastName: 'Singh',
    emailAddress: 'manish_singh91@live.com',
    doctorLastName: 'gegg'
  },{
    firstName: 'Carl',
    lastName: 'Smith',
    emailAddress: 'CARLEUGENE@AOL.COM',
    doctorLastName: 'gegg'
  },{
    firstName: 'Yunyun',
    lastName: 'Tao',
    emailAddress: 'innoshatalov@gmail.com',
    doctorLastName: 'smith'
  },{
    firstName: 'Travis',
    lastName: 'Vaughn',
    emailAddress: 'travis.christopher.vaughn@gmail.com',
    doctorLastName: 'smith'
  },{
    firstName: 'Michael',
    lastName: 'Vieth',
    emailAddress: 'michaelsoccer35@gmail.com',
    doctorLastName: 'smith'
  },{
    firstName: 'Jonathan',
    lastName: 'Wilkison',
    emailAddress: 'jwilkis2@gmail.com',
    doctorLastName: 'smith'
  },{
    firstName: 'Qianru',
    lastName: 'Wu',
    emailAddress: 'qianru.wu@outlook.com',
    doctorLastName: 'smith'
  }];

  change(searchBox: HTMLInputElement): void {
    this.searchText = searchBox.value;
  }

  search(): void {
    var strs = this.searchText.split(" ");
    this.searchResult = [];
    if (strs.length > 1 && strs[0] == ('doctor')) {
      for (var index in this.patientList) {
        if (this.patientList[index].doctorLastName.toLowerCase() == strs[1].toLowerCase()) {
          this.searchResult.push(this.patientList[index]);
        }
      }
    } else if (strs.length > 1 && strs[0] == ('name')) {
      for (var index in this.patientList) {
        if (this.patientList[index].firstName.substring(0, 1).toLowerCase() == strs[1].substring(0, 1).toLowerCase()) {
          this.searchResult.push(this.patientList[index]);
        }
      }
    }
  }
}
