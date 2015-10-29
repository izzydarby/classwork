
$('form').on("submit", function(e) {
		e.preventDefault();
	var firstName = $("input[name='firstName']").val();
	var lastName = $("input[name='lastName']").val();
	var first3 = $("input[name='first3']").val();
	var second3 = $("input[name='second3']").val();
	var last4 = $("input[name='last4']").val();
	var streetAddress = $("input[name='streetAddress']").val();
	var secondAddress = $("input[name='secondAddress']").val();
	var cityAddress = $("input[name='cityAddress']").val();
	var stateAddress = $("input[name='stateAddress']").val();
	var postalAddress = $("input[name='postalAddress']").val();
	var course = $("select[name='selectOne']").val();
	var referral = $("select[name='selectTwo']").val();
		console.log (firstName, lastName, first3, second3, last4, streetAddress, secondAddress, cityAddress, stateAddress, postalAddress, course, referral);


		var data = {
			userFirstName: firstName,
			userLastName: lastName,
			userPhone: [first3, second3, last4],
			userstreetAddress: streetAddress,
			userSecondAddress: secondAddress,
			userCityAddress: cityAddress,
			userStateAddress: stateAddress,
			userPostalAddress: postalAddress,
			userCourse: course,


		}

	$("form").validate();
			rules: {
				firstname: "required",
				lastname: "required",
				email: {
					required: true,
					email: true
			}
		},
		messages: {
			name: "please specify your name",
			email: {
				required: "we need your email address to contact you",
				email: "your email address is required",
			}
		}

		console.log(data);

});

