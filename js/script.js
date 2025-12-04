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

let snowInterval;
let isSnowing = true;

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.textContent = '❄'; 
  
  snowflake.style.left = Math.random() * 100 + 'vw';
  snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; 
  snowflake.style.opacity = Math.random();
  snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
  
  document.body.appendChild(snowflake);
  
  setTimeout(() => {
    snowflake.remove();
  }, 5000);
}

function startSnowing() {
  // Run the createSnowflake function every 50ms
  snowInterval = setInterval(createSnowflake, 50);
}

function stopSnowing() {
  // 1. Stop creating new flakes
  clearInterval(snowInterval);
  
  // 2. Clear all existing flakes immediately (Optional)
  // If you want them to finish falling naturally, remove the 3 lines below.
  const existingFlakes = document.querySelectorAll('.snowflake');
  existingFlakes.forEach(flake => flake.remove());
}

function toggleSnow() {
  const btn = document.getElementById('toggle-snow-btn');
  
  if (isSnowing) {
    stopSnowing();
    btn.textContent = "Turn Snow On ❄️";
    btn.style.backgroundColor = "#ffcccc"; // Optional: Red tint when off
  } else {
    startSnowing();
    btn.textContent = "Turn Snow Off 🛑";
    btn.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
  }
  
  isSnowing = !isSnowing; // Flip the flag
}

// Initialize: Start the snow automatically when page loads
startSnowing();
