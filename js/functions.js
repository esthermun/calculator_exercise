$(document).ready(function(){
	$('#total').keyup(calculate_tax);
	// keyup function listens for when keyup event occurs inside of the element with the id total.
	$('#tip_percent').keyup(calculate_tip);
	$('#calculate').click(calculate_split);
});
	
function calculate_tax(){
	var total, tax;
	total = $('#total').val();
	tax = total*0.13;
	tax = tax.toFixed(2);
	$('#tax').val(tax);
}

function calculate_tip(){
	var total, tip_percent, tip_amt
	total = $('#total').val();
	tip_percent = $('#tip_percent').val();
	tip_percent = tip_percent/100;
	tip_amt = total*tip_percent;
	tip_amt = tip_amt.toFixed(2);
	$('#tip_amt').val(tip_amt);
}

function calculate_split (){
	var total, tax, tip_percent, tip_amt, split_bill, pay_amt, error;
	error = false;
	total = $('#total').val();
	tax = $('#tax').val();
	tip_percent = $('#tip_percent').val();
	tip_amt = $('#tip_amt').val();
	split_bill = $('#split_bill').val();
	
	$('#total').css('border-color', '#acaeb0');
	$('#tip_percent').css('border-color', '#acaeb0');

	if(total == ''|| total < 0){
		error = true;
		$('#total').css('border-color', 'red');
		$('#calculate').addClass('error_button');
		alert (total + " is not a valid number. Please try again.");
	}

	if(tip_percent == '' || tip_percent <0){
		error = true;
		$('#tip_percent').css('border-color', 'red');
		$('#calculate').addClass('error_button');
		alert (tip_percent + " is not a valid number. Please try again.");
	}

	if(split_bill == '' || split_bill <= 0){
		error = true;
		$('#split_bill').css('border-color', 'red');
		$('#calculate').addClass('error_button');
		alert (split_bill + " is not a valid number. Please try again.");
	}

	if (!error){
		total = parseFloat(total) + parseFloat(tax) + parseFloat(tip_amt);
		pay_amt = total/split_bill;
		pay_amt = pay_amt.toFixed(2);
		$('#pay_amt').val('$' + pay_amt); 	
	}
}

/*
function calculate_tip(){
	var total, tax, tip_percent, tip_amt, error;
	error = false;
	total = $('#total').val();
	tax = $('#tax').val();
	tip_percent = $('#tip_percent').val();
	//reset border colors
	$('#total').css('border-color', '#acaeb0');
	$('#tip_percent').css('border-color', '#acaeb0');
	
	if(total == ''|| total < 0){
		error = true;
		$('#total').css('border-color', 'red');
		$('#calculate_tip').css('color', 'red');
		alert (total + " is not a valid number. Please try again.");
	}

	if(tip_percent == '' || tip_percent <0){
		error = true;
		$('#tip_percent').css('border-color', 'red');
		$('#calculate_tip').css('color', 'red');
		alert (tip_percent + " is not a valid number. Please try again.");
	}

	if (!error){
		total = parseFloat(total) + parseFloat(tax);
		tip_percent = tip_percent/100;
		tip_amt = total*tip_percent;
		tip_amt = tip_amt.toFixed(2);
		$('#tip_amt').val('$' + tip_amt); 	
	}
}
*/
