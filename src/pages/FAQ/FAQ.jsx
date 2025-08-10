
const FAQSection = () => {
    const faqs = [
        {
            question: "What is CO2BD?",
            answer:
                "CO2BD is a social development platform focused on inspiring, connecting, and empowering individuals to take action for environmental and community betterment."
        },
        {
            question: "How can I participate in events?",
            answer:
                "Simply visit our Events page, choose an activity that interests you, and register. You can join online campaigns or attend in-person activities."
        },
        {
            question: "Do I need to pay to join?",
            answer:
                "No, joining CO2BD is completely free. Some events may have optional donations to support their cause."
        },
        {
            question: "Can I start my own project on CO2BD?",
            answer:
                "Yes! Members can propose new projects or campaigns, and we’ll help you gather volunteers and resources."
        }
    ];

    return (
        <div className="bg-green-50 py-12 px-4 md:px-12">
            <h2 className="text-3xl font-bold text-green-800 text-center mb-8">
                Frequently Asked Questions
            </h2>

            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        tabIndex={0}
                        className="collapse collapse-arrow border border-green-200 bg-white rounded-lg"
                    >
                        <div className="collapse-title text-lg font-semibold text-green-800">
                            {faq.question}
                        </div>
                        <div className="collapse-content text-green-900">
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
