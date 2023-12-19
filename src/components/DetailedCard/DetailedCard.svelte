<script lang="ts">
    export let imgUrl:string;
    export let link:string;
    export let name:string;
    export let subname:string;
</script>

<div class="detailedCard">
    <a href={link} target="_self">
        <img src={imgUrl} alt="card preview">
        <h4>{name} - {subname.slice(0, 5)}...</h4>
    </a>
</div>

<style>
    .detailedCard {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 400px;
        text-align: center;
    }

    .detailedCard img {
        max-height: 250px;
    }

    .detailedCard h4 {
        width: 100%;
        text-align: center;
    }

    .detailedCard a {
        text-decoration: none;
        color: black;
        cursor: pointer;
    }
</style>