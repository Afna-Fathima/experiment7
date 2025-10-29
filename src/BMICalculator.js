import React from 'react';
import './BMICalculator.css';

function BMICalculator() {
  const [height, setHeight] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [bmi, setBmi] = React.useState(null);
  const [status, setStatus] = React.useState('');
  const [statusColor, setStatusColor] = React.useState('');

  const getStatusAndColor = (bmiValue) => {
    if (bmiValue < 18.5) {
      return { status: 'Underweight', color: '#3b82f6' };
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      return { status: 'Normal weight', color: '#10b981' };
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      return { status: 'Overweight', color: '#f59e0b' };
    } else {
      return { status: 'Obese', color: '#ef4444' };
    }
  };

  const handleCalculateBMI = () => {
    // Validate inputs
    if (height === '' || weight === '') {
      alert('Please enter valid values for both height and weight.');
      return;
    }

    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (isNaN(h) || isNaN(w)) {
      alert('Height and weight must be numeric values.');
      return;
    }

    if (h <= 0 || w <= 0) {
      alert('Height and weight must be positive values.');
      return;
    }

    // Calculate BMI: BMI = Weight / (Height/100)^2
    const heightInMeters = h / 100;
    const bmiValue = w / (heightInMeters * heightInMeters);
    const bmiRounded = parseFloat(bmiValue.toFixed(1));

    // Get status and color
    const { status: statusText, color } = getStatusAndColor(bmiRounded);

    // Set results
    setBmi(bmiRounded);
    setStatus(statusText);
    setStatusColor(color);
  };

  const handleReset = () => {
    setHeight('');
    setWeight('');
    setBmi(null);
    setStatus('');
    setStatusColor('');
  };

  return (
    <div className="calculator-container">
      <div className="calculator-card">
        <h1>BMI Calculator</h1>

        <div className="input-group">
          <label htmlFor="height">Height (in centimetres):</label>
          <input
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter height in cm"
          />
        </div>

        <div className="input-group">
          <label htmlFor="weight">Weight (in kilograms):</label>
          <input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter weight in kg"
          />
        </div>

        <button className="btn-calculate" onClick={handleCalculateBMI}>
          Calculate BMI
        </button>

        {bmi !== null && (
          <div className="results-section">
            <div className="result-item">
              <span className="result-label">BMI Value:</span>
              <span className="result-value">{bmi}</span>
            </div>

            <div className="result-item">
              <span className="result-label">BMI Status:</span>
              <span
                className="result-status"
                style={{ color: statusColor }}
              >
                {status}
              </span>
            </div>

            <div className="classification-guide">
              <p><strong>Classification:</strong></p>
              <ul>
                <li>Underweight: BMI &lt; 18.5</li>
                <li>Normal weight: 18.5 ≤ BMI ≤ 24.9</li>
                <li>Overweight: 25 ≤ BMI ≤ 29.9</li>
                <li>Obese: BMI ≥ 30</li>
              </ul>
            </div>
          </div>
        )}

        <button className="btn-reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default BMICalculator;
