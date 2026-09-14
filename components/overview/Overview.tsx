import * as React from 'react';
import './HomePage.css';
import playCircle from './icons/play-circle.svg';
import bookOpenText from './icons/book-open-text.svg';
import books from './icons/books.svg';
import arrowsClockwise from './icons/arrows-clockwise.svg';
import invoice from './icons/invoice.svg';
import handCoins from './icons/hand-coins.svg';
import wrench from './icons/wrench.svg';
import table from './icons/table.svg';
import newspaper from './icons/newspaper.svg';
import users from './icons/users.svg';
import listMagnifyingGlass from './icons/list-magnifying-glass.svg';
import lockKeyOpen from './icons/lock-key-open.svg';
import code from './icons/code.svg';
import sliders from './icons/sliders.svg';

export function Overview() {
  const [activeView, setActiveView] = React.useState<'products' | 'use-cases'>('products');

  const handleToggle = (view: 'products' | 'use-cases') => {
    setActiveView(view);
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <header className="hero-section">
        <h1>Welcome, Zuora Developers!</h1>
        <p>Automate billing, manage subscriptions, and extend Zuora's capabilities.</p>
      </header>

      {/* Getting Started Section */}
      <section className="getting-started-section">
        <div className="card-grid">
          <div className="card">
            <h3>
              <span className="icon">
                <img src={playCircle} alt="Play" style={{width: '1.2em', height: '1.2em', verticalAlign: 'middle'}} />
              </span> 
              Get Started & FAQs
            </h3>
            <ul>
              <li><a href="/docs/get-started/introduction/" target="_blank" rel="noopener noreferrer">Get started</a></li>
              <li><a href="/docs/get-started/basics/" target="_blank" rel="noopener noreferrer">Zuora Billing basics</a></li>
              <li>
                <a href="/faq/billing-faq/" target="_blank" rel="noopener noreferrer">Billing FAQs</a>
              </li>
              <li> 
                <a href="/faq/payments-faq/" target="_blank" rel="noopener noreferrer">Payments FAQs</a>
              </li>
            </ul>
          </div>
          
          <div className="card">
            <h3>
              <span className="icon">
                <img src={bookOpenText} alt="Tutorials" style={{width: '1.2em', height: '1.2em', verticalAlign: 'middle'}} />
              </span> 
              Tutorials & Samples
            </h3>
            <ul>
              <li><a href="/docs/get-started/api-tutorials/orders-tutorials/order-basics/" target="_blank" rel="noopener noreferrer">Orders tutorial</a></li>
              <li><a href="/docs/get-started/tutorials" target="_blank" rel="noopener noreferrer">Shopping cart tutorial</a></li>
              <li><a href="/docs/get-started/tutorials/collect-payments/" target="_blank" rel="noopener noreferrer">Collect payments on your website</a></li>
            </ul>
          </div>
          
          <div className="card">
            <h3>
              <span className="icon">
                <img src={books} alt="Books" style={{width: '1.2em', height: '1.2em', verticalAlign: 'middle'}} />
              </span> 
              Important To Know
            </h3>
            <ul>
              <li><a href="/v1-api-reference/object-model/" target="_blank" rel="noopener noreferrer">Zuora Billing object model</a></li>
              <li><a href="/docs/guides/rate-limits/" target="_blank" rel="noopener noreferrer">Rate limits</a></li>
              <li><a href="/v1-api-reference/api" target="_blank" rel="noopener noreferrer">OpenAPI Spec & Postman</a></li>
              <li><a href="/docs/guides/expand-filter-fields-sort/" target="_blank" rel="noopener noreferrer">Object Query basics</a></li>
            </ul>
          </div>
          
          <div className="card">
            <h3>
              <span className="icon">
                <img src={arrowsClockwise} alt="Changelogs" style={{width: '1.2em', height: '1.2em', verticalAlign: 'middle'}} />
              </span> 
              Changelogs
            </h3>
            <ul>
              <li><a href="/docs/get-started/changelogs/v1-api-changelog/" target="_blank" rel="noopener noreferrer">v1 API changelog</a></li>
              <li><a href="/v1-api-reference/api-upgrades/" target="_blank" rel="noopener noreferrer">v1 API upgrades changelog</a></li>
              <li><a href="/docs/get-started/changelogs/public-api-changelog/" target="_blank" rel="noopener noreferrer">Zephr public API changelog</a></li>
              <li><a href="/docs/get-started/changelogs/admin-api-changelog/" target="_blank" rel="noopener noreferrer">Zephr admin API changelog</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Explore APIs Section */}
      <section className="explore-apis-section">
        <h2 style={{textAlign: 'center'}}>Explore the APIs</h2>
        
        {/* Toggle Buttons */}
        <div className="toggle-container">
          <button 
            className={`toggle-btn ${activeView === 'products' ? 'active' : ''}`}
            onClick={() => handleToggle('products')}>
            Products
          </button>
          <button 
            className={`toggle-btn ${activeView === 'use-cases' ? 'active' : ''}`}
            onClick={() => handleToggle('use-cases')}>
            Use Cases
          </button>
        </div>

        {/* Products View */}
        {activeView === 'products' && (
          <div className="card-grid">
            <div className="card">
              <h4>
                <span className="icon">
                  <img src={invoice} alt="Invoice" style={{width: '1.2em', height: '1.2em', verticalAlign: 'middle'}} />
                </span> 
                Zuora Billing
              </h4>
              <ul>
                <li><a href="/v1-api-reference/introduction/" target="_blank" rel="noopener noreferrer">v1 API reference</a></li>
                <li><a href="/v1-api-reference/api" target="_blank" rel="noopener noreferrer">OpenAPI specification & Postman</a></li>
                <li><a href="/docs/get-started/introduction/" target="_blank" rel="noopener noreferrer">Get an OAuth access token</a></li>
              </ul>
            </div>
            
            <div className="card">
              <h4>
                <span className="icon">
                  <img src={handCoins} alt="Collect" style={{width: '1.2em', height: '1.2em', verticalAlign: 'middle'}} />
                </span> 
                Zuora Payments
              </h4>
              <ul>
                <li><a href="/docs/get-started/tutorials/collect-payments/" target="_blank" rel="noopener noreferrer">Embed payment form in a site</a></li>
                <li><a href="/docs/get-started/tutorials/create-orders/" target="_blank" rel="noopener noreferrer">Place an order and collect payment</a></li>
                <li><a href="/v1-api-reference/api/payments/post_createpayment" target="_blank" rel="noopener noreferrer">Create a payment</a></li>
              </ul>
            </div>
            
            <div className="card">
              <h4>
                <span className="icon">
                  <img src={wrench} alt="Platform" style={{width: '1.2em', height: '1.2em', verticalAlign: 'middle'}} />
                </span> 
                Zuora Platform
              </h4>
              <ul>
                <li><a href="/docs/guides/expand-filter-fields-sort/" target="_blank" rel="noopener noreferrer">Synchronous Object Query</a></li>
                <li><a href="/v1-api-reference/api/data-queries/" target="_blank" rel="noopener noreferrer">Data Query (SQL) API</a></li>
                <li><a href="/v1-api-reference/api/custom-object-definitions/" target="_blank" rel="noopener noreferrer">Custom Objects API</a></li>
                <li><a href="/v1-api-reference/api/workflows/" target="_blank" rel="noopener noreferrer">Workflow API</a></li>
              </ul>
            </div>

            <div className="card">
              <h4>
                <span className="icon">
                  <img src={table} alt="Revenue" style={{width: '1.2em', height: '1.2em', verticalAlign: 'middle'}} />
                </span> 
                Zuora Revenue
              </h4>
              <ul>
                <li><a href="/other-api/revenue/overview/#section/Introduction" target="_blank" rel="noopener noreferrer">Revenue API introduction</a></li>
                <li><a href="/other-api/revenue/tag/Authentication/" target="_blank" rel="noopener noreferrer">Revenue API authentication</a></li>
                <li><a href="/other-api/revenue/tag/File-Upload/" target="_blank" rel="noopener noreferrer">Upload event or transaction file</a></li>
              </ul>
            </div>
            
            <div className="card">
              <h4>
                <span className="icon">
                  <img src={sliders} alt="Zephr" style={{width: '1.2em', height: '1.2em', verticalAlign: 'middle'}} />
                </span> 
                Zephr
              </h4>
              <ul>
                <li><a href="/zephr-api-reference/zephr-admin-api/" target="_blank" rel="noopener noreferrer">Admin API reference</a></li>
                <li><a href="/zephr-api-reference/zephr-public-api/" target="_blank" rel="noopener noreferrer">Public API reference</a></li>
              </ul>
            </div>
          </div>
        )}

        {/* Use Cases View */}
        {activeView === 'use-cases' && (
          <div className="card-grid">
            <div className="card">
              <h4>
                <span className="icon">
                  <img src={newspaper} alt="Subscriptions" style={{width: '1.2em', height: '1.2em', verticalAlign: 'middle'}} />
                </span> 
                Manage Subscriptions
              </h4>
              <ul>
                <li><a href="/docs/get-started/api-tutorials/orders-tutorials/create-subscriptions/" target="_blank" rel="noopener noreferrer">Create subscriptions</a></li>
                <li><a href="/v1-api-reference/api/subscriptions/get_subscriptionsbykey" target="_blank" rel="noopener noreferrer">Retrieve a specific subscription</a></li>
                <li><a href="/v1-api-reference/api/subscriptions/get_subscriptionsbyaccount" target="_blank" rel="noopener noreferrer">List account's subscriptions</a></li>
              </ul>
            </div>
            
            <div className="card">
              <h4>
                <span className="icon">
                  <img src={users} alt="Accounts" style={{width: '1.2em', height: '1.2em', verticalAlign: 'middle'}} />
                </span> 
                Customer Accounts
              </h4>
              <ul>
                <li><a href="/v1-api-reference/api/accounts/post_account" target="_blank" rel="noopener noreferrer">Create an account</a></li>
                <li><a href="/v1-api-reference/api/accounts/put_account" target="_blank" rel="noopener noreferrer">Update an account</a></li>
                <li><a href="/v1-api-reference/api/accounts/get_accountsummary" target="_blank" rel="noopener noreferrer">Retrieve an account summary</a></li>
              </ul>
            </div>
            
            <div className="card">
              <h4>
                <span className="icon">
                  <img src={invoice} alt="Invoices" style={{width: '1.2em', height: '1.2em', verticalAlign: 'middle'}} />
                </span> 
                Invoicing
              </h4>
              <ul>
                <li><a href="/v1-api-reference/api/invoices/get_getinvoice" target="_blank" rel="noopener noreferrer">Retrieve an invoice</a></li>
                <li><a href="/v1-api-reference/api/invoices/put_updateinvoice" target="_blank" rel="noopener noreferrer">Update an invoice</a></li>
                <li><a href="/v1-api-reference/api/invoices/put_reverseinvoice" target="_blank" rel="noopener noreferrer">Reverse an invoice</a></li>
                <li><a href="/v1-api-reference/api/invoices/post_standaloneinvoice" target="_blank" rel="noopener noreferrer">Create a standalone invoice</a></li>
              </ul>
            </div>
            
            <div className="card">
              <h4>
                <span className="icon">
                  <img src={handCoins} alt="Payments" style={{width: '1.2em', height: '1.2em', verticalAlign: 'middle'}} />
                </span> 
                Payments & Refunds
              </h4>
              <ul>
                <li><a href="/v1-api-reference/api/payments/post_createpayment" target="_blank" rel="noopener noreferrer">Create a payment</a></li>
                <li><a href="/v1-api-reference/api/payments/get_payment" target="_blank" rel="noopener noreferrer">Retrieve a payment</a></li>
                <li><a href="/v1-api-reference/api/payments/post_refundpayment" target="_blank" rel="noopener noreferrer">Refund a payment</a></li>
              </ul>
            </div>
            
            <div className="card">
              <h4>
                <span className="icon">
                  <img src={listMagnifyingGlass} alt="Query" style={{width: '1.2em', height: '1.2em', verticalAlign: 'middle'}} />
                </span> 
                Querying
              </h4>
              <ul>
                <li><a href="/docs/guides/expand-filter-fields-sort/" target="_blank" rel="noopener noreferrer">Object Query API basics</a></li>
                <li><a href="/v1-api-reference/api/data-queries/post_dataqueryjob" target="_blank" rel="noopener noreferrer">Submit a SQL query (Data Query)</a></li>
                <li><a href="/v1-api-reference/api/data-queries/get_dataqueryjob" target="_blank" rel="noopener noreferrer">Retrieve a SQL Query's results</a></li>
              </ul>
            </div>
            
            <div className="card">
              <h4>
                <span className="icon">
                  <img src={table} alt="Revenue" style={{width: '1.2em', height: '1.2em', verticalAlign: 'middle'}} />
                </span> 
                Revenue Automation
              </h4>
              <ul>
                <li><a href="/other-api/revenue/overview/#section/Introduction" target="_blank" rel="noopener noreferrer">Revenue API reference</a></li>
                <li><a href="/other-api/revenue/tag/Authentication/" target="_blank" rel="noopener noreferrer">Revenue authentication</a></li>
                <li><a href="/other-api/revenue/tag/File-Upload/" target="_blank" rel="noopener noreferrer">Upload event or transaction file</a></li>
                <li></li>
              </ul>
            </div>
            
            <div className="card">
              <h4>
                <span className="icon">
                  <img src={lockKeyOpen} alt="Authentication" style={{width: '1.2em', height: '1.2em', verticalAlign: 'middle'}} />
                </span> 
                Billing Authentication
              </h4>
              <ul>
                <li><a href="/docs/get-started/introduction/" target="_blank" rel="noopener noreferrer">Zuora Billing authentication</a></li>
                <li><a href="/v1-api-reference/api/oauth/createtoken" target="_blank" rel="noopener noreferrer">Obtain an OAuth bearer token</a></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        )}
      </section>

      {/* Explore SDKs Section */}
      <section className="explore-sdks-section">
        <h2 style={{textAlign: 'center'}}>Explore the SDKs</h2>
        <div className="card-grid">
          <div className="card">
            <h4>
              <span className="icon">
                <img src={code} alt="Code" style={{width: '1.2em', height: '1.2em', verticalAlign: 'middle'}} />
              </span> 
              Zuora Billing SDKs
            </h4>
            <ul>
              <li><a href="/docs/guides/libraries/" target="_blank" rel="noopener noreferrer">Access Zuora SDKs</a></li>
              <li>
                <a href="/sdk-references/java-sdk-reference/" target="_blank" rel="noopener noreferrer">Java</a>,   
                <a href="/sdk-references/node-sdk-reference/" target="_blank" rel="noopener noreferrer"> Node.js</a>,  
                <a href="/sdk-references/python-sdk-reference/" target="_blank" rel="noopener noreferrer"> Python</a>,  
                <a href="/sdk-references/csharp-sdk-reference/" target="_blank" rel="noopener noreferrer"> C#</a>
              </li>
              <li><a href="/sdk-changelogs/changelog-overview/" target="_blank" rel="noopener noreferrer">SDK Changelogs</a></li>
            </ul>
          </div>
          
          <div className="card">
            <h4>
              <span className="icon">
                <img src={code} alt="Code" style={{width: '1.2em', height: '1.2em', verticalAlign: 'middle'}} />
              </span> 
              Zephr SDKs
            </h4>
            <ul>
              <li><a href="/zephr-docs/zephr-sdk/zephr-sdk-reference/javascript-sdk" target="_blank" rel="noopener noreferrer">JavaScript</a></li>
              <li><a href="/zephr-docs/zephr-sdk/zephr-sdk-reference/browser-sdk" target="_blank" rel="noopener noreferrer">Browser</a></li>
              <li><a href="/zephr-docs/zephr-sdk/zephr-sdk-reference/swift-sdk" target="_blank" rel="noopener noreferrer">Swift (iOS)</a></li>
              <li><a href="/zephr-docs/zephr-sdk/zephr-sdk-reference/php-sdk" target="_blank" rel="noopener noreferrer">PHP</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Developer Resources Section */}
      <section className="dev-resources-section">
        <h2 style={{textAlign: 'center'}}>Other Developer Resources</h2>
        <div className="card-grid">
          <div className="card">
            <h4>System Status</h4>
            <ul>
              <li><a href="https://one.zuora.com/one-id/private-trust" target="_blank" rel="noopener noreferrer">Trust status</a></li>
            </ul>
            <ul>
              <li>Monitor the status, performance, and reliability of Zuora services. Login required.</li>
            </ul>
          </div>
          
          <div className="card">
            <h4>Developer Blog</h4>
            <ul>
              <li><a href="/blogs/introduction/" target="_blank" rel="noopener noreferrer">Stories from our trenches</a></li>
            </ul>
            <ul>
              <li>Read our developer blogs to stay current with Zuora.</li>
            </ul>
          </div>
          
          <div className="card">
            <h4>What's New?</h4>
            <ul>
              <li><a href="https://community.zuora.com/communities/community-home?communitykey=e2a932b4-50c4-4019-a3e8-362e38714df3" target="_blank" rel="noopener noreferrer">Developer community</a></li>
            </ul>
            <ul>
              <li>Regular posts about new developer features and updates. Email registration required.</li>
            </ul>
          </div>

          <div className="card">
            <h4>Zuora University</h4>
            <ul>
              <li><a href="https://university.zuora.com/" target="_blank" rel="noopener noreferrer">Zuora University</a></li>
            </ul>
            <ul>
              <li>Self-paced training, certification, and live and instructor-led classes. Email registration required.</li>
            </ul>
          </div>

          <div className="card">
            <h4>Support</h4>
            <ul>
              <li><a href="https://support.zuora.com/" target="_blank" rel="noopener noreferrer">Zuora Support Center</a></li>
              </ul>
              <ul>
              <li>You can also click the ? icon on any page in the UI to access the Zuora Support Center.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
