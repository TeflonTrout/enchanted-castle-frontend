<script lang="ts">
  import axios from "axios";
  import { onMount } from "svelte";
  import type { Card } from "../../../../types/Card";
  import Ink from "../../../icons/inkable.svelte";
  import Strength from "../../../icons/strength.svelte";
  import Willpower from "../../../icons/willpower.svelte";
  import Skeleton from "../../../components/Skeleton/Skeleton.svelte";
  import Lore from "../../../icons/lore.svelte";
  import Cost from "../../../icons/ink.svelte";

    interface Props {
        setCode: string
        cardNumber: string
    }

    export let data:Props;
    let cardData:Card | null = null
    
    onMount(() => {
        axios.get(`http://localhost:9090/cards/${data.setCode}/${data.cardNumber}`)
        .then(res => {
            cardData = res.data.data
            console.log(res.data.data)
        })
    })

    function parseBodyText(bodyText:string | undefined) {
        if(bodyText != undefined) {
            const text = bodyText.replaceAll("{ink}", "⬡").replaceAll("{lore}", "◆").replaceAll("{strength}", "※")
            return text
        }
    }

    function colorSwitch(color:string) {
        switch(color){
            case "Amber":
                return "var(--amber)"
            case "Amethyst":
                return "var(--amethyst)"
            case "Emerald":
                return "var(--emerald)"
            case "Ruby":
                return "var(--ruby)"
            case "Sapphire":
                return "var(--sapphire)"
            case "Steel":
                return "var(--steel)"
        }
    }
</script>

{#if cardData == null}
    <div class="individualCard">
        <div class="cardImage">
            <Skeleton width={500} height={400}/>
        </div>
        <div class="cardInfo">
            <Skeleton width={600} height={400}/>
        </div>
    </div>
{:else}
    <div class="individualCard">
        <div class="cardImage">
            {#if cardData.image != null}  
                    <img src={cardData.image} alt="card" style={`border-radius: 13px; box-shadow: 0px 0px 20px 5px ${colorSwitch(cardData.color)}`}>
                {:else}
                    <Skeleton width={500} height={400} />
            {/if}
        </div>
        <div class="cardInfo" style={`box-shadow: 0px 0px 20px 5px ${colorSwitch(cardData.color)}`}>
            <div class="line">
                <div class="name">
                    <h1>{cardData.name}</h1>
                    <h3>{cardData.subname}</h3>
                </div>
                {#if cardData.inkable}
                    <Ink cost={cardData.ink_cost}/>
                    {:else}
                    <Cost cost={cardData.ink_cost}/>
                {/if}
            </div>
            <span></span>
            <div class="subtypes">
                {#if cardData.subtypes != null}
                    {#each cardData.subtypes as subtype, idx}
                        {#if idx == cardData.subtypes.length - 1}
                            <p>{subtype}</p> 
                            {:else}
                            <p>{subtype} • &nbsp;</p>
                        {/if}
                    {/each}
                {/if}
            </div>
            {#if cardData.body_text.length == 0}
                <span></span>
                {:else}
                <span></span>
                    <div class="body">
                        {#each cardData.body_text as text}
                            <p>{parseBodyText(text)}</p>
                        {/each}
                    </div>
                <span></span>
            {/if}
            <div class="body">
                <p><em>{cardData.flavor}</em></p>    
            </div>
            <div class="powerContainer">
                <div class="powerStat">
                    <Lore />
                    x{cardData.lore}
                </div>
                <div class="powerStat">
                    <Strength strength={cardData.attack}/>
                    <Willpower willpower={cardData.willpower} />
                </div>
            </div>
        </div>
        <div class="moreInfoContainer">
            <div class="setInfo">
                <div class="setName">
                    <h3>The First Chapter ({cardData.set_code})</h3>
                </div>
                <div class="infoContainer">
                    <h5>#{cardData.number}</h5>
                    <h5>|</h5>
                    <h5>{cardData.rarity}</h5>
                    <h5>|</h5>
                    <h5>English</h5>
                </div>
                <div class="setName">
                    <h5>
                        <em>Illustration by: {cardData.artist}</em>
                    </h5>
                </div>
                <div class="franchiseContainer">
                    <h5>{cardData.franchise.franchise_name} ({cardData.franchise.franchise_code})</h5>
                </div>
            </div>
        </div>
        <div class="pagination">
            <a href={`${cardData.number + 1}`} target="_self">
                Next
            </a>
        </div>
    </div>
{/if}


<style>
    /* MOBILE */
    @media screen and (max-width: 780px) {
        .individualCard .cardImage img {
            display: flex;
            max-width: 300px;
        }
    } 

    /* DESKTOP */
    @media screen and (min-width: 780px) {
        .individualCard {
            display: flex;
            justify-content: space-evenly;
            align-items: flex-start;
            gap: 10px;
            margin-top: 25px;
            padding: 50px;
        }
        .cardImage {
            display: flex;
            width: 30%;
        }
        .cardImage img {
            max-height: 350px;
        }

        .cardInfo {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            width: 50%;
            border-radius: 10px;
            min-height: 350px;
            padding: 20px;
            gap: 20px;
        }

        .cardInfo .line {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
        }

        .cardInfo .powerContainer {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
        }

        .cardInfo .powerContainer .powerStat {
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }

        .cardInfo .subtypes {
            display: flex;
            width: 100%;
            justify-content: center;
            padding: 0px 10px;
            align-items: center;
        }

        .cardInfo span {
            display: block;
            width: 100%;
            border-bottom: 2px solid black;
        }

        .cardInfo .body {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            gap: 5px;
        }

        .cardInfo .body span {
            display: block;
            width: 100%;
            border-bottom: 2px solid black;
        }

        .cardInfo .body p {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
        }

        .moreInfoContainer {
            display: flex;
            flex-direction: column;
            justify-self: flex-start;
            align-items: center;
            width: 30%;
            padding: 10px;
            gap: 20px;
        }

        .setInfo {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            gap: 10px;     
        }

        .setInfo .setName {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
        }

        .setInfo .infoContainer {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
        }

        .setInfo .franchiseContainer {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
        }
    } 
</style>