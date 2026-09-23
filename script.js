document.addEventListener("DOMContentLoaded", function () {

    /* TREATMENT CAROUSEL */

    const carousel =
        document.getElementById("carousel");

    const next =
        document.getElementById("next");

    const previous =
        document.getElementById("previous");


    if (carousel && next && previous) {

        next.addEventListener("click", function () {

            carousel.scrollBy({
                left: carousel.clientWidth * 0.7,
                behavior: "smooth"
            });

        });


        previous.addEventListener("click", function () {

            carousel.scrollBy({
                left: -carousel.clientWidth * 0.7,
                behavior: "smooth"
            });

        });

    }



    /* TESTIMONIAL CAROUSEL */

    const quotes = [

        {
            text: "“A calm, welcoming experience and everything was explained clearly.”",
            name: "— Sample patient feedback"
        },

        {
            text: "“The consultation felt personalised rather than rushed.”",
            name: "— Sample patient feedback"
        },

        {
            text: "“This is a test website — but the carousel works!”",
            name: "— Your demo website"
        }

    ];


    let currentQuote = 0;


    const quote =
        document.getElementById("quote");

    const quoteName =
        document.getElementById("quoteName");


    function showQuote() {

        quote.textContent =
            quotes[currentQuote].text;

        quoteName.textContent =
            quotes[currentQuote].name;

    }


    document
        .getElementById("quoteNext")
        ?.addEventListener("click", function () {

            currentQuote++;

            if (currentQuote >= quotes.length) {
                currentQuote = 0;
            }

            showQuote();

        });


    document
        .getElementById("quotePrevious")
        ?.addEventListener("click", function () {

            currentQuote--;

            if (currentQuote < 0) {
                currentQuote = quotes.length - 1;
            }

            showQuote();

        });

});
/* FAQ ACCORDION */

const faqQuestions =
    document.querySelectorAll(".faq-question");


faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const item =
            question.parentElement;


        item.classList.toggle("active");


        faqQuestions.forEach(function (otherQuestion) {

            const otherItem =
                otherQuestion.parentElement;


            if (otherItem !== item) {

                otherItem.classList.remove("active");

            }

        });

    });

});
