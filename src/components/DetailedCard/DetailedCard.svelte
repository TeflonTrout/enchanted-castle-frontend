<script lang="ts">
    export let imgUrl:string;
    export let name:string;
</script>

<div class="detailedCard">
    <img src={imgUrl} alt="card preview">
    <h4>{name}</h4>
</div>

<style>
    .detailedCard {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .detailedCard img {
        max-height: 250px;
    }

    .detailedCard h4 {
        width: 100%;
        text-align: center;
    }
</style>