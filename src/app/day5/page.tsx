"use client";
import React from "react";
import { convert } from "html-to-text";
import { Card } from "antd";

// HTML content to convert
const htmlContent: string = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A comprehensive example of HTML content">
    <title>Comprehensive HTML Example</title>
  </head>
  <body>
    <header>
      <h1>Welcome to Our Product Showcase</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section id="products">
        <article>
          <h2>Product 1: Stylish Jacket</h2>
          <p>This <strong>stylish jacket</strong> is perfect for cold weather and <em>fashionable</em> too!</p>
          <p>Price: <span>$50.99</span></p>
          <iframe width="300" height="200" src="https://www.example.com" title="Iframe Example">ok</iframe>
        </article>

        <article>
          <h2>Product 2: Running Shoes</h2>
          <p>High-quality <strong>running shoes</strong> with a comfortable fit for <em>everyday</em> use.</p>
          <p>Price: <span>$79.99</span></p>
        </article>
      </section>

      <aside>
        <h3>Special Offers</h3>
        <p>Sign up for our newsletter to receive special discounts and offers!</p>
      </aside>
    </main>

    <footer>
      <p>&copy; 2024 Product Showcase. All rights reserved.</p>
      <p>Follow us on:
        <a href="https://www.facebook.com">Facebook</a> |
        <a href="https://www.twitter.com">Twitter</a>
      </p>
    </footer>
  </body>
  </html>
`;

// Function to convert HTML to plain text with html-to-text
function convertHtmlToPlainText(html: string): string {
  return convert(html, {
    wordwrap: 130, // Wrap text after 130 characters
    selectors: [
      { selector: "h1", format: "heading" },
      { selector: "h2", format: "heading" },
      { selector: "iframe", format: "block", options: { replacement: () => "[iframe content not shown]" } },
      { selector: "meta", format: "skip" }, // Skips meta tags
      { selector: "a", options: { baseUrl: "https://example.com" } },
    ],
  });
}

const Page: React.FC = () => {
  const plainText = convertHtmlToPlainText(htmlContent);
  console.log(plainText);
  

  return (
    <Card style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Converted Plain Text:</h2>
      <pre
        style={{
          whiteSpace: "pre-wrap",
          backgroundColor: "#f7f7f7",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {plainText}
      </pre>
    </Card>
  );
};

export default Page;
