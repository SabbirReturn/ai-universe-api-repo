let loadInformation = async() =>{
    let res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
    let data = await res.json();
    let results = data.data.tools
    displayShow(results)
}
let displayShow = (results)=>{
    console.log(results);
    let cardContainer = document.getElementById('cardContainer')
    results.forEach( result => {
        let cardDetails = document.createElement('div');
        cardDetails.classList = 'relative flex w-full flex-col rounded-xl bg-white    bg-clip-border text-gray-700 shadow-md ';
        cardDetails.innerHTML=`
                    <img class="w-full h-full" src="${result?.image??"Not Found"}" alt="">
                    <div class="p-6">
                        <h5 id="title" class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">Feature: <br>
                        ${result.features[0]}
                        </h5>
                        <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula. 
                        </p>
                    </div>
                    <hr>
                    <div class="p-6 pt-0 flex justify-between">
                        <div>
                            <h2>${result.name}</h2>
                            <p>${result.published_in}</p>
                        </div>
                        <button>
                            <div class="dropdown dropdown-right">
                            <div class="btn m-1 rounded-3xl ">➡️</div>
                            
                            </div>
                        </button>
                    </div>
        

        `
        // cardContainer.appendChild(cardDetails);
        cardContainer.appendChild(cardDetails);
    });
}

// loadInformation()
loadInformation()