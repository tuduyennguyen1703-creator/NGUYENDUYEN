const vocabData = [
    {
        "num": 1,
        "en": "Major in [Subject]",
        "vi": "Chuyên ngành về...",
        "ipa": "/ˈmeɪ.dʒər ɪn/",
        "pos": "(v. phrase)",
        "ex": "She decided to major in Economics because she wants to be an investment banker."
    },
    {
        "num": 2,
        "en": "Prestigious university",
        "vi": "Trường đại học danh tiếng",
        "ipa": "/presˈtɪdʒ.əs ˌjuː.nɪˈvɜː.sə.ti/",
        "pos": "(n. phrase)",
        "ex": "Graduating from a prestigious university can open many doors for your future career."
    },
    {
        "num": 3,
        "en": "Pursue a career in",
        "vi": "Theo đuổi sự nghiệp trong lĩnh vực...",
        "ipa": "/pəˈsjuː ə kəˈrɪər ɪn/",
        "pos": "(v. phrase)",
        "ex": "He moved to Los Angeles to pursue a career in software engineering."
    },
    {
        "num": 4,
        "en": "Land a job",
        "vi": "Kiếm được công việc",
        "ipa": "/lænd ə dʒɒb/",
        "pos": "(v. phrase)",
        "ex": "After months of sending out resumes, she finally landed a job at a top tech firm."
    },
    {
        "num": 5,
        "en": "9-to-5 job",
        "vi": "Công việc hành chính",
        "ipa": "/ˌnaɪn.təˈfaɪv dʒɒb/",
        "pos": "(n. phrase)",
        "ex": "I couldn't stand the boring routine of a traditional 9-to-5 job, so I started my own business."
    },
    {
        "num": 6,
        "en": "Full-time / Part-time",
        "vi": "Toàn thời gian / Bán thời gian",
        "ipa": "/ˌfʊlˈtaɪm/ - /ˌpɑːtˈtaɪm/",
        "pos": "(adj/adv)",
        "ex": "I would prefer to work part-time so I can focus on my studies."
    },
    {
        "num": 7,
        "en": "Work environment",
        "vi": "Môi trường làm việc",
        "ipa": "/ˈwɜːk ɪnˌvaɪ.rən.mənt/",
        "pos": "(n. phrase)",
        "ex": "A friendly work environment helps me feel less stressed."
    },
    {
        "num": 8,
        "en": "Colleague / Coworker",
        "vi": "Đồng nghiệp",
        "ipa": "/ˈkɒl.iːɡ/ - /ˌkəʊˈwɜː.kər/",
        "pos": "(n)",
        "ex": "After work, I sometimes grab a coffee with my colleagues."
    },
    {
        "num": 9,
        "en": "Supportive",
        "vi": "Hỗ trợ, giúp đỡ nhau",
        "ipa": "/səˈpɔː.tɪv/",
        "pos": "(adj)",
        "ex": "My parents have always been very supportive of my choices."
    },
    {
        "num": 10,
        "en": "State-of-the-art facilities",
        "vi": "Cơ sở vật chất hiện đại",
        "ipa": "/ˌsteɪt.əv.ðiˈɑːt fəˈsɪl.ə.tiz/",
        "pos": "(n. phrase)",
        "ex": "Our new university campus has state-of-the-art facilities, including a huge library."
    },
    {
        "num": 11,
        "en": "Heavy workload",
        "vi": "Khối lượng công việc lớn",
        "ipa": "/ˈhev.i ˈwɜːk.ləʊd/",
        "pos": "(n. phrase)",
        "ex": "Teachers usually have a heavy workload at the end of the school term."
    },
    {
        "num": 12,
        "en": "Meet a deadline",
        "vi": "Kịp hạn chót",
        "ipa": "/miːt ə ˈded.laɪn/",
        "pos": "(v. phrase)",
        "ex": "I often have to stay up late to meet a deadline for my history essay."
    },
    {
        "num": 13,
        "en": "Work under pressure",
        "vi": "Làm việc dưới áp lực",
        "ipa": "/wɜːk ˈʌn.dər ˈpreʃ.ər/",
        "pos": "(v. phrase)",
        "ex": "In my job, you really need to know how to work under pressure."
    },
    {
        "num": 14,
        "en": "Hectic schedule",
        "vi": "Lịch trình bận rộn",
        "ipa": "/ˈhek.tɪk ˈʃedʒ.uːl/",
        "pos": "(n. phrase)",
        "ex": "Because of my hectic schedule, I rarely have time to watch TV."
    },
    {
        "num": 15,
        "en": "Up to my ears in work",
        "vi": "Bận ngập đầu",
        "ipa": "/ʌp tu maɪ ɪəz ɪn wɜːk/",
        "pos": "(idiom)",
        "ex": "I can't go to the cinema tonight because I'm up to my ears in work."
    },
    {
        "num": 16,
        "en": "Burn the midnight oil",
        "vi": "Thức khuya làm việc/học bài",
        "ipa": "/bɜːn ðə ˈmɪd.naɪt ɔɪl/",
        "pos": "(idiom)",
        "ex": "Before the final exams, I always have to burn the midnight oil."
    },
    {
        "num": 17,
        "en": "Pass with flying colors",
        "vi": "Đậu điểm cao (thi cử)",
        "ipa": "/pɑːs wɪð ˈflaɪ.ɪŋ ˈkʌl.əz/",
        "pos": "(idiom)",
        "ex": "I was absolutely thrilled when I passed the maths exam with flying colours."
    },
    {
        "num": 18,
        "en": "Challenging but rewarding",
        "vi": "Thử thách nhưng xứng đáng",
        "ipa": "/ˈtʃæl.ɪn.dʒɪŋ bʌt rɪˈwɔː.dɪŋ/",
        "pos": "(adj. phrase)",
        "ex": "Learning a new language is challenging but rewarding."
    },
    {
        "num": 19,
        "en": "Broaden my horizons",
        "vi": "Mở rộng tầm mắt/kiến thức",
        "ipa": "/ˈbrɔː.dən maɪ həˈraɪ.zənz/",
        "pos": "(v. phrase)",
        "ex": "Travelling to different countries helps to broaden my horizons."
    },
    {
        "num": 20,
        "en": "Practical experience",
        "vi": "Kinh nghiệm thực tế",
        "ipa": "/ˈpræk.tɪ.kəl ɪkˈspɪə.ri.əns/",
        "pos": "(n. phrase)",
        "ex": "Volunteering at the hospital gave me a lot of practical experience."
    },
    {
        "num": 21,
        "en": "Lucrative income",
        "vi": "Thu nhập cao/hậu hĩnh",
        "ipa": "/ˈluː.krə.tɪv ˈɪn.kʌm/",
        "pos": "(n. phrase)",
        "ex": "Many students choose IT because it offers a lucrative income."
    },
    {
        "num": 22,
        "en": "Make a living",
        "vi": "Kiếm sống",
        "ipa": "/meɪk ə ˈlɪv.ɪŋ/",
        "pos": "(v. phrase)",
        "ex": "It's quite hard to make a living as an artist in this city."
    },
    {
        "num": 23,
        "en": "Cover my bills",
        "vi": "Trang trải chi phí sinh hoạt",
        "ipa": "/ˈkʌv.ər maɪ bɪlz/",
        "pos": "(v. phrase)",
        "ex": "I do a part-time job at the weekends just to cover my bills."
    },
    {
        "num": 24,
        "en": "Promotion opportunities",
        "vi": "Cơ hội thăng tiến",
        "ipa": "/prəˈməʊ.ʃən ˌɒp.əˈtjuː.nə.tiz/",
        "pos": "(n. phrase)",
        "ex": "I chose this company because it offers clear promotion opportunities."
    },
    {
        "num": 25,
        "en": "Get promoted",
        "vi": "Được thăng chức",
        "ipa": "/ɡet prəˈməʊ.tɪd/",
        "pos": "(v. phrase)",
        "ex": "If I work hard this year, I hope to get promoted to a senior role."
    },
    {
        "num": 26,
        "en": "Soft skills",
        "vi": "Kỹ năng mềm",
        "ipa": "/sɒft skɪlz/",
        "pos": "(n. phrase)",
        "ex": "Employers nowadays look for soft skills like teamwork and communication."
    },
    {
        "num": 27,
        "en": "Teamwork spirit",
        "vi": "Tinh thần đồng đội",
        "ipa": "/ˈtiːm.wɜːk ˈspɪr.ɪt/",
        "pos": "(n. phrase)",
        "ex": "Playing football really builds a good teamwork spirit."
    },
    {
        "num": 28,
        "en": "Job satisfaction",
        "vi": "Sự hài lòng trong công việc",
        "ipa": "/dʒɒb ˌsæt.ɪsˈfæk.ʃən/",
        "pos": "(n. phrase)",
        "ex": "Having a friendly manager really increases my job satisfaction."
    },
    {
        "num": 29,
        "en": "Stable job",
        "vi": "Công việc ổn định",
        "ipa": "/ˈsteɪ.bəl dʒɒb/",
        "pos": "(n. phrase)",
        "ex": "My parents want me to find a stable job, like teaching."
    },
    {
        "num": 30,
        "en": "Gap year",
        "vi": "Năm nghỉ phép (trải nghiệm)",
        "ipa": "/ɡæp jɪər/",
        "pos": "(n. phrase)",
        "ex": "I decided to take a gap year to travel around Europe before starting university."
    },
    {
        "num": 31,
        "en": "Located in / Situated in",
        "vi": "Nằm ở...",
        "ipa": "/ləʊˈkeɪ.tɪd ɪn/ - /ˈsɪtʃ.u.eɪ.tɪd ɪn/",
        "pos": "(adj. phrase)",
        "ex": "My hometown is located in the north of Vietnam."
    },
    {
        "num": 32,
        "en": "Coastal city",
        "vi": "Thành phố biển",
        "ipa": "/ˈkəʊ.stəl ˈsɪt.i/",
        "pos": "(n. phrase)",
        "ex": "I grew up in a beautiful coastal city with lovely sandy beaches."
    },
    {
        "num": 33,
        "en": "Mountainous area",
        "vi": "Khu vực miền núi",
        "ipa": "/ˈmaʊn.tɪ.nəs ˈeə.ri.ə/",
        "pos": "(n. phrase)",
        "ex": "Life in a mountainous area can be quite difficult during the winter."
    },
    {
        "num": 34,
        "en": "The suburbs / Outskirts",
        "vi": "Vùng ngoại ô",
        "ipa": "/ˈsʌb.ɜːbz/ - /ˈaʊt.skɜːts/",
        "pos": "(n)",
        "ex": "I prefer living in the suburbs because it is much quieter than the centre."
    },
    {
        "num": 35,
        "en": "Heart of the city",
        "vi": "Trung tâm thành phố",
        "ipa": "/hɑːt əv ðə ˈsɪt.i/",
        "pos": "(n. phrase)",
        "ex": "My school is right in the heart of the city, so it's very convenient."
    },
    {
        "num": 36,
        "en": "Industrial zone",
        "vi": "Khu công nghiệp",
        "ipa": "/ɪnˈdʌs.tri.əl zəʊn/",
        "pos": "(n. phrase)",
        "ex": "Many new factories are being built in the industrial zone near my town."
    },
    {
        "num": 37,
        "en": "Tourist attraction",
        "vi": "Điểm thu hút du lịch",
        "ipa": "/ˈtʊə.rɪst əˈtræk.ʃən/",
        "pos": "(n. phrase)",
        "ex": "The old temple is the most famous tourist attraction in my region."
    },
    {
        "num": 38,
        "en": "Picturesque landscapes",
        "vi": "Phong cảnh đẹp như tranh",
        "ipa": "/ˌpɪk.tʃərˈesk ˈlænd.skeɪps/",
        "pos": "(n. phrase)",
        "ex": "The village is well-known for its picturesque landscapes and green fields."
    },
    {
        "num": 39,
        "en": "Breathtaking view",
        "vi": "Cảnh đẹp nín thở",
        "ipa": "/ˈbreθˌteɪ.kɪŋ vjuː/",
        "pos": "(n. phrase)",
        "ex": "From the top of the mountain, you get a breathtaking view of the valley."
    },
    {
        "num": 40,
        "en": "Historical sites",
        "vi": "Di tích lịch sử",
        "ipa": "/hɪˈstɒr.ɪ.kəl saɪts/",
        "pos": "(n. phrase)",
        "ex": "I love visiting historical sites to learn more about the past."
    },
    {
        "num": 41,
        "en": "Pace of life",
        "vi": "Nhịp sống",
        "ipa": "/peɪs əv laɪf/",
        "pos": "(n. phrase)",
        "ex": "The pace of life in the countryside is much slower and more relaxed."
    },
    {
        "num": 42,
        "en": "Hustle and bustle",
        "vi": "Sự hối hả nhộn nhịp",
        "ipa": "/ˈhʌs.əl ənd ˈbʌs.əl/",
        "pos": "(idiom)",
        "ex": "Sometimes I want to escape the hustle and bustle of the big city."
    },
    {
        "num": 43,
        "en": "Tranquil / Peaceful",
        "vi": "Yên bình",
        "ipa": "/ˈtræŋ.kwɪl/ - /ˈpiːs.fəl/",
        "pos": "(adj)",
        "ex": "My grandparents live in a very tranquil village by the river."
    },
    {
        "num": 44,
        "en": "Fresh air",
        "vi": "Không khí trong lành",
        "ipa": "/freʃ eər/",
        "pos": "(n. phrase)",
        "ex": "I go to the park every morning to get some fresh air."
    },
    {
        "num": 45,
        "en": "Polluted",
        "vi": "Ô nhiễm",
        "ipa": "/pəˈluː.tɪd/",
        "pos": "(adj)",
        "ex": "The air near the main road has become quite polluted recently."
    },
    {
        "num": 46,
        "en": "Traffic congestion",
        "vi": "Tắc đường",
        "ipa": "/ˈtræf.ɪk kənˈdʒes.tʃən/",
        "pos": "(n. phrase)",
        "ex": "Traffic congestion is a huge problem during rush hour."
    },
    {
        "num": 47,
        "en": "Commute",
        "vi": "Việc đi lại (đi làm)",
        "ipa": "/kəˈmjuːt/",
        "pos": "(n/v)",
        "ex": "My daily commute takes about 45 minutes by bus."
    },
    {
        "num": 48,
        "en": "Crowded / Packed",
        "vi": "Đông đúc",
        "ipa": "/ˈkraʊ.dɪd/ - /pækt/",
        "pos": "(adj)",
        "ex": "The train is always packed in the morning with people going to work."
    },
    {
        "num": 49,
        "en": "Vibrant",
        "vi": "Sôi động, đầy sức sống",
        "ipa": "/ˈvaɪ.brənt/",
        "pos": "(adj)",
        "ex": "It is a very vibrant city with lots of things to do at night."
    },
    {
        "num": 50,
        "en": "Dull / Boring",
        "vi": "Nhàm chán",
        "ipa": "/dʌl/ - /ˈbɔː.rɪŋ/",
        "pos": "(adj)",
        "ex": "I find living in a small town a bit dull sometimes."
    },
    {
        "num": 51,
        "en": "Hospitable",
        "vi": "Hiếu khách",
        "ipa": "/hɒsˈpɪt.ə.bəl/",
        "pos": "(adj)",
        "ex": "The locals in this area are known for being incredibly hospitable."
    },
    {
        "num": 52,
        "en": "Friendly and welcoming",
        "vi": "Thân thiện và chào đón",
        "ipa": "/ˈfrend.li ənd ˈwel.kəm.ɪŋ/",
        "pos": "(adj. phrase)",
        "ex": "Everyone in my neighbourhood is friendly and welcoming to newcomers."
    },
    {
        "num": 53,
        "en": "Sense of community",
        "vi": "Tinh thần cộng đồng",
        "ipa": "/sens əv kəˈmjuː.nə.ti/",
        "pos": "(n. phrase)",
        "ex": "We have a strong sense of community in our street."
    },
    {
        "num": 54,
        "en": "Local delicacies",
        "vi": "Đặc sản địa phương",
        "ipa": "/ˈləʊ.kəl ˈdel.ɪ.kə.siz/",
        "pos": "(n. phrase)",
        "ex": "You absolutely must try the local delicacies when you visit my hometown."
    },
    {
        "num": 55,
        "en": "Street food",
        "vi": "Đồ ăn đường phố",
        "ipa": "/striːt fuːd/",
        "pos": "(n. phrase)",
        "ex": "I love eating street food at the night market at the weekend."
    },
    {
        "num": 56,
        "en": "Amenities",
        "vi": "Các tiện ích (điện, đường, trường, trạm...)",
        "ipa": "/əˈmiː.nə.tiz/",
        "pos": "(n)",
        "ex": "My apartment building has great amenities, including a swimming pool."
    },
    {
        "num": 57,
        "en": "Entertainment center",
        "vi": "Khu vui chơi giải trí",
        "ipa": "/en.təˈteɪn.mənt ˈsen.tər/",
        "pos": "(n. phrase)",
        "ex": "We usually go to the entertainment centre after exams to relax."
    },
    {
        "num": 58,
        "en": "Public transport system",
        "vi": "Hệ thống giao thông công cộng",
        "ipa": "/ˈpʌb.lɪk ˈtræn.spɔːt ˈsɪs.təm/",
        "pos": "(n. phrase)",
        "ex": "The public transport system here is very reliable and cheap."
    },
    {
        "num": 59,
        "en": "Shopping mall",
        "vi": "Trung tâm thương mại",
        "ipa": "/ˈʃɒp.ɪŋ mɔːl/",
        "pos": "(n. phrase)",
        "ex": "Teenagers often hang out at the shopping mall on Sundays."
    },
    {
        "num": 60,
        "en": "Undergo dramatic changes",
        "vi": "Trải qua thay đổi mạnh mẽ",
        "ipa": "/ˌʌn.dəˈɡəʊ drəˈmæt.ɪk ˈtʃeɪn.dʒɪz/",
        "pos": "(v. phrase)",
        "ex": "My hometown has undergone dramatic changes since I was a child."
    },
    {
        "num": 61,
        "en": "Apartment block / Flat",
        "vi": "Chung cư / Căn hộ",
        "ipa": "/əˈpɑːt.mənt blɒk/ - /flæt/",
        "pos": "(n. phrase)",
        "ex": "I rent a small flat in a new apartment block near my university."
    },
    {
        "num": 62,
        "en": "Terraced house",
        "vi": "Nhà phố (nhà liền kề)",
        "ipa": "/ˈter.əst haʊs/",
        "pos": "(n. phrase)",
        "ex": "We live in a terraced house on a very quiet residential street."
    },
    {
        "num": 63,
        "en": "Detached house",
        "vi": "Nhà riêng biệt lập",
        "ipa": "/dɪˈtætʃt haʊs/",
        "pos": "(n. phrase)",
        "ex": "My dream is to buy a large detached house with a beautiful garden."
    },
    {
        "num": 64,
        "en": "Dormitory",
        "vi": "Ký túc xá",
        "ipa": "/ˈdɔː.mɪ.tər.i/",
        "pos": "(n)",
        "ex": "In my first year of university, I lived in a student dormitory."
    },
    {
        "num": 65,
        "en": "Rented accommodation",
        "vi": "Nhà thuê",
        "ipa": "/ˈren.tɪd əˌkɒm.əˈdeɪ.ʃən/",
        "pos": "(n. phrase)",
        "ex": "Finding affordable rented accommodation in the city centre can be tricky."
    },
    {
        "num": 66,
        "en": "Residential area",
        "vi": "Khu dân cư",
        "ipa": "/ˌrez.ɪˈden.ʃəl ˈeə.ri.ə/",
        "pos": "(n. phrase)",
        "ex": "It is a peaceful residential area, perfect for raising a family."
    },
    {
        "num": 67,
        "en": "Convenient location",
        "vi": "Vị trí thuận tiện",
        "ipa": "/kənˈviː.ni.ənt ləʊˈkeɪ.ʃən/",
        "pos": "(n. phrase)",
        "ex": "The flat has a very convenient location, close to the shops and bus stops."
    },
    {
        "num": 68,
        "en": "Within walking distance of",
        "vi": "Gần (có thể đi bộ tới...)",
        "ipa": "/wɪˈðɪn ˈwɔː.kɪŋ ˈdɪs.təns əv/",
        "pos": "(phrase)",
        "ex": "My house is luckily within walking distance of the school."
    },
    {
        "num": 69,
        "en": "Prime location",
        "vi": "Vị trí đắc địa",
        "ipa": "/praɪm ləʊˈkeɪ.ʃən/",
        "pos": "(n. phrase)",
        "ex": "The café is in a prime location right next to the train station."
    },
    {
        "num": 70,
        "en": "Overlook (a park/lake)",
        "vi": "(Cửa sổ/Ban công) nhìn ra...",
        "ipa": "/ˌəʊ.vəˈlʊk/",
        "pos": "(v)",
        "ex": "My bedroom window overlooks a beautiful lake."
    },
    {
        "num": 71,
        "en": "Spacious",
        "vi": "Rộng rãi",
        "ipa": "/ˈspeɪ.ʃəs/",
        "pos": "(adj)",
        "ex": "The living room is very spacious and gets lots of natural light."
    },
    {
        "num": 72,
        "en": "Cramped",
        "vi": "Chật chội",
        "ipa": "/kræmpt/",
        "pos": "(adj)",
        "ex": "When I was a student, I lived in a rather cramped room."
    },
    {
        "num": 73,
        "en": "Cozy",
        "vi": "Ấm cúng",
        "ipa": "/ˈkəʊ.zi/",
        "pos": "(adj)",
        "ex": "In winter, I love sitting reading books in my cozy living room."
    },
    {
        "num": 74,
        "en": "Airy",
        "vi": "Thoáng khí",
        "ipa": "/ˈeə.ri/",
        "pos": "(adj)",
        "ex": "I always open the windows in the morning to keep the house airy."
    },
    {
        "num": 75,
        "en": "Stuffy",
        "vi": "Bí bách",
        "ipa": "/ˈstʌf.i/",
        "pos": "(adj)",
        "ex": "It gets very stuffy in this classroom if we don't turn on the fan."
    },
    {
        "num": 76,
        "en": "Fully furnished",
        "vi": "Đầy đủ nội thất",
        "ipa": "/ˈfʊl.i ˈfɜː.nɪʃt/",
        "pos": "(adj. phrase)",
        "ex": "I prefer renting a fully furnished apartment so I don't have to buy beds."
    },
    {
        "num": 77,
        "en": "Modern appliances",
        "vi": "Thiết bị hiện đại",
        "ipa": "/ˈmɒd.ən əˈplaɪ.əns.ɪz/",
        "pos": "(n. phrase)",
        "ex": "The kitchen is equipped with all the modern appliances you need for cooking."
    },
    {
        "num": 78,
        "en": "Decorate",
        "vi": "Trang trí",
        "ipa": "/ˈdek.ə.reɪt/",
        "pos": "(v)",
        "ex": "I like to decorate my bedroom with posters and small plants."
    },
    {
        "num": 79,
        "en": "Renovate",
        "vi": "Sửa sang, nâng cấp nhà",
        "ipa": "/ˈren.ə.veɪt/",
        "pos": "(v)",
        "ex": "We plan to renovate our old kitchen next year."
    },
    {
        "num": 80,
        "en": "Balcony",
        "vi": "Ban công",
        "ipa": "/ˈbæl.kə.ni/",
        "pos": "(n)",
        "ex": "I really enjoy drinking tea on my balcony in the early morning."
    },
    {
        "num": 81,
        "en": "House chores",
        "vi": "Việc nhà",
        "ipa": "/haʊs tʃɔːrz/",
        "pos": "(n. phrase)",
        "ex": "I always try to help my mum with house chores at the weekend."
    },
    {
        "num": 82,
        "en": "Do the laundry",
        "vi": "Giặt đồ",
        "ipa": "/duː ðə ˈlɔːn.dri/",
        "pos": "(v. phrase)",
        "ex": "It is my job to do the laundry every Sunday morning."
    },
    {
        "num": 83,
        "en": "Tidy up",
        "vi": "Dọn dẹp",
        "ipa": "/ˈtaɪ.di ʌp/",
        "pos": "(phrasal v.)",
        "ex": "I need to tidy up my messy desk before I can start studying."
    },
    {
        "num": 84,
        "en": "Family gathering",
        "vi": "Tụ họp gia đình",
        "ipa": "/ˈfæm.əl.i ˈɡæð.ər.ɪŋ/",
        "pos": "(n. phrase)",
        "ex": "Tet holiday is the perfect time for a big family gathering."
    },
    {
        "num": 85,
        "en": "Privacy",
        "vi": "Sự riêng tư",
        "ipa": "/ˈprɪv.ə.si/",
        "pos": "(n)",
        "ex": "Having my own bedroom gives me the privacy I need to focus."
    },
    {
        "num": 86,
        "en": "Unwind / Chill out",
        "vi": "Thư giãn",
        "ipa": "/ʌnˈwaɪnd/ - /tʃɪl aʊt/",
        "pos": "(phrasal v.)",
        "ex": "Listening to soft music is my favourite way to chill out after class."
    },
    {
        "num": 87,
        "en": "Housewarming party",
        "vi": "Tiệc tân gia",
        "ipa": "/ˈhaʊsˌwɔː.mɪŋ ˈpɑː.ti/",
        "pos": "(n. phrase)",
        "ex": "We are hosting a small housewarming party this Saturday."
    },
    {
        "num": 88,
        "en": "Get on well with neighbors",
        "vi": "Hòa thuận với hàng xóm",
        "ipa": "/ɡet ɒn wel wɪð ˈneɪ.bərz/",
        "pos": "(v. phrase)",
        "ex": "Luckily, I get on well with all my neighbours in the building."
    },
    {
        "num": 89,
        "en": "Noisy neighbors",
        "vi": "Hàng xóm ồn ào",
        "ipa": "/ˈnɔɪ.zi ˈneɪ.bərz/",
        "pos": "(n. phrase)",
        "ex": "It's really hard to sleep at night because of my noisy neighbours."
    },
    {
        "num": 90,
        "en": "Feel at home",
        "vi": "Cảm thấy thoải mái như ở nhà",
        "ipa": "/fiːl ət həʊm/",
        "pos": "(idiom)",
        "ex": "The host was so kind that she made me feel at home immediately."
    },
    {
        "num": 91,
        "en": "Actually / To be honest",
        "vi": "Thật ra thì / Thành thật mà nói",
        "ipa": "/ˈæk.tʃu.ə.li/ - /tu bi ˈɒn.ɪst/",
        "pos": "(adv)",
        "ex": "To be honest, I'm not a big fan of classical music."
    },
    {
        "num": 92,
        "en": "Generally speaking",
        "vi": "Nói chung là",
        "ipa": "/ˈdʒen.ər.əl.i ˈspiː.kɪŋ/",
        "pos": "(phrase)",
        "ex": "Generally speaking, the weather in my hometown is quite hot and humid."
    },
    {
        "num": 93,
        "en": "What I like most about X is",
        "vi": "Điều tôi thích nhất ở X là...",
        "ipa": "/wɒt aɪ laɪk məʊst əˈbaʊt.../",
        "pos": "(phrase)",
        "ex": "What I like most about my city is the amazing street food."
    },
    {
        "num": 94,
        "en": "I’m really keen on",
        "vi": "Tôi rất thích...",
        "ipa": "/aɪm ˈrɪə.li kiːn ɒn/",
        "pos": "(phrase)",
        "ex": "I’m really keen on playing badminton with my friends after school."
    },
    {
        "num": 95,
        "en": "It allows me to",
        "vi": "Nó cho phép tôi làm gì...",
        "ipa": "/ɪt əˈlaʊz miː tu/",
        "pos": "(phrase)",
        "ex": "Having a personal laptop allows me to study anywhere I want."
    },
    {
        "num": 96,
        "en": "Once in a blue moon",
        "vi": "Hiếm khi",
        "ipa": "/wʌns ɪn ə bluː muːn/",
        "pos": "(idiom)",
        "ex": "I try to eat healthily, so I only have fast food once in a blue moon."
    },
    {
        "num": 97,
        "en": "Day in, day out",
        "vi": "Ngày qua ngày (lặp lại)",
        "ipa": "/deɪ ɪn deɪ aʊt/",
        "pos": "(idiom)",
        "ex": "She studies hard day in, day out to prepare for the university entrance exam."
    },
    {
        "num": 98,
        "en": "For the most part",
        "vi": "Phần lớn là",
        "ipa": "/fɔːr ðə məʊst pɑːt/",
        "pos": "(phrase)",
        "ex": "For the most part, my classmates are very friendly and helpful."
    },
    {
        "num": 99,
        "en": "On top of that",
        "vi": "Thêm vào đó",
        "ipa": "/ɒn tɒp əv ðæt/",
        "pos": "(phrase)",
        "ex": "It's a beautiful city to live in, and on top of that, it's very safe."
    },
    {
        "num": 100,
        "en": "Last but not least",
        "vi": "Cuối cùng nhưng không kém phần quan trọng",
        "ipa": "/lɑːst bʌt nɒt liːst/",
        "pos": "(phrase)",
        "ex": "Last but not least, I want to thank my parents for their endless support."
    },
    {
        "num": 101,
        "en": "On a daily basis",
        "vi": "Hàng ngày",
        "ipa": "/ɒn ə ˈdeɪ.li ˈbeɪ.sɪs/",
        "pos": "(adv phrase)",
        "ex": "I try to exercise on a daily basis to keep fit."
    },
    {
        "num": 102,
        "en": "From time to time",
        "vi": "Thỉnh thoảng",
        "ipa": "/frɒm taɪm tu taɪm/",
        "pos": "(adv phrase)",
        "ex": "I enjoy reading science fiction novels from time to time."
    },
    {
        "num": 103,
        "en": "Every now and then",
        "vi": "Thỉnh thoảng",
        "ipa": "/ˈev.ri naʊ ənd ðen/",
        "pos": "(adv phrase)",
        "ex": "Every now and then, I treat myself to a nice meal at a restaurant."
    },
    {
        "num": 104,
        "en": "Frequently",
        "vi": "Thường xuyên",
        "ipa": "/ˈfriː.kwənt.li/",
        "pos": "(adv)",
        "ex": "I frequently visit the local library to borrow new books."
    },
    {
        "num": 105,
        "en": "Hardly ever / Rarely",
        "vi": "Hiếm khi",
        "ipa": "/ˈhɑːd.li ˈev.ər/ - /ˈreə.li/",
        "pos": "(adv)",
        "ex": "I rarely watch television these days because I am so busy."
    },
    {
        "num": 106,
        "en": "Make a habit of",
        "vi": "Tạo thói quen làm gì",
        "ipa": "/meɪk ə ˈhæb.ɪt əv/",
        "pos": "(v phrase)",
        "ex": "You should make a habit of drinking plenty of water every day."
    },
    {
        "num": 107,
        "en": "Get into the habit of",
        "vi": "Bắt đầu thói quen gì",
        "ipa": "/ɡet ˈɪn.tu ðə ˈhæb.ɪt əv/",
        "pos": "(v phrase)",
        "ex": "I want to get into the habit of waking up early to jog."
    },
    {
        "num": 108,
        "en": "Kick the bad habit",
        "vi": "Từ bỏ thói quen xấu",
        "ipa": "/kɪk ðə bæd ˈhæb.ɪt/",
        "pos": "(v phrase)",
        "ex": "It is quite hard to kick the bad habit of biting your nails."
    },
    {
        "num": 109,
        "en": "Stick to a routine",
        "vi": "Tuân thủ lịch trình/thói quen",
        "ipa": "/stɪk tu ə ruːˈtiːn/",
        "pos": "(v phrase)",
        "ex": "During the school term, I try my best to stick to a routine."
    },
    {
        "num": 110,
        "en": "Tend to",
        "vi": "Có xu hướng",
        "ipa": "/tend tu/",
        "pos": "(v phrase)",
        "ex": "I tend to stay at home and read on rainy days."
    },
    {
        "num": 111,
        "en": "Without fail",
        "vi": "Không bao giờ bỏ sót (đều đặn)",
        "ipa": "/wɪˈðaʊt feɪl/",
        "pos": "(idiom)",
        "ex": "I call my grandparents every Sunday morning without fail."
    },
    {
        "num": 112,
        "en": "Early bird / Morning person",
        "vi": "Người hay dậy sớm",
        "ipa": "/ˈɜː.li bɜːd/",
        "pos": "(n phrase)",
        "ex": "I am definitely an early bird and love the quietness of mornings."
    },
    {
        "num": 113,
        "en": "Wake up at the crack of dawn",
        "vi": "Dậy khi tờ mờ sáng",
        "ipa": "/weɪk ʌp æt ðə kræk əv dɔːn/",
        "pos": "(idiom)",
        "ex": "My grandfather always wakes up at the crack of dawn to exercise."
    },
    {
        "num": 114,
        "en": "Hit the snooze button",
        "vi": "Bấm nút hoãn báo thức",
        "ipa": "/hɪt ðə snuːz ˈbʌt.ən/",
        "pos": "(v phrase)",
        "ex": "I usually hit the snooze button at least twice before getting out of bed."
    },
    {
        "num": 115,
        "en": "Oversleep",
        "vi": "Ngủ quên",
        "ipa": "/ˌəʊ.vəˈsliːp/",
        "pos": "(v)",
        "ex": "I forgot to set my alarm and overslept this morning."
    },
    {
        "num": 116,
        "en": "Have a nutritious breakfast",
        "vi": "Ăn bữa sáng dinh dưỡng",
        "ipa": "/hæv ə njuːˈtrɪʃ.əs ˈbrek.fəst/",
        "pos": "(v phrase)",
        "ex": "I always have a nutritious breakfast to start my day right."
    },
    {
        "num": 117,
        "en": "Skip breakfast",
        "vi": "Bỏ bữa sáng",
        "ipa": "/skɪp ˈbrek.fəst/",
        "pos": "(v phrase)",
        "ex": "I never skip breakfast because it makes me feel tired later."
    },
    {
        "num": 118,
        "en": "Grab a quick bite",
        "vi": "Ăn vội cái gì đó",
        "ipa": "/ɡræb ə kwɪk baɪt/",
        "pos": "(v phrase)",
        "ex": "I was late, so I just grabbed a quick bite before leaving."
    },
    {
        "num": 119,
        "en": "Get ready for school",
        "vi": "Chuẩn bị đi học",
        "ipa": "/ɡet ˈred.i fɔː skuːl/",
        "pos": "(v phrase)",
        "ex": "It takes me about thirty minutes to get ready for school."
    },
    {
        "num": 120,
        "en": "Rush out the door",
        "vi": "Lao ra khỏi nhà",
        "ipa": "/rʌʃ aʊt ðə dɔːr/",
        "pos": "(v phrase)",
        "ex": "I had to rush out the door to catch the school bus on time."
    },
    {
        "num": 121,
        "en": "Productive day",
        "vi": "Một ngày năng suất",
        "ipa": "/prəˈdʌk.tɪv deɪ/",
        "pos": "(n phrase)",
        "ex": "I had a very productive day and finished all my assignments."
    },
    {
        "num": 122,
        "en": "Take a nap",
        "vi": "Ngủ trưa một chút",
        "ipa": "/teɪk ə næp/",
        "pos": "(v phrase)",
        "ex": "I sometimes take a nap in the afternoon to refresh my mind."
    },
    {
        "num": 123,
        "en": "Run errands",
        "vi": "Chạy việc vặt",
        "ipa": "/rʌn ˈer.əndz/",
        "pos": "(v phrase)",
        "ex": "On Saturdays, I usually help my mum run errands around town."
    },
    {
        "num": 124,
        "en": "Stay hydrated",
        "vi": "Uống đủ nước",
        "ipa": "/steɪ ˈhaɪ.dreɪ.tɪd/",
        "pos": "(v phrase)",
        "ex": "It is very important to stay hydrated, especially during the summer."
    },
    {
        "num": 125,
        "en": "Wind down",
        "vi": "Thư giãn, xả hơi",
        "ipa": "/waɪnd daʊn/",
        "pos": "(phrasal v)",
        "ex": "Reading a good book helps me wind down before going to sleep."
    },
    {
        "num": 126,
        "en": "Scroll through social media",
        "vi": "Lướt mạng xã hội",
        "ipa": "/skrəʊl θruː ˈsəʊ.ʃəl ˈmiː.di.ə/",
        "pos": "(v phrase)",
        "ex": "I admit that I spend too much time scrolling through social media."
    },
    {
        "num": 127,
        "en": "Binge-watch",
        "vi": "Cày phim liên tục",
        "ipa": "/ˈbɪndʒ.wɒtʃ/",
        "pos": "(v)",
        "ex": "Last weekend, I binge-watched a whole drama series on Netflix."
    },
    {
        "num": 128,
        "en": "Call it a day",
        "vi": "Kết thúc ngày làm việc",
        "ipa": "/kɔːl ɪt ə deɪ/",
        "pos": "(idiom)",
        "ex": "After studying for five hours, I decided to call it a day."
    },
    {
        "num": 129,
        "en": "Stay up late",
        "vi": "Thức khuya",
        "ipa": "/steɪ ʌp leɪt/",
        "pos": "(v phrase)",
        "ex": "I try not to stay up late during the week so I can focus in class."
    },
    {
        "num": 130,
        "en": "Pull an all-nighter",
        "vi": "Thức trắng đêm",
        "ipa": "/pʊl ən ɔːl ˈnaɪ.tər/",
        "pos": "(idiom)",
        "ex": "I had to pull an all-nighter to finish my science project."
    },
    {
        "num": 131,
        "en": "Have a lie-in / Sleep in",
        "vi": "Ngủ nướng (chủ động)",
        "ipa": "/hæv ə laɪ ɪn/",
        "pos": "(v phrase)",
        "ex": "I love having a lie-in on Sunday mornings after a long week."
    },
    {
        "num": 132,
        "en": "Recharge my batteries",
        "vi": "Nạp lại năng lượng",
        "ipa": "/riːˈtʃɑːdʒ maɪ ˈbæt.ər.iz/",
        "pos": "(idiom)",
        "ex": "A short holiday is exactly what I need to recharge my batteries."
    },
    {
        "num": 133,
        "en": "Let my hair down",
        "vi": "Xả hơi, quẩy",
        "ipa": "/let maɪ heər daʊn/",
        "pos": "(idiom)",
        "ex": "The weekend is a great time to let my hair down and relax."
    },
    {
        "num": 134,
        "en": "Quality time",
        "vi": "Thời gian chất lượng",
        "ipa": "/ˈkwɒl.ə.ti taɪm/",
        "pos": "(n phrase)",
        "ex": "I always try to spend quality time with my family every evening."
    },
    {
        "num": 135,
        "en": "Hang out with friends",
        "vi": "Đi chơi với bạn",
        "ipa": "/hæŋ aʊt wɪð frendz/",
        "pos": "(v phrase)",
        "ex": "I usually hang out with my friends at the local park on Saturdays."
    },
    {
        "num": 136,
        "en": "Catch up with friends",
        "vi": "Gặp gỡ, hỏi thăm bạn bè",
        "ipa": "/kætʃ ʌp wɪð frendz/",
        "pos": "(v phrase)",
        "ex": "It was lovely to catch up with friends over a cup of milk tea."
    },
    {
        "num": 137,
        "en": "Go for a stroll",
        "vi": "Đi dạo",
        "ipa": "/ɡəʊ fɔːr ə strəʊl/",
        "pos": "(v phrase)",
        "ex": "After dinner, we often go for a stroll around the neighbourhood."
    },
    {
        "num": 138,
        "en": "Eat out / Dine out",
        "vi": "Ăn ở nhà hàng",
        "ipa": "/iːt aʊt/",
        "pos": "(v phrase)",
        "ex": "My family likes to eat out to celebrate special occasions."
    },
    {
        "num": 139,
        "en": "Escape the city",
        "vi": "Trốn khỏi thành phố",
        "ipa": "/ɪˈskeɪp ðə ˈsɪt.i/",
        "pos": "(v phrase)",
        "ex": "Sometimes we drive to the countryside just to escape the city."
    },
    {
        "num": 140,
        "en": "Pursue my hobbies",
        "vi": "Theo đuổi sở thích",
        "ipa": "/pəˈsjuː maɪ ˈhɒb.iz/",
        "pos": "(v phrase)",
        "ex": "In my free time, I love to pursue my hobbies like painting and cooking."
    },
    {
        "num": 141,
        "en": "Do some window shopping",
        "vi": "Đi ngắm đồ nhưng không mua",
        "ipa": "/duː sʌm ˈwɪn.dəʊ ˌʃɒp.ɪŋ/",
        "pos": "(v phrase)",
        "ex": "We didn't buy anything at the mall, we just did some window shopping."
    },
    {
        "num": 142,
        "en": "Lazy Sunday",
        "vi": "Ngày chủ nhật lười biếng",
        "ipa": "/ˈleɪ.zi ˈsʌn.deɪ/",
        "pos": "(n phrase)",
        "ex": "I really look forward to a lazy Sunday after a busy week at school."
    },
    {
        "num": 143,
        "en": "Night owl",
        "vi": "Cú đêm",
        "ipa": "/naɪt aʊl/",
        "pos": "(n phrase)",
        "ex": "My brother is a night owl and does his best work at midnight."
    },
    {
        "num": 144,
        "en": "Heavy sleeper",
        "vi": "Người ngủ say",
        "ipa": "/ˈhev.i ˈsliː.pər/",
        "pos": "(n phrase)",
        "ex": "I am a heavy sleeper, so traffic noise outside does not bother me."
    },
    {
        "num": 145,
        "en": "Light sleeper",
        "vi": "Người ngủ thính",
        "ipa": "/laɪt ˈsliː.pər/",
        "pos": "(n phrase)",
        "ex": "I am a light sleeper and wake up at the slightest noise."
    },
    {
        "num": 146,
        "en": "Sound sleep",
        "vi": "Giấc ngủ ngon/sâu",
        "ipa": "/saʊnd sliːp/",
        "pos": "(n phrase)",
        "ex": "Having a comfortable bed helps me get a sound sleep."
    },
    {
        "num": 147,
        "en": "Sleep like a log",
        "vi": "Ngủ say như chết",
        "ipa": "/sliːp laɪk ə lɒɡ/",
        "pos": "(idiom)",
        "ex": "I was so exhausted yesterday that I slept like a log."
    },
    {
        "num": 148,
        "en": "Toss and turn",
        "vi": "Trằn trọc",
        "ipa": "/tɒs ənd tɜːn/",
        "pos": "(v phrase)",
        "ex": "I tossed and turned all night because I was worried about the exam."
    },
    {
        "num": 149,
        "en": "Suffer from insomnia",
        "vi": "Bị mất ngủ",
        "ipa": "/ˈsʌf.ər frɒm ɪnˈsɒm.ni.ə/",
        "pos": "(v phrase)",
        "ex": "Older people often suffer from insomnia and find it hard to sleep."
    },
    {
        "num": 150,
        "en": "Have a nightmare",
        "vi": "Gặp ác mộng",
        "ipa": "/hæv ə ˈnaɪt.meər/",
        "pos": "(v phrase)",
        "ex": "I woke up suddenly in the middle of the night because I had a nightmare."
    },
    {
        "num": 151,
        "en": "Wake up refreshed",
        "vi": "Tỉnh dậy thấy sảng khoái",
        "ipa": "/weɪk ʌp rɪˈfreʃt/",
        "pos": "(v phrase)",
        "ex": "After a good night's sleep, I wake up refreshed and ready for the day."
    },
    {
        "num": 152,
        "en": "Feel groggy",
        "vi": "Cảm thấy lờ đờ",
        "ipa": "/fiːl ˈɡrɒɡ.i/",
        "pos": "(v phrase)",
        "ex": "If I sleep too much, I sometimes feel groggy in the morning."
    },
    {
        "num": 153,
        "en": "Take a power nap",
        "vi": "Chợp mắt nhanh",
        "ipa": "/teɪk ə ˈpaʊ.ə næp/",
        "pos": "(v phrase)",
        "ex": "I take a power nap after lunch to boost my energy for the afternoon."
    },
    {
        "num": 154,
        "en": "Fall asleep",
        "vi": "Chìm vào giấc ngủ",
        "ipa": "/fɔːl əˈsliːp/",
        "pos": "(v phrase)",
        "ex": "I usually fall asleep within five minutes of going to bed."
    },
    {
        "num": 155,
        "en": "Set an alarm",
        "vi": "Đặt báo thức",
        "ipa": "/set ən əˈlɑːm/",
        "pos": "(v phrase)",
        "ex": "I always set an alarm on my phone so I don't miss the morning train."
    },
    {
        "num": 156,
        "en": "Lack of sleep",
        "vi": "Thiếu ngủ",
        "ipa": "/læk əv sliːp/",
        "pos": "(n phrase)",
        "ex": "A lack of sleep can make it really hard to concentrate in class."
    },
    {
        "num": 157,
        "en": "Improve sleep quality",
        "vi": "Cải thiện chất lượng giấc ngủ",
        "ipa": "/ɪmˈpruːv sliːp ˈkwɒl.ə.ti/",
        "pos": "(v phrase)",
        "ex": "Drinking warm milk before bed can significantly improve sleep quality."
    },
    {
        "num": 158,
        "en": "Keep fit / Stay in shape",
        "vi": "Giữ dáng",
        "ipa": "/kiːp fɪt/",
        "pos": "(v phrase)",
        "ex": "I cycle to school every day to keep fit."
    },
    {
        "num": 159,
        "en": "Lead a sedentary lifestyle",
        "vi": "Lối sống thụ động",
        "ipa": "/liːd ə ˈsed.ən.tər.i ˈlaɪf.staɪl/",
        "pos": "(v phrase)",
        "ex": "Many office workers lead a sedentary lifestyle, sitting all day."
    },
    {
        "num": 160,
        "en": "Hit the gym",
        "vi": "Đi tập gym",
        "ipa": "/hɪt ðə dʒɪm/",
        "pos": "(v phrase)",
        "ex": "I try to hit the gym at least three times a week."
    },
    {
        "num": 161,
        "en": "Do yoga / Do aerobics",
        "vi": "Tập yoga / nhịp điệu",
        "ipa": "/duː ˈjəʊ.ɡə/",
        "pos": "(v phrase)",
        "ex": "My mother does yoga in the garden every morning to stay flexible."
    },
    {
        "num": 162,
        "en": "Go for a jog",
        "vi": "Đi chạy bộ",
        "ipa": "/ɡəʊ fɔːr ə dʒɒɡ/",
        "pos": "(v phrase)",
        "ex": "I usually go for a jog around the local park before breakfast."
    },
    {
        "num": 163,
        "en": "Work out",
        "vi": "Tập luyện thể dục",
        "ipa": "/wɜːk aʊt/",
        "pos": "(v phrase)",
        "ex": "Working out regularly is great for both your body and your mind."
    },
    {
        "num": 164,
        "en": "Burn calories",
        "vi": "Đốt calo",
        "ipa": "/bɜːn ˈkæl.ər.iz/",
        "pos": "(v phrase)",
        "ex": "Swimming is an excellent way to burn calories and build strength."
    },
    {
        "num": 165,
        "en": "Boost my mood",
        "vi": "Cải thiện tâm trạng",
        "ipa": "/buːst maɪ muːd/",
        "pos": "(v phrase)",
        "ex": "Listening to my favourite music always boosts my mood."
    },
    {
        "num": 166,
        "en": "Relieve stress",
        "vi": "Giảm căng thẳng",
        "ipa": "/rɪˈliːv stres/",
        "pos": "(v phrase)",
        "ex": "Playing sports is a wonderful way to relieve stress after school."
    },
    {
        "num": 167,
        "en": "Strengthen immune system",
        "vi": "Tăng cường hệ miễn dịch",
        "ipa": "/ˈstreŋ.θən ɪˈmjuːn ˈsɪs.təm/",
        "pos": "(v phrase)",
        "ex": "Eating plenty of fresh fruit helps to strengthen your immune system."
    },
    {
        "num": 168,
        "en": "Build muscle",
        "vi": "Xây dựng cơ bắp",
        "ipa": "/bɪld ˈmʌs.əl/",
        "pos": "(v phrase)",
        "ex": "He lifts heavy weights at the gym to build muscle."
    },
    {
        "num": 169,
        "en": "Physical health",
        "vi": "Sức khỏe thể chất",
        "ipa": "/ˈfɪz.ɪ.kəl helθ/",
        "pos": "(n phrase)",
        "ex": "Getting enough sleep is vital for your physical health."
    },
    {
        "num": 170,
        "en": "Mental health",
        "vi": "Sức khỏe tinh thần",
        "ipa": "/ˈmen.təl helθ/",
        "pos": "(n phrase)",
        "ex": "Taking breaks from studying is just as important for your mental health."
    },
    {
        "num": 171,
        "en": "Brisk walking",
        "vi": "Đi bộ nhanh",
        "ipa": "/brɪsk ˈwɔː.kɪŋ/",
        "pos": "(n phrase)",
        "ex": "Brisk walking is a simple and free way to stay active."
    },
    {
        "num": 172,
        "en": "Outdoor activities",
        "vi": "Các hoạt động ngoài trời",
        "ipa": "/ˈaʊt.dɔːr ækˈtɪv.ə.tiz/",
        "pos": "(n phrase)",
        "ex": "I prefer outdoor activities like hiking and camping over staying indoors."
    },
    {
        "num": 173,
        "en": "Private vehicle",
        "vi": "Phương tiện cá nhân",
        "ipa": "/ˈpraɪ.vət ˈviː.ɪ.kəl/",
        "pos": "(n phrase)",
        "ex": "Most families in my area own at least one private vehicle."
    },
    {
        "num": 174,
        "en": "Public transport",
        "vi": "Phương tiện công cộng",
        "ipa": "/ˈpʌb.lɪk ˈtræn.spɔːt/",
        "pos": "(n phrase)",
        "ex": "I use public transport to get to school because it is cheaper and greener."
    },
    {
        "num": 175,
        "en": "Daily commuter",
        "vi": "Người đi làm/học hàng ngày",
        "ipa": "/ˈdeɪ.li kəˈmjuː.tər/",
        "pos": "(n phrase)",
        "ex": "The morning train is always packed with daily commuters going to the city centre."
    },
    {
        "num": 176,
        "en": "Get around",
        "vi": "Đi lại quanh thành phố",
        "ipa": "/ɡet əˈraʊnd/",
        "pos": "(phrasal v)",
        "ex": "The easiest way to get around the city is by riding a motorbike."
    },
    {
        "num": 177,
        "en": "Stuck in traffic",
        "vi": "Tắc đường",
        "ipa": "/stʌk ɪn ˈtræf.ɪk/",
        "pos": "(adj phrase)",
        "ex": "I was twenty minutes late for school because I got stuck in traffic."
    },
    {
        "num": 178,
        "en": "Rush hour / Peak hour",
        "vi": "Giờ cao điểm",
        "ipa": "/rʌʃ ˈaʊər/",
        "pos": "(n phrase)",
        "ex": "I always try to avoid driving during the rush hour."
    },
    {
        "num": 179,
        "en": "Packed like sardines",
        "vi": "Đông nghẹt (như cá mòi)",
        "ipa": "/pækt laɪk sɑːˈdiːnz/",
        "pos": "(idiom)",
        "ex": "The bus was packed like sardines this morning."
    },
    {
        "num": 180,
        "en": "Catch the bus",
        "vi": "Bắt xe buýt",
        "ipa": "/kætʃ ðə bʌs/",
        "pos": "(v phrase)",
        "ex": "I have to walk quickly to catch the bus at seven o'clock."
    },
    {
        "num": 181,
        "en": "Miss the bus",
        "vi": "Lỡ xe buýt",
        "ipa": "/mɪs ðə bʌs/",
        "pos": "(v phrase)",
        "ex": "If I oversleep, I will definitely miss the bus."
    },
    {
        "num": 182,
        "en": "Environmentally friendly",
        "vi": "Thân thiện với môi trường",
        "ipa": "/ɪnˌvaɪ.rənˈmen.təl.i ˈfrend.li/",
        "pos": "(adj)",
        "ex": "Riding a bicycle is an environmentally friendly way to travel."
    },
    {
        "num": 183,
        "en": "Cost-effective",
        "vi": "Tiết kiệm chi phí",
        "ipa": "/kɒst ɪˈfek.tɪv/",
        "pos": "(adj)",
        "ex": "Taking the train is a very cost-effective option for students."
    },
    {
        "num": 184,
        "en": "Flexible",
        "vi": "Linh hoạt",
        "ipa": "/ˈflek.sə.bəl/",
        "pos": "(adj)",
        "ex": "Using my own motorbike is much more flexible than taking the bus."
    },
    {
        "num": 185,
        "en": "Find a parking space",
        "vi": "Tìm chỗ đậu xe",
        "ipa": "/faɪnd ə ˈpɑː.kɪŋ speɪs/",
        "pos": "(v phrase)",
        "ex": "It is very difficult to find a parking space in the city centre."
    },
    {
        "num": 186,
        "en": "Rely on",
        "vi": "Phụ thuộc vào",
        "ipa": "/rɪˈlaɪ ɒn/",
        "pos": "(v phrase)",
        "ex": "Many people in my town rely on buses to get to work every day."
    },
    {
        "num": 187,
        "en": "Air pollution",
        "vi": "Ô nhiễm không khí",
        "ipa": "/eər pəˈluː.ʃən/",
        "pos": "(n phrase)",
        "ex": "The huge number of private cars causes a lot of air pollution."
    },
    {
        "num": 188,
        "en": "Exhaust fumes",
        "vi": "Khói thải từ xe cộ",
        "ipa": "/ɪɡˈzɔːst fjuːmz/",
        "pos": "(n phrase)",
        "ex": "The exhaust fumes from motorbikes make the air quality very poor."
    },
    {
        "num": 189,
        "en": "Convenient way to travel",
        "vi": "Cách di chuyển thuận tiện",
        "ipa": "/kənˈviː.ni.ənt weɪ tu ˈtræv.əl/",
        "pos": "(n phrase)",
        "ex": "The underground train is a fast and convenient way to travel."
    },
    {
        "num": 190,
        "en": "Ride a motorbike",
        "vi": "Lái xe máy",
        "ipa": "/raɪd ə ˈməʊ.tə.baɪk/",
        "pos": "(v phrase)",
        "ex": "In Vietnam, most people learn to ride a motorbike when they are young."
    },
    {
        "num": 191,
        "en": "Book a Grab/taxi",
        "vi": "Đặt xe công nghệ/taxi",
        "ipa": "/bʊk ə ɡræb/",
        "pos": "(v phrase)",
        "ex": "When it rains heavily, I usually book a taxi to go home."
    },
    {
        "num": 192,
        "en": "It depends on",
        "vi": "Nó còn tùy vào",
        "ipa": "/ɪt dɪˈpendz ɒn/",
        "pos": "(v phrase)",
        "ex": "I might go to the park, but it depends on the weather."
    },
    {
        "num": 193,
        "en": "As much as possible",
        "vi": "Nhiều nhất có thể",
        "ipa": "/æz mʌtʃ æz ˈpɒs.ə.bəl/",
        "pos": "(phrase)",
        "ex": "I try to speak English as much as possible in class."
    },
    {
        "num": 194,
        "en": "Work around the clock",
        "vi": "Làm việc/học tập suốt ngày đêm",
        "ipa": "/wɜːk əˈraʊnd ðə klɒk/",
        "pos": "(idiom)",
        "ex": "The doctors worked around the clock to help the patients."
    },
    {
        "num": 195,
        "en": "Do wonders for",
        "vi": "Có lợi ích tuyệt vời/kỳ diệu cho...",
        "ipa": "/duː ˈwʌn.dəz fɔːr/",
        "pos": "(idiom)",
        "ex": "Eating fresh vegetables can do wonders for your overall health."
    },
    {
        "num": 196,
        "en": "Every other day",
        "vi": "Cách một ngày (2 ngày 1 lần)",
        "ipa": "/ˈev.ri ˈʌð.ər deɪ/",
        "pos": "(adv. phrase)",
        "ex": "I go to the local swimming pool every other day to stay fit."
    },
    {
        "num": 197,
        "en": "A creature of habit",
        "vi": "Người sống theo thói quen",
        "ipa": "/ə ˈkriː.tʃər əv ˈhæb.ɪt/",
        "pos": "(idiom)",
        "ex": "I always have tea at four o'clock because I am a creature of habit."
    },
    {
        "num": 198,
        "en": "Burn the candle at both ends",
        "vi": "Vắt kiệt sức lực (thức khuya dậy sớm)",
        "ipa": "/bɜːn ðə ˈkæn.dəl æt bəʊθ endz/",
        "pos": "(idiom)",
        "ex": "You will get sick if you keep burning the candle at both ends."
    },
    {
        "num": 199,
        "en": "Hit the sack",
        "vi": "Đi ngủ",
        "ipa": "/hɪt ðə sæk/",
        "pos": "(idiom)",
        "ex": "I am really tired from studying, so I am going to hit the sack early tonight."
    },
    {
        "num": 200,
        "en": "Early bird",
        "vi": "Người hay dậy sớm",
        "ipa": "/ˈɜː.li bɜːd/",
        "pos": "(n)",
        "ex": "Being an early bird means I get a lot of things done before noon."
    },
    {
        "num": 201,
        "en": "Sleep in / Have a lie-in",
        "vi": "Ngủ nướng (chủ động)",
        "ipa": "/sliːp ɪn/",
        "pos": "(v. phrase)",
        "ex": "On Sundays, I usually sleep in until 9 o'clock."
    },
    {
        "num": 202,
        "en": "Get out of bed",
        "vi": "Bước ra khỏi giường",
        "ipa": "/ɡet aʊt əv bed/",
        "pos": "(v. phrase)",
        "ex": "It is so hard to get out of bed on a cold winter morning."
    },
    {
        "num": 203,
        "en": "Make the bed",
        "vi": "Gấp chăn màn, dọn giường",
        "ipa": "/meɪk ðə bed/",
        "pos": "(v. phrase)",
        "ex": "My mother always tells me to make the bed before leaving for school."
    },
    {
        "num": 204,
        "en": "Personal hygiene",
        "vi": "Vệ sinh cá nhân",
        "ipa": "/...ˈhaɪ.dʒiːn/",
        "pos": "(n. phrase)",
        "ex": "Teaching children about personal hygiene is very important."
    },
    {
        "num": 205,
        "en": "Brush my teeth",
        "vi": "Đánh răng",
        "ipa": "/brʌʃ maɪ tiːθ/",
        "pos": "(v. phrase)",
        "ex": "I brush my teeth twice a day, morning and night."
    },
    {
        "num": 206,
        "en": "Wash my face",
        "vi": "Rửa mặt",
        "ipa": "/wɒʃ maɪ feɪs/",
        "pos": "(v. phrase)",
        "ex": "I wash my face with cold water to wake myself up."
    },
    {
        "num": 207,
        "en": "Do my skincare routine",
        "vi": "Chăm sóc da",
        "ipa": "/...ˈskɪn.keər.../",
        "pos": "(v. phrase)",
        "ex": "Every evening, I spend about fifteen minutes doing my skincare routine."
    },
    {
        "num": 208,
        "en": "Get dressed",
        "vi": "Mặc quần áo",
        "ipa": "/ɡet drest/",
        "pos": "(v. phrase)",
        "ex": "I usually get dressed quickly so I can have breakfast."
    },
    {
        "num": 209,
        "en": "Put on my uniform",
        "vi": "Mặc đồng phục",
        "ipa": "/...ˈjuː.nɪ.fɔːm/",
        "pos": "(v. phrase)",
        "ex": "At my school, all students must put on their uniform every day."
    },
    {
        "num": 210,
        "en": "Pack my bag",
        "vi": "Soạn cặp sách",
        "ipa": "/pæk maɪ bæɡ/",
        "pos": "(v. phrase)",
        "ex": "I try to pack my bag the night before to save time in the morning."
    },
    {
        "num": 211,
        "en": "Have a hearty breakfast",
        "vi": "Ăn một bữa sáng thịnh soạn",
        "ipa": "/...ˈhɑː.ti.../",
        "pos": "(v. phrase)",
        "ex": "Before a big exam, I always have a hearty breakfast."
    },
    {
        "num": 212,
        "en": "Sip a cup of coffee",
        "vi": "Nhâm nhi tách cà phê",
        "ipa": "/sɪp ə kʌp əv.../",
        "pos": "(v. phrase)",
        "ex": "I love to sip a cup of coffee while reading the news."
    },
    {
        "num": 213,
        "en": "Feel refreshed",
        "vi": "Cảm thấy sảng khoái",
        "ipa": "/fiːl rɪˈfreʃt/",
        "pos": "(v. phrase)",
        "ex": "After a hot shower, I always feel refreshed and ready."
    },
    {
        "num": 214,
        "en": "Kick start the day",
        "vi": "Khởi động ngày mới",
        "ipa": "/kɪk stɑːt ðə deɪ/",
        "pos": "(v. phrase)",
        "ex": "A quick run is a great way to kick start the day."
    },
    {
        "num": 215,
        "en": "Leave the house",
        "vi": "Rời khỏi nhà",
        "ipa": "/liːv ðə haʊs/",
        "pos": "(v. phrase)",
        "ex": "I usually leave the house at half past seven."
    },
    {
        "num": 216,
        "en": "Commute to school",
        "vi": "Di chuyển đến trường",
        "ipa": "/kəˈmjuːt tu skuːl/",
        "pos": "(v. phrase)",
        "ex": "It takes me about twenty minutes to commute to school."
    },
    {
        "num": 217,
        "en": "Get stuck in traffic",
        "vi": "Bị kẹt xe",
        "ipa": "/...stʌk ɪn ˈtræf.ɪk/",
        "pos": "(v. phrase)",
        "ex": "If I leave late, I will definitely get stuck in traffic."
    },
    {
        "num": 218,
        "en": "Attend classes",
        "vi": "Tham dự các tiết học",
        "ipa": "/əˈtend klɑːsɪz/",
        "pos": "(v. phrase)",
        "ex": "I have to attend classes from 8 AM to 5 PM every weekday."
    },
    {
        "num": 219,
        "en": "Pay attention to lectures",
        "vi": "Chú ý nghe giảng",
        "ipa": "/...ˈlek.tʃərz/",
        "pos": "(v. phrase)",
        "ex": "It is important to pay attention to lectures if you want good marks."
    },
    {
        "num": 220,
        "en": "Take notes",
        "vi": "Ghi chép bài",
        "ipa": "/teɪk nəʊts/",
        "pos": "(v. phrase)",
        "ex": "I always take notes during history lessons because there are so many dates."
    },
    {
        "num": 221,
        "en": "Meet deadlines",
        "vi": "Kịp hạn chót",
        "ipa": "/miːt ˈded.laɪnz/",
        "pos": "(v. phrase)",
        "ex": "University students must learn how to meet deadlines for their projects."
    },
    {
        "num": 222,
        "en": "Submit assignments",
        "vi": "Nộp bài tập",
        "ipa": "/səbˈmɪt.../",
        "pos": "(v. phrase)",
        "ex": "We have to submit assignments online through the school portal."
    },
    {
        "num": 223,
        "en": "Group discussion",
        "vi": "Thảo luận nhóm",
        "ipa": "/ɡruːp dɪˈskʌʃ.ən/",
        "pos": "(n. phrase)",
        "ex": "I enjoy group discussions because I can learn from my friends."
    },
    {
        "num": 224,
        "en": "Grab a snack",
        "vi": "Ăn quà vặt",
        "ipa": "/ɡræb ə snæk/",
        "pos": "(v. phrase)",
        "ex": "During the break, I usually grab a snack from the shop."
    },
    {
        "num": 225,
        "en": "Canteen / Cafeteria",
        "vi": "Căn tin trường",
        "ipa": "/kænˈtiːn/",
        "pos": "(n)",
        "ex": "The food in our school canteen is actually quite delicious."
    },
    {
        "num": 226,
        "en": "Chat with friends",
        "vi": "Tán gẫu với bạn bè",
        "ipa": "/tʃæt wɪð frendz/",
        "pos": "(v. phrase)",
        "ex": "I like to chat with friends in the school yard during lunchtime."
    },
    {
        "num": 227,
        "en": "Take a nap / Siesta",
        "vi": "Ngủ trưa một chút",
        "ipa": "/teɪk ə næp/",
        "pos": "(v. phrase)",
        "ex": "In Vietnam, many people take a nap after lunch to rest."
    },
    {
        "num": 228,
        "en": "Stay focused",
        "vi": "Giữ sự tập trung",
        "ipa": "/steɪ ˈfəʊ.kəst/",
        "pos": "(v. phrase)",
        "ex": "Listening to instrumental music helps me stay focused on my work."
    },
    {
        "num": 229,
        "en": "Get distracted",
        "vi": "Bị xao nhãng",
        "ipa": "/ɡet dɪˈstræk.tɪd/",
        "pos": "(v. phrase)",
        "ex": "I easily get distracted if my phone is on my desk."
    },
    {
        "num": 230,
        "en": "Extra classes",
        "vi": "Lớp học thêm",
        "ipa": "/ˈek.strə klɑːsɪz/",
        "pos": "(n. phrase)",
        "ex": "Many students in my country go to extra classes after school."
    },
    {
        "num": 231,
        "en": "Cram for exams",
        "vi": "Học nhồi nhét cho kỳ thi",
        "ipa": "/kræm fɔːr.../",
        "pos": "(v. phrase)",
        "ex": "I prefer studying a little every day rather than cramming for exams."
    },
    {
        "num": 232,
        "en": "Mock test",
        "vi": "Bài thi thử",
        "ipa": "/mɒk test/",
        "pos": "(n. phrase)",
        "ex": "We had a mock test last week to prepare for the final."
    },
    {
        "num": 233,
        "en": "High pressure",
        "vi": "Áp lực cao",
        "ipa": "/haɪ ˈpreʃ.ər/",
        "pos": "(n. phrase)",
        "ex": "Students often face high pressure from their parents to get good grades."
    },
    {
        "num": 234,
        "en": "Self-study",
        "vi": "Tự học",
        "ipa": "/self ˈstʌd.i/",
        "pos": "(n / v)",
        "ex": "Self-study is an important skill for university students."
    },
    {
        "num": 235,
        "en": "Go straight home",
        "vi": "Về thẳng nhà",
        "ipa": "/ɡəʊ streɪt həʊm/",
        "pos": "(v. phrase)",
        "ex": "After extra classes, I usually go straight home because I'm tired."
    },
    {
        "num": 236,
        "en": "Help with house chores",
        "vi": "Giúp làm việc nhà",
        "ipa": "/...haʊs tʃɔːrz/",
        "pos": "(v. phrase)",
        "ex": "I try to help with house chores when I have some free time."
    },
    {
        "num": 237,
        "en": "Cook dinner",
        "vi": "Nấu bữa tối",
        "ipa": "/kʊk ˈdɪn.ər/",
        "pos": "(v. phrase)",
        "ex": "My father often helps to cook dinner on the weekends."
    },
    {
        "num": 238,
        "en": "Set the table",
        "vi": "Dọn bàn ăn",
        "ipa": "/set ðə ˈteɪ.bəl/",
        "pos": "(v. phrase)",
        "ex": "My little brother's job is to set the table before we eat."
    },
    {
        "num": 239,
        "en": "Do the washing up",
        "vi": "Rửa bát",
        "ipa": "/...ˈwɒʃ.ɪŋ ʌp/",
        "pos": "(v. phrase)",
        "ex": "I really hate doing the washing up, so we bought a dishwasher."
    },
    {
        "num": 240,
        "en": "Take out the trash",
        "vi": "Đổ rác",
        "ipa": "/...træʃ/",
        "pos": "(v. phrase)",
        "ex": "Don't forget to take out the trash before you go to bed."
    },
    {
        "num": 241,
        "en": "Feed the pets",
        "vi": "Cho thú cưng ăn",
        "ipa": "/fiːd ðə pets/",
        "pos": "(v. phrase)",
        "ex": "The first thing I do in the morning is feed the pets."
    },
    {
        "num": 242,
        "en": "Watch the news",
        "vi": "Xem thời sự",
        "ipa": "/wɒtʃ ðə njuːz/",
        "pos": "(v. phrase)",
        "ex": "My parents always watch the news while having dinner."
    },
    {
        "num": 243,
        "en": "Surf the internet",
        "vi": "Lướt web",
        "ipa": "/sɜːf ðə ˈɪn.tə.net/",
        "pos": "(v. phrase)",
        "ex": "I often surf the internet to find information for my projects."
    },
    {
        "num": 244,
        "en": "Check notifications",
        "vi": "Kiểm tra thông báo",
        "ipa": "/...ˌnəʊ.tɪ.fɪˈkeɪ.../",
        "pos": "(v. phrase)",
        "ex": "I check notifications on my phone too many times a day."
    },
    {
        "num": 245,
        "en": "Binge-watch movies",
        "vi": "Cày phim liên tục",
        "ipa": "/bɪndʒ wɒtʃ.../",
        "pos": "(v. phrase)",
        "ex": "When I am stressed, I love to binge-watch movies on Netflix."
    },
    {
        "num": 246,
        "en": "Listen to music",
        "vi": "Nghe nhạc",
        "ipa": "/ˈlɪs.ən tu.../",
        "pos": "(v. phrase)",
        "ex": "I listen to music on my way to school to relax."
    },
    {
        "num": 247,
        "en": "Read a book",
        "vi": "Đọc sách",
        "ipa": "/riːd ə bʊk/",
        "pos": "(v. phrase)",
        "ex": "I try to read a book for thirty minutes before sleeping."
    },
    {
        "num": 248,
        "en": "Do homework",
        "vi": "Làm bài tập về nhà",
        "ipa": "/duː ˈhəʊm.wɜːk/",
        "pos": "(v. phrase)",
        "ex": "I usually do my homework immediately after I get home."
    },
    {
        "num": 249,
        "en": "Revise for the exam",
        "vi": "Ôn thi",
        "ipa": "/rɪˈvaɪz fɔːr.../",
        "pos": "(v. phrase)",
        "ex": "I need to start revising for the final exams next month."
    },
    {
        "num": 250,
        "en": "Exhausted / Worn out",
        "vi": "Kiệt sức",
        "ipa": "/ɪɡˈzɔː.stɪd/",
        "pos": "(adj)",
        "ex": "After playing football for two hours, I was completely exhausted."
    },
    {
        "num": 251,
        "en": "Sleepy / Drowsy",
        "vi": "Buồn ngủ, lơ mơ",
        "ipa": "/ˈsliː.pi/",
        "pos": "(adj)",
        "ex": "I always feel sleepy after eating a heavy lunch."
    },
    {
        "num": 252,
        "en": "Chill out",
        "vi": "Thư giãn",
        "ipa": "/tʃɪl aʊt/",
        "pos": "(phrasal v)",
        "ex": "On Saturday nights, I just chill out on the sofa and watch TV."
    },
    {
        "num": 253,
        "en": "Take a hot shower",
        "vi": "Tắm nước nóng",
        "ipa": "/...hɒt ʃaʊər/",
        "pos": "(v. phrase)",
        "ex": "Taking a hot shower helps my muscles relax after a workout."
    },
    {
        "num": 254,
        "en": "Personal reflection",
        "vi": "Tự ngẫm nghĩ lại",
        "ipa": "/...rɪˈflek.ʃən/",
        "pos": "(n. phrase)",
        "ex": "I write in a journal every night for some personal reflection."
    },
    {
        "num": 255,
        "en": "Go to bed",
        "vi": "Đi ngủ",
        "ipa": "/ɡəʊ tu bed/",
        "pos": "(v. phrase)",
        "ex": "I usually go to bed around 11 PM to get enough sleep."
    },
    {
        "num": 256,
        "en": "Insomnia",
        "vi": "Chứng mất ngủ",
        "ipa": "/ɪnˈsɒm.ni.ə/",
        "pos": "(n)",
        "ex": "Drinking too much coffee can lead to insomnia."
    },
    {
        "num": 257,
        "en": "Beauty sleep",
        "vi": "Giấc ngủ để đẹp da",
        "ipa": "/ˈbjuː.ti sliːp/",
        "pos": "(n. phrase)",
        "ex": "I need to get my beauty sleep before the party tomorrow."
    },
    {
        "num": 258,
        "en": "Busy schedule",
        "vi": "Lịch trình bận rộn",
        "ipa": "/ˈbɪz.i ˈʃed.juːl/",
        "pos": "(n. phrase)",
        "ex": "Despite his busy schedule, he always finds time for his family."
    },
    {
        "num": 259,
        "en": "Monotonous",
        "vi": "Đơn điệu",
        "ipa": "/məˈnɒt.ən.əs/",
        "pos": "(adj)",
        "ex": "Working on an assembly line can be very monotonous."
    },
    {
        "num": 260,
        "en": "Repetitive",
        "vi": "Lặp đi lặp lại",
        "ipa": "/rɪˈpet.ə.tɪv/",
        "pos": "(adj)",
        "ex": "My part-time job involves a lot of repetitive tasks."
    },
    {
        "num": 261,
        "en": "Fixed schedule",
        "vi": "Lịch trình cố định",
        "ipa": "/fɪkst ˈʃed.juːl/",
        "pos": "(n. phrase)",
        "ex": "Teachers generally work on a very fixed schedule."
    },
    {
        "num": 262,
        "en": "Flexible timetable",
        "vi": "Thời gian biểu linh hoạt",
        "ipa": "/ˈflek.sə.bəl.../",
        "pos": "(n. phrase)",
        "ex": "I love freelancing because it offers a flexible timetable."
    },
    {
        "num": 263,
        "en": "Organize my time",
        "vi": "Sắp xếp thời gian",
        "ipa": "/...ɔː.ɡən.aɪz.../",
        "pos": "(v. phrase)",
        "ex": "Using a planner helps me organize my time more efficiently."
    },
    {
        "num": 264,
        "en": "Time management",
        "vi": "Quản lý thời gian",
        "ipa": "/...ˈmæn.ɪdʒ.mənt/",
        "pos": "(n. phrase)",
        "ex": "Good time management is essential for success in university."
    },
    {
        "num": 265,
        "en": "Stick to a plan",
        "vi": "Tuân thủ kế hoạch",
        "ipa": "/stɪk tu ə plæn/",
        "pos": "(v. phrase)",
        "ex": "It's easy to make a plan, but harder to stick to it."
    },
    {
        "num": 266,
        "en": "Prioritize tasks",
        "vi": "Ưu tiên công việc",
        "ipa": "/praɪˈɒr.ɪ.taɪz.../",
        "pos": "(v. phrase)",
        "ex": "I always prioritize tasks that have the nearest deadline."
    },
    {
        "num": 267,
        "en": "Balance work and life",
        "vi": "Cân bằng cuộc sống",
        "ipa": "/ˈbæl.əns.../",
        "pos": "(v. phrase)",
        "ex": "It can be challenging for parents to balance work and life."
    },
    {
        "num": 268,
        "en": "Every single day",
        "vi": "Mỗi ngày (nhấn mạnh)",
        "ipa": "/...ˈsɪŋ.ɡəl deɪ/",
        "pos": "(adv phrase)",
        "ex": "He practises the guitar for two hours every single day."
    },
    {
        "num": 269,
        "en": "Make a habit of...",
        "vi": "Tạo thói quen làm gì",
        "ipa": "/meɪk ə ˈhæb.ɪt.../",
        "pos": "(v. phrase)",
        "ex": "I am trying to make a habit of drinking more water."
    },
    {
        "num": 270,
        "en": "Break a bad habit",
        "vi": "Từ bỏ thói quen xấu",
        "ipa": "/breɪk ə bæd.../",
        "pos": "(v. phrase)",
        "ex": "It takes time and patience to break a bad habit."
    },
    {
        "num": 271,
        "en": "Stay in bed",
        "vi": "Nằm lì trên giường",
        "ipa": "/steɪ ɪn bed/",
        "pos": "(v. phrase)",
        "ex": "When I am ill, I just want to stay in bed all day."
    },
    {
        "num": 272,
        "en": "Unwind / Wind down",
        "vi": "Thư giãn, xả hơi",
        "ipa": "/ʌnˈwaɪnd/",
        "pos": "(v)",
        "ex": "I usually unwind by watching a comedy show."
    },
    {
        "num": 273,
        "en": "Put my feet up",
        "vi": "Nghỉ ngơi (gác chân lên ghế)",
        "ipa": "/pʊt maɪ fiːt ʌp/",
        "pos": "(idiom)",
        "ex": "After a long walk, I just want to sit down and put my feet up."
    },
    {
        "num": 274,
        "en": "Chill out at home",
        "vi": "Thư giãn ở nhà",
        "ipa": "/tʃɪl aʊt æt həʊm/",
        "pos": "(v. phrase)",
        "ex": "I prefer to chill out at home rather than go to a crowded party."
    },
    {
        "num": 275,
        "en": "Have a lazy day",
        "vi": "Có một ngày lười biếng",
        "ipa": "/hæv ə ˈleɪ.zi deɪ/",
        "pos": "(v. phrase)",
        "ex": "Sometimes it is nice to just have a lazy day and do nothing."
    },
    {
        "num": 276,
        "en": "Catch up on sleep",
        "vi": "Ngủ bù (cho cả tuần thiếu ngủ)",
        "ipa": "/kætʃ ʌp ɒn sliːp/",
        "pos": "(v. phrase)",
        "ex": "I plan to catch up on sleep this weekend."
    },
    {
        "num": 277,
        "en": "Read a novel",
        "vi": "Đọc tiểu thuyết",
        "ipa": "/riːd ə ˈnɒv.əl/",
        "pos": "(v. phrase)",
        "ex": "I love to read a novel before going to sleep."
    },
    {
        "num": 278,
        "en": "Listen to my playlist",
        "vi": "Nghe danh sách nhạc yêu thích",
        "ipa": "/ˈlɪs.ən tu maɪ ˈpleɪ.lɪst/",
        "pos": "(v. phrase)",
        "ex": "While studying, I usually listen to my playlist of acoustic music."
    },
    {
        "num": 279,
        "en": "Scroll through TikTok",
        "vi": "Lướt TikTok/Mạng xã hội",
        "ipa": "/skrəʊl θruː.../",
        "pos": "(v. phrase)",
        "ex": "I often waste an hour just scrolling through TikTok in bed."
    },
    {
        "num": 280,
        "en": "Play video games",
        "vi": "Chơi điện tử",
        "ipa": "/pleɪ ˈvɪd.i.əʊ ɡeɪmz/",
        "pos": "(v. phrase)",
        "ex": "My younger brother loves to play video games with his friends online."
    },
    {
        "num": 281,
        "en": "Order takeaway food",
        "vi": "Gọi đồ ăn mang về nhà",
        "ipa": "/ˈɔː.də ˈteɪk.ə.weɪ fuːd/",
        "pos": "(v. phrase)",
        "ex": "When we are too tired to cook, we usually order takeaway food."
    },
    {
        "num": 282,
        "en": "Cook a special meal",
        "vi": "Nấu một bữa ăn đặc biệt",
        "ipa": "/kʊk ə ˈspeʃ.əl miːl/",
        "pos": "(v. phrase)",
        "ex": "I want to cook a special meal for my mother's birthday."
    },
    {
        "num": 283,
        "en": "Do some gardening",
        "vi": "Làm vườn",
        "ipa": "/duː sʌm ˈɡɑː.dən.ɪŋ/",
        "pos": "(v. phrase)",
        "ex": "My grandfather loves to do some gardening on Sunday mornings."
    },
    {
        "num": 284,
        "en": "Take a hot bath",
        "vi": "Tắm bồn nước nóng",
        "ipa": "/teɪk ə hɒt bɑːθ/",
        "pos": "(v. phrase)",
        "ex": "There is nothing better than to take a hot bath after a long day."
    },
    {
        "num": 285,
        "en": "Do yoga / Meditate",
        "vi": "Tập yoga / Thiền",
        "ipa": "/duː ˈjəʊ.ɡə/ - /ˈmed.ɪ.teɪt/",
        "pos": "(v. phrase)",
        "ex": "I meditate for ten minutes every morning to clear my mind."
    },
    {
        "num": 286,
        "en": "Invite friends over",
        "vi": "Mời bạn bè qua nhà chơi",
        "ipa": "/ɪnˈvaɪt frendz ˈəʊ.vər/",
        "pos": "(v. phrase)",
        "ex": "I often invite friends over to watch movies at the weekend."
    },
    {
        "num": 287,
        "en": "Host a small party",
        "vi": "Tổ chức tiệc nhỏ",
        "ipa": "/həʊst ə smɔːl ˈpɑː.ti/",
        "pos": "(v. phrase)",
        "ex": "We are going to host a small party to celebrate our graduation."
    },
    {
        "num": 288,
        "en": "Spend quality time",
        "vi": "Dành thời gian chất lượng",
        "ipa": "/spend ˈkwɒl.ə.ti taɪm/",
        "pos": "(v. phrase)",
        "ex": "It is important to spend quality time with your children."
    },
    {
        "num": 289,
        "en": "Play board games",
        "vi": "Chơi trò chơi bàn cờ (cờ vua...)",
        "ipa": "/pleɪ bɔːd ɡeɪmz/",
        "pos": "(v. phrase)",
        "ex": "During the holidays, my family loves to play board games together."
    },
    {
        "num": 290,
        "en": "Go out with friends",
        "vi": "Đi chơi với bạn",
        "ipa": "/ɡəʊ aʊt wɪð frendz/",
        "pos": "(v. phrase)",
        "ex": "I usually go out with friends on Saturday evenings."
    },
    {
        "num": 291,
        "en": "Hang out / Hang around",
        "vi": "Tụ tập, đi chơi lang thang",
        "ipa": "/hæŋ aʊt/",
        "pos": "(phrasal v)",
        "ex": "Teenagers here like to hang out at the local shopping mall."
    },
    {
        "num": 292,
        "en": "Hit the town",
        "vi": "Đi xuống phố chơi (buổi tối)",
        "ipa": "/hɪt ðə taʊn/",
        "pos": "(idiom)",
        "ex": "After passing the exam, we decided to hit the town to celebrate."
    },
    {
        "num": 293,
        "en": "Go for a coffee",
        "vi": "Đi uống cà phê",
        "ipa": "/ɡəʊ fɔːr ə ˈkɒf.i/",
        "pos": "(v. phrase)",
        "ex": "Let's go for a coffee this afternoon to catch up."
    },
    {
        "num": 294,
        "en": "Check out a new cafe",
        "vi": "Thử một quán cà phê mới",
        "ipa": "/tʃek aʊt ə njuː ˈkæf.eɪ/",
        "pos": "(v. phrase)",
        "ex": "I want to check out a new cafe that just opened near my house."
    },
    {
        "num": 295,
        "en": "Go to the cinema",
        "vi": "Đi xem phim",
        "ipa": "/ɡəʊ tu ðə ˈsɪn.ə.mə/",
        "pos": "(v. phrase)",
        "ex": "My friends and I go to the cinema at least once a month."
    },
    {
        "num": 296,
        "en": "Dine out / Eat out",
        "vi": "Ăn tiệm/nhà hàng",
        "ipa": "/daɪn aʊt/",
        "pos": "(v. phrase)",
        "ex": "We rarely dine out because my mother is an excellent cook."
    },
    {
        "num": 297,
        "en": "Go shopping",
        "vi": "Đi mua sắm",
        "ipa": "/ɡəʊ ˈʃɒp.ɪŋ/",
        "pos": "(v. phrase)",
        "ex": "My sister loves to go shopping for clothes when she has free time."
    },
    {
        "num": 298,
        "en": "Do window shopping",
        "vi": "Đi ngắm đồ (không mua)",
        "ipa": "/duː ˈwɪn.dəʊ ˈʃɒp.ɪŋ/",
        "pos": "(v. phrase)",
        "ex": "Even when I have no money, I still enjoy doing window shopping."
    },
    {
        "num": 299,
        "en": "Go for a drive",
        "vi": "Lái xe đi dạo",
        "ipa": "/ɡəʊ fɔːr ə draɪv/",
        "pos": "(v. phrase)",
        "ex": "On a sunny day, we often go for a drive along the coast."
    },
    {
        "num": 300,
        "en": "Get some fresh air",
        "vi": "Hít thở không khí trong lành",
        "ipa": "/ɡet sʌm freʃ eər/",
        "pos": "(v. phrase)",
        "ex": "I opened the window to get some fresh air into the room."
    },
    {
        "num": 301,
        "en": "Visit relatives",
        "vi": "Thăm họ hàng",
        "ipa": "/ˈvɪz.ɪt ˈrel.ə.tɪvz/",
        "pos": "(v. phrase)",
        "ex": "During the summer holidays, I usually visit relatives in the countryside."
    },
    {
        "num": 302,
        "en": "Go to the park",
        "vi": "Đi công viên",
        "ipa": "/ɡəʊ tu ðə pɑːk/",
        "pos": "(v. phrase)",
        "ex": "I like to go to the park on Sunday mornings to relax and read a book."
    },
    {
        "num": 303,
        "en": "Have a picnic",
        "vi": "Đi dã ngoại",
        "ipa": "/hæv ə ˈpɪk.nɪk/",
        "pos": "(v. phrase)",
        "ex": "If the weather is nice, we will have a picnic by the lake."
    },
    {
        "num": 304,
        "en": "Go sightseeing",
        "vi": "Đi ngắm cảnh",
        "ipa": "/ɡəʊ ˈsaɪt.siː.ɪŋ/",
        "pos": "(v. phrase)",
        "ex": "When visiting a new city, I always go sightseeing to see the famous landmarks."
    },
    {
        "num": 305,
        "en": "Take a day trip",
        "vi": "Đi chơi trong ngày (đi xa chút)",
        "ipa": "/teɪk ə deɪ trɪp/",
        "pos": "(v. phrase)",
        "ex": "Last weekend, my friends and I took a day trip to a nearby island."
    },
    {
        "num": 306,
        "en": "Visit a museum",
        "vi": "Thăm bảo tàng",
        "ipa": "/ˈvɪz.ɪt ə mjuːˈziː.əm/",
        "pos": "(v. phrase)",
        "ex": "I decided to visit a museum to learn more about local history."
    },
    {
        "num": 307,
        "en": "Go karaokeing",
        "vi": "Đi hát karaoke",
        "ipa": "/ɡəʊ ˌkær.iˈəʊ.ki.ɪŋ/",
        "pos": "(v. phrase)",
        "ex": "To celebrate my birthday, we went karaokeing and sang all night."
    },
    {
        "num": 308,
        "en": "Play sports",
        "vi": "Chơi thể thao",
        "ipa": "/pleɪ spɔːts/",
        "pos": "(v. phrase)",
        "ex": "I usually play sports like badminton or football after school."
    },
    {
        "num": 309,
        "en": "Go swimming",
        "vi": "Đi bơi",
        "ipa": "/ɡəʊ ˈswɪm.ɪŋ/",
        "pos": "(v. phrase)",
        "ex": "In the summer, I often go swimming to cool down."
    },
    {
        "num": 310,
        "en": "Paint the town red",
        "vi": "Đi quẩy tưng bừng (tiệc tùng)",
        "ipa": "/peɪnt ðə taʊn red/",
        "pos": "(idiom)",
        "ex": "After finishing our final exams, we went out to paint the town red."
    },
    {
        "num": 311,
        "en": "Attend extra classes",
        "vi": "Đi học thêm",
        "ipa": "/əˈtend ˈek.strə klɑːsɪz/",
        "pos": "(v. phrase)",
        "ex": "I have to attend extra classes for Maths and English at the weekend."
    },
    {
        "num": 312,
        "en": "Have private tuition",
        "vi": "Học gia sư riêng",
        "ipa": "/hæv ˈpraɪ.vət tjuːˈɪʃ.ən/",
        "pos": "(v. phrase)",
        "ex": "My parents arranged for me to have private tuition in physics."
    },
    {
        "num": 313,
        "en": "Prepare for exams",
        "vi": "Chuẩn bị cho kỳ thi",
        "ipa": "/prɪˈpeər fɔːr ɪɡˈzæmz/",
        "pos": "(v. phrase)",
        "ex": "I am spending most of my evenings preparing for exams at the moment."
    },
    {
        "num": 314,
        "en": "Revise lessons",
        "vi": "Ôn lại bài học",
        "ipa": "/rɪˈvaɪz ˈles.ənz/",
        "pos": "(v. phrase)",
        "ex": "It is important to revise lessons regularly so you do not forget them."
    },
    {
        "num": 315,
        "en": "Review my notes",
        "vi": "Xem lại ghi chép",
        "ipa": "/rɪˈvjuː maɪ nəʊts/",
        "pos": "(v. phrase)",
        "ex": "Before the test, I quickly reviewed my notes from the lecture."
    },
    {
        "num": 316,
        "en": "Complete assignments",
        "vi": "Hoàn thành bài tập lớn",
        "ipa": "/kəmˈpliːt əˈsaɪn.mənts/",
        "pos": "(v. phrase)",
        "ex": "I always try to complete assignments on the same day they are given."
    },
    {
        "num": 317,
        "en": "Finish homework",
        "vi": "Làm xong bài tập về nhà",
        "ipa": "/ˈfɪn.ɪʃ ˈhəʊm.wɜːk/",
        "pos": "(v. phrase)",
        "ex": "I cannot go out to play until I finish homework."
    },
    {
        "num": 318,
        "en": "Catch up on schoolwork",
        "vi": "Làm bù bài vở",
        "ipa": "/kætʃ ʌp ɒn ˈskuːl.wɜːk/",
        "pos": "(v. phrase)",
        "ex": "I was ill last week, so I need to catch up on schoolwork this weekend."
    },
    {
        "num": 319,
        "en": "Do house chores",
        "vi": "Làm việc nhà",
        "ipa": "/duː haʊs tʃɔːrz/",
        "pos": "(v. phrase)",
        "ex": "Everyone in my family shares the responsibility to do house chores."
    },
    {
        "num": 320,
        "en": "Tidy up my room",
        "vi": "Dọn dẹp phòng",
        "ipa": "/ˈtaɪ.di ʌp maɪ ruːm/",
        "pos": "(v. phrase)",
        "ex": "My mum always tells me to tidy up my room before guests arrive."
    },
    {
        "num": 321,
        "en": "Clean the house",
        "vi": "Lau dọn nhà cửa",
        "ipa": "/kliːn ðə haʊs/",
        "pos": "(v. phrase)",
        "ex": "We usually clean the house thoroughly before the New Year."
    },
    {
        "num": 322,
        "en": "Go grocery shopping",
        "vi": "Đi siêu thị mua thực phẩm",
        "ipa": "/ɡəʊ ˈɡrəʊ.sər.i ˈʃɒp.ɪŋ/",
        "pos": "(v. phrase)",
        "ex": "I often go grocery shopping with my mother on Sunday mornings."
    },
    {
        "num": 323,
        "en": "Help with cooking",
        "vi": "Giúp nấu ăn",
        "ipa": "/help wɪð ˈkʊk.ɪŋ/",
        "pos": "(v. phrase)",
        "ex": "I try to help with cooking dinner when I finish my homework early."
    },
    {
        "num": 324,
        "en": "Look after siblings",
        "vi": "Trông em (anh chị em ruột)",
        "ipa": "/lʊk ˈɑːf.tər ˈsɪb.lɪŋz/",
        "pos": "(v. phrase)",
        "ex": "When my parents are busy, I have to look after my younger siblings."
    },
    {
        "num": 325,
        "en": "Hectic weekend",
        "vi": "Cuối tuần bận rộn",
        "ipa": "/ˈhek.tɪk ˈwiːk.end/",
        "pos": "(n. phrase)",
        "ex": "I had a very hectic weekend with extra classes and sports practice."
    },
    {
        "num": 326,
        "en": "Relaxing",
        "vi": "Thư giãn",
        "ipa": "/rɪˈlæk.sɪŋ/",
        "pos": "(adj)",
        "ex": "Listening to acoustic music is very relaxing after a long day."
    },
    {
        "num": 327,
        "en": "Productive",
        "vi": "Năng suất",
        "ipa": "/prəˈdʌk.tɪv/",
        "pos": "(adj)",
        "ex": "I try to have a productive morning by waking up early and reading."
    },
    {
        "num": 328,
        "en": "Peaceful",
        "vi": "Yên bình",
        "ipa": "/ˈpiːs.fəl/",
        "pos": "(adj)",
        "ex": "Walking by the lake early in the morning is incredibly peaceful."
    },
    {
        "num": 329,
        "en": "Enjoyable",
        "vi": "Thú vị",
        "ipa": "/ɪnˈdʒɔɪ.ə.bəl/",
        "pos": "(adj)",
        "ex": "We had an enjoyable evening chatting and having dinner together."
    },
    {
        "num": 330,
        "en": "Memorable",
        "vi": "Đáng nhớ",
        "ipa": "/ˈmem.ər.ə.bəl/",
        "pos": "(adj)",
        "ex": "My trip to Da Lat last year was a truly memorable experience."
    },
    {
        "num": 331,
        "en": "Exhausted",
        "vi": "Kiệt sức (sau cuối tuần)",
        "ipa": "/ɪɡˈzɔː.stɪd/",
        "pos": "(adj)",
        "ex": "I was completely exhausted after studying for twelve hours straight."
    },
    {
        "num": 332,
        "en": "Full of activities",
        "vi": "Kín lịch hoạt động",
        "ipa": "/fʊl əv ækˈtɪv.ə.tiz/",
        "pos": "(adj phrase)",
        "ex": "My summer holiday was full of activities like swimming and hiking."
    },
    {
        "num": 333,
        "en": "Time flies",
        "vi": "Thời gian trôi nhanh",
        "ipa": "/taɪm flaɪz/",
        "pos": "(sentence)",
        "ex": "Time flies when you are having fun with your best friends."
    },
    {
        "num": 334,
        "en": "Look forward to",
        "vi": "Mong chờ (cái gì đó)",
        "ipa": "/lʊk ˈfɔː.wəd tu/",
        "pos": "(v. phrase)",
        "ex": "I always look forward to the summer holidays."
    },
    {
        "num": 335,
        "en": "Can't wait for...",
        "vi": "Không thể chờ đến...",
        "ipa": "/kɑːnt weɪt fɔːr.../",
        "pos": "(v. phrase)",
        "ex": "I can't wait for the weekend to finally get some rest."
    },
    {
        "num": 336,
        "en": "Get away from it all",
        "vi": "Thoát khỏi tất cả (áp lực)",
        "ipa": "/ɡet əˈweɪ frɒm ɪt ɔːl/",
        "pos": "(idiom)",
        "ex": "Sometimes I just want to go to the mountains to get away from it all."
    },
    {
        "num": 337,
        "en": "A break from routine",
        "vi": "Khoảng nghỉ khỏi thói quen cũ",
        "ipa": "/...breɪk frɒm ruːˈtiːn/",
        "pos": "(n. phrase)",
        "ex": "Taking a short trip is a nice break from routine."
    },
    {
        "num": 338,
        "en": "Work-life balance",
        "vi": "Cân bằng công việc - cuộc sống",
        "ipa": "/wɜːk laɪf ˈbæl.əns/",
        "pos": "(n. phrase)",
        "ex": "It is very important to maintain a healthy work-life balance."
    },
    {
        "num": 339,
        "en": "Every weekend",
        "vi": "Mỗi cuối tuần",
        "ipa": "/ˈev.ri ˈwiːk.end/",
        "pos": "(adv phrase)",
        "ex": "I visit my grandparents in the countryside every weekend."
    },
    {
        "num": 340,
        "en": "Once in a while",
        "vi": "Thỉnh thoảng",
        "ipa": "/wʌns ɪn ə waɪl/",
        "pos": "(adv phrase)",
        "ex": "I prefer cooking at home, but I eat out once in a while."
    },
    {
        "num": 341,
        "en": "Rarely",
        "vi": "Hiếm khi",
        "ipa": "/ˈreə.li/",
        "pos": "(adv)",
        "ex": "I rarely watch horror films because they give me nightmares."
    },
    {
        "num": 342,
        "en": "Occasionally",
        "vi": "Thi thoảng",
        "ipa": "/əˈkeɪ.ʒən.əl.i/",
        "pos": "(adv)",
        "ex": "I occasionally go to the cinema with my classmates."
    },
    {
        "num": 343,
        "en": "Last weekend",
        "vi": "Cuối tuần trước",
        "ipa": "/lɑːst ˈwiːk.end/",
        "pos": "(adv phrase)",
        "ex": "Last weekend, I stayed at home and binge-watched a new series."
    },
    {
        "num": 344,
        "en": "Next weekend",
        "vi": "Cuối tuần tới",
        "ipa": "/nekst ˈwiːk.end/",
        "pos": "(adv phrase)",
        "ex": "Next weekend, I am planning to go camping with my club."
    },
    {
        "num": 345,
        "en": "On Saturday morning",
        "vi": "Vào sáng thứ 7",
        "ipa": "/ɒn ˈsæt.ə.deɪ ˈmɔː.nɪŋ/",
        "pos": "(adv phrase)",
        "ex": "On Saturday morning, I usually have a lie-in."
    },
    {
        "num": 346,
        "en": "On Sunday night",
        "vi": "Vào tối chủ nhật",
        "ipa": "/ɒn ˈsʌn.deɪ naɪt/",
        "pos": "(adv phrase)",
        "ex": "On Sunday night, I prepare my books and clothes for the week."
    },
    {
        "num": 347,
        "en": "During the weekend",
        "vi": "Trong suốt cuối tuần",
        "ipa": "/ˈdʒʊə.rɪŋ ðə ˈwiːk.end/",
        "pos": "(adv phrase)",
        "ex": "During the weekend, I try to spend as much time outside as possible."
    },
    {
        "num": 348,
        "en": "Over the weekend",
        "vi": "Qua cuối tuần",
        "ipa": "/ˈəʊ.vər ðə ˈwiːk.end/",
        "pos": "(adv phrase)",
        "ex": "I have a lot of homework to do over the weekend."
    },
    {
        "num": 349,
        "en": "It depends on my mood",
        "vi": "Nó phụ thuộc vào tâm trạng tôi",
        "ipa": "/...dɪˈpendz ɒn maɪ muːd/",
        "pos": "(sentence)",
        "ex": "I might read a book or watch a film; it depends on my mood."
    },
    {
        "num": 350,
        "en": "It depends on weather",
        "vi": "Nó phụ thuộc vào thời tiết",
        "ipa": "/...dɪˈpendz ɒn ˈweð.ər/",
        "pos": "(sentence)",
        "ex": "We will go to the beach, but it depends on the weather."
    },
    {
        "num": 351,
        "en": "I’m a big fan of...",
        "vi": "Tôi rất thích...",
        "ipa": "/aɪm ə bɪɡ fæn əv.../",
        "pos": "(sentence)",
        "ex": "I’m a big fan of science fiction novels."
    },
    {
        "num": 352,
        "en": "I prefer A to B",
        "vi": "Tôi thích A hơn B",
        "ipa": "/aɪ prɪˈfɜːr.../",
        "pos": "(sentence)",
        "ex": "I prefer drinking tea to coffee in the morning."
    },
    {
        "num": 353,
        "en": "Tend to + V",
        "vi": "Có xu hướng làm gì",
        "ipa": "/tend tu/",
        "pos": "(structure)",
        "ex": "I tend to stay quiet when I am in a large group of people."
    },
    {
        "num": 354,
        "en": "Pursue a hobby",
        "vi": "Theo đuổi một sở thích",
        "ipa": "/pəˈsjuː ə ˈhɒb.i/",
        "pos": "(v. phrase)",
        "ex": "I really want to pursue a hobby like photography."
    },
    {
        "num": 355,
        "en": "Take up a new hobby",
        "vi": "Bắt đầu một sở thích mới",
        "ipa": "/teɪk ʌp ə njuː ˈhɒb.i/",
        "pos": "(v. phrase)",
        "ex": "During the lockdown, I decided to take up a new hobby, which was baking."
    },
    {
        "num": 356,
        "en": "Kill time",
        "vi": "Giết thời gian",
        "ipa": "/kɪl taɪm/",
        "pos": "(v. phrase)",
        "ex": "While waiting for the bus, I usually play games on my phone to kill time."
    },
    {
        "num": 357,
        "en": "Have a go at something",
        "vi": "Thử làm cái gì đó",
        "ipa": "/hæv ə ɡəʊ æt.../",
        "pos": "(v. phrase)",
        "ex": "I have never tried skiing, but I would love to have a go at it."
    },
    {
        "num": 358,
        "en": "Spare time / Leisure time",
        "vi": "Thời gian rảnh",
        "ipa": "/speər taɪm/ - /ˈleʒ.ə taɪm/",
        "pos": "(n. phrase)",
        "ex": "In my spare time, I really enjoy listening to podcasts."
    },
    {
        "num": 359,
        "en": "Be passionate about",
        "vi": "Đam mê về cái gì",
        "ipa": "/bi ˈpæʃ.ən.ət əˈbaʊt/",
        "pos": "(adj phrase)",
        "ex": "I have always been passionate about protecting the environment."
    },
    {
        "num": 360,
        "en": "Close friend / Bestie",
        "vi": "Bạn thân / Bạn chí cốt",
        "ipa": "/kləʊs frend/ - /ˈbes.ti/",
        "pos": "(n. phrase)",
        "ex": "I tell my close friend everything because I trust her completely."
    },
    {
        "num": 361,
        "en": "Circle of friends",
        "vi": "Nhóm bạn",
        "ipa": "/ˈsɜː.kəl əv frendz/",
        "pos": "(n. phrase)",
        "ex": "I have a small circle of friends, but we are very close."
    },
    {
        "num": 362,
        "en": "Keep in touch with",
        "vi": "Giữ liên lạc với",
        "ipa": "/kiːp ɪn tʌtʃ wɪð/",
        "pos": "(v. phrase)",
        "ex": "I use social media to keep in touch with my old classmates."
    },
    {
        "num": 363,
        "en": "Lost touch with",
        "vi": "Mất liên lạc với",
        "ipa": "/lɒst tʌtʃ wɪð/",
        "pos": "(v. phrase)",
        "ex": "Sadly, I have lost touch with many friends from primary school."
    },
    {
        "num": 364,
        "en": "See eye to eye",
        "vi": "Đồng quan điểm",
        "ipa": "/siː aɪ tu aɪ/",
        "pos": "(idiom)",
        "ex": "My brother and I do not always see eye to eye on politics."
    },
    {
        "num": 365,
        "en": "Get on well with",
        "vi": "Hòa thuận với",
        "ipa": "/ɡet ɒn wel wɪð/",
        "pos": "(phrasal v)",
        "ex": "I am lucky to get on well with all my colleagues at work."
    },
    {
        "num": 366,
        "en": "Have a lot in common",
        "vi": "Có nhiều điểm chung",
        "ipa": "/...lɒt ɪn ˈkɒm.ən/",
        "pos": "(v. phrase)",
        "ex": "My best friend and I have a lot in common, especially our taste in music."
    },
    {
        "num": 367,
        "en": "Drift apart",
        "vi": "Dần xa cách",
        "ipa": "/drɪft əˈpɑːt/",
        "pos": "(phrasal v)",
        "ex": "When we went to different universities, we slowly began to drift apart."
    },
    {
        "num": 368,
        "en": "Fair-weather friend",
        "vi": "Bạn bè chỉ đến khi vui/lợi ích",
        "ipa": "/feəˈweð.ər frend/",
        "pos": "(n. phrase)",
        "ex": "I realised she was just a fair-weather friend when she refused to help me."
    },
    {
        "num": 369,
        "en": "Extend my social circle",
        "vi": "Mở rộng mối quan hệ xã hội",
        "ipa": "/ɪkˈstend maɪ ˈsəʊ.ʃəl.../",
        "pos": "(v. phrase)",
        "ex": "Joining the university club helped me extend my social circle."
    },
    {
        "num": 370,
        "en": "Home-cooked food",
        "vi": "Cơm nhà nấu",
        "ipa": "/ˌhəʊmˈkʊkt fuːd/",
        "pos": "(n. phrase)",
        "ex": "I will always prefer my mother's home-cooked food over restaurant meals."
    },
    {
        "num": 371,
        "en": "Processed / Canned food",
        "vi": "Đồ hộp / Thực phẩm chế biến sẵn",
        "ipa": "/ˈprəʊ.sest.../ - /kænd.../",
        "pos": "(n. phrase)",
        "ex": "I try to avoid processed food because it contains too much salt."
    },
    {
        "num": 372,
        "en": "Mouth-watering",
        "vi": "Ngon chảy nước miếng",
        "ipa": "/ˈmaʊθˌwɔː.tə.rɪŋ/",
        "pos": "(adj)",
        "ex": "The bakery on the corner sells the most mouth-watering chocolate cakes."
    },
    {
        "num": 373,
        "en": "Have a sweet tooth",
        "vi": "Người hảo ngọt",
        "ipa": "/hæv ə swiːt tuːθ/",
        "pos": "(idiom)",
        "ex": "I definitely have a sweet tooth; I can never say no to dessert."
    },
    {
        "num": 374,
        "en": "Balanced diet",
        "vi": "Chế độ ăn cân bằng",
        "ipa": "/ˈbæl.ənst ˈdaɪ.ət/",
        "pos": "(n. phrase)",
        "ex": "Eating plenty of vegetables is a key part of a balanced diet."
    },
    {
        "num": 375,
        "en": "Traditional cuisine",
        "vi": "Ẩm thực truyền thống",
        "ipa": "/trəˈdɪʃ.ən.əl kwɪˈziːn/",
        "pos": "(n. phrase)",
        "ex": "Pho is a famous dish in Vietnamese traditional cuisine."
    },
    {
        "num": 376,
        "en": "Whip up a meal",
        "vi": "Nấu nhanh một bữa ăn",
        "ipa": "/wɪp ʌp ə miːl/",
        "pos": "(v. phrase)",
        "ex": "When I'm in a hurry, I just whip up a quick meal with noodles."
    },
    {
        "num": 377,
        "en": "Food hygiene",
        "vi": "Vệ sinh an toàn thực phẩm",
        "ipa": "/fuːd ˈhaɪ.dʒiːn/",
        "pos": "(n. phrase)",
        "ex": "When eating street food, I always pay attention to food hygiene."
    },
    {
        "num": 378,
        "en": "Shopaholic",
        "vi": "Người nghiện mua sắm",
        "ipa": "/ˌʃɒp.əˈhɒl.ɪk/",
        "pos": "(n)",
        "ex": "My sister is a bit of a shopaholic; she buys new clothes every week."
    },
    {
        "num": 379,
        "en": "Window shopping",
        "vi": "Đi ngắm đồ nhưng không mua",
        "ipa": "/ˈwɪn.dəʊ ˌʃɒp.ɪŋ/",
        "pos": "(n)",
        "ex": "When I am broke, I just go window shopping to see the new trends."
    },
    {
        "num": 380,
        "en": "Bargain hunter",
        "vi": "Người hay săn hàng giảm giá",
        "ipa": "/ˈbɑː.ɡɪn ˌhʌn.tər/",
        "pos": "(n)",
        "ex": "My mother is a real bargain hunter who always finds the best deals."
    },
    {
        "num": 381,
        "en": "Reasonable price",
        "vi": "Giá cả hợp lý",
        "ipa": "/ˈriː.zən.ə.bəl praɪs/",
        "pos": "(n. phrase)",
        "ex": "I bought this jacket because it was offered at a very reasonable price."
    },
    {
        "num": 382,
        "en": "Prohibitive price",
        "vi": "Giá cắt cổ (quá đắt)",
        "ipa": "/prəˈhɪb.ɪ.tɪv praɪs/",
        "pos": "(n. phrase)",
        "ex": "I would love a new laptop, but the cost is a prohibitive price for a student."
    },
    {
        "num": 383,
        "en": "Must-have item",
        "vi": "Món đồ phải có",
        "ipa": "/mʌst hæv ˈaɪ.təm/",
        "pos": "(n. phrase)",
        "ex": "A warm coat is a must-have item for the winter here."
    },
    {
        "num": 384,
        "en": "Go on a shopping spree",
        "vi": "Mua sắm thả ga",
        "ipa": "/...ˈʃɒp.ɪŋ spriː/",
        "pos": "(idiom)",
        "ex": "After getting my first salary, I went on a massive shopping spree."
    },
    {
        "num": 385,
        "en": "Customer service",
        "vi": "Dịch vụ khách hàng",
        "ipa": "/ˈkʌs.tə.mə ˈsɜː.vɪs/",
        "pos": "(n. phrase)",
        "ex": "I often buy from this shop because their customer service is excellent."
    },
    {
        "num": 386,
        "en": "Online shopping",
        "vi": "Mua sắm trực tuyến",
        "ipa": "/ˌɒn.laɪn ˈʃɒp.ɪŋ/",
        "pos": "(n. phrase)",
        "ex": "I do most of my shopping online because it is so convenient."
    },
    {
        "num": 387,
        "en": "Brick-and-mortar store",
        "vi": "Cửa hàng vật lý (truyền thống)",
        "ipa": "/ˌbrɪk.ənˈmɔː.tər stɔːr/",
        "pos": "(n. phrase)",
        "ex": "Sometimes I prefer going to a brick-and-mortar store so I can try the clothes on."
    },
    {
        "num": 388,
        "en": "Catchy melody",
        "vi": "Giai điệu bắt tai",
        "ipa": "/ˈkætʃ.i ˈmel.ə.di/",
        "pos": "(n. phrase)",
        "ex": "That new pop song has a really catchy melody that gets stuck in my head."
    },
    {
        "num": 389,
        "en": "Music taste",
        "vi": "Gu âm nhạc",
        "ipa": "/ˈmjuː.zɪk teɪst/",
        "pos": "(n. phrase)",
        "ex": "My friends and I have very different music tastes."
    },
    {
        "num": 390,
        "en": "Sing along to",
        "vi": "Hát theo bài hát",
        "ipa": "/sɪŋ əˈlɒŋ tu/",
        "pos": "(v. phrase)",
        "ex": "I love playing the guitar and singing along to my favourite songs."
    },
    {
        "num": 391,
        "en": "Live performance",
        "vi": "Biểu diễn trực tiếp",
        "ipa": "/laɪv pəˈfɔː.məns/",
        "pos": "(n. phrase)",
        "ex": "Watching a live performance of your favourite band is an unforgettable experience."
    },
    {
        "num": 392,
        "en": "Soothing tune",
        "vi": "Giai điệu nhẹ nhàng/thư giãn",
        "ipa": "/ˈsuː.ðɪŋ tjuːn/",
        "pos": "(n. phrase)",
        "ex": "I listen to soothing tunes to help me fall asleep."
    },
    {
        "num": 393,
        "en": "Heavy metal",
        "vi": "Nhạc rock mạnh",
        "ipa": "/ˌhev.i ˈmet.əl/",
        "pos": "(n. phrase)",
        "ex": "I find heavy metal a bit too loud and aggressive for my liking."
    },
    {
        "num": 394,
        "en": "Musical instrument",
        "vi": "Nhạc cụ",
        "ipa": "/ˈmjuː.zɪ.kəl ˈɪn.strə.mənt/",
        "pos": "(n. phrase)",
        "ex": "I have always wanted to learn how to play a musical instrument, like the piano."
    },
    {
        "num": 395,
        "en": "Be tone-deaf",
        "vi": "Mù âm nhạc (hát sai tông)",
        "ipa": "/bi ˈtəʊn.def/",
        "pos": "(adj)",
        "ex": "I never sing at karaoke because I am completely tone-deaf."
    },
    {
        "num": 396,
        "en": "Boost my energy",
        "vi": "Tăng năng lượng",
        "ipa": "/buːst maɪ ˈen.ə.dʒi/",
        "pos": "(v. phrase)",
        "ex": "A quick workout in the morning really helps to boost my energy."
    },
    {
        "num": 397,
        "en": "On repeat",
        "vi": "Nghe đi nghe lại",
        "ipa": "/ɒn rɪˈpiːt/",
        "pos": "(adv phrase)",
        "ex": "I love this song so much that I have had it on repeat all day."
    },
    {
        "num": 398,
        "en": "Blockbuster",
        "vi": "Phim bom tấn",
        "ipa": "/ˈblɒkˌbʌs.tər/",
        "pos": "(n)",
        "ex": "We went to the cinema to see the new Hollywood blockbuster."
    },
    {
        "num": 399,
        "en": "Box-office hit",
        "vi": "Phim thắng lớn phòng vé",
        "ipa": "/ˈbɒksˌɒf.ɪs hɪt/",
        "pos": "(n. phrase)",
        "ex": "The film was a massive box-office hit worldwide."
    },
    {
        "num": 400,
        "en": "Star-studded cast",
        "vi": "Dàn diễn viên toàn ngôi sao",
        "ipa": "/stɑːr ˈstʌd.ɪd kɑːst/",
        "pos": "(n. phrase)",
        "ex": "The new action movie features a star-studded cast."
    },
    {
        "num": 401,
        "en": "Soundtrack",
        "vi": "Nhạc phim",
        "ipa": "/ˈsaʊnd.træk/",
        "pos": "(n)",
        "ex": "I often listen to the soundtrack of a film while studying."
    },
    {
        "num": 402,
        "en": "Special / Visual effects",
        "vi": "Kỹ xảo hình ảnh",
        "ipa": "/ˈspeʃ.əl.../ - /ˈvɪʒ.u.əl.../",
        "pos": "(n. phrase)",
        "ex": "The sci-fi film I watched last night had amazing visual effects."
    },
    {
        "num": 403,
        "en": "Plot twist",
        "vi": "Tình tiết bất ngờ",
        "ipa": "/plɒt twɪst/",
        "pos": "(n. phrase)",
        "ex": "I love mystery novels because of the unexpected plot twists."
    },
    {
        "num": 404,
        "en": "Catch the latest movie",
        "vi": "Đi xem bộ phim mới nhất",
        "ipa": "/kætʃ ðə ˈleɪ.tɪst.../",
        "pos": "(v. phrase)",
        "ex": "On Friday nights, my friends and I usually catch the latest movie at the cinema."
    },
    {
        "num": 405,
        "en": "Movie buff",
        "vi": "Mọt phim (người cực mê phim)",
        "ipa": "/ˈmuː.vi bʌf/",
        "pos": "(n. phrase)",
        "ex": "I am a bit of a movie buff, so I go to the cinema every week."
    },
    {
        "num": 406,
        "en": "Touching / Moving",
        "vi": "Cảm động",
        "ipa": "/ˈtʌtʃ.ɪŋ/ - /ˈmuː.vɪŋ/",
        "pos": "(adj)",
        "ex": "The ending of the film was so touching that it made me cry."
    },
    {
        "num": 407,
        "en": "Action-packed",
        "vi": "Chứa đầy hành động kịch tính",
        "ipa": "/ˈæk.ʃənˌpækt/",
        "pos": "(adj)",
        "ex": "My brother loves watching action-packed superhero films."
    },
    {
        "num": 408,
        "en": "Bookworm",
        "vi": "Mọt sách",
        "ipa": "/ˈbʊk.wɜːm/",
        "pos": "(n)",
        "ex": "I was a real bookworm when I was a child and spent hours in the library."
    },
    {
        "num": 409,
        "en": "Page-turner",
        "vi": "Cuốn sách lôi cuốn",
        "ipa": "/ˈpeɪdʒˌtɜː.nər/",
        "pos": "(n)",
        "ex": "The new thriller novel I bought is a real page-turner."
    },
    {
        "num": 410,
        "en": "Paperback",
        "vi": "Sách bìa mềm",
        "ipa": "/ˈpeɪ.pə.bæk/",
        "pos": "(n)",
        "ex": "I prefer buying paperback books because they are cheaper and lighter."
    },
    {
        "num": 411,
        "en": "E-book",
        "vi": "Sách điện tử",
        "ipa": "/ˈiː.bʊk/",
        "pos": "(n)",
        "ex": "I usually read an e-book on my tablet when I travel."
    },
    {
        "num": 412,
        "en": "Vivid description",
        "vi": "Mô tả sống động",
        "ipa": "/ˈvɪv.ɪd dɪˈskrɪp.ʃən/",
        "pos": "(n. phrase)",
        "ex": "The author's vivid descriptions really help me imagine the scenery."
    },
    {
        "num": 413,
        "en": "Enhance knowledge",
        "vi": "Nâng cao kiến thức",
        "ipa": "/ɪnˈhɑːns ˈnɒl.ɪdʒ/",
        "pos": "(v. phrase)",
        "ex": "Reading non-fiction books is a great way to enhance my knowledge."
    },
    {
        "num": 414,
        "en": "Bedtime story",
        "vi": "Truyện kể trước khi ngủ",
        "ipa": "/ˈbed.taɪm ˈstɔː.ri/",
        "pos": "(n. phrase)",
        "ex": "My mum used to read me a bedtime story every night."
    },
    {
        "num": 415,
        "en": "Heavy reader",
        "vi": "Người đọc rất nhiều sách",
        "ipa": "/ˈhev.i ˈriː.dər/",
        "pos": "(n. phrase)",
        "ex": "I wouldn't call myself a heavy reader, but I do enjoy a good book on holiday."
    },
    {
        "num": 416,
        "en": "Flick through",
        "vi": "Lướt qua / Đọc lướt",
        "ipa": "/flɪk θruː/",
        "pos": "(phrasal v)",
        "ex": "While waiting at the dentist, I just flicked through a magazine."
    },
    {
        "num": 417,
        "en": "Couldn't put it down",
        "vi": "Không thể đặt sách xuống",
        "ipa": "/...pʊt ɪt daʊn/",
        "pos": "(idiom)",
        "ex": "The book was so gripping that I couldn't put it down."
    },
    {
        "num": 418,
        "en": "Social networking site",
        "vi": "Trang mạng xã hội",
        "ipa": "/...ˈnet.wɜː.kɪŋ saɪt/",
        "pos": "(n. phrase)",
        "ex": "Facebook is the social networking site I use the most."
    },
    {
        "num": 419,
        "en": "User-friendly interface",
        "vi": "Giao diện thân thiện",
        "ipa": "/...ˈfrend.li ˈɪn.tə.feɪs/",
        "pos": "(n. phrase)",
        "ex": "I like this app because it has a very user-friendly interface."
    },
    {
        "num": 420,
        "en": "Scroll through newsfeed",
        "vi": "Lướt bảng tin",
        "ipa": "/skrəʊl θruː ˈnjuːz.fiːd/",
        "pos": "(v. phrase)",
        "ex": "I often scroll through my newsfeed when I am bored."
    },
    {
        "num": 421,
        "en": "Stay up-to-date",
        "vi": "Cập nhật tin tức mới nhất",
        "ipa": "/steɪ ʌp tu deɪt/",
        "pos": "(v. phrase)",
        "ex": "I read the news online every morning to stay up-to-date."
    },
    {
        "num": 422,
        "en": "Virtual world",
        "vi": "Thế giới ảo",
        "ipa": "/ˈvɜː.tʃu.əl wɜːld/",
        "pos": "(n. phrase)",
        "ex": "Teenagers sometimes spend too much time in the virtual world of gaming."
    },
    {
        "num": 423,
        "en": "Interact with",
        "vi": "Tương tác với",
        "ipa": "/ˌɪn.təˈrækt wɪð/",
        "pos": "(v. phrase)",
        "ex": "Social media makes it easy to interact with people from all over the world."
    },
    {
        "num": 424,
        "en": "Post a status",
        "vi": "Đăng trạng thái",
        "ipa": "/pəʊst ə ˈsteɪ.təs/",
        "pos": "(v. phrase)",
        "ex": "I rarely post a status on Facebook nowadays."
    },
    {
        "num": 425,
        "en": "Cyberbullying",
        "vi": "Bắt nạt qua mạng",
        "ipa": "/ˈsaɪ.bəˌbʊl.i.ɪŋ/",
        "pos": "(n)",
        "ex": "Schools need to educate students about the dangers of cyberbullying."
    },
    {
        "num": 426,
        "en": "Information overload",
        "vi": "Quá tải thông tin",
        "ipa": "/ˌɪn.fəˈmeɪ.ʃən ˈəʊ.və.ləʊd/",
        "pos": "(n. phrase)",
        "ex": "Reading too many news articles online gives me information overload."
    },
    {
        "num": 427,
        "en": "Addicted to",
        "vi": "Nghiện cái gì đó",
        "ipa": "/əˈdɪk.tɪd tu/",
        "pos": "(adj)",
        "ex": "I admit that I am slightly addicted to my smartphone."
    },
    {
        "num": 428,
        "en": "Boiling / Scorching hot",
        "vi": "Nóng như đổ lửa",
        "ipa": "/ˈbɔɪ.lɪŋ.../ - /ˈskɔː.tʃɪŋ.../",
        "pos": "(adj)",
        "ex": "In the middle of summer, the weather here is scorching hot."
    },
    {
        "num": 429,
        "en": "Freezing cold",
        "vi": "Lạnh đóng băng",
        "ipa": "/ˈfriː.zɪŋ kəʊld/",
        "pos": "(adj)",
        "ex": "I don't like winter because my hands always get freezing cold."
    },
    {
        "num": 430,
        "en": "Soaked to the skin",
        "vi": "Ướt như chuột lột (do mưa)",
        "ipa": "/səʊkt tu ðə skɪn/",
        "pos": "(idiom)",
        "ex": "I forgot my umbrella and got soaked to the skin on my way home."
    },
    {
        "num": 431,
        "en": "Weather forecast",
        "vi": "Dự báo thời tiết",
        "ipa": "/ˈweð.ər ˈfɔː.kɑːst/",
        "pos": "(n. phrase)",
        "ex": "I always check the weather forecast before planning a picnic."
    },
    {
        "num": 432,
        "en": "Clear blue sky",
        "vi": "Bầu trời trong xanh",
        "ipa": "/klɪər bluː skaɪ/",
        "pos": "(n. phrase)",
        "ex": "I love waking up to a clear blue sky on a Sunday morning."
    },
    {
        "num": 433,
        "en": "Gloomy day",
        "vi": "Ngày ảm đạm (trời xám xịt)",
        "ipa": "/ˈɡluː.mi deɪ/",
        "pos": "(n. phrase)",
        "ex": "I prefer staying indoors with a book on a gloomy day."
    },
    {
        "num": 434,
        "en": "Get caught in the rain",
        "vi": "Bị dính mưa",
        "ipa": "/ɡet kɔːt ɪn ðə reɪn/",
        "pos": "(v. phrase)",
        "ex": "Make sure to take a raincoat so you don't get caught in the rain."
    },
    {
        "num": 435,
        "en": "Tropical climate",
        "vi": "Khí hậu nhiệt đới",
        "ipa": "/ˈtrɒp.ɪ.kəl ˈklaɪ.mət/",
        "pos": "(n. phrase)",
        "ex": "Vietnam has a tropical climate, so it is quite humid."
    },
    {
        "num": 436,
        "en": "Changeable weather",
        "vi": "Thời tiết hay thay đổi",
        "ipa": "/ˈtʃeɪn.dʒə.bəl ˈweð.ər/",
        "pos": "(n. phrase)",
        "ex": "The UK is famous for its very changeable weather."
    },
    {
        "num": 437,
        "en": "Feel under the weather",
        "vi": "Cảm thấy không khỏe",
        "ipa": "/fiːl ˈʌn.də ðə ˈweð.ər/",
        "pos": "(idiom)",
        "ex": "I think I need to rest because I feel a bit under the weather today."
    },
    {
        "num": 438,
        "en": "Public holiday",
        "vi": "Ngày lễ quốc gia",
        "ipa": "/ˌpʌb.lɪk ˈhɒl.ə.deɪ/",
        "pos": "(n. phrase)",
        "ex": "On a public holiday, my family often goes on a short trip."
    },
    {
        "num": 439,
        "en": "Festive season",
        "vi": "Mùa lễ hội",
        "ipa": "/ˈfes.tɪv ˈsiː.zən/",
        "pos": "(n. phrase)",
        "ex": "The streets are beautifully decorated during the festive season."
    },
    {
        "num": 440,
        "en": "Family reunion",
        "vi": "Sum họp gia đình",
        "ipa": "/ˈfæm.əl.i riːˈjuː.njən/",
        "pos": "(n. phrase)",
        "ex": "Tet is the most important time for a family reunion in my culture."
    },
    {
        "num": 441,
        "en": "Traditional custom",
        "vi": "Phong tục truyền thống",
        "ipa": "/trəˈdɪʃ.ən.əl ˈkʌs.təm/",
        "pos": "(n. phrase)",
        "ex": "Giving lucky money is a traditional custom during the Lunar New Year."
    },
    {
        "num": 442,
        "en": "Long weekend",
        "vi": "Kỳ nghỉ cuối tuần dài",
        "ipa": "/lɒŋ ˌwiːkˈend/",
        "pos": "(n. phrase)",
        "ex": "I am planning to visit the beach during the next long weekend."
    },
    {
        "num": 443,
        "en": "Celebrate an occasion",
        "vi": "Ăn mừng một dịp nào đó",
        "ipa": "/ˈsel.ə.breɪt ən əˈkeɪ.ʒən/",
        "pos": "(v. phrase)",
        "ex": "We usually go to a nice restaurant to celebrate a special occasion."
    },
    {
        "num": 444,
        "en": "Decorate the house",
        "vi": "Trang trí nhà cửa",
        "ipa": "/ˈdek.ə.reɪt ðə haʊs/",
        "pos": "(v. phrase)",
        "ex": "My sister and I always decorate the house before Christmas."
    },
    {
        "num": 445,
        "en": "Exchange gifts",
        "vi": "Trao đổi quà",
        "ipa": "/ɪksˈtʃeɪndʒ ɡɪfts/",
        "pos": "(v. phrase)",
        "ex": "It is our tradition to exchange gifts on Christmas Eve."
    },
    {
        "num": 446,
        "en": "Memorable experience",
        "vi": "Trải nghiệm đáng nhớ",
        "ipa": "/ˈmem.ər.ə.bəl ɪkˈspɪə.ri.əns/",
        "pos": "(n. phrase)",
        "ex": "Studying abroad was a truly memorable experience for me."
    },
    {
        "num": 447,
        "en": "Pastime",
        "vi": "Trò tiêu khiển",
        "ipa": "/ˈpɑːs.taɪm/",
        "pos": "(n)",
        "ex": "Gardening is my grandfather's favourite pastime."
    },
    {
        "num": 448,
        "en": "Passion",
        "vi": "Niềm đam mê",
        "ipa": "/ˈpæʃ.ən/",
        "pos": "(n)",
        "ex": "I have a real passion for learning foreign languages."
    },
    {
        "num": 449,
        "en": "Leisure activity",
        "vi": "Hoạt động giải trí",
        "ipa": "/ˈleʒ.ər ækˈtɪv.ə.ti/",
        "pos": "(n. phrase)",
        "ex": "Reading is my favourite leisure activity when I want to relax."
    },
    {
        "num": 450,
        "en": "Sense of achievement",
        "vi": "Cảm giác đạt được thành tựu",
        "ipa": "/sens əv əˈtʃiːv.mənt/",
        "pos": "(n. phrase)",
        "ex": "Finishing a difficult puzzle gives me a great sense of achievement."
    },
    {
        "num": 451,
        "en": "Outdoor activity",
        "vi": "Hoạt động ngoài trời",
        "ipa": "/ˈaʊt.dɔːr ækˈtɪv.ə.ti/",
        "pos": "(n. phrase)",
        "ex": "Cycling is a popular outdoor activity in my local park."
    },
    {
        "num": 452,
        "en": "Personal interest",
        "vi": "Sở thích cá nhân",
        "ipa": "/ˈpɜː.sən.əl ˈɪn.trəst/",
        "pos": "(n. phrase)",
        "ex": "My parents always encourage me to pursue my personal interests."
    },
    {
        "num": 453,
        "en": "Recreational activity",
        "vi": "Hoạt động vui chơi giải trí",
        "ipa": "/ˌrek.riˈeɪ.ʃən.əl.../",
        "pos": "(n. phrase)",
        "ex": "Swimming is a great recreational activity for the summer."
    },
    {
        "num": 454,
        "en": "Idle time",
        "vi": "Thời gian nhàn rỗi",
        "ipa": "/ˈaɪ.dəl taɪm/",
        "pos": "(n. phrase)",
        "ex": "During my idle time, I usually listen to podcasts."
    },
    {
        "num": 455,
        "en": "Creativity",
        "vi": "Sự sáng tạo",
        "ipa": "/ˌkriː.eɪˈtɪv.ə.ti/",
        "pos": "(n)",
        "ex": "Art classes help children to develop their creativity."
    },
    {
        "num": 456,
        "en": "Best friend / Bestie",
        "vi": "Bạn thân nhất",
        "ipa": "/best frend/ - /ˈbes.ti/",
        "pos": "(n. phrase)",
        "ex": "I share all my secrets with my bestie."
    },
    {
        "num": 457,
        "en": "Soulmate",
        "vi": "Bạn tri kỷ",
        "ipa": "/ˈsəʊl.meɪt/",
        "pos": "(n)",
        "ex": "I feel so lucky to have found my soulmate."
    },
    {
        "num": 458,
        "en": "Childhood friend",
        "vi": "Bạn thời thơ ấu",
        "ipa": "/ˈtʃaɪld.hʊd frend/",
        "pos": "(n. phrase)",
        "ex": "She is my childhood friend, and we grew up together."
    },
    {
        "num": 459,
        "en": "Acquaintance",
        "vi": "Người quen (xã giao)",
        "ipa": "/əˈkweɪn.təns/",
        "pos": "(n)",
        "ex": "He is not a close friend, just an acquaintance from work."
    },
    {
        "num": 460,
        "en": "Companion",
        "vi": "Người đồng hành",
        "ipa": "/kəmˈpæn.jən/",
        "pos": "(n)",
        "ex": "My dog is a wonderful companion when I go for a walk."
    },
    {
        "num": 461,
        "en": "Support system",
        "vi": "Hệ thống hỗ trợ (tinh thần)",
        "ipa": "/səˈpɔːt ˌsɪs.təm/",
        "pos": "(n. phrase)",
        "ex": "My family is my strongest support system during hard times."
    },
    {
        "num": 462,
        "en": "Peer pressure",
        "vi": "Áp lực đồng trang lứa",
        "ipa": "/pɪər ˈpreʃ.ər/",
        "pos": "(n. phrase)",
        "ex": "Teenagers often face a lot of peer pressure at school."
    },
    {
        "num": 463,
        "en": "Friendship bond",
        "vi": "Mối dây liên kết tình bạn",
        "ipa": "/ˈfrend.ʃɪp bɒnd/",
        "pos": "(n. phrase)",
        "ex": "Going through difficulties together strengthened our friendship bond."
    },
    {
        "num": 464,
        "en": "Conflict",
        "vi": "Mâu thuẫn",
        "ipa": "/ˈkɒn.flɪkt/",
        "pos": "(n)",
        "ex": "Whenever we have a conflict, we try to talk it out calmly."
    },
    {
        "num": 465,
        "en": "Mutual trust",
        "vi": "Sự tin tưởng lẫn nhau",
        "ipa": "/ˈmjuː.tʃu.əl trʌst/",
        "pos": "(n. phrase)",
        "ex": "A good friendship must be built on mutual trust."
    },
    {
        "num": 466,
        "en": "Nutritious breakfast",
        "vi": "Bữa sáng dinh dưỡng",
        "ipa": "/njuːˈtrɪʃ.əs ˈbrek.fəst/",
        "pos": "(n. phrase)",
        "ex": "I always start my day with a highly nutritious breakfast."
    },
    {
        "num": 467,
        "en": "Takeaway food",
        "vi": "Đồ ăn mang về",
        "ipa": "/ˈteɪk.ə.weɪ fuːd/",
        "pos": "(n. phrase)",
        "ex": "When I am too tired to cook, I just order takeaway food."
    },
    {
        "num": 468,
        "en": "Special meal",
        "vi": "Bữa ăn đặc biệt",
        "ipa": "/ˈspeʃ.əl miːl/",
        "pos": "(n. phrase)",
        "ex": "My dad cooked a special meal for my graduation."
    },
    {
        "num": 469,
        "en": "Recipe",
        "vi": "Công thức nấu ăn",
        "ipa": "/ˈres.ɪ.pi/",
        "pos": "(n)",
        "ex": "I found a great recipe for chocolate cake on the internet."
    },
    {
        "num": 470,
        "en": "Ingredient",
        "vi": "Nguyên liệu",
        "ipa": "/ɪnˈɡriː.di.ənt/",
        "pos": "(n)",
        "ex": "Fresh ingredients are the secret to a delicious dish."
    },
    {
        "num": 471,
        "en": "Appetite",
        "vi": "Khẩu vị / Sự thèm ăn",
        "ipa": "/ˈæp.ə.taɪt/",
        "pos": "(n)",
        "ex": "Working out usually gives me a very healthy appetite."
    },
    {
        "num": 472,
        "en": "Food additive",
        "vi": "Phụ gia thực phẩm",
        "ipa": "/fuːd ˈæd.ɪ.tɪv/",
        "pos": "(n. phrase)",
        "ex": "I try to avoid snacks that contain too many food additives."
    },
    {
        "num": 473,
        "en": "Culinary art",
        "vi": "Nghệ thuật ẩm thực",
        "ipa": "/ˈkʌl.ɪ.nər.i ɑːt/",
        "pos": "(n. phrase)",
        "ex": "I would love to take a class in culinary arts to improve my cooking."
    },
    {
        "num": 474,
        "en": "Grocery shopping",
        "vi": "Mua sắm thực phẩm/tạp hóa",
        "ipa": "/ˈɡrəʊ.sər.i ʃɒp.ɪŋ/",
        "pos": "(n. phrase)",
        "ex": "I usually go grocery shopping at the supermarket every Sunday."
    },
    {
        "num": 475,
        "en": "Brand name",
        "vi": "Hàng hiệu / Thương hiệu",
        "ipa": "/brænd neɪm/",
        "pos": "(n. phrase)",
        "ex": "I do not usually care about brand name clothes; I just buy what I like."
    },
    {
        "num": 476,
        "en": "Discounts and deals",
        "vi": "Giảm giá và ưu đãi",
        "ipa": "/ˈdɪs.kaʊnts.../",
        "pos": "(n. phrase)",
        "ex": "I always look for discounts and deals when shopping online."
    },
    {
        "num": 477,
        "en": "Shop assistant",
        "vi": "Nhân viên bán hàng",
        "ipa": "/ʃɒp əˈsɪs.tənt/",
        "pos": "(n. phrase)",
        "ex": "The shop assistant was very helpful in finding my size."
    },
    {
        "num": 478,
        "en": "Fitting room",
        "vi": "Phòng thử đồ",
        "ipa": "/ˈfɪt.ɪŋ ruːm/",
        "pos": "(n. phrase)",
        "ex": "I always try clothes on in the fitting room before buying them."
    },
    {
        "num": 479,
        "en": "Retail therapy",
        "vi": "Liệu pháp mua sắm (xả stress)",
        "ipa": "/ˈriː.teɪl ˈθer.ə.pi/",
        "pos": "(n. phrase)",
        "ex": "Whenever I feel stressed, I engage in a bit of retail therapy."
    },
    {
        "num": 480,
        "en": "Latest trend",
        "vi": "Xu hướng mới nhất",
        "ipa": "/ˈleɪ.tɪst trend/",
        "pos": "(n. phrase)",
        "ex": "My sister loves fashion and always follows the latest trends."
    },
    {
        "num": 481,
        "en": "Impulse buy",
        "vi": "Món đồ mua ngẫu hứng",
        "ipa": "/ˈɪm.pʌls baɪ/",
        "pos": "(n. phrase)",
        "ex": "That expensive jacket was an impulse buy, and I regret it now."
    },
    {
        "num": 482,
        "en": "Consumerism",
        "vi": "Chủ nghĩa tiêu dùng",
        "ipa": "/kənˈsjuː.mə.rɪ.zəm/",
        "pos": "(n)",
        "ex": "Modern consumerism encourages people to buy things they do not need."
    },
    {
        "num": 483,
        "en": "Playlist",
        "vi": "Danh sách phát nhạc",
        "ipa": "/ˈpleɪ.lɪst/",
        "pos": "(n)",
        "ex": "I have a special playlist of upbeat songs for my workouts."
    },
    {
        "num": 484,
        "en": "Music genre",
        "vi": "Thể loại nhạc",
        "ipa": "/ˈmjuː.zɪk ʒɑ̃ː.rə/",
        "pos": "(n. phrase)",
        "ex": "Pop is definitely my favourite music genre."
    },
    {
        "num": 485,
        "en": "Lyrics",
        "vi": "Lời bài hát",
        "ipa": "/ˈlɪr.ɪks/",
        "pos": "(n)",
        "ex": "I love this song because the lyrics are so meaningful."
    },
    {
        "num": 486,
        "en": "Rhythm",
        "vi": "Nhịp điệu",
        "ipa": "/ˈrɪð.əm/",
        "pos": "(n)",
        "ex": "The rhythm of the music makes me want to dance."
    },
    {
        "num": 487,
        "en": "Musical talent",
        "vi": "Tài năng âm nhạc",
        "ipa": "/ˈmjuː.zɪ.kəl ˈtæl.ənt/",
        "pos": "(n. phrase)",
        "ex": "My brother has a real musical talent and can play three instruments."
    },
    {
        "num": 488,
        "en": "Live concert",
        "vi": "Buổi hòa nhạc trực tiếp",
        "ipa": "/laɪv ˈkɒn.sət/",
        "pos": "(n. phrase)",
        "ex": "Going to a live concert of my favourite band was amazing."
    },
    {
        "num": 489,
        "en": "National anthem",
        "vi": "Quốc ca",
        "ipa": "/ˌnæʃ.ən.əl ˈæn.θəm/",
        "pos": "(n. phrase)",
        "ex": "We always sing the national anthem on Monday mornings at school."
    },
    {
        "num": 490,
        "en": "Headphones",
        "vi": "Tai nghe",
        "ipa": "/ˈhed.fəʊnz/",
        "pos": "(n)",
        "ex": "I put on my headphones to listen to music without disturbing anyone."
    },
    {
        "num": 491,
        "en": "Vocalist",
        "vi": "Ca sĩ hát chính",
        "ipa": "/ˈvəʊ.kəl.ɪst/",
        "pos": "(n)",
        "ex": "The lead vocalist of that rock band has an incredible voice."
    },
    {
        "num": 492,
        "en": "Chart-topper",
        "vi": "Bài hát đứng đầu bảng xếp hạng",
        "ipa": "/ˈtʃɑːtˌtɒp.ər/",
        "pos": "(n)",
        "ex": "Her new single quickly became a chart-topper."
    },
    {
        "num": 493,
        "en": "Cinema / Theater",
        "vi": "Rạp chiếu phim",
        "ipa": "/ˈsɪn.ə.mə/",
        "pos": "(n)",
        "ex": "I prefer watching films at the cinema for the big screen experience."
    },
    {
        "num": 494,
        "en": "Film genre",
        "vi": "Thể loại phim",
        "ipa": "/fɪlm ʒɑ̃ː.rə/",
        "pos": "(n. phrase)",
        "ex": "Comedy is my favourite film genre because it makes me laugh."
    },
    {
        "num": 495,
        "en": "Documentary",
        "vi": "Phim tài liệu",
        "ipa": "/ˌdɒk.jəˈmen.tər.i/",
        "pos": "(n)",
        "ex": "I watched a fascinating documentary about marine life yesterday."
    },
    {
        "num": 496,
        "en": "Animation",
        "vi": "Phim hoạt hình",
        "ipa": "/ˌæn.ɪˈmeɪ.ʃən/",
        "pos": "(n)",
        "ex": "I still enjoy watching animation films even though I am an adult."
    },
    {
        "num": 497,
        "en": "Cinematography",
        "vi": "Kỹ thuật quay phim/hình ảnh",
        "ipa": "/ˌsɪn.ə.məˈtɒɡ.rə.fi/",
        "pos": "(n)",
        "ex": "The film won an award for its stunning cinematography."
    },
    {
        "num": 498,
        "en": "Premiere",
        "vi": "Buổi công chiếu phim",
        "ipa": "/ˈprem.i.eər/",
        "pos": "(n)",
        "ex": "Many famous actors attended the premiere of the new movie."
    },
    {
        "num": 499,
        "en": "Review",
        "vi": "Bài đánh giá/phê bình",
        "ipa": "/rɪˈvjuː/",
        "pos": "(n)",
        "ex": "I usually read a film review before deciding whether to watch it."
    },
    {
        "num": 500,
        "en": "Audience",
        "vi": "Khán giả",
        "ipa": "/ˈɔː.di.əns/",
        "pos": "(n)",
        "ex": "The audience clapped loudly at the end of the performance."
    },
    {
        "num": 501,
        "en": "Script / Screenplay",
        "vi": "Kịch bản",
        "ipa": "/skrɪpt/",
        "pos": "(n)",
        "ex": "The script for this film was written by my favourite author."
    },
    {
        "num": 502,
        "en": "Streaming service",
        "vi": "Dịch vụ xem phim trực tuyến",
        "ipa": "/ˈstriː.mɪŋ ˌsɜː.vɪs/",
        "pos": "(n. phrase)",
        "ex": "I subscribe to a streaming service to watch films at the weekend."
    },
    {
        "num": 503,
        "en": "Novel",
        "vi": "Tiểu thuyết",
        "ipa": "/ˈnɒv.əl/",
        "pos": "(n)",
        "ex": "I am currently reading a fascinating historical novel."
    },
    {
        "num": 504,
        "en": "Fiction",
        "vi": "Sách hư cấu",
        "ipa": "/ˈfɪk.ʃən/",
        "pos": "(n)",
        "ex": "I prefer reading fiction because it allows me to escape reality."
    },
    {
        "num": 505,
        "en": "Non-fiction",
        "vi": "Sách phi hư cấu",
        "ipa": "/ˌnɒnˈfɪk.ʃən/",
        "pos": "(n)",
        "ex": "I read a lot of non-fiction to learn about real-world events."
    },
    {
        "num": 506,
        "en": "Author",
        "vi": "Tác giả",
        "ipa": "/ˈɔː.θər/",
        "pos": "(n)",
        "ex": "J.K. Rowling is an author I have admired since I was young."
    },
    {
        "num": 507,
        "en": "Best-seller",
        "vi": "Sách bán chạy nhất",
        "ipa": "/ˌbestˈsel.ər/",
        "pos": "(n)",
        "ex": "Her latest book quickly became a national best-seller."
    },
    {
        "num": 508,
        "en": "Knowledge",
        "vi": "Kiến thức",
        "ipa": "/ˈnɒl.ɪdʒ/",
        "pos": "(n)",
        "ex": "Reading books is the best way to expand my knowledge."
    },
    {
        "num": 509,
        "en": "Imagination",
        "vi": "Trí tưởng tượng",
        "ipa": "/ɪˌmædʒ.ɪˈneɪ.ʃən/",
        "pos": "(n)",
        "ex": "Reading fantasy novels really sparks my imagination."
    },
    {
        "num": 510,
        "en": "Literary work",
        "vi": "Tác phẩm văn học",
        "ipa": "/ˈlɪt.ər.ər.i wɜːk/",
        "pos": "(n. phrase)",
        "ex": "We had to study a famous literary work for our English class."
    },
    {
        "num": 511,
        "en": "E-reader",
        "vi": "Máy đọc sách",
        "ipa": "/ˈiːˌriː.dər/",
        "pos": "(n)",
        "ex": "I bought an e-reader so I can carry hundreds of books on holiday."
    },
    {
        "num": 512,
        "en": "Library",
        "vi": "Thư viện",
        "ipa": "/ˈlaɪ.brər.i/",
        "pos": "(n)",
        "ex": "I often go to the local library to study in peace."
    },
    {
        "num": 513,
        "en": "Social media platform",
        "vi": "Nền tảng mạng xã hội",
        "ipa": "/...ˈmiː.di.ə ˈplæt.fɔːm/",
        "pos": "(n. phrase)",
        "ex": "Facebook is the social media platform I use most frequently."
    },
    {
        "num": 514,
        "en": "Notification",
        "vi": "Thông báo",
        "ipa": "/ˌnəʊ.tɪ.fɪˈkeɪ.ʃən/",
        "pos": "(n)",
        "ex": "I turn off every notification on my phone when I need to focus."
    },
    {
        "num": 515,
        "en": "Follower",
        "vi": "Người theo dõi",
        "ipa": "/ˈfɒl.əʊ.ər/",
        "pos": "(n)",
        "ex": "She is a famous travel blogger with over a million followers."
    },
    {
        "num": 516,
        "en": "Content creator",
        "vi": "Người sáng tạo nội dung",
        "ipa": "/ˈkɒn.tent kriˈeɪ.tər/",
        "pos": "(n. phrase)",
        "ex": "Being a content creator requires a lot of hard work and creativity."
    },
    {
        "num": 517,
        "en": "Influencer",
        "vi": "Người có sức ảnh hưởng",
        "ipa": "/ˈɪn.flu.ən.sər/",
        "pos": "(n)",
        "ex": "I sometimes buy skincare products recommended by my favourite influencer."
    },
    {
        "num": 518,
        "en": "Privacy setting",
        "vi": "Cài đặt quyền riêng tư",
        "ipa": "/ˈprɪv.ə.si ˈset.ɪŋ/",
        "pos": "(n. phrase)",
        "ex": "I always check my privacy settings to protect my personal information."
    },
    {
        "num": 519,
        "en": "Newsfeed",
        "vi": "Bảng tin",
        "ipa": "/ˈnjuːz.fiːd/",
        "pos": "(n)",
        "ex": "The first thing I do in the morning is check my newsfeed."
    },
    {
        "num": 520,
        "en": "Viral video",
        "vi": "Video lan truyền nhanh",
        "ipa": "/ˈvaɪə.rəl ˈvɪd.i.əʊ/",
        "pos": "(n. phrase)",
        "ex": "I saw a hilarious viral video about a dancing dog yesterday."
    },
    {
        "num": 521,
        "en": "Digital footprint",
        "vi": "Dấu chân số",
        "ipa": "/ˌdɪdʒ.ɪ.təl ˈfʊt.prɪnt/",
        "pos": "(n. phrase)",
        "ex": "We should be careful about what we post online to manage our digital footprint."
    },
    {
        "num": 522,
        "en": "Online interaction",
        "vi": "Tương tác trực tuyến",
        "ipa": "/ˌɒn.laɪn ˌɪn.təˈræk.ʃən/",
        "pos": "(n. phrase)",
        "ex": "Online interaction can never fully replace face-to-face conversations."
    },
    {
        "num": 523,
        "en": "Temperature",
        "vi": "Nhiệt độ",
        "ipa": "/ˈtem.prə.tʃər/",
        "pos": "(n)",
        "ex": "The temperature in summer here can easily reach forty degrees."
    },
    {
        "num": 524,
        "en": "Humidity",
        "vi": "Độ ẩm",
        "ipa": "/hjuːˈmɪd.ə.ti/",
        "pos": "(n)",
        "ex": "The high humidity in my city makes the summer heat feel much worse."
    },
    {
        "num": 525,
        "en": "Climate change",
        "vi": "Biến đổi khí hậu",
        "ipa": "/ˈklaɪ.mət tʃeɪndʒ/",
        "pos": "(n. phrase)",
        "ex": "Climate change is one of the biggest problems we face today."
    },
    {
        "num": 526,
        "en": "Heatwave",
        "vi": "Đợt nắng nóng",
        "ipa": "/ˈhiːt.weɪv/",
        "pos": "(n)",
        "ex": "We experienced a terrible heatwave last July, and it was exhausting."
    },
    {
        "num": 527,
        "en": "Drizzle",
        "vi": "Mưa phùn",
        "ipa": "/ˈdrɪz.əl/",
        "pos": "(n)",
        "ex": "I don't mind walking to school in a light drizzle."
    },
    {
        "num": 528,
        "en": "Storm / Typhoon",
        "vi": "Bão",
        "ipa": "/stɔːm/ - /taɪˈfuːn/",
        "pos": "(n)",
        "ex": "Our school was closed because a severe typhoon was approaching."
    },
    {
        "num": 529,
        "en": "Sunshine",
        "vi": "Ánh nắng",
        "ipa": "/ˈsʌn.ʃaɪn/",
        "pos": "(n)",
        "ex": "I love waking up to bright sunshine on a Sunday morning."
    },
    {
        "num": 530,
        "en": "Forecast",
        "vi": "Dự báo",
        "ipa": "/ˈfɔː.kɑːst/",
        "pos": "(n)",
        "ex": "The forecast says it will rain tomorrow, so we should stay indoors."
    },
    {
        "num": 531,
        "en": "Day trip",
        "vi": "Chuyến đi trong ngày",
        "ipa": "/deɪ trɪp/",
        "pos": "(n. phrase)",
        "ex": "My family and I went on a day trip to the beach last weekend."
    },
    {
        "num": 532,
        "en": "Picnic",
        "vi": "Chuyến dã ngoại",
        "ipa": "/ˈpɪk.nɪk/",
        "pos": "(n)",
        "ex": "We packed some sandwiches and fruit for a lovely picnic in the park."
    },
    {
        "num": 533,
        "en": "Destination",
        "vi": "Điểm đến",
        "ipa": "/ˌdes.tɪˈneɪ.ʃən/",
        "pos": "(n)",
        "ex": "Paris has always been my dream holiday destination."
    },
    {
        "num": 534,
        "en": "Itinerary",
        "vi": "Lịch trình chuyến đi",
        "ipa": "/aɪˈtɪn.ər.ər.i/",
        "pos": "(n)",
        "ex": "I always plan a detailed itinerary before going on holiday."
    },
    {
        "num": 535,
        "en": "Souvenir",
        "vi": "Quà lưu niệm",
        "ipa": "/ˌsuː.vənˈɪər/",
        "pos": "(n)",
        "ex": "I bought a beautiful mug as a souvenir from my trip to London."
    },
    {
        "num": 536,
        "en": "Accommodation",
        "vi": "Chỗ ở (khách sạn, nhà nghỉ)",
        "ipa": "/əˌkɒm.əˈdeɪ.ʃən/",
        "pos": "(n)",
        "ex": "Finding cheap accommodation in the city centre was quite difficult."
    },
    {
        "num": 537,
        "en": "Scenery",
        "vi": "Phong cảnh",
        "ipa": "/ˈsiː.nər.i/",
        "pos": "(n)",
        "ex": "The scenery in the mountainous areas of Vietnam is absolutely breathtaking."
    },
    {
        "num": 538,
        "en": "Technological advancement",
        "vi": "Sự tiến bộ về công nghệ",
        "ipa": "/ˌtek.nəˈlɒdʒ.ɪ.kəl ədˈvɑːns.mənt/",
        "pos": "(n. phrase)",
        "ex": "I am amazed by the rapid technological advancement in recent years."
    },
    {
        "num": 539,
        "en": "Cutting-edge technology",
        "vi": "Công nghệ tiên tiến nhất",
        "ipa": "/ˌkʌt.ɪŋˈedʒ tekˈnɒl.ə.dʒi/",
        "pos": "(n. phrase)",
        "ex": "The new hospital uses cutting-edge technology to treat patients better."
    },
    {
        "num": 540,
        "en": "State-of-the-art",
        "vi": "Hiện đại nhất (công nghệ)",
        "ipa": "/ˌsteɪt.əv.ðiˈɑːt/",
        "pos": "(adj)",
        "ex": "Our school recently bought state-of-the-art computers for the IT lab."
    },
    {
        "num": 541,
        "en": "Technological breakthrough",
        "vi": "Bước đột phá về công nghệ",
        "ipa": "/...ˈbreɪk.θruː/",
        "pos": "(n. phrase)",
        "ex": "The invention of the internet was a massive technological breakthrough."
    },
    {
        "num": 542,
        "en": "Revolutionize the way we live",
        "vi": "Cách mạng hóa cách chúng ta sống",
        "ipa": "/ˌrev.əˈluː.ʃən.aɪz.../",
        "pos": "(v. phrase)",
        "ex": "Smartphones have completely revolutionized the way we live and communicate."
    },
    {
        "num": 543,
        "en": "Tech-savvy",
        "vi": "Am hiểu công nghệ",
        "ipa": "/ˈtekˌsæv.i/",
        "pos": "(adj/n)",
        "ex": "My younger brother is very tech-savvy and fixes all my computer problems."
    },
    {
        "num": 544,
        "en": "Technophobe",
        "vi": "Người sợ/mù công nghệ",
        "ipa": "/ˈtek.nə.fəʊb/",
        "pos": "(n)",
        "ex": "My grandfather is a bit of a technophobe and refuses to use a smartphone."
    },
    {
        "num": 545,
        "en": "Digital native",
        "vi": "Người sinh ra trong thời đại số",
        "ipa": "/ˌdɪdʒ.ɪ.təl ˈneɪ.tɪv/",
        "pos": "(n. phrase)",
        "ex": "As a digital native, I grew up using computers and the internet every day."
    },
    {
        "num": 546,
        "en": "Digital immigrant",
        "vi": "Người tiếp cận công nghệ muộn",
        "ipa": "/ˌdɪdʒ.ɪ.təl ˈɪm.ɪ.ɡrənt/",
        "pos": "(n. phrase)",
        "ex": "My parents are digital immigrants who had to learn how to use the internet later in life."
    },
    {
        "num": 547,
        "en": "Labor-saving device",
        "vi": "Thiết bị tiết kiệm sức lao động",
        "ipa": "/ˈleɪ.bəˌseɪ.vɪŋ dɪˈvaɪs/",
        "pos": "(n. phrase)",
        "ex": "A washing machine is a great labour-saving device for any busy family."
    },
    {
        "num": 548,
        "en": "Obsolete / Outdated",
        "vi": "Lỗi thời / Lạc hậu",
        "ipa": "/ˌɒb.səlˈiːt/ - /ˌaʊtˈdeɪ.tɪd/",
        "pos": "(adj)",
        "ex": "Many physical CD players have become completely obsolete nowadays."
    },
    {
        "num": 549,
        "en": "Become a thing of the past",
        "vi": "Trở thành dĩ vãng (lạc hậu)",
        "ipa": "/bɪˈkʌm ə θɪŋ əv ðə pɑːst/",
        "pos": "(idiom)",
        "ex": "Writing letters by hand has mostly become a thing of the past."
    },
    {
        "num": 550,
        "en": "User-friendly",
        "vi": "Thân thiện với người dùng",
        "ipa": "/ˌjuː.zəˈfrend.li/",
        "pos": "(adj)",
        "ex": "I prefer using this language app because it is incredibly user-friendly."
    },
    {
        "num": 551,
        "en": "Intuitive interface",
        "vi": "Giao diện trực quan (dễ dùng)",
        "ipa": "/ɪnˈtʃuː.ɪ.tɪv ˈɪn.tə.feɪs/",
        "pos": "(n. phrase)",
        "ex": "Tablets are great for kids because they have a very intuitive interface."
    },
    {
        "num": 552,
        "en": "Gadget / Gizmo",
        "vi": "Thiết bị điện tử nhỏ / Đồ chơi công nghệ",
        "ipa": "/ˈɡædʒ.ɪt/ - /ˈɡɪz.məʊ/",
        "pos": "(n)",
        "ex": "I love buying new kitchen gadgets to make cooking faster and easier."
    },
    {
        "num": 553,
        "en": "Wearable device",
        "vi": "Thiết bị công nghệ đeo trên người",
        "ipa": "/ˈweə.rə.bəl dɪˈvaɪs/",
        "pos": "(n. phrase)",
        "ex": "My smartwatch is a wearable device that tracks my daily steps."
    },
    {
        "num": 554,
        "en": "Smart appliance",
        "vi": "Thiết bị gia dụng thông minh",
        "ipa": "/smɑːt əˈplaɪ.əns/",
        "pos": "(n. phrase)",
        "ex": "We bought a smart appliance that I can turn on from my mobile phone."
    },
    {
        "num": 555,
        "en": "Virtual reality (VR)",
        "vi": "Thực tế ảo",
        "ipa": "/ˌvɜː.tʃu.əl riˈæl.ə.ti/",
        "pos": "(n. phrase)",
        "ex": "Playing video games in virtual reality is a truly mind-blowing experience."
    },
    {
        "num": 556,
        "en": "Augmented reality (AR)",
        "vi": "Thực tế tăng cường",
        "ipa": "/ɔːɡˌmen.tɪd riˈæl.ə.ti/",
        "pos": "(n. phrase)",
        "ex": "Augmented reality is becoming very popular in mobile gaming apps."
    },
    {
        "num": 557,
        "en": "Artificial Intelligence (AI)",
        "vi": "Trí tuệ nhân tạo",
        "ipa": "/ˌɑː.tɪˈfɪʃ.əl ɪnˈtel.ɪ.dʒəns/",
        "pos": "(n. phrase)",
        "ex": "Artificial intelligence is rapidly changing how we work and study."
    },
    {
        "num": 558,
        "en": "Machine learning",
        "vi": "Học máy",
        "ipa": "/məˈʃiːn ˌlɜː.nɪŋ/",
        "pos": "(n. phrase)",
        "ex": "Machine learning helps streaming platforms recommend films I might like."
    },
    {
        "num": 559,
        "en": "Automation",
        "vi": "Sự tự động hóa",
        "ipa": "/ˌɔː.təˈmeɪ.ʃən/",
        "pos": "(n)",
        "ex": "Automation in modern factories has replaced many traditional jobs."
    },
    {
        "num": 560,
        "en": "Automated process",
        "vi": "Quy trình tự động",
        "ipa": "/ˈɔː.tə.meɪ.tɪd ˈprəʊ.ses/",
        "pos": "(n. phrase)",
        "ex": "We use an automated process to send weekly emails to our students."
    },
    {
        "num": 561,
        "en": "Replace human labor",
        "vi": "Thay thế sức lao động con người",
        "ipa": "/rɪˈpleɪs ˈhjuː.mən ˈleɪ.bər/",
        "pos": "(v. phrase)",
        "ex": "Many people worry that advanced robots will soon replace human labour."
    },
    {
        "num": 562,
        "en": "Autonomous vehicle / Self-driving car",
        "vi": "Xe tự lái",
        "ipa": "/ɔːˈtɒn.ə.məs ˈviː.ɪ.kəl/",
        "pos": "(n. phrase)",
        "ex": "I would be a bit scared to travel in an autonomous vehicle right now."
    },
    {
        "num": 563,
        "en": "Internet of Things (IoT)",
        "vi": "Internet vạn vật",
        "ipa": "/ˈɪn.tə.net əv θɪŋz/",
        "pos": "(n. phrase)",
        "ex": "The Internet of Things allows all my home devices to connect to the wifi."
    },
    {
        "num": 564,
        "en": "Voice recognition",
        "vi": "Nhận diện giọng nói",
        "ipa": "/vɔɪs ˌrek.əɡˈnɪʃ.ən/",
        "pos": "(n. phrase)",
        "ex": "I use voice recognition to search for information while my hands are busy."
    },
    {
        "num": 565,
        "en": "Facial recognition",
        "vi": "Nhận diện khuôn mặt",
        "ipa": "/ˈfeɪ.ʃəl ˌrek.əɡˈnɪʃ.ən/",
        "pos": "(n. phrase)",
        "ex": "My new smartphone uses facial recognition to unlock the screen instantly."
    },
    {
        "num": 566,
        "en": "High-speed broadband",
        "vi": "Băng thông rộng tốc độ cao",
        "ipa": "/ˌhaɪ.spiːd ˈbrɔːd.bænd/",
        "pos": "(n. phrase)",
        "ex": "Having high-speed broadband is essential for my online English classes."
    },
    {
        "num": 567,
        "en": "Wireless connection",
        "vi": "Kết nối không dây",
        "ipa": "/ˈwaɪə.ləs kəˈnek.ʃən/",
        "pos": "(n. phrase)",
        "ex": "The wireless connection in my bedroom is sometimes quite weak and unstable."
    },
    {
        "num": 568,
        "en": "Seamless integration",
        "vi": "Sự tích hợp mượt mà",
        "ipa": "/ˈsiːm.ləs ˌɪn.tɪˈɡreɪ.ʃən/",
        "pos": "(n. phrase)",
        "ex": "I really love the seamless integration between my tablet and my laptop."
    },
    {
        "num": 569,
        "en": "Glitch / Bug",
        "vi": "Lỗi hệ thống / Lỗi phần mềm",
        "ipa": "/ɡlɪtʃ/ - /bʌɡ/",
        "pos": "(n)",
        "ex": "The video game kept freezing because of a frustrating software glitch."
    },
    {
        "num": 570,
        "en": "Crash",
        "vi": "Sập nguồn / Đứng máy",
        "ipa": "/kræʃ/",
        "pos": "(v/n)",
        "ex": "I lost all my essay draft when my computer suddenly crashed."
    },
    {
        "num": 571,
        "en": "System update",
        "vi": "Cập nhật hệ thống",
        "ipa": "/ˈsɪs.təm ˈʌp.deɪt/",
        "pos": "(n. phrase)",
        "ex": "I always delay the system update on my phone until the last minute."
    },
    {
        "num": 572,
        "en": "Operating system (OS)",
        "vi": "Hệ điều hành",
        "ipa": "/ˈɒp.ər.eɪ.tɪŋ ˌsɪs.təm/",
        "pos": "(n. phrase)",
        "ex": "Windows is probably the most common operating system used in offices."
    },
    {
        "num": 573,
        "en": "Run out of battery",
        "vi": "Hết pin",
        "ipa": "/rʌn aʊt əv ˈbæt.ər.i/",
        "pos": "(v. phrase)",
        "ex": "I need to charge my laptop before it runs out of battery during the lesson."
    },
    {
        "num": 574,
        "en": "Charge my phone",
        "vi": "Sạc điện thoại",
        "ipa": "/tʃɑːdʒ maɪ fəʊn/",
        "pos": "(v. phrase)",
        "ex": "I usually charge my phone overnight so it is fully ready for the morning."
    },
    {
        "num": 575,
        "en": "Battery lifespan",
        "vi": "Tuổi thọ pin",
        "ipa": "/ˈbæt.ər.i ˈlaɪf.spæn/",
        "pos": "(n. phrase)",
        "ex": "The battery lifespan of this new tablet is really impressive."
    },
    {
        "num": 576,
        "en": "Plug in",
        "vi": "Cắm điện",
        "ipa": "/plʌɡ ɪn/",
        "pos": "(phrasal v)",
        "ex": "You just need to plug in the TV and it will turn on automatically."
    },
    {
        "num": 577,
        "en": "Unplug",
        "vi": "Rút phích cắm (hoặc: Ngắt kết nối mạng để xả hơi)",
        "ipa": "/ʌnˈplʌɡ/",
        "pos": "(v)",
        "ex": "It is a good idea to unplug from technology for a few hours every Sunday."
    },
    {
        "num": 578,
        "en": "Browse websites",
        "vi": "Duyệt các trang web",
        "ipa": "/braʊz ˈweb.saɪts/",
        "pos": "(v. phrase)",
        "ex": "I spend a lot of my free time browsing websites for news and entertainment."
    },
    {
        "num": 579,
        "en": "Search engine",
        "vi": "Công cụ tìm kiếm",
        "ipa": "/ˈsɜːtʃ ˌen.dʒɪn/",
        "pos": "(n. phrase)",
        "ex": "Google is the search engine I use every single day to look up information."
    },
    {
        "num": 580,
        "en": "Algorithm",
        "vi": "Thuật toán",
        "ipa": "/ˈæl.ɡə.rɪ.ðəm/",
        "pos": "(n)",
        "ex": "Social media algorithms are designed to show you content you will like."
    },
    {
        "num": 581,
        "en": "Cloud storage",
        "vi": "Lưu trữ đám mây",
        "ipa": "/klaʊd ˈstɔː.rɪdʒ/",
        "pos": "(n. phrase)",
        "ex": "I save all my important photos on cloud storage so I don't lose them."
    },
    {
        "num": 582,
        "en": "Back up data",
        "vi": "Sao lưu dữ liệu",
        "ipa": "/bæk ʌp ˈdeɪ.tə/",
        "pos": "(v. phrase)",
        "ex": "It is vital to back up data regularly just in case your laptop breaks down."
    },
    {
        "num": 583,
        "en": "Data breach",
        "vi": "Sự rò rỉ dữ liệu",
        "ipa": "/ˈdeɪ.tə briːtʃ/",
        "pos": "(n. phrase)",
        "ex": "A massive data breach recently exposed the passwords of millions of users."
    },
    {
        "num": 584,
        "en": "Cyber security",
        "vi": "An ninh mạng",
        "ipa": "/ˌsaɪ.bə.sɪˈkjʊə.rə.ti/",
        "pos": "(n. phrase)",
        "ex": "Cyber security is a growing career field because of the rise in online crime."
    },
    {
        "num": 585,
        "en": "Cybercrime",
        "vi": "Tội phạm công nghệ cao",
        "ipa": "/ˈsaɪ.bə.kraɪm/",
        "pos": "(n)",
        "ex": "We must be very careful online to protect ourselves from cybercrime."
    },
    {
        "num": 586,
        "en": "Hacker",
        "vi": "Tin tặc",
        "ipa": "/ˈhæk.ər/",
        "pos": "(n)",
        "ex": "A hacker managed to steal a lot of money from several bank accounts."
    },
    {
        "num": 587,
        "en": "Identity theft",
        "vi": "Đánh cắp danh tính",
        "ipa": "/aɪˈden.tə.ti θeft/",
        "pos": "(n. phrase)",
        "ex": "Identity theft can completely ruin a person's financial reputation."
    },
    {
        "num": 588,
        "en": "Phishing scam",
        "vi": "Lừa đảo qua mạng (lấy cắp thông tin)",
        "ipa": "/ˈfɪʃ.ɪŋ skæm/",
        "pos": "(n. phrase)",
        "ex": "I received an email that turned out to be a dangerous phishing scam."
    },
    {
        "num": 589,
        "en": "Encrypt data",
        "vi": "Mã hóa dữ liệu",
        "ipa": "/ɪnˈkrɪpt ˈdeɪ.tə/",
        "pos": "(v. phrase)",
        "ex": "Apps like WhatsApp encrypt data to keep our personal messages private."
    },
    {
        "num": 590,
        "en": "Password-protected",
        "vi": "Được bảo vệ bằng mật khẩu",
        "ipa": "/ˈpɑːs.wɜːd prəˈtek.tɪd/",
        "pos": "(adj. phrase)",
        "ex": "All my important school documents are kept in a password-protected folder."
    },
    {
        "num": 591,
        "en": "Two-factor authentication",
        "vi": "Xác thực hai yếu tố",
        "ipa": "/tuː ˈfæk.tər ɔːˌθen.tɪˈkeɪ.ʃən/",
        "pos": "(n. phrase)",
        "ex": "I use two-factor authentication to keep my social media accounts safe."
    },
    {
        "num": 592,
        "en": "Digital age / Information age",
        "vi": "Thời đại số / Thời đại thông tin",
        "ipa": "/ˈdɪdʒ.ɪ.təl eɪdʒ/",
        "pos": "(n. phrase)",
        "ex": "Growing up in the digital age means we have information at our fingertips."
    },
    {
        "num": 593,
        "en": "Digital divide",
        "vi": "Khoảng cách kỹ thuật số (sự chênh lệch tiếp cận công nghệ)",
        "ipa": "/ˌdɪdʒ.ɪ.təl dɪˈvaɪd/",
        "pos": "(n. phrase)",
        "ex": "There is a noticeable digital divide between big cities and rural areas."
    },
    {
        "num": 594,
        "en": "Misinformation / Fake news",
        "vi": "Thông tin sai lệch / Tin giả",
        "ipa": "/ˌmɪs.ɪn.fəˈmeɪ.ʃən/",
        "pos": "(n. phrase)",
        "ex": "We must learn to spot misinformation and fake news on social media."
    },
    {
        "num": 595,
        "en": "Screen time",
        "vi": "Thời gian nhìn màn hình",
        "ipa": "/skriːn taɪm/",
        "pos": "(n. phrase)",
        "ex": "I am trying to reduce my screen time before going to bed."
    },
    {
        "num": 596,
        "en": "Glued to the screen",
        "vi": "Dán mắt vào màn hình",
        "ipa": "/ɡluːd tu ðə skriːn/",
        "pos": "(idiom)",
        "ex": "Teenagers nowadays are constantly glued to the screen of their phones."
    },
    {
        "num": 597,
        "en": "Tech addiction",
        "vi": "Nghiện công nghệ",
        "ipa": "/tek əˈdɪk.ʃən/",
        "pos": "(n. phrase)",
        "ex": "Tech addiction is becoming a serious health problem for many young people."
    },
    {
        "num": 598,
        "en": "Digital detox",
        "vi": "Cai nghiện kỹ thuật số",
        "ipa": "/ˌdɪdʒ.ɪ.təl ˈdiː.tɒks/",
        "pos": "(n. phrase)",
        "ex": "I went on a nature camping trip as a sort of digital detox."
    },
    {
        "num": 599,
        "en": "Short attention span",
        "vi": "Khoảng thời gian tập trung ngắn",
        "ipa": "/ʃɔːt əˈten.ʃən spæn/",
        "pos": "(n. phrase)",
        "ex": "Watching too many short videos can give you a very short attention span."
    },
    {
        "num": 600,
        "en": "Constant connectivity",
        "vi": "Sự kết nối liên tục",
        "ipa": "/ˈkɒn.stənt ˌkɒn.ekˈtɪv.ə.ti/",
        "pos": "(n. phrase)",
        "ex": "Constant connectivity makes it hard to truly switch off from work."
    },
    {
        "num": 601,
        "en": "Stay connected",
        "vi": "Giữ liên lạc/kết nối",
        "ipa": "/steɪ kəˈnek.tɪd/",
        "pos": "(v. phrase)",
        "ex": "I use social media apps mainly to stay connected with my family overseas."
    },
    {
        "num": 602,
        "en": "Distance learning / E-learning",
        "vi": "Học từ xa / Học trực tuyến",
        "ipa": "/ˈdɪs.təns ˌlɜː.nɪŋ/",
        "pos": "(n. phrase)",
        "ex": "Distance learning has become much more popular since the pandemic started."
    },
    {
        "num": 603,
        "en": "Telecommuting / Remote work",
        "vi": "Làm việc từ xa",
        "ipa": "/ˌtel.ɪ.kəˈmjuː.tɪŋ/",
        "pos": "(n. phrase)",
        "ex": "I would love to find a job that allows telecommuting so I can work from home."
    },
    {
        "num": 604,
        "en": "Video conferencing",
        "vi": "Họp trực tuyến qua video",
        "ipa": "/ˈvɪd.i.əʊ ˌkɒn.fər.ən.sɪŋ/",
        "pos": "(n. phrase)",
        "ex": "We use video conferencing every week to speak with our international clients."
    },
    {
        "num": 605,
        "en": "E-commerce",
        "vi": "Thương mại điện tử",
        "ipa": "/ˌiːˈkɒm.ɜːs/",
        "pos": "(n)",
        "ex": "Thanks to e-commerce, I can buy almost anything without leaving my bedroom."
    },
    {
        "num": 606,
        "en": "Cashless society",
        "vi": "Xã hội không dùng tiền mặt",
        "ipa": "/ˌkæʃ.ləs səˈsaɪ.ə.ti/",
        "pos": "(n. phrase)",
        "ex": "I rarely carry cash these days as we are moving towards a cashless society."
    },
    {
        "num": 607,
        "en": "Mobile payment",
        "vi": "Thanh toán qua di động",
        "ipa": "/ˈməʊ.baɪl ˈpeɪ.mənt/",
        "pos": "(n. phrase)",
        "ex": "Mobile payment is so convenient because I only need my phone to buy things."
    },
    {
        "num": 608,
        "en": "Digital wallet",
        "vi": "Ví điện tử",
        "ipa": "/ˌdɪdʒ.ɪ.təl ˈwɒl.ɪt/",
        "pos": "(n. phrase)",
        "ex": "I keep my credit card details securely in my digital wallet."
    },
    {
        "num": 609,
        "en": "Online banking",
        "vi": "Ngân hàng điện tử",
        "ipa": "/ˌɒn.laɪn ˈbæŋ.kɪŋ/",
        "pos": "(n. phrase)",
        "ex": "Online banking allows me to check my balance and transfer money instantly."
    },
    {
        "num": 610,
        "en": "Cryptocurrency",
        "vi": "Tiền điện tử / Tiền ảo",
        "ipa": "/ˈkrɪp.təʊˌkʌr.ən.si/",
        "pos": "(n)",
        "ex": "I don't know much about cryptocurrency, but my older brother invests in it."
    },
    {
        "num": 611,
        "en": "Tech giant",
        "vi": "Ông lớn công nghệ",
        "ipa": "/tek ˈdʒaɪ.ənt/",
        "pos": "(n. phrase)",
        "ex": "It is my dream to work for a tech giant like Google or Apple."
    },
    {
        "num": 612,
        "en": "Start-up ecosystem",
        "vi": "Hệ sinh thái khởi nghiệp",
        "ipa": "/ˈstɑːt.ʌp ˈiː.kəʊˌsɪs.təm/",
        "pos": "(n. phrase)",
        "ex": "My city has a great start-up ecosystem with plenty of support for young entrepreneurs."
    },
    {
        "num": 613,
        "en": "Innovation",
        "vi": "Sự đổi mới",
        "ipa": "/ˌɪn.əˈveɪ.ʃən/",
        "pos": "(n)",
        "ex": "I admire this company because it always focuses on innovation."
    },
    {
        "num": 614,
        "en": "Patent a product",
        "vi": "Cấp bằng sáng chế cho sản phẩm",
        "ipa": "/ˈpeɪ.tənt ə ˈprɒd.ʌkt/",
        "pos": "(v. phrase)",
        "ex": "It is very important to patent a product before someone else copies your idea."
    },
    {
        "num": 615,
        "en": "Mass production",
        "vi": "Sản xuất hàng loạt",
        "ipa": "/mæs prəˈdʌk.ʃən/",
        "pos": "(n. phrase)",
        "ex": "Mass production has made modern electronics much cheaper to buy."
    },
    {
        "num": 616,
        "en": "App developer",
        "vi": "Nhà phát triển ứng dụng",
        "ipa": "/æp dɪˈvel.ə.pər/",
        "pos": "(n. phrase)",
        "ex": "I want to be an app developer and create educational games for children."
    },
    {
        "num": 617,
        "en": "Software engineer",
        "vi": "Kỹ sư phần mềm",
        "ipa": "/ˈsɒft.weər ˌen.dʒɪˈnɪər/",
        "pos": "(n. phrase)",
        "ex": "My best friend works as a software engineer at a famous IT company."
    },
    {
        "num": 618,
        "en": "Write code / Coding",
        "vi": "Viết mã lập trình",
        "ipa": "/raɪt kəʊd/",
        "pos": "(v. phrase)",
        "ex": "I am taking a short online course to learn how to write code."
    },
    {
        "num": 619,
        "en": "Tech support",
        "vi": "Hỗ trợ kỹ thuật",
        "ipa": "/tek səˈpɔːt/",
        "pos": "(n. phrase)",
        "ex": "If my laptop breaks, I always call tech support for help."
    },
    {
        "num": 620,
        "en": "Troubleshoot a problem",
        "vi": "Khắc phục sự cố",
        "ipa": "/ˈtrʌb.əl.ʃuːt/",
        "pos": "(v. phrase)",
        "ex": "It took me hours to troubleshoot a problem with my home internet connection."
    },
    {
        "num": 621,
        "en": "Indispensable part of life",
        "vi": "Phần không thể thiếu của cuộc sống",
        "ipa": "/ˌɪn.dɪˈspen.sə.bəl pɑːt/",
        "pos": "(n. phrase)",
        "ex": "My smartphone has become an absolutely indispensable part of life."
    },
    {
        "num": 622,
        "en": "Enhance productivity",
        "vi": "Tăng cường năng suất",
        "ipa": "/ɪnˈhɑːns ˌprɒd.ʌkˈtɪv.ə.ti/",
        "pos": "(v. phrase)",
        "ex": "Using two monitors really helps me to enhance productivity when doing homework."
    },
    {
        "num": 623,
        "en": "Time-consuming",
        "vi": "Tốn thời gian (khi công nghệ bị lỗi)",
        "ipa": "/ˈtaɪm.kənˌsjuː.mɪŋ/",
        "pos": "(adj)",
        "ex": "Editing long videos on an old computer can be a very time-consuming task."
    },
    {
        "num": 624,
        "en": "Time-saving",
        "vi": "Tiết kiệm thời gian",
        "ipa": "/ˈtaɪmˌseɪ.vɪŋ/",
        "pos": "(adj)",
        "ex": "Buying groceries online is a brilliant time-saving idea for busy families."
    },
    {
        "num": 625,
        "en": "Convenience",
        "vi": "Sự tiện lợi",
        "ipa": "/kənˈviː.ni.əns/",
        "pos": "(n)",
        "ex": "I really enjoy the convenience of ordering food through a mobile app."
    },
    {
        "num": 626,
        "en": "Cyber space",
        "vi": "Không gian mạng",
        "ipa": "/ˈsaɪ.bə speɪs/",
        "pos": "(n. phrase)",
        "ex": "We must be very careful about sharing personal information in cyber space."
    },
    {
        "num": 627,
        "en": "Scroll mindlessly",
        "vi": "Lướt (điện thoại) trong vô thức",
        "ipa": "/skrəʊl ˈmaɪnd.ləs.li/",
        "pos": "(v. phrase)",
        "ex": "Before going to bed, I often scroll mindlessly through Instagram."
    },
    {
        "num": 628,
        "en": "Ping an email",
        "vi": "Gửi nhanh một email",
        "ipa": "/pɪŋ ən ˈiː.meɪl/",
        "pos": "(v. phrase)",
        "ex": "I will ping an email to my teacher to ask about the weekend homework."
    },
    {
        "num": 629,
        "en": "Push notification",
        "vi": "Thông báo đẩy (trên màn hình)",
        "ipa": "/pʊʃ ˌnəʊ.tɪ.fɪˈkeɪ.ʃən/",
        "pos": "(n. phrase)",
        "ex": "I get a push notification on my phone every time there is breaking news."
    },
    {
        "num": 630,
        "en": "Mute notifications",
        "vi": "Tắt thông báo",
        "ipa": "/mjuːt.../",
        "pos": "(v. phrase)",
        "ex": "I usually mute notifications when I am studying to avoid distractions."
    },
    {
        "num": 631,
        "en": "Tech specification (Specs)",
        "vi": "Thông số kỹ thuật",
        "ipa": "/tek ˌspes.ɪ.fɪˈkeɪ.ʃən/",
        "pos": "(n. phrase)",
        "ex": "Before buying a new laptop, I always read the tech specifications carefully."
    },
    {
        "num": 632,
        "en": "High definition (HD)",
        "vi": "Độ nét cao",
        "ipa": "/ˌhaɪ def.ɪˈnɪʃ.ən/",
        "pos": "(n. phrase)",
        "ex": "Watching nature documentaries in high definition is a fantastic experience."
    },
    {
        "num": 633,
        "en": "Touch screen",
        "vi": "Màn hình cảm ứng",
        "ipa": "/ˈtʌtʃ.skriːn/",
        "pos": "(n. phrase)",
        "ex": "My new tablet has a touch screen, which makes drawing very easy."
    },
    {
        "num": 634,
        "en": "Portable",
        "vi": "Dễ mang theo / Di động",
        "ipa": "/ˈpɔː.tə.bəl/",
        "pos": "(adj)",
        "ex": "I prefer a portable speaker so I can listen to music when I go camping."
    },
    {
        "num": 635,
        "en": "Handy",
        "vi": "Tiện dụng",
        "ipa": "/ˈhæn.di/",
        "pos": "(adj)",
        "ex": "A tablet is very handy for reading e-books while travelling on the train."
    },
    {
        "num": 636,
        "en": "A double-edged sword",
        "vi": "Con dao hai lưỡi (ưu & nhược điểm)",
        "ipa": "/ə ˌdʌb.əl.edʒd ˈsɔːd/",
        "pos": "(idiom)",
        "ex": "Social media is definitely a double-edged sword with both benefits and drawbacks."
    },
    {
        "num": 637,
        "en": "Not rocket science",
        "vi": "Không có gì phức tạp/khó hiểu",
        "ipa": "/nɒt ˈrɒk.ɪt ˈsaɪ.əns/",
        "pos": "(idiom)",
        "ex": "Setting up the new television was quite easy; it is not rocket science."
    },
    {
        "num": 638,
        "en": "Reinvent the wheel",
        "vi": "Phát minh lại cái đã có (mất thời gian vô ích)",
        "ipa": "/ˌriː.ɪnˈvent ðə wiːl/",
        "pos": "(idiom)",
        "ex": "We shouldn't reinvent the wheel when there is already a perfectly good software solution."
    },
    {
        "num": 639,
        "en": "Pull the plug",
        "vi": "Chấm dứt (một dự án/công việc)",
        "ipa": "/pʊl ðə plʌɡ/",
        "pos": "(idiom)",
        "ex": "After trying for three years, the company finally pulled the plug on the project."
    },
    {
        "num": 640,
        "en": "Get your wires crossed",
        "vi": "Hiểu nhầm nhau",
        "ipa": "/ɡet jɔːr ˈwaɪəz krɒst/",
        "pos": "(idiom)",
        "ex": "We got our wires crossed, so I waited at the café while he waited at the cinema."
    },
    {
        "num": 641,
        "en": "Push the right buttons",
        "vi": "Gây phản ứng (thường là làm ai tức giận hoặc tạo hiệu ứng tốt)",
        "ipa": "/pʊʃ ðə raɪt ˈbʌt.ənz/",
        "pos": "(idiom)",
        "ex": "He knows exactly how to push the right buttons to make his sister angry."
    },
    {
        "num": 642,
        "en": "Light years ahead",
        "vi": "Đi trước thời đại rất xa",
        "ipa": "/laɪt jɪərz əˈhed/",
        "pos": "(idiom)",
        "ex": "This new medical equipment is light years ahead of what we used to have."
    },
    {
        "num": 643,
        "en": "At the push of a button",
        "vi": "Rất dễ dàng và nhanh chóng",
        "ipa": "/ət ðə pʊʃ əv ə ˈbʌt.ən/",
        "pos": "(idiom)",
        "ex": "You can now order a taxi right to your door at the push of a button."
    },
    {
        "num": 644,
        "en": "Wired into",
        "vi": "Rất tập trung / kết nối chặt chẽ vào thiết bị",
        "ipa": "/waɪəd ˈɪn.tu/",
        "pos": "(adj. phrase)",
        "ex": "Teenagers these days seem constantly wired into their mobile devices."
    },
    {
        "num": 645,
        "en": "Reboot / Restart",
        "vi": "Khởi động lại",
        "ipa": "/ˌriːˈbuːt/",
        "pos": "(v)",
        "ex": "When my computer freezes, the first thing I do is reboot it."
    },
    {
        "num": 646,
        "en": "Install an application",
        "vi": "Cài đặt ứng dụng",
        "ipa": "/ɪnˈstɔːl ən ˌæp.lɪˈkeɪ.ʃən/",
        "pos": "(v. phrase)",
        "ex": "I need to install an application to help me edit these photos."
    },
    {
        "num": 647,
        "en": "Uninstall",
        "vi": "Gỡ cài đặt",
        "ipa": "/ˌʌn.ɪnˈstɔːl/",
        "pos": "(v)",
        "ex": "My phone was full, so I had to uninstall a few games I don't play anymore."
    },
    {
        "num": 648,
        "en": "Upgrade hardware",
        "vi": "Nâng cấp phần cứng",
        "ipa": "/ʌpˈɡreɪd ˈhɑːd.weər/",
        "pos": "(v. phrase)",
        "ex": "I had to upgrade my computer's hardware to play the latest video games smoothly."
    },
    {
        "num": 649,
        "en": "Download/Upload speed",
        "vi": "Tốc độ tải xuống/tải lên",
        "ipa": "/ˈdaʊn.ləʊd spiːd/",
        "pos": "(n. phrase)",
        "ex": "The download speed at my house is terrible, so films always freeze."
    },
    {
        "num": 650,
        "en": "Stream a video",
        "vi": "Phát/xem video trực tuyến",
        "ipa": "/striːm ə ˈvɪd.i.əʊ/",
        "pos": "(v. phrase)",
        "ex": "At the weekend, I love to stream a video and relax on the sofa."
    },
    {
        "num": 651,
        "en": "Buffering",
        "vi": "Đang tải (bị giật lag khi xem video)",
        "ipa": "/ˈbʌf.ər.ɪŋ/",
        "pos": "(n)",
        "ex": "It is so annoying when a film keeps buffering because of slow internet."
    },
    {
        "num": 652,
        "en": "Computer virus",
        "vi": "Virus máy tính",
        "ipa": "/kəmˈpjuː.tə ˈvaɪə.rəs/",
        "pos": "(n. phrase)",
        "ex": "My laptop was completely ruined by a nasty computer virus last year."
    },
    {
        "num": 653,
        "en": "Anti-virus software",
        "vi": "Phần mềm diệt virus",
        "ipa": "/ˌæn.tiˈvaɪə.rəs ˈsɒft.weər/",
        "pos": "(n. phrase)",
        "ex": "You should always install reliable anti-virus software to protect your data."
    },
    {
        "num": 654,
        "en": "Firewall",
        "vi": "Tường lửa (bảo mật)",
        "ipa": "/ˈfaɪə.wɔːl/",
        "pos": "(n)",
        "ex": "A strong firewall helps keep hackers out of the school network."
    },
    {
        "num": 655,
        "en": "Pop-up ad",
        "vi": "Quảng cáo bật lên",
        "ipa": "/ˈpɒp.ʌp æd/",
        "pos": "(n. phrase)",
        "ex": "I installed an ad blocker because every website I visited had a pop-up ad."
    },
    {
        "num": 656,
        "en": "Spam folder",
        "vi": "Hộp thư rác",
        "ipa": "/spæm ˈfəʊl.dər/",
        "pos": "(n. phrase)",
        "ex": "I almost missed the job interview because the email went straight to my spam folder."
    },
    {
        "num": 657,
        "en": "Block a user",
        "vi": "Chặn người dùng",
        "ipa": "/blɒk ə ˈjuː.zər/",
        "pos": "(v. phrase)",
        "ex": "If someone sends me rude messages online, I will immediately block the user."
    },
    {
        "num": 658,
        "en": "Report an issue",
        "vi": "Báo cáo sự cố",
        "ipa": "/rɪˈpɔːt ən ˈɪʃ.uː/",
        "pos": "(v. phrase)",
        "ex": "I had to report an issue to the app developer because the game kept crashing."
    },
    {
        "num": 659,
        "en": "GPS navigation",
        "vi": "Hệ thống định vị toàn cầu",
        "ipa": "/ˌdʒiː.piːˈes ˌnæv.ɪˈɡeɪ.ʃən/",
        "pos": "(n. phrase)",
        "ex": "Without GPS navigation, I would definitely get lost driving in a new city."
    },
    {
        "num": 660,
        "en": "Location tracking",
        "vi": "Theo dõi vị trí",
        "ipa": "/ləʊˈkeɪ.ʃən ˈtræk.ɪŋ/",
        "pos": "(n. phrase)",
        "ex": "I turned off location tracking on my phone to protect my privacy."
    },
    {
        "num": 661,
        "en": "Telecommunication",
        "vi": "Viễn thông",
        "ipa": "/ˌtel.ɪ.kəˌmjuː.nɪˈkeɪ.ʃən/",
        "pos": "(n)",
        "ex": "The telecommunication industry has grown incredibly fast over the last decade."
    },
    {
        "num": 662,
        "en": "Satellite",
        "vi": "Vệ tinh",
        "ipa": "/ˈsæt.əl.aɪt/",
        "pos": "(n)",
        "ex": "We get our television signal from a satellite in space."
    },
    {
        "num": 663,
        "en": "Space exploration",
        "vi": "Khám phá vũ trụ",
        "ipa": "/speɪs ˌek.spləˈreɪ.ʃən/",
        "pos": "(n. phrase)",
        "ex": "Space exploration helps us understand more about our own planet."
    },
    {
        "num": 664,
        "en": "Genetic engineering",
        "vi": "Công nghệ gen",
        "ipa": "/dʒəˌnet.ɪk ˌen.dʒɪˈnɪə.rɪŋ/",
        "pos": "(n. phrase)",
        "ex": "Genetic engineering might help scientists cure terrible diseases in the future."
    },
    {
        "num": 665,
        "en": "Clone",
        "vi": "Nhân bản vô tính",
        "ipa": "/kləʊn/",
        "pos": "(v/n)",
        "ex": "It is incredible that scientists managed to clone a sheep many years ago."
    },
    {
        "num": 666,
        "en": "Biometrics",
        "vi": "Công nghệ sinh trắc học (vân tay/mống mắt)",
        "ipa": "/ˌbaɪ.əʊˈmet.rɪks/",
        "pos": "(n)",
        "ex": "Airports now use biometrics like facial scanning to speed up security checks."
    },
    {
        "num": 667,
        "en": "Fingerprint scanner",
        "vi": "Máy quét vân tay",
        "ipa": "/ˈfɪŋ.ɡə.prɪnt ˈskæn.ər/",
        "pos": "(n. phrase)",
        "ex": "My phone has a fingerprint scanner so only I can unlock it."
    },
    {
        "num": 668,
        "en": "3D printing",
        "vi": "Công nghệ in 3D",
        "ipa": "/ˌθriː.diː ˈprɪn.tɪŋ/",
        "pos": "(n. phrase)",
        "ex": "3D printing is amazing because you can create almost any object from scratch."
    },
    {
        "num": 669,
        "en": "Nanotechnology",
        "vi": "Công nghệ nano",
        "ipa": "/ˌnæn.əʊ.tekˈnɒl.ə.dʒi/",
        "pos": "(n)",
        "ex": "Nanotechnology could revolutionise medicine by delivering drugs directly to cells."
    },
    {
        "num": 670,
        "en": "Renewable energy tech",
        "vi": "Công nghệ năng lượng tái tạo",
        "ipa": "/rɪˈnjuː.ə.bəl ˈen.ə.dʒi tek/",
        "pos": "(n. phrase)",
        "ex": "Investing in renewable energy tech is essential to fight climate change."
    },
    {
        "num": 671,
        "en": "Electric vehicle (EV)",
        "vi": "Xe điện",
        "ipa": "/ɪˈlek.trɪk ˈviː.ɪ.kəl/",
        "pos": "(n. phrase)",
        "ex": "I am saving money to buy an electric vehicle because it is better for the environment."
    },
    {
        "num": 672,
        "en": "Charging station",
        "vi": "Trạm sạc điện",
        "ipa": "/ˈtʃɑː.dʒɪŋ ˈsteɪ.ʃən/",
        "pos": "(n. phrase)",
        "ex": "We need more public charging stations before electric cars become truly popular."
    },
    {
        "num": 673,
        "en": "Emission reduction",
        "vi": "Giảm phát thải (nhờ công nghệ)",
        "ipa": "/ɪˈmɪʃ.ən rɪˈdʌk.ʃən/",
        "pos": "(n. phrase)",
        "ex": "Emission reduction should be a top priority for all manufacturing companies."
    },
    {
        "num": 674,
        "en": "Eco-friendly tech",
        "vi": "Công nghệ thân thiện môi trường",
        "ipa": "/ˈiː.kəʊ ˈfrend.li tek/",
        "pos": "(n. phrase)",
        "ex": "I always try to buy eco-friendly tech that consumes less electricity."
    },
    {
        "num": 675,
        "en": "Technological dependence",
        "vi": "Sự phụ thuộc vào công nghệ",
        "ipa": "/...dɪˈpen.dəns/",
        "pos": "(n. phrase)",
        "ex": "Some parents worry about their children's growing technological dependence."
    },
    {
        "num": 676,
        "en": "Loss of manual skills",
        "vi": "Sự đánh mất các kỹ năng thủ công",
        "ipa": "/lɒs əv ˈmæn.ju.əl skɪlz/",
        "pos": "(n. phrase)",
        "ex": "Due to the rise of computers, there has been a noticeable loss of manual skills."
    },
    {
        "num": 677,
        "en": "Sedentary lifestyle",
        "vi": "Lối sống thụ động (do dùng nhiều thiết bị)",
        "ipa": "/ˈsed.ən.tər.i ˈlaɪf.staɪl/",
        "pos": "(n. phrase)",
        "ex": "Working at a desk all day can easily lead to a sedentary lifestyle."
    },
    {
        "num": 678,
        "en": "Online harassment",
        "vi": "Quấy rối trực tuyến",
        "ipa": "/ˌɒn.laɪn ˈhær.əs.mənt/",
        "pos": "(n. phrase)",
        "ex": "Online harassment is a serious issue that affects many teenagers today."
    },
    {
        "num": 679,
        "en": "Troll",
        "vi": "Kẻ chơi khăm/chọc phá trên mạng",
        "ipa": "/trɒl/",
        "pos": "(n/v)",
        "ex": "It is best to ignore a troll rather than arguing with them in the comments."
    },
    {
        "num": 680,
        "en": "Clickbait",
        "vi": "Tiêu đề câu view",
        "ipa": "/ˈklɪk.beɪt/",
        "pos": "(n)",
        "ex": "I hate clicking on news articles that turn out to be nothing but clickbait."
    },
    {
        "num": 681,
        "en": "Subscribe to a channel",
        "vi": "Đăng ký một kênh",
        "ipa": "/səbˈskraɪb tu ə ˈtʃæn.əl/",
        "pos": "(v. phrase)",
        "ex": "I usually subscribe to a channel if their cooking videos are easy to follow."
    },
    {
        "num": 682,
        "en": "Premium subscription",
        "vi": "Gói đăng ký trả phí",
        "ipa": "/ˈpriː.mi.əm səbˈskrɪp.ʃən/",
        "pos": "(n. phrase)",
        "ex": "I pay for a premium subscription to listen to music without any advertisements."
    },
    {
        "num": 683,
        "en": "Freemium model",
        "vi": "Mô hình miễn phí cơ bản (nhưng thu phí tính năng cao cấp)",
        "ipa": "/ˈfriː.mi.əm ˈmɒd.əl/",
        "pos": "(n. phrase)",
        "ex": "Many mobile games use a freemium model where you pay for extra features."
    },
    {
        "num": 684,
        "en": "Monetize content",
        "vi": "Kiếm tiền từ nội dung số",
        "ipa": "/ˈmʌn.ɪ.taɪz ˈkɒn.tent/",
        "pos": "(v. phrase)",
        "ex": "Successful YouTubers know exactly how to monetize content through sponsorships."
    },
    {
        "num": 685,
        "en": "Tech literacy",
        "vi": "Trình độ/sự hiểu biết về công nghệ",
        "ipa": "/tek ˈlɪt.ər.ə.si/",
        "pos": "(n. phrase)",
        "ex": "Improving tech literacy is very important for elderly people in today's world."
    },
    {
        "num": 686,
        "en": "Clear browsing history",
        "vi": "Xóa lịch sử duyệt web",
        "ipa": "/klɪər ˈbraʊ.zɪŋ ˈhɪs.tər.i/",
        "pos": "(v. phrase)",
        "ex": "I always clear my browsing history when I use a public computer at the library."
    },
    {
        "num": 687,
        "en": "Cookie consent",
        "vi": "Sự đồng ý theo dõi cookie",
        "ipa": "/ˈkʊk.i kənˈsent/",
        "pos": "(n. phrase)",
        "ex": "It is a bit annoying to accept the cookie consent pop-up on every single website."
    },
    {
        "num": 688,
        "en": "End-to-end encryption",
        "vi": "Mã hóa đầu cuối",
        "ipa": "/ˌend.tu.end ɪnˈkrɪp.ʃən/",
        "pos": "(n. phrase)",
        "ex": "Messaging apps use end-to-end encryption so nobody else can read your texts."
    },
    {
        "num": 689,
        "en": "Virtual assistant",
        "vi": "Trợ lý ảo (như Siri/Alexa)",
        "ipa": "/ˌvɜː.tʃu.əl əˈsɪs.tənt/",
        "pos": "(n. phrase)",
        "ex": "I often ask my virtual assistant to set an alarm or check the weather."
    },
    {
        "num": 690,
        "en": "Smart home system",
        "vi": "Hệ thống nhà thông minh",
        "ipa": "/smɑːt həʊm ˈsɪs.təm/",
        "pos": "(n. phrase)",
        "ex": "We installed a smart home system so we can control the lights using our phones."
    },
    {
        "num": 691,
        "en": "Motion sensor",
        "vi": "Cảm biến chuyển động",
        "ipa": "/ˈməʊ.ʃən ˈsen.sər/",
        "pos": "(n. phrase)",
        "ex": "The lights in the hallway use a motion sensor and turn on automatically."
    },
    {
        "num": 692,
        "en": "Robot vacuum",
        "vi": "Robot hút bụi",
        "ipa": "/ˈrəʊ.bɒt ˈvæk.juːm/",
        "pos": "(n. phrase)",
        "ex": "My robot vacuum cleans the floor while I am at work, which is so helpful."
    },
    {
        "num": 693,
        "en": "Gadget-obsessed",
        "vi": "Cuồng đồ công nghệ",
        "ipa": "/ˈɡædʒ.ɪt əbˈsest/",
        "pos": "(adj)",
        "ex": "My friend is completely gadget-obsessed and buys a new phone every year."
    },
    {
        "num": 694,
        "en": "Keep up with technology",
        "vi": "Cập nhật công nghệ",
        "ipa": "/kiːp ʌp wɪð tekˈnɒl.ə.dʒi/",
        "pos": "(v. phrase)",
        "ex": "It is quite difficult to keep up with technology because it changes so rapidly."
    },
    {
        "num": 695,
        "en": "Fall behind",
        "vi": "Tụt hậu",
        "ipa": "/fɔːl bɪˈhaɪnd/",
        "pos": "(v. phrase)",
        "ex": "If companies don't innovate, they will quickly fall behind their competitors."
    },
    {
        "num": 696,
        "en": "Pioneer in the field",
        "vi": "Người/công ty tiên phong trong lĩnh vực",
        "ipa": "/ˌpaɪəˈnɪər ɪn ðə fiːld/",
        "pos": "(n. phrase)",
        "ex": "Apple has always been a pioneer in the field of mobile technology."
    },
    {
        "num": 697,
        "en": "Revolutionary idea",
        "vi": "Ý tưởng mang tính cách mạng",
        "ipa": "/ˌrev.əˈluː.ʃən.ər.i aɪˈdɪə/",
        "pos": "(n. phrase)",
        "ex": "The touchscreen was a revolutionary idea that changed mobile phones forever."
    },
    {
        "num": 698,
        "en": "Disruptive technology",
        "vi": "Công nghệ đột phá (thay đổi hoàn toàn thị trường)",
        "ipa": "/dɪsˈrʌp.tɪv tekˈnɒl.ə.dʒi/",
        "pos": "(n. phrase)",
        "ex": "Artificial intelligence is a disruptive technology that is changing many industries."
    },
    {
        "num": 699,
        "en": "Mainstream",
        "vi": "Phổ biến / Đại trà",
        "ipa": "/ˈmeɪn.striːm/",
        "pos": "(adj)",
        "ex": "Electric cars are finally becoming mainstream after years of development."
    },
    {
        "num": 700,
        "en": "Niche market",
        "vi": "Thị trường ngách (đối với đồ công nghệ đặc thù)",
        "ipa": "/niːʃ ˈmɑː.kɪt/",
        "pos": "(n. phrase)",
        "ex": "Vegan dog food is a niche market, but it is growing quickly."
    },
    {
        "num": 701,
        "en": "Prototype",
        "vi": "Nguyên mẫu (sản phẩm thử nghiệm)",
        "ipa": "/ˈprəʊ.tə.taɪp/",
        "pos": "(n)",
        "ex": "The company sent us a prototype of the new phone to test before the official release."
    },
    {
        "num": 702,
        "en": "Beta version",
        "vi": "Phiên bản thử nghiệm (phần mềm)",
        "ipa": "/ˈbiː.tə ˈvɜː.ʃən/",
        "pos": "(n. phrase)",
        "ex": "I am currently trying out the beta version of this new language learning app."
    },
    {
        "num": 703,
        "en": "Launch a product",
        "vi": "Ra mắt sản phẩm",
        "ipa": "/lɔːntʃ ə ˈprɒd.ʌkt/",
        "pos": "(v. phrase)",
        "ex": "My company plans to launch a product that will help students study much faster."
    },
    {
        "num": 704,
        "en": "Pre-order",
        "vi": "Đặt hàng trước",
        "ipa": "/ˌpriːˈɔː.dər/",
        "pos": "(v/n)",
        "ex": "I was so excited for the new video game that I decided to pre-order it."
    },
    {
        "num": 705,
        "en": "Early adopter",
        "vi": "Người dùng sớm (những người đầu tiên mua sản phẩm công nghệ mới)",
        "ipa": "/ˌɜː.li əˈdɒp.tər/",
        "pos": "(n. phrase)",
        "ex": "I consider myself an early adopter because I always buy the newest gadgets."
    },
    {
        "num": 706,
        "en": "Tech specs",
        "vi": "Thông số kỹ thuật (viết tắt)",
        "ipa": "/tek speks/",
        "pos": "(n. phrase)",
        "ex": "I don't really understand all the tech specs when I buy a new laptop."
    },
    {
        "num": 707,
        "en": "Pixelated",
        "vi": "Bị vỡ nét (hình ảnh)",
        "ipa": "/ˈpɪk.səl.eɪ.tɪd/",
        "pos": "(adj)",
        "ex": "The photo I took in the dark turned out completely pixelated."
    },
    {
        "num": 708,
        "en": "High-res (resolution)",
        "vi": "Độ phân giải cao",
        "ipa": "/ˌhaɪ ˈrez/",
        "pos": "(adj/n)",
        "ex": "I prefer watching nature documentaries on a high-res screen for better picture quality."
    },
    {
        "num": 709,
        "en": "Compatibility",
        "vi": "Sự tương thích (giữa các thiết bị/phần mềm)",
        "ipa": "/kəmˌpæt.əˈbɪl.ə.ti/",
        "pos": "(n)",
        "ex": "I had to buy a new charger due to a lack of compatibility with my old phone."
    },
    {
        "num": 710,
        "en": "Sync data",
        "vi": "Đồng bộ hóa dữ liệu",
        "ipa": "/sɪŋk ˈdeɪ.tə/",
        "pos": "(v. phrase)",
        "ex": "I always sync data between my phone and my laptop to keep my documents safe."
    },
    {
        "num": 711,
        "en": "Offline mode",
        "vi": "Chế độ ngoại tuyến",
        "ipa": "/ˌɒfˈlaɪn məʊd/",
        "pos": "(n. phrase)",
        "ex": "I downloaded a few films to watch in offline mode during the long flight."
    },
    {
        "num": 712,
        "en": "Server",
        "vi": "Máy chủ",
        "ipa": "/ˈsɜː.vər/",
        "pos": "(n)",
        "ex": "The online game stopped working because their main server went down."
    },
    {
        "num": 713,
        "en": "Database",
        "vi": "Cơ sở dữ liệu",
        "ipa": "/ˈdeɪ.tə.beɪs/",
        "pos": "(n)",
        "ex": "The university keeps all student records securely in a central database."
    },
    {
        "num": 714,
        "en": "Outsourcing",
        "vi": "Thuê ngoài (nhân lực IT)",
        "ipa": "/ˈaʊtˌsɔː.sɪŋ/",
        "pos": "(n)",
        "ex": "The tech company relies heavily on outsourcing for its customer service."
    },
    {
        "num": 715,
        "en": "Silicon Valley",
        "vi": "Thung lũng Silicon (biểu tượng của ngành công nghệ)",
        "ipa": "/ˌsɪl.ɪ.kən ˈvæl.i/",
        "pos": "(n. phrase)",
        "ex": "Many young software engineers dream of working for a company in Silicon Valley."
    },
    {
        "num": 716,
        "en": "Telehealth / Telemedicine",
        "vi": "Khám bệnh từ xa",
        "ipa": "/ˈtel.i.helθ/",
        "pos": "(n)",
        "ex": "Telehealth is very convenient because I can consult my doctor without leaving home."
    },
    {
        "num": 717,
        "en": "E-government",
        "vi": "Chính phủ điện tử",
        "ipa": "/ˈiːˌɡʌv.ən.mənt/",
        "pos": "(n. phrase)",
        "ex": "Thanks to e-government services, renewing my passport online was very fast."
    },
    {
        "num": 718,
        "en": "Smart city",
        "vi": "Thành phố thông minh",
        "ipa": "/smɑːt ˈsɪt.i/",
        "pos": "(n. phrase)",
        "ex": "Living in a smart city means that traffic and public transport are managed by AI."
    },
    {
        "num": 719,
        "en": "Drone",
        "vi": "Máy bay không người lái",
        "ipa": "/drəʊn/",
        "pos": "(n)",
        "ex": "I bought a drone to take beautiful aerial photographs when I go travelling."
    },
    {
        "num": 720,
        "en": "Tech ethics",
        "vi": "Đạo đức công nghệ",
        "ipa": "/tek ˈeθ.ɪks/",
        "pos": "(n. phrase)",
        "ex": "We really need to consider tech ethics when developing new artificial intelligence."
    },
    {
        "num": 721,
        "en": "Facilitate communication",
        "vi": "Tạo điều kiện thuận lợi cho giao tiếp",
        "ipa": "/fəˈsɪl.ɪ.teɪt.../",
        "pos": "(v. phrase)",
        "ex": "Apps like WhatsApp really facilitate communication between people across the world."
    },
    {
        "num": 722,
        "en": "Bridge the geographical gap",
        "vi": "Thu hẹp khoảng cách địa lý",
        "ipa": "/brɪdʒ ðə ˌdʒiː.əˈɡræf.ɪ.kəl ɡæp/",
        "pos": "(v. phrase)",
        "ex": "The internet has helped to bridge the geographical gap between me and my friends abroad."
    },
    {
        "num": 723,
        "en": "A wealth of information",
        "vi": "Một kho tàng thông tin",
        "ipa": "/ə welθ əv ˌɪn.fəˈmeɪ.ʃən/",
        "pos": "(n. phrase)",
        "ex": "The internet provides us with a wealth of information for our research projects."
    },
    {
        "num": 724,
        "en": "Readily available",
        "vi": "Luôn có sẵn / Dễ dàng truy cập",
        "ipa": "/ˈred.əl.i əˈveɪ.lə.bəl/",
        "pos": "(adj. phrase)",
        "ex": "These days, news from around the world is readily available on our smartphones."
    },
    {
        "num": 725,
        "en": "Interactive learning",
        "vi": "Học tập mang tính tương tác",
        "ipa": "/ˌɪn.təˈræk.tɪv ˈlɜː.nɪŋ/",
        "pos": "(n. phrase)",
        "ex": "I prefer interactive learning because it keeps me fully engaged during the lesson."
    },
    {
        "num": 726,
        "en": "Engaging content",
        "vi": "Nội dung lôi cuốn",
        "ipa": "/ɪnˈɡeɪ.dʒɪŋ ˈkɒn.tent/",
        "pos": "(n. phrase)",
        "ex": "Good teachers always try to prepare engaging content for their students."
    },
    {
        "num": 727,
        "en": "Eye strain",
        "vi": "Mỏi mắt (do nhìn màn hình)",
        "ipa": "/aɪ streɪn/",
        "pos": "(n. phrase)",
        "ex": "Staring at the computer screen for too long gives me terrible eye strain."
    },
    {
        "num": 728,
        "en": "Posture problems",
        "vi": "Các vấn đề về tư thế (do ngồi máy tính nhiều)",
        "ipa": "/ˈpɒs.tʃər ˈprɒb.ləmz/",
        "pos": "(n. phrase)",
        "ex": "I try to sit up straight to avoid posture problems from working at my desk."
    },
    {
        "num": 729,
        "en": "Technological hazard",
        "vi": "Mối nguy hiểm từ công nghệ",
        "ipa": "/...ˈhæz.əd/",
        "pos": "(n. phrase)",
        "ex": "Cyberbullying is a serious technological hazard that affects many young people."
    },
    {
        "num": 730,
        "en": "Data monetization",
        "vi": "Việc kiếm tiền từ dữ liệu (người dùng)",
        "ipa": "/ˈdeɪ.tə ˌmʌn.ɪ.taɪ.zeɪ.ʃən/",
        "pos": "(n. phrase)",
        "ex": "I disagree with the data monetization practices of some big social media companies."
    },
    {
        "num": 731,
        "en": "Unprecedented changes",
        "vi": "Những thay đổi chưa từng có",
        "ipa": "/ʌnˈpres.ɪ.den.tɪd ˈtʃeɪn.dʒɪz/",
        "pos": "(n. phrase)",
        "ex": "The pandemic caused unprecedented changes in the way we work and study."
    },
    {
        "num": 732,
        "en": "Empower people",
        "vi": "Trao quyền/Tạo điều kiện cho mọi người",
        "ipa": "/ɪmˈpaʊər ˈpiː.pəl/",
        "pos": "(v. phrase)",
        "ex": "Good education can empower people to improve their own lives and communities."
    },
    {
        "num": 733,
        "en": "Shape the future",
        "vi": "Định hình tương lai",
        "ipa": "/ʃeɪp ðə ˈfjuː.tʃər/",
        "pos": "(v. phrase)",
        "ex": "I believe that the environmental decisions we make today will shape the future."
    },
    {
        "num": 734,
        "en": "Global warming",
        "vi": "Sự nóng lên toàn cầu",
        "ipa": "/ˌɡləʊ.bəl ˈwɔː.mɪŋ/",
        "pos": "(n. phrase)",
        "ex": "Global warming is a huge threat to many coastal cities in my country."
    },
    {
        "num": 735,
        "en": "Greenhouse effect",
        "vi": "Hiệu ứng nhà kính",
        "ipa": "/ˈɡriːn.haʊs ɪˈfekt/",
        "pos": "(n. phrase)",
        "ex": "The greenhouse effect is causing the Earth's temperature to rise dangerously."
    },
    {
        "num": 736,
        "en": "Greenhouse gas emissions",
        "vi": "Lượng khí thải nhà kính",
        "ipa": "/ˈɡriːn.haʊs ɡæs ɪˈmɪʃ.ənz/",
        "pos": "(n. phrase)",
        "ex": "We need to quickly reduce greenhouse gas emissions to protect the environment."
    },
    {
        "num": 737,
        "en": "Carbon footprint",
        "vi": "Dấu chân carbon (lượng CO2 thải ra)",
        "ipa": "/ˌkɑː.bən ˈfʊt.prɪnt/",
        "pos": "(n. phrase)",
        "ex": "I try to walk or take the bus instead of driving to reduce my carbon footprint."
    },
    {
        "num": 738,
        "en": "Ozone layer depletion",
        "vi": "Sự suy giảm tầng ozone",
        "ipa": "/ˈəʊ.zəʊn ˌleɪ.ər dɪˈpliː.ʃən/",
        "pos": "(n. phrase)",
        "ex": "Ozone layer depletion means we have to be more careful about sun exposure."
    },
    {
        "num": 739,
        "en": "Environmental degradation",
        "vi": "Sự suy thoái môi trường",
        "ipa": "/ɪnˌvaɪ.rənˈmen.təl ˌdeɡ.rəˈdeɪ.ʃən/",
        "pos": "(n. phrase)",
        "ex": "Environmental degradation in my hometown is mostly caused by plastic waste."
    },
    {
        "num": 740,
        "en": "Ecological balance",
        "vi": "Cân bằng sinh thái",
        "ipa": "/ˌiː.kəˈlɒdʒ.ɪ.kəl ˈbæl.əns/",
        "pos": "(n. phrase)",
        "ex": "Planting more trees helps to maintain the ecological balance in our city."
    },
    {
        "num": 741,
        "en": "Habitat destruction",
        "vi": "Sự phá hủy môi trường sống",
        "ipa": "/ˈhæb.ɪ.tæt dɪˈstrʌk.ʃən/",
        "pos": "(n. phrase)",
        "ex": "Habitat destruction is the main reason why many wild animals are disappearing."
    },
    {
        "num": 742,
        "en": "Deforestation",
        "vi": "Nạn phá rừng",
        "ipa": "/diːˌfɒr.ɪˈsteɪ.ʃən/",
        "pos": "(n)",
        "ex": "Deforestation in the mountains has led to more severe floods in recent years."
    },
    {
        "num": 743,
        "en": "Afforestation",
        "vi": "Sự trồng rồng, gây rừng",
        "ipa": "/æfˌɒr.ɪˈsteɪ.ʃən/",
        "pos": "(n)",
        "ex": "The government has started a large afforestation project to bring the green back."
    },
    {
        "num": 744,
        "en": "Logging",
        "vi": "Việc khai thác gỗ",
        "ipa": "/ˈlɒɡ.ɪŋ/",
        "pos": "(n)",
        "ex": "Illegal logging is destroying the beautiful natural forests in my region."
    },
    {
        "num": 745,
        "en": "Fossil fuel",
        "vi": "Nhiên liệu hóa thạch",
        "ipa": "/ˈfɒs.əl ˌfjuː.əl/",
        "pos": "(n. phrase)",
        "ex": "We currently rely too much on fossil fuels like coal and oil for electricity."
    },
    {
        "num": 746,
        "en": "Renewable energy",
        "vi": "Năng lượng tái tạo",
        "ipa": "/rɪˈnjuː.ə.bəl ˈen.ə.dʒi/",
        "pos": "(n. phrase)",
        "ex": "I strongly believe that renewable energy is the only way to save our planet."
    },
    {
        "num": 747,
        "en": "Alternative energy sources",
        "vi": "Các nguồn năng lượng thay thế",
        "ipa": "/ɒlˈtɜː.nə.tɪv ˈen.ə.dʒi ˈsɔː.sɪz/",
        "pos": "(n. phrase)",
        "ex": "We need to invest heavily in alternative energy sources to replace dirty coal."
    },
    {
        "num": 748,
        "en": "Solar power",
        "vi": "Năng lượng mặt trời",
        "ipa": "/ˈsəʊ.lər ˌpaʊ.ər/",
        "pos": "(n. phrase)",
        "ex": "My family installed panels on the roof so we can use solar power for our house."
    },
    {
        "num": 749,
        "en": "Wind turbine",
        "vi": "Tua-bin gió",
        "ipa": "/wɪnd ˈtɜː.baɪn/",
        "pos": "(n. phrase)",
        "ex": "You can see many giant wind turbines along the coast of my hometown."
    },
    {
        "num": 750,
        "en": "Hydropower",
        "vi": "Thủy điện",
        "ipa": "/ˈhaɪ.drəʊˌpaʊ.ər/",
        "pos": "(n)",
        "ex": "Hydropower from large dams is a major source of electricity in my country."
    },
    {
        "num": 751,
        "en": "Geothermal energy",
        "vi": "Năng lượng địa nhiệt",
        "ipa": "/ˌdʒiː.əʊˈθɜː.məl ˈen.ə.dʒi/",
        "pos": "(n. phrase)",
        "ex": "Geothermal energy is a fantastic clean option, but it is not available everywhere."
    },
    {
        "num": 752,
        "en": "Vehicle emissions",
        "vi": "Khí thải từ phương tiện giao thông",
        "ipa": "/ˈviː.ɪ.kəl ɪˈmɪʃ.ənz/",
        "pos": "(n. phrase)",
        "ex": "The city centre is heavily polluted mainly because of vehicle emissions."
    },
    {
        "num": 753,
        "en": "Water contamination",
        "vi": "Sự ô nhiễm nguồn nước",
        "ipa": "/ˈwɔː.tər kənˌtæm.ɪˈneɪ.ʃən/",
        "pos": "(n. phrase)",
        "ex": "Water contamination from local factories means we cannot swim in the river anymore."
    },
    {
        "num": 754,
        "en": "Soil erosion",
        "vi": "Sự xói mòn đất",
        "ipa": "/sɔɪl ɪˈrəʊ.ʒən/",
        "pos": "(n. phrase)",
        "ex": "Heavy rain and cutting down trees have caused terrible soil erosion here."
    },
    {
        "num": 755,
        "en": "Noise pollution",
        "vi": "Ô nhiễm tiếng ồn",
        "ipa": "/nɔɪz pəˈluː.ʃən/",
        "pos": "(n. phrase)",
        "ex": "The constant noise pollution from the heavy traffic gives me a headache."
    },
    {
        "num": 756,
        "en": "Light pollution",
        "vi": "Ô nhiễm ánh sáng",
        "ipa": "/laɪt pəˈluː.ʃən/",
        "pos": "(n. phrase)",
        "ex": "Because of light pollution in the city, I can rarely see the stars at night."
    },
    {
        "num": 757,
        "en": "Toxic waste",
        "vi": "Chất thải độc hại",
        "ipa": "/ˌtɒk.sɪk ˈweɪst/",
        "pos": "(n. phrase)",
        "ex": "Factories must be severely punished if they dump toxic waste into the sea."
    },
    {
        "num": 758,
        "en": "Industrial effluent",
        "vi": "Nước thải công nghiệp",
        "ipa": "/ɪnˈdʌs.tri.əl ˈef.lu.ənt/",
        "pos": "(n. phrase)",
        "ex": "The river smells terrible because of the industrial effluent from nearby plants."
    },
    {
        "num": 759,
        "en": "Sewage disposal",
        "vi": "Việc xử lý nước thải sinh hoạt",
        "ipa": "/ˈsuː.ɪdʒ dɪˈspəʊ.zəl/",
        "pos": "(n. phrase)",
        "ex": "Proper sewage disposal is absolutely essential to prevent diseases in crowded cities."
    },
    {
        "num": 760,
        "en": "Landfill site",
        "vi": "Bãi rác",
        "ipa": "/ˈlænd.fɪl saɪt/",
        "pos": "(n. phrase)",
        "ex": "We generate too much rubbish, and the local landfill site is almost full."
    },
    {
        "num": 761,
        "en": "Waste management",
        "vi": "Quản lý chất thải",
        "ipa": "/weɪst ˈmæn.ɪdʒ.mənt/",
        "pos": "(n. phrase)",
        "ex": "Good waste management is a really big challenge for a fast-growing city like mine."
    },
    {
        "num": 762,
        "en": "Single-use plastic",
        "vi": "Nhựa dùng một lần",
        "ipa": "/ˌsɪŋ.ɡəl.juːs ˈplæs.tɪk/",
        "pos": "(n. phrase)",
        "ex": "I always carry a reusable tote bag to avoid using single-use plastic."
    },
    {
        "num": 763,
        "en": "Biodegradable",
        "vi": "Có thể phân hủy sinh học",
        "ipa": "/ˌbaɪ.əʊ.dɪˈɡreɪ.də.bəl/",
        "pos": "(adj)",
        "ex": "I try my best to buy products that come in environmentally friendly, biodegradable packaging."
    },
    {
        "num": 764,
        "en": "Non-biodegradable",
        "vi": "Không thể phân hủy sinh học",
        "ipa": "/ˌnɒn.baɪ.əʊ.dɪˈɡreɪ.də.bəl/",
        "pos": "(adj)",
        "ex": "Non-biodegradable waste like plastic bags will stay in the earth for hundreds of years."
    },
    {
        "num": 765,
        "en": "Plastic footprint",
        "vi": "Lượng rác thải nhựa cá nhân/tổ chức tạo ra",
        "ipa": "/ˈplæs.tɪk ˈfʊt.prɪnt/",
        "pos": "(n. phrase)",
        "ex": "I am trying to reduce my plastic footprint by using a refillable water bottle daily."
    },
    {
        "num": 766,
        "en": "Recycle",
        "vi": "Tái chế",
        "ipa": "/ˌriːˈsaɪ.kəl/",
        "pos": "(v)",
        "ex": "I always make sure to recycle my paper and plastic rubbish at home."
    },
    {
        "num": 767,
        "en": "Reusable",
        "vi": "Có thể tái sử dụng",
        "ipa": "/ˌriːˈjuː.zə.bəl/",
        "pos": "(adj)",
        "ex": "Taking a reusable coffee cup to the café is a very simple way to help the environment."
    },
    {
        "num": 768,
        "en": "Eco-friendly / Environmentally friendly",
        "vi": "Thân thiện với môi trường",
        "ipa": "/ˈiː.kəʊ ˈfrend.li/",
        "pos": "(adj)",
        "ex": "I prefer buying eco-friendly products even if they are slightly more expensive."
    },
    {
        "num": 769,
        "en": "Sustainable development",
        "vi": "Sự phát triển bền vững",
        "ipa": "/səˌsteɪ.nə.bəl dɪˈvel.əp.mənt/",
        "pos": "(n. phrase)",
        "ex": "Sustainable development means balancing economic growth with environmental protection."
    },
    {
        "num": 770,
        "en": "Conservation",
        "vi": "Sự bảo tồn (thiên nhiên)",
        "ipa": "/ˌkɒn.səˈveɪ.ʃən/",
        "pos": "(n)",
        "ex": "I volunteer for a local wildlife conservation group at the weekend."
    },
    {
        "num": 771,
        "en": "Biodiversity",
        "vi": "Đa dạng sinh học",
        "ipa": "/ˌbaɪ.əʊ.daɪˈvɜː.sə.ti/",
        "pos": "(n)",
        "ex": "Protecting the rainforest is absolutely vital for maintaining the world's biodiversity."
    },
    {
        "num": 772,
        "en": "Endangered species",
        "vi": "Các loài có nguy cơ tuyệt chủng",
        "ipa": "/ɪnˈdeɪn.dʒəd ˈspiː.ʃiːz/",
        "pos": "(n. phrase)",
        "ex": "Tigers and rhinos are endangered species that desperately need our protection."
    },
    {
        "num": 773,
        "en": "On the brink of extinction",
        "vi": "Trên bờ vực tuyệt chủng",
        "ipa": "/ɒn ðə brɪŋk əv ɪkˈstɪŋk.ʃən/",
        "pos": "(idiom)",
        "ex": "Because of hunting, many beautiful sea creatures are currently on the brink of extinction."
    },
    {
        "num": 774,
        "en": "Die out",
        "vi": "Tuyệt chủng",
        "ipa": "/daɪ aʊt/",
        "pos": "(phrasal v)",
        "ex": "If we don't act to protect their habitats now, many wild animals will simply die out."
    },
    {
        "num": 775,
        "en": "Poaching",
        "vi": "Nạn săn trộm",
        "ipa": "/ˈpəʊ.tʃɪŋ/",
        "pos": "(n)",
        "ex": "The government has introduced strict laws to stop the illegal poaching of wild elephants."
    },
    {
        "num": 776,
        "en": "Wildlife trafficking",
        "vi": "Buôn bán động vật hoang dã trái phép",
        "ipa": "/ˈwaɪld.laɪf ˈtræf.ɪ.kɪŋ/",
        "pos": "(n. phrase)",
        "ex": "Wildlife trafficking is a cruel international crime that destroys nature."
    },
    {
        "num": 777,
        "en": "Natural reserve",
        "vi": "Khu bảo tồn thiên nhiên",
        "ipa": "/ˈnætʃ.ər.əl rɪˈzɜːv/",
        "pos": "(n. phrase)",
        "ex": "We went trekking in a beautiful natural reserve during our summer holiday."
    },
    {
        "num": 778,
        "en": "Marine life",
        "vi": "Sinh vật biển",
        "ipa": "/məˈriːn laɪf/",
        "pos": "(n. phrase)",
        "ex": "Heavy plastic pollution in the ocean is currently killing a lot of marine life."
    },
    {
        "num": 779,
        "en": "Coral reef bleaching",
        "vi": "Hiện tượng tẩy trắng rạn san hô",
        "ipa": "/ˈkɒr.əl riːf ˈbliː.tʃɪŋ/",
        "pos": "(n. phrase)",
        "ex": "Rising ocean temperatures around the world have caused severe coral reef bleaching."
    },
    {
        "num": 780,
        "en": "Overfishing",
        "vi": "Đánh bắt cá quá mức",
        "ipa": "/ˌəʊ.vəˈfɪʃ.ɪŋ/",
        "pos": "(n)",
        "ex": "Overfishing means that there are far fewer fish in the sea than there used to be."
    },
    {
        "num": 781,
        "en": "Extreme weather events",
        "vi": "Hiện tượng thời tiết cực đoan",
        "ipa": "/ɪkˈstriːm ˈweð.ər ɪˈvents/",
        "pos": "(n. phrase)",
        "ex": "Climate change is causing more extreme weather events, like unusually heavy storms."
    },
    {
        "num": 782,
        "en": "Natural disaster",
        "vi": "Thảm họa thiên nhiên",
        "ipa": "/ˈnætʃ.ər.əl dɪˈzɑː.stər/",
        "pos": "(n. phrase)",
        "ex": "My region is quite safe, but it occasionally suffers from a natural disaster like a typhoon."
    },
    {
        "num": 783,
        "en": "Flash flood",
        "vi": "Lũ quét",
        "ipa": "/flæʃ flʌd/",
        "pos": "(n. phrase)",
        "ex": "The unexpectedly heavy rain last night caused a sudden flash flood in the mountain village."
    },
    {
        "num": 784,
        "en": "Severe drought",
        "vi": "Hạn hán nghiêm trọng",
        "ipa": "/sɪˈvɪər draʊt/",
        "pos": "(n. phrase)",
        "ex": "The farmers lost almost all their crops because of the severe drought this year."
    },
    {
        "num": 785,
        "en": "Melting ice caps",
        "vi": "Băng tan (ở các cực)",
        "ipa": "/ˈmel.tɪŋ aɪs kæps/",
        "pos": "(n. phrase)",
        "ex": "The rapidly melting ice caps are a very clear sign that global warming is getting worse."
    },
    {
        "num": 786,
        "en": "Rising sea levels",
        "vi": "Mực nước biển dâng cao",
        "ipa": "/ˈraɪ.zɪŋ siː ˈlev.əlz/",
        "pos": "(n. phrase)",
        "ex": "Rising sea levels threaten to destroy and flood many coastal cities in the future."
    },
    {
        "num": 787,
        "en": "Coastal erosion",
        "vi": "Xói mòn bờ biển",
        "ipa": "/ˈkəʊ.stəl ɪˈrəʊ.ʒən/",
        "pos": "(n. phrase)",
        "ex": "Because of coastal erosion, the beautiful beach near my house is getting smaller every year."
    },
    {
        "num": 788,
        "en": "Avalanche",
        "vi": "Tuyết lở",
        "ipa": "/ˈæv.əl.ɑːntʃ/",
        "pos": "(n)",
        "ex": "The skiers had to be rescued immediately after a terrifying avalanche in the mountains."
    },
    {
        "num": 789,
        "en": "Landslide",
        "vi": "Sạt lở đất",
        "ipa": "/ˈlænd.slaɪd/",
        "pos": "(n)",
        "ex": "Days of heavy rain unfortunately caused a dangerous landslide that blocked the main road."
    },
    {
        "num": 790,
        "en": "Overpopulation",
        "vi": "Bùng nổ dân số (quá đông dân)",
        "ipa": "/ˌəʊ.vəˌpɒp.jəˈleɪ.ʃən/",
        "pos": "(n)",
        "ex": "Overpopulation in the city leads directly to traffic jams and serious housing shortages."
    },
    {
        "num": 791,
        "en": "Population density",
        "vi": "Mật độ dân số",
        "ipa": "/ˌpɒp.jəˈleɪ.ʃən ˈden.sɪ.ti/",
        "pos": "(n. phrase)",
        "ex": "Because it is the capital, the population density in my city is extremely high."
    },
    {
        "num": 792,
        "en": "Urban sprawl",
        "vi": "Sự đô thị hóa tự phát / lan rộng đô thị",
        "ipa": "/ˈɜː.bən sprɔːl/",
        "pos": "(n. phrase)",
        "ex": "Urban sprawl has sadly destroyed many natural green spaces around the edges of the city."
    },
    {
        "num": 793,
        "en": "Resource depletion",
        "vi": "Sự cạn kiệt tài nguyên",
        "ipa": "/rɪˈzɔːs dɪˈpliː.ʃən/",
        "pos": "(n. phrase)",
        "ex": "Resource depletion is a major concern as we continue to use up all the natural gas and oil."
    },
    {
        "num": 794,
        "en": "Water scarcity",
        "vi": "Tình trạng thiếu nước",
        "ipa": "/ˈwɔː.tər ˈskeə.sɪ.ti/",
        "pos": "(n. phrase)",
        "ex": "Due to climate change, many countries in the world are currently facing severe water scarcity."
    },
    {
        "num": 795,
        "en": "Food shortage",
        "vi": "Sự thiếu hụt lương thực",
        "ipa": "/fuːd ˈʃɔː.tɪdʒ/",
        "pos": "(n. phrase)",
        "ex": "Experts warn that the poor harvest this year could easily lead to a serious food shortage."
    },
    {
        "num": 796,
        "en": "Famine",
        "vi": "Nạn đói",
        "ipa": "/ˈfæm.ɪn/",
        "pos": "(n)",
        "ex": "Millions of people are suffering terribly because of the famine in that region."
    },
    {
        "num": 797,
        "en": "Poverty line",
        "vi": "Chuẩn nghèo",
        "ipa": "/ˈpɒv.ə.ti laɪn/",
        "pos": "(n. phrase)",
        "ex": "The government is trying its best to provide financial help to families who live below the poverty line."
    },
    {
        "num": 798,
        "en": "Below the poverty line",
        "vi": "Dưới mức nghèo khổ",
        "ipa": "/bɪˈləʊ ðə ˈpɒv.ə.ti laɪn/",
        "pos": "(phrase)",
        "ex": "It is truly heart-breaking that so many children in the world still live below the poverty line."
    },
    {
        "num": 799,
        "en": "Wealth inequality",
        "vi": "Bất bình đẳng tài sản/thu nhập",
        "ipa": "/welθ ˌɪn.ɪˈkwɒl.ə.ti/",
        "pos": "(n. phrase)",
        "ex": "Wealth inequality is very clear when you see poor slums right next to luxury apartments."
    },
    {
        "num": 800,
        "en": "Developed country",
        "vi": "Quốc gia phát triển",
        "ipa": "/dɪˈvel.əpt ˈkʌn.tri/",
        "pos": "(n. phrase)",
        "ex": "As a developed country, they naturally have a very advanced healthcare and education system."
    },
    {
        "num": 801,
        "en": "Developing nation",
        "vi": "Quốc gia đang phát triển",
        "ipa": "/dɪˈvel.ə.pɪŋ ˈneɪ.ʃən/",
        "pos": "(n. phrase)",
        "ex": "I believe we should help developing nations improve their education systems."
    },
    {
        "num": 802,
        "en": "Third-world country",
        "vi": "Quốc gia thế giới thứ ba (đang phát triển/kém phát triển)",
        "ipa": "/ˌθɜːd.wɜːld ˈkʌn.tri/",
        "pos": "(n. phrase)",
        "ex": "My uncle travels to third-world countries to volunteer as an English teacher."
    },
    {
        "num": 803,
        "en": "Globalization",
        "vi": "Toàn cầu hóa",
        "ipa": "/ˌɡləʊ.bəl.aɪˈzeɪ.ʃən/",
        "pos": "(n)",
        "ex": "Globalization means I can easily buy products from all over the world."
    },
    {
        "num": 804,
        "en": "Carbon tax",
        "vi": "Thuế carbon",
        "ipa": "/ˈkɑː.bən tæks/",
        "pos": "(n. phrase)",
        "ex": "The government should introduce a carbon tax to force factories to reduce pollution."
    },
    {
        "num": 805,
        "en": "Emit / Discharge",
        "vi": "Thải ra (khí thải/nước thải)",
        "ipa": "/iˈmɪt/ - /dɪsˈtʃɑːdʒ/",
        "pos": "(v)",
        "ex": "Older cars often emit a lot of dangerous smoke into the air."
    },
    {
        "num": 806,
        "en": "Mitigate the impact",
        "vi": "Giảm nhẹ tác động",
        "ipa": "/ˈmɪt.ɪ.ɡeɪt ði ˈɪm.pækt/",
        "pos": "(v. phrase)",
        "ex": "Planting more trees in the city can help mitigate the impact of air pollution."
    },
    {
        "num": 807,
        "en": "Alleviate poverty",
        "vi": "Giảm nghèo",
        "ipa": "/əˈliː.vi.eɪt ˈpɒv.ə.ti/",
        "pos": "(v. phrase)",
        "ex": "Creating more jobs is the best way to alleviate poverty in our community."
    },
    {
        "num": 808,
        "en": "Tackle/Address an issue",
        "vi": "Giải quyết một vấn đề",
        "ipa": "/ˈtæk.əl/əˈdres ən ˈɪʃ.uː/",
        "pos": "(v. phrase)",
        "ex": "We must tackle the issue of plastic waste before it is too late."
    },
    {
        "num": 809,
        "en": "Raise environmental awareness",
        "vi": "Nâng cao nhận thức về môi trường",
        "ipa": "/reɪz ɪnˌvaɪ.rənˈmen.təl əˈweə.nəs/",
        "pos": "(v. phrase)",
        "ex": "Our school organised a campaign to raise environmental awareness among students."
    },
    {
        "num": 810,
        "en": "Environmental activist",
        "vi": "Nhà hoạt động vì môi trường",
        "ipa": "/ɪnˌvaɪ.rənˈmen.təl ˈæk.tɪ.vɪst/",
        "pos": "(n. phrase)",
        "ex": "As an environmental activist, I often take part in local tree planting events."
    },
    {
        "num": 811,
        "en": "Go green",
        "vi": "Sống xanh (thân thiện với môi trường)",
        "ipa": "/ɡəʊ ɡriːn/",
        "pos": "(idiom)",
        "ex": "My family decided to go green by using solar power and cycling more often."
    },
    {
        "num": 812,
        "en": "Wipe out",
        "vi": "Càn quét, xóa sổ",
        "ipa": "/waɪp aʊt/",
        "pos": "(phrasal v)",
        "ex": "A terrible storm could completely wipe out small island villages."
    },
    {
        "num": 813,
        "en": "Offset carbon emissions",
        "vi": "Bù đắp lượng phát thải carbon",
        "ipa": "/ˌɒfˈset ˈkɑː.bən ɪˈmɪʃ.ənz/",
        "pos": "(v. phrase)",
        "ex": "I always pay a little extra to offset carbon emissions when I buy flight tickets."
    },
    {
        "num": 814,
        "en": "Energy-efficient",
        "vi": "Tiết kiệm năng lượng",
        "ipa": "/ˈen.ə.dʒi.ɪˈfɪʃ.ənt/",
        "pos": "(adj)",
        "ex": "We replaced all our old light bulbs with energy-efficient ones to save money."
    },
    {
        "num": 815,
        "en": "Conservation effort",
        "vi": "Nỗ lực bảo tồn",
        "ipa": "/ˌkɒn.səˈveɪ.ʃən ˈef.ət/",
        "pos": "(n. phrase)",
        "ex": "I volunteer every weekend to support the local wildlife conservation effort."
    },
    {
        "num": 816,
        "en": "Irreversible damage",
        "vi": "Thiệt hại không thể đảo ngược",
        "ipa": "/ˌɪr.ɪˈvɜː.sə.bəl ˈdæm.ɪdʒ/",
        "pos": "(n. phrase)",
        "ex": "Cutting down the rainforest causes irreversible damage to our planet."
    },
    {
        "num": 817,
        "en": "Devastating consequence",
        "vi": "Hậu quả tàn khốc",
        "ipa": "/ˈdev.ə.steɪ.tɪŋ ˈkɒn.sɪ.kwəns/",
        "pos": "(n. phrase)",
        "ex": "Water pollution has a devastating consequence on the health of marine life."
    },
    {
        "num": 818,
        "en": "Throwaway society",
        "vi": "Xã hội vứt bỏ (chuộng đồ dùng một lần)",
        "ipa": "/ˈθrəʊ.ə.weɪ səˈsaɪ.ə.ti/",
        "pos": "(n. phrase)",
        "ex": "In today's throwaway society, people just buy new phones instead of fixing old ones."
    },
    {
        "num": 819,
        "en": "Sort rubbish",
        "vi": "Phân loại rác",
        "ipa": "/sɔːt ˈrʌb.ɪʃ/",
        "pos": "(v. phrase)",
        "ex": "I always make sure to sort rubbish into paper, plastic, and food waste."
    },
    {
        "num": 820,
        "en": "Over-consumption",
        "vi": "Sự tiêu thụ quá mức",
        "ipa": "/ˌəʊ.və.kənˈsʌmp.ʃən/",
        "pos": "(n)",
        "ex": "Over-consumption of fast fashion is creating a huge amount of unnecessary waste."
    },
    {
        "num": 821,
        "en": "Shortage of resources",
        "vi": "Sự thiếu hụt tài nguyên",
        "ipa": "/ˈʃɔː.tɪdʒ əv rɪˈzɔː.sɪz/",
        "pos": "(n. phrase)",
        "ex": "We are facing a serious shortage of resources like clean water in my region."
    },
    {
        "num": 822,
        "en": "Tap water",
        "vi": "Nước máy",
        "ipa": "/ˈtæp ˌwɔː.tər/",
        "pos": "(n. phrase)",
        "ex": "I drink tap water at home because it is perfectly safe and clean here."
    },
    {
        "num": 823,
        "en": "Sanitation",
        "vi": "Vệ sinh môi trường / Hệ thống vệ sinh",
        "ipa": "/ˌsæn.ɪˈteɪ.ʃən/",
        "pos": "(n)",
        "ex": "Improving sanitation in rural areas can prevent many dangerous diseases."
    },
    {
        "num": 824,
        "en": "Malnutrition",
        "vi": "Suy dinh dưỡng",
        "ipa": "/ˌmæl.njuːˈtrɪʃ.ən/",
        "pos": "(n)",
        "ex": "Malnutrition is still a huge problem for poor children in some developing countries."
    },
    {
        "num": 825,
        "en": "Epidemic / Pandemic",
        "vi": "Dịch bệnh / Đại dịch",
        "ipa": "/ˌep.ɪˈdem.ɪk/ - /pænˈdem.ɪk/",
        "pos": "(n)",
        "ex": "We learned a lot about public health during the recent global pandemic."
    },
    {
        "num": 826,
        "en": "Public health",
        "vi": "Y tế cộng đồng",
        "ipa": "/ˌpʌb.lɪk ˈhelθ/",
        "pos": "(n. phrase)",
        "ex": "Good public health should be a top priority for any responsible government."
    },
    {
        "num": 827,
        "en": "Basic necessities",
        "vi": "Nhu yếu phẩm cơ bản",
        "ipa": "/ˈbeɪ.sɪk nəˈses.ə.tiz/",
        "pos": "(n. phrase)",
        "ex": "The charity provides basic necessities like food and blankets to homeless people."
    },
    {
        "num": 828,
        "en": "Clean up campaign",
        "vi": "Chiến dịch dọn dẹp vệ sinh",
        "ipa": "/ˈkliːn.ʌp kæmˈpeɪn/",
        "pos": "(n. phrase)",
        "ex": "I joined a clean up campaign to remove rubbish from the local beach."
    },
    {
        "num": 829,
        "en": "Tree planting",
        "vi": "Việc trồng cây",
        "ipa": "/triː ˈplɑːn.tɪŋ/",
        "pos": "(n. phrase)",
        "ex": "Our class participated in a tree planting day to make the school greener."
    },
    {
        "num": 830,
        "en": "Eco-tourism",
        "vi": "Du lịch sinh thái",
        "ipa": "/ˈiː.kəʊˌtʊə.rɪ.zəm/",
        "pos": "(n)",
        "ex": "I prefer eco-tourism because it respects nature and supports local people."
    },
    {
        "num": 831,
        "en": "Environmental protection",
        "vi": "Sự bảo vệ môi trường",
        "ipa": "/ɪnˌvaɪ.rənˈmen.təl prəˈtek.ʃən/",
        "pos": "(n. phrase)",
        "ex": "I want to study environmental protection at university to help save the planet."
    },
    {
        "num": 832,
        "en": "Wreak havoc on",
        "vi": "Gây tàn phá nặng nề cho",
        "ipa": "/riːk ˈhæv.ək ɒn/",
        "pos": "(idiom)",
        "ex": "Severe floods can wreak havoc on farmers' crops and homes."
    },
    {
        "num": 833,
        "en": "Bear the brunt of",
        "vi": "Chịu ảnh hưởng nặng nề nhất từ",
        "ipa": "/beər ðə brʌnt əv/",
        "pos": "(idiom)",
        "ex": "Unfortunately, poor communities often bear the brunt of climate change disasters."
    },
    {
        "num": 834,
        "en": "Turn a blind eye to",
        "vi": "Nhắm mắt làm ngơ (trước các vấn đề)",
        "ipa": "/tɜːn ə blaɪnd aɪ tu/",
        "pos": "(idiom)",
        "ex": "We cannot just turn a blind eye to the huge amount of plastic in the ocean."
    },
    {
        "num": 835,
        "en": "Deplete natural resources",
        "vi": "Làm cạn kiệt tài nguyên thiên nhiên",
        "ipa": "/dɪˈpliːt ˈnætʃ.ər.əl rɪˈzɔː.sɪz/",
        "pos": "(v. phrase)",
        "ex": "If we continue to deplete natural resources, there will be nothing left for our children."
    },
    {
        "num": 836,
        "en": "Carpooling",
        "vi": "Việc đi chung xe",
        "ipa": "/ˈkɑːˌpuː.lɪŋ/",
        "pos": "(n)",
        "ex": "I started carpooling with my colleagues to save money on petrol and reduce emissions."
    },
    {
        "num": 837,
        "en": "Congestion charge",
        "vi": "Phí ùn tắc giao thông (khi vào nội đô)",
        "ipa": "/kənˈdʒes.tʃən tʃɑːdʒ/",
        "pos": "(n. phrase)",
        "ex": "The city mayor introduced a congestion charge to discourage driving in the centre."
    },
    {
        "num": 838,
        "en": "Carbon-neutral",
        "vi": "Trung hòa carbon",
        "ipa": "/ˌkɑː.bənˈnjuː.trəl/",
        "pos": "(adj)",
        "ex": "Our school has promised to become totally carbon-neutral by next year."
    },
    {
        "num": 839,
        "en": "Net zero emissions",
        "vi": "Phát thải ròng bằng 0",
        "ipa": "/net ˈzɪə.rəʊ ɪˈmɪʃ.ənz/",
        "pos": "(n. phrase)",
        "ex": "Reaching net zero emissions will require a huge change in how we live and travel."
    },
    {
        "num": 840,
        "en": "Environmental impact assessment",
        "vi": "Đánh giá tác động môi trường",
        "ipa": "/ɪnˌvaɪ.rənˈmen.təl ˈɪm.pækt əˈses.mənt/",
        "pos": "(n. phrase)",
        "ex": "The factory must complete an environmental impact assessment before building begins."
    },
    {
        "num": 841,
        "en": "Upcycling",
        "vi": "Tái chế nâng cấp (tạo ra sản phẩm giá trị hơn)",
        "ipa": "/ˈʌpˌsaɪ.klɪŋ/",
        "pos": "(n)",
        "ex": "I really enjoy upcycling old glass bottles into beautiful flower vases."
    },
    {
        "num": 842,
        "en": "Zero-waste lifestyle",
        "vi": "Lối sống không rác thải",
        "ipa": "/ˈzɪə.rəʊ weɪst ˈlaɪf.staɪl/",
        "pos": "(n. phrase)",
        "ex": "Living a zero-waste lifestyle is difficult, but I try my best to buy less plastic."
    },
    {
        "num": 843,
        "en": "Food waste",
        "vi": "Rác thải thực phẩm / Thức ăn thừa",
        "ipa": "/fuːd weɪst/",
        "pos": "(n. phrase)",
        "ex": "To reduce food waste, I always save my leftover dinner for lunch the next day."
    },
    {
        "num": 844,
        "en": "Composting",
        "vi": "Việc ủ phân hữu cơ",
        "ipa": "/ˈkɒm.pɒst.ɪŋ/",
        "pos": "(n)",
        "ex": "We started composting our fruit and vegetable peels to make healthy soil for the garden."
    },
    {
        "num": 845,
        "en": "Agrochemicals",
        "vi": "Hóa chất nông nghiệp",
        "ipa": "/ˌæɡ.rəʊˈkem.ɪ.kəlz/",
        "pos": "(n)",
        "ex": "Farmers should use fewer agrochemicals to keep the soil and local rivers clean."
    },
    {
        "num": 846,
        "en": "Pesticide",
        "vi": "Thuốc trừ sâu",
        "ipa": "/ˈpes.tɪ.saɪd/",
        "pos": "(n)",
        "ex": "I prefer buying organic vegetables because they are grown without any harmful pesticide."
    },
    {
        "num": 847,
        "en": "Herbicide",
        "vi": "Thuốc diệt cỏ",
        "ipa": "/ˈhɜː.bɪ.saɪd/",
        "pos": "(n)",
        "ex": "We pull the weeds by hand instead of spraying dangerous herbicide in our garden."
    },
    {
        "num": 848,
        "en": "Fertilizer",
        "vi": "Phân bón",
        "ipa": "/ˈfɜː.tɪ.laɪ.zər/",
        "pos": "(n)",
        "ex": "The farmers use natural fertilizer to help their rice crops grow strong and healthy."
    },
    {
        "num": 849,
        "en": "Organic farming",
        "vi": "Nông nghiệp hữu cơ",
        "ipa": "/ɔːˈɡæn.ɪk ˈfɑː.mɪŋ/",
        "pos": "(n. phrase)",
        "ex": "I strongly support organic farming because it is much safer for the environment."
    },
    {
        "num": 850,
        "en": "Genetically modified organism (GMO)",
        "vi": "Sinh vật biến đổi gen",
        "ipa": "/dʒəˈnet.ɪ.kəl.i ˈmɒd.ɪ.faɪd ˈɔː.ɡən.ɪ.zəm/",
        "pos": "(n. phrase)",
        "ex": "Some people are still very worried about eating a genetically modified organism."
    },
    {
        "num": 851,
        "en": "Crop yield",
        "vi": "Sản lượng/Năng suất cây trồng",
        "ipa": "/krɒp jiːld/",
        "pos": "(n. phrase)",
        "ex": "The extremely heavy rain this year caused the crop yield to drop significantly."
    },
    {
        "num": 852,
        "en": "Food security",
        "vi": "An ninh lương thực",
        "ipa": "/fuːd sɪˈkjʊə.rə.ti/",
        "pos": "(n. phrase)",
        "ex": "Ensuring food security is very important as the global population continues to grow."
    },
    {
        "num": 853,
        "en": "Humanitarian aid",
        "vi": "Viện trợ nhân đạo",
        "ipa": "/hjuːˌmæn.ɪˈteə.ri.ən eɪd/",
        "pos": "(n. phrase)",
        "ex": "My school collected money to send humanitarian aid to the earthquake victims."
    },
    {
        "num": 854,
        "en": "Refugee crisis",
        "vi": "Khủng hoảng người tị nạn",
        "ipa": "/ˌref.juˈdʒiː ˈkraɪ.sɪs/",
        "pos": "(n. phrase)",
        "ex": "The terrible war caused a refugee crisis that affected millions of innocent families."
    },
    {
        "num": 855,
        "en": "Asylum seeker",
        "vi": "Người xin tị nạn",
        "ipa": "/əˈsaɪ.ləm ˌsiː.kər/",
        "pos": "(n. phrase)",
        "ex": "The government must try to provide safe shelter for every asylum seeker."
    },
    {
        "num": 856,
        "en": "Human rights violation",
        "vi": "Sự vi phạm nhân quyền",
        "ipa": "/ˈhjuː.mən raɪts ˌvaɪ.əˈleɪ.ʃən/",
        "pos": "(n. phrase)",
        "ex": "Forcing young children to work long hours is a terrible human rights violation."
    },
    {
        "num": 857,
        "en": "Child labor",
        "vi": "Lao động trẻ em",
        "ipa": "/tʃaɪld ˈleɪ.bər/",
        "pos": "(n. phrase)",
        "ex": "I try not to buy clothes from brands that are known to use cheap child labour."
    },
    {
        "num": 858,
        "en": "Gender inequality",
        "vi": "Bất bình đẳng giới",
        "ipa": "/ˈdʒen.dər ˌɪn.ɪˈkwɒl.ə.ti/",
        "pos": "(n. phrase)",
        "ex": "We still need to fight against gender inequality in many modern workplaces."
    },
    {
        "num": 859,
        "en": "Equal opportunity",
        "vi": "Cơ hội bình đẳng",
        "ipa": "/ˌiː.kwəl ˌɒp.əˈtʃuː.nə.ti/",
        "pos": "(n. phrase)",
        "ex": "I strongly believe that every child deserves an equal opportunity to get a good education."
    },
    {
        "num": 860,
        "en": "Illiteracy rate",
        "vi": "Tỷ lệ mù chữ",
        "ipa": "/ɪˈlɪt.ər.ə.si reɪt/",
        "pos": "(n. phrase)",
        "ex": "The government built new schools in the mountains to reduce the high illiteracy rate."
    },
    {
        "num": 861,
        "en": "Epidemic outbreak",
        "vi": "Sự bùng phát dịch bệnh",
        "ipa": "/ˌep.ɪˈdem.ɪk ˈaʊt.breɪk/",
        "pos": "(n. phrase)",
        "ex": "We were told to stay at home to prevent another dangerous epidemic outbreak."
    },
    {
        "num": 862,
        "en": "Mass migration",
        "vi": "Sự di cư hàng loạt",
        "ipa": "/mæs maɪˈɡreɪ.ʃən/",
        "pos": "(n. phrase)",
        "ex": "Climate change might soon cause a mass migration of people away from flooded coasts."
    },
    {
        "num": 863,
        "en": "Brain drain",
        "vi": "Chảy máu chất xám",
        "ipa": "/ˈbreɪn ˌdreɪn/",
        "pos": "(n. phrase)",
        "ex": "The brain drain is a big problem because many smart graduates leave to work abroad."
    },
    {
        "num": 864,
        "en": "Unemployment rate",
        "vi": "Tỷ lệ thất nghiệp",
        "ipa": "/ˌʌn.ɪmˈplɔɪ.mənt reɪt/",
        "pos": "(n. phrase)",
        "ex": "The unemployment rate has gone up recently because many small businesses had to close."
    },
    {
        "num": 865,
        "en": "Cost of living",
        "vi": "Chi phí sinh hoạt",
        "ipa": "/kɒst əv ˈlɪv.ɪŋ/",
        "pos": "(n. phrase)",
        "ex": "The cost of living in the city centre is becoming far too expensive for most students."
    },
    {
        "num": 866,
        "en": "Affordable housing",
        "vi": "Nhà ở giá cả phải chăng",
        "ipa": "/əˈfɔː.də.bəl ˈhaʊ.zɪŋ/",
        "pos": "(n. phrase)",
        "ex": "It is very hard for young couples to find affordable housing in London nowadays."
    },
    {
        "num": 867,
        "en": "Social welfare",
        "vi": "Phúc lợi xã hội",
        "ipa": "/ˈsəʊ.ʃəl ˈwel.feər/",
        "pos": "(n. phrase)",
        "ex": "Good social welfare ensures that poor families can still buy basic food and medicine."
    },
    {
        "num": 868,
        "en": "International treaty",
        "vi": "Hiệp ước quốc tế",
        "ipa": "/ˌɪn.təˈnæʃ.ən.əl ˈtriː.ti/",
        "pos": "(n. phrase)",
        "ex": "My country recently signed an international treaty to stop ocean plastic pollution."
    },
    {
        "num": 869,
        "en": "Emission standard",
        "vi": "Tiêu chuẩn khí thải",
        "ipa": "/ɪˈmɪʃ.ən ˈstæn.dəd/",
        "pos": "(n. phrase)",
        "ex": "All new cars must pass a very strict emission standard before they can be sold here."
    },
    {
        "num": 870,
        "en": "Implement policies",
        "vi": "Thực thi chính sách",
        "ipa": "/ˈɪm.plɪ.ment ˈpɒl.ə.siz/",
        "pos": "(v. phrase)",
        "ex": "The council needs to implement policies that make public transport cheaper and faster."
    },
    {
        "num": 871,
        "en": "Impose strict regulations",
        "vi": "Áp đặt quy định nghiêm ngặt",
        "ipa": "/ɪmˈpəʊz strɪkt ˌreɡ.jəˈleɪ.ʃənz/",
        "pos": "(v. phrase)",
        "ex": "The government should impose strict regulations on factories that dump dirty water."
    },
    {
        "num": 872,
        "en": "Punitive action",
        "vi": "Biện pháp trừng phạt (với công ty gây ô nhiễm)",
        "ipa": "/ˈpjuː.nɪ.tɪv ˈæk.ʃən/",
        "pos": "(n. phrase)",
        "ex": "We must take punitive action against companies that illegally cut down the forest."
    },
    {
        "num": 873,
        "en": "Hold accountable",
        "vi": "Buộc (ai/tổ chức) phải chịu trách nhiệm",
        "ipa": "/həʊld əˈkaʊn.tə.bəl/",
        "pos": "(v. phrase)",
        "ex": "I firmly believe we should hold accountable the big corporations that pollute our rivers."
    },
    {
        "num": 874,
        "en": "Subsidize",
        "vi": "Trợ cấp",
        "ipa": "/ˈsʌb.sɪ.daɪz/",
        "pos": "(v)",
        "ex": "The government decided to subsidize solar panels to encourage more people to use them."
    },
    {
        "num": 875,
        "en": "Boycott",
        "vi": "Tẩy chay",
        "ipa": "/ˈbɔɪ.kɒt/",
        "pos": "(v/n)",
        "ex": "I decided to boycott that clothing brand because they treat their factory workers very badly."
    },
    {
        "num": 876,
        "en": "Carbon sink",
        "vi": "Bể chứa carbon (như rừng, đại dương)",
        "ipa": "/ˈkɑː.bən sɪŋk/",
        "pos": "(n. phrase)",
        "ex": "The Amazon rainforest is a massive carbon sink that helps slow down global warming."
    },
    {
        "num": 877,
        "en": "Microplastics",
        "vi": "Vi nhựa",
        "ipa": "/ˈmaɪ.krəʊˌplæs.tɪks/",
        "pos": "(n)",
        "ex": "Scientists have sadly found dangerous microplastics in the fish we eat."
    },
    {
        "num": 878,
        "en": "E-waste (Electronic waste)",
        "vi": "Rác thải điện tử",
        "ipa": "/ˈiː.weɪst/",
        "pos": "(n. phrase)",
        "ex": "We must recycle our old phones properly to reduce the growing amount of toxic e-waste."
    },
    {
        "num": 879,
        "en": "Dump",
        "vi": "Vứt bỏ bừa bãi",
        "ipa": "/dʌmp/",
        "pos": "(v)",
        "ex": "It makes me so angry when people dump their household rubbish in the local park."
    },
    {
        "num": 880,
        "en": "Smog",
        "vi": "Sương khói (do ô nhiễm)",
        "ipa": "/smɒɡ/",
        "pos": "(n)",
        "ex": "The thick smog in the city makes it very difficult for me to breathe some days."
    },
    {
        "num": 881,
        "en": "Acid rain",
        "vi": "Mưa axit",
        "ipa": "/ˌæs.ɪd ˈreɪn/",
        "pos": "(n. phrase)",
        "ex": "Acid rain can completely destroy the leaves of sensitive trees in the forest."
    },
    {
        "num": 882,
        "en": "Ozone hole",
        "vi": "Lỗ thủng tầng ozone",
        "ipa": "/ˈəʊ.zəʊn həʊl/",
        "pos": "(n. phrase)",
        "ex": "I learned in science class that the ozone hole is slowly starting to heal."
    },
    {
        "num": 883,
        "en": "Overgrazing",
        "vi": "Chăn thả quá mức",
        "ipa": "/ˌəʊ.vəˈɡreɪ.zɪŋ/",
        "pos": "(n)",
        "ex": "Overgrazing by too many sheep has sadly turned the green fields into dry dirt."
    },
    {
        "num": 884,
        "en": "Desertification",
        "vi": "Hiện tượng sa mạc hóa",
        "ipa": "/dɪˌzɜː.tɪ.fɪˈkeɪ.ʃən/",
        "pos": "(n)",
        "ex": "Desertification is spreading rapidly because people are cutting down too many trees."
    },
    {
        "num": 885,
        "en": "Flora and fauna",
        "vi": "Hệ thực vật và động vật",
        "ipa": "/ˈflɔː.rə ənd ˈfɔː.nə/",
        "pos": "(n. phrase)",
        "ex": "I love exploring the national park to see the amazing local flora and fauna."
    },
    {
        "num": 886,
        "en": "Indigenous species",
        "vi": "Loài bản địa",
        "ipa": "/ɪnˈdɪdʒ.ɪ.nəs ˈspiː.ʃiːz/",
        "pos": "(n. phrase)",
        "ex": "We should only plant indigenous species in our gardens to support local insects and birds."
    },
    {
        "num": 887,
        "en": "Invasive species",
        "vi": "Loài xâm lấn",
        "ipa": "/ɪnˈveɪ.sɪv ˈspiː.ʃiːz/",
        "pos": "(n. phrase)",
        "ex": "The invasive species of fish is slowly eating all the native plants in the lake."
    },
    {
        "num": 888,
        "en": "Captivity",
        "vi": "Tình trạng bị giam cầm (động vật trong vườn thú)",
        "ipa": "/kæpˈtɪv.ə.ti/",
        "pos": "(n)",
        "ex": "I feel quite sad seeing wild birds living their whole lives in captivity."
    },
    {
        "num": 889,
        "en": "Breed in captivity",
        "vi": "Nhân giống trong môi trường nuôi nhốt",
        "ipa": "/briːd ɪn kæpˈtɪv.ə.ti/",
        "pos": "(v. phrase)",
        "ex": "Zoos often try to breed in captivity to help save rare animals from going extinct."
    },
    {
        "num": 890,
        "en": "Animal rights",
        "vi": "Quyền động vật",
        "ipa": "/ˈæn.ɪ.məl raɪts/",
        "pos": "(n. phrase)",
        "ex": "I strongly support animal rights and refuse to buy any cosmetic products tested on rabbits."
    },
    {
        "num": 891,
        "en": "Unpredictable weather",
        "vi": "Thời tiết không thể đoán trước",
        "ipa": "/ˌʌn.prɪˈdɪk.tə.bəl ˈweð.ər/",
        "pos": "(n. phrase)",
        "ex": "The unpredictable weather in autumn makes it very difficult to plan an outdoor party."
    },
    {
        "num": 892,
        "en": "Evacuation",
        "vi": "Sự sơ tán (khỏi thảm họa)",
        "ipa": "/ɪˌvæk.juˈeɪ.ʃən/",
        "pos": "(n)",
        "ex": "The police ordered an immediate evacuation of the village before the flood arrived."
    },
    {
        "num": 893,
        "en": "Relief effort",
        "vi": "Nỗ lực cứu trợ",
        "ipa": "/rɪˈliːf ˈef.ət/",
        "pos": "(n. phrase)",
        "ex": "I donated some of my pocket money to the relief effort after the terrible earthquake hit."
    },
    {
        "num": 894,
        "en": "Death toll",
        "vi": "Số người chết",
        "ipa": "/ˈdeθ təʊl/",
        "pos": "(n. phrase)",
        "ex": "The death toll from the unexpected tsunami was sadly much higher than experts predicted."
    },
    {
        "num": 895,
        "en": "Homelessness",
        "vi": "Tình trạng vô gia cư",
        "ipa": "/ˈhəʊm.ləs.nəs/",
        "pos": "(n)",
        "ex": "Homelessness is a growing issue in my city, especially during the freezing cold winter."
    },
    {
        "num": 896,
        "en": "Slum",
        "vi": "Khu ổ chuột",
        "ipa": "/slʌm/",
        "pos": "(n)",
        "ex": "Many poor families are forced to live in a crowded slum with no access to clean water."
    },
    {
        "num": 897,
        "en": "Inadequate infrastructure",
        "vi": "Cơ sở hạ tầng không đầy đủ",
        "ipa": "/ɪnˈæd.ə.kwət ˈɪn.frəˌstrʌk.tʃər/",
        "pos": "(n. phrase)",
        "ex": "The inadequate infrastructure means that the roads flood every single time it rains heavily."
    },
    {
        "num": 898,
        "en": "Universal healthcare",
        "vi": "Chăm sóc sức khỏe toàn dân",
        "ipa": "/ˌjuː.nɪˈvɜː.səl ˈhelθ.keər/",
        "pos": "(n. phrase)",
        "ex": "I am incredibly grateful that my country provides universal healthcare for everyone."
    },
    {
        "num": 899,
        "en": "Life expectancy",
        "vi": "Tuổi thọ trung bình",
        "ipa": "/ˈlaɪf ɪkˌspek.tən.si/",
        "pos": "(n. phrase)",
        "ex": "A healthier daily diet and better medicine have greatly increased the average life expectancy here."
    },
    {
        "num": 900,
        "en": "Demographic shift",
        "vi": "Sự dịch chuyển nhân khẩu học",
        "ipa": "/ˌdem.əˈɡræf.ɪk ʃɪft/",
        "pos": "(n. phrase)",
        "ex": "There is a major demographic shift happening right now as more young people move to the big cities."
    },
    {
        "num": 901,
        "en": "Aging population",
        "vi": "Dân số già hóa",
        "ipa": "/ˈeɪ.dʒɪŋ ˌpɒp.jəˈleɪ.ʃən/",
        "pos": "(n. phrase)",
        "ex": "Our country is facing the challenge of a rapidly aging population."
    },
    {
        "num": 902,
        "en": "Fair trade",
        "vi": "Thương mại công bằng",
        "ipa": "/ˌfeə ˈtreɪd/",
        "pos": "(n. phrase)",
        "ex": "I always try to buy fair trade coffee to support the farmers."
    },
    {
        "num": 903,
        "en": "Exploitation",
        "vi": "Sự bóc lột",
        "ipa": "/ˌek.splɔɪˈteɪ.ʃən/",
        "pos": "(n)",
        "ex": "We must end the exploitation of child workers in the fashion industry."
    },
    {
        "num": 904,
        "en": "Corporate social responsibility",
        "vi": "Trách nhiệm xã hội của doanh nghiệp (CSR)",
        "ipa": "/ˈkɔː.pər.ət ˈsəʊ.ʃəl rɪˌspɒn.sɪˈbɪl.ə.ti/",
        "pos": "(n. phrase)",
        "ex": "Large companies should take corporate social responsibility much more seriously."
    },
    {
        "num": 905,
        "en": "Activism",
        "vi": "Chủ nghĩa hoạt động (xã hội, môi trường)",
        "ipa": "/ˈæk.tɪ.vɪ.zəm/",
        "pos": "(n)",
        "ex": "My sister is very involved in climate change activism at her university."
    },
    {
        "num": 906,
        "en": "Petition",
        "vi": "Kiến nghị / Đơn kiến nghị",
        "ipa": "/pəˈtɪʃ.ən/",
        "pos": "(n/v)",
        "ex": "I signed an online petition to stop them from cutting down the local forest."
    },
    {
        "num": 907,
        "en": "Protest",
        "vi": "Cuộc biểu tình / Phản đối",
        "ipa": "/ˈprəʊ.test/",
        "pos": "(n/v)",
        "ex": "Many students joined a peaceful protest against the new tuition fees."
    },
    {
        "num": 908,
        "en": "Strike",
        "vi": "Cuộc đình công",
        "ipa": "/straɪk/",
        "pos": "(n/v)",
        "ex": "The train drivers went on strike to ask for better working conditions."
    },
    {
        "num": 909,
        "en": "Marginalized groups",
        "vi": "Các nhóm bị yếu thế/ra rìa xã hội",
        "ipa": "/ˈmɑː.dʒɪ.nə.laɪzd ɡruːps/",
        "pos": "(n. phrase)",
        "ex": "The new policy aims to provide better support for marginalised groups in society."
    },
    {
        "num": 910,
        "en": "Eradicate",
        "vi": "Xóa bỏ hoàn toàn (nghèo đói/dịch bệnh)",
        "ipa": "/ɪˈræd.ɪ.keɪt/",
        "pos": "(v)",
        "ex": "We hope that modern medicine will soon eradicate this terrible disease completely."
    },
    {
        "num": 911,
        "en": "Put a strain on",
        "vi": "Gây áp lực lớn lên (tài nguyên/hệ thống)",
        "ipa": "/pʊt ə streɪn ɒn/",
        "pos": "(idiom)",
        "ex": "The sudden increase in tourists has put a huge strain on the local transport system."
    },
    {
        "num": 912,
        "en": "Tipping point",
        "vi": "Điểm bùng phát (thay đổi không thể vãn hồi)",
        "ipa": "/ˈtɪp.ɪŋ pɔɪnt/",
        "pos": "(n. phrase)",
        "ex": "Many scientists warn that global warming is dangerously close to a tipping point."
    },
    {
        "num": 913,
        "en": "Catalyst for change",
        "vi": "Chất xúc tác/Động lực cho sự thay đổi",
        "ipa": "/ˈkæt.əl.ɪst fɔː tʃeɪndʒ/",
        "pos": "(n. phrase)",
        "ex": "The documentary acted as a powerful catalyst for change in our community."
    },
    {
        "num": 914,
        "en": "Grassroots movement",
        "vi": "Phong trào cấp cơ sở (từ người dân thường)",
        "ipa": "/ˈɡrɑːs.ruːts ˈmuːv.mənt/",
        "pos": "(n. phrase)",
        "ex": "The campaign started as a small grassroots movement before becoming a national law."
    },
    {
        "num": 915,
        "en": "Uncharted territory",
        "vi": "Lĩnh vực/Vấn đề chưa từng có tiền lệ",
        "ipa": "/ʌnˈtʃɑː.tɪd ˈter.ɪ.tər.i/",
        "pos": "(n. phrase)",
        "ex": "Teaching fully online was completely uncharted territory for most of our teachers."
    },
    {
        "num": 916,
        "en": "Dire consequence",
        "vi": "Hậu quả khốc liệt",
        "ipa": "/daɪər ˈkɒn.sɪ.kwəns/",
        "pos": "(n. phrase)",
        "ex": "Ignoring climate change will certainly have a dire consequence for future generations."
    },
    {
        "num": 917,
        "en": "Out of control",
        "vi": "Vượt tầm kiểm soát",
        "ipa": "/aʊt əv kənˈtrəʊl/",
        "pos": "(idiom)",
        "ex": "The wild bushfire quickly got completely out of control due to the strong winds."
    },
    {
        "num": 918,
        "en": "Vicious cycle",
        "vi": "Vòng luẩn quẩn",
        "ipa": "/ˈvɪʃ.əs ˈsaɪ.kəl/",
        "pos": "(n. phrase)",
        "ex": "Borrowing money to pay off debts can quickly trap you in a vicious cycle."
    },
    {
        "num": 919,
        "en": "Take action",
        "vi": "Hành động",
        "ipa": "/teɪk ˈæk.ʃən/",
        "pos": "(v. phrase)",
        "ex": "The government really needs to take action immediately to reduce youth unemployment."
    },
    {
        "num": 920,
        "en": "Play a crucial role",
        "vi": "Đóng vai trò thiết yếu",
        "ipa": "/pleɪ ə ˈkruː.ʃəl rəʊl/",
        "pos": "(v. phrase)",
        "ex": "Parents play a crucial role in shaping a child's early development."
    },
    {
        "num": 921,
        "en": "Make a concerted effort",
        "vi": "Nỗ lực chung/đồng lòng",
        "ipa": "/meɪk ə kənˈsɜː.tɪd ˈef.ət/",
        "pos": "(v. phrase)",
        "ex": "We must make a concerted effort to recycle more of our daily rubbish."
    },
    {
        "num": 922,
        "en": "Switch to",
        "vi": "Chuyển sang dùng (năng lượng/phương pháp khác)",
        "ipa": "/swɪtʃ tu/",
        "pos": "(v. phrase)",
        "ex": "I decided to switch to a vegetarian diet because it is healthier and better for the planet."
    },
    {
        "num": 923,
        "en": "Phase out",
        "vi": "Loại bỏ dần dần",
        "ipa": "/feɪz aʊt/",
        "pos": "(phrasal v)",
        "ex": "Many countries plan to phase out petrol cars by the year 2035."
    },
    {
        "num": 924,
        "en": "Transition period",
        "vi": "Giai đoạn chuyển tiếp",
        "ipa": "/trænˈzɪʃ.ən ˈpɪə.ri.əd/",
        "pos": "(n. phrase)",
        "ex": "Moving from high school to university can be a very challenging transition period."
    },
    {
        "num": 925,
        "en": "Foster cooperation",
        "vi": "Thúc đẩy sự hợp tác (giữa các quốc gia)",
        "ipa": "/ˈfɒs.tər kəʊˌɒp.ərˈeɪ.ʃən/",
        "pos": "(v. phrase)",
        "ex": "International sports events are a fantastic way to foster cooperation between different countries."
    },
    {
        "num": 926,
        "en": "In harmony with nature",
        "vi": "Hài hòa với thiên nhiên",
        "ipa": "/ɪn ˈhɑː.mə.ni wɪð ˈnætʃ.ər/",
        "pos": "(phrase)",
        "ex": "I really admire communities that manage to live perfectly in harmony with nature."
    },
    {
        "num": 927,
        "en": "For future generations",
        "vi": "Cho các thế hệ tương lai",
        "ipa": "/fɔː ˈfjuː.tʃər ˌdʒen.əˈreɪ.ʃənz/",
        "pos": "(phrase)",
        "ex": "We must protect our beautiful oceans for future generations to enjoy."
    },
    {
        "num": 928,
        "en": "A role model",
        "vi": "Hình mẫu lý tưởng",
        "ipa": "/ə rəʊl ˈmɒd.əl/",
        "pos": "(n. phr.)",
        "ex": "My older brother has always been a great role model for me."
    },
    {
        "num": 929,
        "en": "Charismatic",
        "vi": "Có sức hút, lôi cuốn",
        "ipa": "/ˌkær.ɪzˈmæt.ɪk/",
        "pos": "(adj.)",
        "ex": "The team leader is so charismatic that everyone loves working with him."
    },
    {
        "num": 930,
        "en": "Approachable",
        "vi": "Dễ gần",
        "ipa": "/əˈprəʊ.tʃə.bəl/",
        "pos": "(adj.)",
        "ex": "Even though she is the headteacher, she is incredibly friendly and approachable."
    },
    {
        "num": 931,
        "en": "Broad-minded",
        "vi": "Tư duy cởi mở",
        "ipa": "/ˌbrɔːdˈmaɪn.dɪd/",
        "pos": "(adj.)",
        "ex": "I try to be broad-minded and listen carefully to other people's opinions."
    },
    {
        "num": 932,
        "en": "Compassionate",
        "vi": "Giàu lòng trắc ẩn",
        "ipa": "/kəmˈpæʃ.ən.ət/",
        "pos": "(adj.)",
        "ex": "My mother is a deeply compassionate person who always helps those in need."
    },
    {
        "num": 933,
        "en": "Dedicated",
        "vi": "Tận tụy, cống hiến",
        "ipa": "/ˈded.ɪ.keɪ.tɪd/",
        "pos": "(adj.)",
        "ex": "He is a highly dedicated doctor who works long hours to save his patients."
    },
    {
        "num": 934,
        "en": "Empathetic",
        "vi": "Có sự đồng cảm",
        "ipa": "/ˌem.pəˈθet.ɪk/",
        "pos": "(adj.)",
        "ex": "An empathetic friend will always listen to you when you are feeling sad."
    },
    {
        "num": 935,
        "en": "Gregarious",
        "vi": "Thích giao du, hòa đồng",
        "ipa": "/ɡrɪˈɡeə.ri.əs/",
        "pos": "(adj.)",
        "ex": "My sister is very gregarious and loves going to big, loud parties."
    },
    {
        "num": 936,
        "en": "Inspiring",
        "vi": "Truyền cảm hứng",
        "ipa": "/ɪnˈspaɪə.rɪŋ/",
        "pos": "(adj.)",
        "ex": "Listening to his speech about overcoming failure was truly inspiring."
    },
    {
        "num": 937,
        "en": "Modest",
        "vi": "Khiêm tốn",
        "ipa": "/ˈmɒd.ɪst/",
        "pos": "(adj.)",
        "ex": "Despite being incredibly talented, she remains very modest about her achievements."
    },
    {
        "num": 938,
        "en": "Optimistic",
        "vi": "Lạc quan",
        "ipa": "/ˌɒp.tɪˈmɪs.tɪk/",
        "pos": "(adj.)",
        "ex": "I always try to stay optimistic, even when things go completely wrong."
    },
    {
        "num": 939,
        "en": "Resourceful",
        "vi": "Tháo vát",
        "ipa": "/rɪˈzɔː.sfəl/",
        "pos": "(adj.)",
        "ex": "You have to be very resourceful when you are travelling alone in a foreign country."
    },
    {
        "num": 940,
        "en": "Trustworthy",
        "vi": "Đáng tin cậy",
        "ipa": "/ˈtrʌstˌwɜː.ði/",
        "pos": "(adj.)",
        "ex": "I can tell her all my secrets because she is a highly trustworthy friend."
    },
    {
        "num": 941,
        "en": "Visionary",
        "vi": "Có tầm nhìn / Người nhìn xa trông rộng",
        "ipa": "/ˈvɪʒ.ən.ər.i/",
        "pos": "(adj., n.)",
        "ex": "Steve Jobs was a true visionary who completely changed the technology industry."
    },
    {
        "num": 942,
        "en": "Witty",
        "vi": "Hài hước, dí dỏm một cách thông minh",
        "ipa": "/ˈwɪt.i/",
        "pos": "(adj.)",
        "ex": "My best friend is so witty that she can always make me laugh with a clever joke."
    },
    {
        "num": 943,
        "en": "Well-rounded",
        "vi": "Phát triển toàn diện",
        "ipa": "/ˌwelˈraʊn.dɪd/",
        "pos": "(adj.)",
        "ex": "Reading, playing sports, and learning music help to make you a well-rounded person."
    },
    {
        "num": 944,
        "en": "Down-to-earth",
        "vi": "Thực tế, không viển vông",
        "ipa": "/ˌdaʊn.tuˈɜːθ/",
        "pos": "(adj.)",
        "ex": "Even after becoming famous, the singer remained very humble and down-to-earth."
    },
    {
        "num": 945,
        "en": "A social butterfly",
        "vi": "Người quảng giao, quen biết rộng",
        "ipa": "/ə ˈsəʊ.ʃəl ˈbʌt.ə.flaɪ/",
        "pos": "(idiom)",
        "ex": "Unlike me, my younger brother is a real social butterfly who knows everybody."
    },
    {
        "num": 946,
        "en": "Have a heart of gold",
        "vi": "Có tấm lòng nhân hậu",
        "ipa": "/hæv ə hɑːt əv ɡəʊld/",
        "pos": "(idiom)",
        "ex": "My grandmother is very strict, but she truly has a heart of gold."
    },
    {
        "num": 947,
        "en": "Look up to",
        "vi": "Ngưỡng mộ, kính trọng",
        "ipa": "/lʊk ʌp tuː/",
        "pos": "(phr. v.)",
        "ex": "I really look up to my father because of his incredible work ethic."
    },
    {
        "num": 948,
        "en": "Hit it off",
        "vi": "Nhanh chóng ăn ý, thân thiết",
        "ipa": "/hɪt ɪt ɒf/",
        "pos": "(idiom)",
        "ex": "We hit it off immediately on our first day at university and have been best friends since."
    },
    {
        "num": 949,
        "en": "A shoulder to cry on",
        "vi": "Chỗ dựa tinh thần",
        "ipa": "/ə ˈʃəʊl.də tə kraɪ ɒn/",
        "pos": "(idiom)",
        "ex": "Whenever I fail an exam, my best friend is always a shoulder to cry on."
    },
    {
        "num": 950,
        "en": "Thick as thieves",
        "vi": "Rất thân thiết, gắn bó",
        "ipa": "/θɪk əz θiːvz/",
        "pos": "(idiom)",
        "ex": "My cousin and I used to be as thick as thieves when we were little kids."
    },
    {
        "num": 951,
        "en": "Extroverted",
        "vi": "Hướng ngoại",
        "ipa": "/ˈek.strə.vɜː.tɪd/",
        "pos": "(adj.)",
        "ex": "Being an extroverted person, I absolutely love meeting and talking to new people."
    },
    {
        "num": 952,
        "en": "Introverted",
        "vi": "Hướng nội",
        "ipa": "/ˈɪn.trə.vɜː.tɪd/",
        "pos": "(adj.)",
        "ex": "I am quite introverted, so I prefer spending my weekends reading quietly at home."
    },
    {
        "num": 953,
        "en": "Amiable",
        "vi": "Hòa nhã, thân thiện",
        "ipa": "/ˈeɪ.mi.ə.bəl/",
        "pos": "(adj.)",
        "ex": "The new neighbour seems like a very amiable and polite young man."
    },
    {
        "num": 954,
        "en": "Diligent",
        "vi": "Siêng năng, cần mẫn",
        "ipa": "/ˈdɪl.ɪ.dʒənt/",
        "pos": "(adj.)",
        "ex": "She is a very diligent student who always finishes her homework on time."
    },
    {
        "num": 955,
        "en": "Punctual",
        "vi": "Đúng giờ",
        "ipa": "/ˈpʌŋk.tʃu.əl/",
        "pos": "(adj.)",
        "ex": "I always try to be punctual because I hate making other people wait for me."
    },
    {
        "num": 956,
        "en": "Reliable",
        "vi": "Đáng tin cậy",
        "ipa": "/rɪˈlaɪ.ə.bəl/",
        "pos": "(adj.)",
        "ex": "A reliable friend is someone who will always help you when you are in trouble."
    },
    {
        "num": 957,
        "en": "Sincere",
        "vi": "Chân thành",
        "ipa": "/sɪnˈsɪə/",
        "pos": "(adj.)",
        "ex": "I really appreciated her sincere apology after our silly argument yesterday."
    },
    {
        "num": 958,
        "en": "Thoughtful",
        "vi": "Chu đáo, biết nghĩ cho người khác",
        "ipa": "/ˈθɔːt.fəl/",
        "pos": "(adj.)",
        "ex": "It was very thoughtful of you to buy me a cake for my birthday."
    },
    {
        "num": 959,
        "en": "Upbeat",
        "vi": "Lạc quan, vui vẻ",
        "ipa": "/ʌpˈbiːt/",
        "pos": "(adj.)",
        "ex": "I love listening to upbeat music when I am cleaning the house on a Sunday morning."
    },
    {
        "num": 960,
        "en": "Versatile",
        "vi": "Đa tài, linh hoạt",
        "ipa": "/ˈvɜː.sə.taɪl/",
        "pos": "(adj.)",
        "ex": "Eggs are an incredibly versatile ingredient because you can cook them in so many ways."
    },
    {
        "num": 961,
        "en": "Zealous",
        "vi": "Nhiệt huyết",
        "ipa": "/ˈzel.əs/",
        "pos": "(adj.)",
        "ex": "He is a zealous supporter of environmental protection and attends every protest."
    },
    {
        "num": 962,
        "en": "A wet blanket",
        "vi": "Kẻ phá đám, làm mất vui",
        "ipa": "/ə wet ˈblæŋ.kɪt/",
        "pos": "(idiom)",
        "ex": "Please don't be a wet blanket; just come to the party and have some fun!"
    },
    {
        "num": 963,
        "en": "A chatterbox",
        "vi": "Người nói nhiều",
        "ipa": "/ˈtʃæt.ə.bɒks/",
        "pos": "(n.)",
        "ex": "My little sister is a real chatterbox who never stops talking from morning to night."
    },
    {
        "num": 964,
        "en": "A go-getter",
        "vi": "Người cầu tiến, năng nổ",
        "ipa": "/ə ˈɡəʊˌɡet.ə/",
        "pos": "(n.)",
        "ex": "She is a true go-getter who will definitely succeed in whatever career she chooses."
    },
    {
        "num": 965,
        "en": "A know-it-all",
        "vi": "Kẻ tự phụ, tỏ ra biết tuốt",
        "ipa": "/ə ˈnəʊ.ɪt.ɔːl/",
        "pos": "(n.)",
        "ex": "Nobody likes working with a know-it-all who refuses to listen to other ideas."
    },
    {
        "num": 966,
        "en": "Easy-going",
        "vi": "Dễ tính",
        "ipa": "/ˌiː.ziˈɡəʊ.ɪŋ/",
        "pos": "(adj.)",
        "ex": "My manager is very easy-going, so I never feel stressed when working with her."
    },
    {
        "num": 967,
        "en": "Quick-witted",
        "vi": "Nhanh trí",
        "ipa": "/ˌkwɪkˈwɪt.ɪd/",
        "pos": "(adj.)",
        "ex": "The quick-witted student immediately knew the answer to the teacher's difficult question."
    },
    {
        "num": 968,
        "en": "Level-headed",
        "vi": "Bình tĩnh, điềm đạm",
        "ipa": "/ˌlev.əlˈhed.ɪd/",
        "pos": "(adj.)",
        "ex": "You need to stay level-headed and calm when dealing with an angry customer."
    },
    {
        "num": 969,
        "en": "Open-minded",
        "vi": "Cởi mở tiếp thu cái mới",
        "ipa": "/ˌəʊ.pənˈmaɪn.dɪd/",
        "pos": "(adj.)",
        "ex": "Travelling abroad really helps you to become more open-minded about different cultures."
    },
    {
        "num": 970,
        "en": "Straightforward",
        "vi": "Thẳng thắn",
        "ipa": "/ˌstreɪtˈfɔː.wəd/",
        "pos": "(adj.)",
        "ex": "I prefer people who are honest and straightforward when they give me feedback."
    },
    {
        "num": 971,
        "en": "Stubborn",
        "vi": "Bướng bỉnh",
        "ipa": "/ˈstʌb.ən/",
        "pos": "(adj.)",
        "ex": "He is too stubborn to admit that he made a mistake in the exam."
    },
    {
        "num": 972,
        "en": "Sympathetic",
        "vi": "Cảm thông",
        "ipa": "/ˌsɪm.pəˈθet.ɪk/",
        "pos": "(adj.)",
        "ex": "My boss was very sympathetic when I had to take a day off to care for my sick dog."
    },
    {
        "num": 973,
        "en": "Talented",
        "vi": "Tài năng",
        "ipa": "/ˈtæl.ən.tɪd/",
        "pos": "(adj.)",
        "ex": "Vietnam has many highly talented young students who win international competitions."
    },
    {
        "num": 974,
        "en": "Bear a striking resemblance to",
        "vi": "Ngoại hình rất giống (ai đó)",
        "ipa": "/beər ə ˈstraɪ.kɪŋ rɪˈzem.bləns tuː/",
        "pos": "(idiom)",
        "ex": "People always tell me that I bear a striking resemblance to my mother."
    },
    {
        "num": 975,
        "en": "Articulate",
        "vi": "Ăn nói lưu loát, rõ ràng",
        "ipa": "/ɑːˈtɪk.jə.lət/",
        "pos": "(adj.)",
        "ex": "She is an extremely articulate speaker who can explain complex ideas very clearly."
    },
    {
        "num": 976,
        "en": "Considerate",
        "vi": "Chu đáo, ân cần",
        "ipa": "/kənˈsɪd.ər.ət/",
        "pos": "(adj.)",
        "ex": "It is very considerate of him to keep his music turned down late at night."
    },
    {
        "num": 977,
        "en": "Dependable",
        "vi": "Chỗ dựa vững chắc, có thể tin cậy",
        "ipa": "/dɪˈpen.də.bəl/",
        "pos": "(adj.)",
        "ex": "A dependable internet connection is absolutely essential for my online lessons."
    },
    {
        "num": 978,
        "en": "Breathtaking",
        "vi": "Đẹp ngộp thở",
        "ipa": "/ˈbreθˌteɪ.kɪŋ/",
        "pos": "(adj.)",
        "ex": "The view from the top of the mountain was simply breathtaking."
    },
    {
        "num": 979,
        "en": "Picturesque",
        "vi": "Đẹp như tranh vẽ",
        "ipa": "/ˌpɪk.tʃərˈesk/",
        "pos": "(adj.)",
        "ex": "We stayed in a beautiful, picturesque village during our holiday in France."
    },
    {
        "num": 980,
        "en": "Bustling",
        "vi": "Nhộn nhịp, hối hả",
        "ipa": "/ˈbʌs.lɪŋ/",
        "pos": "(adj.)",
        "ex": "Ho Chi Minh City is a incredibly bustling city that never seems to sleep."
    },
    {
        "num": 981,
        "en": "Cosmopolitan",
        "vi": "Đa văn hóa, mang tầm quốc tế",
        "ipa": "/ˌkɒz.məˈpɒl.ɪ.tən/",
        "pos": "(adj.)",
        "ex": "London is a highly cosmopolitan city where you can meet people from everywhere."
    },
    {
        "num": 982,
        "en": "Historic",
        "vi": "Có bề dày lịch sử",
        "ipa": "/hɪˈstɒr.ɪk/",
        "pos": "(adj.)",
        "ex": "I really enjoyed walking around the historic streets of Hoi An ancient town."
    },
    {
        "num": 983,
        "en": "Dilapidated",
        "vi": "Đổ nát, xập xệ",
        "ipa": "/dɪˈlæp.ɪ.deɪ.tɪd/",
        "pos": "(adj.)",
        "ex": "The old factory at the end of my street is now completely empty and dilapidated."
    },
    {
        "num": 984,
        "en": "Idyllic",
        "vi": "Thanh bình, tuyệt đẹp (như thơ)",
        "ipa": "/ɪˈdɪl.ɪk/",
        "pos": "(adj.)",
        "ex": "We spent a perfectly idyllic afternoon reading books by the quiet river."
    },
    {
        "num": 985,
        "en": "Majestic",
        "vi": "Hùng vĩ, tráng lệ",
        "ipa": "/məˈdʒes.tɪk/",
        "pos": "(adj.)",
        "ex": "The majestic mountains in the north of Vietnam always leave tourists speechless."
    },
    {
        "num": 986,
        "en": "Remote",
        "vi": "Hẻo lánh, xa xôi",
        "ipa": "/rɪˈməʊt/",
        "pos": "(adj.)",
        "ex": "My grandparents live in a very remote village that takes hours to reach by car."
    },
    {
        "num": 987,
        "en": "Lively",
        "vi": "Sôi động",
        "ipa": "/ˈlaɪv.li/",
        "pos": "(adj.)",
        "ex": "The night market in my city has a very lively and exciting atmosphere."
    },
    {
        "num": 988,
        "en": "Pristine",
        "vi": "Hoang sơ, trong trẻo",
        "ipa": "/ˈprɪs.tiːn/",
        "pos": "(adj.)",
        "ex": "We took a boat to a beautiful island with pristine white beaches and clear water."
    },
    {
        "num": 989,
        "en": "Scenic",
        "vi": "Có cảnh quan thiên nhiên đẹp",
        "ipa": "/ˈsiː.nɪk/",
        "pos": "(adj.)",
        "ex": "I highly recommend taking the scenic train route instead of flying."
    },
    {
        "num": 990,
        "en": "Touristy",
        "vi": "Bị thương mại hóa bởi du lịch",
        "ipa": "/ˈtʊə.rɪ.sti/",
        "pos": "(adj.)",
        "ex": "The city centre has become a bit too touristy and expensive for my liking."
    },
    {
        "num": 991,
        "en": "Accessible",
        "vi": "Dễ tiếp cận, dễ đi đến",
        "ipa": "/əkˈses.ə.bəl/",
        "pos": "(adj.)",
        "ex": "The new shopping mall is easily accessible by public transport from my house."
    },
    {
        "num": 992,
        "en": "Isolated",
        "vi": "Bị cô lập",
        "ipa": "/ˈaɪ.sə.leɪ.tɪd/",
        "pos": "(adj.)",
        "ex": "The farmhouse was quite isolated, with no other neighbours for miles around."
    },
    {
        "num": 993,
        "en": "A tourist trap",
        "vi": "Nơi chèo kéo, chặt chém khách du lịch",
        "ipa": "/ə ˈtʊə.rɪst træp/",
        "pos": "(n. phr.)",
        "ex": "That famous seafood restaurant is just a tourist trap with terrible, overpriced food."
    },
    {
        "num": 994,
        "en": "Off the beaten track",
        "vi": "Nơi hoang sơ, ít người biết đến",
        "ipa": "/ɒf ðə ˈbiː.tən træk/",
        "pos": "(idiom)",
        "ex": "I prefer exploring small towns that are completely off the beaten track."
    },
    {
        "num": 995,
        "en": "A concrete jungle",
        "vi": "Rừng bê tông (chỉ thành phố ngột ngạt)",
        "ipa": "/ə ˈkɒŋ.kriːt ˈdʒʌŋ.ɡəl/",
        "pos": "(idiom)",
        "ex": "Sometimes I feel like I am living in a concrete jungle with no trees around."
    },
    {
        "num": 996,
        "en": "Commercial district",
        "vi": "Khu thương mại",
        "ipa": "/kəˈmɜː.ʃəl ˈdɪs.trɪkt/",
        "pos": "(n. phr.)",
        "ex": "The rent in the city's main commercial district is far too high for small businesses."
    },
    {
        "num": 997,
        "en": "Welcoming atmosphere",
        "vi": "Không khí hiếu khách",
        "ipa": "/ˈwel.kəm.ɪŋ ˈæt.mə.sfɪə/",
        "pos": "(n. phr.)",
        "ex": "The small family-run hotel had a wonderfully warm and welcoming atmosphere."
    },
    {
        "num": 998,
        "en": "Well-maintained",
        "vi": "Được bảo trì, gìn giữ tốt",
        "ipa": "/ˌwel meɪnˈteɪnd/",
        "pos": "(adj.)",
        "ex": "The public parks in this city are always beautifully clean and well-maintained."
    },
    {
        "num": 999,
        "en": "Run-down",
        "vi": "Xuống cấp",
        "ipa": "/ˌrʌnˈdaʊn/",
        "pos": "(adj.)",
        "ex": "The local cinema looks quite run-down and really needs to be renovated soon."
    },
    {
        "num": 1000,
        "en": "Quaint",
        "vi": "Cổ kính, kỳ lạ mà hấp dẫn",
        "ipa": "/kweɪnt/",
        "pos": "(adj.)",
        "ex": "We stayed in a quaint little cottage with a beautiful garden full of roses."
    }
];
