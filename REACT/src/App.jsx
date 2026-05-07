import './App.css';
 content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>
<body>
  
</body>
</html>
import image from './images/html_logo.png';
function App() {
  return (
    <>
      <div>
        <h1>Welcome to AI</h1>
        <p>Your AI-powered assistant</p>
      </div>
      <div>
        <button style={{ color: "Blue" }}>Get Started</button>
      </div>
      <br />
      <div>
        <img src={image} width="500px" height="400px" />
      </div>
    </>
  );
}
export default App;
