// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ - Assertion passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌ - Assertion failed: ${actual} !== ${expected}`);
//   }
// };

// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !==  arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// }


const eqObjects = function(object1, object2) {
  let matches = true;
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    matches = false;
  }
  for (const key in object1) {
    if (typeof object1[key] === 'object') {
      if (typeof object2[key] !== 'object') {
        matches = false;
      }
      if (typeof object2 === 'object') {
        matches = eqObjects(object1[key], object2[key]);
      }
    } else {
      if (object1[key] !== object2[key]) {
        matches = false;
      }
    }
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        matches = false;
      }
    }
  }
  return matches;
}


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };

// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };

// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);

// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false



// BELOW IS MY OLD EQOBJECTS FUNCTION

// const eqObjects = function(object1, object2) {
//   if (Object.keys(object1).length !== Object.keys(object2).length) {
//     return false;
//   }
//   for (const key in object1) {
//     if (Array.isArray(object1[key])) {
//       if (!eqArrays(object1[key], object2[key])) {
//         return false;
//       }
//     } else if (object1[key] !== object2[key]) {
//       return false;
//     }
//   }
//   return true;
// }

module.exports = eqObjects;