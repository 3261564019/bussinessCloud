<template>
  <div>
        <router-view/>
        <tab-bar
            v-show="$route.path=='/'||$route.path=='/announcement'||$route.path=='/training'||$route.path=='/mine'">
        </tab-bar>
  </div>
</template>
<script>
    import tabBar from './components/tabBar/index.vue';

    export default {
        data() {
            return {}
        },

        components: {
            tabBar
        },
        mounted() {
        },
        methods: {}
    }
</script>
<style>

</style>
