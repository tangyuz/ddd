$(function(){
	$("#foot").load("foot.html")
//		***************大轮播**********
			var _index=0;
			var lun=$(".lunbo");
			var pic=$(".left .lunbo li");
			var length=pic.size();
			var oA=$(".left .lunbo .btn a");
			var timer=setInterval(change,2000)
			lun.mouseover(function(){
				clearInterval(timer);
			})
			lun.mouseout(function(){
				timer=setInterval(change,2000);
			})
			oA.mouseover(function(){
					_index = $(this).index()-1;
					change();
			})
			function change(){
				_index++;
				if(_index>=length){
					_index=0;
				}
				pic.eq(_index).stop(true).fadeIn().siblings().stop(true).fadeOut();
				oA.css({
					"background":"#999999"
				})
				oA.eq(_index).css({
					"background":"red",
					"color":"#fff"
				})
				
			}
			
			
//			*************小轮播**********
			var timer1=setInterval(lunbo,2000);
				function lunbo(){
					$("#content .zuo .tu ul").animate({'marginLeft':'-208px'},1500,function(){
						$("#content .zuo .tu ul li").eq(0).appendTo($("#content .zuo .tu ul"))
						$("#content .zuo .tu ul").css({'marginLeft':0})
					})
				}
			$("#content .zuo").on("click",".prev",zuojian)
//			***************左边按钮的运动**********
			function zuojian(){
				$("#content .zuo").off("click",".prev");
				$("#content .zuo .tu ul li").eq(1).prependTo($("#content .zuo .tu ul"))
				$("#content .zuo .tu ul").css({'marginLeft':'-208px'})
				$("#content .zuo .tu ul").animate({'marginLeft':'0'},1500,function(){
					$("#content .zuo").on("click",".prev",zuojian);
				});
			}
			
			$("#content .zuo .next").click(function(){
				lunbo();
			})
//			**********移入移出*************
			$("#content .zuo").hover(function(){
				clearInterval(timer1);
			},function(){
				timer1=setInterval(lunbo,2000);
			})
//			************大轮播*********
			var timer2=setInterval(animated,10000)
			function animated(){
				$("#content .center .yun .zong").animate({"marginLeft":"-720px"},5000,function(){
					$("#content .center .yun .zong>div").eq(0).appendTo($("#content .center .yun .zong"));
					$("#content .center .yun .zong").css({
						"marginLeft":"0"
					})
				})
				
			}
			$("#content .center .yun").hover(function(){
				clearInterval(timer2);
			},function(){
				timer2=setInterval(animated,10000);
			})
			$("#content .center .youjian").click(function(){
				animated();
			})
			$("#content .center").on("click",".zuojian",zuoAnimated);
			
			function zuoAnimated(){
				$("#content .center").off("click",".zuojian");
				$("#content .center .yun .zong>div").eq(5).prependTo($("#content .center .yun .zong"))
				$("#content .center .yun .zong").css({'marginLeft':'-720px'})
				$("#content .center .yun .zong").animate({'marginLeft':'0'},5000,function(){
					$("#content .center").on("click",".zuojian",zuoAnimated);
				});
			}
})
