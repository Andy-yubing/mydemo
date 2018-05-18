$(function() {
    $(".temp_list>li").on("click", function() {
    	$(this).addClass('li_active').siblings('li').removeClass('li_active');
    })

   
})