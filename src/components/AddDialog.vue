<template>
  <div id="addform__wrap" v-if="show" @click="hideDialog">
    <div id="addform" style="width:60%" @click.stop>
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hideDialog() {
            this.$emit('update:show', false)
        }
    }
}
</script>

<style>
    #addform__wrap {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        overflow: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        z-index: 99;
        padding:30px 0;
        background-color: rgba(0, 0, 0, 0.5);
    }

    #addform {
        max-height: 100%;
    }
</style>