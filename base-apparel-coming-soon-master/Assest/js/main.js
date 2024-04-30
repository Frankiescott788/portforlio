let btn = document.querySelector('.submit-btn')
	.addEventListener('click', () => {
		let email_input = document.getElementById('email_input');
		let input_value = email_input.value;
		const success_msg = document.getElementById("success-mg");
		let invalid_message_field =  document.getElementById('invalid_message');
		let div = document.createElement('div')
		div.innerHTML = `
			<div class="position-fixed d-block bg-white rounded bottom-0 end-0 p-3 my-2 mx-2" id="success-msg" style="z-index: 11;">
 		 	<div id="liveToast">
			<div class="toast-header">
			<img src="./Assest/images/logo.svg" class="rounded me-2" alt="...">
			</div>
			<div class="toast-body">
			Your email has been submitted.
			</div>
			</div>
			</div>
		`
		if(!input_value.includes('@')){
			invalid_message_field.innerHTML = 'Please provide a valid email';
			let icon_div = document.getElementById('danger-icon');
			let div_icon = document.createElement('div');
			div_icon.innerHTML = `<i class="d-none text-danger ri-error-warning-fill"></i>`;
			icon_div.appendChild(div_icon);

		}else{
			invalid_message_field.innerHTML = null;
			document.querySelector('.pop_up').appendChild(div);
			
			function removeDiv(){
				document.querySelector('.pop_up').removeChild(div)
			}
			setTimeout(removeDiv, 5000)
			
		}
	})

const description = "Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.";

const weare = "WE'RE";

const wordOne = 'COMING';
const wordTwo = 'SOON';

document.getElementById('desc').innerHTML = description;
document.querySelector('.word-one').innerHTML = wordOne;
document.querySelector('.word-two').innerHTML = wordTwo;
document.querySelector('.weare').innerHTML = weare;

