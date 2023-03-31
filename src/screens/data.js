
const popularSchemes = [
  {
    id: 1,
    title: "Scheme Title 1",
    count: "1000+ schemes",
    icon: "bank",
    domain: "Banking",
  },
  {
    id: 2,
    title: "Scheme Title 2",
    count: "500+ schemes",
    icon: "book",
    domain: "Education"
  },
  {
    id: 3,
    title: "Scheme Title 3",
    count: "800+ schemes",
    icon: "briefcase",
    domain: "Business"
  },
];

const allSchemes = [
  {
    domain: "Agricultural",
    id: 1,
    uri: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    count: "400+ schemes",
    icon: "leaf",
    schemes: [
      {
        id: 1,
        title: "Scheme Title 1",
        description: "Agriculture is the backbone of the Indian economy. The sector contributes 17% to the GDP and employs 50% of the country’s workforce. The Government of India has been taking various initiatives to boost the agricultural sector. The schemes are aimed at increasing the income of farmers, improving the quality of life of farmers, and increasing the production of crops. ",
        icon: "leaf",
        uri: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
        category: {
          gender: "Male",
          age: "20",
          income: "0-100000",
          location: "Karnataka",
          caste: "General",
          religion: "Hindu",
          disability: "No",
          employment: "Unemployed",
        }
      },
      {
        id: 2,
        title: "Scheme Title 2",
        description: "Scheme description",
        icon: "leaf",
        uri: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
        category: {
          gender: "Male",
          age: "20",
          income: "0-100000",
          location: "Karnataka",
          caste: "General",
          religion: "Hindu",
          disability: "No",
          employment: "Unemployed",
        }
      },
      {
        id: 3,
        title: "Scheme Title 3",
        description: "Scheme description",
        icon: "leaf",
        uri: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
        category: {
          gender: "Male",
          age: "20",
          income: "0-100000",
          location: "Maharashtra"
        }
      },
    ]
  },
  {
    domain: "Banking",
    id: 2,
    count: "100+ schemes",
    icon: "bank",
    uri: 'https://images.unsplash.com/photo-1616803140344-6682afb13cda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    schemes: [
      {
        id: 26,
        title: "Scheme Title 4",
        description: "Scheme description",
        icon: "bank",
        category: {
          gender: "Male",
          age: "20",
          income: "0-100000",
          location: "Maharashtra"
        }
      },
      {
        id: 27,
        title: "Scheme Title 5",
        description: "Scheme description",
        icon: "bank",
        category: {
          gender: "Male",
          age: "20",
          income: "0-100000",
          location: "Maharashtra"
        }
      },
      {
        id: 280,
        title: "Scheme Title 6",
        description: "Scheme description",
        icon: "bank",
        category: {
          gender: "Male",
          age: "20",
          income: "0-100000",
          location: "Maharashtra"
        }
      },
    ]
  },
  {
    domain: "Business",
    id: 3,
    count: "100+ schemes",
    icon: "briefcase",
    uri: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    // image required
    schemes: [
      {
        id: 4,
        title: "Scheme Title 7",
        description: "Scheme description",
        icon: "briefcase",
        category: {
          gender: "Male",
          age: "20",
          income: "0-100000",
          location: "Maharashtra"
        }
      },
      {
        id: 5,
        title: "Scheme Title 8",
        description: "Scheme description",
        icon: "briefcase",
        category: {
          gender: "Male",
          age: "20",
          income: "0-100000",
          location: "Maharashtra"
        }
      },
      {
        id: 6,
        title: "Scheme Title 9",
        description: "Scheme description",
        icon: "briefcase",
        category: {
          gender: "Male",
          age: "20",
          income: "0-100000",
          location: "Maharashtra"
        }
      },
    ]
  },
  {
    domain: "Education",
    id: 4,
    count: "400+ schemes",
    icon: "school",
    uri: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    schemes:[
        {
          id: 7,
          title: "Pradhan Mantri Kaushal Vikas Yojana 4.0",
          description: "The Pradhan Mantri Kaushal Vikas Yojana 4.0 will be launched to skill lakhs of youth within the next three years. The scheme will emphasize on On-job training, industry partnership, and alignment of courses with needs of industry. The scheme will also cover new age courses for Industry 4.0 like coding, AI, robotics, mechatronics, IOT, 3D printing, drones, and soft skills.It is also proposed to set up 30 Skill India International Centres across different States to skill the youth for international opportunities.",
          icon: "school",
          uri: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          category: {
            gender: "All",
            age: "20",
            income: "0-100000",
            location: "Karnataka",
            caste: "General",
            religion: "All",
            disability: "No",
            employment: "Unemployed",
          }
        },
        {
          id: 8,
          title: "National Digital Library for Children and Adolescents",
          description: "A National Digital Library for Children and Adolescents to be set-up for facilitating availability of quality books across geographies, languages, genres and levels, and device agnostic accessibility.To build a culture of reading and to make up for pandemic - time learning loss, the National Book Trust, Children’s Book Trust and other sources will be encouraged to provide and replenish non curricular titles in regional languages and English to these physical libraries.Collaboration with NGOs that work in literacy will also be a part of this initiative.To inculcate financial literacy, the financial sector regulators and organizations will be encouraged to provide age- appropriate reading material to these libraries.",
          icon: "school",
          category: {
            gender: "All",
            age: "20",
            income: "0-100000",
            location: "Karnataka",
            caste: "General",
            religion: "All",
            disability: "No",
            employment: "Unemployed",
          }
        },
        {
          id: 9,
          title: "National Apprenticeship Promotion Scheme",
          description: "The Direct Benefit Transfer under a pan-India National Apprenticeship Promotion Scheme to provide stipend support to 47 lakh youth in three years to be rolled out.",
          icon: "school",
          category: {
            gender: "All",
            age: "20",
            income: "0-100000",
            location: "Maharashtra"
          }
        },
        {
          id: 10,
          title: "Mahatma Gandhi National Fellowship",
          description: "Mahatma Gandhi National Fellowship (MGNF) is a Certificate Program in Public Policy and Management offered by Indian Institutes of Management (IIMs). It has been designed at the initiative of the Ministry of Skill Development and Entrepreneurship (MSDE), Government of India (GoI) and implemented in collaboration with State Skill Development Missions (SSDMs)",
          icon: "school",
          category: {
            gender: "All",
            age: "21-30",
            income: "",
            location: "All",
            caste: "General",
            religion: "All",
            disability: "No",
            employment: "Unemployed",
          }
        },
        {
          id: 11,
          title: "Short Term Studentship",
          description: "Short Term Studentship (STS) program is intended to encourage and support interested MBBS/BDS students in research. It is an initiative of Indian Council of Medical Research (ICMR). The program was initiated in 1979.",
          icon: "school",
          category: {
            gender: "All",
            age: "21-30",
            income: "0-100000",
            location: "All",
            caste: "General",
            religion: "All",
            disability: "No",
            employment: "Unemployed",
          }
        },
        {
          id: 12,
          title: "PM's Scheme for Mentoring Young Authors",
          description: "The Ministry of Education, Department of Higher Education has launched YUVA 2.0 - Prime Minister's Scheme for Mentoring Young Authors, an Author Mentorship programme to train young and budding authors (below 30 years of age) in order to promote reading, writing and book culture in the country, and project India and Indian writings globally. In view of the significant impact of the first edition of YUVA with large-scale participation from young and budding authors in 22 different Indian languages and English.The launch of YUVA 2.0(Young, Upcoming and Versatile Authors) is a part of India @75 Project(Azadi Ka Amrit Mahotsav) to bring to the fore the perspectives of the young generation of writers on the THEME: ‘Democracy(institutions, events, people, constitutional values – past, present, future)’ in an innovative and creative manner.This scheme will thus help to develop a stream of writers who can write on a spectrum of subjects to promote Indian heritage, culture and knowledge system.The National Book Trust, India, under the Ministry of Education is the Implementing Agency.",
          icon: "school",
          category: {
            gender: "All",
            age: "16-30",
            income: "0-100000",
            location: "All",
            caste: "General",
            religion: "All",
            disability: "No",
            employment: "Unemployed",
          }
        },
        {
          id: 13,
          title: "State University Research Excellence",
          description: "State University Research Excellence (SERB-SURE) is a new scheme of the Science and Engineering Research Board (SERB) to augment the research capabilities in a structured way to create a robust R&D ecosystem in state universities and colleges by fostering collaboration for high-end research.",
          icon: "school",
          category: {
            gender: "All",
            age: "16-30",
            income: "0-100000",
            location: "All",
            caste: "General",
            religion: "All",
            disability: "No",
            employment: "Unemployed",
          }
        },
        {
          id: 14,
          title: "Aakanksha programme",
          description: " School Education and Literacy Department, Govt. of Jharkhand initiated this ambitious programme for children studying in Govt. Schools of Jharkhand",
          icon: "school",
          category: {
            gender: "All",
            age: "16-30",
            income: "0-100000",
            location: "Jharkhand",
            caste: "General",
            religion: "All",
            disability: "No",
            employment: "Unemployed",
          }
        },
        {
          id: 15,
          title: "National Fellowship for Students with Disabilities",
          description: "The scheme caters to a total number of 200 slots per year to students with disabilities. The scheme covers all universities/institutions recognized by the University Grants Commission (UGC) and Non-Universities/Institutions and is implemented by the UGC itself on the pattern of the scheme of UGC Fellowship being awarded to research students pursuing M.Phil. and Ph.D. These fellowships will be available to students with disabilities who are covered under The Persons with Disabilities (Equal Opportunities, Protection of Rights and Full Participation) Act, 1995.",
          icon: "school",
          category: {
            gender: "All",
            age: "16-30",
            income: "0-100000",
            location: "All",
            caste: "General",
            religion: "All",
            disability: "Yes",
            employment: "Unemployed",
          }
        },
        {
          id: 16,
          title: "DRDO Scholarship Scheme for Girls",
          description: "Defence Research Development Organisation (DRDO) has launched “DRDO Scholarship Scheme for Girls“ through Aeronautics Research and Development Board (AR&DB), DRDO HQ. This scholarship scheme would attract such women power from various institutes through a transparent process with an objective to tap the talent of bright students across the country.",
          icon: "school",
          category: {
            gender: "Female",
            age: "16-30",
            income: "0-100000",
            location: "All",
            caste: "General",
            religion: "All",
            disability: "Yes",
            employment: "Unemployed",
          }
        },

      ],
    },

        {
          domain: "Health",
          id: 5,
          count: "100+ schemes",
          icon: "heart",
          uri: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          //image required
          schemes: [
            {
              id: 17,
              title: "Scheme Title 13",
              description: "Scheme description",
              icon: "heart",
              category: {
                gender: "Male",
                age: "20",
                income: "0-100000",
                location: "Maharashtra"
              }
            },
            {
              id: 18,
              title: "Scheme Title 14",
              description: "Scheme description",
              icon: "heart",
              category: {
                gender: "Male",
                age: "20",
                income: "0-100000",
                location: "Maharashtra"
              }
            },
            {
              id: 19,
              title: "Scheme Title 15",
              description: "Scheme description",
              icon: "heart",
              category: {
                gender: "Male",
                age: "20",
                income: "0-100000",
                location: "Maharashtra"
              }
            },
          ]
        },
        {
          domain: "Housing",
          id: 6,
          count: "100+ schemes",
          icon: "home",
          uri: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          //image required
          schemes: [
            {
              id: 20,
              title: "Scheme Title 16",
              description: "Scheme description",
              icon: "home",
              category: {
                gender: "Male",
                age: "20",
                income: "0-100000",
                location: "Maharashtra"
              }
            },
            {
              id: 21,
              title: "Scheme Title 17",
              description: "Scheme description",
              icon: "home",
              category: {
                gender: "Male",
                age: "20",
                income: "0-100000",
                location: "Maharashtra"
              }
            },
            {
              id: 22,
              title: "Scheme Title 18",
              description: "Scheme description",
              icon: "home",
              category: {
                gender: "Male",
                age: "20",
                income: "0-100000",
                location: "Maharashtra"
              }
            },
          ]
        },
        {
          domain: "Infrastructure",
          id: 7,
          count: "100+ schemes",
          icon: "road",
          uri: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          //image required
          schemes: [
            {
              id: 23,
              title: "Scheme Title 19",
              description: "Scheme description",
              icon: "road",
              category: {
                gender: "Male",
                age: "20",
                income: "0-100000",
                location: "Maharashtra"
              }
            },
            {
              id: 24,
              title: "Scheme Title 20",
              description: "Scheme description",
              icon: "road",
              category: {
                gender: "Male",
                age: "20",
                income: "0-100000",
                location: "Maharashtra"
              }
            },
            {
              id: 25,
              title: "Scheme Title 21",
              description: "Scheme description",
              icon: "road",
              category: {
                gender: "Male",
                age: "20",
                income: "0-100000",
                location: "Maharashtra"
              }
            },
          ]
        },

        // more domains and schemes...
      ];

    const tweets = [
      {
        domain: "Agriculture",
        id: 1,
        tweetdata: [
          {
            id: 1,
            title: "The government has announced a new health insurance scheme for low-income families",
            author: "healthministrynews",
          },
          {
            id: 2,
            title: "The new solar energy policy will provide subsidies to households that switch to renewable energy sources",
            author: "energyandpower",
          },
          {
            id: 3,
            title: "The government is planning to launch a new initiative to promote digital literacy in rural areas",
            author: "sarahjones",
          },
          {
            id: 4,
            title: "Government announces new tax rebate for startups",
            author: "startupnews",
          },

          // more tweets...
        ],
      },
      {
        domain: "Health",
        id: 2,
        tweetdata: [
          {
            id: 5,
            title: "The government has announced a new health insurance scheme for low-income families",
            author: "healthministrynews",
          },
          {
            id: 6,
            title: "The new solar energy policy will provide subsidies to households that switch to renewable energy sources",
            author: "energyandpower",
          },
          {
            id: 7,
            title: "The government is planning to launch a new initiative to promote digital literacy in rural areas",
            author: "sarahjones",
          },
          // more tweets...
        ],
      },

      // more domains and tweets...
    ];

    export { popularSchemes, allSchemes, tweets };

