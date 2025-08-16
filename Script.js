const dims = [
  {title:"Dimensi 1: Fisika String", img:"https://upload.wikimedia.org/wikipedia/commons/0/0b/String_theory_brane.png"},
  {title:"Dimensi 2: Alquran", img:"https://upload.wikimedia.org/wikipedia/commons/8/80/Quran_page.png"},
  {title:"Dimensi 3: Multiverse", img:"https://upload.wikimedia.org/wikipedia/commons/3/3c/Multiverse.jpg"},
  {title:"Dimensi 4: Realitas Tersembunyi", img:"https://upload.wikimedia.org/wikipedia/commons/6/6b/Calabi-Yau.png"},
  {title:"Dimensi 5: Alam Semesta Tak Terlihat", img:"https://upload.wikimedia.org/wikipedia/commons/9/90/Universe.jpg"},
  {title:"Dimensi 6: Misteri Tak Terbatas", img:"https://upload.wikimedia.org/wikipedia/commons/4/49/Deep_Space.jpg"}
];

const container = document.getElementById('container');

dims.forEach((d,idx)=>{
  let div = document.createElement('div');
  div.className='dimensi';
  div.innerHTML=`<h2>${d.title}</h2><img src="${d.img}" alt="${d.title}">`;
  container.appendChild(div);

  let tooltip = document.createElement('div');
  tooltip.className='tooltip';
  tooltip.innerHTML=`<strong>${d.title}</strong><br>Info lengkap dimensi ini.<br><img src="${d.img}">`;
  document.body.appendChild(tooltip);

  let img = div.querySelector('img');
  img.addEventListener('mouseenter',()=>{tooltip.style.opacity=1;});
  img.addEventListener('mousemove',(e)=>{
    tooltip.style.left=(e.clientX+10)+'px';
    tooltip.style.top=(e.clientY+10)+'px';
  });
  img.addEventListener('mouseleave',()=>{tooltip.style.opacity=0;});
  img.addEventListener('click',()=>{tooltip.classList.toggle('expanded');});
});
