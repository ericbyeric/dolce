let sliderImages_1 = document.querySelectorAll('.slide-1'),
    sliderImages_2 = document.querySelectorAll('.slide-2'),
    sliderImages_3 = document.querySelectorAll('.slide-3'),
    arrowLeft_1 = document.querySelector('#arrow-left-1'),
    arrowLeft_2 = document.querySelector('#arrow-left-2'),
    arrowLeft_3 = document.querySelector('#arrow-left-3'),
    arrowRight_1 = document.querySelector('#arrow-right-1'),
    arrowRight_2 = document.querySelector('#arrow-right-2'),
    arrowRight_3 = document.querySelector('#arrow-right-3'),
    current_1 = 0,    // what slide we are one
    current_2 = 0,
    current_3 = 0;

    // Slide_1 functions
        // Clear all images
        function reset_1(){
            // each time we change the slide, clear out all the images
            for(let i = 0; i < sliderImages_1.length; i++){
                sliderImages_1[i].style.display = 'none'; // hiding everything
            }
        }
        // Init slider
        function startslide_1() {
            reset_1();
            sliderImages_1[0].style.display = 'block';
        }

        // Show prev
        function slideLeft_1(){
            reset_1();
            sliderImages_1[current_1 - 1].style.display = 'block';
            current_1--;
        }

        // Show next
        function slideRight_1(){
            reset_1();
            sliderImages_1[current_1 + 1].style.display = 'block';
            current_1++;
        }

        // Left arrow click
        arrowLeft_1.addEventListener('click', function(){
            if(current_1 === 0){
                current_1 = sliderImages_1.length;  // go to the last image
            }
            slideLeft_1();
        });

        // Right arrow click
        arrowRight_1.addEventListener('click', function(){
            if(current_1 === sliderImages_1.length - 1){
                current_1 = -1;  // go to the first image
            }
            slideRight_1();
        });

// slide_2 functions
        function reset_2(){
            for(let i = 0; i < sliderImages_2.length; i++){
                sliderImages_2[i].style.display = 'none'; 
            }
        }
        function startslide_2() {
            reset_2();
            sliderImages_2[0].style.display = 'block';
        }
        function slideLeft_2(){
            reset_2();
            sliderImages_2[current_2 - 1].style.display = 'block';
            current_2--;
        }
        function slideRight_2(){
            reset_2();
            sliderImages_2[current_2 + 1].style.display = 'block';
            current_2++;
        }
        arrowLeft_2.addEventListener('click', function(){
            if(current_2 === 0){
                current_2 = sliderImages_2.length;  // go to the last image
            }
            slideLeft_2();
        });
        arrowRight_2.addEventListener('click', function(){
            if(current_2 === sliderImages_2.length - 1){
                current_2 = -1;  // go to the first image
            }
            slideRight_2();
        });

// slide_3 functions
        function reset_3(){
            for(let i = 0; i < sliderImages_3.length; i++){
                sliderImages_3[i].style.display = 'none'; 
            }
        }
        function startslide_3() {
            reset_3();
            sliderImages_3[0].style.display = 'block';
        }
        function slideLeft_3(){
            reset_3();
            sliderImages_3[current_3 - 1].style.display = 'block';
            current_3--;
        }
        function slideRight_3(){
            reset_3();
            sliderImages_3[current_3 + 1].style.display = 'block';
            current_3++;
        }
        arrowLeft_3.addEventListener('click', function(){
            if(current_3 === 0){
                current_3 = sliderImages_3.length;  // go to the last image
            }
            slideLeft_3();
        });
        arrowRight_3.addEventListener('click', function(){
            if(current_3 === sliderImages_3.length - 1){
                current_3 = -1;  // go to the first image
            }
            slideRight_3();
        });