$(document).ready(function() {
	jiazai();

	function jiazai() {
		$.ajax({
			type: "post",
			//data: ,
			url: "http://localhost:3000/users/shouye",
			async: true,
			success: function(data) {
				//console.log(data)
				data.map(function(item) {
					$(".Indexmain ul").prepend(`
						<li id="${item.id}">
						<a href="#">
						<h2>${item.title}</h2>
						<span>
						70亮1951回复</span>
						</a>
						<div id="deleteNews">
							<button>删除</button>
						</div>
					</li>
							`)
				});

				$(".Indexmain li").click(function() {
					$titleId = $(this).attr("id");
					//console.log($titleId);
					$(".Indexmain li").find("a").attr('href', `http://localhost:3000/html/NewsDetail.html?id=${$titleId}`)
				}).mouseenter(function() {
					t = setTimeout(() => {
						$(this).find("#deleteNews").show();
					}, 1500);
				}).mouseleave(function() {
					clearTimeout(t);
					$(this).find("#deleteNews").stop().hide();
					//console.log($(this).attr("id"));
				})


				$("#deleteNews button").click(function() {
					$(this).closest("li").remove();
					let deleteId = $(this).closest("li").attr("id");
					$.ajax({
						type: "post",
						data: {
							id: deleteId
						},
						url: "http://localhost:3000/users/deleteNews",
//						async: ,
						success: function(data) {
							console.log(data)
						}
					});
				});

			}
		});
	}

	var tgb = location.href;
	if(tgb.indexOf("?") >= 0) {
		tgb = tgb.split('?');
		let titleId = tgb[1].split('=');
		let usernameStr = titleId[1].slice(0,11);
		console.log(usernameStr);
		$.ajax({
			type: "post",
			data: {
				username: usernameStr
			},
			url: "http://localhost:3000/users/indexImg",
			async: true,
			success: function(data) {
				$(".indexlogin img").attr("src", `../img/${data[0].picture}`);
				$(".indexlogin img").css('display', 'block');
				$(".loginhtml").css('display', 'none')
				//console.log(data)
			}
		});

		$("#houtaihtml").click(function() {
			$(this).attr('href', `http://localhost:3000/html/houtai.html?id=${titleId[1]}`)
		})
	}

})