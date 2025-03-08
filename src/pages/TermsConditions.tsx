
import React, { useState } from "react";
import SmoothieAppLayout from "@/components/layouts/SmoothieAppLayout";
import CategorySidebar from "@/components/CategorySidebar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsConditions = () => {
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
            <h1 className="text-3xl font-bold">Terms of Use</h1>
            <p className="text-gray-600 mt-2">Last updated: December 26, 2024</p>
          </div>

          <div className="prose prose-slate max-w-none">
            <p>
              Please read the following Terms of Use (these "Terms") carefully before using the Awesome Health Club. ("Awesome Health Club", "we," "our", or "us") website, located at https://Awesomecoffee.com/ purchasing any Awesome Health Club product (the "Product/s") or participating in any online features, services and/or programs offered by us, including our website (collectively, the "Web Properties"). These Terms apply to all of our Web Properties and Products.
            </p>

            <p>
              These Terms do not apply to any other web page operated and/or owned by anyone other than Awesome Health Club and its affiliates, including, but not limited to, any website, mobile application, social media site, or other material. When visiting these third party websites and other properties, you should refer to the terms and conditions in effect for that website or property.
            </p>

            <p className="font-semibold">
              PLEASE REVIEW THE TERMS CAREFULLY, PARTICULARLY SECTION 10 (a) DETAILING THE SUBSCRIPTION SERVICE, SECTION 10 (d) DETAILING CANCELLATION POLICY, SECTION 8(c) RELATED TO ALLERGENS, AND SECTION 17 RELATED TO BINDING ARBITRATION.
            </p>

            <p>
              These Terms include important information about your legal rights, remedies, and obligations, including various limitations and exclusions, and provisions that govern the procedure, jurisdiction and venue of any disputes. By accessing or using the Web Properties, you are entering into a legal contract with us regarding your use of the Web Properties. You agree to be bound by these Terms and all additional terms incorporated by reference. If you do not agree to any portion of these Terms, you should not access or otherwise use the Web Properties.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Convenience and Information Only</h2>
            <p>
              Subject to these Terms, we hereby grant you a non-transferable, non-exclusive, limited license to use and access the Web Properties for your non-commercial use. The Web Properties are provided to you as a convenience and for your information only. By merely providing you access to and use of the Web Properties, we do not warrant or represent that: (a) any statement, documents, images, graphics, logos, designs, audio, video, or any other information provided from or on the Web Properties (collectively, the "Content") is accurate or complete; (b) the Content is up-to-date or current; (c) we have any obligation to update any Content; (d) the Content is free from technical inaccuracies or programming or typographical errors; (e) the Content is free from changes made by a third party; (f) your access to the Web Properties will be free from interruptions, errors, computer viruses or other harmful components; and/or (g) any information obtained in response to comments or questions asked through the Web Properties is or will be accurate or complete.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Web Properties Use and Content</h2>
            <p>
              <strong>Use of the Web Properties.</strong> The ownership of the Web Properties, Content, and all rights therein are and will remain with Awesome Health Club. You may view, copy or print a single copy of any page from the Web Properties for non-commercial purposes if you do not remove, modify, or alter any copyright or proprietary rights notices that may be present. You may not otherwise use, modify, copy, print, display, distribute, publish, or sell any information, images or other Content from the Web Properties without our express, prior written consent. Any special rules for any software, downloads, and other items accessible through the Web Properties may be included elsewhere in the Web Properties and are incorporated into these Terms by reference.
            </p>

            <p>
              <strong>Restrictions on Use.</strong> You may not: (i) remove or obscure any copyright, trademark, digital watermarks, proprietary legends or other proprietary notices from any portion of the Web Properties; (ii) reproduce, modify, prepare derivative works based upon, distribute, license, lease, sell, resell, transfer, publicly display, publicly perform, transmit, stream, broadcast or otherwise exploit the Web Properties, or any aspect of them, except as expressly permitted by us; (iii) decompile, reverse engineer, jeopardize the correct functioning of the Web Properties, or disassemble the Web Properties, or otherwise attempt to derive the source code of the software (including the tools, processes, methods, and infrastructure) that enables or underlies the Web Properties, except as may be permitted by applicable law; (iv) cause or launch any programs, spiders, robots, or scripts or other automatic or manual devices or processes for the purpose of extracting, scraping, indexing, surveying, or otherwise data mining any portion of the Web Properties, or unduly burdening or hindering the operation and/or functionality of any aspect of the Web Properties; (v) attempt to gain unauthorized access to or impair any aspect of the Web Properties, or the related systems, servers, or networks; (vi) use the Web Properties for resale, time-sharing or other similar purposes; (vii) use the Web Properties to stalk, harass or harm another individual, or in any way that is in violation of any law or regulation; (viii) impersonate any person or entity, or otherwise misrepresent your affiliation with any person or entity; or (ix) use any portion of the Web Properties or any Content in any manner that may give a false or misleading impression, attribution or statement as to us or any other person or entity.
            </p>

            <p>
              <strong>Updates.</strong> We may make changes to the Web Properties, the Content or these Terms or stop providing any of the Web Properties and/or the Content at any time and without further notice to you. We will make an effort to update the Web Properties with any changes to these Terms, and you are encouraged to review these Terms frequently (the date of the most recent revision to these Terms appears at the end of these Terms). Your continued access or use of the Web Properties after such posting constitutes your consent to be bound by the Terms, as amended.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Privacy and Electronic Communication</h2>
            <p>
              We know that privacy is important to you, and it is important to us as well. By using the Web Properties, you consent to receive electronic communications from us unless you follow applicable opt out procedures. We will communicate with you by email or by posting notices on our Web Properties. You agree that all agreements, notices, disclosures and other communications that we provide to you electronically satisfy any legal requirement that such communication be in writing.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">User Account and Security</h2>
            <p>
              To access certain features of the Web Properties, we may require that you sign up using your email address and a password to create a user account ("User Account"). We use reasonable precautions to protect the privacy of your username, password, and User Account information. However, you are ultimately responsible for protecting your username, password, and User Account information from disclosure to third-parties, and you are not permitted to circumvent the use of required encryption technologies, if any. While we may provide certain encryption technologies and use other reasonable precautions to protect your confidential information, we do not and cannot guarantee or warrant that information transmitted through the Internet is secure, or that such transmissions are free from delay, interruption, interception or error. You agree to provide current, complete and accurate purchase and account information for all purchases made using our Web Properties. You agree to promptly update your User Account and other information, including your email address and credit card numbers and expiration dates, so that we, and our third party service provider, can complete your transactions and contact you as needed. You agree that you are solely responsible for activity that occurs under your User Account. We are entitled to act on all instructions received by anyone using your User Account, and we reserve the right to pursue any and all claims against any user of your User Account.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Objectionable Material</h2>
            <p>
              You acknowledge that, in using the Web Properties and accessing the Content and User Content (as defined herein), you may encounter material that you deem to be disturbing, offensive or objectionable. You agree to use the Web Properties at your sole risk and that we will have no liability to you for material that may be disturbing, objectionable or offensive to you.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Not Intended for Children and Other Age Requirements</h2>
            <p>
              The Web Properties are not intended or designed to attract children under the age of thirteen (13). You affirm that you are at least eighteen (18) years of age, or are an emancipated minor, and are fully able and competent to enter into the terms, conditions, obligations, affirmations, representations, and warranties set forth in these Terms, and to abide by and comply with these Terms.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Disclaimers</h2>
            <p>
              <strong>No Warranties for Web Properties.</strong> When using the Web Properties, information will be transmitted in such a way that may be beyond our control. Accordingly, we make no warranty concerning the delay, failure, interruption, or corruption of any data, Content, User Content, or any other information transmitted in connection with the use of the Web Properties. YOU EXPRESSLY AGREE THAT YOUR USE OF THE WEB PROPERTIES IS AT YOUR SOLE RISK. THE WEB PROPERTIES, THE CONTENT AND THE USER CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE" FOR YOUR USE, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, UNLESS THESE WARRANTIES ARE LEGALLY INCAPABLE OF EXCLUSION. WE MAKE NO REPRESENTATIONS OR WARRANTIES THAT THE WEB PROPERTIES, THE CONTENT, THE USER CONTENT OR ANY SERVICES OR FEATURES OFFERED IN CONNECTION WITH THE WEB PROPERTIES ARE OR WILL REMAIN UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE WEB PAGES ACCESSIBLE ON OR THROUGH THE WEB PROPERTIES, OR THE SERVERS USED IN CONNECTION WITH THE WEB PROPERTIES, ARE OR WILL REMAIN FREE FROM ANY VIRUSES, WORMS, TIME BOMBS, DROP DEAD DEVICES, TROJAN HORSES, OR OTHER HARMFUL COMPONENTS. WE DO NOT GUARANTEE THAT YOU WILL BE ABLE TO ACCESS OR USE THE WEB PROPERTIES AT TIMES OR LOCATIONS OF YOUR CHOOSING, OR THAT WE WILL HAVE ADEQUATE CAPACITY FOR THE WEB PROPERTIESAS A WHOLE OR IN ANY SPECIFIC GEOGRAPHIC AREA. WE MAKE NO REPRESENTATION OR WARRANTY REGARDING GOVERNMENT COMPLIANCE OF ANY SOFTWARE USED IN RUNNING THE WEB PROPERTIES.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Awesome Health Club and our directors, officers, employees, agents, successors and assigns from and against any and all claims, demands, suits, proceedings, liabilities, judgments, losses, damages, expenses, and costs (including, but not limited to, reasonable attorneys' fees) assessed or incurred by us, directly or indirectly, with respect to or arising out of: (i) your failure to comply with these Terms; (ii) your breach of your obligations under these Terms; (iii) your use of the rights granted hereunder, including, but not limited to, any claims made by any third parties; (iv) your violation of any law or the rights of a third party; (v) any dispute or issue between you and any third party; (vi) any User Content you upload to, or otherwise make available through, the Web Properties; (vii) your willful misconduct; and (viii) any other party's access to and/or use of the Web Properties using your User Account and password. Awesome Health Club reserves the right, at its own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, and in that case, you agree to cooperate with our defense of that claim.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Dietary Preferences and Restrictions</h2>
            <p>
              The Content on the Web Properties may contain dietary advice and recommendations, and the Products delivered by us contain various food ingredients. You should always consult with your physician or other healthcare professional before adopting any advice or trying new foods, whether offered through the Web Properties or otherwise. We do not guarantee the accuracy of any nutritional information provided by Awesome Health Club. Awesome Health Club will not be responsible for any loss or damage resulting from your reliance on nutritional information, nor for ensuring that whatever foods you purchase, prepare or consume are in accordance with your respective dietary needs, restrictions or preferences. The major U.S. allergens as determined by the U.S. Food and Drug Administration (milk, wheat, eggs, soybeans, fish, shellfish, peanuts and tree nuts) may be stored, portioned and packed in some of our facilities. Although we take precautions to limit the potential for cross-contamination, cross-contamination may occur between food products, allowing products purchased through the Web Properties to contain some or all of those allergens. Our products may also include other ingredients that you are allergic to. You should always check the ingredients associated with any products that you receive from Awesome Health Club to avoid potential allergic reactions or adverse health events. If you have or suspect that you have an allergic reaction or other adverse health event, promptly contact your healthcare provider.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Verify Data</h2>
            <p>
              You are responsible for establishing such procedures as you deem appropriate to verify the accuracy of data that you transmit using the Web Properties, and we will have no obligation to verify the accuracy of that data. While we reserve the right to review any and all content you submit, including User Content made available through the Web Properties, you will remain responsible for such content. Your use of the Web Properties is subject to the additional disclaimers and caveats that may appear throughout the Web Properties.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Limitation of Liability</h2>
            <p>
              IN NO EVENT WILL WE OR OUR AFFILIATES, OR ANY OF OUR RESPECTIVE OFFICERS, DIRECTORS, AGENTS OR OTHER REPRESENTATIVES, BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, OR CONSEQUENTIAL DAMAGES OF ANY KIND ARISING FROM YOUR USE OF PRODUCTS OR THE WEB PROPERTIES, THE CONTENT AND/OR THE USER CONTENT PROVIDED IN CONNECTION WITH PRODUCTS OR THE WEB PROPERTIES, OR FOR ANY OTHER CLAIM RELATED IN ANY WAY TO YOUR USE OF PRODUCTS OR THE WEB PROPERTIES, THE CONTENT AND/OR THE USER CONTENT PROVIDED ON OR THROUGH THE WEB PROPERTIES. IN ADDITION, WE WILL NOT BE LIABLE FOR ANY NEGATIVE REPERCUSSIONS TO ANYONE BASED ON THE USE OF OR INABILITY TO USE PRODUCTS OR THE WEB PROPERTIES, INCLUDING, BUT NOT LIMITED TO, ANY LOST GOODWILL OR LOST PROFITS. WE ARE NOT LIABLE FOR ANY PERSONAL INJURY, INCLUDING DEATH, OR PROPERTY DAMAGE CAUSED BY YOUR USE OR MISUSE OF PRODUCTS OR THE WEB PROPERTIES, THE CONTENT AND/OR ANY USER CONTENT. WE ARE NOT RESPONSIBLE FOR (A) INACCURACIES OR ERRORS IN OR OMISSIONS FROM THE CONTENT OR USER CONTENT; (B) DELAYS, ERRORS, OR INTERRUPTIONS IN THE TRANSMISSION OR DELIVERY OF THE CONTENT OR USER CONTENT; OR (C) LOSS OR DAMAGE ARISING THEREFROM OR OCCASIONED THEREBY, OR BY ANY REASON OF NON PERFORMANCE. REMEDIES UNDER THESE TERMS ARE EXCLUSIVE AND ARE LIMITED TO THOSE EXPRESSLY PROVIDED FOR IN THESE TERMS. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, OUR ENTIRE LIABILITY SHALL BE LIMITED TO THE AMOUNT PAID BY YOU FOR THE PRODUCTS AND SERVICES YOU RECEIVE USING THE WEB PROPERTIES AND THE CONTENT. BECAUSE SOME STATES AND JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, IN SUCH STATES OR JURISDICTIONS, OUR LIABILITY WILL BE LIMITED TO THE GREATEST EXTENT PERMITTED BY APPLICABLE LAW. THESE TERMS GIVE YOU SPECIFIC LEGAL RIGHTS. YOU MAY ALSO HAVE OTHER RIGHTS THAT MAY VARY FROM ONE STATE OR JURISDICTION TO ANOTHER.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Payment</h2>
            <p>
              <strong>General.</strong> Products offered on the Web Properties may be subject to fees charged by Awesome Health Club, which will be identified at the point of purchase of such products. Products can be purchased a la carte, or you may purchase a subscription through the Web Properties. We may use a third party service provider to process any payments. When you make a payment, we will transfer you to a secure network provided by our third party processor through which all transactions are processed. We do not retain any of your credit card or other payment information. You agree to promptly update your User Account and other information, including your email address and payment method details, so that we (and our third party service provider) can complete your transactions and contact you as needed in connection with your transactions. You understand and acknowledge that Awesome Health Club may adjust the pricing for its products and services in the future and that you will be charged such adjusted fees on a going forward-basis after notice to you from us.
            </p>

            <p>
              <strong>Subscription Service.</strong> We offer a subscription service, where you can sign up to receive recurring deliveries of Products, if applicable (the "Subscription Service"). The Subscription Service Continues until cancelled in accordance with our Cancellation Policy (link) below. Each month you will receive a package from Awesome Health Club with the Products you have chosen. You can find specific details regarding your subscription by visiting the Web Properties and accessing your User Account details. When you register for the Subscription Service (and each time you change your plan) you expressly authorize and agree that we and/or our third party payment processor is authorized to automatically charge your payment method on a monthly, recurring basis in an amount equal to the then-effective rate for your plan, together with any applicable taxes and shipping fees, for as long as you continue to use the Subscription Service, unless you cancel your Subscription Service in accordance with these Terms. You acknowledge and agree that we will not obtain any additional authorization from you for such automatic, recurring payments. Every time that you use the Subscription Service, you re-affirm that we are authorized to charge your payment method as provided herein, and to have all applicable fees and charges applied to the same, including any applicable taxes and shipping fees.
            </p>

            <p>
              <strong>Payment and Billing Information.</strong> By providing your credit or debit card information (or other payment method accepted by Awesome Health Club from time to time) when you sign up, whether for a one-time purchase or for the Subscription Services, and as updated from time to time on your User Account page, if applicable (your "Payment Method"), you (i) authorize Awesome Health Club and/or our third-party payment processor to charge your Payment Method; and (ii) represent that any payment information you provide is true and accurate. If your Payment Method cannot be authorized or is otherwise in error, we may suspend or cancel your order. In the event of such failure of your Payment Method, we may take reasonable steps to retry your Payment Method. We may contact you to reconfirm or update your Payment Method. We are not responsible for any fees incurred by you when charging or retrying your Payment Method, including but not limited to, overdraft fees. You can update or change your Payment Method and other billing and payment account information by visiting your User Account page on the Web Properties. Changes made to your billing account will not affect charges that we submit to your billing account before we could reasonably act on your changes to your billing account. Your right to use the Subscription Service is subject to limits established by Awesome Health Club and/or by the issuer of your Payment Method.
            </p>

            <p>
              <strong>Cancellations Policy.</strong> You may cancel your subscription at any time by visiting your User Account page and following the instructions located therein, or by contacting us at hi@awesomehealthclub.com. Changes to, or cancellations of, your subscription, may also be subject to additional timing and other restrictions set forth by Awesome Health Club on the Web Properties. If you cancel the Subscription Service, your subscription will terminate immediately except as to ANY ORDER(S) IDENTIFIED AS "PROCESSING" OR "SHIPPED" ON YOUR USER ACCOUNT PAGE which CANNOT BE CANCELLED. YOU WILL BE RESPONSIBLE FOR ALL CHARGES (INCLUDING ANY APPLICABLE TAXES AND OTHER CHARGES) INCURRED WITH RESPECT TO ANY ORDER IDENTIFIED AS "PROCESSING" OR "SHIPPED" PRIOR TO THE CANCELLATION OF YOUR SUBSCRIPTION. If you cancel the Subscription Service, there is no guarantee that your User Content will be saved.
            </p>

            <p>
              <strong>Refunds and Credits.</strong> If you are dissatisfied with your product and/or something is missing from your package, please contact us at hi@awesomehealthclub.com and we may, in our sole discretion, issue a credit and/or refund to your User Account. Unless otherwise provided by law or by a particular offer from us, all purchases are final and non-refundable. We may, in our sole discretion, issue a credit and/or refund to your User Account.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Third Party Content and Third Party Applications</h2>
            <p>
              We may provide hyperlinks to other websites maintained by third parties, like Facebook and Instagram, or we may provide third party content on the Web Properties that we think will be relevant to our users (collectively, "Third Party Content") by framing or other methods. In addition, the Web Properties may include certain applications, features, programs and services provided by third parties (collectively, "Third Party Applications"). We do not monitor Third Party Content or Third Party Applications and can make no guarantee as to the accuracy or completeness of such Third Party Content or Third Party Applications. The links to third party websites, any Third Party Content, and any Third Party Applications are provided for your convenience and information only. The content on any linked website or in any Third Party Application is not under our control and we are not responsible for the content of linked websites and/or Third Party Applications, including any further links contained in a third party website. We make no representation or warranty in connection with any Third Party Content or Third Party Application, which at all times and in each instance is provided "as is." If you decide to access any of the third party websites linked to the Web Properties, any Third Party Content, and/or any Third Party Application, you do so entirely at your own risk. If a third party links or refers to the Web Properties, it is not necessarily an indication of an endorsement, authorization, sponsorship, affiliation, joint venture, or partnership by or with us. In most cases, we are not even aware that a third party has linked to or refers to the Web Properties.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Intellectual Property</h2>
            <p>
              The Content of the Web Properties is intellectual property owned, controlled and/or licensed by us and/or our affiliates, or intellectual property that we are legally permitted to access and use. All applicable intellectual property laws, including copyright laws, protect our rights in and to the Content. No portion of the Content and/or User Content may be reproduced in any form or by any means, except as provided in Section 2 (Web Properties Use and Content) and elsewhere in these Terms. We are the owner or authorized licensee of, or are otherwise permitted to use, all trademarks, service marks, and logos used and displayed by us on the Web Properties. All trademarks and service marks of Awesome Health Club that may be referred to on the Web Properties are the property of Awesome Health Club or one of our affiliates. Other parties' trademarks and service marks that may be referred to on the Web Properties are the property of their respective owners. Nothing on the Web Properties should be construed as granting, by implication, estoppel, or otherwise, any license or right to use any of our, or our affiliates', trademarks, service marks, logos, or copyrighted materials without our prior written permission.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Copyright Complaints</h2>
            <p>
              We own, protect and enforce copyright and other rights in our own intellectual property, and respect the intellectual property rights of others. We will respond to allegations of copyright infringement in accordance with the Digital Millennium Copyright Act (the "DMCA"). Under the DMCA, a copyright owner may file a takedown notice with an online service provider of an alleged copyright infringement. During this process, the service provider responds by taking down the alleged infringing content, and takes reasonable steps to contact the owner of the removed content so that a counter-notification may be filed, if appropriate. If a valid counter-notification is filed, we typically will restore the content in question, unless we receive notice from the notification provider that a legal action has been filed seeking a court order to restrain the alleged infringer from engaging in the infringing activity. We may provide copies of such notices to the affected parties or to any other third parties, at our discretion and as required by law. Our Privacy Notice does not apply to any information contained in these notices.
            </p>

            <p>
              When notifying us of potential infringement, you must include the following:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>identification of the copyrighted work(s) claimed to have been infringed. If multiple copyrighted works are involved, then a representative list of those works on the Web Properties;</li>
              <li>identification of the allegedly infringing material that is to be removed;</li>
              <li>information reasonably sufficient to permit us to locate the allegedly infringing material on the Web Properties;</li>
              <li>contact information reasonably sufficient to permit us to contact the complaining party, such as an address, telephone number, or email address;</li>
              <li>a statement that the complaining party has a good faith belief that use of the material is in fact infringing and not authorized by the copyright owner, its agent, or the law;</li>
              <li>a statement, made under penalty of perjury, that the information set forth in the notification is accurate and, where relevant, that the complaining party is authorized to act on behalf of the copyright owner; and</li>
              <li>the signature, physical or electronic, of the copyright owner or a person authorized to act on his or her behalf.</li>
            </ul>

            <p>
              A provider of content subject to a claim of infringement may make a counter-notification. To file a counter-notification with us, please provide the DMCA Agent with a written communication containing the following:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>identification of the allegedly infringing material that was removed or disabled;</li>
              <li>a statement that, under penalty of perjury, you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification of the material to be removed or disabled;</li>
              <li>your name, address, and telephone number, and a statement that you consent to the jurisdiction of the Federal District Court for the judicial district in which your postal address is located, and that you will accept service of process from the party who submitted the infringement notification or his, her, or its principal or agent; and</li>
              <li>the signature, physical or electronic, of you or a person authorized to act on your behalf.</li>
            </ul>

            <p>
              We will promptly provide the party that provided the notice of alleged infringement with a copy of the counter-notification, and inform the complaining party that we intend to restore the removed or disabled content within ten (10) business days. If we do not receive notice that a lawsuit has been filed within ten (10) business days after we provide notice of the counter-notification, we will restore the removed or disabled content. Until that time, your content will remain removed or disabled.
            </p>

            <p>
              Notice of alleged infringement must be sent by electronic mail to our DMCA Agent, Awesome Health Club Inc, at hi@awesomehealthclub.com, or by certified mail and marked "Copyright Infringement", Attn: DMCA Agent at Awesome Health Club.
            </p>

            <p>
              Before filing a notice of copyright infringement, you must make a careful determination as to whether or not the use of the material at issue is or may be protected by the "fair use" doctrine. You could potentially be held liable for costs and attorneys' fees should you file a takedown notice where there is no infringing use. If you are unsure whether there is infringement, it may be advisable to seek legal counsel.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Interactive Services and User Content Policy</h2>
            <p>
              We offer certain features of the Web Properties designed to facilitate interaction between you, Awesome Health Club and other users of the Web Properties, including, but not limited to, the comment sections located in designated areas of the Web Properties (collectively, the "Interactive Services"). You agree to use the Interactive Services in full compliance with all applicable laws and regulations. You shall be solely responsible for your comments, opinions, statements, feedback, suggestions, messages, comments, ideas, notes, and other content that you (i) you submit or post on the Web Properties; or (ii) have posted or uploaded to your social media accounts, including but not limited to Instagram, Twitter, Facebook, Snapchat, and Pinterest, which are tagged with #Awesomehealthclub, @Awesomehealthclub or @awesomecoffee or any other Awesome Health Club related or promoted hashtag or properties (collectively, "User Content"). We do not claim ownership in your User Content. However, by submitting any User Content in any form to Awesome Health Club, in addition to other provisions of these Terms, you automatically grant Awesome Health Club, its affiliates, successors and assigns, a perpetual, irrevocable, royalty-free, worldwide, non-exclusive, sublicensable and assignable right and license to use, copy, reproduce, modify, adapt, publish, edit, translate, create derivative works from, transmit, distribute, publicly display and publicly perform such User Content for the purpose of displaying and promoting such User Content on any website or other Web Properties owned or operated by, and in any related marketing materials produced by, Awesome Health Club and/or its affiliates, successors and assigns without further notice to you, or consent from you, and without any requirement to pay anything to you or anyone else. You will not have or obtain any rights in or to any form, media, or technology incorporating any of your User Content. You also grant to Awesome Health Club and its affiliates, successors and assigns the exclusive right to incorporate your User Content into other works in any form, medium or technology, whether now known or later developed, for the full term of any copyrights, trademarks and other intellectual and proprietary rights (collectively, "Rights") that may exist in that User Content. By submitting or posting User Content on the Web Properties, on your social media accounts or through any tools or applications we provide for posting or sharing your User Content with us, you also represent and warrant to Awesome Health Club that either you own all Rights in your User Content or all third party holders of Rights in your User Content have validly and irrevocably granted to you the right to grant the rights and licenses set forth above. You further acknowledge that Awesome Health Club and its affiliates, successors and assigns will be entitled to unrestricted use of the User Content for any purpose whatsoever, commercial or otherwise.
            </p>

            <p>
              Please remember that, even if we review your User Content, you will be solely responsible for your User Content and the consequences of posting or publishing it. We do not endorse any User Content or any opinion, recommendation, or advice expressed on or through the Web Properties, and we expressly disclaim any and all liability in connection with User Content. You acknowledge that Awesome Health Club, our site moderators and our agents reserve the right, in our sole discretion, to refuse, move, and/or remove User Content available on or through the Web Properties that, in our judgment, does not comply with these Terms and any other rules of user conduct applicable to our Web Properties, or is otherwise harmful, objectionable, or inaccurate. We are not responsible for any failure or delay in removing such User Content. You represent and warrant that neither your User Content nor your uploading, publishing or otherwise making available your User Content nor Awesome Health Club's use of your User Content as permitted herein will infringe, misappropriate or violate a third party's intellectual property or proprietary rights, or rights of publicity or privacy, or result in the violation of any applicable law or regulation. You agree that you will not provide any User Content that is defamatory, libelous, hateful, violent, obscene, pornographic, invasive of another's privacy, infringing of another's intellectual property rights, unlawful, or otherwise offensive, as determined by Awesome Health Club in its sole discretion.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Termination of Service</h2>
            <p>
              We may suspend or terminate your right to access portions of the Web Properties, including your User Account, at any time, without notice, for conduct that we believe violates these Terms and/or is harmful to other users of the Web Properties, to us, to our partners, to the contributors, to the business of our Internet service provider, or to other information providers, or as we otherwise deem appropriate, in our sole discretion.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Additional Remedies</h2>
            <p>
              You acknowledge that your conduct that is inconsistent with these Terms may cause us irreparable damage for which remedies other than monetary relief may be inadequate. In such instances, you agree that we may seek injunctive or other equitable relief to restrain such conduct without the necessity of proving actual harm or posting a bond.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Dispute Resolution</h2>
            <p>
              Please read the following section carefully because it requires you to arbitrate certain disputes and claims with us and limits the manner in which you can seek relief from us.
            </p>

            <p>
              You agree that any dispute between you and Awesome Health Club arising out of or relating to this Agreement, the Products, Programs or Web Properties (collectively, "Disputes") will be governed by the arbitration procedure outlined below.
            </p>

            <p>
              <strong>Governing law.</strong> Except as otherwise required by applicable law, the terms of service and the resolution of any disputes shall be governed by and construed in accordance with the laws of the State of Illinois without regard to its conflict of laws principles. Informal dispute resolution. We want to address your concerns without the need for legal proceedings. Before filing a claim against Awesome Health Club, you agree to try to resolve the dispute informally by contacting hi@awesomehealthclub.com. We'll try to resolve the dispute informally by contacting you by email. If a dispute is not resolved within 45 days after such email submission, you or Awesome Health Club may bring a formal arbitration proceeding.
            </p>

            <p>
              <strong>Agreement to arbitrate.</strong> You and Awesome Health Club agree to resolve any disputes through final and binding arbitration, except as set forth in the exceptions to arbitrate below.
            </p>

            <p>
              <strong>Opt-out of agreement to arbitrate.</strong> You can decline this agreement to arbitrate by contacting hi@awesomehealthclub.com within 30 days of first accepting this Agreement and stating that you (include your first and last name) decline this arbitration agreement.
            </p>

            <p>
              <strong>Arbitration procedures.</strong> The American Arbitration Association (AAA) will administer the arbitration under its commercial arbitration rules and the supplementary procedures for consumer related disputes. The arbitration will be held in the United States county where you live or work, or any other location we agree to.
            </p>

            <p>
              <strong>Arbitration fees.</strong> The AAA rules will govern payment of all arbitration fees. Awesome Health Club will pay all arbitration fees for claims less than $5,000. Awesome Health Club will not seek its attorneys' fees and costs in arbitration unless the arbitrator determines that your claim is frivolous.
            </p>

            <p>
              <strong>Exceptions to agreement to arbitrate.</strong> Either you or Awesome Health Club may assert claims, if they qualify, in small claims court in any United States county where you live or work. Either party may bring a lawsuit solely for injunctive relief to stop unauthorized use or abuse of the Awesome Health Club Products or Web Properties, or infringement of intellectual property rights (for example, trademark, trade secret, copyright or patent rights) without first engaging in arbitration or the informal dispute-resolution process described above.
            </p>

            <p>
              <strong>No class actions.</strong> You may only resolve disputes with Awesome Health Club on an individual basis and may not bring a claim as a plaintiff or a class member in a class, consolidated, or representative action. Class arbitrations, class actions, private attorney general actions, and consolidation with other arbitrations are not allowed under our agreement.
            </p>

            <p>
              <strong>Judicial forum for disputes.</strong> Except as otherwise required by applicable law, in the event that the agreement to arbitrate is found not to apply to you or your claim, you and Awesome Health Club agree that any judicial proceeding (other than small claims actions) will be brought in an appropriate court in Delaware. Both you and Awesome Health Club consent to venue and personal jurisdiction there. We both agree to waive our right to a jury trial.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Local Laws</h2>
            <p>
              We make no representation that any Content, User Content or other materials on the Web Properties are appropriate or available for use in jurisdictions that are outside the United States. Access to the Web Properties from jurisdictions where such access is illegal is prohibited. If you choose to access the Web Properties from other jurisdictions, you do so at your own initiative and are responsible for compliance with applicable local laws.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Export Restrictions</h2>
            <p>
              Any software and all underlying information and technology downloaded or viewed from any of the Web Properties or in connection with the services (collectively, the "Software or Technical Data") by you may be subject to U.S. export controls, including the Export Administration Act and the Export Administration Regulations, and may be subject to export or import regulations in other countries. You are solely responsible for complying with all trade regulations and laws, both foreign and domestic, in your use and viewing of the Web Properties, the Content, the User Content and any of our products or services, including, but not limited to, the Software or Technical Data. Except as authorized by law, you agree and warrant not to export or re-export the Software or Technical Data to any county, or to any person, entity, or end-user subject to U.S. export controls, including, but not limited to, persons or entities listed on the U.S. Department of Commerce Bureau of Export Administration's Denied Parties List and the U.S. Department of Treasury's Specially Designated Nationals. You further represent and warrant that no U.S. federal agency has suspended, revoked, or denied your export privileges.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">SMS/MMS Mobile Marketing Program & Notifications</h2>
            <p>
              Awesome Health Club offers a mobile messaging program (the "Program"), which you agree to use and participate in subject to these Mobile Messaging Terms and Conditions and Privacy Policy {https://Awesomehealthclub.com/pages/privacy-policy} (the "Agreement"). The following terms govern use of the Program. By opting in to or participating in the Programs, you accept and agree to these terms and conditions, including, without limitation, your agreement to resolve any disputes relating to the Program with us through binding, individual-only arbitration, as detailed in the "Program Dispute Resolution" section below. This Agreement is limited to the Program and is not intended to modify other Terms and Conditions or Privacy Policy that may govern the relationship between you and Us in other contexts.
            </p>

            <p>
              <strong>User Opt In:</strong> The Program allows Users to receive SMS/MMS mobile messages by affirmatively opting into the Program, such as through online or application-based enrollment forms. Regardless of the opt-in method you utilized to join the Program, you agree that this Agreement applies to your participation in the Program. By participating in the Program, you agree to receive autodialed or prerecorded marketing mobile messages at the phone number associated with your opt-in, and you understand that consent is not required to make any purchase from Us. While you consent to receive messages sent using an autodialer, the foregoing shall not be interpreted to suggest or imply that any or all of Our mobile messages are sent using an automatic telephone dialing system ("ATDS" or "autodialer"). Message and data rates may apply. Message frequency varies.
            </p>

            <p>
              <strong>User Opt Out:</strong> If you do not wish to continue participating in the Program or no longer agree to this Agreement, you agree to reply STOP, END, CANCEL, UNSUBSCRIBE, or QUIT to any mobile message from Us in order to opt out of the Program. You may receive an additional mobile message confirming your decision to opt out. You understand and agree that the foregoing options are the only reasonable methods of opting out. You also understand and agree that any other method of opting out, including, but not limited to, texting words other than those set forth above or verbally requesting one of our employees to remove you from our list, is not a reasonable means of opting out.
            </p>

            <p>
              <strong>Program Description:</strong> Without limiting the scope of the Program, users that opt into the Program can expect to receive messages concerning the marketing and sale of Awesome Health Club cereal, new Awesome Health Club products, partnerships, surveys, company updates and related content. You may expect to get occasional texts concerning latest Alerts, Surveys, Welcome messages, Customer win-backs, Text Campaigns, Giveaways, Flash Sales, Upsells. Messages may include checkout reminders.
            </p>

            <p>
              <strong>Cost and Frequency:</strong> Message and data rates may apply. Message frequency varies. The Program involves recurring mobile messages, and additional mobile messages may be sent periodically based on your interaction with Us.
            </p>

            <p>
              <strong>Support Instructions:</strong> For support regarding the Program, text "HELP" to the number you received messages from or email us at hi@awesomehealthclub.com. Please note that the use of this email address is not an acceptable method of opting out of the program. Opt outs must be submitted in accordance with the procedures set forth above.
            </p>

            <p>
              <strong>MMS Disclosure:</strong> The Program will send SMS TMs (terminating messages) if your mobile device does not support MMS messaging.
            </p>

            <p>
              <strong>Our Disclaimer of Warranty:</strong> The Program is offered on an "as-is" basis and may not be available in all areas at all times and may not continue to work in the event of product, software, coverage or other changes made by your wireless carrier. We will not be liable for any delays or failures in the receipt of any mobile messages connected with this Program. Delivery of mobile messages is subject to effective transmission from your wireless service provider/network operator and is outside of Our control. Carriers are not liable for delayed or undelivered mobile messages.
            </p>

            <p>
              <strong>Participant Requirements:</strong> You must have a wireless device of your own, capable of two-way messaging, be using a participating wireless carrier, and be a wireless service subscriber with text messaging service. Not all cellular phone providers carry the necessary service to participate. Check your phone capabilities for specific text messaging instructions.
            </p>

            <p>
              <strong>Age Restriction:</strong> You may not use or engage with the Platform if you are under thirteen (13) years of age. If you use or engage with the Platform and are between the ages of thirteen (13) and eighteen (18) years of age, you must have your parent's or legal guardian's permission to do so. By using or engaging with the Platform, you acknowledge and agree that you are not under the age of thirteen (13) years, are between the ages of thirteen (13) and eighteen (18) and have your parent's or legal guardian's permission to use or engage with the Platform, or are of adult age in your jurisdiction. By using or engaging with the Platform, you also acknowledge and agree that you are permitted by your jurisdiction's Applicable Law to use and/or engage with the Platform.
            </p>

            <p>
              <strong>Prohibited Content:</strong> You acknowledge and agree to not send any prohibited content over the Platform. Prohibited content includes:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li>Any fraudulent, libelous, defamatory, scandalous, threatening, harassing, or stalking activity;</li>
              <li>Objectionable content, including profanity, obscenity, lasciviousness, violence, bigotry, hatred, and discrimination on the basis of race, sex, religion, nationality, disability, sexual orientation, or age;</li>
              <li>Pirated computer programs, viruses, worms, Trojan horses, or other harmful code;</li>
              <li>Any product, service, or promotion that is unlawful where such product, service, or promotion thereof is received;</li>
              <li>Any content that implicates and/or references personal health information that is protected by the Health Insurance Portability and Accountability Act ("HIPAA") or the Health Information Technology for Economic and Clinical Health Act ("HITEC" Act); and</li>
              <li>Any other content that is prohibited by Applicable Law in the jurisdiction from which the message is sent.</li>
            </ul>

            <p>
              <strong>Program Dispute Resolution:</strong> In the event that there is a dispute, claim, or controversy between you and Awesome Health Club, or between you and Stodge, LLC d/b/a Postscript or any other third-party service provider acting on Our behalf to transmit the mobile messages within the scope of the Program, arising out of or relating to federal or state statutory claims, common law claims, this Agreement, or the breach, termination, enforcement, interpretation or validity thereof, including the determination of the scope or applicability of this agreement to arbitrate, such dispute, claim, or controversy will be, to the fullest extent permitted by law, determined by arbitration in Chicago, IL before one arbitrator.
            </p>

            <p>
              The parties agree to submit the dispute to binding arbitration in accordance with the Commercial Arbitration Rules of the American Arbitration Association ("AAA") then in effect. Except as otherwise provided herein, the arbitrator shall apply the substantive laws of the Federal Judicial Circuit in which Awesome Health Club Inc.'s principle place of business is located, without regard to its conflict of laws rules. Within ten (10) calendar days after the arbitration demand is served upon a party, the parties must jointly select an arbitrator with at least five years' experience in that capacity and who has knowledge of and experience with the subject matter of the dispute. If the parties do not agree on an arbitrator within ten (10) calendar days, a party may petition the AAA to appoint an arbitrator, who must satisfy the same experience requirement. In the event of a dispute, the arbitrator shall decide the enforceability and interpretation of this arbitration agreement in accordance with the Federal Arbitration Act ("FAA"). The parties also agree that the AAA's rules governing Emergency Measures of Protection shall apply in lieu of seeking emergency injunctive relief from a court. The decision of the arbitrator shall be final and binding, and no party shall have rights of appeal except for those provided in section 10 of the FAA. Each party shall bear its share of the fees paid for the arbitrator and the administration of the arbitration; however, the arbitrator shall have the power to order one party to pay all or any portion of such fees as part of a well-reasoned decision. The parties agree that the arbitrator shall have the authority to award attorneys' fees only to the extent expressly authorized by statute or contract. The arbitrator shall have no authority to award punitive damages and each party hereby waives any right to seek or recover punitive damages with respect to any dispute resolved by arbitration. The parties agree to arbitrate solely on an individual basis, and this agreement does not permit class arbitration or any claims brought as a plaintiff or class member in any class or representative arbitration proceeding. Except as may be required by law, neither a party nor the arbitrator may disclose the existence, content, or results of any arbitration without the prior written consent of both parties, unless to protect or pursue a legal right. If any term or provision of this Section is invalid, illegal, or unenforceable in any jurisdiction, such invalidity, illegality, or unenforceability shall not affect any other term or provision of this Section or invalidate or render unenforceable such term or provision in any other jurisdiction. If for any reason a dispute proceeds in court rather than in arbitration, the parties hereby waive any right to a jury trial. This arbitration provision shall survive any cancellation or termination of your agreement to participate in any of our Programs.
            </p>

            <div className="mt-6">
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

export default TermsConditions;
