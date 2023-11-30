<script lang="ts">
    import { colorList, rarityList } from "../../utils/constants";
</script>

<div class="advancedSearchContainer">
    <div class="optionContainer">
        <h4>Colors</h4>
            {#each colorList as color}
                <div class="colorSelector">
                    <input type="checkbox" name="color" id="color" value={color} />
                    <label for="color">{color}</label>
                </div>
            {/each}
    </div>
    <div class="optionContainer">
        <h4>Ink Cost</h4>
        {#each ["1","2","3","4","5","6","7","8","9","10"] as cost}
            <div class="inkableSelector">
                <label for={cost}>{cost}</label>
                <input type="checkbox" name="cost" id={cost}>
            </div>
        {/each}
    </div>
    <div class="optionContainer">
        <h4>Inkable</h4>
        <div class="inkableSelector">
            <input type="radio" name="inkable" id="inkable">
            <label for="inkable">Inkable</label>
        </div>
        <div class="inkableSelector">
            <input type="radio" name="inkable" id="nonInkable">
            <label for="nonInkable">Non-Inkable</label>
        </div>
    </div>
    <div class="optionContainer">
        <h4>Rarity</h4>
        {#each rarityList as rarity}
            <div class="raritySelector">
                <input type="checkbox" name="rarity" id={rarity}>
                <label for={rarity}>{rarity}</label>
            </div>
        {/each}
    </div>
</div>

<style>
    .advancedSearchContainer {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        align-items: flex-start;
    }

    .advancedSearchContainer .optionContainer {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .advancedSearchContainer .optionContainer .colorSelector {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        gap: 3px;
        align-items: center;
    }

    .advancedSearchContainer .optionContainer .inkableSelector {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        gap: 3px;
        align-items: center;
    }

    .advancedSearchContainer .optionContainer .raritySelector {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        gap: 3px;
        align-items: center;
    }
</style>