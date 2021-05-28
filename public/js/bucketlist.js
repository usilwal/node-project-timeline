const blItemEl = document.querySelector('#bucketlist');
const loadingEl = document.querySelector('#loading');
let loading = false; 

const getData = async () => {
    loading = true; 
    const res = await fetch('http://localhost:3001/api/bucketlist')
    let data = await res.json();
    loading = false;
    console.log(data)
    return data 
}

const addData = async () => {
    const bucketlist = await getData();

    if(!loading) {
        loadingEl.innerHTML = '';
    }

    bucketlist.forEach(blItem => {

        const div = document.createElement('div');
        div.className = 'event';
        div.innerHTML = `
            <div class="date"><strong>${blItem.date}</strong></div>   
            <hr/>
            <h3>${blItem.name}</h3>  
            <ul>
                <li>${blItem.remarks}</li>   
            </ul>
        `

        blItem.tags.forEach(tag => {
            borderLeft = `border-left: 2px solid black;`
            borderBottom = `border-bottom: 2px solid black;`
            div.innerHTML += `<span class="tag" style="${borderLeft} ${borderBottom}">${tag}</span>`
        });
        blItemEl.appendChild(div);
    })
}

addData()

$.get("html/navbar.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});