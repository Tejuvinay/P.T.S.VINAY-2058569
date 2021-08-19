let numb:number[] = [0, 1, 2, 2.33, 43, 554];
numb.push(123);

for (let i = 0; i <= numb.length; i++) {

    console.log(numb[i]);
}
let  mixed: (string | number | boolean)[] = [ 23, "vinay", "Teju", 23, true];
for (let i = 0; i <= mixed.length; i++) {

    console.log(mixed[i]);
}