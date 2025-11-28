// 1. Use querySelector to get the single container element
const backgroundSelect = document.querySelector('.background-select');

const changeBackground = (selectedTheme) => {
    // 2. document.body is a built-in shortcut for document.querySelector('body')
    const body = document.body;

    // 3. CLEAN UP: Remove all potential background classes first
    body.classList.remove('dark', 'light', 'dungeon');

    // 4. Add the new class
    if (selectedTheme) {
        body.classList.add(selectedTheme);
        // Persist selection for future visits
        localStorage.setItem('theme', selectedTheme);
    } else {
        // Clear saved theme if none provided
        localStorage.removeItem('theme');
    }
}

// 5. Ensure the element exists before adding the listener
if (backgroundSelect) {
    backgroundSelect.addEventListener('click', function(event) {
        // Check if the clicked element is a button
        if (event.target.tagName === 'BUTTON') {
            const backgroundSelected = event.target.id;
            changeBackground(backgroundSelected);
        }
    });
}

// Restore saved theme on load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        changeBackground(savedTheme);
    }
});