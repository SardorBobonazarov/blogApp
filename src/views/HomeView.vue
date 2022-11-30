<template>
    <div>
        <h1>Home</h1>
        <div class="quiz">
            <Quiz />
        </div>
    </div>
</template>

<script>
import Quiz from '../components/quiz.vue';

export default {
    components: { Quiz }
}
</script>

<style scoped>
    .quiz{
        padding-left: 50px;
    }
</style>