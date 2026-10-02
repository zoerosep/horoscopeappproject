//INSTRUCTIONS and MY 🦋 PSEUDOCODE: https://docs.google.com/document/d/1TIjWatbdTB0dTQQBL6bgCTMcbEKPOaJRVPCbPSahyc4/edit?tab=t.0#heading=h.b87cteck27pk
const result = document.querySelector(".result");
const signName = document.querySelector(".sign-name");
const signDates = document.querySelector(".sign-dates");
const signHoroscope = document.querySelector(".sign-horoscope");
const image = document.querySelector("img");
let imgAlt = "";
let imgSrc = "";
const form = document.querySelector(".sign-form");
form.addEventListener("submit", onSubmit);

const horoscopeData = {
	horoscopes: {
		date: "2023-11-30",
		astroSigns: [
			{
				sign: "Aries",
				dateRange: "March 21 - April 19",
				dailyHoroscope:
					"Today is a day for bold actions. Trust your instincts and take the leap you've been considering.",
				luckyNumbers: [3, 17, 21],
				key: 0,
				icon: "https://openmoji.org/data/color/svg/2648.svg"
			},
			{
				sign: "Taurus",
				dateRange: "April 20 - May 20",
				dailyHoroscope:
					"Patience will be your ally today. Good things come to those who wait, so don't rush into decisions.",
				luckyNumbers: [5, 14, 29],
				key: 1,
				icon: "https://openmoji.org/data/color/svg/2649.svg"
			},
			{
				sign: "Gemini",
				dateRange: "May 21 - June 20",
				dailyHoroscope:
					"Communication is key today. Reach out to an old friend or a family member you haven't spoken to in a while.",
				luckyNumbers: [2, 16, 23],
				key: 2,
				icon: "https://openmoji.org/data/color/svg/264A.svg"
			},
			{
				sign: "Cancer",
				dateRange: "June 21 - July 22",
				dailyHoroscope:
					"Embrace your creative side. Today is a perfect day for starting a new artistic project.",
				luckyNumbers: [7, 19, 25],
				key: 3,
				icon: "https://openmoji.org/data/color/svg/264B.svg"
			},
			{
				sign: "Leo",
				dateRange: "July 23 - August 22",
				dailyHoroscope:
					"Your leadership skills will be in demand today. Take charge in a group situation and guide others to success.",
				luckyNumbers: [1, 8, 22],
				key: 4,
				icon: "https://openmoji.org/data/color/svg/264C.svg"
			},
			{
				sign: "Virgo",
				dateRange: "August 23 - September 22",
				dailyHoroscope:
					"Pay attention to the small details today. Your meticulousness will lead to a significant breakthrough.",
				luckyNumbers: [4, 11, 26],
				key: 5,
				icon: "https://openmoji.org/data/color/svg/264D.svg"
			},
			{
				sign: "Libra",
				dateRange: "September 23 - October 22",
				dailyHoroscope:
					"Seek balance in your life. Take time for yourself and focus on your personal well-being.",
				luckyNumbers: [6, 15, 24],
				key: 6,
				icon: "https://openmoji.org/data/color/svg/264E.svg"
			},
			{
				sign: "Scorpio",
				dateRange: "October 23 - November 21",
				dailyHoroscope:
					"A mystery may unfold today. Trust your intuition and follow where it leads.",
				luckyNumbers: [9, 18, 27],
				key: 7,
				icon: "https://openmoji.org/data/color/svg/264F.svg"
			},
			{
				sign: "Sagittarius",
				dateRange: "November 22 - December 21",
				dailyHoroscope:
					"Adventure calls to you. Embrace new experiences and open yourself to learning.",
				luckyNumbers: [3, 12, 21],
				key: 8,
				icon: "https://openmoji.org/data/color/svg/2650.svg"
			},
			{
				sign: "Capricorn",
				dateRange: "December 22 - January 19",
				dailyHoroscope:
					"Discipline and hard work will be fruitful. Focus on your goals and you'll achieve great things.",
				luckyNumbers: [8, 16, 23],
				key: 9,
				icon: "https://openmoji.org/data/color/svg/2651.svg"
			},
			{
				sign: "Aquarius",
				dateRange: "January 20 - February 18",
				dailyHoroscope:
					"Innovation is your theme today. Think outside the box and explore new ideas.",
				luckyNumbers: [5, 13, 20],
				key: 10,
				icon: "https://openmoji.org/data/color/svg/2652.svg"
			},
			{
				sign: "Pisces",
				dateRange: "February 19 - March 20",
				dailyHoroscope:
					"Your empathy will be a blessing to someone in need. Listen and offer your support.",
				luckyNumbers: [2, 10, 22],
				key: 11,
				icon: "https://openmoji.org/data/color/svg/2653.svg"
			}
		]
	}
};
const astroSigns = horoscopeData.horoscopes.astroSigns;
function onSubmit(event) {
	event.preventDefault();

	const data = new FormData(event.target);
	const dataObject = Object.fromEntries(data.entries());

	const selectedSign = dataObject.sign;

	for (const item of astroSigns) {
		//EH EH EH!!!
		if (item.sign === selectedSign) {
			signName.textContent = `Your sign is ${item.sign}.`;
			signDates.textContent = `The date range for ${item.sign} is ${item.dateRange}.`;
			signHoroscope.textContent = `Today's horoscope: ${item.dailyHoroscope}`;
			//3 separate paragraphs?
			imgSrc = item.icon;
			imgAlt = `${item.sign} zodiac symbol`;
		}
	}

	image.src = imgSrc;
	image.alt = imgAlt;
	result.style.display = "block";
	//I want to try it that way, people's inline styling is cool but the amount is overwhelming, so I hope that's okay!!!
	form.reset();
}
