import { FC } from "react";
import { Box, Button, Container, styled } from "@mui/material";
import { Footer, Header } from "@/components/landingPageComp";

const TermsAndConditionsMain = styled(Box)(({ theme }: any) => ({
  paddingBottom: "5rem",
  paddingTop: "230px",
  "@media (max-width:900px)": {
    paddingTop: "200px",
  },
  "@media (max-width:805px)": {
    paddingTop: "280px",
  },
  "@media (max-width:765px)": {
    paddingTop: "110px",
  },
  ".sub-heading-text": {
    display: "flex",
    alignItems: "center",
    color: "#39C64E",
    paddingBottom: "1rem",
  },
  "& .para-text": {
    color: theme.palette.common.subHeadinglightBlack,
    fontWeight: "700",
    paddingBottom: "1rem",
  },
  "& .scrollDiv": {
    maxHeight: "60vh",
    overflowY: "auto",
    width: "100%",
    paddingRight: "1rem",
    "&::-webkit-scrollbar": {
      width: "12px",
    },

    "&::-webkit-scrollbar-track": {
      borderRadius: "112.73px",
      background: "#F5F5F5",
      border: "none",
    },
    "&::-webkit-scrollbar-thumb ": {
      borderRadius: "112.73px",
      background: "#39C64E",
      border: "none",
    },
    "& li": { fontSize: "unset", color: "#6B6B6B" },
    "& .withoutMargin": {
      margin: "Unset",
      fontSize: "unset",
      color: "#6B6B6B",
    },
    "& .marginP": {
      marginBottom: "1rem",
      marginTop: "unset",
      fontSize: "unset",
      color: "#6B6B6B",
    },
  },
  "& .footerButtons": {
    marginTop: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    gap: 30,
    "& .agreeBtn": {
      width: "150px",
      background: theme.palette.common.headingLinesGreen,
      color: "white",
      border: "none",
      fontSize: "16px",
      fontWeight: "600",
    },
    "& .cancelBtn": {
      width: "fit-content",
      color: theme.palette.common.headingLinesGreen,
      border: "none",
      fontSize: "16px",
      fontWeight: "600",
    },
  },
}));

const TermsAndConditions: FC = () => {
  return (
    <>
      <Header />
      <TermsAndConditionsMain>
        <Container maxWidth="lg">
          <h4 className="sub-heading-text">Terms and Conditions</h4>
          <p className="para-text">Your Agreement</p>
          <Box className="scrollDiv">
            <p className="withoutMargin">Introduction</p>
            <p className="marginP">
              Welcome to EmarTech, the innovative B2B marketplace tailored for
              the construction industry, offering streamlined procurement
              processes, project monitoring solutions, and online raw material
              purchasing. This platform is dedicated to connecting project
              executors with a diverse range of suppliers, streamlining
              operations, and enhancing overall efficiency.
            </p>
            <p className="marginP">
              By accessing and utilizing the EmarTech website, its associated
              mobile application, and the services offered therein (referred to
              collectively as the "Platform"), you agree to abide by the
              following terms and conditions of use. These terms, along with our
              privacy policy, govern EmarTech's relationship with you concerning
              the Platform.
            </p>
            <p className="marginP">
              Please carefully read these terms and conditions before utilizing
              our Platform. They apply to all visitors, users, and others
              accessing or using the Platform. By accessing or using the
              Platform, you agree to be bound by these terms. If you disagree
              with any part of the terms, you may not access the Platform.
            </p>
            <p className="marginP">
              EmarTech reserves the right to modify these terms and conditions
              at any time without prior notice. Your continued use of the
              Platform after any such changes constitutes your acceptance of the
              revised terms and conditions. We encourage you to regularly review
              this page for the latest updates on our terms and conditions.
            </p>
            <p className="marginP">
              If you have any inquiries about these terms and conditions, please
              contact us using the information provided in the contact section
              of this document.
            </p>
            <p className="withoutMargin">User Account and Responsibilities</p>
            <p className="withoutMargin">Account Creation and Maintenance</p>
            <p className="withoutMargin">User Personas:</p>
            <ul>
              <li>
                Project Executors: Individuals or entities overseeing
                construction projects.
              </li>
              <li>Suppliers: Entities providing raw materials and services.</li>
              <li>
                Admin: Platform administrators overseeing operations and
                ensuring compliance.
              </li>
              <li>
                Simple Users: Individuals accessing the platform for information
                or non-commercial purposes.
              </li>
            </ul>
            <p className="withoutMargin">Account Registration:</p>
            <ul>
              <li>
                Project Executors: Required to provide accurate project details,
                ownership information, and project specifications.
              </li>
              <li>
                Suppliers: Must furnish business details, product/service
                offerings, and compliance information.
              </li>
              <li>
                Admin: Account creation is restricted to platform
                administrators.
              </li>
              <li>
                Simple Users: Optional account creation for a personalized
                experience.
              </li>
            </ul>
            <p className="withoutMargin">Account Responsibilities:</p>
            <ul>
              <li>
                All users are responsible for maintaining the accuracy and
                confidentiality of their account information and passwords.
              </li>
              <li>
                Users must promptly report any unauthorized account activity to
                EmarTech.
              </li>
            </ul>
            <p className="withoutMargin">Specific User Responsibilities</p>
            <p className="withoutMargin">Project Executors:</p>
            <ul>
              <li>
                Adhere to project monitoring procedures outlined on the
                platform.
              </li>
              <li>
                Engage with suppliers in a professional and ethical manner.
              </li>
            </ul>
            <p className="withoutMargin">Suppliers:</p>
            <ul>
              <li>Ensure accuracy in product/service representation.</li>
              <li>
                Adhere to agreed-upon delivery timelines and quality standards.
              </li>
            </ul>
            <p className="withoutMargin">Admin:</p>
            <ul>
              <li>
                Oversee platform operations, ensuring compliance and resolving
                disputes.
              </li>
            </ul>
            <p className="withoutMargin">General User Conduct</p>
            <ul>
              <li>
                Users are prohibited from engaging in unlawful activities,
                posting harmful content, or disrupting platform operations.
              </li>
              <li>
                Users are responsible for the legality and appropriateness of
                the content they post.
              </li>
            </ul>
            <p className="withoutMargin">Transactions and Content</p>
            <ul>
              <li>
                Each user persona is accountable for the transactions they
                initiate and the content they post on the platform. EmarTech
                bears no liability for user-managed transactions or content.
              </li>
            </ul>
            <p className="withoutMargin">Indemnification</p>
            <ul>
              <li>
                Users agree to indemnify EmarTech against claims arising from
                their platform usage, breaches of terms, or provided content.
              </li>
            </ul>
            <p className="withoutMargin">Account Termination</p>
            <ul>
              <li>
                EmarTech reserves the right to suspend or terminate accounts for
                breaches of terms. Users can terminate their accounts per
                platform procedures.
              </li>
            </ul>
            <p className="withoutMargin">Services Description</p>
            <p className="withoutMargin">Overview of Services</p>
            <ul>
              <li>
                EmarTech operates as a comprehensive B2B marketplace
                facilitating construction project monitoring and raw material
                procurement. The platform offers:
              </li>
            </ul>
            <p className="withoutMargin">For Project Executors:</p>
            <ul>
              <li>
                Project Monitoring Tools: Access to tools for project progress
                tracking and management.
              </li>
              <li>
                Raw Material Procurement: Online marketplace for purchasing
                construction raw materials.
              </li>
              <li>
                Supplier Interaction: Communication tools for inquiries,
                negotiations, and feedback.
              </li>
            </ul>
            <p className="withoutMargin">For Suppliers:</p>
            <ul>
              <li>
                Market Access: Opportunity to reach project executors actively
                seeking raw materials.
              </li>
              <li>
                Product Listing: Facilities to list, describe, and update raw
                material offerings.
              </li>
              <li>
                Order Management: Tools for order processing, fulfillment, and
                tracking.
              </li>
            </ul>
            <p className="withoutMargin">Platform Features</p>
            <ul>
              <li>
                User Profiles: Customizable profiles for project executors and
                suppliers.
              </li>
              <li>
                Search and Filter Functionality: Advanced options to connect
                project executors with suppliers.
              </li>
              <li>
                Secure Payment Processing: Reliable processing of transactions
                through the platform.
              </li>
              <li>
                Data Analytics: Insights for market trends and performance
                tracking.
              </li>
            </ul>
            <p className="withoutMargin">Service Limitations</p>
            <ul>
              <li>
                EmarTech facilitates transactions between project executors and
                suppliers but is not a contracting party.
              </li>
              <li>
                The platform does not guarantee the quality, safety, or legality
                of listed products or services.
              </li>
              <li>EmarTech is not responsible for product/service delivery.</li>
            </ul>
            <p className="withoutMargin">Modifications to the Service</p>
            <ul>
              <li>
                EmarTech reserves the right to modify, suspend, or discontinue
                any aspect of the platform without prior notice.
              </li>
              <li>
                Users will be informed of significant changes affecting platform
                usage.
              </li>
            </ul>
            <p className="withoutMargin">Support and Maintenance</p>
            <ul>
              <li>
                EmarTech provides user support and conducts regular maintenance
                to ensure platform functionality.
              </li>
              <li>
                Scheduled maintenance occurs during off-peak hours with prior
                notice to minimize disruption.
              </li>
            </ul>
            <p className="withoutMargin">Intellectual Property Rights</p>
            <p className="withoutMargin">Ownership of Content</p>
            <ul>
              <li>
                Platform Content: All platform content is the property of
                EmarTech or its suppliers, protected by copyright laws.
              </li>
              <li>
                Trademarks: Trademarks displayed on the platform are the
                property of EmarTech, its affiliates, or partners, protected by
                trademark laws.
              </li>
            </ul>
            <p className="withoutMargin">User-Generated Content</p>
            <p className="marginP">
              Ownership: Users retain rights to their posted content.
            </p>
            <p className="withoutMargin">
              License to EmarTech: By posting content, users grant EmarTech a
              non-exclusive right to use, reproduce, and distribute such
              content.
            </p>
            <p className="withoutMargin">Prohibited Use of Platform Content</p>
            <ul>
              <li>
                Users are prohibited from unauthorized commercial exploitation
                of platform content.
              </li>
              <li>
                Users shall not infringe upon EmarTech's intellectual property
                rights or those of third parties.
              </li>
            </ul>
            <p className="withoutMargin">
              Protection of Intellectual Property Rights
            </p>
            <p className="withoutMargin">
              Notification of Infringement: Users can notify EmarTech of alleged
              infringement for appropriate action.
            </p>
            <p className="withoutMargin">Payments and Billing</p>
            <p className="withoutMargin">Payment Terms</p>
            <ul>
              <li>
                Various payment methods are accepted, processed securely through
                third-party gateways.
              </li>
              <li>
                Transactions are conducted in the specified currency, subject to
                currency conversion rates.
              </li>
            </ul>
            <p className="withoutMargin">Billing Information</p>
            <ul>
              <li>
                Users agree to provide accurate billing information and update
                it promptly.
              </li>
              <li>
                Electronic invoices or receipts are provided after each
                transaction.
              </li>
            </ul>
            <p className="withoutMargin">Fees and Charges</p>
            <ul>
              <li>Prices are subject to change without notice.</li>
              <li>
                Taxes and additional charges may apply, disclosed before
                transaction completion.
              </li>
            </ul>
            <p className="withoutMargin">Refund and Cancellation Policy</p>
            <ul>
              <li>Cancellation policies are specified on the platform.</li>
              <li>
                Refunds, as per platform policy, are processed to the original
                payment method.
              </li>
            </ul>
            <p className="withoutMargin">Disputes</p>
            <ul>
              <li>
                Users are encouraged to contact EmarTech for dispute resolution.
              </li>
              <li>
                EmarTech will mediate disputes in good faith, but resolution
                responsibility lies with users.
              </li>
            </ul>
            <p className="withoutMargin">
              These updated terms and conditions aim to provide clarity and
              transparency to all users of the EmarTech platform, fostering a
              collaborative and efficient marketplace environment for
              construction project monitoring and raw material procurement.
            </p>
          </Box>
          <Box className="footerButtons">
            <Button className="cancelBtn" variant="text">
              Cancel
            </Button>
            <Button className="agreeBtn" variant="contained">
              Agree
            </Button>
          </Box>
        </Container>
      </TermsAndConditionsMain>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
