<script lang="ts">
  import axios from "axios";
  import { onMount } from "svelte";
  import type { Card } from "../../../../types/Card";
  import Ink from "../../../icons/ink.svelte";

    interface Props {
        setCode: string
        cardNumber: string
    }

    export let data:Props;
    let cardData:Card | null = null
    
    onMount(() => {
        axios.get(`http://192.168.254.80:9090/cards/${data.setCode}/${data.cardNumber}`)
        .then(res => {
            cardData = res.data.data
        })
    })

    function parseBodyText(bodyText:string | undefined) {
        if(bodyText != undefined) {
            const text = bodyText.replaceAll("{ink}", "⬡").replaceAll("{lore}", "◆").replaceAll("{strength}", "※")
            return text
        }
    }
</script>

<div class="individualCard">
    <div class="cardImage">
        <img src={cardData?.image} alt="card">
    </div>
    <div class="cardInfo">
        <div class="heading">
            <h1>{cardData?.name} - {cardData?.title}</h1>
            <Ink cost={cardData?.ink_cost} />
        </div>
        <div>
            <h3>{cardData?.type}</h3>
        </div>
        <div class="stat">
            <p>Strength:</p>
            <p>{cardData?.attack}</p>
        </div>
        <div class="stat">
            <p>Willpower:</p>
            <p>{cardData?.willpower}</p>
        </div>
        <p>{parseBodyText(cardData?.body_text)}</p>
    </div>
</div>

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
            box-shadow: 1px 1px 1px 1px black;
            padding: 10px;
        }

        .cardInfo .heading {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
        }

        .cardInfo .stat {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    } 
</style>