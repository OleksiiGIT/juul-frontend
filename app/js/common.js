$(function() {

    $('.fullpageInit').fullpage({
        autoScrolling:true,
        scrollHorizontally: true,
        navigation: true,
        anchors:['01','02','03','04'],
        showActiveTooltip: true,
        afterLoad: function() {
			if ($('.whiteBg').hasClass('active')) {
		    	$('#fp-nav').children('ul').children('li').children('a').css('color', 'black')
		    }
		    if ($('.movingSection').hasClass('active')) {
		    	$('.movingImg').css('opacity', '1')
		    	$('.movingImg').css('animation', 'movingImg 2s ease-out')
		    }
        },
        onLeave : function() {
			if ($('.whiteBg').hasClass('active')) {
		    	$('#fp-nav').children('ul').children('li').children('a').css('color', 'white')
		    }
        }
    })

    $.fn.fullpage.setAllowScrolling(true)
    $.fn.fullpage.setLockAnchors(true)

    $('.scrollDowmLine').click(e => {
    	e.preventDefault()
    	$.fn.fullpage.moveSectionDown()
    })

    $('.nextBtn').click(e => {
    	e.preventDefault()
    	$.fn.fullpage.moveSectionDown()
    })

    $('.prevBtn').click(e => {
    	e.preventDefault()
    	$.fn.fullpage.moveSectionUp()
    })  

});