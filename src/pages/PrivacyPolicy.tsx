
import React, { useState } from "react";
import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout";
import CategorySidebar from "@/components/CategorySidebar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  return (
    <SmoothieAppLayout
      sidebar={
        <CategorySidebar
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
          showAdvancedSearch={showAdvancedSearch}
          onAdvancedSearchToggle={setShowAdvancedSearch}
        />
      }
      mainContent={
        <div className="w-full max-w-5xl mx-auto px-4 py-8">
          <div className="mb-6 pl-2">
            <Link to="/">
              <Button variant="ghost" className="pl-0 flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">PRIVACY Policy</h1>
            <p className="text-gray-600 mt-2">Last updated: December 26, 2024</p>
          </div>

          <div className="prose prose-slate max-w-none">
            <p>
              Awesome Health LLC ("Awesome Health Club", "we", "our", or "us") respects and is committed to protecting your privacy. 
              This Privacy Notice lets you know how and for what purposes we are collecting, processing, and using your Personal Information 
              (as defined herein). We pledge that we will take reasonable steps to ensure that your Personal Information and Usage Information 
              (as defined herein) will only be used in ways that comply with this Privacy Notice.
            </p>

            <p>
              This Privacy Notice applies to any web page, mobile application, email list, onsite data collection, generic information, 
              and Personal Information collected and/or owned by us, including but not limited to our website located at 
              https://awesomehealthclub.com/. This Privacy Notice is in effect no matter the method of collection, including collection 
              through our website, blog, and any online features, products, services, and/or programs we offer, including our website 
              (collectively, the "Web Properties"). We will treat any offline collection, uses, and disclosures of your Personal Information 
              consistently with our online privacy practices set forth in this Privacy Notice. This Privacy Notice is not applicable to any 
              website, mobile application, social media site, generic information, or Personal Information collected and/or owned by any 
              entity other than us.
            </p>

            <p>
              Your use of the Web Properties is also governed by our Terms of Use located at https://awesomehealthclub.com/pages/terms-of-use.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Types of Information Collected</h2>

            <p>
              Awesome Health Club and any third party that we hire for the purpose of administering, operating, hosting, configuring, 
              designing, maintaining, and providing internal support for our Web Properties may collect two types of information when you 
              visit the Web Properties: Personal Information and Usage Information.
            </p>

            <p>
              <strong>Personal Information:</strong> The types of information that we collect may include, among other things, the following 
              categories of information (collectively, "Personal Information"):
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>contact information (e.g., your name, address, phone number, email address, shipping address);</li>
              <li>password and security questions and answers;</li>
              <li>demographic information;</li>
              <li>banking information (e.g., bank account and credit/debit card numbers, billing address); and</li>
              <li>other information specific to you.</li>
            </ul>

            <p>
              We do not collect any Personal Information from you when you visit our Web Properties unless you choose to provide such 
              information to us. You can browse the website without telling us who you are or revealing any information about yourself. 
              However, we will automatically collect Usage Information when you browse our website.
            </p>

            <p>
              <strong>Usage Information:</strong> The types of usage information that we collect may contain generic information about you 
              when you visit the Web Properties, which may include, among other things, the following categories of information 
              (collectively, "Usage Information"):
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Internet Protocol (or IP) address or device ID/UDID, protocol and sequence information;</li>
              <li>browser language and type;</li>
              <li>domain name system requests;</li>
              <li>browsing history (such as, time spent at a domain, time and date of your visit) and number of clicks;</li>
              <li>http headers, and operating system and fingerprinting data; and</li>
              <li>aggregated information.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-3">How Information Is Collected</h2>

            <p>We may collect Personal Information and Usage Information about you from the following sources:</p>

            <ul className="list-disc pl-6 mb-4">
              <li>the correspondence you and others send to us, including when you complete any online forms or send us an email;</li>
              <li>information we receive from you through the Web Properties and as a result of your use of our services, including when you create a user account ("User Account") to purchase our cereals or other products;</li>
              <li>information about your transactions with, or services performed by, us, our affiliates or nonaffiliated third parties;</li>
              <li>information we receive from your computer or mobile device;</li>
              <li>information we receive from our affiliates, partners or service providers; and</li>
              <li>information we receive from other sources, as permitted by applicable laws, rules and regulations.</li>
            </ul>

            <p>
              You may be able to sign up to join our mailing list or to receive notifications from us. If you sign up, we may from time to time 
              send you an email or other literature with information about one or more of our Web Properties and general information about us. 
              You can unsubscribe at any time by the means set forth in that communication.
            </p>

            <p>We may collect Usage Information from you in the following ways:</p>

            <p>
              <strong>Cookies:</strong> From time to time, we may use "cookies" to keep track of your visit and your use of the Web Properties 
              and to improve your experience on the Web Properties. A cookie is a small piece of data that your browser stores on your computer's 
              or device's hard drive and is used to collect information, such as identifying those areas of the Web Properties that you have 
              visited in the past in order to enhance your next visit to the Web Properties. You can choose whether to accept cookies by changing 
              the settings of your browser, but some functionality of the Web Properties may be impaired or not function as intended if you choose 
              not to accept cookies. Each browser is a little different, so look at your Help menu to learn the correct way to modify your cookies. 
              Cookies can be deleted by you, at any time, and will not collect any information when you are not accessing the Web Properties. By 
              using our Web Properties, you consent to our use of cookies.
            </p>

            <p>
              <strong>Google Analytics:</strong> We may use third party analytics services, such as Google Analytics, in connection with the Web 
              Properties. Such third party services may use cookies and similar technologies to collect and analyze information about use and to 
              report on activities and trends. Such services may also collect information regarding the use of other websites, applications, and 
              online resources. For more information about Google Analytics, please go to www.google.com/policies/privacy/partners/. You may 
              download the Google Analytics opt out browser add-on at https://tools.google.com/dlpage/gaoptout.
            </p>

            <p>
              <strong>Web Beacons:</strong> Some of our web pages and electronic communications may contain images, which may or may not be 
              visible to you, known as Web Beacons (sometimes referred to as "clear gifs"). Web Beacons collect only limited information that 
              includes a cookie number; time and date of a page view; and a description of the page on which the Web Beacon resides. These Web 
              Beacons do not carry any Personal Information and are only used to track usage of the Web Properties and activities associated 
              with the Web Properties.
            </p>

            <p>
              <strong>Unique Identifier:</strong> We may assign you a unique internal identifier to help keep track of your future visits. We may 
              use this information to gather aggregate demographic information about our visitors, and we use it to personalize the information 
              that you see on the Web Properties and some of the electronic communications you receive from us. We keep this information for our 
              internal use.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Use of Collected Information</h2>

            <p>Information collected by us may be used for the following primary purposes:</p>

            <ul className="list-disc pl-6 mb-4">
              <li>To provide products and services to you or any affiliate or third party who is obtaining services on your behalf or in connection with a transaction involving you.</li>
              <li>To improve our products and services.</li>
              <li>To personalize your experience on the Web Properties.</li>
              <li>To communicate with you and to inform you about our products and services.</li>
              <li>To help protect the safety and integrity of the Web Properties and our users.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-3">When Information Is Disclosed and Shared</h2>

            <p>We might disclose Personal Information and/or Usage Information when required by law or in the good-faith belief that such disclosure is necessary:</p>

            <ul className="list-disc pl-6 mb-4">
              <li>To comply with legal processes and applicable law.</li>
              <li>To enforce this Privacy Notice.</li>
              <li>To take precautions against liability and respond to any claim that any information provided by you violates the rights of a third party.</li>
              <li>To assist government enforcement agencies.</li>
              <li>To protect our rights, property, or the safety or the rights, property, or personal safety of our visitors and the public, which includes exchanging information with other companies and organizations for the purposes of fraud protection and credit risk reduction, and, if required by law, disclosing information to U.S. federal and state governmental agencies.</li>
              <li>To investigate potential unauthorized access or misuse of the Web Properties.</li>
              <li>To otherwise enforce or apply our Terms of Use and other agreements.</li>
            </ul>

            <p>
              We may transfer your Personal Information to third parties, including our hosting partners and other trusted third parties who assist 
              us in operating the Web Properties and as necessary for our business purposes. We maintain reasonable safeguards to keep your Personal 
              Information secure. When we provide Personal Information to our affiliates or third party service providers as discussed in this 
              Privacy Notice, we require that these parties agree to process such information in compliance with our Privacy Notice or in a manner 
              that complies with applicable privacy laws. The use of your information by a trusted business partner may be subject to that party's 
              own privacy policy.
            </p>

            <p>
              We may now or in the future share Usage Information with third parties to demonstrate the usage patterns for advertisements, content, 
              functionality, promotions, and/or services on the Web Properties and/or on third party websites, or as we otherwise see fit, consistent 
              with applicable law. Non-personally identifiable information, in an aggregated, anonymized form, such that you are not individually 
              identified, may be provided to other parties for marketing, advertising or other uses, as we see fit. We reserve the right to transfer 
              your Personal Information, as well as any information about or obtained from you, in connection with the merger, sale or other 
              disposition of all or part of our business and/or assets, or in the event of our bankruptcy, reorganization, insolvency, receivership, 
              or an assignment for the benefit of our creditors. You expressly agree and consent to the use and/or transfer of the foregoing information 
              in connection with any of the above described proceedings. We cannot and will not be responsible for any breach of security by any third 
              parties or for any actions of any third parties that receive any of the information that is disclosed to us.
            </p>

            <p>
              We may disclose your Personal Information for any purpose disclosed by us when you provide the information. We may also disclosure your 
              Personal Information with your permission or as directed by you.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Security and User Account</h2>

            <p>
              While we may provide certain encryption technologies and use other reasonable precautions to protect your confidential information and 
              provide suitable security, we do not and cannot guarantee or warrant that any information transmitted through the Internet is secure, 
              or that such transmissions are free from delay, interruption, interception or error.
            </p>

            <p>
              We use reasonable precautions to protect the privacy of your username, password and User Account information and to ensure that 
              information collected through the Web Properties is not lost, misused or altered inappropriately by administering security measures. 
              You are ultimately responsible for protecting your username, password and User Account information from disclosure to third parties, 
              and you are not permitted to circumvent the use of required encryption technologies. You agree to: (a) immediately notify us of any 
              unauthorized use of your username, password and/or User Account, and/or any other breach of security; and (b) ensure that you log out 
              from your User Account at the end of each session.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Information from Children</h2>

            <p>
              The Web Properties are not intended or designed to attract children under the age of thirteen (13). You affirm that you are at least 
              eighteen (18) years of age, or you are an emancipated minor, and are fully able and competent to enter into the terms, conditions, 
              obligations, affirmations, representations, and warranties set forth in this Privacy Notice, and to abide by and comply with this 
              Privacy Notice. In any case, by using the Web Properties, you affirm that you are over the age of thirteen (13), as THE WEB PROPERTIES 
              ARE NOT INTENDED FOR CHILDREN UNDER THIRTEEN (13) WHO ARE UNACCOMPANIED BY THEIR PARENT(S) OR LEGAL GUARDIAN(S).
            </p>

            <p>
              Parents and legal guardians should be aware that this Privacy Notice will govern our use of Personal Information, but also that 
              information that is voluntarily given by children (or others) in email exchanges, bulletin boards, or the like, may be used by other
              parties to generate unsolicited communications. We encourage all parents and legal guardians to instruct their children in the safe 
              and responsible use of their Personal Information while using the Internet.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Privacy Outside the Web Properties</h2>

            <p>
              The Web Properties may now or in the future contain various links to other websites, including, but not limited to, Facebook and 
              Instagram. We are not and cannot be responsible for the privacy practices or the content of any of those websites. Other than under 
              agreements with certain reputable organizations and companies, and except for third party service providers (as described in this 
              Privacy Notice), we do not share any of the Personal Information that you provide to us with any of the websites to which the Web 
              Properties link. Please check with those websites in order to determine their privacy policies and your rights under them.
            </p>

            <p>
              We may use the services of third party service providers to process transactions on our behalf, including processing your payment for 
              cereal and other products. By using our Web Properties, you grant us all necessary rights and consents under applicable laws to 
              disclose to our third party service providers -- or allow those third party service providers to collect, use, retain and disclose to 
              us -- any Personal Information for purposes of providing services and products to you, including data that we may collect directly 
              from you using cookies or other similar means.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">European Union Users</h2>

            <p>
              The Web Properties and our products are intended for individuals located in the United States, and your use of our products and 
              services are governed by United States law. We are not targeting or marketing to international users. If you are using the Web 
              Properties or our products or services from outside the United States, please be aware that your Personal Information and/or Usage 
              Information may be transferred to, stored, and processed in the United States where our servers are located and our central database 
              is operated. The data protection and other laws of the United States and other countries might not be as comprehensive as those in 
              your country. By using the Web Properties or our products and services, you consent to your Personal Information and Usage Information 
              being transferred to our facilities and to the facilities of those third parties with whom we share it as described in this Privacy 
              Notice. We will only process your Personal Information when we have a legal basis to do so. When we do process your Personal Information, 
              we will do so with your consent, or because the processing is necessary for the performance of services or to provide products to you, 
              to comply with our legal obligations, to pursue our legitimate interests, or to establish or defend a legal claim, and as further set 
              forth in this Privacy Notice.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Choices with Your Personal Information and Opting Out</h2>

            <p>
              Whether you submit any Personal Information to us is entirely up to you. You are under no obligation to provide any Personal Information 
              to us. However, this information is essential for the provision and quality of some of the services and products that we offer to you, 
              so we cannot provide you with certain services or products, or provide you with access to certain features, if you choose to withhold 
              requested information, for example providing products that require your payment information.
            </p>

            <p>
              You may choose to prevent us from disclosing or using your Personal Information under certain circumstances ("opt out"). You may opt out 
              of any disclosure or use of your Personal Information for purposes that are incompatible with the purpose(s) for which it was originally 
              collected or for which you subsequently gave authorization by notifying us by one of the methods at the end of this Privacy Notice, or by 
              following the procedures set forth in an electronic communication from us, if applicable. Furthermore, even where your Personal Information 
              is to be disclosed and used in accordance with the stated purposes in this Privacy Notice, you may elect to opt out of such disclosure to 
              and use by a third party that is not acting as our agent. There are some uses from which you cannot opt out, such as to provide products, 
              features or services that you have requested from us.
            </p>

            <p>
              Please note that making such requests does not ensure complete or comprehensive removal of your content. For example, we may retain the 
              information for our own internal records in accordance with the terms of this Privacy Notice.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Access and Correction</h2>

            <p>
              Please contact us in the manner specified at the end of this Privacy Notice to access your Personal Information in our possession and 
              correct inaccuracies of that information in our records. We ask individuals to identify themselves and the information requested to be 
              accessed and amended before processing such requests, and we may decline to process requests in limited circumstances, as permitted by 
              applicable laws, rules and regulations.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Your California Privacy Rights</h2>

            <p>
              Under California's "Shine the Light" law, California residents who provide certain personally identifiable information in connection with 
              obtaining products or services for personal, family, or household use are entitled to request and obtain from us (once per calendar year) 
              information about the information that we shared (if any) with other businesses for their own direct marketing uses. If applicable, this 
              information would include the categories of information and the names and addresses of those businesses with which we shared information 
              for the immediately prior calendar year. To obtain this information, please send an email message to hi@awesomehealthclub.com with "Request 
              for California Privacy Information" in the subject line and in the body of your message. We will provide the requested information to you 
              at your email address in response. Please be aware that not all information sharing is covered by the "Shine the Light" requirements, and 
              only information on covered sharing will be included in our response.
            </p>

            <p>
              California residents who use the Web Properties are also entitled to the following consumer rights notice: The Web Properties are owned 
              and/or operated by Awesome Health Club. Unless expressly stated, the Web Properties are provided without charge. If you have a question 
              or complaint regarding the services or products provided through the Web Properties, please send an email to hi@awesomehealthclub.com. 
              You may also contact us by writing to us at 1 E Erie St, Suite 525-2207 Chicago, IL 60611. California residents may reach the Complaint 
              Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs by mail at 1625 North Market Blvd., 
              Suite N 112, Sacramento, CA 95834, or by telephone at (916) 445-1254 or (800) 952-5210.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">"Do Not Track" Signals</h2>

            <p>
              Because we may collect your Personal Information from time to time for our own use, we are required to disclose how we respond to "Do Not 
              Track" requests, signals and other similar mechanisms. Note that your browser settings may allow you to automatically transmit a "Do Not 
              Track" signal to websites and online services that you visit. Like many websites and online services, we currently do not alter our 
              practices when we receive a "Do Not Track" signal from a visitor's browser. To find out more about "Do Not Track," you may wish to visit 
              www.allaboutdnt.com.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Text Marketing & Notifications</h2>

            <p>
              By subscribing to text marketing notifications you agree to receive recurring automated marketing messages and shopping cart reminder 
              messages at the phone number provided. Consent is not a condition of purchases. Reply STOP to unsubscribe. HELP for help. Msg & Data 
              rates may apply. More info view ToS. We determine a cart abandoned by using a cookie and check whether the existing user has already 
              opted in for text marketing.
            </p>

            <p>
              If you do not wish to be part of our service you can unsubscribe at any time by testing STOP, CANCEL, QUIT, END, or UNSUBSCRIBE to any 
              mobile message received from us. You may get another text message confirming your unsubscribing from our service. You also agree that by 
              sending an email, calling in, or sending any other means of opt out unsubscribe request or using words different than the ones presented 
              above will not be reasonable means to unsubscribe you.
            </p>

            <p>
              Text marketing (if applicable): With your permission, we may send text messages about our store, new products, and other updates. Updates 
              include Checkout Reminders. Webhooks will be used to trigger the Checkout Reminders messaging system.
            </p>

            <p>
              If your device does not support MMS we will deliver a SMS instead and strip the image. The opt out will also be delivered as a standard 
              text message (SMS) Carriers (AT&T, T-mobile, Verizon, T-Mobile, Sprint, Rogers, MetroPCS, etc) are not responsible or liable for 
              undelivered or delayed messages.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Your Consent to This Privacy Notice</h2>

            <p>
              By accessing and using the Web Properties, you consent to the collection and use of your information (including Personal Information) by 
              us as specified above or as we otherwise see fit, in compliance with this Privacy Notice, unless you inform us otherwise by means of the 
              procedure identified below. If we decide to change this Privacy Notice or some part of it, we will make an effort to post those changes 
              on this web page so that you will always be able to understand what information we collect, how we use that information and under what 
              circumstances we may disclose that information to others. Your use of the Web Properties following our publication of any amendment of 
              this Privacy Notice will signify your assent to and acceptance of its revised terms for all previously collected information and 
              information collected from you in the future. We may use comments, information or feedback that you may submit in any manner that we may 
              choose without notice or compensation to you.
            </p>

            <p>
              If you have questions or comments or would like to access your Personal Information or opt out of certain sharing, please let us know by 
              sending your comments or requests to:
            </p>

            <div className="mt-4">
              <address className="not-italic">
                Awesome Health LLC.<br />
                1 E Erie St,<br />
                Suite 525-2207<br />
                Chicago, IL 60611<br />
                Email: hi@awesomehealthclub.com
              </address>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default PrivacyPolicy;
