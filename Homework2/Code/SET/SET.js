var Set = {
  data: [],
	
  add: function(elem) {
    if (typeof(elem) != 'string' && typeof(elem) != 'number') {
      console.log("Error occur: You only allow add string or number");
    } else if (!this.data.includes(elem)) {
      this.data.push(elem);
    }
  },

  remove: function(elem) {
    var index = this.data.indexOf(elem);
    if (index > -1) {
      this.data.splice(index, 1);
    }
  },
	
	getData: function() {
		return this.data;
	}
}

Set.add("test");
console.log(Set.getData());
Set.add(1);
console.log(Set.getData());
Set.add("test");
console.log(Set.getData());
Set.add({});
console.log(Set.getData());
Set.remove("test");
console.log(Set.getData());
Set.remove(1);
console.log(Set.getData());
