function Dictionary(){
    this.add = add;
    this.datastore = {};
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
}

function add(key,value){
    this.datastore[key] = value;
}

function find(key){
    return this.datastore[key];
}

function remove(key){
    delete this.datastore[key];
}

function showAll(){
    for(var key in this.datastore){
        console.log(key + "-> " + this.datastore[key]);
    }
}

var myPhoneBook = new Dictionary();

myPhoneBook.add("Mike", "343-4343");
myPhoneBook.add("Julie", "363-8743");
myPhoneBook.add("Fred", "303-4003");









