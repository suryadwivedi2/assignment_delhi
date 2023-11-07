window.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await axios.get(`http://localhost:3000/user/country-tags`, {});
        if (response.status == 200) {
            console.log(response.data.arr2);
            showtable(response.data.arr2);
            console.log(response.data.rank);
            show(response.data.rank)
            // let arr2 = [[], [], []];
            // for (let i = 0; i < arr.length - 1; i++) {
            //     const tbody = document.getElementById('tbody')
            //     const tablerow = document.createElement('TR');
            //     for (let j = 0; j < 3; j++) {
            //         const random = Math.floor(Math.random() * arr.length);
            //         arr2[i][j] = arr[random];
            //         const td = document.createElement('td');
            //         const text = document.createTextNode(arr[random]);
            //         td.appendChild(text);
            //         tablerow.appendChild(td);
            //         tbody.appendChild(tablerow);
            //     }
            // }
            // console.log(arr2);
            // show(arr2);
        } else {
            throw new Error('something went wrong')
        }
    } catch (err) {
        console.log(err);
    }
})



const show = (data) => {
    let india=data.india;
    let nepal=data.nepal;
    let finland=data.finland;
    let germany=data.germany;

    const rank = document.getElementById('rank');
    if(india!=null){      
        const p=document.createElement('p');
        p.textContent=`india=>${india}`;
        rank.appendChild(p);
    }
    if(nepal!=null){      
        const p=document.createElement('p');
        p.textContent=`nepal=>${nepal}`;
        rank.appendChild(p);
    }
    if(finland!=null){      
        const p=document.createElement('p');
        p.textContent=`finland=>${finland}`;
        rank.appendChild(p);
    }
    if(germany!=null){      
        const p=document.createElement('p');
        p.textContent=`germany=>${germany}`;
        rank.appendChild(p);
    }
}


const showtable = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const tbody = document.getElementById('tbody')
        const tablerow = document.createElement('TR');
        for (let j = 0; j < arr.length; j++) {
            const td = document.createElement('td');
            const text = document.createTextNode(arr[i][j]);
            td.appendChild(text);
            tablerow.appendChild(td);
            tbody.appendChild(tablerow);
        }
    }
}