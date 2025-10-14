#!/usr/bin/env node

/**
 * Test script for SendGrid email functionality
 * This script tests the email templates and configuration without sending actual emails
 */

import { emailTemplates, EmailData } from './src/lib/emailTemplates.js';

// Test data
const testFormData: EmailData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phone: '(555) 123-4567',
  street: '123 Main Street',
  city: 'San Francisco',
  state: 'CA',
  zip: '94102',
  vehicle: '2020 Honda Civic',
  description: 'I need a full interior and exterior detail for my car. It has some stains on the seats and the paint needs polishing.',
  availability: [
    { day: 'Monday', start: '09:00', end: '17:00' },
    { day: 'Wednesday', start: '10:00', end: '16:00' }
  ]
};

console.log('🧪 Testing Email Templates...\n');

// Test business notification template
console.log('📧 Business Notification Email:');
console.log('=' .repeat(50));
const businessTemplate = emailTemplates.businessNotification(testFormData);
console.log('Subject:', businessTemplate.subject);
console.log('Text Preview:', businessTemplate.text.substring(0, 200) + '...');
console.log('HTML Length:', businessTemplate.html.length, 'characters');
console.log('✅ Business template generated successfully\n');

// Test customer confirmation template
console.log('📧 Customer Confirmation Email:');
console.log('=' .repeat(50));
const customerTemplate = emailTemplates.customerConfirmation(testFormData);
console.log('Subject:', customerTemplate.subject);
console.log('Text Preview:', customerTemplate.text.substring(0, 200) + '...');
console.log('HTML Length:', customerTemplate.html.length, 'characters');
console.log('✅ Customer template generated successfully\n');

// Test environment variables
console.log('🔧 Environment Configuration:');
console.log('=' .repeat(50));
console.log('SENDGRID_API_KEY:', process.env.SENDGRID_API_KEY ? '✅ Set' : '❌ Not set');
console.log('BUSINESS_EMAIL:', process.env.BUSINESS_EMAIL || '❌ Not set');
console.log('FROM_EMAIL:', process.env.FROM_EMAIL || '❌ Not set');

if (!process.env.SENDGRID_API_KEY) {
  console.log('\n⚠️  To test actual email sending:');
  console.log('1. Copy env.example to .env.local');
  console.log('2. Add your SendGrid API key');
  console.log('3. Configure your business email');
  console.log('4. Run: npm run dev');
  console.log('5. Submit the contact form on your website');
}

console.log('\n🎉 Email template testing completed!');
