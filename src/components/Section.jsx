import showcase from '../images/showcase.svg';
import './section.css';

const Section = () => {
	return (
		<div className="section">
			<div className="text">
				<h1>How we can help</h1>
				<span className="body">
					Condimentum vel vestibulum, facilisi euismod id ornare fermentum ac. Bibendum turpis faucibus faucibus lectus cursus elementum. Suscipit mauris viverra pellentesque nisi, diam rhoncus vitae purus. Sed purus sed lectus.
				</span>
				<ul className="list">
					{
						[1, 2, 3, 4].map((step, ndx)=> (
							<li key={ndx}>
								<span className="step">STEP {step}</span>
								<span className="heading">SELF ANALYSIS</span>
							</li>
						))
					}
				</ul>
			</div>
			<div className="image">
				<img src={showcase}/>
			</div>
		</div>
	);
}

export default Section; 