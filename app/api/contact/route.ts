import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, phone, subject, message } = body;

    // Validate required fields
    if (!fullName || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Covenant MFB Contact <onboarding@resend.dev>', // Use your verified domain later
      to: [process.env.CONTACT_EMAIL || 'office@covenantmfb.com.ng'],
      replyTo: email, // Allow direct reply to the customer
      subject: `New Contact Form: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body { 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6; 
                color: #1f2937;
                background-color: #f9fafb;
                padding: 20px;
              }
              .container { 
                max-width: 600px; 
                margin: 0 auto; 
                background: white;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
              }
              .header { 
                background: linear-gradient(135deg, #1D9B5E 0%, #16803D 100%);
                color: white; 
                padding: 32px 24px;
                text-align: center;
              }
              .header h1 { 
                font-size: 24px; 
                font-weight: 600;
                margin-bottom: 8px;
                letter-spacing: -0.025em;
              }
              .header p { 
                font-size: 14px; 
                opacity: 0.95;
                font-weight: 400;
              }
              .content { 
                padding: 32px 24px;
              }
              .info-grid {
                display: grid;
                gap: 20px;
              }
              .info-item {
                border-bottom: 1px solid #e5e7eb;
                padding-bottom: 16px;
              }
              .info-item:last-child {
                border-bottom: none;
                padding-bottom: 0;
              }
              .label { 
                font-size: 12px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                color: #6b7280;
                margin-bottom: 8px;
              }
              .value { 
                font-size: 15px;
                color: #111827;
                word-wrap: break-word;
              }
              .value a {
                color: #1D9B5E;
                text-decoration: none;
              }
              .value a:hover {
                text-decoration: underline;
              }
              .message-box {
                background-color: #f9fafb;
                border-radius: 8px;
                padding: 16px;
                font-size: 15px;
                color: #374151;
                line-height: 1.7;
              }
              .footer { 
                margin-top: 32px;
                padding-top: 24px;
                border-top: 1px solid #e5e7eb;
                text-align: center;
              }
              .footer p { 
                font-size: 13px; 
                color: #6b7280;
                margin-bottom: 4px;
              }
              .timestamp {
                display: inline-block;
                margin-top: 8px;
                padding: 6px 12px;
                background-color: #f3f4f6;
                border-radius: 6px;
                font-size: 12px;
                color: #4b5563;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Contact Form Submission</h1>
                <p>Covenant Microfinance Bank</p>
              </div>
              
              <div class="content">
                <div class="info-grid">
                  <div class="info-item">
                    <div class="label">Full Name</div>
                    <div class="value">${fullName}</div>
                  </div>
                  
                  <div class="info-item">
                    <div class="label">Email Address</div>
                    <div class="value"><a href="mailto:${email}">${email}</a></div>
                  </div>
                  
                  <div class="info-item">
                    <div class="label">Phone Number</div>
                    <div class="value"><a href="tel:${phone}">${phone}</a></div>
                  </div>
                  
                  <div class="info-item">
                    <div class="label">Subject</div>
                    <div class="value">${subject}</div>
                  </div>
                  
                  <div class="info-item">
                    <div class="label">Message</div>
                    <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
                  </div>
                </div>
                
                <div class="footer">
                  <p>Submitted via website contact form</p>
                  <div class="timestamp">
                    ${new Date().toLocaleString('en-NG', { 
                      timeZone: 'Africa/Lagos',
                      dateStyle: 'medium',
                      timeStyle: 'short'
                    })}
                  </div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
      data,
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
