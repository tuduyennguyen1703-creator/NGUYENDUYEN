const vocabData = [
    {
        "num": 1,
        "en": "Adjust to something",
        "vi": "Thích nghi với điều gì",
        "ipa": "/əˈdʒʌst tə ˈsʌm.θɪŋ/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 2,
        "en": "Adapt to",
        "vi": "Thích ứng với",
        "ipa": "/əˈdæpt tuː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 3,
        "en": "Acclimatize to",
        "vi": "Làm quen với môi trường, thủy thổ",
        "ipa": "/əˈklaɪ.mə.taɪz tuː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 4,
        "en": "Get used to",
        "vi": "Trở nên quen với",
        "ipa": "/ɡet juːst tuː/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 5,
        "en": "Resist",
        "vi": "Chống lại, kháng cự",
        "ipa": "/rɪˈzɪst/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 6,
        "en": "Refuse to change",
        "vi": "Từ chối thay đổi",
        "ipa": "/rɪˈfjuːz tə tʃeɪndʒ/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 7,
        "en": "Escape from the effects",
        "vi": "Thoát khỏi những tác động",
        "ipa": "/ɪˈskeɪp frəm ði ɪˈfekts/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 8,
        "en": "Avoid the impacts",
        "vi": "Tránh các tác động",
        "ipa": "/əˈvɔɪd ði ˈɪm.pækts/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 9,
        "en": "Get away from",
        "vi": "Tránh xa khỏi",
        "ipa": "/ɡet əˈweɪ frəm/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 10,
        "en": "Face the effects",
        "vi": "Đối mặt với những tác động",
        "ipa": "/feɪs ði ɪˈfekts/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 11,
        "en": "Suffer from",
        "vi": "Chịu đựng (hậu quả, tác động)",
        "ipa": "/ˈsʌf.ə frəm/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 12,
        "en": "Bloom earlier",
        "vi": "Nở hoa sớm hơn",
        "ipa": "/bluːm ˈɜː.li.ə/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 13,
        "en": "Open sooner",
        "vi": "Nở (hoa) sớm hơn",
        "ipa": "/ˈəʊ.pən ˈsuː.nə/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 14,
        "en": "Wither earlier",
        "vi": "Tàn, héo sớm hơn",
        "ipa": "/ˈwɪð.ə ˈɜː.li.ə/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 15,
        "en": "Bloom late",
        "vi": "Nở hoa muộn",
        "ipa": "/bluːm leɪt/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 16,
        "en": "Prevent shifts",
        "vi": "Ngăn cản sự dịch chuyển",
        "ipa": "/prɪˈvent ʃɪfts/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 17,
        "en": "Hinder movements",
        "vi": "Cản trở sự di chuyển",
        "ipa": "/ˈhɪn.də ˈmuːv.mənts/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 18,
        "en": "Block migrations",
        "vi": "Chặn lại các cuộc di cư",
        "ipa": "/blɒk maɪˈɡreɪ.ʃəns/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 19,
        "en": "Facilitate shifts",
        "vi": "Tạo điều kiện cho sự dịch chuyển",
        "ipa": "/fəˈsɪl.ɪ.teɪt ʃɪfts/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 20,
        "en": "Encourage movements",
        "vi": "Khuyến khích sự di chuyển",
        "ipa": "/ɪnˈkʌr.ɪdʒ ˈmuːv.mənts/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 21,
        "en": "Be at risk",
        "vi": "Đang gặp rủi ro, nguy hiểm",
        "ipa": "/bi ət rɪsk/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 22,
        "en": "Be in danger",
        "vi": "Đang trong vòng nguy hiểm",
        "ipa": "/bi ɪn ˈdeɪn.dʒə/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 23,
        "en": "Be vulnerable",
        "vi": "Dễ bị tổn thương",
        "ipa": "/bi ˈvʌl.nər.ə.bəl/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 24,
        "en": "Be under threat",
        "vi": "Đang bị đe dọa",
        "ipa": "/bi ˈʌn.də θret/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 25,
        "en": "Be safe",
        "vi": "Được an toàn",
        "ipa": "/bi seɪf/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 26,
        "en": "Be secure",
        "vi": "Được bảo đảm an toàn",
        "ipa": "/bi sɪˈkjʊə/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 27,
        "en": "Be protected",
        "vi": "Được bảo vệ",
        "ipa": "/bi prəˈtek.tɪd/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 28,
        "en": "Become extinct",
        "vi": "Trở nên tuyệt chủng",
        "ipa": "/bɪˈkʌm ɪkˈstɪŋkt/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 29,
        "en": "Die out",
        "vi": "Chết dần, tuyệt chủng",
        "ipa": "/daɪ aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 30,
        "en": "Vanish",
        "vi": "Biến mất hoàn toàn",
        "ipa": "/ˈvæn.ɪʃ/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 31,
        "en": "Flourish",
        "vi": "Hưng thịnh, phát triển rực rỡ",
        "ipa": "/ˈflʌr.ɪʃ/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 32,
        "en": "Adjust quickly",
        "vi": "Thích nghi một cách nhanh chóng",
        "ipa": "/əˈdʒʌst ˈkwɪk.li/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 33,
        "en": "Adapt rapidly",
        "vi": "Thích ứng nhanh chóng",
        "ipa": "/əˈdæpt ˈræp.ɪd.li/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 34,
        "en": "Respond slowly",
        "vi": "Phản ứng chậm chạp",
        "ipa": "/rɪˈspɒnd ˈsləʊ.li/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 35,
        "en": "Fail to adapt",
        "vi": "Không thể thích ứng",
        "ipa": "/feɪl tu əˈdæpt/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 36,
        "en": "Put / Place stress on sth",
        "vi": "Gây áp lực lên cái gì",
        "ipa": "/pʊt stres ɒn/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 37,
        "en": "Burden",
        "vi": "Đè gánh nặng lên",
        "ipa": "/ˈbɜː.dən/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 38,
        "en": "Relieve",
        "vi": "Làm dịu đi, làm bớt đi",
        "ipa": "/rɪˈliːv/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 39,
        "en": "Ease",
        "vi": "Làm giảm bớt (áp lực)",
        "ipa": "/iːz/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 40,
        "en": "Alleviate",
        "vi": "Làm nhẹ bớt, giảm nhẹ",
        "ipa": "/əˈliː.vi.eɪt/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 41,
        "en": "Observe shifts",
        "vi": "Quan sát thấy sự thay đổi / dịch chuyển",
        "ipa": "/əbˈzɜːv ʃɪfts/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 42,
        "en": "Notice changes",
        "vi": "Nhận thấy những thay đổi",
        "ipa": "/ˈnəʊ.tɪs tʃeɪndʒɪz/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 43,
        "en": "Detect movements",
        "vi": "Phát hiện sự di chuyển",
        "ipa": "/dɪˈtekt ˈmuːv.mənts/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 44,
        "en": "Shift their ranges",
        "vi": "Thay đổi phạm vi (sinh sống)",
        "ipa": "/ʃɪft ðeə ˈreɪndʒɪz/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 45,
        "en": "Change habitats",
        "vi": "Thay đổi môi trường sống",
        "ipa": "/tʃeɪndʒ ˈhæb.ɪ.tæts/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 46,
        "en": "Relocate",
        "vi": "Di dời, chuyển chỗ",
        "ipa": "/ˌriː.ləʊˈkeɪt/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 47,
        "en": "Move territories",
        "vi": "Di chuyển lãnh thổ",
        "ipa": "/muːv ˈter.ɪ.tər.iz/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 48,
        "en": "Human development",
        "vi": "Sự phát triển của con người (đô thị hóa)",
        "ipa": "/ˈhjuː.mən dɪˈvel.əp.mənt/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 49,
        "en": "Urbanization",
        "vi": "Đô thị hóa",
        "ipa": "/ˌɜː.bən.aɪˈzeɪ.ʃən/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 50,
        "en": "Industrialization",
        "vi": "Công nghiệp hóa",
        "ipa": "/ɪnˌdʌs.tri.ə.laɪˈzeɪ.ʃən/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 51,
        "en": "Unique ecosystems",
        "vi": "Các hệ sinh thái độc đáo",
        "ipa": "/juːˈniːk ˈiː.kəʊˌsɪs.təms/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 52,
        "en": "Distinct environments",
        "vi": "Những môi trường riêng biệt, khác biệt",
        "ipa": "/dɪˈstɪŋkt ɪnˈvaɪ.rən.mənts/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 53,
        "en": "One-of-a-kind habitats",
        "vi": "Những môi trường sống độc nhất vô nhị",
        "ipa": "/ˌwʌn.əv.əˈkaɪnd ˈhæb.ɪ.tæts/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 54,
        "en": "Project species extinction",
        "vi": "Dự báo sự tuyệt chủng của các loài",
        "ipa": "/prəˈdʒekt ˈspiː.ʃiːz ɪkˈstɪŋk.ʃən/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 55,
        "en": "Forecast / Predict species loss",
        "vi": "Dự báo sự mất mát của các loài",
        "ipa": "/ˈfɔː.kɑːst ˈspiː.ʃiːz lɒs/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 56,
        "en": "Be committed to extinction",
        "vi": "Bị đẩy đến bờ vực tuyệt chủng",
        "ipa": "/bi kəˈmɪt.ɪd tu ɪkˈstɪŋk.ʃən/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 57,
        "en": "Be doomed to die out",
        "vi": "Chắc chắn sẽ chết mòn/tuyệt chủng",
        "ipa": "/bi duːmd tə daɪ aʊt/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 58,
        "en": "Be driven to extinction",
        "vi": "Bị dồn đến chỗ tuyệt chủng",
        "ipa": "/bi ˈdrɪv.ən tu ɪkˈstɪŋk.ʃən/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 59,
        "en": "Widespread bleaching",
        "vi": "Hiện tượng tẩy trắng (san hô) trên diện rộng",
        "ipa": "/ˌwaɪdˈspred ˈbliː.tʃɪŋ/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 60,
        "en": "Extensive bleaching",
        "vi": "Sự tẩy trắng trên diện rộng",
        "ipa": "/ɪkˈsten.sɪv ˈbliː.tʃɪŋ/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 61,
        "en": "Massive bleaching",
        "vi": "Sự tẩy trắng hàng loạt",
        "ipa": "/ˈmæs.ɪv ˈbliː.tʃɪŋ/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 62,
        "en": "Annual migration patterns",
        "vi": "Các mô hình / tập tính di cư hàng năm",
        "ipa": "/ˈæn.ju.əl maɪˈɡreɪ.ʃən ˈpæt.əns/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 63,
        "en": "Dwindling",
        "vi": "Nhỏ dần, thu hẹp, cạn kiệt",
        "ipa": "/ˈdwɪn.dlɪŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 64,
        "en": "Shrinking",
        "vi": "Co lại, thu hẹp lại",
        "ipa": "/ˈʃrɪŋ.kɪŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 65,
        "en": "Diminishing",
        "vi": "Giảm bớt, thu nhỏ lại",
        "ipa": "/dɪˈmɪn.ɪ.ʃɪŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 66,
        "en": "Expanding",
        "vi": "Mở rộng, phát triển",
        "ipa": "/ɪkˈspæn.dɪŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 67,
        "en": "Growing",
        "vi": "Đang phát triển, lớn lên",
        "ipa": "/ˈɡrəʊ.ɪŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 68,
        "en": "Rising",
        "vi": "Đang tăng lên",
        "ipa": "/ˈraɪ.zɪŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 69,
        "en": "Extinct",
        "vi": "Đã tuyệt chủng",
        "ipa": "/ɪkˈstɪŋkt/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 70,
        "en": "Vanished",
        "vi": "Đã biến mất",
        "ipa": "/ˈvæn.ɪʃt/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 71,
        "en": "Dead",
        "vi": "Đã chết",
        "ipa": "/ded/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 72,
        "en": "Lost",
        "vi": "Đã mất tích, thất lạc",
        "ipa": "/lɒst/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 73,
        "en": "Wiped out",
        "vi": "Bị xóa sổ hoàn toàn",
        "ipa": "/waɪpt aʊt/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 74,
        "en": "Alive",
        "vi": "Còn sống",
        "ipa": "/əˈlaɪv/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 75,
        "en": "Extant",
        "vi": "Hiện còn tồn tại (chưa tuyệt chủng)",
        "ipa": "/ɪkˈstænt/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 76,
        "en": "Living",
        "vi": "Đang sống",
        "ipa": "/ˈlɪv.ɪŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 77,
        "en": "Surviving",
        "vi": "Còn sống sót",
        "ipa": "/səˈvaɪ.vɪŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 78,
        "en": "Delicate",
        "vi": "Mong manh, thanh tú, tinh tế",
        "ipa": "/ˈdel.ɪ.kət/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 79,
        "en": "Easily damaged",
        "vi": "Dễ bị hư hại",
        "ipa": "/ˈiː.zɪ.li ˈdæm.ɪdʒd/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 80,
        "en": "Prolonged",
        "vi": "Kéo dài",
        "ipa": "/prəˈlɒŋd/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 81,
        "en": "Extended",
        "vi": "Được mở rộng, kéo dài thêm",
        "ipa": "/ɪkˈsten.dɪd/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 82,
        "en": "Lengthy",
        "vi": "Dài dòng, kéo dài",
        "ipa": "/ˈleŋ.θi/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 83,
        "en": "Sustained",
        "vi": "Được duy trì liên tục",
        "ipa": "/səˈsteɪnd/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 84,
        "en": "Short",
        "vi": "Ngắn",
        "ipa": "/ʃɔːt/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 85,
        "en": "Shortened",
        "vi": "Bị rút ngắn",
        "ipa": "/ˈʃɔː.tənd/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 86,
        "en": "Widespread",
        "vi": "Diện rộng, phổ biến",
        "ipa": "/ˌwaɪdˈspred/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 87,
        "en": "Extensive",
        "vi": "Rộng rãi, bao quát",
        "ipa": "/ɪkˈsten.sɪv/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 88,
        "en": "Prevalent",
        "vi": "Thịnh hành, phổ biến khắp nơi",
        "ipa": "/ˈprev.əl.ənt/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 89,
        "en": "Broad",
        "vi": "Rộng, bao la",
        "ipa": "/brɔːd/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 90,
        "en": "Limited",
        "vi": "Hạn chế, có giới hạn",
        "ipa": "/ˈlɪm.ɪ.tɪd/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 91,
        "en": "Localized",
        "vi": "Cục bộ, giới hạn trong một khu vực",
        "ipa": "/ˈləʊ.kəl.aɪzd/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 92,
        "en": "Narrow",
        "vi": "Hẹp",
        "ipa": "/ˈnær.əʊ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 93,
        "en": "Immensity",
        "vi": "Sự bao la, rộng lớn",
        "ipa": "/ɪˈmen.sə.ti/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 94,
        "en": "Aggravate",
        "vi": "Làm bực mình, làm xấu thêm",
        "ipa": "/ˈæɡ.rə.veɪt/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 95,
        "en": "Compound",
        "vi": "Làm phức tạp thêm, trầm trọng thêm",
        "ipa": "/kəmˈpaʊnd/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 96,
        "en": "Mitigate",
        "vi": "Làm giảm nhẹ, làm dịu đi",
        "ipa": "/ˈmɪt.ɪ.ɡeɪt/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 97,
        "en": "Soothe",
        "vi": "Xoa dịu, dỗ dành",
        "ipa": "/suːð/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 98,
        "en": "Heal",
        "vi": "Chữa lành, hàn gắn",
        "ipa": "/hiːl/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 99,
        "en": "Resilience",
        "vi": "Khả năng phục hồi, sự kiên cường",
        "ipa": "/rɪˈzɪl.i.əns/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 100,
        "en": "Flexibility",
        "vi": "Sự linh hoạt, mềm dẻo",
        "ipa": "/ˌflek.səˈbɪl.ə.ti/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 101,
        "en": "Toughness",
        "vi": "Sự cứng rắn, dẻo dai",
        "ipa": "/ˈtʌf.nəs/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 102,
        "en": "Endurance",
        "vi": "Sức chịu đựng, sự nhẫn nại",
        "ipa": "/ɪnˈdʒʊə.rəns/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 103,
        "en": "Vulnerability",
        "vi": "Sự dễ bị tổn thương",
        "ipa": "/ˌvʌl.nər.əˈbɪl.ə.ti/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 104,
        "en": "Fragility",
        "vi": "Sự mong manh, dễ vỡ",
        "ipa": "/frəˈdʒɪl.ə.ti/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 105,
        "en": "Weakness",
        "vi": "Điểm yếu, sự yếu đuối",
        "ipa": "/ˈwiːk.nəs/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 106,
        "en": "Be made available to sb",
        "vi": "Được cung cấp sẵn cho ai đó sử dụng",
        "ipa": "/bi meɪd əˈveɪ.lə.bəl tə/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 107,
        "en": "Be provided for",
        "vi": "Được cung cấp cho",
        "ipa": "/bi prəˈvaɪ.dɪd fɔː/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 108,
        "en": "Be accessible to",
        "vi": "Có thể tiếp cận được bởi",
        "ipa": "/bi əkˈses.ə.bəl tuː/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 109,
        "en": "Be hidden from",
        "vi": "Bị giấu khỏi",
        "ipa": "/bi ˈhɪd.ən frəm/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 110,
        "en": "Be restricted from",
        "vi": "Bị hạn chế khỏi",
        "ipa": "/bi rɪˈstrɪk.tɪd frəm/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 111,
        "en": "Provide users with access to sth",
        "vi": "Cung cấp cho người dùng quyền truy cập vào cái gì",
        "ipa": "/prəˈvaɪd ˈjuː.zəz wɪð ˈæk.ses tu/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 112,
        "en": "Grant entry to",
        "vi": "Cấp quyền truy cập vào",
        "ipa": "/ɡrɑːnt ˈen.tri tuː/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 113,
        "en": "Allow usage of",
        "vi": "Cho phép sử dụng",
        "ipa": "/əˈlaʊ ˈjuː.zɪdʒ əv/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 114,
        "en": "Deny access to",
        "vi": "Từ chối quyền truy cập vào",
        "ipa": "/dɪˈnaɪ ˈæk.ses tuː/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 115,
        "en": "Block users from",
        "vi": "Chặn người dùng khỏi",
        "ipa": "/blɒk ˈjuː.zəz frəm/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 116,
        "en": "Central mission",
        "vi": "Sứ mệnh trung tâm / cốt lõi",
        "ipa": "/ˈsen.trəl ˈmɪʃ.ən/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 117,
        "en": "Core objective",
        "vi": "Mục tiêu cốt lõi",
        "ipa": "/kɔːr əbˈdʒek.tɪv/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 118,
        "en": "Primary goal",
        "vi": "Mục tiêu chính",
        "ipa": "/ˈpraɪ.mə.ri ɡəʊl/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 119,
        "en": "Main aim",
        "vi": "Mục đích chính",
        "ipa": "/meɪn eɪm/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 120,
        "en": "Secondary aim",
        "vi": "Mục đích phụ",
        "ipa": "/ˈsek.ən.dri eɪm/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 121,
        "en": "Minor objective",
        "vi": "Mục tiêu nhỏ / phụ",
        "ipa": "/ˈmaɪ.nər əbˈdʒek.tɪv/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 122,
        "en": "Fulfill a mission",
        "vi": "Thực thi / hoàn thành sứ mệnh",
        "ipa": "/fʊlˈfɪl ə ˈmɪʃ.ən/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 123,
        "en": "Accomplish a goal",
        "vi": "Đạt được mục tiêu",
        "ipa": "/əˈkʌm.plɪʃ ə ɡəʊl/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 124,
        "en": "Achieve an objective",
        "vi": "Đạt được mục tiêu",
        "ipa": "/əˈtʃiːv ən əbˈdʒek.tɪv/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 125,
        "en": "Fail a mission",
        "vi": "Thất bại sứ mệnh",
        "ipa": "/feɪl ə ˈmɪʃ.ən/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 126,
        "en": "Abandon a mission",
        "vi": "Từ bỏ sứ mệnh",
        "ipa": "/əˈbæn.dən ə ˈmɪʃ.ən/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 127,
        "en": "Gain information",
        "vi": "Thu thập / lấy thông tin",
        "ipa": "/ɡeɪn ˌɪn.fəˈmeɪ.ʃən/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 128,
        "en": "Acquire data",
        "vi": "Thu thập dữ liệu",
        "ipa": "/əˈkwaɪə ˈdeɪ.tə/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 129,
        "en": "Obtain knowledge",
        "vi": "Đạt được kiến thức",
        "ipa": "/əbˈteɪn ˈnɒl.ɪdʒ/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 130,
        "en": "Lose information",
        "vi": "Đánh mất thông tin",
        "ipa": "/luːz ˌɪn.fəˈmeɪ.ʃən/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 131,
        "en": "Miss data",
        "vi": "Bỏ lỡ dữ liệu",
        "ipa": "/mɪs ˈdeɪ.tə/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 132,
        "en": "Supplement and enhance",
        "vi": "Bổ sung và nâng cao",
        "ipa": "/ˈsʌp.lɪ.mənt ənd ɪnˈhɑːns/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 133,
        "en": "Complement and improve",
        "vi": "Bổ sung và cải thiện",
        "ipa": "/ˈkɒm.plɪ.mənt ənd ɪmˈpruːv/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 134,
        "en": "Boost",
        "vi": "Thúc đẩy, nâng cao",
        "ipa": "/buːst/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 135,
        "en": "Reduce and degrade",
        "vi": "Giảm bớt và làm suy thoái",
        "ipa": "/rɪˈdʒuːs ənd dɪˈɡreɪd/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 136,
        "en": "Diminish",
        "vi": "Làm giảm bớt, suy yếu",
        "ipa": "/dɪˈmɪn.ɪʃ/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 137,
        "en": "A variety of materials",
        "vi": "Đa dạng các loại tài liệu",
        "ipa": "/ə vəˈraɪ.ə.ti əv məˈtɪə.ri.əlz/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 138,
        "en": "A wide range of materials",
        "vi": "Nhiều loại tài liệu",
        "ipa": "/ə waɪd reɪndʒ əv məˈtɪə.ri.əlz/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 139,
        "en": "An array of materials",
        "vi": "Một loạt các tài liệu",
        "ipa": "/ən əˈreɪ əv məˈtɪə.ri.əlz/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 140,
        "en": "Pass down to succeeding generations",
        "vi": "Truyền lại cho các thế hệ nối tiếp",
        "ipa": "/pɑːs daʊn tə səkˈsiː.dɪŋ ˌdʒen.əˈreɪ.ʃənz/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 141,
        "en": "Hand down",
        "vi": "Truyền lại",
        "ipa": "/hænd daʊn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 142,
        "en": "Transmit to future generations",
        "vi": "Truyền lại cho thế hệ tương lai",
        "ipa": "/trænzˈmɪt tə ˈfjuː.tʃə ˌdʒen.əˈreɪ.ʃənz/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 143,
        "en": "Personal interests",
        "vi": "Những mối quan tâm / sở thích cá nhân",
        "ipa": "/ˈpɜː.sən.əl ˈɪn.trəsts/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 144,
        "en": "Individual passions",
        "vi": "Đam mê cá nhân",
        "ipa": "/ˌɪn.dɪˈvɪdʒ.u.əl ˈpæʃ.ənz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 145,
        "en": "Hobbies",
        "vi": "Sở thích",
        "ipa": "/ˈhɒb.iz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 146,
        "en": "Locate sources of information",
        "vi": "Định vị / Tìm kiếm các nguồn thông tin",
        "ipa": "/ləʊˈkeɪt ˈsɔː.sɪz əv ˌɪn.fəˈmeɪ.ʃən/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 147,
        "en": "Find materials",
        "vi": "Tìm kiếm tài liệu",
        "ipa": "/faɪnd məˈtɪə.ri.əlz/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 148,
        "en": "Pinpoint references",
        "vi": "Xác định chính xác tài liệu tham khảo",
        "ipa": "/ˈpɪn.pɔɪnt ˈref.ər.ənsɪz/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 149,
        "en": "Develop study habits",
        "vi": "Phát triển thói quen học tập",
        "ipa": "/dɪˈvel.əp ˈstʌd.i ˈhæb.ɪts/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 150,
        "en": "Form learning routines",
        "vi": "Hình thành thói quen học tập",
        "ipa": "/fɔːm ˈlɜː.nɪŋ ruːˈtiːnz/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 151,
        "en": "Build academic habits",
        "vi": "Xây dựng thói quen học thuật",
        "ipa": "/bɪld ˌæk.əˈdem.ɪk ˈhæb.ɪts/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 152,
        "en": "Cultural institutions",
        "vi": "Các thể chế / cơ quan văn hóa",
        "ipa": "/ˈkʌl.tʃər.əl ˌɪn.stɪˈtʃuː.ʃənz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 153,
        "en": "Heritage organizations",
        "vi": "Các tổ chức di sản",
        "ipa": "/ˈher.ɪ.tɪdʒ ˌɔː.ɡən.aɪˈzeɪ.ʃənz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 154,
        "en": "Cultural establishments",
        "vi": "Các cơ sở văn hóa",
        "ipa": "/ˈkʌl.tʃər.əl ɪˈstæb.lɪʃ.mənts/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 155,
        "en": "Access to information",
        "vi": "Quyền/ khả năng tiếp nhận thông tin",
        "ipa": "/ˈæk.ses tu ˌɪn.fəˈmeɪ.ʃən/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 156,
        "en": "Informational materials",
        "vi": "Tài liệu thông tin",
        "ipa": "/ˌɪn.fəˈmeɪ.ʃən.əl məˈtɪə.ri.əlz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 157,
        "en": "Public policy issues",
        "vi": "Các vấn đề về chính sách công",
        "ipa": "/ˈpʌb.lɪk ˈpɒl.ə.si ˈɪʃ.uːz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 158,
        "en": "Research legislation",
        "vi": "Nghiên cứu luật pháp",
        "ipa": "/rɪˈsɜːtʃ ˌledʒ.ɪˈsleɪ.ʃən/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 159,
        "en": "Classroom experiences",
        "vi": "Trải nghiệm học tập trên lớp",
        "ipa": "/ˈklɑːs.ruːm ɪkˈspɪə.ri.ənsɪz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 160,
        "en": "Electronic formats",
        "vi": "Các định dạng điện tử",
        "ipa": "/ɪˌlekˈtrɒn.ɪk ˈfɔː.mæts/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 161,
        "en": "Contemporary libraries",
        "vi": "Các thư viện đương đại/hiện đại",
        "ipa": "/kənˈtem.pər.ər.i ˈlaɪ.brər.iz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 162,
        "en": "Printed materials",
        "vi": "Tài liệu in ấn",
        "ipa": "/ˈprɪn.tɪd məˈtɪə.ri.əlz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 163,
        "en": "Audio-visual databases",
        "vi": "Cơ sở dữ liệu nghe nhìn",
        "ipa": "/ˌɔː.di.əʊˈvɪʒ.u.əl ˈdeɪ.tə.beɪsɪz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 164,
        "en": "Remote sites",
        "vi": "Các địa điểm từ xa",
        "ipa": "/rɪˈməʊt saɪts/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 165,
        "en": "Contemporary",
        "vi": "Đương đại, cùng thời",
        "ipa": "/kənˈtem.pər.ər.i/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 166,
        "en": "Modern",
        "vi": "Hiện đại",
        "ipa": "/ˈmɒd.ən/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 167,
        "en": "Current",
        "vi": "Hiện hành, hiện tại",
        "ipa": "/ˈkʌr.ənt/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 168,
        "en": "Present-day",
        "vi": "Ngày nay",
        "ipa": "/ˌprez.əntˈdeɪ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 169,
        "en": "Old-fashioned",
        "vi": "Lỗi thời, cổ hủ",
        "ipa": "/ˌəʊldˈfæʃ.ənd/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 170,
        "en": "Ancient",
        "vi": "Cổ đại, xa xưa",
        "ipa": "/ˈeɪn.ʃənt/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 171,
        "en": "Traditional",
        "vi": "Truyền thống",
        "ipa": "/trəˈdɪʃ.ən.əl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 172,
        "en": "Remote",
        "vi": "Xa xôi, hẻo lánh",
        "ipa": "/rɪˈməʊt/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 173,
        "en": "Distant",
        "vi": "Xa cách, xa xôi",
        "ipa": "/ˈdɪs.tənt/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 174,
        "en": "Faraway",
        "vi": "Xa xăm",
        "ipa": "/ˈfɑː.rə.weɪ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 175,
        "en": "Isolated",
        "vi": "Bị cô lập, biệt lập",
        "ipa": "/ˈaɪ.sə.leɪ.tɪd/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 176,
        "en": "Nearby",
        "vi": "Gần đây",
        "ipa": "/ˌnɪəˈbaɪ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 177,
        "en": "Close",
        "vi": "Gần gũi, sát gần",
        "ipa": "/kləʊs/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 178,
        "en": "Accessible",
        "vi": "Có thể tiếp cận được",
        "ipa": "/əkˈses.ə.bəl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 179,
        "en": "Preserve",
        "vi": "Bảo tồn, gìn giữ",
        "ipa": "/prɪˈzɜːv/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 180,
        "en": "Conserve",
        "vi": "Bảo tồn, giữ gìn",
        "ipa": "/kənˈsɜːv/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 181,
        "en": "Protect",
        "vi": "Bảo vệ",
        "ipa": "/prəˈtekt/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 182,
        "en": "Maintain",
        "vi": "Duy trì, bảo dưỡng",
        "ipa": "/meɪnˈteɪn/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 183,
        "en": "Destroy",
        "vi": "Phá hủy",
        "ipa": "/dɪˈstrɔɪ/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 184,
        "en": "Ruin",
        "vi": "Làm hỏng, tàn phá",
        "ipa": "/ˈruː.ɪn/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 185,
        "en": "Neglect",
        "vi": "Bỏ bê, thờ ơ",
        "ipa": "/nɪˈɡlekt/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 186,
        "en": "Essential",
        "vi": "Thiết yếu, vô cùng quan trọng",
        "ipa": "/ɪˈsen.ʃəl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 187,
        "en": "Crucial",
        "vi": "Cực kỳ quan trọng",
        "ipa": "/ˈkruː.ʃəl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 188,
        "en": "Vital",
        "vi": "Có tính sống còn",
        "ipa": "/ˈvaɪ.təl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 189,
        "en": "Necessary",
        "vi": "Cần thiết",
        "ipa": "/ˈnes.ə.ser.i/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 190,
        "en": "Indispensable",
        "vi": "Không thể thiếu được",
        "ipa": "/ˌɪn.dɪˈspen.sə.bəl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 191,
        "en": "Unnecessary",
        "vi": "Không cần thiết",
        "ipa": "/ʌnˈnes.ə.ser.i/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 192,
        "en": "Trivial",
        "vi": "Tầm thường, vặt vãnh",
        "ipa": "/ˈtrɪv.i.əl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 193,
        "en": "Optional",
        "vi": "Tùy chọn, không bắt buộc",
        "ipa": "/ˈɒp.ʃən.əl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 194,
        "en": "Recreational",
        "vi": "(Thuộc về) Giải trí",
        "ipa": "/ˌrek.riˈeɪ.ʃən.əl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 195,
        "en": "Entertaining",
        "vi": "Có tính giải trí",
        "ipa": "/ˌen.təˈteɪ.nɪŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 196,
        "en": "Leisurely",
        "vi": "Nhàn nhã, ung dung",
        "ipa": "/ˈleʒ.ə.li/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 197,
        "en": "Relaxing",
        "vi": "Thư giãn",
        "ipa": "/rɪˈlæk.sɪŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 198,
        "en": "Professional",
        "vi": "Chuyên nghiệp",
        "ipa": "/prəˈfeʃ.ən.əl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 199,
        "en": "Academic",
        "vi": "(Thuộc về) Học thuật",
        "ipa": "/ˌæk.əˈdem.ɪk/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 200,
        "en": "Serious",
        "vi": "Nghiêm túc",
        "ipa": "/ˈsɪə.ri.əs/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 201,
        "en": "Supplement",
        "vi": "Bổ sung, thêm vào",
        "ipa": "/ˈsʌp.lɪ.mənt/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 202,
        "en": "Add to",
        "vi": "Thêm vào",
        "ipa": "/æd tuː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 203,
        "en": "Complement",
        "vi": "Làm đầy đủ, làm hoàn thiện",
        "ipa": "/ˈkɒm.plɪ.mənt/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 204,
        "en": "Enrich",
        "vi": "Làm phong phú thêm",
        "ipa": "/ɪnˈrɪtʃ/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 205,
        "en": "Subtract",
        "vi": "Trừ đi",
        "ipa": "/səbˈtrækt/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 206,
        "en": "Deduct",
        "vi": "Khấu trừ",
        "ipa": "/dɪˈdʌkt/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 207,
        "en": "Lessen",
        "vi": "Làm giảm đi, vơi đi",
        "ipa": "/ˈles.ən/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 208,
        "en": "Succeeding",
        "vi": "Kế tiếp, nối tiếp",
        "ipa": "/səkˈsiː.dɪŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 209,
        "en": "Following",
        "vi": "Tiếp theo",
        "ipa": "/ˈfɒl.əʊ.ɪŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 210,
        "en": "Subsequent",
        "vi": "Xảy ra sau, theo sau",
        "ipa": "/ˈsʌb.sɪ.kwənt/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 211,
        "en": "Next",
        "vi": "Kế tiếp",
        "ipa": "/nekst/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 212,
        "en": "Preceding",
        "vi": "Đi trước",
        "ipa": "/prɪˈsiː.dɪŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 213,
        "en": "Former",
        "vi": "Trước đây, cựu",
        "ipa": "/ˈfɔː.mə/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 214,
        "en": "Previous",
        "vi": "Trước đó",
        "ipa": "/ˈpriː.vi.əs/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 215,
        "en": "Obtain",
        "vi": "Đạt được, thu được",
        "ipa": "/əbˈteɪn/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 216,
        "en": "Acquire",
        "vi": "Thu nhận, được",
        "ipa": "/əˈkwaɪə/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 217,
        "en": "Gain",
        "vi": "Giành được",
        "ipa": "/ɡeɪn/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 218,
        "en": "Earn",
        "vi": "Kiếm được",
        "ipa": "/ɜːn/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 219,
        "en": "Attain",
        "vi": "Đạt tới, giành được",
        "ipa": "/əˈteɪn/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 220,
        "en": "Lose",
        "vi": "Đánh mất",
        "ipa": "/luːz/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 221,
        "en": "Forfeit",
        "vi": "Bị tước, để mất",
        "ipa": "/ˈfɔː.fɪt/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 222,
        "en": "Surrender",
        "vi": "Từ bỏ, đầu hàng",
        "ipa": "/səˈren.də/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 223,
        "en": "Metropolitan areas",
        "vi": "Khu vực đô thị / siêu đô thị",
        "ipa": "/ˌmet.rəˈpɒl.ɪ.tən ˈeə.ri.əz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 224,
        "en": "Urban areas",
        "vi": "Khu vực đô thị",
        "ipa": "/ˈɜː.bən ˈeə.ri.əz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 225,
        "en": "Cities",
        "vi": "Thành phố",
        "ipa": "/ˈsɪt.iz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 226,
        "en": "Rural areas",
        "vi": "Khu vực nông thôn",
        "ipa": "/ˈrʊə.rəl ˈeə.ri.əz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 227,
        "en": "Countryside",
        "vi": "Nông thôn",
        "ipa": "/ˈkʌn.tri.saɪd/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 228,
        "en": "Be closely associated with",
        "vi": "Có liên quan chặt chẽ với",
        "ipa": "/bi ˈkləʊs.li əˈsəʊ.si.eɪ.tɪd wɪð/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 229,
        "en": "Be closely linked to",
        "vi": "Được liên kết chặt chẽ với",
        "ipa": "/bi ˈkləʊs.li lɪŋkt tuː/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 230,
        "en": "Be connected with",
        "vi": "Được kết nối / liên quan với",
        "ipa": "/bi kəˈnek.tɪd wɪð/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 231,
        "en": "Result from",
        "vi": "Bắt nguồn từ / Xuất phát từ",
        "ipa": "/rɪˈzʌlt frəm/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 232,
        "en": "Result in",
        "vi": "Dẫn đến",
        "ipa": "/rɪˈzʌlt ɪn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 233,
        "en": "Put stress on",
        "vi": "Gây áp lực lên (tài nguyên, hệ thống)",
        "ipa": "/pʊt stres ɒn/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 234,
        "en": "Place a burden on",
        "vi": "Đặt gánh nặng lên",
        "ipa": "/pleɪs ə ˈbɜː.dən ɒn/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 235,
        "en": "Put pressure on",
        "vi": "Đặt áp lực lên",
        "ipa": "/pʊt ˈpreʃ.ə ɒn/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 236,
        "en": "Mechanized farming",
        "vi": "Nông nghiệp / Canh tác được cơ giới hóa",
        "ipa": "/ˈmek.ə.naɪzd ˈfɑː.mɪŋ/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 237,
        "en": "Manual farming",
        "vi": "Canh tác thủ công",
        "ipa": "/ˈmæn.ju.əl ˈfɑː.mɪŋ/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 238,
        "en": "Engage in",
        "vi": "Tham gia vào",
        "ipa": "/ɪnˈɡeɪdʒ ɪn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 239,
        "en": "Participate in",
        "vi": "Tham gia vào",
        "ipa": "/pɑːˈtɪs.ɪ.peɪt ɪn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 240,
        "en": "Take part in",
        "vi": "Tham gia vào",
        "ipa": "/teɪk pɑːt ɪn/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 241,
        "en": "Be involved in",
        "vi": "Liên quan / Tham gia vào",
        "ipa": "/bi ɪnˈvɒlvd ɪn/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 242,
        "en": "Boost productivity",
        "vi": "Thúc đẩy / Nâng cao năng suất",
        "ipa": "/buːst ˌprɒd.ʌkˈtɪv.ə.ti/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 243,
        "en": "Increase productivity",
        "vi": "Gia tăng năng suất",
        "ipa": "/ɪnˈkriːs ˌprɒd.ʌkˈtɪv.ə.ti/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 244,
        "en": "Enhance productivity",
        "vi": "Nâng cao năng suất",
        "ipa": "/ɪnˈhɑːns ˌprɒd.ʌkˈtɪv.ə.ti/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 245,
        "en": "Sanction the value",
        "vi": "Tán thành / công nhận giá trị (của việc gì)",
        "ipa": "/ˈsæŋk.ʃən ðə ˈvæl.juː/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 246,
        "en": "Family planning",
        "vi": "Kế hoạch hóa gia đình",
        "ipa": "/ˌfæm.əl.i ˈplæn.ɪŋ/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 247,
        "en": "Have difficulty doing sth",
        "vi": "Gặp khó khăn trong việc làm gì",
        "ipa": "/hæv ˈdɪf.ɪ.kəl.ti ˈduː.ɪŋ/",
        "pos": "struct.",
        "ex": ""
    },
    {
        "num": 248,
        "en": "Available resources",
        "vi": "Nguồn tài nguyên có sẵn",
        "ipa": "/əˈveɪ.lə.bəl rɪˈzɔː.sɪz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 249,
        "en": "Extremely high level of poverty",
        "vi": "Mức độ nghèo đói cao",
        "ipa": "/ɪkˈstriːm.li haɪ ˈlev.əl əv ˈpɒv.ə.ti/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 250,
        "en": "Population density",
        "vi": "Mật độ dân số",
        "ipa": "/ˌpɒp.jəˈleɪ.ʃən ˈden.sɪ.ti/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 251,
        "en": "Contribute to sth",
        "vi": "Góp phần gây ra / dẫn đến điều gì",
        "ipa": "/kənˈtrɪb.juːt tə/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 252,
        "en": "Cultural norms",
        "vi": "Các chuẩn mực văn hóa",
        "ipa": "/ˈkʌl.tʃər.əl nɔːmz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 253,
        "en": "High standards of living",
        "vi": "Mức sống cao",
        "ipa": "/haɪ ˈstæn.dədz əv ˈlɪv.ɪŋ/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 254,
        "en": "At the other end of the spectrum",
        "vi": "Ở một thái cực ngược lại hoàn toàn",
        "ipa": "/ət ði ˈʌð.ər end əv ðə ˈspek.trəm/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 255,
        "en": "Commercial fertilizers",
        "vi": "Phân bón thương mại / công nghiệp",
        "ipa": "/kəˈmɜː.ʃəl ˈfɜː.tɪ.laɪ.zəz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 256,
        "en": "Large-scale irrigation",
        "vi": "Hệ thống tưới tiêu / thủy lợi quy mô lớn",
        "ipa": "/ˌlɑːdʒˈskeɪl ˌɪr.ɪˈɡeɪ.ʃən/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 257,
        "en": "Level of poverty",
        "vi": "Mức độ nghèo đói",
        "ipa": "/ˈlev.əl əv ˈpɒv.ə.ti/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 258,
        "en": "Agricultural productivity",
        "vi": "Năng suất nông nghiệp",
        "ipa": "/ˌæɡ.rɪˈkʌl.tʃər.əl ˌprɒd.ʌkˈtɪv.ə.ti/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 259,
        "en": "Labor-intensive",
        "vi": "Đòi hỏi nhiều sức lao động",
        "ipa": "/ˌleɪ.bər.ɪnˈten.sɪv/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 260,
        "en": "Subsistence activities",
        "vi": "Hoạt động tự cung tự cấp",
        "ipa": "/səbˈsɪs.təns ækˈtɪv.ɪ.tiz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 261,
        "en": "Subsistence farming",
        "vi": "Canh tác tự cung tự cấp",
        "ipa": "/səbˈsɪs.təns ˈfɑː.mɪŋ/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 262,
        "en": "Overpopulation",
        "vi": "Sự bùng nổ dân số",
        "ipa": "/ˌəʊ.vəˌpɒp.jəˈleɪ.ʃən/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 263,
        "en": "Overcrowding",
        "vi": "Sự đông đúc quá mức",
        "ipa": "/ˌəʊ.vəˈkraʊ.dɪŋ/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 264,
        "en": "Underpopulation",
        "vi": "Sự thiếu hụt dân số",
        "ipa": "/ˌʌn.dəˌpɒp.jəˈleɪ.ʃən/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 265,
        "en": "Excessively",
        "vi": "Một cách thái quá, quá mức",
        "ipa": "/ɪkˈses.ɪv.li/",
        "pos": "adv.",
        "ex": ""
    },
    {
        "num": 266,
        "en": "Extremely",
        "vi": "Vô cùng, tột độ",
        "ipa": "/ɪkˈstriːm.li/",
        "pos": "adv.",
        "ex": ""
    },
    {
        "num": 267,
        "en": "Overly",
        "vi": "Quá mức",
        "ipa": "/ˈəʊ.vəl.i/",
        "pos": "adv.",
        "ex": ""
    },
    {
        "num": 268,
        "en": "Heavily",
        "vi": "Nặng nề, rất nhiều",
        "ipa": "/ˈhev.əl.i/",
        "pos": "adv.",
        "ex": ""
    },
    {
        "num": 269,
        "en": "Moderately",
        "vi": "Một cách vừa phải",
        "ipa": "/ˈmɒd.ər.ət.li/",
        "pos": "adv.",
        "ex": ""
    },
    {
        "num": 270,
        "en": "Reasonably",
        "vi": "Một cách hợp lý",
        "ipa": "/ˈriː.zən.ə.bli/",
        "pos": "adv.",
        "ex": ""
    },
    {
        "num": 271,
        "en": "Infertile",
        "vi": "Khô cằn, bạc màu, vô sinh",
        "ipa": "/ɪnˈfɜː.taɪl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 272,
        "en": "Barren",
        "vi": "Khô cằn, cằn cỗi",
        "ipa": "/ˈbær.ən/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 273,
        "en": "Unproductive",
        "vi": "Không sinh lợi, không năng suất",
        "ipa": "/ˌʌn.prəˈdʌk.tɪv/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 274,
        "en": "Fertile",
        "vi": "Màu mỡ, phì nhiêu",
        "ipa": "/ˈfɜː.taɪl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 275,
        "en": "Fruitful",
        "vi": "Sai quả, màu mỡ, sinh lợi",
        "ipa": "/ˈfruːt.fəl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 276,
        "en": "Productive",
        "vi": "Năng suất, hữu ích",
        "ipa": "/prəˈdʌk.tɪv/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 277,
        "en": "Asset",
        "vi": "Tài sản, vốn quý, lợi thế",
        "ipa": "/ˈæs.et/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 278,
        "en": "Benefit",
        "vi": "Lợi ích",
        "ipa": "/ˈben.ɪ.fɪt/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 279,
        "en": "Advantage",
        "vi": "Lợi thế",
        "ipa": "/ədˈvɑːn.tɪdʒ/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 280,
        "en": "Resource",
        "vi": "Tài nguyên, nguồn lực",
        "ipa": "/rɪˈzɔːs/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 281,
        "en": "Liability",
        "vi": "Trách nhiệm pháp lý, gánh nặng",
        "ipa": "/ˌlaɪ.əˈbɪl.ə.ti/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 282,
        "en": "Disadvantage",
        "vi": "Sự bất lợi",
        "ipa": "/ˌdɪs.ədˈvɑːn.tɪdʒ/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 283,
        "en": "Subsistence",
        "vi": "Sự tự cung tự cấp, sinh kế",
        "ipa": "/səbˈsɪs.təns/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 284,
        "en": "Survival",
        "vi": "Sự sinh tồn",
        "ipa": "/səˈvaɪ.vəl/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 285,
        "en": "Existence",
        "vi": "Sự tồn tại",
        "ipa": "/ɪɡˈzɪs.təns/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 286,
        "en": "Manual",
        "vi": "Làm bằng tay, thủ công",
        "ipa": "/ˈmæn.ju.əl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 287,
        "en": "Physical",
        "vi": "(Thuộc về) Thể chất, vật lý",
        "ipa": "/ˈfɪz.ɪ.kəl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 288,
        "en": "Hand-operated",
        "vi": "Vận hành bằng tay",
        "ipa": "/ˈhændˌɒp.ər.eɪ.tɪd/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 289,
        "en": "Automated",
        "vi": "Tự động hóa",
        "ipa": "/ˈɔː.tə.meɪ.tɪd/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 290,
        "en": "Mechanized",
        "vi": "Cơ giới hóa",
        "ipa": "/ˈmek.ə.naɪzd/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 291,
        "en": "Abundance",
        "vi": "Sự dồi dào, phong phú",
        "ipa": "/əˈbʌn.dəns/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 292,
        "en": "Plenty",
        "vi": "Sự sung túc, nhiều",
        "ipa": "/ˈplen.ti/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 293,
        "en": "Wealth",
        "vi": "Sự giàu có, dồi dào",
        "ipa": "/welθ/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 294,
        "en": "Copiousness",
        "vi": "Sự phong phú, dư dật",
        "ipa": "/ˈkəʊ.pi.əs.nəs/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 295,
        "en": "Scarcity",
        "vi": "Sự khan hiếm",
        "ipa": "/ˈskeə.sɪ.ti/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 296,
        "en": "Lack",
        "vi": "Sự thiếu hụt",
        "ipa": "/læk/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 297,
        "en": "Shortage",
        "vi": "Sự thiếu thốn",
        "ipa": "/ˈʃɔː.tɪdʒ/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 298,
        "en": "Consequence",
        "vi": "Hậu quả",
        "ipa": "/ˈkɒn.sɪ.kwəns/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 299,
        "en": "Repercussion",
        "vi": "Hậu quả (thường xấu)",
        "ipa": "/ˌriː.pəˈkʌʃ.ən/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 300,
        "en": "Cause",
        "vi": "Nguyên nhân",
        "ipa": "/kɔːz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 301,
        "en": "Condense into liquid",
        "vi": "Ngưng tụ thành chất lỏng",
        "ipa": "/kənˈdens ˈɪn.tu ˈlɪk.wɪd/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 302,
        "en": "Turn into liquid",
        "vi": "Trở thành chất lỏng",
        "ipa": "/tɜːn ˈɪn.tu ˈlɪk.wɪd/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 303,
        "en": "Evaporate",
        "vi": "Bay hơi",
        "ipa": "/ɪˈvæp.ər.eɪt/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 304,
        "en": "Lead to",
        "vi": "Dẫn đến",
        "ipa": "/liːd tuː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 305,
        "en": "Bring about",
        "vi": "Mang lại, gây ra",
        "ipa": "/brɪŋ əˈbaʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 306,
        "en": "Release heat",
        "vi": "Tỏa nhiệt, giải phóng nhiệt",
        "ipa": "/rɪˈliːs hiːt/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 307,
        "en": "Give off heat",
        "vi": "Tỏa nhiệt",
        "ipa": "/ɡɪv ɒf hiːt/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 308,
        "en": "Emit heat",
        "vi": "Phát ra nhiệt",
        "ipa": "/ɪˈmɪt hiːt/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 309,
        "en": "Absorb heat",
        "vi": "Hấp thụ nhiệt",
        "ipa": "/əbˈzɔːb hiːt/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 310,
        "en": "Speed up",
        "vi": "Tăng tốc",
        "ipa": "/spiːd ʌp/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 311,
        "en": "Accelerate",
        "vi": "Thúc đẩy, tăng tốc",
        "ipa": "/əkˈsel.ə.reɪt/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 312,
        "en": "Quicken",
        "vi": "Làm nhanh hơn",
        "ipa": "/ˈkwɪk.ən/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 313,
        "en": "Slow down",
        "vi": "Chậm lại",
        "ipa": "/sləʊ daʊn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 314,
        "en": "Decelerate",
        "vi": "Giảm tốc độ",
        "ipa": "/ˌdiːˈsel.ə.reɪt/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 315,
        "en": "Qualify as",
        "vi": "Đủ điều kiện là, được coi là",
        "ipa": "/ˈkwɒl.ɪ.faɪ æz/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 316,
        "en": "Be categorized as",
        "vi": "Được phân loại là",
        "ipa": "/bi ˈkæt.ə.ɡər.aɪzd æz/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 317,
        "en": "Count as",
        "vi": "Được tính là",
        "ipa": "/kaʊnt æz/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 318,
        "en": "Weather professionals",
        "vi": "Chuyên gia thời tiết",
        "ipa": "/ˈweð.ə prəˈfeʃ.ən.əlz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 319,
        "en": "Weather researchers",
        "vi": "Nhà nghiên cứu thời tiết",
        "ipa": "/ˈweð.ə rɪˈsɜː.tʃəz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 320,
        "en": "Meteorologists",
        "vi": "Nhà khí tượng học",
        "ipa": "/ˌmiː.ti.əˈrɒl.ə.dʒɪsts/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 321,
        "en": "Be to blame for something",
        "vi": "Là nguyên nhân gây ra điều gì, chịu trách nhiệm cho",
        "ipa": "/bi tə bleɪm fɔː ˈsʌm.θɪŋ/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 322,
        "en": "Be responsible for",
        "vi": "Chịu trách nhiệm cho",
        "ipa": "/bi rɪˈspɒn.sə.bəl fɔː/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 323,
        "en": "Be the cause of",
        "vi": "Là nguyên nhân của",
        "ipa": "/bi ðə kɔːz əv/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 324,
        "en": "Forecast accurately",
        "vi": "Dự báo một cách chính xác",
        "ipa": "/ˈfɔː.kɑːst ˈæk.jə.rət.li/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 325,
        "en": "Predict precisely",
        "vi": "Dự đoán chính xác",
        "ipa": "/prɪˈdɪkt prɪˈsaɪs.li/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 326,
        "en": "Take a high death toll",
        "vi": "Gây ra tỷ lệ tử vong cao",
        "ipa": "/teɪk ə haɪ deθ təʊl/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 327,
        "en": "Cause massive casualties",
        "vi": "Gây ra thương vong lớn",
        "ipa": "/kɔːz ˈmæs.ɪv ˈkæʒ.u.əl.tiz/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 328,
        "en": "On the way",
        "vi": "Đang đến, đang trên đường tới",
        "ipa": "/ɒn ðə weɪ/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 329,
        "en": "Approaching",
        "vi": "Đang đến gần",
        "ipa": "/əˈprəʊ.tʃɪŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 330,
        "en": "Coming",
        "vi": "Đang tới",
        "ipa": "/ˈkʌm.ɪŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 331,
        "en": "Sweet-sounding names",
        "vi": "Những cái tên nghe ngọt ngào/êm tai",
        "ipa": "/swiːt ˈsaʊn.dɪŋ neɪmz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 332,
        "en": "Rotating storms",
        "vi": "Bão xoáy",
        "ipa": "/rəʊˈteɪ.tɪŋ stɔːmz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 333,
        "en": "Blow at speeds of",
        "vi": "Thổi với tốc độ...",
        "ipa": "/bləʊ ət spiːdz əv/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 334,
        "en": "Long-term forecasts",
        "vi": "Dự báo dài hạn",
        "ipa": "/ˌlɒŋˈtɜːm ˈfɔː.kɑːsts/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 335,
        "en": "Computer assistance",
        "vi": "Sự hỗ trợ của máy tính",
        "ipa": "/kəmˈpjuː.tər əˈsɪs.təns/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 336,
        "en": "Push seawater inland",
        "vi": "Đẩy nước biển vào sâu trong đất liền",
        "ipa": "/pʊʃ ˈsiːˌwɔː.tər ˈɪn.lænd/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 337,
        "en": "Storm surge",
        "vi": "Nước biển dâng do bão",
        "ipa": "/ˈstɔːm ˌsɜːdʒ/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 338,
        "en": "Push against",
        "vi": "Đẩy vào, tác động lực vào",
        "ipa": "/pʊʃ əˈɡeɪnst/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 339,
        "en": "Draw air upward",
        "vi": "Kéo/Hút không khí bay lên",
        "ipa": "/drɔː eər ˈʌp.wəd/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 340,
        "en": "Create a cycle",
        "vi": "Tạo ra một chu kỳ / vòng tuần hoàn",
        "ipa": "/kriˈeɪt ə ˈsaɪ.kəl/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 341,
        "en": "The northern hemispheres",
        "vi": "Bán cầu Bắc",
        "ipa": "/ðə ˈnɔː.ðən ˈhem.ɪ.sfɪəz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 342,
        "en": "The southern hemispheres",
        "vi": "Bán cầu Nam",
        "ipa": "/ðə ˈsʌð.ən ˈhem.ɪ.sfɪəz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 343,
        "en": "Water vapor",
        "vi": "Hơi nước",
        "ipa": "/ˈwɔː.tə ˈveɪ.pə/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 344,
        "en": "Humid",
        "vi": "Ẩm ướt (có nhiều hơi nước)",
        "ipa": "/ˈhjuː.mɪd/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 345,
        "en": "Moist",
        "vi": "Ẩm ướt",
        "ipa": "/mɔɪst/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 346,
        "en": "Damp",
        "vi": "Ẩm thấp, ẩm ướt",
        "ipa": "/dæmp/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 347,
        "en": "Muggy",
        "vi": "Nồm ẩm, oi bức",
        "ipa": "/ˈmʌɡ.i/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 348,
        "en": "Dry",
        "vi": "Khô hạn",
        "ipa": "/draɪ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 349,
        "en": "Arid",
        "vi": "Khô cằn",
        "ipa": "/ˈær.ɪd/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 350,
        "en": "Condense",
        "vi": "Ngưng tụ, đặc lại",
        "ipa": "/kənˈdens/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 351,
        "en": "Precipitate",
        "vi": "Kết tủa, làm ngưng tụ",
        "ipa": "/prɪˈsɪp.ɪ.teɪt/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 352,
        "en": "Thicken",
        "vi": "Làm đặc lại",
        "ipa": "/ˈθɪk.ən/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 353,
        "en": "Vaporize",
        "vi": "Bốc hơi, hóa hơi",
        "ipa": "/ˈveɪ.pər.aɪz/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 354,
        "en": "Equator",
        "vi": "Đường xích đạo",
        "ipa": "/ɪˈkweɪ.tə/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 355,
        "en": "Surge",
        "vi": "Sự dâng lên, trào lên đột ngột",
        "ipa": "/sɜːdʒ/",
        "pos": "n., v.",
        "ex": ""
    },
    {
        "num": 356,
        "en": "Rush",
        "vi": "Sự xô đẩy, vội vã",
        "ipa": "/rʌʃ/",
        "pos": "n., v.",
        "ex": ""
    },
    {
        "num": 357,
        "en": "Gush",
        "vi": "Phun trào, tuôn ra",
        "ipa": "/ɡʌʃ/",
        "pos": "n., v.",
        "ex": ""
    },
    {
        "num": 358,
        "en": "Rise",
        "vi": "Tăng lên, dâng lên",
        "ipa": "/raɪz/",
        "pos": "n., v.",
        "ex": ""
    },
    {
        "num": 359,
        "en": "Upsurge",
        "vi": "Sự bùng nổ, dâng trào",
        "ipa": "/ˈʌp.sɜːdʒ/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 360,
        "en": "Decrease",
        "vi": "Sự suy giảm, giảm bớt",
        "ipa": "/dɪˈkriːs/",
        "pos": "n., v.",
        "ex": ""
    },
    {
        "num": 361,
        "en": "Drop",
        "vi": "Sự tụt giảm, rơi",
        "ipa": "/drɒp/",
        "pos": "n., v.",
        "ex": ""
    },
    {
        "num": 362,
        "en": "Accurately",
        "vi": "Một cách chính xác",
        "ipa": "/ˈæk.jə.rət.li/",
        "pos": "adv.",
        "ex": ""
    },
    {
        "num": 363,
        "en": "Precisely",
        "vi": "Một cách chính xác, tỉ mỉ",
        "ipa": "/prɪˈsaɪs.li/",
        "pos": "adv.",
        "ex": ""
    },
    {
        "num": 364,
        "en": "Exactly",
        "vi": "Chính xác",
        "ipa": "/ɪɡˈzækt.li/",
        "pos": "adv.",
        "ex": ""
    },
    {
        "num": 365,
        "en": "Correctly",
        "vi": "Một cách đúng đắn",
        "ipa": "/kəˈrekt.li/",
        "pos": "adv.",
        "ex": ""
    },
    {
        "num": 366,
        "en": "Inaccurately",
        "vi": "Không chính xác",
        "ipa": "/ɪnˈæk.jə.rət.li/",
        "pos": "adv.",
        "ex": ""
    },
    {
        "num": 367,
        "en": "Vaguely",
        "vi": "Mơ hồ, không rõ ràng",
        "ipa": "/ˈveɪɡ.li/",
        "pos": "adv.",
        "ex": ""
    },
    {
        "num": 368,
        "en": "Evacuate",
        "vi": "Sơ tán, di tản",
        "ipa": "/ɪˈvæk.ju.eɪt/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 369,
        "en": "Clear out",
        "vi": "Dọn sạch, rời đi",
        "ipa": "/klɪər aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 370,
        "en": "Empty",
        "vi": "Làm trống",
        "ipa": "/ˈemp.ti/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 371,
        "en": "Move out",
        "vi": "Dọn ra ngoài, chuyển đi",
        "ipa": "/muːv aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 372,
        "en": "Remain",
        "vi": "Còn lại, ở lại",
        "ipa": "/rɪˈmeɪn/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 373,
        "en": "Stay",
        "vi": "Ở lại",
        "ipa": "/steɪ/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 374,
        "en": "Assistance",
        "vi": "Sự giúp đỡ, hỗ trợ",
        "ipa": "/əˈsɪs.təns/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 375,
        "en": "Help",
        "vi": "Sự giúp đỡ",
        "ipa": "/help/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 376,
        "en": "Aid",
        "vi": "Viện trợ, sự giúp đỡ",
        "ipa": "/eɪd/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 377,
        "en": "Support",
        "vi": "Sự ủng hộ, hỗ trợ",
        "ipa": "/səˈpɔːt/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 378,
        "en": "Hindrance",
        "vi": "Sự cản trở",
        "ipa": "/ˈhɪn.drəns/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 379,
        "en": "Obstruction",
        "vi": "Sự ách tắc, cản trở",
        "ipa": "/əbˈstrʌk.ʃən/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 380,
        "en": "Strength",
        "vi": "Cường độ, sức mạnh",
        "ipa": "/streŋθ/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 381,
        "en": "Power",
        "vi": "Sức mạnh, năng lượng",
        "ipa": "/ˈpaʊ.ə/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 382,
        "en": "Intensity",
        "vi": "Cường độ",
        "ipa": "/ɪnˈten.sə.ti/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 383,
        "en": "Force",
        "vi": "Lực lượng, sức mạnh",
        "ipa": "/fɔːs/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 384,
        "en": "Frailty",
        "vi": "Sự yếu ớt, mỏng manh",
        "ipa": "/ˈfreɪl.ti/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 385,
        "en": "Combination",
        "vi": "Sự kết hợp",
        "ipa": "/ˌkɒm.bɪˈneɪ.ʃən/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 386,
        "en": "Mixture",
        "vi": "Hỗn hợp",
        "ipa": "/ˈmɪks.tʃə/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 387,
        "en": "Blend",
        "vi": "Sự pha trộn",
        "ipa": "/blend/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 388,
        "en": "Synthesis",
        "vi": "Sự tổng hợp",
        "ipa": "/ˈsɪn.θə.sɪs/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 389,
        "en": "Separation",
        "vi": "Sự chia cắt, phân tách",
        "ipa": "/ˌsep.ərˈeɪ.ʃən/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 390,
        "en": "Division",
        "vi": "Sự phân chia",
        "ipa": "/dɪˈvɪʒ.ən/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 391,
        "en": "Gain weight",
        "vi": "Tăng cân",
        "ipa": "/ɡeɪn weɪt/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 392,
        "en": "Put on weight",
        "vi": "Tăng cân",
        "ipa": "/pʊt ɒn weɪt/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 393,
        "en": "Lose weight",
        "vi": "Giảm cân",
        "ipa": "/luːz weɪt/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 394,
        "en": "Do the trick",
        "vi": "Mang lại hiệu quả như mong muốn, giải quyết được vấn đề",
        "ipa": "/duː ðə trɪk/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 395,
        "en": "Work",
        "vi": "Có tác dụng, mang lại hiệu quả",
        "ipa": "/wɜːk/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 396,
        "en": "Be effective",
        "vi": "Có hiệu quả",
        "ipa": "/bi ɪˈfek.tɪv/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 397,
        "en": "Succeed",
        "vi": "Thành công",
        "ipa": "/səkˈsiːd/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 398,
        "en": "Fail",
        "vi": "Thất bại",
        "ipa": "/feɪl/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 399,
        "en": "Be ineffective",
        "vi": "Không có hiệu quả",
        "ipa": "/bi ˌɪn.ɪˈfek.tɪv/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 400,
        "en": "Be at a new high",
        "vi": "Đạt đến một mức cao kỷ lục mới",
        "ipa": "/bi ət ə njuː haɪ/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 401,
        "en": "Reach a peak",
        "vi": "Đạt đến đỉnh điểm",
        "ipa": "/riːtʃ ə piːk/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 402,
        "en": "Hit a record high",
        "vi": "Đạt mức cao kỷ lục",
        "ipa": "/hɪt ə ˈrek.ɔːd haɪ/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 403,
        "en": "A solution to a problem",
        "vi": "Giải pháp cho một vấn đề",
        "ipa": "/ə səˈluː.ʃən tu ə ˈprɒb.ləm/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 404,
        "en": "An answer to",
        "vi": "Lời giải đáp cho",
        "ipa": "/ən ˈɑːn.sə tuː/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 405,
        "en": "A remedy for",
        "vi": "Phương thuốc / giải pháp cho",
        "ipa": "/ə ˈrem.ə.di fɔː/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 406,
        "en": "See sth as sth",
        "vi": "Coi cái gì như là...",
        "ipa": "/siː ˈsʌm.θɪŋ æz ˈsʌm.θɪŋ/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 407,
        "en": "Regard sth as",
        "vi": "Xem cái gì như là",
        "ipa": "/rɪˈɡɑːd ˈsʌm.θɪŋ æz/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 408,
        "en": "Consider sth to be",
        "vi": "Cân nhắc/coi cái gì là",
        "ipa": "/kənˈsɪd.ə ˈsʌm.θɪŋ tə bi/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 409,
        "en": "View sth as",
        "vi": "Nhìn nhận cái gì như là",
        "ipa": "/vjuː ˈsʌm.θɪŋ æz/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 410,
        "en": "Permanent weight loss",
        "vi": "Việc giảm cân vĩnh viễn / lâu dài",
        "ipa": "/ˈpɜː.mə.nənt weɪt lɒs/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 411,
        "en": "Temporary weight loss",
        "vi": "Việc giảm cân tạm thời",
        "ipa": "/ˈtem.pər.ər.i weɪt lɒs/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 412,
        "en": "Initial results",
        "vi": "Những kết quả ban đầu",
        "ipa": "/ɪˈnɪʃ.əl rɪˈzʌlts/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 413,
        "en": "Final results",
        "vi": "Kết quả cuối cùng",
        "ipa": "/ˈfaɪ.nəl rɪˈzʌlts/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 414,
        "en": "Long-term results",
        "vi": "Kết quả lâu dài",
        "ipa": "/ˌlɒŋˈtɜːm rɪˈzʌlts/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 415,
        "en": "Be fed up with sth",
        "vi": "Chán ngấy với việc gì",
        "ipa": "/bi fed ʌp wɪð/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 416,
        "en": "Be sick of",
        "vi": "Chán ngán",
        "ipa": "/bi sɪk əv/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 417,
        "en": "Be tired of",
        "vi": "Mệt mỏi với",
        "ipa": "/bi ˈtaɪəd əv/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 418,
        "en": "Have had enough of",
        "vi": "Đã chịu đựng đủ, chán ngấy",
        "ipa": "/hæv hæd ɪˈnʌf əv/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 419,
        "en": "Turn to",
        "vi": "Tìm đến (ai/cái gì để được giúp đỡ)",
        "ipa": "/tɜːn tuː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 420,
        "en": "Resort to",
        "vi": "Phải dùng đến, viện đến",
        "ipa": "/rɪˈzɔːt tuː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 421,
        "en": "Dietary changes",
        "vi": "Những thay đổi trong chế độ ăn uống",
        "ipa": "/ˈdaɪ.ə.tər.i ˈtʃeɪn.dʒɪz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 422,
        "en": "The number of",
        "vi": "Số lượng... (+ Danh từ số nhiều)",
        "ipa": "/ðə ˈnʌm.bər əv/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 423,
        "en": "Fad diets",
        "vi": "Chế độ ăn kiêng theo phong trào / trào lưu",
        "ipa": "/fæd ˈdaɪ.əts/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 424,
        "en": "Frantically search for",
        "vi": "Tìm kiếm một cách điên cuồng / ráo riết",
        "ipa": "/ˈfræn.tɪ.kəl.i sɜːtʃ fɔː/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 425,
        "en": "Harmless",
        "vi": "Vô hại, không gây hại",
        "ipa": "/ˈhɑːm.ləs/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 426,
        "en": "Safe",
        "vi": "An toàn",
        "ipa": "/seɪf/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 427,
        "en": "Benign",
        "vi": "Lành tính, vô hại",
        "ipa": "/bɪˈnaɪn/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 428,
        "en": "Innocent",
        "vi": "Vô tội, ngây thơ, không có hại",
        "ipa": "/ˈɪn.ə.sənt/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 429,
        "en": "Harmful",
        "vi": "Có hại",
        "ipa": "/ˈhɑːm.fəl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 430,
        "en": "Dangerous",
        "vi": "Nguy hiểm",
        "ipa": "/ˈdeɪn.dʒər.əs/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 431,
        "en": "Toxic",
        "vi": "Độc hại",
        "ipa": "/ˈtɒk.sɪk/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 432,
        "en": "Permanent",
        "vi": "Vĩnh viễn, lâu dài",
        "ipa": "/ˈpɜː.mə.nənt/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 433,
        "en": "Lasting",
        "vi": "Lâu dài, bền vững",
        "ipa": "/ˈlɑːs.tɪŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 434,
        "en": "Enduring",
        "vi": "Lâu dài, dai dẳng",
        "ipa": "/ɪnˈdʒʊə.rɪŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 435,
        "en": "Forever",
        "vi": "Mãi mãi",
        "ipa": "/fəˈrev.ə/",
        "pos": "adv., adj.",
        "ex": ""
    },
    {
        "num": 436,
        "en": "Temporary",
        "vi": "Tạm thời",
        "ipa": "/ˈtem.pər.ər.i/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 437,
        "en": "Fleeting",
        "vi": "Thoáng qua, lướt qua nhanh",
        "ipa": "/ˈfliː.tɪŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 438,
        "en": "Brief",
        "vi": "Ngắn gọn, chốc lát",
        "ipa": "/briːf/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 439,
        "en": "Estimate",
        "vi": "Ước tính, phỏng đoán",
        "ipa": "/ˈes.tɪ.meɪt/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 440,
        "en": "Guess",
        "vi": "Đoán",
        "ipa": "/ɡes/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 441,
        "en": "Calculate roughly",
        "vi": "Tính toán sơ bộ",
        "ipa": "/ˈkæl.kjə.leɪt ˈrʌf.li/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 442,
        "en": "Assess",
        "vi": "Đánh giá",
        "ipa": "/əˈses/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 443,
        "en": "Measure exactly",
        "vi": "Đo đạc chính xác",
        "ipa": "/ˈmeʒ.ər ɪɡˈzækt.li/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 444,
        "en": "Reckless",
        "vi": "Liều lĩnh, thiếu thận trọng",
        "ipa": "/ˈrek.ləs/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 445,
        "en": "Careless",
        "vi": "Bất cẩn",
        "ipa": "/ˈkeə.ləs/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 446,
        "en": "Rash",
        "vi": "Hấp tấp, thiếu suy nghĩ",
        "ipa": "/ræʃ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 447,
        "en": "Irresponsible",
        "vi": "Vô trách nhiệm",
        "ipa": "/ˌɪr.ɪˈspɒn.sə.bəl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 448,
        "en": "Careful",
        "vi": "Cẩn thận",
        "ipa": "/ˈkeə.fəl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 449,
        "en": "Cautious",
        "vi": "Thận trọng",
        "ipa": "/ˈkɔː.ʃəs/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 450,
        "en": "Prudent",
        "vi": "Khôn ngoan, cẩn trọng",
        "ipa": "/ˈpruː.dənt/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 451,
        "en": "Moderate",
        "vi": "Điều độ, có chừng mực",
        "ipa": "/ˈmɒd.ər.ət/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 452,
        "en": "Reasonable",
        "vi": "Hợp lý, vừa phải",
        "ipa": "/ˈriː.zən.ə.bəl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 453,
        "en": "Temperate",
        "vi": "Ôn hòa, có chừng mực",
        "ipa": "/ˈtem.pər.ət/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 454,
        "en": "Balanced",
        "vi": "Cân bằng",
        "ipa": "/ˈbæl.ənst/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 455,
        "en": "Extreme",
        "vi": "Cực đoan, tột độ",
        "ipa": "/ɪkˈstriːm/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 456,
        "en": "Excessive",
        "vi": "Quá mức, thái quá",
        "ipa": "/ɪkˈses.ɪv/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 457,
        "en": "Immoderate",
        "vi": "Không điều độ, thái quá",
        "ipa": "/ɪˈmɒd.ər.ət/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 458,
        "en": "Severe",
        "vi": "Nghiêm trọng, dữ dội",
        "ipa": "/sɪˈvɪə/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 459,
        "en": "Radical",
        "vi": "Căn bản, quyết liệt (triệt để)",
        "ipa": "/ˈræd.ɪ.kəl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 460,
        "en": "Mild",
        "vi": "Nhẹ nhàng, ôn hòa",
        "ipa": "/maɪld/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 461,
        "en": "Prohibit",
        "vi": "Cấm đoán",
        "ipa": "/prəˈhɪb.ɪt/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 462,
        "en": "Ban",
        "vi": "Cấm",
        "ipa": "/bæn/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 463,
        "en": "Forbid",
        "vi": "Cấm",
        "ipa": "/fəˈbɪd/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 464,
        "en": "Outlaw",
        "vi": "Đưa ra ngoài vòng pháp luật, cấm",
        "ipa": "/ˈaʊt.lɔː/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 465,
        "en": "Prevent",
        "vi": "Ngăn chặn",
        "ipa": "/prɪˈvent/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 466,
        "en": "Allow",
        "vi": "Cho phép",
        "ipa": "/əˈlaʊ/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 467,
        "en": "Permit",
        "vi": "Cho phép",
        "ipa": "/pəˈmɪt/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 468,
        "en": "Authorize",
        "vi": "Cấp quyền, ủy quyền",
        "ipa": "/ˈɔː.θər.aɪz/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 469,
        "en": "Entirely",
        "vi": "Hoàn toàn, trọn vẹn",
        "ipa": "/ɪnˈtaɪə.li/",
        "pos": "adv.",
        "ex": ""
    },
    {
        "num": 470,
        "en": "Completely",
        "vi": "Hoàn toàn",
        "ipa": "/kəmˈpliːt.li/",
        "pos": "adv.",
        "ex": ""
    },
    {
        "num": 471,
        "en": "Totally",
        "vi": "Toàn bộ, hoàn toàn",
        "ipa": "/ˈtəʊ.təl.i/",
        "pos": "adv.",
        "ex": ""
    },
    {
        "num": 472,
        "en": "Absolutely",
        "vi": "Tuyệt đối",
        "ipa": "/ˌæb.səˈluːt.li/",
        "pos": "adv.",
        "ex": ""
    },
    {
        "num": 473,
        "en": "Partially",
        "vi": "Một phần",
        "ipa": "/ˈpɑː.ʃəl.i/",
        "pos": "adv.",
        "ex": ""
    },
    {
        "num": 474,
        "en": "Incompletely",
        "vi": "Không hoàn toàn",
        "ipa": "/ˌɪn.kəmˈpliːt.li/",
        "pos": "adv.",
        "ex": ""
    },
    {
        "num": 475,
        "en": "Ecologically sound",
        "vi": "Lành mạnh / tốt cho hệ sinh thái",
        "ipa": "/ɪˌkɒl.ə.dʒɪ.kəl.i ˈsaʊnd/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 476,
        "en": "Environmentally friendly",
        "vi": "Thân thiện với môi trường",
        "ipa": "/ɪnˌvaɪ.rənˌmen.təl.i ˈfrend.li/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 477,
        "en": "Eco-friendly",
        "vi": "Thân thiện với sinh thái",
        "ipa": "/ˌiː.kəʊˈfrend.li/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 478,
        "en": "Environmentally damaging",
        "vi": "Gây hại cho môi trường",
        "ipa": "/ɪnˌvaɪ.rənˌmen.təl.i ˈdæm.ɪ.dʒɪŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 479,
        "en": "Decrease reliance on sth",
        "vi": "Giảm bớt sự phụ thuộc vào điều gì",
        "ipa": "/dɪˈkriːs rɪˈlaɪ.əns ɒn/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 480,
        "en": "Reduce dependence on",
        "vi": "Giảm sự phụ thuộc vào",
        "ipa": "/rɪˈdʒuːs dɪˈpen.dəns ɒn/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 481,
        "en": "Increase reliance on",
        "vi": "Tăng sự phụ thuộc vào",
        "ipa": "/ɪnˈkriːs rɪˈlaɪ.əns ɒn/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 482,
        "en": "Equate to sth",
        "vi": "Đồng nghĩa với / Tương đương với điều gì",
        "ipa": "/ɪˈkweɪt tuː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 483,
        "en": "Amount to",
        "vi": "Tương đương với, lên tới",
        "ipa": "/əˈmaʊnt tuː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 484,
        "en": "Correspond to",
        "vi": "Tương ứng với",
        "ipa": "/ˌkɒr.ɪˈspɒnd tuː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 485,
        "en": "Be equivalent to",
        "vi": "Tương đương với",
        "ipa": "/bi ɪˈkwɪv.əl.ənt tuː/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 486,
        "en": "Provide for needs",
        "vi": "Cung cấp / đáp ứng cho nhu cầu",
        "ipa": "/prəˈvaɪd fɔː niːdz/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 487,
        "en": "Supply",
        "vi": "Cung cấp",
        "ipa": "/səˈplaɪ/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 488,
        "en": "Cater to",
        "vi": "Phục vụ, đáp ứng",
        "ipa": "/ˈkeɪ.tə tuː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 489,
        "en": "Meet the needs",
        "vi": "Đáp ứng nhu cầu",
        "ipa": "/miːt ðə niːdz/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 490,
        "en": "Work in partnership with",
        "vi": "Hợp tác làm việc cùng với...",
        "ipa": "/wɜːk ɪn ˈpɑːt.nə.ʃɪp wɪð/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 491,
        "en": "Collaborate with",
        "vi": "Hợp tác với",
        "ipa": "/kəˈlæb.ə.reɪt wɪð/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 492,
        "en": "Team up with",
        "vi": "Phối hợp, lập nhóm với",
        "ipa": "/tiːm ʌp wɪð/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 493,
        "en": "Work together with",
        "vi": "Làm việc cùng với",
        "ipa": "/wɜːk təˈɡeð.ə wɪð/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 494,
        "en": "Fundamental in nature",
        "vi": "Có bản chất nền tảng / cốt lõi",
        "ipa": "/ˌfʌn.dəˈmen.təl ɪn ˈneɪ.tʃə/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 495,
        "en": "Basic",
        "vi": "Cơ bản",
        "ipa": "/ˈbeɪ.sɪk/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 496,
        "en": "Foundational",
        "vi": "Thuộc về nền tảng",
        "ipa": "/faʊnˈdeɪ.ʃən.əl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 497,
        "en": "Prompt sb into careers",
        "vi": "Thúc đẩy / định hướng ai đó vào con đường nghề nghiệp",
        "ipa": "/prɒmpt ˈɪn.tu kəˈrɪəz/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 498,
        "en": "Encourage",
        "vi": "Khuyến khích",
        "ipa": "/ɪnˈkʌr.ɪdʒ/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 499,
        "en": "Inspire",
        "vi": "Truyền cảm hứng",
        "ipa": "/ɪnˈspaɪə/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 500,
        "en": "Motivate",
        "vi": "Thúc đẩy, tạo động lực",
        "ipa": "/ˈməʊ.tɪ.veɪt/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 501,
        "en": "At varying capacities",
        "vi": "Ở các công suất / mức độ khác nhau",
        "ipa": "/ət ˈveə.ri.ɪŋ kəˈpæs.ə.tiz/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 502,
        "en": "Petroleum-intensive",
        "vi": "Tiêu tốn / sử dụng nhiều xăng dầu",
        "ipa": "/pəˈtrəʊ.li.əm ɪnˈten.sɪv/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 503,
        "en": "Food security",
        "vi": "An ninh lương thực",
        "ipa": "/fuːd sɪˈkjʊə.rə.ti/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 504,
        "en": "Concentric",
        "vi": "Đồng tâm (có cùng tâm)",
        "ipa": "/kənˈsen.trɪk/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 505,
        "en": "Eccentric",
        "vi": "Lệch tâm (hoặc kỳ quặc)",
        "ipa": "/ɪkˈsen.trɪk/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 506,
        "en": "Resilient",
        "vi": "Kiên cường, mau phục hồi",
        "ipa": "/rɪˈzɪl.i.ənt/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 507,
        "en": "Tough",
        "vi": "Cứng rắn, dai sức",
        "ipa": "/tʌf/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 508,
        "en": "Strong",
        "vi": "Khỏe mạnh, vững vàng",
        "ipa": "/strɒŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 509,
        "en": "Adaptable",
        "vi": "Có thể thích nghi",
        "ipa": "/əˈdæp.tə.bəl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 510,
        "en": "Vulnerable",
        "vi": "Dễ bị tổn thương",
        "ipa": "/ˈvʌl.nər.ə.bəl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 511,
        "en": "Fragile",
        "vi": "Mỏng manh, dễ vỡ",
        "ipa": "/ˈfrædʒ.aɪl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 512,
        "en": "Weak",
        "vi": "Yếu ớt",
        "ipa": "/wiːk/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 513,
        "en": "Critical",
        "vi": "Rất quan trọng, then chốt",
        "ipa": "/ˈkrɪt.ɪ.kəl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 514,
        "en": "Unimportant",
        "vi": "Không quan trọng",
        "ipa": "/ˌʌn.ɪmˈpɔː.tənt/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 515,
        "en": "Prosperity",
        "vi": "Sự thịnh vượng, phồn vinh",
        "ipa": "/prɒsˈper.ə.ti/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 516,
        "en": "Success",
        "vi": "Sự thành công",
        "ipa": "/səkˈses/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 517,
        "en": "Affluence",
        "vi": "Sự sung túc, giàu có",
        "ipa": "/ˈæf.lu.əns/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 518,
        "en": "Poverty",
        "vi": "Sự nghèo đói",
        "ipa": "/ˈpɒv.ə.ti/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 519,
        "en": "Hardship",
        "vi": "Sự gian khổ, khó khăn",
        "ipa": "/ˈhɑːd.ʃɪp/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 520,
        "en": "Decline",
        "vi": "Sự suy thoái, sụt giảm",
        "ipa": "/dɪˈklaɪn/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 521,
        "en": "Integration",
        "vi": "Sự hội nhập, tích hợp",
        "ipa": "/ˌɪn.tɪˈɡreɪ.ʃən/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 522,
        "en": "Incorporation",
        "vi": "Sự sáp nhập, hợp nhất",
        "ipa": "/ɪnˌkɔː.pərˈeɪ.ʃən/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 523,
        "en": "Robust",
        "vi": "Mạnh mẽ, vững chắc",
        "ipa": "/rəʊˈbʌst/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 524,
        "en": "Vigorous",
        "vi": "Sôi nổi, mãnh liệt, khỏe mạnh",
        "ipa": "/ˈvɪɡ.ər.əs/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 525,
        "en": "Sturdy",
        "vi": "Cứng cáp, vững chắc",
        "ipa": "/ˈstɜː.di/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 526,
        "en": "Frail",
        "vi": "Yếu ớt, mỏng manh",
        "ipa": "/freɪl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 527,
        "en": "Skeptical",
        "vi": "Hoài nghi, đa nghi",
        "ipa": "/ˈskep.tɪ.kəl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 528,
        "en": "Doubtful",
        "vi": "Đầy nghi ngờ",
        "ipa": "/ˈdaʊt.fəl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 529,
        "en": "Cynical",
        "vi": "Hoài nghi, cay độc",
        "ipa": "/ˈsɪn.ɪ.kəl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 530,
        "en": "Dubious",
        "vi": "Đáng ngờ, không đáng tin",
        "ipa": "/ˈdʒuː.bi.əs/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 531,
        "en": "Convinced",
        "vi": "Bị thuyết phục, tin chắc",
        "ipa": "/kənˈvɪnst/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 532,
        "en": "Certain",
        "vi": "Chắc chắn",
        "ipa": "/ˈsɜː.tən/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 533,
        "en": "Trusting",
        "vi": "Hay tin người, đầy tin tưởng",
        "ipa": "/ˈtrʌs.tɪŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 534,
        "en": "Provocative",
        "vi": "Khiêu khích, trêu chọc",
        "ipa": "/prəˈvɒk.ə.tɪv/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 535,
        "en": "Annoying",
        "vi": "Gây khó chịu, bực mình",
        "ipa": "/əˈnɔɪ.ɪŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 536,
        "en": "Irritating",
        "vi": "Gây cáu gắt, chọc tức",
        "ipa": "/ˈɪr.ɪ.teɪ.tɪŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 537,
        "en": "Soothing",
        "vi": "Dịu dàng, êm ái",
        "ipa": "/ˈsuː.ðɪŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 538,
        "en": "Calming",
        "vi": "Làm dịu đi, an thần",
        "ipa": "/ˈkɑː.mɪŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 539,
        "en": "Proper behavior",
        "vi": "Hành vi đúng mực / chuẩn mực",
        "ipa": "/ˌprɒp.ə bɪˈheɪ.vjə/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 540,
        "en": "Appropriate conduct",
        "vi": "Hành vi thích hợp",
        "ipa": "/əˈprəʊ.pri.ət ˈkɒn.dʌkt/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 541,
        "en": "Good manners",
        "vi": "Cư xử tốt, lịch sự",
        "ipa": "/ɡʊd ˈmæn.əz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 542,
        "en": "Improper behavior",
        "vi": "Hành vi không đúng mực",
        "ipa": "/ɪmˈprɒp.ə bɪˈheɪ.vjə/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 543,
        "en": "Bad manners",
        "vi": "Cư xử tệ, vô phép",
        "ipa": "/bæd ˈmæn.əz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 544,
        "en": "Inappropriate conduct",
        "vi": "Hành vi không thích hợp",
        "ipa": "/ˌɪn.əˈprəʊ.pri.ət ˈkɒn.dʌkt/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 545,
        "en": "Show respect for sb",
        "vi": "Thể hiện sự tôn trọng đối với ai",
        "ipa": "/ʃəʊ rɪˈspekt fɔː/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 546,
        "en": "Express respect for sb",
        "vi": "Bày tỏ sự tôn trọng đối với ai",
        "ipa": "/ɪkˈspres rɪˈspekt fɔː/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 547,
        "en": "Display reverence",
        "vi": "Thể hiện sự tôn kính",
        "ipa": "/dɪˈspleɪ ˈrev.ər.əns/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 548,
        "en": "Show esteem",
        "vi": "Thể hiện sự quý trọng",
        "ipa": "/ʃəʊ ɪˈstiːm/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 549,
        "en": "Show disrespect",
        "vi": "Thể hiện sự thiếu tôn trọng",
        "ipa": "/ʃəʊ ˌdɪs.rɪˈspekt/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 550,
        "en": "Insult",
        "vi": "Xúc phạm / Lời xúc phạm",
        "ipa": "/ˈɪn.sʌlt/",
        "pos": "v., n.",
        "ex": ""
    },
    {
        "num": 551,
        "en": "Cultural differences",
        "vi": "Những sự khác biệt về văn hóa",
        "ipa": "/ˈkʌl.tʃər.əl ˈdɪf.ər.ənsɪz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 552,
        "en": "Cultural distinctions",
        "vi": "Những điểm khác biệt văn hóa",
        "ipa": "/ˈkʌl.tʃər.əl dɪˈstɪŋk.ʃənz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 553,
        "en": "Cultural disparities",
        "vi": "Sự chênh lệch / khác biệt văn hóa",
        "ipa": "/ˈkʌl.tʃər.əl dɪˈspær.ə.tiz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 554,
        "en": "Cultural similarities",
        "vi": "Sự tương đồng về văn hóa",
        "ipa": "/ˈkʌl.tʃər.əl ˌsɪm.ɪˈlær.ə.tiz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 555,
        "en": "With relatively little ceremony",
        "vi": "Với nghi thức tương đối đơn giản / không cầu kỳ",
        "ipa": "/wɪð ˈrel.ə.tɪv.li ˈlɪt.əl ˈser.ɪ.mə.ni/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 556,
        "en": "Informally",
        "vi": "Một cách không chính thức, thân mật",
        "ipa": "/ɪnˈfɔː.mə.li/",
        "pos": "adv.",
        "ex": ""
    },
    {
        "num": 557,
        "en": "Casually",
        "vi": "Một cách tự nhiên, bình thường",
        "ipa": "/ˈkæʒ.u.ə.li/",
        "pos": "adv.",
        "ex": ""
    },
    {
        "num": 558,
        "en": "Without fuss",
        "vi": "Không cầu kỳ, rườm rà",
        "ipa": "/wɪˈðaʊt fʌs/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 559,
        "en": "Formally",
        "vi": "Một cách trang trọng",
        "ipa": "/ˈfɔː.mə.li/",
        "pos": "adv.",
        "ex": ""
    },
    {
        "num": 560,
        "en": "With great pomp",
        "vi": "Với sự phô trương, hoành tráng",
        "ipa": "/wɪð ɡreɪt pɒmp/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 561,
        "en": "Ceremoniously",
        "vi": "Rất kiểu cách, trang trọng",
        "ipa": "/ˌser.ɪˈməʊ.ni.əs.li/",
        "pos": "adv.",
        "ex": ""
    },
    {
        "num": 562,
        "en": "Travel abroad",
        "vi": "Đi du lịch nước ngoài",
        "ipa": "/ˈtræv.əl əˈbrɔːd/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 563,
        "en": "Travel overseas",
        "vi": "Du lịch nước ngoài",
        "ipa": "/ˈtræv.əl ˌəʊ.vəˈsiːz/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 564,
        "en": "Go abroad",
        "vi": "Đi ra nước ngoài",
        "ipa": "/ɡəʊ əˈbrɔːd/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 565,
        "en": "Express one's thanks",
        "vi": "Bày tỏ lời cảm ơn",
        "ipa": "/ɪkˈspres wʌnz θæŋks/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 566,
        "en": "Show gratitude",
        "vi": "Thể hiện lòng biết ơn",
        "ipa": "/ʃəʊ ˈɡræt.ɪ.tʃuːd/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 567,
        "en": "Give thanks",
        "vi": "Gửi lời cảm ơn",
        "ipa": "/ɡɪv θæŋks/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 568,
        "en": "Express appreciation",
        "vi": "Bày tỏ sự trân trọng",
        "ipa": "/ɪkˈspres əˌpriː.ʃiˈeɪ.ʃən/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 569,
        "en": "Appear confusing to sb",
        "vi": "Trở nên bối rối / khó hiểu đối với ai",
        "ipa": "/əˈpɪə kənˈfjuː.zɪŋ tuː/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 570,
        "en": "Seem puzzling",
        "vi": "Có vẻ khó hiểu",
        "ipa": "/siːm ˈpʌz.lɪŋ/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 571,
        "en": "Be baffling",
        "vi": "Gây bối rối",
        "ipa": "/bi ˈbæf.lɪŋ/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 572,
        "en": "Bewildering",
        "vi": "Gây hoang mang, bối rối",
        "ipa": "/bɪˈwɪl.dər.ɪŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 573,
        "en": "Typically refuse",
        "vi": "Thường từ chối",
        "ipa": "/ˈtɪp.ɪ.kəl.i rɪˈfjuːz/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 574,
        "en": "Normally decline",
        "vi": "Bình thường sẽ từ chối",
        "ipa": "/ˈnɔː.mə.li dɪˈklaɪn/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 575,
        "en": "Usually reject",
        "vi": "Thường bác bỏ",
        "ipa": "/ˈjuː.ʒu.ə.li rɪˈdʒekt/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 576,
        "en": "Offer a gift to sb",
        "vi": "Tặng / trao quà cho ai đó",
        "ipa": "/ˈɒf.ər ə ɡɪft tuː/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 577,
        "en": "Refuse to take a gift",
        "vi": "Từ chối nhận quà",
        "ipa": "/rɪˈfjuːz tə teɪk ə ɡɪft/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 578,
        "en": "Rules of etiquette",
        "vi": "Quy tắc ứng xử / phép lịch sự",
        "ipa": "/ruːlz əv ˈet.ɪ.ket/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 579,
        "en": "Write a book on sth",
        "vi": "Viết sách về chủ đề gì",
        "ipa": "/raɪt ə bʊk ɒn/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 580,
        "en": "Social situations",
        "vi": "Các tình huống xã hội",
        "ipa": "/ˈsəʊ.ʃəl ˌsɪt.ʃuˈeɪ.ʃənz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 581,
        "en": "Give a gift",
        "vi": "Tặng một món quà",
        "ipa": "/ɡɪv ə ɡɪft/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 582,
        "en": "Receive a gift",
        "vi": "Nhận một món quà",
        "ipa": "/rɪˈsiːv ə ɡɪft/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 583,
        "en": "Etiquette",
        "vi": "Nghi thức xã giao, phép lịch sự",
        "ipa": "/ˈet.ɪ.ket/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 584,
        "en": "Manners",
        "vi": "Cách cư xử, phép lịch sự",
        "ipa": "/ˈmæn.əz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 585,
        "en": "Protocol",
        "vi": "Nghi thức ngoại giao",
        "ipa": "/ˈprəʊ.tə.kɒl/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 586,
        "en": "Decorum",
        "vi": "Sự đúng mực, đoan trang",
        "ipa": "/dɪˈkɔː.rəm/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 587,
        "en": "Rudeness",
        "vi": "Sự thô lỗ",
        "ipa": "/ˈruːd.nəs/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 588,
        "en": "Impoliteness",
        "vi": "Sự bất lịch sự",
        "ipa": "/ˌɪm.pəˈlaɪt.nəs/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 589,
        "en": "Proper",
        "vi": "Đúng đắn, thích đáng, chuẩn mực",
        "ipa": "/ˈprɒp.ə/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 590,
        "en": "Appropriate",
        "vi": "Thích hợp",
        "ipa": "/əˈprəʊ.pri.ət/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 591,
        "en": "Correct",
        "vi": "Chính xác, đúng",
        "ipa": "/kəˈrekt/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 592,
        "en": "Suitable",
        "vi": "Phù hợp",
        "ipa": "/ˈsuː.tə.bəl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 593,
        "en": "Improper",
        "vi": "Không đúng mực",
        "ipa": "/ɪmˈprɒp.ə/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 594,
        "en": "Inappropriate",
        "vi": "Không thích hợp",
        "ipa": "/ˌɪn.əˈprəʊ.pri.ət/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 595,
        "en": "Wrong",
        "vi": "Sai trái",
        "ipa": "/rɒŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 596,
        "en": "Ceremony",
        "vi": "Nghi lễ, sự khách sáo, hình thức",
        "ipa": "/ˈser.ɪ.mə.ni/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 597,
        "en": "Formality",
        "vi": "Tính hình thức, thủ tục",
        "ipa": "/fɔːˈmæl.ə.ti/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 598,
        "en": "Ritual",
        "vi": "Nghi thức",
        "ipa": "/ˈrɪtʃ.u.əl/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 599,
        "en": "Rite",
        "vi": "Lễ nghi",
        "ipa": "/raɪt/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 600,
        "en": "Informality",
        "vi": "Sự thân mật, không nghi thức",
        "ipa": "/ˌɪn.fɔːˈmæl.ə.ti/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 601,
        "en": "Casualness",
        "vi": "Sự bình thường, tự nhiên",
        "ipa": "/ˈkæʒ.u.əl.nəs/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 602,
        "en": "Confusing",
        "vi": "Gây bối rối, khó hiểu",
        "ipa": "/kənˈfjuː.zɪŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 603,
        "en": "Puzzling",
        "vi": "Khó hiểu, làm bối rối",
        "ipa": "/ˈpʌz.lɪŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 604,
        "en": "Baffling",
        "vi": "Gây trở ngại, làm khó hiểu",
        "ipa": "/ˈbæf.lɪŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 605,
        "en": "Perplexing",
        "vi": "Rắc rối, khó hiểu",
        "ipa": "/pəˈplek.sɪŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 606,
        "en": "Clear",
        "vi": "Rõ ràng",
        "ipa": "/klɪə/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 607,
        "en": "Obvious",
        "vi": "Hiển nhiên",
        "ipa": "/ˈɒb.vi.əs/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 608,
        "en": "Straightforward",
        "vi": "Dễ hiểu, thẳng thắn",
        "ipa": "/ˌstreɪtˈfɔː.wəd/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 609,
        "en": "Typically",
        "vi": "Thông thường, điển hình",
        "ipa": "/ˈtɪp.ɪ.kəl.i/",
        "pos": "adv.",
        "ex": ""
    },
    {
        "num": 610,
        "en": "Normally",
        "vi": "Bình thường",
        "ipa": "/ˈnɔː.mə.li/",
        "pos": "adv.",
        "ex": ""
    },
    {
        "num": 611,
        "en": "Usually",
        "vi": "Thường xuyên",
        "ipa": "/ˈjuː.ʒu.ə.li/",
        "pos": "adv.",
        "ex": ""
    },
    {
        "num": 612,
        "en": "Generally",
        "vi": "Nhìn chung, nói chung",
        "ipa": "/ˈdʒen.ər.əl.i/",
        "pos": "adv.",
        "ex": ""
    },
    {
        "num": 613,
        "en": "Unusually",
        "vi": "Khác thường",
        "ipa": "/ʌnˈjuː.ʒu.ə.li/",
        "pos": "adv.",
        "ex": ""
    },
    {
        "num": 614,
        "en": "Rarely",
        "vi": "Hiếm khi",
        "ipa": "/ˈreə.li/",
        "pos": "adv.",
        "ex": ""
    },
    {
        "num": 615,
        "en": "Abnormally",
        "vi": "Bất thường",
        "ipa": "/æbˈnɔː.mə.li/",
        "pos": "adv.",
        "ex": ""
    },
    {
        "num": 616,
        "en": "Refuse",
        "vi": "Từ chối, khước từ",
        "ipa": "/rɪˈfjuːz/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 617,
        "en": "Reject",
        "vi": "Loại bỏ, bác bỏ",
        "ipa": "/rɪˈdʒekt/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 618,
        "en": "Turn down",
        "vi": "Từ chối",
        "ipa": "/tɜːn daʊn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 619,
        "en": "Accept",
        "vi": "Chấp nhận",
        "ipa": "/əkˈsept/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 620,
        "en": "Agree",
        "vi": "Đồng ý",
        "ipa": "/əˈɡriː/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 621,
        "en": "Consent",
        "vi": "Tán thành, ưng thuận",
        "ipa": "/kənˈsent/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 622,
        "en": "Respect",
        "vi": "Sự tôn trọng, kính trọng",
        "ipa": "/rɪˈspekt/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 623,
        "en": "Esteem",
        "vi": "Sự quý trọng",
        "ipa": "/ɪˈstiːm/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 624,
        "en": "Regard",
        "vi": "Sự quan tâm, kính trọng",
        "ipa": "/rɪˈɡɑːd/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 625,
        "en": "Reverence",
        "vi": "Sự tôn kính",
        "ipa": "/ˈrev.ər.əns/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 626,
        "en": "Disrespect",
        "vi": "Sự thiếu tôn trọng",
        "ipa": "/ˌdɪs.rɪˈspekt/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 627,
        "en": "Contempt",
        "vi": "Sự khinh thường",
        "ipa": "/kənˈtempt/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 628,
        "en": "Scorn",
        "vi": "Sự khinh miệt",
        "ipa": "/skɔːn/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 629,
        "en": "Highly respected",
        "vi": "Rất được tôn trọng / kính trọng",
        "ipa": "/ˌhaɪ.li rɪˈspek.tɪd/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 630,
        "en": "Well-regarded",
        "vi": "Được đánh giá cao, kính trọng",
        "ipa": "/ˌwel rɪˈɡɑː.dɪd/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 631,
        "en": "Highly esteemed",
        "vi": "Rất được kính trọng",
        "ipa": "/ˌhaɪ.li ɪˈstiːmd/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 632,
        "en": "Disrespected",
        "vi": "Bị thiếu tôn trọng, bị xem thường",
        "ipa": "/ˌdɪs.rɪˈspek.tɪd/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 633,
        "en": "Looked down upon",
        "vi": "Bị coi khinh",
        "ipa": "/lʊkt daʊn əˈpɒn/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 634,
        "en": "Count on",
        "vi": "Trông cậy vào, tin tưởng vào",
        "ipa": "/kaʊnt ɒn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 635,
        "en": "Rely on",
        "vi": "Dựa vào, tin tưởng vào",
        "ipa": "/rɪˈlaɪ ɒn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 636,
        "en": "Depend on",
        "vi": "Phụ thuộc vào, dựa dẫm vào",
        "ipa": "/dɪˈpend ɒn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 637,
        "en": "Bank on",
        "vi": "Trông mong vào, hy vọng vào",
        "ipa": "/bæŋk ɒn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 638,
        "en": "In exchange for sth",
        "vi": "Để đổi lấy cái gì",
        "ipa": "/ɪn ɪksˈtʃeɪndʒ fɔː/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 639,
        "en": "In return for",
        "vi": "Để đổi lại",
        "ipa": "/ɪn rɪˈtɜːn fɔː/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 640,
        "en": "The wee hours",
        "vi": "Lúc rạng sáng / Nửa đêm về sáng",
        "ipa": "/ðə wiː ˈaʊ.əz/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 641,
        "en": "Early morning hours",
        "vi": "Những giờ sáng sớm",
        "ipa": "/ˈɜː.li ˈmɔː.nɪŋ ˈaʊ.əz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 642,
        "en": "Soon after midnight",
        "vi": "Ngay sau nửa đêm",
        "ipa": "/suːn ˈɑːf.tə ˈmɪd.naɪt/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 643,
        "en": "Follow special customs",
        "vi": "Tuân theo các phong tục đặc biệt",
        "ipa": "/ˈfɒl.əʊ ˈspeʃ.əl ˈkʌs.təmz/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 644,
        "en": "Observe customs",
        "vi": "Tuân thủ phong tục",
        "ipa": "/əbˈzɜːv ˈkʌs.təmz/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 645,
        "en": "Practice customs",
        "vi": "Thực hành phong tục",
        "ipa": "/ˈpræk.tɪs ˈkʌs.təmz/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 646,
        "en": "Be in charge of",
        "vi": "Phụ trách, chịu trách nhiệm",
        "ipa": "/bi ɪn tʃɑːdʒ əv/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 647,
        "en": "Take care of",
        "vi": "Chăm lo, đảm nhận",
        "ipa": "/teɪk keər əv/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 648,
        "en": "Add up to sth",
        "vi": "Cộng lại thành / Lên đến (con số)",
        "ipa": "/æd ʌp tuː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 649,
        "en": "Baby teeth",
        "vi": "Răng sữa",
        "ipa": "/ˈbeɪ.bi tiːθ/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 650,
        "en": "Fall out",
        "vi": "Rụng đi (răng, tóc)",
        "ipa": "/fɔːl aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 651,
        "en": "Have the custom of",
        "vi": "Có phong tục làm gì",
        "ipa": "/hæv ðə ˈkʌs.təm əv/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 652,
        "en": "According to tradition",
        "vi": "Theo truyền thống",
        "ipa": "/əˈkɔː.dɪŋ tə trəˈdɪʃ.ən/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 653,
        "en": "The exact origins",
        "vi": "Nguồn gốc chính xác",
        "ipa": "/ði ɪɡˈzækt ˈɒr.ɪ.dʒɪnz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 654,
        "en": "Be considered sth",
        "vi": "Được coi là / xem như là...",
        "ipa": "/bi kənˈsɪd.əd/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 655,
        "en": "Guardian angel",
        "vi": "Thiên thần hộ mệnh",
        "ipa": "/ˈɡɑː.di.ən ˈeɪn.dʒəl/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 656,
        "en": "Feed sth to sb/sth",
        "vi": "Cho ai/con vật gì ăn cái gì",
        "ipa": "/fiːd tuː/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 657,
        "en": "Custom",
        "vi": "Phong tục, tập quán",
        "ipa": "/ˈkʌs.təm/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 658,
        "en": "Tradition",
        "vi": "Truyền thống",
        "ipa": "/trəˈdɪʃ.ən/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 659,
        "en": "Practice",
        "vi": "Thói quen, thông lệ",
        "ipa": "/ˈpræk.tɪs/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 660,
        "en": "Habit",
        "vi": "Thói quen",
        "ipa": "/ˈhæb.ɪt/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 661,
        "en": "Magpie",
        "vi": "Chim ác là",
        "ipa": "/ˈmæɡ.paɪ/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 662,
        "en": "Similar",
        "vi": "Tương tự, giống nhau",
        "ipa": "/ˈsɪm.ɪ.lə/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 663,
        "en": "Alike",
        "vi": "Giống nhau",
        "ipa": "/əˈlaɪk/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 664,
        "en": "Identical",
        "vi": "Giống hệt nhau",
        "ipa": "/aɪˈden.tɪ.kəl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 665,
        "en": "Comparable",
        "vi": "Có thể so sánh được, tương đương",
        "ipa": "/ˈkɒm.pər.ə.bəl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 666,
        "en": "Different",
        "vi": "Khác biệt",
        "ipa": "/ˈdɪf.ər.ənt/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 667,
        "en": "Distinct",
        "vi": "Khác biệt, riêng biệt",
        "ipa": "/dɪˈstɪŋkt/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 668,
        "en": "Unlike",
        "vi": "Không giống",
        "ipa": "/ʌnˈlaɪk/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 669,
        "en": "Admire",
        "vi": "Ngưỡng mộ, khâm phục",
        "ipa": "/ədˈmaɪə/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 670,
        "en": "Honor",
        "vi": "Tôn vinh, danh dự",
        "ipa": "/ˈɒn.ə/",
        "pos": "v., n.",
        "ex": ""
    },
    {
        "num": 671,
        "en": "Despise",
        "vi": "Khinh thường",
        "ipa": "/dɪˈspaɪz/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 672,
        "en": "Mystery",
        "vi": "Điều bí ẩn, huyền bí",
        "ipa": "/ˈmɪs.tər.i/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 673,
        "en": "Enigma",
        "vi": "Điều bí ẩn, người khó hiểu",
        "ipa": "/ɪˈnɪɡ.mə/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 674,
        "en": "Puzzle",
        "vi": "Câu đố, điều khó hiểu",
        "ipa": "/ˈpʌz.əl/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 675,
        "en": "Secret",
        "vi": "Bí mật",
        "ipa": "/ˈsiː.krət/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 676,
        "en": "Clear fact",
        "vi": "Sự thật rõ ràng",
        "ipa": "/klɪə fækt/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 677,
        "en": "Known truth",
        "vi": "Sự thật đã biết",
        "ipa": "/nəʊn truːθ/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 678,
        "en": "Origin",
        "vi": "Nguồn gốc, xuất xứ",
        "ipa": "/ˈɒr.ɪ.dʒɪn/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 679,
        "en": "Beginning",
        "vi": "Sự khởi đầu",
        "ipa": "/bɪˈɡɪn.ɪŋ/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 680,
        "en": "Root",
        "vi": "Gốc rễ",
        "ipa": "/ruːt/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 681,
        "en": "Source",
        "vi": "Nguồn, nguồn gốc",
        "ipa": "/sɔːs/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 682,
        "en": "End",
        "vi": "Kết thúc",
        "ipa": "/end/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 683,
        "en": "Conclusion",
        "vi": "Phần kết, kết luận",
        "ipa": "/kənˈkluː.ʒən/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 684,
        "en": "Rate",
        "vi": "Mức giá, tỷ lệ",
        "ipa": "/reɪt/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 685,
        "en": "Price",
        "vi": "Giá cả",
        "ipa": "/praɪs/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 686,
        "en": "Charge",
        "vi": "Chi phí, tiền thù lao",
        "ipa": "/tʃɑːdʒ/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 687,
        "en": "Fee",
        "vi": "Lệ phí",
        "ipa": "/fiː/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 688,
        "en": "Ratio",
        "vi": "Tỷ lệ (toán học/thống kê)",
        "ipa": "/ˈreɪ.ʃi.əʊ/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 689,
        "en": "Be richly supplied with sth",
        "vi": "Được cung cấp phong phú/dồi dào cái gì",
        "ipa": "/bi ˈrɪtʃ.li səˈplaɪd wɪð/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 690,
        "en": "Living organisms",
        "vi": "Các sinh vật sống",
        "ipa": "/ˈlɪv.ɪŋ ˈɔː.ɡən.ɪ.zəmz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 691,
        "en": "Co-exist",
        "vi": "Cùng tồn tại",
        "ipa": "/ˌkəʊ.ɪɡˈzɪst/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 692,
        "en": "Complex, interrelated communities",
        "vi": "Các cộng đồng phức tạp, có mối quan hệ mật thiết",
        "ipa": "/ˈkɒm.pleks ˌɪn.tə.rɪˈleɪ.tɪd kəˈmjuː.nə.tiz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 693,
        "en": "Depend on one another",
        "vi": "Phụ thuộc lẫn nhau",
        "ipa": "/dɪˈpend ɒn wʌn əˈnʌð.ə/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 694,
        "en": "Set off a chain reaction",
        "vi": "Gây ra một phản ứng dây chuyền",
        "ipa": "/set ɒf ə tʃeɪn riˈæk.ʃən/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 695,
        "en": "The bottom of the food chain",
        "vi": "Đáy/Cuối của chuỗi thức ăn",
        "ipa": "/ðə ˈbɒt.əm əv ðə fuːd tʃeɪn/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 696,
        "en": "Seem inconsequential",
        "vi": "Có vẻ không quan trọng / tầm thường",
        "ipa": "/siːm ˌɪn.kɒn.sɪˈkwen.ʃəl/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 697,
        "en": "Threaten the survival of sth",
        "vi": "Đe dọa sự sống còn của...",
        "ipa": "/ˈθret.ən ðə səˈvaɪ.vəl əv/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 698,
        "en": "Larger predators",
        "vi": "Những loài thú săn mồi lớn hơn",
        "ipa": "/ˈlɑː.dʒə ˈpred.ə.təz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 699,
        "en": "Prey upon / Prey on sth",
        "vi": "Săn, ăn thịt loài nào",
        "ipa": "/preɪ əˈpɒn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 700,
        "en": "Ripple effect",
        "vi": "Hiệu ứng gợn sóng (sự lan truyền hệ quả)",
        "ipa": "/ˈrɪp.əl ɪˈfekt/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 701,
        "en": "Bring along",
        "vi": "Mang theo (về phía người nói/điểm đến)",
        "ipa": "/brɪŋ əˈlɒŋ/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 702,
        "en": "Break down",
        "vi": "Hỏng hóc (máy móc), suy sụp, phân hủy",
        "ipa": "/breɪk daʊn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 703,
        "en": "Break up",
        "vi": "Chia tay, đập vụn",
        "ipa": "/breɪk ʌp/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 704,
        "en": "Cut down on",
        "vi": "Cắt giảm, giảm bớt",
        "ipa": "/kʌt daʊn ɒn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 705,
        "en": "Drop sb off",
        "vi": "Trả ai xuống xe, đưa ai đến nơi nào đó",
        "ipa": "/drɒp ɒf/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 706,
        "en": "Get down",
        "vi": "Đi xuống, làm ai đó buồn bã",
        "ipa": "/ɡet daʊn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 707,
        "en": "Opt for",
        "vi": "Lựa chọn (thường là giải pháp tốt hơn)",
        "ipa": "/ɒpt fɔː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 708,
        "en": "Show sb around",
        "vi": "Dẫn ai đó đi tham quan vòng quanh",
        "ipa": "/ʃəʊ əˈraʊnd/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 709,
        "en": "Take in",
        "vi": "Hấp thụ, hiểu (thông tin), thu hẹp (quần áo)",
        "ipa": "/teɪk ɪn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 710,
        "en": "Take off",
        "vi": "Cất cánh (máy bay), thành công nhanh chóng",
        "ipa": "/teɪk ɒf/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 711,
        "en": "Take over",
        "vi": "Tiếp quản (một công ty, vị trí)",
        "ipa": "/teɪk ˈəʊ.və/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 712,
        "en": "Take up",
        "vi": "Bắt đầu một sở thích/thói quen mới",
        "ipa": "/teɪk ʌp/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 713,
        "en": "Throw away",
        "vi": "Vứt đi",
        "ipa": "/θrəʊ əˈweɪ/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 714,
        "en": "Turn up",
        "vi": "Xuất hiện, đến",
        "ipa": "/tɜːn ʌp/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 715,
        "en": "Hidden gem",
        "vi": "\"Viên ngọc ẩn\" (địa điểm đẹp ít người biết)",
        "ipa": "/ˈhɪd.ən dʒem/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 716,
        "en": "Get your hands dirty",
        "vi": "Tự tay làm việc gì đó (làm vườn, cơ khí...)",
        "ipa": "/ɡet jɔː hændz ˈdɜː.ti/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 717,
        "en": "In view of sth",
        "vi": "Xét đến, bởi vì (cân nhắc một sự việc)",
        "ipa": "/ɪn vjuː əv/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 718,
        "en": "Without the hassle of",
        "vi": "Không phải chịu sự phiền phức của...",
        "ipa": "/wɪˈðaʊt ðə ˈhæs.əl əv/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 719,
        "en": "Carbon footprint",
        "vi": "Lượng khí thải carbon",
        "ipa": "/ˌkɑː.bən ˈfʊt.prɪnt/",
        "pos": "n. phr.",
        "ex": ""
    },
    {
        "num": 720,
        "en": "Greenhouse gas emissions",
        "vi": "Sự phát thải/Lượng khí thải nhà kính",
        "ipa": "/ˌɡriːn.haʊs ˈɡæs ɪˈmɪʃ.ənz/",
        "pos": "n. phr.",
        "ex": ""
    },
    {
        "num": 721,
        "en": "Manage waste",
        "vi": "Quản lý, xử lý rác",
        "ipa": "/ˈmæn.ɪdʒ weɪst/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 722,
        "en": "Marine life",
        "vi": "Sinh vật biển",
        "ipa": "/məˈriːn laɪf/",
        "pos": "n. phr.",
        "ex": ""
    },
    {
        "num": 723,
        "en": "Plant-based diet",
        "vi": "Chế độ ăn dựa trên thực vật",
        "ipa": "/ˈplɑːnt.beɪst ˈdaɪ.ət/",
        "pos": "n. phr.",
        "ex": ""
    },
    {
        "num": 724,
        "en": "Single-use plastics",
        "vi": "Nhựa dùng một lần",
        "ipa": "/ˌsɪŋ.ɡəlˈjuːs ˈplæs.tɪks/",
        "pos": "n. phr.",
        "ex": ""
    },
    {
        "num": 725,
        "en": "A large amount of",
        "vi": "Một lượng lớn... (đi với N không đếm được)",
        "ipa": "/ə lɑːdʒ əˈmaʊnt əv/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 726,
        "en": "A local perspective",
        "vi": "Góc nhìn của người bản địa",
        "ipa": "/ə ˈləʊ.kəl pəˈspek.tɪv/",
        "pos": "n. phr.",
        "ex": ""
    },
    {
        "num": 727,
        "en": "Be interested in",
        "vi": "Quan tâm, hứng thú với",
        "ipa": "/bi ˈɪn.trəs.tɪd ɪn/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 728,
        "en": "Community center",
        "vi": "Trung tâm cộng đồng",
        "ipa": "/kəˈmjuː.nə.ti ˌsen.tə/",
        "pos": "n. phr.",
        "ex": ""
    },
    {
        "num": 729,
        "en": "Creative side",
        "vi": "Khía cạnh sáng tạo",
        "ipa": "/kriˈeɪ.tɪv saɪd/",
        "pos": "n. phr.",
        "ex": ""
    },
    {
        "num": 730,
        "en": "Language exchange",
        "vi": "Giao lưu ngôn ngữ",
        "ipa": "/ˈlæŋ.ɡwɪdʒ ɪksˈtʃeɪndʒ/",
        "pos": "n. phr.",
        "ex": ""
    },
    {
        "num": 731,
        "en": "Make friends",
        "vi": "Kết bạn",
        "ipa": "/meɪk frendz/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 732,
        "en": "Native speaker",
        "vi": "Người bản xứ",
        "ipa": "/ˌneɪ.tɪv ˈspiː.kə/",
        "pos": "n. phr.",
        "ex": ""
    },
    {
        "num": 733,
        "en": "Point of departure",
        "vi": "Điểm khởi hành, điểm xuất phát",
        "ipa": "/pɔɪnt əv dɪˈpɑː.tʃə/",
        "pos": "n. phr.",
        "ex": ""
    },
    {
        "num": 734,
        "en": "Scenic walk",
        "vi": "Chuyến đi dạo ngắm cảnh",
        "ipa": "/ˈsiː.nɪk wɔːk/",
        "pos": "n. phr.",
        "ex": ""
    },
    {
        "num": 735,
        "en": "Similar tastes",
        "vi": "Gu giống nhau, sở thích tương đồng",
        "ipa": "/ˈsɪm.ɪ.lə teɪsts/",
        "pos": "n. phr.",
        "ex": ""
    },
    {
        "num": 736,
        "en": "Solo traveler",
        "vi": "Khách du lịch một mình, du lịch bụi",
        "ipa": "/ˈsəʊ.ləʊ ˈtræv.əl.ə/",
        "pos": "n. phr.",
        "ex": ""
    },
    {
        "num": 737,
        "en": "Space available",
        "vi": "Không gian/Chỗ trống có sẵn",
        "ipa": "/speɪs əˈveɪ.lə.bəl/",
        "pos": "n. phr.",
        "ex": ""
    },
    {
        "num": 738,
        "en": "Travel preferences",
        "vi": "Những ưu tiên khi đi du lịch",
        "ipa": "/ˈtræv.əl ˈpref.ər.ənsɪz/",
        "pos": "n. phr.",
        "ex": ""
    },
    {
        "num": 739,
        "en": "Wide range of",
        "vi": "Một loạt / Rất nhiều sự lựa chọn đa dạng",
        "ipa": "/waɪd reɪndʒ əv/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 740,
        "en": "Wonder about",
        "vi": "Tự hỏi về chủ đề/người nào đó",
        "ipa": "/ˈwʌn.dər əˈbaʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 741,
        "en": "Accumulate",
        "vi": "Tích lũy, tích tụ",
        "ipa": "/əˈkjuː.mjə.leɪt/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 742,
        "en": "Devastate",
        "vi": "Tàn phá, phá hủy",
        "ipa": "/ˈdev.ə.steɪt/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 743,
        "en": "Discard",
        "vi": "Vứt bỏ, loại bỏ",
        "ipa": "/dɪˈskɑːd/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 744,
        "en": "Distribute",
        "vi": "Phân phát, phân phối",
        "ipa": "/dɪˈstrɪb.juːt/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 745,
        "en": "Drown",
        "vi": "Chết đuối",
        "ipa": "/draʊn/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 746,
        "en": "Enhance",
        "vi": "Nâng cao, làm tăng lên (trải nghiệm)",
        "ipa": "/ɪnˈhɑːns/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 747,
        "en": "Inquire",
        "vi": "Hỏi thăm, dò hỏi",
        "ipa": "/ɪnˈkwaɪə/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 748,
        "en": "Minimize",
        "vi": "Giảm thiểu đến mức tối đa",
        "ipa": "/ˈmɪn.ɪ.maɪz/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 749,
        "en": "Nourish",
        "vi": "Nuôi dưỡng",
        "ipa": "/ˈnʌr.ɪʃ/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 750,
        "en": "Reconnect",
        "vi": "Kết nối lại, liên lạc lại",
        "ipa": "/ˌriː.kəˈnekt/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 751,
        "en": "Repurpose",
        "vi": "Thay đổi mục đích sử dụng, tái sử dụng",
        "ipa": "/ˌriːˈpɜː.pəs/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 752,
        "en": "Seek",
        "vi": "Tìm kiếm, cố gắng có được",
        "ipa": "/siːk/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 753,
        "en": "Threaten",
        "vi": "Đe dọa",
        "ipa": "/ˈθret.ən/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 754,
        "en": "Triumph",
        "vi": "Chiến thắng, thành công vang dội",
        "ipa": "/ˈtraɪ.əmf/",
        "pos": "v., n.",
        "ex": ""
    },
    {
        "num": 755,
        "en": "Utilize",
        "vi": "Tận dụng, sử dụng hiệu quả",
        "ipa": "/ˈjuː.tɪ.laɪz/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 756,
        "en": "Verify",
        "vi": "Xác minh tính chân thực",
        "ipa": "/ˈver.ɪ.faɪ/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 757,
        "en": "Circumstance",
        "vi": "Hoàn cảnh, tình huống",
        "ipa": "/ˈsɜː.kəm.stɑːns/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 758,
        "en": "Companion",
        "vi": "Người đồng hành, bạn đồng hành",
        "ipa": "/kəmˈpæn.jən/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 759,
        "en": "Contributor",
        "vi": "Tác nhân, người/vật đóng góp vào",
        "ipa": "/kənˈtrɪb.jə.tə/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 760,
        "en": "Deforestation",
        "vi": "Nạn phá rừng, sự chặt phá rừng",
        "ipa": "/diːˌfɒr.ɪˈsteɪ.ʃən/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 761,
        "en": "Destination",
        "vi": "Điểm đến",
        "ipa": "/ˌdes.tɪˈneɪ.ʃən/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 762,
        "en": "Ecosystem",
        "vi": "Hệ sinh thái",
        "ipa": "/ˈiː.kəʊˌsɪs.təm/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 763,
        "en": "Enthusiasm",
        "vi": "Sự nhiệt tình, niềm đam mê",
        "ipa": "/ɪnˈθjuː.zi.æz.əm/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 764,
        "en": "Equivalent",
        "vi": "Sự/Vật tương đương",
        "ipa": "/ɪˈkwɪv.əl.ənt/",
        "pos": "n., adj.",
        "ex": ""
    },
    {
        "num": 765,
        "en": "Getaway",
        "vi": "Chuyến đi chơi ngắn ngày",
        "ipa": "/ˈɡet.ə.weɪ/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 766,
        "en": "Hassle",
        "vi": "Sự phiền phức, rắc rối",
        "ipa": "/ˈhæs.əl/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 767,
        "en": "Humanity",
        "vi": "Nhân loại",
        "ipa": "/hjuːˈmæn.ə.ti/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 768,
        "en": "Impact",
        "vi": "Tác động, ảnh hưởng",
        "ipa": "/ˈɪm.pækt/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 769,
        "en": "Insight",
        "vi": "Sự hiểu biết sâu sắc, thông tin hữu ích",
        "ipa": "/ˈɪn.saɪt/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 770,
        "en": "Landfill",
        "vi": "Bãi rác, bãi chôn lấp rác",
        "ipa": "/ˈlænd.fɪl/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 771,
        "en": "Longitude",
        "vi": "Kinh độ (Khoảng cách Đông - Tây)",
        "ipa": "/ˈlɒŋ.ɡɪ.tʃuːd/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 772,
        "en": "Materials",
        "vi": "Vật liệu, dụng cụ (họa cụ)",
        "ipa": "/məˈtɪə.ri.əlz/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 773,
        "en": "Perspective",
        "vi": "Góc nhìn, quan điểm",
        "ipa": "/pəˈspek.tɪv/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 774,
        "en": "Platform",
        "vi": "Nền tảng (ứng dụng/trang web)",
        "ipa": "/ˈplæt.fɔːm/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 775,
        "en": "Preference",
        "vi": "Sự thích hơn, sở thích ưu tiên",
        "ipa": "/ˈpref.ər.əns/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 776,
        "en": "Authentic",
        "vi": "Chân thực, đích thực (nguyên bản)",
        "ipa": "/ɔːˈθen.tɪk/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 777,
        "en": "Exclusive",
        "vi": "Độc quyền, dành riêng",
        "ipa": "/ɪkˈskluː.sɪv/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 778,
        "en": "Like-minded",
        "vi": "Cùng chí hướng, cùng sở thích/suy nghĩ",
        "ipa": "/ˌlaɪkˈmaɪn.dɪd/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 779,
        "en": "Stormy",
        "vi": "Có bão, giông bão",
        "ipa": "/ˈstɔː.mi/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 780,
        "en": "Sustainable",
        "vi": "Bền vững (không gây hại cho môi trường)",
        "ipa": "/səˈsteɪ.nə.bəl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 781,
        "en": "Sustainably",
        "vi": "Một cách bền vững",
        "ipa": "/səˈsteɪ.nə.bə.li/",
        "pos": "adv.",
        "ex": ""
    },
    {
        "num": 782,
        "en": "Take place",
        "vi": "Diễn ra (sự kiện có kế hoạch)",
        "ipa": "/teɪk pleɪs/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 783,
        "en": "Meet up (with)",
        "vi": "Gặp gỡ ai đó",
        "ipa": "/miːt ʌp/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 784,
        "en": "Run into",
        "vi": "Tình cờ gặp ai đó",
        "ipa": "/rʌn ˈɪn.tuː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 785,
        "en": "Hang out (with)",
        "vi": "Đi chơi, dành thời gian với",
        "ipa": "/hæŋ aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 786,
        "en": "Join in",
        "vi": "Tham gia vào (hoạt động đang diễn ra)",
        "ipa": "/dʒɔɪn ɪn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 787,
        "en": "Bring in",
        "vi": "Thu hút, mang lại (lợi nhuận/người)",
        "ipa": "/brɪŋ ɪn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 788,
        "en": "Work out",
        "vi": "Tìm ra giải pháp, tập thể dục",
        "ipa": "/wɜːk aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 789,
        "en": "Bridge the gap",
        "vi": "Rút ngắn khoảng cách",
        "ipa": "/brɪdʒ ðə ɡæp/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 790,
        "en": "In the palm of your hand",
        "vi": "Trong tầm tay, kiểm soát hoàn toàn",
        "ipa": "/ɪn ðə pɑːm əv jɔː hænd/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 791,
        "en": "Set a new standard",
        "vi": "Thiết lập một tiêu chuẩn mới",
        "ipa": "/set ə njuː ˈstæn.dəd/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 792,
        "en": "Hands-on training",
        "vi": "Đào tạo thực hành thực tế",
        "ipa": "/ˌhændzˈɒn ˈtreɪ.nɪŋ/",
        "pos": "n. phr.",
        "ex": ""
    },
    {
        "num": 793,
        "en": "Hands-on learning",
        "vi": "Học tập thực hành thực tế",
        "ipa": "/ˌhændzˈɒn ˈlɜː.nɪŋ/",
        "pos": "n. phr.",
        "ex": ""
    },
    {
        "num": 794,
        "en": "Fast-track path",
        "vi": "Con đường tắt dẫn đến thành công",
        "ipa": "/fɑːst træk pɑːθ/",
        "pos": "n. phr.",
        "ex": ""
    },
    {
        "num": 795,
        "en": "Thought-provoking topics",
        "vi": "Những chủ đề kích thích tư duy",
        "ipa": "/θɔːt prəˈvəʊ.kɪŋ ˈtɒp.ɪks/",
        "pos": "n. phr.",
        "ex": ""
    },
    {
        "num": 796,
        "en": "Brisk walk",
        "vi": "Đi bộ nhanh",
        "ipa": "/brɪsk wɔːk/",
        "pos": "n. phr.",
        "ex": ""
    },
    {
        "num": 797,
        "en": "Balanced diet",
        "vi": "Chế độ ăn uống cân bằng",
        "ipa": "/ˌbæl.ənst ˈdaɪ.ət/",
        "pos": "n. phr.",
        "ex": ""
    },
    {
        "num": 798,
        "en": "Unprecedented",
        "vi": "Chưa từng có tiền lệ (C1)",
        "ipa": "/ʌnˈpres.ɪ.den.tɪd/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 799,
        "en": "Exemplify",
        "vi": "Là ví dụ điển hình cho (C1)",
        "ipa": "/ɪɡˈzem.plɪ.faɪ/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 800,
        "en": "Vibrant",
        "vi": "Rực rỡ, đầy sức sống (B2)",
        "ipa": "/ˈvaɪ.brənt/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 801,
        "en": "Compelling",
        "vi": "Hấp dẫn, thuyết phục (B2)",
        "ipa": "/kəmˈpel.ɪŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 802,
        "en": "Foster",
        "vi": "Nuôi dưỡng, thúc đẩy (B2)",
        "ipa": "/ˈfɒs.tə/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 803,
        "en": "Showcase",
        "vi": "Trình diễn, phô diễn (B2)",
        "ipa": "/ˈʃəʊ.keɪs/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 804,
        "en": "Obsolete",
        "vi": "Lỗi thời, bị thay thế hoàn toàn (C2)",
        "ipa": "/ˌɒb.səlˈiːt/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 805,
        "en": "Get on with",
        "vi": "Hòa hợp với ai đó",
        "ipa": "/ɡet ɒn wɪð/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 806,
        "en": "Keep away from",
        "vi": "Tránh xa cái gì đó",
        "ipa": "/kiːp əˈweɪ frəm/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 807,
        "en": "Keep up with",
        "vi": "Theo kịp ai đó hoặc xu hướng/cái gì đó",
        "ipa": "/kiːp ʌp wɪð/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 808,
        "en": "Put up with",
        "vi": "Chịu đựng ai đó hoặc cái gì đó",
        "ipa": "/pʊt ʌp wɪð/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 809,
        "en": "Turn into",
        "vi": "Biến thành (Ví dụ: biến thách thức thành cơ hội)",
        "ipa": "/tɜːn ˈɪn.tuː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 810,
        "en": "Affordable housing",
        "vi": "Nhà ở giá rẻ",
        "ipa": "/əˈfɔː.də.bəl ˈhaʊ.zɪŋ/",
        "pos": "n. phr.",
        "ex": ""
    },
    {
        "num": 811,
        "en": "Make a difference",
        "vi": "Tạo nên sự khác biệt",
        "ipa": "/meɪk ə ˈdɪf.ər.əns/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 812,
        "en": "Mass-produced souvenirs",
        "vi": "Quà lưu niệm được sản xuất hàng loạt",
        "ipa": "/ˌmæs.prəˈdʒuːst ˌsuː.vənˈɪəz/",
        "pos": "n. phr.",
        "ex": ""
    },
    {
        "num": 813,
        "en": "Traffic congestion",
        "vi": "Tình trạng tắc nghẽn giao thông",
        "ipa": "/ˈtræf.ɪk kənˈdʒes.tʃən/",
        "pos": "n. phr.",
        "ex": ""
    },
    {
        "num": 814,
        "en": "At risk of",
        "vi": "Đang có nguy cơ (bị gì đó)",
        "ipa": "/ət rɪsk əv/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 815,
        "en": "At the forefront of",
        "vi": "Đang dẫn đầu trong việc gì đó",
        "ipa": "/ət ðə ˈfɔː.frʌnt əv/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 816,
        "en": "Leave a lasting impact on",
        "vi": "Để lại một dấu ấn lâu dài đối với",
        "ipa": "/liːv ə ˈlɑː.stɪŋ ˈɪm.pækt ɒn/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 817,
        "en": "Miss an opportunity",
        "vi": "Bỏ lỡ một cơ hội",
        "ipa": "/mɪs ən ˌɒp.əˈtʃuː.nə.ti/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 818,
        "en": "Raise awareness about",
        "vi": "Nâng cao nhận thức về một vấn đề",
        "ipa": "/reɪz əˈweə.nəs əˈbaʊt/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 819,
        "en": "Share something with",
        "vi": "Chia sẻ cái gì đó với ai đó",
        "ipa": "/ʃeə ˈsʌm.θɪŋ wɪð/",
        "pos": "phr.",
        "ex": ""
    },
    {
        "num": 820,
        "en": "Bustling",
        "vi": "Sôi động, nhộn nhịp (nền kinh tế/thành phố)",
        "ipa": "/ˈbʌs.lɪŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 821,
        "en": "Captivate",
        "vi": "Thu hút, làm say đắm (khán giả, người xem)",
        "ipa": "/ˈkæp.tɪ.veɪt/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 822,
        "en": "Contaminate",
        "vi": "Làm ô nhiễm (nguồn nước, thực phẩm)",
        "ipa": "/kənˈtæm.ɪ.neɪt/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 823,
        "en": "Feasible",
        "vi": "Khả thi, có thể thực hiện được",
        "ipa": "/ˈfiː.zə.bəl/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 824,
        "en": "Influx",
        "vi": "Sự đổ xô, dòng người/vật chảy vào",
        "ipa": "/ˈɪn.flʌks/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 825,
        "en": "Infrastructure",
        "vi": "Cơ sở hạ tầng (đường sá, cầu cống, điện)",
        "ipa": "/ˈɪn.frəˌstrʌk.tʃə/",
        "pos": "n.",
        "ex": ""
    },
    {
        "num": 826,
        "en": "Innovative",
        "vi": "Đổi mới, mang tính sáng tạo",
        "ipa": "/ˈɪn.ə.və.tɪv/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 827,
        "en": "Mesmerizing",
        "vi": "Đầy mê hoặc, quyến rũ không thể rời mắt",
        "ipa": "/ˈmez.mə.raɪ.zɪŋ/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 828,
        "en": "Overwhelm",
        "vi": "Làm quá tải, lấn át",
        "ipa": "/ˌəʊ.vəˈwelm/",
        "pos": "v.",
        "ex": ""
    },
    {
        "num": 829,
        "en": "Substandard",
        "vi": "Không đạt chuẩn (điều kiện sống...)",
        "ipa": "/ˌsʌbˈstæn.dəd/",
        "pos": "adj.",
        "ex": ""
    },
    {
        "num": 830,
        "en": "Inhabitant",
        "vi": "Cư dân",
        "ipa": "/ɪnˈhæb.ɪ.tənt/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 831,
        "en": "Jump at",
        "vi": "Chớp lấy (cơ hội) ngay lập tức",
        "ipa": "/dʒʌmp ət/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 832,
        "en": "Portrait",
        "vi": "Bức chân dung",
        "ipa": "/ˈpɔː.trɪt/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 833,
        "en": "Cosmos",
        "vi": "Vũ trụ",
        "ipa": "/ˈkɒz.mɒs/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 834,
        "en": "Feel up to",
        "vi": "Cảm thấy đủ sức/hứng thú làm gì",
        "ipa": "/fiːl ʌp tuː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 835,
        "en": "Harmonious",
        "vi": "Hài hòa, êm ấm",
        "ipa": "/hɑːˈməʊ.ni.əs/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 836,
        "en": "Congestion",
        "vi": "Sự tắc nghẽn (giao thông)",
        "ipa": "/kənˈdʒes.tʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 837,
        "en": "Overprotective",
        "vi": "Bao bọc, bảo vệ quá mức",
        "ipa": "/ˌəʊ.və.prəˈtek.tɪv/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 838,
        "en": "Call it a day",
        "vi": "Kết thúc một ngày làm việc/hoạt động",
        "ipa": "/kɔːl ɪt ə deɪ/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 839,
        "en": "Acquaintance",
        "vi": "Người quen (không quá thân)",
        "ipa": "/əˈkweɪn.təns/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 840,
        "en": "Vocation",
        "vi": "Nghề nghiệp (thiên hướng, đam mê)",
        "ipa": "/vəʊˈkeɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 841,
        "en": "Get by",
        "vi": "Xoay xở sống sót (thường là về tài chính)",
        "ipa": "/ɡet baɪ/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 842,
        "en": "Hit the nail on the head",
        "vi": "Nói trúng phóc, hoàn toàn chính xác",
        "ipa": "/hɪt ðə neɪl ɒn ðə hed/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 843,
        "en": "Competence",
        "vi": "Năng lực, khả năng",
        "ipa": "/ˈkɒm.pɪ.təns/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 844,
        "en": "Breathtaking",
        "vi": "Đẹp đến ngộp thở",
        "ipa": "/ˈbreθˌteɪ.kɪŋ/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 845,
        "en": "Extrovert",
        "vi": "Người hướng ngoại",
        "ipa": "/ˈek.strə.vɜːt/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 846,
        "en": "Proliferation",
        "vi": "Sự gia tăng nhanh chóng",
        "ipa": "/prəˌlɪf.ərˈeɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 847,
        "en": "Build up",
        "vi": "Tích lũy, xây dựng, tăng cường",
        "ipa": "/bɪld ʌp/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 848,
        "en": "Keep one's chin up",
        "vi": "Lạc quan lên, đừng nản chí",
        "ipa": "/kiːp wʌnz tʃɪn ʌp/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 849,
        "en": "Hygiene",
        "vi": "Vệ sinh (cá nhân, cộng đồng)",
        "ipa": "/ˈhaɪ.dʒiːn/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 850,
        "en": "Pass away",
        "vi": "Qua đời (cách nói lịch sự của \"die\")",
        "ipa": "/pɑːs əˈweɪ/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 851,
        "en": "Sedentary",
        "vi": "Ít vận động, ngồi nhiều",
        "ipa": "/ˈsed.ən.tər.i/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 852,
        "en": "Acculturation",
        "vi": "Sự giao thoa văn hóa",
        "ipa": "/əˌkʌl.tʃərˈeɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 853,
        "en": "Come off",
        "vi": "Thành công (= succeed), bong/tróc ra",
        "ipa": "/kʌm ɒf/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 854,
        "en": "Façade",
        "vi": "Mặt tiền của tòa nhà",
        "ipa": "/fəˈsɑːd/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 855,
        "en": "Make up",
        "vi": "Trang điểm, bịa chuyện, làm hòa, chiếm",
        "ipa": "/meɪk ʌp/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 856,
        "en": "Fertility",
        "vi": "Khả năng sinh sản, tỷ lệ sinh",
        "ipa": "/fəˈtɪl.ə.ti/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 857,
        "en": "Backpacking",
        "vi": "Du lịch bụi",
        "ipa": "/ˈbækˌpæk.ɪŋ/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 858,
        "en": "Here and there",
        "vi": "Khắp mọi nơi (= high and low)",
        "ipa": "/hɪər ənd ðeə/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 859,
        "en": "Blueprint",
        "vi": "Bản thiết kế, kế hoạch chi tiết",
        "ipa": "/ˈbluː.prɪnt/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 860,
        "en": "The ball is in your court",
        "vi": "Quyết định hiện tại tùy thuộc vào bạn",
        "ipa": "/ðə bɔːl ɪz ɪn jɔː kɔːt/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 861,
        "en": "Carbon-neutral",
        "vi": "Trung hòa carbon",
        "ipa": "/ˌkɑː.bənˈnjuː.trəl/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 862,
        "en": "Deterrent",
        "vi": "Biện pháp răn đe, rào cản",
        "ipa": "/dɪˈter.ənt/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 863,
        "en": "Era",
        "vi": "Kỷ nguyên, thời đại",
        "ipa": "/ˈɪə.rə/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 864,
        "en": "Run out of",
        "vi": "Dùng hết, cạn kiệt cái gì",
        "ipa": "/rʌn aʊt əv/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 865,
        "en": "Simulation",
        "vi": "Sự mô phỏng",
        "ipa": "/ˌsɪm.jəˈleɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 866,
        "en": "Disruptive",
        "vi": "Đột phá (thay đổi hoàn toàn cục diện)",
        "ipa": "/dɪsˈrʌp.tɪv/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 867,
        "en": "Chronic",
        "vi": "Mãn tính (bệnh)",
        "ipa": "/ˈkrɒn.ɪk/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 868,
        "en": "Vandalism",
        "vi": "Tội phá hoại của công",
        "ipa": "/ˈvæn.dəl.ɪ.zəm/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 869,
        "en": "Break a leg",
        "vi": "Chúc may mắn (trước khi thi đấu/biểu diễn)",
        "ipa": "/breɪk ə leɡ/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 870,
        "en": "Put all one's eggs in one basket",
        "vi": "Bỏ hết trứng vào một rổ (chấp nhận rủi ro)",
        "ipa": "/pʊt ɔːl wʌnz eɡz ɪn wʌn ˈbɑː.skɪt/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 871,
        "en": "Let sleeping dogs lie",
        "vi": "Đừng gợi lại chuyện không hay trong quá khứ",
        "ipa": "/let ˈsliː.pɪŋ dɒɡz laɪ/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 872,
        "en": "Extraterrestrial",
        "vi": "Thuộc về ngoài hành tinh",
        "ipa": "/ˌek.strə.təˈres.tri.əl/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 873,
        "en": "Not someone's cup of tea",
        "vi": "Không phải gu/sở thích của ai đó",
        "ipa": "/nɒt wʌnz kʌp əv tiː/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 874,
        "en": "Circulation",
        "vi": "Lượng phát hành (báo chí)",
        "ipa": "/ˌsɜː.kjəˈleɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 875,
        "en": "Find out",
        "vi": "Tìm ra, phát hiện ra thông tin",
        "ipa": "/faɪnd aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 876,
        "en": "Frontier",
        "vi": "Ranh giới, ranh giới khám phá",
        "ipa": "/ˈfrʌn.tɪə/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 877,
        "en": "Speak of the devil",
        "vi": "Vừa nhắc tào tháo, tào tháo tới",
        "ipa": "/spiːk əv ðə ˈdev.əl/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 878,
        "en": "Commemorate",
        "vi": "Tưởng niệm, kỷ niệm",
        "ipa": "/kəˈmem.ə.reɪt/",
        "pos": "(v)",
        "ex": ""
    },
    {
        "num": 879,
        "en": "Imprisonment",
        "vi": "Hình phạt tù",
        "ipa": "/ɪmˈprɪz.ən.mənt/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 880,
        "en": "Put away",
        "vi": "Cất đi",
        "ipa": "/pʊt əˈweɪ/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 881,
        "en": "Carry on",
        "vi": "Tiếp tục (= continue)",
        "ipa": "/ˈkær.i ɒn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 882,
        "en": "Egalitarian",
        "vi": "Bình đẳng",
        "ipa": "/ɪˌɡæl.ɪˈteə.ri.ən/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 883,
        "en": "Give someone the cold shoulder",
        "vi": "Phớt lờ, lạnh nhạt với ai",
        "ipa": "/ɡɪv ˈsʌm.wʌn ðə kəʊld ˈʃəʊl.də/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 884,
        "en": "Get round to",
        "vi": "Cuối cùng cũng có thời gian làm việc gì",
        "ipa": "/ɡet raʊnd tuː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 885,
        "en": "Hectic",
        "vi": "Bận rộn, tất bật",
        "ipa": "/ˈhek.tɪk/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 886,
        "en": "Drop off",
        "vi": "Ngủ gật, sụt giảm, thả ai/đồ vật xuống xe",
        "ipa": "/drɒp ɒf/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 887,
        "en": "Satellite",
        "vi": "Vệ tinh",
        "ipa": "/ˈsæt.əl.aɪt/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 888,
        "en": "Ancestor",
        "vi": "Tổ tiên",
        "ipa": "/ˈæn.ses.tə/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 889,
        "en": "Quantum",
        "vi": "Lượng tử",
        "ipa": "/ˈkwɒn.təm/",
        "pos": "(n/adj)",
        "ex": ""
    },
    {
        "num": 890,
        "en": "Let down",
        "vi": "Làm ai đó thất vọng",
        "ipa": "/let daʊn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 891,
        "en": "Close down",
        "vi": "Đóng cửa hẳn, phá sản (doanh nghiệp)",
        "ipa": "/kləʊz daʊn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 892,
        "en": "Get along (with)",
        "vi": "Có mối quan hệ hòa hợp với ai",
        "ipa": "/ɡet əˈlɒŋ wɪð/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 893,
        "en": "Census",
        "vi": "Cuộc điều tra dân số",
        "ipa": "/ˈsen.səs/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 894,
        "en": "Inflation",
        "vi": "Lạm phát",
        "ipa": "/ɪnˈfleɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 895,
        "en": "Bias",
        "vi": "Sự thiên vị, thành kiến",
        "ipa": "/ˈbaɪ.əs/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 896,
        "en": "Canvas",
        "vi": "Tranh sơn dầu, giá vẽ",
        "ipa": "/ˈkæn.vəs/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 897,
        "en": "Ecological footprint",
        "vi": "Dấu chân sinh thái",
        "ipa": "/ˌiː.kəˈlɒdʒ.ɪ.kəl ˈfʊt.prɪnt/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 898,
        "en": "Benevolent",
        "vi": "Nhân từ, rộng lượng",
        "ipa": "/bəˈnev.əl.ənt/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 899,
        "en": "Put down",
        "vi": "Đặt xuống, hạ nhục ai đó",
        "ipa": "/pʊt daʊn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 900,
        "en": "Stand for",
        "vi": "Viết tắt của, đại diện, ủng hộ",
        "ipa": "/stænd fɔː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 901,
        "en": "Asteroid",
        "vi": "Tiểu hành tinh",
        "ipa": "/ˈæs.tər.ɔɪd/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 902,
        "en": "Souvenir",
        "vi": "Quà lưu niệm",
        "ipa": "/ˌsuː.vənˈɪə/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 903,
        "en": "Từ vựng",
        "vi": "Nghĩa tiếng Việt",
        "ipa": "Phiên âm (UK)",
        "pos": "Từ loại",
        "ex": ""
    },
    {
        "num": 904,
        "en": "Neck and neck",
        "vi": "Ngang tài ngang sức, sát nút nhau",
        "ipa": "/nek ənd nek/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 905,
        "en": "Corruption",
        "vi": "Nạn tham nhũng",
        "ipa": "/kəˈrʌp.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 906,
        "en": "Hand in",
        "vi": "Nộp (bài tập, giấy tờ)",
        "ipa": "/hænd ɪn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 907,
        "en": "Ozone layer",
        "vi": "Tầng ô-zôn",
        "ipa": "/ˈəʊ.zəʊn ˌleɪ.ə/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 908,
        "en": "Fight off",
        "vi": "Đẩy lùi (bệnh tật, kẻ thù)",
        "ipa": "/faɪt ɒf/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 909,
        "en": "Standardize",
        "vi": "Tiêu chuẩn hóa (bài thi)",
        "ipa": "/ˈstæn.də.daɪz/",
        "pos": "(v)",
        "ex": ""
    },
    {
        "num": 910,
        "en": "Orchestra",
        "vi": "Dàn nhạc giao hưởng",
        "ipa": "/ˈɔː.kɪ.strə/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 911,
        "en": "Hypothesis",
        "vi": "Giả thuyết",
        "ipa": "/haɪˈpɒθ.ə.sɪs/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 912,
        "en": "Tariff",
        "vi": "Thuế quan xuất nhập khẩu",
        "ipa": "/ˈtær.ɪf/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 913,
        "en": "Hand over",
        "vi": "Giao nộp, bàn giao (quyền lực, đồ vật)",
        "ipa": "/hænd ˈəʊ.və/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 914,
        "en": "Get something off one's chest",
        "vi": "Thổ lộ tâm tư để nhẹ lòng",
        "ipa": "/ɡet ˈsʌm.θɪŋ ɒf wʌnz tʃest/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 915,
        "en": "Advocate",
        "vi": "Ủng hộ, người biện hộ",
        "ipa": "/ˈæd.və.keɪt/",
        "pos": "(v/n)",
        "ex": ""
    },
    {
        "num": 916,
        "en": "Death rate",
        "vi": "Tỷ lệ tử",
        "ipa": "/deθ reɪt/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 917,
        "en": "Catch up with",
        "vi": "Bắt kịp, theo kịp ai/cái gì",
        "ipa": "/kætʃ ʌp wɪð/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 918,
        "en": "Inspiration",
        "vi": "Nguồn cảm hứng",
        "ipa": "/ˌɪn.spɪˈreɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 919,
        "en": "Draw up",
        "vi": "Lên kế hoạch, soạn thảo (văn bản)",
        "ipa": "/drɔː ʌp/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 920,
        "en": "Delinquent",
        "vi": "Kẻ phạm pháp (thanh thiếu niên)",
        "ipa": "/dɪˈlɪŋ.kwənt/",
        "pos": "(adj/n)",
        "ex": ""
    },
    {
        "num": 921,
        "en": "Captivating",
        "vi": "Đầy cuốn hút, quyến rũ",
        "ipa": "/ˈkæp.tɪ.veɪ.tɪŋ/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 922,
        "en": "Hand out",
        "vi": "Phân phát",
        "ipa": "/hænd aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 923,
        "en": "Come up",
        "vi": "Xảy ra bất ngờ, được nhắc đến",
        "ipa": "/kʌm ʌp/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 924,
        "en": "Make a long story short",
        "vi": "Nói tóm lại là",
        "ipa": "/meɪk ə lɒŋ ˈstɔː.ri ʃɔːt/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 925,
        "en": "Greenhouse effect",
        "vi": "Hiệu ứng nhà kính",
        "ipa": "/ˈɡriːn.haʊs ɪˌfekt/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 926,
        "en": "Homicide",
        "vi": "Tội giết người",
        "ipa": "/ˈhɒm.ɪ.saɪd/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 927,
        "en": "Under the weather",
        "vi": "Thấy không được khỏe, hơi ốm",
        "ipa": "/ˈʌn.də ðə ˈweð.ə/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 928,
        "en": "Metropolitan",
        "vi": "Thuộc về khu đô thị lớn",
        "ipa": "/ˌmet.rəˈpɒl.ɪ.tən/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 929,
        "en": "Call in",
        "vi": "Mời đến, gọi chuyên gia đến giúp",
        "ipa": "/kɔːl ɪn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 930,
        "en": "Philanthropy",
        "vi": "Công tác từ thiện, lòng nhân ái",
        "ipa": "/fɪˈlæn.θrə.pi/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 931,
        "en": "Monumental",
        "vi": "Hùng vĩ, vĩ đại (công trình)",
        "ipa": "/ˌmɒn.jəˈmen.təl/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 932,
        "en": "Burn the midnight oil",
        "vi": "Thức khuya để học bài, làm việc",
        "ipa": "/bɜːn ðə ˈmɪd.naɪt ɔɪl/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 933,
        "en": "Take after",
        "vi": "Giống ai đó (về ngoại hình/tính cách)",
        "ipa": "/teɪk ˈɑːf.tə/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 934,
        "en": "Look over",
        "vi": "Kiểm tra nhanh, xem xét lướt qua",
        "ipa": "/lʊk ˈəʊ.və/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 935,
        "en": "Encryption",
        "vi": "Sự mã hóa (dữ liệu)",
        "ipa": "/ɪnˈkrɪp.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 936,
        "en": "Call on",
        "vi": "Kêu gọi, ghé thăm ai một lát",
        "ipa": "/kɔːl ɒn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 937,
        "en": "Exhibition",
        "vi": "Buổi triển lãm",
        "ipa": "/ˌek.sɪˈbɪʃ.ən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 938,
        "en": "Juvenile",
        "vi": "Vị thành niên",
        "ipa": "/ˈdʒuː.vən.aɪl/",
        "pos": "(adj/n)",
        "ex": ""
    },
    {
        "num": 939,
        "en": "Smuggling",
        "vi": "Nạn buôn lậu",
        "ipa": "/ˈsmʌɡ.lɪŋ/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 940,
        "en": "Bump into",
        "vi": "Tình cờ gặp ai (= Run into)",
        "ipa": "/bʌmp ˈɪn.tuː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 941,
        "en": "Kill two birds with one stone",
        "vi": "Một mũi tên trúng hai đích",
        "ipa": "/kɪl tuː bɜːdz wɪð wʌn stəʊn/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 942,
        "en": "Upbringing",
        "vi": "Sự nuôi dưỡng, dạy dỗ",
        "ipa": "/ˈʌpˌbrɪŋ.ɪŋ/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 943,
        "en": "Keep an eye on",
        "vi": "Để mắt tới, trông chừng",
        "ipa": "/kiːp ən aɪ ɒn/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 944,
        "en": "Get the hang of something",
        "vi": "Nắm bắt được cách làm cái gì đó",
        "ipa": "/ɡet ðə hæŋ əv ˈsʌm.θɪŋ/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 945,
        "en": "Go on",
        "vi": "Tiếp tục, xảy ra",
        "ipa": "/ɡəʊ ɒn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 946,
        "en": "Stagnant",
        "vi": "Trì trệ, ứ đọng",
        "ipa": "/ˈstæɡ.nənt/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 947,
        "en": "Excavation",
        "vi": "Sự khai quật",
        "ipa": "/ˌeks.kəˈveɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 948,
        "en": "Early bird",
        "vi": "Người dậy sớm",
        "ipa": "/ˈɜː.li bɜːd/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 949,
        "en": "Diligent",
        "vi": "Siêng năng, cần mẫn",
        "ipa": "/ˈdɪl.ɪ.dʒənt/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 950,
        "en": "Breeding",
        "vi": "Sự sinh sản, nhân giống",
        "ipa": "/ˈbriː.dɪŋ/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 951,
        "en": "Prescription",
        "vi": "Đơn thuốc",
        "ipa": "/prɪˈskrɪp.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 952,
        "en": "Astronaut",
        "vi": "Phi hành gia",
        "ipa": "/ˈæs.trə.nɔːt/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 953,
        "en": "Multitasking",
        "vi": "Kỹ năng làm nhiều việc cùng lúc",
        "ipa": "/ˌmʌl.tiˈtɑːs.kɪŋ/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 954,
        "en": "Fly off the handle",
        "vi": "Dễ nổi cáu, bỗng nhiên tức giận",
        "ipa": "/flaɪ ɒf ðə ˈhæn.dəl/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 955,
        "en": "Algorithm",
        "vi": "Thuật toán",
        "ipa": "/ˈæl.ɡə.rɪ.ðəm/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 956,
        "en": "Hold up",
        "vi": "Trì hoãn (= delay), cướp bóc",
        "ipa": "/həʊld ʌp/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 957,
        "en": "Offspring",
        "vi": "Con cái",
        "ipa": "/ˈɒf.sprɪŋ/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 958,
        "en": "Ecological",
        "vi": "Thuộc về sinh thái",
        "ipa": "/ˌiː.kəˈlɒdʒ.ɪ.kəl/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 959,
        "en": "Pragmatic",
        "vi": "Thực tế, thực dụng",
        "ipa": "/præɡˈmæt.ɪk/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 960,
        "en": "Reconcile",
        "vi": "Làm hòa, hòa giải",
        "ipa": "/ˈrek.ən.saɪl/",
        "pos": "(v)",
        "ex": ""
    },
    {
        "num": 961,
        "en": "Save for a rainy day",
        "vi": "Tiết kiệm phòng khi khó khăn",
        "ipa": "/seɪv fɔːr ə ˈreɪ.ni deɪ/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 962,
        "en": "By the skin of one's teeth",
        "vi": "Suýt soát, trong gang tấc",
        "ipa": "/baɪ ðə skɪn əv wʌnz tiːθ/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 963,
        "en": "Step up one's game",
        "vi": "Nỗ lực hơn nữa để làm tốt hơn",
        "ipa": "/step ʌp wʌnz ɡeɪm/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 964,
        "en": "Patriotism",
        "vi": "Lòng yêu nước",
        "ipa": "/ˈpæt.ri.ə.tɪ.zəm/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 965,
        "en": "Civilization",
        "vi": "Nền văn minh",
        "ipa": "/ˌsɪv.əl.aɪˈzeɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 966,
        "en": "Abide by",
        "vi": "Tuân thủ (luật lệ, quy định, thỏa thuận)",
        "ipa": "/əˈbaɪd baɪ/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 967,
        "en": "Sibling",
        "vi": "Anh chị em ruột",
        "ipa": "/ˈsɪb.lɪŋ/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 968,
        "en": "Malnutrition",
        "vi": "Tình trạng suy dinh dưỡng",
        "ipa": "/ˌmæl.njuːˈtrɪʃ.ən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 969,
        "en": "Viable",
        "vi": "Khả thi (phương án, sự sống)",
        "ipa": "/ˈvaɪ.ə.bəl/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 970,
        "en": "Unwind",
        "vi": "Thư giãn, xả hơi",
        "ipa": "/ʌnˈwaɪnd/",
        "pos": "(v)",
        "ex": ""
    },
    {
        "num": 971,
        "en": "Come into",
        "vi": "Thừa kế (tài sản)",
        "ipa": "/kʌm ˈɪn.tuː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 972,
        "en": "Itinerary",
        "vi": "Lịch trình chuyến đi",
        "ipa": "/aɪˈtɪn.ər.ər.i/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 973,
        "en": "Misinformation",
        "vi": "Thông tin sai lệch",
        "ipa": "/ˌmɪs.ɪn.fəˈmeɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 974,
        "en": "Drop by / in",
        "vi": "Tạt qua thăm ai một lúc",
        "ipa": "/drɒp baɪ/ - /ɪn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 975,
        "en": "Bring round",
        "vi": "Làm ai tỉnh lại, thuyết phục ai đổi ý",
        "ipa": "/brɪŋ raʊnd/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 976,
        "en": "Discrimination",
        "vi": "Sự phân biệt đối xử",
        "ipa": "/dɪˌskrɪm.ɪˈneɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 977,
        "en": "Give away",
        "vi": "Cho đi, phân phát, tiết lộ (bí mật)",
        "ipa": "/ɡɪv əˈweɪ/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 978,
        "en": "Break out",
        "vi": "Bùng nổ (chiến tranh, dịch bệnh)",
        "ipa": "/breɪk aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 979,
        "en": "Degradation",
        "vi": "Sự suy thoái (môi trường, đất)",
        "ipa": "/ˌdeɡ.rəˈdeɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 980,
        "en": "Ancestry",
        "vi": "Nguồn gốc dòng dõi",
        "ipa": "/ˈæn.ses.tri/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 981,
        "en": "Back down",
        "vi": "Nhượng bộ, rút lui (khỏi cuộc tranh cãi)",
        "ipa": "/bæk daʊn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 982,
        "en": "Look forward to",
        "vi": "Mong đợi, trông chờ (+ V-ing)",
        "ipa": "/lʊk ˈfɔː.wəd tuː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 983,
        "en": "Catch on",
        "vi": "Trở nên phổ biến, hiểu ra vấn đề",
        "ipa": "/kætʃ ɒn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 984,
        "en": "Leave out",
        "vi": "Bỏ sót, loại trừ ra",
        "ipa": "/liːv aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 985,
        "en": "A penny for your thoughts",
        "vi": "Bạn đang nghĩ gì vậy? (Hỏi người khác)",
        "ipa": "/ə ˈpen.i fɔː jɔː θɔːts/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 986,
        "en": "Disseminate",
        "vi": "Phổ biến, gieo rắc (tin tức)",
        "ipa": "/dɪˈsem.ɪ.neɪt/",
        "pos": "(v)",
        "ex": ""
    },
    {
        "num": 987,
        "en": "Herbivore",
        "vi": "Động vật ăn cỏ",
        "ipa": "/ˈhɜː.bɪ.vɔː/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 988,
        "en": "Proportion",
        "vi": "Tỷ lệ, phần tương xứng",
        "ipa": "/prəˈpɔː.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 989,
        "en": "Rivalry",
        "vi": "Sự ganh đua, cạnh tranh",
        "ipa": "/ˈraɪ.vəl.ri/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 990,
        "en": "A piece of cake",
        "vi": "Rất dễ dàng, dễ như ăn bánh",
        "ipa": "/ə piːs əv keɪk/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 991,
        "en": "Subconscious",
        "vi": "Tiềm thức",
        "ipa": "/sʌbˈkɒn.ʃəs/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 992,
        "en": "Expedition",
        "vi": "Cuộc thám hiểm",
        "ipa": "/ˌek.spəˈdɪʃ.ən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 993,
        "en": "Go against",
        "vi": "Đi ngược lại, làm trái với, phản đối",
        "ipa": "/ɡəʊ əˈɡenst/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 994,
        "en": "Expectancy",
        "vi": "Tuổi thọ dự kiến",
        "ipa": "/ɪkˈspek.tən.si/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 995,
        "en": "Probation",
        "vi": "Thời gian thử việc",
        "ipa": "/prəˈbeɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 996,
        "en": "Orphanage",
        "vi": "Trại trẻ mồ côi",
        "ipa": "/ˈɔː.fən.ɪdʒ/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 997,
        "en": "Get over",
        "vi": "Vượt qua, bình phục (sau bệnh, cú sốc)",
        "ipa": "/ɡet ˈəʊ.və/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 998,
        "en": "Solitude",
        "vi": "Trạng thái ở một mình (tích cực)",
        "ipa": "/ˈsɒl.ɪ.tʃuːd/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 999,
        "en": "Have an egg on one's face",
        "vi": "Trông thật ngu ngốc, xấu hổ",
        "ipa": "/hæv ən eɡ ɒn wʌnz feɪs/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1000,
        "en": "Compassion",
        "vi": "Lòng trắc ẩn, sự thương xót",
        "ipa": "/kəmˈpæʃ.ən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1001,
        "en": "Interactive",
        "vi": "Có tính tương tác",
        "ipa": "/ˌɪn.təˈræk.tɪv/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1002,
        "en": "Monument",
        "vi": "Đài tưởng niệm",
        "ipa": "/ˈmɒn.jə.mənt/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1003,
        "en": "Cut back",
        "vi": "Cắt giảm (sản xuất, chi tiêu)",
        "ipa": "/kʌt bæk/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1004,
        "en": "Draw back",
        "vi": "Rút lui",
        "ipa": "/drɔː bæk/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1005,
        "en": "Initiative",
        "vi": "Sáng kiến, bước đầu",
        "ipa": "/ɪˈnɪʃ.ə.tɪv/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1006,
        "en": "Cut corners",
        "vi": "Làm ẩu, đi tắt để tiết kiệm thời gian/tiền",
        "ipa": "/kʌt ˈkɔː.nəz/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1007,
        "en": "Let off",
        "vi": "Tha bổng, không phạt (hoặc phạt rất nhẹ)",
        "ipa": "/let ɒf/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1008,
        "en": "Gravity",
        "vi": "Trọng lực",
        "ipa": "/ˈɡræv.ə.ti/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1009,
        "en": "Truancy",
        "vi": "Sự trốn học",
        "ipa": "/ˈtruː.ən.si/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1010,
        "en": "Pass over",
        "vi": "Bỏ qua, lờ đi (không thăng chức cho ai)",
        "ipa": "/pɑːs ˈəʊ.və/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1011,
        "en": "Mammal",
        "vi": "Động vật có vú",
        "ipa": "/ˈmæm.əl/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1012,
        "en": "Play it by ear",
        "vi": "Tùy cơ ứng biến, không lập kế hoạch trước",
        "ipa": "/pleɪ ɪt baɪ ɪə/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1013,
        "en": "Incarceration",
        "vi": "Sự bỏ tù, giam giữ",
        "ipa": "/ɪnˌkɑː.sərˈeɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1014,
        "en": "Disorder",
        "vi": "Rối loạn (tâm lý)",
        "ipa": "/dɪˈsɔː.də/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1015,
        "en": "Assimilate",
        "vi": "Tiếp thu, đồng hóa (kiến thức)",
        "ipa": "/əˈsɪm.ɪ.leɪt/",
        "pos": "(v)",
        "ex": ""
    },
    {
        "num": 1016,
        "en": "At the drop of a hat",
        "vi": "Ngay lập tức, không chần chừ",
        "ipa": "/ət ðə drɒp əv ə hæt/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1017,
        "en": "Blockbuster",
        "vi": "Phim bom tấn",
        "ipa": "/ˈblɒkˌbʌs.tə/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1018,
        "en": "Species",
        "vi": "Giống loài",
        "ipa": "/ˈspiː.ʃiːz/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1019,
        "en": "Steal someone's thunder",
        "vi": "Cướp công, giành lấy sự chú ý của ai",
        "ipa": "/stiːl ˈsʌm.wʌnz ˈθʌn.də/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1020,
        "en": "Biodiversity",
        "vi": "Đa dạng sinh học",
        "ipa": "/ˌbaɪ.əʊ.daɪˈvɜː.sə.ti/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1021,
        "en": "Fringe benefits",
        "vi": "Phúc lợi phụ (ngoài lương)",
        "ipa": "/frɪndʒ ˈben.ɪ.fɪts/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1022,
        "en": "Put forward",
        "vi": "Đề xuất (ý tưởng), giới thiệu (nhân sự)",
        "ipa": "/pʊt ˈfɔː.wəd/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1023,
        "en": "Carry out",
        "vi": "Tiến hành, thực hiện (kế hoạch, khảo sát)",
        "ipa": "/ˈkær.i aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1024,
        "en": "Point out",
        "vi": "Chỉ ra, vạch ra",
        "ipa": "/pɔɪnt aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1025,
        "en": "Come across",
        "vi": "Tình cờ gặp, tình cờ thấy",
        "ipa": "/kʌm əˈkrɒs/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1026,
        "en": "Ask after",
        "vi": "Hỏi thăm sức khỏe của ai",
        "ipa": "/ɑːsk ˈɑːf.tə/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1027,
        "en": "Emigration",
        "vi": "Sự xuất cư",
        "ipa": "/ˌem.ɪˈɡreɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1028,
        "en": "Get at",
        "vi": "Ám chỉ, chạm tới, với lấy",
        "ipa": "/ɡet ət/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1029,
        "en": "Cost an arm and a leg",
        "vi": "Rất đắt đỏ",
        "ipa": "/kɒst ən ɑːm ənd ə leɡ/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1030,
        "en": "Give off",
        "vi": "Tỏa ra (mùi hương, nhiệt độ, ánh sáng)",
        "ipa": "/ɡɪv ɒf/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1031,
        "en": "In the heat of the moment",
        "vi": "Trong lúc đang nóng giận/kích động",
        "ipa": "/ɪn ðə hiːt əv ðə ˈməʊ.mənt/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1032,
        "en": "Try out",
        "vi": "Thử nghiệm (máy móc, phương pháp)",
        "ipa": "/traɪ aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1033,
        "en": "Brush up (on)",
        "vi": "Ôn tập lại, trau dồi lại kiến thức cũ",
        "ipa": "/brʌʃ ʌp (ɒn)/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1034,
        "en": "Predator",
        "vi": "Thú săn mồi",
        "ipa": "/ˈpred.ə.tə/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1035,
        "en": "Epidemic",
        "vi": "Bệnh dịch / Lan truyền nhanh",
        "ipa": "/ˌep.ɪˈdem.ɪk/",
        "pos": "(n/adj)",
        "ex": ""
    },
    {
        "num": 1036,
        "en": "Interface",
        "vi": "Giao diện",
        "ipa": "/ˈɪn.tə.feɪs/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1037,
        "en": "Empathy",
        "vi": "Sự đồng cảm, thấu cảm",
        "ipa": "/ˈem.pə.θi/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1038,
        "en": "Come forward",
        "vi": "Đứng ra giúp đỡ, cung cấp thông tin",
        "ipa": "/kʌm ˈfɔː.wəd/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1039,
        "en": "Abstract",
        "vi": "Trừu tượng",
        "ipa": "/ˈæb.strækt/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1040,
        "en": "Aesthetic",
        "vi": "Có tính thẩm mỹ / Thẩm mỹ học",
        "ipa": "/esˈθet.ɪk/",
        "pos": "(adj/n)",
        "ex": ""
    },
    {
        "num": 1041,
        "en": "Prosecutor",
        "vi": "Công tố viên, người khởi tố",
        "ipa": "/ˈprɒs.ɪ.kjuː.tə/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1042,
        "en": "A blessing in disguise",
        "vi": "Trong cái rủi có cái may",
        "ipa": "/ə ˈbles.ɪŋ ɪn dɪsˈɡaɪz/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1043,
        "en": "Genre",
        "vi": "Thể loại (phim, nhạc, sách)",
        "ipa": "/ˈʒɒn.rə/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1044,
        "en": "Masterpiece",
        "vi": "Kiệt tác",
        "ipa": "/ˈmɑː.stə.piːs/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1045,
        "en": "Prehistoric",
        "vi": "Thuộc thời tiền sử",
        "ipa": "/ˌpriː.hɪˈstɒr.ɪk/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1046,
        "en": "Mainstream",
        "vi": "Đại trà, xu hướng chủ đạo",
        "ipa": "/ˈmeɪn.striːm/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1047,
        "en": "Outskirts",
        "vi": "Vùng ngoại ô",
        "ipa": "/ˈaʊt.skɜːts/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1048,
        "en": "Wear out",
        "vi": "Làm ai kiệt sức, làm rách/mòn đồ vật",
        "ipa": "/weər aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1049,
        "en": "Paparazzi",
        "vi": "Thợ săn ảnh (người nổi tiếng)",
        "ipa": "/ˌpæp.ərˈæt.si/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1050,
        "en": "Make for",
        "vi": "Đi về hướng, góp phần làm ra cái gì",
        "ipa": "/meɪk fɔː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1051,
        "en": "Fabricate",
        "vi": "Bịa đặt (thông tin)",
        "ipa": "/ˈfæb.rɪ.keɪt/",
        "pos": "(v)",
        "ex": ""
    },
    {
        "num": 1052,
        "en": "Emission",
        "vi": "Khí thải",
        "ipa": "/ɪˈmɪʃ.ən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1053,
        "en": "End up",
        "vi": "Có kết cục, cuối cùng thì (trở thành gì)",
        "ipa": "/end ʌp/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1054,
        "en": "Peer",
        "vi": "Bạn đồng trang lứa",
        "ipa": "/pɪə/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1055,
        "en": "The early bird catches the worm",
        "vi": "Trâu chậm uống nước đục (Đến sớm có lợi)",
        "ipa": "/ði ˈɜː.li bɜːd ˈkætʃ.ɪz ðə wɜːm/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1056,
        "en": "Catastrophic",
        "vi": "Thảm khốc, thê thảm",
        "ipa": "/ˌkæt.əˈstrɒf.ɪk/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1057,
        "en": "Phenomenon",
        "vi": "Hiện tượng",
        "ipa": "/fəˈnɒm.ɪ.nən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1058,
        "en": "Explosion",
        "vi": "Sự bùng nổ (dân số)",
        "ipa": "/ɪkˈspləʊ.ʒən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1059,
        "en": "Boom",
        "vi": "Sự bùng nổ (dân số, kinh tế)",
        "ipa": "/buːm/",
        "pos": "(n/v)",
        "ex": ""
    },
    {
        "num": 1060,
        "en": "Interpersonal",
        "vi": "Giữa các cá nhân với nhau",
        "ipa": "/ˌɪn.təˈpɜː.sən.əl/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1061,
        "en": "Workaholic",
        "vi": "Người nghiện công việc",
        "ipa": "/ˌwɜː.kəˈhɒl.ɪk/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1062,
        "en": "Entrepreneur",
        "vi": "Doanh nhân",
        "ipa": "/ˌɒn.trə.prəˈnɜː/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1063,
        "en": "Once in a blue moon",
        "vi": "Rất hiếm khi",
        "ipa": "/wʌns ɪn ə bluː muːn/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1064,
        "en": "Malicious",
        "vi": "Độc hại (phần mềm, mã độc)",
        "ipa": "/məˈlɪʃ.əs/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1065,
        "en": "Empowerment",
        "vi": "Sự trao quyền, cấp quyền",
        "ipa": "/ɪmˈpaʊə.mənt/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1066,
        "en": "Cognitive",
        "vi": "Thuộc về nhận thức",
        "ipa": "/ˈkɒɡ.nə.tɪv/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1067,
        "en": "Hang up",
        "vi": "Cúp máy điện thoại",
        "ipa": "/hæŋ ʌp/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1068,
        "en": "Cut in",
        "vi": "Ngắt lời (= Interrupt)",
        "ipa": "/kʌt ɪn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1069,
        "en": "Rote learning",
        "vi": "Học vẹt",
        "ipa": "/rəʊt ˈlɜː.nɪŋ/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1070,
        "en": "Delusion",
        "vi": "Ảo giác, ảo tưởng",
        "ipa": "/dɪˈluː.ʒən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1071,
        "en": "Invasion",
        "vi": "Sự xâm phạm (sự riêng tư)",
        "ipa": "/ɪnˈveɪ.ʒən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1072,
        "en": "Assimilation",
        "vi": "Sự đồng hóa văn hóa",
        "ipa": "/əˌsɪm.ɪˈleɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1073,
        "en": "Cybercrime",
        "vi": "Tội phạm mạng",
        "ipa": "/ˈsaɪ.bə.kraɪm/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1074,
        "en": "Deprivation",
        "vi": "Sự thiếu thốn",
        "ipa": "/ˌdep.rɪˈveɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1075,
        "en": "Show off",
        "vi": "Khoe khoang",
        "ipa": "/ʃəʊ ɒf/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1076,
        "en": "Don't judge a book by its cover",
        "vi": "Đừng trông mặt mà bắt hình dong",
        "ipa": "/dəʊnt dʒʌdʒ ə bʊk baɪ ɪts ˈkʌv.ə/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1077,
        "en": "Cost of living",
        "vi": "Chi phí sinh hoạt",
        "ipa": "/kɒst əv ˈlɪv.ɪŋ/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1078,
        "en": "Bring down",
        "vi": "Làm giảm (giá cả), hạ bệ (chính phủ)",
        "ipa": "/brɪŋ daʊn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1079,
        "en": "Give back",
        "vi": "Trả lại (đồ đã mượn)",
        "ipa": "/ɡɪv bæk/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1080,
        "en": "Intimate",
        "vi": "Thân mật, sâu sắc",
        "ipa": "/ˈɪn.tɪ.mət/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1081,
        "en": "Catch someone red-handed",
        "vi": "Bắt quả tang ai đang làm việc xấu",
        "ipa": "/kætʃ ˈsʌm.wʌn redˈhæn.dɪd/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1082,
        "en": "Look up",
        "vi": "Tra cứu (từ điển, danh bạ)",
        "ipa": "/lʊk ʌp/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1083,
        "en": "Speculate",
        "vi": "Suy đoán, phỏng đoán",
        "ipa": "/ˈspek.jə.leɪt/",
        "pos": "(v)",
        "ex": ""
    },
    {
        "num": 1084,
        "en": "Habitual",
        "vi": "Thường xuyên, thành thói quen",
        "ipa": "/həˈbɪtʃ.u.əl/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1085,
        "en": "Rule out",
        "vi": "Loại trừ khả năng xảy ra",
        "ipa": "/ruːl aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1086,
        "en": "Tertiary education",
        "vi": "Giáo dục bậc đại học/cao đẳng",
        "ipa": "/ˈtɜː.ʃər.i ˌedʒ.ʊˈkeɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1087,
        "en": "Demographic",
        "vi": "Nhóm nhân khẩu học",
        "ipa": "/ˌdem.əˈɡræf.ɪk/",
        "pos": "(n/adj)",
        "ex": ""
    },
    {
        "num": 1088,
        "en": "Fall through",
        "vi": "Hỏng, thất bại (kế hoạch không diễn ra)",
        "ipa": "/fɔːl θruː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1089,
        "en": "Life span",
        "vi": "Vòng đời, tuổi thọ",
        "ipa": "/laɪf spæn/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1090,
        "en": "Look up to",
        "vi": "Kính trọng, ngưỡng mộ ai",
        "ipa": "/lʊk ʌp tuː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1091,
        "en": "Bankruptcy",
        "vi": "Sự phá sản",
        "ipa": "/ˈbæŋ.krəp.si/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1092,
        "en": "Exhibit",
        "vi": "Trưng bày / Vật trưng bày",
        "ipa": "/ɪɡˈzɪb.ɪt/",
        "pos": "(v/n)",
        "ex": ""
    },
    {
        "num": 1093,
        "en": "Commute",
        "vi": "Đi làm xa (mỗi ngày)",
        "ipa": "/kəˈmjuːt/",
        "pos": "(v/n)",
        "ex": ""
    },
    {
        "num": 1094,
        "en": "Censorship",
        "vi": "Sự kiểm duyệt",
        "ipa": "/ˈsen.sə.ʃɪp/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1095,
        "en": "Shelter",
        "vi": "Mái ấm, nơi trú ẩn",
        "ipa": "/ˈʃel.tə/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1096,
        "en": "Eradicate",
        "vi": "Xóa bỏ, tiêu diệt hoàn toàn",
        "ipa": "/ɪˈræd.ɪ.keɪt/",
        "pos": "(v)",
        "ex": ""
    },
    {
        "num": 1097,
        "en": "Put off",
        "vi": "Trì hoãn (= postpone, delay)",
        "ipa": "/pʊt ɒf/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1098,
        "en": "Cross out",
        "vi": "Gạch bỏ",
        "ipa": "/krɒs aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1099,
        "en": "Clear up",
        "vi": "Dọn dẹp, (thời tiết) quang đãng",
        "ipa": "/klɪər ʌp/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1100,
        "en": "Underprivileged",
        "vi": "Thiệt thòi, kém may mắn",
        "ipa": "/ˌʌn.dəˈprɪv.əl.ɪdʒd/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1101,
        "en": "Susceptible",
        "vi": "Dễ mắc phải (bệnh tật), nhạy cảm",
        "ipa": "/səˈsep.tə.bəl/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1102,
        "en": "Illiteracy",
        "vi": "Nạn mù chữ",
        "ipa": "/ɪˈlɪt.ər.ə.si/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1103,
        "en": "Balance",
        "vi": "Sự cân bằng",
        "ipa": "/ˈbæl.əns/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1104,
        "en": "Back up",
        "vi": "Ủng hộ, sao lưu (dữ liệu)",
        "ipa": "/bæk ʌp/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1105,
        "en": "Pensioner",
        "vi": "Người được hưởng lương hưu",
        "ipa": "/ˈpen.ʃən.ə/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1106,
        "en": "Terrestrial",
        "vi": "Sống trên cạn",
        "ipa": "/təˈres.tri.əl/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1107,
        "en": "Figure out",
        "vi": "Hiểu ra, tìm ra (câu trả lời, giải pháp)",
        "ipa": "/ˈfɪɡ.ər aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1108,
        "en": "Trustworthy",
        "vi": "Đáng tin cậy",
        "ipa": "/ˈtrʌstˌwɜː.ði/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1109,
        "en": "Part and parcel",
        "vi": "Phần quan trọng, thiết yếu không thể thiếu",
        "ipa": "/pɑːt ənd ˈpɑː.səl/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1110,
        "en": "Minimalism",
        "vi": "Lối sống tối giản",
        "ipa": "/ˈmɪn.ɪ.məl.ɪ.zəm/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1111,
        "en": "Heritage",
        "vi": "Di sản",
        "ipa": "/ˈher.ɪ.tɪdʒ/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1112,
        "en": "Excursion",
        "vi": "Chuyến tham quan ngắn",
        "ipa": "/ɪkˈskɜː.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1113,
        "en": "Deterioration",
        "vi": "Sự xuống cấp, suy tàn",
        "ipa": "/dɪˌtɪə.ri.əˈreɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1114,
        "en": "Keep out",
        "vi": "Ngăn không cho vào",
        "ipa": "/kiːp aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1115,
        "en": "Break in",
        "vi": "Ngắt lời, đột nhập",
        "ipa": "/breɪk ɪn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1116,
        "en": "Extinction",
        "vi": "Sự tuyệt chủng",
        "ipa": "/ɪkˈstɪŋk.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1117,
        "en": "Get rid of",
        "vi": "Loại bỏ, vứt bỏ",
        "ipa": "/ɡet rɪd əv/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1118,
        "en": "Platonic",
        "vi": "Tình bạn thuần khiết, trong sáng",
        "ipa": "/pləˈtɒn.ɪk/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1119,
        "en": "Statistics",
        "vi": "Số liệu thống kê",
        "ipa": "/stəˈtɪs.tɪks/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1120,
        "en": "Get away with",
        "vi": "Thoát tội, làm sai mà không bị phạt",
        "ipa": "/ɡet əˈweɪ wɪð/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1121,
        "en": "Clean up",
        "vi": "Dọn dẹp sạch sẽ",
        "ipa": "/kliːn ʌp/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1122,
        "en": "Receptive",
        "vi": "Dễ tiếp thu (ý tưởng mới)",
        "ipa": "/rɪˈsep.tɪv/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1123,
        "en": "Hold your horses",
        "vi": "Bình tĩnh nào, đừng vội",
        "ipa": "/həʊld jɔː ˈhɔː.sɪz/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1124,
        "en": "Mix up",
        "vi": "Nhầm lẫn (người/vật này với người/vật kia)",
        "ipa": "/mɪks ʌp/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1125,
        "en": "Deal with",
        "vi": "Giải quyết, đối phó",
        "ipa": "/diːl wɪð/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1126,
        "en": "Bear with",
        "vi": "Kiên nhẫn với ai/cái gì",
        "ipa": "/beə wɪð/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1127,
        "en": "Do without",
        "vi": "Xoay xở mà không có cái gì",
        "ipa": "/duː wɪˈðaʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1128,
        "en": "Back to the drawing board",
        "vi": "Bắt đầu làm lại từ đầu (vì thất bại)",
        "ipa": "/bæk tuː ðə ˈdrɔː.ɪŋ bɔːd/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1129,
        "en": "Dawn on",
        "vi": "Chợt nhận ra điều gì",
        "ipa": "/dɔːn ɒn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1130,
        "en": "Detrimental",
        "vi": "Có hại, bất lợi",
        "ipa": "/ˌdet.rɪˈmen.təl/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1131,
        "en": "Metropolis",
        "vi": "Đô thị lớn, trung tâm",
        "ipa": "/məˈtrɒp.əl.ɪs/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1132,
        "en": "Delinquency",
        "vi": "Sự phạm pháp (thường chỉ người trẻ)",
        "ipa": "/dɪˈlɪŋ.kwən.si/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1133,
        "en": "Come round",
        "vi": "Tỉnh lại, thay đổi ý kiến (nhượng bộ)",
        "ipa": "/kʌm raʊnd/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1134,
        "en": "Virtual reality (VR)",
        "vi": "Thực tế ảo",
        "ipa": "/ˌvɜː.tʃu.əl riˈæl.ə.ti/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1135,
        "en": "Neurotic",
        "vi": "Suy nhược thần kinh, ám ảnh",
        "ipa": "/njʊəˈrɒt.ɪk/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1136,
        "en": "The elephant in the room",
        "vi": "Vấn đề nhức nhối ai cũng biết nhưng lảng tránh",
        "ipa": "/ði ˈel.ɪ.fənt ɪn ðə ruːm/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1137,
        "en": "Implement",
        "vi": "Tiến hành, thực thi (kế hoạch)",
        "ipa": "/ˈɪm.plɪ.ment/",
        "pos": "(v)",
        "ex": ""
    },
    {
        "num": 1138,
        "en": "Make off",
        "vi": "Bỏ trốn (thường đi kèm với đồ ăn cắp)",
        "ipa": "/meɪk ɒf/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1139,
        "en": "Mutual",
        "vi": "Lẫn nhau, chung (lợi ích, tôn trọng)",
        "ipa": "/ˈmjuː.tʃu.əl/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1140,
        "en": "Afforestation",
        "vi": "Sự trồng cây gây rừng",
        "ipa": "/əˌfɒr.ɪˈsteɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1141,
        "en": "Call off",
        "vi": "Hủy bỏ (= cancel)",
        "ipa": "/kɔːl ɒf/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1142,
        "en": "Antique",
        "vi": "Đồ cổ / Cổ xưa",
        "ipa": "/ænˈtiːk/",
        "pos": "(n/adj)",
        "ex": ""
    },
    {
        "num": 1143,
        "en": "Depletion",
        "vi": "Sự suy kiệt (tài nguyên)",
        "ipa": "/dɪˈpliː.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1144,
        "en": "The best of both worlds",
        "vi": "Vẹn cả đôi đường",
        "ipa": "/ðə best əv bəʊθ wɜːldz/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1145,
        "en": "Blow up",
        "vi": "Nổ tung, tức giận",
        "ipa": "/bləʊ ʌp/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1146,
        "en": "Endangered",
        "vi": "Bị đe dọa tuyệt chủng",
        "ipa": "/ɪnˈdeɪn.dʒəd/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1147,
        "en": "Fundraiser",
        "vi": "Sự kiện gây quỹ / Người gây quỹ",
        "ipa": "/ˈfʌndˌreɪ.zə/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1148,
        "en": "Globetrotter",
        "vi": "Người du lịch khắp thế giới",
        "ipa": "/ˈɡləʊbˌtrɒt.ə/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1149,
        "en": "Sustainability",
        "vi": "Sự bền vững",
        "ipa": "/səˌsteɪ.nəˈbɪl.ə.ti/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1150,
        "en": "Restoration",
        "vi": "Sự trùng tu, phục hồi",
        "ipa": "/ˌres.tərˈeɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1151,
        "en": "Solidarity",
        "vi": "Tình đoàn kết",
        "ipa": "/ˌsɒl.ɪˈdær.ə.ti/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1152,
        "en": "Get across",
        "vi": "Truyền đạt được ý tưởng cho người khác hiểu",
        "ipa": "/ɡet əˈkrɒs/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1153,
        "en": "Biodegradable",
        "vi": "Có thể phân hủy sinh học",
        "ipa": "/ˌbaɪ.əʊ.dɪˈɡreɪ.də.bəl/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1154,
        "en": "Density",
        "vi": "Mật độ (dân số)",
        "ipa": "/ˈden.sɪ.ti/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1155,
        "en": "Go down",
        "vi": "Giảm xuống (giá cả, nhiệt độ)",
        "ipa": "/ɡəʊ daʊn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1156,
        "en": "Introvert",
        "vi": "Người hướng nội",
        "ipa": "/ˈɪn.trə.vɜːt/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1157,
        "en": "Bear out",
        "vi": "Xác nhận, chứng thực (lời nói, sự thật)",
        "ipa": "/beər aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1158,
        "en": "Do up",
        "vi": "Trang trí lại, sửa chữa, cài/thắt (áo, giày)",
        "ipa": "/duː ʌp/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1159,
        "en": "Maternal / Paternal",
        "vi": "Thuộc họ ngoại / Thuộc họ nội",
        "ipa": "/məˈtɜː.nəl/ - /pəˈtɜː.nəl/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1160,
        "en": "Night owl",
        "vi": "Cú đêm (người hay thức khuya)",
        "ipa": "/naɪt aʊl/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1161,
        "en": "See eye to eye",
        "vi": "Hoàn toàn đồng ý với ai",
        "ipa": "/siː aɪ tuː aɪ/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1162,
        "en": "Set up",
        "vi": "Thành lập, thiết lập (= establish)",
        "ipa": "/set ʌp/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1163,
        "en": "Pass out",
        "vi": "Ngất xỉu",
        "ipa": "/pɑːs aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1164,
        "en": "Clickbait",
        "vi": "Mồi nhấp chuột (câu view)",
        "ipa": "/ˈklɪk.beɪt/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1165,
        "en": "Mitigation",
        "vi": "Sự giảm nhẹ (hậu quả, thiên tai)",
        "ipa": "/ˌmɪt.ɪˈɡeɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1166,
        "en": "Now and then / Now and again",
        "vi": "Thỉnh thoảng (= sometimes)",
        "ipa": "/naʊ ənd ðen/ - /əˈɡen/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1167,
        "en": "Break off",
        "vi": "Cắt đứt (quan hệ), đột ngột ngừng nói/làm gì",
        "ipa": "/breɪk ɒf/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1168,
        "en": "Burn out",
        "vi": "Kiệt sức (vì làm việc quá nhiều)",
        "ipa": "/bɜːn aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1169,
        "en": "Dysfunctional",
        "vi": "Bất thường, rối loạn (gia đình)",
        "ipa": "/dɪsˈfʌŋk.ʃən.əl/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1170,
        "en": "Plagiarism",
        "vi": "Đạo văn",
        "ipa": "/ˈpleɪ.dʒər.ɪ.zəm/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1171,
        "en": "Trend",
        "vi": "Xu hướng",
        "ipa": "/trend/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1172,
        "en": "Pay off",
        "vi": "Trả hết nợ, đền đáp xứng đáng",
        "ipa": "/peɪ ɒf/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1173,
        "en": "Recession",
        "vi": "Tình trạng suy thoái kinh tế",
        "ipa": "/rɪˈseʃ.ən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1174,
        "en": "Cosmopolitan",
        "vi": "Mang tầm quốc tế, đa sắc tộc",
        "ipa": "/ˌkɒz.məˈpɒl.ɪ.tən/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1175,
        "en": "Exacerbate",
        "vi": "Làm trầm trọng thêm",
        "ipa": "/ɪɡˈzæs.ə.beɪt/",
        "pos": "(v)",
        "ex": ""
    },
    {
        "num": 1176,
        "en": "Therapist",
        "vi": "Bác sĩ trị liệu",
        "ipa": "/ˈθer.ə.pɪst/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1177,
        "en": "Empirical",
        "vi": "Dựa trên kinh nghiệm, thực nghiệm",
        "ipa": "/ɪmˈpɪr.ɪ.kəl/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1178,
        "en": "Go down with",
        "vi": "Bị ốm, mắc bệnh (= Come down with)",
        "ipa": "/ɡəʊ daʊn wɪð/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1179,
        "en": "Off the top of one's head",
        "vi": "Bật ra trong đầu (nói ngay không cần nghĩ)",
        "ipa": "/ɒf ðə tɒp əv wʌnz hed/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1180,
        "en": "Know the ropes",
        "vi": "Nắm vững tình hình, biết rõ cách làm việc",
        "ipa": "/nəʊ ðə rəʊps/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1181,
        "en": "Diagnosis",
        "vi": "Sự chẩn đoán (bệnh)",
        "ipa": "/ˌdaɪ.əɡˈnəʊ.sɪs/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1182,
        "en": "Come up with",
        "vi": "Nảy ra, nghĩ ra (ý tưởng, giải pháp)",
        "ipa": "/kʌm ʌp wɪð/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1183,
        "en": "Make out",
        "vi": "Nhìn ra, nghe ra, hiểu ra (khó khăn)",
        "ipa": "/meɪk aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1184,
        "en": "Longevity",
        "vi": "Tuổi thọ",
        "ipa": "/lɒnˈdʒev.ə.ti/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1185,
        "en": "Binge-watch",
        "vi": "Cày phim (xem liên tục)",
        "ipa": "/ˈbɪndʒ.wɒtʃ/",
        "pos": "(v)",
        "ex": ""
    },
    {
        "num": 1186,
        "en": "Get on",
        "vi": "Tiến bộ, lên xe (bus, tàu), hòa thuận",
        "ipa": "/ɡet ɒn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1187,
        "en": "Enlightening",
        "vi": "Làm sáng tỏ, khai sáng",
        "ipa": "/ɪnˈlaɪ.tən.ɪŋ/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1188,
        "en": "Deprived",
        "vi": "Thiếu thốn, bần cùng (khu vực)",
        "ipa": "/dɪˈpraɪvd/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1189,
        "en": "Poaching",
        "vi": "Nạn săn trộm",
        "ipa": "/ˈpəʊ.tʃɪŋ/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1190,
        "en": "Spill the beans",
        "vi": "Tiết lộ bí mật",
        "ipa": "/spɪl ðə biːnz/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1191,
        "en": "Colleague",
        "vi": "Đồng nghiệp",
        "ipa": "/ˈkɒl.iːɡ/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1192,
        "en": "Indigenous",
        "vi": "Bản địa, bản xứ",
        "ipa": "/ɪnˈdɪdʒ.ɪ.nəs/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1193,
        "en": "Complex",
        "vi": "Sự mặc cảm",
        "ipa": "/ˈkɒm.pleks/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1194,
        "en": "Industrious",
        "vi": "Chăm chỉ (= Hard-working)",
        "ipa": "/ɪnˈdʌs.tri.əs/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1195,
        "en": "Cyberattack",
        "vi": "Cuộc tấn công mạng",
        "ipa": "/ˈsaɪ.bər.əˌtæk/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1196,
        "en": "Insomnia",
        "vi": "Chứng mất ngủ",
        "ipa": "/ɪnˈsɒm.ni.ə/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1197,
        "en": "Campaign",
        "vi": "Chiến dịch",
        "ipa": "/kæmˈpeɪn/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1198,
        "en": "Devastating",
        "vi": "Tàn phá, hủy hoại",
        "ipa": "/ˈdev.ə.steɪ.tɪŋ/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1199,
        "en": "Miss the boat",
        "vi": "Bỏ lỡ cơ hội",
        "ipa": "/mɪs ðə bəʊt/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1200,
        "en": "Look into",
        "vi": "Điều tra, xem xét kĩ (= investigate)",
        "ipa": "/lʊk ˈɪn.tuː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1201,
        "en": "Magnificent",
        "vi": "Tráng lệ, nguy nga",
        "ipa": "/mæɡˈnɪf.ɪ.sənt/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1202,
        "en": "Aging",
        "vi": "Sự già hóa (dân số)",
        "ipa": "/ˈeɪ.dʒɪŋ/",
        "pos": "(n/adj)",
        "ex": ""
    },
    {
        "num": 1203,
        "en": "Subordinate",
        "vi": "Cấp dưới, nhân viên dưới quyền",
        "ipa": "/səˈbɔː.dɪ.nət/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1204,
        "en": "Inequality",
        "vi": "Sự bất bình đẳng",
        "ipa": "/ˌɪn.ɪˈkwɒl.ə.ti/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1205,
        "en": "Ethnocentrism",
        "vi": "Chủ nghĩa vị chủng",
        "ipa": "/ˌeθ.nəʊˈsen.trɪ.zəm/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1206,
        "en": "Hospitality",
        "vi": "Lòng hiếu khách",
        "ipa": "/ˌhɒs.pɪˈtæl.ə.ti/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1207,
        "en": "Go out",
        "vi": "Mất điện, đi chơi",
        "ipa": "/ɡəʊ aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1208,
        "en": "Actions speak louder than words",
        "vi": "Hành động có ý nghĩa hơn lời nói",
        "ipa": "/ˈæk.ʃənz spiːk ˈlaʊ.də ðæn wɜːdz/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1209,
        "en": "Conservationist",
        "vi": "Nhà bảo tồn thiên nhiên",
        "ipa": "/ˌkɒn.səˈveɪ.ʃən.ɪst/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1210,
        "en": "Give someone the benefit of the doubt",
        "vi": "Chọn tin tưởng ai đó dẫu còn nhiều nghi ngờ",
        "ipa": "/ɡɪv ðə ˈben.ɪ.fɪt əv ðə daʊt/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1211,
        "en": "Drop out (of)",
        "vi": "Bỏ học giữa chừng",
        "ipa": "/drɒp aʊt əv/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1212,
        "en": "Chronological",
        "vi": "Theo trình tự thời gian",
        "ipa": "/ˌkrɒn.əˈlɒdʒ.ɪ.kəl/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1213,
        "en": "Look after",
        "vi": "Chăm sóc (= take care of)",
        "ipa": "/lʊk ˈɑːf.tə/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1214,
        "en": "Fluctuate",
        "vi": "Dao động, biến động (giá cả)",
        "ipa": "/ˈflʌk.tʃu.eɪt/",
        "pos": "(v)",
        "ex": ""
    },
    {
        "num": 1215,
        "en": "Scholarship / Bursary",
        "vi": "Học bổng / Trợ cấp học tập",
        "ipa": "/ˈskɒl.ə.ʃɪp/ - /ˈbɜː.sər.i/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1216,
        "en": "Taboo",
        "vi": "Điều cấm kỵ",
        "ipa": "/təˈbuː/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1217,
        "en": "Face up to",
        "vi": "Đối mặt với (khó khăn, sự thật)",
        "ipa": "/feɪs ʌp tuː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1218,
        "en": "Empathize",
        "vi": "Cảm thông (đặt mình vào vị trí)",
        "ipa": "/ˈem.pə.θaɪz/",
        "pos": "(v)",
        "ex": ""
    },
    {
        "num": 1219,
        "en": "Cover up",
        "vi": "Che giấu sự thật/tội lỗi",
        "ipa": "/ˈkʌv.ər ʌp/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1220,
        "en": "Routine",
        "vi": "Thói quen hàng ngày",
        "ipa": "/ruːˈtiːn/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1221,
        "en": "Drop a brick",
        "vi": "Lỡ lời, nói điều làm người khác xấu hổ",
        "ipa": "/drɒp ə brɪk/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1222,
        "en": "Keep on",
        "vi": "Tiếp tục làm gì",
        "ipa": "/kiːp ɒn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1223,
        "en": "Give in",
        "vi": "Đầu hàng, nhượng bộ",
        "ipa": "/ɡɪv ɪn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1224,
        "en": "Come down with",
        "vi": "Bị mắc bệnh (thường là bệnh nhẹ như cảm)",
        "ipa": "/kʌm daʊn wɪð/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1225,
        "en": "Rehearsal",
        "vi": "Sự diễn tập",
        "ipa": "/rɪˈhɜː.səl/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1226,
        "en": "Outbreak",
        "vi": "Sự bùng phát (dịch bệnh)",
        "ipa": "/ˈaʊt.breɪk/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1227,
        "en": "Sensationalism",
        "vi": "Xu hướng giật gân, câu view",
        "ipa": "/senˈseɪ.ʃən.əl.ɪ.zəm/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1228,
        "en": "Gross Domestic Product",
        "vi": "Tổng sản phẩm quốc nội (GDP)",
        "ipa": "/ɡrəʊs dəˌmes.tɪk ˈprɒd.ʌkt/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1229,
        "en": "Donate",
        "vi": "Quyên góp, hiến tặng",
        "ipa": "/dəʊˈneɪt/",
        "pos": "(v)",
        "ex": ""
    },
    {
        "num": 1230,
        "en": "Come up against",
        "vi": "Đối mặt với (khó khăn, thử thách)",
        "ipa": "/kʌm ʌp əˈɡenst/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1231,
        "en": "Revitalize",
        "vi": "Tiếp thêm sinh lực, làm sống lại",
        "ipa": "/ˌriːˈvaɪ.təl.aɪz/",
        "pos": "(v)",
        "ex": ""
    },
    {
        "num": 1232,
        "en": "Come about",
        "vi": "Xảy ra (= happen)",
        "ipa": "/kʌm əˈbaʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1233,
        "en": "Patriarchal",
        "vi": "Thuộc chế độ phụ quyền, gia trưởng",
        "ipa": "/ˌpeɪ.triˈɑː.kəl/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1234,
        "en": "Unspoilt",
        "vi": "Hoang sơ, chưa bị phá hủy",
        "ipa": "/ʌnˈspɔɪlt/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1235,
        "en": "Preventative",
        "vi": "Mang tính phòng ngừa",
        "ipa": "/prɪˈven.tə.tɪv/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1236,
        "en": "Gridlock",
        "vi": "Sự kẹt xe cứng ngắc",
        "ipa": "/ˈɡrɪd.lɒk/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1237,
        "en": "Out of order",
        "vi": "Hỏng hóc (thường dùng cho máy móc)",
        "ipa": "/aʊt əv ˈɔː.də/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1238,
        "en": "No brainer",
        "vi": "Quyết định dễ dàng, không cần suy nghĩ",
        "ipa": "/nəʊ ˈbreɪ.nə/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1239,
        "en": "Breakthrough",
        "vi": "Bước đột phá",
        "ipa": "/ˈbreɪk.θruː/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1240,
        "en": "Aptitude",
        "vi": "Năng khiếu, năng lực bẩm sinh",
        "ipa": "/ˈæp.tɪ.tʃuːd/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1241,
        "en": "Call up",
        "vi": "Gọi điện thoại, gọi nhập ngũ, gợi nhớ",
        "ipa": "/kɔːl ʌp/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1242,
        "en": "Care for",
        "vi": "Quan tâm, chăm sóc, thích",
        "ipa": "/keə fɔː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1243,
        "en": "Take a rain check",
        "vi": "Hẹn dịp khác nhé (lời từ chối lịch sự)",
        "ipa": "/teɪk ə reɪn tʃek/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1244,
        "en": "Commuter",
        "vi": "Người đi lại thường xuyên (đi làm)",
        "ipa": "/kəˈmjuː.tə/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1245,
        "en": "Archaeology",
        "vi": "Khảo cổ học",
        "ipa": "/ˌɑː.kiˈɒl.ə.dʒi/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1246,
        "en": "Migration",
        "vi": "Sự di cư",
        "ipa": "/maɪˈɡreɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1247,
        "en": "Bite off more than you can chew",
        "vi": "Tham thực cực thân, nhận quá nhiều việc",
        "ipa": "/baɪt ɒf mɔː ðæn juː kæn tʃuː/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1248,
        "en": "Hit the books",
        "vi": "Cắm đầu vào học, học gạo",
        "ipa": "/hɪt ðə bʊks/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1249,
        "en": "Rejuvenate",
        "vi": "Làm trẻ lại, sảng khoái lại",
        "ipa": "/rɪˈdʒuː.vən.eɪt/",
        "pos": "(v)",
        "ex": ""
    },
    {
        "num": 1250,
        "en": "Let the cat out of the bag",
        "vi": "Lỡ miệng tiết lộ bí mật",
        "ipa": "/let ðə kæt aʊt əv ðə bæɡ/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1251,
        "en": "Promotion",
        "vi": "Sự thăng chức",
        "ipa": "/prəˈməʊ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1252,
        "en": "Pull through",
        "vi": "Qua khỏi cơn bệnh nặng, phục hồi",
        "ipa": "/pʊl θruː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1253,
        "en": "Go along with",
        "vi": "Đồng ý với ai/ý kiến nào đó",
        "ipa": "/ɡəʊ əˈlɒŋ wɪð/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1254,
        "en": "Sick and tired of",
        "vi": "Vô cùng chán ngấy việc gì",
        "ipa": "/sɪk ənd ˈtaɪəd əv/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1255,
        "en": "Multi-national",
        "vi": "Đa quốc gia",
        "ipa": "/ˌmʌl.tiˈnæʃ.ən.əl/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1256,
        "en": "Conformity",
        "vi": "Sự tuân thủ (chuẩn mực xã hội)",
        "ipa": "/kənˈfɔː.mə.ti/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1257,
        "en": "Monotonous",
        "vi": "Đơn điệu, nhàm chán",
        "ipa": "/məˈnɒt.ən.əs/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1258,
        "en": "Stand up for",
        "vi": "Bảo vệ, bênh vực (bản thân, người khác)",
        "ipa": "/stænd ʌp fɔː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1259,
        "en": "Revenue",
        "vi": "Doanh thu",
        "ipa": "/ˈrev.ən.juː/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1260,
        "en": "Get down to",
        "vi": "Bắt đầu nghiêm túc làm việc gì",
        "ipa": "/ɡet daʊn tuː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1261,
        "en": "Sculpture",
        "vi": "Nghệ thuật điêu khắc, bức tượng",
        "ipa": "/ˈskʌlp.tʃə/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1262,
        "en": "Interdependence",
        "vi": "Sự phụ thuộc lẫn nhau",
        "ipa": "/ˌɪn.tə.dɪˈpen.dəns/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1263,
        "en": "Go off",
        "vi": "Nổ (bom), reo (chuông), thiu (thức ăn)",
        "ipa": "/ɡəʊ ɒf/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1264,
        "en": "Put through",
        "vi": "Nối máy điện thoại",
        "ipa": "/pʊt θruː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1265,
        "en": "Charitable",
        "vi": "Mang tính từ thiện",
        "ipa": "/ˈtʃær.ɪ.tə.bəl/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1266,
        "en": "Rehabilitate",
        "vi": "Cải tạo, phục hồi nhân phẩm",
        "ipa": "/ˌriː.həˈbɪl.ɪ.teɪt/",
        "pos": "(v)",
        "ex": ""
    },
    {
        "num": 1267,
        "en": "Norm",
        "vi": "Chuẩn mực (văn hóa, xã hội)",
        "ipa": "/nɔːm/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1268,
        "en": "State-of-the-art",
        "vi": "Hiện đại nhất, kỹ thuật mới nhất",
        "ipa": "/ˌsteɪt.əv.ðiːˈɑːt/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1269,
        "en": "Jump on the bandwagon",
        "vi": "Chạy theo phong trào, hùa theo số đông",
        "ipa": "/dʒʌmp ɒn ðə ˈbændˌwæɡ.ən/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1270,
        "en": "Breadwinner",
        "vi": "Trụ cột gia đình",
        "ipa": "/ˈbredˌwɪn.ə/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1271,
        "en": "Active",
        "vi": "Năng động",
        "ipa": "/ˈæk.tɪv/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1272,
        "en": "A hot potato",
        "vi": "Vấn đề nan giải, nóng hổi",
        "ipa": "/ə hɒt pəˈteɪ.təʊ/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1273,
        "en": "Layover",
        "vi": "Thời gian chờ nối chuyến bay",
        "ipa": "/ˈleɪˌəʊ.və/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1274,
        "en": "Habitat",
        "vi": "Môi trường sống",
        "ipa": "/ˈhæb.ɪ.tæt/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1275,
        "en": "Carry off",
        "vi": "Thành công (trong một việc khó khăn)",
        "ipa": "/ˈkær.i ɒf/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1276,
        "en": "Turn away",
        "vi": "Từ chối không cho vào",
        "ipa": "/tɜːn əˈweɪ/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1277,
        "en": "Every cloud has a silver lining",
        "vi": "Sau cơn mưa trời lại sáng",
        "ipa": "/ˈev.ri klaʊd hæz ə ˈsɪl.və ˈlaɪ.nɪŋ/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1278,
        "en": "Automation",
        "vi": "Sự tự động hóa",
        "ipa": "/ˌɔː.təˈmeɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1279,
        "en": "Renovation",
        "vi": "Sự trùng tu, đổi mới",
        "ipa": "/ˌren.əˈveɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1280,
        "en": "Nuptial",
        "vi": "Thuộc về hôn nhân, lễ cưới",
        "ipa": "/ˈnʌp.ʃəl/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1281,
        "en": "Telescope",
        "vi": "Kính thiên văn",
        "ipa": "/ˈtel.ɪ.skəʊp/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1282,
        "en": "Generation gap",
        "vi": "Khoảng cách thế hệ",
        "ipa": "/ˌdʒen.əˈreɪ.ʃən ɡæp/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1283,
        "en": "Picturesque",
        "vi": "Đẹp như tranh vẽ",
        "ipa": "/ˌpɪk.tʃərˈesk/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1284,
        "en": "In vain",
        "vi": "Vô ích, không thành công",
        "ipa": "/ɪn veɪn/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1285,
        "en": "Compromise",
        "vi": "Thỏa hiệp",
        "ipa": "/ˈkɒm.prə.maɪz/",
        "pos": "(v/n)",
        "ex": ""
    },
    {
        "num": 1286,
        "en": "Database",
        "vi": "Cơ sở dữ liệu",
        "ipa": "/ˈdeɪ.tə.beɪs/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1287,
        "en": "Productivity",
        "vi": "Năng suất làm việc",
        "ipa": "/ˌprɒd.ʌkˈtɪv.ə.ti/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1288,
        "en": "Urban sprawl",
        "vi": "Sự mở rộng đô thị (mất kiểm soát)",
        "ipa": "/ˈɜː.bən sprɔːl/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1289,
        "en": "Think over",
        "vi": "Suy nghĩ kỹ càng trước khi quyết định",
        "ipa": "/θɪŋk ˈəʊ.və/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1290,
        "en": "Inseparable",
        "vi": "Không thể tách rời (rất thân)",
        "ipa": "/ɪnˈsep.ər.ə.bəl/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1291,
        "en": "Prosperous",
        "vi": "Phồn vinh, thịnh vượng",
        "ipa": "/ˈprɒs.pər.əs/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1292,
        "en": "Appreciate",
        "vi": "Thưởng thức, trân trọng",
        "ipa": "/əˈpriː.ʃi.eɪt/",
        "pos": "(v)",
        "ex": ""
    },
    {
        "num": 1293,
        "en": "Taste of your own medicine",
        "vi": "Gậy ông đập lưng ông",
        "ipa": "/teɪst əv jɔːr əʊn ˈmed.ɪ.sən/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1294,
        "en": "Cry over spilt milk",
        "vi": "Tiếc nuối chuyện đã qua, ván đã đóng thuyền",
        "ipa": "/kraɪ ˈəʊ.və spɪlt mɪlk/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1295,
        "en": "Read between the lines",
        "vi": "Hiểu ý ngầm, ẩn ý đằng sau",
        "ipa": "/riːd bɪˈtwiːn ðə laɪnz/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1296,
        "en": "Procrastinate",
        "vi": "Trì hoãn, chần chừ",
        "ipa": "/prəˈkræs.tɪ.neɪt/",
        "pos": "(v)",
        "ex": ""
    },
    {
        "num": 1297,
        "en": "Subsidize",
        "vi": "Trợ cấp, bao cấp",
        "ipa": "/ˈsʌb.sɪ.daɪz/",
        "pos": "(v)",
        "ex": ""
    },
    {
        "num": 1298,
        "en": "Ring a bell",
        "vi": "Nghe quen quen, gợi nhớ đến điều gì",
        "ipa": "/rɪŋ ə bel/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1299,
        "en": "Let bygones be bygones",
        "vi": "Chuyện cũ bỏ qua",
        "ipa": "/let ˈbaɪ.ɡɒnz bi ˈbaɪ.ɡɒnz/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1300,
        "en": "Cut out",
        "vi": "Cắt bỏ, chết máy, rất phù hợp",
        "ipa": "/kʌt aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1301,
        "en": "Break into",
        "vi": "Đột nhập vào",
        "ipa": "/breɪk ˈɪn.tuː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1302,
        "en": "Off the beaten track",
        "vi": "Nơi vắng vẻ, ít người biết đến",
        "ipa": "/ɒf ðə ˌbiː.tən ˈtræk/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1303,
        "en": "Crop up",
        "vi": "Xảy ra bất ngờ (= Come up)",
        "ipa": "/krɒp ʌp/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1304,
        "en": "Irreversible",
        "vi": "Không thể đảo ngược",
        "ipa": "/ˌɪr.ɪˈvɜː.sə.bəl/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1305,
        "en": "Genetic",
        "vi": "Thuộc về di truyền",
        "ipa": "/dʒəˈnet.ɪk/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1306,
        "en": "Back out",
        "vi": "Nuốt lời, rút lại lời hứa",
        "ipa": "/bæk aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1307,
        "en": "Choreography",
        "vi": "Nghệ thuật biên đạo múa",
        "ipa": "/ˌkɒr.iˈɒɡ.rə.fi/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1308,
        "en": "Autonomous",
        "vi": "Tự chủ, tự lập",
        "ipa": "/ɔːˈtɒn.ə.məs/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1309,
        "en": "Break away",
        "vi": "Trốn thoát, rời bỏ (nhóm, đảng phái)",
        "ipa": "/breɪk əˈweɪ/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1310,
        "en": "Evoke",
        "vi": "Gợi lên (cảm xúc, ký ức)",
        "ipa": "/ɪˈvəʊk/",
        "pos": "(v)",
        "ex": ""
    },
    {
        "num": 1311,
        "en": "Captivity",
        "vi": "Tình trạng bị giam cầm (động vật)",
        "ipa": "/kæpˈtɪv.ə.ti/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1312,
        "en": "Sympathy",
        "vi": "Sự thông cảm",
        "ipa": "/ˈsɪm.pə.θi/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1313,
        "en": "Call for",
        "vi": "Đòi hỏi, yêu cầu",
        "ipa": "/kɔːl fɔː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1314,
        "en": "Flora and fauna",
        "vi": "Hệ thực vật và động vật",
        "ipa": "/ˈflɔː.rə ənd ˈfɔː.nə/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1315,
        "en": "Fall behind",
        "vi": "Tụt lại phía sau",
        "ipa": "/fɔːl bɪˈhaɪnd/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1316,
        "en": "Addictive",
        "vi": "Gây nghiện (mạng xã hội)",
        "ipa": "/əˈdɪk.tɪv/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1317,
        "en": "Skyscraper",
        "vi": "Tòa nhà chọc trời",
        "ipa": "/ˈskaɪˌskreɪ.pə/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1318,
        "en": "Draw a blank",
        "vi": "Chẳng nhớ ra được gì, đầu óc trống rỗng",
        "ipa": "/drɔː ə blæŋk/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1319,
        "en": "Altruistic",
        "vi": "Vị tha, không ích kỷ",
        "ipa": "/ˌæl.truˈɪs.tɪk/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1320,
        "en": "Wear off",
        "vi": "Mất dần tác dụng (thuốc, cảm giác)",
        "ipa": "/weər ɒf/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1321,
        "en": "Prominent",
        "vi": "Nổi bật, xuất chúng",
        "ipa": "/ˈprɒm.ɪ.nənt/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1322,
        "en": "Ignorance is bliss",
        "vi": "Không biết thì không đau lòng",
        "ipa": "/ˈɪɡ.nər.əns ɪz blɪs/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1323,
        "en": "Ask for",
        "vi": "Yêu cầu, xin",
        "ipa": "/ɑːsk fɔː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1324,
        "en": "Grassroots",
        "vi": "Từ cơ sở, từ quần chúng nhân dân",
        "ipa": "/ˈɡrɑːs.ruːts/",
        "pos": "(adj/n)",
        "ex": ""
    },
    {
        "num": 1325,
        "en": "Tech-savvy",
        "vi": "Am hiểu công nghệ",
        "ipa": "/tek ˈsæv.i/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1326,
        "en": "Look through",
        "vi": "Đọc lướt qua",
        "ipa": "/lʊk θruː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1327,
        "en": "Stand by",
        "vi": "Sẵn sàng hành động, ủng hộ/bên cạnh ai",
        "ipa": "/stænd baɪ/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1328,
        "en": "High-rise",
        "vi": "Tòa nhà cao tầng",
        "ipa": "/ˈhaɪ.raɪz/",
        "pos": "(n/adj)",
        "ex": ""
    },
    {
        "num": 1329,
        "en": "Labor-saving",
        "vi": "Tiết kiệm sức lao động",
        "ipa": "/ˈleɪ.bəˌseɪ.vɪŋ/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1330,
        "en": "Go the extra mile",
        "vi": "Nỗ lực hết mình, làm nhiều hơn mức yêu cầu",
        "ipa": "/ɡəʊ ði ˈek.strə maɪl/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1331,
        "en": "By leaps and bounds",
        "vi": "Tiến bộ rất nhanh, vượt bậc",
        "ipa": "/baɪ liːps ənd baʊndz/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1332,
        "en": "Resign",
        "vi": "Từ chức",
        "ipa": "/rɪˈzaɪn/",
        "pos": "(v)",
        "ex": ""
    },
    {
        "num": 1333,
        "en": "Nurture",
        "vi": "Nuôi nấng, bồi dưỡng",
        "ipa": "/ˈnɜː.tʃə/",
        "pos": "(v)",
        "ex": ""
    },
    {
        "num": 1334,
        "en": "Tell off",
        "vi": "La mắng, rầy la",
        "ipa": "/tel ɒf/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1335,
        "en": "Offender",
        "vi": "Người phạm tội",
        "ipa": "/əˈfen.də/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1336,
        "en": "Stand out",
        "vi": "Nổi bật, dễ nhận thấy",
        "ipa": "/stænd aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1337,
        "en": "Hold on",
        "vi": "Giữ máy (điện thoại), chờ đợi",
        "ipa": "/həʊld ɒn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1338,
        "en": "Keep one's fingers crossed",
        "vi": "Mong điều tốt đẹp sẽ đến (cầu may)",
        "ipa": "/kiːp wʌnz ˈfɪŋ.ɡəz krɒst/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1339,
        "en": "Artifact",
        "vi": "Cổ vật, hiện vật nhân tạo",
        "ipa": "/ˈɑː.tɪ.fækt/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1340,
        "en": "Blow over",
        "vi": "Qua đi, bị lãng quên (bê bối, tin đồn, bão)",
        "ipa": "/bləʊ ˈəʊ.və/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1341,
        "en": "Look out",
        "vi": "Cẩn thận, coi chừng (= Watch out)",
        "ipa": "/lʊk aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1342,
        "en": "Optimistic",
        "vi": "Lạc quan",
        "ipa": "/ˌɒp.tɪˈmɪs.tɪk/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1343,
        "en": "Caught between two stools",
        "vi": "Tiến thoái lưỡng nan (do dự giữa 2 lựa chọn)",
        "ipa": "/kɔːt bɪˈtwiːn tuː stuːlz/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1344,
        "en": "It takes two to tango",
        "vi": "Có lửa mới có khói (cả 2 bên đều có lỗi)",
        "ipa": "/ɪt teɪks tuː tə ˈtæŋ.ɡəʊ/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1345,
        "en": "Show up",
        "vi": "Xuất hiện, đến (= turn up)",
        "ipa": "/ʃəʊ ʌp/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1346,
        "en": "Best thing since sliced bread",
        "vi": "Một ý tưởng/phát minh tuyệt vời",
        "ipa": "/best θɪŋ sɪns slaɪst bred/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1347,
        "en": "Dynasty",
        "vi": "Triều đại",
        "ipa": "/ˈdɪn.ə.sti/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1348,
        "en": "Bribery",
        "vi": "Sự hối lộ",
        "ipa": "/ˈbraɪ.bər.i/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1349,
        "en": "Alienation",
        "vi": "Sự xa lánh, ghẻ lạnh",
        "ipa": "/ˌeɪ.li.əˈneɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1350,
        "en": "Catch out",
        "vi": "Bắt quả tang, lừa ai mắc bẫy",
        "ipa": "/kætʃ aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1351,
        "en": "Contagious",
        "vi": "Dễ lây lan (bệnh truyền nhiễm)",
        "ipa": "/kənˈteɪ.dʒəs/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1352,
        "en": "Immigration",
        "vi": "Sự nhập cư",
        "ipa": "/ˌɪm.ɪˈɡreɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1353,
        "en": "Pandemic",
        "vi": "Đại dịch toàn cầu",
        "ipa": "/pænˈdem.ɪk/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1354,
        "en": "Sanctuary",
        "vi": "Khu bảo tồn, nơi tôn nghiêm",
        "ipa": "/ˈsæŋk.tʃʊə.ri/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1355,
        "en": "Mutation",
        "vi": "Sự đột biến (gen)",
        "ipa": "/mjuːˈteɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1356,
        "en": "Sleep on it",
        "vi": "Cần thời gian suy nghĩ trước khi quyết định",
        "ipa": "/sliːp ɒn ɪt/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1357,
        "en": "Pass on",
        "vi": "Truyền lại, chuyển tiếp (thông điệp, bệnh)",
        "ipa": "/pɑːs ɒn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1358,
        "en": "Set off / out",
        "vi": "Khởi hành, bắt đầu một chuyến đi",
        "ipa": "/set ɒf/ - /aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1359,
        "en": "Take on",
        "vi": "Đảm nhận (công việc), tuyển dụng",
        "ipa": "/teɪk ɒn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1360,
        "en": "Headhunter",
        "vi": "Chuyên gia săn đầu người",
        "ipa": "/ˈhedˌhʌn.tə/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1361,
        "en": "Slum",
        "vi": "Khu ổ chuột",
        "ipa": "/slʌm/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1362,
        "en": "Pull someone's leg",
        "vi": "Trêu chọc, nói đùa với ai đó",
        "ipa": "/pʊl ˈsʌm.wʌnz leɡ/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1363,
        "en": "Go by",
        "vi": "(Thời gian) trôi qua",
        "ipa": "/ɡəʊ baɪ/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1364,
        "en": "Couch potato",
        "vi": "Người lười biếng, chỉ ngồi xem tivi",
        "ipa": "/ˈkaʊtʃ pəˌteɪ.təʊ/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1365,
        "en": "Superstition",
        "vi": "Sự mê tín dị đoan",
        "ipa": "/ˌsuː.pəˈstɪʃ.ən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1366,
        "en": "Bite the bullet",
        "vi": "Cắn răng chịu đựng (làm việc khó khăn)",
        "ipa": "/baɪt ðə ˈbʊl.ɪt/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1367,
        "en": "Make up for",
        "vi": "Đền bù, bù đắp cho",
        "ipa": "/meɪk ʌp fɔː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1368,
        "en": "Marginalize",
        "vi": "Yếu thế hóa, gạt ra lề xã hội",
        "ipa": "/ˈmɑː.dʒɪ.nəl.aɪz/",
        "pos": "(v)",
        "ex": ""
    },
    {
        "num": 1369,
        "en": "Rational",
        "vi": "Có lý trí, dựa trên lý trí",
        "ipa": "/ˈræʃ.ən.əl/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1370,
        "en": "Hit the sack / Hit the hay",
        "vi": "Đi ngủ",
        "ipa": "/hɪt ðə sæk/ - /heɪ/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1371,
        "en": "Bring up",
        "vi": "Nuôi dưỡng, đề cập tới (vấn đề)",
        "ipa": "/brɪŋ ʌp/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1372,
        "en": "Intangible",
        "vi": "Phi vật thể (di sản)",
        "ipa": "/ɪnˈtæn.dʒə.bəl/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1373,
        "en": "Redundant",
        "vi": "Bị sa thải (thừa nhân lực), dư thừa",
        "ipa": "/rɪˈdʌn.dənt/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1374,
        "en": "Evolve",
        "vi": "Tiến hóa",
        "ipa": "/ɪˈvɒlv/",
        "pos": "(v)",
        "ex": ""
    },
    {
        "num": 1375,
        "en": "Outsourcing",
        "vi": "Thuê ngoài (dịch vụ, nhân lực)",
        "ipa": "/ˈaʊtˌsɔː.sɪŋ/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1376,
        "en": "Anxiety",
        "vi": "Sự lo âu, chứng lo âu",
        "ipa": "/æŋˈzaɪ.ə.ti/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1377,
        "en": "Trauma",
        "vi": "Chấn thương (tâm lý), cú sốc",
        "ipa": "/ˈtrɔː.mə/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1378,
        "en": "Fill in / out",
        "vi": "Điền thông tin vào (đơn từ)",
        "ipa": "/fɪl ɪn/ - /aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1379,
        "en": "Manipulate",
        "vi": "Thao túng, điều khiển",
        "ipa": "/məˈnɪp.jə.leɪt/",
        "pos": "(v)",
        "ex": ""
    },
    {
        "num": 1380,
        "en": "Mortality",
        "vi": "Tỷ lệ tử vong",
        "ipa": "/mɔːˈtæl.ə.ti/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1381,
        "en": "Turn out",
        "vi": "Hóa ra là, xuất hiện (để tham gia sự kiện)",
        "ipa": "/tɜːn aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1382,
        "en": "Landmark",
        "vi": "Địa danh, cột mốc nổi bật",
        "ipa": "/ˈlænd.mɑːk/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1383,
        "en": "Cut to the chase",
        "vi": "Đi thẳng vào vấn đề chính",
        "ipa": "/kʌt tuː ðə tʃeɪs/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1384,
        "en": "Sponsor",
        "vi": "Tài trợ / Nhà tài trợ",
        "ipa": "/ˈspɒn.sə/",
        "pos": "(v/n)",
        "ex": ""
    },
    {
        "num": 1385,
        "en": "Fall for",
        "vi": "Yêu ai, bị lừa (tin vào trò đùa)",
        "ipa": "/fɔːl fɔː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1386,
        "en": "Mindset",
        "vi": "Tư duy, nếp nghĩ",
        "ipa": "/ˈmaɪnd.set/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1387,
        "en": "Cohabitation",
        "vi": "Sống thử, sống chung chưa kết hôn",
        "ipa": "/kəʊˌhæb.ɪˈteɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1388,
        "en": "Put out",
        "vi": "Dập tắt (lửa, thuốc lá)",
        "ipa": "/pʊt aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1389,
        "en": "Account for",
        "vi": "Chiếm (tỉ lệ), giải thích nguyên nhân",
        "ipa": "/əˈkaʊnt fɔː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1390,
        "en": "Symmetrical",
        "vi": "Đối xứng (kiến trúc)",
        "ipa": "/sɪˈmet.rɪ.kəl/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1391,
        "en": "Extracurricular",
        "vi": "Ngoại khóa (hoạt động)",
        "ipa": "/ˌek.strə.kəˈrɪk.jə.lə/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1392,
        "en": "Take it with a grain of salt",
        "vi": "Bán tín bán nghi, không tin hoàn toàn",
        "ipa": "/teɪk ɪt wɪð ə ɡreɪn əv sɒlt/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1393,
        "en": "Voluntary",
        "vi": "Tự nguyện",
        "ipa": "/ˈvɒl.ən.tər.i/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1394,
        "en": "Diversity",
        "vi": "Sự đa dạng",
        "ipa": "/daɪˈvɜː.sə.ti/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1395,
        "en": "Make ends meet",
        "vi": "Xoay xở đủ sống, kiếm đủ tiền để sống",
        "ipa": "/meɪk endz miːt/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1396,
        "en": "Out of the blue",
        "vi": "Bất thình lình, hoàn toàn bất ngờ",
        "ipa": "/aʊt əv ðə bluː/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1397,
        "en": "Ecotourism",
        "vi": "Du lịch sinh thái",
        "ipa": "/ˈiː.kəʊˌtʊə.rɪ.zəm/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1398,
        "en": "Live up to",
        "vi": "Đáp ứng được kỳ vọng, xứng đáng với",
        "ipa": "/lɪv ʌp tuː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1399,
        "en": "Stopover",
        "vi": "Điểm dừng chân",
        "ipa": "/ˈstɒpˌəʊ.və/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1400,
        "en": "Improvise",
        "vi": "Ứng biến (không cần kịch bản)",
        "ipa": "/ˈɪm.prə.vaɪz/",
        "pos": "(v)",
        "ex": ""
    },
    {
        "num": 1401,
        "en": "Relic",
        "vi": "Di tích, cổ vật",
        "ipa": "/ˈrel.ɪk/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1402,
        "en": "Well-being",
        "vi": "Tình trạng hạnh phúc, khỏe mạnh",
        "ipa": "/ˌwelˈbiː.ɪŋ/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1403,
        "en": "Check in",
        "vi": "Làm thủ tục vào (khách sạn, sân bay)",
        "ipa": "/tʃek ɪn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1404,
        "en": "Down the drain",
        "vi": "Đổ sông đổ biển (công sức, tiền bạc)",
        "ipa": "/daʊn ðə dreɪn/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1405,
        "en": "Cross that bridge when you come to it",
        "vi": "Tới đâu hay tới đó, chuyện chưa tới đừng lo",
        "ipa": "/krɒs ðæt brɪdʒ wen juː kʌm tuː ɪt/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1406,
        "en": "Folklore",
        "vi": "Văn hóa dân gian",
        "ipa": "/ˈfəʊk.lɔː/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1407,
        "en": "Cutting-edge",
        "vi": "Tiên tiến nhất, hiện đại nhất",
        "ipa": "/ˌkʌt.ɪŋˈedʒ/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1408,
        "en": "Give up",
        "vi": "Từ bỏ (thói quen, nỗ lực)",
        "ipa": "/ɡɪv ʌp/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1409,
        "en": "Dialect",
        "vi": "Phương ngữ, tiếng địa phương",
        "ipa": "/ˈdaɪ.ə.lekt/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1410,
        "en": "Birth rate",
        "vi": "Tỷ lệ sinh",
        "ipa": "/bɜːθ reɪt/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1411,
        "en": "Pull over",
        "vi": "Tấp xe vào lề đường",
        "ipa": "/pʊl ˈəʊ.və/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1412,
        "en": "Immunity",
        "vi": "Sự miễn dịch",
        "ipa": "/ɪˈmjuː.nə.ti/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1413,
        "en": "Microbiology",
        "vi": "Vi sinh vật học",
        "ipa": "/ˌmaɪ.krəʊ.baɪˈɒl.ə.dʒi/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1414,
        "en": "Fall back on",
        "vi": "Phải dựa vào (khi kế hoạch khác thất bại)",
        "ipa": "/fɔːl bæk ɒn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1415,
        "en": "Overcrowded",
        "vi": "Quá đông đúc",
        "ipa": "/ˌəʊ.vəˈkraʊ.dɪd/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1416,
        "en": "Alienate",
        "vi": "Xa lánh, làm cho ai xa lánh",
        "ipa": "/ˈeɪ.li.ə.neɪt/",
        "pos": "(v)",
        "ex": ""
    },
    {
        "num": 1417,
        "en": "Propaganda",
        "vi": "Sự tuyên truyền",
        "ipa": "/ˌprɒp.əˈɡæn.də/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1418,
        "en": "Radiation",
        "vi": "Bức xạ, phóng xạ",
        "ipa": "/ˌreɪ.diˈeɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1419,
        "en": "So far so good",
        "vi": "Mọi thứ vẫn tốt đẹp tính đến hiện tại",
        "ipa": "/səʊ fɑː səʊ ɡʊd/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1420,
        "en": "Broadcast",
        "vi": "Phát sóng (truyền hình, radio)",
        "ipa": "/ˈbrɔːd.kɑːst/",
        "pos": "(v/n)",
        "ex": ""
    },
    {
        "num": 1421,
        "en": "Boil down to",
        "vi": "Chung quy lại là, vấn đề chính là",
        "ipa": "/bɔɪl daʊn tuː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1422,
        "en": "Fraud",
        "vi": "Sự gian lận, lừa đảo",
        "ipa": "/frɔːd/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1423,
        "en": "Go up",
        "vi": "Tăng lên",
        "ipa": "/ɡəʊ ʌp/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1424,
        "en": "Off the record",
        "vi": "Không chính thức, không được ghi vào sổ",
        "ipa": "/ɒf ðə ˈrek.ɔːd/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1425,
        "en": "Monopoly",
        "vi": "Sự độc quyền",
        "ipa": "/məˈnɒp.əl.i/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1426,
        "en": "Stereotype",
        "vi": "Định kiến, khuôn mẫu",
        "ipa": "/ˈster.i.ə.taɪp/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1427,
        "en": "Phobia",
        "vi": "Hội chứng sợ hãi vô lý",
        "ipa": "/ˈfəʊ.bi.ə/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1428,
        "en": "Grow up",
        "vi": "Lớn lên, trưởng thành",
        "ipa": "/ɡrəʊ ʌp/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1429,
        "en": "Contribute",
        "vi": "Đóng góp, cống hiến",
        "ipa": "/kənˈtrɪb.juːt/",
        "pos": "(v)",
        "ex": ""
    },
    {
        "num": 1430,
        "en": "Cheer up",
        "vi": "Vui lên, làm ai đó vui lên",
        "ipa": "/tʃɪər ʌp/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1431,
        "en": "Rule of thumb",
        "vi": "Nguyên tắc chung dựa trên kinh nghiệm",
        "ipa": "/ruːl əv θʌm/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1432,
        "en": "Privatization",
        "vi": "Sự tư nhân hóa",
        "ipa": "/ˌpraɪ.və.taɪˈzeɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1433,
        "en": "Curriculum",
        "vi": "Chương trình giảng dạy",
        "ipa": "/kəˈrɪk.jə.ləm/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1434,
        "en": "Depression",
        "vi": "Căn bệnh trầm cảm",
        "ipa": "/dɪˈpreʃ.ən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1435,
        "en": "Hold back",
        "vi": "Kìm nén (cảm xúc), ngăn lại, che giấu",
        "ipa": "/həʊld bæk/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1436,
        "en": "Compensation",
        "vi": "Sự bồi thường, lương và phúc lợi",
        "ipa": "/ˌkɒm.penˈseɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1437,
        "en": "Cyberbullying",
        "vi": "Bắt nạt trên mạng",
        "ipa": "/ˈsaɪ.bəˌbʊl.i.ɪŋ/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1438,
        "en": "Marginalized",
        "vi": "Bị gạt ra ngoài lề (xã hội)",
        "ipa": "/ˈmɑː.dʒɪ.nəl.aɪzd/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1439,
        "en": "Look for",
        "vi": "Tìm kiếm",
        "ipa": "/lʊk fɔː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1440,
        "en": "Beat about/around the bush",
        "vi": "Nói vòng vo tam quốc, không vào trọng tâm",
        "ipa": "/biːt əˈbaʊt ðə bʊʃ/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1441,
        "en": "Dedicate",
        "vi": "Cống hiến, tận tâm",
        "ipa": "/ˈded.ɪ.keɪt/",
        "pos": "(v)",
        "ex": ""
    },
    {
        "num": 1442,
        "en": "Narrow down",
        "vi": "Thu hẹp (danh sách, các sự lựa chọn)",
        "ipa": "/ˈnær.əʊ daʊn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1443,
        "en": "Carnivore",
        "vi": "Động vật ăn thịt",
        "ipa": "/ˈkɑː.nɪ.vɔː/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1444,
        "en": "Get through",
        "vi": "Hoàn thành, liên lạc được, thi đỗ",
        "ipa": "/ɡet θruː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1445,
        "en": "Come out",
        "vi": "Xuất bản, lộ ra (sự thật), nở (hoa)",
        "ipa": "/kʌm aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1446,
        "en": "Renewable",
        "vi": "Có thể tái tạo (năng lượng)",
        "ipa": "/rɪˈnjuː.ə.bəl/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1447,
        "en": "Pessimistic",
        "vi": "Bi quan",
        "ipa": "/ˌpes.ɪˈmɪs.tɪk/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1448,
        "en": "Bring out",
        "vi": "Xuất bản (sách), làm nổi bật (phẩm chất)",
        "ipa": "/brɪŋ aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1449,
        "en": "Barking up the wrong tree",
        "vi": "Trách nhầm người, đi sai hướng",
        "ipa": "/ˈbɑː.kɪŋ ʌp ðə rɒŋ triː/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1450,
        "en": "Sanitation",
        "vi": "Hệ thống vệ sinh (nước thải, rác)",
        "ipa": "/ˌsæn.ɪˈteɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1451,
        "en": "Sluggish",
        "vi": "Uể oải, lờ đờ",
        "ipa": "/ˈslʌɡ.ɪʃ/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1452,
        "en": "Comprehensive",
        "vi": "Toàn diện, bao quát",
        "ipa": "/ˌkɒm.prɪˈhen.sɪv/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1453,
        "en": "Amenity",
        "vi": "Tiện nghi, cơ sở vật chất",
        "ipa": "/əˈmiː.nə.ti/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1454,
        "en": "Domestic violence",
        "vi": "Bạo lực gia đình",
        "ipa": "/dəˌmes.tɪk ˈvaɪə.ləns/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1455,
        "en": "Put on",
        "vi": "Mặc (quần áo), tăng (cân), tổ chức",
        "ipa": "/pʊt ɒn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1456,
        "en": "Cut off",
        "vi": "Ngừng cung cấp (điện, nước), cắt đứt",
        "ipa": "/kʌt ɒf/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1457,
        "en": "Gothic",
        "vi": "Kiến trúc Gô-tích",
        "ipa": "/ˈɡɒθ.ɪk/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1458,
        "en": "Go in for",
        "vi": "Tham gia (kỳ thi, cuộc thi), đam mê",
        "ipa": "/ɡəʊ ɪn fɔː/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1459,
        "en": "Go without",
        "vi": "Nhịn, chịu thiếu thốn cái gì",
        "ipa": "/ɡəʊ wɪˈðaʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1460,
        "en": "Delegate",
        "vi": "Giao phó, ủy quyền",
        "ipa": "/ˈdel.ɪ.ɡeɪt/",
        "pos": "(v)",
        "ex": ""
    },
    {
        "num": 1461,
        "en": "Pursuit",
        "vi": "Đam mê theo đuổi, sở thích",
        "ipa": "/pəˈsjuːt/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1462,
        "en": "Hit the roof / Hit the ceiling",
        "vi": "Cực kỳ tức giận",
        "ipa": "/hɪt ðə ruːf/ - /ˈsiː.lɪŋ/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1463,
        "en": "Sophisticated",
        "vi": "Tinh vi, phức tạp (công nghệ)",
        "ipa": "/səˈfɪs.tɪ.keɪ.tɪd/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1464,
        "en": "Tabloid",
        "vi": "Báo lá cải",
        "ipa": "/ˈtæb.lɔɪd/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1465,
        "en": "On cloud nine / Over the moon",
        "vi": "Vô cùng sung sướng, hạnh phúc",
        "ipa": "/ɒn klaʊd naɪn/ - /ˈəʊ.və ðə muːn/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1466,
        "en": "Curiosity killed the cat",
        "vi": "Tò mò hại thân",
        "ipa": "/ˌkjʊə.riˈɒs.ə.ti kɪld ðə kæt/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1467,
        "en": "Inquisitive",
        "vi": "Ham học hỏi, tò mò",
        "ipa": "/ɪnˈkwɪz.ə.tɪv/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1468,
        "en": "Vocational",
        "vi": "Thuộc về học nghề, hướng nghiệp",
        "ipa": "/vəʊˈkeɪ.ʃən.əl/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1469,
        "en": "Do wonders (for someone/sth)",
        "vi": "Có tác dụng kỳ diệu, cực kỳ tốt cho...",
        "ipa": "/duː ˈwʌn.dəz/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1470,
        "en": "Instinct",
        "vi": "Bản năng",
        "ipa": "/ˈɪn.stɪŋkt/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1471,
        "en": "Far cry from",
        "vi": "Hoàn toàn khác biệt với",
        "ipa": "/fɑː kraɪ frəm/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1472,
        "en": "Go over",
        "vi": "Kiểm tra kĩ lưỡng (= examine)",
        "ipa": "/ɡəʊ ˈəʊ.və/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1473,
        "en": "Deep-rooted",
        "vi": "Ăn sâu bám rễ, lâu đời",
        "ipa": "/diːp ˈruː.tɪd/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1474,
        "en": "Conflict",
        "vi": "Sự xung đột",
        "ipa": "/ˈkɒn.flɪkt/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1475,
        "en": "Fall out (with)",
        "vi": "Cãi vã, bất hòa với ai",
        "ipa": "/fɔːl aʊt wɪð/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1476,
        "en": "Remuneration",
        "vi": "Tiền thù lao, tiền trả công",
        "ipa": "/rɪˌmjuː.nərˈeɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1477,
        "en": "Let out",
        "vi": "Phóng thích, để lộ bí mật, nới lỏng quần áo",
        "ipa": "/let aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1478,
        "en": "Awe-inspiring",
        "vi": "Đẹp kinh ngạc, đáng nể",
        "ipa": "/ˈɔː.ɪnˌspaɪə.rɪŋ/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1479,
        "en": "Pristine",
        "vi": "Hoang sơ, nguyên sơ",
        "ipa": "/ˈprɪs.tiːn/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1480,
        "en": "Do away with",
        "vi": "Bãi bỏ, loại bỏ (= get rid of, abolish)",
        "ipa": "/duː əˈweɪ wɪð/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1481,
        "en": "Anonymous",
        "vi": "Vô danh, ẩn danh",
        "ipa": "/əˈnɒn.ɪ.məs/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1482,
        "en": "Chalk and cheese",
        "vi": "Hoàn toàn khác biệt",
        "ipa": "/tʃɔːk ənd tʃiːz/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1483,
        "en": "Prey",
        "vi": "Con mồi",
        "ipa": "/preɪ/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1484,
        "en": "Lucrative",
        "vi": "Sinh lời, kiếm được nhiều tiền",
        "ipa": "/ˈluː.krə.tɪv/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1485,
        "en": "Leave no stone unturned",
        "vi": "Tìm mọi ngóc ngách, thử mọi cách",
        "ipa": "/liːv nəʊ stəʊn ʌnˈtɜːnd/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1486,
        "en": "Kinship",
        "vi": "Tình máu mủ, quan hệ họ hàng",
        "ipa": "/ˈkɪn.ʃɪp/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1487,
        "en": "Check out",
        "vi": "Làm thủ tục ra, kiểm tra (thông tin)",
        "ipa": "/tʃek aʊt/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1488,
        "en": "Add insult to injury",
        "vi": "Thêm dầu vào lửa, làm tình hình tồi tệ hơn",
        "ipa": "/æd ˈɪn.sʌlt tuː ˈɪn.dʒər.i/",
        "pos": "idiom",
        "ex": ""
    },
    {
        "num": 1489,
        "en": "Take aback",
        "vi": "Làm ngạc nhiên, sửng sốt (thường bị động)",
        "ipa": "/teɪk əˈbæk/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1490,
        "en": "Non-profit",
        "vi": "Phi lợi nhuận",
        "ipa": "/ˌnɒnˈprɒf.ɪt/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1491,
        "en": "Fascinating",
        "vi": "Hấp dẫn, lôi cuốn",
        "ipa": "/ˈfæs.ən.eɪ.tɪŋ/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1492,
        "en": "Literacy",
        "vi": "Sự biết đọc, biết viết",
        "ipa": "/ˈlɪt.ər.ə.si/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1493,
        "en": "Ubiquitous",
        "vi": "Có mặt ở khắp mọi nơi",
        "ipa": "/juːˈbɪk.wɪ.təs/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1494,
        "en": "Densely-populated",
        "vi": "Dân cư đông đúc",
        "ipa": "/ˈden.sli ˈpɒp.jə.leɪ.tɪd/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1495,
        "en": "Lay off",
        "vi": "Sa thải (vì công ty ít việc)",
        "ipa": "/leɪ ɒf/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1496,
        "en": "Deficit",
        "vi": "Sự thâm hụt (ngân sách)",
        "ipa": "/ˈdef.ɪ.sɪt/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1497,
        "en": "Look down on",
        "vi": "Khinh thường, coi thường ai",
        "ipa": "/lʊk daʊn ɒn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1498,
        "en": "Look back on",
        "vi": "Nhìn lại, nhớ lại quá khứ",
        "ipa": "/lʊk bæk ɒn/",
        "pos": "phr. v.",
        "ex": ""
    },
    {
        "num": 1499,
        "en": "Pedagogy",
        "vi": "Phương pháp giảng dạy, sư phạm",
        "ipa": "/ˈped.ə.ɡɒdʒ.i/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1500,
        "en": "Quaint",
        "vi": "Đẹp cổ kính, lạ lùng",
        "ipa": "/kweɪnt/",
        "pos": "(adj)",
        "ex": ""
    },
    {
        "num": 1501,
        "en": "Obesity",
        "vi": "Bệnh béo phì",
        "ipa": "/əʊˈbiː.sə.ti/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1502,
        "en": "Glitch",
        "vi": "Lỗi kỹ thuật nhỏ (phần mềm)",
        "ipa": "/ɡlɪtʃ/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1503,
        "en": "Desertification",
        "vi": "Sự sa mạc hóa",
        "ipa": "/dɪˌzɜː.tɪ.fɪˈkeɪ.ʃən/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1504,
        "en": "Commodity",
        "vi": "Hàng hóa",
        "ipa": "/kəˈmɒd.ə.ti/",
        "pos": "(n)",
        "ex": ""
    },
    {
        "num": 1505,
        "en": "Orbit",
        "vi": "Quỹ đạo / Quay quanh quỹ đạo",
        "ipa": "/ˈɔː.bɪt/",
        "pos": "(n/v)",
        "ex": ""
    },
    {
        "num": 1506,
        "en": "Get out of hand",
        "vi": "Mất kiểm soát (= out of control)",
        "ipa": "/ɡet aʊt əv hænd/",
        "pos": "idiom",
        "ex": ""
    }
];
