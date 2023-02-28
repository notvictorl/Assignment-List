/** @OnlyCurrentDoc */

function SortbyDate() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('D1').activate();
  spreadsheet.getActiveSheet().getFilter().sort(4, true);
};

function HidePastAssignments() {
  var activeSheet = SpreadsheetApp.getActive().getActiveSheet();
  var rangeValues = activeSheet.getDataRange().getValues();
  var today000000 = new Date(new Date().toDateString());

  for (var i = 1; rangeValues[i][0]; i++) {
    if (rangeValues[i][3] < today000000) {
      activeSheet.hideRows(i+1);
    }
  }
};

function ShowAllAssignments() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getActiveSheet().showRows(2, spreadsheet.getLastRow() - 2);
};
