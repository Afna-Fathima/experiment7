import React from 'react';
import BMICalculator from './BMICalculator';

function App() {
  return (
    <div style={styles.appContainer}>
      <BMICalculator />
    </div>
  );
}

const styles = {
  appContainer: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
};

export default App;
