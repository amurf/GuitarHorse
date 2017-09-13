<template>
    <b-card class='error-list' variant="danger" title="Errors" v-if="hasErrors">
        <div v-for="(slot_errors, slot) in errors">
            <p>{{ slot }}</p>
            <ul>
                <li v-for="error in slot_errors">{{ error }}</li>
            </ul>
        </div>
    </b-card>
</template>
<script>
export default {
    name: 'error-list',
    props: {
        errors: Object,
    },
    computed: {
        hasErrors() {
            return (this.errors && Object.keys(this.errors).length !== 0)
        },
    },
}
</script>
<style lang="scss">
</style>
