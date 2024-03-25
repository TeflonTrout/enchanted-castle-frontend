<script lang="ts">
    import { onMount } from "svelte";
    import axios from "axios";
    import HoverLink from "../../components/HoverLink/HoverLink.svelte";
    import type { Card } from "../../../types/Card";
    import type { CardSet } from "../../../types/CardSets";
    import { sortArray } from "../../utils/constants";
    import Skeleton from "../../components/Skeleton/Skeleton.svelte";
    
    export let data:any;
    let isLoading:boolean = true;
    let isError:boolean = false;
    let viewMode:string = "grid";
    let setName:string | null = null;
    let setData:CardSet | null = null;
    let cardArray:Card[] = []
    let sortBy:string = "alphabetical"


    onMount(async () => {
        try {
            axios.get(`https://enchanted-castle-api.onrender.com/cards/${data.setCode}?sort=${sortBy}`)
            .then(res => {
                console.log(res)
                setName = res.data.setData.name
                setData = res.data.setData
                cardArray = res.data.data
            })
            if (setData == null) {
                isError = true
                isLoading = false
            }
        } catch(e) {
            console.log(e)
        }
    })

    const updateSearch = async(e:Event) => {
        const target = e.target as HTMLSelectElement;
        cardArray = []
        await axios.get(`https://enchanted-castle-api.onrender.com/cards/${data.setCode}?sort=${target.value}`)
        .then(res => {
                cardArray = res.data.data
                setData = null
                isLoading = false
            })
    }
</script>

{#if isLoading == true}
    <div class="gridContainer" style="padding-top: 25px;">  
        {#each [1,2,3,4,5,6,7,8,9,10, 11,12] as _}
            <Skeleton width={200} height={250}/>
        {/each}  
    </div>
{:else}
    <div class="setPage">
        {#if setData != null}
            <h1>{setData.name} - ({setData.set_code})</h1>
            <h2>Cards In Set - {setData.card_count}</h2>
            <div class="dashboard">
                <div class="limit">
                    {setData.name} sorted by
                    <select name="sort" on:change={(e) => updateSearch(e)}>
                        {#each sortArray as option}
                            <option value={option.optionValue} selected={sortBy == option.optionValue}>{option.optionName}</option>
                        {/each}
                    </select>
                </div>
            </div>            
        {/if}
        {#if setData == null && isError == true}
        <div class="errorPage">
            <h1>Something Went Wrong!</h1> 
            <p>Make sure the set code is valid.</p>
        </div>
        {/if}
    </div>


    {#if viewMode == "grid"}
        <div class="gridContainer">
            {#each cardArray as card}
                <a href={`/${card.set_code}/${card.number}`}>
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
    .errorPage {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: calc(100vh - 270px);
        padding: 10px 30px;
        background-color: var(--background);
    }
    .setPage {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        padding: 10px 30px;
        background-color: var(--background);
    }

    .setPage .dashboard {
        padding-top: 20px;
    }

    .gridContainer {
        display: grid;
        width: 100%;
        padding-left: 30px;
        padding-right: 30px;
        padding-bottom: 40px;
        padding-top: 20px;
        justify-content: center;
        align-items: center;
        justify-items: center;
        gap: 10px;
        grid-template-columns: repeat(auto-fit, minmax(200px, 200px));
        background-color: var(--background);
    }

    .gridContainer img {
        max-width: 200px;
        border-radius: 5px;
        background-color: var(--ec-black);
    }
</style>