
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
