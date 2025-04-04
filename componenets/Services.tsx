

export const Services = () => {
    const services = [
        { 
            id: "01", 
            title: "Web Design", 
            description: "Crafting visually stunning and user-friendly websites tailored to your brand's identity and goals."
        },
        { 
            id: "02", 
            title: "UX/UI Design", 
            description: "Creating intuitive and engaging user experiences and interfaces that prioritize user satisfaction and ease of use."
        },
        { 
            id: "03", 
            title: "Responsive Web Development", 
            description: "Building pixel-perfect, mobile-friendly websites using React, Next.js, and Tailwind CSS."
        },
        { 
            id: "04", 
            title: "Database Management", 
            description: " Designing and optimizing databases with MongoDB, PostgreSQL, and MySQL."
        },
        { 
            id: "05", 
            title: "Real-time Features", 
            description: "Integrating WebSockets for real-time chat, notifications, and live updates."
        },
        { 
            id: "06", 
            title: "Performance Optimization", 
            description: "Improving web performance with lazy loading, caching, and code splitting."
        },
        { 
            id: "07", 
            title: "API Development", 
            description: "Building scalable REST and GraphQL APIs using Node.js and Express.js."
        },
      
    ]


    return(
        <section className="text-white py-20"> 
            <div className="container mx-auto flex flex-col md:flex-row">
                <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
                 <h2 className="text-6xl text-purple-500 font-extrabold sticky top-20 ">SERVICES</h2>
                </div>
                <div className="md:w-3/4">
                {services.map(service => (
                    <div key={service.id} className="mb-16 flex items-start">
                        <div className="text-gray-300 font-bold text-5xl mr-6">
                            {service.id}
                        </div>
                        <div>
                        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                        <p>{service.description}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}