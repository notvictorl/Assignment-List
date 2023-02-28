/** @OnlyCurrentDoc */

function SortbyDate() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('D1').activate();
  spreadsheet.getActiveSheet().getFilter().sort(4, true);
};

function HidePastAssignments() {
  var spreadsheet = SpreadsheetApp.getActive();
  var rangeValues = spreadsheet.getDataRange().getValues();

  for (var i = 1; rangeValues[i][0]; i++) {
    if (rangeValues[i][3] < new Date()) {
      spreadsheet.getRange(i + ':' + i).activate();
      spreadsheet.getActiveSheet().hideRows(spreadsheet.getActiveRange().getRow(), spreadsheet.getActiveRange().getNumRows());
    }
  }
};

function ShowAllAssignments() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getActiveSheet().showRows(2, spreadsheet.getLastRow() - 2);
};
