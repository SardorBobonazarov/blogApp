<template>
    <div class="question" v-for="quiz in quizes">
        <p class="opacity-90">{{quiz.question}}</p>
        <button>Answer</button>
    </div>
</template>

<script>
export default {
    computed: {
        quizes(){
            return this.$store.state.questions.question
        }
    }
}
</script>

<style scoped>
    button{
        background-color: dodgerblue;
        padding: .5em 1.5em;
        color: #fff;
    }
</style>