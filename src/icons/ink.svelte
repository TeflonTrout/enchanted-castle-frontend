

<script lang="ts">
    export let cost:number = 0;
</script>

<div class="ink">
    <p>{cost}</p>
    <div class="cost">
        <svg width="100%" height="100%" viewBox="0 0 68 79" version="1.1" xmlns="http://www.w3.org/2000/svg" style="color:#d2b886; fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2;">
            <g transform="matrix(1,0,0,1,-45.0171,-50.2611)">
                <path d="M78.945,50.261L112.873,69.849L112.873,109.026L78.945,128.615L45.017,109.026L45.017,69.849L78.945,50.261ZM78.945,55.51L108.328,72.474L108.328,106.402L78.945,123.366L49.563,106.402L49.563,72.474L78.945,55.51Z" style="fill: currentcolor;"/>
            </g>
        </svg>    
    </div>
</div>

<style>
    .ink {
        max-width: 40px;
        max-height: 40px;
        position: relative;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ink p {
        font-size: 20px;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 48%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>