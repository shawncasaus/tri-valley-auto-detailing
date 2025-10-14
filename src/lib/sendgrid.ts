import sgMail from '@sendgrid/mail';
import { emailTemplates } from './emailTemplates';

// Initialize SendGrid with API key from environment variables
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export interface EmailData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  vehicle?: string;
  description: string;
  availability?: Array<{
    day: string;
    start: string;
    end: string;
  }>;
}

export interface SendEmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

/**
 * Send email notification to business owner about new contact form submission
 */
export async function sendBusinessNotification(formData: EmailData): Promise<SendEmailResult> {
  try {
    if (!process.env.SENDGRID_API_KEY) {
      throw new Error('SendGrid API key not configured');
    }

    if (!process.env.BUSINESS_EMAIL) {
      throw new Error('Business email not configured');
    }

    const template = emailTemplates.businessNotification(formData);

    const msg = {
      to: process.env.BUSINESS_EMAIL,
      from: {
        email: process.env.FROM_EMAIL || 'noreply@tri-valley-auto-detailing.com',
        name: 'Tri-Valley Auto Detailing'
      },
      replyTo: formData.email,
      subject: template.subject,
      text: template.text,
      html: template.html,
    };

    const response = await sgMail.send(msg);
    
    return {
      success: true,
      messageId: response[0].headers['x-message-id'] as string
    };

  } catch (error) {
    console.error('Error sending business notification:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}

/**
 * Send confirmation email to customer
 */
export async function sendCustomerConfirmation(formData: EmailData): Promise<SendEmailResult> {
  try {
    if (!process.env.SENDGRID_API_KEY) {
      throw new Error('SendGrid API key not configured');
    }

    const template = emailTemplates.customerConfirmation(formData);

    const msg = {
      to: formData.email,
      from: {
        email: process.env.FROM_EMAIL || 'noreply@tri-valley-auto-detailing.com',
        name: 'Tri-Valley Auto Detailing'
      },
      subject: template.subject,
      text: template.text,
      html: template.html,
    };

    const response = await sgMail.send(msg);
    
    return {
      success: true,
      messageId: response[0].headers['x-message-id'] as string
    };

  } catch (error) {
    console.error('Error sending customer confirmation:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}

/**
 * Send both business notification and customer confirmation
 */
export async function sendContactFormEmails(formData: EmailData): Promise<{
  businessEmail: SendEmailResult;
  customerEmail: SendEmailResult;
}> {
  // Send both emails in parallel for better performance
  const [businessResult, customerResult] = await Promise.allSettled([
    sendBusinessNotification(formData),
    sendCustomerConfirmation(formData)
  ]);

  return {
    businessEmail: businessResult.status === 'fulfilled' ? businessResult.value : {
      success: false,
      error: businessResult.reason?.message || 'Failed to send business notification'
    },
    customerEmail: customerResult.status === 'fulfilled' ? customerResult.value : {
      success: false,
      error: customerResult.reason?.message || 'Failed to send customer confirmation'
    }
  };
}
