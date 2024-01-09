<script lang="ts">
    export let text:string
    export let width:number | null = null
    export let height:number | null = null
    export let link:string
    export let external:boolean = false
    export let wallpaper:any = null
</script>

{#if external}
    <a class="item" href={link} target="_blank" rel="noopener noreferrer" style={`grid-area: span ${height} / span ${width};`}>
        <h2>{text}</h2>
    </a>
{:else}
    <a class="item" href={link} style={`grid-area: span ${height} / span ${width};`}>    
        <h2>{text}</h2>
    </a>
{/if} 
    
<style>
    a {
        text-decoration: none;
        color: black;
    }

    .item {
        border: 2px solid black;
        background-color: #f5f5f5;
        border-radius: 0.5rem;
        padding: 1rem;
        transition: .2s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        text-align: center;
        background-color: #8EC5FC;
        background-image: linear-gradient(45deg, #8EC5FC 0%, #E0C3FC 100%);
    }

    .item:hover {
        transform: scale(1.05);
        transition: .2s ease-in-out;
    }
</style>