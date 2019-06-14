<template>
    <div id="singleParam" class="card-wrapper small">
        <section :class="['card-icon-wrapper', iconColor]">
            <i :class="icon"></i>
        </section>
        <section class="card-text-wrapper">
            <h1 class="card-title">
                {{ title }}
            </h1>
            <p class="card-description">{{ description }}</p>
        </section>
    </div>
</template>

<script>
    export default {
        props: ['icon', 'icon-color', 'param-title', 'param'],
        name: "SingleParamCard",
        data() {
            return {
                title: '',
                description: ''
            }
        },
        methods: {
            setParams(val) {
                switch (val) {
                    case 'master':
                        this.title = '2.77 / Master';
                        this.description = 'Current version';
                        break;
                    case 'devel':
                        this.title = '2.77 / Devel';
                        this.description = 'Current version';
                        break;
                    case 'bugs':
                        this.title = '1';
                        this.description = 'Bugs to fix';
                        break;
                    case 'issues':
                        this.title = '3';
                        this.description = 'Issues in progress';
                        break;
                    case 'current':
                        this.title = 'Devel';
                        this.description = 'Current branch';
                        break;
                }
            }
        },
        created() {
            this.setParams(this.param)
        }
    }
</script>

<style scoped>

</style>