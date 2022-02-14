const TimerMixin = {
    methods: {
        setTimer() {
            setTimeout(() => {
                this.currentTime = new Date(Date.now());
                this.setTimer();
            }, 1000);
        }
    }
}

export default TimerMixin