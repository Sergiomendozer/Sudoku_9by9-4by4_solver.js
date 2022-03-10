var div1 = document.getElementById("div1");
var text = "<h1>Detective Sudoku solver</h1>";
document.getElementById("div1").innerHTML = text;

var table_1 = document.getElementById("table_1");
var table_2 = document.getElementById("table_2");
var table_3 = document.getElementById("table_3");
var table_4 = document.getElementById("table_4");
var sudoku_1 = [
  [0, 0, 0, 0],
  [1, 0, 2, 0],
  [0, 1, 4, 0],
  [2, 0, 0, 1],
];
var sudoku_0 = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

var sudoku_1 = [
  [0, 0, 0, 0],
  [1, 0, 2, 0],
  [0, 1, 4, 0],
  [2, 0, 0, 1],
];

var sudoku_2 = [
  [0, 4, 3, 0],
  [3, 0, 0, 0],
  [2, 0, 1, 0],
  [0, 0, 0, 0],
];
var sudoku_3 = [
  [0, 0, 0, 2],
  [0, 2, 4, 0],
  [0, 0, 1, 0],
  [0, 4, 0, 3],
];
var sudoku_4 = [
  [0, 4, 0, 3],
  [0, 2, 0, 0],
  [0, 0, 0, 0],
  [0, 3, 4, 1],
];
var sudoku_5 = [
  [0, 3, 0, 0],
  [1, 0, 0, 3],
  [0, 0, 0, 1],
  [2, 0, 0, 0],
];
var sudoku_6 = [
  [3, 0, 0, 0],
  [0, 4, 3, 0],
  [1, 0, 0, 2],
  [0, 2, 1, 0],
];
var sudoku_7 = [
  [0, 4, 0, 2],
  [1, 0, 0, 0],
  [0, 0, 3, 0],
  [4, 0, 0, 1],
];
var sudoku_8 = [
  [3, 0, 0, 1],
  [0, 4, 2, 0],
  [0, 1, 0, 0],
  [2, 0, 0, 4],
];
var sudoku_9 = [
  [0, 0, 1, 0],
  [0, 4, 0, 0],
  [0, 0, 0, 2],
  [0, 2, 3, 0],
];
var sudoku_10 = [
  [0, 3, 2, 0],
  [4, 0, 0, 1],
  [2, 0, 0, 3],
  [0, 1, 4, 0],
];
var sudoku_11 = [
  [0, 4, 0, 0],
  [2, 0, 0, 3],
  [4, 0, 1, 0],
  [0, 0, 0, 0],
];
var sudoku_12 = [
  [3, 0, 0, 4],
  [2, 0, 0, 0],
  [1, 0, 4, 3],
  [0, 0, 0, 0],
];
var sudoku_13 = [
  [0, 0, 0, 2],
  [0, 3, 0, 4],
  [1, 0, 0, 0],
  [0, 2, 0, 0],
];
var sudoku_14 = [
  [4, 0, 3, 0],
  [0, 1, 0, 2],
  [0, 3, 0, 4],
  [2, 0, 1, 0],
];
var sudoku_15 = [
  [0, 2, 3, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [4, 0, 0, 1],
];
var sudoku_16 = [
  [4, 0, 0, 0],
  [0, 3, 0, 2],
  [0, 1, 0, 0],
  [0, 0, 0, 3],
];
var sudoku_17 = [
  [3, 0, 0, 0],
  [0, 0, 4, 0],
  [4, 0, 0, 0],
  [0, 3, 1, 0],
];
var sudoku_18 = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
var sudoku_19 = [
  [0, 0, 1, 0],
  [0, 0, 0, 3],
  [0, 1, 0, 2],
  [4, 0, 3, 0],
];
var sudoku_20 = [
  [3, 0, 0, 0],
  [0, 4, 1, 0],
  [0, 2, 0, 0],
  [1, 0, 4, 0],
];
var sudoku_21 = [
  [3, 0, 4, 0],
  [0, 0, 0, 1],
  [0, 2, 0, 0],
  [1, 0, 0, 4],
];
var sudoku_22 = [
  [0, 4, 0, 0],
  [0, 0, 2, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 3],
];
var sudoku_23 = [
  [0, 0, 0, 0],
  [1, 4, 0, 0],
  [0, 0, 2, 0],
  [0, 2, 4, 0],
];
var sudoku_24 = [
  [0, 0, 0, 0],
  [0, 0, 4, 3],
  [2, 0, 0, 4],
  [3, 0, 1, 0],
];
var sudoku_25 = [
  [0, 1, 0, 3],
  [2, 0, 0, 0],
  [0, 0, 3, 0],
  [0, 2, 0, 1],
];
var sudoku_26 = [
  [0, 0, 0, 4],
  [0, 2, 3, 0],
  [1, 0, 4, 0],
  [0, 0, 0, 0],
];
var sudoku_27 = [
  [0, 1, 2, 0],
  [0, 0, 0, 0],
  [3, 0, 0, 0],
  [0, 2, 0, 4],
];
var sudoku_28 = [
  [3, 0, 0, 0],
  [0, 2, 4, 0],
  [0, 0, 2, 0],
  [0, 1, 0, 0],
];
var sudoku_29 = [
  [0, 0, 3, 0],
  [0, 2, 1, 0],
  [1, 0, 0, 2],
  [0, 4, 3, 0],
];
var sudoku_30 = [
  [0, 0, 0, 4],
  [0, 2, 3, 0],
  [0, 3, 0, 2],
  [0, 0, 1, 0],
];
var sudoku_31 = [
  [2, 0, 0, 0],
  [1, 4, 0, 0],
  [0, 0, 3, 1],
  [0, 0, 0, 2],
];
var sudoku_32 = [
  [0, 0, 0, 0],
  [2, 0, 0, 3],
  [0, 0, 3, 0],
  [0, 4, 0, 1],
];
var sudoku_33 = [
  [2, 0, 0, 4],
  [0, 4, 0, 0],
  [0, 0, 0, 0],
  [0, 3, 0, 1],
];
var sudoku_34 = [
  [2, 0, 0, 0],
  [3, 1, 0, 0],
  [0, 0, 0, 3],
  [0, 0, 4, 2],
];
var sudoku_35 = [
  [0, 3, 0, 1],
  [0, 0, 0, 0],
  [0, 2, 0, 0],
  [4, 0, 2, 0],
];
var sudoku_36 = [
  [3, 0, 4, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 0],
  [4, 0, 0, 2],
];
var sudoku_37 = [
  [0, 2, 0, 0],
  [4, 0, 3, 0],
  [1, 0, 0, 0],
  [0, 3, 4, 0],
];
var sudoku_38 = [
  [2, 3, 0, 0],
  [0, 0, 0, 0],
  [1, 0, 0, 2],
  [0, 0, 4, 0],
];
var sudoku_39 = [
  [0, 1, 0, 3],
  [0, 0, 4, 0],
  [0, 2, 0, 0],
  [0, 0, 1, 0],
];
var sudoku_40 = [
  [0, 0, 2, 0],
  [1, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 3, 0, 4],
];
var sudoku_41 = [
  [0, 4, 0, 0],
  [0, 0, 0, 1],
  [0, 3, 0, 0],
  [2, 0, 0, 4],
];
var sudoku_42 = [
  [2, 0, 0, 0],
  [0, 4, 0, 0],
  [0, 0, 0, 3],
  [4, 0, 0, 1],
];
var sudoku_43 = [
  [0, 0, 0, 1],
  [3, 0, 4, 0],
  [1, 0, 0, 0],
  [0, 2, 0, 3],
];
var sudoku_44 = [
  [0, 0, 1, 4],
  [0, 0, 0, 0],
  [0, 3, 0, 0],
  [1, 0, 0, 2],
];
var sudoku_45 = [
  [0, 2, 4, 0],
  [0, 0, 0, 0],
  [3, 0, 0, 0],
  [0, 4, 0, 1],
];
var sudoku_46 = [
  [4, 0, 3, 0],
  [0, 0, 0, 2],
  [0, 3, 0, 4],
  [0, 0, 1, 0],
];
var sudoku_47 = [
  [4, 0, 0, 3],
  [0, 1, 4, 0],
  [2, 0, 0, 1],
  [0, 3, 0, 0],
];
var sudoku_48 = [
  [3, 2, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 1],
  [1, 0, 0, 3],
];
var sudoku_49 = [
  [4, 0, 3, 0],
  [0, 2, 0, 0],
  [0, 4, 0, 0],
  [2, 0, 0, 1],
];
var sudoku_50 = [
  [0, 0, 0, 0],
  [0, 4, 0, 3],
  [0, 3, 0, 0],
  [2, 0, 0, 4],
];
var sudoku = sudoku_1;

var sudoku_a = [
  [3, 0, 0, 4],
  [0, 4, 1, 0],
  [0, 0, 3, 1],
  [0, 0, 0, 0],
];
var sudoku_b = [
  [0, 0, 4, 1],
  [0, 0, 0, 0],
  [4, 0, 3, 0],
  [0, 2, 0, 0],
];
var sudoku_c = [
  [4, 0, 0, 0],
  [0, 3, 2, 0],
  [3, 0, 0, 0],
  [0, 4, 1, 0],
];
var sudoku_d = [
  [0, 0, 1, 0],
  [0, 0, 0, 4],
  [0, 1, 0, 2],
  [4, 0, 0, 0],
];
var sudoku_e = [
  [0, 0, 1, 0],
  [4, 0, 0, 3],
  [0, 2, 4, 0],
  [1, 0, 0, 0],
];
var sudoku_f = [
  [0, 3, 0, 0],
  [1, 0, 2, 0],
  [0, 0, 0, 0],
  [0, 2, 4, 0],
];
var sudoku_g = [
  [2, 0, 0, 0],
  [0, 3, 1, 0],
  [0, 0, 0, 0],
  [1, 0, 0, 4],
];
var sudoku_h = [
  [0, 0, 0, 0],
  [1, 0, 3, 0],
  [0, 3, 0, 4],
  [0, 0, 2, 0],
];
var sudoku_i = [
  [0, 0, 0, 0],
  [0, 3, 0, 1],
  [4, 0, 0, 3],
  [0, 2, 0, 4],
];
var sudoku_jk = [
  [0, 0, 0, 0],
  [0, 3, 2, 0],
  [0, 0, 1, 0],
  [0, 4, 3, 0],
];

var table = sudoku_29;
// cases that do not work:
//29

var first_col = table[0];
var second_col = table[1];
var third_col = table[2];
var forth_col = table[3];

document.getElementById("table_1").innerHTML = first_col;
document.getElementById("table_2").innerHTML = second_col;
document.getElementById("table_3").innerHTML = third_col;
document.getElementById("table_4").innerHTML = forth_col;
var solved_table = [];
//////////////////////////////////
function find_empty_space(table) {
  // function goes from right to left of table finding every empty space, empty space ==  0,
  console.log("function find_empty_space()");
  console.table(table); //!for testing it displays table
  //for loops go through 1-4
  // var meanings r = row, c = column
  var s = table[0].indexOf(0);
  var d = table[1].indexOf(0);
  var f = table[2].indexOf(0);
  var g = table[3].indexOf(0);
  console.log(s, d, f, g);
  if (
    table[0].indexOf(0) == -1 &&
    table[1].indexOf(0) == -1 &&
    table[2].indexOf(0) == -1 &&
    table[3].indexOf(0) == -1
  ) {
    console.log("Detective Sudoku Solver has solved your table");
    var solved_table = table; //!this is for later
    return true;
  } else {
    for (var r = 0; r < 5; r++) {
      for (var c = 0; c < 5; c++) {
        // console.log(`row: ${r}`); //!for testing
        // console.log(`column: ${c}`); //!for testing
        // if object in array is equal to  0 then it means the space is empty
        if (table[r][c] == 0) {
          return [r, c];
        }
      }
    }
  }
}
function check_if_number_can_go_in_position(table, n, r, c) {
  console.log("function check_if_number_can_go_in_position()");
  console.log(`row ${table[r]}`);
  // var below makes a array of tables column that is need to search for n
  var column_c = table.map((d) => d[c]);
  console.log(`col ${column_c}`);
  if (table[r].indexOf(n) != -1) {
    console.log("backtrack r");
    return false;
  }
  if (column_c.indexOf(n) != -1) {
    console.log("backtrack c");
    return false;
  }
  return true;
}

// this is the main function
function sudoku_solver(table) {
  // contains all other sub functions this is the main function
  //r = row, c = column
  // function goes from right to left of table finding every empty space, empty
  var values = find_empty_space(table);
  if (values === true) return true;
  console.log(values);
  var r = values[0];
  var c = values[1];
  console.log("in one");
  for (var n = 1; n < 5; n++) {
    console.log(`n = ${n}`);
    if (check_if_number_can_go_in_position(table, n, r, c) == true) {
      table[r][c] = n;
      console.table(table);
      if (sudoku_solver(table) === true) return true;
    }
  } // if function (check_if_number_can_go_in_position(table, n, r, c) == false)
  table[r][c] = 0;
}

sudoku_solver(table);
