document.addEventListener('DOMContentLoaded', () => {
    let interval;
    const inputTime = document.getElementById('input_time');
    const startButton = document.querySelector('.start');
    const restartButton = document.querySelector('.restart');

    const updateDuration = (duration) => {
        const days = Math.floor(duration / (1000 * 60 * 60 * 24));
        const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((duration % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    };

    const startCountdown = (countDownDate) => {
        interval = setInterval(() => {
            const now = new Date().getTime();
            const duration = countDownDate - now;

            if (duration < 0) {
                alert("Please don't select past date");
                clearInterval(interval);
                updateDuration(0);
                return;
            }
            updateDuration(duration);
        }, 1000);
    };

    startButton.addEventListener('click', (event) => {
        event.preventDefault();
        const dateTimeInput = inputTime.value;
        if (interval) {
            clearInterval(interval);
        }
        if (dateTimeInput) {
            startCountdown(new Date(dateTimeInput).getTime());
        }
    });

    restartButton.addEventListener('click', () => {
        if (interval) {
            clearInterval(interval);
        }
        updateDuration(0);
        inputTime.value = '';
    });
});
