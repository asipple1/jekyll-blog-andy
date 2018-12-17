import Vue from 'vue'
import marquee from './components/_home-marquee.vue';
 
function init() {
  const marqueeSelector = document.getElementById('home-marquee');
  if (!marqueeSelector) {
    return;
  }
  const maruqeeVue = new Vue({
    el: marqueeSelector,
    render: h => h(marquee),
  });
}
 
export default {
  init,
};