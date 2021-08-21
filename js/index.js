//Custom Welcoming
const userName = prompt("What's your name?");
const userInput = $("#welcome").append(
  "<h2> Welcome to Assignment 8 " +
    userName +
    "! <br> Let's have fun with all the widgets available. </h2>"
);
$("#button-1").append("Press Me " + userName + " !");

//Create color box around the paragraph
$(function () {
  var state = true;
  $("#button-1").on("click", function () {
    if (state) {
      $("#effect-1").animate(
        {
          backgroundColor: "#A2A77F",
          color: "#fff",
          width: 500,
          margin: "0 auto",
        },
        1000
      );
    } else {
      $("#effect-1").animate(
        {
          background: "none",
          color: "#000",
          width: "100%",
          margin: "0 auto",
        },
        1000
      );
    }
    state = !state;
  });
});

//creating dialogue box
$(function () {
  $("#dialog").dialog();
});

//Blinding/bouncing etc.. a paragraph
$(function () {
  // run the currently selected effect
  function runEffect() {
    // get effect type from
    var selectedEffect = $("#effectTypes").val();

    // Most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if (selectedEffect === "scale") {
      options = { percent: 50 };
    } else if (selectedEffect === "size") {
      options = { to: { width: 200, height: 60 } };
    }

    // Run the effect
    $("#effect-2").hide(selectedEffect, options, 1000, callback);
  }

  // Callback function to bring a hidden box back
  function callback() {
    setTimeout(function () {
      $("#effect-2").removeAttr("style").hide().fadeIn();
    }, 1000);
  }

  // Set effect from select menu value
  $("#button-2").on("click", function () {
    runEffect();
  });
});

//Creates accordion
$(function () {
  $("#accordion")
    .accordion({
      header: "> div > h3",
    })
    .sortable({
      axis: "y",
      handle: "h3",
      stop: function (event, ui) {
        // IE doesn't register the blur when sorting
        // so trigger focusout handlers to remove .ui-state-focus
        ui.item.children("h3").triggerHandler("focusout");

        // Refresh accordion to handle new order
        $(this).accordion("refresh");
      },
    });
});

//Makes all divs draggable
$(function () {
  $("#draggable").draggable();
});
