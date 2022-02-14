<template>
  <div class="page page__stores">
    <p>{{ welcomeMessage }}</p>
    <div class="pages__stores-list">
      <StoreList :stores="stores" />
    </div>
  </div>
</template>

<script>
import { getStores } from '@/api/store.api.js';
import StoreList from '@/components/StoreList/StoreList';
import TimerMixin from '@/mixins/TimerMixin.js';

export default {
  name: 'Stores',
  mixins: [TimerMixin],
  components: {
    StoreList
  },
  data () {
    return {
      currentTime: new Date(Date.now()),
      stores: []
    }
  },
  computed: {
    welcomeMessage () {
      return 'Welcome to our restaurants list! Your local time is: ' + this.currentTime;
    }
  },
  mounted() {
    getStores().then((response) => {
      this.stores = response.data;
    });

    this.setTimer();
  }
}
</script>
