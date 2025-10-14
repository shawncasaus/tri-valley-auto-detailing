import { NextRequest, NextResponse } from 'next/server';
import { sendContactFormEmails, EmailData } from '@/lib/sendgrid';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'street', 'city', 'state', 'zip', 'description'];
    const missingFields = requiredFields.filter(field => !body[field] || body[field].trim() === '');
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log the submission for debugging
    console.log('Contact form submission:', {
      timestamp: new Date().toISOString(),
      customerInfo: {
        name: `${body.firstName} ${body.lastName}`,
        email: body.email,
        phone: body.phone || 'Not provided',
        location: `${body.street}, ${body.city}, ${body.state} ${body.zip}`,
        vehicle: body.vehicle || 'Not specified',
        description: body.description,
        availability: body.availability || []
      }
    });

    // Send emails via SendGrid
    const emailResults = await sendContactFormEmails(body as EmailData);
    
    // Check if emails were sent successfully
    const businessEmailSent = emailResults.businessEmail.success;
    const customerEmailSent = emailResults.customerEmail.success;
    
    if (!businessEmailSent && !customerEmailSent) {
      console.error('Both emails failed to send:', {
        businessError: emailResults.businessEmail.error,
        customerError: emailResults.customerEmail.error
      });
      
      return NextResponse.json(
        { 
          error: 'Failed to send emails. Please try again or contact us directly.',
          success: false 
        },
        { status: 500 }
      );
    }

    // Log email results
    console.log('Email sending results:', {
      businessEmail: businessEmailSent ? 'Sent' : `Failed: ${emailResults.businessEmail.error}`,
      customerEmail: customerEmailSent ? 'Sent' : `Failed: ${emailResults.customerEmail.error}`,
      businessMessageId: emailResults.businessEmail.messageId,
      customerMessageId: emailResults.customerEmail.messageId
    });

    // Return success even if only one email was sent
    const message = businessEmailSent && customerEmailSent 
      ? 'Thank you for your inquiry! We will get back to you within 24 hours.'
      : businessEmailSent 
        ? 'Thank you for your inquiry! We received your message and will respond soon.'
        : 'Thank you for your inquiry! We will get back to you within 24 hours.';
    
    return NextResponse.json(
      { 
        message,
        success: true,
        emailsSent: {
          business: businessEmailSent,
          customer: customerEmailSent
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { 
        error: 'Internal server error. Please try again later.',
        success: false 
      },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
