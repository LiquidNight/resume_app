

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

$(document).ready(function() {


$('.education_block_add').click(function() {
	var html = $('.education_block').first().clone();
	html.css('display', 'none');
	$(this).before(html);
	html.slideDown(600)
	/* $('.help-block').before(html); */
	return false;

	});

$('.experience_block_add').click(function() {
	var html = $('.experience_block').first().clone();
	html.css('display', 'none');
	$(this).before(html);
	html.slideDown(600)
	/* $('.help-block').before(html); */
	return false;

	});

$('.experience_block_add').click(function() {
	var html = $('.experience_block').first().clone();
	html.css('display', 'none');
	$(this).before(html);
	html.slideDown(600)
	/* $('.help-block').before(html); */
	return false;

	});


$('#userDataForm').submit(function() {
	var userData = {};

	var fullName =$('#name').val();
	var name_array = fullName.split)(' ');
	userData.name_first = name_array [0];
	userDAta.name_last = name_array[name_array.length - 1];

	userData.schools = [];
	var education_blocks = $('.education_block'):

	education_blocks.each(function(index, item) {
		var startDate = $(item).find('.startDate').val();
		var formattedDate = startData.slice(5, 7) + startDate.slice(2, 4)
		userData.schools.push({
			name : $(item).find('name').val(),
			degree : $(item).find('.degree').val(),
			start_month_year : formattedDate
		});
	});

// possible following code placed her
/* console.log(userData);
	return false; */

	userData.fullName = $('#name').val();
	
	userData.schools = [];
	var education_blocks = $('.education_block');

	console.log(education_blocks);


//item can also be called Element
//.find is a jQuery method that selects things, can pass any valid CSS selector into it
//.find is like the $
// jquery is sticking them is but we are labeling them i.e. the items when the element is put in

/*
$(document).ready(function() {
var favoriteDrinks = [];

$('.person').each(function(index, item) {
	var element = $(item);
	var text = element.find('p').html();
	favoriteDrinks.push(text);
});
	console.log(item);
	
});	
*/


	
	console.log(userData);
	return false;
	
	});

});
