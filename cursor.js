document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('cursor');
    cursor.style.left = (e.clientX - cursor.offsetWidth / 2) + 'px';
    cursor.style.top = (e.clientY - cursor.offsetHeight / 2) + 'px';
});