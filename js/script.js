const tabs=document.querySelectorAll('.tab');
tabs.forEach(t=>t.onclick=()=>{
document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
document.querySelectorAll('.panel').forEach(x=>x.classList.remove('active'));
t.classList.add('active');
document.getElementById(t.dataset.tab).classList.add('active');
});
const side=document.getElementById('sidebar');
const btn=document.getElementById('toggle');
btn.onclick=()=>{
side.classList.toggle('collapsed');
btn.textContent=side.classList.contains('collapsed')?'▶':'◀';
};
