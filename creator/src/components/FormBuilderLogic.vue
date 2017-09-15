<template>
    <div class="tab__container">
        <div>
            <h1>Logic</h1>
            <add-comparison-modal :questions-by-name="questionsByName" @add-comparison="addComparison">
            </add-comparison-modal>
            <br>
            {{ form.questions }}
            <br>
            <b-card-group deck v-for="question in allComparisons" :key="question.id">
                <b-card v-for="(comparison, index) in question.comparisons" :key="`${question.id}-${index}`">
                    {{ question.name }} {{ comparison.type }} {{ comparison.slot }}
                </b-card>
            </b-card-group>

        </div>
    </div>
</template>
<script>
import AddComparisonModal from './AddComparisonModal';
import { filter, keyBy } from 'lodash';
export default {
    name: 'form-builder-logic',
    components: { AddComparisonModal },
    props: ['form'],
    computed: {
        allComparisons() {
            return filter(this.form.questions, qn => qn.comparisons);
        },
        questionsByName() {
            return keyBy(this.form.questions, 'name');
        },
    },
    methods: {
        addComparison(questionName, newComparison) {
            let question = this.questionsByName[questionName];
            if (!question.comparisons) {
                this.$set(question, 'comparisons', []);
            }

            question.comparisons.push(newComparison);
        },
    },
}
</script>
<style lang="scss">
</style>
