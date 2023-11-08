<script lang="ts">
    import { onMount } from "svelte";
    import axios from "axios";
    import HoverLink from "../../components/HoverLink/HoverLink.svelte";
    import type { Card } from "../../../types/Card";
    import type { CardSets, CardSet } from "../../../types/CardSets";
    
    export let data:any;
    let isLoading:boolean = true;
    let viewMode:string = "grid";
    let setCode:CardSets = data.setCode
    let setName:string | null = null;
    let setData:CardSet | null = null;
    let cardArray:Card[] = []

    onMount(async () => {
        axios.get(`http://192.168.254.80:9090/cards/${data.setCode}`)
        .then(res => {
            setName = res.data.setData.name
            setData = res.data.setData
            cardArray = res.data.data
            isLoading = false
        })
    })
</script>

{#if isLoading == true}
    <h1>Loading... set {setCode}</h1>
{:else}
    <div>
        {#if setData != null}
            <h1>{setData.name}</h1>
            <h1>{setData.set_code}</h1>
            <h1>{setData.card_count}</h1>
            {:else}
            <h1>{setCode}</h1>
        {/if}
    </div>

    {#if viewMode == "grid"}
        <div class="gridContainer">
            {#each cardArray as card}
                <a href={`/TFC/${card.number}`}>
                    {#if card.image != ""}
                        <img src={card.image} alt="card preview">
                    {/if}
                </a>    
            {/each}
        </div>
        {:else}
        {#each cardArray as card}
            <HoverLink cardProps={card}/>
        {/each}
    {/if}

{/if}

<style>
    .gridContainer {
        display: grid;
        width: 100%;
        justify-content: center;
        align-items: center;
        justify-items: center;
        gap: 10px;
        grid-template-columns: repeat(auto-fit, minmax(200px, 200px));
    }

    .gridContainer img {
        max-width: 200px;
        border-radius: 5px;
        background-color: black;
    }
</style>