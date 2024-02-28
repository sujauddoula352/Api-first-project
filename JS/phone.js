const loadPhone = async(searchText,isShowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data
     displaPhone(phones,isShowAll);

    

}


const displaPhone = (phones,isShowAll) => {
 const phonecontainer = document.getElementById('phone-container');
 // clear phone container cards before adding new cards
    phonecontainer.textContent=''; 
//display show all button if there are more than 12
    const showAllContainer = document.getElementById('show-all-container');
      if( phones.length > 12 && !isShowAll){
        showAllContainer.classList.remove('hidden')

      }
      else{
        showAllContainer.classList.add('hidden')
      }
      
          // display show items limited
        
      if(!isShowAll){
          phones = phones.slice(0,12)
      }

phones.forEach(phone =>{
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card p-4 bg-gray-100 shadow-xl`
        phoneCard.innerHTML=`
        <figure><img src=${phone.image} alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
    </div>`
      phonecontainer.appendChild(phoneCard);
      });
      // hide loading spinner
      toggleLoadingSpinner(false)
}

loadPhone();
  // handle search button
  const handleSearch = (isShowAll) =>{
    toggleLoadingSpinner(true,isShowAll);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText,isShowAll);
  }


const toggleLoadingSpinner = (isLoading)=>{
  const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden')
    }
    else{
      loadingSpinner.classList.add('hidden')
    }
}

  const handleShowAll =() =>{
    handleSearch(true);
  }