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

export default {
  name: 'app',
  data: function () {
    return {
      text: '你好'
    }
  },
  components:{Topbar,ResumeEditor,ResumerPreview}
}
</script>

<style>
  .page{
    height: 100vh;
    display: flex;
    flex-direction: column;
    background:#eaebec;
  }
  .page>main{
    
  }
  .page>main{
    display: flex;
    flex-grow: 1;  
    width:100%;
    align-self:center;
    min-width: 1024px;
    max-width: 1440px;
    margin: 16px 0;
    padding:0 16px;
    justify-content: space-between;
  }
  #ResumerPreview{
    flex-grow:1;
    margin-left:16px;
  }
</style>
