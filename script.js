let button = document.getElementById("markas");

button.addEventListener('click', () => {
    document.querySelectorAll('.box-notif').forEach(e => {
        e.classList.remove('unread');
    });
    document.querySelectorAll('.dot').forEach(e => {
        e.classList.remove('dot');
    });
    document.getElementById('number').innerText = '0';
})