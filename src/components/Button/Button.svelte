<script lang="ts">
    export let link:string;
    export let text:string;
</script>

<div class="button">
    <a href={link}>
        <p>{text}</p>
    </a>
</div>

<style>
    .button {
        background-color: black;
        padding: 5px 10px;
        border-radius: 5px;
        transition: .3s ease-in-out;
        cursor: pointer;
    }

    .button:hover {
        background-color: rgb(121, 121, 121);
        transition: .3s ease-in-out;
        color: black;
    }
    
    .button:hover a {
        transition: .3s ease-in-out;
        color: black;
    }

    .button a {
        color: white;
        text-decoration: none;
    }
</style>