//PRODUCT PAGE T-SHIRTS
const wrapper = document.querySelector(".wrapper"); //scroll otomatis
const carousel = document.querySelector(".carousel"); //utama
const arrowBtns = document.querySelectorAll(".wrapper i"); //tombolnya bisa diklik
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false, startX, startScrollLeft, timeoutId;

//dapatkan jumlah card yang bisa masuk ke dalam carousel sekaligus
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

//sisipkan salinan beberapa card akhir ke awal carousel untuk pengguliran tak terbatas
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
})

//sisipkan salinan beberapa card awal ke akhir carousel untuk pengguliran tak terbatas
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
})

//menambahkan event listeners untuk tombol panah untuk menggulir carousel ke kiri dan ke kanan
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth; //Jika tombol yang diklik adalah kiri, maka kurangi lebar first card dari carousel scrollLeft jika tidak, tambahkan ke sana
    })
})

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    //merekam posisi awal kursor dan scroll corausel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; //Jika isDragging adalah salah kembali dari sini
    //memperbarui posisi scroll carousel berdasarkan gerakan kursor
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const autoPlay = () => {
    if(window.innerWidth < 400) return; //kembali jika jendela lebih kecil dari 800
    //Autoplay carousel setelah 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

const infiniteScroll = () => {
    //jika carousel adalah awal, scroll ke akhir
    if(carousel.scrollLeft === 0) { //(Kiri akhir)
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - ( 2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    } 
    //jika carousel adalah akhir, scroll ke awal
    //carousel.scrollLeft memberikan angka mengambang, jadi kita perlu membulatkannya agar kondisi ini menjadi benar, metode Math.ceil() membulatkan sebuah angka dibulatkan ke atas ke bilangan bulat terdekat
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){ //(Kanan akhir) scrollWidth mengembalikan lebar konten elemen termasuk konten yang tidak terlihat di layar karena overflow
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    //hapus batas waktu keluar & mulai autoPlay jika mouse tidak melayang di atas carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);



//PRODUCT PAGE SHIRTS
const wrapper1 = document.querySelector(".wrapper-satu");
const carousel1 = document.querySelector(".carousel-satu"); 
const arrowBtns1 = document.querySelectorAll(".wrapper-satu i"); 
const firstCardWidth1 = carousel1.querySelector(".card-satu").offsetWidth;
const carouselChildrens1 = [...carousel1.children];

let isDragging1 = false, startX1, startScrollLeft1, timeoutId1;

let cardPerView1 = Math.round(carousel1.offsetWidth / firstCardWidth1);

carouselChildrens1.slice(-cardPerView1).reverse().forEach(card => {
    carousel1.insertAdjacentHTML("afterbegin", card.outerHTML);
})

carouselChildrens1.slice(0, cardPerView1).forEach(card => {
    carousel1.insertAdjacentHTML("beforeend", card.outerHTML);
})

arrowBtns1.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel1.scrollLeft += btn.id === "left-satu" ? -firstCardWidth1 : firstCardWidth1; 
    })
})

const dragStart1 = (e) => {
    isDragging1 = true;
    carousel1.classList.add("dragging");
    startX1 = e.pageX;
    startScrollLeft1 = carousel1.scrollLeft;
}

const dragging1 = (e) => {
    if(!isDragging1) return; 
    carousel1.scrollLeft = startScrollLeft1 - (e.pageX - startX1);
}

const dragStop1 = () => {
    isDragging1 = false;
    carousel1.classList.remove("dragging");
}

const autoPlay1 = () => {
    if(window.innerWidth < 400) return; 
    timeoutId1 = setTimeout(() => carousel1.scrollLeft += firstCardWidth1, 2500);
}
autoPlay1();

const infiniteScroll1 = () => {
    if(carousel1.scrollLeft === 0) { 
        carousel1.classList.add("no-transition");
        carousel1.scrollLeft = carousel1.scrollWidth - (2 * carousel1.offsetWidth);
        carousel1.classList.remove("no-transition");
    } 
    else if(Math.ceil(carousel1.scrollLeft) === carousel1.scrollWidth - carousel1.offsetWidth){ 
        carousel1.classList.add("no-transition");
        carousel1.scrollLeft = carousel1.offsetWidth;
        carousel1.classList.remove("no-transition");
    }

    clearTimeout(timeoutId1);
    if(!wrapper1.matches(":hover")) autoPlay1();
}

carousel1.addEventListener("mousedown", dragStart1);
carousel1.addEventListener("mousemove", dragging1);
document.addEventListener("mouseup", dragStop1);
carousel1.addEventListener("scroll", infiniteScroll1);
wrapper1.addEventListener("mouseenter", () => clearTimeout(timeoutId1));
wrapper1.addEventListener("mouseleave", autoPlay1);



//PRODUCT PAGE JACKET
const wrapper2 = document.querySelector(".wrapper-dua");
const carousel2 = document.querySelector(".carousel-dua"); 
const arrowBtns2 = document.querySelectorAll(".wrapper-dua i"); 
const firstCardWidth2 = carousel2.querySelector(".card-dua").offsetWidth;
const carouselChildrens2 = [...carousel2.children];

let isDragging2 = false, startX2, startScrollLeft2, timeoutId2;

let cardPerView2 = Math.round(carousel2.offsetWidth / firstCardWidth2);

carouselChildrens2.slice(-cardPerView2).reverse().forEach(card => {
    carousel2.insertAdjacentHTML("afterbegin", card.outerHTML);
})

carouselChildrens2.slice(0, cardPerView2).forEach(card => {
    carousel2.insertAdjacentHTML("beforeend", card.outerHTML);
})

arrowBtns2.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel2.scrollLeft += btn.id === "left-dua" ? -firstCardWidth2 : firstCardWidth2; 
    })
})

const dragStart2 = (e) => {
    isDragging2 = true;
    carousel2.classList.add("dragging");
    startX2 = e.pageX;
    startScrollLeft2 = carousel2.scrollLeft;
}

const dragging2 = (e) => {
    if(!isDragging2) return; 
    carousel2.scrollLeft = startScrollLeft2 - (e.pageX - startX2);
}

const dragStop2 = () => {
    isDragging2 = false;
    carousel2.classList.remove("dragging");
}

const autoPlay2 = () => {
    if(window.innerWidth < 400) return; 
    timeoutId2 = setTimeout(() => carousel2.scrollLeft += firstCardWidth2, 2500);
}
autoPlay2();

const infiniteScroll2 = () => {
    if(carousel2.scrollLeft === 0) { 
        carousel2.classList.add("no-transition");
        carousel2.scrollLeft = carousel2.scrollWidth - (2 * carousel2.offsetWidth);
        carousel2.classList.remove("no-transition");
    } 
    else if(Math.ceil(carousel2.scrollLeft) === carousel2.scrollWidth - carousel2.offsetWidth){ 
        carousel2.classList.add("no-transition");
        carousel2.scrollLeft = carousel2.offsetWidth;
        carousel2.classList.remove("no-transition");
    }

    clearTimeout(timeoutId2);
    if(!wrapper2.matches(":hover")) autoPlay2();
}

carousel2.addEventListener("mousedown", dragStart2);
carousel2.addEventListener("mousemove", dragging2);
document.addEventListener("mouseup", dragStop2);
carousel2.addEventListener("scroll", infiniteScroll2);
wrapper2.addEventListener("mouseenter", () => clearTimeout(timeoutId2));
wrapper2.addEventListener("mouseleave", autoPlay2);



//PRODUCT PAGE VARSITY JACKET
const wrapper3 = document.querySelector(".wrapper-tiga");
const carousel3 = document.querySelector(".carousel-tiga"); 
const arrowBtns3 = document.querySelectorAll(".wrapper-tiga i"); 
const firstCardWidth3 = carousel3.querySelector(".card-tiga").offsetWidth;
const carouselChildrens3 = [...carousel3.children];

let isDragging3 = false, startX3, startScrollLeft3, timeoutId3;

let cardPerView3 = Math.round(carousel3.offsetWidth / firstCardWidth3);

carouselChildrens3.slice(-cardPerView3).reverse().forEach(card => {
    carousel3.insertAdjacentHTML("afterbegin", card.outerHTML);
})

carouselChildrens3.slice(0, cardPerView2).forEach(card => {
    carousel3.insertAdjacentHTML("beforeend", card.outerHTML);
})

arrowBtns3.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel3.scrollLeft += btn.id === "left-tiga" ? -firstCardWidth3 : firstCardWidth3; 
    })
})

const dragStart3 = (e) => {
    isDragging3 = true;
    carousel3.classList.add("dragging");
    startX3 = e.pageX;
    startScrollLeft3 = carousel3.scrollLeft;
}

const dragging3 = (e) => {
    if(!isDragging3) return; 
    carousel3.scrollLeft = startScrollLeft3 - (e.pageX - startX3);
}

const dragStop3 = () => {
    isDragging3 = false;
    carousel3.classList.remove("dragging");
}

const autoPlay3 = () => {
    if(window.innerWidth < 400) return; 
    timeoutId3 = setTimeout(() => carousel3.scrollLeft += firstCardWidth3, 2500);
}
autoPlay3();

const infiniteScroll3 = () => {
    if(carousel3.scrollLeft === 0) { 
        carousel3.classList.add("no-transition");
        carousel3.scrollLeft = carousel3.scrollWidth - (2 * carousel3.offsetWidth);
        carousel3.classList.remove("no-transition");
    } 
    else if(Math.ceil(carousel3.scrollLeft) === carousel3.scrollWidth - carousel3.offsetWidth){ 
        carousel3.classList.add("no-transition");
        carousel3.scrollLeft = carousel3.offsetWidth;
        carousel3.classList.remove("no-transition");
    }

    clearTimeout(timeoutId3);
    if(!wrapper3.matches(":hover")) autoPlay3();
}

carousel3.addEventListener("mousedown", dragStart3);
carousel3.addEventListener("mousemove", dragging3);
document.addEventListener("mouseup", dragStop3);
carousel3.addEventListener("scroll", infiniteScroll3);
wrapper3.addEventListener("mouseenter", () => clearTimeout(timeoutId3));
wrapper3.addEventListener("mouseleave", autoPlay3);



//PRODUCT PAGE HOODIE
const wrapper4 = document.querySelector(".wrapper-empat");
const carousel4 = document.querySelector(".carousel-empat"); 
const arrowBtns4 = document.querySelectorAll(".wrapper-empat i"); 
const firstCardWidth4 = carousel4.querySelector(".card-empat").offsetWidth;
const carouselChildrens4 = [...carousel4.children];

let isDragging4 = false, startX4, startScrollLeft4, timeoutId4;

let cardPerView4 = Math.round(carousel4.offsetWidth / firstCardWidth3);

carouselChildrens4.slice(-cardPerView4).reverse().forEach(card => {
    carousel4.insertAdjacentHTML("afterbegin", card.outerHTML);
})

carouselChildrens4.slice(0, cardPerView2).forEach(card => {
    carousel4.insertAdjacentHTML("beforeend", card.outerHTML);
})

arrowBtns4.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel4.scrollLeft += btn.id === "left-empat" ? -firstCardWidth4 : firstCardWidth4; 
    })
})

const dragStart4 = (e) => {
    isDragging4 = true;
    carousel4.classList.add("dragging");
    startX4 = e.pageX;
    startScrollLeft4 = carousel4.scrollLeft;
}

const dragging4 = (e) => {
    if(!isDragging4) return; 
    carousel4.scrollLeft = startScrollLeft4 - (e.pageX - startX4);
}

const dragStop4 = () => {
    isDragging4 = false;
    carousel4.classList.remove("dragging");
}

const autoPlay4 = () => {
    if(window.innerWidth < 400) return; 
    timeoutId4 = setTimeout(() => carousel4.scrollLeft += firstCardWidth4, 2500);
}
autoPlay4();

const infiniteScroll4 = () => {
    if(carousel4.scrollLeft === 0) { 
        carousel4.classList.add("no-transition");
        carousel4.scrollLeft = carousel4.scrollWidth - (2 * carousel4.offsetWidth);
        carousel4.classList.remove("no-transition");
    } 
    else if(Math.ceil(carousel4.scrollLeft) === carousel4.scrollWidth - carousel4.offsetWidth){ 
        carousel4.classList.add("no-transition");
        carousel4.scrollLeft = carousel4.offsetWidth;
        carousel4.classList.remove("no-transition");
    }

    clearTimeout(timeoutId4);
    if(!wrapper4.matches(":hover")) autoPlay4();
}

carousel4.addEventListener("mousedown", dragStart4);
carousel4.addEventListener("mousemove", dragging4);
document.addEventListener("mouseup", dragStop4);
carousel4.addEventListener("scroll", infiniteScroll4);
wrapper4.addEventListener("mouseenter", () => clearTimeout(timeoutId4));
wrapper4.addEventListener("mouseleave", autoPlay4);



//PRODUCT PAGE SWEATER
const wrapper5 = document.querySelector(".wrapper-lima");
const carousel5 = document.querySelector(".carousel-lima"); 
const arrowBtns5 = document.querySelectorAll(".wrapper-lima i"); 
const firstCardWidth5 = carousel5.querySelector(".card-lima").offsetWidth;
const carouselChildrens5 = [...carousel5.children];

let isDragging5 = false, startX5, startScrollLeft5, timeoutId5;

let cardPerView5 = Math.round(carousel5.offsetWidth / firstCardWidth3);

carouselChildrens5.slice(-cardPerView5).reverse().forEach(card => {
    carousel5.insertAdjacentHTML("afterbegin", card.outerHTML);
})

carouselChildrens5.slice(0, cardPerView2).forEach(card => {
    carousel5.insertAdjacentHTML("beforeend", card.outerHTML);
})

arrowBtns5.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel5.scrollLeft += btn.id === "left-lima" ? -firstCardWidth5 : firstCardWidth5; 
    })
})

const dragStart5 = (e) => {
    isDragging5 = true;
    carousel5.classList.add("dragging");
    startX5 = e.pageX;
    startScrollLeft5 = carousel5.scrollLeft;
}

const dragging5 = (e) => {
    if(!isDragging5) return; 
    carousel5.scrollLeft = startScrollLeft5 - (e.pageX - startX5);
}

const dragStop5 = () => {
    isDragging5 = false;
    carousel5.classList.remove("dragging");
}

const autoPlay5 = () => {
    if(window.innerWidth < 400) return; 
    timeoutId5 = setTimeout(() => carousel5.scrollLeft += firstCardWidth5, 2500);
}
autoPlay5();

const infiniteScroll5 = () => {
    if(carousel5.scrollLeft === 0) { 
        carousel5.classList.add("no-transition");
        carousel5.scrollLeft = carousel5.scrollWidth - (2 * carousel5.offsetWidth);
        carousel5.classList.remove("no-transition");
    } 
    else if(Math.ceil(carousel5.scrollLeft) === carousel5.scrollWidth - carousel5.offsetWidth){ 
        carousel5.classList.add("no-transition");
        carousel5.scrollLeft = carousel5.offsetWidth;
        carousel5.classList.remove("no-transition");
    }

    clearTimeout(timeoutId5);
    if(!wrapper5.matches(":hover")) autoPlay5();
}

carousel5.addEventListener("mousedown", dragStart5);
carousel5.addEventListener("mousemove", dragging5);
document.addEventListener("mouseup", dragStop5);
carousel5.addEventListener("scroll", infiniteScroll5);
wrapper5.addEventListener("mouseenter", () => clearTimeout(timeoutId5));
wrapper5.addEventListener("mouseleave", autoPlay5);


// PRODUCT PAGE THROUSERS AND SHORTS
const wrapper6 = document.querySelector(".wrapper-enam");
const carousel6 = document.querySelector(".carousel-enam"); 
const arrowBtns6 = document.querySelectorAll(".wrapper-enam i"); 
const firstCardWidth6 = carousel6.querySelector(".card-enam").offsetWidth;
const carouselChildrens6 = [...carousel6.children];

let isDragging6 = false, startX6, startScrollLeft6, timeoutId6;

let cardPerView6 = Math.round(carousel6.offsetWidth / firstCardWidth3);

carouselChildrens6.slice(-cardPerView6).reverse().forEach(card => {
    carousel6.insertAdjacentHTML("afterbegin", card.outerHTML);
})

carouselChildrens6.slice(0, cardPerView2).forEach(card => {
    carousel6.insertAdjacentHTML("beforeend", card.outerHTML);
})

arrowBtns6.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel6.scrollLeft += btn.id === "left-enam" ? -firstCardWidth6 : firstCardWidth6; 
    })
})

const dragStart6 = (e) => {
    isDragging6 = true;
    carousel6.classList.add("dragging");
    startX6 = e.pageX;
    startScrollLeft6 = carousel6.scrollLeft;
}

const dragging6 = (e) => {
    if(!isDragging6) return; 
    carousel6.scrollLeft = startScrollLeft6 - (e.pageX - startX6);
}

const dragStop6 = () => {
    isDragging6 = false;
    carousel6.classList.remove("dragging");
}

const autoPlay6 = () => {
    if(window.innerWidth < 600) return; 
    timeoutId6 = setTimeout(() => carousel6.scrollLeft += firstCardWidth6, 2500);
}
autoPlay6();

const infiniteScroll6 = () => {
    if(carousel6.scrollLeft === 0) { 
        carousel6.classList.add("no-transition");
        carousel6.scrollLeft = carousel6.scrollWidth - (2 * carousel6.offsetWidth);
        carousel6.classList.remove("no-transition");
    } 
    else if(Math.ceil(carousel6.scrollLeft) === carousel6.scrollWidth - carousel6.offsetWidth){ 
        carousel6.classList.add("no-transition");
        carousel6.scrollLeft = carousel6.offsetWidth;
        carousel6.classList.remove("no-transition");
    }

    clearTimeout(timeoutId6);
    if(!wrapper6.matches(":hover")) autoPlay6();
}

carousel6.addEventListener("mousedown", dragStart6);
carousel6.addEventListener("mousemove", dragging6);
document.addEventListener("mouseup", dragStop6);
carousel6.addEventListener("scroll", infiniteScroll6);
wrapper6.addEventListener("mouseenter", () => clearTimeout(timeoutId6));
wrapper6.addEventListener("mouseleave", autoPlay6);



//PRODUCT PAGE HAT AND CAP
const wrapper7 = document.querySelector(".wrapper-tujuh");
const carousel7 = document.querySelector(".carousel-tujuh"); 
const arrowBtns7 = document.querySelectorAll(".wrapper-tujuh i"); 
const firstCardWidth7 = carousel7.querySelector(".card-tujuh").offsetWidth;
const carouselChildrens7 = [...carousel7.children];

let isDragging7 = false, startX7, startScrollLeft7, timeoutId7;

let cardPerView7 = Math.round(carousel7.offsetWidth / firstCardWidth3);

carouselChildrens7.slice(-cardPerView7).reverse().forEach(card => {
    carousel7.insertAdjacentHTML("afterbegin", card.outerHTML);
})

carouselChildrens7.slice(0, cardPerView2).forEach(card => {
    carousel7.insertAdjacentHTML("beforeend", card.outerHTML);
})

arrowBtns7.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel7.scrollLeft += btn.id === "left-tujuh" ? -firstCardWidth7 : firstCardWidth7; 
    })
})

const dragStart7 = (e) => {
    isDragging7 = true;
    carousel7.classList.add("dragging");
    startX7 = e.pageX;
    startScrollLeft7 = carousel7.scrollLeft;
}

const dragging7 = (e) => {
    if(!isDragging7) return; 
    carousel7.scrollLeft = startScrollLeft7 - (e.pageX - startX7);
}

const dragStop7 = () => {
    isDragging7 = false;
    carousel7.classList.remove("dragging");
}

const autoPlay7 = () => {
    if(window.innerWidth < 400) return; 
    timeoutId7 = setTimeout(() => carousel7.scrollLeft += firstCardWidth7, 2700);
}
autoPlay7();

const infiniteScroll7 = () => {
    if(carousel7.scrollLeft === 0) { 
        carousel7.classList.add("no-transition");
        carousel7.scrollLeft = carousel7.scrollWidth - (2 * carousel7.offsetWidth);
        carousel7.classList.remove("no-transition");
    } 
    else if(Math.ceil(carousel7.scrollLeft) === carousel7.scrollWidth - carousel7.offsetWidth){ 
        carousel7.classList.add("no-transition");
        carousel7.scrollLeft = carousel7.offsetWidth;
        carousel7.classList.remove("no-transition");
    }

    clearTimeout(timeoutId7);
    if(!wrapper7.matches(":hover")) autoPlay7();
}

carousel7.addEventListener("mousedown", dragStart7);
carousel7.addEventListener("mousemove", dragging7);
document.addEventListener("mouseup", dragStop7);
carousel7.addEventListener("scroll", infiniteScroll7);
wrapper7.addEventListener("mouseenter", () => clearTimeout(timeoutId7));
wrapper7.addEventListener("mouseleave", autoPlay7);