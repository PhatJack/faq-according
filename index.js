const array = [
	{
		question: "What is Frontend Mentor, and how it will help me?",
		answer: "Anim do ex velit est ea laborum laborum laboris in commodo.Et eiusmod nisi occaecat commodo deserunt ex ut ea duis ullamco incididunt proident adipisicing nulla."
	},
	{
		question: "Is Frontend Mentor free?",
		answer: "Anim do ex velit est ea laborum laborum laboris in commodo.Et eiusmod nisi occaecat commodo deserunt ex ut ea duis ullamco incididunt proident adipisicing nulla."
	},
	{
		question: "Can I use Frontend Mentor projects in my portfolio?",
		answer: "Anim do ex velit est ea laborum laborum laboris in commodo.Et eiusmod nisi occaecat commodo deserunt ex ut ea duis ullamco incididunt proident adipisicing nulla."
	},
	{
		question: "How can I get help if I'm stuck on a challenge?",
		answer: "Anim do ex velit est ea laborum laborum laboris in commodo.Et eiusmod nisi occaecat commodo deserunt ex ut ea duis ullamco incididunt proident adipisicing nulla."
	},
]
let svgPlus = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>'
let svgMinus = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>'
const card_questions = document.querySelector(".card_questions")
const appendQuestionsList = () => {
	array.map((item) => {
		var p = document.createElement("p")
		var divWrapper = document.createElement("div")
		var divQuestion = document.createElement("div")
		var divSVG = document.createElement("div")
		var span = document.createElement("span")

		divWrapper.classList.add("card_question_wrapper")
		divQuestion.classList.add("card_question_container")
		divSVG.classList.add("card_question_container_icon")

		span.classList.add("card_question_container_text")
		p.classList.add("card_question_container_answer")
		span.textContent = item.question
		p.textContent = item.answer

		divSVG.innerHTML = svgPlus

		divQuestion.addEventListener("click", () => {
			
			if (divQuestion.classList.contains('active')) {
				divQuestion.classList.remove("active");
				divQuestion.classList.add("disable");
			} else {
				divQuestion.classList.remove("disable");
				divQuestion.classList.add("active");
			}
			divSVG.innerHTML = divQuestion.classList.contains('active') ? svgMinus : svgPlus
			p.classList.toggle("active")
		})

		divQuestion.appendChild(span)
		divQuestion.appendChild(divSVG)
		divWrapper.appendChild(divQuestion)
		divWrapper.appendChild(p)
		card_questions.appendChild(divWrapper)
	})
}
appendQuestionsList()