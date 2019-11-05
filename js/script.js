$(document).ready(function () {
    // navbar toggle
    $('.navbar-toggler').click(function(){
        $('.navbar-toggler').toggleClass('change')
    });


    // sticky navbar
    $(window).scroll(function(){
        let position = $(this).scrollTop();

        if(position >= 900){
            $('.navbar').addClass('navbar-background');
        }else{
            $('.navbar').removeClass('navbar-background'); 
        }



    });


    // Smooth Scroll
    $('.nav-item a,.header-link').click(function(link){
        link.preventDefault();
        let target = $(this).attr('href');
        $('html,body').stop().animate({
            scrollTop:$(target).offset().top - 25
        },3000);
    });













    // $('#header, .info').ripples({
    //     dropRadius: 20,
    //     perturbance: 0.0005,

    // });

    // Magnific script
    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',

        gallery: {
            enabled: true
        }
        // other options
    });
});

// LAZY LOAD
const images = document.querySelectorAll("[data-src]");

const imgOptions ={
    threshold: 0,
    rootMargin:"0px 0px 300px 0px"
};
const appearOptions ={
    threshold: 0,
    rootMargin:"0px 0px -200px 0px"
};




// 
function preloadImage(img){
   const src = img.getAttribute("data-src");
   if(!src){
       return;
   }
   img.src = src;
}

const imgObserver = new IntersectionObserver((entries,imgObserver)=>{
entries.forEach(entry => {
    if(!entry.isIntersecting){
        return;
    }else{
        preloadImage(entry.target);
        imgObserver.unobserve(entry.target);
    }
})
},imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});
// 
// Slide ins and Fadeins observers



const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOnScroll = new IntersectionObserver((entries,appearOnScroll)=>{
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }else{
            console.log(' i am working!');
          entry.target.classList.add("appear");
          appearOnScroll.unobserve(entry.target);
        }
    });
    },appearOptions);
    
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
    // Slide in Options
    sliders.forEach(slider => {
        appearOnScroll.observe(slider);
    });

// 

document.getElementById('menu-button').addEventListener("click", RespondClick); 
document.getElementById('alcohol-button').addEventListener("click", RespondClick2); 

function RespondClick() { 
    
      document.getElementById("menu").style.background = " linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('./img/menubg.jpg')center/cover fixed no-repeat"; 

    //   Add class to highlight button
    document.getElementById("alcohol-button").classList.remove("active-btn");
    document.getElementById("menu-button").classList.add("active-btn");

      document.querySelector('#main-menu').innerHTML = 
      `
      <div class="col-md-6">
                    <!-- title -->
                    <div class="row">
                        <div class="col">
                            <h1 class="white-color text-uppercase cursive ">Soups</h1>
                        </div>
                    </div>
                    <!-- single item -->
                    <div class="single-item d-flex justify-content-between my-3 p-3 cursive ">
                        <div class="single-item-text">
                            <h2 class="text-uppercase white-color">Soup</h2>
                            <h4 class=" white-color">Sashimi soup le cremb</h4>
                        </div>
                        <div class="single-item-price align-self-end">
                            <h1 class="text-uppercase white-color">$10</h1>
                        </div>
                    </div>

                    <div class="single-item d-flex justify-content-between my-3 p-3 cursive special white-color ">
                        <div class="single-item-text">
                            <h2 class="text-uppercase ">Soup</h2>
                            <h4>Sashimi soup le cremb</h4>
                        </div>
                        <div class="single-item-price align-self-end">
                            <h1 class="text-uppercase ">$10</h1>
                        </div>
                        <h3 class="special-text text-capitalize">Chef Special</h3>
                    </div>

                    <div class="row">
                        <div class="col">
                            <h1 class="secondary-color text-uppercase cursive ">Sushi</h1>
                        </div>
                    </div>
                    <!-- single item -->
                    <div class="single-item d-flex justify-content-between my-3 p-3 cursive white-color ">
                        <div class="single-item-text">
                            <h2 class="text-uppercase ">Sushi</h2>
                            <h4>Sashimi soup le cremb</h4>
                        </div>
                        <div class="single-item-price align-self-end">
                            <h1 class="text-uppercase ">$10</h1>
                        </div>
                    </div>

                    <div class="single-item d-flex justify-content-between my-3 p-3 cursive special white-color ">
                        <div class="single-item-text">
                            <h2 class="text-uppercase ">Sushi</h2>
                            <h4>Sashimi soup le cremb</h4>
                        </div>
                        <div class="single-item-price align-self-end">
                            <h1 class="text-uppercase ">$10</h1>
                        </div>
                        <h3 class="special-text text-capitalize">Chef Special</h3>
                    </div>

                    <!-- End of Col -->
                </div>

                <div class="col-md-6">
                    <div class="row">
                        <div class="col">
                            <h1 class="secondary-color text-uppercase cursive ">Sashimi</h1>
                        </div>
                    </div>
                    <!-- single item -->

                    <div class="single-item d-flex justify-content-between my-3 p-3 cursive special white-color ">
                        <div class="single-item-text">
                            <h2 class="text-uppercase ">Sashimi</h2>
                            <h4>Sashimi soup le cremb</h4>
                        </div>
                        <div class="single-item-price align-self-end">
                            <h1 class="text-uppercase ">$10</h1>
                        </div>
                        <h3 class="special-text text-capitalize">Chef Special</h3>
                    </div>

                    <div class="single-item d-flex justify-content-between my-3 p-3 cursive white-color ">
                        <div class="single-item-text">
                            <h2 class="text-uppercase ">Sashimi</h2>
                            <h4>Sashimi soup le cremb</h4>
                        </div>
                        <div class="single-item-price align-self-end">
                            <h1 class="text-uppercase ">$10</h1>
                        </div>
                    </div>


                    <div class="row">
                        <div class="col">
                            <h1 class="secondary-color text-uppercase cursive ">Rolls</h1>
                        </div>
                    </div>
                    <!-- single item -->
                    <div class="single-item d-flex justify-content-between my-3 p-3 cursive special white-color ">
                        <div class="single-item-text">
                            <h2 class="text-uppercase ">Rolls</h2>
                            <h4>Sashimi soup le cremb</h4>
                        </div>
                        <div class="single-item-price align-self-end">
                            <h1 class="text-uppercase ">$10</h1>
                        </div>
                        <h3 class="special-text text-capitalize">Chef Special</h3>
                    </div>

                    <div class="single-item d-flex justify-content-between my-3 p-3 cursive white-color ">
                        <div class="single-item-text">
                            <h2 class="text-uppercase ">Rolls</h2>
                            <h4>Sashimi soup le cremb</h4>
                        </div>
                        <div class="single-item-price align-self-end">
                            <h1 class="text-uppercase ">$10</h1>
                        </div>
                    </div>


                </div>
            </div>       
      `;
    }
    function RespondClick2() { 


        
    //   Add class to highlight button
    document.getElementById("menu-button").classList.remove("active-btn");
    document.getElementById("alcohol-button").classList.add("active-btn");

    document.getElementById("menu").style.background = " linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('./img/sakebg.jpg')center/cover fixed no-repeat"; 
      document.querySelector('#main-menu').innerHTML =
      `       <div class="col-md-6">
      <!-- title -->
      <div class="row">
          <div class="col">
              <h1 class="white-color text-uppercase cursive">Sake</h1>
          </div>
      </div>
      <!-- single item -->
      <div class="single-item d-flex justify-content-between my-3 p-3 cursive">
          <div class="single-item-text">
              <h2 class="text-uppercase white-color">Sake</h2>
              <h4 class=" white-color">Rice Sake</h4>
          </div>
          <div class="single-item-price align-self-end">
              <h1 class="text-uppercase white-color">$10</h1>
          </div>
      </div>
      <div class="single-item d-flex justify-content-between my-3 p-3 cursive special white-color">
          <div class="single-item-text">
              <h2 class="text-uppercase ">Sake</h2>
              <h4>Cobra Sake</h4>
          </div>
          <div class="single-item-price align-self-end">
              <h1 class="text-uppercase ">$10</h1>
          </div>
          <h3 class="special-text text-capitalize">Chef Special</h3>
      </div>

      <div class="row">
          <div class="col">
              <h1 class="secondary-color text-uppercase cursive">Sake</h1>
          </div>
      </div>
      <!-- single item -->
      <div class="single-item d-flex justify-content-between my-3 p-3 cursive white-color">
          <div class="single-item-text">
              <h2 class="text-uppercase ">Sake</h2>
              <h4>Honjo-shu sake</h4>
          </div>
          <div class="single-item-price align-self-end">
              <h1 class="text-uppercase ">$10</h1>
          </div>
      </div>
      <div class="single-item d-flex justify-content-between my-3 p-3 cursive special white-color">
          <div class="single-item-text">
              <h2 class="text-uppercase ">Sake</h2>
              <h4>Namazake sake</h4>
          </div>
          <div class="single-item-price align-self-end">
              <h1 class="text-uppercase ">$10</h1>
          </div>
          <h3 class="special-text text-capitalize">Chef Special</h3>
      </div>

      <!-- End of Col -->
  </div>

  <div class="col-md-6">
      <div class="row">
          <div class="col">
              <h1 class="secondary-color text-uppercase cursive">Beer</h1>
          </div>
      </div>
      <!-- single item -->

      <div class="single-item d-flex justify-content-between my-3 p-3 cursive special white-color">
          <div class="single-item-text">
              <h2 class="text-uppercase ">Beer</h2>
              <h4>Asahi Beer</h4>
          </div>
          <div class="single-item-price align-self-end">
              <h1 class="text-uppercase ">$10</h1>
          </div>
          <h3 class="special-text text-capitalize">Chef Special</h3>
      </div>

      <div class="single-item d-flex justify-content-between my-3 p-3 cursive white-color">
          <div class="single-item-text">
              <h2 class="text-uppercase ">Beer</h2>
              <h4>Kirin Beer</h4>
          </div>
          <div class="single-item-price align-self-end">
              <h1 class="text-uppercase ">$10</h1>
          </div>
      </div>


      <div class="row">
          <div class="col">
              <h1 class="secondary-color text-uppercase cursive">Wine</h1>
          </div>
      </div>
      <!-- single item -->
      <div class="single-item d-flex justify-content-between my-3 p-3 cursive special white-color">
          <div class="single-item-text">
              <h2 class="text-uppercase ">Wine</h2>
              <h4>Atsukan</h4>
          </div>
          <div class="single-item-price align-self-end">
              <h1 class="text-uppercase ">$10</h1>
          </div>
          <h3 class="special-text text-capitalize">Chef Special</h3>
      </div>

      <div class="single-item d-flex justify-content-between my-3 p-3 cursive white-color">
          <div class="single-item-text">
              <h2 class="text-uppercase ">Wine</h2>
              <h4>Nikka Yoichi</h4>
          </div>
          <div class="single-item-price align-self-end">
              <h1 class="text-uppercase ">$10</h1>
          </div>
      </div>


  </div>`;
    }