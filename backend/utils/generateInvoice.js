const PDFDocument = require('pdfkit');
const getStream = require('get-stream');

async function generateInvoicePDF(order) {
  const doc = new PDFDocument();
  const buffers = [];

  doc.on('data', buffers.push.bind(buffers));
  doc.on('end', () => {});

  doc.fontSize(18).text('Invoice - Asif Chemicals', { align: 'center' });
  doc.moveDown();

  doc.fontSize(12);
  for (const [key, value] of Object.entries(order)) {
    doc.text(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`);
  }

  doc.end();
  return await getStream.buffer(doc);
}

module.exports = generateInvoicePDF;
