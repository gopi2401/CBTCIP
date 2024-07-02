import { useState } from 'react';


function Home() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = { name, email, subject, message };
        try {
            const response = await fetch('http://127.0.0.1:3001/email', {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            console.log('Form submitted successfully:', formData);
            // Handle response if needed
            // const data = await response.json();
            // console.log('Server response:', data);
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
            event.target.reset();

        } catch (error) {
            console.error('Error submitting form:', error.message);
            // Handle error
        }
    };
    const testimonials = [
        {
            name: 'Sarah Williams',
            role: 'Charity Fundraiser Organizer',
            image: 'https://img.freepik.com/premium-vector/avatar-portrait-kid-caucasian-boy-round-frame-vector-illustration-cartoon-flat-style_551425-43.jpg',
            testimonial: "EventPlanner360 has been invaluable in planning our annual gala fundraiser. It's so easy to manage invitations, track RSVPs, coordinate with vendors and accept donations.",
        },
        {
            name: 'Kevin Roberts',
            role: 'Conference Director',
            image: 'https://img.freepik.com/premium-vector/avatar-portrait-kid-caucasian-boy-round-frame-vector-illustration-cartoon-flat-style_551425-43.jpg',
            testimonial: "With EventPlanner360, my team was able to seamlessly plan every aspect of our 500+ person tech conference. I don't know how we managed huge events before this platform.",
        },
        {
            name: 'Dana Howard',
            role: 'Wedding Planner',
            image: 'https://img.freepik.com/premium-vector/avatar-portrait-kid-caucasian-boy-round-frame-vector-illustration-cartoon-flat-style_551425-43.jpg',
            testimonial: "My brides absolutely love that I use EventPlanner360 to visualize and organize every wedding detail for them into one easy dashboard - it keeps everyone on track and reduces day-of stress.",
        },
        {
            name: 'Michael Evans',
            role: 'Festival Director',
            image: 'https://img.freepik.com/premium-vector/avatar-portrait-kid-caucasian-boy-round-frame-vector-illustration-cartoon-flat-style_551425-43.jpg',
            testimonial: "It was a breeze to arrange all our music festival logistics like stages, vendors, volunteers, ticketing and schedules in one place with EventPlanner360.",
        },
        {
            name: 'Olivia Thompson',
            role: 'Nonprofit Event Lead',
            image: 'https://img.freepik.com/premium-vector/avatar-portrait-kid-caucasian-boy-round-frame-vector-illustration-cartoon-flat-style_551425-43.jpg',
            testimonial: "We switched to EventPlanner360 and immediately saved 20+ hours typically spent on spreadsheets. Now we efficiently execute large fundraising events that require detailed donor tracking.",
        },
    ];
    return (
        <div className="">
            <header className="">
                <nav class="absolute w-full z-20 top-0 start-0">
                    <div class="max-w-screen-xl flex  items-center justify-end mx-auto p-4">
                        <div class="md:dark:bg-gray-900 dark:border-gray-700  h-12 px-5 rounded-lg items-center justify-between hidden md:flex md:w-auto md:order-1" id="navbar-sticky">
                            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Product</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">News</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('./image.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-center text-white p-8">
                    <h1 className="text-5xl font-bold mb-4">LET ME CONNECT YOU TO DAILY LIFE</h1>
                    <p className="text-lg mb-8">Willson specializes in Outsourced Accounting, Business Management, and Tax Services. Our expert accountants handle all your financial matters responsibly.</p>
                    <div className="flex justify-center space-x-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">FIND A PROGRAM</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">REQUEST INFO</button>
                    </div>
                    <button className="mt-4 bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">CONTACT US</button>
                </div>
            </div>
            <div className="flex justify-center items-center bg-gray-100 md:h-screen">
                <div className="md:w-[80%]"> <div className="flex flex-col justify-center items-center md:flex-row gap-4 p-4">
                    {/* <div className="rounded-lg overflow-hidden md:m-5 h-auto"> */}
                    <img src='./photo.webp' alt="Event setup" className="object-cover rounded-lg md:w-1/4" />
                    {/* </div> */}
                    <div className="flex flex-col justify-center items-center bg-purple-500 text-white rounded-lg p-8 md:w-2/5">
                        <div className=''>
                            <h2 className="text-2xl font-semibold mb-4 ">Comprehensive features for</h2>
                            <h1 className="text-3xl font-bold mb-4 ">All-in-one event management platform</h1>
                            <p className="mb-8">
                                EventPlanner360 is designed to streamline event planning from start to finish with tools to simplify event creation,
                                guest management, scheduling, invitations, payments and more.
                            </p></div>
                        <button className="bg-white text-purple-500 font-bold py-2 px-4 rounded-full">Try for free</button>
                    </div>
                    {/* <div className="rounded-lg overflow-hidden md:m-5"> */}
                    <img src='./photo-1.webp' alt="Event planning" className="object-cover rounded-lg  md:w-1/4" />
                    {/* </div> */}
                </div></div>
            </div>
            <div className="min-h-screen flex items-center justify-center bg-purple-500 p-6">
                <div className="max-w-6xl w-full bg-purple-500 p-8">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex flex-col items-center  h-72 md:h-auto md:w-1/2">
                            <div className="text-white mb-4">
                                <h1 className="text-5xl font-bold">Event management services</h1>
                            </div>
                            <div className='text-white mb-8'>
                                <p className="mt-4">EventPlanner360 offers comprehensive event planning and coordination for corporate conferences, product launches, weddings, and more.</p>
                            </div>
                            <div className="bg-gray-800 rounded-lg flex justify-center items-center h-72 md:h-[580px] md:w-full">
                                <img className='object-cover h-full rounded-lg' src='./image1.jpg'></img>
                                {/* <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4zm0 1h12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm4.293 3.293-1.086 1.086a1 1 0 0 0 0 1.414l4.5 4.5a1 1 0 0 0 1.414 0l4.5-4.5a1 1 0 0 0 0-1.414l-1.086-1.086a1 1 0 0 0-1.414 0L11 10.586 9.707 9.293a1 1 0 0 0-1.414 0zm2.414 2.414 1.086-1.086a1 1 0 0 1 1.414 0L16.5 9.707a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414 0l-4.5-4.5a1 1 0 0 1 0-1.414l1.086-1.086a1 1 0 0 1 1.414 0l1.793 1.793a1 1 0 0 0 1.414 0z" /></svg>
                                    <p>Image placeholder</p> */}
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 md:w-1/2">
                            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                                <h1 className="text-4xl font-bold font-semibold text-gray-900 mb-2">Strategy</h1>
                                <h2 className="text-5xl font-bold text-purple-600 mb-2">Planning</h2>
                                <p className="text-gray-700">Our team develops event strategies aligned with client goals, objectives, and branding.</p>
                            </div>
                            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                                <h1 className="text-4xl font-bold font-semibold text-gray-900 mb-2">Creative</h1>
                                <h2 className="text-5xl font-bold text-purple-600 mb-2">Design</h2>
                                <p className="text-gray-700">We conceptualize and design memorable event environments, decors, graphics, and multimedia.</p>
                            </div>
                            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                                <h1 className="text-4xl font-bold font-semibold text-gray-900 mb-2">Flawless</h1>
                                <h2 className="text-5xl font-bold text-purple-600 mb-2">Execution</h2>
                                <p className="text-gray-700">Our experts seamlessly execute all event elements - from vendor coordination to on-site management.</p>
                            </div>
                            <div className="text-center mt-8">
                                <button className="bg-white text-purple-600 font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-purple-600 hover:text-white transition">Learn more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 py-16">
                <div className="container mx-auto px-4">
                    <div className="mb-8">
                        <h1 class="text-4xl font-bold text-center text-purple-700 mb-8">Event Planners Love Our All-In-One Platform</h1>
                        <p className="text-lg text-center">We make event planning easy with our user-friendly tools to manage guests, venues, catering, and more in one place.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center mb-4">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
                                    <div>
                                        <h3 className="text-xl font-bold">{testimonial.name}</h3>
                                        <p className="text-gray-600">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p>{testimonial.testimonial}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-8">Feel Free To Contact</h1>
                <p className="mb-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full md:max-w-4xl">
                    <div className="bg-purple-500 text-white p-8 flex flex-col items-start md:w-1/2">
                        <h2 className="text-2xl font-bold mb-4">Let's Talk</h2>
                        <p className="mb-8">It is a long established fact that a reader will be distracted by the readable content of a page when looking.</p>
                        <div className="mb-4">
                            <p className="font-bold">Phone</p>
                            <p>(239) 555-0108</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-bold">E-mail</p>
                            <p>tim.jennings@example.com</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-bold">Location</p>
                            <p>6391 Elgin St. Celina, Delaware 10299</p>
                        </div>
                    </div>
                    <div className="p-8 bg-gray-100 flex flex-col justify-center md:w-1/2">

                        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="subject"
                                    className="block text-gray-700 text-sm font-medium mb-2"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="message"
                                    className="block text-gray-700 text-sm font-medium mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Send a Message
                            </button>
                        </form>
                    </div>
                </div>

            </div>
            <footer className="mt-8 w-full md:max-w-6xl text-center flex flex-col items-center md:mx-auto md:w-3/4 bg-white">
                <div className='flex flex-row justify-center p-4 border-b-2'>
                    <div className='flex flex-row md:w-1/2'><nav>
                        <ul class="flex space-x-6">
                            <li><a href="#" class="hover:text-gray-700">Events</a></li>
                            <li><a href="#" class="hover:text-gray-700">Venues</a></li>
                            <li><a href="#" class="hover:text-gray-700">Vendors</a></li>
                            <li><a href="#" class="hover:text-gray-700">Planners</a></li>
                        </ul>
                    </nav></div>
                    <div className="flex flex-col p-4 md:w-1/2">
                        <div className='border-b-2 pb-5 text-2xl'>
                            <h3 className="font-bold">EventPlanner360</h3>
                            <p>Simplifies event planning with tools to manage guest lists, venues, vendors, budgets, and more in one place.</p>
                        </div>
                        <div className='flex flex-row justify-between mt-5 '>
                            <div className="text-left text-xl">
                                <h4 className="font-bold">Contact Us</h4>
                                <p>123 Main Street, Anytown CA 12345 USA</p>
                            </div>
                            <div className="text-left text-xl">
                                <h4 className="font-bold">Follow Us</h4>
                                <p>Facebook</p>
                                <p>Instagram</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex items-center justify-between my-5 text-md'>
                    <div className='md:w-1/2'>
                        <nav>
                            <ul class="flex space-x-6">
                                <li><a href="#" class="hover:text-gray-700">About</a></li>
                                <li><a href="#" class="hover:text-gray-700">Job</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="md:w-1/2">Copyright 2024 EventPlanner360</div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
