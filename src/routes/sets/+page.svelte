<script lang="ts">
    import BentoItem from "../../components/BentoItem/BentoItem.svelte";
</script>

<div class="sets">
    <div class="bentoBox">
        <div class="hero" style="grid-area: span 1 / span 6;">
            <h1>Lorcana Sets</h1>
            <h4>View released and upcoming sets!</h4>    
        </div>
        <BentoItem text="Into the Inklands (Coming Soon)" link="/search?setCode=ITI" height={1} width={2} />
        <BentoItem text="Rise of the Floodborn" link="/search?setCode=RFB" height={1} width={4} />
        <BentoItem text="The First Chapter" link="/search?setCode=TFC" height={2} width={3} />
        <BentoItem text="2023 Promos" link="/search?setCode=P1" height={2} width={3} />
    </div>
</div>

<style>
    .sets {
        min-height: calc(100svh - 275px);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 10px 20px;
        background-color: var(--background);
    }

    .hero {
        display: flex;
        flex-direction: column;
        border-radius: 0.5rem;
        padding: 1rem;
        transition: .2s ease-in-out;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }

    .bentoBox {
        display: grid;
        width: 90%;
        margin-top: 20px;
        margin-bottom: 20px;
        grid-column-gap: 1.25rem;
        grid-row-gap: 1.25rem;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(4, 100px);
    }
</style>