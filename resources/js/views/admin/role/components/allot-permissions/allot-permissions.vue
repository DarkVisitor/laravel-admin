<template>
    <Modal v-model="isModal" title="权限分配" width="80%" v-on:change="handleChangeModal(event)">
        <div slot="footer">
            <Button type="text" size="large" >取消</Button>
            <Button type="primary" size="large" >保存</Button>
        </div>
    </Modal>
</template>
<script>

export default {
    name: 'allot-permissions',
    model: {
        prop: 'isModal',
        event: 'change'
    },
    props: {
        isModal: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            
        }
    },
    watch: {
        /* value(newVal, oldVal) {
            $emit('input', $event.target.value);
        } */
    },
    methods: {
        handleChangeModal (event) {
            console.log(event);
        }
    },
    created() {
        console.log(this.isModal);
    }
}
</script>

