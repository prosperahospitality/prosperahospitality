import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

export async function POST(request) {

  const payload = await request.json();

  console.log("Payload:::::::>", payload)

  if (payload.operation === "homeContact") {
    try {

      const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

      if (!validateEmail(payload.formValues.email)) {
        return NextResponse.json({ status: 401, message: 'Invalid email address' });
      }

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'Your Received Enquiry',
        html: `
          <h2>Contact Form Details</h2>
          <p>Full Name: ${payload.formValues.fullName}</p>
          <p>Email: ${payload.formValues.email}</p>
          <p>Comnpany Name: ${payload.formValues.companyName}</p>
          <p>State: ${payload.formValues.selectedState}</p>
          <p>City: ${payload.formValues.selectedCity}</p>
          <p>Country: ${payload.formValues.selectedCode}</p>
          <p>Code: ${payload.formValues.selectedCodeDial}</p>
          <p>Phone Number: ${payload.formValues.phoneNumber}</p>
        `,
      });

      return NextResponse.json({ status: 200, message: "Email sent and enquiry saved successfully" });

    } catch (error) {
      console.error("Error::::::>", error);
      return NextResponse.json({ success: true, message: 'Error sending email or saving enquiry' }, { status: 500 });
    }
  }
}
