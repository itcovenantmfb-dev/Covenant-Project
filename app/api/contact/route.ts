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
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #1D9B5E; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background-color: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .field-label { font-weight: bold; color: #1D9B5E; margin-bottom: 5px; }
              .field-value { background-color: white; padding: 10px; border-radius: 4px; border-left: 3px solid #1D9B5E; }
              .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">New Contact Form Submission</h2>
                <p style="margin: 5px 0 0 0; opacity: 0.9;">Covenant Microfinance Bank Website</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="field-label">Full Name:</div>
                  <div class="field-value">${fullName}</div>
                </div>
                
                <div class="field">
                  <div class="field-label">Email:</div>
                  <div class="field-value"><a href="mailto:${email}">${email}</a></div>
                </div>
                
                <div class="field">
                  <div class="field-label">Phone Number:</div>
                  <div class="field-value"><a href="tel:${phone}">${phone}</a></div>
                </div>
                
                <div class="field">
                  <div class="field-label">Subject:</div>
                  <div class="field-value">${subject}</div>
                </div>
                
                <div class="field">
                  <div class="field-label">Message:</div>
                  <div class="field-value">${message.replace(/\n/g, '<br>')}</div>
                </div>
                
                <div class="footer">
                  <p>This email was sent from the Covenant MFB website contact form.</p>
                  <p>Submitted on: ${new Date().toLocaleString('en-NG', { 
                    timeZone: 'Africa/Lagos',
                    dateStyle: 'full',
                    timeStyle: 'long'
                  })}</p>
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
