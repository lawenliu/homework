class Set {

  constructor() {
    // Set properties
    this.data = [];
  }

  add(elem) {
    if (typeof(elem) != 'string' && typeof(elem) != 'number') {
      console.log("Error occur: You only allow add string or number");
    } else if (!this.data.includes(elem)) {
      this.data.push(elem);
    }
  }

  remove(elem) {
    var index = this.data.indexOf(elem);
    if (index > -1) {
      this.data.splice(index, 1);
    }
  }

  getData() {
    return this.data;
  }
}

let s = new Set();
s.add(4);
s.add('foo');
s.add('bar');
s.add(4);

console.log(s); // contents of expected output => { 4, foo, bar }
s.remove(4);
console.log(s); // contents of expected output => { foo, bar }
s.add( {'foo': 'foo'}); // ==> incorrect element type.
