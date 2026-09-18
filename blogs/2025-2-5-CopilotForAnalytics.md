---
title: "How we built a reliable and secure AI based feature"
---
AI hallucinates! AI steals all your data! So how can you build solid, performant, and reliable AI based features for your customers?

Our engineers, **Siva Kumar Govindarajan** and **Duy Nguyen**, figured out how to use an LLM effectively while eliminating reliability and privacy concerns. We’re so happy with the results we wanted to share. If your organization is considering or is trying to create features using an LLM, here’s a successful example to reference.

<p></p>

The feature that we’re discussing is [Zuora Copilot for Analytics](https://docs.zuora.com?resourceId=platform-zuora-copilot-for-analytics). Zuora Billing has provided robust, pre-computed, and essential subscription metrics for our customers with [Zuora Platform Analytics](https://docs.zuora.com?resourceId=platform-zuora-analytics) for years. Enabling them both can help you make informed and data driven business decisions. Analytics and this new AI Copilot feature are available to all our Zuora Billing customers. While Analytics has long been GA (Generally Available), Copilot is in Beta and you need to request the feature be enabled in your tenant with a Support ticket or through your Zuora Account Team.

Over the years since we first released Analytics, we observed that deriving the maximum value requires a knowledge of the Billing business object model. We wanted a better solution, and what could be easier than typing in the question that you want answered? [Copilot for Analytics](https://docs.zuora.com?resourceId=platform-zuora-copilot-for-analytics) is where you can type in these types of questions and view the answers, often as a chart or graph. Questions like:

* Show me Net MRR by month for the past 12 months
* Report on churn over the last 12 months

Here is an example of a chart from a demo tenant showing the results of the first Net MRR question:

![Zuora Copilot sample chart](/blogs/images/NetMRRPast12Months.png)

We all know the acronym, AI, has a high and contentious profile. I’ll explain later how we accomplish this, but know that NONE of your Zuora tenant data has been, nor will be, shipped out to a third party LLM. Nor do we hide our use of AI. Copilot is just one AI related feature and like all the others, clearly identifies itself as an AI driven feature. But in this post, we’re only focused on Copilot for Analytics. Please reach out to your Zuora Account Team if you have any questions or concerns about these features and how they work.

## With privacy and hallucination concerns, how do you build a private and reliable feature?

Siva and Duy started their project by sending questions to the LLM asking it to generate SQL queries that would retrieve the data needed to answer the question. This did not go well, resulting in responses full of hallucinations and incorrect results.

They rethought their approach entirely trying to overcome these issues. Realizing that the metrics produced by our Analytics were based around 23 core SQL queries, they created a collection of 23 SQL query templates. Instead of asking the LLM to generate or reproduce those queries, they asked the LLM to recommend which of the 23 templates would best answer the user’s question? With some fine-tuning, they could get the LLM to identify the correct SQL template 99%% of the time.

Instead of having the LLM try to modify the SQL, they realized that the template queries could be readily customized for the specific user and their specific question using ordinary Java code that they would write. The modified SQL template would then be submitted to our SQL interface and Data Query as usual, and the results were returned without the LLM being involved.

Again for emphasis, the SQL templates are all generic SQL statements. There is no customer-specific data in any SQL query template. And these generic SQL statements are all the LLM sees. The query modification and query results are done after the LLM has told us which SQL template to use.

The actual changes made to the SQL by Siva and Duy’s code are question specific but examples would include:

* Adding custom fields unique to your tenant to the `select` clause
* Adding additional predicates to the `where` clause for the requested time period

That modified query is then submitted to our existing internal-only query services and the obtained results. Everything happens inside Zuora and it is as safe and secure as any SQL Data Query you might create in your tenant. Once the results are retrieved they are presented using some React and the Highcharts graphics package.


That is how Siva and Duy created an AI feature that is both reliable and private.


They’re not finished. The current LLM version in use is considered long in the tooth these days but while new models are popping out daily, the LLM used in our Copilot solution is clearly "good enough". After all it’s hard to beat 99%. Plus it’s very responsive and quick at recommending a template. A lot of the new stuff, for all their new abilities, are clearly lacking in responsiveness.


<p></p>


Let us know your questions or thoughts in the feedback widget to the right. Every response is read by a human. We’d love to know if you’d like to see more content like this.
