<template>
  <div>
    <van-cell center :title="name" :label="`${name}-${author}`">
      <template #right-icon>
        <van-icon name="play-circle-o" size="0.6rem" @click="playFn"/>
      </template>
    </van-cell>
  </div>
</template>

<script>
// import { getSongByIdAPI, getLyricByIdApi } from "@/api";

export default {
  props: {
    name: String,
    author: String,
    id: Number,
  },
  methods: {
    playFn() {
    this.$router.push({
      path:'/play',
      query :{
        id:this.id
      }
    })
  },
  }
};
</script>

<style></style>
