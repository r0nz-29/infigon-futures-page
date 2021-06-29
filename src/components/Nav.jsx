import './nav.css';

const Nav = () => {
	return (
		<div className="nav">
			{
				['Home', 'How we help', 'Programs', 'FAQs'].map((item, ndx) => (
					<a href="#" key={ndx} > {item} </a> 
				))
			}
			<button>Get in Touch</button>
		</div>
	);
}

export default Nav;