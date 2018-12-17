<template>
  <div class="home-marquee" :style="{ backgroundImage: `url(${imageUrl})` }">
    <div class="container home-marquee__container">
      <h1 class="h1 home-marquee__headline">Andy Sipple</h1>
      <div class="font-yellow home-marquee__subhead">Web Developer</div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    name: 'marquee',
    data () {
      return {
        what: 'this is from vue',
        gifySearchTag: '',
        imageUrl: ''
      }
    },
    mounted() {
      this.menuLinkHover();
      this.getGify();
      window.addEventListener('resize', () => {
        this.menuLinkHover();
      });
    },
    methods: {
      menuLinkHover() {
        const navLinks = document.getElementsByClassName('navigation__item');
        const navBar = document.querySelector('.navigation');
        const main = document.querySelector('.home-marquee');
        main.addEventListener("mouseenter", (e) => {
          main.classList.remove('home-marquee--image');
        });
        Array.from(navLinks).forEach((link) => {
          link.addEventListener("mouseover", (e) => {
            this.gifySearchTag = link.getAttribute('data-gify');
            main.classList.add('home-marquee--image');
            this.getGify();
          });
          link.addEventListener("mouseout", (e) => {
            this.gifySearchTag = '';
            this.imageUrl = '';
          });
  
        });
      },
      getGify() {
        axios.get(`//api.giphy.com/v1/stickers/random?tag=${this.gifySearchTag}&api_key=S2yXMMc8VI8qHZNdR2PWH086Ff8fI52w&limit=1&rating=g`).then(response => {
          this.imageUrl = response.data.data.images.original.url
        });
      }
    }
  }
</script>