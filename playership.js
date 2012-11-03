function playership() {

	$("#stage").append("<div class='ship' id='slave1'/>");
	
	var down65 = false;
	var down68 = false;
	var down87 = false;
	var down83 = false;
	var down77 = false;
	var bulletReady = true;
	var bulletCount = 0;
	var speed = 5;
	var bulletSpeed = 5;
	var stageWidth = parseInt($("#stage").css("width"));
	var stageHeight = parseInt($("#stage").css("height"));
	var shipWidth = parseInt($("#slave1").css("width"));
	var shipHeight = parseInt($("#slave1").css("height"));
	
	$("#slave1").css("top", (stageHeight - 100));
	$("#slave1").css("left", (stageWidth * .5));

	document.body.onkeydown = function(event){
	    event = event || window.event;
	    var keycode = event.charCode || event.keyCode;
	    if(keycode === 65){
			down65 = true;
	    }
	    if(keycode === 68){
			down68 = true;
	    }
	    if(keycode === 87){
			down87 = true;
	    }
	    if(keycode === 83){
			down83 = true;
	    }
	    if(keycode === 77){
			down77 = true;
	    }
	}
	
	document.body.onkeyup = function(event) {
	    var keycode = event.charCode || event.keyCode;
		if(keycode === 65){
			down65 = false;
		}
		if(keycode === 68){
			down68 = false;
		}
		if(keycode === 87){
			down87 = false;
		}
		if(keycode === 83){
			down83 = false;
		}
		if(keycode === 77){
			down77 = false;
		}
	}
	
	function fireBullet(x,y) {
		console.log("x: " + x + " y: " + y);
		bulletCount++;
		$("#stage").prepend("<div class='bullet' id='bullet" + bulletCount + "' />");
		x = x + 25;
		$("#bullet" + bulletCount + "").css("left", x);
		$("#bullet" + bulletCount + "").css("top", "" + y + "px");
		console.log(x);
		setInterval(function(){
			bulletReady = true;
		},1000);
	}
	
	//stuff down every frame below dis
	 $.playground().registerCallback(function(){
		$(".bullet").each(function(index){
			var curX = parseInt($(this).css("left"));
			var curY = parseInt($(this).css("top"))-bulletSpeed;
			if(curX > 0){
				//curX = curX + bulletSpeed;
				//$(this).css("left", "5px");
				$(this).css("left", ""+curX+"px");
				$(this).css("top", ""+curY+"px");
			}
			if(curX < 0 || curX > stageWidth || curY < 0 || curY > stageHeight) {
				$(this).remove();
				console.log("gone");
			}
		});
		//movement code
		if(down65) {
			var nextpos = parseInt($("#slave1").css("left"))-speed;
			if(nextpos > 0 && (down65)){
			  $("#slave1").css("left", ""+nextpos+"px");
			}
		}
		if(down68) {
			var nextpos = parseInt($("#slave1").css("left"))+speed;
			if(nextpos > 0){
			  $("#slave1").css("left", ""+nextpos+"px");
			}
		}
		if(down87) {
			var nextpos = parseInt($("#slave1").css("top"))-speed;
			if(nextpos > 0){
			  $("#slave1").css("top", ""+nextpos+"px");
			}
		}
		if(down83) {
			var nextpos = parseInt($("#slave1").css("top"))+speed;
			if(nextpos > 0){
			  $("#slave1").css("top", ""+nextpos+"px");
			}
		}
		if((down77) && (bulletReady)) {
			var x = parseInt($("#slave1").css("left"));
			var y = parseInt($("#slave1").css("top"));
			bulletReady = false;
			fireBullet(x, y);
		}
	 }, 30);
	
};