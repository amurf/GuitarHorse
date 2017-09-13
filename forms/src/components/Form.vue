<template>
    <div>
        <error-list :errors="validations" v-if="showErrors"></error-list>
        <div class="mt-3"><h1>{{ form.name }}</h1></div>
        <component :is="renderComponent" :questions="form.questions" :comparisons="comparisons" :answers="answers">
        </component>
        <b-btn variant="success" size="lg" @click="save">Save</b-btn>
    </div>
</template>
<script>
// Pull in all components from layouts here.
import { ghForm, ghFormSections } from './layouts';
import ErrorList from './ErrorList';
import axios from 'axios';
import validate from '../validators/validate';
export default {
    name: 'form',
    props: ['form'],
    components: {  ghForm, ghFormSections, ErrorList },
    data() {
        return {
            showErrors: false,
            answers: {},
        };
    },
    computed: {
        renderComponent: function() {
            // Non-default rendering component configured.
            if (this.form.renderComponent) {
                return this.form.renderComponent;
            }

            let hasSections = this.form.hasOwnProperty('sections');
            return hasSections ? 'ghFormSections' : 'ghForm';
        },
        comparisons: function() {
            return validate.generateComparisons(this.form.questions, this.answers);
        },
        validations: function() {
            return validate.validate(this.form.questions, this.answers);
        }
    },
    methods: {
        save: function() {
            axios.put('/api/answer', {answers: this.answers}).then(console.log);
        },
    },
    created() {
        if (sessionStorage.ghJwt) {
            axios.defaults.headers.common['Authorization'] = sessionStorage.ghJwt;
        }
        axios.get('/api/answer').then(response => {
            let answers = response.data.answers;
            if (answers) {
                this.answers = response.data.answers;
            }
        });
    },
}
</script>
<style lang="scss">

// Misc
.container.content {
    padding: 60px 15px 0;
}
</style>
