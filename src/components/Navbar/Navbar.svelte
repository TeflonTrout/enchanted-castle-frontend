<script lang="ts">
    import SearchIcon from "../../icons/search.svg"
    import EC from "../../images/EC_Logo_Transparent.png"
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
    <a href="/">
        <div class="imageContainer">
            <img src={EC} alt="Enchanted Castle">
            <h1>Enchanted Castle</h1>
        </div>
    </a>
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
        padding: 15px 50px;
        justify-content: space-between;
        align-items: center;
        color: var(--ec-black);
        background-color: #ffffff;
        background-image: linear-gradient(0deg, #f3e7ff 0%, #d2a1ff 100%);
    }

    .navbar .imageContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }

    .navbar .imageContainer h1 {
        font-size: 26px;
    }

    .navbar .imageContainer img {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 45px;
        padding-bottom: 10px;
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
        background-color: white;
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
        transition: .35s ease-in-out;
    }

    
    .navbar h1 {
        color: var(--ec-purple);
    }

    .navbar a {
        color: var(--ec-black);
        transition: .35s ease-in-out;
    }
    
    .navbar a:hover {
        transform: scale(1.15);
        transition: .2s ease-in-out;
    }

    .linkContainer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 25%;
    }
</style>