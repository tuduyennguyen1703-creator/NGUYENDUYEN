const vocabularyList = [
    {
        "num": 1,
        "en": "Social media",
        "vi": "n.",
        "ipa": "/ˌsəʊ.ʃəl ˈmiː.di.ə/",
        "pos": "Mạng xã hội",
        "ex": ""
    },
    {
        "num": 2,
        "en": "Platform",
        "vi": "n.",
        "ipa": "/ˈplæt.fɔːm/",
        "pos": "Nền tảng (mạng xã hội)",
        "ex": ""
    },
    {
        "num": 3,
        "en": "Way",
        "vi": "n.",
        "ipa": "/weɪ/",
        "pos": "Cách thức",
        "ex": ""
    },
    {
        "num": 4,
        "en": "Communicate",
        "vi": "v.",
        "ipa": "/kəˈmjuː.nɪ.keɪt/",
        "pos": "Giao tiếp",
        "ex": ""
    },
    {
        "num": 5,
        "en": "Stay connected",
        "vi": "phr.",
        "ipa": "/steɪ kəˈnek.tɪd/",
        "pos": "Giữ liên lạc",
        "ex": ""
    },
    {
        "num": 6,
        "en": "Nature",
        "vi": "n.",
        "ipa": "/ˈneɪ.tʃə/",
        "pos": "Bản chất",
        "ex": ""
    },
    {
        "num": 7,
        "en": "Scroll through one’s feeds",
        "vi": "phr.",
        "ipa": "/skrəʊl θruː wʌnz fiːdz/",
        "pos": "Lướt bảng tin",
        "ex": ""
    },
    {
        "num": 8,
        "en": "Lead to",
        "vi": "phr. v.",
        "ipa": "/liːd tuː/",
        "pos": "Dẫn đến, gây ra",
        "ex": ""
    },
    {
        "num": 9,
        "en": "Result in",
        "vi": "phr. v.",
        "ipa": "/rɪˈzʌlt ɪn/",
        "pos": "Dẫn đến, gây ra",
        "ex": ""
    },
    {
        "num": 10,
        "en": "Cause",
        "vi": "v.",
        "ipa": "/kɔːz/",
        "pos": "Gây ra",
        "ex": ""
    },
    {
        "num": 11,
        "en": "A lack of",
        "vi": "phr.",
        "ipa": "/ə læk əv/",
        "pos": "Sự thiếu hụt",
        "ex": ""
    },
    {
        "num": 12,
        "en": "Productivity",
        "vi": "n.",
        "ipa": "/ˌprɒd.ʌkˈtɪv.ə.ti/",
        "pos": "Năng suất",
        "ex": ""
    },
    {
        "num": 13,
        "en": "Put at risk",
        "vi": "idiom",
        "ipa": "/pʊt ət rɪsk/",
        "pos": "Đặt vào tình trạng nguy hiểm",
        "ex": ""
    },
    {
        "num": 14,
        "en": "Connected",
        "vi": "adj.",
        "ipa": "/kəˈnek.tɪd/",
        "pos": "Kết nối",
        "ex": ""
    },
    {
        "num": 15,
        "en": "Addictive",
        "vi": "adj.",
        "ipa": "/əˈdɪk.tɪv/",
        "pos": "Gây nghiện",
        "ex": ""
    },
    {
        "num": 16,
        "en": "Privacy",
        "vi": "n.",
        "ipa": "/ˈprɪv.ə.si/",
        "pos": "Sự riêng tư",
        "ex": ""
    },
    {
        "num": 17,
        "en": "Responsibly",
        "vi": "adv.",
        "ipa": "/rɪˈspɒn.sə.bli/",
        "pos": "Một cách có trách nhiệm",
        "ex": ""
    },
    {
        "num": 18,
        "en": "Spend time/hours + V-ing",
        "vi": "struct.",
        "ipa": "/spend taɪm/ˈaʊ.əz/",
        "pos": "Dành thời gian làm gì",
        "ex": ""
    },
    {
        "num": 19,
        "en": "Stay fit",
        "vi": "phr.",
        "ipa": "/steɪ fɪt/",
        "pos": "Giữ vóc dáng",
        "ex": ""
    },
    {
        "num": 20,
        "en": "Energize",
        "vi": "v.",
        "ipa": "/ˈen.ə.dʒaɪz/",
        "pos": "Làm cho tràn đầy năng lượng",
        "ex": ""
    },
    {
        "num": 21,
        "en": "Include",
        "vi": "v.",
        "ipa": "/ɪnˈkluːd/",
        "pos": "Bao gồm, chứa đựng",
        "ex": ""
    },
    {
        "num": 22,
        "en": "Essential",
        "vi": "adj.",
        "ipa": "/ɪˈsen.ʃəl/",
        "pos": "Quan trọng, nền tảng",
        "ex": ""
    },
    {
        "num": 23,
        "en": "Basic",
        "vi": "adj.",
        "ipa": "/ˈbeɪ.sɪk/",
        "pos": "Căn bản, cơ bản",
        "ex": ""
    },
    {
        "num": 24,
        "en": "Function",
        "vi": "v.",
        "ipa": "/ˈfʌŋk.ʃən/",
        "pos": "Hoạt động, vận hành",
        "ex": ""
    },
    {
        "num": 25,
        "en": "Vital",
        "vi": "adj.",
        "ipa": "/ˈvaɪ.təl/",
        "pos": "Quan trọng (đóng vai trò sống còn)",
        "ex": ""
    },
    {
        "num": 26,
        "en": "Whole grain",
        "vi": "n.",
        "ipa": "/ˌhəʊl ˈɡreɪn/",
        "pos": "Hạt ngũ cốc nguyên hạt",
        "ex": ""
    },
    {
        "num": 27,
        "en": "Long-term",
        "vi": "adj.",
        "ipa": "/ˌlɒŋˈtɜːm/",
        "pos": "Lâu dài",
        "ex": ""
    },
    {
        "num": 28,
        "en": "Balanced diet",
        "vi": "n.",
        "ipa": "/ˌbæl.ənst ˈdaɪ.ət/",
        "pos": "Chế độ ăn cân bằng",
        "ex": ""
    },
    {
        "num": 29,
        "en": "Nutrients",
        "vi": "n.",
        "ipa": "/ˈnjuː.tri.ənts/",
        "pos": "Chất dinh dưỡng",
        "ex": ""
    },
    {
        "num": 30,
        "en": "Processed",
        "vi": "adj.",
        "ipa": "/ˈprəʊ.sest/",
        "pos": "Đã qua chế biến",
        "ex": ""
    },
    {
        "num": 31,
        "en": "Well-being",
        "vi": "n.",
        "ipa": "/ˌwelˈbiː.ɪŋ/",
        "pos": "Tình trạng sức khỏe, hạnh phúc",
        "ex": ""
    },
    {
        "num": 32,
        "en": "Health",
        "vi": "n.",
        "ipa": "/helθ/",
        "pos": "Sức khỏe",
        "ex": ""
    },
    {
        "num": 33,
        "en": "Play a vital role in",
        "vi": "idiom",
        "ipa": "/pleɪ ə ˈvaɪ.təl rəʊl ɪn/",
        "pos": "Đóng một vai trò quan trọng trong...",
        "ex": ""
    },
    {
        "num": 34,
        "en": "Rewarding",
        "vi": "adj.",
        "ipa": "/rɪˈwɔː.dɪŋ/",
        "pos": "Đáng công sức, bổ ích",
        "ex": ""
    },
    {
        "num": 35,
        "en": "Patient",
        "vi": "adj. / n.",
        "ipa": "/ˈpeɪ.ʃənt/",
        "pos": "Kiên nhẫn (tính từ) / Bệnh nhân (danh từ)",
        "ex": ""
    },
    {
        "num": 36,
        "en": "Patience",
        "vi": "n.",
        "ipa": "/ˈpeɪ.ʃəns/",
        "pos": "Sự kiên nhẫn",
        "ex": ""
    },
    {
        "num": 37,
        "en": "Harvest",
        "vi": "v. / n.",
        "ipa": "/ˈhɑː.vɪst/",
        "pos": "Thu hoạch / Vụ mùa",
        "ex": ""
    },
    {
        "num": 38,
        "en": "Bloom",
        "vi": "v.",
        "ipa": "/bluːm/",
        "pos": "Nở hoa",
        "ex": ""
    },
    {
        "num": 39,
        "en": "Taste",
        "vi": "v. / n.",
        "ipa": "/teɪst/",
        "pos": "Có mùi vị, nếm / Vị giác",
        "ex": ""
    },
    {
        "num": 40,
        "en": "As",
        "vi": "conj.",
        "ipa": "/æz/",
        "pos": "Như, vì, khi",
        "ex": ""
    },
    {
        "num": 41,
        "en": "Become",
        "vi": "v.",
        "ipa": "/bɪˈkʌm/",
        "pos": "Trở thành",
        "ex": ""
    },
    {
        "num": 42,
        "en": "Global warming",
        "vi": "n.",
        "ipa": "/ˌɡləʊ.bəl ˈwɔː.mɪŋ/",
        "pos": "Sự nóng lên toàn cầu",
        "ex": ""
    },
    {
        "num": 43,
        "en": "Ice caps",
        "vi": "n.",
        "ipa": "/ˈaɪs ˌkæps/",
        "pos": "Chỏm băng",
        "ex": ""
    },
    {
        "num": 44,
        "en": "Melt",
        "vi": "v.",
        "ipa": "/melt/",
        "pos": "Tan ra",
        "ex": ""
    },
    {
        "num": 45,
        "en": "Lose",
        "vi": "v.",
        "ipa": "/luːz/",
        "pos": "Mất đi",
        "ex": ""
    },
    {
        "num": 46,
        "en": "Habitats",
        "vi": "n.",
        "ipa": "/ˈhæb.ɪ.tæts/",
        "pos": "Môi trường sống",
        "ex": ""
    },
    {
        "num": 47,
        "en": "Environment",
        "vi": "n.",
        "ipa": "/ɪnˈvaɪ.rən.mənt/",
        "pos": "Môi trường sống",
        "ex": ""
    },
    {
        "num": 48,
        "en": "Sustainable",
        "vi": "adj.",
        "ipa": "/səˈsteɪ.nə.bəl/",
        "pos": "Bền vững",
        "ex": ""
    },
    {
        "num": 49,
        "en": "Carbon footprint",
        "vi": "n.",
        "ipa": "/ˌkɑː.bən ˈfʊt.prɪnt/",
        "pos": "Dấu chân carbon (lượng khí thải)",
        "ex": ""
    },
    {
        "num": 50,
        "en": "Counts",
        "vi": "v.",
        "ipa": "/kaʊnts/",
        "pos": "Có giá trị, quan trọng",
        "ex": ""
    },
    {
        "num": 51,
        "en": "Fight against",
        "vi": "phr. v.",
        "ipa": "/faɪt əˈɡeɪnst/",
        "pos": "Đấu tranh chống lại",
        "ex": ""
    },
    {
        "num": 52,
        "en": "Apply",
        "vi": "v.",
        "ipa": "/əˈplaɪ/",
        "pos": "Nộp đơn, áp dụng",
        "ex": ""
    },
    {
        "num": 53,
        "en": "First impression",
        "vi": "n.",
        "ipa": "/ˌfɜːst ɪmˈpreʃ.ən/",
        "pos": "Ấn tượng đầu tiên",
        "ex": ""
    },
    {
        "num": 54,
        "en": "Confident",
        "vi": "adj.",
        "ipa": "/ˈkɒn.fɪ.dənt/",
        "pos": "Tự tin",
        "ex": ""
    },
    {
        "num": 55,
        "en": "Qualifications",
        "vi": "n.",
        "ipa": "/ˌkwɒl.ɪ.fɪˈkeɪ.ʃəns/",
        "pos": "Bằng cấp, năng lực",
        "ex": ""
    },
    {
        "num": 56,
        "en": "Enthusiasm",
        "vi": "n.",
        "ipa": "/ɪnˈθjuː.zi.æz.əm/",
        "pos": "Sự nhiệt huyết",
        "ex": ""
    },
    {
        "num": 57,
        "en": "Professionally",
        "vi": "adv.",
        "ipa": "/prəˈfeʃ.ən.əl.i/",
        "pos": "Một cách chuyên nghiệp, trang trọng",
        "ex": ""
    },
    {
        "num": 58,
        "en": "Helpful",
        "vi": "adj.",
        "ipa": "/ˈhelp.fəl/",
        "pos": "Hữu ích",
        "ex": ""
    },
    {
        "num": 59,
        "en": "Beforehand",
        "vi": "adv.",
        "ipa": "/bɪˈfɔː.hænd/",
        "pos": "Trước đó (chuẩn bị trước)",
        "ex": ""
    },
    {
        "num": 60,
        "en": "Common",
        "vi": "adj.",
        "ipa": "/ˈkɒm.ən/",
        "pos": "Thông dụng, phổ biến",
        "ex": ""
    },
    {
        "num": 61,
        "en": "Popular",
        "vi": "adj.",
        "ipa": "/ˈpɒp.jə.lə/",
        "pos": "Phổ biến, được yêu thích",
        "ex": ""
    },
    {
        "num": 62,
        "en": "Famous",
        "vi": "adj.",
        "ipa": "/ˈfeɪ.məs/",
        "pos": "Nổi tiếng",
        "ex": ""
    },
    {
        "num": 63,
        "en": "Well-known",
        "vi": "adj.",
        "ipa": "/ˌwelˈnəʊn/",
        "pos": "Nổi tiếng, được biết đến rộng rãi",
        "ex": ""
    },
    {
        "num": 64,
        "en": "Ubiquitous",
        "vi": "adj.",
        "ipa": "/juːˈbɪk.wɪ.təs/",
        "pos": "Có mặt ở khắp nơi, rất phổ biến",
        "ex": ""
    },
    {
        "num": 65,
        "en": "During",
        "vi": "prep.",
        "ipa": "/ˈdʒʊə.rɪŋ/",
        "pos": "Trong khi",
        "ex": ""
    },
    {
        "num": 66,
        "en": "Highlight",
        "vi": "v.",
        "ipa": "/ˈhaɪ.laɪt/",
        "pos": "Nhấn mạnh, làm nổi bật",
        "ex": ""
    },
    {
        "num": 67,
        "en": "Role",
        "vi": "n.",
        "ipa": "/rəʊl/",
        "pos": "Vai trò",
        "ex": ""
    },
    {
        "num": 68,
        "en": "Efficient",
        "vi": "Adj",
        "ipa": "/ɪˈfɪʃnt/",
        "pos": "Hiệu quả, năng suất",
        "ex": ""
    },
    {
        "num": 69,
        "en": "Commuters",
        "vi": "N",
        "ipa": "/kəˈmjuːtərz/",
        "pos": "Người đi làm bằng PT công cộng",
        "ex": ""
    },
    {
        "num": 70,
        "en": "Subway",
        "vi": "N",
        "ipa": "/ˈsʌbweɪ/",
        "pos": "Tàu điện ngầm",
        "ex": ""
    },
    {
        "num": 71,
        "en": "Fees",
        "vi": "N",
        "ipa": "/fiːz/",
        "pos": "Phí, lệ phí",
        "ex": ""
    },
    {
        "num": 72,
        "en": "Parking",
        "vi": "N",
        "ipa": "/ˈpɑːrkɪŋ/",
        "pos": "Việc đậu xe, bãi đậu xe",
        "ex": ""
    },
    {
        "num": 73,
        "en": "Heavy traffic",
        "vi": "N phr",
        "ipa": "/ˈhɛvi ˈtræfɪk/",
        "pos": "Giao thông đông đúc, kẹt xe",
        "ex": ""
    },
    {
        "num": 74,
        "en": "Fuel",
        "vi": "N",
        "ipa": "/ˈfjuːəl/",
        "pos": "Nhiên liệu",
        "ex": ""
    },
    {
        "num": 75,
        "en": "Interactive",
        "vi": "Adj",
        "ipa": "/ˌɪntərˈæktɪv/",
        "pos": "Có tính tương tác",
        "ex": ""
    },
    {
        "num": 76,
        "en": "Exhibition",
        "vi": "N",
        "ipa": "/ˌɛksɪˈbɪʃn/",
        "pos": "Cuộc triển lãm",
        "ex": ""
    },
    {
        "num": 77,
        "en": "Entertaining",
        "vi": "Adj",
        "ipa": "/ˌɛntərˈteɪnɪŋ/",
        "pos": "Có tính giải trí",
        "ex": ""
    },
    {
        "num": 78,
        "en": "Informative",
        "vi": "Adj",
        "ipa": "/ɪnˈfɔːrmətɪv/",
        "pos": "Cung cấp nhiều thông tin",
        "ex": ""
    },
    {
        "num": 79,
        "en": "No longer",
        "vi": "Adv phr",
        "ipa": "/noʊ ˈlɔːŋɡər/",
        "pos": "Không còn",
        "ex": ""
    },
    {
        "num": 80,
        "en": "Object",
        "vi": "N",
        "ipa": "/ˈɒbdʒɪkt/",
        "pos": "Vật, vật thể",
        "ex": ""
    },
    {
        "num": 81,
        "en": "Engage",
        "vi": "V",
        "ipa": "/ɪnˈɡeɪdʒ/",
        "pos": "Thu hút, làm cho tham gia",
        "ex": ""
    },
    {
        "num": 82,
        "en": "Touchscreen",
        "vi": "N",
        "ipa": "/ˈtʌtʃskriːn/",
        "pos": "Màn hình cảm ứng",
        "ex": ""
    },
    {
        "num": 83,
        "en": "Feature",
        "vi": "N/V",
        "ipa": "/ˈfiːtʃər/",
        "pos": "Đặc tính, đặc trưng",
        "ex": ""
    },
    {
        "num": 84,
        "en": "Alike",
        "vi": "Adj/Adv",
        "ipa": "/əˈlaɪk/",
        "pos": "Giống nhau, cũng như vậy",
        "ex": ""
    },
    {
        "num": 85,
        "en": "Engage visitor",
        "vi": "V phr",
        "ipa": "/ɪnˈɡeɪdʒ ˈvɪzɪtər/",
        "pos": "Thu hút khách tham quan",
        "ex": ""
    },
    {
        "num": 86,
        "en": "Adult alike",
        "vi": "Phr",
        "ipa": "/əˈdʌlt əˈlaɪk/",
        "pos": "Tương tự đối với người lớn",
        "ex": ""
    },
    {
        "num": 87,
        "en": "Curious",
        "vi": "Adj",
        "ipa": "/ˈkjʊriəs/",
        "pos": "Tò mò",
        "ex": ""
    },
    {
        "num": 88,
        "en": "Explore",
        "vi": "V",
        "ipa": "/ɪkˈsplɔːr/",
        "pos": "Khám phá",
        "ex": ""
    },
    {
        "num": 89,
        "en": "Inspire",
        "vi": "V",
        "ipa": "/ɪnˈspaɪər/",
        "pos": "Truyền cảm hứng",
        "ex": ""
    },
    {
        "num": 90,
        "en": "Astronauts",
        "vi": "N",
        "ipa": "/ˈæstrənɔːts/",
        "pos": "Phi hành gia",
        "ex": ""
    },
    {
        "num": 91,
        "en": "Solutions",
        "vi": "N",
        "ipa": "/səˈluːʃnz/",
        "pos": "Giải pháp",
        "ex": ""
    },
    {
        "num": 92,
        "en": "Discoveries",
        "vi": "N",
        "ipa": "/dɪˈskʌvəriz/",
        "pos": "Sự khám phá, phát hiện",
        "ex": ""
    },
    {
        "num": 93,
        "en": "Space exploration",
        "vi": "N phr",
        "ipa": "/speɪs ˌɛkspləˈreɪʃn/",
        "pos": "Khám phá không gian",
        "ex": ""
    },
    {
        "num": 94,
        "en": "Discover",
        "vi": "V",
        "ipa": "/dɪˈskʌvər/",
        "pos": "Khám phá",
        "ex": ""
    },
    {
        "num": 95,
        "en": "Conduct",
        "vi": "V",
        "ipa": "/kənˈdʌkt/",
        "pos": "Thực hiện, tiến hành",
        "ex": ""
    },
    {
        "num": 96,
        "en": "Be impossible on",
        "vi": "Adj phr",
        "ipa": "/bi ɪmˈpɒsəbl ɒn/",
        "pos": "Không thể (về mặt nào đó)",
        "ex": ""
    },
    {
        "num": 97,
        "en": "Experiments",
        "vi": "N",
        "ipa": "/ɪkˈspɛrɪmənts/",
        "pos": "Thí nghiệm",
        "ex": ""
    },
    {
        "num": 98,
        "en": "Humanity",
        "vi": "N",
        "ipa": "/hjuːˈmænəti/",
        "pos": "Nhân loại, lòng nhân đạo",
        "ex": ""
    },
    {
        "num": 99,
        "en": "Community",
        "vi": "N",
        "ipa": "/kəˈmjuːnəti/",
        "pos": "Cộng đồng",
        "ex": ""
    },
    {
        "num": 100,
        "en": "Give back",
        "vi": "V phr",
        "ipa": "/ɡɪv bæk/",
        "pos": "Đóng góp, cống hiến",
        "ex": ""
    },
    {
        "num": 101,
        "en": "Valuable",
        "vi": "Adj",
        "ipa": "/ˈvæljuəbl/",
        "pos": "Có giá trị",
        "ex": ""
    },
    {
        "num": 102,
        "en": "Shelter",
        "vi": "N",
        "ipa": "/ˈʃɛltər/",
        "pos": "Nơi trú ẩn, nhà tình thương",
        "ex": ""
    },
    {
        "num": 103,
        "en": "Experience",
        "vi": "N/V",
        "ipa": "/ɪkˈspɪəriəns/",
        "pos": "Trải nghiệm, kinh nghiệm",
        "ex": ""
    },
    {
        "num": 104,
        "en": "Contribution",
        "vi": "N",
        "ipa": "/ˌkɒntrɪˈbjuːʃn/",
        "pos": "Sự đóng góp",
        "ex": ""
    },
    {
        "num": 105,
        "en": "Background",
        "vi": "N",
        "ipa": "/ˈbækɡraʊnd/",
        "pos": "Hoàn cảnh xuất thân",
        "ex": ""
    },
    {
        "num": 106,
        "en": "Supportive",
        "vi": "Adj",
        "ipa": "/səˈpɔːrtɪv/",
        "pos": "Có tính hỗ trợ, giúp đỡ",
        "ex": ""
    },
    {
        "num": 107,
        "en": "Even though",
        "vi": "Conj",
        "ipa": "/ˈiːvn ðoʊ/",
        "pos": "Mặc dù",
        "ex": ""
    },
    {
        "num": 108,
        "en": "Get paid",
        "vi": "V phr",
        "ipa": "/ɡɛt peɪd/",
        "pos": "Nhận lương, được trả tiền",
        "ex": ""
    },
    {
        "num": 109,
        "en": "Kinder",
        "vi": "Adj",
        "ipa": "/ˈkaɪndər/",
        "pos": "Tử tế hơn",
        "ex": ""
    },
    {
        "num": 110,
        "en": "Paid",
        "vi": "Adj",
        "ipa": "/peɪd/",
        "pos": "Có trả phí, được trả lương",
        "ex": ""
    },
    {
        "num": 111,
        "en": "Trends",
        "vi": "N",
        "ipa": "/trɛndz/",
        "pos": "Xu hướng",
        "ex": ""
    },
    {
        "num": 112,
        "en": "Refer to",
        "vi": "V phr",
        "ipa": "/rɪˈfɜːr tuː/",
        "pos": "Ám chỉ, nhắc đến",
        "ex": ""
    },
    {
        "num": 113,
        "en": "Latest",
        "vi": "Adj",
        "ipa": "/ˈleɪtɪst/",
        "pos": "Mới nhất, gần đây nhất",
        "ex": ""
    },
    {
        "num": 114,
        "en": "Impact",
        "vi": "N/V",
        "ipa": "/ˈɪmpækt/",
        "pos": "Tác động, ảnh hưởng",
        "ex": ""
    },
    {
        "num": 115,
        "en": "Stylish clothes",
        "vi": "N phr",
        "ipa": "/ˈstaɪlɪʃ kloʊðz/",
        "pos": "Quần áo hợp thời trang",
        "ex": ""
    },
    {
        "num": 116,
        "en": "Landfills",
        "vi": "N",
        "ipa": "/ˈlændfɪlz/",
        "pos": "Bãi rác, hố chôn rác",
        "ex": ""
    },
    {
        "num": 117,
        "en": "Price",
        "vi": "N",
        "ipa": "/praɪs/",
        "pos": "Giá cả",
        "ex": ""
    },
    {
        "num": 118,
        "en": "Low",
        "vi": "Adj",
        "ipa": "/loʊ/",
        "pos": "Thấp",
        "ex": ""
    },
    {
        "num": 119,
        "en": "End up",
        "vi": "V phr",
        "ipa": "/ɛnd ʌp/",
        "pos": "Kết cục là, kết thúc ở",
        "ex": ""
    },
    {
        "num": 120,
        "en": "Production",
        "vi": "N",
        "ipa": "/prəˈdʌkʃn/",
        "pos": "Sự sản xuất",
        "ex": ""
    },
    {
        "num": 121,
        "en": "Process",
        "vi": "N",
        "ipa": "/ˈproʊsɛs/",
        "pos": "Quy trình",
        "ex": ""
    },
    {
        "num": 122,
        "en": "Consumers",
        "vi": "N",
        "ipa": "/kənˈsuːmərz/",
        "pos": "Người tiêu dùng",
        "ex": ""
    },
    {
        "num": 123,
        "en": "Negative",
        "vi": "Adj",
        "ipa": "/ˈnɛɡətɪv/",
        "pos": "Tiêu cực",
        "ex": ""
    },
    {
        "num": 124,
        "en": "Remotely",
        "vi": "adv.",
        "ipa": "/rɪˈməʊt.li/",
        "pos": "Từ xa",
        "ex": ""
    },
    {
        "num": 125,
        "en": "Offer / Provide",
        "vi": "v.",
        "ipa": "/ˈɒf.ə/ /prəˈvaɪd/",
        "pos": "Cung cấp",
        "ex": ""
    },
    {
        "num": 126,
        "en": "Save money",
        "vi": "phr.",
        "ipa": "/seɪv ˈmʌn.i/",
        "pos": "Tiết kiệm tiền",
        "ex": ""
    },
    {
        "num": 127,
        "en": "Co-working spaces",
        "vi": "n.",
        "ipa": "/ˌkəʊˈwɜː.kɪŋ speɪ.sɪz/",
        "pos": "Không gian làm việc chung",
        "ex": ""
    },
    {
        "num": 128,
        "en": "Freedom",
        "vi": "n.",
        "ipa": "/ˈfriː.dəm/",
        "pos": "Sự tự do",
        "ex": ""
    },
    {
        "num": 129,
        "en": "Cost of living",
        "vi": "n. phr.",
        "ipa": "/kɒst əv ˈlɪv.ɪŋ/",
        "pos": "Chi phí sinh hoạt",
        "ex": ""
    },
    {
        "num": 130,
        "en": "A digital nomad",
        "vi": "n.",
        "ipa": "/ə ˌdɪdʒ.ɪ.təl ˈnəʊ.mæd/",
        "pos": "Dân du mục kĩ thuật số",
        "ex": ""
    },
    {
        "num": 131,
        "en": "Fixed office",
        "vi": "n. phr.",
        "ipa": "/fɪkst ˈɒf.ɪs/",
        "pos": "Văn phòng cố định",
        "ex": ""
    },
    {
        "num": 132,
        "en": "Knowledge",
        "vi": "n.",
        "ipa": "/ˈnɒl.ɪdʒ/",
        "pos": "Kiến thức",
        "ex": ""
    },
    {
        "num": 133,
        "en": "Whether",
        "vi": "conj.",
        "ipa": "/ˈweð.ə/",
        "pos": "Cho dù",
        "ex": ""
    },
    {
        "num": 134,
        "en": "Mystery",
        "vi": "adj., n.",
        "ipa": "/ˈmɪs.tər.i/",
        "pos": "Bí ẩn, tiểu thuyết trinh thám/bí ẩn",
        "ex": ""
    },
    {
        "num": 135,
        "en": "Make a habit",
        "vi": "phr.",
        "ipa": "/meɪk ə ˈhæb.ɪt/",
        "pos": "Tạo một thói quen",
        "ex": ""
    },
    {
        "num": 136,
        "en": "Expressions",
        "vi": "n.",
        "ipa": "/ɪkˈspreʃ.ənz/",
        "pos": "Thành ngữ, cách diễn đạt",
        "ex": ""
    },
    {
        "num": 137,
        "en": "Habit",
        "vi": "n.",
        "ipa": "/ˈhæb.ɪt/",
        "pos": "Thói quen",
        "ex": ""
    },
    {
        "num": 138,
        "en": "Improvement",
        "vi": "n.",
        "ipa": "/ɪmˈpruːv.mənt/",
        "pos": "Sự cải thiện",
        "ex": ""
    },
    {
        "num": 139,
        "en": "Imagination",
        "vi": "n.",
        "ipa": "/ɪˌmædʒ.ɪˈneɪ.ʃən/",
        "pos": "Trí tưởng tượng",
        "ex": ""
    },
    {
        "num": 140,
        "en": "Expand",
        "vi": "v.",
        "ipa": "/ɪkˈspænd/",
        "pos": "Mở rộng",
        "ex": ""
    },
    {
        "num": 141,
        "en": "Notice",
        "vi": "v.",
        "ipa": "/ˈnəʊ.tɪs/",
        "pos": "Để ý, nhận ra",
        "ex": ""
    },
    {
        "num": 142,
        "en": "Over time",
        "vi": "phr.",
        "ipa": "/ˌəʊ.və ˈtaɪm/",
        "pos": "Theo thời gian",
        "ex": ""
    },
    {
        "num": 143,
        "en": "Healthier",
        "vi": "adj.",
        "ipa": "/ˈhel.θi.ə/",
        "pos": "Lành mạnh hơn",
        "ex": ""
    },
    {
        "num": 144,
        "en": "Prefer",
        "vi": "v.",
        "ipa": "/prɪˈfɜː/",
        "pos": "Thích hơn",
        "ex": ""
    },
    {
        "num": 145,
        "en": "Prepare",
        "vi": "v.",
        "ipa": "/prɪˈpeə/",
        "pos": "Chuẩn bị",
        "ex": ""
    },
    {
        "num": 146,
        "en": "Generally",
        "vi": "adv.",
        "ipa": "/ˈdʒen.ər.əl.i/",
        "pos": "Nhìn chung",
        "ex": ""
    },
    {
        "num": 147,
        "en": "The amount of",
        "vi": "phr.",
        "ipa": "/ði əˈmaʊnt əv/",
        "pos": "Lượng...",
        "ex": ""
    },
    {
        "num": 148,
        "en": "Ingredients",
        "vi": "n.",
        "ipa": "/ɪnˈɡriː.di.ənts/",
        "pos": "Nguyên liệu",
        "ex": ""
    },
    {
        "num": 149,
        "en": "Even if",
        "vi": "phr.",
        "ipa": "/ˈiː.vən ɪf/",
        "pos": "Thậm chí, ngay cả khi",
        "ex": ""
    },
    {
        "num": 150,
        "en": "Follow",
        "vi": "v.",
        "ipa": "/ˈfɒl.əʊ/",
        "pos": "Theo dõi, làm theo",
        "ex": ""
    },
    {
        "num": 151,
        "en": "Plus",
        "vi": "adv.",
        "ipa": "/plʌs/",
        "pos": "Thêm vào, cộng với",
        "ex": ""
    },
    {
        "num": 152,
        "en": "Experiment",
        "vi": "v., n.",
        "ipa": "/ɪkˈsper.ɪ.mənt/",
        "pos": "Thử nghiệm, cuộc thí nghiệm",
        "ex": ""
    },
    {
        "num": 153,
        "en": "Beginner",
        "vi": "n.",
        "ipa": "/bɪˈɡɪn.ə/",
        "pos": "Người mới bắt đầu",
        "ex": ""
    },
    {
        "num": 154,
        "en": "Flavors",
        "vi": "n.",
        "ipa": "/ˈfleɪ.vəz/",
        "pos": "Hương vị",
        "ex": ""
    },
    {
        "num": 155,
        "en": "Simple recipes",
        "vi": "n. phr.",
        "ipa": "/ˈsɪm.pəl ˈres.ɪ.piz/",
        "pos": "Công thức nấu ăn đơn giản",
        "ex": ""
    },
    {
        "num": 156,
        "en": "Huge",
        "vi": "adj.",
        "ipa": "/hjuːdʒ/",
        "pos": "Lớn, khổng lồ",
        "ex": ""
    },
    {
        "num": 157,
        "en": "Virtual assistants",
        "vi": "n. phr.",
        "ipa": "/ˌvɜː.tʃu.əl əˈsɪs.tənts/",
        "pos": "Trợ lý ảo",
        "ex": ""
    },
    {
        "num": 158,
        "en": "Be concerned about",
        "vi": "phr.",
        "ipa": "/bi kənˈsɜːnd əˈbaʊt/",
        "pos": "Lo lắng về",
        "ex": ""
    },
    {
        "num": 159,
        "en": "Recommendations",
        "vi": "n.",
        "ipa": "/ˌrek.ə.menˈdeɪ.ʃənz/",
        "pos": "Sự đề xuất, gợi ý",
        "ex": ""
    },
    {
        "num": 160,
        "en": "Finance",
        "vi": "n.",
        "ipa": "/ˈfaɪ.næns/",
        "pos": "Tài chính",
        "ex": ""
    },
    {
        "num": 161,
        "en": "Evolve rapidly",
        "vi": "phr.",
        "ipa": "/ɪˈvɒlv ˈræp.ɪd.li/",
        "pos": "Phát triển nhanh chóng",
        "ex": ""
    },
    {
        "num": 162,
        "en": "Cooperation",
        "vi": "n.",
        "ipa": "/kəʊˌɒp.ərˈeɪ.ʃən/",
        "pos": "Sự hợp tác",
        "ex": ""
    },
    {
        "num": 163,
        "en": "Basketball",
        "vi": "n.",
        "ipa": "/ˈbɑː.skɪt.bɔːl/",
        "pos": "Bóng rổ",
        "ex": ""
    },
    {
        "num": 164,
        "en": "Physical health",
        "vi": "n. phr.",
        "ipa": "/ˈfɪz.ɪ.kəl helθ/",
        "pos": "Sức khoẻ thể chất",
        "ex": ""
    },
    {
        "num": 165,
        "en": "Mental health",
        "vi": "n. phr.",
        "ipa": "/ˈmen.təl helθ/",
        "pos": "Sức khoẻ tinh thần",
        "ex": ""
    },
    {
        "num": 166,
        "en": "Be part of",
        "vi": "phr.",
        "ipa": "/bi pɑːt əv/",
        "pos": "Tham gia, là một phần của",
        "ex": ""
    },
    {
        "num": 167,
        "en": "Effectively",
        "vi": "adv.",
        "ipa": "/ɪˈfek.tɪv.li/",
        "pos": "Một cách hiệu quả",
        "ex": ""
    },
    {
        "num": 168,
        "en": "Goal",
        "vi": "n.",
        "ipa": "/ɡəʊl/",
        "pos": "Mục tiêu",
        "ex": ""
    },
    {
        "num": 169,
        "en": "Discipline",
        "vi": "n.",
        "ipa": "/ˈdɪs.ə.plɪn/",
        "pos": "Kỷ luật",
        "ex": ""
    },
    {
        "num": 170,
        "en": "Attitude",
        "vi": "n.",
        "ipa": "/ˈæt.ɪ.tʃuːd/",
        "pos": "Thái độ",
        "ex": ""
    },
    {
        "num": 171,
        "en": "Leadership",
        "vi": "n.",
        "ipa": "/ˈliː.də.ʃɪp/",
        "pos": "Khả năng lãnh đạo",
        "ex": ""
    },
    {
        "num": 172,
        "en": "Achieve",
        "vi": "v.",
        "ipa": "/əˈtʃiːv/",
        "pos": "Đạt được",
        "ex": ""
    },
    {
        "num": 173,
        "en": "Fantastic",
        "vi": "adj.",
        "ipa": "/fænˈtæs.tɪk/",
        "pos": "Tuyệt vời",
        "ex": ""
    },
    {
        "num": 174,
        "en": "Handle",
        "vi": "v.",
        "ipa": "/ˈhæn.dəl/",
        "pos": "Xử lý, giải quyết",
        "ex": ""
    },
    {
        "num": 175,
        "en": "Communities",
        "vi": "n.",
        "ipa": "/kəˈmjuː.nə.tiz/",
        "pos": "Cộng đồng",
        "ex": ""
    },
    {
        "num": 176,
        "en": "Aim",
        "vi": "v.",
        "ipa": "/eɪm/",
        "pos": "Nhằm mục tiêu",
        "ex": ""
    },
    {
        "num": 177,
        "en": "Tourism",
        "vi": "n.",
        "ipa": "/ˈtʊə.rɪ.zəm/",
        "pos": "Ngành du lịch",
        "ex": ""
    },
    {
        "num": 178,
        "en": "Eco-friendly",
        "vi": "adj.",
        "ipa": "/ˌiː.kəʊˈfrend.li/",
        "pos": "Thân thiện với môi trường",
        "ex": ""
    },
    {
        "num": 179,
        "en": "Involve",
        "vi": "v.",
        "ipa": "/ɪnˈvɒlv/",
        "pos": "Bao gồm, liên quan đến",
        "ex": ""
    },
    {
        "num": 180,
        "en": "Rent",
        "vi": "v.",
        "ipa": "/rent/",
        "pos": "Thuê",
        "ex": ""
    },
    {
        "num": 181,
        "en": "Traveler / Tourist",
        "vi": "n.",
        "ipa": "/ˈtræv.əl.ə/ - /ˈtʊə.rɪst/",
        "pos": "Khách du lịch",
        "ex": ""
    },
    {
        "num": 182,
        "en": "Ensure",
        "vi": "v.",
        "ipa": "/ɪnˈʃɔː/",
        "pos": "Đảm bảo",
        "ex": ""
    },
    {
        "num": 183,
        "en": "Remain",
        "vi": "v.",
        "ipa": "/rɪˈmeɪn/",
        "pos": "Vẫn, duy trì",
        "ex": ""
    },
    {
        "num": 184,
        "en": "Local traditions",
        "vi": "n. phr.",
        "ipa": "/ˈləʊ.kəl trəˈdɪʃ.ənz/",
        "pos": "Truyền thống địa phương",
        "ex": ""
    },
    {
        "num": 185,
        "en": "Responsible",
        "vi": "adj.",
        "ipa": "/rɪˈspɒn.sə.bəl/",
        "pos": "Có trách nhiệm",
        "ex": ""
    },
    {
        "num": 186,
        "en": "Accommodation",
        "vi": "n.",
        "ipa": "/əˌkɒm.əˈdeɪ.ʃən/",
        "pos": "Chỗ ở",
        "ex": ""
    },
    {
        "num": 187,
        "en": "Encouraged",
        "vi": "adj., v.",
        "ipa": "/ɪnˈkʌr.ɪdʒd/",
        "pos": "Được động viên, thúc đẩy",
        "ex": ""
    },
    {
        "num": 188,
        "en": "Respect",
        "vi": "v., n.",
        "ipa": "/rɪˈspekt/",
        "pos": "Tôn trọng",
        "ex": ""
    },
    {
        "num": 189,
        "en": "Destinations",
        "vi": "n.",
        "ipa": "/ˌdes.tɪˈneɪ.ʃənz/",
        "pos": "Điểm đến",
        "ex": ""
    },
    {
        "num": 190,
        "en": "In the beginning",
        "vi": "phr.",
        "ipa": "/ɪn ðə bɪˈɡɪn.ɪŋ/",
        "pos": "Thời gian đầu",
        "ex": ""
    },
    {
        "num": 191,
        "en": "Regular",
        "vi": "adj.",
        "ipa": "/ˈreɡ.jə.lə/",
        "pos": "Thường xuyên, đều đặn",
        "ex": ""
    },
    {
        "num": 192,
        "en": "Form",
        "vi": "n.",
        "ipa": "/fɔːm/",
        "pos": "Hình thức",
        "ex": ""
    },
    {
        "num": 193,
        "en": "Self-expression",
        "vi": "n.",
        "ipa": "/ˌself.ɪkˈspreʃ.ən/",
        "pos": "Sự tự biểu đạt, thể hiện bản thân",
        "ex": ""
    },
    {
        "num": 194,
        "en": "Coordination",
        "vi": "n.",
        "ipa": "/kəʊˌɔː.dɪˈneɪ.ʃən/",
        "pos": "Sự phối hợp (tay mắt, vận động)",
        "ex": ""
    },
    {
        "num": 195,
        "en": "Progress",
        "vi": "n.",
        "ipa": "/ˈprəʊ.ɡres/",
        "pos": "Sự tiến triển, tiến bộ",
        "ex": ""
    },
    {
        "num": 196,
        "en": "Beverages",
        "vi": "n.",
        "ipa": "/ˈbev.ər.ɪdʒɪz/",
        "pos": "Đồ uống",
        "ex": ""
    },
    {
        "num": 197,
        "en": "Berries",
        "vi": "n.",
        "ipa": "/ˈber.iz/",
        "pos": "Quả mọng",
        "ex": ""
    },
    {
        "num": 198,
        "en": "Certain",
        "vi": "adj.",
        "ipa": "/ˈsɜː.tən/",
        "pos": "Nhất định",
        "ex": ""
    },
    {
        "num": 199,
        "en": "Energetic",
        "vi": "adj.",
        "ipa": "/ˌen.əˈdʒet.ɪk/",
        "pos": "Tràn đầy năng lượng",
        "ex": ""
    },
    {
        "num": 200,
        "en": "Industry",
        "vi": "n.",
        "ipa": "/ˈɪn.də.stri/",
        "pos": "Ngành công nghiệp",
        "ex": ""
    },
    {
        "num": 201,
        "en": "Agriculture",
        "vi": "n.",
        "ipa": "/ˈæɡ.rɪ.kʌl.tʃə/",
        "pos": "Nông nghiệp",
        "ex": ""
    },
    {
        "num": 202,
        "en": "Trade",
        "vi": "n.",
        "ipa": "/treɪd/",
        "pos": "Thương mại, giao thương",
        "ex": ""
    },
    {
        "num": 203,
        "en": "Global",
        "vi": "adj.",
        "ipa": "/ˈɡləʊ.bəl/",
        "pos": "Toàn cầu",
        "ex": ""
    },
    {
        "num": 204,
        "en": "Brewing",
        "vi": "n., v.",
        "ipa": "/ˈbruː.ɪŋ/",
        "pos": "Pha (trà, cà phê...)",
        "ex": ""
    },
    {
        "num": 205,
        "en": "Legend",
        "vi": "n.",
        "ipa": "/ˈledʒ.ənd/",
        "pos": "Huyền thoại, truyền thuyết",
        "ex": ""
    },
    {
        "num": 206,
        "en": "Goat herder",
        "vi": "n. phr.",
        "ipa": "/ɡəʊt ˈhɜː.də/",
        "pos": "Người chăn dê",
        "ex": ""
    },
    {
        "num": 207,
        "en": "Unique",
        "vi": "adj.",
        "ipa": "/juːˈniːk/",
        "pos": "Độc nhất",
        "ex": ""
    },
    {
        "num": 208,
        "en": "Cybersecurity",
        "vi": "n.",
        "ipa": "/ˌsaɪ.bə.sɪˈkjʊə.rə.ti/",
        "pos": "An ninh mạng",
        "ex": ""
    },
    {
        "num": 209,
        "en": "Guess",
        "vi": "v.",
        "ipa": "/ɡes/",
        "pos": "Đoán ra",
        "ex": ""
    },
    {
        "num": 210,
        "en": "Careful",
        "vi": "adj.",
        "ipa": "/ˈkeə.fəl/",
        "pos": "Cẩn thận",
        "ex": ""
    },
    {
        "num": 211,
        "en": "Ask for",
        "vi": "phr. v.",
        "ipa": "/ɑːsk fɔː/",
        "pos": "Yêu cầu, xin",
        "ex": ""
    },
    {
        "num": 212,
        "en": "Device / Equipment",
        "vi": "n.",
        "ipa": "/dɪˈvaɪs/ - /ɪˈkwɪp.mənt/",
        "pos": "Thiết bị",
        "ex": ""
    },
    {
        "num": 213,
        "en": "Passwords",
        "vi": "n.",
        "ipa": "/ˈpɑːs.wɜːdz/",
        "pos": "Mật khẩu",
        "ex": ""
    },
    {
        "num": 214,
        "en": "Be aware of",
        "vi": "phr.",
        "ipa": "/bi əˈweər əv/",
        "pos": "Nhận thức về",
        "ex": ""
    },
    {
        "num": 215,
        "en": "Phishing",
        "vi": "n.",
        "ipa": "/ˈfɪʃ.ɪŋ/",
        "pos": "Tấn công giả mạo (lừa đảo trực tuyến)",
        "ex": ""
    },
    {
        "num": 216,
        "en": "Updated",
        "vi": "adj.",
        "ipa": "/ʌpˈdeɪ.tɪd/",
        "pos": "Được cập nhật",
        "ex": ""
    },
    {
        "num": 217,
        "en": "Suspicious emails",
        "vi": "n. phr.",
        "ipa": "/səˈspɪʃ.əs ˈiː.meɪlz/",
        "pos": "Email đáng ngờ",
        "ex": ""
    },
    {
        "num": 218,
        "en": "Software",
        "vi": "n.",
        "ipa": "/ˈsɒft.weə/",
        "pos": "Phần mềm",
        "ex": ""
    },
    {
        "num": 219,
        "en": "Practice",
        "vi": "n.",
        "ipa": "/ˈpræk.tɪs/",
        "pos": "Thực hành, thói quen",
        "ex": ""
    },
    {
        "num": 220,
        "en": "Grow",
        "vi": "v.",
        "ipa": "/ɡrəʊ/",
        "pos": "Trồng, phát triển",
        "ex": ""
    },
    {
        "num": 221,
        "en": "Produce",
        "vi": "n., v.",
        "ipa": "/ˈprɒdʒ.uːs/ - /prəˈdʒuːs/",
        "pos": "Nông sản (n) / Sản xuất (v)",
        "ex": ""
    },
    {
        "num": 222,
        "en": "Sufficient",
        "vi": "adj.",
        "ipa": "/səˈfɪʃ.ənt/",
        "pos": "Đủ",
        "ex": ""
    },
    {
        "num": 223,
        "en": "Greener",
        "vi": "adj.",
        "ipa": "/ˈɡriː.nə/",
        "pos": "Xanh hơn",
        "ex": ""
    },
    {
        "num": 224,
        "en": "Self-sufficient",
        "vi": "adj.",
        "ipa": "/ˌself.səˈfɪʃ.ənt/",
        "pos": "Tự cung tự cấp",
        "ex": ""
    },
    {
        "num": 225,
        "en": "Urban",
        "vi": "adj.",
        "ipa": "/ˈɜː.bən/",
        "pos": "(Thuộc về) Đô thị",
        "ex": ""
    },
    {
        "num": 226,
        "en": "Rooftops",
        "vi": "n.",
        "ipa": "/ˈruːf.tɒps/",
        "pos": "Sân thượng, mái nhà",
        "ex": ""
    },
    {
        "num": 227,
        "en": "Distance",
        "vi": "n.",
        "ipa": "/ˈdɪs.təns/",
        "pos": "Khoảng cách",
        "ex": ""
    },
    {
        "num": 228,
        "en": "Travel",
        "vi": "v.",
        "ipa": "/ˈtræv.əl/",
        "pos": "Đi lại, di chuyển, vận chuyển",
        "ex": ""
    },
    {
        "num": 229,
        "en": "Logical",
        "vi": "adj.",
        "ipa": "/ˈlɒdʒ.ɪ.kəl/",
        "pos": "Hợp lý, có logic",
        "ex": ""
    },
    {
        "num": 230,
        "en": "Critical thinking",
        "vi": "n. phr.",
        "ipa": "/ˌkrɪt.ɪ.kəl ˈθɪŋ.kɪŋ/",
        "pos": "Tư duy phản biện",
        "ex": ""
    },
    {
        "num": 231,
        "en": "Evidence",
        "vi": "n.",
        "ipa": "/ˈev.ɪ.dəns/",
        "pos": "Bằng chứng",
        "ex": ""
    },
    {
        "num": 232,
        "en": "Ability",
        "vi": "n.",
        "ipa": "/əˈbɪl.ə.ti/",
        "pos": "Khả năng",
        "ex": ""
    },
    {
        "num": 233,
        "en": "Capable",
        "vi": "adj.",
        "ipa": "/ˈkeɪ.pə.bəl/",
        "pos": "Có khả năng",
        "ex": ""
    },
    {
        "num": 234,
        "en": "Perspective",
        "vi": "n.",
        "ipa": "/pəˈspek.tɪv/",
        "pos": "Góc nhìn, quan điểm",
        "ex": ""
    },
    {
        "num": 235,
        "en": "Make decisions",
        "vi": "phr.",
        "ipa": "/meɪk dɪˈsɪʒ.ənz/",
        "pos": "Đưa ra quyết định",
        "ex": ""
    },
    {
        "num": 236,
        "en": "Mislead",
        "vi": "v.",
        "ipa": "/ˌmɪsˈliːd/",
        "pos": "Dẫn dắt sai lệch, lừa dối",
        "ex": ""
    },
    {
        "num": 237,
        "en": "In the age of",
        "vi": "phr.",
        "ipa": "/ɪn ði eɪdʒ əv/",
        "pos": "Trong kỷ nguyên, trong thời đại",
        "ex": ""
    },
    {
        "num": 238,
        "en": "Than ever",
        "vi": "phr.",
        "ipa": "/ðæn ˈev.ə/",
        "pos": "Hơn bao giờ hết",
        "ex": ""
    },
    {
        "num": 239,
        "en": "Look for",
        "vi": "phr. v.",
        "ipa": "/lʊk fɔː/",
        "pos": "Tìm kiếm",
        "ex": ""
    },
    {
        "num": 240,
        "en": "Look at",
        "vi": "phr. v.",
        "ipa": "/lʊk ət/",
        "pos": "Nhìn vào",
        "ex": ""
    },
    {
        "num": 241,
        "en": "Analyze",
        "vi": "v.",
        "ipa": "/ˈæn.əl.aɪz/",
        "pos": "Phân tích",
        "ex": ""
    },
    {
        "num": 242,
        "en": "False",
        "vi": "adj.",
        "ipa": "/fɒls/",
        "pos": "Sai, giả mạo",
        "ex": ""
    },
    {
        "num": 243,
        "en": "Critical",
        "vi": "adj.",
        "ipa": "/ˈkrɪt.ɪ.kəl/",
        "pos": "Có tính phê bình, phản biện / Quan trọng",
        "ex": ""
    },
    {
        "num": 244,
        "en": "Disappear",
        "vi": "v.",
        "ipa": "/ˌdɪs.əˈpɪə/",
        "pos": "Biến mất",
        "ex": ""
    },
    {
        "num": 245,
        "en": "Be in danger",
        "vi": "phr.",
        "ipa": "/bi ɪn ˈdeɪn.dʒə/",
        "pos": "Đang trong tình trạng nguy hiểm",
        "ex": ""
    },
    {
        "num": 246,
        "en": "Pass down",
        "vi": "phr. v.",
        "ipa": "/pɑːs daʊn/",
        "pos": "Truyền lại (cho đời sau)",
        "ex": ""
    },
    {
        "num": 247,
        "en": "Item",
        "vi": "n.",
        "ipa": "/ˈaɪ.təm/",
        "pos": "Mặt hàng, đồ vật",
        "ex": ""
    },
    {
        "num": 248,
        "en": "Quality",
        "vi": "n.",
        "ipa": "/ˈkwɒl.ə.ti/",
        "pos": "Chất lượng",
        "ex": ""
    },
    {
        "num": 249,
        "en": "Quantity",
        "vi": "n.",
        "ipa": "/ˈkwɒn.tə.ti/",
        "pos": "Số lượng",
        "ex": ""
    },
    {
        "num": 250,
        "en": "Heritage",
        "vi": "n.",
        "ipa": "/ˈher.ɪ.tɪdʒ/",
        "pos": "Di sản",
        "ex": ""
    },
    {
        "num": 251,
        "en": "Artisan",
        "vi": "n.",
        "ipa": "/ˌɑː.tɪˈzæn/",
        "pos": "Nghệ nhân",
        "ex": ""
    },
    {
        "num": 252,
        "en": "Pottery",
        "vi": "n.",
        "ipa": "/ˈpɒt.ər.i/",
        "pos": "Đồ gốm",
        "ex": ""
    },
    {
        "num": 253,
        "en": "Weaving",
        "vi": "n.",
        "ipa": "/ˈwiː.vɪŋ/",
        "pos": "Sự dệt vải",
        "ex": ""
    },
    {
        "num": 254,
        "en": "Represent",
        "vi": "v.",
        "ipa": "/ˌrep.rɪˈzent/",
        "pos": "Đại diện",
        "ex": ""
    },
    {
        "num": 255,
        "en": "Mass-produced",
        "vi": "adj.",
        "ipa": "/ˌmæs.prəˈdʒuːst/",
        "pos": "Được sản xuất hàng loạt",
        "ex": ""
    },
    {
        "num": 256,
        "en": "Crafts",
        "vi": "n.",
        "ipa": "/krɑːfts/",
        "pos": "Đồ thủ công",
        "ex": ""
    },
    {
        "num": 257,
        "en": "Crisis",
        "vi": "n.",
        "ipa": "/ˈkraɪ.sɪs/",
        "pos": "Cuộc khủng hoảng",
        "ex": ""
    },
    {
        "num": 258,
        "en": "Emissions",
        "vi": "n.",
        "ipa": "/ɪˈmɪʃ.ənz/",
        "pos": "Khí thải",
        "ex": ""
    },
    {
        "num": 259,
        "en": "Initially",
        "vi": "adv.",
        "ipa": "/ɪˈnɪʃ.əl.i/",
        "pos": "Ban đầu",
        "ex": ""
    },
    {
        "num": 260,
        "en": "Switch to",
        "vi": "phr. v.",
        "ipa": "/swɪtʃ tuː/",
        "pos": "Chuyển đổi sang",
        "ex": ""
    },
    {
        "num": 261,
        "en": "Renewable sources",
        "vi": "n. phr.",
        "ipa": "/rɪˈnjuː.ə.bəl ˈsɔː.sɪz/",
        "pos": "Nguồn năng lượng tái tạo",
        "ex": ""
    },
    {
        "num": 262,
        "en": "Install",
        "vi": "v.",
        "ipa": "/ɪnˈstɔːl/",
        "pos": "Cài đặt, lắp đặt",
        "ex": ""
    },
    {
        "num": 263,
        "en": "Fossil",
        "vi": "n.",
        "ipa": "/ˈfɒs.əl/",
        "pos": "Hóa thạch",
        "ex": ""
    },
    {
        "num": 264,
        "en": "Harmful",
        "vi": "adj.",
        "ipa": "/ˈhɑːm.fəl/",
        "pos": "Có hại",
        "ex": ""
    },
    {
        "num": 265,
        "en": "Solar panel",
        "vi": "n. phr.",
        "ipa": "/ˌsəʊ.lə ˈpæn.əl/",
        "pos": "Tấm pin năng lượng mặt trời",
        "ex": ""
    },
    {
        "num": 266,
        "en": "Transition to",
        "vi": "phr. v.",
        "ipa": "/trænˈzɪʃ.ən tuː/",
        "pos": "Chuyển đổi, chuyển tiếp sang",
        "ex": ""
    },
    {
        "num": 267,
        "en": "In the long run",
        "vi": "idiom",
        "ipa": "/ɪn ðə lɒŋ rʌn/",
        "pos": "Về lâu dài",
        "ex": ""
    },
    {
        "num": 268,
        "en": "Toward",
        "vi": "prep.",
        "ipa": "/təˈwɔːd/",
        "pos": "Theo hướng, hướng tới",
        "ex": ""
    },
    {
        "num": 269,
        "en": "Companionship",
        "vi": "n.",
        "ipa": "/kəmˈpæn.jən.ʃɪp/",
        "pos": "Sự bầu bạn, tình bạn",
        "ex": ""
    },
    {
        "num": 270,
        "en": "Responsibility",
        "vi": "n.",
        "ipa": "/rɪˌspɒn.sɪˈbɪl.ə.ti/",
        "pos": "Trách nhiệm",
        "ex": ""
    },
    {
        "num": 271,
        "en": "Fresh air",
        "vi": "n. phr.",
        "ipa": "/freʃ eə/",
        "pos": "Không khí trong lành",
        "ex": ""
    },
    {
        "num": 272,
        "en": "Mental",
        "vi": "adj.",
        "ipa": "/ˈmen.təl/",
        "pos": "(Thuộc về) tinh thần",
        "ex": ""
    },
    {
        "num": 273,
        "en": "Own",
        "vi": "v.",
        "ipa": "/əʊn/",
        "pos": "Sở hữu",
        "ex": ""
    },
    {
        "num": 274,
        "en": "Loneliness",
        "vi": "n.",
        "ipa": "/ˈləʊn.li.nəs/",
        "pos": "Sự cô đơn",
        "ex": ""
    },
    {
        "num": 275,
        "en": "Groom",
        "vi": "v.",
        "ipa": "/ɡruːm/",
        "pos": "Tắm rửa, chải chuốt (cho thú cưng)",
        "ex": ""
    },
    {
        "num": 276,
        "en": "Take care of",
        "vi": "phr. v.",
        "ipa": "/teɪk keər əv/",
        "pos": "Chăm sóc",
        "ex": ""
    },
    {
        "num": 277,
        "en": "Stay active",
        "vi": "phr.",
        "ipa": "/steɪ ˈæk.tɪv/",
        "pos": "Duy trì sự năng động",
        "ex": ""
    },
    {
        "num": 278,
        "en": "Delay",
        "vi": "v.",
        "ipa": "/dɪˈleɪ/",
        "pos": "Trì hoãn",
        "ex": ""
    },
    {
        "num": 279,
        "en": "Task",
        "vi": "n.",
        "ipa": "/tɑːsk/",
        "pos": "Nhiệm vụ",
        "ex": ""
    },
    {
        "num": 280,
        "en": "Until",
        "vi": "conj., prep.",
        "ipa": "/ʌnˈtɪl/",
        "pos": "Cho đến khi",
        "ex": ""
    },
    {
        "num": 281,
        "en": "The last minute",
        "vi": "n. phr.",
        "ipa": "/ðə lɑːst ˈmɪn.ɪt/",
        "pos": "Phút cuối cùng",
        "ex": ""
    },
    {
        "num": 282,
        "en": "Set",
        "vi": "v.",
        "ipa": "/set/",
        "pos": "Thiết lập, đặt ra",
        "ex": ""
    },
    {
        "num": 283,
        "en": "Manageable",
        "vi": "adj.",
        "ipa": "/ˈmæn.ɪ.dʒə.bəl/",
        "pos": "Có thể quản lý/xử lý được",
        "ex": ""
    },
    {
        "num": 284,
        "en": "Clear deadlines",
        "vi": "n. phr.",
        "ipa": "/klɪə ˈded.laɪnz/",
        "pos": "Hạn chót rõ ràng",
        "ex": ""
    },
    {
        "num": 285,
        "en": "Once",
        "vi": "conj.",
        "ipa": "/wʌns/",
        "pos": "Khi, một khi",
        "ex": ""
    },
    {
        "num": 286,
        "en": "Maintain",
        "vi": "v.",
        "ipa": "/meɪnˈteɪn/",
        "pos": "Duy trì",
        "ex": ""
    },
    {
        "num": 287,
        "en": "Deadline",
        "vi": "n.",
        "ipa": "/ˈded.laɪn/",
        "pos": "Hạn chót",
        "ex": ""
    },
    {
        "num": 288,
        "en": "Focus",
        "vi": "n., v.",
        "ipa": "/ˈfəʊ.kəs/",
        "pos": "Sự tập trung / Tập trung",
        "ex": ""
    },
    {
        "num": 289,
        "en": "Procrastination",
        "vi": "n.",
        "ipa": "/prəˌkræs.tɪˈneɪ.ʃən/",
        "pos": "Sự trì hoãn",
        "ex": ""
    },
    {
        "num": 290,
        "en": "Overcome",
        "vi": "v.",
        "ipa": "/ˌəʊ.vəˈkʌm/",
        "pos": "Vượt qua",
        "ex": ""
    },
    {
        "num": 291,
        "en": "Distraction",
        "vi": "n.",
        "ipa": "/dɪˈstræk.ʃən/",
        "pos": "Sự xao nhãng, phiền nhiễu",
        "ex": ""
    },
    {
        "num": 292,
        "en": "Remove",
        "vi": "v.",
        "ipa": "/rɪˈmuːv/",
        "pos": "Loại bỏ",
        "ex": ""
    },
    {
        "num": 293,
        "en": "Break",
        "vi": "v.",
        "ipa": "/breɪk/",
        "pos": "Chia nhỏ, phá vỡ",
        "ex": ""
    },
    {
        "num": 294,
        "en": "Wildlife",
        "vi": "n.",
        "ipa": "/ˈwaɪld.laɪf/",
        "pos": "Động vật hoang dã",
        "ex": ""
    },
    {
        "num": 295,
        "en": "Various",
        "vi": "adj.",
        "ipa": "/ˈveə.ri.əs/",
        "pos": "Nhiều, đa dạng",
        "ex": ""
    },
    {
        "num": 296,
        "en": "Crucial",
        "vi": "adj.",
        "ipa": "/ˈkruː.ʃəl/",
        "pos": "Quan trọng, chủ yếu",
        "ex": ""
    },
    {
        "num": 297,
        "en": "Endangered",
        "vi": "adj.",
        "ipa": "/ɪnˈdeɪn.dʒəd/",
        "pos": "Đang gặp nguy hiểm, có nguy cơ tuyệt chủng",
        "ex": ""
    },
    {
        "num": 298,
        "en": "Follow the rules",
        "vi": "phr.",
        "ipa": "/ˈfɒl.əʊ ðə ruːlz/",
        "pos": "Tuân theo quy tắc",
        "ex": ""
    },
    {
        "num": 299,
        "en": "Leave behind",
        "vi": "phr. v.",
        "ipa": "/liːv bɪˈhaɪnd/",
        "pos": "Để lại, bỏ lại phía sau",
        "ex": ""
    },
    {
        "num": 300,
        "en": "Litter",
        "vi": "n.",
        "ipa": "/ˈlɪt.ə/",
        "pos": "Rác thải",
        "ex": ""
    },
    {
        "num": 301,
        "en": "Hiking",
        "vi": "n.",
        "ipa": "/ˈhaɪ.kɪŋ/",
        "pos": "Đi bộ đường dài",
        "ex": ""
    },
    {
        "num": 302,
        "en": "Conservation",
        "vi": "n.",
        "ipa": "/ˌkɒn.səˈveɪ.ʃən/",
        "pos": "Sự bảo tồn",
        "ex": ""
    },
    {
        "num": 303,
        "en": "Species",
        "vi": "n.",
        "ipa": "/ˈspiː.ʃiːz/",
        "pos": "Giống loài",
        "ex": ""
    },
    {
        "num": 304,
        "en": "Provide",
        "vi": "v.",
        "ipa": "/prəˈvaɪd/",
        "pos": "Cung cấp",
        "ex": ""
    },
    {
        "num": 305,
        "en": "Portable",
        "vi": "adj.",
        "ipa": "/ˈpɔː.tə.bəl/",
        "pos": "Có thể mang theo, di động",
        "ex": ""
    },
    {
        "num": 306,
        "en": "Convenience",
        "vi": "n.",
        "ipa": "/kənˈviː.ni.əns/",
        "pos": "Sự tiện lợi",
        "ex": ""
    },
    {
        "num": 307,
        "en": "Instantly",
        "vi": "adv.",
        "ipa": "/ˈɪn.stənt.li/",
        "pos": "Ngay lập tức",
        "ex": ""
    },
    {
        "num": 308,
        "en": "Carry",
        "vi": "v.",
        "ipa": "/ˈkær.i/",
        "pos": "Mang, vác",
        "ex": ""
    },
    {
        "num": 309,
        "en": "Device",
        "vi": "n.",
        "ipa": "/dɪˈvaɪs/",
        "pos": "Thiết bị",
        "ex": ""
    },
    {
        "num": 310,
        "en": "Appreciate",
        "vi": "v.",
        "ipa": "/əˈpriː.ʃi.eɪt/",
        "pos": "Đánh giá cao, trân trọng",
        "ex": ""
    },
    {
        "num": 311,
        "en": "Buy",
        "vi": "v.",
        "ipa": "/baɪ/",
        "pos": "Mua",
        "ex": ""
    },
    {
        "num": 312,
        "en": "Printed version",
        "vi": "n. phr.",
        "ipa": "/ˈprɪn.tɪd ˈvɜː.ʃən/",
        "pos": "Bản in",
        "ex": ""
    },
    {
        "num": 313,
        "en": "The feel of",
        "vi": "phr.",
        "ipa": "/ðə fiːl əv/",
        "pos": "Cảm giác của",
        "ex": ""
    },
    {
        "num": 314,
        "en": "Empathy",
        "vi": "n.",
        "ipa": "/ˈem.pə.θi/",
        "pos": "Sự thấu cảm",
        "ex": ""
    },
    {
        "num": 315,
        "en": "Colleague",
        "vi": "n.",
        "ipa": "/ˈkɒl.iːɡ/",
        "pos": "Đồng nghiệp",
        "ex": ""
    },
    {
        "num": 316,
        "en": "Be good at",
        "vi": "phr.",
        "ipa": "/bi ɡʊd ət/",
        "pos": "Giỏi về",
        "ex": ""
    },
    {
        "num": 317,
        "en": "Harmoniously",
        "vi": "adv.",
        "ipa": "/hɑːˈməʊ.ni.əs.li/",
        "pos": "Một cách hòa hợp, hài hòa",
        "ex": ""
    },
    {
        "num": 318,
        "en": "Positive",
        "vi": "adj.",
        "ipa": "/ˈpɒz.ə.tɪv/",
        "pos": "Tích cực",
        "ex": ""
    },
    {
        "num": 319,
        "en": "Emotional intelligence",
        "vi": "n. phr.",
        "ipa": "/ɪˈməʊ.ʃən.əl ɪnˈtel.ɪ.dʒəns/",
        "pos": "Trí tuệ cảm xúc (EQ)",
        "ex": ""
    },
    {
        "num": 320,
        "en": "As well as",
        "vi": "conj.",
        "ipa": "/əz wel əz/",
        "pos": "Cũng như, bên cạnh đó",
        "ex": ""
    },
    {
        "num": 321,
        "en": "Outlook",
        "vi": "n.",
        "ipa": "/ˈaʊt.lʊk/",
        "pos": "Triển vọng, góc nhìn",
        "ex": ""
    },
    {
        "num": 322,
        "en": "Ethical",
        "vi": "adj.",
        "ipa": "/ˈeθ.ɪ.kəl/",
        "pos": "Có đạo đức, đúng mực",
        "ex": ""
    },
    {
        "num": 323,
        "en": "Mean",
        "vi": "v.",
        "ipa": "/miːn/",
        "pos": "Có nghĩa là",
        "ex": ""
    },
    {
        "num": 324,
        "en": "Last",
        "vi": "v.",
        "ipa": "/lɑːst/",
        "pos": "Kéo dài (thời gian)",
        "ex": ""
    },
    {
        "num": 325,
        "en": "Organic",
        "vi": "adj.",
        "ipa": "/ɔːˈɡæn.ɪk/",
        "pos": "Hữu cơ",
        "ex": ""
    },
    {
        "num": 326,
        "en": "Durable",
        "vi": "adj.",
        "ipa": "/ˈdʒʊə.rə.bəl/",
        "pos": "Bền bỉ",
        "ex": ""
    },
    {
        "num": 327,
        "en": "Resources",
        "vi": "n.",
        "ipa": "/rɪˈzɔː.sɪz/",
        "pos": "Nguồn tài nguyên",
        "ex": ""
    },
    {
        "num": 328,
        "en": "Fair wages",
        "vi": "n. phr.",
        "ipa": "/feə ˈweɪ.dʒɪz/",
        "pos": "Tiền lương công bằng",
        "ex": ""
    },
    {
        "num": 329,
        "en": "Encourage",
        "vi": "v.",
        "ipa": "/ɪnˈkʌr.ɪdʒ/",
        "pos": "Động viên, khuyến khích",
        "ex": ""
    },
    {
        "num": 330,
        "en": "Invest",
        "vi": "v.",
        "ipa": "/ɪnˈvest/",
        "pos": "Đầu tư",
        "ex": ""
    },
    {
        "num": 331,
        "en": "Flexibility",
        "vi": "n.",
        "ipa": "/ˌflek.səˈbɪl.ə.ti/",
        "pos": "Sự linh hoạt",
        "ex": ""
    },
    {
        "num": 332,
        "en": "Professional",
        "vi": "adj.",
        "ipa": "/prəˈfeʃ.ən.əl/",
        "pos": "(Thuộc về) nghề nghiệp, chuyên nghiệp",
        "ex": ""
    },
    {
        "num": 333,
        "en": "Isolation",
        "vi": "n.",
        "ipa": "/ˌaɪ.səˈleɪ.ʃən/",
        "pos": "Sự cô lập",
        "ex": ""
    },
    {
        "num": 334,
        "en": "Communication tools",
        "vi": "n. phr.",
        "ipa": "/kəˌmjuː.nɪˈkeɪ.ʃən tuːlz/",
        "pos": "Công cụ giao tiếp",
        "ex": ""
    },
    {
        "num": 335,
        "en": "Routine",
        "vi": "n.",
        "ipa": "/ruːˈtiːn/",
        "pos": "Thói quen hàng ngày, lịch trình",
        "ex": ""
    },
    {
        "num": 336,
        "en": "Permanent",
        "vi": "adj.",
        "ipa": "/ˈpɜː.mə.nənt/",
        "pos": "Vĩnh viễn, lâu dài",
        "ex": ""
    },
    {
        "num": 337,
        "en": "Remote",
        "vi": "adj.",
        "ipa": "/rɪˈməʊt/",
        "pos": "Từ xa",
        "ex": ""
    },
    {
        "num": 338,
        "en": "Dedicated workspace",
        "vi": "n. phr.",
        "ipa": "/ˈded.ɪ.keɪ.tɪd ˈwɜːk.speɪs/",
        "pos": "Không gian làm việc riêng biệt, chuyên dụng",
        "ex": ""
    },
    {
        "num": 339,
        "en": "Distinguish",
        "vi": "v.",
        "ipa": "/dɪˈstɪŋ.ɡwɪʃ/",
        "pos": "Phân biệt",
        "ex": ""
    },
    {
        "num": 340,
        "en": "Set a clear routine",
        "vi": "phr.",
        "ipa": "/set ə klɪə ruːˈtiːn/",
        "pos": "Thiết lập một lịch trình rõ ràng",
        "ex": ""
    },
    {
        "num": 341,
        "en": "Accessible",
        "vi": "adj.",
        "ipa": "/əkˈses.ə.bəl/",
        "pos": "Có thể tiếp cận, truy cập",
        "ex": ""
    },
    {
        "num": 342,
        "en": "By",
        "vi": "prep.",
        "ipa": "/baɪ/",
        "pos": "Bằng cách, vào lúc (thời gian)",
        "ex": ""
    },
    {
        "num": 343,
        "en": "Entertainment",
        "vi": "n.",
        "ipa": "/ˌen.təˈteɪn.mənt/",
        "pos": "Sự giải trí",
        "ex": ""
    },
    {
        "num": 344,
        "en": "Public",
        "vi": "n.",
        "ipa": "/ˈpʌb.lɪk/",
        "pos": "Công chúng",
        "ex": ""
    },
    {
        "num": 345,
        "en": "Globally",
        "vi": "adv.",
        "ipa": "/ˈɡləʊ.bəl.i/",
        "pos": "Toàn cầu",
        "ex": ""
    },
    {
        "num": 346,
        "en": "Cautious",
        "vi": "adj.",
        "ipa": "/ˈkɔː.ʃəs/",
        "pos": "Thận trọng",
        "ex": ""
    },
    {
        "num": 347,
        "en": "Revolutionize",
        "vi": "v.",
        "ipa": "/ˌrev.əˈluː.ʃən.aɪz/",
        "pos": "Cách mạng hóa",
        "ex": ""
    },
    {
        "num": 348,
        "en": "Revolutionary",
        "vi": "adj.",
        "ipa": "/ˌrev.əˈluː.ʃən.ər.i/",
        "pos": "Mang tính cách mạng",
        "ex": ""
    },
    {
        "num": 349,
        "en": "World Wide Web",
        "vi": "n. phr.",
        "ipa": "/ˌwɜːld ˌwaɪd ˈweb/",
        "pos": "Mạng lưới toàn cầu",
        "ex": ""
    },
    {
        "num": 350,
        "en": "Forever",
        "vi": "adv.",
        "ipa": "/fəˈrev.ə/",
        "pos": "Mãi mãi",
        "ex": ""
    },
    {
        "num": 351,
        "en": "Researcher",
        "vi": "n.",
        "ipa": "/rɪˈsɜː.tʃə/",
        "pos": "Nhà nghiên cứu",
        "ex": ""
    },
    {
        "num": 352,
        "en": "Accuracy",
        "vi": "n.",
        "ipa": "/ˈæk.jə.rə.si/",
        "pos": "Sự chính xác",
        "ex": ""
    },
    {
        "num": 353,
        "en": "Relaxed",
        "vi": "adj.",
        "ipa": "/rɪˈlækst/",
        "pos": "Thư giãn",
        "ex": ""
    },
    {
        "num": 354,
        "en": "Immune system",
        "vi": "n. phr.",
        "ipa": "/ɪˈmjuːn ˌsɪs.təm/",
        "pos": "Hệ miễn dịch",
        "ex": ""
    },
    {
        "num": 355,
        "en": "Optimistic",
        "vi": "adj.",
        "ipa": "/ˌɒp.tɪˈmɪs.tɪk/",
        "pos": "Lạc quan",
        "ex": ""
    },
    {
        "num": 356,
        "en": "Social bond",
        "vi": "n. phr.",
        "ipa": "/ˈsəʊ.ʃəl bɒnd/",
        "pos": "Mối liên kết xã hội",
        "ex": ""
    },
    {
        "num": 357,
        "en": "Laughter",
        "vi": "n.",
        "ipa": "/ˈlɑːf.tə/",
        "pos": "Tiếng cười",
        "ex": ""
    },
    {
        "num": 358,
        "en": "Tend to",
        "vi": "phr. v.",
        "ipa": "/tend tuː/",
        "pos": "Có xu hướng, khuynh hướng",
        "ex": ""
    },
    {
        "num": 359,
        "en": "Release",
        "vi": "v.",
        "ipa": "/rɪˈliːs/",
        "pos": "Giải phóng, thải ra",
        "ex": ""
    },
    {
        "num": 360,
        "en": "Emit",
        "vi": "v.",
        "ipa": "/ɪˈmɪt/",
        "pos": "Phát ra, tỏa ra",
        "ex": ""
    },
    {
        "num": 361,
        "en": "Launch",
        "vi": "v.",
        "ipa": "/lɔːntʃ/",
        "pos": "Ra mắt, phóng",
        "ex": ""
    },
    {
        "num": 362,
        "en": "Strengthen",
        "vi": "v.",
        "ipa": "/ˈstreŋ.θən/",
        "pos": "Củng cố, làm mạnh thêm",
        "ex": ""
    },
    {
        "num": 363,
        "en": "Bond",
        "vi": "n.",
        "ipa": "/bɒnd/",
        "pos": "Sự liên kết",
        "ex": ""
    },
    {
        "num": 364,
        "en": "Even",
        "vi": "adv.",
        "ipa": "/ˈiː.vən/",
        "pos": "Thậm chí, ngay cả",
        "ex": ""
    },
    {
        "num": 365,
        "en": "Trend",
        "vi": "n.",
        "ipa": "/trend/",
        "pos": "Xu hướng",
        "ex": ""
    },
    {
        "num": 366,
        "en": "Affordable",
        "vi": "adj.",
        "ipa": "/əˈfɔː.də.bəl/",
        "pos": "Giá cả phải chăng",
        "ex": ""
    },
    {
        "num": 367,
        "en": "Considerate",
        "vi": "adj.",
        "ipa": "/kənˈsɪd.ər.ət/",
        "pos": "Biết quan tâm, chu đáo",
        "ex": ""
    },
    {
        "num": 368,
        "en": "Facilities",
        "vi": "n.",
        "ipa": "/fəˈsɪl.ə.tiz/",
        "pos": "Cơ sở vật chất, tiện nghi",
        "ex": ""
    },
    {
        "num": 369,
        "en": "Among",
        "vi": "prep.",
        "ipa": "/əˈmʌŋ/",
        "pos": "Ở giữa (nhiều người/vật)",
        "ex": ""
    },
    {
        "num": 370,
        "en": "Between",
        "vi": "prep.",
        "ipa": "/bɪˈtwiːn/",
        "pos": "Ở giữa (hai người/vật)",
        "ex": ""
    },
    {
        "num": 371,
        "en": "Especially",
        "vi": "adv.",
        "ipa": "/ɪˈspeʃ.əl.i/",
        "pos": "Đặc biệt là",
        "ex": ""
    },
    {
        "num": 372,
        "en": "Resident",
        "vi": "n.",
        "ipa": "/ˈrez.ɪ.dənt/",
        "pos": "Cư dân",
        "ex": ""
    },
    {
        "num": 373,
        "en": "Citizen",
        "vi": "n.",
        "ipa": "/ˈsɪt.ɪ.zən/",
        "pos": "Công dân",
        "ex": ""
    },
    {
        "num": 374,
        "en": "Inhabitant",
        "vi": "n.",
        "ipa": "/ɪnˈhæb.ɪ.tənt/",
        "pos": "Cư dân, người ở",
        "ex": ""
    },
    {
        "num": 375,
        "en": "Individual",
        "vi": "n.",
        "ipa": "/ˌɪn.dɪˈvɪdʒ.u.əl/",
        "pos": "Cá nhân",
        "ex": ""
    },
    {
        "num": 376,
        "en": "Arrangement",
        "vi": "n.",
        "ipa": "/əˈreɪndʒ.mənt/",
        "pos": "Sự sắp xếp",
        "ex": ""
    },
    {
        "num": 377,
        "en": "Respectful",
        "vi": "adj.",
        "ipa": "/rɪˈspekt.fəl/",
        "pos": "Tôn trọng, kính trọng",
        "ex": ""
    },
    {
        "num": 378,
        "en": "Common facilities",
        "vi": "n. phr.",
        "ipa": "/ˈkɒm.ən fəˈsɪl.ə.tiz/",
        "pos": "Tiện ích chung",
        "ex": ""
    },
    {
        "num": 379,
        "en": "Study",
        "vi": "v., n.",
        "ipa": "/ˈstʌd.i/",
        "pos": "Nghiên cứu, học tập",
        "ex": ""
    },
    {
        "num": 380,
        "en": "Vivid",
        "vi": "adj.",
        "ipa": "/ˈvɪv.ɪd/",
        "pos": "Sống động, rõ ràng",
        "ex": ""
    },
    {
        "num": 381,
        "en": "Insight",
        "vi": "n.",
        "ipa": "/ˈɪn.saɪt/",
        "pos": "Sự thấu hiểu, cái nhìn sâu sắc",
        "ex": ""
    },
    {
        "num": 382,
        "en": "Wake up",
        "vi": "phr. v.",
        "ipa": "/weɪk ʌp/",
        "pos": "Thức dậy",
        "ex": ""
    },
    {
        "num": 383,
        "en": "Subconscious mind",
        "vi": "n. phr.",
        "ipa": "/sʌbˈkɒn.ʃəs maɪnd/",
        "pos": "Tiềm thức",
        "ex": ""
    },
    {
        "num": 384,
        "en": "Fascinating",
        "vi": "adj.",
        "ipa": "/ˈfæs.ən.eɪ.tɪŋ/",
        "pos": "Lôi cuốn, hấp dẫn",
        "ex": ""
    },
    {
        "num": 385,
        "en": "Random",
        "vi": "adj.",
        "ipa": "/ˈræn.dəm/",
        "pos": "Ngẫu nhiên",
        "ex": ""
    },
    {
        "num": 386,
        "en": "Strange",
        "vi": "adj.",
        "ipa": "/streɪndʒ/",
        "pos": "Lạ lùng, kỳ lạ",
        "ex": ""
    },
    {
        "num": 387,
        "en": "Part of",
        "vi": "phr.",
        "ipa": "/pɑːt əv/",
        "pos": "Một phần của",
        "ex": ""
    },
    {
        "num": 388,
        "en": "Sculpture",
        "vi": "n.",
        "ipa": "/ˈskʌlp.tʃə/",
        "pos": "Tác phẩm điêu khắc, hình khối",
        "ex": ""
    },
    {
        "num": 389,
        "en": "Precision",
        "vi": "n.",
        "ipa": "/prɪˈsɪʒ.ən/",
        "pos": "Sự chính xác",
        "ex": ""
    },
    {
        "num": 390,
        "en": "Without",
        "vi": "prep.",
        "ipa": "/wɪˈðaʊt/",
        "pos": "Không có",
        "ex": ""
    },
    {
        "num": 391,
        "en": "Concentration",
        "vi": "n.",
        "ipa": "/ˌkɒn.sənˈtreɪ.ʃən/",
        "pos": "Sự tập trung",
        "ex": ""
    },
    {
        "num": 392,
        "en": "Worldwide",
        "vi": "adj., adv.",
        "ipa": "/ˌwɜːldˈwaɪd/",
        "pos": "Trên toàn thế giới",
        "ex": ""
    },
    {
        "num": 393,
        "en": "Art of paper folding",
        "vi": "n. phr.",
        "ipa": "/ɑːt əv ˈpeɪ.pə ˈfəʊl.dɪŋ/",
        "pos": "Nghệ thuật gấp giấy",
        "ex": ""
    },
    {
        "num": 394,
        "en": "Transform",
        "vi": "v.",
        "ipa": "/trænsˈfɔːm/",
        "pos": "Thay đổi, biến đổi",
        "ex": ""
    },
    {
        "num": 395,
        "en": "Flat square sheet",
        "vi": "n. phr.",
        "ipa": "/flæt skweə ʃiːt/",
        "pos": "Tờ giấy hình vuông phẳng",
        "ex": ""
    },
    {
        "num": 396,
        "en": "Scissors",
        "vi": "n.",
        "ipa": "/ˈsɪz.əz/",
        "pos": "Cái kéo",
        "ex": ""
    },
    {
        "num": 397,
        "en": "Glue",
        "vi": "n.",
        "ipa": "/ɡluː/",
        "pos": "Keo dán",
        "ex": ""
    },
    {
        "num": 398,
        "en": "Design",
        "vi": "n., v.",
        "ipa": "/dɪˈzaɪn/",
        "pos": "Thiết kế",
        "ex": ""
    },
    {
        "num": 399,
        "en": "Paper crane",
        "vi": "n. phr.",
        "ipa": "/ˈpeɪ.pə kreɪn/",
        "pos": "Hạc giấy",
        "ex": ""
    },
    {
        "num": 400,
        "en": "Fine motor skills",
        "vi": "n. phr.",
        "ipa": "/faɪn ˈməʊ.tə skɪlz/",
        "pos": "Kỹ năng vận động tinh",
        "ex": ""
    },
    {
        "num": 401,
        "en": "Emphasize",
        "vi": "v.",
        "ipa": "/ˈem.fə.saɪz/",
        "pos": "Nhấn mạnh",
        "ex": ""
    },
    {
        "num": 402,
        "en": "Life expectancy",
        "vi": "n. phr.",
        "ipa": "/ˈlaɪf ɪkˌspek.tən.si/",
        "pos": "Tuổi thọ",
        "ex": ""
    },
    {
        "num": 403,
        "en": "Delicious",
        "vi": "adj.",
        "ipa": "/dɪˈlɪʃ.əs/",
        "pos": "Ngon miệng",
        "ex": ""
    },
    {
        "num": 404,
        "en": "Mediterranean",
        "vi": "adj., n.",
        "ipa": "/ˌmed.ɪ.tərˈeɪ.ni.ən/",
        "pos": "(Thuộc) Địa Trung Hải",
        "ex": ""
    },
    {
        "num": 405,
        "en": "Greece",
        "vi": "n.",
        "ipa": "/ɡriːs/",
        "pos": "Nước Hy Lạp",
        "ex": ""
    },
    {
        "num": 406,
        "en": "Plant-based foods",
        "vi": "n. phr.",
        "ipa": "/ˈplɑːnt.beɪst fuːdz/",
        "pos": "Thực phẩm có nguồn gốc thực vật",
        "ex": ""
    },
    {
        "num": 407,
        "en": "Healthy fats",
        "vi": "n. phr.",
        "ipa": "/ˈhel.θi fæts/",
        "pos": "Chất béo lành mạnh",
        "ex": ""
    },
    {
        "num": 408,
        "en": "Butter",
        "vi": "n.",
        "ipa": "/ˈbʌt.ə/",
        "pos": "Bơ",
        "ex": ""
    },
    {
        "num": 409,
        "en": "Linked",
        "vi": "adj.",
        "ipa": "/lɪŋkt/",
        "pos": "Liên kết",
        "ex": ""
    },
    {
        "num": 410,
        "en": "Fresh ingredients",
        "vi": "n. phr.",
        "ipa": "/freʃ ɪnˈɡriː.di.ənts/",
        "pos": "Nguyên liệu tươi",
        "ex": ""
    },
    {
        "num": 411,
        "en": "Block",
        "vi": "v.",
        "ipa": "/blɒk/",
        "pos": "Chặn lại, che khuất",
        "ex": ""
    },
    {
        "num": 412,
        "en": "Phenomenon",
        "vi": "n.",
        "ipa": "/fəˈnɒm.ɪ.nən/",
        "pos": "Hiện tượng",
        "ex": ""
    },
    {
        "num": 413,
        "en": "Spectator",
        "vi": "n.",
        "ipa": "/spekˈteɪ.tə/",
        "pos": "Khán giả (xem trực tiếp)",
        "ex": ""
    },
    {
        "num": 414,
        "en": "Turn dark",
        "vi": "phr.",
        "ipa": "/tɜːn dɑːk/",
        "pos": "Chuyển sang tối đen",
        "ex": ""
    },
    {
        "num": 415,
        "en": "Protection",
        "vi": "n.",
        "ipa": "/prəˈtek.ʃən/",
        "pos": "Sự bảo vệ",
        "ex": ""
    },
    {
        "num": 416,
        "en": "Look directly",
        "vi": "phr.",
        "ipa": "/lʊk daɪˈrekt.li/",
        "pos": "Nhìn trực tiếp",
        "ex": ""
    },
    {
        "num": 417,
        "en": "Astronomer",
        "vi": "n.",
        "ipa": "/əˈstrɒn.ə.mə/",
        "pos": "Nhà thiên văn học",
        "ex": ""
    },
    {
        "num": 418,
        "en": "Solar eclipse",
        "vi": "n. phr.",
        "ipa": "/ˌsəʊ.lər ɪˈklɪps/",
        "pos": "Nhật thực",
        "ex": ""
    },
    {
        "num": 419,
        "en": "Occur",
        "vi": "v.",
        "ipa": "/əˈkɜː/",
        "pos": "Xảy ra",
        "ex": ""
    },
    {
        "num": 420,
        "en": "Pass",
        "vi": "v.",
        "ipa": "/pɑːs/",
        "pos": "Vượt qua, đi qua",
        "ex": ""
    },
    {
        "num": 421,
        "en": "Rare",
        "vi": "adj.",
        "ipa": "/reə/",
        "pos": "Hiếm",
        "ex": ""
    },
    {
        "num": 422,
        "en": "Total",
        "vi": "adj.",
        "ipa": "/ˈtəʊ.təl/",
        "pos": "Toàn phần, tổng cộng",
        "ex": ""
    },
    {
        "num": 423,
        "en": "Spectacular sight",
        "vi": "n. phr.",
        "ipa": "/spekˈtæk.jə.lə saɪt/",
        "pos": "Cảnh tượng ngoạn mục",
        "ex": ""
    },
    {
        "num": 424,
        "en": "Special",
        "vi": "adj.",
        "ipa": "/ˈspeʃ.əl/",
        "pos": "Đặc biệt",
        "ex": ""
    },
    {
        "num": 425,
        "en": "Outer atmosphere",
        "vi": "n. phr.",
        "ipa": "/ˈaʊ.tər ˈæt.mə.sfɪə/",
        "pos": "Khí quyển bên ngoài",
        "ex": ""
    },
    {
        "num": 426,
        "en": "Capture",
        "vi": "v.",
        "ipa": "/ˈkæp.tʃə/",
        "pos": "Ghi lại, chụp lại",
        "ex": ""
    },
    {
        "num": 427,
        "en": "Stunning",
        "vi": "adj.",
        "ipa": "/ˈstʌn.ɪŋ/",
        "pos": "Tuyệt đẹp, ấn tượng",
        "ex": ""
    },
    {
        "num": 428,
        "en": "Angle",
        "vi": "n.",
        "ipa": "/ˈæŋ.ɡəl/",
        "pos": "Góc độ",
        "ex": ""
    },
    {
        "num": 429,
        "en": "Creativity",
        "vi": "n.",
        "ipa": "/ˌkriː.eɪˈtɪv.ə.ti/",
        "pos": "Sự sáng tạo",
        "ex": ""
    },
    {
        "num": 430,
        "en": "Surroundings",
        "vi": "n.",
        "ipa": "/səˈraʊn.dɪŋz/",
        "pos": "Môi trường xung quanh",
        "ex": ""
    },
    {
        "num": 431,
        "en": "Express",
        "vi": "v.",
        "ipa": "/ɪkˈspres/",
        "pos": "Thể hiện, bày tỏ",
        "ex": ""
    },
    {
        "num": 432,
        "en": "Graffiti",
        "vi": "n.",
        "ipa": "/ɡrəˈfiː.ti/",
        "pos": "Hình vẽ bậy trên tường",
        "ex": ""
    },
    {
        "num": 433,
        "en": "Commission",
        "vi": "v.",
        "ipa": "/kəˈmɪʃ.ən/",
        "pos": "Thuê, đặt hàng (làm tác phẩm)",
        "ex": ""
    },
    {
        "num": 434,
        "en": "Colorful",
        "vi": "adj.",
        "ipa": "/ˈkʌl.ə.fəl/",
        "pos": "Đầy màu sắc",
        "ex": ""
    },
    {
        "num": 435,
        "en": "Character",
        "vi": "n.",
        "ipa": "/ˈkær.ək.tə/",
        "pos": "Đặc điểm, nét riêng",
        "ex": ""
    },
    {
        "num": 436,
        "en": "Visual art",
        "vi": "n. phr.",
        "ipa": "/ˈvɪʒ.u.əl ɑːt/",
        "pos": "Nghệ thuật thị giác",
        "ex": ""
    },
    {
        "num": 437,
        "en": "Artwork",
        "vi": "n.",
        "ipa": "/ˈɑːt.wɜːk/",
        "pos": "Tác phẩm nghệ thuật",
        "ex": ""
    },
    {
        "num": 438,
        "en": "Vandalism",
        "vi": "n.",
        "ipa": "/ˈvæn.dəl.ɪ.zəm/",
        "pos": "Sự phá hoại của công",
        "ex": ""
    },
    {
        "num": 439,
        "en": "Political",
        "vi": "adj.",
        "ipa": "/pəˈlɪt.ɪ.kəl/",
        "pos": "(Thuộc) chính trị",
        "ex": ""
    },
    {
        "num": 440,
        "en": "Be meant to",
        "vi": "phr.",
        "ipa": "/bi ment tuː/",
        "pos": "Nhằm mục đích, có nghĩa là",
        "ex": ""
    },
    {
        "num": 441,
        "en": "Mural",
        "vi": "n.",
        "ipa": "/ˈmjʊə.rəl/",
        "pos": "Tranh tường",
        "ex": ""
    },
    {
        "num": 442,
        "en": "Grey",
        "vi": "adj.",
        "ipa": "/ɡreɪ/",
        "pos": "Màu xám",
        "ex": ""
    },
    {
        "num": 443,
        "en": "Gallery",
        "vi": "n.",
        "ipa": "/ˈɡæl.ər.i/",
        "pos": "Phòng trưng bày",
        "ex": ""
    },
    {
        "num": 444,
        "en": "Political message",
        "vi": "n. phr.",
        "ipa": "/pəˈlɪt.ɪ.kəl ˈmes.ɪdʒ/",
        "pos": "Thông điệp chính trị",
        "ex": ""
    },
    {
        "num": 445,
        "en": "Add",
        "vi": "v.",
        "ipa": "/æd/",
        "pos": "Thêm vào",
        "ex": ""
    },
    {
        "num": 446,
        "en": "Exchange",
        "vi": "n., v.",
        "ipa": "/ɪksˈtʃeɪndʒ/",
        "pos": "Sự trao đổi",
        "ex": ""
    },
    {
        "num": 447,
        "en": "Technology",
        "vi": "n.",
        "ipa": "/tekˈnɒl.ə.dʒi/",
        "pos": "Công nghệ",
        "ex": ""
    },
    {
        "num": 448,
        "en": "Dangerous",
        "vi": "adj.",
        "ipa": "/ˈdeɪn.dʒər.əs/",
        "pos": "Nguy hiểm",
        "ex": ""
    },
    {
        "num": 449,
        "en": "The Silk Road",
        "vi": "n. phr.",
        "ipa": "/ðə sɪlk rəʊd/",
        "pos": "Con đường tơ lụa",
        "ex": ""
    },
    {
        "num": 450,
        "en": "Ancient network",
        "vi": "n. phr.",
        "ipa": "/ˈeɪn.ʃənt ˈnet.wɜːk/",
        "pos": "Mạng lưới cổ xưa",
        "ex": ""
    },
    {
        "num": 451,
        "en": "Route",
        "vi": "n.",
        "ipa": "/ruːt/",
        "pos": "Tuyến đường",
        "ex": ""
    },
    {
        "num": 452,
        "en": "Central",
        "vi": "adj.",
        "ipa": "/ˈsen.trəl/",
        "pos": "Trung tâm, trọng tâm",
        "ex": ""
    },
    {
        "num": 453,
        "en": "Century",
        "vi": "n.",
        "ipa": "/ˈsen.tʃər.i/",
        "pos": "Thế kỷ",
        "ex": ""
    },
    {
        "num": 454,
        "en": "Precious stones",
        "vi": "n. phr.",
        "ipa": "/ˈpreʃ.əs stəʊnz/",
        "pos": "Đá quý",
        "ex": ""
    },
    {
        "num": 455,
        "en": "Spread",
        "vi": "v.",
        "ipa": "/spred/",
        "pos": "Lây lan, lan truyền",
        "ex": ""
    },
    {
        "num": 456,
        "en": "Religion",
        "vi": "n.",
        "ipa": "/rɪˈlɪdʒ.ən/",
        "pos": "Tôn giáo",
        "ex": ""
    },
    {
        "num": 457,
        "en": "Continent",
        "vi": "n.",
        "ipa": "/ˈkɒn.tɪ.nənt/",
        "pos": "Châu lục",
        "ex": ""
    },
    {
        "num": 458,
        "en": "Journey",
        "vi": "n.",
        "ipa": "/ˈdʒɜː.ni/",
        "pos": "Hành trình",
        "ex": ""
    },
    {
        "num": 459,
        "en": "Digestion",
        "vi": "n.",
        "ipa": "/daɪˈdʒes.tʃən/",
        "pos": "Sự tiêu hóa",
        "ex": ""
    },
    {
        "num": 460,
        "en": "Atmosphere",
        "vi": "n.",
        "ipa": "/ˈæt.mə.sfɪə/",
        "pos": "Bầu không khí",
        "ex": ""
    },
    {
        "num": 461,
        "en": "In contrast",
        "vi": "phr.",
        "ipa": "/ɪn ˈkɒn.trɑːst/",
        "pos": "Ngược lại, trái lại",
        "ex": ""
    },
    {
        "num": 462,
        "en": "Movement",
        "vi": "n.",
        "ipa": "/ˈmuːv.mənt/",
        "pos": "Phong trào, sự chuyển động",
        "ex": ""
    },
    {
        "num": 463,
        "en": "Concept",
        "vi": "n.",
        "ipa": "/ˈkɒn.sept/",
        "pos": "Ý tưởng, khái niệm",
        "ex": ""
    },
    {
        "num": 464,
        "en": "Contribute",
        "vi": "v.",
        "ipa": "/kənˈtrɪb.juːt/",
        "pos": "Đóng góp",
        "ex": ""
    },
    {
        "num": 465,
        "en": "Respectfully",
        "vi": "adv.",
        "ipa": "/rɪˈspekt.fəl.i/",
        "pos": "Một cách tôn trọng",
        "ex": ""
    },
    {
        "num": 466,
        "en": "Trust",
        "vi": "n., v.",
        "ipa": "/trʌst/",
        "pos": "Sự tin tưởng / Tin tưởng",
        "ex": ""
    },
    {
        "num": 467,
        "en": "Outcome",
        "vi": "n.",
        "ipa": "/ˈaʊt.kʌm/",
        "pos": "Kết quả",
        "ex": ""
    },
    {
        "num": 468,
        "en": "Disagreement",
        "vi": "n.",
        "ipa": "/ˌdis.əˈɡriː.mənt/",
        "pos": "Cuộc tranh cãi, sự bất đồng",
        "ex": ""
    },
    {
        "num": 469,
        "en": "Final",
        "vi": "adj.",
        "ipa": "/ˈfaɪ.nəl/",
        "pos": "Cuối cùng",
        "ex": ""
    },
    {
        "num": 470,
        "en": "Tournament",
        "vi": "n.",
        "ipa": "/ˈtʊə.nə.mənt/",
        "pos": "Giải đấu",
        "ex": ""
    },
    {
        "num": 471,
        "en": "Reflexes",
        "vi": "n.",
        "ipa": "/ˈriː.flek.sɪz/",
        "pos": "Phản xạ",
        "ex": ""
    },
    {
        "num": 472,
        "en": "Sponsorship",
        "vi": "n.",
        "ipa": "/ˈspɒn.sə.ʃɪp/",
        "pos": "Sự tài trợ",
        "ex": ""
    },
    {
        "num": 473,
        "en": "Dedication",
        "vi": "n.",
        "ipa": "/ˌded.ɪˈkeɪ.ʃən/",
        "pos": "Sự cống hiến, tận tâm",
        "ex": ""
    },
    {
        "num": 474,
        "en": "Stadium",
        "vi": "n.",
        "ipa": "/ˈsteɪ.di.əm/",
        "pos": "Sân vận động",
        "ex": ""
    },
    {
        "num": 475,
        "en": "Train for",
        "vi": "phr. v.",
        "ipa": "/treɪn fɔː/",
        "pos": "Huấn luyện cho, chuẩn bị cho",
        "ex": ""
    },
    {
        "num": 476,
        "en": "Strategy",
        "vi": "n.",
        "ipa": "/ˈstræt.ə.dʒi/",
        "pos": "Chiến lược, phương pháp",
        "ex": ""
    },
    {
        "num": 477,
        "en": "Prize pool",
        "vi": "n. phr.",
        "ipa": "/praɪz puːl/",
        "pos": "Quỹ giải thưởng",
        "ex": ""
    },
    {
        "num": 478,
        "en": "Through",
        "vi": "prep.",
        "ipa": "/θruː/",
        "pos": "Thông qua, bằng cách",
        "ex": ""
    },
    {
        "num": 479,
        "en": "Career",
        "vi": "n.",
        "ipa": "/kəˈrɪə/",
        "pos": "Sự nghiệp",
        "ex": ""
    },
    {
        "num": 480,
        "en": "Intense",
        "vi": "adj.",
        "ipa": "/ɪnˈtens/",
        "pos": "Mãnh liệt, dữ dội",
        "ex": ""
    },
    {
        "num": 481,
        "en": "Consistent",
        "vi": "adj.",
        "ipa": "/kənˈsɪs.tənt/",
        "pos": "Nhất quán, đều đặn",
        "ex": ""
    },
    {
        "num": 482,
        "en": "Habits",
        "vi": "n.",
        "ipa": "/ˈhæb.ɪts/",
        "pos": "Thói quen",
        "ex": ""
    },
    {
        "num": 483,
        "en": "Willpower",
        "vi": "n.",
        "ipa": "/ˈwɪl.paʊə/",
        "pos": "Ý chí",
        "ex": ""
    },
    {
        "num": 484,
        "en": "Organized",
        "vi": "adj.",
        "ipa": "/ˈɔː.ɡən.aɪzd/",
        "pos": "Có tổ chức, ngăn nắp",
        "ex": ""
    },
    {
        "num": 485,
        "en": "Set the tone",
        "vi": "phr.",
        "ipa": "/set ðə təʊn/",
        "pos": "Tạo tiền đề, định hướng (cho cái gì)",
        "ex": ""
    },
    {
        "num": 486,
        "en": "Increase",
        "vi": "v., n.",
        "ipa": "/ɪnˈkriːs/",
        "pos": "Tăng lên",
        "ex": ""
    },
    {
        "num": 487,
        "en": "Rushing",
        "vi": "v., n.",
        "ipa": "/ˈrʌʃ.ɪŋ/",
        "pos": "Vội vã, hối hả",
        "ex": ""
    },
    {
        "num": 488,
        "en": "Stretch",
        "vi": "v.",
        "ipa": "/stretʃ/",
        "pos": "Kéo dài, vươn vai, giãn cơ",
        "ex": ""
    },
    {
        "num": 489,
        "en": "Sticking to",
        "vi": "phr.",
        "ipa": "/ˈstɪk.ɪŋ tuː/",
        "pos": "Kiên trì, tuân thủ (một thói quen)",
        "ex": ""
    },
    {
        "num": 490,
        "en": "Ultimately",
        "vi": "adv.",
        "ipa": "/ˈʌl.tɪ.mət.li/",
        "pos": "Cuối cùng, sau cùng",
        "ex": ""
    },
    {
        "num": 491,
        "en": "Mind",
        "vi": "n.",
        "ipa": "/maɪnd/",
        "pos": "Tinh thần, tâm trí",
        "ex": ""
    },
    {
        "num": 492,
        "en": "Value",
        "vi": "n., v.",
        "ipa": "/ˈvæl.juː/",
        "pos": "Giá trị / Đánh giá cao",
        "ex": ""
    },
    {
        "num": 493,
        "en": "Decorative",
        "vi": "adj.",
        "ipa": "/ˈdek.ə.rə.tɪv/",
        "pos": "Có tính trang trí",
        "ex": ""
    },
    {
        "num": 494,
        "en": "Materials",
        "vi": "n.",
        "ipa": "/məˈtɪə.ri.əlz/",
        "pos": "Vật liệu, chất liệu",
        "ex": ""
    },
    {
        "num": 495,
        "en": "Innovative",
        "vi": "adj.",
        "ipa": "/ˈɪn.ə.və.tɪv/",
        "pos": "Có tính đổi mới, sáng tạo",
        "ex": ""
    },
    {
        "num": 496,
        "en": "Upcycling",
        "vi": "n.",
        "ipa": "/ˈʌpˌsaɪ.klɪŋ/",
        "pos": "Nâng cấp tái sử dụng",
        "ex": ""
    },
    {
        "num": 497,
        "en": "Ladder",
        "vi": "n.",
        "ipa": "/ˈlæd.ə/",
        "pos": "Cái thang",
        "ex": ""
    },
    {
        "num": 498,
        "en": "Bookshelf",
        "vi": "n.",
        "ipa": "/ˈbʊk.ʃelf/",
        "pos": "Giá sách",
        "ex": ""
    },
    {
        "num": 499,
        "en": "Glass jar",
        "vi": "n. phr.",
        "ipa": "/ɡlɑːs dʒɑː/",
        "pos": "Lọ thủy tinh",
        "ex": ""
    },
    {
        "num": 500,
        "en": "Prevent",
        "vi": "v.",
        "ipa": "/prɪˈvent/",
        "pos": "Ngăn chặn",
        "ex": ""
    },
    {
        "num": 501,
        "en": "Field trip",
        "vi": "n. phr.",
        "ipa": "/fiːld trɪp/",
        "pos": "Chuyến đi thực tế",
        "ex": ""
    },
    {
        "num": 502,
        "en": "Immersive",
        "vi": "adj.",
        "ipa": "/ɪˈmɜː.sɪv/",
        "pos": "Sống động, đắm chìm",
        "ex": ""
    },
    {
        "num": 503,
        "en": "Costly",
        "vi": "adj.",
        "ipa": "/ˈkɒst.li/",
        "pos": "Đắt đỏ",
        "ex": ""
    },
    {
        "num": 504,
        "en": "Tool",
        "vi": "n.",
        "ipa": "/tuːl/",
        "pos": "Công cụ",
        "ex": ""
    },
    {
        "num": 505,
        "en": "Virtual Reality",
        "vi": "n. phr.",
        "ipa": "/ˌvɜː.tʃu.əl riˈæl.ə.ti/",
        "pos": "Thực tế ảo",
        "ex": ""
    },
    {
        "num": 506,
        "en": "Thoughts",
        "vi": "n.",
        "ipa": "/θɔːts/",
        "pos": "Suy nghĩ",
        "ex": ""
    },
    {
        "num": 507,
        "en": "Keepsake",
        "vi": "n.",
        "ipa": "/ˈkiːp.seɪk/",
        "pos": "Vật kỷ niệm",
        "ex": ""
    },
    {
        "num": 508,
        "en": "Affection",
        "vi": "n.",
        "ipa": "/əˈfek.ʃən/",
        "pos": "Tình cảm, sự yêu thương",
        "ex": ""
    },
    {
        "num": 509,
        "en": "Sunscreen",
        "vi": "n.",
        "ipa": "/ˈsʌn.skriːn/",
        "pos": "Kem chống nắng",
        "ex": ""
    },
    {
        "num": 510,
        "en": "Diseases",
        "vi": "n.",
        "ipa": "/dɪˈziː.zɪz/",
        "pos": "Bệnh tật",
        "ex": ""
    },
    {
        "num": 511,
        "en": "Income",
        "vi": "n.",
        "ipa": "/ˈɪn.kʌm/",
        "pos": "Thu nhập",
        "ex": ""
    },
    {
        "num": 512,
        "en": "Safety",
        "vi": "n.",
        "ipa": "/ˈseɪf.ti/",
        "pos": "Sự an toàn",
        "ex": ""
    },
    {
        "num": 513,
        "en": "Regulation",
        "vi": "n.",
        "ipa": "/ˌreɡ.juˈleɪ.ʃən/",
        "pos": "Quy định, luật lệ",
        "ex": ""
    },
    {
        "num": 514,
        "en": "Improve",
        "vi": "v.",
        "ipa": "/ɪmˈpruːv/",
        "pos": "Cải thiện",
        "ex": ""
    },
    {
        "num": 515,
        "en": "Lesson",
        "vi": "n.",
        "ipa": "/ˈles.ən/",
        "pos": "Bài học",
        "ex": ""
    },
    {
        "num": 516,
        "en": "Resilience",
        "vi": "n.",
        "ipa": "/rɪˈzɪl.i.əns/",
        "pos": "Sự kiên cường, khả năng phục hồi",
        "ex": ""
    },
    {
        "num": 517,
        "en": "Alleviate",
        "vi": "v.",
        "ipa": "/əˈliː.vi.eɪt/",
        "pos": "Làm giảm bớt (đau đớn, khó chịu)",
        "ex": ""
    },
    {
        "num": 518,
        "en": "Deceive",
        "vi": "v.",
        "ipa": "/dɪˈsiːv/",
        "pos": "Lừa dối, đánh lừa",
        "ex": ""
    },
    {
        "num": 519,
        "en": "Fatigue",
        "vi": "n.",
        "ipa": "/fəˈtiːɡ/",
        "pos": "Sự mệt mỏi, kiệt sức",
        "ex": ""
    },
    {
        "num": 520,
        "en": "Placebo effect",
        "vi": "n. phr.",
        "ipa": "/pləˈsiː.bəʊ ɪˌfekt/",
        "pos": "Hiệu ứng giả dược (thuốc trấn an)",
        "ex": ""
    },
    {
        "num": 521,
        "en": "Psychological",
        "vi": "adj.",
        "ipa": "/ˌsaɪ.kəˈlɒdʒ.ɪ.kəl/",
        "pos": "(Thuộc về) tâm lý học",
        "ex": ""
    },
    {
        "num": 522,
        "en": "Fake",
        "vi": "adj., n.",
        "ipa": "/feɪk/",
        "pos": "Giả, đồ giả",
        "ex": ""
    },
    {
        "num": 523,
        "en": "Heal",
        "vi": "v.",
        "ipa": "/hiːl/",
        "pos": "Chữa lành",
        "ex": ""
    },
    {
        "num": 524,
        "en": "Sugar pill",
        "vi": "n. phr.",
        "ipa": "/ˈʃʊɡ.ə pɪl/",
        "pos": "Viên đường (trong thí nghiệm giả dược)",
        "ex": ""
    },
    {
        "num": 525,
        "en": "Broken bone",
        "vi": "n. phr.",
        "ipa": "/ˈbrəʊ.kən bəʊn/",
        "pos": "Xương bị gãy",
        "ex": ""
    },
    {
        "num": 526,
        "en": "Cure",
        "vi": "v., n.",
        "ipa": "/kjʊə/",
        "pos": "Điều trị, chữa khỏi / Phương thuốc",
        "ex": ""
    },
    {
        "num": 527,
        "en": "Ethically",
        "vi": "adv.",
        "ipa": "/ˈeθ.ɪ.kəl.i/",
        "pos": "Một cách có đạo đức",
        "ex": ""
    },
    {
        "num": 528,
        "en": "Incredible power",
        "vi": "n. phr.",
        "ipa": "/ɪnˈkred.ə.bəl ˈpaʊə/",
        "pos": "Sức mạnh đáng kinh ngạc",
        "ex": ""
    },
    {
        "num": 529,
        "en": "Shrink",
        "vi": "v.",
        "ipa": "/ʃrɪŋk/",
        "pos": "Co lại, làm nhỏ lại",
        "ex": ""
    },
    {
        "num": 530,
        "en": "Tumor",
        "vi": "n.",
        "ipa": "/ˈtʃuː.mə/",
        "pos": "Khối u",
        "ex": ""
    },
    {
        "num": 531,
        "en": "Significantly",
        "vi": "adv.",
        "ipa": "/sɪɡˈnɪf.ɪ.kənt.li/",
        "pos": "Một cách đáng kể",
        "ex": ""
    },
    {
        "num": 532,
        "en": "Symptom",
        "vi": "n.",
        "ipa": "/ˈsɪmp.təm/",
        "pos": "Triệu chứng",
        "ex": ""
    },
    {
        "num": 533,
        "en": "Comprehend",
        "vi": "v.",
        "ipa": "/ˌkɒm.prɪˈhend/",
        "pos": "Hiểu thấu đáo, lĩnh hội",
        "ex": ""
    },
    {
        "num": 534,
        "en": "Cue",
        "vi": "n.",
        "ipa": "/kjuː/",
        "pos": "Tín hiệu, dấu hiệu gợi ý",
        "ex": ""
    },
    {
        "num": 535,
        "en": "Active listening",
        "vi": "n. phr.",
        "ipa": "/ˌæk.tɪv ˈlɪs.ən.ɪŋ/",
        "pos": "Nghe chủ động",
        "ex": ""
    },
    {
        "num": 536,
        "en": "Equally",
        "vi": "adv.",
        "ipa": "/ˈiː.kwə.li/",
        "pos": "Bằng nhau, ngang nhau",
        "ex": ""
    },
    {
        "num": 537,
        "en": "Fully",
        "vi": "adv.",
        "ipa": "/ˈfʊl.i/",
        "pos": "Đầy đủ, hoàn toàn",
        "ex": ""
    },
    {
        "num": 538,
        "en": "Concentrate on",
        "vi": "phr. v.",
        "ipa": "/ˈkɒn.sən.treɪt ɒn/",
        "pos": "Tập trung vào",
        "ex": ""
    },
    {
        "num": 539,
        "en": "Rather than",
        "vi": "phr.",
        "ipa": "/ˈrɑː.ðə ðæn/",
        "pos": "Thay vì, hơn là",
        "ex": ""
    },
    {
        "num": 540,
        "en": "Turn (to speak)",
        "vi": "n.",
        "ipa": "/tɜːn/",
        "pos": "Lượt (đến lượt phát biểu)",
        "ex": ""
    },
    {
        "num": 541,
        "en": "Non-verbal cues",
        "vi": "n. phr.",
        "ipa": "/ˌnɒnˈvɜː.bəl kjuːz/",
        "pos": "Tín hiệu phi ngôn ngữ",
        "ex": ""
    },
    {
        "num": 542,
        "en": "Nodding",
        "vi": "n., v-ing",
        "ipa": "/ˈnɒd.ɪŋ/",
        "pos": "Hành động gật đầu",
        "ex": ""
    },
    {
        "num": 543,
        "en": "Clarify",
        "vi": "v.",
        "ipa": "/ˈklær.ɪ.faɪ/",
        "pos": "Làm rõ, giải thích rõ",
        "ex": ""
    },
    {
        "num": 544,
        "en": "Deep",
        "vi": "adj.",
        "ipa": "/diːp/",
        "pos": "Sâu, sâu sắc",
        "ex": ""
    },
    {
        "num": 545,
        "en": "Misunderstanding",
        "vi": "n.",
        "ipa": "/ˌmɪs.ʌn.dəˈstæn.dɪŋ/",
        "pos": "Sự hiểu lầm",
        "ex": ""
    },
    {
        "num": 546,
        "en": "Genuine desire",
        "vi": "n. phr.",
        "ipa": "/ˈdʒen.ju.ɪn dɪˈzaɪə/",
        "pos": "Mong muốn chân thật",
        "ex": ""
    },
    {
        "num": 547,
        "en": "Detrimental",
        "vi": "adj.",
        "ipa": "/ˌdet.rɪˈmen.təl/",
        "pos": "Có hại, gây bất lợi",
        "ex": ""
    },
    {
        "num": 548,
        "en": "Tackle",
        "vi": "v.",
        "ipa": "/ˈtæk.əl/",
        "pos": "Giải quyết (vấn đề khó)",
        "ex": ""
    },
    {
        "num": 549,
        "en": "Surplus",
        "vi": "adj., n.",
        "ipa": "/ˈsɜː.pləs/",
        "pos": "Dư thừa, thặng dư",
        "ex": ""
    },
    {
        "num": 550,
        "en": "Edible",
        "vi": "adj.",
        "ipa": "/ˈed.ə.bəl/",
        "pos": "Có thể ăn được",
        "ex": ""
    },
    {
        "num": 551,
        "en": "Edible food",
        "vi": "n. phr.",
        "ipa": "/ˈed.ə.bəl fuːd/",
        "pos": "Thực phẩm có thể ăn được",
        "ex": ""
    },
    {
        "num": 552,
        "en": "Throw away",
        "vi": "phr. v.",
        "ipa": "/θrəʊ əˈweɪ/",
        "pos": "Vứt đi",
        "ex": ""
    },
    {
        "num": 553,
        "en": "Household",
        "vi": "n.",
        "ipa": "/ˈhaʊs.həʊld/",
        "pos": "Hộ gia đình",
        "ex": ""
    },
    {
        "num": 554,
        "en": "Starve",
        "vi": "v.",
        "ipa": "/stɑːv/",
        "pos": "Chết đói, bỏ đói",
        "ex": ""
    },
    {
        "num": 555,
        "en": "Trap",
        "vi": "v., n.",
        "ipa": "/træp/",
        "pos": "Giữ lại, nhốt lại / Cái bẫy",
        "ex": ""
    },
    {
        "num": 556,
        "en": "Plan",
        "vi": "v., n.",
        "ipa": "/plæn/",
        "pos": "Lên kế hoạch / Bản kế hoạch",
        "ex": ""
    },
    {
        "num": 557,
        "en": "Massive",
        "vi": "adj.",
        "ipa": "/ˈmæs.ɪv/",
        "pos": "To lớn, đồ sộ",
        "ex": ""
    },
    {
        "num": 558,
        "en": "Tons of",
        "vi": "phr.",
        "ipa": "/tʌnz əv/",
        "pos": "Hàng tấn, rất nhiều",
        "ex": ""
    },
    {
        "num": 559,
        "en": "Moral",
        "vi": "adj.",
        "ipa": "/ˈmɒr.əl/",
        "pos": "(Thuộc về) đạo đức",
        "ex": ""
    },
    {
        "num": 560,
        "en": "Rotting food",
        "vi": "n. phr.",
        "ipa": "/ˈrɒt.ɪŋ fuːd/",
        "pos": "Thức ăn thối rữa",
        "ex": ""
    },
    {
        "num": 561,
        "en": "Urge",
        "vi": "v.",
        "ipa": "/ɜːdʒ/",
        "pos": "Kêu gọi, thúc giục",
        "ex": ""
    },
    {
        "num": 562,
        "en": "Greenhouse gas",
        "vi": "n. phr.",
        "ipa": "/ˌɡriːn.haʊs ˈɡæs/",
        "pos": "Khí nhà kính",
        "ex": ""
    },
    {
        "num": 563,
        "en": "Charity",
        "vi": "n.",
        "ipa": "/ˈtʃær.ə.ti/",
        "pos": "Tổ chức từ thiện",
        "ex": ""
    },
    {
        "num": 564,
        "en": "Profound",
        "vi": "adj.",
        "ipa": "/prəˈfaʊnd/",
        "pos": "Sâu sắc, to lớn",
        "ex": ""
    },
    {
        "num": 565,
        "en": "Fast-food chain",
        "vi": "n. phr.",
        "ipa": "/ˌfɑːstˈfuːd tʃeɪn/",
        "pos": "Chuỗi cửa hàng thức ăn nhanh",
        "ex": ""
    },
    {
        "num": 566,
        "en": "Paint",
        "vi": "v., n.",
        "ipa": "/peɪnt/",
        "pos": "Sơn, vẽ / Sơn",
        "ex": ""
    },
    {
        "num": 567,
        "en": "Stimulate",
        "vi": "v.",
        "ipa": "/ˈstɪm.jə.leɪt/",
        "pos": "Kích thích, khuyến khích",
        "ex": ""
    },
    {
        "num": 568,
        "en": "Marketing expert",
        "vi": "n. phr.",
        "ipa": "/ˈmɑː.kɪ.tɪŋ ˈek.spɜːt/",
        "pos": "Chuyên gia tiếp thị",
        "ex": ""
    },
    {
        "num": 569,
        "en": "Appetite",
        "vi": "n.",
        "ipa": "/ˈæp.ə.taɪt/",
        "pos": "Sự thèm ăn",
        "ex": ""
    },
    {
        "num": 570,
        "en": "Brand",
        "vi": "n.",
        "ipa": "/brænd/",
        "pos": "Thương hiệu",
        "ex": ""
    },
    {
        "num": 571,
        "en": "Identity",
        "vi": "n.",
        "ipa": "/aɪˈden.tə.ti/",
        "pos": "Bản sắc, nhận diện",
        "ex": ""
    },
    {
        "num": 572,
        "en": "Soft blue",
        "vi": "n. phr.",
        "ipa": "/sɒft bluː/",
        "pos": "Màu xanh nhẹ nhàng",
        "ex": ""
    },
    {
        "num": 573,
        "en": "Calming environment",
        "vi": "n. phr.",
        "ipa": "/ˈkɑː.mɪŋ ɪnˈvaɪ.rən.mənt/",
        "pos": "Môi trường thư giãn",
        "ex": ""
    },
    {
        "num": 574,
        "en": "Influence",
        "vi": "v., n.",
        "ipa": "/ˈɪn.flu.əns/",
        "pos": "Ảnh hưởng, tác động",
        "ex": ""
    },
    {
        "num": 575,
        "en": "Mentor",
        "vi": "n.",
        "ipa": "/ˈmen.tɔː/",
        "pos": "Người cố vấn, người thầy",
        "ex": ""
    },
    {
        "num": 576,
        "en": "Evolve",
        "vi": "v.",
        "ipa": "/ɪˈvɒlv/",
        "pos": "Tiến hóa, phát triển",
        "ex": ""
    },
    {
        "num": 577,
        "en": "Biomimicry",
        "vi": "n.",
        "ipa": "/ˌbaɪ.əʊˈmɪm.ɪ.kri/",
        "pos": "Phỏng sinh học (bắt chước tự nhiên)",
        "ex": ""
    },
    {
        "num": 578,
        "en": "Beak",
        "vi": "n.",
        "ipa": "/biːk/",
        "pos": "Mỏ (chim)",
        "ex": ""
    },
    {
        "num": 579,
        "en": "Survive",
        "vi": "v.",
        "ipa": "/səˈvaɪv/",
        "pos": "Tồn tại, sống sót",
        "ex": ""
    },
    {
        "num": 580,
        "en": "Engineer",
        "vi": "n.",
        "ipa": "/ˌen.dʒɪˈnɪə/",
        "pos": "Kỹ sư",
        "ex": ""
    },
    {
        "num": 581,
        "en": "Bullet train",
        "vi": "n. phr.",
        "ipa": "/ˈbʊl.ɪt treɪn/",
        "pos": "Tàu cao tốc (hình đầu đạn)",
        "ex": ""
    },
    {
        "num": 582,
        "en": "Kingfisher",
        "vi": "n.",
        "ipa": "/ˈkɪŋˌfɪʃ.ə/",
        "pos": "Chim bói cá",
        "ex": ""
    },
    {
        "num": 583,
        "en": "Approach",
        "vi": "n., v.",
        "ipa": "/əˈprəʊtʃ/",
        "pos": "Cách tiếp cận / Tiếp cận",
        "ex": ""
    },
    {
        "num": 584,
        "en": "Accumulation",
        "vi": "n.",
        "ipa": "/əˌkjuː.mjəˈleɪ.ʃən/",
        "pos": "Sự tích tụ, tích lũy",
        "ex": ""
    },
    {
        "num": 585,
        "en": "Synthetic",
        "vi": "adj.",
        "ipa": "/sɪnˈθet.ɪk/",
        "pos": "Tổng hợp, nhân tạo",
        "ex": ""
    },
    {
        "num": 586,
        "en": "Implement",
        "vi": "v.",
        "ipa": "/ˈɪm.plɪ.ment/",
        "pos": "Thi hành, thực thi (luật, kế hoạch)",
        "ex": ""
    },
    {
        "num": 587,
        "en": "Severe",
        "vi": "adj.",
        "ipa": "/sɪˈvɪə/",
        "pos": "Nghiêm trọng, khốc liệt",
        "ex": ""
    },
    {
        "num": 588,
        "en": "Break down from",
        "vi": "phr. v.",
        "ipa": "/breɪk daʊn frəm/",
        "pos": "Phân huỷ, vỡ ra từ",
        "ex": ""
    },
    {
        "num": 589,
        "en": "A less visible threat",
        "vi": "n. phr.",
        "ipa": "/ə les ˈvɪz.ə.bəl θret/",
        "pos": "Mối đe dọa ít rõ ràng hơn",
        "ex": ""
    },
    {
        "num": 590,
        "en": "Item / Thing",
        "vi": "n.",
        "ipa": "/ˈaɪ.təm/ - /θɪŋ/",
        "pos": "Món đồ, vật dụng",
        "ex": ""
    },
    {
        "num": 591,
        "en": "Microplastics",
        "vi": "n.",
        "ipa": "/ˌmaɪ.krəʊˈplæs.tɪks/",
        "pos": "Hạt vi nhựa",
        "ex": ""
    },
    {
        "num": 592,
        "en": "Mistake",
        "vi": "v., n.",
        "ipa": "/mɪˈsteɪk/",
        "pos": "Nhầm lẫn / Lỗi lầm",
        "ex": ""
    },
    {
        "num": 593,
        "en": "Tiny",
        "vi": "adj.",
        "ipa": "/ˈtaɪ.ni/",
        "pos": "Nhỏ xíu",
        "ex": ""
    },
    {
        "num": 594,
        "en": "Piece",
        "vi": "n.",
        "ipa": "/piːs/",
        "pos": "Mảnh, mẩu",
        "ex": ""
    },
    {
        "num": 595,
        "en": "Address",
        "vi": "v.",
        "ipa": "/əˈdres/",
        "pos": "Giải quyết (vấn đề)",
        "ex": ""
    },
    {
        "num": 596,
        "en": "Solve",
        "vi": "v.",
        "ipa": "/sɒlv/",
        "pos": "Giải quyết",
        "ex": ""
    },
    {
        "num": 597,
        "en": "Deepest",
        "vi": "adj.",
        "ipa": "/ˈdiː.pɪst/",
        "pos": "Sâu nhất",
        "ex": ""
    },
    {
        "num": 598,
        "en": "Ocean",
        "vi": "n.",
        "ipa": "/ˈəʊ.ʃən/",
        "pos": "Đại dương",
        "ex": ""
    },
    {
        "num": 599,
        "en": "Effort",
        "vi": "n.",
        "ipa": "/ˈef.ət/",
        "pos": "Sự nỗ lực",
        "ex": ""
    },
    {
        "num": 600,
        "en": "Marine animal",
        "vi": "n. phr.",
        "ipa": "/məˈriːn ˈæn.ɪ.məl/",
        "pos": "Động vật biển",
        "ex": ""
    },
    {
        "num": 601,
        "en": "Strict",
        "vi": "adj.",
        "ipa": "/strɪkt/",
        "pos": "Nghiêm ngặt",
        "ex": ""
    },
    {
        "num": 602,
        "en": "Exhaustion",
        "vi": "n.",
        "ipa": "/ɪɡˈzɔːs.tʃən/",
        "pos": "Sự kiệt sức",
        "ex": ""
    },
    {
        "num": 603,
        "en": "Struggle with",
        "vi": "phr. v.",
        "ipa": "/ˈstrʌɡ.əl wɪð/",
        "pos": "Gặp khó khăn với, chật vật với",
        "ex": ""
    },
    {
        "num": 604,
        "en": "Cycle",
        "vi": "n.",
        "ipa": "/ˈsaɪ.kəl/",
        "pos": "Vòng tròn, chu kỳ",
        "ex": ""
    },
    {
        "num": 605,
        "en": "Temptation",
        "vi": "n.",
        "ipa": "/tempˈteɪ.ʃən/",
        "pos": "Sự cám dỗ",
        "ex": ""
    },
    {
        "num": 606,
        "en": "Chunk",
        "vi": "n.",
        "ipa": "/tʃʌŋk/",
        "pos": "Khối, phần lớn",
        "ex": ""
    },
    {
        "num": 607,
        "en": "Effective",
        "vi": "adj.",
        "ipa": "/ɪˈfek.tɪv/",
        "pos": "Có hiệu quả",
        "ex": ""
    },
    {
        "num": 608,
        "en": "Pomodoro Technique",
        "vi": "n. phr.",
        "ipa": "/ˌpɒm.əˈdɔː.rəʊ tekˈniːk/",
        "pos": "Phương pháp Pomodoro (quản lý thời gian)",
        "ex": ""
    },
    {
        "num": 609,
        "en": "Interruption",
        "vi": "n.",
        "ipa": "/ˌɪn.təˈrʌp.ʃən/",
        "pos": "Sự gián đoạn",
        "ex": ""
    },
    {
        "num": 610,
        "en": "Workload",
        "vi": "n.",
        "ipa": "/ˈwɜːk.ləʊd/",
        "pos": "Khối lượng công việc",
        "ex": ""
    },
    {
        "num": 611,
        "en": "Boost",
        "vi": "v., n.",
        "ipa": "/buːst/",
        "pos": "Tăng cường, thúc đẩy / Sự tăng cường",
        "ex": ""
    },
    {
        "num": 612,
        "en": "Overall",
        "vi": "adj., adv.",
        "ipa": "/ˌəʊ.vəˈrɔːl/",
        "pos": "Toàn diện, tổng thể",
        "ex": ""
    },
    {
        "num": 613,
        "en": "Fulfillment",
        "vi": "n.",
        "ipa": "/fʊlˈfɪl.mənt/",
        "pos": "Sự mãn nguyện, thỏa mãn (về tinh thần)",
        "ex": ""
    },
    {
        "num": 614,
        "en": "Evaluate",
        "vi": "v.",
        "ipa": "/ɪˈvæl.ju.eɪt/",
        "pos": "Đánh giá, định duyệt",
        "ex": ""
    },
    {
        "num": 615,
        "en": "Intersection",
        "vi": "n.",
        "ipa": "/ˌɪn.təˈsek.ʃən/",
        "pos": "Điểm giao thoa, sự cắt nhau (ngã tư)",
        "ex": ""
    },
    {
        "num": 616,
        "en": "Element",
        "vi": "n.",
        "ipa": "/ˈel.ɪ.mənt/",
        "pos": "Yếu tố",
        "ex": ""
    },
    {
        "num": 617,
        "en": "Feel lost",
        "vi": "phr.",
        "ipa": "/fiːl lɒst/",
        "pos": "Cảm thấy lạc lối",
        "ex": ""
    },
    {
        "num": 618,
        "en": "Reflect on",
        "vi": "phr. v.",
        "ipa": "/rɪˈflekt ɒn/",
        "pos": "Suy ngẫm về, phản ánh",
        "ex": ""
    },
    {
        "num": 619,
        "en": "Pursue",
        "vi": "v.",
        "ipa": "/pəˈsjuː/",
        "pos": "Theo đuổi",
        "ex": ""
    },
    {
        "num": 620,
        "en": "Purpose",
        "vi": "n.",
        "ipa": "/ˈpɜː.pəs/",
        "pos": "Mục đích, ý nghĩa",
        "ex": ""
    },
    {
        "num": 621,
        "en": "A reason for being",
        "vi": "n. phr.",
        "ipa": "/ə ˈriː.zən fɔː ˈbiː.ɪŋ/",
        "pos": "Một lý do để tồn tại",
        "ex": ""
    },
    {
        "num": 622,
        "en": "Translate",
        "vi": "v.",
        "ipa": "/trænzˈleɪt/",
        "pos": "Dịch",
        "ex": ""
    },
    {
        "num": 623,
        "en": "Deep sense of",
        "vi": "phr.",
        "ipa": "/diːp sens əv/",
        "pos": "Cảm giác sâu sắc về",
        "ex": ""
    },
    {
        "num": 624,
        "en": "Meaningful",
        "vi": "adj.",
        "ipa": "/ˈmiː.nɪŋ.fəl/",
        "pos": "Có ý nghĩa",
        "ex": ""
    },
    {
        "num": 625,
        "en": "Path",
        "vi": "n.",
        "ipa": "/pɑːθ/",
        "pos": "Con đường",
        "ex": ""
    },
    {
        "num": 626,
        "en": "Alternative",
        "vi": "n., adj.",
        "ipa": "/ɒlˈtɜː.nə.tɪv/",
        "pos": "Sự thay thế (lựa chọn khác)",
        "ex": ""
    },
    {
        "num": 627,
        "en": "Stimulating",
        "vi": "adj.",
        "ipa": "/ˈstɪm.jə.leɪ.tɪŋ/",
        "pos": "Kích thích (tư duy), thú vị",
        "ex": ""
    },
    {
        "num": 628,
        "en": "Impairment",
        "vi": "n.",
        "ipa": "/ɪmˈpeə.mənt/",
        "pos": "Sự khiếm khuyết, suy yếu",
        "ex": ""
    },
    {
        "num": 629,
        "en": "Offer",
        "vi": "v.",
        "ipa": "/ˈɒf.ə/",
        "pos": "Cung cấp, đưa ra",
        "ex": ""
    },
    {
        "num": 630,
        "en": "Surge",
        "vi": "v., n.",
        "ipa": "/sɜːdʒ/",
        "pos": "Tăng vọt / Sự tăng vọt",
        "ex": ""
    },
    {
        "num": 631,
        "en": "Household chores",
        "vi": "n. phr.",
        "ipa": "/ˈhaʊs.həʊld tʃɔːz/",
        "pos": "Việc nhà",
        "ex": ""
    },
    {
        "num": 632,
        "en": "Particularly",
        "vi": "adv.",
        "ipa": "/pəˈtɪk.jə.lə.li/",
        "pos": "Cụ thể, đặc biệt",
        "ex": ""
    },
    {
        "num": 633,
        "en": "Argue",
        "vi": "v.",
        "ipa": "/ˈɑːɡ.juː/",
        "pos": "Tranh luận",
        "ex": ""
    },
    {
        "num": 634,
        "en": "Far more accessible",
        "vi": "phr.",
        "ipa": "/fɑː mɔːr əkˈses.ə.bəl/",
        "pos": "Dễ tiếp cận hơn nhiều",
        "ex": ""
    },
    {
        "num": 635,
        "en": "Intellectually",
        "vi": "adv.",
        "ipa": "/ˌɪn.təlˈek.tʃu.ə.li/",
        "pos": "Về mặt trí tuệ",
        "ex": ""
    },
    {
        "num": 636,
        "en": "Activate",
        "vi": "v.",
        "ipa": "/ˈæk.tɪ.veɪt/",
        "pos": "Kích hoạt",
        "ex": ""
    },
    {
        "num": 637,
        "en": "Obsolete",
        "vi": "adj.",
        "ipa": "/ˌɒb.səlˈiːt/",
        "pos": "Lỗi thời, không còn được sử dụng",
        "ex": ""
    },
    {
        "num": 638,
        "en": "Old-fashioned",
        "vi": "adj.",
        "ipa": "/ˌəʊldˈfæʃ.ənd/",
        "pos": "Cũ, lỗi thời",
        "ex": ""
    },
    {
        "num": 639,
        "en": "Inevitable",
        "vi": "adj.",
        "ipa": "/ɪˈnev.ɪ.tə.bəl/",
        "pos": "Không thể tránh khỏi, tất yếu",
        "ex": ""
    },
    {
        "num": 640,
        "en": "Evolution",
        "vi": "n.",
        "ipa": "/ˌiː.vəˈluː.ʃən/",
        "pos": "Sự tiến hóa",
        "ex": ""
    },
    {
        "num": 641,
        "en": "Reluctance",
        "vi": "n.",
        "ipa": "/rɪˈlʌk.təns/",
        "pos": "Sự miễn cưỡng, lưỡng lự",
        "ex": ""
    },
    {
        "num": 642,
        "en": "Accelerate",
        "vi": "v.",
        "ipa": "/əkˈsel.ə.reɪt/",
        "pos": "Thúc đẩy, làm nhanh hơn",
        "ex": ""
    },
    {
        "num": 643,
        "en": "Static",
        "vi": "adj.",
        "ipa": "/ˈstæt.ɪk/",
        "pos": "Tĩnh, không thay đổi",
        "ex": ""
    },
    {
        "num": 644,
        "en": "Constantly",
        "vi": "adv.",
        "ipa": "/ˈkɒn.stənt.li/",
        "pos": "Liên tục",
        "ex": ""
    },
    {
        "num": 645,
        "en": "Dictionary",
        "vi": "n.",
        "ipa": "/ˈdɪk.ʃən.ər.i/",
        "pos": "Từ điển",
        "ex": ""
    },
    {
        "num": 646,
        "en": "Gradually",
        "vi": "adv.",
        "ipa": "/ˈɡrædʒ.u.ə.li/",
        "pos": "Dần dần",
        "ex": ""
    },
    {
        "num": 647,
        "en": "Rise",
        "vi": "v., n.",
        "ipa": "/raɪz/",
        "pos": "Tăng lên / Sự tăng lên",
        "ex": ""
    },
    {
        "num": 648,
        "en": "Slang",
        "vi": "n.",
        "ipa": "/slæŋ/",
        "pos": "Tiếng lóng",
        "ex": ""
    },
    {
        "num": 649,
        "en": "Abbreviation",
        "vi": "n.",
        "ipa": "/əˌbriː.viˈeɪ.ʃən/",
        "pos": "Từ viết tắt",
        "ex": ""
    },
    {
        "num": 650,
        "en": "In a matter of",
        "vi": "phr.",
        "ipa": "/ɪn ə ˈmæt.ər əv/",
        "pos": "Chỉ trong vòng",
        "ex": ""
    },
    {
        "num": 651,
        "en": "Linguist",
        "vi": "n.",
        "ipa": "/ˈlɪŋ.ɡwɪst/",
        "pos": "Nhà ngôn ngữ học",
        "ex": ""
    },
    {
        "num": 652,
        "en": "Alive",
        "vi": "adj.",
        "ipa": "/əˈlaɪv/",
        "pos": "Còn sống, tồn tại, sống động",
        "ex": ""
    },
    {
        "num": 653,
        "en": "Cultural identity",
        "vi": "n.",
        "ipa": "/ˈkʌl.tʃər.əl aɪˈden.tə.ti/",
        "pos": "Bản sắc văn hóa",
        "ex": ""
    },
    {
        "num": 654,
        "en": "Intricate tapestry",
        "vi": "n. phr.",
        "ipa": "/ˈɪn.trɪ.kət ˈtæp.ɪ.stri/",
        "pos": "Bức tranh đa dạng và đan xen phức tạp",
        "ex": ""
    },
    {
        "num": 655,
        "en": "Indigenous traditions",
        "vi": "n. phr.",
        "ipa": "/ɪnˈdɪdʒ.ɪ.nəs trəˈdɪʃ.ənz/",
        "pos": "Các truyền thống bản địa",
        "ex": ""
    },
    {
        "num": 656,
        "en": "Filial piety",
        "vi": "n. phr.",
        "ipa": "/ˈfɪl.i.əl ˈpaɪ.ə.ti/",
        "pos": "Đạo hiếu / Lòng hiếu thảo",
        "ex": ""
    },
    {
        "num": 657,
        "en": "Social harmony",
        "vi": "n. phr.",
        "ipa": "/ˈsəʊ.ʃəl ˈhɑː.mə.ni/",
        "pos": "Sự hòa hợp xã hội",
        "ex": ""
    },
    {
        "num": 658,
        "en": "Close-knit",
        "vi": "adj.",
        "ipa": "/ˌkləʊsˈnɪt/",
        "pos": "Gắn bó khăng khít (dùng cho gia đình, cộng đồng)",
        "ex": ""
    },
    {
        "num": 659,
        "en": "Culinary artistry",
        "vi": "n. phr.",
        "ipa": "/ˈkʌl.ɪ.nər.i ˈɑː.tɪ.stri/",
        "pos": "Nghệ thuật ẩm thực",
        "ex": ""
    },
    {
        "num": 660,
        "en": "Captivating",
        "vi": "adj.",
        "ipa": "/ˈkæp.tɪ.veɪ.tɪŋ/",
        "pos": "Hấp dẫn, làm say đắm",
        "ex": ""
    },
    {
        "num": 661,
        "en": "Captivate",
        "vi": "v.",
        "ipa": "/ˈkæp.tɪ.veɪt/",
        "pos": "Thu hút, làm say đắm",
        "ex": ""
    },
    {
        "num": 662,
        "en": "Resilient",
        "vi": "adj.",
        "ipa": "/rɪˈzɪl.i.ənt/",
        "pos": "Kiên cường, có sức hồi phục mãnh liệt",
        "ex": ""
    },
    {
        "num": 663,
        "en": "Endure",
        "vi": "v.",
        "ipa": "/ɪnˈdʒʊə/",
        "pos": "Tồn tại với thời gian, chịu đựng",
        "ex": ""
    },
    {
        "num": 664,
        "en": "Enduring",
        "vi": "adj.",
        "ipa": "/ɪnˈdʒʊə.rɪŋ/",
        "pos": "Lâu dài, trường tồn, bền bỉ cùng thời gian",
        "ex": ""
    },
    {
        "num": 665,
        "en": "Reverence",
        "vi": "n.",
        "ipa": "/ˈrev.ər.əns/",
        "pos": "Sự tôn kính",
        "ex": ""
    },
    {
        "num": 666,
        "en": "At the heart of",
        "vi": "idiom",
        "ipa": "/ət ðə hɑːt əv/",
        "pos": "Ở cốt lõi, ở trung tâm của",
        "ex": ""
    },
    {
        "num": 667,
        "en": "Reflect",
        "vi": "v.",
        "ipa": "/rɪˈflekt/",
        "pos": "Phản ánh, được phản chiếu/thể hiện",
        "ex": ""
    },
    {
        "num": 668,
        "en": "Rooted in",
        "vi": "adj. phr.",
        "ipa": "/ˈruː.tɪd ɪn/",
        "pos": "Bám rễ, bắt nguồn từ",
        "ex": ""
    },
    {
        "num": 669,
        "en": "Civilization",
        "vi": "n.",
        "ipa": "/ˌsɪv.əl.aɪˈzeɪ.ʃən/",
        "pos": "Nền văn minh",
        "ex": ""
    },
    {
        "num": 670,
        "en": "A fusion of",
        "vi": "n. phr.",
        "ipa": "/ə ˈfjuː.ʒən əv/",
        "pos": "Sự hợp nhất của, sự giao thoa của",
        "ex": ""
    },
    {
        "num": 671,
        "en": "External influences",
        "vi": "n. phr.",
        "ipa": "/ɪkˈstɜː.nəl ˈɪn.flu.ənsɪz/",
        "pos": "Ảnh hưởng từ bên ngoài",
        "ex": ""
    },
    {
        "num": 672,
        "en": "Historical interactions",
        "vi": "n. phr.",
        "ipa": "/hɪˈstɒr.ɪ.kəl ˌɪn.təˈræk.ʃənz/",
        "pos": "Sự tương tác lịch sử",
        "ex": ""
    },
    {
        "num": 673,
        "en": "Geographical location",
        "vi": "n. phr.",
        "ipa": "/ˌdʒiː.əˈɡræf.ɪ.kəl ləʊˈkeɪ.ʃən/",
        "pos": "Vị trí địa lí",
        "ex": ""
    },
    {
        "num": 674,
        "en": "First and foremost",
        "vi": "adv. phr.",
        "ipa": "/fɜːst ənd ˈfɔː.məʊst/",
        "pos": "Đầu tiên và quan trọng nhất",
        "ex": ""
    },
    {
        "num": 675,
        "en": "Confucian values",
        "vi": "n. phr.",
        "ipa": "/kənˈfjuː.ʃən ˈvæl.juːz/",
        "pos": "Các giá trị Nho giáo",
        "ex": ""
    },
    {
        "num": 676,
        "en": "Pivotal role",
        "vi": "n. phr.",
        "ipa": "/ˈpɪv.ə.təl rəʊl/",
        "pos": "Vai trò then chốt / quan trọng",
        "ex": ""
    },
    {
        "num": 677,
        "en": "Hierarchical relationships",
        "vi": "n. phr.",
        "ipa": "/ˌhaɪəˈrɑː.kɪ.kəl rɪˈleɪ.ʃən.ʃɪps/",
        "pos": "Các mối quan hệ tôn ti trật tự / thứ bậc",
        "ex": ""
    },
    {
        "num": 678,
        "en": "Communal ritual",
        "vi": "n. phr.",
        "ipa": "/ˈkɒm.jə.nəl ˈrɪtʃ.u.əl/",
        "pos": "Nghi lễ cộng đồng / phong tục tập quán",
        "ex": ""
    },
    {
        "num": 679,
        "en": "Integral (to)",
        "vi": "adj.",
        "ipa": "/ˈɪn.tɪ.ɡrəl/",
        "pos": "Thiết yếu, không thể thiếu",
        "ex": ""
    },
    {
        "num": 680,
        "en": "Celebrate",
        "vi": "v.",
        "ipa": "/ˈsel.ə.breɪt/",
        "pos": "Tôn vinh, kỷ niệm",
        "ex": ""
    },
    {
        "num": 681,
        "en": "Cuisine",
        "vi": "n.",
        "ipa": "/kwɪˈziːn/",
        "pos": "Ẩm thực",
        "ex": ""
    },
    {
        "num": 682,
        "en": "Exquisite flavors",
        "vi": "n. phr.",
        "ipa": "/ɪkˈskwɪz.ɪt ˈfleɪ.vəz/",
        "pos": "Hương vị tinh tế / hảo hạng",
        "ex": ""
    },
    {
        "num": 683,
        "en": "Diversity",
        "vi": "n.",
        "ipa": "/daɪˈvɜː.sə.ti/",
        "pos": "Sự đa dạng",
        "ex": ""
    },
    {
        "num": 684,
        "en": "Regional variations",
        "vi": "n. phr.",
        "ipa": "/ˈriː.dʒən.əl ˌveə.riˈeɪ.ʃənz/",
        "pos": "Sự khác biệt/biến tấu theo vùng miền",
        "ex": ""
    },
    {
        "num": 685,
        "en": "Fragrant herbs",
        "vi": "n. phr.",
        "ipa": "/ˈfreɪ.ɡrənt hɜːbz/",
        "pos": "Rau thơm / gia vị có mùi thơm",
        "ex": ""
    },
    {
        "num": 686,
        "en": "Iconic dishes",
        "vi": "n. phr.",
        "ipa": "/aɪˈkɒn.ɪk ˈdɪʃ.ɪz/",
        "pos": "Món ăn đặc trưng / mang tính biểu tượng",
        "ex": ""
    },
    {
        "num": 687,
        "en": "Spring rolls",
        "vi": "n.",
        "ipa": "/sprɪŋ rəʊlz/",
        "pos": "Nem cuốn / gỏi cuốn / chả giò",
        "ex": ""
    },
    {
        "num": 688,
        "en": "Ingrained",
        "vi": "adj.",
        "ipa": "/ɪnˈɡreɪnd/",
        "pos": "Ăn sâu vào (tiềm thức, thói quen)",
        "ex": ""
    },
    {
        "num": 689,
        "en": "Artistic expressions",
        "vi": "n. phr.",
        "ipa": "/ɑːˈtɪs.tɪk ɪkˈspreʃ.ənz/",
        "pos": "Hình thức biểu đạt nghệ thuật",
        "ex": ""
    },
    {
        "num": 690,
        "en": "Water puppetry",
        "vi": "n.",
        "ipa": "/ˈwɔː.tə ˈpʌp.ɪ.tri/",
        "pos": "Múa rối nước",
        "ex": ""
    },
    {
        "num": 691,
        "en": "Thrive",
        "vi": "v.",
        "ipa": "/θraɪv/",
        "pos": "Phát triển mạnh mẽ, thịnh vượng",
        "ex": ""
    },
    {
        "num": 692,
        "en": "Alongside",
        "vi": "prep.",
        "ipa": "/əˌlɒŋˈsaɪd/",
        "pos": "Cùng với, sát cánh cùng",
        "ex": ""
    },
    {
        "num": 693,
        "en": "Contemporary",
        "vi": "adj.",
        "ipa": "/kənˈtem.pər.ər.i/",
        "pos": "Đương đại",
        "ex": ""
    },
    {
        "num": 694,
        "en": "Monument",
        "vi": "n.",
        "ipa": "/ˈmɒn.jə.mənt/",
        "pos": "Tượng đài, đài kỷ niệm, di tích",
        "ex": ""
    },
    {
        "num": 695,
        "en": "Movement",
        "vi": "n.",
        "ipa": "/ˈmuːv.mənt/",
        "pos": "Phong trào, sự chuyển động",
        "ex": ""
    },
    {
        "num": 696,
        "en": "Graceful",
        "vi": "adj.",
        "ipa": "/ˈɡreɪs.fəl/",
        "pos": "Duyên dáng",
        "ex": ""
    },
    {
        "num": 697,
        "en": "Exemplify",
        "vi": "v.",
        "ipa": "/ɪɡˈzem.plɪ.faɪ/",
        "pos": "Trở thành ví dụ điển hình cho",
        "ex": ""
    },
    {
        "num": 698,
        "en": "Elegance",
        "vi": "n.",
        "ipa": "/ˈel.ɪ.ɡəns/",
        "pos": "Sự thanh lịch",
        "ex": ""
    },
    {
        "num": 699,
        "en": "Modesty",
        "vi": "n.",
        "ipa": "/ˈmɒd.ɪ.sti/",
        "pos": "Sự kín đáo, khiêm tốn",
        "ex": ""
    },
    {
        "num": 700,
        "en": "Symbolize",
        "vi": "v.",
        "ipa": "/ˈsɪm.bə.laɪz/",
        "pos": "Tượng trưng",
        "ex": ""
    }
];

// Ghi chú: Nếu dùng trong React/Module:
// export default vocabularyList;