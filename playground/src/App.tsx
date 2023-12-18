import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import LeftSideBarSection from "./LeftSideBarSection";
import Accordion from "./components/Accordion";
import ExpandableText from "./components/ExpandableText";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";
import ExpenseForm, { ExpenseFormData } from "./components/ExpenseForm/ExpenseForm";
import ExpenseList, { Expenses } from "./components/ExpenseList/ExpenseList";
import LightBox from "./components/LightBox/LightBox";
import ListGroup from "./components/ListGroup";
import Post from "./components/Post";
import SimpleButton from "./components/SimpleButton";
import StateChangeComponent from "./components/StateChangeComponent";

function App() {
	const items = [
		{
			id: 1,
			description: "Milk",
			amount: 5.0,
			category: "Groceries",
		},
		{
			id: 2,
			description: "Cat Food",
			amount: 15.0,
			category: "Groceries",
		},
		{
			id: 3,
			description: "Water",
			amount: 50.0,
			category: "Utilities",
		},
		{
			id: 4,
			description: "Gas",
			amount: 500.0,
			category: "Utilities",
		},
		{
			id: 5,
			description: "Netflix",
			amount: 15.0,
			category: "Entertainment",
		},
		{
			id: 6,
			description: "Peacock",
			amount: 10.0,
			category: "Entertainment",
		},
		{
			id: 7,
			description: "Chips",
			amount: 5.0,
			category: "Groceries",
		},
		{
			id: 8,
			description: "Kit Kat",
			amount: 2.0,
			category: "Groceries",
		},
		{
			id: 9,
			description: "Internet",
			amount: 200.0,
			category: "Utilities",
		},
		{
			id: 10,
			description: "Eggs",
			amount: 2.0,
			category: "Groceries",
		},
		{
			id: 11,
			description: "Play",
			amount: 400.0,
			category: "Entertainment",
		},
	];

	const handleDelete = (id: number) => {
		setExpenseList(
			expenseList.filter((expense) => {
				if (expense.id != id) {
					return expense;
				}
			})
		);
	};

	const categories = ["All Categories", "Groceries", "Utilities", "Entertainment"];

	const [expenseList, setExpenseList] = useState<Expenses[]>(items);
	const [isLightboxVisible, setLightboxVisible] = useState(false);
	const [currentCategory, setCurrentCategory] = useState("All Categories");
	const handleUpdateItems = (expense: ExpenseFormData) => {
		setLightboxVisible(false);
		setExpenseList([
			...expenseList,
			{
				...expense,
				id: expenseList.length + 1,
			},
		]);
	};
	const [isAlertActive, setAlertActivity] = useState(false);
	let states = ["New York", "San Francisco", "Pittsburgh", "Cleveland"];
	let names = ["Dave Argos", "Adam Montoya", "Bailey Seikler", "Darleen Fontana", "Tyler Ulders", "Blake Negala", "Richie Farmdale", "Lucas Johns", "Marie Johns", "Bart Simpson"];
	return (
		<>
			<Header
				onAlertStatusChanged={() =>
					//This portion of code Lifts the state of the alert component to the App.tsx since the buttons we used and the header both share this as a common component.
					isAlertActive ? setAlertActivity(false) : setAlertActivity(true)
				}
				isAlertActive={isAlertActive}
			/>
			<div id="flex-container">
				<div className="flex-item top-desc">
					<h2>A Warm Welcome</h2>
					<p>
						Welcome to Family Haven Hub, where we specialize in creating a unique and comforting space for families in the afterlife. At Family Haven Hub, we understand the importance of connection and continuity beyond this life, and our mission is to unite families in a haven that transcends the boundaries of time. Our platform serves as a bridge between the past and the afterlife, providing a digital sanctuary for families to come together, share memories, and strengthen the bonds that endure
						beyond physical existence. We believe in the power of technology to preserve legacies, allowing families to celebrate the lives of their loved ones in a meaningful and interactive way. Family Haven Hub offers a range of personalized features, from virtual memorial spaces to interactive family trees, ensuring that each family's experience is tailored to their unique story. Our commitment is to provide solace, support, and a sense of continuity, allowing families to cherish and honor
						their connections for generations to come. Join us at Family Haven Hub, where the spirit of family lives on, and memories become timeless legacies.
					</p>
				</div>
				<div className="flex-item left-col responsive-full-length">
					<p>Step into the future with VR – where reality meets the extraordinary! Elevate your experiences, from immersive gaming to mind-blowing entertainment. Don't just play, live the adventure! 🚀 #VRRevolution #ImmerseNow</p>
					<SimpleButton backgroundColor="#3d3e3d" onClick={() => setAlertActivity(true)}>
						Show Alert
					</SimpleButton>
					<SimpleButton onClick={() => console.log("Click")}>Buy VR Now</SimpleButton>
					<ListGroup items={states} heading="Cities" onSelectItem={(item) => console.log(item)} />
				</div>
				<div className="flex-item right-col responsive-full-length">
					<ListGroup items={names} heading="People Names" onSelectItem={(item) => console.log(item)} />
				</div>
				<div className="flex-item">
					<LeftSideBarSection />
				</div>
				<div className="flex-item left-col responsive-full-length">
					<img className="specialImg" src="./public/minimalvr.jpg" />
				</div>
				<div className="flex-item right-col responsive-full-length">
					<h2>What Is VR?</h2>
					<p>
						Virtual Reality (VR) transforms the way we perceive and interact with digital environments, offering a truly immersive experience. Through specialized headsets and sensory technology, VR creates a simulated reality that engages multiple senses, transporting users to new worlds or augmenting their existing surroundings. From gaming and entertainment to education and healthcare, VR has applications across diverse industries. It enhances training simulations, facilitates virtual travel,
						and provides therapeutic interventions. As VR technology advances, it promises to redefine communication and collaboration, bringing people together in shared virtual spaces. The evolving landscape of VR holds immense potential, unlocking possibilities for innovation and connectivity in the digital age.
					</p>
					<LeftSideBarSection />
				</div>
				<div className="flex-item responsive-full-length">
					<Post
						onLikeButtonClick={() => {
							console.log("click");
						}}
						heading="They're Creepy and They're Spooky!"
						isLikeButtonVisible={true}>
						<ExpandableText>Step into the delightfully eerie world of Virtual Reality, where the bizarre becomes the norm. Join the VR adventure with a touch of Adams Family flair, where spooky spectacles and ghostly giggles await. It's a virtual experience that's eerily entertaining!</ExpandableText>
					</Post>
					<Post
						onLikeButtonClick={() => {
							console.log("click");
						}}
						heading="Embracing Change: A Journey to Personal Growth"
						isLikeButtonVisible={true}>
						<ExpandableText>
							Change is the only constant in life, and often, it is met with resistance. However, embracing change can be the key to unlocking personal growth and self-discovery. In a world that is constantly evolving, those who adapt and embrace change are better equipped to navigate the twists and turns that life throws their way.
							<br /> <br />
							One of the first steps in embracing change is to cultivate a mindset of openness and flexibility. Instead of fearing the unknown, view it as an opportunity for learning and growth. Whether it's a career change, a new relationship, or a shift in perspective, change can offer valuable insights and experiences that contribute to personal development.
							<br /> <br />
							It's essential to let go of the fear of failure and understand that setbacks are an integral part of any journey towards self-improvement. Each obstacle is a chance to learn, adapt, and emerge stronger. Rather than seeing challenges as roadblocks, consider them as stepping stones towards a better version of yourself. Surrounding yourself with a supportive community can also make the process of change more manageable. Seek out friends, mentors, or like-minded individuals who can
							offer guidance, encouragement, and shared experiences. A strong support system can provide the emotional backing needed to navigate the uncertainties that change often brings. In conclusion, embracing change is not just about adapting to external circumstances; it's a journey of self-discovery and personal growth. By cultivating a positive mindset, learning from setbacks, and fostering a supportive community, one can embark on a transformative path towards becoming the best version
							of themselves. So, let go of the fear, embrace change, and watch as it becomes a catalyst for your personal evolution.
						</ExpandableText>
					</Post>
					<Post
						onLikeButtonClick={() => {
							console.log("click");
						}}
						heading="Indulging the Senses: A Love Letter to Cookies"
						isLikeButtonVisible={true}>
						<ExpandableText>
							In a world filled with the hustle and bustle of daily life, there's something truly magical about the simple pleasure of a cookie. Whether it's a gooey chocolate chip, a delicate sugar cookie, or a classic oatmeal raisin, these delectable treats have a way of brightening even the gloomiest of days.
							<br /> <br />
							At first glance, a cookie may seem like a humble confection, but it's so much more than just flour, sugar, and butter. It's a tiny package of joy that engages all the senses. The tantalizing aroma that wafts through the kitchen as cookies bake in the oven is enough to transport anyone to a place of warmth and comfort.
							<br /> <br />
							The beauty of cookies lies in their versatility. From the traditional family recipes passed down through generations to innovative creations that push the boundaries of flavor, there's a cookie for every mood and occasion. They're the perfect canvas for culinary experimentation, allowing bakers to infuse their personality and creativity into every batch.
							<br /> <br />
							Cookies are not just a treat for the taste buds; they're a nostalgic journey down memory lane. The act of baking and sharing cookies has a way of creating bonds and building connections. It's a gesture of love that transcends cultural and generational boundaries, bringing people together in the sweetest way possible.
							<br /> <br />
							So, the next time you find yourself reaching for a cookie, savor the moment. Let the flavors dance on your tongue, inhale the comforting aroma, and appreciate the memories that these delightful treats evoke. Because in the world of cookies, every bite is a small celebration of life's simple pleasures.
							<br /> <br />
						</ExpandableText>
					</Post>
				</div>
				<div className="flex-item responsive-full-length">
					<h2>What can I do in VR?</h2>
					<Accordion accordionDescription="Discover the Virtual Frontier">
						<ul>
							<li>
								<b>Q: What is virtual reality (VR)?</b>
							</li>
							<li>A: VR is a groundbreaking technology that creates immersive, lifelike experiences in a computer-generated environment. It's a revolutionary way to interact with digital content.</li>
							<br />
							<li>
								<b>Q: What can I do with VR?</b>
							</li>
							<li>A: VR opens up a world of possibilities, from gaming adventures to virtual tourism. Dive into new experiences, explore alternate realities, and redefine your entertainment.</li>
							<li>
								<StateChangeComponent />
							</li>
							<li>
								<StateChangeComponent />
							</li>
						</ul>
					</Accordion>
					<Accordion accordionDescription="Immerse Yourself in Unseen Realms">
						<ul>
							<li>
								<b>Q: How does VR create immersion?</b>
							</li>
							<li>A: VR uses advanced technologies, such as motion tracking and realistic graphics, to trick your senses into believing you're in a different environment. It's a truly immersive, sensory experience.</li>
							<br />
							<li>
								<b>Q: Is VR only for gaming?</b>
							</li>
							<li>A: No, VR extends beyond gaming. It's a versatile tool for education, training simulations, virtual tourism, and more. Immerse yourself in a variety of applications tailored to your interests.</li>
						</ul>
					</Accordion>
					<Accordion accordionDescription="Revolutionize Your Entertainment">
						<ul>
							<li>
								<b>Q: Can I watch movies or attend concerts in VR?</b>
							</li>
							<li>A: Absolutely! VR enhances your entertainment by placing you in the center of the action. Enjoy movies in a virtual theater or attend live concerts from the comfort of your own space.</li>
							<br />
							<li>
								<b>Q: How does VR change the way we experience entertainment?</b>
							</li>
							<li>A: VR adds a new dimension to entertainment, making it more interactive and engaging. It's not just watching – it's living the experience.</li>
						</ul>
					</Accordion>
					<Accordion accordionDescription="Connect and Conquer Together">
						<ul>
							<li>
								<b>Q: Can I interact with others in VR?</b>
							</li>
							<li>A: Yes! VR offers social experiences where you can connect with friends in virtual spaces. Engage in multiplayer games, explore together, and create shared memories in a way that transcends physical distances.</li>
							<br />
							<li>
								<b>Q: Is VR a solitary experience?</b>
							</li>
							<li>A: Not at all. VR fosters social connections, allowing you to interact with others in virtual environments. It's a collaborative and shared experience that brings people together.</li>
						</ul>
					</Accordion>
				</div>
				<div className="flex-item responsive-full-length">
					<br />
					<br />
					<button
						className="expense-list-show-form-button"
						onClick={() => {
							setLightboxVisible(true);
						}}>
						Add New Item
					</button>
					<ExpenseFilter
						categories={categories}
						onChange={(category) => {
							setCurrentCategory(category);
						}}
					/>
					<ExpenseList onDelete={handleDelete} items={expenseList} currentCategory={currentCategory} />
				</div>
			</div>
			<LightBox
				isLightboxVisible={isLightboxVisible}
				onClose={() => {
					setLightboxVisible(false);
				}}>
				<ExpenseForm categories={categories} onFormSubmit={handleUpdateItems}></ExpenseForm>
			</LightBox>
			<Footer />
		</>
	);
}

export default App;
