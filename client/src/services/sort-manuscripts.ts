import $ from "jquery";

$(window).on("load", () => {
  $("#btnGroupDrop1").on("click", () => {
    $(".dropdown-menu").toggle();
  });
});
