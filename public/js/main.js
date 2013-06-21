$(document).ready(function() {
	console.log('im alive');
	$.ajax('/api/resumes/51c209c063fca6dc3d000001', {
		complete : function(response) {
			var first = response.responseJSON.name_first;
			var last = response.responseJSON.name_last;
			var fullName = first + " " + last;
			$('.name').html(fullName);
			var city = response.responseJSON.contact_info.street_address.city;
			$('.city').html(city);
			var state = response.responseJSON.contact_info.street_address.state;
			$('.state').html(state);
			var zip_code = response.responseJSON.contact_info.street_address.zip_code;
			$('.zip').html(city);
			var citystatezip = city + ", " + state + zip_code;

			var zip_code = response.responseJSON.contact_info.street_address.zip_code;
			var phone = response.responseJSON.contact_info.phone;
			
			$('.zip').html(city);


			console.log(response.responseJSON);
			var website = response.responseJSON.website;
			$('.website').html(website);
			var email = response.responseJSON.contact_info.email;
			var phone = response.responseJSON.contact_info.phone;
			

			
		}
	});


});
