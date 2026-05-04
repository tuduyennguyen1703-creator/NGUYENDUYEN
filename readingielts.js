const vocabList = [
    {
        "id": 1,
        "word": "Peer at (something)",
        "type": "phr. v.",
        "pronunciation": "/pɪər ət/",
        "meaning": "Nhìn chăm chú, nhìn kỹ qua dụng cụ",
        "example": "Some scientists peer at things through high-powered microscopes."
    },
    {
        "id": 2,
        "word": "Plug a book",
        "type": "phrase",
        "pronunciation": "/plʌɡ ə bʊk/",
        "meaning": "Quảng bá, PR mạnh mẽ cho sách",
        "example": "He is going on a talk show where he is plugging his latest book."
    },
    {
        "id": 3,
        "word": "In a heap",
        "type": "prep. phr.",
        "pronunciation": "/ɪn ə hiːp/",
        "meaning": "Xếp/đổ thành một đống lộn xộn",
        "example": "When the chocolates arrived in a heap, we had to sort them out."
    },
    {
        "id": 4,
        "word": "Enroll in",
        "type": "phr. v.",
        "pronunciation": "/ɪnˈrəʊl ɪn/",
        "meaning": "Ghi danh, đăng ký tham gia",
        "example": "They are enrolling in sales-training programmes to learn persuasion."
    },
    {
        "id": 5,
        "word": "Patron",
        "type": "n.",
        "pronunciation": "/ˈpeɪ.trən/",
        "meaning": "Khách hàng quen, thực khách",
        "example": "We observed how restaurant patrons would respond to the offer."
    },
    {
        "id": 6,
        "word": "Underpin",
        "type": "v.",
        "pronunciation": "/ˌʌn.dəˈpɪn/",
        "meaning": "Làm nền tảng, củng cố vững chắc",
        "example": "This is the force underpinning the competitive materialism in our society."
    },
    {
        "id": 7,
        "word": "Ruthlessly",
        "type": "adv.",
        "pronunciation": "/ˈruːθ.ləs.li/",
        "meaning": "Một cách tàn nhẫn, triệt để",
        "example": "Advertisers ruthlessly exploit scarcity to increase sales."
    },
    {
        "id": 8,
        "word": "Resemblance",
        "type": "n.",
        "pronunciation": "/rɪˈzem.bləns/",
        "meaning": "Sự giống nhau",
        "example": "They bonded even if the resemblance was as minor as a shared name."
    },
    {
        "id": 9,
        "word": "Confectionery",
        "type": "n.",
        "pronunciation": "/kənˈfek.ʃən.ər.i/",
        "meaning": "Đồ ngọt, bánh kẹo nói chung",
        "example": "Cialdini has also learnt a lot from confectionery."
    },
    {
        "id": 10,
        "word": "Timeshare",
        "type": "n.",
        "pronunciation": "/ˈtaɪm.ʃeə/",
        "meaning": "Hình thức sở hữu kỳ nghỉ",
        "example": "A salesman was talking to you about buying timeshares."
    },
    {
        "id": 11,
        "word": "Crummy",
        "type": "adj.",
        "pronunciation": "/ˈkrʌm.i/",
        "meaning": "Rẻ tiền, tồi tàn, chất lượng kém",
        "example": "They put a crummy pen inside a mailout to prompt a donation."
    },
    {
        "id": 12,
        "word": "Mailout",
        "type": "n.",
        "pronunciation": "/ˈmeɪl.aʊt/",
        "meaning": "Thư/tài liệu quảng cáo gửi hàng loạt",
        "example": "The charity included a small gift inside a mailout."
    },
    {
        "id": 13,
        "word": "Laboratory experiment",
        "type": "collocation",
        "pronunciation": "/ləˈbɒr.ə.tər.i ɪkˈsper.ɪ.mənt/",
        "meaning": "Thí nghiệm trong phòng lab",
        "example": "These theories were initially tested in laboratory experiments."
    },
    {
        "id": 14,
        "word": "Conserve water and electricity",
        "type": "collocation",
        "pronunciation": "/kənˈsɜːv ˈwɔː.tər ənd ɪˌlekˈtrɪs.ə.ti/",
        "meaning": "Bảo tồn / tiết kiệm điện nước",
        "example": "The hotel asked guests to conserve water and electricity."
    },
    {
        "id": 15,
        "word": "Calculate the relative value",
        "type": "collocation",
        "pronunciation": "/ˈkæl.kjə.leɪt ðə ˈrel.ə.tɪv ˈvæl.juː/",
        "meaning": "Tính toán giá trị tương đối",
        "example": "People tend to calculate the relative value of what they give and receive."
    },
    {
        "id": 16,
        "word": "Extreme violence",
        "type": "collocation",
        "pronunciation": "/ɪkˈstriːm ˈvaɪə.ləns/",
        "meaning": "Bạo lực tột độ",
        "example": "Parents sometimes use threats of extreme violence to control kids."
    },
    {
        "id": 17,
        "word": "Leap in",
        "type": "n. phr.",
        "pronunciation": "/liːp ɪn/",
        "meaning": "Sự tăng vọt, sự cải thiện đột ngột",
        "example": "The clinic experienced an immediate leap in patient compliance."
    },
    {
        "id": 18,
        "word": "Have a knack for",
        "type": "idiom",
        "pronunciation": "/hæv ə næk fɔː/",
        "meaning": "Có năng khiếu bẩm sinh, tài khéo léo",
        "example": "Why do some people have a knack for bending the will of others?"
    },
    {
        "id": 19,
        "word": "Bend the will of others",
        "type": "phrase",
        "pronunciation": "/bend ðə wɪl əv ˈʌð.əz/",
        "meaning": "Bẻ cong/thao túng ý chí người khác",
        "example": "Expert persuaders know exactly how to bend the will of others."
    },
    {
        "id": 20,
        "word": "Snake-oil salesman",
        "type": "n.",
        "pronunciation": "/ˈsneɪk.ɔɪl ˈseɪlz.mən/",
        "meaning": "Kẻ lừa đảo bán đồ rởm",
        "example": "Beware of snake-oil salesmen offering miracle cures."
    },
    {
        "id": 21,
        "word": "An easy mark",
        "type": "idiom",
        "pronunciation": "/ən ˈiː.zi mɑːk/",
        "meaning": "Mục tiêu dễ bị lừa, người nhẹ dạ",
        "example": "I've always been an easy mark for the blandishment of salespeople."
    },
    {
        "id": 22,
        "word": "Keep up with the Joneses",
        "type": "idiom",
        "pronunciation": "/kiːp ʌp wɪð ðə ˈdʒəʊnz.ɪz/",
        "meaning": "Đua đòi, so bì vật chất với hàng xóm",
        "example": "Many families go into debt just to keep up with the Joneses."
    },
    {
        "id": 23,
        "word": "Mess about with",
        "type": "phr. v.",
        "pronunciation": "/mes əˈbaʊt wɪð/",
        "meaning": "Dành thời gian làm gì để thử nghiệm",
        "example": "They were messing about with towels to test guest reactions."
    },
    {
        "id": 24,
        "word": "Set out to",
        "type": "phr. v.",
        "pronunciation": "/set aʊt tuː/",
        "meaning": "Bắt đầu một kế hoạch/mục tiêu gì đó",
        "example": "Think carefully before you set out to influence them."
    },
    {
        "id": 25,
        "word": "Double back",
        "type": "phr. v.",
        "pronunciation": "/ˈdʌb.əl bæk/",
        "meaning": "Quay ngược trở lại đường cũ",
        "example": "The waiter headed away from the table then doubled back."
    },
    {
        "id": 26,
        "word": "Hand out",
        "type": "phr. v.",
        "pronunciation": "/hænd aʊt/",
        "meaning": "Phân phát",
        "example": "The staff hand out dollops of free food in the supermarket."
    },
    {
        "id": 27,
        "word": "Translate into",
        "type": "phr. v.",
        "pronunciation": "/trænzˈleɪt ˈɪn.tuː/",
        "meaning": "Dẫn đến kết quả là, chuyển hóa thành",
        "example": "In America, good service would translate into an instant tip."
    },
    {
        "id": 28,
        "word": "Sign up",
        "type": "phr. v.",
        "pronunciation": "/saɪn ʌp/",
        "meaning": "Đăng ký tham gia",
        "example": "They used various tactics to get a higher sign-up rate."
    },
    {
        "id": 29,
        "word": "Make a life's work from",
        "type": "collocation",
        "pronunciation": "/meɪk ə laɪfs wɜːk frɒm/",
        "meaning": "Dành cả đời nghiên cứu/làm việc về",
        "example": "He decided to make a life's work from studying persuasion."
    },
    {
        "id": 30,
        "word": "High-powered microscope",
        "type": "collocation",
        "pronunciation": "/ˌhaɪˈpaʊəd ˈmaɪ.krə.skəʊp/",
        "meaning": "Kính hiển vi độ phóng đại lớn",
        "example": "Cells can only be seen under high-powered microscopes."
    },
    {
        "id": 31,
        "word": "Put to the test",
        "type": "idiom",
        "pronunciation": "/pʊt tuː ðə test/",
        "meaning": "Đem ra thử nghiệm thực tế",
        "example": "The researchers put their psychological theories to the test."
    },
    {
        "id": 32,
        "word": "Relative effectiveness",
        "type": "collocation",
        "pronunciation": "/ˈrel.ə.tɪv ɪˈfek.tɪv.nəs/",
        "meaning": "Hiệu quả tương đối",
        "example": "They compared the relative effectiveness of different messages."
    },
    {
        "id": 33,
        "word": "Persuasive force",
        "type": "collocation",
        "pronunciation": "/pəˈsweɪ.sɪv fɔːs/",
        "meaning": "Sức mạnh thuyết phục",
        "example": "Social proof is a highly persuasive force in marketing."
    },
    {
        "id": 34,
        "word": "Ridiculously small favour",
        "type": "collocation",
        "pronunciation": "/rɪˈdɪk.jə.ləs.li smɔːl ˈfeɪ.və/",
        "meaning": "Một đặc ân nhỏ đến mức buồn cười",
        "example": "A ridiculously small favour can lead to a big return later."
    },
    {
        "id": 35,
        "word": "Cynical trick",
        "type": "collocation",
        "pronunciation": "/ˈsɪn.ɪ.kəl trɪk/",
        "meaning": "Mánh khóe thực dụng",
        "example": "Customers are becoming aware of these cynical tricks."
    },
    {
        "id": 36,
        "word": "Patient compliance",
        "type": "collocation",
        "pronunciation": "/ˈpeɪ.ʃənt kəmˈplaɪ.əns/",
        "meaning": "Sự tuân thủ điều trị của bệnh nhân",
        "example": "The new communication strategy improved patient compliance."
    },
    {
        "id": 37,
        "word": "Competitive materialism",
        "type": "collocation",
        "pronunciation": "/kəmˈpet.ɪ.tɪv məˈtɪə.ri.ə.lɪ.zəm/",
        "meaning": "Chủ nghĩa thực dụng cạnh tranh",
        "example": "It is the force underpinning competitive materialism in modern life."
    },
    {
        "id": 38,
        "word": "Persuade",
        "type": "v.",
        "pronunciation": "/pəˈsweɪd/",
        "meaning": "Thuyết phục",
        "example": "She managed to persuade her parents to let her go."
    },
    {
        "id": 39,
        "word": "Persuasion",
        "type": "n.",
        "pronunciation": "/pəˈsweɪ.ʒən/",
        "meaning": "Sự thuyết phục",
        "example": "He used his powers of persuasion to win the deal."
    },
    {
        "id": 40,
        "word": "Compliant",
        "type": "adj.",
        "pronunciation": "/kəmˈplaɪ.ənt/",
        "meaning": "Tuân thủ, dễ dãi, phục tùng",
        "example": "The patient was fully compliant with the doctor's orders."
    },
    {
        "id": 41,
        "word": "Compelling",
        "type": "adj.",
        "pronunciation": "/kəmˈpel.ɪŋ/",
        "meaning": "Hấp dẫn, có sức thuyết phục cao",
        "example": "She presented a compelling argument for the new policy."
    },
    {
        "id": 42,
        "word": "Motivate",
        "type": "v.",
        "pronunciation": "/ˈməʊ.tɪ.veɪt/",
        "meaning": "Thúc đẩy, tạo động lực",
        "example": "What motivates people to buy things they don't need?"
    },
    {
        "id": 43,
        "word": "Credentials",
        "type": "n.",
        "pronunciation": "/krɪˈden.ʃəlz/",
        "meaning": "Bằng cấp, chứng chỉ, năng lực",
        "example": "The doctor displayed his credentials prominently on the wall."
    },
    {
        "id": 44,
        "word": "Insight",
        "type": "n.",
        "pronunciation": "/ˈɪn.saɪt/",
        "meaning": "Sự hiểu biết sâu sắc, thấu đáo",
        "example": "The book provides fascinating insights into human behavior."
    },
    {
        "id": 45,
        "word": "Breakthrough",
        "type": "n.",
        "pronunciation": "/ˈbreɪk.θruː/",
        "meaning": "Bước đột phá",
        "example": "Scientists have made a major breakthrough in the research."
    },
    {
        "id": 46,
        "word": "Exploit",
        "type": "v.",
        "pronunciation": "/ɪkˈsplɔɪt/",
        "meaning": "Khai thác, lợi dụng",
        "example": "Advertisers routinely exploit psychological triggers."
    },
    {
        "id": 47,
        "word": "Reciprocity",
        "type": "n.",
        "pronunciation": "/ˌres.ɪˈprɒs.ə.ti/",
        "meaning": "Sự có đi có lại, sự tương hỗ",
        "example": "The rule of reciprocity makes us feel obligated to return a favor."
    },
    {
        "id": 48,
        "word": "Scarcity",
        "type": "n.",
        "pronunciation": "/ˈskeə.sə.ti/",
        "meaning": "Sự khan hiếm",
        "example": "The principle of scarcity increases the perceived value of an item."
    },
    {
        "id": 49,
        "word": "Prominently",
        "type": "adv.",
        "pronunciation": "/ˈprɒm.ɪ.nənt.li/",
        "meaning": "Một cách nổi bật, dễ thấy",
        "example": "The warning sign was displayed prominently at the entrance."
    },
    {
        "id": 50,
        "word": "Goad",
        "type": "v.",
        "pronunciation": "/ɡəʊd/",
        "meaning": "Thúc giục, ép buộc bằng lời/bạo lực",
        "example": "They would goad rats through mazes during the experiment."
    },
    {
        "id": 51,
        "word": "Blandishment",
        "type": "n.",
        "pronunciation": "/ˈblæn.dɪʃ.mənt/",
        "meaning": "Lời nịnh nọt, xum xoe",
        "example": "I've been an easy mark for the blandishment of salespeople."
    },
    {
        "id": 52,
        "word": "Miserly",
        "type": "adj.",
        "pronunciation": "/ˈmaɪ.zəl.i/",
        "meaning": "Ít ỏi một cách thảm hại, keo kiệt",
        "example": "The tips went up a miserly 3% after the change."
    },
    {
        "id": 53,
        "word": "Solicit",
        "type": "v.",
        "pronunciation": "/səˈlɪs.ɪt/",
        "meaning": "Kêu gọi, chèo kéo (quyên góp)",
        "example": "They go door to door when soliciting charitable donations."
    },
    {
        "id": 54,
        "word": "Perniciously",
        "type": "adv.",
        "pronunciation": "/pəˈnɪʃ.əs.li/",
        "meaning": "Một cách độc hại, ngấm ngầm",
        "example": "More perniciously, social proof is the force behind bad trends."
    },
    {
        "id": 55,
        "word": "Authority",
        "type": "n.",
        "pronunciation": "/ɔːˈθɒr.ə.ti/",
        "meaning": "Nguyên tắc uy quyền",
        "example": "Authority is one of the six principles of persuasion."
    },
    {
        "id": 56,
        "word": "Commitment",
        "type": "n.",
        "pronunciation": "/kəˈmɪt.mənt/",
        "meaning": "Sự cam kết",
        "example": "Acting in a way that is consistent with our commitments."
    },
    {
        "id": 57,
        "word": "Consistency",
        "type": "n.",
        "pronunciation": "/kənˈsɪs.tən.si/",
        "meaning": "Sự nhất quán",
        "example": "Consistency means following through on what you said."
    },
    {
        "id": 58,
        "word": "Liking",
        "type": "n.",
        "pronunciation": "/ˈlaɪ.kɪŋ/",
        "meaning": "Nguyên tắc thiện cảm",
        "example": "The principle of liking states that we agree with people we like."
    },
    {
        "id": 59,
        "word": "Social proof",
        "type": "n.",
        "pronunciation": "/ˈsəʊ.ʃəl pruːf/",
        "meaning": "Bằng chứng xã hội (tâm lý bầy đàn)",
        "example": "Social proof dictates that we look to others to determine our actions."
    },
    {
        "id": 60,
        "word": "Get one's own way",
        "type": "idiom",
        "pronunciation": "/ɡet wʌnz əʊn weɪ/",
        "meaning": "Đạt được điều mình muốn",
        "example": "With these techniques, we should get our own way more often."
    },
    {
        "id": 61,
        "word": "Get in first",
        "type": "phrase",
        "pronunciation": "/ɡet ɪn fɜːst/",
        "meaning": "Đi trước một bước, ra tay trước",
        "example": "The trick here is to get in first and establish a connection."
    },
    {
        "id": 62,
        "word": "Door to door",
        "type": "phrase",
        "pronunciation": "/dɔː tuː dɔː/",
        "meaning": "Đến tận từng nhà",
        "example": "He learned how to sell encyclopedias door to door."
    },
    {
        "id": 63,
        "word": "Cold-caller",
        "type": "n.",
        "pronunciation": "/ˈkəʊldˌkɔː.lə/",
        "meaning": "Nhân viên tiếp thị qua điện thoại",
        "example": "A cold-caller tried to sell me insurance over the phone."
    },
    {
        "id": 64,
        "word": "Fundraiser",
        "type": "n.",
        "pronunciation": "/ˈfʌndˌreɪ.zə/",
        "meaning": "Người gây quỹ / Sự kiện gây quỹ",
        "example": "The charity hired a professional fundraiser for the campaign."
    },
    {
        "id": 65,
        "word": "Food server / Waiting staff",
        "type": "n.",
        "pronunciation": "/fuːd ˈsɜː.və/",
        "meaning": "Nhân viên phục vụ đồ ăn",
        "example": "The food servers were trained to increase their tips."
    },
    {
        "id": 66,
        "word": "Operations manager",
        "type": "n.",
        "pronunciation": "/ˌɒp.ərˈeɪ.ʃənz ˈmæn.ɪ.dʒə/",
        "meaning": "Giám đốc vận hành",
        "example": "The operations manager is responsible for daily activities."
    },
    {
        "id": 67,
        "word": "Sponsorship form",
        "type": "n.",
        "pronunciation": "/ˈspɒn.sə.ʃɪp fɔːm/",
        "meaning": "Đơn/mẫu đăng ký xin tài trợ",
        "example": "Please fill out this sponsorship form to participate."
    },
    {
        "id": 68,
        "word": "Consistent with",
        "type": "adj. phr.",
        "pronunciation": "/kənˈsɪs.tənt wɪð/",
        "meaning": "Nhất quán với, không mâu thuẫn",
        "example": "People want to act in a way that is consistent with their commitments."
    },
    {
        "id": 69,
        "word": "Co-operate",
        "type": "v.",
        "pronunciation": "/kəʊˈɒp.ər.eɪt/",
        "meaning": "Hợp tác",
        "example": "Would guests be motivated to co-operate with the new policy?"
    },
    {
        "id": 70,
        "word": "Truthful",
        "type": "adj.",
        "pronunciation": "/ˈtruːθ.fəl/",
        "meaning": "Chân thật, đúng sự thật",
        "example": "They responded to the simple and truthful statement."
    },
    {
        "id": 71,
        "word": "Obvious",
        "type": "adj.",
        "pronunciation": "/ˈɒb.vi.əs/",
        "meaning": "Rõ ràng, rành rành",
        "example": "It was obvious enough, but the reasons were complex."
    },
    {
        "id": 72,
        "word": "Glass beaker",
        "type": "n.",
        "pronunciation": "/ɡlɑːs ˈbiː.kə/",
        "meaning": "Cốc thủy tinh (phòng thí nghiệm)",
        "example": "The scientist poured the chemical into a glass beaker."
    },
    {
        "id": 73,
        "word": "Egg-and-spoon marathon",
        "type": "n.",
        "pronunciation": "/eɡ ənd spuːn ˈmær.ə.θən/",
        "meaning": "Cuộc chạy đua mang trứng trên thìa",
        "example": "The company organized an egg-and-spoon marathon for charity."
    }
];

// Xuất biến để sử dụng ở file khác (Bỏ comment nếu dùng Module)
// export default vocabList;