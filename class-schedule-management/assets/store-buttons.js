(function () {
    // App Store — open link
    // (href already set in HTML)

    // Google Play — show Coming Soon toast
    const playBtn = document.getElementById('play-store-btn');
    if (!playBtn) return;

    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = '🚀 Coming Soon on Google Play!';
    document.body.appendChild(toast);

    let hideTimer = null;

    playBtn.addEventListener('click', function (e) {
        e.preventDefault();

        clearTimeout(hideTimer);
        toast.classList.add('show');

        hideTimer = setTimeout(function () {
            toast.classList.remove('show');
        }, 2800);
    });
})();
