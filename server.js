const express = require('express'); const { chromium } = require('playwright'); const app = express(); const port = 3000;

// Mock Database Fetch const getHtmlFromDb = async (id) => { return <style> @page { size: A4; margin: 20mm; @bottom-right { content: counter(page); } } body { font-family: 'Inter', sans-serif; line-height: 1.6; } h1 { color: #333; } .content { font-size: 12pt; text-align: justify; } </style> <div class="header">Commercial Print Standard A4</div> <h1>Document ID: ${id}</h1> <div class="content"> <p>This content is pulled directly from the database and rendered at 300 DPI.</p> </div>; };

app.get('/generate-pdf/:id', async (req, res) => { const htmlContent = await getHtmlFromDb(req.params.id);

const browser = await chromium.launch(); const page = await browser.newPage();

await page.setContent(htmlContent, { waitUntil: 'networkidle' });

const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true, displayHeaderFooter: true, headerTemplate: '<span style="font-size: 10px; margin-left: 20px;">Staqlt Print Engine</span>', footerTemplate: '<span style="font-size: 10px; margin-left: 20px;" class="pageNumber"></span>', margin: { top: '20mm', bottom: '20mm', left: '15mm', right: '15mm' } });

await browser.close();

res.contentType("application/pdf"); res.send(pdfBuffer); });

app.listen(port, () => console.log(PDF Engine listening at http://localhost:${port}));