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
    }

    .button a {
        color: white;
        text-decoration: none;
    }
</style>