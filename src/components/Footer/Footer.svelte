<script>
    import LinkArrows from "../../icons/linkArrows.svelte";
    import EC from "../../images/EC_Logo_Transparent.png"
</script>

<div class="footer">
    <div class="heading">
        <a href="/"><img src={EC} alt="Enchanted Castle"></a>
        <a href="/"><h1>Enchanted Castle</h1></a>
    </div>
    <div class="links">
        <div class="column">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="/"><LinkArrows />Home</a></li>
                <li><a href="/about"><LinkArrows />About</a></li>
                <li><a href="/search"><LinkArrows />Search</a></li>
                <li><a href="/sets"><LinkArrows />Sets</a></li>
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
                <li><a href="/"><LinkArrows />Discord</a></li>
                <li><a href="/"><LinkArrows />Twitter</a></li>
                <li><a href="https://linkedin.com/in/jtkazousky" target="_blank" rel="noreferrer"><LinkArrows />LinkedIn</a></li>
            </ul>
        </div>
    </div>
</div>
<div class="copyright">
    <h5>All code written by <a href="https://github.com/teflontrout" target="_blank">@teflontrout on GitHub</a></h5>
    <p>Disclaimer: We are not associated with Disney or anything Disney related. All rights and franchises belong to Disney. I'm simply a guy who loves coding and card games. :&rbbrk;</p>
</div>

<style>
    /* MOBILE */
    @media (max-width: 768px) {
        .footer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            background-color: #e6d0fc;
            padding: 40px 20px;
        }

        .footer .heading {
            display: flex;
            justify-content: center !important;
            align-items: center;
            width: 100%;
        }

        .footer .links {
            margin-top: 10px;
            justify-content: space-evenly !important;
        }

        .footer .column {
            width: auto !important;
        }

        .footer ul {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 5px;
            justify-content: center !important;
            align-items: center !important;
        }

        .footer li {
            display: flex;
            justify-content: space-between !important;
            width: 100% !important;
            align-items: center;
            gap: 10px;
            text-decoration: none;
            list-style: none;
            color: #7E8081;
            cursor: pointer;
        }
    }

    /* @media (min-width: 768px) { */
        a {
            text-decoration: none;
            color: inherit;
        }
        
        .footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            background-color: #e6d0fc;
            padding: 40px 20px;
        }

        .footer .column {
            display: flex;
            flex-direction: column;
            justify-content: center !important;
            align-items: center !important;
            width: 40%;
        }

        .footer .heading {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            gap: 10px;
            color: var(--ec-purple)
        }

        .footer .heading img {
            width: 50px;
            padding-bottom: 10px;
        }

        .footer .links {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            width: 100%;
        }
        
        .footer .links .column {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            width: 30%;
        }

        .footer .links .column h3 {
            margin-bottom: 5px;
        }

        .footer ul {
            display: flex;
            flex-direction: column;
            width: 100%;
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
            gap: 20px !important;
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
    /* } */
</style>