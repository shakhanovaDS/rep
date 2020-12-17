let obj1 = {
    name: 'Dasha',
    surname: 'Krasivaya'
}
let obj2 = {
    name: 'bobba',
    age: 26,
    nextAge: this.age+1,
    get: function(){console.log(this.name)}
}
obj2.get();
var name = 'Dasha';
var func = obj2.get;
func();
