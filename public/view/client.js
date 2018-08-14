$(window).on("load", () => {
  $(".test-button").click(e => {
    console.log("Clicked here");
    let testObject = {
      a: 123,
      b: "Hi I'm a string",
      c: false
    };
    $.ajax({
      type: "POST",
      url: "/submit",
      dataType: "json",
      data: testObject,
      success: data => {
        console.log("successful post");
        console.log(data);
      }
    });
  });
});
