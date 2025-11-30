/**
 * Theme Toggle Script
 * Handles light/dark theme switching with localStorage persistence
 */

(function() {
  'use strict';

  // Check for saved theme preference or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';

  // Apply theme immediately to prevent flash
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }

  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    // Create theme toggle button
    const toggleButton = document.createElement('button');
    toggleButton.className = 'theme-toggle';
    toggleButton.setAttribute('aria-label', 'Toggle dark mode');
    toggleButton.setAttribute('title', 'Toggle dark/light mode');

    // Set initial icon
    updateToggleIcon(toggleButton);

    // Add click handler
    toggleButton.addEventListener('click', function() {
      document.body.classList.toggle('dark-theme');

      // Save preference
      const isDark = document.body.classList.contains('dark-theme');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');

      // Update icon
      updateToggleIcon(toggleButton);
    });

    // Add to page
    document.body.appendChild(toggleButton);
  });

  // Update toggle button icon based on current theme
  function updateToggleIcon(button) {
    const isDark = document.body.classList.contains('dark-theme');
    button.textContent = isDark ? '☀️' : '🌙';
  }
})();
