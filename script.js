const seconds = document.querySelector('.seconds');
const minutes = document.querySelector('.minutes');
const minute = document.querySelector('.minute');
const hour = document.querySelector('.hour');

// spikes
for (let s = 0; s < 60; s++) {
    const mSpikeEl = document.createElement('i');
    const sSpikeEl = document.createElement('i');
    mSpikeEl.className = 'spike';
    sSpikeEl.className = 'spike';
    mSpikeEl.style = `--rotate:${6 * s}deg`;
    sSpikeEl.style = `--rotate:${6 * s}deg`;
    mSpikeEl.setAttribute('data-i', s);
    sSpikeEl.setAttribute('data-i', s);

    seconds.append(sSpikeEl);
    minutes.append(mSpikeEl);
}

let minuteAngle = 0;
let secondAngle = 0;

function getTime() {
    const date = new Date();
    const s = date.getSeconds();
    const m = date.getMinutes();

    hour.textContent = date.getHours();
    minute.textContent = m;

    minuteAngle += s === 0 ? 6 : 0;
    minutes.style = `--dRotate :${minuteAngle}deg`;

    secondAngle += 6;
    seconds.style = `--dRotate:${secondAngle}deg`;
}

getTime();
setInterval(getTime, 1000);