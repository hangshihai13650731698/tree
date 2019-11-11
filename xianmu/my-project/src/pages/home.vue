<template>
  <div>
    <dizhi />
    <Search />
    <Grid />
    <navImg />
    <Diver />
    <paixun/>
    <Card />
  </div>
</template>

<script>
import Search from "../components/Search.vue";
import dizhi from "../components/dizhi.vue";
import Diver from "../components/Diver.vue";
import Grid from "../components/Grid.vue";
import paixun from "../components/paixun.vue";
import navImg from "../components/navImg.vue";
import Card from "../components/Card.vue";
export default {
  //  props: {
  //   columnsPlaceholder: String
  // },
  components: {
    dizhi,
    Search,
    Grid,
    Diver,
    paixun,
    Card,
    navImg
  }
};
</script>

