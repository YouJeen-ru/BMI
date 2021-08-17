const body = document.body

document.querySelector('form').addEventListener('submit', handleEvent)
let result = document.createElement('div')
let bimNumber = document.createElement('p')
let status = document.createElement('p')
result.classList.add('result')

function handleEvent(e) {
    e.preventDefault()
    let weight = document.querySelector('#weight').value
    let height = document.querySelector('#height').value

    calcBMI(height, weight)
}

function calcBMI(height, weight) {
    const bmi = (weight / Math.pow((height / 100), 2)).toFixed(2)
    if (bmi !== 'NaN') {
        let nutritionStatus
        if (bmi < 18.5) {
            nutritionStatus = 'Underweight'
        } else  if (bmi >= 18.5 && bmi <= 24.9) {
            nutritionStatus = 'Normal Weight'
        } else  if (bmi >= 25 && bmi <= 29.9) {
            nutritionStatus = 'Overweight'
        } else  {
            nutritionStatus = 'Obese'
        }

        showResult(bmi, nutritionStatus)
    }

}

function showResult(bmi, nutritionStatus) {

    bimNumber.innerText = `BMI: ${bmi}`
    status.innerText = nutritionStatus

    result.append(bimNumber)
    result.append(status)

    body.append(result)

    weight.value = ''
    height.value = ''
}
