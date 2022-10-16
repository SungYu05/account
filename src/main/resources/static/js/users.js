$("#btnLogin").click(() => {
	login();
});

function login() {
	let data = {
		userId: $("#userId").val(),
		userPassword: $("#userPassword").val(),
		remember: $("#remember").prop("checked")
	};
	$.ajax("/api/login", {
		type: "POST",
		dataType: "json", // 응답 데이터
		data: JSON.stringify(data), // http body에 들고갈 요청 데이터
		headers: { // http header에 들고갈 요청 데이터
			"Content-Type": "application/json; charset=utf-8"
		}
	}).done((res) => {
		if (res.code == 1) {
			alert("로그인성공");
			location.href = "/";

		} else {
			alert("로그인 실패, 아이디 패스워드를 확인해주세요");
		}
	});
}

$("#btnUpdate").click(() => {
	update();
});

function update() {
	let data = {
		userName: $("#userName").val(),
		email: $("#email").val(),
		phoneNumber: $("#phoneNumber").val()
	};

	let id = $("#id").val();

	$.ajax("/s/api/users/" + id, {
		type: "PUT",
		dataType: "json", // 응답 데이터
		data: JSON.stringify(data), // http body에 들고갈 요청 데이터
		headers: { // http header에 들고갈 요청 데이터
			"Content-Type": "application/json; charset=utf-8"
		}
	}).done((res) => {
		if (res.code == 1) {
			alert("회원 수정 완료");
			location.reload(); // f5
		} else {
			alert("업데이트에 실패하였습니다");
		}
	});
}
