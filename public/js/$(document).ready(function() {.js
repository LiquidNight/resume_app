$(document).ready(function() {
	console.log('im alive');
	$.ajax('/api/resumes/51c3a1448878e79e5d000001', {
		complete : function(response) {
			console.log(response.responseJSON)
			var first = response.responseJSON.name_first
			var last = response.responseJSON.name_last;
			var fullName = first + " " + last;
			$('#name').html(fullName);
			var email = response.responseJSON.contact_info.email;
			var phone = response.responseJSON.contact_info.phone;
			var website = response.responseJSON.website;
			var contactinfo = email + phone + website;
			$('#contact').html(contactinfo);
			

			 

			

			
		}
	});


});