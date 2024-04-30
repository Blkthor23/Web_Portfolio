import './App.css';
import MyHome from './home.js';
import Projects from './projects.js'
import NavBar from './nav/navbar.js'

function App() {
  return (
    	<div className="App">
		<section><NavBar/></section>
		<section><MyHome /></section>	
		<section><Projects/></section>
		<section>Services</section>
		<section>Contact</section>
	</div>
  );
}

export default App;
