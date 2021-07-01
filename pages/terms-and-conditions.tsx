import Head from 'next/head';
import { Layout } from '../components/layout/layout';
import useGAService from '../core/app-services/ga-service';

export default function TermsAndConditions() {
  const gaService = useGAService();
  gaService.pageView('/terms-and-conditions');
  return (
    <>
      <Head>
        <title>Terms & Conditions - United Hardscapes</title>
        <meta name="description" content="Choose from a variety of patio, walkway, driveway, retaining wall, and stair kits for any budget and taste to create the perfect outdoor living space." />
      </Head>
      <Layout>
        <section className="py-90">
          <div className="container mx-auto text-16 text-light-500 text-center">
            <h1 className="text-32 text-secondary font-medium mb-40">Service Terms</h1>
            <p className="mb-15">Welcome to United Hardscapes. The website located at www.UnitedHardscapes.com (the “Services”) are provided
              by United Hardscapes Inc. (“United Hardscapes”, “we”, “us”, or “our”). By creating an account or by accessing
              or using the Services, you agree to these terms and conditions (these, “Terms”). If you do not agree to these
              Terms, you may not access or use the Services.</p>
            <p className="mb-15">NOTE THAT SECTION 16 OF THESE TERMS CONTAINS A MANDATORY ARBITRATION PROVISION THAT REQUIRES THE USE OF
              ARBITRATION ON AN INDIVIDUAL BASIS AND LIMITS THE REMEDIES AVAILABLE TO YOU IN THE EVENT OF CERTAIN
              DISPUTES.</p>
            <p className="mb-15">If you have any questions, please refer to the help section of the Services or contact us at <a
              href="mailto:Support@UnitedHardscapes.com" className="text-primary">Support@UnitedHardscapes.com</a></p>

            <h5 className="text-28 text-secondary font-medium my-30">Our Services</h5>
            <p className="mb-15">We provide a platform through which individuals who access and use the Services can find and browse, market,
              sell and purchase hardscaping services and products (“Hardscaping Services”) through United Hardscapes online
              marketplace. While we enable users to browse, market, sell and purchase Hardscaping Services, and to
              communicate with one another, we are not responsible for monitoring such information and communications, and
              we are not a party to transactions or interactions that may occur between users, whether online or
              offline.</p>

            <h5 className="text-28 text-secondary font-medium my-30">Eligibility, Accounts,
              Registration</h5>
            <p className="mb-15">The Services are available only to, and may only be accessed and used by, individuals who are 18 years and
              older who can form legally binding contracts under applicable law. By using the Services, you represent and
              warrant that you (a) are at least 18 years old, (b) have not been previously suspended or removed from the
              Services, or engaged in any activity that could result in suspension or removal from the Services, (c) do not
              have more than one United Hardscapes account, and (d) that all registration information you submit is accurate
              and truthful. If you are accessing or using the Services on behalf of another person or entity’s behalf, (1)
              all references to “you” throughout these Terms will include that person or entity, (2) you represent that you
              are authorized to accept these Terms on that person or entity’s behalf, and (3) that person or entity agrees
              to be responsible to us if you or the other person or entity violates these Terms.</p>
            <p className="mb-15">In order to access and use certain areas of the Services, you will need to register for a United Hardscapes
              account. By creating an account, you agree to (i) provide accurate, current, and complete account information,
              (ii) maintain and promptly update your account information as necessary, (iii) maintain the security of your
              account credentials and accept all risks of unauthorized access to your account and the information you
              provide to us, and (iv) immediately notify us if you discover or otherwise suspect any security breaches
              related to the Services or your account. You also agree that United Hardscapes is not liable for any loss or
              damage arising from your failure to keep your account credentials secure. The Services are not available to
              temporarily or permanently banned users. United Hardscapes reserves the right, in United Hardscapes’ sole
              discretion, to cancel unconfirmed or inactive accounts and to reclaim usernames, including on behalf of
              businesses or individuals that hold legal claim, including trademark rights, in those usernames. United
              Hardscapes reserves the right to refuse service to anyone, for any reason, at any time.</p>

            <h5 className="text-28 text-secondary font-medium my-30">Additional Terms</h5>
            <p className="mb-15">Additional terms and policies (“Additional Terms”) may apply to specific portions of the Services. In the
              event Additional Terms apply to your use of the Services, we will provide notice of such terms and your
              continued use of the relevant portions of the Services will constitute your agreement to these Additional
              Terms. Unless indicated otherwise, if there is a conflict between these Terms and the Additional Terms, the
              Additional Terms will govern.</p>
            <p className="mb-15">If you register as a contractor of Hardscaping Services (“Contractor”), your use of the Services is also
              subject to the Contractor <span className="text-primary">Contractor Terms</span>, which are hereby
              incorporated into these Terms by reference.</p>

            <h5 className="text-28 text-secondary font-medium my-30">Materials provided to or posted
              on United Hardscapes</h5>
            <p className="mb-15">You retain all ownership rights in the materials you provide to United Hardscapes or post, upload, input or
              submit to the Services (collectively “Submissions”). By posting, uploading, inputting, providing or submitting
              a Submission, you hereby grant United Hardscapes and United Hardscapes’ affiliated companies a nonexclusive,
              royalty-free, worldwide, perpetual, transferable, irrevocable and fully sublicensable right and license to
              use, copy, modify, display, create derivative works of, perform, and distribute your Submission, in whole or
              in part, and your name, likeness, persona in any manner or media and for any purpose whatsoever at our sole
              discretion, including, without limitation, for publicity, promotional, advertising, trade, business,
              illustration, artistic and other commercial and noncommercial purposes.</p>
            <p className="mb-15">No compensation will be paid with respect to our use of your Submissions. United Hardscapes is under no
              obligation to post or use any Submission you may provide and may remove any Submission at any time for any
              reason.</p>
            <p className="mb-15">By posting, uploading, inputting, providing or submitting Submissions, you represent and warrant that (a) you
              own and control all of the necessary rights to your Submissions; (b) such Submissions are nonconfidential; (c)
              the Submissions are accurate and not misleading or harmful in any manner, and (d) the Submissions, and your
              use and posting thereof, does not and will not violate these Terms or any applicable law, rule, regulation or
              third-party right.</p>

            <h5 className="text-28 text-secondary font-medium my-30">Prohibited Content</h5>
            <p className="mb-15">You are solely responsible for your conduct and activities on and regarding to the Services and any and all
              Submissions. You understand that Submissions are viewable by others using the Services. You agree that you are
              solely responsible for your Submissions and for your use of such interactive features and areas of the
              Services, and that you use them at your own risk.</p>
            <p className="mb-15">By using the interactive features and areas of the Services, you further agree not to create, post, share,
              upload to, transmit, distribute, store or otherwise publish through the Services any Submissions that:</p>
            <ul className="text-left list-disc ml-20 md:ml-0 my-20">
              <li className="my-15">Are false, inaccurate or misleading;</li>
              <li className="my-15">Infringe upon any third-party’s intellectual property rights or rights of publicity or privacy;</li>
              <li className="my-15">Violates these Terms, any website policy or community guidelines, or any applicable law, statute,
                ordinance or regulation, or that would constitute, encourage, or provide instructions for a criminal
                offence, violate the rights of any party or otherwise create liability;
              </li>
              <li className="my-15">Are unlawful, defamatory, obscene, pornographic, indecent, lewd, suggestive, libelous, threatening,
                harassing, invasive of privacy or publicity rights, abusive, inflammatory, fraudulent, or otherwise
                objectionable;
              </li>
              <li className="my-15">Contains or depicts any statements, remarks or claims that do not reflect your honest views and
                experiences;
              </li>
              <li className="my-15">Impersonates or intimidates any person (including United Hardscapes staff or other users), or falsely
                state or otherwise misrepresents your affiliation with any person, through for example, the use of similar
                email address, nicknames, or creation of false account(s) or any other method or device;
              </li>
              <li className="my-15">Contains any unsolicited promotions, political campaigning, advertising or solicitations;</li>
              <li className="my-15">Contains any private or personal information of a third party without such party’s consent;</li>
              <li className="my-15">Contains or transmits any viruses, corrupted data or code of a destructive nature that may damage,
                interfere with, intercept or expropriate any system, data or content; or
              </li>
              <li className="my-15">In our sole judgment, is objectionable or that restricts or inhibits any other person from using or
                enjoying the Services, or that may expose United Hardscapes or others to any harm or liability of any type.
              </li>
            </ul>
            <p className="mb-15">We do not approve, control or endorse Submissions, and we are not responsible or liable for any Submissions
              on the Services. In addition to other disclaimers found in these Terms, we do not endorse or make any
              warranties or representations with respect to the accuracy, completeness or timeliness of any Submissions
              posted on the Services. Although we have no obligation to screen, edit or monitor Submissions, we reserve the
              right, and have absolute discretion, to remove, screen or edit Submissions posted or stored on the Services at
              any time and for any reason, and you are solely responsible for creating backup copies of and replacing any
              Submissions you post or store on the Services at your sole cost and expense.</p>

            <h5 className="text-28 text-secondary font-medium my-30">Prohibited Conduct</h5>
            <p className="mb-15">You agree that you will not violate any law, contract, intellectual property or other third-party right or
              commit a tort, and that you are solely responsible for your conduct, while accessing or using the Services.
              You agree that you will abide by these Terms and will not:</p>
            <ul className="text-left list-disc ml-20 md:ml-0 my-20">
              <li className="my-15">Engage in any harassing, threatening, intimidating, predatory or stalking conduct;</li>
              <li className="my-15">Use or attempt to use another user’s account without authorization from such user and United Hardscapes;
              </li>
              <li className="my-15">Use the Services in any manner that could interfere with, disrupt, negatively affect or inhibit other
                users from fully enjoying the Services or that could damage, disable, overburden or impair the functioning
                of the Services in any manner;
              </li>
              <li className="my-15">Seek or obtain information obtained on the Services to contact a Contractor or buyer to buy or sell
                Hardscaping Services off of the Services;
              </li>
              <li className="my-15">Reverse engineer any aspect of the Services or do anything that might discover source code or bypass or
                circumvent measures employed to prevent or limit access to any Submissions, area or code of the Services;
              </li>
              <li className="my-15">Take any action that may undermine online reviews or feedback;</li>
              <li className="my-15">Attempt to circumvent any content-filtering techniques we employ or attempt to access any feature or area
                of the Services that you are not authorized to access;
              </li>
              <li className="my-15">Send, distribute or post spam, unsolicited or bulk commercial electronic communications, chain letters, or
                pyramid schemes;
              </li>
              <li className="my-15">Develop or use any third-party applications that interact with Submissions or the Services without our
                prior written consent;
              </li>
              <li className="my-15">Copy, reproduce, distribute, publicly perform or publicly display all or portions of our Services, except
                as expressly permitted by us or our licensors;
              </li>
              <li className="my-15">Use any robot, spider, crawler, scraper, script, browser extension, offline reader or other automated
                means or interface not authorized by us to access the Services, extract data or any program which may make
                multiple server requests per second, or unduly burdens or hinders the operation or performance of the
                Services or otherwise interfere with or modify the rendering of Services or functionality;
              </li>
              <li className="my-15">Modify our Services, remove any proprietary rights notices or markings, or otherwise make any derivative
                works based upon our Services;
              </li>
              <li className="my-15">Bypass or ignore instructions contained in any robots.txt file; or</li>
              <li className="my-15">Use the Services for any illegal or unauthorized purpose, or engage in, encourage or promote any activity
                that violates these Terms
              </li>
            </ul>

            <h5 className="text-28 text-secondary font-medium my-30">License to Access and Use Our
              Services and Content</h5>
            <p className="mb-15">Unless otherwise indicated by us, the Services and all content and other materials contained therein,
              including, without limitation, the United Hardscapes logo and all designs, text, graphics, pictures,
              information, data, software, sound files, other files and the selection and arrangement thereof (collectively,
              “United Hardscapes Content”) are the proprietary property of United Hardscapes or our licensors, as
              applicable, and are protected by U.S. and international copyright laws. The term United Hardscapes Content, as
              used in these Terms, does not include third-party trademarks, intellectual property or other content or
              material owned by third parties and not covered under a license with United Hardscapes or materials that are
              in the public domain.</p>
            <p className="mb-15">United Hardscapes hereby grants you a limited, nonexclusive, non-transferable, non-sublicensable, revocable
              license to access and use the Services and United Hardscapes Content, subject to your compliance with these
              Terms. All rights not expressly granted to you are reserved by United Hardscapes and its licensors.</p>
            <p className="mb-15">Such license does not include the right to: (i) license, sublicense, sell, resell, transfer, assign,
              distribute or otherwise commercially exploit or make available to any third party the Services or United
              Hardscapes Content in any way, provided, however, that Contractors are permitted to use the Services for
              commercial purposes in accordance with these Terms; United Hardscapes(ii) access the Services in order to (a)
              build a competitive product or service, (b) build a product using similar ideas, features, functions or
              graphics of the Services, or (c) copy any ideas, features, functions or graphics of the Services; (iii)
              download (other than the page caching) any portion of the Services, the United Hardscapes Content or any
              information contained therein, except as expressly permitted on the Services; and (iv) any use of the Services
              or the United Hardscapes Content other than for their intended purposes. Any use of the Services or United
              Hardscapes Content other than as specifically authorized herein, without our prior written permission, is
              strictly prohibited and will terminate the license granted herein. Such unauthorized use may also violate
              applicable laws, including, without limitation, copyright and trademark laws and applicable communications
              regulations and statutes. Unless explicitly stated by us, nothing in these Terms shall be construed as
              conferring any right or license to any patent, trademark, copyright or other proprietary rights of United
              Hardscapes or any third party, whether by estoppel, implication or otherwise.</p>

            <h5 className="text-28 text-secondary font-medium my-30">Payment Terms</h5>
            <p className="mb-15">Setting up an account on the Services is free. United Hardscapes is not a party to any transaction for
              Hardscaping Services offered by Contractors. The Services facilitate these transactions by supplying a medium
              through which users can connect with Contractors to purchase Hardscaping Services directly from the
              Contractor. Notwithstanding the foregoing, users may not circumvent the Services by using the online
              marketplace to connect with Contractors and then engage those Contractors for Hardscaping Services outside of
              the Services. Contractors who list Hardscaping Services on the Services must pay all applicable fees for the
              Services they have used, even if the sale is completed off of the Services (such as, to the extent applicable,
              cash on delivery, pay on pickup, or paid by check or money order).</p>
            <p className="mb-15">Except for applicable credit card service charges and taxes, we do not charge fees to buyers, but we do
              charge fees to Contractors as a portion of the proceeds from each sale as specified in the Contractor Terms.
              Changes to fees are effective after we post notice of the changes on the Services. Updated fees are applied to
              Hardscaping Services listings placed after the notice is posted. Users are responsible for paying all taxes
              associated with their use of the Services. Transactions will be made via credit card or other payment methods
              that we accept. United Hardscapes reserves the right to withhold all or a portion of the fees if it believes
              that you have attempted to defraud or abuse United Hardscapes or United Hardscapes’ payment systems.</p>
            <p className="mb-15">All transactions will be executed using a third-party payment processor (“Payment Processor”) and may be
              subject to a service charge. By providing a credit card or other payment method that we accept, you represent
              and warrant that you are authorized to use the designated payment method and you hereby authorize United
              Hardscapes (or our Payment Processor) to debit your payment card or user account of the amount of the
              purchased Hardscaping Services (including any taxes and other charges). If the payment method cannot be
              verified, is invalid or is otherwise not acceptable, we will notify you and your order may be suspended or
              cancelled if you do not resolve the issue promptly. In the event that you want to change or update payment
              information associated with your online United Hardscapes account, you can do so at any time by logging into
              your account and editing your payment information. You acknowledge that the amount billed may vary due to
              promotional offers, changes to your order or changes in applicable taxes or other charges, and you authorize
              us (or our third-party payment processor) to charge your payment method for the corresponding amount. All
              payments will be made in U.S. dollars. Users will be asked to provide customary billing information such as
              name, billing address and payment information.</p>
            <p className="mb-15">United Hardscapes’ fees and charges are not refundable. Your ability to obtain a refund for Hardscaping
              Services purchased through the Services will depend upon the terms of Contractor’s refund policy. Details
              regarding a Contractor’s refund policies are available on the Hardscaping Services listing.</p>
            <p className="mb-15">United Hardscapes, at its sole discretion, may make promotional offers with different features and different
              rates to any of our customers. These promotional offers, unless made to you, will have no bearing whatsoever
              on your offer or contract. United Hardscapes may change its fees as United Hardscapes deems necessary for our
              business. United Hardscapes encourages you to check our website periodically for any changes to United
              Hardscapes’ fees.</p>

            <h5 className="text-28 text-secondary font-medium my-30">Feedback</h5>
            <p className="mb-15">Separate and apart from Submissions, any unsolicited suggestions, ideas, proposals or other material
              submitted to United Hardscapes by users via the Services (“Feedback”) is non-confidential and non-proprietary,
              and shall become the sole property of United Hardscapes. United Hardscapes shall own exclusive rights,
              including, without limitation, all intellectual property rights, in and to such Feedback and shall be entitled
              to the unrestricted use and dissemination of this Feedback for any purpose, commercial or otherwise, without
              acknowledgment or compensation to you.</p>

            <h5 className="text-28 text-secondary font-medium my-30">Third-Party Content</h5>
            <p className="mb-15">We may display content, including advertisements and promotions, from third parties through the Services or
              may otherwise provide information about or links to third-party products or services (collectively,
              “Third-Party Content”). We do not control, endorse or adopt any Third-Party Content, and we make no
              representations or warranties of any kind regarding such Third-Party Content, including, without limitation,
              regarding its accuracy or completeness. You acknowledge and agree that your business dealings, correspondence
              with, or other interactions with third parties providing Third-Party Content, and any terms, conditions,
              warranties or representations associated with such dealings and interactions are solely between you and such
              third parties. United Hardscapes is not responsible or liable in any manner for such dealings and interactions
              or Third-Party Content, nor for any loss or damage of any sort incurred as the result of any such dealings or
              interactions or as the result of the presence of Third-Party Content on the Services.</p>

            <h5 className="text-28 text-secondary font-medium my-30">Privacy</h5>
            <p className="mb-15">Please refer to our Privacy Policy [insert hyperlink] for information about how we collect, use and disclose
              information about you.</p>

            <h5 className="text-28 text-secondary font-medium my-30">Disclaimers</h5>
            <p className="mb-15">EXCEPT AS EXPRESSLY PROVIDED TO THE CONTRARY IN A WRITING BY United Hardscapes, THE SERVICES AND THE United
              Hardscapes CONTENT CONTAINED THEREIN ARE PROVIDED ON AN “AS IS,” AND “AS AVAILABLE” BASIS, AND WITHOUT ANY
              WARRANTY OR CONDITION OF ANY KIND, EITHER EXPRESS OR IMPLIED. United Hardscapes DISCLAIMS ALL OTHER
              WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF TITLE, MERCHANTABILITY,
              PERFORMANCE, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT AS TO THE SERVICES AND THE United
              Hardscapes CONTENT CONTAINED THEREIN. IN ADDITION, NO ADVICE OR INFORMATION (ORAL OR WRITTEN) OBTAINED BY YOU
              FROM United Hardscapes WILL CREATE ANY WARRANTY. United Hardscapes DOES NOT REPRESENT OR WARRANT THAT United
              Hardscapes CONTENT ON THE SERVICES IS ACCURATE, COMPLETE, RELIABLE, CURRENT OR ERROR-FREE.</p>
            <p className="mb-15">United Hardscapes MAKES NO WARRANTY, REPRESENTATION OR GUARANTEE WITH RESPECT TO PRODUCTS, SERVICES AND
              INFORMATION OFFERED BY CONTRACTORS, AND THE CONDUCT OF USERS, WHETHER ONLINE OR OFFLINE. United Hardscapes
              SPECIFICALLY DISCLAIMS ANY WARRANTY, REPRESENTATION OR GUARANTEE WITH RESPECT TO THE QUALITY, SAFETY, LEGALITY
              OR OTHER CHARACTERISTICS OF SUCH PRODUCTS, SERVICES AND INFORMATION, OR WITH RESPECT TO THE CONDUCT OF ANY
              CONTRACTOR IN CONNECTION WITH SUCH SERVICES, WHETHER ONLINE OR OFFLINE. United Hardscapes DOES NOT SPONSOR,
              ENDORSE, RECOMMEND OR APPROVE OF ANY CONTRACTOR. ADDITIONALLY, WE CANNOT AND DO NOT REPRESENT THAT ANY
              CONTRACTOR IS LICENSED, QUALIFIED, BONDED, INSURED, OR CAPABLE OF PROVIDING ANY PRODUCTS OR SERVICES, AND WE
              MAKE NO REPRESENTATIONS OR WARRANTIES ABOUT THE SUITABILITY, RELIABILITY, OR ACCURACY OF THE PRODUCTS,
              SERVICES OR INFORMATION THEY PROVIDE.</p>
            <p className="mb-15">SOME STATES DO NOT ALLOW THE DISCLAIMER OF IMPLIED WARRANTIES, SO THE FOREGOING DISCLAIMER MAY NOT APPLY TO
              YOU. THIS WARRANTY GIVES YOU SPECIFIC LEGAL RIGHTS AND YOU MAY ALSO HAVE OTHER LEGAL RIGHTS THAT VARY FROM
              STATE TO STATE.</p>
            <p className="mb-15">All third-party hardware and other products included or sold with a Contractor’s Hardscaping Services or
              services are provided solely according to the warranty and other terms specified by the Contractor or
              manufacturer (as applicable), who is solely responsible for service and support for its Hardscaping Services.
              For service, support, or warranty assistance, you should contact the manufacturer directly. United Hardscapes
              MAKES NO WARRANTIES, EXPRESS OR IMPLIED, WITH RESPECT TO SUCH THIRD-PARTY PRODUCTS, AND EXPRESSLY DISCLAIMS
              ANY WARRANTY OR CONDITION OF MERCHANTABILITY, NON-INFRINGEMENT, OR FITNESS FOR A PARTICULAR PURPOSE. IN NO
              EVENT WILL United Hardscapes BE LIABLE FOR ANY INCIDENTAL, CONSEQUENTIAL, INDIRECT, EXEMPLARY, PUNITIVE,
              SPECIAL DAMAGES. ADDITIONALLY, United Hardscapes WILL ONLY BE LIABLE FOR COVER DAMAGES ARISING OUT OF YOUR USE
              OF OR INABILITY TO USE THIRD-PARTY PRODUCTS OR ANY AMOUNT IN EXCESS OF THE AMOUNT PAID BY YOU FOR THE
              HARDSCAPING SERVICES THAT GIVES RISE TO ANY CLAIM.</p>

            <h5 className="text-28 text-secondary font-medium my-30">Limitation of Liability</h5>
            <p className="mb-15">You assume all risk when using the Services, including but not limited to all of the risks associated with
              any online or offline interactions with other users and Contractors.</p>
            <p className="mb-15">TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL United Hardscapes, OR United Hardscapes’
              AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES OR United Hardscapes’ SUPPLIERS (“United Hardscapes PARTIES”) BE
              LIABLE FOR ANY DAMAGES WHATSOEVER, WHETHER DIRECT, INDIRECT, GENERAL, SPECIAL, COMPENSATORY, CONSEQUENTIAL, OR
              INCIDENTAL, ARISING OUT OF OR RELATING TO THE USE OF THE SERVICES OR United Hardscapes CONTENT, INCLUDING
              WITHOUT LIMITATION, DAMAGES CAUSED BY OR RESULTING FROM RELIANCE ON INFORMATION OBTAINED THROUGH THE SERVICES
              OR FROM THE CONDUCT OF YOU OR ANYONE ELSE IN CONNECTION WITH THE SERVICES (INCLUDING BUT NOT LIMITED TO BODILY
              INJURY, DEATH OR PROPERTY DAMAGE, WHETHER ONLINE OR OFFLINE), MISTAKES, OMISSIONS, INTERRUPTIONS, DELETION OF
              FILES OR EMAIL, ERRORS, DEFECTS, VIRUSES, DELAYS IN OPERATION OR TRANSMISSION OR ANY FAILURE OF PERFORMANCE,
              WHETHER OR NOT RESULTING FROM ACTS OF GOD, COMMUNICATIONS FAILURE, THEFT, DESTRUCTION OR UNAUTHORIZED ACCESS
              TO United Hardscapes’ RECORDS, PROGRAMS OR SERVICES.</p>
            <p className="mb-15">TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE AGGREGATE LIABILITY OF United
              Hardscapes OR THE United Hardscapes PARTIES, WHETHER IN CONTRACT, WARRANTY, TORT (INCLUDING NEGLIGENCE,
              WHETHER ACTIVE, PASSIVE, OR IMPUTED), PRODUCT LIABILITY, STRICT LIABILITY OR OTHER THEORY, ARISING OUT OF OR
              RELATING TO THE USE OF THE SERVICES OR TO THESE TERMS EXCEED THE GREATER OF (A) THE AMOUNT OF CONTRACTOR FEES
              YOU PAY TO United Hardscapes IN THE 12 MONTHS PRIOR TO THE ACTION GIVING RISE TO LIABILITY, OR (B) $100.00.
              SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, OR OTHER MATTERS
              IN WHICH LIABILITY CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW, SO THE ABOVE LIMITATIONS OR EXCLUSIONS
              MAY NOT APPLY TO YOU.</p>

            <h5 className="text-28 text-secondary font-medium my-30">Indemnity</h5>
            <p className="mb-15">You agree to indemnify and hold United Hardscapes and the United Hardscapes Parties harmless from any losses,
              liabilities, damages, expenses, costs, claims or demands (“Claims”), including attorneys’ fees, made by any
              third party due to or arising out of (a) your breach of these Terms; (b) your use of the Services; (c) any
              Submissions you create, post, share, upload to, transmit, distribute, store or otherwise publish on or through
              the Services; (d) any feedback you provide; and (e) or your violation of any law or the rights of a third
              party. You agree to promptly notify United Hardscapes Parties of any third-party Claims, cooperate with United
              Hardscapes Parties in defending such Claims and pay all fees, costs and expenses associated with defending
              such Claims. You also agree that the United Hardscapes Parties will have control of the defense or settlement,
              at United Hardscapes’ sole option, of any third-party Claims. This indemnity is in addition to, and not in
              lieu of, any other indemnities set forth in a written agreement between you and United Hardscapes or the other
              United Hardscapes Parties.</p>

            <h5 className="text-28 text-secondary font-medium my-30">Release</h5>
            <p className="mb-15">Any dispute between you and another user, including Contractors, must be resolved between yourselves. To the
              fullest extent permitted by applicable law, you release United Hardscapes and the other United Hardscapes
              Parties from liability, claims, demands and damages (actual and consequential) of every kind and nature, known
              and unknown (including but not limited to claims of negligence), arising out of or in any way connected with
              disputes between users and the acts or omissions of third parties. IF YOU ARE A CONSUMER WHO RESIDES IN
              CALIFORNIA, YOU HEREBY WAIVE YOUR RIGHTS UNDER CALIFORNIA CIVIL CODE § 1542, WHICH PROVIDES: “A GENERAL
              RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER FAVOR AT
              THE TIME OF EXECUTING THE RELEASE, WHICH IF KNOWN BY HIM OR HER MUST HAVE MATERIALLY AFFECTED HIS OR HER
              SETTLEMENT WITH THE DEBTOR.”</p>

            <h5 className="text-28 text-secondary font-medium my-30">Dispute Resolution,
              Arbitration</h5>
            <p className="mb-15">PLEASE READ THE FOLLOWING SECTION CAREFULLY BECAUSE IT REQUIRES YOU TO ARBITRATE CERTAIN DISPUTES AND CLAIMS
              WITH United Hardscapes AND LIMITS THE MANNER IN WHICH YOU CAN SEEK RELIEF FROM US.</p>

            <h6 className="italic text-24 text-secondary text-left mb-30">15.1 Binding Arbitration</h6>
            <p className="mb-15">Except for any disputes, claims, suits, actions, causes of action, demands or proceedings (collectively,
              “Disputes”) arising out of or related to a violation of Section 5 or Section 6 or Disputes in which either
              party seeks to bring an individual action in small claims court or seeks injunctive or other equitable relief
              for the alleged unlawful use of intellectual property, including, without limitation, copyrights, trademarks,
              trade names, logos, trade secrets or patents, you and United Hardscapes agree (a) to waive your and United
              Hardscapes’ respective rights to have any and all Disputes arising from or related to these Terms, or the
              Services, United Hardscapes Content or Hardscaping Services, resolved in a court, and (b) to waive your and
              United Hardscapes’ respective rights to a jury trial. Instead, you and United Hardscapes agree to arbitrate
              Disputes through binding arbitration (which is the referral of a Dispute to one or more persons charged with
              reviewing the Dispute and making a final and binding determination to resolve it instead of having the Dispute
              decided by a judge or jury in court).</p>

            <h6 className="italic text-24 text-secondary text-left mb-30">15.2 No Class Arbitrations, Class
              Actions or Representative Actions</h6>
            <p className="mb-15">You and United Hardscapes agree that any Dispute arising out of or related to these Terms or the Services,
              United Hardscapes Content or Hardscaping Services is personal to you and United Hardscapes and that such
              Dispute will be resolved solely through individual arbitration and will not be brought as a class arbitration,
              class action or any other type of representative proceeding. You and United Hardscapes agree that there will
              be no class arbitration or arbitration in which an individual attempts to resolve a Dispute as a
              representative of another individual or group of individuals. Further, you and United Hardscapes agree that a
              Dispute cannot be brought as a class or other type of representative action, whether within or outside of
              arbitration, or on behalf of any other individual or group of individuals.</p>

            <h6 className="italic text-24 text-secondary text-left mb-30">15.3 Federal Arbitration Act</h6>
            <p className="mb-15">You and United Hardscapes agree that these Terms affect interstate commerce and that the enforceability of
              this Section 16 shall be both substantively and procedurally governed by and construed and enforced in
              accordance with the Federal Arbitration Act, 9 U.S.C. § 1 et seq. (the “FAA”), to the maximum extent permitted
              by applicable law.</p>

            <h6 className="italic text-24 text-secondary text-left mb-30">15.4 Notice; Informal Dispute
              Resolution</h6>
            <p className="mb-15">You and United Hardscapes agree that each party will notify the other party in writing of any arbitrable or
              small claims Dispute within thirty (30) days of the date it arises, so that the parties can attempt in good
              faith to resolve the Dispute informally. Notice to United Hardscapes shall be sent by certified mail or
              courier to United Hardscapes Inc. 1865 Main St #92 East Windsor Hill CT, 06028. Your notice must include (a)
              your name, postal address, telephone number, the email address you use or used for your United Hardscapes
              account and, if different, an email address at which you can be contacted, (b) a description in reasonable
              detail of the nature or basis of the Dispute, and (c) the specific relief that you are seeking. Our notice to
              you will be sent electronically in accordance with Section 2 and will include (x) our name, postal address,
              telephone number and an email address at which we can be contacted with respect to the Dispute, (y) a
              description in reasonable detail of the nature or basis of the Dispute, and (z) the specific relief that we
              are seeking. If you and United Hardscapes cannot agree how to resolve the Dispute within thirty (30) days
              after the date notice is received by the applicable party, then either you or United Hardscapes may, as
              appropriate and in accordance with this Section 16, commence an arbitration proceeding or, to the extent
              specifically provided for in Section 16.1, file a claim in court.</p>

            <h6 className="italic text-24 text-secondary text-left mb-30">15.5 Process</h6>
            <p className="mb-15">EXCEPT FOR DISPUTES ARISING OUT OF OR RELATED TO A VIOLATION OF SECTION 5 OR SECTION 6 OR DISPUTES IN WHICH
              EITHER PARTY SEEKS TO BRING AN INDIVIDUAL ACTION IN SMALL CLAIMS COURT OR SEEKS INJUNCTIVE OR OTHER EQUITABLE
              RELIEF FOR THE ALLEGED UNLAWFUL USE OF INTELLECTUAL PROPERTY, INCLUDING, WITHOUT LIMITATION, COPYRIGHTS,
              TRADEMARKS, TRADE NAMES, LOGOS, TRADE SECRETS OR PATENTS, YOU AND United Hardscapes AGREE THAT ANY DISPUTE
              MUST BE COMMENCED OR FILED BY YOU OR United Hardscapes WITHIN ONE (1) YEAR OF THE DATE THE DISPUTE AROSE,
              OTHERWISE THE UNDERLYING CLAIM IS PERMANENTLY BARRED (WHICH MEANS THAT YOU AND United Hardscapes WILL NO
              LONGER HAVE THE RIGHT TO ASSERT SUCH CLAIM REGARDING THE DISPUTE). You and United Hardscapes agree that (a)
              any arbitration will occur either in (i) the State of Connecticut, County of Hartford, (ii) telephonically, or
              (iii) in the county where you reside, (b) arbitration will be conducted confidentially by a single arbitrator
              in accordance with the rules of the Judicial Arbitration and Mediation Services (“JAMS”), which are hereby
              incorporated by reference, and (c) that the state or federal courts of the State of Connecticut and the United
              States, respectively, sitting in the State of Connecticut, County of Hartford, have exclusive jurisdiction
              over any appeals and the enforcement of an arbitration award. You may also litigate a Dispute in the small
              claims court located in the county of your billing address if the Dispute meets the requirements to be heard
              in small claims court.</p>

            <h6 className="italic text-24 text-secondary text-left mb-30">15.6 Authority of Arbitrator</h6>
            <p className="mb-15">As limited by the FAA, these Terms and the applicable JAMS rules, the arbitrator will have (a) the exclusive
              authority and jurisdiction to make all procedural and substantive decisions regarding a Dispute, including the
              determination of whether a Dispute is arbitrable, and (b) the authority to grant any remedy that would
              otherwise be available in court; provided, however, that the arbitrator does not have the authority to conduct
              a class arbitration or a representative action, which is prohibited by these Terms. The arbitrator may only
              conduct an individual arbitration and may not consolidate more than one individual’s claims, preside over any
              type of class or representative proceeding or preside over any proceeding involving more than one
              individual.</p>

            <h6 className="italic text-24 text-secondary text-left mb-30">15.7 Rules of JAMS</h6>
            <p className="mb-15">The rules of JAMS and additional information about JAMS are available on the JAMS website. By agreeing to be
              bound by these Terms, you either (a) acknowledge and agree that you have read and understand the rules of
              JAMS, or (b) waive your opportunity to read the rules of JAMS and any claim that the rules of JAMS are unfair
              or should not apply for any reason.</p>

            <h6 className="italic text-24 text-secondary text-left mb-30">15.8 Severability</h6>
            <p className="mb-15">If any term, clause or provision of this Section 16 is held invalid or unenforceable, it will be so held to
              the minimum extent required by law, and all other terms, clauses and provisions of this Section 16 will remain
              valid and enforceable. Further, the waivers set forth in Section 16.2 are severable from the other provisions
              of these Terms and will remain valid and enforceable, except as prohibited by applicable law.</p>

            <h6 className="italic text-24 text-secondary text-left mb-30">15.9 Opt-Out Right</h6>
            <p className="mb-15">You have the right to opt out of binding arbitration within thirty (30) days of the date you first accepted
              the terms of this Section 16 by writing to: United Hardscapes Inc. 1865 Main St #92 East Windsor Hill CT,
              06028. In order to be effective, the opt out notice must include your full name and clearly indicate your
              intent to opt out of binding arbitration. By opting out of binding arbitration, you are agreeing to resolve
              Disputes on an individual basis in accordance with Section 17.</p>

            <h5 className="text-28 text-secondary font-medium my-30">Governing Law and Venue</h5>
            <p className="mb-15">If any provision of these Terms is held unenforceable, then the provision will be modified to reflect the
              parties’ intention. All remaining provisions of these Terms will remain in full force and effect. You and
              United Hardscapes are independent contractors, and no agency, partnership, joint venture, employee-employer or
              franchiser-franchisee relationship is intended or created by these Terms. United Hardscapes reserves the right
              to modify or terminate the Services for any reason, without notice, at any time. Unless otherwise specified
              herein, all notices will be in writing and will be deemed to have been duly given when received, if personally
              delivered or sent by certified or registered mail, return receipt requested; when receipt is electronically
              confirmed, if transmitted by facsimile or e-mail; or the day after it is sent, if sent for next day delivery
              by recognized overnight delivery service. Electronic notices should be sent to <a
                href="mailto:Support@UnitedHardscapes.com" className="text-primary">Support@UnitedHardscapes.com</a> All
              provisions of these Terms which by their nature should survive termination will survive termination,
              including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of
              liability. Under California Civil Code Section 1789.3, California consumers are entitled to the following
              specific consumer rights notice: The Complaint Assistance Unit of the Division of Consumer Services of the
              California Department of Consumer Affairs may be contacted in writing at 1625 N. Market Blvd., Suite N-112,
              Sacramento, California 95834, or by telephone at 1 (800) 952-5210. Exclusion of European Economic Area
              Customers. You agree to access and use Services only within the jurisdictions in which United Hardscapes
              operates. If you are a resident of the European Economic Area (“EEA”), you may not access or otherwise use the
              Services or provide United Hardscapes with any Personal Information (as defined in the Privacy Policy) or
              cause United Hardscapes to receive any Personal Information of any EEA resident.</p>

            <h5 className="text-28 text-secondary font-medium my-30">Changes to These Terms</h5>
            <p className="mb-15">If any provision of these Terms is held unenforceable, then the provision will be modified to reflect the
              parties’ intention. All remaining provisions of these Terms will remain in full force and effect. You and
              United Hardscapes are independent contractors, and no agency, partnership, joint venture, employee-employer or
              franchiser-franchisee relationship is intended or created by these Terms. United Hardscapes reserves the right
              to modify or terminate the Services for any reason, without notice, at any time. Unless otherwise specified
              herein, all notices will be in writing and will be deemed to have been duly given when received, if personally
              delivered or sent by certified or registered mail, return receipt requested; when receipt is electronically
              confirmed, if transmitted by facsimile or e-mail; or the day after it is sent, if sent for next day delivery
              by recognized overnight delivery service. Electronic notices should be sent to <a
                href="mailto:Support@UnitedHardscapes.com" className="text-primary">Support@UnitedHardscapes.com</a> All
              provisions of these Terms which by their nature should survive termination will survive termination,
              including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of
              liability. Under California Civil Code Section 1789.3, California consumers are entitled to the following
              specific consumer rights notice: The Complaint Assistance Unit of the Division of Consumer Services of the
              California Department of Consumer Affairs may be contacted in writing at 1625 N. Market Blvd., Suite N-112,
              Sacramento, California 95834, or by telephone at 1 (800) 952-5210. Exclusion of European Economic Area
              Customers. You agree to access and use Services only within the jurisdictions in which United Hardscapes
              operates. If you are a resident of the European Economic Area (“EEA”), you may not access or otherwise use the
              Services or provide United Hardscapes with any Personal Information (as defined in the Privacy Policy) or
              cause United Hardscapes to receive any Personal Information of any EEA resident.</p>

            <h5 className="text-28 text-secondary font-medium my-30">Miscellaneous</h5>
            <p className="mb-15">If any provision of these Terms is held unenforceable, then the provision will be modified to reflect the
              parties’ intention. All remaining provisions of these Terms will remain in full force and effect. You and
              United Hardscapes are independent contractors, and no agency, partnership, joint venture, employee-employer or
              franchiser-franchisee relationship is intended or created by these Terms. United Hardscapes reserves the right
              to modify or terminate the Services for any reason, without notice, at any time. Unless otherwise specified
              herein, all notices will be in writing and will be deemed to have been duly given when received, if personally
              delivered or sent by certified or registered mail, return receipt requested; when receipt is electronically
              confirmed, if transmitted by facsimile or e-mail; or the day after it is sent, if sent for next day delivery
              by recognized overnight delivery service. Electronic notices should be sent to <a
                href="mailto:Support@UnitedHardscapes.com" className="text-primary">Support@UnitedHardscapes.com</a> All
              provisions of these Terms which by their nature should survive termination will survive termination,
              including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of
              liability. Under California Civil Code Section 1789.3, California consumers are entitled to the following
              specific consumer rights notice: The Complaint Assistance Unit of the Division of Consumer Services of the
              California Department of Consumer Affairs may be contacted in writing at 1625 N. Market Blvd., Suite N-112,
              Sacramento, California 95834, or by telephone at 1 (800) 952-5210. Exclusion of European Economic Area
              Customers. You agree to access and use Services only within the jurisdictions in which United Hardscapes
              operates. If you are a resident of the European Economic Area (“EEA”), you may not access or otherwise use the
              Services or provide United Hardscapes with any Personal Information (as defined in the Privacy Policy) or
              cause United Hardscapes to receive any Personal Information of any EEA resident.</p>
          </div>
        </section>
      </Layout>
    </>
  );
}
