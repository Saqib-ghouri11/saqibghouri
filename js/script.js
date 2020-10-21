const filterContainer=document.querySelector(".portfolio-filter"),
      filterBtns=filterContainer.children,
      totalFilterBtn=filterBtns.length,
      portfolioItems=document.querySelectorAll(".portfolio-item"),
      totalPortfolioItem=portfolioItems.length;
      console.log(totalPortfolioItem)

      for(let i=0; i<totalFilterBtn; i++){
       filterBtns[i].addEventListener("click",function(){
        	filterContainer.querySelector(".active").classList.remove("active");
        	this.classList.add("active");
        	 
        	 const filterValue=this.getAttribute("data-filter");
        	 for(let k=0; k<totalPortfolioItem; k++){
        	 	if(filterValue === portfolioItems[k].getAttribute("data-category"))
        	 	{
        	 		portfolioItems[k].classList.remove("hide");
        	 	portfolioItems[k].classList.add("show");	
        	 	}
                
             else
        	 {
        	 	portfolioItems[k].classList.remove("show");
        	 portfolioItems[k].classList.add("hide");
        	 	
        	 }  
        	 if(filterValue === "all"){
        	 	portfolioItems[k].classList.remove("hide");
        	 	portfolioItems[k].classList.add("show");
        	 } 
        	 }
        	 
        })
      }
      // portfolio lightbox
      const lightbox=document.querySelector(".lightbox"),
      lightboxClose=lightbox.querySelector(".lightbox-close"),
      lightboxImg=lightbox.querySelector(".lightbox-img"),
      lightboxText=lightbox.querySelector(".caption-text");
      lightboxCounter=lightbox.querySelector(".caption-counter");
      let itemIndex=0;
      for(let i=0; i<totalPortfolioItem; i++){
      	portfolioItems[i].addEventListener("click",function(){
      		itemIndex=i;
      		changeItem();
      		toggleLightbox();
      	})
      }

function nextItem(){
	if(itemIndex === totalPortfolioItem-1){
itemIndex=0;
	}
	else
	{
		itemIndex++;
	}
	changeItem();
}

function prevItem(){
	if(itemIndex === 0){
  itemIndex=totalPortfolioItem-1;
	}
	else
	{
		itemIndex--;
	}
	changeItem();
}

   function toggleLightbox(){
      			lightbox.classList.toggle("open");
      		}

      function changeItem(){
      	imgSrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
      lightboxImg.src=imgSrc;
      lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
      lightboxCounter.innerHTML=(itemIndex+1)+" of "+totalPortfolioItem;
      }

      //close lightbox
      lightbox.addEventListener("click",function(event){
      	if(event.target === lightboxClose){
      		toggleLightbox();
      	}
      })

const navTogglerBtn1=document.querySelector(".nav-toggler"),
      aside1=document.querySelector(".aside");
      const sectionAnimator=document.querySelector("section");
      sectionList=sectionAnimator.classList;
      console.log(sectionList);
      var navList=document.querySelector(".nav"),
      navListChildren=navList.querySelectorAll("li"),
      totalNavChildren=navListChildren.length;
      for(let i=0; i<totalNavChildren; i++){
      	const a=navListChildren[i].querySelector("a");
      	a.addEventListener("click",function(){
      		for(let j=0; j<totalNavChildren; j++){
      			navListChildren[j].querySelector("a").classList.remove("active");
      		}
      		      	this.classList.add("active");
      		      	navTogglerBtn1.classList.remove("open");
      		      	aside1.classList.remove("open");


      	})

      }

      const navTogglerBtn=document.querySelector(".nav-toggler"),
      aside=document.querySelector(".aside");
      navTogglerBtn.addEventListener("click",()=>{
      	asideSectionTogglerBtn();
      })
      function asideSectionTogglerBtn()
	{
		aside.classList.toggle("open");
		navTogglerBtn.classList.toggle("open");
		}




      

     