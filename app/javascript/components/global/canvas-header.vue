<template lang="pug">
header
  .menu-button(:class="{open: menuIsOpened}", @click="menuIsOpened = !menuIsOpened")
    span
    span
    span
    span
  .menu(:class="{activated: menuIsOpened}")
    router-link(to='about') О нас
    router-link(to='catalog') Каталог
    router-link#hidden-main-link(to='/') На Главную
    router-link#logo(to='/')
      .header_decor_triangle
    router-link(to='events') Новости
  personal-cabinet
</template>
<script>
import PersonalCabinet from 'components/global/personal-cabinet.vue';
export default {
  name: '',
  components: {
    PersonalCabinet
  },
  data: () => ({
    menuIsOpened: false,
  }),
};
</script>
<style lang="scss" scoped>
$header-height: 80px;
$footer_height: 80px;
$header-mini-height: 60px;
$standard-font-size: 10px;
$header-critical-size: 768px;
$min_width: 320px;
$filter_size: 70px;
$screen-xsm-min: 481px;
$screen-sm-min: 735px;
$screen-md-min: 959px;
$screen-lg-min: 1200px;
$screen-hd-min: 1420px;
$size-of-stub: 30%;
$size-of-stripe: 70%;
header {
  // position: fixed;
  background: white;
  width: 100vw;
  z-index: 100;
  font-size: 1.2em;
  min-width: $min_width;
  border-bottom: 1px lightgrey solid;
  height: $header-mini-height;

  &.onmain{
    width: 100vw;
  }


  a{
    color: black;
    text-decoration: none;
  }

  #hidden-main-link{
    display: none;

    @media only screen and (max-width: $header-critical-size) {
      display: flex;
    }
  }

  #logo {
      position: relative;
      height:100%;
      width: auto;
      min-width: 120px;
      background:url('~assets/images/canvaslogo.png') no-repeat 50% 70%;
      background-size:100%;

    @media only screen and (max-width: $header-critical-size) {
      display: none;
    }
  }

  &.onmain .header_decor_triangle{
    width: 0;
    height: 0;
    border-left: 80px solid transparent;
    border-right: 80px solid transparent;
    border-top: 40px solid white;
    position: absolute;
    left: calc(50% - 80px);
    bottom:-40px;
    z-index: inherit;
  }

  .menu {
    position: relative;
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    height: 100%;
    width: 80%;
    transition: 0.2s;
    z-index: 150;

    a{
      display: inline-flex;
      height: 100%;
      min-height: 50px;
      align-items: center;

    }

    @media only screen and (max-width: $header-critical-size) {
      position: absolute;
      width: 200px;
      left: -200px;
      top: $header-mini-height;
      flex-direction: column;
      height: 200px;
      background: rgba(100,100,100,0.98);

      &.activated{
        left: 0;
      }

      a{
        box-sizing: border-box;
        padding-left: 20px ;
        width: 100%;
        color: whitesmoke;
        display: flex;
        border-bottom: 1px darkgray solid;
      }
    }
  }

  #profile-block-menu{
    display: flex;
    position: absolute;
    width: 20%;
    right: -20%;
    flex-direction: column;
    height: 150px;
    background: rgba(100,100,100,0.98);
    transition: 0.2s;
    z-index: 150;
    top: $header-mini-height;

    &.activated{
      right: 0;
    }

    @media only screen and (max-width: $header-critical-size) {
      width: 40%;
      right: -40%;
    }


    a{
      display: flex;
      align-content: center;
      box-sizing: border-box;
      padding-left: 10px;
      height: 100%;
      min-height: 50px;
      align-items: center;
      border-bottom: 1px darkgray solid;
      color: whitesmoke;
    }
  }

  .menu-button{
    float: left;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
    width: 50px;
    height: 35px;
    margin: calc((#{$header-mini-height} - 35px)/2)  20px;
    display: none;

    span{
      display: block;
      position: absolute;
      height: 7px;
      width: 100%;
      background: black;
      border-radius: 7px;
      opacity: 1;
      left: 0;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: .25s ease-in-out;
      -moz-transition: .25s ease-in-out;
      -o-transition: .25s ease-in-out;
      transition: .25s ease-in-out;
    }

    span:nth-child(1) {
      top: 0px;
    }

    span:nth-child(2), span:nth-child(3) {
      top: 16px;
    }

    span:nth-child(4) {
      top: 32px;
    }

    &.open span:nth-child(1) {
      top: 16px;
      width: 0%;
      left: 50%;
    }

    &.open span:nth-child(2) {
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    &.open span:nth-child(3) {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }

    &.open span:nth-child(4) {
      top: 16px;
      width: 0%;
      left: 50%;
    }




    @media only screen and (max-width: $header-critical-size) {
      display: inline-block;
    }
  }
}

.zaglushka{
  height: $header-mini-height;
}
</style>
