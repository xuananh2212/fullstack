var action = "create";

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

if (action == "create" || action == "insert" || action == "add") {
  console.log("them");
} else if (action == "edit") {
  console.log("sua");
} else if (action == "delete") {
  console.log("xoa");
} else {
  console.log("danh sach");
}
