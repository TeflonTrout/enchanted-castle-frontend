<script lang="ts">
    export let width:number = 100
    export let height:number = 100
</script>

<span class="skeleton" style={`width: ${width}px; height:${height}px`}>

</span>

<style>
    
    @keyframes wipe {
        100% {
            transform: translateX(100%);
        }
    }
    .skeleton {
        --base-color: #ebebeb;
        --highlight-color: #f5f5f5;
        --animation-duration: 1.5s;
        --animation-direction: normal;

        background-color: var(--base-color);
        width: 100%;
        border-radius: 0.25rem;
        display: inline-flex;
        line-height: 1;

        position: relative;
        overflow: hidden;
        z-index: 1; /*Necessary for overflow: hidden to work correctly in Safari*/
    }

    .skeleton::after {
        content: ' ';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        background-repeat: no-repeat;
        background-image: linear-gradient(
            90deg,
            var(--base-color),
            var(--highlight-color),
            var(--base-color)
        );
        transform: translateX(-100%);

        animation-name: wipe;
        animation-direction: var(--animation-direction);
        animation-duration: var(--animation-duration);
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }
</style>