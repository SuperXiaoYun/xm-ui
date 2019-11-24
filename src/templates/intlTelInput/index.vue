<template>
  <div class="intl-tel-input allow-dropdown" v-clickoutside="handleClose">
    <div class="flag-container">
      <div class="selected-flag"
           :title="currentData.name + ': +' + currentData.dialCode"
           @click="hideSubMenu = !hideSubMenu">
        <div :class="'iti-flag ' + currentData.code"></div>
        <div class="iti-arrow"></div>
      </div>
      <ul class="country-list" v-show="!hideSubMenu">
        <li>
          <span>搜索:</span>
          <input type="text" prefix="搜索国家" placeholder="Input country name" v-model="keyword"
                    @input="filterResult" style="padding:0;height: 30px;" />
        </li>
        <li v-for="item in frontCountriesArray"
            :key="item.id"
            :class="'country ' + (item.code == currentCode ? 'highlight' : '')"
            @click="currentCode = item.code; hideSubMenu = true; setCountry(item);">
          <div class="flag-box">
            <div :class="'iti-flag ' + item.code"></div>
          </div>
          <span class="country-name">{{ item.name }}</span>
          <span class="dial-code">+{{ item.dialCode }}</span>
        </li>
        <li class="divider"></li>
        <li v-for="item in defaultResult"
            :key="item.id"
            :class="'country ' + (item.code == currentCode ? 'highlight' : '')"
            @click="currentCode = item.code; hideSubMenu = true; setCountry(item);">
          <div class="flag-box">
            <div :class="'iti-flag ' + item.code"></div>
          </div>
          <span class="country-name">{{ item.name }}</span>
          <span class="dial-code">+{{ item.dialCode }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
  import countries from './countryList'

  const clickoutside = {
    // 初始化指令
    bind(el, binding, vnode) {
      function documentHandler(e) {
        // 这里判断点击的元素是否是本身，是本身，则返回
        if (el.contains(e.target)) {
          return false;
        }
        // 判断指令中是否绑定了函数
        if (binding.expression) {
          // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
          binding.value(e);
        }
      }
      // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
      el.__vueClickOutside__ = documentHandler;
      document.addEventListener('click', documentHandler);
    },
    update() { },
    unbind(el, binding) {
      // 解除事件监听
      document.removeEventListener('click', el.__vueClickOutside__);
      delete el.__vueClickOutside__;
    },
  };

  export default {
    props: {
      toFront: {
        type: Array,
        default: () => {
          return []
        }
      },
      countryCode: {
        type: String,
        default: Object.keys(countries)[43],
        validator(code) {
          var clearCode = String(code).toLowerCase()
          return !!countries[clearCode]
        }
      }
    },

    data() {
      return {
        currentCode: this.countryCode,
        hideSubMenu: true,
        keyword: '',
        defaultResult: {},
      }
    },

    computed: {
      currentData() {
        return countries[this.currentCode]
      },
      frontCountriesArray() {
        const toFrontCodes = {}
        this.toFront.forEach((code) => {
          const stringCode = String(code)
          const needObj = countries[stringCode]

          if(needObj) {
            toFrontCodes[stringCode] = needObj
          }
        })
        return toFrontCodes
      },
      countriesArray() {
        const countryCopie = { ...countries }
        this.toFront.forEach((code) => {
          delete countryCopie[code]
        })
        return countryCopie
      },
    },

    watch: {
      countryCode(newCode) {
        this.setCountry(countries[newCode])
      },
      hideSubMenu(value) {
        if (value) {
          this.keyword = '';
          this.defaultResult = JSON.parse(JSON.stringify(this.countriesArray));
        }
      }
    },

    directives: { clickoutside },

    methods: {
      setCountry(item) {
        this.currentCode = item.code
        this.toFront.push(String(item.code))
        this.$emit('excountry', item)
      },
      filterResult() {
        if (!this.keyword)
          this.defaultResult = JSON.parse(JSON.stringify(this.countriesArray));
        else {
          var searchResult = {};
          for (var key in this.countriesArray) {
            if (new RegExp(this.keyword, 'i').test(this.countriesArray[key].name)) {
              searchResult[key] = this.countriesArray[key];
            }
          }
          this.defaultResult = searchResult; //Object.values(this.countriesArray).filter(value => new RegExp(this.keyword, 'i').test(value.name));
        }
      },
      handleClose(e) {
        this.hideSubMenu = true;
      },
    },

    mounted() {
      this.$emit('excountry', countries[this.countryCode]);
      this.defaultResult = JSON.parse(JSON.stringify(this.countriesArray));
    }
  }
</script>


<style lang="scss" scoped>
  @import "intl.css";

  .intl-tel-input {
    height: 40px;
    color: #666;
    font-size: 14px;
    .country-list {
      width: 335px;
      height: 400px;
      margin-top: 2px;
    }
  }
</style>
