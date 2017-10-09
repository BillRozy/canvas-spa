<template>
<div class="scrollable-section">
  <div class="transparent-block300">
  </div>
  <div v-show="onPriceTab" id="photoslide" class="whitestripe">
    <h1>- ФОТОСЪЕМКА -</h1>
    <h2>средняя стоимость за час работы</h2>
    <div class="slider-section">
      <input type="text" class="slider-left-value" />
      <div class="slider"></div>
      <input type="text" class="slider-right-value" />
    </div>

    <div class="two-buttons-adaptive-pane">
      <input type="submit" value="ИСКАТЬ" class="btn-search" @click="onPriceTab = false;"/>
      <div class="swap-section" @click="showVideo">
        <div class="swap-section-button"></div>
        <div>К ВИДЕО</div>
      </div>
    </div>
  </div>
  <div v-show="!onPriceTab" id="photoslide-filters" class = "whitestripe">
    <div class = "filter-and-controls-section">
      <div class="filter-section-back-step">
        К ЦЕНЕ
        <div class="filter-section-back-step-button" @click="onPriceTab = true;">
        </div>
      </div>
    <div class = "filter-section">

      <a class="filter-section-item"  ontouchstart="$(this).toggleClass('hover');" onclick="setAndSubmit('#photo_filter_form', '#photo_category_field', 'TFP')">
        <div class="filter-section-item-flipper">
          <div class="filter-section-item-flipper-front" id="filter-item-front-1"></div>
          <div class="filter-section-item-flipper-back">TFP</div>
        </div>
      </a>
      <a class="filter-section-item" ontouchstart="$(this).toggleClass('hover');" onclick="setAndSubmit('#photo_filter_form', '#photo_category_field', 'Fashion')">
        <div class="filter-section-item-flipper">
          <div class="filter-section-item-flipper-front" id="filter-item-front-2"></div>
          <div class="filter-section-item-flipper-back">FASHION</div>
        </div>
      </a>
      <a class="filter-section-item" ontouchstart="$(this).toggleClass('hover');" onclick="setAndSubmit('#photo_filter_form', '#photo_category_field', 'Свадебная')">
        <div class="filter-section-item-flipper">
          <div class="filter-section-item-flipper-front" id="filter-item-front-3"></div>
          <div class="filter-section-item-flipper-back">СВАДЕБНАЯ</div>
        </div>
      </a>
      <a class="filter-section-item" ontouchstart="$(this).toggleClass('hover');" onclick="setAndSubmit('#photo_filter_form', '#photo_category_field', 'Детская и семейная')">
        <div class="filter-section-item-flipper">
          <div class="filter-section-item-flipper-front" id="filter-item-front-4"></div>
          <div class="filter-section-item-flipper-back" >ДЕТСКАЯ И СЕМЕЙНАЯ</div>
        </div>
      </a>
      <a class="filter-section-item" ontouchstart="$(this).toggleClass('hover');" onclick="setAndSubmit('#photo_filter_form', '#photo_category_field', 'Праздники')">
        <div class="filter-section-item-flipper">
          <div class="filter-section-item-flipper-front" id="filter-item-front-5"></div>
          <div class="filter-section-item-flipper-back" >ПРАЗДНИКИ</div>
        </div>
      </a>
      <a class="filter-section-item" ontouchstart="$(this).toggleClass('hover');" onclick="setAndSubmit('#photo_filter_form', '#photo_category_field', 'Концерты и вечеринки')">
        <div class="filter-section-item-flipper">
          <div class="filter-section-item-flipper-front" id="filter-item-front-6"></div>
          <div class="filter-section-item-flipper-back" >КОНЦЕРТЫ И ВЕЧЕРИНКИ</div>
        </div>
      </a>
      <a class="filter-section-item" ontouchstart="$(this).toggleClass('hover');" onclick="setAndSubmit('#photo_filter_form', '#photo_category_field', 'Персональная')">
        <div class="filter-section-item-flipper">
          <div class="filter-section-item-flipper-front" id="filter-item-front-7"></div>
          <div class="filter-section-item-flipper-back">ПЕРСОНАЛЬНАЯ</div>
        </div>
      </a>
      <a class="filter-section-item" ontouchstart="$(this).toggleClass('hover');" onclick="setAndSubmit('#photo_filter_form', '#photo_category_field', 'Love Story')">
        <div class="filter-section-item-flipper">
          <div class="filter-section-item-flipper-front" id="filter-item-front-8"></div>
          <div class="filter-section-item-flipper-back" >LOVE STORY</div>
        </div>
      </a>

      <a class="filter-section-item" ontouchstart="$(this).toggleClass('hover');" onclick="setAndSubmit('#photo_filter_form', '#photo_category_field', 'Коммерческая')">
        <div class="filter-section-item-flipper">
          <div class="filter-section-item-flipper-front" id="filter-item-front-9"></div>
          <div class="filter-section-item-flipper-back" >КОММЕРЧЕСКАЯ</div>
        </div>
      </a>

      <a class="filter-section-item" ontouchstart="$(this).toggleClass('hover');" onclick="setAndSubmit('#photo_filter_form', '#photo_category_field', 'Интерьерная')">
        <div class="filter-section-item-flipper">
          <div class="filter-section-item-flipper-front" id="filter-item-front-10"></div>
          <div class="filter-section-item-flipper-back" >ИНТЕРЬЕРНАЯ</div>
        </div>
      </a>

      <a class="filter-section-item" ontouchstart="$(this).toggleClass('hover');" onclick="setAndSubmit('#photo_filter_form', '#photo_category_field', 'Предметная')">
        <div class="filter-section-item-flipper">
          <div class="filter-section-item-flipper-front" id="filter-item-front-11"></div>
          <div class="filter-section-item-flipper-back" >ПРЕДМЕТНАЯ</div>
        </div>
      </a>

      <a class="filter-section-item" ontouchstart="$(this).toggleClass('hover');" onclick="setAndSubmit('#photo_filter_form', '#photo_category_field', 'Другие')">
        <div class="filter-section-item-flipper">
          <div class="filter-section-item-flipper-front" id="filter-item-front-12"></div>
          <div class="filter-section-item-flipper-back" >ДРУГИЕ</div>
        </div>
      </a>
    </div>
      <div class="filter-section-next-step">
      </div>
      <!--<button id=btn-hidefilters>СКРЫТЬ РАЗДЕЛЫ</button>-->
    </div>
  </div>
</div>
</template>
<script>
import noUiSlider from 'nouislider';
export default {
  data: () => ({
    onPriceTab: true,
  }),
  methods: {
    showVideo() {
      this.$parent.swapVideo();
    },
  },
  mounted() {
    const slider = this.$el.querySelector('.slider');
    noUiSlider.create(slider, {
      start: [ 0, 100 ],
      step: 1,
      connect: true,
      range: {
        'min': 0,
        'max': 100,
      },
    });
    const snapValues = [
      this.$el.querySelector('.slider-left-value'),
      this.$el.querySelector('.slider-right-value'),
    ];

    slider.noUiSlider.on('update', function(values, handle) {
      snapValues[handle].value = values[handle].toFixed();
    });
  },
};
</script>
<style lang="scss" scoped>
@import '~assets/scss/startsection.scss'
</style>
