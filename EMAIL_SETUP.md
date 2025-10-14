# Email Setup Instructions

This project uses SendGrid to send emails for contact form submissions. Here's how to set it up:

## 1. Create SendGrid Account

1. Go to [SendGrid](https://sendgrid.com/) and create a free account
2. Verify your account via email

## 2. Get API Key

1. Log into SendGrid dashboard
2. Go to Settings → API Keys
3. Click "Create API Key"
4. Choose "Restricted Access" and give it "Mail Send" permissions
5. Copy the API key (you won't see it again!)

## 3. Verify Sender Identity

You need to verify either:
- **Single Sender**: Verify individual email addresses
- **Domain Authentication**: Verify your entire domain (recommended)

### Option A: Single Sender (Quick Setup)
1. Go to Settings → Sender Authentication
2. Click "Verify a Single Sender"
3. Add your business email address
4. Check your email and click the verification link

### Option B: Domain Authentication (Recommended)
1. Go to Settings → Sender Authentication
2. Click "Authenticate Your Domain"
3. Enter your domain name
4. Add the required DNS records to your domain
5. Verify the domain

## 4. Configure Environment Variables

1. Copy `env.example` to `.env.local`:
   ```bash
   cp env.example .env.local
   ```

2. Edit `.env.local` with your actual values:
   ```bash
   SENDGRID_API_KEY=SG.your_actual_api_key_here
   BUSINESS_EMAIL=your-business-email@yourdomain.com
   FROM_EMAIL=noreply@yourdomain.com
   ```

## 5. Test the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Submit the contact form on your website
3. Check your business email for the notification
4. Check the customer's email for the confirmation

## Email Templates

The system sends two emails:

### Business Notification Email
- Sent to your business email
- Contains all customer information
- Includes a "Reply to Customer" button
- Professional HTML formatting

### Customer Confirmation Email
- Sent to the customer
- Confirms their submission was received
- Explains next steps
- Branded with your business colors

## Troubleshooting

### Common Issues:

1. **"Unauthorized" Error**
   - Check your API key is correct
   - Ensure API key has "Mail Send" permissions

2. **"Forbidden" Error**
   - Verify your sender email address
   - Check domain authentication status

3. **Emails Not Received**
   - Check spam/junk folders
   - Verify email addresses are correct
   - Check SendGrid activity feed for delivery status

4. **Template Errors**
   - Ensure all required fields are provided
   - Check email template syntax

### SendGrid Dashboard
- Monitor email delivery in SendGrid dashboard
- Check activity feed for delivery status
- View bounce/complaint reports

## Production Considerations

1. **Rate Limits**: SendGrid free tier has limits
2. **Monitoring**: Set up webhook notifications for bounces/complaints
3. **Templates**: Consider using SendGrid's template system for better management
4. **Analytics**: Track email open rates and click-through rates

## Security Notes

- Never commit `.env.local` to version control
- Use environment variables in production
- Regularly rotate API keys
- Monitor for suspicious activity
