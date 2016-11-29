$(function(){
	$("#footer").load("footer.html")
			var cookies = document.cookie;//获取cookie
			
			
			alert(cookies)
			var arr=[];//用来存放id值
			var cook = cookies.split("; ");
			console.log(cook);
			for(var i = 0; i <cook.length;i++){
					var daid = cook[i].split("=");
					var nameid = daid[0]*1;
					if(!isNaN(nameid)&&daid[1]!=null){
						arr.push(daid[1]) ;
						
					}
			}
			console.log(arr);
		$.ajax({
			url:"detail.json",
			success:function(mag){
				var mag1 = mag.data;
				var str='';
				var str1='';
				var str2='';
				for(var i=0; i <arr.length;i++){
					for(var j = 0; j <mag1.length;j++){
						if(arr[i] == mag1[j].id){
							$(".Box3,.Box4,.xia3").show()
							var count = getCookie("count"+mag1[j].id);
//							var mag1[j].name1*Number(count)
								str+='<div class="Box2">'
								str+='<p class="l P1">风尚自营</p>'
					            str+='<a class="l A3" href="#"><img width="50" height="50" src="'+mag1[j].img1+'"/></a>'
					            str+='<div class="l jie">'
						        str+='<a class="A4" href="#">'+mag1[j].name+'</a>'
						        str+='<p class="P2">商品编号：'+mag1[j].huohao+' 颜色：无 规格：无</p>'
					            str+='</div>'
					             str+='<p class="l P3" sdj="'+mag1[j].name1+'">¥'+mag1[j].name1+'</p>'
					            str+='<p class="l P4">有货  </p>'
					            str+='<div class="l jishu">' 
						        str+='<a class="l jian" dataid="'+mag1[j].id+'"  href="javascript:;">-</a>'
						        str+='<input type="text" dataid="'+mag1[j].id+'" name="" id="" value="'+count+'" min="'+1+'" />'
						        str+='<a  class="l jia" dataid="'+mag1[j].id+'" href="javascript:;">+</a>'
					            str+='</div>'
					            str+='<p class="l P5">'+mag1[j].name3*Number(count)+'</p>'
					            str+='<div class="l shan">'
						        str+='<a href="#">收藏</a>'
						        str+='<a class="shanchu" dataid="'+mag1[j].id+'" href="javascript:;">删除</a>'	
					            str+='</div>'
				                str+='</div>'
						}
						
					}
				}
				$(".Box3").before(str);
				var $num=$(".Box2").size()
				var $price=0;
				var gs=0;
				for(var i=0;i<$num;i++){
					$price+=Number($(".Box2").eq(i).find(".P5").html());
					gs+=Number($(".Box2").eq(i).find(".P5").html());
				}
				$(".Pt").html($price)
				$(".P6").html($price)
				
			}
		})
		var length=arr.length;
		//************删除******************
		$(".top3").on("click",".shanchu",function(){
			if(confirm("确定要从购物车中删除此商品？")){
				length--;
				var dataid=$(this).attr("dataid")
				removeCookie(dataid);
				removeCookie("count"+dataid);
				//window.location.reload()
//				if($num==0){
//					alert(1)
//					$(this).parents(".Box3").siblings().hide();
//					$(this).parents(".Box3").hide()
//					$(".xia3").hide()
//				}
				
//						var cookies = document.cookie;//获取cookie
//						alert(cookies)
//						var arr=[];//用来存放id值
//						var cook = cookies.split("; ");
//						console.log(cook);
//						for(var i = 0; i <cook.length;i++){
//								var daid = cook[i].split("=");
//								var nameid = daid[0]*1;
//								if(!isNaN(nameid)){
//									arr.push(daid[1]) ;	
//								}
//						}
						if(length==0){
							//alert(1)
							$(".Box3").hide();
							$(".Box4").hide();
							$(".xia3").hide();
							$(".zuihou").show();
						}
				var xiaoji=$(this).parents(".Box2").find(".P5").html()
				var zongjine=$(".Pt").html();
				var cha=Number(zongjine)-Number(xiaoji);
				//alert(cha)
//				var $num=$(".Box2").size()
//				var $price=0
//				for(var i=0;i<$num;i++){
//				
//					$price+=Number($(".Box2").eq(i).find(".P5").html());
//				}
				$(".Pt").html(cha)
				$(".P6").html(cha)
				$(this).parents(".Box2").hide();
				
				$(this).parents(".Box2").find(".P5").html(0);

			}
		})
		//***************加******************
		$(".top3").on("click",".jia",function(){	
			var num1=Number($(this).prev().val());
			num1++;
			$(this).prev().val(num1);
			var dataid=$(this).attr("dataid")
			var count = Number($(this).prev().val());
			setCookie("count"+dataid,count)	
			var zongshu=getCookie("count"+dataid);
			var danjia=$(this).parents(".Box2").find(".P3").attr("sdj");
			var zongjia=Number(danjia)*Number(zongshu);
			$(this).parents(".Box2").find(".P5").text(zongjia)
			
			var $num=$(".Box2").size()
			var $price=0
			for(var i=0;i<$num;i++){
			
				$price+=Number($(".Box2").eq(i).find(".P5").html());
			
			}
			$(".Pt").html($price)
			$(".P6").html($price)
			
		})

		
		
		//******************减***************
		$(".top3").on("click",".jian",function(){
			var num1=Number($(this).next().val());
			num1--;
			if(num1<0){
				num1=0;
			}
			$(this).next().val(num1);
			var dataid=$(this).attr("dataid")
			var count = Number($(this).next().val());
			setCookie("count"+dataid,count)	
			var zongshu=getCookie("count"+dataid);
			var danjia=$(this).parents(".Box2").find(".P3").attr("sdj");
			var zongjia=Number(danjia)*Number(zongshu);
			$(this).parents(".Box2").find(".P5").text(zongjia)
		

			var $num=$(".Box2").size()
			var $price=0
			for(var i=0;i<$num;i++){
			
				$price+=Number($(".Box2").eq(i).find(".P5").html());
			}
			$(".Pt").html($price)
			$(".P6").html($price)
		})
		$(".xia3").on("click",".qujie",function(){
			window.location.href="order.html"
		})
		//***************头部的二级菜单
				$("#header .box .box1").mouseover(function(){
					$(this).find("ul").show();	
				})
				$("#header .box .box1").mouseout(function(){
					$(this).find("ul").hide();	
				})
				
				//******************头部的登录
				if(getCookie("boo")=='true'){
					var name = getCookie("name");
					$("#header  .box .sp1").html('您好，'+name);	
					$("#header  .box .tui").html("退出")
					$("#header  .box .a1").html("");	
					$(" .box").css({
						"margin-left":"750px"
					})
				}else{
					$("#header  .box .a1").html("登录");	
					$("#header  .box .sp1").html('');
					
				}
				$("#header .box .a1").click(function(){
					window.location.href="login.html";	
				})
				$("#header .box .tui").click(function(){
					removeCookie("boo");
					console.log(document.cookie)
					$("#header .top .box .sp1").html('');
					$("#header .top .box .a1").html("登录");
					$("#header .top .box .tui").html("")
					$(".top .box").css({
						"margin-left":"863px"
					})
					window.location.href="index.html"
				})
				//********************邮寄地址
				$(".dizhi").mouseover(function(){
					$(".erji").show();
				})
				$(".dizhi").mouseout(function(){
					$(".erji").hide();
					
				})
				//**********省会
				$(".jx").click(function(){
					$(".sheng").show()
					$(".shi").hide();
					$(this).css({
						"background":"url(imgCart/4.jpg) no-repeat 39px 9px",

				
					})
					$(this).next().css({
						"background":"url(imgCart/3.jpg) no-repeat 39px 9px"
					})
				})
				//************市区
				$(".nc").click(function(){
					$(".sheng").hide();
					$(".shi").show();
					$(this).css({
						"background":"url(imgCart/4.jpg) no-repeat 39px 9px"
					})
					$(this).prev().css({
						"background":"url(imgCart/3.jpg) no-repeat 39px 9px"
					})
				})
				
				$(".sheng li a").click(function(){
					   num = $(this).text()
					   $(".sheng a").css({
					   	"background":"#fff",
					   	"color":"#000"
					   })
					   $(this).css({
					   	"background":"blue",
					   	"color":"#fff"
					   })
					   
				})
				$(".shi a").click(function(){
					  var num1 = $(this).text()
					  $(".add").text(num+num1)
					  
				})
				//************删除商品***************
//				$("body").on("click",".shanchu",function(){
//					$(this).parents(".Box2").hide();
//					var dataid=$(this).attr("dataid");
//					deleteCookie(dataid)
//				})
				//*********清空购物车************
				$("body").on("click",".A5",function(){
					$(this).parents(".Box3").siblings().hide();
					$(".Box1").show()
					$(this).parents(".Box3").hide()
					$(".xia3").hide()
					$(".zuihou").show();
					var shan = $(".shanchu").size();
					
					for(i=0;i<shan;i++){
						var dataid=$(".shanchu").eq(i).attr("dataid")
						alert(dataid)
						removeCookie(dataid);
					}
				})
})
