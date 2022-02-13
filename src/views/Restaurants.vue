<template>
  <div class="page page__stores">
    <p>{{ welcomeMessage }}</p>
    <div class="pages__stores-list">
      <StoreList :stores="stores" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from "moment";
import StoreList from '@/components/StoreList/StoreList';

export default {
  name: 'Stores',
  components: {
    StoreList
  },
  data () {
    return {
      currentTime: moment().format('dddd, MMMM Do YYYY, h:mm:ss a'),
      stores: []
    }
  },
  computed: {
    welcomeMessage () {
      return 'Welcome to our restaurants list! Your local time is: ' + this.currentTime;
    }
  },
  methods: {
    getStores() {
      axios.get('/assets/stores/stores.json').then((response) => {
        this.stores = response.data;
      });
    }
  },
  mounted() {
    this.getStores()

    const setTimer = () => setTimeout(() => {
      this.currentTime = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
      setTimer();
    }, 1000);
    setTimer();
  }
}
</script>
