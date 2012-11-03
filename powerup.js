function powerup(stageWidth, stageHeight, stageSpeed, powerupCount) {

	var powerupId = ("powerup" + powerupCount);
	
	thisThing = ("#" + powerupId + "");
	
	$("#stage").append("<div class='powerup' id='" + powerupId + "'/>");
	
	$(thisThing).css("top", (stageHeight - stageHeight));
	$(thisThing).css("left", (stageWidth * .5));
	
	$.playground().registerCallback(function () {
		var scrollspeed = stageOptions.speed;
	
		$(thisThing).each(function () {
			var x = parseInt($(thisThing).css("left"));
			var y = parseInt($(thisThing).css("top")) + stageSpeed;
			if(x > 0){
				//curX = curX + bulletSpeed;
				//$(this).css("left", "5px");
				$(this).css("left", ""+x+"px");
				$(this).css("top", ""+y+"px");
			}
			if(y < 0 || x > stageWidth || y < 0 || y > stageHeight) {
				$(this).remove();
				console.log("gone");
			}
		});
	}, 30);
	
};