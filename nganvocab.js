const vocabularyList = [
    {
        "num": 1,
        "en": "Social media",
        "pos": "n.",
        "ipa": "/ˌsəʊ.ʃəl ˈmiː.di.ə/",
        "vi": "Mạng xã hội",
        "ex": ""
    },
    {
        "num": 2,
        "en": "Platform",
        "pos": "n.",
        "ipa": "/ˈplæt.fɔːm/",
        "vi": "Nền tảng (mạng xã hội)",
        "ex": ""
    },
    {
        "num": 3,
        "en": "Way",
        "pos": "n.",
        "ipa": "/weɪ/",
        "vi": "Cách thức",
        "ex": ""
    },
    {
        "num": 4,
        "en": "Communicate",
        "pos": "v.",
        "ipa": "/kəˈmjuː.nɪ.keɪt/",
        "vi": "Giao tiếp",
        "ex": ""
    },
    {
        "num": 5,
        "en": "Stay connected",
        "pos": "phr.",
        "ipa": "/steɪ kəˈnek.tɪd/",
        "vi": "Giữ liên lạc",
        "ex": ""
    },
    {
        "num": 6,
        "en": "Nature",
        "pos": "n.",
        "ipa": "/ˈneɪ.tʃə/",
        "vi": "Bản chất",
        "ex": ""
    },
    {
        "num": 7,
        "en": "Scroll through one’s feeds",
        "pos": "phr.",
        "ipa": "/skrəʊl θruː wʌnz fiːdz/",
        "vi": "Lướt bảng tin",
        "ex": ""
    },
    {
        "num": 8,
        "en": "Lead to",
        "pos": "phr. v.",
        "ipa": "/liːd tuː/",
        "vi": "Dẫn đến, gây ra",
        "ex": ""
    },
    {
        "num": 9,
        "en": "Result in",
        "pos": "phr. v.",
        "ipa": "/rɪˈzʌlt ɪn/",
        "vi": "Dẫn đến, gây ra",
        "ex": ""
    },
    {
        "num": 10,
        "en": "Cause",
        "pos": "v.",
        "ipa": "/kɔːz/",
        "vi": "Gây ra",
        "ex": ""
    },
    {
        "num": 11,
        "en": "A lack of",
        "pos": "phr.",
        "ipa": "/ə læk əv/",
        "vi": "Sự thiếu hụt",
        "ex": ""
    },
    {
        "num": 12,
        "en": "Productivity",
        "pos": "n.",
        "ipa": "/ˌprɒd.ʌkˈtɪv.ə.ti/",
        "vi": "Năng suất",
        "ex": ""
    },
    {
        "num": 13,
        "en": "Put at risk",
        "pos": "idiom",
        "ipa": "/pʊt ət rɪsk/",
        "vi": "Đặt vào tình trạng nguy hiểm",
        "ex": ""
    },
    {
        "num": 14,
        "en": "Connected",
        "pos": "adj.",
        "ipa": "/kəˈnek.tɪd/",
        "vi": "Kết nối",
        "ex": ""
    },
    {
        "num": 15,
        "en": "Addictive",
        "pos": "adj.",
        "ipa": "/əˈdɪk.tɪv/",
        "vi": "Gây nghiện",
        "ex": ""
    },
    {
        "num": 16,
        "en": "Privacy",
        "pos": "n.",
        "ipa": "/ˈprɪv.ə.si/",
        "vi": "Sự riêng tư",
        "ex": ""
    },
    {
        "num": 17,
        "en": "Responsibly",
        "pos": "adv.",
        "ipa": "/rɪˈspɒn.sə.bli/",
        "vi": "Một cách có trách nhiệm",
        "ex": ""
    },
    {
        "num": 18,
        "en": "Spend time/hours + V-ing",
        "pos": "struct.",
        "ipa": "/spend taɪm/ˈaʊ.əz/",
        "vi": "Dành thời gian làm gì",
        "ex": ""
    },
    {
        "num": 19,
        "en": "Stay fit",
        "pos": "phr.",
        "ipa": "/steɪ fɪt/",
        "vi": "Giữ vóc dáng",
        "ex": ""
    },
    {
        "num": 20,
        "en": "Energize",
        "pos": "v.",
        "ipa": "/ˈen.ə.dʒaɪz/",
        "vi": "Làm cho tràn đầy năng lượng",
        "ex": ""
    },
    {
        "num": 21,
        "en": "Include",
        "pos": "v.",
        "ipa": "/ɪnˈkluːd/",
        "vi": "Bao gồm, chứa đựng",
        "ex": ""
    },
    {
        "num": 22,
        "en": "Essential",
        "pos": "adj.",
        "ipa": "/ɪˈsen.ʃəl/",
        "vi": "Quan trọng, nền tảng",
        "ex": ""
    },
    {
        "num": 23,
        "en": "Basic",
        "pos": "adj.",
        "ipa": "/ˈbeɪ.sɪk/",
        "vi": "Căn bản, cơ bản",
        "ex": ""
    },
    {
        "num": 24,
        "en": "Function",
        "pos": "v.",
        "ipa": "/ˈfʌŋk.ʃən/",
        "vi": "Hoạt động, vận hành",
        "ex": ""
    },
    {
        "num": 25,
        "en": "Vital",
        "pos": "adj.",
        "ipa": "/ˈvaɪ.təl/",
        "vi": "Quan trọng (đóng vai trò sống còn)",
        "ex": ""
    },
    {
        "num": 26,
        "en": "Whole grain",
        "pos": "n.",
        "ipa": "/ˌhəʊl ˈɡreɪn/",
        "vi": "Hạt ngũ cốc nguyên hạt",
        "ex": ""
    },
    {
        "num": 27,
        "en": "Long-term",
        "pos": "adj.",
        "ipa": "/ˌlɒŋˈtɜːm/",
        "vi": "Lâu dài",
        "ex": ""
    },
    {
        "num": 28,
        "en": "Balanced diet",
        "pos": "n.",
        "ipa": "/ˌbæl.ənst ˈdaɪ.ət/",
        "vi": "Chế độ ăn cân bằng",
        "ex": ""
    },
    {
        "num": 29,
        "en": "Nutrients",
        "pos": "n.",
        "ipa": "/ˈnjuː.tri.ənts/",
        "vi": "Chất dinh dưỡng",
        "ex": ""
    },
    {
        "num": 30,
        "en": "Processed",
        "pos": "adj.",
        "ipa": "/ˈprəʊ.sest/",
        "vi": "Đã qua chế biến",
        "ex": ""
    },
    {
        "num": 31,
        "en": "Well-being",
        "pos": "n.",
        "ipa": "/ˌwelˈbiː.ɪŋ/",
        "vi": "Tình trạng sức khỏe, hạnh phúc",
        "ex": ""
    },
    {
        "num": 32,
        "en": "Health",
        "pos": "n.",
        "ipa": "/helθ/",
        "vi": "Sức khỏe",
        "ex": ""
    },
    {
        "num": 33,
        "en": "Play a vital role in",
        "pos": "idiom",
        "ipa": "/pleɪ ə ˈvaɪ.təl rəʊl ɪn/",
        "vi": "Đóng một vai trò quan trọng trong...",
        "ex": ""
    },
    {
        "num": 34,
        "en": "Rewarding",
        "pos": "adj.",
        "ipa": "/rɪˈwɔː.dɪŋ/",
        "vi": "Đáng công sức, bổ ích",
        "ex": ""
    },
    {
        "num": 35,
        "en": "Patient",
        "pos": "adj. / n.",
        "ipa": "/ˈpeɪ.ʃənt/",
        "vi": "Kiên nhẫn (tính từ) / Bệnh nhân (danh từ)",
        "ex": ""
    },
    {
        "num": 36,
        "en": "Patience",
        "pos": "n.",
        "ipa": "/ˈpeɪ.ʃəns/",
        "vi": "Sự kiên nhẫn",
        "ex": ""
    },
    {
        "num": 37,
        "en": "Harvest",
        "pos": "v. / n.",
        "ipa": "/ˈhɑː.vɪst/",
        "vi": "Thu hoạch / Vụ mùa",
        "ex": ""
    },
    {
        "num": 38,
        "en": "Bloom",
        "pos": "v.",
        "ipa": "/bluːm/",
        "vi": "Nở hoa",
        "ex": ""
    },
    {
        "num": 39,
        "en": "Taste",
        "pos": "v. / n.",
        "ipa": "/teɪst/",
        "vi": "Có mùi vị, nếm / Vị giác",
        "ex": ""
    },
    {
        "num": 40,
        "en": "As",
        "pos": "conj.",
        "ipa": "/æz/",
        "vi": "Như, vì, khi",
        "ex": ""
    },
    {
        "num": 41,
        "en": "Become",
        "pos": "v.",
        "ipa": "/bɪˈkʌm/",
        "vi": "Trở thành",
        "ex": ""
    },
    {
        "num": 42,
        "en": "Global warming",
        "pos": "n.",
        "ipa": "/ˌɡləʊ.bəl ˈwɔː.mɪŋ/",
        "vi": "Sự nóng lên toàn cầu",
        "ex": ""
    },
    {
        "num": 43,
        "en": "Ice caps",
        "pos": "n.",
        "ipa": "/ˈaɪs ˌkæps/",
        "vi": "Chỏm băng",
        "ex": ""
    },
    {
        "num": 44,
        "en": "Melt",
        "pos": "v.",
        "ipa": "/melt/",
        "vi": "Tan ra",
        "ex": ""
    },
    {
        "num": 45,
        "en": "Lose",
        "pos": "v.",
        "ipa": "/luːz/",
        "vi": "Mất đi",
        "ex": ""
    },
    {
        "num": 46,
        "en": "Habitats",
        "pos": "n.",
        "ipa": "/ˈhæb.ɪ.tæts/",
        "vi": "Môi trường sống",
        "ex": ""
    },
    {
        "num": 47,
        "en": "Environment",
        "pos": "n.",
        "ipa": "/ɪnˈvaɪ.rən.mənt/",
        "vi": "Môi trường sống",
        "ex": ""
    },
    {
        "num": 48,
        "en": "Sustainable",
        "pos": "adj.",
        "ipa": "/səˈsteɪ.nə.bəl/",
        "vi": "Bền vững",
        "ex": ""
    },
    {
        "num": 49,
        "en": "Carbon footprint",
        "pos": "n.",
        "ipa": "/ˌkɑː.bən ˈfʊt.prɪnt/",
        "vi": "Dấu chân carbon (lượng khí thải)",
        "ex": ""
    },
    {
        "num": 50,
        "en": "Counts",
        "pos": "v.",
        "ipa": "/kaʊnts/",
        "vi": "Có giá trị, quan trọng",
        "ex": ""
    },
    {
        "num": 51,
        "en": "Fight against",
        "pos": "phr. v.",
        "ipa": "/faɪt əˈɡeɪnst/",
        "vi": "Đấu tranh chống lại",
        "ex": ""
    },
    {
        "num": 52,
        "en": "Apply",
        "pos": "v.",
        "ipa": "/əˈplaɪ/",
        "vi": "Nộp đơn, áp dụng",
        "ex": ""
    },
    {
        "num": 53,
        "en": "First impression",
        "pos": "n.",
        "ipa": "/ˌfɜːst ɪmˈpreʃ.ən/",
        "vi": "Ấn tượng đầu tiên",
        "ex": ""
    },
    {
        "num": 54,
        "en": "Confident",
        "pos": "adj.",
        "ipa": "/ˈkɒn.fɪ.dənt/",
        "vi": "Tự tin",
        "ex": ""
    },
    {
        "num": 55,
        "en": "Qualifications",
        "pos": "n.",
        "ipa": "/ˌkwɒl.ɪ.fɪˈkeɪ.ʃəns/",
        "vi": "Bằng cấp, năng lực",
        "ex": ""
    },
    {
        "num": 56,
        "en": "Enthusiasm",
        "pos": "n.",
        "ipa": "/ɪnˈθjuː.zi.æz.əm/",
        "vi": "Sự nhiệt huyết",
        "ex": ""
    },
    {
        "num": 57,
        "en": "Professionally",
        "pos": "adv.",
        "ipa": "/prəˈfeʃ.ən.əl.i/",
        "vi": "Một cách chuyên nghiệp, trang trọng",
        "ex": ""
    },
    {
        "num": 58,
        "en": "Helpful",
        "pos": "adj.",
        "ipa": "/ˈhelp.fəl/",
        "vi": "Hữu ích",
        "ex": ""
    },
    {
        "num": 59,
        "en": "Beforehand",
        "pos": "adv.",
        "ipa": "/bɪˈfɔː.hænd/",
        "vi": "Trước đó (chuẩn bị trước)",
        "ex": ""
    },
    {
        "num": 60,
        "en": "Common",
        "pos": "adj.",
        "ipa": "/ˈkɒm.ən/",
        "vi": "Thông dụng, phổ biến",
        "ex": ""
    },
    {
        "num": 61,
        "en": "Popular",
        "pos": "adj.",
        "ipa": "/ˈpɒp.jə.lə/",
        "vi": "Phổ biến, được yêu thích",
        "ex": ""
    },
    {
        "num": 62,
        "en": "Famous",
        "pos": "adj.",
        "ipa": "/ˈfeɪ.məs/",
        "vi": "Nổi tiếng",
        "ex": ""
    },
    {
        "num": 63,
        "en": "Well-known",
        "pos": "adj.",
        "ipa": "/ˌwelˈnəʊn/",
        "vi": "Nổi tiếng, được biết đến rộng rãi",
        "ex": ""
    },
    {
        "num": 64,
        "en": "Ubiquitous",
        "pos": "adj.",
        "ipa": "/juːˈbɪk.wɪ.təs/",
        "vi": "Có mặt ở khắp nơi, rất phổ biến",
        "ex": ""
    },
    {
        "num": 65,
        "en": "During",
        "pos": "prep.",
        "ipa": "/ˈdʒʊə.rɪŋ/",
        "vi": "Trong khi",
        "ex": ""
    },
    {
        "num": 66,
        "en": "Highlight",
        "pos": "v.",
        "ipa": "/ˈhaɪ.laɪt/",
        "vi": "Nhấn mạnh, làm nổi bật",
        "ex": ""
    },
    {
        "num": 67,
        "en": "Role",
        "pos": "n.",
        "ipa": "/rəʊl/",
        "vi": "Vai trò",
        "ex": ""
    },
    {
        "num": 68,
        "en": "Efficient",
        "pos": "Adj",
        "ipa": "/ɪˈfɪʃnt/",
        "vi": "Hiệu quả, năng suất",
        "ex": ""
    },
    {
        "num": 69,
        "en": "Commuters",
        "pos": "N",
        "ipa": "/kəˈmjuːtərz/",
        "vi": "Người đi làm bằng PT công cộng",
        "ex": ""
    },
    {
        "num": 70,
        "en": "Subway",
        "pos": "N",
        "ipa": "/ˈsʌbweɪ/",
        "vi": "Tàu điện ngầm",
        "ex": ""
    },
    {
        "num": 71,
        "en": "Fees",
        "pos": "N",
        "ipa": "/fiːz/",
        "vi": "Phí, lệ phí",
        "ex": ""
    },
    {
        "num": 72,
        "en": "Parking",
        "pos": "N",
        "ipa": "/ˈpɑːrkɪŋ/",
        "vi": "Việc đậu xe, bãi đậu xe",
        "ex": ""
    },
    {
        "num": 73,
        "en": "Heavy traffic",
        "pos": "N phr",
        "ipa": "/ˈhɛvi ˈtræfɪk/",
        "vi": "Giao thông đông đúc, kẹt xe",
        "ex": ""
    },
    {
        "num": 74,
        "en": "Fuel",
        "pos": "N",
        "ipa": "/ˈfjuːəl/",
        "vi": "Nhiên liệu",
        "ex": ""
    },
    {
        "num": 75,
        "en": "Interactive",
        "pos": "Adj",
        "ipa": "/ˌɪntərˈæktɪv/",
        "vi": "Có tính tương tác",
        "ex": ""
    },
    {
        "num": 76,
        "en": "Exhibition",
        "pos": "N",
        "ipa": "/ˌɛksɪˈbɪʃn/",
        "vi": "Cuộc triển lãm",
        "ex": ""
    },
    {
        "num": 77,
        "en": "Entertaining",
        "pos": "Adj",
        "ipa": "/ˌɛntərˈteɪnɪŋ/",
        "vi": "Có tính giải trí",
        "ex": ""
    },
    {
        "num": 78,
        "en": "Informative",
        "pos": "Adj",
        "ipa": "/ɪnˈfɔːrmətɪv/",
        "vi": "Cung cấp nhiều thông tin",
        "ex": ""
    },
    {
        "num": 79,
        "en": "No longer",
        "pos": "Adv phr",
        "ipa": "/noʊ ˈlɔːŋɡər/",
        "vi": "Không còn",
        "ex": ""
    },
    {
        "num": 80,
        "en": "Object",
        "pos": "N",
        "ipa": "/ˈɒbdʒɪkt/",
        "vi": "Vật, vật thể",
        "ex": ""
    },
    {
        "num": 81,
        "en": "Engage",
        "pos": "V",
        "ipa": "/ɪnˈɡeɪdʒ/",
        "vi": "Thu hút, làm cho tham gia",
        "ex": ""
    },
    {
        "num": 82,
        "en": "Touchscreen",
        "pos": "N",
        "ipa": "/ˈtʌtʃskriːn/",
        "vi": "Màn hình cảm ứng",
        "ex": ""
    },
    {
        "num": 83,
        "en": "Feature",
        "pos": "N/V",
        "ipa": "/ˈfiːtʃər/",
        "vi": "Đặc tính, đặc trưng",
        "ex": ""
    },
    {
        "num": 84,
        "en": "Alike",
        "pos": "Adj/Adv",
        "ipa": "/əˈlaɪk/",
        "vi": "Giống nhau, cũng như vậy",
        "ex": ""
    },
    {
        "num": 85,
        "en": "Engage visitor",
        "pos": "V phr",
        "ipa": "/ɪnˈɡeɪdʒ ˈvɪzɪtər/",
        "vi": "Thu hút khách tham quan",
        "ex": ""
    },
    {
        "num": 86,
        "en": "Adult alike",
        "pos": "Phr",
        "ipa": "/əˈdʌlt əˈlaɪk/",
        "vi": "Tương tự đối với người lớn",
        "ex": ""
    },
    {
        "num": 87,
        "en": "Curious",
        "pos": "Adj",
        "ipa": "/ˈkjʊriəs/",
        "vi": "Tò mò",
        "ex": ""
    },
    {
        "num": 88,
        "en": "Explore",
        "pos": "V",
        "ipa": "/ɪkˈsplɔːr/",
        "vi": "Khám phá",
        "ex": ""
    },
    {
        "num": 89,
        "en": "Inspire",
        "pos": "V",
        "ipa": "/ɪnˈspaɪər/",
        "vi": "Truyền cảm hứng",
        "ex": ""
    },
    {
        "num": 90,
        "en": "Astronauts",
        "pos": "N",
        "ipa": "/ˈæstrənɔːts/",
        "vi": "Phi hành gia",
        "ex": ""
    },
    {
        "num": 91,
        "en": "Solutions",
        "pos": "N",
        "ipa": "/səˈluːʃnz/",
        "vi": "Giải pháp",
        "ex": ""
    },
    {
        "num": 92,
        "en": "Discoveries",
        "pos": "N",
        "ipa": "/dɪˈskʌvəriz/",
        "vi": "Sự khám phá, phát hiện",
        "ex": ""
    },
    {
        "num": 93,
        "en": "Space exploration",
        "pos": "N phr",
        "ipa": "/speɪs ˌɛkspləˈreɪʃn/",
        "vi": "Khám phá không gian",
        "ex": ""
    },
    {
        "num": 94,
        "en": "Discover",
        "pos": "V",
        "ipa": "/dɪˈskʌvər/",
        "vi": "Khám phá",
        "ex": ""
    },
    {
        "num": 95,
        "en": "Conduct",
        "pos": "V",
        "ipa": "/kənˈdʌkt/",
        "vi": "Thực hiện, tiến hành",
        "ex": ""
    },
    {
        "num": 96,
        "en": "Be impossible on",
        "pos": "Adj phr",
        "ipa": "/bi ɪmˈpɒsəbl ɒn/",
        "vi": "Không thể (về mặt nào đó)",
        "ex": ""
    },
    {
        "num": 97,
        "en": "Experiments",
        "pos": "N",
        "ipa": "/ɪkˈspɛrɪmənts/",
        "vi": "Thí nghiệm",
        "ex": ""
    },
    {
        "num": 98,
        "en": "Humanity",
        "pos": "N",
        "ipa": "/hjuːˈmænəti/",
        "vi": "Nhân loại, lòng nhân đạo",
        "ex": ""
    },
    {
        "num": 99,
        "en": "Community",
        "pos": "N",
        "ipa": "/kəˈmjuːnəti/",
        "vi": "Cộng đồng",
        "ex": ""
    },
    {
        "num": 100,
        "en": "Give back",
        "pos": "V phr",
        "ipa": "/ɡɪv bæk/",
        "vi": "Đóng góp, cống hiến",
        "ex": ""
    },
    {
        "num": 101,
        "en": "Valuable",
        "pos": "Adj",
        "ipa": "/ˈvæljuəbl/",
        "vi": "Có giá trị",
        "ex": ""
    },
    {
        "num": 102,
        "en": "Shelter",
        "pos": "N",
        "ipa": "/ˈʃɛltər/",
        "vi": "Nơi trú ẩn, nhà tình thương",
        "ex": ""
    },
    {
        "num": 103,
        "en": "Experience",
        "pos": "N/V",
        "ipa": "/ɪkˈspɪəriəns/",
        "vi": "Trải nghiệm, kinh nghiệm",
        "ex": ""
    },
    {
        "num": 104,
        "en": "Contribution",
        "pos": "N",
        "ipa": "/ˌkɒntrɪˈbjuːʃn/",
        "vi": "Sự đóng góp",
        "ex": ""
    },
    {
        "num": 105,
        "en": "Background",
        "pos": "N",
        "ipa": "/ˈbækɡraʊnd/",
        "vi": "Hoàn cảnh xuất thân",
        "ex": ""
    },
    {
        "num": 106,
        "en": "Supportive",
        "pos": "Adj",
        "ipa": "/səˈpɔːrtɪv/",
        "vi": "Có tính hỗ trợ, giúp đỡ",
        "ex": ""
    },
    {
        "num": 107,
        "en": "Even though",
        "pos": "Conj",
        "ipa": "/ˈiːvn ðoʊ/",
        "vi": "Mặc dù",
        "ex": ""
    },
    {
        "num": 108,
        "en": "Get paid",
        "pos": "V phr",
        "ipa": "/ɡɛt peɪd/",
        "vi": "Nhận lương, được trả tiền",
        "ex": ""
    },
    {
        "num": 109,
        "en": "Kinder",
        "pos": "Adj",
        "ipa": "/ˈkaɪndər/",
        "vi": "Tử tế hơn",
        "ex": ""
    },
    {
        "num": 110,
        "en": "Paid",
        "pos": "Adj",
        "ipa": "/peɪd/",
        "vi": "Có trả phí, được trả lương",
        "ex": ""
    },
    {
        "num": 111,
        "en": "Trends",
        "pos": "N",
        "ipa": "/trɛndz/",
        "vi": "Xu hướng",
        "ex": ""
    },
    {
        "num": 112,
        "en": "Refer to",
        "pos": "V phr",
        "ipa": "/rɪˈfɜːr tuː/",
        "vi": "Ám chỉ, nhắc đến",
        "ex": ""
    },
    {
        "num": 113,
        "en": "Latest",
        "pos": "Adj",
        "ipa": "/ˈleɪtɪst/",
        "vi": "Mới nhất, gần đây nhất",
        "ex": ""
    },
    {
        "num": 114,
        "en": "Impact",
        "pos": "N/V",
        "ipa": "/ˈɪmpækt/",
        "vi": "Tác động, ảnh hưởng",
        "ex": ""
    },
    {
        "num": 115,
        "en": "Stylish clothes",
        "pos": "N phr",
        "ipa": "/ˈstaɪlɪʃ kloʊðz/",
        "vi": "Quần áo hợp thời trang",
        "ex": ""
    },
    {
        "num": 116,
        "en": "Landfills",
        "pos": "N",
        "ipa": "/ˈlændfɪlz/",
        "vi": "Bãi rác, hố chôn rác",
        "ex": ""
    },
    {
        "num": 117,
        "en": "Price",
        "pos": "N",
        "ipa": "/praɪs/",
        "vi": "Giá cả",
        "ex": ""
    },
    {
        "num": 118,
        "en": "Low",
        "pos": "Adj",
        "ipa": "/loʊ/",
        "vi": "Thấp",
        "ex": ""
    },
    {
        "num": 119,
        "en": "End up",
        "pos": "V phr",
        "ipa": "/ɛnd ʌp/",
        "vi": "Kết cục là, kết thúc ở",
        "ex": ""
    },
    {
        "num": 120,
        "en": "Production",
        "pos": "N",
        "ipa": "/prəˈdʌkʃn/",
        "vi": "Sự sản xuất",
        "ex": ""
    },
    {
        "num": 121,
        "en": "Process",
        "pos": "N",
        "ipa": "/ˈproʊsɛs/",
        "vi": "Quy trình",
        "ex": ""
    },
    {
        "num": 122,
        "en": "Consumers",
        "pos": "N",
        "ipa": "/kənˈsuːmərz/",
        "vi": "Người tiêu dùng",
        "ex": ""
    },
    {
        "num": 123,
        "en": "Negative",
        "pos": "Adj",
        "ipa": "/ˈnɛɡətɪv/",
        "vi": "Tiêu cực",
        "ex": ""
    },
    {
        "num": 124,
        "en": "Remotely",
        "pos": "adv.",
        "ipa": "/rɪˈməʊt.li/",
        "vi": "Từ xa",
        "ex": ""
    },
    {
        "num": 125,
        "en": "Offer / Provide",
        "pos": "v.",
        "ipa": "/ˈɒf.ə/ /prəˈvaɪd/",
        "vi": "Cung cấp",
        "ex": ""
    },
    {
        "num": 126,
        "en": "Save money",
        "pos": "phr.",
        "ipa": "/seɪv ˈmʌn.i/",
        "vi": "Tiết kiệm tiền",
        "ex": ""
    },
    {
        "num": 127,
        "en": "Co-working spaces",
        "pos": "n.",
        "ipa": "/ˌkəʊˈwɜː.kɪŋ speɪ.sɪz/",
        "vi": "Không gian làm việc chung",
        "ex": ""
    },
    {
        "num": 128,
        "en": "Freedom",
        "pos": "n.",
        "ipa": "/ˈfriː.dəm/",
        "vi": "Sự tự do",
        "ex": ""
    },
    {
        "num": 129,
        "en": "Cost of living",
        "pos": "n. phr.",
        "ipa": "/kɒst əv ˈlɪv.ɪŋ/",
        "vi": "Chi phí sinh hoạt",
        "ex": ""
    },
    {
        "num": 130,
        "en": "A digital nomad",
        "pos": "n.",
        "ipa": "/ə ˌdɪdʒ.ɪ.təl ˈnəʊ.mæd/",
        "vi": "Dân du mục kĩ thuật số",
        "ex": ""
    },
    {
        "num": 131,
        "en": "Fixed office",
        "pos": "n. phr.",
        "ipa": "/fɪkst ˈɒf.ɪs/",
        "vi": "Văn phòng cố định",
        "ex": ""
    },
    {
        "num": 132,
        "en": "Knowledge",
        "pos": "n.",
        "ipa": "/ˈnɒl.ɪdʒ/",
        "vi": "Kiến thức",
        "ex": ""
    },
    {
        "num": 133,
        "en": "Whether",
        "pos": "conj.",
        "ipa": "/ˈweð.ə/",
        "vi": "Cho dù",
        "ex": ""
    },
    {
        "num": 134,
        "en": "Mystery",
        "pos": "adj., n.",
        "ipa": "/ˈmɪs.tər.i/",
        "vi": "Bí ẩn, tiểu thuyết trinh thám/bí ẩn",
        "ex": ""
    },
    {
        "num": 135,
        "en": "Make a habit",
        "pos": "phr.",
        "ipa": "/meɪk ə ˈhæb.ɪt/",
        "vi": "Tạo một thói quen",
        "ex": ""
    },
    {
        "num": 136,
        "en": "Expressions",
        "pos": "n.",
        "ipa": "/ɪkˈspreʃ.ənz/",
        "vi": "Thành ngữ, cách diễn đạt",
        "ex": ""
    },
    {
        "num": 137,
        "en": "Habit",
        "pos": "n.",
        "ipa": "/ˈhæb.ɪt/",
        "vi": "Thói quen",
        "ex": ""
    },
    {
        "num": 138,
        "en": "Improvement",
        "pos": "n.",
        "ipa": "/ɪmˈpruːv.mənt/",
        "vi": "Sự cải thiện",
        "ex": ""
    },
    {
        "num": 139,
        "en": "Imagination",
        "pos": "n.",
        "ipa": "/ɪˌmædʒ.ɪˈneɪ.ʃən/",
        "vi": "Trí tưởng tượng",
        "ex": ""
    },
    {
        "num": 140,
        "en": "Expand",
        "pos": "v.",
        "ipa": "/ɪkˈspænd/",
        "vi": "Mở rộng",
        "ex": ""
    },
    {
        "num": 141,
        "en": "Notice",
        "pos": "v.",
        "ipa": "/ˈnəʊ.tɪs/",
        "vi": "Để ý, nhận ra",
        "ex": ""
    },
    {
        "num": 142,
        "en": "Over time",
        "pos": "phr.",
        "ipa": "/ˌəʊ.və ˈtaɪm/",
        "vi": "Theo thời gian",
        "ex": ""
    },
    {
        "num": 143,
        "en": "Healthier",
        "pos": "adj.",
        "ipa": "/ˈhel.θi.ə/",
        "vi": "Lành mạnh hơn",
        "ex": ""
    },
    {
        "num": 144,
        "en": "Prefer",
        "pos": "v.",
        "ipa": "/prɪˈfɜː/",
        "vi": "Thích hơn",
        "ex": ""
    },
    {
        "num": 145,
        "en": "Prepare",
        "pos": "v.",
        "ipa": "/prɪˈpeə/",
        "vi": "Chuẩn bị",
        "ex": ""
    },
    {
        "num": 146,
        "en": "Generally",
        "pos": "adv.",
        "ipa": "/ˈdʒen.ər.əl.i/",
        "vi": "Nhìn chung",
        "ex": ""
    },
    {
        "num": 147,
        "en": "The amount of",
        "pos": "phr.",
        "ipa": "/ði əˈmaʊnt əv/",
        "vi": "Lượng...",
        "ex": ""
    },
    {
        "num": 148,
        "en": "Ingredients",
        "pos": "n.",
        "ipa": "/ɪnˈɡriː.di.ənts/",
        "vi": "Nguyên liệu",
        "ex": ""
    },
    {
        "num": 149,
        "en": "Even if",
        "pos": "phr.",
        "ipa": "/ˈiː.vən ɪf/",
        "vi": "Thậm chí, ngay cả khi",
        "ex": ""
    },
    {
        "num": 150,
        "en": "Follow",
        "pos": "v.",
        "ipa": "/ˈfɒl.əʊ/",
        "vi": "Theo dõi, làm theo",
        "ex": ""
    },
    {
        "num": 151,
        "en": "Plus",
        "pos": "adv.",
        "ipa": "/plʌs/",
        "vi": "Thêm vào, cộng với",
        "ex": ""
    },
    {
        "num": 152,
        "en": "Experiment",
        "pos": "v., n.",
        "ipa": "/ɪkˈsper.ɪ.mənt/",
        "vi": "Thử nghiệm, cuộc thí nghiệm",
        "ex": ""
    },
    {
        "num": 153,
        "en": "Beginner",
        "pos": "n.",
        "ipa": "/bɪˈɡɪn.ə/",
        "vi": "Người mới bắt đầu",
        "ex": ""
    },
    {
        "num": 154,
        "en": "Flavors",
        "pos": "n.",
        "ipa": "/ˈfleɪ.vəz/",
        "vi": "Hương vị",
        "ex": ""
    },
    {
        "num": 155,
        "en": "Simple recipes",
        "pos": "n. phr.",
        "ipa": "/ˈsɪm.pəl ˈres.ɪ.piz/",
        "vi": "Công thức nấu ăn đơn giản",
        "ex": ""
    },
    {
        "num": 156,
        "en": "Huge",
        "pos": "adj.",
        "ipa": "/hjuːdʒ/",
        "vi": "Lớn, khổng lồ",
        "ex": ""
    },
    {
        "num": 157,
        "en": "Virtual assistants",
        "pos": "n. phr.",
        "ipa": "/ˌvɜː.tʃu.əl əˈsɪs.tənts/",
        "vi": "Trợ lý ảo",
        "ex": ""
    },
    {
        "num": 158,
        "en": "Be concerned about",
        "pos": "phr.",
        "ipa": "/bi kənˈsɜːnd əˈbaʊt/",
        "vi": "Lo lắng về",
        "ex": ""
    },
    {
        "num": 159,
        "en": "Recommendations",
        "pos": "n.",
        "ipa": "/ˌrek.ə.menˈdeɪ.ʃənz/",
        "vi": "Sự đề xuất, gợi ý",
        "ex": ""
    },
    {
        "num": 160,
        "en": "Finance",
        "pos": "n.",
        "ipa": "/ˈfaɪ.næns/",
        "vi": "Tài chính",
        "ex": ""
    },
    {
        "num": 161,
        "en": "Evolve rapidly",
        "pos": "phr.",
        "ipa": "/ɪˈvɒlv ˈræp.ɪd.li/",
        "vi": "Phát triển nhanh chóng",
        "ex": ""
    },
    {
        "num": 162,
        "en": "Cooperation",
        "pos": "n.",
        "ipa": "/kəʊˌɒp.ərˈeɪ.ʃən/",
        "vi": "Sự hợp tác",
        "ex": ""
    },
    {
        "num": 163,
        "en": "Basketball",
        "pos": "n.",
        "ipa": "/ˈbɑː.skɪt.bɔːl/",
        "vi": "Bóng rổ",
        "ex": ""
    },
    {
        "num": 164,
        "en": "Physical health",
        "pos": "n. phr.",
        "ipa": "/ˈfɪz.ɪ.kəl helθ/",
        "vi": "Sức khoẻ thể chất",
        "ex": ""
    },
    {
        "num": 165,
        "en": "Mental health",
        "pos": "n. phr.",
        "ipa": "/ˈmen.təl helθ/",
        "vi": "Sức khoẻ tinh thần",
        "ex": ""
    },
    {
        "num": 166,
        "en": "Be part of",
        "pos": "phr.",
        "ipa": "/bi pɑːt əv/",
        "vi": "Tham gia, là một phần của",
        "ex": ""
    },
    {
        "num": 167,
        "en": "Effectively",
        "pos": "adv.",
        "ipa": "/ɪˈfek.tɪv.li/",
        "vi": "Một cách hiệu quả",
        "ex": ""
    },
    {
        "num": 168,
        "en": "Goal",
        "pos": "n.",
        "ipa": "/ɡəʊl/",
        "vi": "Mục tiêu",
        "ex": ""
    },
    {
        "num": 169,
        "en": "Discipline",
        "pos": "n.",
        "ipa": "/ˈdɪs.ə.plɪn/",
        "vi": "Kỷ luật",
        "ex": ""
    },
    {
        "num": 170,
        "en": "Attitude",
        "pos": "n.",
        "ipa": "/ˈæt.ɪ.tʃuːd/",
        "vi": "Thái độ",
        "ex": ""
    },
    {
        "num": 171,
        "en": "Leadership",
        "pos": "n.",
        "ipa": "/ˈliː.də.ʃɪp/",
        "vi": "Khả năng lãnh đạo",
        "ex": ""
    },
    {
        "num": 172,
        "en": "Achieve",
        "pos": "v.",
        "ipa": "/əˈtʃiːv/",
        "vi": "Đạt được",
        "ex": ""
    },
    {
        "num": 173,
        "en": "Fantastic",
        "pos": "adj.",
        "ipa": "/fænˈtæs.tɪk/",
        "vi": "Tuyệt vời",
        "ex": ""
    },
    {
        "num": 174,
        "en": "Handle",
        "pos": "v.",
        "ipa": "/ˈhæn.dəl/",
        "vi": "Xử lý, giải quyết",
        "ex": ""
    },
    {
        "num": 175,
        "en": "Communities",
        "pos": "n.",
        "ipa": "/kəˈmjuː.nə.tiz/",
        "vi": "Cộng đồng",
        "ex": ""
    },
    {
        "num": 176,
        "en": "Aim",
        "pos": "v.",
        "ipa": "/eɪm/",
        "vi": "Nhằm mục tiêu",
        "ex": ""
    },
    {
        "num": 177,
        "en": "Tourism",
        "pos": "n.",
        "ipa": "/ˈtʊə.rɪ.zəm/",
        "vi": "Ngành du lịch",
        "ex": ""
    },
    {
        "num": 178,
        "en": "Eco-friendly",
        "pos": "adj.",
        "ipa": "/ˌiː.kəʊˈfrend.li/",
        "vi": "Thân thiện với môi trường",
        "ex": ""
    },
    {
        "num": 179,
        "en": "Involve",
        "pos": "v.",
        "ipa": "/ɪnˈvɒlv/",
        "vi": "Bao gồm, liên quan đến",
        "ex": ""
    },
    {
        "num": 180,
        "en": "Rent",
        "pos": "v.",
        "ipa": "/rent/",
        "vi": "Thuê",
        "ex": ""
    },
    {
        "num": 181,
        "en": "Traveler / Tourist",
        "pos": "n.",
        "ipa": "/ˈtræv.əl.ə/ - /ˈtʊə.rɪst/",
        "vi": "Khách du lịch",
        "ex": ""
    },
    {
        "num": 182,
        "en": "Ensure",
        "pos": "v.",
        "ipa": "/ɪnˈʃɔː/",
        "vi": "Đảm bảo",
        "ex": ""
    },
    {
        "num": 183,
        "en": "Remain",
        "pos": "v.",
        "ipa": "/rɪˈmeɪn/",
        "vi": "Vẫn, duy trì",
        "ex": ""
    },
    {
        "num": 184,
        "en": "Local traditions",
        "pos": "n. phr.",
        "ipa": "/ˈləʊ.kəl trəˈdɪʃ.ənz/",
        "vi": "Truyền thống địa phương",
        "ex": ""
    },
    {
        "num": 185,
        "en": "Responsible",
        "pos": "adj.",
        "ipa": "/rɪˈspɒn.sə.bəl/",
        "vi": "Có trách nhiệm",
        "ex": ""
    },
    {
        "num": 186,
        "en": "Accommodation",
        "pos": "n.",
        "ipa": "/əˌkɒm.əˈdeɪ.ʃən/",
        "vi": "Chỗ ở",
        "ex": ""
    },
    {
        "num": 187,
        "en": "Encouraged",
        "pos": "adj., v.",
        "ipa": "/ɪnˈkʌr.ɪdʒd/",
        "vi": "Được động viên, thúc đẩy",
        "ex": ""
    },
    {
        "num": 188,
        "en": "Respect",
        "pos": "v., n.",
        "ipa": "/rɪˈspekt/",
        "vi": "Tôn trọng",
        "ex": ""
    },
    {
        "num": 189,
        "en": "Destinations",
        "pos": "n.",
        "ipa": "/ˌdes.tɪˈneɪ.ʃənz/",
        "vi": "Điểm đến",
        "ex": ""
    },
    {
        "num": 190,
        "en": "In the beginning",
        "pos": "phr.",
        "ipa": "/ɪn ðə bɪˈɡɪn.ɪŋ/",
        "vi": "Thời gian đầu",
        "ex": ""
    },
    {
        "num": 191,
        "en": "Regular",
        "pos": "adj.",
        "ipa": "/ˈreɡ.jə.lə/",
        "vi": "Thường xuyên, đều đặn",
        "ex": ""
    },
    {
        "num": 192,
        "en": "Form",
        "pos": "n.",
        "ipa": "/fɔːm/",
        "vi": "Hình thức",
        "ex": ""
    },
    {
        "num": 193,
        "en": "Self-expression",
        "pos": "n.",
        "ipa": "/ˌself.ɪkˈspreʃ.ən/",
        "vi": "Sự tự biểu đạt, thể hiện bản thân",
        "ex": ""
    },
    {
        "num": 194,
        "en": "Coordination",
        "pos": "n.",
        "ipa": "/kəʊˌɔː.dɪˈneɪ.ʃən/",
        "vi": "Sự phối hợp (tay mắt, vận động)",
        "ex": ""
    },
    {
        "num": 195,
        "en": "Progress",
        "pos": "n.",
        "ipa": "/ˈprəʊ.ɡres/",
        "vi": "Sự tiến triển, tiến bộ",
        "ex": ""
    },
    {
        "num": 196,
        "en": "Beverages",
        "pos": "n.",
        "ipa": "/ˈbev.ər.ɪdʒɪz/",
        "vi": "Đồ uống",
        "ex": ""
    },
    {
        "num": 197,
        "en": "Berries",
        "pos": "n.",
        "ipa": "/ˈber.iz/",
        "vi": "Quả mọng",
        "ex": ""
    },
    {
        "num": 198,
        "en": "Certain",
        "pos": "adj.",
        "ipa": "/ˈsɜː.tən/",
        "vi": "Nhất định",
        "ex": ""
    },
    {
        "num": 199,
        "en": "Energetic",
        "pos": "adj.",
        "ipa": "/ˌen.əˈdʒet.ɪk/",
        "vi": "Tràn đầy năng lượng",
        "ex": ""
    },
    {
        "num": 200,
        "en": "Industry",
        "pos": "n.",
        "ipa": "/ˈɪn.də.stri/",
        "vi": "Ngành công nghiệp",
        "ex": ""
    },
    {
        "num": 201,
        "en": "Agriculture",
        "pos": "n.",
        "ipa": "/ˈæɡ.rɪ.kʌl.tʃə/",
        "vi": "Nông nghiệp",
        "ex": ""
    },
    {
        "num": 202,
        "en": "Trade",
        "pos": "n.",
        "ipa": "/treɪd/",
        "vi": "Thương mại, giao thương",
        "ex": ""
    },
    {
        "num": 203,
        "en": "Global",
        "pos": "adj.",
        "ipa": "/ˈɡləʊ.bəl/",
        "vi": "Toàn cầu",
        "ex": ""
    },
    {
        "num": 204,
        "en": "Brewing",
        "pos": "n., v.",
        "ipa": "/ˈbruː.ɪŋ/",
        "vi": "Pha (trà, cà phê...)",
        "ex": ""
    },
    {
        "num": 205,
        "en": "Legend",
        "pos": "n.",
        "ipa": "/ˈledʒ.ənd/",
        "vi": "Huyền thoại, truyền thuyết",
        "ex": ""
    },
    {
        "num": 206,
        "en": "Goat herder",
        "pos": "n. phr.",
        "ipa": "/ɡəʊt ˈhɜː.də/",
        "vi": "Người chăn dê",
        "ex": ""
    },
    {
        "num": 207,
        "en": "Unique",
        "pos": "adj.",
        "ipa": "/juːˈniːk/",
        "vi": "Độc nhất",
        "ex": ""
    },
    {
        "num": 208,
        "en": "Cybersecurity",
        "pos": "n.",
        "ipa": "/ˌsaɪ.bə.sɪˈkjʊə.rə.ti/",
        "vi": "An ninh mạng",
        "ex": ""
    },
    {
        "num": 209,
        "en": "Guess",
        "pos": "v.",
        "ipa": "/ɡes/",
        "vi": "Đoán ra",
        "ex": ""
    },
    {
        "num": 210,
        "en": "Careful",
        "pos": "adj.",
        "ipa": "/ˈkeə.fəl/",
        "vi": "Cẩn thận",
        "ex": ""
    },
    {
        "num": 211,
        "en": "Ask for",
        "pos": "phr. v.",
        "ipa": "/ɑːsk fɔː/",
        "vi": "Yêu cầu, xin",
        "ex": ""
    },
    {
        "num": 212,
        "en": "Device / Equipment",
        "pos": "n.",
        "ipa": "/dɪˈvaɪs/ - /ɪˈkwɪp.mənt/",
        "vi": "Thiết bị",
        "ex": ""
    },
    {
        "num": 213,
        "en": "Passwords",
        "pos": "n.",
        "ipa": "/ˈpɑːs.wɜːdz/",
        "vi": "Mật khẩu",
        "ex": ""
    },
    {
        "num": 214,
        "en": "Be aware of",
        "pos": "phr.",
        "ipa": "/bi əˈweər əv/",
        "vi": "Nhận thức về",
        "ex": ""
    },
    {
        "num": 215,
        "en": "Phishing",
        "pos": "n.",
        "ipa": "/ˈfɪʃ.ɪŋ/",
        "vi": "Tấn công giả mạo (lừa đảo trực tuyến)",
        "ex": ""
    },
    {
        "num": 216,
        "en": "Updated",
        "pos": "adj.",
        "ipa": "/ʌpˈdeɪ.tɪd/",
        "vi": "Được cập nhật",
        "ex": ""
    },
    {
        "num": 217,
        "en": "Suspicious emails",
        "pos": "n. phr.",
        "ipa": "/səˈspɪʃ.əs ˈiː.meɪlz/",
        "vi": "Email đáng ngờ",
        "ex": ""
    },
    {
        "num": 218,
        "en": "Software",
        "pos": "n.",
        "ipa": "/ˈsɒft.weə/",
        "vi": "Phần mềm",
        "ex": ""
    },
    {
        "num": 219,
        "en": "Practice",
        "pos": "n.",
        "ipa": "/ˈpræk.tɪs/",
        "vi": "Thực hành, thói quen",
        "ex": ""
    },
    {
        "num": 220,
        "en": "Grow",
        "pos": "v.",
        "ipa": "/ɡrəʊ/",
        "vi": "Trồng, phát triển",
        "ex": ""
    },
    {
        "num": 221,
        "en": "Produce",
        "pos": "n., v.",
        "ipa": "/ˈprɒdʒ.uːs/ - /prəˈdʒuːs/",
        "vi": "Nông sản (n) / Sản xuất (v)",
        "ex": ""
    },
    {
        "num": 222,
        "en": "Sufficient",
        "pos": "adj.",
        "ipa": "/səˈfɪʃ.ənt/",
        "vi": "Đủ",
        "ex": ""
    },
    {
        "num": 223,
        "en": "Greener",
        "pos": "adj.",
        "ipa": "/ˈɡriː.nə/",
        "vi": "Xanh hơn",
        "ex": ""
    },
    {
        "num": 224,
        "en": "Self-sufficient",
        "pos": "adj.",
        "ipa": "/ˌself.səˈfɪʃ.ənt/",
        "vi": "Tự cung tự cấp",
        "ex": ""
    },
    {
        "num": 225,
        "en": "Urban",
        "pos": "adj.",
        "ipa": "/ˈɜː.bən/",
        "vi": "(Thuộc về) Đô thị",
        "ex": ""
    },
    {
        "num": 226,
        "en": "Rooftops",
        "pos": "n.",
        "ipa": "/ˈruːf.tɒps/",
        "vi": "Sân thượng, mái nhà",
        "ex": ""
    },
    {
        "num": 227,
        "en": "Distance",
        "pos": "n.",
        "ipa": "/ˈdɪs.təns/",
        "vi": "Khoảng cách",
        "ex": ""
    },
    {
        "num": 228,
        "en": "Travel",
        "pos": "v.",
        "ipa": "/ˈtræv.əl/",
        "vi": "Đi lại, di chuyển, vận chuyển",
        "ex": ""
    },
    {
        "num": 229,
        "en": "Logical",
        "pos": "adj.",
        "ipa": "/ˈlɒdʒ.ɪ.kəl/",
        "vi": "Hợp lý, có logic",
        "ex": ""
    },
    {
        "num": 230,
        "en": "Critical thinking",
        "pos": "n. phr.",
        "ipa": "/ˌkrɪt.ɪ.kəl ˈθɪŋ.kɪŋ/",
        "vi": "Tư duy phản biện",
        "ex": ""
    },
    {
        "num": 231,
        "en": "Evidence",
        "pos": "n.",
        "ipa": "/ˈev.ɪ.dəns/",
        "vi": "Bằng chứng",
        "ex": ""
    },
    {
        "num": 232,
        "en": "Ability",
        "pos": "n.",
        "ipa": "/əˈbɪl.ə.ti/",
        "vi": "Khả năng",
        "ex": ""
    },
    {
        "num": 233,
        "en": "Capable",
        "pos": "adj.",
        "ipa": "/ˈkeɪ.pə.bəl/",
        "vi": "Có khả năng",
        "ex": ""
    },
    {
        "num": 234,
        "en": "Perspective",
        "pos": "n.",
        "ipa": "/pəˈspek.tɪv/",
        "vi": "Góc nhìn, quan điểm",
        "ex": ""
    },
    {
        "num": 235,
        "en": "Make decisions",
        "pos": "phr.",
        "ipa": "/meɪk dɪˈsɪʒ.ənz/",
        "vi": "Đưa ra quyết định",
        "ex": ""
    },
    {
        "num": 236,
        "en": "Mislead",
        "pos": "v.",
        "ipa": "/ˌmɪsˈliːd/",
        "vi": "Dẫn dắt sai lệch, lừa dối",
        "ex": ""
    },
    {
        "num": 237,
        "en": "In the age of",
        "pos": "phr.",
        "ipa": "/ɪn ði eɪdʒ əv/",
        "vi": "Trong kỷ nguyên, trong thời đại",
        "ex": ""
    },
    {
        "num": 238,
        "en": "Than ever",
        "pos": "phr.",
        "ipa": "/ðæn ˈev.ə/",
        "vi": "Hơn bao giờ hết",
        "ex": ""
    },
    {
        "num": 239,
        "en": "Look for",
        "pos": "phr. v.",
        "ipa": "/lʊk fɔː/",
        "vi": "Tìm kiếm",
        "ex": ""
    },
    {
        "num": 240,
        "en": "Look at",
        "pos": "phr. v.",
        "ipa": "/lʊk ət/",
        "vi": "Nhìn vào",
        "ex": ""
    },
    {
        "num": 241,
        "en": "Analyze",
        "pos": "v.",
        "ipa": "/ˈæn.əl.aɪz/",
        "vi": "Phân tích",
        "ex": ""
    },
    {
        "num": 242,
        "en": "fasle",
        "pos": "adj.",
        "ipa": "/fɒls/",
        "vi": "Sai, giả mạo",
        "ex": ""
    },
    {
        "num": 243,
        "en": "Critical",
        "pos": "adj.",
        "ipa": "/ˈkrɪt.ɪ.kəl/",
        "vi": "Có tính phê bình, phản biện / Quan trọng",
        "ex": ""
    },
    {
        "num": 244,
        "en": "Disappear",
        "pos": "v.",
        "ipa": "/ˌdɪs.əˈpɪə/",
        "vi": "Biến mất",
        "ex": ""
    },
    {
        "num": 245,
        "en": "Be in danger",
        "pos": "phr.",
        "ipa": "/bi ɪn ˈdeɪn.dʒə/",
        "vi": "Đang trong tình trạng nguy hiểm",
        "ex": ""
    },
    {
        "num": 246,
        "en": "Pass down",
        "pos": "phr. v.",
        "ipa": "/pɑːs daʊn/",
        "vi": "Truyền lại (cho đời sau)",
        "ex": ""
    },
    {
        "num": 247,
        "en": "Item",
        "pos": "n.",
        "ipa": "/ˈaɪ.təm/",
        "vi": "Mặt hàng, đồ vật",
        "ex": ""
    },
    {
        "num": 248,
        "en": "Quality",
        "pos": "n.",
        "ipa": "/ˈkwɒl.ə.ti/",
        "vi": "Chất lượng",
        "ex": ""
    },
    {
        "num": 249,
        "en": "Quantity",
        "pos": "n.",
        "ipa": "/ˈkwɒn.tə.ti/",
        "vi": "Số lượng",
        "ex": ""
    },
    {
        "num": 250,
        "en": "Heritage",
        "pos": "n.",
        "ipa": "/ˈher.ɪ.tɪdʒ/",
        "vi": "Di sản",
        "ex": ""
    },
    {
        "num": 251,
        "en": "Artisan",
        "pos": "n.",
        "ipa": "/ˌɑː.tɪˈzæn/",
        "vi": "Nghệ nhân",
        "ex": ""
    },
    {
        "num": 252,
        "en": "Pottery",
        "pos": "n.",
        "ipa": "/ˈpɒt.ər.i/",
        "vi": "Đồ gốm",
        "ex": ""
    },
    {
        "num": 253,
        "en": "Weaving",
        "pos": "n.",
        "ipa": "/ˈwiː.vɪŋ/",
        "vi": "Sự dệt vải",
        "ex": ""
    },
    {
        "num": 254,
        "en": "Represent",
        "pos": "v.",
        "ipa": "/ˌrep.rɪˈzent/",
        "vi": "Đại diện",
        "ex": ""
    },
    {
        "num": 255,
        "en": "Mass-produced",
        "pos": "adj.",
        "ipa": "/ˌmæs.prəˈdʒuːst/",
        "vi": "Được sản xuất hàng loạt",
        "ex": ""
    },
    {
        "num": 256,
        "en": "Crafts",
        "pos": "n.",
        "ipa": "/krɑːfts/",
        "vi": "Đồ thủ công",
        "ex": ""
    },
    {
        "num": 257,
        "en": "Crisis",
        "pos": "n.",
        "ipa": "/ˈkraɪ.sɪs/",
        "vi": "Cuộc khủng hoảng",
        "ex": ""
    },
    {
        "num": 258,
        "en": "Emissions",
        "pos": "n.",
        "ipa": "/ɪˈmɪʃ.ənz/",
        "vi": "Khí thải",
        "ex": ""
    },
    {
        "num": 259,
        "en": "Initially",
        "pos": "adv.",
        "ipa": "/ɪˈnɪʃ.əl.i/",
        "vi": "Ban đầu",
        "ex": ""
    },
    {
        "num": 260,
        "en": "Switch to",
        "pos": "phr. v.",
        "ipa": "/swɪtʃ tuː/",
        "vi": "Chuyển đổi sang",
        "ex": ""
    },
    {
        "num": 261,
        "en": "Renewable sources",
        "pos": "n. phr.",
        "ipa": "/rɪˈnjuː.ə.bəl ˈsɔː.sɪz/",
        "vi": "Nguồn năng lượng tái tạo",
        "ex": ""
    },
    {
        "num": 262,
        "en": "Install",
        "pos": "v.",
        "ipa": "/ɪnˈstɔːl/",
        "vi": "Cài đặt, lắp đặt",
        "ex": ""
    },
    {
        "num": 263,
        "en": "Fossil",
        "pos": "n.",
        "ipa": "/ˈfɒs.əl/",
        "vi": "Hóa thạch",
        "ex": ""
    },
    {
        "num": 264,
        "en": "Harmful",
        "pos": "adj.",
        "ipa": "/ˈhɑːm.fəl/",
        "vi": "Có hại",
        "ex": ""
    },
    {
        "num": 265,
        "en": "Solar panel",
        "pos": "n. phr.",
        "ipa": "/ˌsəʊ.lə ˈpæn.əl/",
        "vi": "Tấm pin năng lượng mặt trời",
        "ex": ""
    },
    {
        "num": 266,
        "en": "Transition to",
        "pos": "phr. v.",
        "ipa": "/trænˈzɪʃ.ən tuː/",
        "vi": "Chuyển đổi, chuyển tiếp sang",
        "ex": ""
    },
    {
        "num": 267,
        "en": "In the long run",
        "pos": "idiom",
        "ipa": "/ɪn ðə lɒŋ rʌn/",
        "vi": "Về lâu dài",
        "ex": ""
    },
    {
        "num": 268,
        "en": "Toward",
        "pos": "prep.",
        "ipa": "/təˈwɔːd/",
        "vi": "Theo hướng, hướng tới",
        "ex": ""
    },
    {
        "num": 269,
        "en": "Companionship",
        "pos": "n.",
        "ipa": "/kəmˈpæn.jən.ʃɪp/",
        "vi": "Sự bầu bạn, tình bạn",
        "ex": ""
    },
    {
        "num": 270,
        "en": "Responsibility",
        "pos": "n.",
        "ipa": "/rɪˌspɒn.sɪˈbɪl.ə.ti/",
        "vi": "Trách nhiệm",
        "ex": ""
    },
    {
        "num": 271,
        "en": "Fresh air",
        "pos": "n. phr.",
        "ipa": "/freʃ eə/",
        "vi": "Không khí trong lành",
        "ex": ""
    },
    {
        "num": 272,
        "en": "Mental",
        "pos": "adj.",
        "ipa": "/ˈmen.təl/",
        "vi": "(Thuộc về) tinh thần",
        "ex": ""
    },
    {
        "num": 273,
        "en": "Own",
        "pos": "v.",
        "ipa": "/əʊn/",
        "vi": "Sở hữu",
        "ex": ""
    },
    {
        "num": 274,
        "en": "Loneliness",
        "pos": "n.",
        "ipa": "/ˈləʊn.li.nəs/",
        "vi": "Sự cô đơn",
        "ex": ""
    },
    {
        "num": 275,
        "en": "Groom",
        "pos": "v.",
        "ipa": "/ɡruːm/",
        "vi": "Tắm rửa, chải chuốt (cho thú cưng)",
        "ex": ""
    },
    {
        "num": 276,
        "en": "Take care of",
        "pos": "phr. v.",
        "ipa": "/teɪk keər əv/",
        "vi": "Chăm sóc",
        "ex": ""
    },
    {
        "num": 277,
        "en": "Stay active",
        "pos": "phr.",
        "ipa": "/steɪ ˈæk.tɪv/",
        "vi": "Duy trì sự năng động",
        "ex": ""
    },
    {
        "num": 278,
        "en": "Delay",
        "pos": "v.",
        "ipa": "/dɪˈleɪ/",
        "vi": "Trì hoãn",
        "ex": ""
    },
    {
        "num": 279,
        "en": "Task",
        "pos": "n.",
        "ipa": "/tɑːsk/",
        "vi": "Nhiệm vụ",
        "ex": ""
    },
    {
        "num": 280,
        "en": "Until",
        "pos": "conj., prep.",
        "ipa": "/ʌnˈtɪl/",
        "vi": "Cho đến khi",
        "ex": ""
    },
    {
        "num": 281,
        "en": "The last minute",
        "pos": "n. phr.",
        "ipa": "/ðə lɑːst ˈmɪn.ɪt/",
        "vi": "Phút cuối cùng",
        "ex": ""
    },
    {
        "num": 282,
        "en": "Set",
        "pos": "v.",
        "ipa": "/set/",
        "vi": "Thiết lập, đặt ra",
        "ex": ""
    },
    {
        "num": 283,
        "en": "Manageable",
        "pos": "adj.",
        "ipa": "/ˈmæn.ɪ.dʒə.bəl/",
        "vi": "Có thể quản lý/xử lý được",
        "ex": ""
    },
    {
        "num": 284,
        "en": "Clear deadlines",
        "pos": "n. phr.",
        "ipa": "/klɪə ˈded.laɪnz/",
        "vi": "Hạn chót rõ ràng",
        "ex": ""
    },
    {
        "num": 285,
        "en": "Once",
        "pos": "conj.",
        "ipa": "/wʌns/",
        "vi": "Khi, một khi",
        "ex": ""
    },
    {
        "num": 286,
        "en": "Maintain",
        "pos": "v.",
        "ipa": "/meɪnˈteɪn/",
        "vi": "Duy trì",
        "ex": ""
    },
    {
        "num": 287,
        "en": "Deadline",
        "pos": "n.",
        "ipa": "/ˈded.laɪn/",
        "vi": "Hạn chót",
        "ex": ""
    },
    {
        "num": 288,
        "en": "Focus",
        "pos": "n., v.",
        "ipa": "/ˈfəʊ.kəs/",
        "vi": "Sự tập trung / Tập trung",
        "ex": ""
    },
    {
        "num": 289,
        "en": "Procrastination",
        "pos": "n.",
        "ipa": "/prəˌkræs.tɪˈneɪ.ʃən/",
        "vi": "Sự trì hoãn",
        "ex": ""
    },
    {
        "num": 290,
        "en": "Overcome",
        "pos": "v.",
        "ipa": "/ˌəʊ.vəˈkʌm/",
        "vi": "Vượt qua",
        "ex": ""
    },
    {
        "num": 291,
        "en": "Distraction",
        "pos": "n.",
        "ipa": "/dɪˈstræk.ʃən/",
        "vi": "Sự xao nhãng, phiền nhiễu",
        "ex": ""
    },
    {
        "num": 292,
        "en": "Remove",
        "pos": "v.",
        "ipa": "/rɪˈmuːv/",
        "vi": "Loại bỏ",
        "ex": ""
    },
    {
        "num": 293,
        "en": "Break",
        "pos": "v.",
        "ipa": "/breɪk/",
        "vi": "Chia nhỏ, phá vỡ",
        "ex": ""
    },
    {
        "num": 294,
        "en": "Wildlife",
        "pos": "n.",
        "ipa": "/ˈwaɪld.laɪf/",
        "vi": "Động vật hoang dã",
        "ex": ""
    },
    {
        "num": 295,
        "en": "Various",
        "pos": "adj.",
        "ipa": "/ˈveə.ri.əs/",
        "vi": "Nhiều, đa dạng",
        "ex": ""
    },
    {
        "num": 296,
        "en": "Crucial",
        "pos": "adj.",
        "ipa": "/ˈkruː.ʃəl/",
        "vi": "Quan trọng, chủ yếu",
        "ex": ""
    },
    {
        "num": 297,
        "en": "Endangered",
        "pos": "adj.",
        "ipa": "/ɪnˈdeɪn.dʒəd/",
        "vi": "Đang gặp nguy hiểm, có nguy cơ tuyệt chủng",
        "ex": ""
    },
    {
        "num": 298,
        "en": "Follow the rules",
        "pos": "phr.",
        "ipa": "/ˈfɒl.əʊ ðə ruːlz/",
        "vi": "Tuân theo quy tắc",
        "ex": ""
    },
    {
        "num": 299,
        "en": "Leave behind",
        "pos": "phr. v.",
        "ipa": "/liːv bɪˈhaɪnd/",
        "vi": "Để lại, bỏ lại phía sau",
        "ex": ""
    },
    {
        "num": 300,
        "en": "Litter",
        "pos": "n.",
        "ipa": "/ˈlɪt.ə/",
        "vi": "Rác thải",
        "ex": ""
    },
    {
        "num": 301,
        "en": "Hiking",
        "pos": "n.",
        "ipa": "/ˈhaɪ.kɪŋ/",
        "vi": "Đi bộ đường dài",
        "ex": ""
    },
    {
        "num": 302,
        "en": "Conservation",
        "pos": "n.",
        "ipa": "/ˌkɒn.səˈveɪ.ʃən/",
        "vi": "Sự bảo tồn",
        "ex": ""
    },
    {
        "num": 303,
        "en": "Species",
        "pos": "n.",
        "ipa": "/ˈspiː.ʃiːz/",
        "vi": "Giống loài",
        "ex": ""
    },
    {
        "num": 304,
        "en": "Provide",
        "pos": "v.",
        "ipa": "/prəˈvaɪd/",
        "vi": "Cung cấp",
        "ex": ""
    },
    {
        "num": 305,
        "en": "Portable",
        "pos": "adj.",
        "ipa": "/ˈpɔː.tə.bəl/",
        "vi": "Có thể mang theo, di động",
        "ex": ""
    },
    {
        "num": 306,
        "en": "Convenience",
        "pos": "n.",
        "ipa": "/kənˈviː.ni.əns/",
        "vi": "Sự tiện lợi",
        "ex": ""
    },
    {
        "num": 307,
        "en": "Instantly",
        "pos": "adv.",
        "ipa": "/ˈɪn.stənt.li/",
        "vi": "Ngay lập tức",
        "ex": ""
    },
    {
        "num": 308,
        "en": "Carry",
        "pos": "v.",
        "ipa": "/ˈkær.i/",
        "vi": "Mang, vác",
        "ex": ""
    },
    {
        "num": 309,
        "en": "Device",
        "pos": "n.",
        "ipa": "/dɪˈvaɪs/",
        "vi": "Thiết bị",
        "ex": ""
    },
    {
        "num": 310,
        "en": "Appreciate",
        "pos": "v.",
        "ipa": "/əˈpriː.ʃi.eɪt/",
        "vi": "Đánh giá cao, trân trọng",
        "ex": ""
    },
    {
        "num": 311,
        "en": "Buy",
        "pos": "v.",
        "ipa": "/baɪ/",
        "vi": "Mua",
        "ex": ""
    },
    {
        "num": 312,
        "en": "Printed version",
        "pos": "n. phr.",
        "ipa": "/ˈprɪn.tɪd ˈvɜː.ʃən/",
        "vi": "Bản in",
        "ex": ""
    },
    {
        "num": 313,
        "en": "The feel of",
        "pos": "phr.",
        "ipa": "/ðə fiːl əv/",
        "vi": "Cảm giác của",
        "ex": ""
    },
    {
        "num": 314,
        "en": "Empathy",
        "pos": "n.",
        "ipa": "/ˈem.pə.θi/",
        "vi": "Sự thấu cảm",
        "ex": ""
    },
    {
        "num": 315,
        "en": "Colleague",
        "pos": "n.",
        "ipa": "/ˈkɒl.iːɡ/",
        "vi": "Đồng nghiệp",
        "ex": ""
    },
    {
        "num": 316,
        "en": "Be good at",
        "pos": "phr.",
        "ipa": "/bi ɡʊd ət/",
        "vi": "Giỏi về",
        "ex": ""
    },
    {
        "num": 317,
        "en": "Harmoniously",
        "pos": "adv.",
        "ipa": "/hɑːˈməʊ.ni.əs.li/",
        "vi": "Một cách hòa hợp, hài hòa",
        "ex": ""
    },
    {
        "num": 318,
        "en": "Positive",
        "pos": "adj.",
        "ipa": "/ˈpɒz.ə.tɪv/",
        "vi": "Tích cực",
        "ex": ""
    },
    {
        "num": 319,
        "en": "Emotional intelligence",
        "pos": "n. phr.",
        "ipa": "/ɪˈməʊ.ʃən.əl ɪnˈtel.ɪ.dʒəns/",
        "vi": "Trí tuệ cảm xúc (EQ)",
        "ex": ""
    },
    {
        "num": 320,
        "en": "As well as",
        "pos": "conj.",
        "ipa": "/əz wel əz/",
        "vi": "Cũng như, bên cạnh đó",
        "ex": ""
    },
    {
        "num": 321,
        "en": "Outlook",
        "pos": "n.",
        "ipa": "/ˈaʊt.lʊk/",
        "vi": "Triển vọng, góc nhìn",
        "ex": ""
    },
    {
        "num": 322,
        "en": "Ethical",
        "pos": "adj.",
        "ipa": "/ˈeθ.ɪ.kəl/",
        "vi": "Có đạo đức, đúng mực",
        "ex": ""
    },
    {
        "num": 323,
        "en": "Mean",
        "pos": "v.",
        "ipa": "/miːn/",
        "vi": "Có nghĩa là",
        "ex": ""
    },
    {
        "num": 324,
        "en": "Last",
        "pos": "v.",
        "ipa": "/lɑːst/",
        "vi": "Kéo dài (thời gian)",
        "ex": ""
    },
    {
        "num": 325,
        "en": "Organic",
        "pos": "adj.",
        "ipa": "/ɔːˈɡæn.ɪk/",
        "vi": "Hữu cơ",
        "ex": ""
    },
    {
        "num": 326,
        "en": "Durable",
        "pos": "adj.",
        "ipa": "/ˈdʒʊə.rə.bəl/",
        "vi": "Bền bỉ",
        "ex": ""
    },
    {
        "num": 327,
        "en": "Resources",
        "pos": "n.",
        "ipa": "/rɪˈzɔː.sɪz/",
        "vi": "Nguồn tài nguyên",
        "ex": ""
    },
    {
        "num": 328,
        "en": "Fair wages",
        "pos": "n. phr.",
        "ipa": "/feə ˈweɪ.dʒɪz/",
        "vi": "Tiền lương công bằng",
        "ex": ""
    },
    {
        "num": 329,
        "en": "Encourage",
        "pos": "v.",
        "ipa": "/ɪnˈkʌr.ɪdʒ/",
        "vi": "Động viên, khuyến khích",
        "ex": ""
    },
    {
        "num": 330,
        "en": "Invest",
        "pos": "v.",
        "ipa": "/ɪnˈvest/",
        "vi": "Đầu tư",
        "ex": ""
    },
    {
        "num": 331,
        "en": "Flexibility",
        "pos": "n.",
        "ipa": "/ˌflek.səˈbɪl.ə.ti/",
        "vi": "Sự linh hoạt",
        "ex": ""
    },
    {
        "num": 332,
        "en": "Professional",
        "pos": "adj.",
        "ipa": "/prəˈfeʃ.ən.əl/",
        "vi": "(Thuộc về) nghề nghiệp, chuyên nghiệp",
        "ex": ""
    },
    {
        "num": 333,
        "en": "Isolation",
        "pos": "n.",
        "ipa": "/ˌaɪ.səˈleɪ.ʃən/",
        "vi": "Sự cô lập",
        "ex": ""
    },
    {
        "num": 334,
        "en": "Communication tools",
        "pos": "n. phr.",
        "ipa": "/kəˌmjuː.nɪˈkeɪ.ʃən tuːlz/",
        "vi": "Công cụ giao tiếp",
        "ex": ""
    },
    {
        "num": 335,
        "en": "Routine",
        "pos": "n.",
        "ipa": "/ruːˈtiːn/",
        "vi": "Thói quen hàng ngày, lịch trình",
        "ex": ""
    },
    {
        "num": 336,
        "en": "Permanent",
        "pos": "adj.",
        "ipa": "/ˈpɜː.mə.nənt/",
        "vi": "Vĩnh viễn, lâu dài",
        "ex": ""
    },
    {
        "num": 337,
        "en": "Remote",
        "pos": "adj.",
        "ipa": "/rɪˈməʊt/",
        "vi": "Từ xa",
        "ex": ""
    },
    {
        "num": 338,
        "en": "Dedicated workspace",
        "pos": "n. phr.",
        "ipa": "/ˈded.ɪ.keɪ.tɪd ˈwɜːk.speɪs/",
        "vi": "Không gian làm việc riêng biệt, chuyên dụng",
        "ex": ""
    },
    {
        "num": 339,
        "en": "Distinguish",
        "pos": "v.",
        "ipa": "/dɪˈstɪŋ.ɡwɪʃ/",
        "vi": "Phân biệt",
        "ex": ""
    },
    {
        "num": 340,
        "en": "Set a clear routine",
        "pos": "phr.",
        "ipa": "/set ə klɪə ruːˈtiːn/",
        "vi": "Thiết lập một lịch trình rõ ràng",
        "ex": ""
    },
    {
        "num": 341,
        "en": "Accessible",
        "pos": "adj.",
        "ipa": "/əkˈses.ə.bəl/",
        "vi": "Có thể tiếp cận, truy cập",
        "ex": ""
    },
    {
        "num": 342,
        "en": "By",
        "pos": "prep.",
        "ipa": "/baɪ/",
        "vi": "Bằng cách, vào lúc (thời gian)",
        "ex": ""
    },
    {
        "num": 343,
        "en": "Entertainment",
        "pos": "n.",
        "ipa": "/ˌen.təˈteɪn.mənt/",
        "vi": "Sự giải trí",
        "ex": ""
    },
    {
        "num": 344,
        "en": "Public",
        "pos": "n.",
        "ipa": "/ˈpʌb.lɪk/",
        "vi": "Công chúng",
        "ex": ""
    },
    {
        "num": 345,
        "en": "Globally",
        "pos": "adv.",
        "ipa": "/ˈɡləʊ.bəl.i/",
        "vi": "Toàn cầu",
        "ex": ""
    },
    {
        "num": 346,
        "en": "Cautious",
        "pos": "adj.",
        "ipa": "/ˈkɔː.ʃəs/",
        "vi": "Thận trọng",
        "ex": ""
    },
    {
        "num": 347,
        "en": "Revolutionize",
        "pos": "v.",
        "ipa": "/ˌrev.əˈluː.ʃən.aɪz/",
        "vi": "Cách mạng hóa",
        "ex": ""
    },
    {
        "num": 348,
        "en": "Revolutionary",
        "pos": "adj.",
        "ipa": "/ˌrev.əˈluː.ʃən.ər.i/",
        "vi": "Mang tính cách mạng",
        "ex": ""
    },
    {
        "num": 349,
        "en": "World Wide Web",
        "pos": "n. phr.",
        "ipa": "/ˌwɜːld ˌwaɪd ˈweb/",
        "vi": "Mạng lưới toàn cầu",
        "ex": ""
    },
    {
        "num": 350,
        "en": "Forever",
        "pos": "adv.",
        "ipa": "/fəˈrev.ə/",
        "vi": "Mãi mãi",
        "ex": ""
    },
    {
        "num": 351,
        "en": "Researcher",
        "pos": "n.",
        "ipa": "/rɪˈsɜː.tʃə/",
        "vi": "Nhà nghiên cứu",
        "ex": ""
    },
    {
        "num": 352,
        "en": "Accuracy",
        "pos": "n.",
        "ipa": "/ˈæk.jə.rə.si/",
        "vi": "Sự chính xác",
        "ex": ""
    },
    {
        "num": 353,
        "en": "Relaxed",
        "pos": "adj.",
        "ipa": "/rɪˈlækst/",
        "vi": "Thư giãn",
        "ex": ""
    },
    {
        "num": 354,
        "en": "Immune system",
        "pos": "n. phr.",
        "ipa": "/ɪˈmjuːn ˌsɪs.təm/",
        "vi": "Hệ miễn dịch",
        "ex": ""
    },
    {
        "num": 355,
        "en": "Optimistic",
        "pos": "adj.",
        "ipa": "/ˌɒp.tɪˈmɪs.tɪk/",
        "vi": "Lạc quan",
        "ex": ""
    },
    {
        "num": 356,
        "en": "Social bond",
        "pos": "n. phr.",
        "ipa": "/ˈsəʊ.ʃəl bɒnd/",
        "vi": "Mối liên kết xã hội",
        "ex": ""
    },
    {
        "num": 357,
        "en": "Laughter",
        "pos": "n.",
        "ipa": "/ˈlɑːf.tə/",
        "vi": "Tiếng cười",
        "ex": ""
    },
    {
        "num": 358,
        "en": "Tend to",
        "pos": "phr. v.",
        "ipa": "/tend tuː/",
        "vi": "Có xu hướng, khuynh hướng",
        "ex": ""
    },
    {
        "num": 359,
        "en": "Release",
        "pos": "v.",
        "ipa": "/rɪˈliːs/",
        "vi": "Giải phóng, thải ra",
        "ex": ""
    },
    {
        "num": 360,
        "en": "Emit",
        "pos": "v.",
        "ipa": "/ɪˈmɪt/",
        "vi": "Phát ra, tỏa ra",
        "ex": ""
    },
    {
        "num": 361,
        "en": "Launch",
        "pos": "v.",
        "ipa": "/lɔːntʃ/",
        "vi": "Ra mắt, phóng",
        "ex": ""
    },
    {
        "num": 362,
        "en": "Strengthen",
        "pos": "v.",
        "ipa": "/ˈstreŋ.θən/",
        "vi": "Củng cố, làm mạnh thêm",
        "ex": ""
    },
    {
        "num": 363,
        "en": "Bond",
        "pos": "n.",
        "ipa": "/bɒnd/",
        "vi": "Sự liên kết",
        "ex": ""
    },
    {
        "num": 364,
        "en": "Even",
        "pos": "adv.",
        "ipa": "/ˈiː.vən/",
        "vi": "Thậm chí, ngay cả",
        "ex": ""
    },
    {
        "num": 365,
        "en": "Trend",
        "pos": "n.",
        "ipa": "/trend/",
        "vi": "Xu hướng",
        "ex": ""
    },
    {
        "num": 366,
        "en": "Affordable",
        "pos": "adj.",
        "ipa": "/əˈfɔː.də.bəl/",
        "vi": "Giá cả phải chăng",
        "ex": ""
    },
    {
        "num": 367,
        "en": "Considerate",
        "pos": "adj.",
        "ipa": "/kənˈsɪd.ər.ət/",
        "vi": "Biết quan tâm, chu đáo",
        "ex": ""
    },
    {
        "num": 368,
        "en": "Facilities",
        "pos": "n.",
        "ipa": "/fəˈsɪl.ə.tiz/",
        "vi": "Cơ sở vật chất, tiện nghi",
        "ex": ""
    },
    {
        "num": 369,
        "en": "Among",
        "pos": "prep.",
        "ipa": "/əˈmʌŋ/",
        "vi": "Ở giữa (nhiều người/vật)",
        "ex": ""
    },
    {
        "num": 370,
        "en": "Between",
        "pos": "prep.",
        "ipa": "/bɪˈtwiːn/",
        "vi": "Ở giữa (hai người/vật)",
        "ex": ""
    },
    {
        "num": 371,
        "en": "Especially",
        "pos": "adv.",
        "ipa": "/ɪˈspeʃ.əl.i/",
        "vi": "Đặc biệt là",
        "ex": ""
    },
    {
        "num": 372,
        "en": "Resident",
        "pos": "n.",
        "ipa": "/ˈrez.ɪ.dənt/",
        "vi": "Cư dân",
        "ex": ""
    },
    {
        "num": 373,
        "en": "Citizen",
        "pos": "n.",
        "ipa": "/ˈsɪt.ɪ.zən/",
        "vi": "Công dân",
        "ex": ""
    },
    {
        "num": 374,
        "en": "Inhabitant",
        "pos": "n.",
        "ipa": "/ɪnˈhæb.ɪ.tənt/",
        "vi": "Cư dân, người ở",
        "ex": ""
    },
    {
        "num": 375,
        "en": "Individual",
        "pos": "n.",
        "ipa": "/ˌɪn.dɪˈvɪdʒ.u.əl/",
        "vi": "Cá nhân",
        "ex": ""
    },
    {
        "num": 376,
        "en": "Arrangement",
        "pos": "n.",
        "ipa": "/əˈreɪndʒ.mənt/",
        "vi": "Sự sắp xếp",
        "ex": ""
    },
    {
        "num": 377,
        "en": "Respectful",
        "pos": "adj.",
        "ipa": "/rɪˈspekt.fəl/",
        "vi": "Tôn trọng, kính trọng",
        "ex": ""
    },
    {
        "num": 378,
        "en": "Common facilities",
        "pos": "n. phr.",
        "ipa": "/ˈkɒm.ən fəˈsɪl.ə.tiz/",
        "vi": "Tiện ích chung",
        "ex": ""
    },
    {
        "num": 379,
        "en": "Study",
        "pos": "v., n.",
        "ipa": "/ˈstʌd.i/",
        "vi": "Nghiên cứu, học tập",
        "ex": ""
    },
    {
        "num": 380,
        "en": "Vivid",
        "pos": "adj.",
        "ipa": "/ˈvɪv.ɪd/",
        "vi": "Sống động, rõ ràng",
        "ex": ""
    },
    {
        "num": 381,
        "en": "Insight",
        "pos": "n.",
        "ipa": "/ˈɪn.saɪt/",
        "vi": "Sự thấu hiểu, cái nhìn sâu sắc",
        "ex": ""
    },
    {
        "num": 382,
        "en": "Wake up",
        "pos": "phr. v.",
        "ipa": "/weɪk ʌp/",
        "vi": "Thức dậy",
        "ex": ""
    },
    {
        "num": 383,
        "en": "Subconscious mind",
        "pos": "n. phr.",
        "ipa": "/sʌbˈkɒn.ʃəs maɪnd/",
        "vi": "Tiềm thức",
        "ex": ""
    },
    {
        "num": 384,
        "en": "Fascinating",
        "pos": "adj.",
        "ipa": "/ˈfæs.ən.eɪ.tɪŋ/",
        "vi": "Lôi cuốn, hấp dẫn",
        "ex": ""
    },
    {
        "num": 385,
        "en": "Random",
        "pos": "adj.",
        "ipa": "/ˈræn.dəm/",
        "vi": "Ngẫu nhiên",
        "ex": ""
    },
    {
        "num": 386,
        "en": "Strange",
        "pos": "adj.",
        "ipa": "/streɪndʒ/",
        "vi": "Lạ lùng, kỳ lạ",
        "ex": ""
    },
    {
        "num": 387,
        "en": "Part of",
        "pos": "phr.",
        "ipa": "/pɑːt əv/",
        "vi": "Một phần của",
        "ex": ""
    },
    {
        "num": 388,
        "en": "Sculpture",
        "pos": "n.",
        "ipa": "/ˈskʌlp.tʃə/",
        "vi": "Tác phẩm điêu khắc, hình khối",
        "ex": ""
    },
    {
        "num": 389,
        "en": "Precision",
        "pos": "n.",
        "ipa": "/prɪˈsɪʒ.ən/",
        "vi": "Sự chính xác",
        "ex": ""
    },
    {
        "num": 390,
        "en": "Without",
        "pos": "prep.",
        "ipa": "/wɪˈðaʊt/",
        "vi": "Không có",
        "ex": ""
    },
    {
        "num": 391,
        "en": "Concentration",
        "pos": "n.",
        "ipa": "/ˌkɒn.sənˈtreɪ.ʃən/",
        "vi": "Sự tập trung",
        "ex": ""
    },
    {
        "num": 392,
        "en": "Worldwide",
        "pos": "adj., adv.",
        "ipa": "/ˌwɜːldˈwaɪd/",
        "vi": "Trên toàn thế giới",
        "ex": ""
    },
    {
        "num": 393,
        "en": "Art of paper folding",
        "pos": "n. phr.",
        "ipa": "/ɑːt əv ˈpeɪ.pə ˈfəʊl.dɪŋ/",
        "vi": "Nghệ thuật gấp giấy",
        "ex": ""
    },
    {
        "num": 394,
        "en": "Transform",
        "pos": "v.",
        "ipa": "/trænsˈfɔːm/",
        "vi": "Thay đổi, biến đổi",
        "ex": ""
    },
    {
        "num": 395,
        "en": "Flat square sheet",
        "pos": "n. phr.",
        "ipa": "/flæt skweə ʃiːt/",
        "vi": "Tờ giấy hình vuông phẳng",
        "ex": ""
    },
    {
        "num": 396,
        "en": "Scissors",
        "pos": "n.",
        "ipa": "/ˈsɪz.əz/",
        "vi": "Cái kéo",
        "ex": ""
    },
    {
        "num": 397,
        "en": "Glue",
        "pos": "n.",
        "ipa": "/ɡluː/",
        "vi": "Keo dán",
        "ex": ""
    },
    {
        "num": 398,
        "en": "Design",
        "pos": "n., v.",
        "ipa": "/dɪˈzaɪn/",
        "vi": "Thiết kế",
        "ex": ""
    },
    {
        "num": 399,
        "en": "Paper crane",
        "pos": "n. phr.",
        "ipa": "/ˈpeɪ.pə kreɪn/",
        "vi": "Hạc giấy",
        "ex": ""
    },
    {
        "num": 400,
        "en": "Fine motor skills",
        "pos": "n. phr.",
        "ipa": "/faɪn ˈməʊ.tə skɪlz/",
        "vi": "Kỹ năng vận động tinh",
        "ex": ""
    },
    {
        "num": 401,
        "en": "Emphasize",
        "pos": "v.",
        "ipa": "/ˈem.fə.saɪz/",
        "vi": "Nhấn mạnh",
        "ex": ""
    },
    {
        "num": 402,
        "en": "Life expectancy",
        "pos": "n. phr.",
        "ipa": "/ˈlaɪf ɪkˌspek.tən.si/",
        "vi": "Tuổi thọ",
        "ex": ""
    },
    {
        "num": 403,
        "en": "Delicious",
        "pos": "adj.",
        "ipa": "/dɪˈlɪʃ.əs/",
        "vi": "Ngon miệng",
        "ex": ""
    },
    {
        "num": 404,
        "en": "Mediterranean",
        "pos": "adj., n.",
        "ipa": "/ˌmed.ɪ.tərˈeɪ.ni.ən/",
        "vi": "(Thuộc) Địa Trung Hải",
        "ex": ""
    },
    {
        "num": 405,
        "en": "Greece",
        "pos": "n.",
        "ipa": "/ɡriːs/",
        "vi": "Nước Hy Lạp",
        "ex": ""
    },
    {
        "num": 406,
        "en": "Plant-based foods",
        "pos": "n. phr.",
        "ipa": "/ˈplɑːnt.beɪst fuːdz/",
        "vi": "Thực phẩm có nguồn gốc thực vật",
        "ex": ""
    },
    {
        "num": 407,
        "en": "Healthy fats",
        "pos": "n. phr.",
        "ipa": "/ˈhel.θi fæts/",
        "vi": "Chất béo lành mạnh",
        "ex": ""
    },
    {
        "num": 408,
        "en": "Butter",
        "pos": "n.",
        "ipa": "/ˈbʌt.ə/",
        "vi": "Bơ",
        "ex": ""
    },
    {
        "num": 409,
        "en": "Linked",
        "pos": "adj.",
        "ipa": "/lɪŋkt/",
        "vi": "Liên kết",
        "ex": ""
    },
    {
        "num": 410,
        "en": "Fresh ingredients",
        "pos": "n. phr.",
        "ipa": "/freʃ ɪnˈɡriː.di.ənts/",
        "vi": "Nguyên liệu tươi",
        "ex": ""
    },
    {
        "num": 411,
        "en": "Block",
        "pos": "v.",
        "ipa": "/blɒk/",
        "vi": "Chặn lại, che khuất",
        "ex": ""
    },
    {
        "num": 412,
        "en": "Phenomenon",
        "pos": "n.",
        "ipa": "/fəˈnɒm.ɪ.nən/",
        "vi": "Hiện tượng",
        "ex": ""
    },
    {
        "num": 413,
        "en": "Spectator",
        "pos": "n.",
        "ipa": "/spekˈteɪ.tə/",
        "vi": "Khán giả (xem trực tiếp)",
        "ex": ""
    },
    {
        "num": 414,
        "en": "Turn dark",
        "pos": "phr.",
        "ipa": "/tɜːn dɑːk/",
        "vi": "Chuyển sang tối đen",
        "ex": ""
    },
    {
        "num": 415,
        "en": "Protection",
        "pos": "n.",
        "ipa": "/prəˈtek.ʃən/",
        "vi": "Sự bảo vệ",
        "ex": ""
    },
    {
        "num": 416,
        "en": "Look directly",
        "pos": "phr.",
        "ipa": "/lʊk daɪˈrekt.li/",
        "vi": "Nhìn trực tiếp",
        "ex": ""
    },
    {
        "num": 417,
        "en": "Astronomer",
        "pos": "n.",
        "ipa": "/əˈstrɒn.ə.mə/",
        "vi": "Nhà thiên văn học",
        "ex": ""
    },
    {
        "num": 418,
        "en": "Solar eclipse",
        "pos": "n. phr.",
        "ipa": "/ˌsəʊ.lər ɪˈklɪps/",
        "vi": "Nhật thực",
        "ex": ""
    },
    {
        "num": 419,
        "en": "Occur",
        "pos": "v.",
        "ipa": "/əˈkɜː/",
        "vi": "Xảy ra",
        "ex": ""
    },
    {
        "num": 420,
        "en": "Pass",
        "pos": "v.",
        "ipa": "/pɑːs/",
        "vi": "Vượt qua, đi qua",
        "ex": ""
    },
    {
        "num": 421,
        "en": "Rare",
        "pos": "adj.",
        "ipa": "/reə/",
        "vi": "Hiếm",
        "ex": ""
    },
    {
        "num": 422,
        "en": "Total",
        "pos": "adj.",
        "ipa": "/ˈtəʊ.təl/",
        "vi": "Toàn phần, tổng cộng",
        "ex": ""
    },
    {
        "num": 423,
        "en": "Spectacular sight",
        "pos": "n. phr.",
        "ipa": "/spekˈtæk.jə.lə saɪt/",
        "vi": "Cảnh tượng ngoạn mục",
        "ex": ""
    },
    {
        "num": 424,
        "en": "Special",
        "pos": "adj.",
        "ipa": "/ˈspeʃ.əl/",
        "vi": "Đặc biệt",
        "ex": ""
    },
    {
        "num": 425,
        "en": "Outer atmosphere",
        "pos": "n. phr.",
        "ipa": "/ˈaʊ.tər ˈæt.mə.sfɪə/",
        "vi": "Khí quyển bên ngoài",
        "ex": ""
    },
    {
        "num": 426,
        "en": "Capture",
        "pos": "v.",
        "ipa": "/ˈkæp.tʃə/",
        "vi": "Ghi lại, chụp lại",
        "ex": ""
    },
    {
        "num": 427,
        "en": "Stunning",
        "pos": "adj.",
        "ipa": "/ˈstʌn.ɪŋ/",
        "vi": "Tuyệt đẹp, ấn tượng",
        "ex": ""
    },
    {
        "num": 428,
        "en": "Angle",
        "pos": "n.",
        "ipa": "/ˈæŋ.ɡəl/",
        "vi": "Góc độ",
        "ex": ""
    },
    {
        "num": 429,
        "en": "Creativity",
        "pos": "n.",
        "ipa": "/ˌkriː.eɪˈtɪv.ə.ti/",
        "vi": "Sự sáng tạo",
        "ex": ""
    },
    {
        "num": 430,
        "en": "Surroundings",
        "pos": "n.",
        "ipa": "/səˈraʊn.dɪŋz/",
        "vi": "Môi trường xung quanh",
        "ex": ""
    },
    {
        "num": 431,
        "en": "Express",
        "pos": "v.",
        "ipa": "/ɪkˈspres/",
        "vi": "Thể hiện, bày tỏ",
        "ex": ""
    },
    {
        "num": 432,
        "en": "Graffiti",
        "pos": "n.",
        "ipa": "/ɡrəˈfiː.ti/",
        "vi": "Hình vẽ bậy trên tường",
        "ex": ""
    },
    {
        "num": 433,
        "en": "Commission",
        "pos": "v.",
        "ipa": "/kəˈmɪʃ.ən/",
        "vi": "Thuê, đặt hàng (làm tác phẩm)",
        "ex": ""
    },
    {
        "num": 434,
        "en": "Colorful",
        "pos": "adj.",
        "ipa": "/ˈkʌl.ə.fəl/",
        "vi": "Đầy màu sắc",
        "ex": ""
    },
    {
        "num": 435,
        "en": "Character",
        "pos": "n.",
        "ipa": "/ˈkær.ək.tə/",
        "vi": "Đặc điểm, nét riêng",
        "ex": ""
    },
    {
        "num": 436,
        "en": "Visual art",
        "pos": "n. phr.",
        "ipa": "/ˈvɪʒ.u.əl ɑːt/",
        "vi": "Nghệ thuật thị giác",
        "ex": ""
    },
    {
        "num": 437,
        "en": "Artwork",
        "pos": "n.",
        "ipa": "/ˈɑːt.wɜːk/",
        "vi": "Tác phẩm nghệ thuật",
        "ex": ""
    },
    {
        "num": 438,
        "en": "Vandalism",
        "pos": "n.",
        "ipa": "/ˈvæn.dəl.ɪ.zəm/",
        "vi": "Sự phá hoại của công",
        "ex": ""
    },
    {
        "num": 439,
        "en": "Political",
        "pos": "adj.",
        "ipa": "/pəˈlɪt.ɪ.kəl/",
        "vi": "(Thuộc) chính trị",
        "ex": ""
    },
    {
        "num": 440,
        "en": "Be meant to",
        "pos": "phr.",
        "ipa": "/bi ment tuː/",
        "vi": "Nhằm mục đích, có nghĩa là",
        "ex": ""
    },
    {
        "num": 441,
        "en": "Mural",
        "pos": "n.",
        "ipa": "/ˈmjʊə.rəl/",
        "vi": "Tranh tường",
        "ex": ""
    },
    {
        "num": 442,
        "en": "Grey",
        "pos": "adj.",
        "ipa": "/ɡreɪ/",
        "vi": "Màu xám",
        "ex": ""
    },
    {
        "num": 443,
        "en": "Gallery",
        "pos": "n.",
        "ipa": "/ˈɡæl.ər.i/",
        "vi": "Phòng trưng bày",
        "ex": ""
    },
    {
        "num": 444,
        "en": "Political message",
        "pos": "n. phr.",
        "ipa": "/pəˈlɪt.ɪ.kəl ˈmes.ɪdʒ/",
        "vi": "Thông điệp chính trị",
        "ex": ""
    },
    {
        "num": 445,
        "en": "Add",
        "pos": "v.",
        "ipa": "/æd/",
        "vi": "Thêm vào",
        "ex": ""
    },
    {
        "num": 446,
        "en": "Exchange",
        "pos": "n., v.",
        "ipa": "/ɪksˈtʃeɪndʒ/",
        "vi": "Sự trao đổi",
        "ex": ""
    },
    {
        "num": 447,
        "en": "Technology",
        "pos": "n.",
        "ipa": "/tekˈnɒl.ə.dʒi/",
        "vi": "Công nghệ",
        "ex": ""
    },
    {
        "num": 448,
        "en": "Dangerous",
        "pos": "adj.",
        "ipa": "/ˈdeɪn.dʒər.əs/",
        "vi": "Nguy hiểm",
        "ex": ""
    },
    {
        "num": 449,
        "en": "The Silk Road",
        "pos": "n. phr.",
        "ipa": "/ðə sɪlk rəʊd/",
        "vi": "Con đường tơ lụa",
        "ex": ""
    },
    {
        "num": 450,
        "en": "Ancient network",
        "pos": "n. phr.",
        "ipa": "/ˈeɪn.ʃənt ˈnet.wɜːk/",
        "vi": "Mạng lưới cổ xưa",
        "ex": ""
    },
    {
        "num": 451,
        "en": "Route",
        "pos": "n.",
        "ipa": "/ruːt/",
        "vi": "Tuyến đường",
        "ex": ""
    },
    {
        "num": 452,
        "en": "Central",
        "pos": "adj.",
        "ipa": "/ˈsen.trəl/",
        "vi": "Trung tâm, trọng tâm",
        "ex": ""
    },
    {
        "num": 453,
        "en": "Century",
        "pos": "n.",
        "ipa": "/ˈsen.tʃər.i/",
        "vi": "Thế kỷ",
        "ex": ""
    },
    {
        "num": 454,
        "en": "Precious stones",
        "pos": "n. phr.",
        "ipa": "/ˈpreʃ.əs stəʊnz/",
        "vi": "Đá quý",
        "ex": ""
    },
    {
        "num": 455,
        "en": "Spread",
        "pos": "v.",
        "ipa": "/spred/",
        "vi": "Lây lan, lan truyền",
        "ex": ""
    },
    {
        "num": 456,
        "en": "Religion",
        "pos": "n.",
        "ipa": "/rɪˈlɪdʒ.ən/",
        "vi": "Tôn giáo",
        "ex": ""
    },
    {
        "num": 457,
        "en": "Continent",
        "pos": "n.",
        "ipa": "/ˈkɒn.tɪ.nənt/",
        "vi": "Châu lục",
        "ex": ""
    },
    {
        "num": 458,
        "en": "Journey",
        "pos": "n.",
        "ipa": "/ˈdʒɜː.ni/",
        "vi": "Hành trình",
        "ex": ""
    },
    {
        "num": 459,
        "en": "Digestion",
        "pos": "n.",
        "ipa": "/daɪˈdʒes.tʃən/",
        "vi": "Sự tiêu hóa",
        "ex": ""
    },
    {
        "num": 460,
        "en": "Atmosphere",
        "pos": "n.",
        "ipa": "/ˈæt.mə.sfɪə/",
        "vi": "Bầu không khí",
        "ex": ""
    },
    {
        "num": 461,
        "en": "In contrast",
        "pos": "phr.",
        "ipa": "/ɪn ˈkɒn.trɑːst/",
        "vi": "Ngược lại, trái lại",
        "ex": ""
    },
    {
        "num": 462,
        "en": "Movement",
        "pos": "n.",
        "ipa": "/ˈmuːv.mənt/",
        "vi": "Phong trào, sự chuyển động",
        "ex": ""
    },
    {
        "num": 463,
        "en": "Concept",
        "pos": "n.",
        "ipa": "/ˈkɒn.sept/",
        "vi": "Ý tưởng, khái niệm",
        "ex": ""
    },
    {
        "num": 464,
        "en": "Contribute",
        "pos": "v.",
        "ipa": "/kənˈtrɪb.juːt/",
        "vi": "Đóng góp",
        "ex": ""
    },
    {
        "num": 465,
        "en": "Respectfully",
        "pos": "adv.",
        "ipa": "/rɪˈspekt.fəl.i/",
        "vi": "Một cách tôn trọng",
        "ex": ""
    },
    {
        "num": 466,
        "en": "Trust",
        "pos": "n., v.",
        "ipa": "/trʌst/",
        "vi": "Sự tin tưởng / Tin tưởng",
        "ex": ""
    },
    {
        "num": 467,
        "en": "Outcome",
        "pos": "n.",
        "ipa": "/ˈaʊt.kʌm/",
        "vi": "Kết quả",
        "ex": ""
    },
    {
        "num": 468,
        "en": "Disagreement",
        "pos": "n.",
        "ipa": "/ˌdis.əˈɡriː.mənt/",
        "vi": "Cuộc tranh cãi, sự bất đồng",
        "ex": ""
    },
    {
        "num": 469,
        "en": "Final",
        "pos": "adj.",
        "ipa": "/ˈfaɪ.nəl/",
        "vi": "Cuối cùng",
        "ex": ""
    },
    {
        "num": 470,
        "en": "Tournament",
        "pos": "n.",
        "ipa": "/ˈtʊə.nə.mənt/",
        "vi": "Giải đấu",
        "ex": ""
    },
    {
        "num": 471,
        "en": "Reflexes",
        "pos": "n.",
        "ipa": "/ˈriː.flek.sɪz/",
        "vi": "Phản xạ",
        "ex": ""
    },
    {
        "num": 472,
        "en": "Sponsorship",
        "pos": "n.",
        "ipa": "/ˈspɒn.sə.ʃɪp/",
        "vi": "Sự tài trợ",
        "ex": ""
    },
    {
        "num": 473,
        "en": "Dedication",
        "pos": "n.",
        "ipa": "/ˌded.ɪˈkeɪ.ʃən/",
        "vi": "Sự cống hiến, tận tâm",
        "ex": ""
    },
    {
        "num": 474,
        "en": "Stadium",
        "pos": "n.",
        "ipa": "/ˈsteɪ.di.əm/",
        "vi": "Sân vận động",
        "ex": ""
    },
    {
        "num": 475,
        "en": "Train for",
        "pos": "phr. v.",
        "ipa": "/treɪn fɔː/",
        "vi": "Huấn luyện cho, chuẩn bị cho",
        "ex": ""
    },
    {
        "num": 476,
        "en": "Strategy",
        "pos": "n.",
        "ipa": "/ˈstræt.ə.dʒi/",
        "vi": "Chiến lược, phương pháp",
        "ex": ""
    },
    {
        "num": 477,
        "en": "Prize pool",
        "pos": "n. phr.",
        "ipa": "/praɪz puːl/",
        "vi": "Quỹ giải thưởng",
        "ex": ""
    },
    {
        "num": 478,
        "en": "Through",
        "pos": "prep.",
        "ipa": "/θruː/",
        "vi": "Thông qua, bằng cách",
        "ex": ""
    },
    {
        "num": 479,
        "en": "Career",
        "pos": "n.",
        "ipa": "/kəˈrɪə/",
        "vi": "Sự nghiệp",
        "ex": ""
    },
    {
        "num": 480,
        "en": "Intense",
        "pos": "adj.",
        "ipa": "/ɪnˈtens/",
        "vi": "Mãnh liệt, dữ dội",
        "ex": ""
    },
    {
        "num": 481,
        "en": "Consistent",
        "pos": "adj.",
        "ipa": "/kənˈsɪs.tənt/",
        "vi": "Nhất quán, đều đặn",
        "ex": ""
    },
    {
        "num": 482,
        "en": "Habits",
        "pos": "n.",
        "ipa": "/ˈhæb.ɪts/",
        "vi": "Thói quen",
        "ex": ""
    },
    {
        "num": 483,
        "en": "Willpower",
        "pos": "n.",
        "ipa": "/ˈwɪl.paʊə/",
        "vi": "Ý chí",
        "ex": ""
    },
    {
        "num": 484,
        "en": "Organized",
        "pos": "adj.",
        "ipa": "/ˈɔː.ɡən.aɪzd/",
        "vi": "Có tổ chức, ngăn nắp",
        "ex": ""
    },
    {
        "num": 485,
        "en": "Set the tone",
        "pos": "phr.",
        "ipa": "/set ðə təʊn/",
        "vi": "Tạo tiền đề, định hướng (cho cái gì)",
        "ex": ""
    },
    {
        "num": 486,
        "en": "Increase",
        "pos": "v., n.",
        "ipa": "/ɪnˈkriːs/",
        "vi": "Tăng lên",
        "ex": ""
    },
    {
        "num": 487,
        "en": "Rushing",
        "pos": "v., n.",
        "ipa": "/ˈrʌʃ.ɪŋ/",
        "vi": "Vội vã, hối hả",
        "ex": ""
    },
    {
        "num": 488,
        "en": "Stretch",
        "pos": "v.",
        "ipa": "/stretʃ/",
        "vi": "Kéo dài, vươn vai, giãn cơ",
        "ex": ""
    },
    {
        "num": 489,
        "en": "Sticking to",
        "pos": "phr.",
        "ipa": "/ˈstɪk.ɪŋ tuː/",
        "vi": "Kiên trì, tuân thủ (một thói quen)",
        "ex": ""
    },
    {
        "num": 490,
        "en": "Ultimately",
        "pos": "adv.",
        "ipa": "/ˈʌl.tɪ.mət.li/",
        "vi": "Cuối cùng, sau cùng",
        "ex": ""
    },
    {
        "num": 491,
        "en": "Mind",
        "pos": "n.",
        "ipa": "/maɪnd/",
        "vi": "Tinh thần, tâm trí",
        "ex": ""
    },
    {
        "num": 492,
        "en": "Value",
        "pos": "n., v.",
        "ipa": "/ˈvæl.juː/",
        "vi": "Giá trị / Đánh giá cao",
        "ex": ""
    },
    {
        "num": 493,
        "en": "Decorative",
        "pos": "adj.",
        "ipa": "/ˈdek.ə.rə.tɪv/",
        "vi": "Có tính trang trí",
        "ex": ""
    },
    {
        "num": 494,
        "en": "Materials",
        "pos": "n.",
        "ipa": "/məˈtɪə.ri.əlz/",
        "vi": "Vật liệu, chất liệu",
        "ex": ""
    },
    {
        "num": 495,
        "en": "Innovative",
        "pos": "adj.",
        "ipa": "/ˈɪn.ə.və.tɪv/",
        "vi": "Có tính đổi mới, sáng tạo",
        "ex": ""
    },
    {
        "num": 496,
        "en": "Upcycling",
        "pos": "n.",
        "ipa": "/ˈʌpˌsaɪ.klɪŋ/",
        "vi": "Nâng cấp tái sử dụng",
        "ex": ""
    },
    {
        "num": 497,
        "en": "Ladder",
        "pos": "n.",
        "ipa": "/ˈlæd.ə/",
        "vi": "Cái thang",
        "ex": ""
    },
    {
        "num": 498,
        "en": "Bookshelf",
        "pos": "n.",
        "ipa": "/ˈbʊk.ʃelf/",
        "vi": "Giá sách",
        "ex": ""
    },
    {
        "num": 499,
        "en": "Glass jar",
        "pos": "n. phr.",
        "ipa": "/ɡlɑːs dʒɑː/",
        "vi": "Lọ thủy tinh",
        "ex": ""
    },
    {
        "num": 500,
        "en": "Prevent",
        "pos": "v.",
        "ipa": "/prɪˈvent/",
        "vi": "Ngăn chặn",
        "ex": ""
    },
    {
        "num": 501,
        "en": "Field trip",
        "pos": "n. phr.",
        "ipa": "/fiːld trɪp/",
        "vi": "Chuyến đi thực tế",
        "ex": ""
    },
    {
        "num": 502,
        "en": "Immersive",
        "pos": "adj.",
        "ipa": "/ɪˈmɜː.sɪv/",
        "vi": "Sống động, đắm chìm",
        "ex": ""
    },
    {
        "num": 503,
        "en": "Costly",
        "pos": "adj.",
        "ipa": "/ˈkɒst.li/",
        "vi": "Đắt đỏ",
        "ex": ""
    },
    {
        "num": 504,
        "en": "Tool",
        "pos": "n.",
        "ipa": "/tuːl/",
        "vi": "Công cụ",
        "ex": ""
    },
    {
        "num": 505,
        "en": "Virtual Reality",
        "pos": "n. phr.",
        "ipa": "/ˌvɜː.tʃu.əl riˈæl.ə.ti/",
        "vi": "Thực tế ảo",
        "ex": ""
    },
    {
        "num": 506,
        "en": "Thoughts",
        "pos": "n.",
        "ipa": "/θɔːts/",
        "vi": "Suy nghĩ",
        "ex": ""
    },
    {
        "num": 507,
        "en": "Keepsake",
        "pos": "n.",
        "ipa": "/ˈkiːp.seɪk/",
        "vi": "Vật kỷ niệm",
        "ex": ""
    },
    {
        "num": 508,
        "en": "Affection",
        "pos": "n.",
        "ipa": "/əˈfek.ʃən/",
        "vi": "Tình cảm, sự yêu thương",
        "ex": ""
    },
    {
        "num": 509,
        "en": "Sunscreen",
        "pos": "n.",
        "ipa": "/ˈsʌn.skriːn/",
        "vi": "Kem chống nắng",
        "ex": ""
    },
    {
        "num": 510,
        "en": "Diseases",
        "pos": "n.",
        "ipa": "/dɪˈziː.zɪz/",
        "vi": "Bệnh tật",
        "ex": ""
    },
    {
        "num": 511,
        "en": "Income",
        "pos": "n.",
        "ipa": "/ˈɪn.kʌm/",
        "vi": "Thu nhập",
        "ex": ""
    },
    {
        "num": 512,
        "en": "Safety",
        "pos": "n.",
        "ipa": "/ˈseɪf.ti/",
        "vi": "Sự an toàn",
        "ex": ""
    },
    {
        "num": 513,
        "en": "Regulation",
        "pos": "n.",
        "ipa": "/ˌreɡ.juˈleɪ.ʃən/",
        "vi": "Quy định, luật lệ",
        "ex": ""
    },
    {
        "num": 514,
        "en": "Improve",
        "pos": "v.",
        "ipa": "/ɪmˈpruːv/",
        "vi": "Cải thiện",
        "ex": ""
    },
    {
        "num": 515,
        "en": "Lesson",
        "pos": "n.",
        "ipa": "/ˈles.ən/",
        "vi": "Bài học",
        "ex": ""
    },
    {
        "num": 516,
        "en": "Resilience",
        "pos": "n.",
        "ipa": "/rɪˈzɪl.i.əns/",
        "vi": "Sự kiên cường, khả năng phục hồi",
        "ex": ""
    },
    {
        "num": 517,
        "en": "Alleviate",
        "pos": "v.",
        "ipa": "/əˈliː.vi.eɪt/",
        "vi": "Làm giảm bớt (đau đớn, khó chịu)",
        "ex": ""
    },
    {
        "num": 518,
        "en": "Deceive",
        "pos": "v.",
        "ipa": "/dɪˈsiːv/",
        "vi": "Lừa dối, đánh lừa",
        "ex": ""
    },
    {
        "num": 519,
        "en": "Fatigue",
        "pos": "n.",
        "ipa": "/fəˈtiːɡ/",
        "vi": "Sự mệt mỏi, kiệt sức",
        "ex": ""
    },
    {
        "num": 520,
        "en": "Placebo effect",
        "pos": "n. phr.",
        "ipa": "/pləˈsiː.bəʊ ɪˌfekt/",
        "vi": "Hiệu ứng giả dược (thuốc trấn an)",
        "ex": ""
    },
    {
        "num": 521,
        "en": "Psychological",
        "pos": "adj.",
        "ipa": "/ˌsaɪ.kəˈlɒdʒ.ɪ.kəl/",
        "vi": "(Thuộc về) tâm lý học",
        "ex": ""
    },
    {
        "num": 522,
        "en": "Fake",
        "pos": "adj., n.",
        "ipa": "/feɪk/",
        "vi": "Giả, đồ giả",
        "ex": ""
    },
    {
        "num": 523,
        "en": "Heal",
        "pos": "v.",
        "ipa": "/hiːl/",
        "vi": "Chữa lành",
        "ex": ""
    },
    {
        "num": 524,
        "en": "Sugar pill",
        "pos": "n. phr.",
        "ipa": "/ˈʃʊɡ.ə pɪl/",
        "vi": "Viên đường (trong thí nghiệm giả dược)",
        "ex": ""
    },
    {
        "num": 525,
        "en": "Broken bone",
        "pos": "n. phr.",
        "ipa": "/ˈbrəʊ.kən bəʊn/",
        "vi": "Xương bị gãy",
        "ex": ""
    },
    {
        "num": 526,
        "en": "Cure",
        "pos": "v., n.",
        "ipa": "/kjʊə/",
        "vi": "Điều trị, chữa khỏi / Phương thuốc",
        "ex": ""
    },
    {
        "num": 527,
        "en": "Ethically",
        "pos": "adv.",
        "ipa": "/ˈeθ.ɪ.kəl.i/",
        "vi": "Một cách có đạo đức",
        "ex": ""
    },
    {
        "num": 528,
        "en": "Incredible power",
        "pos": "n. phr.",
        "ipa": "/ɪnˈkred.ə.bəl ˈpaʊə/",
        "vi": "Sức mạnh đáng kinh ngạc",
        "ex": ""
    },
    {
        "num": 529,
        "en": "Shrink",
        "pos": "v.",
        "ipa": "/ʃrɪŋk/",
        "vi": "Co lại, làm nhỏ lại",
        "ex": ""
    },
    {
        "num": 530,
        "en": "Tumor",
        "pos": "n.",
        "ipa": "/ˈtʃuː.mə/",
        "vi": "Khối u",
        "ex": ""
    },
    {
        "num": 531,
        "en": "Significantly",
        "pos": "adv.",
        "ipa": "/sɪɡˈnɪf.ɪ.kənt.li/",
        "vi": "Một cách đáng kể",
        "ex": ""
    },
    {
        "num": 532,
        "en": "Symptom",
        "pos": "n.",
        "ipa": "/ˈsɪmp.təm/",
        "vi": "Triệu chứng",
        "ex": ""
    },
    {
        "num": 533,
        "en": "Comprehend",
        "pos": "v.",
        "ipa": "/ˌkɒm.prɪˈhend/",
        "vi": "Hiểu thấu đáo, lĩnh hội",
        "ex": ""
    },
    {
        "num": 534,
        "en": "Cue",
        "pos": "n.",
        "ipa": "/kjuː/",
        "vi": "Tín hiệu, dấu hiệu gợi ý",
        "ex": ""
    },
    {
        "num": 535,
        "en": "Active listening",
        "pos": "n. phr.",
        "ipa": "/ˌæk.tɪv ˈlɪs.ən.ɪŋ/",
        "vi": "Nghe chủ động",
        "ex": ""
    },
    {
        "num": 536,
        "en": "Equally",
        "pos": "adv.",
        "ipa": "/ˈiː.kwə.li/",
        "vi": "Bằng nhau, ngang nhau",
        "ex": ""
    },
    {
        "num": 537,
        "en": "Fully",
        "pos": "adv.",
        "ipa": "/ˈfʊl.i/",
        "vi": "Đầy đủ, hoàn toàn",
        "ex": ""
    },
    {
        "num": 538,
        "en": "Concentrate on",
        "pos": "phr. v.",
        "ipa": "/ˈkɒn.sən.treɪt ɒn/",
        "vi": "Tập trung vào",
        "ex": ""
    },
    {
        "num": 539,
        "en": "Rather than",
        "pos": "phr.",
        "ipa": "/ˈrɑː.ðə ðæn/",
        "vi": "Thay vì, hơn là",
        "ex": ""
    },
    {
        "num": 540,
        "en": "Turn (to speak)",
        "pos": "n.",
        "ipa": "/tɜːn/",
        "vi": "Lượt (đến lượt phát biểu)",
        "ex": ""
    },
    {
        "num": 541,
        "en": "Non-verbal cues",
        "pos": "n. phr.",
        "ipa": "/ˌnɒnˈvɜː.bəl kjuːz/",
        "vi": "Tín hiệu phi ngôn ngữ",
        "ex": ""
    },
    {
        "num": 542,
        "en": "Nodding",
        "pos": "n., v-ing",
        "ipa": "/ˈnɒd.ɪŋ/",
        "vi": "Hành động gật đầu",
        "ex": ""
    },
    {
        "num": 543,
        "en": "Clarify",
        "pos": "v.",
        "ipa": "/ˈklær.ɪ.faɪ/",
        "vi": "Làm rõ, giải thích rõ",
        "ex": ""
    },
    {
        "num": 544,
        "en": "Deep",
        "pos": "adj.",
        "ipa": "/diːp/",
        "vi": "Sâu, sâu sắc",
        "ex": ""
    },
    {
        "num": 545,
        "en": "Misunderstanding",
        "pos": "n.",
        "ipa": "/ˌmɪs.ʌn.dəˈstæn.dɪŋ/",
        "vi": "Sự hiểu lầm",
        "ex": ""
    },
    {
        "num": 546,
        "en": "Genuine desire",
        "pos": "n. phr.",
        "ipa": "/ˈdʒen.ju.ɪn dɪˈzaɪə/",
        "vi": "Mong muốn chân thật",
        "ex": ""
    },
    {
        "num": 547,
        "en": "Detrimental",
        "pos": "adj.",
        "ipa": "/ˌdet.rɪˈmen.təl/",
        "vi": "Có hại, gây bất lợi",
        "ex": ""
    },
    {
        "num": 548,
        "en": "Tackle",
        "pos": "v.",
        "ipa": "/ˈtæk.əl/",
        "vi": "Giải quyết (vấn đề khó)",
        "ex": ""
    },
    {
        "num": 549,
        "en": "Surplus",
        "pos": "adj., n.",
        "ipa": "/ˈsɜː.pləs/",
        "vi": "Dư thừa, thặng dư",
        "ex": ""
    },
    {
        "num": 550,
        "en": "Edible",
        "pos": "adj.",
        "ipa": "/ˈed.ə.bəl/",
        "vi": "Có thể ăn được",
        "ex": ""
    },
    {
        "num": 551,
        "en": "Edible food",
        "pos": "n. phr.",
        "ipa": "/ˈed.ə.bəl fuːd/",
        "vi": "Thực phẩm có thể ăn được",
        "ex": ""
    },
    {
        "num": 552,
        "en": "Throw away",
        "pos": "phr. v.",
        "ipa": "/θrəʊ əˈweɪ/",
        "vi": "Vứt đi",
        "ex": ""
    },
    {
        "num": 553,
        "en": "Household",
        "pos": "n.",
        "ipa": "/ˈhaʊs.həʊld/",
        "vi": "Hộ gia đình",
        "ex": ""
    },
    {
        "num": 554,
        "en": "Starve",
        "pos": "v.",
        "ipa": "/stɑːv/",
        "vi": "Chết đói, bỏ đói",
        "ex": ""
    },
    {
        "num": 555,
        "en": "Trap",
        "pos": "v., n.",
        "ipa": "/træp/",
        "vi": "Giữ lại, nhốt lại / Cái bẫy",
        "ex": ""
    },
    {
        "num": 556,
        "en": "Plan",
        "pos": "v., n.",
        "ipa": "/plæn/",
        "vi": "Lên kế hoạch / Bản kế hoạch",
        "ex": ""
    },
    {
        "num": 557,
        "en": "Massive",
        "pos": "adj.",
        "ipa": "/ˈmæs.ɪv/",
        "vi": "To lớn, đồ sộ",
        "ex": ""
    },
    {
        "num": 558,
        "en": "Tons of",
        "pos": "phr.",
        "ipa": "/tʌnz əv/",
        "vi": "Hàng tấn, rất nhiều",
        "ex": ""
    },
    {
        "num": 559,
        "en": "Moral",
        "pos": "adj.",
        "ipa": "/ˈmɒr.əl/",
        "vi": "(Thuộc về) đạo đức",
        "ex": ""
    },
    {
        "num": 560,
        "en": "Rotting food",
        "pos": "n. phr.",
        "ipa": "/ˈrɒt.ɪŋ fuːd/",
        "vi": "Thức ăn thối rữa",
        "ex": ""
    },
    {
        "num": 561,
        "en": "Urge",
        "pos": "v.",
        "ipa": "/ɜːdʒ/",
        "vi": "Kêu gọi, thúc giục",
        "ex": ""
    },
    {
        "num": 562,
        "en": "Greenhouse gas",
        "pos": "n. phr.",
        "ipa": "/ˌɡriːn.haʊs ˈɡæs/",
        "vi": "Khí nhà kính",
        "ex": ""
    },
    {
        "num": 563,
        "en": "Charity",
        "pos": "n.",
        "ipa": "/ˈtʃær.ə.ti/",
        "vi": "Tổ chức từ thiện",
        "ex": ""
    },
    {
        "num": 564,
        "en": "Profound",
        "pos": "adj.",
        "ipa": "/prəˈfaʊnd/",
        "vi": "Sâu sắc, to lớn",
        "ex": ""
    },
    {
        "num": 565,
        "en": "Fast-food chain",
        "pos": "n. phr.",
        "ipa": "/ˌfɑːstˈfuːd tʃeɪn/",
        "vi": "Chuỗi cửa hàng thức ăn nhanh",
        "ex": ""
    },
    {
        "num": 566,
        "en": "Paint",
        "pos": "v., n.",
        "ipa": "/peɪnt/",
        "vi": "Sơn, vẽ / Sơn",
        "ex": ""
    },
    {
        "num": 567,
        "en": "Stimulate",
        "pos": "v.",
        "ipa": "/ˈstɪm.jə.leɪt/",
        "vi": "Kích thích, khuyến khích",
        "ex": ""
    },
    {
        "num": 568,
        "en": "Marketing expert",
        "pos": "n. phr.",
        "ipa": "/ˈmɑː.kɪ.tɪŋ ˈek.spɜːt/",
        "vi": "Chuyên gia tiếp thị",
        "ex": ""
    },
    {
        "num": 569,
        "en": "Appetite",
        "pos": "n.",
        "ipa": "/ˈæp.ə.taɪt/",
        "vi": "Sự thèm ăn",
        "ex": ""
    },
    {
        "num": 570,
        "en": "Brand",
        "pos": "n.",
        "ipa": "/brænd/",
        "vi": "Thương hiệu",
        "ex": ""
    },
    {
        "num": 571,
        "en": "Identity",
        "pos": "n.",
        "ipa": "/aɪˈden.tə.ti/",
        "vi": "Bản sắc, nhận diện",
        "ex": ""
    },
    {
        "num": 572,
        "en": "Soft blue",
        "pos": "n. phr.",
        "ipa": "/sɒft bluː/",
        "vi": "Màu xanh nhẹ nhàng",
        "ex": ""
    },
    {
        "num": 573,
        "en": "Calming environment",
        "pos": "n. phr.",
        "ipa": "/ˈkɑː.mɪŋ ɪnˈvaɪ.rən.mənt/",
        "vi": "Môi trường thư giãn",
        "ex": ""
    },
    {
        "num": 574,
        "en": "Influence",
        "pos": "v., n.",
        "ipa": "/ˈɪn.flu.əns/",
        "vi": "Ảnh hưởng, tác động",
        "ex": ""
    },
    {
        "num": 575,
        "en": "Mentor",
        "pos": "n.",
        "ipa": "/ˈmen.tɔː/",
        "vi": "Người cố vấn, người thầy",
        "ex": ""
    },
    {
        "num": 576,
        "en": "Evolve",
        "pos": "v.",
        "ipa": "/ɪˈvɒlv/",
        "vi": "Tiến hóa, phát triển",
        "ex": ""
    },
    {
        "num": 577,
        "en": "Biomimicry",
        "pos": "n.",
        "ipa": "/ˌbaɪ.əʊˈmɪm.ɪ.kri/",
        "vi": "Phỏng sinh học (bắt chước tự nhiên)",
        "ex": ""
    },
    {
        "num": 578,
        "en": "Beak",
        "pos": "n.",
        "ipa": "/biːk/",
        "vi": "Mỏ (chim)",
        "ex": ""
    },
    {
        "num": 579,
        "en": "Survive",
        "pos": "v.",
        "ipa": "/səˈvaɪv/",
        "vi": "Tồn tại, sống sót",
        "ex": ""
    },
    {
        "num": 580,
        "en": "Engineer",
        "pos": "n.",
        "ipa": "/ˌen.dʒɪˈnɪə/",
        "vi": "Kỹ sư",
        "ex": ""
    },
    {
        "num": 581,
        "en": "Bullet train",
        "pos": "n. phr.",
        "ipa": "/ˈbʊl.ɪt treɪn/",
        "vi": "Tàu cao tốc (hình đầu đạn)",
        "ex": ""
    },
    {
        "num": 582,
        "en": "Kingfisher",
        "pos": "n.",
        "ipa": "/ˈkɪŋˌfɪʃ.ə/",
        "vi": "Chim bói cá",
        "ex": ""
    },
    {
        "num": 583,
        "en": "Approach",
        "pos": "n., v.",
        "ipa": "/əˈprəʊtʃ/",
        "vi": "Cách tiếp cận / Tiếp cận",
        "ex": ""
    },
    {
        "num": 584,
        "en": "Accumulation",
        "pos": "n.",
        "ipa": "/əˌkjuː.mjəˈleɪ.ʃən/",
        "vi": "Sự tích tụ, tích lũy",
        "ex": ""
    },
    {
        "num": 585,
        "en": "Synthetic",
        "pos": "adj.",
        "ipa": "/sɪnˈθet.ɪk/",
        "vi": "Tổng hợp, nhân tạo",
        "ex": ""
    },
    {
        "num": 586,
        "en": "Implement",
        "pos": "v.",
        "ipa": "/ˈɪm.plɪ.ment/",
        "vi": "Thi hành, thực thi (luật, kế hoạch)",
        "ex": ""
    },
    {
        "num": 587,
        "en": "Severe",
        "pos": "adj.",
        "ipa": "/sɪˈvɪə/",
        "vi": "Nghiêm trọng, khốc liệt",
        "ex": ""
    },
    {
        "num": 588,
        "en": "Break down from",
        "pos": "phr. v.",
        "ipa": "/breɪk daʊn frəm/",
        "vi": "Phân huỷ, vỡ ra từ",
        "ex": ""
    },
    {
        "num": 589,
        "en": "A less visible threat",
        "pos": "n. phr.",
        "ipa": "/ə les ˈvɪz.ə.bəl θret/",
        "vi": "Mối đe dọa ít rõ ràng hơn",
        "ex": ""
    },
    {
        "num": 590,
        "en": "Item / Thing",
        "pos": "n.",
        "ipa": "/ˈaɪ.təm/ - /θɪŋ/",
        "vi": "Món đồ, vật dụng",
        "ex": ""
    },
    {
        "num": 591,
        "en": "Microplastics",
        "pos": "n.",
        "ipa": "/ˌmaɪ.krəʊˈplæs.tɪks/",
        "vi": "Hạt vi nhựa",
        "ex": ""
    },
    {
        "num": 592,
        "en": "Mistake",
        "pos": "v., n.",
        "ipa": "/mɪˈsteɪk/",
        "vi": "Nhầm lẫn / Lỗi lầm",
        "ex": ""
    },
    {
        "num": 593,
        "en": "Tiny",
        "pos": "adj.",
        "ipa": "/ˈtaɪ.ni/",
        "vi": "Nhỏ xíu",
        "ex": ""
    },
    {
        "num": 594,
        "en": "Piece",
        "pos": "n.",
        "ipa": "/piːs/",
        "vi": "Mảnh, mẩu",
        "ex": ""
    },
    {
        "num": 595,
        "en": "Address",
        "pos": "v.",
        "ipa": "/əˈdres/",
        "vi": "Giải quyết (vấn đề)",
        "ex": ""
    },
    {
        "num": 596,
        "en": "Solve",
        "pos": "v.",
        "ipa": "/sɒlv/",
        "vi": "Giải quyết",
        "ex": ""
    },
    {
        "num": 597,
        "en": "Deepest",
        "pos": "adj.",
        "ipa": "/ˈdiː.pɪst/",
        "vi": "Sâu nhất",
        "ex": ""
    },
    {
        "num": 598,
        "en": "Ocean",
        "pos": "n.",
        "ipa": "/ˈəʊ.ʃən/",
        "vi": "Đại dương",
        "ex": ""
    },
    {
        "num": 599,
        "en": "Effort",
        "pos": "n.",
        "ipa": "/ˈef.ət/",
        "vi": "Sự nỗ lực",
        "ex": ""
    },
    {
        "num": 600,
        "en": "Marine animal",
        "pos": "n. phr.",
        "ipa": "/məˈriːn ˈæn.ɪ.məl/",
        "vi": "Động vật biển",
        "ex": ""
    },
    {
        "num": 601,
        "en": "Strict",
        "pos": "adj.",
        "ipa": "/strɪkt/",
        "vi": "Nghiêm ngặt",
        "ex": ""
    },
    {
        "num": 602,
        "en": "Exhaustion",
        "pos": "n.",
        "ipa": "/ɪɡˈzɔːs.tʃən/",
        "vi": "Sự kiệt sức",
        "ex": ""
    },
    {
        "num": 603,
        "en": "Struggle with",
        "pos": "phr. v.",
        "ipa": "/ˈstrʌɡ.əl wɪð/",
        "vi": "Gặp khó khăn với, chật vật với",
        "ex": ""
    },
    {
        "num": 604,
        "en": "Cycle",
        "pos": "n.",
        "ipa": "/ˈsaɪ.kəl/",
        "vi": "Vòng tròn, chu kỳ",
        "ex": ""
    },
    {
        "num": 605,
        "en": "Temptation",
        "pos": "n.",
        "ipa": "/tempˈteɪ.ʃən/",
        "vi": "Sự cám dỗ",
        "ex": ""
    },
    {
        "num": 606,
        "en": "Chunk",
        "pos": "n.",
        "ipa": "/tʃʌŋk/",
        "vi": "Khối, phần lớn",
        "ex": ""
    },
    {
        "num": 607,
        "en": "Effective",
        "pos": "adj.",
        "ipa": "/ɪˈfek.tɪv/",
        "vi": "Có hiệu quả",
        "ex": ""
    },
    {
        "num": 608,
        "en": "Pomodoro Technique",
        "pos": "n. phr.",
        "ipa": "/ˌpɒm.əˈdɔː.rəʊ tekˈniːk/",
        "vi": "Phương pháp Pomodoro (quản lý thời gian)",
        "ex": ""
    },
    {
        "num": 609,
        "en": "Interruption",
        "pos": "n.",
        "ipa": "/ˌɪn.təˈrʌp.ʃən/",
        "vi": "Sự gián đoạn",
        "ex": ""
    },
    {
        "num": 610,
        "en": "Workload",
        "pos": "n.",
        "ipa": "/ˈwɜːk.ləʊd/",
        "vi": "Khối lượng công việc",
        "ex": ""
    },
    {
        "num": 611,
        "en": "Boost",
        "pos": "v., n.",
        "ipa": "/buːst/",
        "vi": "Tăng cường, thúc đẩy / Sự tăng cường",
        "ex": ""
    },
    {
        "num": 612,
        "en": "Overall",
        "pos": "adj., adv.",
        "ipa": "/ˌəʊ.vəˈrɔːl/",
        "vi": "Toàn diện, tổng thể",
        "ex": ""
    },
    {
        "num": 613,
        "en": "Fulfillment",
        "pos": "n.",
        "ipa": "/fʊlˈfɪl.mənt/",
        "vi": "Sự mãn nguyện, thỏa mãn (về tinh thần)",
        "ex": ""
    },
    {
        "num": 614,
        "en": "Evaluate",
        "pos": "v.",
        "ipa": "/ɪˈvæl.ju.eɪt/",
        "vi": "Đánh giá, định duyệt",
        "ex": ""
    },
    {
        "num": 615,
        "en": "Intersection",
        "pos": "n.",
        "ipa": "/ˌɪn.təˈsek.ʃən/",
        "vi": "Điểm giao thoa, sự cắt nhau (ngã tư)",
        "ex": ""
    },
    {
        "num": 616,
        "en": "Element",
        "pos": "n.",
        "ipa": "/ˈel.ɪ.mənt/",
        "vi": "Yếu tố",
        "ex": ""
    },
    {
        "num": 617,
        "en": "Feel lost",
        "pos": "phr.",
        "ipa": "/fiːl lɒst/",
        "vi": "Cảm thấy lạc lối",
        "ex": ""
    },
    {
        "num": 618,
        "en": "Reflect on",
        "pos": "phr. v.",
        "ipa": "/rɪˈflekt ɒn/",
        "vi": "Suy ngẫm về, phản ánh",
        "ex": ""
    },
    {
        "num": 619,
        "en": "Pursue",
        "pos": "v.",
        "ipa": "/pəˈsjuː/",
        "vi": "Theo đuổi",
        "ex": ""
    },
    {
        "num": 620,
        "en": "Purpose",
        "pos": "n.",
        "ipa": "/ˈpɜː.pəs/",
        "vi": "Mục đích, ý nghĩa",
        "ex": ""
    },
    {
        "num": 621,
        "en": "A reason for being",
        "pos": "n. phr.",
        "ipa": "/ə ˈriː.zən fɔː ˈbiː.ɪŋ/",
        "vi": "Một lý do để tồn tại",
        "ex": ""
    },
    {
        "num": 622,
        "en": "Translate",
        "pos": "v.",
        "ipa": "/trænzˈleɪt/",
        "vi": "Dịch",
        "ex": ""
    },
    {
        "num": 623,
        "en": "Deep sense of",
        "pos": "phr.",
        "ipa": "/diːp sens əv/",
        "vi": "Cảm giác sâu sắc về",
        "ex": ""
    },
    {
        "num": 624,
        "en": "Meaningful",
        "pos": "adj.",
        "ipa": "/ˈmiː.nɪŋ.fəl/",
        "vi": "Có ý nghĩa",
        "ex": ""
    },
    {
        "num": 625,
        "en": "Path",
        "pos": "n.",
        "ipa": "/pɑːθ/",
        "vi": "Con đường",
        "ex": ""
    },
    {
        "num": 626,
        "en": "Alternative",
        "pos": "n., adj.",
        "ipa": "/ɒlˈtɜː.nə.tɪv/",
        "vi": "Sự thay thế (lựa chọn khác)",
        "ex": ""
    },
    {
        "num": 627,
        "en": "Stimulating",
        "pos": "adj.",
        "ipa": "/ˈstɪm.jə.leɪ.tɪŋ/",
        "vi": "Kích thích (tư duy), thú vị",
        "ex": ""
    },
    {
        "num": 628,
        "en": "Impairment",
        "pos": "n.",
        "ipa": "/ɪmˈpeə.mənt/",
        "vi": "Sự khiếm khuyết, suy yếu",
        "ex": ""
    },
    {
        "num": 629,
        "en": "Offer",
        "pos": "v.",
        "ipa": "/ˈɒf.ə/",
        "vi": "Cung cấp, đưa ra",
        "ex": ""
    },
    {
        "num": 630,
        "en": "Surge",
        "pos": "v., n.",
        "ipa": "/sɜːdʒ/",
        "vi": "Tăng vọt / Sự tăng vọt",
        "ex": ""
    },
    {
        "num": 631,
        "en": "Household chores",
        "pos": "n. phr.",
        "ipa": "/ˈhaʊs.həʊld tʃɔːz/",
        "vi": "Việc nhà",
        "ex": ""
    },
    {
        "num": 632,
        "en": "Particularly",
        "pos": "adv.",
        "ipa": "/pəˈtɪk.jə.lə.li/",
        "vi": "Cụ thể, đặc biệt",
        "ex": ""
    },
    {
        "num": 633,
        "en": "Argue",
        "pos": "v.",
        "ipa": "/ˈɑːɡ.juː/",
        "vi": "Tranh luận",
        "ex": ""
    },
    {
        "num": 634,
        "en": "Far more accessible",
        "pos": "phr.",
        "ipa": "/fɑː mɔːr əkˈses.ə.bəl/",
        "vi": "Dễ tiếp cận hơn nhiều",
        "ex": ""
    },
    {
        "num": 635,
        "en": "Intellectually",
        "pos": "adv.",
        "ipa": "/ˌɪn.təlˈek.tʃu.ə.li/",
        "vi": "Về mặt trí tuệ",
        "ex": ""
    },
    {
        "num": 636,
        "en": "Activate",
        "pos": "v.",
        "ipa": "/ˈæk.tɪ.veɪt/",
        "vi": "Kích hoạt",
        "ex": ""
    },
    {
        "num": 637,
        "en": "Obsolete",
        "pos": "adj.",
        "ipa": "/ˌɒb.səlˈiːt/",
        "vi": "Lỗi thời, không còn được sử dụng",
        "ex": ""
    },
    {
        "num": 638,
        "en": "Old-fashioned",
        "pos": "adj.",
        "ipa": "/ˌəʊldˈfæʃ.ənd/",
        "vi": "Cũ, lỗi thời",
        "ex": ""
    },
    {
        "num": 639,
        "en": "Inevitable",
        "pos": "adj.",
        "ipa": "/ɪˈnev.ɪ.tə.bəl/",
        "vi": "Không thể tránh khỏi, tất yếu",
        "ex": ""
    },
    {
        "num": 640,
        "en": "Evolution",
        "pos": "n.",
        "ipa": "/ˌiː.vəˈluː.ʃən/",
        "vi": "Sự tiến hóa",
        "ex": ""
    },
    {
        "num": 641,
        "en": "Reluctance",
        "pos": "n.",
        "ipa": "/rɪˈlʌk.təns/",
        "vi": "Sự miễn cưỡng, lưỡng lự",
        "ex": ""
    },
    {
        "num": 642,
        "en": "Accelerate",
        "pos": "v.",
        "ipa": "/əkˈsel.ə.reɪt/",
        "vi": "Thúc đẩy, làm nhanh hơn",
        "ex": ""
    },
    {
        "num": 643,
        "en": "Static",
        "pos": "adj.",
        "ipa": "/ˈstæt.ɪk/",
        "vi": "Tĩnh, không thay đổi",
        "ex": ""
    },
    {
        "num": 644,
        "en": "Constantly",
        "pos": "adv.",
        "ipa": "/ˈkɒn.stənt.li/",
        "vi": "Liên tục",
        "ex": ""
    },
    {
        "num": 645,
        "en": "Dictionary",
        "pos": "n.",
        "ipa": "/ˈdɪk.ʃən.ər.i/",
        "vi": "Từ điển",
        "ex": ""
    },
    {
        "num": 646,
        "en": "Gradually",
        "pos": "adv.",
        "ipa": "/ˈɡrædʒ.u.ə.li/",
        "vi": "Dần dần",
        "ex": ""
    },
    {
        "num": 647,
        "en": "Rise",
        "pos": "v., n.",
        "ipa": "/raɪz/",
        "vi": "Tăng lên / Sự tăng lên",
        "ex": ""
    },
    {
        "num": 648,
        "en": "Slang",
        "pos": "n.",
        "ipa": "/slæŋ/",
        "vi": "Tiếng lóng",
        "ex": ""
    },
    {
        "num": 649,
        "en": "Abbreviation",
        "pos": "n.",
        "ipa": "/əˌbriː.viˈeɪ.ʃən/",
        "vi": "Từ viết tắt",
        "ex": ""
    },
    {
        "num": 650,
        "en": "In a matter of",
        "pos": "phr.",
        "ipa": "/ɪn ə ˈmæt.ər əv/",
        "vi": "Chỉ trong vòng",
        "ex": ""
    },
    {
        "num": 651,
        "en": "Linguist",
        "pos": "n.",
        "ipa": "/ˈlɪŋ.ɡwɪst/",
        "vi": "Nhà ngôn ngữ học",
        "ex": ""
    },
    {
        "num": 652,
        "en": "Alive",
        "pos": "adj.",
        "ipa": "/əˈlaɪv/",
        "vi": "Còn sống, tồn tại, sống động",
        "ex": ""
    },
    {
        "num": 653,
        "en": "Cultural identity",
        "pos": "n.",
        "ipa": "/ˈkʌl.tʃər.əl aɪˈden.tə.ti/",
        "vi": "Bản sắc văn hóa",
        "ex": ""
    },
    {
        "num": 654,
        "en": "Intricate tapestry",
        "pos": "n. phr.",
        "ipa": "/ˈɪn.trɪ.kət ˈtæp.ɪ.stri/",
        "vi": "Bức tranh đa dạng và đan xen phức tạp",
        "ex": ""
    },
    {
        "num": 655,
        "en": "Indigenous traditions",
        "pos": "n. phr.",
        "ipa": "/ɪnˈdɪdʒ.ɪ.nəs trəˈdɪʃ.ənz/",
        "vi": "Các truyền thống bản địa",
        "ex": ""
    },
    {
        "num": 656,
        "en": "Filial piety",
        "pos": "n. phr.",
        "ipa": "/ˈfɪl.i.əl ˈpaɪ.ə.ti/",
        "vi": "Đạo hiếu / Lòng hiếu thảo",
        "ex": ""
    },
    {
        "num": 657,
        "en": "Social harmony",
        "pos": "n. phr.",
        "ipa": "/ˈsəʊ.ʃəl ˈhɑː.mə.ni/",
        "vi": "Sự hòa hợp xã hội",
        "ex": ""
    },
    {
        "num": 658,
        "en": "Close-knit",
        "pos": "adj.",
        "ipa": "/ˌkləʊsˈnɪt/",
        "vi": "Gắn bó khăng khít (dùng cho gia đình, cộng đồng)",
        "ex": ""
    },
    {
        "num": 659,
        "en": "Culinary artistry",
        "pos": "n. phr.",
        "ipa": "/ˈkʌl.ɪ.nər.i ˈɑː.tɪ.stri/",
        "vi": "Nghệ thuật ẩm thực",
        "ex": ""
    },
    {
        "num": 660,
        "en": "Captivating",
        "pos": "adj.",
        "ipa": "/ˈkæp.tɪ.veɪ.tɪŋ/",
        "vi": "Hấp dẫn, làm say đắm",
        "ex": ""
    },
    {
        "num": 661,
        "en": "Captivate",
        "pos": "v.",
        "ipa": "/ˈkæp.tɪ.veɪt/",
        "vi": "Thu hút, làm say đắm",
        "ex": ""
    },
    {
        "num": 662,
        "en": "Resilient",
        "pos": "adj.",
        "ipa": "/rɪˈzɪl.i.ənt/",
        "vi": "Kiên cường, có sức hồi phục mãnh liệt",
        "ex": ""
    },
    {
        "num": 663,
        "en": "Endure",
        "pos": "v.",
        "ipa": "/ɪnˈdʒʊə/",
        "vi": "Tồn tại với thời gian, chịu đựng",
        "ex": ""
    },
    {
        "num": 664,
        "en": "Enduring",
        "pos": "adj.",
        "ipa": "/ɪnˈdʒʊə.rɪŋ/",
        "vi": "Lâu dài, trường tồn, bền bỉ cùng thời gian",
        "ex": ""
    },
    {
        "num": 665,
        "en": "Reverence",
        "pos": "n.",
        "ipa": "/ˈrev.ər.əns/",
        "vi": "Sự tôn kính",
        "ex": ""
    },
    {
        "num": 666,
        "en": "At the heart of",
        "pos": "idiom",
        "ipa": "/ət ðə hɑːt əv/",
        "vi": "Ở cốt lõi, ở trung tâm của",
        "ex": ""
    },
    {
        "num": 667,
        "en": "Reflect",
        "pos": "v.",
        "ipa": "/rɪˈflekt/",
        "vi": "Phản ánh, được phản chiếu/thể hiện",
        "ex": ""
    },
    {
        "num": 668,
        "en": "Rooted in",
        "pos": "adj. phr.",
        "ipa": "/ˈruː.tɪd ɪn/",
        "vi": "Bám rễ, bắt nguồn từ",
        "ex": ""
    },
    {
        "num": 669,
        "en": "Civilization",
        "pos": "n.",
        "ipa": "/ˌsɪv.əl.aɪˈzeɪ.ʃən/",
        "vi": "Nền văn minh",
        "ex": ""
    },
    {
        "num": 670,
        "en": "A fusion of",
        "pos": "n. phr.",
        "ipa": "/ə ˈfjuː.ʒən əv/",
        "vi": "Sự hợp nhất của, sự giao thoa của",
        "ex": ""
    },
    {
        "num": 671,
        "en": "External influences",
        "pos": "n. phr.",
        "ipa": "/ɪkˈstɜː.nəl ˈɪn.flu.ənsɪz/",
        "vi": "Ảnh hưởng từ bên ngoài",
        "ex": ""
    },
    {
        "num": 672,
        "en": "Historical interactions",
        "pos": "n. phr.",
        "ipa": "/hɪˈstɒr.ɪ.kəl ˌɪn.təˈræk.ʃənz/",
        "vi": "Sự tương tác lịch sử",
        "ex": ""
    },
    {
        "num": 673,
        "en": "Geographical location",
        "pos": "n. phr.",
        "ipa": "/ˌdʒiː.əˈɡræf.ɪ.kəl ləʊˈkeɪ.ʃən/",
        "vi": "Vị trí địa lí",
        "ex": ""
    },
    {
        "num": 674,
        "en": "First and foremost",
        "pos": "adv. phr.",
        "ipa": "/fɜːst ənd ˈfɔː.məʊst/",
        "vi": "Đầu tiên và quan trọng nhất",
        "ex": ""
    },
    {
        "num": 675,
        "en": "Confucian values",
        "pos": "n. phr.",
        "ipa": "/kənˈfjuː.ʃən ˈvæl.juːz/",
        "vi": "Các giá trị Nho giáo",
        "ex": ""
    },
    {
        "num": 676,
        "en": "Pivotal role",
        "pos": "n. phr.",
        "ipa": "/ˈpɪv.ə.təl rəʊl/",
        "vi": "Vai trò then chốt / quan trọng",
        "ex": ""
    },
    {
        "num": 677,
        "en": "Hierarchical relationships",
        "pos": "n. phr.",
        "ipa": "/ˌhaɪəˈrɑː.kɪ.kəl rɪˈleɪ.ʃən.ʃɪps/",
        "vi": "Các mối quan hệ tôn ti trật tự / thứ bậc",
        "ex": ""
    },
    {
        "num": 678,
        "en": "Communal ritual",
        "pos": "n. phr.",
        "ipa": "/ˈkɒm.jə.nəl ˈrɪtʃ.u.əl/",
        "vi": "Nghi lễ cộng đồng / phong tục tập quán",
        "ex": ""
    },
    {
        "num": 679,
        "en": "Integral (to)",
        "pos": "adj.",
        "ipa": "/ˈɪn.tɪ.ɡrəl/",
        "vi": "Thiết yếu, không thể thiếu",
        "ex": ""
    },
    {
        "num": 680,
        "en": "Celebrate",
        "pos": "v.",
        "ipa": "/ˈsel.ə.breɪt/",
        "vi": "Tôn vinh, kỷ niệm",
        "ex": ""
    },
    {
        "num": 681,
        "en": "Cuisine",
        "pos": "n.",
        "ipa": "/kwɪˈziːn/",
        "vi": "Ẩm thực",
        "ex": ""
    },
    {
        "num": 682,
        "en": "Exquisite flavors",
        "pos": "n. phr.",
        "ipa": "/ɪkˈskwɪz.ɪt ˈfleɪ.vəz/",
        "vi": "Hương vị tinh tế / hảo hạng",
        "ex": ""
    },
    {
        "num": 683,
        "en": "Diversity",
        "pos": "n.",
        "ipa": "/daɪˈvɜː.sə.ti/",
        "vi": "Sự đa dạng",
        "ex": ""
    },
    {
        "num": 684,
        "en": "Regional variations",
        "pos": "n. phr.",
        "ipa": "/ˈriː.dʒən.əl ˌveə.riˈeɪ.ʃənz/",
        "vi": "Sự khác biệt/biến tấu theo vùng miền",
        "ex": ""
    },
    {
        "num": 685,
        "en": "Fragrant herbs",
        "pos": "n. phr.",
        "ipa": "/ˈfreɪ.ɡrənt hɜːbz/",
        "vi": "Rau thơm / gia vị có mùi thơm",
        "ex": ""
    },
    {
        "num": 686,
        "en": "Iconic dishes",
        "pos": "n. phr.",
        "ipa": "/aɪˈkɒn.ɪk ˈdɪʃ.ɪz/",
        "vi": "Món ăn đặc trưng / mang tính biểu tượng",
        "ex": ""
    },
    {
        "num": 687,
        "en": "Spring rolls",
        "pos": "n.",
        "ipa": "/sprɪŋ rəʊlz/",
        "vi": "Nem cuốn / gỏi cuốn / chả giò",
        "ex": ""
    },
    {
        "num": 688,
        "en": "Ingrained",
        "pos": "adj.",
        "ipa": "/ɪnˈɡreɪnd/",
        "vi": "Ăn sâu vào (tiềm thức, thói quen)",
        "ex": ""
    },
    {
        "num": 689,
        "en": "Artistic expressions",
        "pos": "n. phr.",
        "ipa": "/ɑːˈtɪs.tɪk ɪkˈspreʃ.ənz/",
        "vi": "Hình thức biểu đạt nghệ thuật",
        "ex": ""
    },
    {
        "num": 690,
        "en": "Water puppetry",
        "pos": "n.",
        "ipa": "/ˈwɔː.tə ˈpʌp.ɪ.tri/",
        "vi": "Múa rối nước",
        "ex": ""
    },
    {
        "num": 691,
        "en": "Thrive",
        "pos": "v.",
        "ipa": "/θraɪv/",
        "vi": "Phát triển mạnh mẽ, thịnh vượng",
        "ex": ""
    },
    {
        "num": 692,
        "en": "Alongside",
        "pos": "prep.",
        "ipa": "/əˌlɒŋˈsaɪd/",
        "vi": "Cùng với, sát cánh cùng",
        "ex": ""
    },
    {
        "num": 693,
        "en": "Contemporary",
        "pos": "adj.",
        "ipa": "/kənˈtem.pər.ər.i/",
        "vi": "Đương đại",
        "ex": ""
    },
    {
        "num": 694,
        "en": "Monument",
        "pos": "n.",
        "ipa": "/ˈmɒn.jə.mənt/",
        "vi": "Tượng đài, đài kỷ niệm, di tích",
        "ex": ""
    },
    {
        "num": 696,
        "en": "Graceful",
        "pos": "adj.",
        "ipa": "/ˈɡreɪs.fəl/",
        "vi": "Duyên dáng",
        "ex": ""
    },
    {
        "num": 697,
        "en": "Exemplify",
        "pos": "v.",
        "ipa": "/ɪɡˈzem.plɪ.faɪ/",
        "vi": "Trở thành ví dụ điển hình cho",
        "ex": ""
    },
    {
        "num": 698,
        "en": "Elegance",
        "pos": "n.",
        "ipa": "/ˈel.ɪ.ɡəns/",
        "vi": "Sự thanh lịch",
        "ex": ""
    },
    {
        "num": 699,
        "en": "Modesty",
        "pos": "n.",
        "ipa": "/ˈmɒd.ɪ.sti/",
        "vi": "Sự kín đáo, khiêm tốn",
        "ex": ""
    },
    {
        "num": 700,
        "en": "Symbolize",
        "pos": "v.",
        "ipa": "/ˈsɪm.bə.laɪz/",
        "vi": "Tượng trưng",
        "ex": ""
    },
    {
        "num": 701,
        "en": "Pride / Proud",
        "pos": "n. / adj.",
        "ipa": "/praɪd/ - /praʊd/",
        "vi": "Niềm tự hào / Cảm thấy tự hào",
        "ex": ""
    },
    {
        "num": 702,
        "en": "Urbanization",
        "pos": "n.",
        "ipa": "/ˌɜː.bən.aɪˈzeɪ.ʃən/",
        "vi": "Đô thị hoá",
        "ex": ""
    },
    {
        "num": 703,
        "en": "Modernization",
        "pos": "n.",
        "ipa": "/ˌmɒd.ən.aɪˈzeɪ.ʃən/",
        "vi": "Hiện đại hoá",
        "ex": ""
    },
    {
        "num": 704,
        "en": "Globalization",
        "pos": "n.",
        "ipa": "/ˌɡləʊ.bəl.aɪˈzeɪ.ʃən/",
        "vi": "Toàn cầu hoá",
        "ex": ""
    },
    {
        "num": 705,
        "en": "Adapt",
        "pos": "v.",
        "ipa": "/əˈdæpt/",
        "vi": "Thích nghi",
        "ex": ""
    },
    {
        "num": 706,
        "en": "Honor",
        "pos": "v. / n.",
        "ipa": "/ˈɒn.ə/",
        "vi": "Tôn vinh / Danh dự",
        "ex": ""
    },
    {
        "num": 707,
        "en": "Vibrant",
        "pos": "adj.",
        "ipa": "/ˈvaɪ.brənt/",
        "vi": "Sống động, rực rỡ",
        "ex": ""
    },
    {
        "num": 708,
        "en": "the employer",
        "pos": "n.",
        "ipa": "/ðə ɪmˈplɔɪ.ər/",
        "vi": "Người sử dụng lao động",
        "ex": ""
    },
    {
        "num": 709,
        "en": "résumé",
        "pos": "n.",
        "ipa": "/ˈrez.juː.meɪ/",
        "vi": "Sơ yếu lý lịch",
        "ex": ""
    },
    {
        "num": 710,
        "en": "an opportunity",
        "pos": "n.",
        "ipa": "/ən ˌɒp.əˈtjuː.nə.ti/",
        "vi": "Một cơ hội",
        "ex": ""
    },
    {
        "num": 711,
        "en": "demonstrate",
        "pos": "v.",
        "ipa": "/ˈdem.ən.streɪt/",
        "vi": "Chứng minh, thể hiện",
        "ex": ""
    },
    {
        "num": 712,
        "en": "flair",
        "pos": "n.",
        "ipa": "/fleər/",
        "vi": "Sự tinh tế, phong cách hoặc tài năng bẩm sinh",
        "ex": ""
    },
    {
        "num": 713,
        "en": "professional care",
        "pos": "n.",
        "ipa": "/prəˈfeʃ.ən.əl keər/",
        "vi": "Chăm sóc chuyên nghiệp",
        "ex": ""
    },
    {
        "num": 714,
        "en": "factual",
        "pos": "adj.",
        "ipa": "/ˈfæk.tʃu.əl/",
        "vi": "Dựa trên sự thật, mang tính thực tế",
        "ex": ""
    },
    {
        "num": 715,
        "en": "objective",
        "pos": "adj.",
        "ipa": "/əbˈdʒek.tɪv/",
        "vi": "Khách quan",
        "ex": ""
    },
    {
        "num": 716,
        "en": "brief",
        "pos": "adj.",
        "ipa": "/briːf/",
        "vi": "Ngắn gọn",
        "ex": ""
    },
    {
        "num": 717,
        "en": "interpret",
        "pos": "v.",
        "ipa": "/ɪnˈtɜː.prɪt/",
        "vi": "Diễn giải, giải thích",
        "ex": ""
    },
    {
        "num": 718,
        "en": "relate (relates)",
        "pos": "v.",
        "ipa": "/rɪˈleɪt/",
        "vi": "Liên quan",
        "ex": ""
    },
    {
        "num": 719,
        "en": "specific job",
        "pos": "n.",
        "ipa": "/spəˈsɪf.ɪk dʒɒb/",
        "vi": "Công việc cụ thể",
        "ex": ""
    },
    {
        "num": 720,
        "en": "relevant",
        "pos": "adj.",
        "ipa": "/ˈrel.ə.vənt/",
        "vi": "Liên quan",
        "ex": ""
    },
    {
        "num": 721,
        "en": "the letter",
        "pos": "n.",
        "ipa": "/ðə ˈlet.ər/",
        "vi": "Thư",
        "ex": ""
    },
    {
        "num": 722,
        "en": "letter of application",
        "pos": "n.",
        "ipa": "/ˈlet.ər əv ˌæp.lɪˈkeɪ.ʃən/",
        "vi": "Thư xin việc / Đơn xin việc",
        "ex": ""
    },
    {
        "num": 723,
        "en": "salesperson",
        "pos": "n.",
        "ipa": "/ˈseɪlzˌpɜː.sən/",
        "vi": "Người bán hàng",
        "ex": ""
    },
    {
        "num": 724,
        "en": "attract",
        "pos": "v.",
        "ipa": "/əˈtrækt/",
        "vi": "Thu hút",
        "ex": ""
    },
    {
        "num": 725,
        "en": "persuade",
        "pos": "v.",
        "ipa": "/pəˈsweɪd/",
        "vi": "Thuyết phục",
        "ex": ""
    },
    {
        "num": 726,
        "en": "grant",
        "pos": "v. / n.",
        "ipa": "/ɡrɑːnt/",
        "vi": "Chấp thuận, cho phép (phỏng vấn) / Khoản trợ cấp",
        "ex": ""
    },
    {
        "num": 727,
        "en": "explicitly",
        "pos": "adv.",
        "ipa": "/ɪkˈsplɪs.ɪt.li/",
        "vi": "Một cách rõ ràng, dứt khoát",
        "ex": ""
    },
    {
        "num": 728,
        "en": "emphasise",
        "pos": "v.",
        "ipa": "/ˈem.fə.saɪz/",
        "vi": "Nhấn mạnh",
        "ex": ""
    },
    {
        "num": 729,
        "en": "characteristic",
        "pos": "n.",
        "ipa": "/ˌkær.ək.təˈrɪs.tɪk/",
        "vi": "Đặc điểm, nét tính cách",
        "ex": ""
    },
    {
        "num": 730,
        "en": "ambition",
        "pos": "n.",
        "ipa": "/æmˈbɪʃ.ən/",
        "vi": "Hoài bão, khát vọng tiến thủ",
        "ex": ""
    },
    {
        "num": 731,
        "en": "modest",
        "pos": "adj.",
        "ipa": "/ˈmɒd.ɪst/",
        "vi": "Khiêm tốn",
        "ex": ""
    },
    {
        "num": 732,
        "en": "aggressive",
        "pos": "adj.",
        "ipa": "/əˈɡres.ɪv/",
        "vi": "Quá xông xáo, hiếu thắng",
        "ex": ""
    },
    {
        "num": 733,
        "en": "compliant",
        "pos": "adj.",
        "ipa": "/kəmˈplaɪ.ənt/",
        "vi": "Phục tùng, dễ bảo, tuân thủ",
        "ex": ""
    },
    {
        "num": 734,
        "en": "pat yourself (on the back)",
        "pos": "idiom",
        "ipa": "/pæt jɔːˈself ɒn ðə bæk/",
        "vi": "Tự mãn, tự vỗ ngực khen ngợi bản thân / vỗ về bản thân",
        "ex": ""
    },
    {
        "num": 735,
        "en": "sympathy",
        "pos": "n.",
        "ipa": "/ˈsɪm.pə.θi/",
        "vi": "Sự thương hại, sự cảm thông",
        "ex": ""
    },
    {
        "num": 736,
        "en": "dissatisfaction",
        "pos": "n.",
        "ipa": "/ˌdɪsˌsæt.ɪsˈfæk.ʃən/",
        "vi": "Sự bất mãn, sự không hài lòng",
        "ex": ""
    },
    {
        "num": 737,
        "en": "former",
        "pos": "adj.",
        "ipa": "/ˈfɔː.mər/",
        "vi": "Trước, cũ",
        "ex": ""
    },
    {
        "num": 738,
        "en": "broach (a subject)",
        "pos": "v.",
        "ipa": "/brəʊtʃ/",
        "vi": "Bắt đầu đề cập đến, mở lời thảo luận",
        "ex": ""
    },
    {
        "num": 739,
        "en": "indeed",
        "pos": "adv.",
        "ipa": "/ɪnˈdiːd/",
        "vi": "Thực vậy",
        "ex": ""
    },
    {
        "num": 740,
        "en": "a job advertisement",
        "pos": "n.",
        "ipa": "/ə dʒɒb ədˈvɜː.tɪs.mənt/",
        "vi": "Tin tuyển dụng",
        "ex": ""
    },
    {
        "num": 741,
        "en": "mention",
        "pos": "v.",
        "ipa": "/ˈmen.ʃən/",
        "vi": "Đề cập đến",
        "ex": ""
    },
    {
        "num": 742,
        "en": "advisable simply",
        "pos": "phrase",
        "ipa": "/ədˈvaɪ.zə.bəl ˈsɪm.pli/",
        "vi": "Đơn giản là nên làm",
        "ex": ""
    },
    {
        "num": 743,
        "en": "negotiable",
        "pos": "adj.",
        "ipa": "/nəˈɡəʊ.ʃi.ə.bəl/",
        "vi": "Có thể thương lượng",
        "ex": ""
    },
    {
        "num": 744,
        "en": "salary range",
        "pos": "n.",
        "ipa": "/ˈsæl.ər.i reɪndʒ/",
        "vi": "Khoản lương, khoảng lương",
        "ex": ""
    },
    {
        "num": 745,
        "en": "investigate",
        "pos": "v.",
        "ipa": "/ɪnˈves.tɪ.ɡeɪt/",
        "vi": "Tìm hiểu, nghiên cứu kỹ lưỡng, khảo sát",
        "ex": ""
    },
    {
        "num": 746,
        "en": "an application",
        "pos": "n.",
        "ipa": "/ən ˌæp.lɪˈkeɪ.ʃən/",
        "vi": "Đơn xin ứng tuyển",
        "ex": ""
    },
    {
        "num": 747,
        "en": "your field",
        "pos": "n.",
        "ipa": "/jɔːr fiːld/",
        "vi": "Lĩnh vực của bạn",
        "ex": ""
    },
    {
        "num": 748,
        "en": "possible",
        "pos": "adj.",
        "ipa": "/ˈpɒs.ə.bəl/",
        "vi": "Khả thi",
        "ex": ""
    },
    {
        "num": 749,
        "en": "the particular company",
        "pos": "n.",
        "ipa": "/ðə pəˈtɪk.jə.lər ˈkʌm.pə.ni/",
        "vi": "Một công ty cụ thể",
        "ex": ""
    },
    {
        "num": 750,
        "en": "deserve",
        "pos": "v.",
        "ipa": "/dɪˈzɜːv/",
        "vi": "Xứng đáng",
        "ex": ""
    },
    {
        "num": 751,
        "en": "reasonable",
        "pos": "adj.",
        "ipa": "/ˈriː.zən.ə.bəl/",
        "vi": "Hợp lí",
        "ex": ""
    }
];
