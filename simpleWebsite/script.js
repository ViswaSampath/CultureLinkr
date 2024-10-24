document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    document.getElementById('successMessage').classList.remove('hidden');
    this.reset();
    
});

document.addEventListener('input', function(event) {

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if ( name.length > 0 || email.length > 0 || message.length > 0){
        document.getElementById('successMessage').classList.add('hidden');
    }
    console.log(name);
});
