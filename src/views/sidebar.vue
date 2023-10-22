<template>
  <div class="MenuArea">
    <div class="MenuElements">
      <router-link
          v-for="icon in icons"
          :key="icon.name"
          :to="`/${icon.name}`"
          class="A"
      >
        <div
            class="ActiveTrueStateHoveredBadgeNone"
            :class="getIconClass(icon.name)"
            @mouseover="hoveredIcon = icon.name"
            @mouseout="hoveredIcon = ''"
        >
          <div class="IconContainer">
            <div class="Icon">
              <img
                  :src="getIconSrc(icon.name)"
                  alt="Icon"
                  class="Vector"
                  :class="getIconClass(icon.name)"
                  width="64"
                  height="64"
              />
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import uploadNormal from '../assets/icons/upload_normal.png';
import uploadHover from '../assets/icons/upload_hover.png';
import uploadSelected from '../assets/icons/upload_selected.png';
import uploadSelectedHover from '../assets/icons/upload_selected_hover.png';
import historyNormal from '../assets/icons/history_normal.png';
import historyHover from '../assets/icons/history_hover.png';
import historySelected from '../assets/icons/history_selected.png';
import historySelectedHover from '../assets/icons/history_selected_hover.png';
import settingsNormal from '../assets/icons/settings_normal.png';
import settingsHover from '../assets/icons/settings_hover.png';
import settingsSelected from '../assets/icons/settings_selected.png';
import settingsSelectedHover from '../assets/icons/settings_selected_hover.png';
import faqNormal from '../assets/icons/faq_normal.png';
import faqHover from '../assets/icons/faq_hover.png';
import faqSelected from '../assets/icons/faq_selected.png';
import faqSelectedHover from '../assets/icons/faq_selected_hover.png';

export default {
  name: 'Sidebar',
  data() {
    return {
      currentRoute: '',
      hoveredIcon: '',
      icons: [
        { name: 'upload', label: 'Upload' },
        { name: 'history', label: 'History' },
        { name: 'settings', label: 'Settings' },
        { name: 'faq', label: 'FAQ' },
      ],
      iconImages: {
        upload_normal: uploadNormal,
        upload_hover: uploadHover,
        upload_selected: uploadSelected,
        upload_selected_hover: uploadSelectedHover,
        history_normal: historyNormal,
        history_hover: historyHover,
        history_selected: historySelected,
        history_selected_hover: historySelectedHover,
        settings_normal: settingsNormal,
        settings_hover: settingsHover,
        settings_selected: settingsSelected,
        settings_selected_hover: settingsSelectedHover,
        faq_normal: faqNormal,
        faq_hover: faqHover,
        faq_selected: faqSelected,
        faq_selected_hover: faqSelectedHover,
      },
    };
  },
  created() {
    this.currentRoute = this.$route.path;
    const router = useRouter();

    // 监听路由变化
    router.afterEach((to) => {
      this.currentRoute = to.path;
    });

    // 添加滚动事件监听器
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // 获取滚动的垂直距离
      const scrollY = window.scrollY || window.pageYOffset;

      // 根据需要调整侧边栏的位置
      // 例如：你可以使用 this.$refs.MenuArea 来引用 .MenuArea 元素
      // 然后设置其 top 属性
      // this.$refs.MenuArea.style.top = `${scrollY}px`;
    },
    getIconClass(iconName) {
      return {
        'selected': this.currentRoute === `/${iconName}`,
        'hovered': this.hoveredIcon === iconName,
      };
    },
    getIconSrc(iconName) {
      return this.iconImages[`${iconName}_${
          this.currentRoute === `/${iconName}` && this.hoveredIcon === iconName
              ? 'selected_hover'
              : this.currentRoute === `/${iconName}`
                  ? 'selected'
                  : this.hoveredIcon === iconName
                      ? 'hover'
                      : 'normal'
      }`];
    },
  },
};
</script>

<style scoped>
/* MenuArea */
.MenuArea {
  position: fixed;
  top: 0; /* 你可以根据需要设置初始位置 */
  left: 0; /* 你可以根据需要设置初始位置 */
  height: 100vh;
  align-self: stretch;
  background: #F2F4F5;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}

/* MenuElements */
.MenuElements {
  align-self: stretch;
  flex: 1 1 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}

/* A */
.A {
  width: 104px;
  padding-top: 8px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}

/* IconContainer */
.IconContainer {
  border-radius: 32px;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
}

/* Icon */
.Icon {
  width: 104px;
  height: 80px;
  position: relative;
}

/* Vector */
.Vector {
  width: 104px;
  height: 80px;
  position: absolute;
}

/* LabelText */
.LabelText {
  align-self: stretch;
  text-align: center;
  font-size: 12px;
  font-family: Roboto;
  line-height: 16px;
  word-wrap: break-word;
}

</style>
