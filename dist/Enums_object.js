"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Enum
var Equipment;
(function (Equipment) {
    //Number or String
    Equipment["Hair"] = "hair";
    Equipment["Face"] = "face";
    Equipment["Top"] = "top";
    Equipment["Bottom"] = "bottom";
    Equipment["Shoes"] = "shoes";
})(Equipment || (Equipment = {}));
console.log(Equipment.Hair); // Output: hair
console.log(Equipment.Face); // Output: face
//Object
const roles = {
    admin: 1,
    user: 2,
    guest: 3
};
console.log(roles.admin); // Output: 1
console.log(roles.user); // Output: 2
console.log(roles.guest); // Output: 3
