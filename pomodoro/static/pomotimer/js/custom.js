// Disable Right Click
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Disable Copy, Cut, Paste
document.addEventListener('copy', function (e) {
    e.preventDefault();
});
document.addEventListener('cut', function (e) {
    e.preventDefault();
});
document.addEventListener('paste', function (e) {
    e.preventDefault();
});

// Disable Keyboard Shortcuts
document.addEventListener('keydown', function (e) {
    // Disable Ctrl combinations
    if (e.ctrlKey) {
        const blockedKeys = ['c', 'x', 'v', 'u', 's', 'a'];
        if (blockedKeys.includes(e.key.toLowerCase())) {
            e.preventDefault();
        }
    }

    // Disable F12 (DevTools)
    if (e.key === 'F12') {
        e.preventDefault();
    }

    // Disable Ctrl+Shift+I / J / C
    if (e.ctrlKey && e.shiftKey) {
        const blocked = ['i', 'j', 'c'];
        if (blocked.includes(e.key.toLowerCase())) {
            e.preventDefault();
        }
    }
});