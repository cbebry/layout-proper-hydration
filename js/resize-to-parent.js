/* Resize canvas to parent container, especially when window is resized.*/

var resizeToParent = function(selector, isSquare, initFunction, updateFunction) {
	(function() {
		var canvas = $(selector),
			context = canvas[0].getContext('2d');

		// resize the canvas to fill browser window dynamically
		window.addEventListener('resize', resizeCanvas, false);
		initFunction(canvas, context);
		
		function resizeCanvas() {
			//fills to size of parent
			var changeWidthTo = 0;
			var changeHeightTo = 0;
			if (isSquare) {
				changeWidthTo = canvas.parent().width();
				changeHeightTo = canvas.parent().width();
			} else {
				changeWidthTo = canvas.parent().width();
				changeHeightTo = canvas.parent().height();
			}
			
			canvas[0].width = changeWidthTo;
			canvas[0].height = changeHeightTo;

			/**
			 * Your drawings need to be inside this function otherwise they will be reset when 
			 * you resize the browser window and the canvas goes will be cleared.
			 Though, this is not the case for events already in a separate setInterval.
			 */
			updateFunction(canvas, context); 
		}
		resizeCanvas();
	})();
}