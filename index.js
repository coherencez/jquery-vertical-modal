'use strict'

$(function() {
	toggleInfo();
})

function toggleInfo () {
	$('.listItem').on('click', function() {
		let $this = $(this),
						x = $this.position().top,
			 newPos = (x - 200) * -1
		console.log("top", x);	

		$this.parent().css('top',newPos + 'px')
		$this.children().children().toggleClass('hidden')
		$this.siblings().children().children().addClass('hidden')


	})

}