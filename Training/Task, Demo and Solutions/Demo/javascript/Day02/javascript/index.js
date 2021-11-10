console.log('Hello');
//Primitive DataTypes
//Number, String, Boolean, Symbols.
var var1;
console.log(var1);
var1 = 1;
console.log(var1);
console.log(typeof(var1));
var1 = "Good Morning";
console.log(var1);
console.log(typeof(var1));
var1 = true;
console.log(var1);
console.log(typeof(var1));
var1 = null;
console.log(var1);
console.log(typeof(var1));
var1 = undefined;
console.log(var1);
console.log(typeof(var1));

// Reference data types
var var2;
var2 = [1215,'asgagg', true];
console.log(var2);
console.log(typeof(var2));
var2 = {'abc':'val1', asfa: 12415};
console.log(var2);
console.log(typeof(var2));
var2 = function (a,b,c){
    console.log('Hi, there!');
    console.log(a+b+c);
};
var2(1,2,3);
var2 = Date(21, 10, 2021);
console.log(var2);
console.log(typeof(DATE));

let var3 = 1;
console.log(var3);
console.log(typeof(var3));
var3 = var3.toString();
console.log(var3);
console.log(typeof(var3));
var3 = '151';
console.log(var3);
console.log(typeof(var3));
var3 = Number(var3);
console.log(var3);
console.log(typeof(var3));
var3 = Number(true);
console.log(var3);
var3 = Number(false);
console.log(var3);
var3 = Number('Hello World');
console.log(var3);

let var4 = parseInt('100.1241');
console.log(var4);
var4 =  parseFloat('100.91500000');
console.log(var4);