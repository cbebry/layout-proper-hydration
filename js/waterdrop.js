var waterdrop_outline = new Image();
waterdrop_outline.src = 'images/waterdrop.png';
var waterdrop_fill = new Image();
waterdrop_fill.src = 'images/waterdrop-fill.png';

var waterdrop_init = function(canvas, context) {
	waterdrop_outline.onload = function() {
		waterdrop_update(canvas, context);
	}
}
var waterdrop_update = function(canvas, context) {
	//must be between 0 and 100
	var show_percent = 50; //TODO: based on input
	
	var w = canvas[0].width;
	var h = canvas[0].height;
	
	// var sw = w;
	// var sh = h - (show_percent * h / 100);
	// var sx = h - sh;
	// var sy = 0;
	
	// var dw = sw;
	// var dh = sh;
	// var dx = 0;
	// var dy = 0;
	
	var sw = w;
	var sh = h - ((100-show_percent) * h / 100);
	var sx = 0;
	var sy = h - sh;
	
	var dw = sw;
	var dh = sh;
	var dx = sx;
	var dy = sy;
	
	
	context.drawImage(waterdrop_outline, 0, 0, w, h);
	context.drawImage(waterdrop_fill, sx, sy, sw, sh, dx, dy, dw, dh);
	//console.log(canvas[0].width);
	//console.log(canvas[0].height);
}