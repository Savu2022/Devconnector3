// array is collectionof similar type content.
// 10, 20, 30, 40, 50,  60, 70, 80, 90, 100,
var a = [10, 20, 30, 40, 50];

// array position reference will start at 0.
// the last index : size-1

for (const i of a) {
    console.log(i);
}

for (let i = 0; i < a.length; i++) {
    let element = a[i];
    console.log(element);
}