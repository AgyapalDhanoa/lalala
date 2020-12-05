let index= 1;
function my(){
  index++;
  if(index==11){
    index=1;
  }
  let picture= 'img/img ('+index+').jpg';
  document.getElementById('laptop').src=picture;
}

document.getElementById('mylogos').onload= changeBackground();
function changeBackground()
{
  let r=Math.floor(Math.random()*266);
    let g=Math.floor(Math.random()*266);
      let b=Math.floor(Math.random()*266);
      let colors= `rbg( ${r},${g},${b};)` ;

}
