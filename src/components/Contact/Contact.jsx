import './Contact.css';

function Contact() {
    return (
        <section id="contact" className="contact-section">
            <h2>اتصل بنا</h2>
            <p>تواصل معنا عبر البريد الإلكتروني أو الهاتف للحصول على معلومات إضافية أو لحجز جلسة استشارية.</p>
            <p>البريد الإلكتروني: <a href="mailto:info@mentalhealth.com">info@mentalhealth.com</a></p>
            <p>رقم الهاتف: <a href="tel:+123456789">123-456-789</a></p>
            <p>ساعات العمل: من الأحد إلى الخميس، من 9 صباحًا حتى 5 مساءً.</p>
            <p>نحن هنا لدعمك، فلا تتردد في التواصل معنا. فريقنا يتطلع لمساعدتك في تحسين صحتك النفسية.</p>
            <p>يمكنك أيضًا ملء نموذج الاتصال أدناه وسنعود إليك في أقرب وقت ممكن:</p>
            <form className="contact-form">
                <label htmlFor="name">الاسم:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">البريد الإلكتروني:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="message">الرسالة:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">إرسال</button>
            </form>
        </section>
    );
}

export default Contact;
