# BMI Calculator App

A React JS Application to help users track their fitness by calculating their Body Mass Index (BMI).

## Project Structure

```
bmi-calculator/
├── node_modules/              # Installed dependencies
├── public/
│   ├── index.html            # Main HTML file that loads the React app
│   ├── favicon.ico           # Website icon
│   └── manifest.json         # PWA manifest
├── src/
│   ├── BMICalculator.js      # ⚛️ Main React functional component (logic & UI)
│   ├── BMICalculator.css     # 🎨 Styling for the BMI Calculator component
│   ├── App.js                # Main App component that renders BMICalculator
│   ├── index.js              # Entry point - renders App into public/index.html
│   ├── index.css             # Global styles
│   ├── reportWebVitals.js    # Performance monitoring
│   └── setupTests.js         # Test configuration
├── .gitignore                # Git ignore rules
├── package.json              # Project dependencies and scripts
└── README.md                 # This file
```

## Features

✅ **React Functional Component** with state variables (height, weight, BMI, status)  
✅ **Input Fields:**
   - Height (in centimetres)
   - Weight (in kilograms)

✅ **Calculate BMI Button** with comprehensive validation  
✅ **Input Validation:**
   - Checks for empty fields
   - Validates numeric input
   - Rejects negative or zero values
   - Shows alert messages for invalid inputs

✅ **BMI Calculation** using the formula:
```
BMI = Weight / (Height/100)²
```

✅ **Results Display:**
   - BMI value (rounded to 1 decimal place)
   - BMI Status with Classification:
     - **Underweight:** BMI < 18.5 (Blue #3b82f6)
     - **Normal weight:** 18.5 ≤ BMI ≤ 24.9 (Green #10b981)
     - **Overweight:** 25 ≤ BMI ≤ 29.9 (Orange #f59e0b)
     - **Obese:** BMI ≥ 30 (Red #ef4444)

✅ **Color-Coded Styling** for each BMI status  
✅ **Reset Button** to clear all inputs and results  
✅ **Responsive Design** - works on desktop and mobile  

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Navigate to the project directory:**
   ```bash
   cd bmi-calculator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The app will automatically open in your browser at `http://localhost:3000`

4. **Build for production:**
   ```bash
   npm build
   ```
   Creates an optimized production build in the `build/` folder.

5. **Run tests:**
   ```bash
   npm test
   ```

## How to Use

1. Enter your **Height** in centimetres
2. Enter your **Weight** in kilograms
3. Click the **"Calculate BMI"** button
4. View your **BMI value** and **health status**
5. Use the **"Reset"** button to clear and start over

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm build`
Builds the app for production to the `build` folder.

### `npm test`
Launches the test runner in interactive watch mode.

## Technologies Used

- **React 18** - JavaScript UI library
- **React DOM 18** - React rendering library for web
- **react-scripts** - Build tooling for Create React App
- **CSS3** - Styling with responsive design
- **HTML5** - Markup

## Requirements Met

✅ Use a React functional component with state variables  
✅ Allow users to enter height and weight  
✅ Include "Calculate BMI" button  
✅ Validate input fields (empty and negative checks)  
✅ Calculate BMI using the provided formula  
✅ Display BMI value  
✅ Display BMI status according to classification  
✅ Apply appropriate color styling for each status  

## License

This project is open source and available under the MIT License.

---

**Enjoy tracking your fitness with the BMI Calculator!** 💪
