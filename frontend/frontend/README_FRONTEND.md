# Health_App Frontend Usage & Backend Integration

## How to Start the Backend (Flask)
1. Open a terminal and navigate to the `backend` folder:
   ```
   cd ../../backend
   ```
2. (Optional) Create a virtual environment and activate it:
   ```
   python -m venv venv
   venv\Scripts\activate  # On Windows
   ```
3. Install dependencies:
   ```
   pip install flask flask-cors
   ```
4. Start the backend server:
   ```
   python app.py
   ```
   The backend will run at `http://127.0.0.1:5000`.

## How the Frontend Connects to the Backend
- When you paste your food log and click **Parse**, the React app sends a POST request to `http://127.0.0.1:5000/parse-log`.
- The backend parses your log and returns calorie data, which is displayed in the UI.
- If the backend is not running, you will see a "Could not connect to backend" error.

## Troubleshooting
- Make sure the backend server is running before using the Parse feature.
- If you change the backend port, update the URL in `App.js` accordingly.

## Design Choices
- **Modern palette:** White, blue, black, and red for a clean, premium look.
- **Font Awesome icons:** Used everywhere for clarity and visual appeal.
- **Framer Motion:** Smooth, professional animations.
- **Navigation:** Only useful buttons are shown; all are functional or removed.
- **Responsive:** Layout adapts to all screen sizes.

---
For any issues, check the backend terminal for errors or contact the developer.
