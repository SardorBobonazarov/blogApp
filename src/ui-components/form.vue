<template>
    <main>
        <form>
            <div class="username" v-if="register">
                <label for="">Username</label>
                <input type="text" placeholder="username">
            </div>
            <div class="email">
                <label for="">Email</label>
                <input type="text" placeholder="example@gmail.com">
            </div>
            <div class="password">
                <label for="">Password</label>
                <input type="password" placeholder="password">
            </div>
            <button>Submit</button>
        </form>
    </main>
</template>

<script>
export default {
    props: ['register']
}
</script>

<style scoped>
    main{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #444;
        background-image: url('/images/formImage.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }
    form{
        display: flex;
        flex-direction: column;
        padding: 3em 5em;
        background-color: rgba(255, 255, 255, .1);
        backdrop-filter: blur(20px);
        border: 1px solid #ddd;
    }
    label{
        margin-bottom: .4em;
        color: #ddd;
        display: block;
    }
    input{
        border: 1px solid rgba(255, 255, 255, .5);
        padding: 8px;
        border-radius: 12px;
        margin-bottom: 2em;
        outline: none;
        background: none;
        caret-color: #ddd;
        color: #ddd;
    }
    button{
        background-color: #222;
        color: #ddd;
        padding: 1em;
        transition: .4s ease;
        border-radius: 12px;
    }

    button:hover{
        background-color: #ddd;
        color: #222;
    }
</style>