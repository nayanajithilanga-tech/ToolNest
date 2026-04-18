const fs = require('fs');
const path = require('path');

const toolsList = [
    { id: 'image-compressor', title: 'Image Compressor', desc: 'Compress images online without losing quality.' },
    { id: 'pdf-merger', title: 'PDF Merger', desc: 'Merge multiple PDF files into one.' },
    { id: 'text-summarizer', title: 'Text Summarizer', desc: 'Summarize long text instantly.' },
    { id: 'meta-tag-generator', title: 'Meta Tag Generator', desc: 'Generate SEO friendly meta tags.' },
    { id: 'qr-code-generator', title: 'QR Code Generator', desc: 'Generate QR codes online.' },
    { id: 'word-counter', title: 'Word Counter', desc: 'Count words and characters in your text.' },
    { id: 'age-calculator', title: 'Age Calculator', desc: 'Calculate exact age in years, months, and days.' },
    { id: 'unit-converter', title: 'Unit Converter', desc: 'Convert between different units of measurement.' },
    { id: 'bmi-calculator', title: 'BMI Calculator', desc: 'Calculate your Body Mass Index.' },
    { id: 'loan-emi-calculator', title: 'Loan EMI Calculator', desc: 'Calculate EMI for your loans.' },
    { id: 'gst-vat-calculator', title: 'GST/VAT Calculator', desc: 'Calculate GST or VAT amounts.' },
    { id: 'resume-builder', title: 'Resume Builder', desc: 'Build professional resumes online.' },
    { id: 'invoice-generator', title: 'Invoice Generator', desc: 'Generate free invoices.' },
    { id: 'youtube-thumbnail-downloader', title: 'YouTube Thumbnail Downloader', desc: 'Download YouTube thumbnails in HD.' },
    { id: 'base64-encoder', title: 'Base64 Encoder/Decoder', desc: 'Encode and decode Base64 strings.' },
    { id: 'markdown-previewer', title: 'Markdown Previewer', desc: 'Preview your markdown online.' },
    { id: 'seo-keyword-density', title: 'SEO Keyword Density Checker', desc: 'Check keyword density for SEO.' },
    { id: 'plagiarism-checker', title: 'Plagiarism Checker', desc: 'Check text for plagiarism.' },
    { id: 'currency-converter', title: 'Currency Converter', desc: 'Convert currencies with live rates.' },
    { id: 'percentage-calculator', title: 'Percentage Calculator', desc: 'Calculate percentages easily.' },
    { id: 'emi-calculator', title: 'EMI Calculator', desc: 'Calculate EMI.' },
    { id: 'interest-calculator', title: 'Interest Calculator', desc: 'Calculate simple and compound interest.' },
    { id: 'text-case-converter', title: 'Text Case Converter', desc: 'Convert text case (uppercase, lowercase, etc).' },
    { id: 'random-number-generator', title: 'Random Number Generator', desc: 'Generate random numbers.' },
    { id: 'character-counter', title: 'Character Counter', desc: 'Count characters in text.' },
    { id: 'url-encoder', title: 'URL Encoder Decoder', desc: 'Encode and decode URLs.' },
    { id: 'website-speed-checker', title: 'Website Speed Checker', desc: 'Check your website speed.' },
    { id: 'domain-whois-checker', title: 'Domain Whois Checker', desc: 'Check domain WHOIS information.' }
];

const blogList = [
    { id: 'seo-in-2026', title: 'SEO in 2026: What Changed?', desc: 'Discover the latest SEO trends for 2026.' },
    { id: 'google-adsense-approval', title: 'Google AdSense Approval Guide', desc: 'How to get your website approved for AdSense.' },
    { id: 'best-online-tools', title: 'Best Online Tools for Productivity', desc: 'Top free tools to boost your productivity.' },
    { id: 'ai-tools-business', title: 'AI Tools for Business', desc: 'How AI is transforming modern businesses.' },
    { id: 'passive-income', title: 'Passive Income Online', desc: 'Guide to generating passive income.' },
    { id: 'blogging-beginners', title: 'Blogging for Beginners', desc: 'Start your blog today.' },
    { id: 'website-optimization', title: 'Website Optimization Tips', desc: 'Speed up your website.' },
    { id: 'freelancing-success', title: 'Freelancing Success Guide', desc: 'How to succeed as a freelancer.' },
    { id: 'online-earning', title: 'Online Earning Methods', desc: 'Legit ways to earn money online.' },
    { id: 'digital-marketing', title: 'Digital Marketing Basics', desc: 'Introduction to digital marketing.' },
    { id: 'social-media-strategy', title: 'Social Media Strategy', desc: 'Grow your social media presence.' },
    { id: 'content-creation', title: 'Content Creation Tips', desc: 'Create engaging content.' },
    { id: 'email-marketing', title: 'Email Marketing Guide', desc: 'Build and engage your email list.' },
    { id: 'web-design-trends', title: 'Web Design Trends', desc: 'Latest trends in web design.' },
    { id: 'coding-for-beginners', title: 'Coding for Beginners', desc: 'Start your coding journey.' },
    { id: 'cybersecurity-basics', title: 'Cybersecurity Basics', desc: 'Protect yourself online.' },
    { id: 'remote-work', title: 'Remote Work Guide', desc: 'Tips for remote workers.' },
    { id: 'startup-advice', title: 'Startup Advice', desc: 'Advice for new startups.' },
    { id: 'e-commerce-tips', title: 'E-commerce Tips', desc: 'Grow your e-commerce store.' },
    { id: 'personal-finance', title: 'Personal Finance Management', desc: 'Manage your finances better.' }
];

const legalList = [
    { id: 'privacy-policy', title: 'Privacy Policy' },
    { id: 'terms-conditions', title: 'Terms and Conditions' },
    { id: 'disclaimer', title: 'Disclaimer' },
    { id: 'about-us', title: 'About Us' },
    { id: 'contact-us', title: 'Contact Us' },
    { id: 'cookie-policy', title: 'Cookie Policy' }
];

const template = (title, desc, isBlog = false, isLegal = false) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>\${title} - ToolNest</title>
    <meta name="description" content="\${desc}">
    <link rel="icon" href="../assets/images/favicon.ico" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body class="light-mode">
    <header class="navbar glass">
        <div class="container nav-container">
            <a href="../index.html" class="logo">Tool<span>Nest</span></a>
            <nav class="nav-links">
                <a href="../index.html#featured">Featured Tools</a>
                <a href="../index.html#categories">Categories</a>
                <a href="../blog/seo-in-2026.html">Blog</a>
            </nav>
            <div class="nav-actions">
                <button id="theme-toggle" aria-label="Toggle Dark Mode">
                    <svg id="moon-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    <svg id="sun-icon" class="hidden" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle></svg>
                </button>
            </div>
        </div>
    </header>

    <div class="page-header">
        <div class="container">
            <h1 class="page-title">\${title}</h1>
            <p class="page-desc">\${desc}</p>
        </div>
    </div>

    <div class="container content-container">
        <main class="main-content">
            \${isBlog ? `
            <article class="article-content">
                <img src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&w=800&q=80" alt="\${title}" style="width:100%; border-radius:8px; margin-bottom:20px;">
                <h2>Introduction</h2>
                <p>Welcome to our comprehensive guide on \${title}. In this long-form article, we will dive deep into the subject and provide you with actionable insights.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <h2>Key Concepts</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <ul>
                    <li>Important point 1 about \${title}</li>
                    <li>Crucial strategy for success</li>
                    <li>Common pitfalls to avoid</li>
                </ul>
                <h2>Advanced Techniques</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div class="ad-placeholder" style="margin: 20px 0;">In-Article Ad</div>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                <h2>Conclusion</h2>
                <p>To wrap up, understanding \${title} is crucial for achieving your goals. We hope this guide has been helpful.</p>
            </article>
            ` : isLegal ? `
            <article class="article-content">
                <h2>\${title}</h2>
                <p>Last updated: April 2026</p>
                <p>Owner: Dilshan Nayanajith Ilangasinghe</p>
                <p>Contact: <a href="mailto:nayanajithilangasinghe2002@gmail.com">nayanajithilangasinghe2002@gmail.com</a></p>
                <p>Please read these terms carefully. ToolNest is committed to your privacy and satisfaction.</p>
                <p>We respect the intellectual property rights of others. If you believe that your intellectual property rights have been violated, please contact us at the email provided.</p>
            </article>
            ` : `
            <div class="tool-box">
                <p style="text-align:center; padding: 50px; color: var(--text-muted);">
                    UI Interface for <strong>\${title}</strong>.<br>
                    <br>
                    <input type="text" placeholder="Enter input for \${title}" style="max-width: 400px; margin: 20px auto; display: block;">
                    <br>
                </p>
                <div class="tool-actions" style="justify-content:center;">
                    <button class="btn btn-primary" onclick="alert('\${title} executed!')">Execute \${title}</button>
                </div>
            </div>
            `}
        </main>
        <aside class="sidebar-ad">
            <div class="ad-placeholder">AdSense Sidebar Ad</div>
        </aside>
    </div>

    <footer class="footer">
        <div class="container footer-bottom">
            <p>&copy; 2026 ToolNest. Designed for excellence by Dilshan Nayanajith Ilangasinghe.</p>
        </div>
    </footer>
    <script src="../assets/js/main.js"></script>
    <script src="../assets/js/tools.js"></script>
</body>
</html>`;

['tools', 'blog', 'legal'].forEach(dir => {
    const dirPath = path.join(__dirname, dir);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
});

toolsList.forEach(tool => {
    const filePath = path.join(__dirname, 'tools', \`\${tool.id}.html\`);
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, template(tool.title, tool.desc));
    }
});

blogList.forEach(blog => {
    const filePath = path.join(__dirname, 'blog', \`\${blog.id}.html\`);
    fs.writeFileSync(filePath, template(blog.title, blog.desc, true));
});

legalList.forEach(legal => {
    const filePath = path.join(__dirname, 'legal', \`\${legal.id}.html\`);
    fs.writeFileSync(filePath, template(legal.title, 'Legal Information for ToolNest', false, true));
});

console.log("All files generated successfully.");
