import React from 'react';
import './PrivacyPolicy.css'; // Optional: Add styles specific to the Privacy Policy page

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy">
            <h1>اتفاقية الخصوصية للأطباء</h1>
            <p>
                نحن ملتزمون بحماية خصوصيتك وبياناتك الشخصية. توضح هذه الاتفاقية كيف نجمع، نستخدم، ونحمي المعلومات التي تقدمها لنا.
            </p>
            <h2>1. المعلومات التي نجمعها</h2>
            <p>
                نقوم بجمع المعلومات الشخصية التي تقدمها لنا عند التسجيل أو استخدام خدماتنا، والتي قد تشمل الاسم، البريد الإلكتروني، ورقم الهاتف. 
                كما يُطلب من الأطباء رفع الشهادات المختومة الموثقة كجزء من عملية التسجيل والتحقق.
            </p>

            <h2>2. كيفية استخدام المعلومات</h2>
            <p>
                نستخدم المعلومات التي نجمعها لتحسين خدماتنا، التواصل معك، وتقديم الدعم الفني. 
                قد نستخدم أيضًا المعلومات لأغراض تحليلية لتحسين تجربة المستخدم. 
                كما يتم استخدام الشهادات المرفوعة للتحقق من مؤهلات الأطباء وضمان جودة الخدمات المقدمة.
            </p>

            <h2>3. معلومات إضافية حول استخدام الشهادات</h2>
            <p>
                - **تخزين الشهادات:** تُخزن الشهادات في خوادم آمنة، ويتم تشفيرها لضمان سلامتها.
                يمكن الوصول إليها فقط من قبل الفرق المعنية بالتحقق.
            </p>
            <p>
                - **فحص الشهادات:** يتم فحص الشهادات المرفوعة للتأكد من صحتها ومطابقتها للمعايير المحددة.
                يتم الاحتفاظ بالشهادات لمدة [حدد مدة الاحتفاظ، مثل "خمسة سنوات"] بعد انتهاء العلاقة.
            </p>

            <h2>4. تفاصيل عن مشاركة المعلومات</h2>
            <p>
                قد نقوم بمشاركة معلوماتك مع الأطراف الثالثة فقط إذا كانت هناك حاجة لذلك، مثل:
                - **موفري الخدمات:** مثل خدمات الاستضافة والتحليل.
                - **الهيئات التنظيمية:** عندما يتطلب الأمر ذلك بموجب القانون.
            </p>

            <h2>5. حقوق الأطباء</h2>
            <p>
                لديك الحق في الوصول إلى معلوماتك الشخصية، وتحديثها، أو حذفها. 
                يمكنك أيضًا طلب تقارير حول البيانات التي يحتفظ بها الموقع عنك. 
                إذا كنت ترغب في ممارسة أي من هذه الحقوق، يرجى الاتصال بنا.
            </p>

            <h2>6. سياسة ملفات تعريف الارتباط (Cookies)</h2>
            <p>
                نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. 
                يمكنك إدارة تفضيلات ملفات تعريف الارتباط عبر إعدادات المتصفح الخاص بك.
                تشمل استخدامات ملفات تعريف الارتباط:
                - تحسين الأداء.
                - تحليل استخدام الموقع.
                - تخصيص المحتوى.
            </p>

            <h2>7. التعهدات</h2>
            <p>
                - يجب على الأطباء الالتزام بمعايير الجودة والأخلاقيات المهنية عند استخدام المنصة.
                - يجب تقديم الشهادات لكل كورس يتم التسجيل فيه، ويجب أن تكون هذه الشهادات مختومة وموثقة.
            </p>

            <h2>8. حماية المعلومات</h2>
            <p>
                نتخذ خطوات لحماية المعلومات الشخصية من الوصول غير المصرح به أو الاستخدام. 
                نستخدم تقنيات الأمان المناسبة لحماية البيانات، بما في ذلك تشفير البيانات عند النقل والتخزين.
            </p>

            <h2>9. التغييرات على سياسة الخصوصية</h2>
            <p>
                نحن نحتفظ بالحق في تعديل سياسة الخصوصية هذه في أي وقت. 
                سنقوم بإخطارك بأي تغييرات جوهرية من خلال البريد الإلكتروني أو عبر إشعار على الموقع.
            </p>

            <h2>10. الاتصال بنا</h2>
            <p>
                إذا كان لديك أي أسئلة أو استفسارات بشأن سياسة الخصوصية، يرجى الاتصال بنا عبر البريد الإلكتروني أو الهاتف.
            </p>
        </div>
    );
};

export default PrivacyPolicy;
