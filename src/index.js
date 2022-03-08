const countField = document.getElementById('count')
const plusBtn = document.getElementById('plusBtn')
const minusBtn = document.getElementById('minusBtn')

plusBtn.addEventListener('click',()=>{
  const prevValue = Number(countField.value);
  const currentValue = prevValue+1;
  countField.value = currentValue;
})

minusBtn.addEventListener('click',()=>{
  const prevValue = Number(countField.value);
  const currentValue = prevValue-1;
  countField.value = currentValue;
})


