<script lang="ts">
    export let value:number = 0;
</script>

<div class="lore">
    {#if value != 0}
        <p>{value}</p>
        <svg width="100%" height="100%" viewBox="0 0 36 51" version="1.1" xmlns="http://www.w3.org/2000/svg" style="fill-rule: evenodd; clip-rule:evenodd; stroke-linejoin: round; stroke-miterlimit: 2;">
            <g transform="matrix(1,0,0,1,-667.223,-730.659)">
                <g transform="matrix(1,0,0,1,0.0725875,4.84594)">
                <path d="M684.751,776.316C679.531,766.153 669.424,759.951 667.532,758.854C667.459,758.814 667.41,758.741 667.399,758.659C667.388,758.576 667.417,758.494 667.477,758.436C683.783,742.652 684.746,725.813 684.746,725.813C684.917,727.005 686.442,743.26 702.414,758.679C702.414,758.679 690.568,765.125 684.819,776.449L684.751,776.316Z" style="fill: currentcolor"/>
                </g>
                <g transform="matrix(1,0,0,1.11562,664.022,727.435)">
                    <path d="M20.869,20.054L30.256,31.618L20.869,38.066L11.73,31.618L20.869,20.054Z" style="fill: currentcolor; filter: invert(100%);"/>
                </g>
            </g>
        </svg> 
        {:else}    
        <svg width="100%" height="100%" viewBox="0 0 36 51" version="1.1" xmlns="http://www.w3.org/2000/svg" style="fill-rule: evenodd; clip-rule:evenodd; stroke-linejoin: round; stroke-miterlimit: 2;">
            <g transform="matrix(1,0,0,1,-667.223,-730.659)">
                <g transform="matrix(1,0,0,1,0.0725875,4.84594)">
                <path d="M684.751,776.316C679.531,766.153 669.424,759.951 667.532,758.854C667.459,758.814 667.41,758.741 667.399,758.659C667.388,758.576 667.417,758.494 667.477,758.436C683.783,742.652 684.746,725.813 684.746,725.813C684.917,727.005 686.442,743.26 702.414,758.679C702.414,758.679 690.568,765.125 684.819,776.449L684.751,776.316Z" style="fill: currentcolor"/>
                </g>
                <g transform="matrix(1,0,0,1.11562,664.022,727.435)">
                    <path d="M20.869,20.054L30.256,31.618L20.869,38.066L11.73,31.618L20.869,20.054Z" style="fill: currentcolor; filter: invert(100%);"/>
                </g>
            </g>
        </svg> 
    {/if}
</div>

<style>
    .lore {
        max-width: 25px;
        max-height: 25px;
        position: relative;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .lore p {
        font-size: 20px;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>