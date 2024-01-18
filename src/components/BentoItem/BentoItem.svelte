<script lang="ts">
    export let text:string
    export let width:number = 1
    export let height:number = 1
    export let link:string
    export let external:boolean = false
    export let wallpaper:any = null
    export let wallpaperProps:string = ""
    export let itemProps:string = ""

    // if (window.innerWidth < 786) {
    //     width = width / 2
    //     height = height / 2
    // }
</script>

{#if external}
    <a class="item" href={link} target="_blank" rel="noopener noreferrer" style={`@media and (max-width: 768px){grid-area: span ${height /2} / span ${width /2}}grid-area: span ${height} / span ${width};${itemProps}`}>
        {#if wallpaper != null}    
            <img src={wallpaper} alt="background" style={wallpaperProps}/>
            <div class="container">
                {#if text != ""}
                    <h2>{text}</h2>
                {/if}
            </div>
            {:else}
            <h2>{text}</h2>
        {/if}
    </a>
    {:else}
    <a class="item" href={link} style={`@media and (max-width: 768px){grid-area: span ${height /2} / span ${width /2}} grid-area: span ${height} / span ${width};${itemProps}`}>    
        {#if wallpaper != null}    
            <img src={wallpaper} alt="background" style={wallpaperProps}/>
            <div class="container">
                <h2>{text}</h2>
            </div>
            {:else}
            <h2>{text}</h2>
        {/if}
    </a>
{/if} 
    
<style>
    /* MOBILE */
    @media (max-width: 768px) {
        .item {
            border-radius: 0.5rem;
            transition: .2s ease-in-out;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            text-align: center;
            position: relative;
            border: 2px solid black;
            background-color: #8EC5FC;
            background-image: linear-gradient(45deg, #8EC5FC 0%, #E0C3FC 100%);
        }  

        .item img {
            height: 100%;
            position: relative;
            left: 5%;
            z-index: 1;
        }

        .item h2 {
            width: 90% !important;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 2;
            font-size: 1rem !important;
        }
        
        .item .container h2 {
            width: 90% !important;
            font-size: 0.9rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 2;
            background-color: #f5f5f5;
            padding: 5px 10px;
            border-radius: 5px;
        }
    }

    a {
        text-decoration: none;
        color: black;
        overflow: hidden;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        object-fit: cover;
        display: flex;
    }

    .item {
        border-radius: 0.5rem;
        transition: .2s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        text-align: center;
        position: relative;
        border: 2px solid black;
        background-color: #8EC5FC;
        background-image: linear-gradient(45deg, #8EC5FC 0%, #E0C3FC 100%);
    }  

    .item img {
        height: 100%;
        position: relative;
        left: 5%;
        z-index: 1;
    }

    .item h2 {
        width: 80%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        font-size: 20px;
    }

    .item .container h2 {
        width: 60%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        background-color: #f5f5f5;
        padding: 5px 10px;
        border-radius: 5px;
    }

    .item:hover {
        transform: scale(1.05);
        transition: .2s ease-in-out;
    }
</style>