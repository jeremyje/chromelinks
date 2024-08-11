console.log("Content script");

$('*').each(function(index) {
  console.log("element." + index + " = " + $(this).text());
});
