const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator_keys');
const display = document.querySelector('.calculator_result');

keys.addEventListener ('click', e => {
      if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action;
        const keyContent = key.innerText;
        const displayedNum = display.innerText;
       const previousKeyType = calculator.dataset.previousKeyType;

       if (!action) {
              if (displayedNum === '0' || previousKeyType === 'operator') {
                  display.innerText = keyContent;
              } else {
                  display.innerText = displayedNum + keyContent;
              }
              //display.innerText += key.innerText
             // console.log('Number Key!')
       }

       if (
              action === 'divide' ||
              action === 'multiply' ||
              action === 'subtract' ||
              action === 'add' 
       ) {
              //console.log('Operator Key!')

              key.classList.add('is-depressed')
              
              Array.from(key.parentNode.children)
              .forEach(k => k.classList.remove('is-depressed'))
              
              calculator.dataset.previousKeyType = 'operator'

            
       }
       
       if (action === 'decimal') {
              display.innerText = displayedNum + "."
       }

       if (action === 'clear') {
              console.log('Clear Key!')
       }

       if (action === 'percent') {
              console.log('Percentage Key!')
       }

       if (action === 'delete') {
              console.log('Delete Key!')
       }

       if (action === 'calculate') {
              console.log('Equal Key!')
       }
      }



})
