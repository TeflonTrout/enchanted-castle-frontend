<script lang="ts">
  import axios from "axios";
  import { onMount } from "svelte";
  import type { Card } from "../../../../types/Card";
  import Ink from "../../../icons/ink.svelte";
  import { localData,single } from "../../../utils/localData";
  import Strength from "../../../icons/strength.svelte";
  import Willpower from "../../../icons/willpower.svelte";
  import Skeleton from "../../../components/Skeleton/Skeleton.svelte";

    interface Props {
        setCode: string
        cardNumber: string
    }

    export let data:Props;
    // let cardData:Card | null = null
    let cardData:any = null
    
    onMount(() => {
        cardData = single
        // axios.get(`http://192.168.254.80:9090/cards/${data.setCode}/${data.cardNumber}`)
        // .then(res => {
        //     cardData = res.data.data
        // })
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
            {#if cardData?.image == null}  
                <img src={cardData?.image} alt="card">
            {:else}
                <Skeleton width={500} height={400} />
            {/if}
        </div>
        <div class="cardInfo" style={`box-shadow: 2px 2px 10px 3px ${colorSwitch(cardData?.oldData?.color)}`}>
            <div class="heading">
                <h1>{cardData?.name} - {cardData?.title}</h1>
                <Ink cost={cardData?.ink_cost} />
            </div>
            <div class="subtypes">
                {#each cardData?.oldData?.subtypes as subtype}
                    <p>{subtype}</p>
                {/each}
            </div>
            <p>{parseBodyText(cardData?.oldData?.body_text)}</p>
            <div class="powerStat">
                <Strength strength={cardData?.attack}/>
                <Willpower willpower={cardData?.willpower} />
            </div>
            <span></span>
            <p>{cardData?.oldData?.flavor_text}</p>
            <div class="footer">
                <div class="cardNumber">
                    {cardData?.number}/{cardData?.pack}
                </div>
                <div class="rarity">
                    <p>{cardData?.oldData?.rarity}</p>
                </div>
                <div class="set">
                    {cardData?.oldData?.set_code}
                </div>
            </div>
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
            justify-content: space-between;
            align-items: center;
            gap: 10px;
            margin-top: 25px;
            padding: 20px;
        }
        .cardImage {
            display: flex;
            width: 30%;
        }
        .cardImage img {
            max-width: 100%;
        }

        .cardInfo {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            width: 70%;
            border-radius: 10px;
            min-height: 50vh;
            padding: 10px;
        }

        .cardInfo .heading {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
        }

        .cardInfo .subtypes {
            display: flex;
            width: 100%;
            padding: 5px 10px;
            margin: 5px;
            justify-content: space-evenly;
            align-items: center;
        }

        .cardInfo .powerStat {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            width: 100%;
        }

        .cardInfo span {
            display: block;
            width: 100%;
            margin: 10px;
            border-bottom: 2px solid black;
        }

        .cardInfo .footer {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            padding: 5px 10px;
        }

        .cardInfo .footer .rarity {
            display: flex;
            width: 100%;
            padding: 5px 10px;
            margin: 5px;
            justify-content: space-evenly;
            align-items: center;
        }
    } 
</style>