function lunboHandle(){$(".lunbo-pic>li").eq(temp).fadeIn().siblings().fadeOut(),$(".lunbo-point>a").eq(temp).addClass("pointActive").siblings().removeClass(),++temp>=$lis.length&&(temp=0)}function tabToggle(){$(this).css("border-bottom","none").siblings().css("border-bottom","1px solid #dbdbdb");var i=$(this).index()+1,n=2==i?1:2;$(this).parent().parent().children().eq(i).show(),$(this).parent().parent().children().eq(n).hide()}for(var $lis=$(".lunbo-pic>li"),i=0;i<$lis.length;i++)$lis.eq(i).css("background","url(images/"+(i+1)+".jpg) center"),$("<a></a>").appendTo($(".lunbo-point"));$(".lunbo-point>a").eq($lis.length-1).addClass("pointActive"),$(".lunbo-point>a").mouseenter(function(){$(this).addClass("pointActive").siblings().removeClass();var i=$(this).index();$(".lunbo-pic>li").eq(i).stop(!0,!1).fadeIn().siblings().fadeOut()});var temp=0,timeId=setInterval(lunboHandle,4e3);$(".lunbo-pic>li").mouseenter(function(){clearInterval(timeId)}),$(".lunbo-box").mouseleave(function(){timeId=setInterval(lunboHandle,4e3)}),$(".linkThree>.bx div").css({backgroundPositionY:"50%",paddingTop:30}),$(".linkThree>.bx div").mouseenter(function(){$(this).stop().animate({paddingTop:20,backgroundPositionY:"40%"})}),$(".linkThree>.bx div").mouseleave(function(){$(this).stop().animate({paddingTop:30,backgroundPositionY:"50%"})}),$(".side_affice_tabs > li").click(tabToggle),$(".side_list_tabs > li").click(tabToggle),$(".side_box_guide span a").mouseenter(function(){$(this).addClass("active").siblings().removeClass("active");var i=$(this).index(),n=0==i?1:0;$(".side_box_guide>div").eq(i).show(),$(".side_box_guide>div").eq(n).hide()}),$("#hideAside").click(function(){$(".aside").animate({right:-40},function(){$(this).css("display","none")}).prev(".asideBg").animate({right:-40},function(){$(this).css("display","none")}),$("#asideHide").animate({right:0}).css("display","block")}),$("#asideHide").click(function(){$("#asideHide").animate({right:-76},function(){$(this).hide()}),$(".aside").css("display","block").animate({right:0}).prev(".asideBg").css("display","block").animate({right:0})}),$(".calculator").click(function(){$(".calmini").toggle("show")});var onf=!1,leftOnf=!0;$("#miniSel0").children().eq(0).click(function(){onf?($(".miniSelIcon").removeClass("curr").parent().next().css("display","none"),onf=!1):($(".miniSelIcon").addClass("curr").parent().next().css("display","block"),onf=!0)}),$("#miniSel0>.miniSelList>ul>li").mouseenter(function(){$(this).addClass("on").siblings().removeClass()});var $zq=0,$zqinp=$(".miniSelInput").val();$("#miniSel0>.miniSelList>ul>li").click(function(){$zq=$(this).children().eq(0).text(),$(".miniSelIcon").removeClass("curr"),$zqinp=$(".miniSelInput").val($(this).text()),$(".miniSelList").hide(),$(this).removeClass()});var $jk=$("#miniInput0").val();$("#miniInput0").keyup(function(){$jk=$("#miniInput0").val()});var $fl=$("#miniQualify").val();$(".miniRadio>a").click(function(){$(this).toggleClass("active").siblings().removeClass(),$("#miniQualify").val($(this).attr("data")),$fl=$("#miniQualify").val()}),$("#jyd").click(function(){($jk=$jk>0?$jk:0)>=2e4&&$jk<=2e5&&"选择借款期数"!=$zqinp?($("#miniInput0").css("background","white").animate({opacity:1}),$("#miniInput0Erorr").text(""),$("#miniInput1Erorr").text(""),$(".calminiLMTable").html('<table cellspacing="0" cellpadding="0"><tbody><tr><th width="50%">申请金额</th><td>'+$jk+"元</td></tr><tr><th>借款总成本(利息+平台服务费)</th><td>"+($jk*(.06+$fl/1e3)+ +$jk).toFixed(2)+"元</td></tr><tr><th>月还款额</th><td><strong>"+($jk/$zq+$jk*(.06+$fl/1e3)/$zq).toFixed(2)+'元</strong></td></tr></tbody></table><a href="/borrowguide/" class="gray_btn counter_button cms_jk" id="borrow_but">我要借款</a>'),$(".calmini").animate({width:703}),$(".calminiL").css("width",""),$(".calminiLM").css("display","block").animate({opacity:1}),$(".calminiLBar").addClass("barOn"),$(".calminiLBar.barOn>span").css("backgroundPosition","0 -22px"),leftOnf=!1):"选择借款期数"!=$zqinp?($("#miniInput0").css("background","#fd8fc3").animate({opacity:.7}),$("#miniInput0Erorr").text("请输入2-20万之间的整数"),$("#miniInput1Erorr").text("")):"选择借款期数"==$zqinp&&($jk<2e4||$jk>2e5)?($("#miniInput1Erorr").text("请选择期数"),$("#miniInput0").css("background","#fd8fc3").animate({opacity:.7}),$("#miniInput0Erorr").text("请输入2-20万之间的整数")):"选择借款期数"==$zqinp&&($jk>=2e4||$jk<=2e5)&&($("#miniInput0").css("background","white").animate({opacity:1}),$("#miniInput0Erorr").text(""),$("#miniInput1Erorr").text("请选择期数"))}),$(".calminiLBar.defaultOn").click(function(){leftOnf||($(".calmini").animate({width:267}),$(".calminiL").animate({width:"29"}),$(".calminiLM").animate({opacity:0},function(){$(this).css("display","none")}),$(".calminiLBar").removeClass("barOn"),$(".calminiLBar>span").css("backgroundPosition","0 0"))}),$(".calminiClose").click(function(){$(".calmini").hide()});var cjTab=0;$(".calminiRTabT").children("a").click(function(){$(this).toggleClass("curr").siblings().removeClass(),cjTab=$(this).index(),cjTab=0==cjTab?1:0,$(".calminiR > .calminiRTabC").eq($(this).index()).css("display","block"),$(".calminiR > .calminiRTabC").eq(cjTab).css("display","none")});var $sel1List=$("#miniSel1").children(".miniSelList");$("#miniSel1>.miniSelT").on("click",function(){$(this).children("a").toggleClass("curr"),"none"==$sel1List.css("display")?$sel1List.css("display","block"):$sel1List.css("display","none")}),$sel1List.find("li").on({click:function(){$zq=$(this).children().eq(0).text(),$(".miniSelIcon").removeClass("curr"),$zqinp=$("#lRate").val($(this).text()),$(".miniSelList").hide(),$(this).removeClass(),"选择预期年化收益率"==$("#lRate").val()?$("#miniInput3Erorr").text("请选择预期年化收益率"):$("#miniInput3Erorr").text("")},mouseenter:function(){$(this).addClass("on").siblings().removeClass()}});var $sel1List2=$("#miniSel2").children(".miniSelList");$("#miniSel2>.miniSelT").on("click",function(){$(this).children("a").toggleClass("curr"),"none"==$sel1List2.css("display")?$sel1List2.css("display","block"):$sel1List2.css("display","none")}),$sel1List2.find("li").on({click:function(){$zq=$(this).children().eq(0).text(),$(".miniSelIcon").removeClass("curr"),$zqinp=$("#lPeriod").val($(this).text()),$(".miniSelList").hide(),$(this).removeClass(),"选择出借期数"==$("#lPeriod").val()?$("#miniInput4Erorr").text("请选择期数"):$("#miniInput4Erorr").text("")},mouseenter:function(){$(this).addClass("on").siblings().removeClass()}}),$("#normalCal2").click(function(){var i=$("#miniInput1").val();$("#lRate").val(),$("#lPeriod").val();if((i=i>0?i:0)>=100&&i<=5e6&&""!=$("#miniInput1").val()&&"选择预期年化收益率"!=$("#lRate").val()&&"选择出借期数"!=$("#lPeriod").val()){$("#miniInput0").css("background","white").animate({opacity:1}),$("#miniInput2Erorr").text(""),$("#miniInput3Erorr").text(""),$("#miniInput4Erorr").text("");var n=parseInt(+i*parseFloat($("#lRate").val()))/100,e=+i+n+parseInt($("#lPeriod").val())/100*+i;$(".calminiLMTable").html('<table cellspacing="0" cellpadding="0"><tbody><tr><th width="50%">出借金额(本金)</th><td>'+i+"元</td></tr><tr><th>收获(利息)</th><td>"+n+"元</td></tr><tr><th>回款总额</th><td><strong>"+e+'元</strong></td></tr></tbody></table><a href="/borrowguide/" class="gray_btn counter_button cms_jk" id="borrow_but">我要借款</a>'),$(".calmini").animate({width:703}),$(".calminiL").css("width",""),$(".calminiLM").css("display","block").animate({opacity:1}),$(".calminiLBar").addClass("barOn"),$(".calminiLBar.barOn>span").css("backgroundPosition","0 -22px"),leftOnf=!1}else""==$("#miniInput1").val()&&$("#miniInput2Erorr").text("请输入100-500万之间的整数"),"选择预期年化收益率"==$("#lRate").val()&&$("#miniInput3Erorr").text("请选择预期年化收益率"),"选择出借期数"==$("#lPeriod").val()&&$("#miniInput4Erorr").text("请选择期数")}),$("#miniInput1").on("blur",function(){""==$("#miniInput1").val()?$("#miniInput2Erorr").text("请输入100-500万之间的整数"):$("#miniInput2Erorr").text("")}),$(".phone>input").focus(function(){$(".phone").children("span").remove(),$(this).removeAttr("placeholder").css({border:"1px solid skyblue","border-radius":"1px"})}),$(".phone>input").blur(function(){$val=$(this).val(),$reg=/^1[0-9]{10}$/,0==$val.length?$(this).attr("placeholder","留下有效的联系方式以便快速解决问题").css("border","1px solid #ccc"):11==$val.length&&$reg.test($val)?($("<span>格式正确<span>").css({marginleft:5,color:"green"}).appendTo(".phone"),$(this).css({border:"1px solid #ccc","background-color":"white"}),$(this).attr("disabled","disabled")):($("<span>格式错误，重新输入<span>").css({marginleft:5,color:"red"}).appendTo(".phone"),$(this).css({border:"1px solid #ccc","background-color":"white"}),$(this).val(null))}),$(".code").children(".code2").attr("disabled","disabled");for(var arr=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],colorArr=["red","green","blue","purple","black","wine","rainbow","Citrine"],length=4,a="",i=0;i<length;i++){var index=Math.floor(26*Math.random());$(".code").children(".code2").val(a+=arr[index])}for(var j=0;j<length;j++){var b="",colorindex=Math.floor(8*Math.random()),codelength=$(".code").children(".code2").val().length;$(".code").children(".code2").css("color",b+=colorArr[colorindex])}$(".code").children("a").click(function(){for(var i=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],n="",e=0;e<4;e++){var t=Math.floor(26*Math.random());$(".code").children(".code2").val(n+=i[t])}for(var l=0;l<4;l++){var a="",s=Math.floor(8*Math.random());$(".code").children(".code2").css("color",a+=colorArr[s])}}),$(".code").children(".code1").blur(function(){if(0==$(this).val().length)$(".code").children(".answer").html("格式错误，请重新输入").css("color","red");else{var i=$(this).val().toUpperCase();i==$(".code").children(".code2").val()?($(this).attr("disabled","disabled"),$(this).val(i),$(".code").children(".answer").html("正确").css("color","green")):($(".code").children(".answer").html("错误，请重新输入").css("color","red"),$(this).val(null))}}),$(".code").children(".code1").focus(function(){$(".code").children(".answer").html(null),$(this).css({border:"1px solid skyblue","border-radius":"1px"})}),$(".title #close").click(function(){$(".main").css("display","none")}),$(".top>.suggestion").on("click",function(){"none"==$(".main").css("display")?$(".main").css("display","block"):$(".main").css("display","none")});