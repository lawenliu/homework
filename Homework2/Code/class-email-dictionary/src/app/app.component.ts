import { Component } from '@angular/core';

export class User {
  name: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Class Email Dictionary';

  searchResult: string;

  classList: User[] = [{
    name: 'Alamri, Hassan Abdullah S',
    email: 'Avumimus@aol.com'
  },{
    name: 'Olivia Ayala',
    email: 'oliviaayalay@gmail.com'
  },{
    name: 'Adrian Baran',
    email: 'adrian.baran.30@gmail.com'
  },{
    name: 'Gabriel Bouzard',
    email: 'gabrielbouzard14@gmail.com'
  },{
    name: 'Nathaniel Brengle',
    email: 'nathaniel.brengle@gmail.com'
  },{
    name: 'Benjamin Conrad',
    email: 'bconrad18@gmail.com'
  },{
    name: 'Nupur Ketan Desai',
    email: 'nupurdesai1990@gmail.com'
  },{
    name: 'Sara El Koutbia',
    email: 'SELKOUTB@depaul.edu'
  },{
    name: 'Ru Fang',
    email: 'RFANG2@mail.depaul.edu'
  },{
    name: 'Corina Mercedes Ferrer Marcano',
    email: 'corinaferrer93@gmail.com'
  },{
    name: 'Chandler Gegg',
    email: 'chandlergegg@gmail.com'
  },{
    name: 'Gaurav Gupta',
    email: 'gauravkrishn30@gmail.com'
  },{
    name: 'Andrew Johnson',
    email: 'avumimus@aol.com'
  },{
    name: 'Jing Li',
    email: 'jane.jingli.0810@gmail.com'
  },{
    name: 'Wenchuang Liu',
    email: 'trevortyy@gmail.com'
  },{
    name: 'Li-Wey Lu',
    email: 'LIWEYLU@GMAIL.COM'
  },{
    name: 'Sviatlana Matchenia',
    email: 'vibirau@gmail.com'
  },{
    name: 'Karrin Melton',
    email: 'karrinjmelton@gmail.com'
  },{
    name: 'Jay Pan',
    email: 'jay.pan67@gmail.com'
  },{
    name: 'Hieu Dang Dac Pham',
    email: 'dachieu1701@gmail.com'
  },{
    name: 'Dmitry Shatalov',
    email: 'WIZARD511@HOTMAIL.COM'
  },{
    name: 'Junhua Shi',
    email: 'shijh302@gmail.com'
  },{
    name: 'Manish Singh',
    email: 'manish_singh91@live.com'
  },{
    name: 'Carl Smith',
    email: 'CARLEUGENE@AOL.COM'
  },{
    name: 'Yunyun Tao',
    email: 'innoshatalov@gmail.com'
  },{
    name: 'Carl Smith',
    email: 'CARLEUGENE@AOL.COM'
  },{
    name: 'Travis Vaughn',
    email: 'travis.christopher.vaughn@gmail.com'
  },{
    name: 'Michael Vieth',
    email: 'michaelsoccer35@gmail.com'
  },{
    name: 'Jonathan Wilkison',
    email: 'jwilkis2@gmail.com'
  },{
    name: 'Qianru Wu',
    email: 'qianru.wu@outlook.com'
  },{
    name: 'lawen liu',
    email: 'lwc541117@hotmail.com'
  }];

  search(searchText: HTMLInputElement): string {
    this.searchResult = "NO MATCH NAME. PLEASE TRY AGAIN";

    for (var index in this.classList) {
    	if (this.classList[index].name == searchText.value) {
    		this.searchResult = this.classList[index].email;
    	}
    }

    return this.searchResult;
  }
}
