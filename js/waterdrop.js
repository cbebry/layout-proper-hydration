var waterdrop_outline = new Image();
waterdrop_outline.src = 'images/waterdrop.png';
var waterdrop_fill = new Image();
waterdrop_fill.src = 'images/waterdrop-fill.png';

var updatePercent = function(glasses) {
	//TODO
}

var waterdrop_init = function(canvas, context) {
	waterdrop_outline.onload = function() {
		waterdrop_update(canvas, context);
	}
	$('#volume').blur(function(e) {
		var volume = $('#volume').val();
		var glasses = volume / 8;
		$('#glasses').val(glasses);
	});
	$('#glasses').blur(function(e) {
		var glasses = $('#glasses').val();
		var volume = glasses * 8;
		$('#volume').val(volume);
	});
}
var waterdrop_update = function(canvas, context) {
	//must be between 0 and 100
	var show_percent = 50; //TODO: based on input
	
	var w = canvas[0].width;
	var h = canvas[0].height;
	
	var img_w = waterdrop_fill.width;
	var img_h = waterdrop_fill.height;
	
	var sw = img_w;
	var sh = img_h - ((100-show_percent) * img_h / 100);
	var sx = 0;
	var sy = img_h - sh;
	
	var dw = w;
	var dh = h - ((100-show_percent) * h / 100);
	var dx = 0;
	var dy = h - dh;
	
	
	context.drawImage(waterdrop_outline, 0, 0, w, h);
	context.drawImage(waterdrop_fill, sx, sy, sw, sh, dx, dy, dw, dh);
}