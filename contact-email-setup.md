# Contact button → email setup

The hero headshot button opens a contact form (name, email, message). Out of the
box it works immediately using a **mailto fallback**: on submit it opens the
visitor's own email app pre-filled to `scdedio@patrumin.com`.

To upgrade to **real server-side sending** (the message just lands in the inbox,
the visitor never sees their email client), deploy the tiny Google Apps Script
below and paste its URL into `script.js`. This is the same free Google
infrastructure already used for the GIPS form.

---

## 1. Create the Apps Script

1. Go to <https://script.google.com> → **New project**.
2. Delete the placeholder code and paste this in:

```javascript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var to = "scdedio@patrumin.com";
    var subject = "Website inquiry from " + (data.name || "Unknown");
    var body =
      "New message from the Patrumin website contact button.\n\n" +
      "Name:  " + (data.name || "") + "\n" +
      "Email: " + (data.email || "") + "\n" +
      "Date:  " + (data.date || new Date().toISOString()) + "\n\n" +
      "Message:\n" + (data.message || "");

    var options = {};
    if (data.email) options.replyTo = data.email; // hit Reply to answer the sender

    MailApp.sendEmail(to, subject, body, options);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Save the project (give it any name, e.g. "Patrumin contact form").

## 2. Deploy it as a web app

1. Click **Deploy → New deployment**.
2. Gear icon → choose **Web app**.
3. Set:
   - **Execute as:** Me (your Google account — this is the account the email is sent *from*).
   - **Who has access:** Anyone.
4. Click **Deploy**, then **Authorize access** and approve the permission prompt
   (it needs permission to send email on your behalf).
5. Copy the **Web app URL** it gives you (ends in `/exec`).

## 3. Wire it into the site

Open `script.js`, find this line near the bottom:

```javascript
const CONTACT_FORM_ENDPOINT = "";
```

Paste your URL between the quotes:

```javascript
const CONTACT_FORM_ENDPOINT = "https://script.google.com/macros/s/AKfy.../exec";
```

Save. Done — submissions now email `scdedio@patrumin.com` automatically, and the
sender's address is set as Reply-To so you can just hit Reply.

---

### Notes
- Until the endpoint is filled in, the form uses the mailto fallback, so the
  button is fully functional right now.
- Every submission is also kept in the browser's local storage under
  `patrumin-contact-log` as a safety net.
- To change the recipient, edit `to` in the script **and** `CONTACT_RECIPIENT`
  in `script.js`.
- Free Gmail accounts can send ~100 emails/day via MailApp; Workspace accounts
  ~1,500/day — far more than a contact form needs.
