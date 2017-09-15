<template>
    <div>
        <b-button @click="modalShow = !modalShow" variant="info" type="md">
            Add Comparison
        </b-button>
        <b-modal v-model="modalShow" title="Add new comparison" ok-title="Add Comparison" @ok="addComparison()">
            <!-- This would be better as an autocomplete widget -->
            <gh-select :options="questionNames" :answers="comparisonQuestion" name="name">
            </gh-select>
            <gh-select :options="validators" :answers="newComparison" name="type">
            </gh-select>
            <!-- This would be better as an autocomplete widget -->
            <gh-select :options="questionNames" :answers="newComparison" name="slot">
            </gh-select>
            <gh-question v-if="newComparison.slot" number="1" :question="questionsByName[newComparison.slot]" :answers="answer" disable-validations="true">
            </gh-question>
        </b-modal>
    </div>
</template>
<script>
import ghSelect from "shared/components/Select";
import ghQuestion from "shared/components/Question";
import Validators from 'shared/validators';
import { keyBy } from 'lodash';
export default {
    name: 'add-comparison-modal',
    props: ['comparisons', 'questionsByName'],
    components: { ghSelect, ghQuestion },
    data() {
        return {
            modalShow: false,
            newComparison: {},
            answer: {},
            comparisonQuestion: {},
        };
    },
    computed: {
        validators() {
            return Object.keys(Validators);
        },
        questionNames() {
            return Object.keys(this.questionsByName);
        },
    },
    methods: {
        addComparison() {
            // TODO: Extend this to handle more cases, like...
            // requiredIf something == 55
            this.$emit('add-comparison', this.comparisonQuestion.name, this.newComparison);
        },
    },
}
</script>
