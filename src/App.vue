<template>
  <div class="full-width content-wrapper">
    <!--<workflow-card name="World" />-->
    <timeline-card/>
    <section class="single-params-group-wrapper">
      <single-param id="masterVersion" icon="fas fa-code-branch" icon-color="violet"/>
      <single-param id="develVersion" icon="fas fa-code-branch" icon-color="violet"/>
      <single-param id="bugs" icon="fas fa-bug" icon-color="blue"/>
      <single-param id="issues" icon="fas fa-thumbtack" icon-color="blue"/>
      <single-param id="currentBranch" icon="fas fa-code-branch" icon-color="green"/>
    </section>
  </div>
</template>
<script>
import './assets/app.scss'

import WorkflowCard from './components/WorkflowCard.vue'
import TimelineCard from './components/TimelineCard.vue'
import SingleParam from './components/SingleParamCard.vue'

export default {
  components: {
    WorkflowCard,
    TimelineCard,
    SingleParam
  }
}
</script>
