import ReactHtmlParser from "react-html-parser";

function getPlainTextFromNestedElements(elements: any) {
  let plainText = "";
  // console.log('elements = ', elements)
  elements.forEach((element: any) => {
    if (element.props && element.props.children) {
      // case it has nested children
      if (Array.isArray(element.props.children)) {
        plainText += getPlainTextFromNestedElements(element.props.children);
      }
    } else if (typeof element === "string") {
      plainText += element;
    }
  });
  return plainText;
}

export const getPlainTextFromHtml = (htmlcontent: string) => {
  const parsedHtml = ReactHtmlParser(htmlcontent);
  return getPlainTextFromNestedElements(parsedHtml);
};