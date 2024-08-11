console.log("vz");

console.log("Content script");

function visitElement(index) {
  const element = $(this);
  
  console.log("element." + index + " = " + element);
  console.log("[" + index + "].children = " + element.children().length);
  console.log("[" + index + "].text = " + element.text());
}

$('*').each(visitElement);
