function Enemy(type, x, y) {
	var that = this;

	this.x = typeof x == "undefined" ? x : 0;
	this.y = typeof y == "undefined" ? y : 0;
	this.testenemy = null;
	this.width = null;
	this.height = null; // Change these later. -jahyoung
	this.id = null;
	
	switch (type) {
		case "narwhal":
			this.testenemy = new $.gameQuery.Animation({imageURL: "images/narwhal.png"});
			this.id = "narwhal22"; // Gotta change this too.
			break;
		default:
			this.testenemy = null;
	}

	$("#spriteLayer").addSprite(this.id, {
		animation: this.testenemy,
		width: 50,
		height: 50,
		posx: this.x,
		posy: this.y
	});
		
	function fireBullet(x,y) {
		//console.log("x: " + x + " y: " + y);
		bulletCount++;
		$("#stage").prepend("<div class='bullet' id='bullet" + bulletCount + "' />");
		x = x + 25;
		$("#bullet" + bulletCount + "").css("left", x);
		$("#bullet" + bulletCount + "").css("top", "" + y + "px");
		//console.log(x);
	}
	
	$.playground().registerCallback(function(){
		that.x = Math.random() * 800; // This constant should be a variable, but fuck it for now
		that.y = Math.random() * 600;
		
		// console.log($("#" + that.id));
		
		$("#" + that.id).x(that.x, true);
		$("#" + that.id).y(that.y, true);
	}, 30);
};