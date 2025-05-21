const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const generateInvoicePDF = require('./utils/generateInvoice');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/send-invoice', async (req, res) => {
  const order = req.body;

  try {
    const pdfBuffer = await generateInvoicePDF(order);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: order.email,
      subject: 'Your Order Invoice - SilverStone Enterprises',
      text: 'Thank you for your order. Please find the attached invoice.',
      attachments: [
        {
          filename: `Invoice_${Date.now()}.pdf`,
          content: pdfBuffer,
        },
      ],
    });

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
