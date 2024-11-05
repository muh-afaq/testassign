import React, { useMemo } from 'react';
import { htmlToText } from 'html-to-text';

// Props type definition
interface HtmlToPlainTextProps {
  htmlContent: string; // The HTML string that needs to be converted
}

// Component that converts HTML to plain text
const HtmlToPlainText: React.FC<HtmlToPlainTextProps> = ({ htmlContent }) => {
  // Check if htmlContent is a valid string
  if (typeof htmlContent !== 'string') {
    console.error('Invalid htmlContent prop. Expected a string.');
    return <span>Invalid content</span>; // Render a fallback UI
  }

  // Convert HTML to plain text using useMemo for performance
  const plainText = useMemo(() => {
    try {
      return htmlToText(htmlContent, {
        wordwrap: false, // Prevents wrapping text to a certain width
      });
    } catch (error) {
      console.error('Error converting HTML to text:', error);
      return 'Error converting content';
    }
  }, [htmlContent]); // Dependency array to re-run if htmlContent changes

  return <span>{plainText}</span>;
};

export default HtmlToPlainText;


//   const htmlString: string = " <h1>This is a Heading</h1>  <p>This is <b>bold</b> and <i>italic</i> text with <a href='#'>a link</a>.</p>   <ul>   <li>Item 1</li>    <li>Item 2 with <b>bold</b> text</li>    <li>Item 3 with an <a href='#'>anchor</a></li>  </ul>  <p>Here is a <strong>strong</strong> statement, and here is some <em>emphasized</em> text.</p>  <h2>This is a Subheading</h2>  <p>Additional content can be added here to test longer HTML inputs. You can include <b>multiple</b> paragraphs, <i>different</i> styles, and <a>more links</a> as needed.</p> <p>Final thoughts: ensure your HTML is well-structured for optimal results.</p> ";
