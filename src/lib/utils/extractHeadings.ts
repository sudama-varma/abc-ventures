import { JSDOM } from "jsdom";

export const getHeadingsFromContent = (content: string) => {
  const headings: any[] = [];
  const dom = new JSDOM(content);
  const document = dom.window.document;
  // Query for all headings elements
  document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(heading => {
    // Initialize child elements as an empty array
    const childs = heading.children.length > 0 ? extractChildren(heading.children) : [];
    headings.push({
      heading: heading.textContent?.trim(),
      id: heading.id,
      childs,
    });
  });

  return headings;
}

const extractChildren = (children: HTMLCollection) => {
  const extracted: any[] = [];
  
  Array.from(children).forEach((child: Element) => {
    if (child.children.length > 0) {
      // If the child has further children, recursively extract them
      extracted.push({
        heading: child.textContent?.trim(),
        id: child.id,
        childs: extractChildren(child.children),
      });
    } else {
      // If no children, just store the content
      extracted.push({
        heading: child.textContent?.trim(),
        id: child.id,
      });
    }
  });

  return extracted;
}
