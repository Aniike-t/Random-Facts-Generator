
//fetching facts from API
function fetchFact() {
    fetch('https://api.api-ninjas.com/v1/facts?limit=1', {
        headers: {
            'X-Api-Key': 'YOUR-KEY-HERE' // your key goes here 
        },
    })
        .then(res => res.json())
        .then(data => {
            const fact = data[0]?.fact;
            const para = document.querySelector('p');
            para.innerHTML = fact || "Retry...";
            console.log(fact);

        })
        .catch(err => {
            console.log(err);
        });
}

//calling function on first go 
fetchFact()

// Load fact on each click
const btn = document.querySelector('button')
btn.addEventListener('click', () => {
    fetchFact()
})

//Circle code goes here 
var $circle = $('.circle');

function moveCircle(e) {
    TweenLite.to($circle, 0.3, {
        css: {
            left: e.pageX,
            top: e.pageY
        }
    });
}

$(window).on('mousemove', moveCircle);