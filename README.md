# StudentSite

StudentSite is a productivity web app designed to help students stay focused and organized. It features a 25-minute Pomodoro timer, a basic calculator, a to-do list, and an Etch-a-Sketch-style game for relaxation.
Live Demo: https://najwanlaskar.github.io/StudentSite/


## 🛠 Tech Stack
- HTML
- CSS
- JavaScript

## ⚙️ Features & Implementation

I designed StudentSite to combine essential study tools with stress-relief elements not commonly found in other Pomodoro apps:
- Pomodoro Timer: Uses JavaScript intervals to count down from 25 minutes.
- Calculator: Performs basic arithmetic operations triggered by button clicks.
- To-Do List: Allows task creation and stores them in local storage for persistence.
- Etch-and-Sketch Game: Generates a customizable grid (default 16×16) that responds to hover events for creative breaks.

## 🚀 Optimization
Although I initially planned to use a database for persistent storage, I opted for local storage to simplify architecture and improve performance. This choice suits single-user use cases and keeps the app lightweight. Future updates may include database integration for multi-user support.

## 🔮 Future Plans
- Add user authentication and database support for secure, cross-device data access
- Introduce customizable timer presets (e.g., 50/10, 90/30)
- Improve UI/UX with animations and accessibility features

## 📚 Lessons Learned
- Implemented local storage for persistent client-side data
- Connected UI elements to JavaScript functions via event listeners
- Built interactive components like hover-based grid drawing
