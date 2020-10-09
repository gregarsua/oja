/*!
 * フォームバリデーション
 * Date: Jun 26 2013 
 *
 * 修正の場合は必ずutf-8対応のエディタで修正すること。
 * エラー表示についてはphp側も言語に合わせて修正すること。
 */

$().ready(function() {
  $("#form1").validate({
	rules: {
		name1: "required",
		name2: "required",
		add: "required",
		comment: "required",
		email: {
			required: true,
			email: true
		},
		email2: {
			required: true,
			email: true,
			equalTo: "#email"
		}
	},
	messages: {
		name1: "必填项目",
		name2: "必填项目",
		add: "必填项目",
		comment: "必填项目",
		email: {
			required: "必填项目",
			email: "This is not a form of e-mail address."
		},
		email2: {
			required: "必填项目",
			email: "This is not a form of e-mail address.",
			equalTo: "Please enter the correct e-mail."
		}
	}
  });

$("#form1 input").keypress(e_disable);

});

function e_disable(e) {
	if ((e.which && e.which === 13) || (e.keyCode && e.keyCode === 13)) {
	   return false;
	}
	return true;
}