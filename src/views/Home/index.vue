<template>
  <div>
    <p class="title">推荐歌单</p>
    <van-row gutter="10">
      <van-col span="8" v-for="item in list" :key="item.id"
        ><van-image width="100" height="100" :src="item.picUrl" />
        <p class="song_name">{{ item.name }}</p></van-col
      >
    </van-row>
    <p class="title">最新音乐</p>
    <!-- <van-cell
      center
      :title="item.name"
      :label="`${
        item.song &&
        item.song.artists &&
        item.song.artists[0] &&
        item.song.artists[0].name
      }-${item.name}`"
      v-for="item in newList"
      :key="item.id"
      >
      <template #right-icon>
        <van-icon name="play-circle-o" size="0.6rem" />
      </template>
    </van-cell> -->
    <song-item
      v-for="item in newList"
      :key="item.id"
      :name="item.name"
      :author="
        item.song &&
        item.song.artists &&
        item.song.artists[0] &&
        item.song.artists[0].name
      "
      :id="item.id"
    ></song-item>
  </div>
</template>

<script>
import { recommendSongListApi, newSongApi } from "@/api";
import SongItem from "@/components/SongItem.vue";
export default {
  components: { SongItem },
  name: "MusicDemoIndex",
  data() {
    return {
      list: [],
      newList: [],
    };
  },
  methods: {
    async getRecommendSongList() {
      try {
        const res = await recommendSongListApi({
          limit: 6,
        });

        this.list = res.data.result;
      } catch (e) {
        console.log(e);
      }
    },
    async getNewSongApi() {
      try {
        const res = await newSongApi();
        this.newList = res.data.result;
        console.log(this.newList);
      } catch (e) {
        console.log(e);
      }
    },
  },

  mounted() {
    this.getRecommendSongList();
    this.getNewSongApi();
  },
};
</script>

<style scoped>
/* 标题 */
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}
/* 推荐歌单 - 歌名 */
.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}
</style>
