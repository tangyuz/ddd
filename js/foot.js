
$(function(){
	$("#foot").load("foot.html",function(){

			$(".input3").blur(function(){
				$(this).val("请输入你的邮箱");
			})
			$(".input3").focus(function(){
				$(this).val('');
			})
			
		})
				
	
})
