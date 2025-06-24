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

function updateClock() {
    const now = new Date();

    const milliseconds = now.getMilliseconds();
    const secondsValue = now.getSeconds() + milliseconds / 1000;
    const minutesValue = now.getMinutes() + secondsValue / 60;
    const hoursValue = now.getHours() % 12 + minutesValue / 60;
    const secondAngle = secondsValue * 6;
    const minuteAngle = minutesValue * 6;
    const hourAngle = hoursValue * 30;

    seconds.style.setProperty('--dRotate', `${secondAngle}deg`);
    minutes.style.setProperty('--dRotate', `${minuteAngle}deg`);

    hour.textContent = now.getHours();
    minute.textContent = now.getMinutes();

    requestAnimationFrame(updateClock);
}

updateClock(); // Start animation loop