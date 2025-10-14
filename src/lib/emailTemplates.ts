import { EmailData } from './sendgrid';

// Email templates for contact form submissions
export const emailTemplates = {
  // Email sent to business owner when someone submits contact form
  businessNotification: (formData: EmailData) => ({
    subject: `New Contact Form Submission - ${formData.firstName} ${formData.lastName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1c3d2b, #003314); color: white; padding: 20px; border-radius: 10px 10px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Tri-Valley Auto Detailing</p>
        </div>
        
        <div style="background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px;">
          <h2 style="color: #1c3d2b; margin-top: 0;">Customer Information</h2>
          
          <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <h3 style="color: #1c3d2b; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}" style="color: #daaa39;">${formData.email}</a></p>
            <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
          </div>
          
          <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <h3 style="color: #1c3d2b; margin-top: 0;">Service Location</h3>
            <p><strong>Address:</strong> ${formData.street}</p>
            <p><strong>City:</strong> ${formData.city}, ${formData.state} ${formData.zip}</p>
          </div>
          
          <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <h3 style="color: #1c3d2b; margin-top: 0;">Vehicle Information</h3>
            <p><strong>Vehicle:</strong> ${formData.vehicle || 'Not specified'}</p>
          </div>
          
          ${formData.availability && formData.availability.length > 0 ? `
          <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <h3 style="color: #1c3d2b; margin-top: 0;">Availability</h3>
            ${formData.availability.map((slot) => 
              `<p><strong>${slot.day}:</strong> ${slot.start} - ${slot.end}</p>`
            ).join('')}
          </div>
          ` : ''}
          
          <div style="background: white; padding: 15px; border-radius: 8px;">
            <h3 style="color: #1c3d2b; margin-top: 0;">Service Description</h3>
            <p style="background: #f5f5f5; padding: 10px; border-radius: 5px; border-left: 4px solid #daaa39;">
              ${formData.description}
            </p>
          </div>
          
          <div style="margin-top: 20px; text-align: center;">
            <a href="mailto:${formData.email}" 
               style="background: #1c3d2b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Reply to Customer
            </a>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
          <p>This email was sent from your Tri-Valley Auto Detailing contact form.</p>
        </div>
      </div>
    `,
    text: `
New Contact Form Submission - Tri-Valley Auto Detailing

Customer Information:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

Service Location:
Address: ${formData.street}
City: ${formData.city}, ${formData.state} ${formData.zip}

Vehicle Information:
Vehicle: ${formData.vehicle || 'Not specified'}

${formData.availability && formData.availability.length > 0 ? `
Availability:
${formData.availability.map((slot) => `${slot.day}: ${slot.start} - ${slot.end}`).join('\n')}
` : ''}

Service Description:
${formData.description}

Reply to: ${formData.email}
    `
  }),

  // Email sent to customer as confirmation
  customerConfirmation: (formData: EmailData) => ({
    subject: `Thank you for contacting Tri-Valley Auto Detailing!`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1c3d2b, #003314); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">Thank You!</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9; font-size: 16px;">Tri-Valley Auto Detailing</p>
        </div>
        
        <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
          <p style="font-size: 18px; color: #1c3d2b; margin-top: 0;">Hi ${formData.firstName},</p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Thank you for reaching out to Tri-Valley Auto Detailing! We've received your inquiry and will get back to you within 24 hours.
          </p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #daaa39;">
            <h3 style="color: #1c3d2b; margin-top: 0;">What happens next?</h3>
            <ul style="color: #333; line-height: 1.6;">
              <li>We'll review your service request</li>
              <li>Contact you to discuss your specific needs</li>
              <li>Provide a detailed quote</li>
              <li>Schedule your service at your convenience</li>
            </ul>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1c3d2b; margin-top: 0;">Your Service Request</h3>
            <p style="color: #333; margin-bottom: 10px;"><strong>Vehicle:</strong> ${formData.vehicle || 'Not specified'}</p>
            <p style="color: #333; margin-bottom: 10px;"><strong>Location:</strong> ${formData.city}, ${formData.state}</p>
            <p style="color: #333; margin-bottom: 0;"><strong>Service Description:</strong></p>
            <p style="background: #f5f5f5; padding: 10px; border-radius: 5px; margin-top: 5px; color: #333;">
              ${formData.description}
            </p>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <p style="color: #666; font-size: 14px;">
              Questions? Call us at <strong>(555) 123-4567</strong> or reply to this email.
            </p>
          </div>
          
          <div style="text-align: center;">
            <a href="https://your-website.com/gallery" 
               style="background: #daaa39; color: #1c3d2b; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
              View Our Gallery
            </a>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
          <p>Tri-Valley Auto Detailing | Professional Auto Detailing Services</p>
        </div>
      </div>
    `,
    text: `
Thank you for contacting Tri-Valley Auto Detailing!

Hi ${formData.firstName},

Thank you for reaching out to Tri-Valley Auto Detailing! We've received your inquiry and will get back to you within 24 hours.

What happens next?
- We'll review your service request
- Contact you to discuss your specific needs  
- Provide a detailed quote
- Schedule your service at your convenience

Your Service Request:
Vehicle: ${formData.vehicle || 'Not specified'}
Location: ${formData.city}, ${formData.state}
Service Description: ${formData.description}

Questions? Call us at (555) 123-4567 or reply to this email.

Tri-Valley Auto Detailing | Professional Auto Detailing Services
    `
  })
};
