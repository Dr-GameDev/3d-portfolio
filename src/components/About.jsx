import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>
			<motion.p
				className="mt-4 text-secondary text-[17px] w-max-3xl leading-[30px]"
				variants={fadeIn("", "", 0.1, 1)}
			>
				I&apos;m a full-stack developer with experience in TypeScript,
				JavaScript and Python, and expertise in frameworks like React
				and Node.js. I&apos;m also a graphic designer from Cape Town. I
				blend elegant code with captivating visuals, creating functional
				web experiences. Passionate about design aesthetics, creative
				solutions, I thrive at the intersection of development and
				creativity. Let&apos;s connect!
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard
						key={service.title}
						index={index}
						{...service}
					/>
				))}
			</div>
		</>
	);
};

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div
				className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
			>
				<div
					className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
				>
					<img
						src={icon}
						alt={title}
						className="w-16 h-16 object-contain"
					/>
					<h3 className="text-white text-[20px] font-bold text-center">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

export default SectionWrapper(About, "about");
