// With JQuery
/*$("#ex14").slider({
    ticks: [0, 1],
    ticks_positions: [0, 100],
    ticks_labels: ['cold', 'hot'],
    ticks_snap_bounds: 30
});


// Without JQuery
var slider = new Slider("#ex14", {
  ticks: [0, 1],
  ticks_positions: [0, 100],
  ticks_labels: ['cold', 'hot'],
  ticks_snap_bounds: 30
});

https://seiyria.com/bootstrap-slider/
// With JQuery
$('#ex1').slider({
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});
*/
// Without JQuery
var slider = new Slider('#ex1', {
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});

var slider = new Slider('#ex2', {
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});

var slider = new Slider('#ex3', {
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});

// https://codepen.io/jaycbrf/pen/iBszr
$(document).ready(function() {
	$('#contact_form').bootstrapValidator({
			// To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
			feedbackIcons: {
					valid: 'glyphicon glyphicon-ok',
					invalid: 'glyphicon glyphicon-remove',
					validating: 'glyphicon glyphicon-refresh'
			},
			fields: {
					name: {
							validators: {
											stringLength: {
											min: 2,
									},
											notEmpty: {
											message: 'Please supply your name'
									}
							}
					},
					email: {
							validators: {
									notEmpty: {
											message: 'Please supply your email address'
									},
									emailAddress: {
											message: 'Please supply a valid email address'
									}
							}
					},
					comment: {
							validators: {
										stringLength: {
											min: 10,
											max: 500,
											message:'Please enter at least 10 characters and no more than 500'
									},
									notEmpty: {
											message: 'Please supply your message'
									}
									}
							}
					}
			})
			.on('success.form.bv', function(e) {
					$('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
							$('#contact_form').data('bootstrapValidator').resetForm();

					// Prevent form submission
					e.preventDefault();

					// Get the form instance
					var $form = $(e.target);

					// Get the BootstrapValidator instance
					var bv = $form.data('bootstrapValidator');

					// Use Ajax to submit form data
					$.post($form.attr('action'), $form.serialize(), function(result) {
							console.log(result);
					}, 'json');
			});
});
