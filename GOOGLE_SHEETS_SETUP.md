# Google Sheets Newsletter Setup Guide

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it: **"Covenant MFB Newsletter Subscribers"**
4. In the first row, add these headers:
   - **A1:** Email
   - **B1:** Timestamp
   - **C1:** Source

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste the following script:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Extract email and other details
    const email = data.email;
    const timestamp = data.timestamp || new Date().toISOString();
    const source = data.source || "Newsletter Subscription";
    
    // Check if email already exists
    const emailColumn = sheet.getRange("A:A").getValues();
    const emailExists = emailColumn.some(row => row[0] === email);
    
    if (emailExists) {
      return ContentService.createTextOutput(
        JSON.stringify({ status: "error", message: "Email already subscribed" })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Append new row with data
    sheet.appendRow([email, timestamp, source]);
    
    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({ status: "success", message: "Subscription successful" })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ status: "ok", message: "Newsletter API is running" })
  ).setMimeType(ContentService.MimeType.JSON);
}
```

4. Click **Save** (💾 icon) and name it: **"Newsletter Subscription Handler"**

## Step 3: Deploy the Script

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure settings:
   - **Description:** Newsletter Subscription API
   - **Execute as:** Me (your email)
   - **Who has access:** Anyone
5. Click **Deploy**
6. **Authorize** the script (you may see a security warning - click "Advanced" → "Go to [project name]")
7. **Copy the Web App URL** - it should look like:
   ```
   https://script.google.com/macros/s/AKfycbx.../exec
   ```

## Step 4: Configure Environment Variable

1. Create `.env.local` file in your project root (if it doesn't exist)
2. Add the following line with your copied URL:

```env
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec
```

3. Save the file

## Step 5: Test the Integration

### Local Testing:
1. Start your development server: `npm run dev`
2. Go to any page with the newsletter form
3. Enter an email and click Subscribe
4. Check your Google Sheet - a new row should appear!

### Production:
1. Add the environment variable to your hosting platform:
   - **Vercel:** Project Settings → Environment Variables
   - **Netlify:** Site Settings → Environment Variables
   - Add: `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` with your Web App URL

2. Redeploy your site

## Troubleshooting

### If subscriptions aren't working:

1. **Check the Web App URL** - Make sure it ends with `/exec`
2. **Verify permissions** - The script should be set to "Anyone" can access
3. **Check browser console** - Look for any error messages
4. **Test the script directly:**
   - Open the Web App URL in your browser
   - You should see: `{"status":"ok","message":"Newsletter API is running"}`

### If you need to update the script:

1. Make changes in Apps Script editor
2. Click **Deploy** → **Manage deployments**
3. Click the pencil icon to edit
4. Change version to "New version"
5. Click **Deploy**
6. The URL remains the same, no need to update `.env.local`

## Data Structure in Google Sheet

Each subscription will create a row with:
- **Email:** Subscriber's email address
- **Timestamp:** Date and time of subscription (ISO format)
- **Source:** Always "Newsletter Subscription"

## Security Notes

- The script validates email format on the client side
- Duplicate emails are prevented (checked in the script)
- The Web App URL is public but only accepts POST requests with proper data structure
- Consider adding additional validation or rate limiting if needed

## Optional: Email Notifications

To get notified when someone subscribes, add this to your Apps Script:

```javascript
// Add after sheet.appendRow([email, timestamp, source]);
MailApp.sendEmail({
  to: "your-email@covenantmfb.com",
  subject: "New Newsletter Subscription",
  body: `New subscriber: ${email}\nTime: ${timestamp}`
});
```
