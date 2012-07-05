$(document).ready(function(){
	
	var totWidth=0;
	var positions = new Array();
	
	$('#slides .slide').each(function(i){
		
		positions[i]= totWidth;
		totWidth += $(this).width();
		
		
		if(!$(this).width())
		{
			alert("Please, fill in width & height for all your images!");
			return false;
		}
		
	});
	
	$('#slides').width(totWidth);


	$('#thumbnails ul li a').click(function(e,keepScroll){

			/* On a thumbnail click */

			$('li.thumbnailItem').removeClass('act').addClass('inact');
			$(this).parent().addClass('act');
			
			var pos = $(this).parent().prevAll('.thumbnailItem').length;
			
			$('#slides').stop().animate({marginLeft:-positions[pos]+'px'},450);
			
			e.preventDefault();
			
			
			if(!keepScroll) clearInterval(itvl);
	});
	
	$('#thumbnails ul li.thumbnailItem:first').addClass('act').siblings().addClass('inact');
	

	 
	var current=1;
	function autoAdvance()
	{
		if(current==-1) return false;
		
		$('#thumbnails ul li a').eq(current%$('#thumbnails ul li a').length).trigger('click',[true]);
		current++;
	}

	// The number of seconds that the slider will auto-advance in:
	
	var changeEvery = 10;

	var itvl = setInterval(function(){autoAdvance()},changeEvery*1000);

});