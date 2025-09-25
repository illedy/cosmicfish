window.onload=function(){
    for(let [t,v] of Object.entries(data)){
        let p=document.getElementById(t);
        for(let m of v){
            newMission(m,p);
        }
    }
};

let newMission=function(m,p){
    let c=document.createElement('li');
    p.appendChild(c);
    let n=document.createElement('h3');
    c.appendChild(n);
    n.innerText=m['n'];
    if(m['b']){
        let b=document.createElement('p');
        c.appendChild(b);
        b.innerText='Big Fish: '+m['b'];
    }
    let g=document.createElement('ol');
    c.appendChild(g);
    let pg=document.createElement('p');
    g.appendChild(pg);
    pg.innerText='Gold star strategy:';
    for(let n of m['g']){
        let l=document.createElement('li');
        g.appendChild(l);
        l.innerText=n;
    }
    if(!m['s'])return;
    let s=document.createElement('ol');
    c.appendChild(s);
    let ps=document.createElement('p');
    s.appendChild(ps);
    ps.innerText='Silver star strategy:';
    for(let n of m['s']){
        let l=document.createElement('li');
        s.appendChild(l);
        l.innerText=n;
    }
};
