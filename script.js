// console.log('Hello!');
let nameElement = document.getElementById('nameinput')
let ageElement = document.getElementById('ageinput')
let saveBtn = document.getElementById('saveBtn');


saveBtn.addEventListener('click', function(){
  nameValue = nameElement.value;
  ageValue = ageElement.value;
  // console.log('in');
  let tbodyHtml =` <tr id = "data">
    <td> ${nameValue}</td>
    <td> ${ageValue}</td>
    <td> <button id ="editBtn"> Edit</button></td>
    <td> <button id ="deleteBtn"> Delete</button></td>
  </tr>`
  tbody.innerHTML = tbodyHtml;
  nameElement.value ="";
  ageElement.value =""
initDelele()

initEdit();

  }
)
function initEdit() {
let editBtn = document.getElementById('editBtn');

  editBtn.addEventListener (`click`, function()
  {
    nameElement.value = nameValue;
    ageElement.value = ageValue;
  })
}

function initDelele(){
  let deleteBtn = document.getElementById('deleteBtn');

  deleteBtn.addEventListener (`click`, function(){
    let data = document.getElementById(`data`)
    data.remove()
  })

}

