<script lang="ts">
    import SearchIcon from "../../icons/search.svg"
    import { goto } from "$app/navigation";

    let query:string = "";

    const handleQueryChange = (e:Event) => {
        const target = e.target as HTMLSelectElement;
        console.log("Search for: ", target.value)
    }

    const searchForCard = () => {
        goto(`/search?name=${query}`);
    }
</script>

<div class="navbar">
    <a href="/"><h1>Enchanted Castle</h1></a>
    <div class="searchBar">
        <input 
            type="text" 
            name="query" 
            placeholder="Search for a specific card..." 
            on:input={(e) => handleQueryChange(e)}
            on:change={() => searchForCard()}
            bind:value={query}>
        <button type="submit"><img src={SearchIcon} alt="search"></button>
    </div>
    <div class="linkContainer">
        <a href="/about">About</a>
        <a href="/search">Search</a>
        <a href="/resources">Resources</a>
    </div>
</div>

<style>
    .navbar {
        display: flex;
        flex-direction: row;
        width: 100%;
        padding: 10px;
        justify-content: space-between;
        align-items: center;
        color: var(--ec-black);
        background-color: #fff;
    }

    .navbar .searchBar {
        display: flex;
        width: 30%;
        text-align: start;
        justify-content: space-between;
        align-items: center;
        padding: 4px;
        border: 1px solid var(--ec-purple);
        border-radius: 4px;
    }

    .navbar .searchBar input {
        outline: none;
        border: none;
        padding: 4px;
        width: 100%;
    }

    .navbar .searchBar button {
        border: none;
        outline: none;
        background-color: #fff;
        color:black;
        cursor: pointer;
        width: 40px;
    }

    .navbar h1 {
        color: var(--ec-purple);
    }

    .navbar a {
        color: var(--ec-black);
    }

    .linkContainer {
        display: flex;
        justify-content: space-between;
        width: 30%;
    }
</style>