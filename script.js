function doGet() {
    var form = HtmlService.createHtmlOutputFromFile('FormUI');
    form.setTitle("Severity Decision Flow")
    return form;
    }
    function submitLog(Task, email, evaluationType, finalAnswer) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Logs");
    sheet.appendRow([
    new Date(),
    Task,
    email,
    evaluationType,
    finalAnswer
    ]);
    }