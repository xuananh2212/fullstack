// var action = "1";

// switch (action) {
//   case "create":
//     console.log("them");
//     break;

//   case "edit":
//     console.log("sua");
//     break;
//   case "delete":
//     console.log("xoa");
//     break;
//   default:
//     console.log("danh sach");
//     break;
// }

// if (action === "create" || action === "insert" || action === "add") {
//   console.log("them");
// } else if (action === "edit") {
//   console.log("sua");
// } else if (action === "delete" || action === "destroy" || action === "remove") {
//   console.log("xoa");
// } else {
//   console.log("danh sach");
// }

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("31 ngay");
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("30 ngay");

  default:
    console.log("29 ngay");
    break;
}