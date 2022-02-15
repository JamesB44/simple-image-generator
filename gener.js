const form=document.querySelector('#add-meme');
const test=document.querySelector('#test');
const test2=document.querySelector('#test2');
const test3=document.querySelector('#test3');
const memeText=document.querySelector('#meme-text');
const memeText2=document.querySelector('#meme-text2');
const memeImage=document.querySelector('#meme-image');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const newMeme=document.createElement('h2');
    const newMeme2=document.createElement('h3');
    const newImg=document.createElement('img')
    const removeBtn=document.createElement('button');
    removeBtn.innerText='Remove';
    removeBtn.addEventListener('click',function(e){
        e.target.parentElement.remove();
    })
newMeme.innerText=memeText.value;
// newMeme.appendChild(removeBtn);
test.appendChild(newMeme);
memeText.value='';

newMeme2.innerText=memeText2.value;
// newMeme2.appendChild(removeBtn);
test3.appendChild(newMeme2);
memeText2.value='';

newImg.src=memeImage.value;
// newImg.appendChild(removeBtn);
test2.appendChild(newImg);
memeImage.value='';
})

test2.addEventListener('dblclick',function(e){
    if(e.target.tagName==='IMG'){
        e.target.parentElement.remove();
        location.reload();
    }
})