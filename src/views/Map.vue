<template>
  <div>
  <el-row :gutter="20" class="rowMap">
        <el-col :span="8"
          >城市:
          <el-input
            style="width:200px"
            type="text"
            show-word-limit
            placeholder="请输入城市"
            v-model="location"
            maxlength="10"
          ></el-input
        ></el-col>
        <el-col :span="8"
          >地点:
          <el-input
            style="width:200px"
            type="text"
            show-word-limit
            placeholder="请输入地点"
            v-model="keyword"
            maxlength="10"
          ></el-input
        ></el-col>
      </el-row>

      <baidu-map
        class="map"
        ref="map"
        :center="{ lng: 116.404, lat: 39.915 }"
        :zoom="15"
        :scroll-wheel-zoom="true"
        @ready="map_handler"
      >
        <bm-local-search
          :keyword="keyword"
          :auto-viewport="true"
          :panel="false"
          :location="location"
        ></bm-local-search>
      </baidu-map>
  </div>
</template>

<script>
export default {
  name: "Map",
  data() {
    return {
       location: "",
      keyword: "",
      coordinate:''
   
    };
  },
  methods:{
      map_handler({ BMap, map }) {
      // let _this = this;
      let that = this;
      this.BMap = BMap;
      this.map = map;

      var a = map.addEventListener("click", function(e) {
        map.clearOverlays();
        that.coordinate= e.point.lng + "," + e.point.lat;
        alert(that.coordinate)
        var marker = new BMap.Marker(new BMap.Point(e.point.lng, e.point.lat));
        map.addOverlay(marker);
      });
    },
  }
};
</script>
<style>
.rowMap {
  margin-bottom: 20px;
}
.map{
  height: 700px;
}
</style>
