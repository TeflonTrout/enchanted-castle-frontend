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
    import {setArray} from "../../../utils/setArray.js"
    import { franchiseMap } from "../../../utils/franchiseArray";
    import DetailedCard from "../../../components/DetailedCard/DetailedCard.svelte";
    import Button from "../../../components/Button/Button.svelte";
    import { text } from "@sveltejs/kit";

    interface Props {
        setCode: string
        cardNumber: string
    }

    export let data:Props;
    let cardData:Card | null = null
    let previewArray:Card[] = [];
    
    onMount(() => {
        axios.get(`https://enchanted-castle-server.onrender.com/cards/${data.setCode}/${data.cardNumber}`)
        .then(res => {
            cardData = res.data.data
            console.log(res.data.data)
        })
        for (let i = -1; i > -3; i--) {
            axios.get(`https://enchanted-castle-server.onrender.com/cards/${data.setCode}/${Number(data.cardNumber) + i}`)
            .then(res => {
                previewArray = [...previewArray, res.data.data]
            })
        }
        for (let i = 1; i < 3; i++) {
            axios.get(`https://enchanted-castle-server.onrender.com/cards/${data.setCode}/${Number(data.cardNumber) + i}`)
            .then(res => {
                previewArray = [...previewArray, res.data.data]
            })
        }
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
        <div class="mainContainer">
            <div class="heading">
                <div class="nameContainer"> 
                    <h1>{cardData.name}</h1>
                    <h3>{cardData.subname}</h3>
                </div>
                <div>
                    <Button link={`../search?setCode=${cardData.set_code}`} text={setArray[cardData.set_id - 1]?.set_name}/>
                </div>
            </div>
            <div class="bodyText">
                {#each cardData.body_text as text}
                    <p>{parseBodyText(text)}</p>
                {/each}
            </div>
            <div class="cardInfo" >
                <div class="heading">
                    <h4>Product Details</h4>
                </div>
                <div class="container">
                    <div class="row">
                        <h5>Rarity:</h5>
                        <h5>{cardData.rarity}</h5>
                    </div>
                    <span></span>
                    <div class="row">
                        <h5>Number:</h5>
                        <h5>{cardData.number_in_set}</h5>
                    </div>
                    <span></span>
                    <div class="row">
                        <h5>Ink Cost:</h5>
                        <h5>{cardData.ink_cost}</h5>
                    </div>
                    <span></span>
                    <div class="row">
                        <h5>Color:</h5>
                        <h5><a href={`../search?color=${cardData.color}`} style={`color: ${colorSwitch(cardData.color)}`}>{cardData.color}</a></h5>
                    </div>
                    <span></span>
                    <div class="row">
                        <h5>Types:</h5>
                        {#if cardData.subtypes != null}                            
                            <h5>
                                {#each cardData.subtypes as subtype,idx}
                                    {idx + 1 != cardData.subtypes.length ? `${subtype} | ` : subtype}
                                {/each}
                            </h5>
                        {/if}                    
                    </div>
                    <span></span>
                    <div class="row">
                        <h5>Flavor Text:</h5>
                        <h5>{cardData.flavor}</h5>
                    </div>
                    <span></span>
                    <div class="row">
                        <h5>Illustrator:</h5>
                        <h5>{cardData.artist}</h5>
                    </div>
                    <span></span>
                    <div class="row">
                        <h5>Franchise:</h5>
                        <h5><a href={`../search?franchiseCode=${franchiseMap[Number(cardData.franchise.franchise_id) - 1]?.franchise_code}`}>{cardData.franchise.franchise_name} - ({cardData.franchise.franchise_code})</a></h5>
                    </div>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
    <div class="otherCards">
        <h1>Other Cards</h1>
        <div class="grid">
            {#each previewArray.sort((a,b) => {return a.number - b.number}) as card}
                <DetailedCard imgUrl={card.image} name={card.name} subname={card.subname} link={`../${card.set_code}/${card.number}`}/>
            {/each}
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
            justify-self: center;
            align-self: flex-start;
            width: 30%;
        }

        .cardImage img {
            max-height: 350px;
        }

        .mainContainer {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            width: 100%;
            padding: 0px 25px;
        }

        .mainContainer .heading {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }

        .mainContainer .heading .nameContainer {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 10px;
        }

        .mainContainer .bodyText {
            display: flex;
            flex-direction: column;
            justify-self: flex-start;
            align-items: flex-start;
            gap: 5px;
            margin-top: 20px;
            margin-bottom: 40px;
        }

        .mainContainer .heading .button p {
            color: #B100CE;
            text-align: center;
            width: 100%;
            white-space: nowrap;
        }

        .cardInfo {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            width: 75%;
            border-radius: 10px;
            min-height: 350px;
            padding: 25px;
            gap: 20px;
            box-shadow: 1px 1px 10px 3px #E4E4E4;
            border: 1px solid #E4E4E4;
            background: #FFF;
        }

        .cardInfo a {
            color: inherit;
            text-decoration: none;
            cursor: pointer;
            transition: .3s ease-in-out;
        }

        .cardInfo a:hover {
            opacity: 50%;
            transition: .3s ease-in-out;
        }

        .cardInfo .heading {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin: 0;
        }

        .cardInfo .container {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 10px;
            justify-content: flex-start;
            align-items: flex-start;
        }

        .cardInfo .container .row {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
        }

        .cardInfo .container .row h5 {
            width: 80%;
        }

        .cardInfo .container .row h5:first-child {
            width: 20%;
        }

        .cardInfo span {
            display: block;
            border: 1px dotted #DEE2E6;
            width: 100%
        }
        
        .cardInfo span:last-of-type {
            border: none;
        }
        
        .otherCards {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
        }

        .otherCards h1 {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin-bottom: 20px;
        }

        .otherCards .grid {
            display: grid;
            width: 100%;
            justify-content: center;
            align-content: center;
            align-items: center;
            justify-items: center;
            gap: 10px;
            grid-template-columns: repeat(auto-fill, minmax(200px, 250px));
            padding: 15px 40px;
        }
    } 
</style>