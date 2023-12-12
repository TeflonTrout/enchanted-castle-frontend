<!-- src/routes/Documentation.svelte -->
<script>
    export let title = "API and Database Access Documentation";
</script>
  
<main>
    <header>
      <h1>{title}</h1>
    </header>
  
    <section>
        <h2>Introduction</h2>
        <p>Welcome to the documentation for the Enchanted Castle API and database access. This guide provides comprehensive information on how to interact with our services, including API endpoints and database schema.</p>
    </section>
  
    <section>
      <h2>Table of Contents</h2>
      <nav>
        <ul>
          <li><a href="#api-documentation">API Documentation</a></li>
          <li><a href="#database-access">Database Access</a></li>
        </ul>
      </nav>
    </section>
  
    <section id="api-documentation">
      <h2>API Documentation</h2>

      <section>
        <h3>Authentication</h3>
        <p>Enchanted Castle API requires authentication using API keys. To obtain an API key, please contact our support team at <a href="mailto:support@example.com">support@example.com</a>. Include the API key in the Authorization header of your HTTP requests.</p>
      </section>
  
        <section>
            <h2>Cards</h2>
        
            <section>
              <h3>Search Cards</h3>
              <p>Search for cards based on advanced criteria.</p>
              <ul>
                <li><strong>URL:</strong> `/search`</li>
                <li><strong>Method:</strong> `GET`</li>
              </ul>
        
              <h4>Query Parameters</h4>
              <ul>
                <li><strong>sets</strong> (optional): Filter by set code.</li>
                <li><strong>colors</strong> (optional): Filter by color.</li>
                <li><strong>inkable</strong> (optional): Filter by inkable status.</li>
                <li><strong>inkCost</strong> (optional): Filter by ink cost.</li>
                <li><strong>loreValue</strong> (optional): Filter by lore value.</li>
                <li><strong>rarity</strong> (optional): Filter by rarity.</li>
                <li><strong>name</strong> (optional): Filter by name.</li>
              </ul>
        
              <h4>Response</h4>
            <pre>
                <code>
                    {`{\n "card_uid": "RFB-9",\n "name": "Grand Duke",\n // Other card properties\n}`}
                </code>
            </pre>
        </section>
  
      <!-- Add more sections for other aspects of API documentation -->
  
    </section>
  
    
      <section>
        <h2>Products</h2>
    
        <section>
          <h3>Get All Products</h3>
          <p>Get information about all products.</p>
          <ul>
            <li><strong>URL:</strong> `/products`</li>
            <li><strong>Method:</strong> `GET`</li>
          </ul>
    
          <h4>Response</h4>
          <pre>
            <code class="json">
                code
            </code>
          </pre>
        </section>
    
        <!-- Repeat similar sections for other product endpoints -->
    
      </section>
  </main>
  
<style>
    main {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        padding: 20px 100px;
        gap: 20px;
    }
    
    main section {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        gap: 10px;

    }

    pre {
        background-color: #f4f4f4;
        padding: 10px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    
    code {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        color: #c7254e;
    }
</style>
  