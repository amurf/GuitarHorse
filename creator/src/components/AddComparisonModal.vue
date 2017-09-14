<template>
    <div>
        <b-button @click="modalShow = !modalShow">
            Open Modal
        </b-button>
        <b-modal v-model="modalShow" title="Add new comparison" ok-title="Add Comparison">
            <label>
                Validator
                <gh-select :options="validators" :answers="newComparison" name="type">
                </gh-select>
            </label>
            <label>
                Question name
                <gh-select :options="questionNames" :answers="newComparison" name="slot">
                </gh-select>
            </label>
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
    props: ['comparisons', 'questions'],
    components: { ghSelect, ghQuestion },
    data() {
        return {
            modalShow: false,
            newComparison: {},
            answer: {},
        };
    },
    computed: {
        validators() {
            return Object.keys(Validators);
        },
        questionsByName() {
            return keyBy(this.questions, 'name');
        },
        questionNames() {
            return Object.keys(this.questionsByName);
        },
    },
}
</script>
