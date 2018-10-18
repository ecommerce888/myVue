<!--map的运用2223-->
<template>
    <div>
{{goodsList}}
    </div>
</template>
<script>
/* eslint-disable */

export default {
  data() {
    return {
      goodsList: [
        {
          name: "可乐",
          brand: "可口可乐公司",
          location: "海外",
          size: "300ml",
          number: 10,
          send: "海外仓库",
          price: 3,
          num: 2
        },
        {
          name: "雪碧",
          brand: "可口可乐公司",
          location: "海外",
          size: "270ml",
          number: 10,
          send: "海外仓库",
          price: 3,
          num: 1
        },
        {
          name: "芬达",
          brand: "可口可乐公司",
          location: "海外",
          size: "300ml",
          number: 20,
          send: "海外仓库",
          price: 4,
          num: 4
        },
        {
          name: "美年达",
          brand: "可口可乐公司",
          location: "海外",
          size: "300ml",
          number: 16,
          send: "海外仓库",
          price: 2,
          num: 3
        }
      ]
    };
  },
  computed: {},

  mounted() {
    this.goodsList2();
  },
  methods: {
    goodsList2: function() {
      var _this = this;
      this.goodsList.map(function(goods) {
        _this.$set(goods, "select", false);
      });
    }
  }
};
</script>


