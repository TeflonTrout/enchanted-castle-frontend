<div class="footer">
    <div class="column">
        <h1>EC</h1>
    </div>
    <div class="column">
        <h4><a href="/">Home</a></h4>
        <h4><a href="/about">About</a></h4>
        <h4><a href="/resources">Resources</a></h4>
    </div>
    <div class="column">
        <h4><a href="/search">Search</a></h4>
        <h4><a href="/documentation/v1">Documentation</a></h4>
    </div>
</div>

<style>
    .footer {
        margin-top: 50px;
        position: relative;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: row;
        width: 100%;
        padding: 25px;
        justify-content: space-between;
        color: black;
        background-color: #ccc;
    }

    .footer .column {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .footer .column a {
        color: black;
        text-decoration: none;
        text-transform: uppercase;
    }
</style>