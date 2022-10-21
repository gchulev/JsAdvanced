window.addEventListener('load', solution);

function solution() {
  document.getElementById('submitBTN').addEventListener('click', submitForm);

  let fullName = document.getElementById('fname');
  let email = document.getElementById('email');
  let phone = document.getElementById('phone');
  let address = document.getElementById('address');
  let postCode = document.getElementById('code');

  function submitForm(evt) {
    evt.preventDefault();

    if (email.value !== '' && fullName.value !== '') {
      let infoPreviewElm = document.getElementById('infoPreview');

      // Creating elements structure
      let li1 = document.createElement('li');
      let li2 = document.createElement('li');
      let li3 = document.createElement('li');
      let li4 = document.createElement('li');
      let li5 = document.createElement('li');

      // Adding "li" items values
      li1.textContent = `Full Name: ${fullName.value}`;
      li2.textContent = `Email: ${email.value}`;
      li3.textContent = `Phone Number: ${phone.value}`; //take as Number if necessary
      li4.textContent = `Address: ${address.value}`;
      li5.textContent = `Postal Code: ${postCode.value}`// take this as value as well if necessary

      // Append child elements to parents
      infoPreviewElm.appendChild(li1);
      infoPreviewElm.appendChild(li2);
      infoPreviewElm.appendChild(li3);
      infoPreviewElm.appendChild(li4);
      infoPreviewElm.appendChild(li5);

      // Clear form fields
      fullName.value = '';
      email.value = '';
      phone.value = '';
      address.value = '';
      postCode.value = '';

      // Disable the submit button and enable the edit and continue buttons
      this.disabled = true;
      document.getElementById('editBTN').disabled = false;
      document.getElementById('continueBTN').disabled = false;

      // Attaching eventlisteners to edit and coninue buttons
      document.getElementById('editBTN').addEventListener('click', editForm);
      document.getElementById('continueBTN').addEventListener('click', completeReservation);
    }
  }

  function editForm() {
    let allLiItems = this.parentElement.parentElement.getElementsByTagName('ul')[0].children;
    // Filling in the form again for edit
    fullName.value = allLiItems[0].textContent.replace('Full Name: ', '').trim();
    email.value = allLiItems[1].textContent.replace('Email: ', '').trim();
    phone.value = allLiItems[2].textContent.replace('Phone Number: ', '').trim();
    address.value = allLiItems[3].textContent.replace('Address: ', '').trim();
    postCode.value = allLiItems[4].textContent.replace('Postal Code: ', '').trim();

    // Disabling "Edit" and "Continue" buttons
    this.disabled = true;
    document.getElementById('continueBTN').disabled = true;

    // Enabling the "Submit" button
    document.getElementById('submitBTN').disabled = false;

    // Removing all "Li" items from the preview
    for (const liItem of Array.from(allLiItems)) {
      liItem.remove();
    }
  }

  function completeReservation() {
    let divBlockElm = document.getElementById('block');
    divBlockElm.innerHTML = '';
    //let divBlockChildren = divBlockElm.children;
    let h3 = document.createElement('h3');
    h3.textContent = 'Thank you for your reservation!'

    // for (const item of Array.from(divBlockChildren)) {
    //   item.remove();
    // }

    divBlockElm.appendChild(h3);
  }
}
