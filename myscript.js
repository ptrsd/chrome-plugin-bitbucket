var hideDeletesAction = function () {
  $(".diff-entry-lozenge.aui-lozenge.aui-lozenge-subtle.aui-lozenge-error").each(function (idx, elem) {
    var diffContainer = $(elem).closest("div.diff-container");
    $(diffContainer.find(".diff-content-container.refract-container")[0]).toggle();
    diffContainer.find("div.heading").css({
      'borderBottom': '1px solid #ccc',
      'borderRadius': '5px 5px 5px 5px'
    });

    $("#hideDeletes").toggleClass("aui-button-primary");
  });
}

var hideDeletesLbl = $("<span>").html("Hide deletes");

var hideDeletesBtn = $("<button>", {
  id: "hideDeletes",
  class: "aui-button",
  resolved: ""
}).html(hideDeletesLbl).click(hideDeletesAction);


$("#pull-request-header")
  .find(".clearfix")
  .find("#pullrequest-actions")
  .append(hideDeletesBtn);
