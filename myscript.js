var hideDeletesAction = function() {
	console.log($(".diff-entry-lozenge.aui-lozenge.aui-lozenge-subtle.aui-lozenge-error"));
	$(".diff-entry-lozenge.aui-lozenge.aui-lozenge-subtle.aui-lozenge-error").each(function(idx, elem) {
		var diffContainer = $(elem).closest("div.diff-container");
		
		$(diffContainer.find(".diff-content-container.refract-container")[0]).css({
			'display': 'none'
		})

		diffContainer.find("div.heading").css({
			'borderBottom': '1px solid #ccc',
			'borderRadius': '5px 5px 5px 5px'
		});
	});
}

var hideDeletesLbl = $("<span>").html("Hide deletes");

var hideDeletesBtn = $("<button>", {
	class: "aui-button",
	resolved: ""
}).html(hideDeletesLbl).click(hideDeletesAction)


$("#pull-request-header")
	.find(".clearfix")
	.find("#pullrequest-actions")
	.append(hideDeletesBtn);

