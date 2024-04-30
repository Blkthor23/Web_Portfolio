import './home.css'


export default function HomePage() {
	return (
		<div>
			<h1>My Home Page</h1>
			
			<p>Haven't decided what goes here yet, just testing now</p>
			<div className="Rows"> 
				<div className="Row-Data">
				<h3>My personal info here</h3>
					<p>Welcome to the wonderful world of Jason</p>
					<p>There is plenty to see and learn here</p>
					<p>Here you get the pleasure of learning all about me</p>
				</div>
				<div className="Row-Data">
				<h3>My picture will go here</h3>
					<p>Test</p>
				
				</div>
				<div className="Row-Data">
				<h3 >appropriate links will go here</h3>
					<p><link href='google.com'/>google</p>
				</div>
			</div>
		</div>
	)
}
