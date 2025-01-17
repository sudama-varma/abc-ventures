import { JSDOM } from "jsdom";

export const getHeadingsFromContent = (content: string) => {
  const headings: any[] = [];
  const dom = new JSDOM(content);
  const document = dom.window.document;

  // Query for all headings elements (h1, h2, h3, h4, h5, h6)
  document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(heading => {
    // Check the level of the heading (h1 is level 1, h2 is level 2, etc.)
    const level = parseInt(heading.tagName[1]);

    // Find child elements (only headings should be nested)
    const childs = getNestedHeadings(heading);

    headings.push({
      heading: heading.textContent?.trim(),
      id: heading.id,
      level,  // Add the level of the heading (h1 is level 1, etc.)
      childs,
    });
  });

  // Sort by level to maintain hierarchical order
  return headings.sort((a, b) => a.level - b.level);
}

// Function to handle nested headings (only heading elements should be processed)
const getNestedHeadings = (parent: Element) => {
  const childs: any[] = [];

  // Check for immediate child headings under this element (next heading element)
  let nextHeading = parent.nextElementSibling;
  
  while (nextHeading && nextHeading.tagName.startsWith('H')) {
    const nextLevel = parseInt(nextHeading.tagName[1]);

    // If next heading is of the same or lower level, treat it as a child heading
    if (nextLevel > parseInt(parent.tagName[1])) {
      childs.push({
        heading: nextHeading.textContent?.trim(),
        id: nextHeading.id,
        level: nextLevel,
        childs: getNestedHeadings(nextHeading),  // Recursively get child headings
      });
    } else {
      break;
    }

    // Move to the next heading in the document
    nextHeading = nextHeading.nextElementSibling;
  }

  return childs;
}
