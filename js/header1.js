$(function(){
				$("#header").load("header.html",function(){
					
				
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
				$("#header .top .box .a1").click(function(){
						window.location.href="login.html";
			
						
				})
				$("#header .top .box .tui").click(function(){
					deleteCookie("boo",false);
					deleteCookie("name")
					$("#header .top .box .sp1").html('');
					$("#header .top .box .a1").html("登录");
					$("#header .top .box .tui").html("")
					$(".top .box").css({
						"margin-left":"863px"
					})
					})
				$(".input1").blur(function(){
					$(this).val("请输入你的商品名称或货号");
				})
				$(".input1").focus(function(){
					$(this).val('');
				})
				
				
				$("#header .top .box .box1").mouseover(function(){
					$(this).find("ul").show();	
				})
				$("#header .top .box .box1").mouseout(function(){
					$(this).find("ul").hide();	
				})
				$("#header .top2 .quan").mouseover(function(){
					$(this).find(".yiji").show();
				})
				$("#header .top2 .quan").mouseout(function(){
					$(this).find(".yiji").hide();
				})
				$("#header .top2 .quan .yiji .shang .li1").mouseover(function(){
					 
					$(this).find("div").show()
				})
				$("#header .top2 .quan .yiji .shang .li1").mouseout(function(){
					
					$(this).find("div").hide()
				})
				
				
				
				
				
				
				})
				
				$("#foot").load("foot.html",function(){
					$.getScript("js/foot.js");
				});
				$("#footer").load("footer.html");
				
				if(getCookie("boo")){
					var name = getCookie("name");
					$("#header .top .box .sp1").html('您好，'+name);	
					$("#header .top .box .a1").html("退出")
					$(".top .box").css({
						"margin-left":"750px"
					})
					$("#header .top .box .a1").click(function(){
					//deleteCookie("name");
					setCookie("boo",false);
					$("#header .top .box .sp1").html('');
					$("#header .top .box .a1").html("登录");
					
					//window.location.href="index.html";
					$(".top .box").css({
						"margin-left":"863px"
					})
					})
				}else{
					$("#header .top .box .a1").html("登录");	
					$("#header .top .box .sp1").html('');
					$("#header .top .box .a1").click(function(){
						window.location.href="login.html";
				})
				}
				
				
				$("#header .top .box .box1").mouseover(function(){
					$(this).find("ul").show();	
				})
				$("#header .top .box .box1").mouseout(function(){
					$(this).find("ul").hide();	
				})
				
				 
				 
			})