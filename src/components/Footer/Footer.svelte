<script>
  import LinkArrows from "../../icons/linkArrows.svelte";

</script>
<div class="footer">
    <div class="column">
        <h1>Enhanted Castle</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat alias numquam soluta quaerat fugiat inventore impedit dolorem exercitationem, quibusdam optio!</p>
    </div>
    <div class="links">
        <div class="column">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="/"><LinkArrows />Home</a></li>
                <li><a href="/about"><LinkArrows />About</a></li>
                <li><a href="/search"><LinkArrows />Search</a></li>
                <li><a href="/"><LinkArrows />Sets</a></li>
            </ul>
        </div>
        <div class="column">
            <h3>Resources</h3>
            <ul>
                <li><a href="/docs"><LinkArrows />Documentation</a></li>
                <li><a href="/references"><LinkArrows />References</a></li>
                <li><a href="/issues"><LinkArrows />Report Issues</a></li>
            </ul>
        </div>
        <div class="column">
            <h3>Socials</h3>
            <ul>
                <li><LinkArrows />Discord</li>
                <li><LinkArrows />Twitter</li>
                <li><LinkArrows />LinkedIn</li>
            </ul>
        </div>
    </div>
</div>
<div class="copyright">
    <h5>All code written by <a href="https://github.com/teflontrout" target="_blank">@teflontrout on GitHub</a></h5>
    <p>Disclaimer: We are not associated with Disney or anything Disney related. All rights and franchises belong to Disney. I'm simply a guy who loves coding and card games. :&rbbrk;</p>
</div>

<style>
    .footer {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        background-color: #F7F7F8;
        padding: 40px 40px;
    }

    .footer .column {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 40%;
    }

    .footer .links {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        width: 60%;
    }
    
    .footer .links .column {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 33%;
    }

    .footer .links .column h3 {
        margin-bottom: 5px;
    }

    .footer ul {
        display: flex;
        flex-direction: column;
        width: 60%;
        gap: 5px;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .footer li {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        list-style: none;
        color: #7E8081;
        cursor: pointer;
    }
    
    .footer li:hover a {
        gap: 20px;
        transition: .1s ease-in-out;
    }
    
    .footer li a {
        color: inherit;
        text-decoration: none;
        gap: 10px;
        display: flex;
        transition: .3s ease-in-out;
    }

    .copyright {
        display: flex;
        flex-direction: column;
        padding: 20px;
        background-color: var(--ec-black);
        color: rgb(164, 164, 164);
    }

    .copyright a {
        color: purple;
        text-decoration: none;
    }

    .copyright h5 {
        font-size: 10px;
    }
    
    .copyright p {
        font-size: 8px;
    }
</style>