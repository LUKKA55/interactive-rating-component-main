document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('submit').addEventListener('click', function (event) {
		event.preventDefault();

		const input_radio = document.getElementsByName('feedback');
		for (let i = 0; i < input_radio.length; i++) {
			if (input_radio[i].checked) {
				document.body.innerHTML = `
        <div class="container-feedback">
          <img
            class="img-feedback"
            src="./images/illustration-thank-you.svg"
            alt=""
          />
          <p class="legenda-feedback">You selected ${input_radio[i].value} out of 5</p>
          <p class="titulo-feedback">Thank you!</p>
          <p class="description-feedback">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
        `;
			}
		}
	});
});
