$(function(){
	$(".Dleft").on("click",".zhonga",function(){
				//alert(1);
				var Src=$(this).find("img").attr("src");
				//alert(Src);
				$(".smallpic").attr("src",Src);
				$(".bigPic").attr("src",Src);
				
			})
	
				var data = getCookie("dataid");
				//alert(data);
				$(function(){
					$.ajax({
						type:"get",
						url:"detail.json",
						async:true,
						dataType:"json",
						success:function(mag){
					
							var shuju = mag.data;
							var str='';
							var str1='';
							var str2='';
							for(var i in shuju){
								if(data==shuju[i].id){
									if(shuju[i].img5!=''){
																	
									str+='<div class="yi11" id="yi11">'
									str+='<img class="smallpic"  width="478" height="478" src="'+shuju[i].img+'"/>'	         
									str+='<span class="mark" id="mark"></span>'
					                str+='<span class="zhezhao" id="zhezhao"></span>'
									str+='</div>'
									str+='<div class="er22">'
									str+='<a href="javascript:;" class="l Lbtn">'	
									str+='</a>'
									str+='<div class="l zhong1">'
									str+='<a class="l zhonga" href="javascript:;"><img width="50" height="50" src="'+shuju[i].img1+'"/></a>'		
									str+='<a class="l zhonga" href="javascript:;"><img width="50" height="50" src="'+shuju[i].img4+'"/></a>'
									str+='<a class="l zhonga" href="javascript:;"><img width="50" height="50" src="'+shuju[i].img5+'"/></a>'		
									str+='<a class="l zhonga" href="javascript:;"><img width="50" height="50" src="'+shuju[i].img6+'"/></a>'
									str+='</div>'
									str+='<a href="javascript:;" class="r Rbtn">'		
									str+='</a>'
									str+='</div>'
									                                str+='<div class="san33">'
					                str+='<span style=""></a>'
					                str+='<a class="jing4" href="#"></a>'
					                str+='<a class="jing5" href="#"></a>'
					                str+='<a class="jing6" href="#">0</a>'
					                str+='<a class="shou" href="#"></a>'
					                str+='<div class="bigpic" id="bigpic">'
					                str+='<img class="bigPic" id="bibi" width="956" height="956" src="'+shuju[i].img+'"/>'
				                   str+='</div>'
									 str+='<span style="display:block;" class="l sp3">分享到：</span>'
					                str+='<a class="jing1" href="#"></a>'
					                str+='<a class="jing2" href="#"></a>'
					                str+='<a class="jing3" href="#"></a>'
									
									
									
									str1+='<div class="l zuo4">'
						            str1+='<h2>'+shuju[i].name+'</h2>'
									str1+='<p class="huohao">货&nbsp;&nbsp; &nbsp; &nbsp;号：<span>'+shuju[i].huohao+'</span></p>'
									str1+='<p class="jiage">风尚价格：<span>'+shuju[i].name1+'</span></p>'
						            str1+='<div class="ping">'
							        str1+='<div class="shuliang">'
								    str1+='<span class="sp4">'+shuju[i].name2+'</span>'
								   	str1+='<span class="sp5">'+shuju[i].xiaoliang+'</span>'	
							        str1+='</div>'
							        str1+='<div class="wenzi">'
								    str1+='<p class="l ppp1">元/网购积分</p>'
								    str1+='<p class="l ppp2">件/月销量</p>'
								    str1+='<p class="l ppp3">暂无评价</p>'	
									str1+='</div>'
						            str1+='</div>'
					           	 	str1+='<div class="ku">'
							        str1+='<p class="l ppp4">库&nbsp;&nbsp; &nbsp; &nbsp;存：</p>'
							        str1+='<div class="l xiala">'
								    str1+='江西 南昌市'
							        str1+='</div>'
							        str1+='<p class="l ppp5">现货</p>'
									str1+='</div>'
						            str1+='<div class="goumai">'
							        str1+='<p class="l ppp6">购买数量：</p>'
							        str1+='<div class="l inp6">'
							        str1+='<p class="l jianhao">-</p>'
							        str1+='<input class="l inpu" type="text" min="1" name="" id="" value="1" />'
							        str1+='<p class="l jiahao">+</p>'
						            str1+='</div>'
							        str1+='<p class="l ppp7">件&nbsp; &nbsp;   已选择“无  无码”</p>'
						            str1+='</div>'
						            str1+='<div class="A2">'
							        str1+='<a href="#"><img src="'+shuju[i].img2+'"/></a>'
							        str1+='<a class="aaa" dataid="'+shuju[i].id+'" href="javascript:;"><img src="'+shuju[i].img3+'"/></a>'
									str1+='</div>'
					                str1+='</div>'
					               
				                  
										
									}else{
									str+='<div class="yi11" id="yi11">'
									str+='<img class="smallpic" id="smallpic"  width="478" height="478" src="'+shuju[i].img+'"/>'	         
									str+='<span class="mark" id="mark"></span>'
					                str+='<span class="zhezhao" id="zhezhao"></span>'
									str+='</div>'
									str+='<div class="er22">'
									str+='<a href="javascript:;" class="l Lbtn">'	
									str+='</a>'
									str+='<div class="l zhong1">'
									str+='<a class="l zhonga" href="javascript:;"><img width="50" height="50" src="'+shuju[i].img1+'"/></a>'		
									str+='<a class="l zhonga" href="javascript:;"><img width="50" height="50" src="'+shuju[i].img4+'"/></a>'
									
									str+='</div>'
									str+='<a href="javascript:;" class="r Rbtn">'		
									str+='</a>'
									str+='</div>'
									 str+='<div class="san33">'
					                str+='<span style=" display:block;" class="l sp3">分享到：</span>'
					                str+='<a class="jing1" href="#"></a>'
					                str+='<a class="jing2" href="#"></a>'
					                str+='<a class="jing3" href="#"></a>'
					                str+='<a class="jing4" href="#"></a>'
					                str+='<a class="jing5" href="#"></a>'
					                str+='<a class="jing6" href="#">0</a>'
					                str+='<a class="shou" href="#"></a>'
					                str+='<div class="bigpic" id="bigpic">'
					                str+='<img class="bigPic" id="bibi" width="956" height="956" src="'+shuju[i].img+'"/>'
				                  	str+='</div>'
									
									
									
									
									str1+='<div class="l zuo4">'
						            str1+='<h2>'+shuju[i].name+'</h2>'
									str1+='<p class="huohao">货&nbsp;&nbsp; &nbsp; &nbsp;号：<span>'+shuju[i].huohao+'</span></p>'
									str1+='<p class="jiage">风尚价格：<span>'+shuju[i].name1+'</span></p>'
						            str1+='<div class="ping">'
							        str1+='<div class="shuliang">'
								    str1+='<span class="sp4">'+shuju[i].name2+'</span>'
								   	str1+='<span class="sp5">'+shuju[i].xiaoliang+'</span>'	
							        str1+='</div>'
							        str1+='<div class="wenzi">'
								    str1+='<p class="l ppp1">元/网购积分</p>'
								    str1+='<p class="l ppp2">件/月销量</p>'
								    str1+='<p class="l ppp3">暂无评价</p>'	
									str1+='</div>'
						            str1+='</div>'
					           	 	str1+='<div class="ku">'
							        str1+='<p class="l ppp4">库&nbsp;&nbsp; &nbsp; &nbsp;存：</p>'
							        str1+='<div class="l xiala">'
								    str1+='江西 南昌市'
							        str1+='</div>'
							        str1+='<p class="l ppp5">现货</p>'
									str1+='</div>'
						            str1+='<div class="goumai">'
							        str1+='<p class="l ppp6">购买数量：</p>'
							        str1+='<div class="l inp6">'
							        str1+='<p class="l jianhao">-</p>'
							        str1+='<input class="l inpu" type="text" min="1" name="" id="" value="1" />'
							        str1+='<p class="l jiahao">+</p>'
						            str1+='</div>'
							        str1+='<p class="l ppp7">件&nbsp; &nbsp;   已选择“无  无码”</p>'
						            str1+='</div>'
						            str1+='<div class="A2">'
							        str1+='<a href="#"><img src="'+shuju[i].img2+'"/></a>'
							        str1+='<a class="aaa" dataid="'+shuju[i].id+'" href="#"><img src="'+shuju[i].img3+'"/></a>'
									str1+='</div>'
					                str1+='</div>'
					
					
				                    
										
									}
									
								
									
								
								}	
							
							}		
						
						
							$(".Dleft").append(str);
							$(".zuo4").append(str1);
						
						// seftsd()
						$("#yi11").mouseover(function(){
							$("#mark").show(); 
							$("#bigpic") .show() ;
						});

			
						$("#yi11").mouseout(function(){
							$("#mark").hide() ; 
							$("#bigpic") .hide() 
						});
				
						$("#yi11").mousemove(function(evt){
					
							var e = evt || window.event;
					
					
							var l = e.pageX - $("#yi11").offset().left - $("#mark").width()/2;
							var t = e.pageY - $("#yi11").offset().top -$("#mark").height() /2;
					
					
					//限制边界
					if(l < 0){
						l = 0;
					}else if(l > $("#yi11").width() -$("#mark").width() ){
						l =$("#yi11").width() -$("#mark").width() ;
					}
					
					if(t < 0){
						t = 0;
					}else if( t >$("#yi11").height() -$("#mark").height()){
						t = $("#yi11").height() -$("#mark").height()
					}
					
					$("#mark").css({
						"left":l+'px',
						"top":t+"px"
					})
				
					
					$("#bibi").css({
						"left":-2*l+"px",
						"top":-2*t+"px"
					})
				})
			}
					
		})			
	})
				
				
//		***************加入购物车
				var count=0;
				$("body").on("click",".zuo4 .aaa ",function(){
					//alert(1)
					var dataid = $(this).attr("dataid");
					//alert(dataid)
					var count = $(".inpu").val();
					//alert(getCookie(dataid))
					if(getCookie(dataid)===dataid){	
						
						var oldnum = getCookie("count"+dataid);
						var newnum = Number(oldnum)+Number(count);
						setCookie("count"+dataid,newnum);
						window.location.href="cart.html";
						//alert(oldnum);
						//alert(newnum);					
						
					}else{
						setCookie(dataid,dataid);
						setCookie("count"+dataid,count);
						window.location.href="cart.html";
					}
				})
		$(".xuan li").click(function(){
			for(var i=0; i<4; i++){
				$(".you3 .abc").eq(i).hide()
				if(i==$(this).index()){
					$(".you3 .abc").eq($(this).index()).show();
					$(this).css({
						"border-top":"2px solid red",
						"border-bottom":"0",
					}).siblings().css({
						"border-top":"1px solid #ccc",
						"border-bottom":"1px solid #ccc",
					}).find("a").css({
						"color":"#999"
					});
					$(this).find("a").css({
						"color":"red"
					})
				}
			}

		})
		
	
				$("body").on("click",".aaa",function(){		
					$("body").append($(".yi11").find(".smallpic").clone().css({"width":"408px","height":"408px","position":"absolute","left":"50px","top":"200px"}).animate({"left":"1200px","top":"85px","width":"5px","height":"5px"},3000));
				})
				
				$(".zuo4").on("click",".jianhao",function(){
					var num=$(".inpu").val();
					num--;
					if(num<0){
						num=0;
					}
					$(".inpu").val(num);
					
				})
				$(".zuo4").on("click",".jiahao",function(){
					var num=$(".inpu").val();
					num++;
					$(".inpu").val(num);
					
				})
				
				
		
	
		
		
		
		
		
		
		
		
		
//			
//			function seftsd(){
//			//获取所有元素
//				var oDiv = document.getElementById("yi11");
//				var oMark = document.getElementById('mark');
//				var oBig = document.getElementById('bigpic');
//				var oSmall = document.getElementById('smallpic');
//				var oImg = document.getElementById('bibi');
//				var oZhe=document.getElementById("zhezhao");
//				
//				var oB=document.getElementById("banner");
//				//var oD = document.getElementsByClassName("Dleft")[0];
//				//给遮罩层添加鼠标移入事件
//				oZhe.onmouseover = function(){
//					oMark.style.display = 'block';  //让小块显示出来
//					oBig.style.display = 'block';   //同时让大图显示出来
//				};
//				//给遮罩层添加鼠标移出事件
//				oZhe.onmouseout = function(){
//					oMark.style.display = 'none';  //让小块隐藏
//					oBig.style.display = 'none';   //同时让大图隐藏
//				};
//				
//				//给遮罩层添加鼠标移动事件
//				oZhe.onmousemove = function(evt){
//					var e = evt || window.event;
//					
//					//鼠标页面位置-最外面div到页面左边的距离 - 小图到oDiv的距离 - oFloat的宽度/2 (使鼠标到oFloat的中心位置);
//					var l = e.pageX - oB.offsetLeft - oMark.offsetWidth/2;
//					var t = e.pageY - oB.offsetTop - oMark.offsetHeight/2;
//					
//					
//					//限制边界
//					if(l < 0){
//						l = 0;
//					}else if(l > oDiv.offsetWidth - oMark.offsetWidth){
//						l = oDiv.offsetWidth - oMark.offsetWidth;
//					}
//					
//					if(t < 0){
//						t = 0;
//					}else if( t > oDiv.offsetHeight - oMark.offsetHeight){
//						t = oDiv.offsetHeight - oMark.offsetHeight;
//					}
//					//console.log(e.clientX,oB.offsetLeft,oMark.offsetWidth/2,l,t);
//					oMark.style.left = l + 'px';
//					oMark.style.top = t + 'px';
//					
//					//小块活动的距离（移动比例）（大图显示比例）
//	//				var percentX = l / (oDiv.offsetWidth - oMark.offsetWidth);
//	//				var percentY = t / (oDiv.offsetHeight - oMark.offsetHeight);
//					 //-percentX * (oImg.offsetWidth - oBig.offsetWidth)
//					// percentY * (oImg.offsetHeight - oBig.offsetHeight)
//					//大图的left值 = 移动比例 * （大图的宽度 - 大图所在Div的宽度）（大图所能移动的距离）
//					oImg.style.left = -2*l + 'px';
//					oImg.style.top = -2*t + 'px';
//					
//			};
})
