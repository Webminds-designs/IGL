const countries = {
    usa: {
        name: "United States",
        heroImage: "/assets/GoldenGate.png",
        heroText: "Study in USA – Your Pathway to Global Education Starts Here",
        featuredUniversities: [
            { image: "/assets/MiamiUni.png", name: "Miami Regional University" },
            { image: "/assets/DavisUni.png", name: "Davis University" },
            { image: "/assets/EduGCol.png", name: "EduGlobal College" },
        ],
        whyStudyHere: `The USA is a land of diversity, opportunity, and world-renowned education. It offers an enriching environment for international students.
With its world-class universities, the USA fosters creativity, critical thinking, and innovation, preparing students for global career success.
At IGL, we support your journey to success in the USA. Embrace the experience and explore new possibilities!`,
        popularUniversities: [
            { image: "/assets/WoxenUni.png", name: "Woxsen University" },
            { image: "/assets/NEOMA.png", name: "NEOMA Business School" },
            { image: "/assets/AmsterCam.png", name: "Amsterdam Campus" },
        ],
    },

    canada: {
        name: "Canada",
        heroImage: "/assets/CanadaBanner.png",
        heroText: "Study in Canada – A Land of Opportunities and Excellence",

        featuredUniversities: [
            { image: "/assets/TorontoUni.png", name: "University of Toronto" },
            { image: "/assets/McGillUni.png", name: "McGill University" },
            { image: "/assets/UBC.png", name: "University of British Columbia" },
        ],

        whyStudyHere: `Canada offers a unique blend of natural beauty, multicultural cities, and a high quality of life. With a welcoming and inclusive society, international students can enjoy a balanced lifestyle while exploring diverse cultural experiences.

Renowned for its world-class education system, Canada fosters innovation, hands-on learning, and academic excellence. Its universities and colleges provide a wide range of programs, strong research opportunities, and a focus on student well-being, ensuring graduates are well-prepared for their careers.

At IGL, we support your journey to success in Canada. Embrace this opportunity, and make the most of your academic experience. Best wishes for your future!`,

        popularUniversities: [
            { image: "/assets/Waterloo.png", name: "University of Waterloo" },
            { image: "/assets/Alberta.png", name: "University of Alberta" },
            { image: "/assets/Western.png", name: "Western University" },
        ],
    },

    germany: {
        name: "Germany",
        heroImage: "/assets/GermanyBanner.png",
        heroText: "Study in Germany – Innovate, Research, and Excel",

        featuredUniversities: [
            { image: "/assets/Heidelberg.png", name: "Heidelberg University" },
            { image: "/assets/LMU.png", name: "Ludwig Maximilian University" },
            { image: "/assets/TechnicalMunich.png", name: "Technical University of Munich" },
        ],

        whyStudyHere: `Germany seamlessly blends rich history with modern innovation, offering picturesque landscapes, iconic castles, and dynamic cities like Berlin and Munich. With its efficient infrastructure, diverse culture, and renowned festivals, international students can immerse themselves in a truly enriching experience.

As a global leader in education, Germany is home to prestigious institutions specializing in engineering, technology, and sciences. Its strong emphasis on research, industry collaboration, and affordability—often with low or no tuition fees—makes it an ideal study destination. Many programs are available in English, ensuring accessibility for international students.

At IGL, we support your journey to academic and personal success in Germany. Embrace this opportunity, and make the most of what this remarkable country has to offer. Best wishes for your future!`,

        popularUniversities: [
            { image: "/assets/Freiburg.png", name: "University of Freiburg" },
            { image: "/assets/Stuttgart.png", name: "University of Stuttgart" },
            { image: "/assets/Hamburg.png", name: "University of Hamburg" },
        ],
    },

    france: {
        name: "France",
        heroImage: "/assets/FranceBanner.png",
        heroText: "Study in France – A Gateway to Excellence",

        featuredUniversities: [
            { image: "/assets/Sorbonne.png", name: "Sorbonne University" },
            { image: "/assets/SciencesPo.png", name: "Sciences Po Paris" },
            { image: "/assets/INSEAD.png", name: "INSEAD Business School" },
        ],

        whyStudyHere: `France is a country of timeless charm, rich culture, and global influence in art, fashion, and cuisine. From the iconic Eiffel Tower to the vineyards of Bordeaux and the French Riviera’s stunning coastlines, it offers a unique and inspiring experience for international students.

Renowned for academic excellence, France’s prestigious institutions uphold rigorous standards while emphasizing practical learning. With diverse programs in business, arts, sciences, and engineering—many offered in English—students gain access to world-class education. A strong focus on research and innovation further enhances learning opportunities.

At IGL, we are proud to support your journey in France. Embrace this opportunity, immerse yourself in its culture, and make the most of your academic experience. Best wishes for your success!`,

        popularUniversities: [
            { image: "/assets/ESSEC.png", name: "ESSEC Business School" },
            { image: "/assets/HEC.png", name: "HEC Paris" },
            { image: "/assets/Polytechnique.png", name: "École Polytechnique" },
        ],
    },

    switzerland: {
        name: "Switzerland",
        heroImage: "/assets/SwitzerlandBanner.png",
        heroText: "Study in Switzerland – Excellence in Education and Innovation",
        featuredUniversities: [
            { image: "/assets/ETHZurich.png", name: "ETH Zurich" },
            { image: "/assets/UniversityGeneva.png", name: "University of Geneva" },
            { image: "/assets/EPFL.png", name: "École Polytechnique Fédérale de Lausanne (EPFL)" },
        ],
        whyStudyHere: `Switzerland is renowned for its breathtaking landscapes, high quality of life, and vibrant cities like Zurich and Geneva. With a strong tradition of hospitality, innovation, and cultural diversity, it offers international students a peaceful and inspiring environment to thrive.

Home to some of the world’s top universities, Switzerland excels in hospitality, business, engineering, and science. Its education system emphasizes practical learning, cutting-edge research, and industry connections, providing students with valuable hands-on experience and career opportunities. A multicultural setting further enriches the learning experience.

At IGL, we support your journey in Switzerland. Embrace the opportunity, explore its excellence, and make the most of your academic adventure. Best wishes for your success!`,
        popularUniversities: [
            { image: "/assets/UniversityZurich.png", name: "University of Zurich" },
            { image: "/assets/Lucerne.png", name: "Lucerne University of Applied Sciences" },
            { image: "/assets/StGallen.png", name: "University of St. Gallen" },
        ],
    },

    singapore: {
        name: "Singapore",
        heroImage: "/assets/SingaporeBanner.png",
        heroText: "Study in Singapore – A Global Hub for Education and Innovation",
        featuredUniversities: [
            { image: "/assets/NUS.png", name: "National University of Singapore (NUS)" },
            { image: "/assets/NTU.png", name: "Nanyang Technological University (NTU)" },
            { image: "/assets/SIM.png", name: "Singapore Institute of Management (SIM)" },
        ],
        whyStudyHere: `Singapore is a vibrant city-state that seamlessly blends cultural heritage with modern innovation. Known for its iconic skyline, lush greenery, and diverse communities, it offers a safe and welcoming environment for international students. With a dynamic food scene, cultural festivals, and world-class infrastructure, Singapore provides an enriching and inspiring experience.

As a global education hub, Singapore is home to top-ranked universities recognized for excellence in teaching, research, and innovation. Offering diverse programs in engineering, business, IT, and sciences, its education system fosters critical thinking, creativity, and real-world application. Positioned as a business and technology hub, Singapore provides outstanding career and networking opportunities.

At IGL, we support your academic journey in Singapore. Embrace this opportunity, explore new horizons, and let Singapore shape your future. Best wishes for your success!`,
        popularUniversities: [
            { image: "/assets/SUTD.png", name: "Singapore University of Technology and Design (SUTD)" },
            { image: "/assets/JamesCook.png", name: "James Cook University Singapore" },
            { image: "/assets/SMU.png", name: "Singapore Management University (SMU)" },
        ],
    },

    malaysia: {
        name: "Malaysia",
        heroImage: "/assets/MalaysiaBanner.png",
        heroText: "Study in Malaysia – Affordable and Quality Education",
        featuredUniversities: [
            { image: "/assets/UM.png", name: "University of Malaya" },
            { image: "/assets/UKM.png", name: "Universiti Kebangsaan Malaysia" },
            { image: "/assets/UPM.png", name: "Universiti Putra Malaysia" },
        ],
        whyStudyHere: `Malaysia is known for affordable tuition fees, diverse cultural experiences, 
        and high-quality education. With globally recognized universities and a lower cost of 
        living, it is a great choice for international students.`,
        popularUniversities: [
            { image: "/assets/Taylor.png", name: "Taylor's University" },
            { image: "/assets/Monash.png", name: "Monash University Malaysia" },
            { image: "/assets/Sunway.png", name: "Sunway University" },
        ],
    },

    netherlands: {
        name: "Netherlands",
        heroImage: "/assets/NetherlandsBanner.png",
        heroText: "Study in Netherlands – A Global Hub for Higher Education",
        featuredUniversities: [
            { image: "/assets/UvA.png", name: "University of Amsterdam" },
            { image: "/assets/TUe.png", name: "Eindhoven University of Technology" },
            { image: "/assets/Leiden.png", name: "Leiden University" },
        ],
        whyStudyHere: `Malaysia offers a perfect blend of natural beauty and vibrant city life, from the rainforests of Borneo to the dynamic streets of Kuala Lumpur. With a rich multicultural heritage, students can experience diverse traditions, festivals, and cuisine in a welcoming and affordable environment.

As an emerging hub for quality education, Malaysia provides a wide range of academic programs in engineering, business, arts, and hospitality. With globally recognized universities, including international branch campuses, students receive world-class education at a competitive cost. English is widely spoken, ensuring accessibility for international learners.

At IGL, we support your academic journey in Malaysia. Embrace the culture, seize new opportunities, and let Malaysia be the foundation for your success. Best wishes for your future!`,
        popularUniversities: [
            { image: "/assets/Delft.png", name: "Delft University of Technology" },
            { image: "/assets/Utrecht.png", name: "Utrecht University" },
            { image: "/assets/Groningen.png", name: "University of Groningen" },
        ],
    },

    poland: {
        name: "Poland",
        heroImage: "/assets/PolandBanner.png",
        heroText: "Study in Poland – Affordable and High-Quality Education",
        featuredUniversities: [
            { image: "/assets/Warsaw.png", name: "University of Warsaw" },
            { image: "/assets/Jagiellonian.png", name: "Jagiellonian University" },
            { image: "/assets/WUT.png", name: "Warsaw University of Technology" },
        ],
        whyStudyHere: `Poland offers top universities, affordable tuition fees, and a rich 
        cultural experience. With a growing economy and high-quality education, it attracts 
        students from all over the world.`,
        popularUniversities: [
            { image: "/assets/Poznan.png", name: "Poznań University of Technology" },
            { image: "/assets/Lodz.png", name: "Lodz University of Technology" },
            { image: "/assets/AGH.png", name: "AGH University of Science and Technology" },
        ],
    },

    uae: {
        name: "United Arab Emirates",
        heroImage: "/assets/UAEBanner.png",
        heroText: "Study in UAE – A Hub for Business and Innovation",
        featuredUniversities: [
            { image: "/assets/UAEU.png", name: "United Arab Emirates University" },
            { image: "/assets/Khalifa.png", name: "Khalifa University" },
            { image: "/assets/AUD.png", name: "American University in Dubai" },
        ],
        whyStudyHere: `The UAE offers world-class education, strategic location, and a vibrant 
        business environment. It provides modern infrastructure, innovation-focused programs, 
        and global career opportunities.`,
        popularUniversities: [
            { image: "/assets/AbuDhabi.png", name: "Abu Dhabi University" },
            { image: "/assets/Zayed.png", name: "Zayed University" },
            { image: "/assets/SorbonneAbuDhabi.png", name: "Sorbonne University Abu Dhabi" },
        ],
    },

    india: {
        name: "India",
        heroImage: "/assets/IndiaBanner.png",
        heroText: "Study in India – Excellence in Education and Innovation",
        featuredUniversities: [
            { image: "/assets/IITDelhi.png", name: "IIT Delhi" },
            { image: "/assets/IIMB.png", name: "IIM Bangalore" },
            { image: "/assets/JNU.png", name: "Jawaharlal Nehru University" },
        ],
        whyStudyHere: `India is home to prestigious universities, affordable education, and a 
        dynamic job market. With strong research programs and innovation-driven learning, it 
        is an attractive destination for students worldwide.`,
        popularUniversities: [
            { image: "/assets/IITBombay.png", name: "IIT Bombay" },
            { image: "/assets/AIIMS.png", name: "AIIMS" },
            { image: "/assets/NIT.png", name: "NIT Trichy" },
        ],
    },

    belgium: {
        name: "Belgium",
        heroImage: "/assets/BelgiumBanner.png",
        heroText: "Study in Belgium – A European Hub for Quality Education",
        featuredUniversities: [
            { image: "/assets/KULeuven.png", name: "KU Leuven" },
            { image: "/assets/UGent.png", name: "Ghent University" },
            { image: "/assets/UCLouvain.png", name: "Université catholique de Louvain (UCLouvain)" },
        ],
        whyStudyHere: `Belgium is home to some of the world's oldest and most respected universities, 
            offering high-quality education, multicultural experiences, and excellent research opportunities. 
            Its central location in Europe provides students with access to international career opportunities 
            and a vibrant student life.`,
        popularUniversities: [
            { image: "/assets/VUB.png", name: "Vrije Universiteit Brussel (VUB)" },
            { image: "/assets/UAntwerp.png", name: "University of Antwerp" },
            { image: "/assets/ULB.png", name: "Université Libre de Bruxelles (ULB)" },
        ],
    },


};

export default countries;
