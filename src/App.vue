<template>
  <div class="full-width content-wrapper">
    <div v-if="exploration">Today is exploration Friday! version 2.64</div>
    <workflow-card name="World" />
    <timeline-card/>
    <section class="single-params-group-wrapper">
      <single-param id="masterVersion" icon="fas fa-code-branch" icon-color="violet" param="master"/>
      <single-param id="develVersion" icon="fas fa-code-branch" icon-color="violet" param="devel"/>
      <single-param id="bugs" icon="fas fa-bug" icon-color="blue" param="bugs"/>
      <single-param id="issues" icon="fas fa-thumbtack" icon-color="blue" param="issues"/>
      <single-param id="currentBranch" icon="fas fa-code-branch" icon-color="green" param="current"/>
    </section>
  </div>
</template>
<script>
import './assets/app.scss'

import WorkflowCard from './components/WorkflowCard.vue'
import TimelineCard from './components/TimelineCard.vue'
import SingleParam from './components/SingleParamCard.vue'

export default {
    data() {
      return {
        exploration: false
      }
    },
    components: {
      WorkflowCard,
      TimelineCard,
      SingleParam
    }
}
</script>
