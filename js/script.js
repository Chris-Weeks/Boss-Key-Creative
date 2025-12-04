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

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.textContent = '❄'; // You can use distinct characters like ❅ or ❆
  
  // Randomize positions and animation details
  snowflake.style.left = Math.random() * 100 + 'vw';
  snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Between 2 and 5 seconds
  snowflake.style.opacity = Math.random();
  snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
  
  document.body.appendChild(snowflake);
  
  // Remove snowflake after it finishes falling to keep DOM light
  setTimeout(() => {
    snowflake.remove();
  }, 5000);
}

// Create a snowflake every 50 milliseconds
setInterval(createSnowflake, 50);
