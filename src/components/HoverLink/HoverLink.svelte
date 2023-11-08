<script lang='ts'>
    import type {Card} from "../../../types/Card"

    export let cardProps:Card;
    let cardHover:boolean = false;
</script>

<div class="hoverLink" >
    <a href={`/TFC/${cardProps.number}`} on:mouseenter={() => cardHover = true} on:mouseleave={() => cardHover = false}>
        {cardProps.name}&nbsp;{cardProps.title == "" ? "" : `- ${cardProps.title}`}
    </a>
    <img src={cardProps.image} alt="card preview" class={cardHover ? "cardShow" : "cardHide"}>
</div>

<style>
    .hoverLink {
        display: flex;
        width: auto;
        white-space: nowrap;
    }

    .hoverLink a {
        width: 100%;
    }

    .cardShow {
        display: flex;
        position: absolute;
        right: 50%;
    }

    .cardHide {
        display: none;
    }
</style>