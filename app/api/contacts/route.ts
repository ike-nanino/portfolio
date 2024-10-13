import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string; // Optional field
  message: string;
  service: string;
}

// POST method handler
export async function POST(req: Request) {
  try {
    const body: ContactFormData = await req.json();
    const { firstName, lastName, email, phone, message, service } = body;

    // Validation
    if (!firstName || !lastName || !email || !message || !service) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_TO, // Your email
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone || 'N/A'}
        Service: ${service}
        Message: ${message}
      `,
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
