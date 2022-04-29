const deg = 6;
const h_needle = document.querySelector('.ch');
const m_needle = document.querySelector('.cm');
const s_needle = document.querySelector('.cs');

function clock(){
    let current = new Date();
    let hr = current.getHours() * 30;  // getting current time rotating
    let mr = current.getMinutes() * deg;
    let sr = current.getSeconds() * deg;
    
    // add this (hr) + (mr/12)
    h_needle.style.transform = `rotateZ(${(hr) + (mr/12) }deg)`;
    m_needle.style.transform = `rotateZ(${mr}deg)`;
    s_needle.style.transform = `rotateZ(${sr}deg)`;
    
    
    document.getElementById('Digital-hour').innerHTML = hr/30;	
    document.getElementById('Digital-minutes').innerHTML = mr/6;
    document.getElementById('Digital-seconds').innerHTML = sr/6;
}

setInterval(clock,0);