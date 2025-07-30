function toggleText() {
    const moreText = document.getElementById('more-text');
    const button = document.getElementById('toggle-button');

    moreText.classList.toggle('show');

    if (moreText.classList.contains('show')) {
        if (lang === 'ko') {
            button.textContent = '닫기';
        } else {
            button.textContent = 'Close';
        }
    } else {
        if (lang === 'ko') {
            button.textContent = '열기';
        } else {
            button.textContent = 'Open';
        }
    }
}