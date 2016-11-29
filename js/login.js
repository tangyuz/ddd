$(function(){
				var oA = $(".deng");
				$(".bk1").val("");$(".bk2").val('');$(".inp1").val('');
				oA.click(function(){
					var name = $(".bk1").val();
					var pass= $(".bk2").val();
					getCookie("name");
					getCookie("pass");
					if(name == getCookie("name") && pass ==getCookie("pass")&&name!=''&&pass!='' ){
					alert("登录成功");
					setCookie("name",name);
					setCookie("boo",true);
					window.location.href = "index.html"
					
					}else{
						alert("失败了")
					}
					
				})
				
				
			
				
				
				
			
				
				
				
			})