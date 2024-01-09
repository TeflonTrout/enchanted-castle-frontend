<script>
  import BentoItem from "../components/BentoItem/BentoItem.svelte";
</script>
<div class="home">
    <div class="bentoBox">
        <div class="hero" style="grid-area: span 1 / span 6;">
            <h1>Welcome to Enchanted Castle!</h1>
            <h4>Your home for all things Lorcana!</h4>    
        </div>
        <BentoItem text="View Cards" link="/search" height={2} width={3}/>
        <div class="container" style="grid-area: span 2 / span 3;">
            <BentoItem text="About Us" link="/about"/>
            <BentoItem text="API Docs" link="/docs"/>
        </div>
        <!-- BREAK -->
        <div class="container" style="grid-area: span 3 / span 2;">
            <BentoItem text="View Cards By Set" link="/sets"/>
            <BentoItem text="Join Our Discord" link="" external/>
            <BentoItem text="References" link="/" />
        </div>
        <BentoItem text="Rise of the Floodborn" link="/RFB" height={3} width={2} />
        <BentoItem text="The First Chapter" link="/TFC" height={3} width={2} />
        <!-- BREAK -->
        <BentoItem text="Contact Us" link="/contact" height={1} width={3} />
        <BentoItem text="X" link="/" external height={1} width={1} />
        <BentoItem text="Card Search" link="/search" height={1} width={1} />
        <BentoItem text="Report Issues" link="/" height={1} width={1} />
    </div>
</div>

<style>
    .home {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: calc(100vh - 160px);
        padding: 10px 20px;
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
    }

    .bentoBox {
        display: grid;
        width: 90%;
        margin-top: 20px;
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(8, 100px);
    }

    .container {
        display: grid;
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 100px);
    }

    /* Responsive adjustments for larger screens */
    @media (max-width: 768px) {
        .bentoBox {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            grid-template-rows: repeat(8, 75px);
        }
    }
</style>