$(document).ready(function() {

var tgb = location.href;
if(tgb.indexOf("?") >= 0) {
	tgb = tgb.split('?');

	let titleId = tgb[1].split('=');
	//没有完善功能，后期编写获取username字符串
	//将字符串转数组，然后将各自的数组转成对象。获取到username的值。

	console.log(titleId[1]);

	$.ajax({
		type: "post",
		data: {
			id: titleId[1]
		},
		url: "http://localhost:3000/users/detail",
		async: true,
		success: function(data) {
			$(".NewsTitle h1").text(data[0].title);
			$(".author span").text(data[0].author);
			$(".Article img").attr("src", `../img/${data[0].img}`);
			$(".ArticleContent").html(`	<p>${data[0].content}</p>`);
			console.log(data)
			$.ajax({
				type:"post",
				url:"http://localhost:3000/users/imgchange",
				data:{
					username:data[0].author
				},
				async:true,
				success:function(res){
				$(".author img").attr('src', `../img/${res}`);
					
				}
			});
			
			
		}
	});

}
	
//点击事件，显示文本框
$(".huifu").click(function(){
	$("#comment form").css('display','block');
	$("#pinglun").val("")
})



//聊天功能
		var socket = io('http://localhost:3001');
		socket.on('connect', function() {});
		socket.on('event', function(data) {});
		socket.on('disconnect', function() {});
		//监听
		socket.on('sendMessageToAllClient', function(data) {
			console.log(data);
			$(".AllReplies ul").prepend(
			`<li class="clearfix">
			<div class="yonghu">
				<a href="#"><img src="../images/nav2.jpg" />
					<span class="yonghuName">我是kobe的女粉丝</span>
				</a>
				<span class="yonghuTimes">7小时前</span>
			</div>
			<div class="reply-content">
				<span>${data}</span>
			</div>
			<div class="reply-bt">
				<span>发自虎扑Android客户端</span>
				<a href="#" id="checkReply">
					查看回复(1)
				</a>
			</div>
			</li>`);
		});
		$("#pinglunBtn").click(function() {
			
			socket.emit("sendMessageToServer", $("#pinglun").val());
			$("#comment form").css('display','none');
		})

	
		
})