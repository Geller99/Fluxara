const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];

const intersection = (...args) => {
    if(Array.isArray(...args) === false) return null;

    // compare each
   return args.reduce((t, e) =>  [t + e])

   
  }

  console.log(intersection(arr1, arr2, arr3));
  
  