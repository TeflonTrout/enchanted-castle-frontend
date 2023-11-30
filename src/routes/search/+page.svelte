<script lang='ts'>
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import axios from "axios"
    import HoverLink from "../../components/HoverLink/HoverLink.svelte";
    import { colorList, rarityList } from "../../utils/constants";
    import type { Card } from "../../../types/Card";

    interface Query {
        query?: string[],
        color?: string[],
        setCode?: string[],
        inkable?: boolean,
        inkCost?: number[],
    }
    // PROPS
    let viewMode:string = "grid";
    let userQuery:string = "";
    // QUERY PARAMS
    const query: string[] = $page.url.searchParams.getAll("query")
    const colors: any = $page.url.searchParams.getAll("color")
    const inkable: any = $page.url.searchParams.getAll("inkable")
    const inkCost: any = $page.url.searchParams.getAll("inkCost")
    const setCode: any = $page.url.searchParams.getAll("setCode")
    let cardArray:Card[] = []

    let queryObject:Query = {
        query: query,
        color: colors,
        inkable: inkable,
        inkCost: inkCost,
        setCode: setCode
    }

    const queryString = Object.keys(queryObject)
        .map((key) => {
            const value = queryObject[key as keyof Query];
            if (Array.isArray(value)) {
                return value.map((v) => `${key}=${v}`).join('&');
            }
            return `${key}=${value}`;
            })
        .join('&');

    onMount(async () => {
            axios.get(`http://192.168.254.80:9090/all?${queryString}`)
            .then(res => {
                cardArray = res.data.data
            })
        })
        
        const updateSearchParams = () => {
            if(userQuery == "") { 
                goto(`/search`);
                axios.get(`http://192.168.254.80:9090/search?${queryString}`)
                .then(res => {
                    cardArray = res.data.data
                })
            } else {
                $page.url.searchParams.set('name', userQuery); 
                goto(`?${$page.url.searchParams.toString()}`);
                axios.get(`http://192.168.254.80:9090/search?${$page.url.searchParams.toString()}`)
                .then(res => {
                    cardArray = res.data.data
                })
            }
    }
</script>

{#if cardArray.length == 0}
    <div>Loading...</div>
    {:else}
    <div class="searchHeader">
        <div class="searchBar">
            <input type="text" name="query" id="query" on:change={(e) => {userQuery = e.currentTarget.value}} placeholder="Search">
            <button on:click={() => updateSearchParams()}>Search</button>
        </div>
        <h4>Advanced Search</h4>
        <div class="advancedSearchContainer">
                <div class="optionContainer">
                    <h4>Colors</h4>
                        {#each colorList as color}
                            <div class="colorSelector">
                                <input type="checkbox" name="color" id="color" value={color} />
                                <label for="color">{color}</label>
                            </div>
                        {/each}
                </div>
                <div class="optionContainer">
                    <h4>Ink Cost</h4>
                    {#each ["1","2","3","4","5","6","7","8","9","10"] as cost}
                        <div class="inkableSelector">
                            <label for={cost}>{cost}</label>
                            <input type="checkbox" name="cost" id={cost}>
                        </div>
                    {/each}
                </div>
                <div class="optionContainer">
                    <h4>Inkable</h4>
                    <div class="inkableSelector">
                        <input type="radio" name="inkable" id="inkable">
                        <label for="inkable">Inkable</label>
                    </div>
                    <div class="inkableSelector">
                        <input type="radio" name="inkable" id="nonInkable">
                        <label for="nonInkable">Non-Inkable</label>
                    </div>
                </div>
                <div class="optionContainer">
                    <h4>Rarity</h4>
                    {#each rarityList as rarity}
                        <div class="raritySelector">
                            <input type="checkbox" name="rarity" id={rarity}>
                            <label for={rarity}>{rarity}</label>
                        </div>
                    {/each}
                </div>
        </div>
        <h4>View Mode</h4>
        <div class="viewSelector">
            <div class="selector">
                <label for="grid">Grid</label>
                <input type="radio" name="viewSelector" checked id="grid" on:click={() => viewMode = "grid"}>
            </div>  
            <div class="selector">
                <label for="list">List</label>
                <input type="radio" name="viewSelector" id="list" on:click={() => viewMode = "list"}>
            </div>
        </div>
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
    .searchHeader {
        width: 100%;
        display: flex;
        margin: 10px;
        gap: 5px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .searchHeader .viewSelector {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 10px;

    }

    .searchHeader .viewSelector .selector { 
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 5px;
    }

    .searchHeader .advancedSearchContainer {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        align-items: flex-start;
    }

    .searchHeader .advancedSearchContainer .optionContainer {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .searchHeader .advancedSearchContainer .optionContainer .colorSelector {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        gap: 3px;
        align-items: center;
    }

    .searchHeader .advancedSearchContainer .optionContainer .inkableSelector {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        gap: 3px;
        align-items: center;
    }

    .searchHeader .advancedSearchContainer .optionContainer .raritySelector {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        gap: 3px;
        align-items: center;
    }

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