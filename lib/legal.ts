import type { Lang } from "./i18n"

export type LegalDocKey = "terms" | "privacy"

export interface LegalSection {
  title: string
  content: string
}

export interface LegalDocument {
  title: string
  lastUpdated: string
  sections: LegalSection[]
}

export const legalDocuments: Record<LegalDocKey, Record<Lang, LegalDocument>> = {
  terms: {
    zh: {
      title: "用户协议",
      lastUpdated: "最后更新：2026-11-21",
      sections: [
        {
          title: "一、服务说明",
          content:
            "为你（For You，以下简称「本应用」）是一款由合肥阿博木科技有限公司开发和运营的私人社交应用。您可以在本应用中发布内容，并获得回应。本应用按设计不向其他人类用户公开展示您的内容。本协议适用于您使用本应用的所有服务。注册或使用本应用即表示您同意本协议的全部条款。",
        },
        {
          title: "二、账号注册与管理",
          content:
            "您需提供有效的电子邮箱地址进行注册。您有责任妥善保管账号信息（包括密码），因账号保管不善导致的损失由您自行承担。",
        },
        {
          title: "三、用户行为规范",
          content:
            "您不得利用本应用从事违反法律法规的行为，不得发布违法、侵权或其他不当内容，不得干扰本应用的正常运行，不得未经授权获取其他用户的信息。",
        },
        {
          title: "四、知识产权",
          content:
            "本应用的名称、标识、界面设计，以及由本应用生成的角色与回复等内容，其知识产权归合肥阿博木科技有限公司或相关权利人所有。您对其自行发布的内容保留相应权利，并授予我们为提供、维护和改进本服务所必需的使用许可（包括存储、处理，以及为您生成回应）。未经授权，您不得复制、传播本应用内容或用于商业目的。",
        },
        {
          title: "五、未成年人保护",
          content:
            "本应用不面向未满 14 周岁的儿童。若您未满 14 周岁，请在监护人的陪同和同意下使用本应用。若我们发现在未经监护人同意的情况下收集了儿童的个人信息，将尽快删除相关资料。",
        },
        {
          title: "六、账号注销",
          content:
            "您有权随时申请注销您的账号。您可以通过应用内「设置」中的注销功能自行操作，或发送邮件至 hello@arborm.com 申请注销。账号注销后，我们将在 15 个工作日内删除您的个人信息，法律法规另有规定的除外。",
        },
        {
          title: "七、服务终止",
          content:
            "如您违反本协议的任何条款，我们有权暂停或终止向您提供服务，并不承担由此产生的任何责任。您也可以随时停止使用本应用并注销账号。",
        },
        {
          title: "八、免责声明",
          content:
            "本应用按「现状」提供服务，不对服务的及时性、安全性或无错误做出任何保证。本应用中的角色回应由系统生成，不构成任何专业建议，也不保证特定内容或结果。因不可抗力或第三方原因导致的服务中断，本应用不承担责任。",
        },
        {
          title: "九、协议修改",
          content:
            "本应用保留随时修改本协议的权利。修改后的协议将在应用内及本页面公布，继续使用本应用即视为同意修改后的条款。",
        },
        {
          title: "十、适用法律与争议解决",
          content:
            "本协议的订立、执行和解释均适用中华人民共和国法律。因本协议产生的任何争议，双方应友好协商解决；协商不成的，任何一方均可向合肥阿博木科技有限公司所在地有管辖权的人民法院提起诉讼。",
        },
      ],
    },
    hant: {
      title: "使用者協議",
      lastUpdated: "最後更新：2026-11-21",
      sections: [
        {
          title: "一、服務說明",
          content:
            "為你（For You，以下簡稱「本應用」）是一款由合肥阿博木科技有限公司開發和營運的私人社交應用。您可以在本應用中發布內容，並獲得回應。本應用按設計不向其他人類使用者公開展示您的內容。本協議適用於您使用本應用的所有服務。註冊或使用本應用即表示您同意本協議的全部條款。",
        },
        {
          title: "二、帳號註冊與管理",
          content:
            "您需提供有效的電子郵箱地址進行註冊。您有責任妥善保管帳號資訊（包括密碼），因帳號保管不善導致的損失由您自行承擔。",
        },
        {
          title: "三、使用者行為規範",
          content:
            "您不得利用本應用從事違反法律法規的行為，不得發布違法、侵權或其他不當內容，不得干擾本應用的正常運行，不得未經授權獲取其他使用者的資訊。",
        },
        {
          title: "四、知識產權",
          content:
            "本應用的名稱、標誌、介面設計，以及由本應用生成的角色與回覆等內容，其知識產權歸合肥阿博木科技有限公司或相關權利人所有。您對自行發布的內容保留相應權利，並授予我們為提供、維護和改進本服務所必需的使用許可（包括儲存、處理，以及為您生成回應）。未經授權，您不得複製、傳播本應用內容或用於商業目的。",
        },
        {
          title: "五、未成年人保護",
          content:
            "本應用不面向未滿 14 週歲的兒童。若您未滿 14 週歲，請在監護人的陪同和同意下使用本應用。若我們發現在未經監護人同意的情況下收集了兒童的個人資訊，將盡快刪除相關資料。",
        },
        {
          title: "六、帳號註銷",
          content:
            "您有權隨時申請註銷您的帳號。您可以透過應用內「設定」中的註銷功能自行操作，或發送郵件至 hello@arborm.com 申請註銷。帳號註銷後，我們將在 15 個工作日內刪除您的個人資訊，法律法規另有規定的除外。",
        },
        {
          title: "七、服務終止",
          content:
            "如您違反本協議的任何條款，我們有權暫停或終止向您提供服務，並不承擔由此產生的任何責任。您也可以隨時停止使用本應用並註銷帳號。",
        },
        {
          title: "八、免責聲明",
          content:
            "本應用按「現狀」提供服務，不對服務的及時性、安全性或無錯誤做出任何保證。本應用中的角色回應由系統生成，不構成任何專業建議，也不保證特定內容或結果。因不可抗力或第三方原因導致的服務中斷，本應用不承擔責任。",
        },
        {
          title: "九、協議修改",
          content:
            "本應用保留隨時修改本協議的權利。修改後的協議將在應用內及本頁面公布，繼續使用本應用即視為同意修改後的條款。",
        },
        {
          title: "十、適用法律與爭議解決",
          content:
            "本協議的訂立、執行和解釋均適用中華人民共和國法律。因本協議產生的任何爭議，雙方應友好協商解決；協商不成的，任何一方均可向合肥阿博木科技有限公司所在地有管轄權的人民法院提起訴訟。",
        },
      ],
    },
    en: {
      title: "Terms of Use",
      lastUpdated: "Last updated: 2026-11-21",
      sections: [
        {
          title: "1. Service Description",
          content:
            'For You (hereinafter referred to as "the App") is a private social application developed and operated by Hefei ArborM Technology Co., Ltd. You may post content in the App and receive responses. By design, the App does not publicly display your content to other human users. These Terms apply to all services you use in the App. By registering for or using the App, you agree to all terms of this agreement.',
        },
        {
          title: "2. Account Registration and Management",
          content:
            "You must provide a valid email address to register. You are responsible for properly safeguarding your account information (including your password), and you shall bear any losses resulting from improper safeguarding of your account.",
        },
        {
          title: "3. User Code of Conduct",
          content:
            "You must not use the App to engage in activities that violate laws or regulations, post illegal, infringing, or otherwise inappropriate content, interfere with the normal operation of the App, or obtain other users' information without authorization.",
        },
        {
          title: "4. Intellectual Property",
          content:
            "The intellectual property rights in the App's name, logo, interface design, and content generated by the App such as characters and replies belong to Hefei ArborM Technology Co., Ltd. or the relevant rights holders. You retain the corresponding rights to the content you post yourself, and grant us the license necessary to provide, maintain, and improve the service (including storing, processing, and generating responses for you). Without authorization, you may not copy or distribute content from the App or use it for commercial purposes.",
        },
        {
          title: "5. Protection of Minors",
          content:
            "The App is not intended for children under the age of 14. If you are under the age of 14, please use the App accompanied by and with the consent of a guardian. If we discover that we have collected personal information from a child without guardian consent, we will delete the relevant data as soon as possible.",
        },
        {
          title: "6. Account Deletion",
          content:
            'You have the right to request deletion of your account at any time. You may do so yourself using the account deletion feature in "Settings" within the App, or email hello@arborm.com to request deletion. After your account is deleted, we will delete your personal information within 15 business days, unless otherwise required by laws or regulations.',
        },
        {
          title: "7. Service Termination",
          content:
            "If you violate any term of these Terms, we have the right to suspend or terminate the provision of services to you without assuming any liability arising therefrom. You may also stop using the App and delete your account at any time.",
        },
        {
          title: "8. Disclaimer",
          content:
            'The App provides services on an "as is" basis and makes no warranties as to the timeliness, security, or error-free nature of the service. Character responses in the App are generated by the system, do not constitute any professional advice, and do not guarantee specific content or outcomes. The App assumes no liability for service interruptions caused by force majeure or third-party reasons.',
        },
        {
          title: "9. Modifications to These Terms",
          content:
            "The App reserves the right to modify these Terms at any time. The modified Terms will be published within the App and on this page, and your continued use of the App shall be deemed acceptance of the modified terms.",
        },
        {
          title: "10. Governing Law and Dispute Resolution",
          content:
            "The formation, execution, and interpretation of these Terms shall be governed by the laws of the People's Republic of China. Any dispute arising from these Terms shall be resolved through friendly negotiation between the parties; if negotiation fails, either party may bring a lawsuit before a people's court with jurisdiction in the location of Hefei ArborM Technology Co., Ltd.",
        },
      ],
    },
  },
  privacy: {
    zh: {
      title: "隐私政策",
      lastUpdated: "最后更新：2026-11-21",
      sections: [
        {
          title: "一、我们收集的信息",
          content:
            "为提供服务，我们仅收集提供服务所必需的数据，包括：您的账号信息（电子邮箱、昵称、头像，以及您填写的简介）、您发布的内容，以及内容浏览与收藏记录。我们不会收集您的通讯录、位置信息或设备中的其他个人数据。",
        },
        {
          title: "二、信息使用目的",
          content:
            "我们收集的信息仅用于：提供和维护服务（包括为您生成回应）、改善服务、维护账号安全、发送服务相关通知。您发布的内容会用于在本应用中向您展示，并用于生成角色回应。我们不会将您的信息用于与本应用无关的商业推广。",
        },
        {
          title: "三、信息存储与保护",
          content:
            "您的账号及需要同步的资料存储在云端服务器上，传输过程使用加密（TLS/SSL），并安全存储。我们采取合理的技术和管理措施保护您的个人信息安全。本应用按设计不向其他人类用户公开展示您的内容；但在为提供服务、保障安全，或法律法规要求的情况下，我们可能接触相关内容。",
        },
        {
          title: "四、第三方共享",
          content:
            "我们不会将您的个人数据出售或出租给任何第三方。仅在以下情况下可能共享数据：为提供核心服务所必需的基础设施服务商（如云存储、身份验证）；法律法规要求的情况。我们会确保所有合作方遵守同等的数据保护标准。",
        },
        {
          title: "五、未成年人信息保护",
          content:
            "本应用不面向未满 14 周岁的儿童。我们不会主动收集未满 14 周岁儿童的个人信息。若您是未满 14 周岁儿童的监护人，发现我们可能收集了您孩子的信息，请联系我们，我们将尽快删除。",
        },
        {
          title: "六、数据保留与删除",
          content:
            "我们仅在为您提供服务所必要的期限内保留您的个人信息。账号注销后，我们将在 15 个工作日内删除您的个人信息，法律法规另有规定的除外。",
        },
        {
          title: "七、您的权利",
          content:
            "您有权访问、更正和删除您的个人信息。您可以通过应用设置修改个人资料，或联系我们请求删除账号及相关资料。",
        },
        {
          title: "八、隐私政策更新",
          content:
            "我们可能会不时更新本隐私政策。更新后的政策将在应用内及本页面公布，建议您定期查阅。",
        },
        {
          title: "九、联系我们",
          content:
            "如您对本隐私政策有任何疑问，请通过 hello@arborm.com 联系我们。",
        },
      ],
    },
    hant: {
      title: "隱私政策",
      lastUpdated: "最後更新：2026-11-21",
      sections: [
        {
          title: "一、我們收集的資訊",
          content:
            "為提供服務，我們僅收集提供服務所必需的資料，包括：您的帳號資訊（電子郵箱、暱稱、頭像，以及您填寫的簡介）、您發布的內容，以及內容瀏覽與收藏紀錄。我們不會收集您的通訊錄、位置資訊或裝置中的其他個人資料。",
        },
        {
          title: "二、資訊使用目的",
          content:
            "我們收集的資訊僅用於：提供和維護服務（包括為您生成回應）、改善服務、維護帳號安全、發送服務相關通知。您發布的內容會用於在本應用中向您展示，並用於生成角色回應。我們不會將您的資訊用於與本應用無關的商業推廣。",
        },
        {
          title: "三、資訊儲存與保護",
          content:
            "您的帳號及需要同步的資料儲存在雲端伺服器上，傳輸過程使用加密（TLS/SSL），並安全儲存。我們採取合理的技術和管理措施保護您的個人資訊安全。本應用按設計不向其他人類使用者公開展示您的內容；但在為提供服務、保障安全，或法律法規要求的情況下，我們可能接觸相關內容。",
        },
        {
          title: "四、第三方共享",
          content:
            "我們不會將您的個人資料出售或出租給任何第三方。僅在以下情況下可能共享資料：為提供核心服務所必需的基礎設施服務商（如雲端儲存、身分驗證）；法律法規要求的情況。我們會確保所有合作方遵守同等的資料保護標準。",
        },
        {
          title: "五、未成年人資訊保護",
          content:
            "本應用不面向未滿 14 週歲的兒童。我們不會主動收集未滿 14 週歲兒童的個人資訊。若您是未滿 14 週歲兒童的監護人，發現我們可能收集了您孩子的資訊，請聯絡我們，我們將盡快刪除。",
        },
        {
          title: "六、資料保留與刪除",
          content:
            "我們僅在為您提供服務所必要的期限內保留您的個人資訊。帳號註銷後，我們將在 15 個工作日內刪除您的個人資訊，法律法規另有規定的除外。",
        },
        {
          title: "七、您的權利",
          content:
            "您有權存取、更正和刪除您的個人資訊。您可以透過應用設定修改個人資料，或聯絡我們請求刪除帳號及相關資料。",
        },
        {
          title: "八、隱私政策更新",
          content:
            "我們可能會不時更新本隱私政策。更新後的政策將在應用內及本頁面公布，建議您定期查閱。",
        },
        {
          title: "九、聯絡我們",
          content:
            "如您對本隱私政策有任何疑問，請透過 hello@arborm.com 聯絡我們。",
        },
      ],
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: 2026-11-21",
      sections: [
        {
          title: "1. Information We Collect",
          content:
            "To provide our services, we collect only the data necessary to deliver the service, including: your account information (email address, nickname, avatar, and any bio you provide), the content you post, and your content browsing and bookmarking records. We do not collect your contacts, location information, or other personal data on your device.",
        },
        {
          title: "2. How We Use Information",
          content:
            "The information we collect is used only to: provide and maintain the service (including generating responses for you), improve the service, maintain account security, and send service-related notifications. The content you post is used to display it to you in the App and to generate character responses. We will not use your information for commercial promotions unrelated to the App.",
        },
        {
          title: "3. Information Storage and Protection",
          content:
            "Your account and data requiring synchronization are stored on cloud servers, encrypted during transmission (TLS/SSL), and stored securely. We take reasonable technical and administrative measures to protect the security of your personal information. By design, the App does not publicly display your content to other human users; however, we may access relevant content as necessary to provide the service, ensure security, or comply with laws and regulations.",
        },
        {
          title: "4. Third-Party Sharing",
          content:
            "We do not sell or rent your personal data to any third party. Data may be shared only under the following circumstances: with infrastructure service providers necessary to deliver core services (such as cloud storage and authentication); or as required by laws and regulations. We ensure that all partners adhere to equivalent data protection standards.",
        },
        {
          title: "5. Protection of Minors' Information",
          content:
            "The App is not intended for children under the age of 14. We do not knowingly collect personal information from children under the age of 14. If you are the guardian of a child under 14 and discover that we may have collected your child's information, please contact us and we will delete it as soon as possible.",
        },
        {
          title: "6. Data Retention and Deletion",
          content:
            "We retain your personal information only for the period necessary to provide services to you. After your account is deleted, we will delete your personal information within 15 business days, unless otherwise required by laws or regulations.",
        },
        {
          title: "7. Your Rights",
          content:
            "You have the right to access, correct, and delete your personal information. You can modify your profile through the App's settings, or contact us to request deletion of your account and related data.",
        },
        {
          title: "8. Updates to This Privacy Policy",
          content:
            "We may update this Privacy Policy from time to time. The updated policy will be published within the App and on this page, and we recommend that you review it periodically.",
        },
        {
          title: "9. Contact Us",
          content:
            "If you have any questions about this Privacy Policy, please contact us at hello@arborm.com.",
        },
      ],
    },
  },
}
