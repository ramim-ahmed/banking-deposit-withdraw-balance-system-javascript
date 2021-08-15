
const submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const userName = document.querySelector('#user-name');
    const userNameValue = userName.value;
    const userEmail = document.querySelector('#user-email');
    const userEmailValue = userEmail.value
    const userPassword = document.querySelector('#user-password');
    const userPasswordValue = userPassword.value;
   
    if(userNameValue && userEmailValue && userPasswordValue) {
       window.location.href = 'bank-view.html'
    }
})
