<script lang='ts'>
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import axios from "axios"
    import HoverLink from "../../components/HoverLink/HoverLink.svelte";
    import { sortArray } from "../../utils/constants";
    import type { Card } from "../../../types/Card";
    import Skeleton from "../../components/Skeleton/Skeleton.svelte";
    import AdvancedSearchBar from "../../components/AdvancedSearchBar/AdvancedSearchBar.svelte";

    interface Query {
        query?: string[],
        color?: string[],
        setCode?: string[],
        inkable?: boolean,
        inkCost?: number[],
        franchiseCode?: string[]
    }
    // PROPS
    let advancedSearch:boolean = false;
    let viewMode:string = "grid";
    let userQuery:string = "";
    // QUERY PARAMS
    const query: string[] = $page.url.searchParams.getAll("query")
    const colors: any = $page.url.searchParams.getAll("color")
    const inkable: any = $page.url.searchParams.getAll("inkable")
    const inkCost: any = $page.url.searchParams.getAll("inkCost")
    const setCode: any = $page.url.searchParams.getAll("setCode")
    const franchiseCode: string[] = $page.url.searchParams.getAll("franchiseCode")
    let searchPage:number = 1;
    let limit:number = 20;
    let sortBy:string = "alphabetical"
    $: {updateSearchPage(searchPage, limit)}
    let totalPages:number[] = [];
    let limitArr:number[] = Array.from({ length: limit }, (_, index) => index + 1)
    let cardArray:Card[] = [];
    let queryString:any;

    let queryObject:Query = {
        query: query,
        color: colors,
        inkable: inkable,
        inkCost: inkCost,
        setCode: setCode,
        franchiseCode: franchiseCode
    }

    queryString = Object.keys(queryObject)
        .map((key) => {
            const value = queryObject[key as keyof Query];
            if (Array.isArray(value)) {
                return value.map((v) => `${key}=${v}`).join('&');
            }
            return `${key}=${value}`;
            })
        .join('&');
    
    onMount(async () => {
            axios.get(`https://enchanted-castle-server.onrender.com/all?sort=${sortBy}&page=${searchPage}&limit=${limit}${queryString}`)
            .then(res => {
                const length = res.data.totalPages
                totalPages = Array.from({ length }).map((_, index) => index + 1);
                searchPage = res.data.page
                cardArray = res.data.data
            })
        })

    const updateSearchPage = async(newPage:number, newLimit:number) => {
        cardArray = []
        await axios.get(`https://enchanted-castle-server.onrender.com/search?sort=${sortBy}&page=${newPage}&limit=${newLimit}${queryString}`)
        .then(res => {
            cardArray = res.data.data
        })
    }

    const updateSearch = async(e:Event, newPage:number, newLimit:number) => {
        const target = e.target as HTMLSelectElement;
        e.preventDefault()
        cardArray = []
        await axios.get(`https://enchanted-castle-server.onrender.com/search?sort=${target.value}&page=${newPage}&limit=${newLimit}${queryString}`)
        .then(res => {
                cardArray = res.data.data
            })
    }
        
    const updateSearchQuery = () => {
        if(userQuery == "") { 
            goto(`/search`);
            axios.get(`https://enchanted-castle-server.onrender.com/search?sort=${sortBy}&${queryString}`)
            .then(res => {
                cardArray = res.data.data
            })
        } else {
            $page.url.searchParams.set('name', userQuery); 
            goto(`?${$page.url.searchParams.toString()}`);
            axios.get(`https://enchanted-castle-server.onrender.com/search?${$page.url.searchParams.toString()}`)
            .then(res => {
                cardArray = res.data.data
            })
        }
    }
</script>

{#if cardArray.length == 0 }
    <div>
        <div class="searchHeader">
            <div class="searchBar">
                <input type="text" name="query" id="query" on:change={(e) => {userQuery = e.currentTarget.value}} placeholder="Search">
                <button on:click={() => updateSearchQuery()}>Search</button>
            </div>
            <div class="dashboard">
                <div class="limit">
                    All Cards sorted by
                    <select name="sort" on:change={(e) => updateSearch(e, searchPage, limit)}>
                        {#each sortArray as option}
                            <option value={option.optionValue} selected={sortBy == option.optionValue}>{option.optionName}</option>
                        {/each}
                    </select>
                    displaying 
                    <select name="limit" bind:value={limit}>
                        {#each [20,50,100] as option}                    
                        <option value={option} selected={limit == option}>{`${option} per page`}</option>
                        {/each}
                    </select>
                </div>
            </div> 
            <!-- <h4>Advanced Search</h4>
            <AdvancedSearchBar /> -->
        </div>
        <div class="grid">
            <div class="gridContainer">
                {#each limitArr as _}
                    <Skeleton width={200} height={250}/>
                {/each}
            </div>
        </div>
    </div>
    {:else}
        <div class="searchHeader">
            <div class="searchBar">
                <input type="text" name="query" id="query" on:change={(e) => {userQuery = e.currentTarget.value}} placeholder="Search">
                <button on:click={() => updateSearchQuery()}>Search</button>
            </div>
            <div class="dashboard">
                <div class="limit">
                    All Cards sorted by
                    <select name="sort" on:change={(e) => updateSearch(e, searchPage, limit)}>
                        {#each sortArray as option}
                            <option value={option.optionValue} selected={sortBy == option.optionValue}>{option.optionName}</option>
                        {/each}
                    </select>
                    displaying 
                    <select name="limit" bind:value={limit}>
                        {#each [20,50,100] as option}                    
                        <option value={option} selected={limit == option}>{`${option} per page`}</option>
                        {/each}
                    </select>
                </div>
            </div> 
            
            <!-- <button on:click={() => advancedSearch = !advancedSearch}>Advanced Search</button>
            {#if advancedSearch}
                <AdvancedSearchBar />
            {/if} -->
            
        </div>
    {#if viewMode == "grid"}
        <div class="grid">
            <div class="gridContainer">
                {#each cardArray as card}
                    <a href={`/${card.set_code}/${card.number}`}>
                        {#if card.image != ""}
                            <img src={card.image} alt="card preview">
                        {/if}
                    </a>    
                {/each}
            </div>
        </div>
        {:else}
        {#each cardArray as card}
            <HoverLink cardProps={card}/>
        {/each}
    {/if}
    <div class="pagination">
        {#each totalPages as idx}
            <button class={searchPage == idx ? "selected" : ""} on:click={() => {
                searchPage = idx
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            }}>{idx}</button>
        {/each}
    </div>
{/if}

<style>
    .searchHeader {
        width: 100%;
        display: flex;
        padding: 10px;
        gap: 5px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .searchHeader h4 {
        text-align: center;
    }

    .searchHeader .dashboard {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .searchHeader .dashboard .viewSelector {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 10px;
    }

    .searchHeader .dashboard .viewSelector .selector { 
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 5px;
    }

    .searchHeader .dashboard .limit {
        display: flex;
        width: 100%;
        gap: 10px;
        justify-content: space-between;
        align-items: center;
    }

    .grid {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .gridContainer {
        display: grid;
        width: 90%;
        justify-content: center;
        align-content: center;
        align-items: center;
        justify-items: center;
        gap: 10px;
        grid-template-columns: repeat(auto-fit, minmax(200px, 200px));
    }

    .gridContainer img {
        max-width: 200px;
        border-radius: 5px;
        background-color: var(--ec-black);
    }

    .pagination {
        display: flex;
        width: 100%;
        margin: 20px 0;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .pagination button {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
    }

    .pagination .selected {
        font-size: 20px;
        font-weight: bolder;
    }
</style>