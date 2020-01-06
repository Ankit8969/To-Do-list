
document.querySelector('#additem').addEventListener('click',function(){
var x=document.getElementById('innerText').value;
  if(x)
  {
    additemtodo(x);
  }
});

function additemtodo(text)
{
  var list=document.querySelector('.todo');
  var item=document.createElement('li');
  item.innerText=text;

  var buttons=document.createElement('div');
  buttons.classList.add('buttons');

  var deletes=document.createElement('button');
  deletes.classList.add('remove');
  deletes.innerHTML= '<i class="far fa-trash-alt fa-lg icon"></i>';

  // add an event to delete buttons
  deletes.addEventListener('click',removeitemsfromlist);

  var send=document.createElement('button');
  send.classList.add('complete');
  send.innerHTML= '<i class="far fa-check-circle fa-lg icon"></i>';

  // add an event for completed tasks
  send.addEventListener('click',additemtothelist)

  buttons.appendChild(deletes);
  buttons.appendChild(send);
  item.appendChild(buttons);
  list.insertBefore(item,list.firstChild);
  document.getElementById('innerText').value='';

}

function removeitemsfromlist()
{
  var x=this.parentNode.parentNode;
  var y=x.parentNode;
  y.removeChild(x);
}


function additemtothelist()
{
  var x=this.parentNode.parentNode;

  var list=document.querySelector('.doto');
  var item=document.createElement('li');
  item.innerText=x.innerText;

  var buttons=document.createElement('div');
  buttons.classList.add('buttons');

  var deletes=document.createElement('button');
  deletes.classList.add('remove');
  deletes.innerHTML= '<i class="far fa-trash-alt fa-lg icon"></i>';

  // add an event to delete buttons
  deletes.addEventListener('click',removeitemsfromlist);

  buttons.appendChild(deletes);
  item.appendChild(buttons);
  list.insertBefore(item,list.firstChild);
}
