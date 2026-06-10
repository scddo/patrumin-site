# GIPS Download Log → Google Sheet Setup

Every GIPS report form submission (name, email, report, view/download, timestamp) gets appended as a row in a Google Sheet. One-time setup, about 5 minutes, free.

## 1. Create the spreadsheet

Go to sheets.google.com and create a new spreadsheet. Name it something like "Patrumin GIPS Distribution Log".

## 2. Add the script

In that spreadsheet: **Extensions → Apps Script**. Delete whatever is in the editor and paste this:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Log")
           || SpreadsheetApp.getActiveSpreadsheet().insertSheet("Log");

  // Header row on first write
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Date (UTC)", "Name", "Email", "Report", "Action"]);
  }

  var d = JSON.parse(e.postData.contents);
  sheet.appendRow([d.date, d.name, d.email, d.report, d.mode]);

  return ContentService.createTextOutput("ok");
}
```

Save (Ctrl/Cmd+S).

## 3. Deploy as a web app

1. Click **Deploy → New deployment**.
2. Gear icon → select **Web app**.
3. Settings:
   - Execute as: **Me**
   - Who has access: **Anyone** (required — site visitors are anonymous)
4. Click **Deploy**, authorize when prompted, and copy the **Web app URL** (ends in `/exec`).

## 4. Connect the site

In `script.js`, find this line near the GIPS modal code:

```javascript
const GIPS_LOG_ENDPOINT = "";
```

Paste the URL between the quotes:

```javascript
const GIPS_LOG_ENDPOINT = "https://script.google.com/macros/s/XXXX/exec";
```

Done. Submissions now append to the "Log" tab of the sheet.

## Notes

- The write happens **before** the PDF is served (Marketing Rule recordkeeping). If the network call fails, a backup copy is kept in the visitor's browser localStorage under `patrumin-gips-log`, and the report is still served.
- The "Anyone" access setting only allows appending via this script — it does not expose the sheet's contents.
- If you ever update the Apps Script code, redeploy via **Deploy → Manage deployments → Edit (pencil) → Version: New version**, or the live URL keeps running the old code.
