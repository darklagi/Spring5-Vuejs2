export default{
    created () {
        console.log(`[Mixins] : ${this.$options.name} created`);
    },

    beforeMount () {
        console.log(`[Mixins] : ${this.$options.name} beforeMount`);
    },

    mounted () {
        console.log(`[Mixins] : ${this.$options.name} mounted`);
    },

    destroyed () {
        console.log(`[Mixins] : ${this.$options.name} destroyed`);
    }
}