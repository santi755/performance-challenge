<template>
  <div class="header">
    <ul class="header__navigation">
      <li v-for="menuItem in menu" :key="menuItem.routeTo" class="header__navigation-item">
        <router-link :to="menuItem.routeTo" class="header__navigation-item-link">{{menuItem.routeName}}</router-link>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
@import './Header.scss';
</style>
<script>
export default {
  name: 'Header',
  data() {
    return {
      menu: [
        {routeTo: '/', routeName: 'Home'},
        {routeTo: '/meals', routeName: 'Carbonara Meals Calculator'},
        {routeTo: '/restaurants', routeName: 'Our Restaurants'},
      ]
    }
  }
}
</script>
