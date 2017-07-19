<template>
  <div class="page">
    <header>
        <Topbar/>
    </header>
    <main>
      <ResumeEditor/>
      <ResumerPreview/>
    </main>
  </div>
</template>

<script>

import './assets/reset.css'
import 'normalize.css'
import Topbar from './components/Topbar'
import ResumeEditor from './components/ResumeEditor'
import ResumerPreview from './components/ResumerPreview'
import icons from './assets/icons'
import store from './store/index'

export default {
  name: 'app',
  store,
  components:{Topbar,ResumeEditor,ResumerPreview},
  created(){
    document.body.insertAdjacentHTML('afterbegin',icons)
  }
}
</script>

<style lang="scss">
  .page{
    height: 100vh;
    display: flex;
    flex-direction: column;
    background:#eaebec;
    >main{
      flex-grow: 1;
    }
    >main{
      display: flex;
      width:100%;
      align-self:center;
      min-width: 1024px;
      max-width: 1440px;
      margin: 16px 0;
      padding:0 16px;
      justify-content: space-between;
    }
  }
  #ResumerPreview{
    flex-grow:1;
    margin-left:16px;
  }
  svg.icon{
    height: 1em;
    width: 1em;
    fill: currentColor;
    vertical-align: -0.1em;
    font-size:16px;
  }
</style>
