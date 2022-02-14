<template>
  <div class="store-list">
    <p>Here you can find all of our restaurants. We have {{ storesCount }} stores right now!</p>
    <Store class="store-list__item" :title="store.name" :photo="store.image" :location="store.location" v-for="store in storesWithImages" :key="store.id" />
    <infiniteScroll @intersect="intersect"/>
  </div>
</template>
<style lang="scss">
@import './StoreList.scss';
</style>
<script>
import Store from '@/components/Store/Store';
import InfiniteScroll from '@/components/InfiniteScroll/InfiniteScroll';

export default {
  name: 'StoreList',
  data() {
    return {
      pagination: {
        page: 1,
        itemsByPage: 10
      }
    }
  },
  components: {
    Store,
    InfiniteScroll
  },
  props: {
    stores: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    storesWithImages () {
      let lastPost = this.pagination.page * this.pagination.itemsByPage;
      return this.stores.slice(0, lastPost).map((store) => {
        store['image'] = 'https://via.placeholder.com/300?text=' + store.name;

        return store;
      });
    },
    storesCount () {
      return this.stores.length;
    }
  },
  methods: {
    intersect() {
      this.pagination.page++;
    }
  }
}
</script>
