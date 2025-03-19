import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --bg-primary: #0a0a14;
    --bg-secondary: #12121e;
    --text-primary: #f0f0f0;
    --text-secondary: #a0a0a0;
    --accent-primary: #6464ff;
    --accent-secondary: #ff6b8b;
    --gradient-primary: linear-gradient(135deg, #6464ff 0%, #ff6b8b 100%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', 'Roboto', sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    background-image: 
      radial-gradient(circle at 10% 20%, rgba(100, 100, 255, 0.05) 0%, transparent 20%),
      radial-gradient(circle at 90% 80%, rgba(255, 107, 139, 0.05) 0%, transparent 20%);
    min-height: 100vh;
    overflow-x: hidden;
  }

  #root {
    min-height: 100vh;
  }

  a {
    color: var(--accent-primary);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--accent-secondary);
    }
  }

  button {
    font-family: 'Inter', 'Roboto', sans-serif;
    border: none;
    outline: none;
    cursor: pointer;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(20, 20, 30, 0.6);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(100, 100, 255, 0.5);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(100, 100, 255, 0.7);
  }

  /* Futuristic selection */
  ::selection {
    background: rgba(100, 100, 255, 0.3);
    color: #ffffff;
  }
`;

export default GlobalStyles;
