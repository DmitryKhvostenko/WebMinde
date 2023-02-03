// PRE-TEST---------------
const names = document.querySelectorAll('.pre-test__image-button');
names.forEach(el => el.addEventListener('click', addClassActive));
function addClassActive() {
    this.parentNode.classList.toggle("open");
    this.parentNode.classList.add("close");
}

// SLIDER AND PROGRESS BAR
const slider = document.querySelectorAll('.test__slider')
let counterSlide = 1;
let nextSlide = '.slider_'
let width = 20;
let widthBack;
let widthProc;
let widthBackProc;
addEventListener('click', function (e) {
    const target = e.target
    if (target.className.includes('slider__button_next') && !target.className.includes('blocked')) {
        width = width + 20;
        widthProc = width + '%'
        counterSlide++;
        nextSlide += counterSlide;
        slider.forEach(item => item.classList.add('hidden'));
        document.querySelector(nextSlide).classList.remove('hidden');
        nextSlide = '.slider_'
        document.querySelector('.progress-bar__img').style.width = widthProc;
    }
    if (target.className.includes('slider__button_prev')) {
        widthBack = width - 20;
        width = widthBack;
        widthBackProc = widthBack + '%'
        counterSlide--
        nextSlide += counterSlide;
        slider.forEach(item => item.classList.add('hidden'));
        document.querySelector(nextSlide).classList.remove('hidden');
        nextSlide = '.slider_'
        document.querySelector('.progress-bar__img').style.width = widthBackProc;
    }
})

// FIRST SLIDE

const firstButtons = document.querySelectorAll('.form-slider__button_1')

for (let i = 0; i < firstButtons.length; i++) {
    const thisButton = firstButtons[i]
    firstButtons[i].addEventListener('click', function () {
        for (let j = 0; j < firstButtons.length; j++) {
            firstButtons[j].classList.remove('clicked')
        }
        thisButton.classList.add('clicked')
        document.querySelector('.form-slider__sub-button_1').checked = false
        document.querySelector('.slider__button_next_1').classList.remove('blocked')
        document.querySelector('.slider__alert_1').classList.remove('error')
    })
}

document.querySelector('.form-slider__sub-button_1').addEventListener('click', function (e) {
    if (e.target.checked) {
        for (let j = 0; j < firstButtons.length; j++) {
            firstButtons[j].classList.remove('clicked')
        }
        document.querySelector('.slider__button_next_1').classList.remove('blocked')
        document.querySelector('.slider__alert_1').classList.remove('error')
    } else {
        document.querySelector('.slider__button_next_1').classList.add('blocked')
    }
})

document.querySelector('.slider__button_next_1').addEventListener('click', function (e) {
    if (e.target.classList.contains('blocked')) {
        document.querySelector('.slider__alert_1').classList.add('error')
    }
})

// SECOND SLIDE

const secondButtons = document.querySelectorAll('.form-slider__button_2')

for (let i = 0; i < secondButtons.length; i++) {
    const thisButton = secondButtons[i]
    secondButtons[i].addEventListener('click', function () {
        for (let j = 0; j < secondButtons.length; j++) {
            secondButtons[j].classList.remove('clicked')
        }
        thisButton.classList.add('clicked')
        document.querySelector('.slider__button_next_2').classList.remove('blocked')
        document.querySelector('.slider__alert_2').classList.remove('error')
    })
}

document.querySelector('.slider__button_next_2').addEventListener('click', function (e) {
    if (e.target.classList.contains('blocked')) {
        document.querySelector('.slider__alert_2').classList.add('error')
    }
})


// THIRD SLIDE

const thirdButtons = document.querySelectorAll('.form-slider__button_3')

for (let i = 0; i < thirdButtons.length; i++) {
    const thisButton = thirdButtons[i]
    thirdButtons[i].addEventListener('click', function () {
        for (let j = 0; j < thirdButtons.length; j++) {
            thirdButtons[j].classList.remove('clicked')
        }
        thisButton.classList.add('clicked')
        document.querySelector('.form-slider__sub-button_3').checked = false
        document.querySelector('.slider__button_next_3').classList.remove('blocked')
        document.querySelector('.slider__alert_3').classList.remove('error')
    })
}

document.querySelector('.form-slider__sub-button_3').addEventListener('click', function (e) {
    if (e.target.checked) {
        for (let j = 0; j < thirdButtons.length; j++) {
            thirdButtons[j].classList.remove('clicked')
        }
        document.querySelector('.slider__button_next_3').classList.remove('blocked')
        document.querySelector('.slider__alert_3').classList.remove('error')
    } else {
        document.querySelector('.slider__button_next_3').classList.add('blocked')
    }
})

document.querySelector('.slider__button_next_3').addEventListener('click', function (e) {
    if (e.target.classList.contains('blocked')) {
        document.querySelector('.slider__alert_3').classList.add('error')
    }
})

// FOURTH SLIDE

document.querySelector('.slider__button_next_4').addEventListener('click', function () {
    testBtnCheck()
})

let inputLenght = false;
let clicked = false;
let rules = false;
document.getElementById('phone').addEventListener('input', e => {
    if (document.getElementById('phone').value.length >= 17) {
        inputLenght = true
    }
    else { inputLenght = false }
    testCheck();
})

document.getElementById('group4').addEventListener('change', e => {
    if (document.getElementById('group4').checked) {
        rules = true;
    }
    else rules = false;
    testCheck();
})

function testCheck() {
    if (inputLenght == true && rules == true && clicked == true) {
        document.getElementById('nextBtn4').classList.remove('blocked')
    }
    else { document.getElementById('nextBtn4').classList.add('blocked') }
    if (inputLenght == true) {
        document.querySelector('.slider-phone__error').classList.remove('error')
    }
    if (rules == true) {
        document.querySelector('.slider-sub-button__error').classList.remove('error')
    }
}

function testBtnCheck() {
    if (inputLenght == true && rules == true && clicked == true) {
        document.getElementById('nextBtn4').classList.remove('blocked')
    }
    else { document.getElementById('nextBtn4').classList.add('blocked') }
    if (inputLenght != true) {
        document.querySelector('.slider-phone__error').classList.add('error')
    } else {
        document.querySelector('.slider-phone__error').classList.remove('error')
    }
    if (rules != true) {
        document.querySelector('.slider-sub-button__error').classList.add('error')
    } else {
        document.querySelector('.slider-sub-button__error').classList.remove('error')
    }
}

const fourthButtons = document.querySelectorAll('.form-slider__button_4')

document.addEventListener('click', function (e) {
    const target = e.target
    if (target.className.includes('form-slider__button_4')) {
        for (let j = 0; j < fourthButtons.length; j++) {
            fourthButtons[j].classList.remove('clicked')
        }
    }
    if (target.className.includes('form-slider__button_4')) {
        target.classList.add('clicked')
        clicked = true;
        testCheck();
    }
})

// PHONE

var element = document.getElementById('phone');
var element2 = document.getElementById('phone1');
var popup = document.getElementById('popup-phone')
var Burgerpopup = document.getElementById('burger-popup-phone')
var maskOptions = {
    mask: '+{38}(000)000-00-00'
};
var mask = IMask(element, maskOptions);
var mask2 = IMask(element2, maskOptions);
var mask3 = IMask(popup, maskOptions);
var mask4 = IMask(Burgerpopup, maskOptions);

// TASKS

let link = document.querySelectorAll('.tasks__paragraph');
let image = document.querySelectorAll('.tasks__image');


for (i = 0; i < link.length; i++) {
    let thisLink = link[i]
    let thisImage = image[i]
    link[i].addEventListener('click', function () {
        link.forEach((element) => {
            element.classList.remove('active')
        })
        image.forEach((element) => {
            element.classList.remove('active-image')
        })
        thisLink.classList.add('active')
        thisImage.classList.add('active-image')

    })
}

// ADVANTAGES

let advantagesButton = document.querySelectorAll('.advantages__image-img')
let advantagesBlock = document.querySelectorAll('.advantages__image-block')

for (i = 0; i < advantagesButton.length; i++) {
    let thisButton = advantagesButton[i]
    let thisBlock = advantagesBlock[i]
    advantagesButton[i].addEventListener('click', function () {
        thisBlock.classList.toggle('open')
        thisBlock.classList.add('stop-animation')
    })
}

// AUDIT

let value1;
let value2;
let btn;
let lic;

document.querySelector('.form-audit__main-button').addEventListener('click', function (e) {
    if (document.querySelector('.form-audit__main-button').classList.contains('locked')) {
        e.preventDefault();
    } else { document.querySelector('.form-audit__thanks').classList.add('active') }
    checkError()
})

const auditButton = document.querySelectorAll('.form-audit__button')

for (i = 0; i < auditButton.length; i++) {
    let thisAudit = auditButton[i];
    auditButton[i].addEventListener('click', function () {
        auditButton.forEach((element) => {
            element.classList.remove('click')
        })
        thisAudit.classList.add('click')
        btn = true;
        check()
    })
}
const formName = document.querySelector('.form-audit__name')

formName.addEventListener('input', function () {
    if (formName.value.length > 0) {
        value1 = true
    } else value1 = false
    check()
})

const formNumber = document.querySelector('.form-audit__number')

formNumber.addEventListener('input', function () {
    if (formNumber.value.length >= 17) {
        value2 = true
    } else value2 = false
    check()
})

const license = document.querySelector('.form-audit__sub-button')

license.addEventListener('change', function () {
    if (license.checked) {
        lic = true
    } else lic = false;
    check()
})

function check() {
    if (value1 == true && value2 == true && btn == true && lic == true) {
        document.querySelector('.form-audit__main-button').classList.remove('locked')
    }
    else document.querySelector('.form-audit__main-button').classList.add('locked')
    if (value1 == true && value2 == true) {
        document.querySelector('.form-audit__error').classList.remove('error')
    }
    if (lic == true) {
        document.querySelector('.form-audit__sub-button__error').classList.remove('error')
    }
    if (btn == true) {
        for (let i = 0; i < auditButton.length; i++) {
            auditButton[i].classList.remove('error')
        }
    }
}
function checkError() {
    if (value1 != true || value2 != true) {
        document.querySelector('.form-audit__error').classList.add('error')
    } else {
        document.querySelector('.form-audit__error').classList.remove('error')
    }
    if (lic != true) {
        document.querySelector('.form-audit__sub-button__error').classList.add('error')
    } else {
        document.querySelector('.form-audit__sub-button__error').classList.remove('error')
    }
    if (btn != true) {
        for (let i = 0; i < auditButton.length; i++) {
            auditButton[i].classList.add('error')
        }
    } else {
        for (let i = 0; i < auditButton.length; i++) {
            auditButton[i].classList.remove('error')
        }
    }
}

// STEPS

let stepsTabs = document.querySelectorAll('.steps__item')
let stepsBlock = document.querySelectorAll('.steps__block')

for (let i = 0; i < stepsTabs.length; i++) {
    let thisTabs = stepsTabs[i];
    let thisBlock = stepsBlock[i];
    stepsTabs[i].addEventListener('click', function () {
        stepsTabs.forEach((element) => {
            element.classList.remove('active')
        })
        stepsBlock.forEach((element) => {
            element.classList.remove('active')
        })
        thisBlock.classList.add('active')
        thisTabs.classList.add('active')
    })
}

let stepsNextButton = document.querySelectorAll('.block-steps__button_next')
let stepsPrevButton = document.querySelectorAll('.block-steps__button_prev')

for (let i = 0; i < stepsNextButton.length; i++) {
    let thisBlock = stepsBlock[i]
    let nextBlock = stepsBlock[i + 1];
    let thisButton = stepsNextButton[i];
    let firstBlock = stepsBlock[0];
    let firstTab = stepsTabs[0]
    let nextTab = stepsTabs[i + 1]
    stepsNextButton[i].addEventListener('click', function () {
        stepsBlock.forEach((element) => {
            element.classList.remove('active')
        })
        stepsTabs.forEach((element) => {
            element.classList.remove('active')
        })
        if (i != 5) {
            nextBlock.classList.add('active')
            nextTab.classList.add('active')
        } else {
            firstBlock.classList.add('active')
            firstTab.classList.add('active')
        }
    })
}
for (let i = 0; i < stepsPrevButton.length; i++) {
    let prevBlock = stepsBlock[i - 1]
    let thisButton = stepsNextButton[i];
    let endBlock = stepsBlock[5];
    let endTab = stepsTabs[5];
    let prevTab = stepsTabs[i - 1]
    stepsPrevButton[i].addEventListener('click', function () {
        stepsBlock.forEach((element) => {
            element.classList.remove('active')
        })
        stepsTabs.forEach((element) => {
            element.classList.remove('active')
        })
        if (i != 0) {
            prevBlock.classList.add('active')
            prevTab.classList.add('active')
        } else {
            endBlock.classList.add('active')
            endTab.classList.add('active')
        }
    })
}

// PORTFOLIO


let portfolioTabs = document.querySelectorAll('.portfolio__item')
let portfolioBlock = document.querySelectorAll('.portfolio__block')

for (let i = 0; i < portfolioTabs.length; i++) {
    let thisTabs = portfolioTabs[i];
    let thisBlock = portfolioBlock[i];
    portfolioTabs[i].addEventListener('click', function () {
        portfolioTabs.forEach((element) => {
            element.classList.remove('active')
        })
        portfolioBlock.forEach((element) => {
            element.classList.remove('active')
        })
        thisBlock.classList.add('active')
        thisTabs.classList.add('active')
    })
}

let portfolioNextButton = document.querySelectorAll('.portfolio__button_next')
let portfolioPrevButton = document.querySelectorAll('.portfolio__button_prev')
let portfolioImgNextButton = document.querySelectorAll('.portfolio__image-button_next')
let portfolioImgPrevButton = document.querySelectorAll('.portfolio__image-button_prev')

for (let i = 0; i < portfolioNextButton.length; i++) {
    let thisBlock = portfolioBlock[i]
    let nextBlock = portfolioBlock[i + 1];
    let thisButton = portfolioNextButton[i];
    let firstBlock = portfolioBlock[0];
    let firstTab = portfolioTabs[0]
    let nextTab = portfolioTabs[i + 1]
    portfolioNextButton[i].addEventListener('click', function () {
        portfolioBlock.forEach((element) => {
            element.classList.remove('active')
        })
        portfolioTabs.forEach((element) => {
            element.classList.remove('active')
        })
        if (i != 4) {
            nextBlock.classList.add('active')
            nextTab.classList.add('active')
        } else {
            firstBlock.classList.add('active')
            firstTab.classList.add('active')
        }
    })
}
for (let i = 0; i < portfolioPrevButton.length; i++) {
    let prevBlock = portfolioBlock[i - 1]
    let endBlock = portfolioBlock[4];
    let endTab = portfolioTabs[4];
    let prevTab = portfolioTabs[i - 1]
    portfolioPrevButton[i].addEventListener('click', function () {
        portfolioBlock.forEach((element) => {
            element.classList.remove('active')
        })
        portfolioTabs.forEach((element) => {
            element.classList.remove('active')
        })
        if (i != 0) {
            prevBlock.classList.add('active')
            prevTab.classList.add('active')
        } else {
            endBlock.classList.add('active')
            endTab.classList.add('active')
        }
    })
}
for (let i = 0; i < portfolioImgNextButton.length; i++) {
    let nextBlock = portfolioBlock[i + 1];
    let firstBlock = portfolioBlock[0];
    let firstTab = portfolioTabs[0]
    let nextTab = portfolioTabs[i + 1]
    portfolioImgNextButton[i].addEventListener('click', function () {
        portfolioBlock.forEach((element) => {
            element.classList.remove('active')
        })
        portfolioTabs.forEach((element) => {
            element.classList.remove('active')
        })
        if (i != 4) {
            nextBlock.classList.add('active')
            nextTab.classList.add('active')
        } else {
            firstBlock.classList.add('active')
            firstTab.classList.add('active')
        }
    })
}
for (let i = 0; i < portfolioImgPrevButton.length; i++) {
    let prevBlock = portfolioBlock[i - 1]
    let thisButton = portfolioImgPrevButton[i];
    let endBlock = portfolioBlock[4];
    let endTab = portfolioTabs[4];
    let prevTab = portfolioTabs[i - 1]
    portfolioImgPrevButton[i].addEventListener('click', function () {
        portfolioBlock.forEach((element) => {
            element.classList.remove('active')
        })
        portfolioTabs.forEach((element) => {
            element.classList.remove('active')
        })
        if (i != 0) {
            prevBlock.classList.add('active')
            prevTab.classList.add('active')
        } else {
            endBlock.classList.add('active')
            endTab.classList.add('active')
        }
    })
}

// POPUP

const popupNumber = document.querySelector('.popup-header__phone')

popupNumber.addEventListener('input', function () {
    if (popupNumber.value.length >= 17) {
        popupLenght = true
    } else popupLenght = false
    checkPopup()
})

const popupCheck = document.querySelector('.popup-header__input')

popupCheck.addEventListener('change', function () {
    if (popupCheck.checked) {
        popupLic = true
    } else popupLic = false;
    checkPopup()
})

let popupLenght = false;
let popupLic = false;

function checkPopup() {
    if (popupLenght == true && popupLic == true) {
        document.querySelector('.popup-header__button').classList.remove('locked')
    } else document.querySelector('.popup-header__button').classList.add('locked')
    if (popupLenght == true) {
        document.querySelector('.popup-header__phone').classList.remove('error')
    }
    if (popupLic == true) {
        document.querySelector('.popup-header__checkbox_error').classList.remove('error')
    }
}

const headerBtn = document.querySelector('.header__button')

headerBtn.addEventListener('click', function () {
    document.querySelector('.popup-header').classList.add('active')
})

const popupBtn = document.querySelector('.popup-header__button');
document.addEventListener('click', function (e) {
    if (!e.target.closest('.header__popup') && !e.target.closest('.header__button')) {
        document.querySelector('.header__popup').classList.remove('active')
    }
})
popupBtn.addEventListener('click', function () {
    if (!popupBtn.classList.contains('locked')) {
        document.querySelector('.header__thanks').classList.add('active')
        document.querySelector('.popup-header').classList.remove('active')
    }
    if (popupLenght != true) {
        document.querySelector('.popup-header__phone').classList.add('error')
    }
    if (popupLic != true) {
        document.querySelector('.popup-header__checkbox_error').classList.add('error')
    } else {
        document.querySelector('.popup-header__checkbox_error').classList.remove('error')
    }

})

// POPUP BURGER

const popupBurgerNumber = document.querySelector('.burger-popup-header__phone')

popupBurgerNumber.addEventListener('input', function () {
    if (popupBurgerNumber.value.length >= 17) {
        popupBurgerLenght = true
    } else popupBurgerLenght = false
    checkBurgerPopup()
})

const popupBurgerCheck = document.querySelector('.burger-popup-header__input')

popupBurgerCheck.addEventListener('change', function () {
    if (popupBurgerCheck.checked) {
        popupBurgerLic = true
    } else popupBurgerLic = false;
    checkBurgerPopup()
})

let popupBurgerLenght = false;
let popupBurgerLic = false;

function checkBurgerPopup() {
    if (popupBurgerLenght == true && popupBurgerLic == true) {
        document.querySelector('.burger-popup-header__button').classList.remove('locked')
    } else document.querySelector('.burger-popup-header__button').classList.add('locked')
    if (popupBurgerLenght == true) {
        document.querySelector('.burger-popup-header__phone').classList.remove('error')
    }
    if (popupBurgerLic == true) {
        document.querySelector('.burger-popup-header__checkbox_error').classList.remove('error')
    }
}

const headerBurgerBtn = document.querySelector('.burger-header__button')

headerBurgerBtn.addEventListener('click', function () {
    headerBurgerBtn.classList.add('active');
    document.querySelector('.burger-popup-header').classList.add('active')
})

const popupBurgerBtn = document.querySelector('.burger-popup-header__button');
popupBurgerBtn.addEventListener('click', function () {
    if (!popupBurgerBtn.classList.contains('locked')) {
        document.querySelector('.burger-header__button').classList.remove('active')
        document.querySelector('.burger-header__thanks').classList.add('active')
        document.querySelector('.burger-popup-header').classList.remove('active')
    }
    if (popupBurgerLenght != true) {
        document.querySelector('.burger-popup-header__phone').classList.add('error')
    }
    if (popupBurgerLic != true) {
        document.querySelector('.burger-popup-header__checkbox_error').classList.add('error')
    } else {
        document.querySelector('.burger-popup-header__checkbox_error').classList.remove('error')
    }

})
document.addEventListener('click', function (e) {
    if (!e.target.closest('.burger-header__popup') && !e.target.closest('.burger-header__button')) {
        document.querySelector('.burger-header__popup').classList.remove('active')
        document.querySelector('.burger-header__button').classList.remove('active')
    }
})

// BURGER

document.querySelector('.header__burger').addEventListener('click', function () { showBurger() })
document.querySelector('.blur').addEventListener('click', function () { showBurger() })

function showBurger() {
    document.querySelector('.header__burger').classList.toggle('open')
    document.querySelector('.blur').classList.toggle('active')
    document.querySelector('.header__burger-menu').classList.toggle('active')
    document.body.classList.toggle('stopped')
}
