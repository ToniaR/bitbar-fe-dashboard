<template>
    <div id="singleParam" class="card-wrapper small">
        <section :class="['card-icon-wrapper', iconColor]">
            <i :class="icon"></i>
        </section>
        <section>
            <h1 class="card-title">
                2.64 / Master
            </h1>
            <p class="card-description">Some description</p>
        </section>
    </div>
</template>

<script>
    export default {
        props: ['icon', 'icon-color', 'param-title'],
        name: "SingleParamCard",
        data: {
        }
    }
</script>

<style scoped>

</style>