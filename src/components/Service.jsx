export const Service = () => {

    const services = [
        {
        title: "Web Development",
        description:
            "Building responsive and user-friendly websites using modern technologies.",
        icon: "/icons/web-development.png",
        },
        {
        title: "UI/UX Design",
        description:
            "Creating intuitive and engaging user interfaces for web and mobile applications.",
        icon: "/icons/ui-ux-design.png",
        }
        // {
        // title: "SEO Optimization",
        // description:
        //     "Improving website visibility and ranking on search engines through effective SEO strategies.",
        // icon: "/icons/seo-optimization.png",
        // },
    ];
    
    return (
        <div className="w-full h-full pt-20 pb-30" id="services">
        <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-10">My Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
                <div
                key={index}
                className="service-card border rounded-lg p-6 shadow-md flex flex-col items-center"
                >
                <img
                    src={service.icon}
                    alt={service.title}
                    className="w-16 h-16 mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                <p className="text-gray-600 text-center">{service.description}</p>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
}