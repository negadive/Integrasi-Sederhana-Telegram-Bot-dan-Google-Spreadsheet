var token = "1000187105:AAG-A9ZbWPdLN5qBYc0ZIvYkQP7AkIX6V6U";
var url = "https://api.telegram.org/bot"+ token;
var chatId = "-306923829";
var ssId = "1hhMAjYTMVJEQnA6G_IM_bmq_V7jRc-1OZQ2nsyBSsIM";
var webAppUrl = "https://script.google.com/macros/s/AKfycbx2XXS7R11k2QRtcDDt1sPbohEo-3zQ7JyOygRfUEmifvk_nFM/exec";

function setWebhook() {
  var response = UrlFetchApp.fetch(url + "/setWebhook?url=" + webAppUrl);
  Logger.log(response.getContentText());
}

function sendText(id, text) {
  var response = UrlFetchApp.fetch(url + "/sendMessage?chat_id=" + chatId + "&text=" + encodeURIComponent(text));
  Logger.log(response.getContentText());
}

function doGet (e) {
  return HtmlService.createHtmlOutput("hello"+ JSON.stringify(e));
}

function doPost(e){
  var sheet = SpreadsheetApp.openById(ssId).getSheets()[0];
  var lastRow = sheet.getLastRow();
  var lastColumn = sheet.getLastColumn();
  if(lastRow && lastColumn) {
    var lastCell = sheet.getRange(lastRow, lastColumn);
    var xVal = lastCell.getValue();
    sendText(chatId, "Data yang baru saja ditambahkan : "+ xVal);
  }
}
  