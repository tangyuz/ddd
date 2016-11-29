$(function(){
				$("#header").load("header.html",function(){
					
				//点击登录设置的cookie
				if(getCookie("boo")=='true'){
					var name = getCookie("name");
					$("#header .top .box .sp1").html('您好，'+name);	
					$("#header .top .box .tui").html("退出")
					$("#header .top .box .a1").html("");	
					$(".top .box").css({
						"margin-left":"750px"
					})
				}else{
					$("#header .top .box .a1").html("登录");	
					$("#header .top .box .sp1").html('');
					
				}
//				**************点击登录跳转登录页面
				$("#header .top .box .a1").click(function(){
						window.location.href="login.html";
			
						
				})
				$("#header .top .box .tui").click(function(){
					deleteCookie("boo");
					$("#header .top .box .sp1").html('');
					$("#header .top .box .a1").html("登录");
					$("#header .top .box .tui").html("")
					$(".top .box").css({
						"margin-left":"863px"
					})
					})
//				******************top里面的二级菜单
				$("#header .top .box .box1").mouseover(function(){
					$(this).find("ul").show();	
				})
				$("#header .top .box .box1").mouseout(function(){
					$(this).find("ul").hide();	
				})
//				********************下面三级菜单
				$("#header .top2 .quan .yiji .shang .li1").mouseover(function(){
					 
					$(this).find("div").show()
				})
				$("#header .top2 .quan .yiji .shang .li1").mouseout(function(){
					
					$(this).find("div").hide()
				})
				$(".input1").blur(function(){
					$(this).val("请输入你的商品名称或货号");
				})
				$(".input1").focus(function(){
					$(this).val('');
				})
				
				
				
				
				
				
				});
				$("#foot").load("foot.html",function(){
					$.getScript("js/foot.js");
				});
				$("#footer").load("footer.html");
				
//				if(getCookie("boo")){
//					var name = getCookie("name");
//					$("#header .top .box .sp1").html('您好，'+name);	
//					$("#header .top .box .a1").html("退出")
//					$(".top .box").css({
//						"margin-left":"750px"
//					})
//					$("#header .top .box .a1").click(function(){
//					//deleteCookie("name");
//					setCookie("boo",false);
//					$("#header .top .box .sp1").html('');
//					$("#header .top .box .a1").html("登录");
//					
//					//window.location.href="index.html";
//					$(".top .box").css({
//						"margin-left":"863px"
//					})
//					})
//				}else{
//					$("#header .top .box .a1").html("登录");	
//					$("#header .top .box .sp1").html('');
//					$("#header .top .box .a1").click(function(){
//						window.location.href="login.html";
//				})
//				}
				
				
//				$("#header .top .box .box1").mouseover(function(){
//					$(this).find("ul").show();	
//				})
//				$("#header .top .box .box1").mouseout(function(){
//					$(this).find("ul").hide();	
//				})
				
				 
				 
			})