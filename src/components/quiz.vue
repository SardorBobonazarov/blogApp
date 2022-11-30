<template>
    <div v-for="quiz in quizes" class="quiz">
        <h2>{{quiz.name}}</h2>
        <p>{{quiz.description}}</p>
        <router-link to="">
            <button>Solve</button>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            quizes: [
                {
                    name: 'quiz #1',
                    description: 'here we go'
                }
            ]
        }
    },
}
</script>

<style scoped>
    .quiz{
        padding: 1em;
        border: 1px solid rgba(0, 0, 0, .3);
        box-shadow: 0 3px 3px rgba(0, 0, 0, .3);
        width: clamp(300px, 80vw, 1200px);
    }
    .quiz h2{
        font-size: 3em;
    }
    .quiz p{
        opacity: .6;
        margin-bottom: 2em;
    }
    button{
        background-color: royalblue;
        padding: .5em 1.5em;
        color: #fff;
        font-size: 1.1em;

    }
</style>