$(window).on("load", () => {
  $(".test-button").click(e => {
    console.log("Clicked here");
    let testObject = [
      {
        questionID: "color014",
        time: "2018-08-03T18:16:48.755Z",
        tags: "color_cycle, swatches",
        optionLeft: "trevor_color_cycle",
        optionRight: "mss_color_cycle",
        answer: "trevor_color_cycle"
      },
      {
        questionID: "color003",
        time: "2018-08-03T18:16:49.204Z",
        tags: "color_cycle, bars",
        optionLeft: "tableau_color_cycle",
        optionRight: "trevor_color_cycle",
        answer: "tableau_color_cycle"
      },
      {
        questionID: "trivia001",
        time: "2018-08-03T18:16:49.691Z",
        tags: "statistician",
        optionRight: "Fisher",
        optionLeft: "Neyman",
        answer: "Neyman"
      },
      {
        questionID: "tech003",
        time: "2018-08-03T18:16:50.691Z",
        tags: "form-factor",
        optionLeft: "desktop",
        optionRight: "laptop",
        answer: "desktop"
      },
      {
        questionID: "color017",
        time: "2018-08-03T18:16:51.324Z",
        tags: "color_cycle, swatches",
        optionLeft: "mss_color_cycle",
        optionRight: "tableau_color_cycle",
        answer: "unanswered"
      }
    ];
    $.ajax({
      type: "POST",
      url: "https://paul-test.azurewebsites.net/api/HttpTriggerJS1",
      contentType: "application/json",
      dataType: "json",
      crossDomain: true,
      data: JSON.stringify(testObject),
      success: data => {
        console.log("successful post");
        console.log(data);
      },
      error: err => {
        console.dir(err);
      }
    });
  });
});
