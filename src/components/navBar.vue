<template>
    <nav class="flex justify-between items-center px-8">
        <div class="logo">
            <router-link to="/">
                <img src="images/logo.png" alt="">
            </router-link>
        </div>
        <ul class="flex justify-between items-center">
            <li>
                <router-link to="/">
                    <ion-icon name="home-outline"></ion-icon>
                    <span>Home</span>
                </router-link>
            </li>
            <li>
                <router-link to="/login">
                    <ion-icon name="log-in-outline"></ion-icon>
                    <span>Login</span>
                </router-link>
            </li>
            <li>
                <router-link to="/register">
                    <ion-icon name="person-add-outline"></ion-icon>
                    <span>Register</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    nav{
        box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
        background-color: #222;
    }
    .logo img{
        max-width: 80px;
    }
    ul li{
        margin-right: 20px;
    }
    ul li a{
        position: relative;
        color: #ddd;
        border-radius: 9999px;
        border: 1px solid #ddd;
        padding: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        transition: .5s ease;
    }
    ul li a:hover{
        width: 120px;
    }
    ul li a span{
        position: absolute;
        transform: scale(0);
    }
    ul li a:hover ion-icon{
        transform: scale(0);
    }
    ul li a:hover{
        background-color: #ddd;
    }
    ul li a:hover span{
        color: #222;
        transform: scale(1);
    }
</style>