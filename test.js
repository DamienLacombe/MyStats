const array = ['test','uj', 'ok', 'ok', 'pm', 'pm'];

const creator = {

};

let i, j;
let count1;
let count2;

for (i = 0; i < array.length - 1; i++) {
    creator[array[i]] = 0;
    
    for(j = 0; j < array.length; j++) {

        if(array[i] == array[j]) {
            creator[array[i]] += 1;
        }
    }
} 

console.log(creator);