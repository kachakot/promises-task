const apiUrl = 'https://opentdb.com/api.php?amount=10'
const button = document.querySelector('.js-button')
const questionList = document.querySelector('.js-question-list')

button.addEventListener('click', function () {
  questionList.innerHTML = ''
  fetch(apiUrl)
    .then(response => response.json())
    .then(json => {
      json.results.forEach(question => {
        questionList.innerHTML += `
          <li>
            <h4>${question.question}</h4><br>
            <span onClick="alert('${question.correct_answer}')">Answer</span>
          </li>
        `
      })
    })
})
