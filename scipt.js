const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const personName = document.getElementById("personName");
const jobType = document.getElementById("jobType");
const description = document.getElementById("description");

let testimonials = [
	{
		name: "Tom W.",
		jobType: "Turfing and Paving Customer",
		description:
			"Jared and his team have just completed laying lawn and moved paving slabs on our back garden. Really hard working and nothing was too much trouble. Outstanding quality of work & very professional. Highly recommend. Thanks again!"
	},
    {
		name: "Elizabeth L.",
		jobType: "Fencing and Landscaping Customer",
		description:
			"Thanks to Jared and his team for the recent work completed on our garden – fencing, gate and repairs to dry stone walls. We were impressed right from the initial meeting with Jared who was reliable and professional throughout. Jared and his team are very knowledgeable and go the extra mile. We highly recommend Weldon Works and will use again in the future."
	},
    {
		name: "Steve S.",
		jobType: "Garden Design and Landscaping Customer",
		description:
			"Jared has just completed a great job on our back garden. we gave him a rough idea of what we wanted & he gave us some good advice & help to finalise the plan. We are ver pleased with the result. Thanks Jared!"
	}
];
personName.innerText = testimonials[0].name;
jobType.innerText = testimonials[0].jobType;
description.innerText = testimonials[0].description;
let currentPerson = 0;

//Select the side where you want to slide
function slide(whichSide, personNumber) {
	let reviewWrapWidth = reviewWrap.offsetWidth + "px";
	let descriptionHeight = description.height + "px";
	//(+ or -)
	let side1symbol = whichSide === "left" ? "" : "-";
	let side2symbol = whichSide === "left" ? "-" : "";

	let tl = gsap.timeline();

	tl.to(reviewWrap, {
		duration: 0.4,
		opacity: 0,
		translateX: `${side1symbol + reviewWrapWidth}`
	});

	tl.to(reviewWrap, {
		duration: 0,
		translateX: `${side2symbol + reviewWrapWidth}`
	});

	setTimeout(() => {
		description.style.height = descriptionHeight;
	}, 400);
	setTimeout(() => {
		personName.innerText = testimonials[personNumber].name;
	}, 400);
	setTimeout(() => {
		jobType.innerText = testimonials[personNumber].jobType;
	}, 400);
	setTimeout(() => {
		description.innerText = testimonials[personNumber].description;
	}, 400);

	tl.to(reviewWrap, {
		duration: 0.4,
		opacity: 1,
		translateX: 0
	});


}

function setNextCardLeft() {
	if (currentPerson === testimonials.length - 1) {
		currentPerson = 0;
		slide("left", currentPerson);
	} else {
		currentPerson++;
	}

	slide("left", currentPerson);
}

function setNextCardRight() {
	if (currentPerson === 0) {
		currentPerson = testimonials.length - 1;
		slide("right", currentPerson);
	} else {
		currentPerson--;
	}

	slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);

window.addEventListener("resize", () => {
	description.style.height = "100%";
});
