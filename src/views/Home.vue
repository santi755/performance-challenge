<template>
  <div class="page page__home">
    <p>{{ welcomeMessage }}</p>
  </div>
</template>

<script>
import TimerMixin from '@/mixins/TimerMixin.js';

export default {
  name: 'Home',
  mixins: [TimerMixin],
  data () {
    return {
      currentTime: new Date(Date.now())
    }
  },
  computed: {
    welcomeMessage () {
      return 'Welcome! Your local time is: ' + this.currentTime;
    }
  },
  mounted() {
    this.setTimer();
  }
}
</script>
