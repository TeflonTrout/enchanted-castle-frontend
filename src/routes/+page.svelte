<script>
  import BentoItem from "../components/BentoItem/BentoItem.svelte";
  import TFC from "../../src/images/TFC_Elsa.png"
  import RFB from "../../src/images/RFB_Pooh.jpg"
  import hero from "../../src/images/hero.jpg"
  import discord from "../../src/images/discord.png"
  import x from "../../src/images/x.png"
</script>
<div class="home">
    <div class="bentoBox">
        <div class="hero" style="grid-area: span 1 / span 6;">
            <h1>Welcome to Enchanted Castle!</h1>
            <h4>Your home for all things Lorcana!</h4>    
        </div>
        <BentoItem text="View Cards" link="/search" wallpaper={hero} wallpaperProps={"width: 185%; left: 0%; height: auto;"} height={2} width={3}/>
        <div class="container" style="grid-area: span 2 / span 3;">
            <BentoItem text="About Us" link="/about"/>
            <BentoItem text="API Docs" link="/docs"/>
        </div>
        <!-- BREAK -->
        <div class="container" style="grid-area: span 3 / span 2;">
            <BentoItem text="View Cards By Set" link="/sets"/>
            <BentoItem text="References" link="/" />
            <BentoItem text="Contact Us" link="/contact" />
        </div>
        <BentoItem text="Rise of the Floodborn" link="/search?setCode=RFB" wallpaperProps="left:0%;" wallpaper={RFB} height={3} width={2} />
        <BentoItem text="The First Chapter" link="/search?setCode=TFC" wallpaper={TFC} height={3} width={2} />
        <!-- BREAK -->
        <BentoItem text="Report Issues" link="/" height={1} width={4} />
        <BentoItem text="" link="" wallpaper={discord} wallpaperProps={"left: 0%; height: auto; width: 70%;"} itemProps="background-image: none; background-color: #424549 !important;" external height={1} width={1}/>
        <BentoItem text="" link="/" wallpaper={x} wallpaperProps={"left: 0%; height: auto; width: 70%;"} itemProps="background-image: none; background-color: black !important;" external height={1} width={1} />
    </div>
</div>

<style>
    .home {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        min-height: calc(100vh - 160px);
        padding: 10px 20px;
        background-color: #f3e7ff;
    }

    .hero {
        display: flex;
        flex-direction: column;
        border-radius: 0.5rem;
        padding: 1rem;
        transition: .2s ease-in-out;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        gap: 5px;
    }

    .bentoBox {
        display: grid;
        width: 90%;
        margin-top: 20px;
        grid-column-gap: 1.25rem;
        grid-row-gap: 1.25rem;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(8, 100px);
    }

    .container {
        display: grid;
        grid-column-gap: 1.25rem;
        grid-row-gap: 1.25rem;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 100px);
    }

    /* MOBILE */
    @media (max-width: 768px) {
        .home {
            padding: 0px 10px !important;
        }

        .hero {
            width: 100% !important;
            gap: 10px !important;
        }

        .hero h1{
            width: 100% !important;
            text-align: center;
            font-size: 1.3rem;
        }

        .hero h4 {
            font-size: 1rem;
        }

        .bentoBox {
            grid-template-columns: repeat(6, 1fr) !important;
            grid-template-rows: repeat(8, 100px) !important;
        }
    }
</style>