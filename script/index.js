let loadInformation = async(isShowAll) =>{
    let res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
    let data = await res.json();
    let results = data.data.tools
    displayShow(results,isShowAll)
}
let displayShow = (results,isShowAll)=>{
    
    let cardContainer = document.getElementById('cardContainer')
    cardContainer.textContent = '';
        let showAllButton = document.getElementById('showAllButton')
        if(results.length>8 && !isShowAll){
            showAllButton.classList.remove('hidden')
        }
        else{
            showAllButton.classList.add('hidden')
        }
        if(!isShowAll){
            results = results.slice(0,8);
        }
        results.forEach( result => {
        let cardDetails = document.createElement('div');
        cardDetails.classList = 'group relative flex w-full flex-col rounded-3xl bg-white/10 backdrop-blur-lg border border-white/10 text-white shadow-2xl overflow-hidden hover:scale-105 duration-300';
        cardDetails.innerHTML=`
                    <img class="w-full h-60 object-cover group-hover:scale-110 duration-500" src="${result?.image}" alt="">
                    <div class="p-5 space-y-3">
                        <h5 id="title" class="text-2xl font-bold text-cyan-300">Feature: <br>
                        ${result.features[0]}
                        </h5>
                        <p class="text-gray-300 text-sm   leading-relaxed">
                            Discover advanced AI solutions for productivity, creativity and automation.
                        </p>
                    </div>
                    <hr>
                    <div class="p-6 pt-0 flex justify-between">
                        <div>
                            <h2 class="text-xl font-bold text-white">
                                ${result.name}
                            </h2>
                            <p class="text-sm text-gray-400">
                                📅 ${result.published_in}
                            </p>
                        </div>
                        <button>
                            <div class="dropdown dropdown-right">
                            <div class="btn btn-circle bg-cyan-400 border-none hover:bg-cyan-300 text-black">
                                ➜
                            </div>
                            
                            </div>
                        </button>
                    </div>
        

        `
        // cardContainer.appendChild(cardDetails);
        cardContainer.appendChild(cardDetails);
    });
}

// show Button
let showBtn = (isShowAll)=>{
    loadInformation(true);
}

loadInformation()