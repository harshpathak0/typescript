var Days;
(function (Days) {
    Days[Days["sun"] = 0] = "sun";
    Days[Days["mon"] = 1] = "mon";
    Days[Days["tue"] = 2] = "tue";
    Days[Days["wed"] = 3] = "wed";
    Days[Days["thur"] = 4] = "thur";
    Days[Days["fri"] = 5] = "fri";
    Days[Days["sat"] = 6] = "sat";
})(Days || (Days = {}));
var whichDay;
console.log(Days[1]);
// function whichDay(day:Days){
//     return day;
// }
// console.log(whichDay(Days.sat))
// enum Role{
//   admin, hr, manager
//  }
//  function whichDay(day:Days){
//     return day;
// }
// console.log(whichDay(Days.sat))
