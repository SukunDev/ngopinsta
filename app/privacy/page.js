import React from "react";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <div className="p-2 mx-2 rounded-lg sm:mx-4 sm:p-4 dark:bg-white/5">
      <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-200">
        Privacy Policy
      </h1>
      <article className="mt-8 font-light text-gray-500 dark:text-gray-200 article">
        <h2>Our Pledge to Protect Your Privacy</h2>
        <p>
          At {process.env.NEXT_PUBLIC_APP_TITLE}, we hold your privacy and
          personal information in high regard. Our Privacy Policy is designed to
          explain how we collect, use, and share your data when you utilize our
          Service. By using our Service, you acknowledge and consent to the
          collection and utilization of your personal information as outlined in
          this Privacy Policy. Please note that this Privacy Policy is an
          integral part of our Terms of Service. We periodically review and
          update this Privacy Policy, and any revisions become effective upon
          posting on this page.
        </p>
        <h3>Data Collection</h3>
        <p>
          Unless otherwise specified in this Privacy Policy, we only retain the
          personal data you provide for as long as necessary to fulfill our
          obligations in providing our Service.
          {process.env.NEXT_PUBLIC_APP_TITLE} processes your personal data under
          the following circumstances: with your consent, when it is necessary
          to fulfill our agreement with you, when the data is publicly available
          and within the public domain, or when processing is required by
          applicable laws, court orders, or competent state or municipal
          authorities. We employ various technical, organizational, and security
          measures to protect your personal data from unauthorized access,
          collection, storage, use, transfer, blocking, destruction, as well as
          other illegal activities or accidental leaks. Our use of a secure
          HTTPS connection ensures a high level of data security.
        </p>
        <h3>Purposes of Data Collection</h3>
        <p>
          We collect information about you to analyze the performance of our
          Service for marketing and strategic development purposes. This enables
          us to maintain, improve, and customize the Service and personalize the
          advertisements displayed on our Service and other websites. We rely on
          our legitimate interests to process your data. The information you
          provide directly to us may also be used to correspond with you and
          address any issues you may have regarding the Service. We do not
          collect or process any special categories of personal data, nor do we
          engage in automated decision-making or profiling based on the data you
          provide.
        </p>
        <h3>Use of Cookies</h3>
        <p>
          We utilize cookies and similar technologies such as web beacons, pixel
          tags, and local shared objects (flash cookies) to deliver, measure,
          and enhance the Service in various ways. A cookie is a small text file
          that identifies your computer on our server. Cookies do not personally
          identify individual users but rather the computer being used. Cookies
          are not used to gather personal information. You have the option to
          configure your computer to accept all cookies, receive notifications
          when a cookie is issued, or reject all cookies. The method for doing
          this depends on the web browser you are using (please consult your
          browser&apos;s &quot;Help&quot; function). However, please note that
          declining cookies may limit your access to certain areas of the
          Service. We also collaborate with analytics partners who use cookies
          and similar technologies to help us analyze user behavior on the
          Service. By using our Service, you consent to our use of cookies.
        </p>
        <h3>Children&apos;s Privacy</h3>
        <p>
          If we become aware that we have collected personal data from a child
          under the age of sixteen (16), we will take reasonable steps to delete
          it. Parents or legal guardians who believe that we may have collected
          personal data from a child can request its removal by contacting us
          directly at sukundev32@gmail.com.
        </p>
        <h3>Data Sharing</h3>
        <p>
          We may share your personal data with our affiliates to assist us in
          developing, maintaining, and providing our Service. We may also share
          certain information, such as your location, browser and cookie data,
          and other usage data, with our business partners to deliver
          personalized advertisements that may be of interest to you.
          Additionally, we may share non-personal data with third parties for
          the purpose of understanding usage patterns or conducting independent
          research based on anonymous usage data. Our Service may contain links
          to third-party websites or applications. Please note that we are not
          responsible for the content or privacy practices of those third-party
          websites or applications. We recommend reviewing their respective
          privacy statements and terms of use.
        </p>
        <h3>Your Rights</h3>
        <p>
          If you reside in the European Economic Area (EEA) under the General
          Data Protection Regulation (GDPR), you have the right to access,
          rectify, erase, and restrict the use of your personal information. You
          also have the right to object to the use of your personal information,
          request the transfer of your personal data, withdraw consent for the
          use of your personal information, and restrict our use of your
          personal data for marketing purposes. Furthermore, you have the right
          to lodge a complaint or direct questions to the data protection
          authority. If your personal information is transferred, stored, or
          processed outside of the EEA, we will take all necessary steps to
          ensure that it is treated securely and in accordance with this Privacy
          Policy and GDPR.
        </p>
        <h3>Your Rights under CCPA</h3>
        <p>
          The California Consumer Privacy Act (CCPA) grants additional rights to
          California residents, including the right to know, delete, and opt-out
          of the sale of their personal information. While we do not sell
          personal information in the traditional sense, we will comply with
          applicable laws regarding such activities described in this Privacy
          Policy. You have the right to know specific details about our data
          practices and the right to request the deletion of personal
          information we have collected from you.
        </p>
        <h3>Contact Information</h3>
        <p>
          If you would like to exercise your rights or have any questions about
          the use of your personal information or this Privacy Policy, please
          contact us at sukundev32@gmail.com. When making a request, please
          indicate the right you wish to exercise and provide the details of
          your request. You may also use this email address for any general
          inquiries regarding your personal data.
        </p>
        <p>Effective June 1, 2021</p>
      </article>
    </div>
  );
}
