(function (window, $) {

    $(function() {


        $('.ripple').on('click', function (event) {
           // event.preventDefault();

            var $div = $('<div/>'),
                btnOffset = $(this).offset(),
                xPos = event.pageX - btnOffset.left,
                yPos = event.pageY - btnOffset.top;



            $div.addClass('ripple-effect');
            var $ripple = $(".ripple-effect");

            $ripple.css("height", $(this).height());
            $ripple.css("width", $(this).height());
            $div
                .css({
                    top: yPos - ($(this).height()/2),
                    left: xPos - ($(this).height()/2),
                    background: $(this).data("ripple-color")
                })
                .appendTo($(this));

            window.setTimeout(function(){
                $div.remove();
            }, 1000);
        });

    });

})(window, jQuery);

$(document).ready(function () { 

    $('form').on('submit', function () { 

        var error = false, 
            login = $('#login', this), 
            password = $('#password', this); 

        if($(login).val() == '') { 
            $(login).addClass('error'); 
            error = true; 
        } else { 
            $(login).removeClass('error');
        }

        if($(password).val() == '') {
            $(password).addClass('error');
            error = true;
        } else {
            $(password).removeClass('error');
        }

        if(error) {
            $('.show-error', this).show();
            return false;
        } else {
            $('.show-error', this).hide();
        }
    });

});

$(document).ready(function () { 

    $('form').on('submit', function () { 

        var error = false, 
            login = $('#login', this), 
            password = $('#password', this); 

        if($(login).val() == '') { 
            $(login).addClass('error'); 
            error = true; 
        } else { 
            $(login).removeClass('error');
        }

        if($(password).val() == '') {
            $(password).addClass('error');
            error = true;
        } else {
            $(password).removeClass('error');
        }

        if(error) {
            $('.show-error', this).show();
            return false;
        } else {
            $('.show-error', this).hide();
        }
    });

});

// Tabs
$('.tabs').each(function(){
	var $active, $content, $links = $(this).find('a');
	$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
	$active.addClass('tab-active');
	$content = $($active[0].hash);
	$links.not($active).each(function () {
		$(this.hash).hide();
	});
	$(this).on('click', 'a', function(e){
    $active.removeClass('tab-active');
    $content.hide();
    $active = $(this);
    $content = $(this.hash);
    $active.addClass('tab-active');
    $content.show();
    e.preventDefault();
	});
});
// Help
$('.help').click(function() {
	$(this).toggleClass('help-active');
});













