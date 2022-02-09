<script>
  import Header from "../../component/layout/header.svelte";
  import Hero from "../../component/element/page-hero-content.svelte";
  import Meta from "../../component/element/meta.svelte";
</script>

<Meta titlePrefix="Data Request Policy - "/>

<Header overflowHidden={false} type="none">
    <Hero title="DATA REQUEST POLICY" text="Last Revised: December 20, 2019 at 10:43:50" btn="legal"/>
</Header>

<article class="px-8 lg:px-48 xl:px-60 py-24 leading-7 dark:font-light text-color6 bg-color1">
  <p class="mb-16 uppercase p-8 bg-color2 rounded-xl font-medium text-sm leading-6 z-10">This policy is solely intended to use by law enforcement or official representatives of government agencies. Figo only receives requests via proper channels from government agencies, users, and other third parties to disclose data other than in the ordinary operation and provision of the Services. This Data Request Policy outlines our policies and procedures for responding to such formal requests for Customer Data.</p>

  <p class="mb-4">We will investigate and record all reports of abuse submitted to us. Where appropriate, we may take action if a violation of any of our <a href="/legal">legal statements</a> is confirmed or when required to do so if an activity violates the policies of ICANN or appropriate registry. We may request additional information from you about your report. However, please note, we may not be able to provide you with specific updates in response to your submission due to privacy reasons. As part of our investigation, it may also be necessary to validate your complaint with our customer.</p>

  <p>Figo is committed to the importance of trust and transparency in the process we use and disclose our customers' data. Except as expressly permitted by the customer contract, Figo will only disclose customer data:<br>(a) under a valid legal request<br>(b) in the case of an emergency where there is a danger of death or serious physical injury to a person that Figo may have the information necessary to prevent.</p>

  <section class="pt-16">
    <h4>1. Privacy Notice</h4>
    Please see our <a href="/legal/privacy">Privacy Policy</a> for further information on what type of information we collect, how it is used, and when it may be disclosed. Subject to our Privacy Notice, this Data Request Policy describes the types of requests for data that we may receive and how we may respond to such requests.
  </section>

  <section class="pt-16">
    <h4>2. Types of Requests</h4>
    <p class="mb-4">We receive the following types of requests concerning customer data:</p>
    <ol>
        <li>
          <strong>Data Requests:</strong> A data request is a request for information or documents relating to customer accounts in connection with official criminal investigations or other official legal proceedings. Except in limited emergencies (see below), we require data requests to be made through formal legal processes and procedures, and we respond to such requests as required by law. Examples of data requests include:
          <ol>
              <li>Subpoenas</li>
              <li>Court Orders</li>
              <li>Search Warrants</li>
              <li>Legal process received from outside the United States may require a Mutual Legal Assistance Treaty (MLAT) with the United State</li>
              <li>Other forms of legal process such as Civil Investigative Demands</li>
          </ol>
        </li>
        <li>
          <strong>Preservation Requests: </strong> A preservation request asks Figo to preserve customer account records in connection with official criminal investigations or other official legal proceedings. Preservation requests must include the following information:
          <ol>
              <li>Identification of the account(s) at issue;</li>
              <li>Identification of the investigating agency and/or specific pending official proceedings (requests must be signed on law enforcement letterhead );</li>
              <li>Assurances that the requesting agency or individual is taking steps to obtain appropriate legal process for access to the data that we are being asked to retain; and</li>
              <li>A valid return email address and phone number.</li>
          </ol>
        </li>
        <li>
          <strong>Emergency Requests:</strong> An emergency request is only appropriate in cases involving imminent serious bodily harm or death. We respond to emergency requests when we believe in good faith that such harm may occur if we do not respond without delay.
        </li>
    </ol>
  </section>

  <section class="pt-16">
    <h4>3. Information to Include in a Request</h4>
    <p class="mb-4">The following information must be included in a request for customer data:</p>
    <ol class="mb-4">
      <li>First and last name of the customer and email address associated with the account; and</li>
      <li>The domain name and/or IP address or any Service associated with the account. <em>We may not be able to respond to a request without this information.</em>
        Additionally, we reserve the right to request a copy of the complaint and any supporting documentation that demonstrates how the information requested is related to the pending litigation and the underlying subpoena.</li>
    </ol>
    <p class="mb-4">Figo Host may not be able to respond to a request without this information.</p>
    <p class="font-bold text-sm">Additionally, Figo Host reserves the right to request a copy of the complaint and any supporting documentation that demonstrates how the information requested is related to the pending litigation and the underlying subpoena.</p>
  </section>

  <section class="pt-16">
    <h4>4. Notice to Customers</h4>
    Our policy is to notify customers of requests for their data unless we are prohibited from doing so by statute or court order.
  </section>

  <section class="pt-16">
    <h4>5. Submitting a Request</h4>
    <p class="mb-4">Figo Host,<br>29, UNC Street,<br>Amlapara, Kushtia, Bangladesh<br>Email: <a href="mailto:legal@figo.host">legal@figo.host</a></p>
    <p class="font-bold text-sm">IMPORTANT NOTE: IN THE EVENT YOU SEND US A NOTICE OF ANY KIND VIA EMAIL AND DO NOT RECEIVE A RESPONSE FROM US, PLEASE SUBMIT A DUPLICATE COPY VIA PAPER. DUE TO THE VAGARIES OF THE INTERNET AND EMAIL COMMUNICATION IN PARTICULAR, INCLUDING WITHOUT LIMITATION THE BURDENS OF SPAM AND THE OCCASIONAL UNINTENDED EFFECTS OF SPAM FILTERS, SENDING AN ALTERNATE FORM OF NOTICE, WILL HELP ASSURE THAT YOUR NOTICE IS RECEIVED BY US AND ACTED ON IN A TIMELY MANNER.</p>
  </section>

  <section class="pt-16">
    <h4>6. FEES</h4>
    We may seek reimbursement for costs in responding to requests as provided by law and may charge additional fees for costs in responding to unusual or burdensome requests.
  </section>


  <section class="pt-16">
    <h4>7. Available Information</h4>
    <p class="mb-4">Depending on the type of formal legal process provided, we may be able to respond with one or more of the following types of data:</p>
    <ol>
      <li>
        <strong>Non-Content</strong>. We will produce non-content information such as basic subscriber information which may include the following subject to a valid request:
        <ul>
          <li>Name</li>
          <li>Email addresses</li>
          <li>Date and time of account creation</li>
          <li>Billing information</li>
          <li>IP Logs</li>
        </ul>
      </li>
      <li><strong>Content</strong>. We will only produce customer content (such as website files and email content) pursuant to a valid search warrant from an entity with proper jurisdiction.</li>
    </ol>
  </section>
</article>

<style style lang="postcss" >
    article h4{
      @apply text-xl font-semibold mb-6;
    }
    article a{
      @apply font-semibold;
    }
    article strong{
      @apply font-semibold;
    }
    article ul, article ol{
      @apply list-inside;
    }
    article li{
      @apply mb-2;
    }
    article ul{
      @apply list-disc;
    }
    article ol{
      list-style-type: lower-alpha;
    }
    article > ol ol, article div > ol ol{
      list-style-type: lower-roman;
    }
</style>