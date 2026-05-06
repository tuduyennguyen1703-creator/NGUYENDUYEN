const vocabData = [
    {
        "num": 1,
        "en": "Adjust to something",
        "pos": "phr. v.",
        "ipa": "/əˈdʒʌst tə ˈsʌm.θɪŋ/",
        "vi": "Thích nghi với điều gì",
        "ex": ""
    },
    {
        "num": 2,
        "en": "Adapt to",
        "pos": "phr. v.",
        "ipa": "/əˈdæpt tuː/",
        "vi": "Thích ứng với",
        "ex": ""
    },
    {
        "num": 3,
        "en": "Acclimatize to",
        "pos": "phr. v.",
        "ipa": "/əˈklaɪ.mə.taɪz tuː/",
        "vi": "Làm quen với môi trường, thủy thổ",
        "ex": ""
    },
    {
        "num": 4,
        "en": "Get used to",
        "pos": "idiom",
        "ipa": "/ɡet juːst tuː/",
        "vi": "Trở nên quen với",
        "ex": ""
    },
    {
        "num": 5,
        "en": "Resist",
        "pos": "v.",
        "ipa": "/rɪˈzɪst/",
        "vi": "Chống lại, kháng cự",
        "ex": ""
    },
    {
        "num": 6,
        "en": "Refuse to change",
        "pos": "phr.",
        "ipa": "/rɪˈfjuːz tə tʃeɪndʒ/",
        "vi": "Từ chối thay đổi",
        "ex": ""
    },
    {
        "num": 7,
        "en": "Escape from the effects",
        "pos": "phr.",
        "ipa": "/ɪˈskeɪp frəm ði ɪˈfekts/",
        "vi": "Thoát khỏi những tác động",
        "ex": ""
    },
    {
        "num": 8,
        "en": "Avoid the impacts",
        "pos": "phr.",
        "ipa": "/əˈvɔɪd ði ˈɪm.pækts/",
        "vi": "Tránh các tác động",
        "ex": ""
    },
    {
        "num": 9,
        "en": "Get away from",
        "pos": "phr. v.",
        "ipa": "/ɡet əˈweɪ frəm/",
        "vi": "Tránh xa khỏi",
        "ex": ""
    },
    {
        "num": 10,
        "en": "Face the effects",
        "pos": "phr.",
        "ipa": "/feɪs ði ɪˈfekts/",
        "vi": "Đối mặt với những tác động",
        "ex": ""
    },
    {
        "num": 11,
        "en": "Suffer from",
        "pos": "phr. v.",
        "ipa": "/ˈsʌf.ə frəm/",
        "vi": "Chịu đựng (hậu quả, tác động)",
        "ex": ""
    },
    {
        "num": 12,
        "en": "Bloom earlier",
        "pos": "phr.",
        "ipa": "/bluːm ˈɜː.li.ə/",
        "vi": "Nở hoa sớm hơn",
        "ex": ""
    },
    {
        "num": 13,
        "en": "Open sooner",
        "pos": "phr.",
        "ipa": "/ˈəʊ.pən ˈsuː.nə/",
        "vi": "Nở (hoa) sớm hơn",
        "ex": ""
    },
    {
        "num": 14,
        "en": "Wither earlier",
        "pos": "phr.",
        "ipa": "/ˈwɪð.ə ˈɜː.li.ə/",
        "vi": "Tàn, héo sớm hơn",
        "ex": ""
    },
    {
        "num": 15,
        "en": "Bloom late",
        "pos": "phr.",
        "ipa": "/bluːm leɪt/",
        "vi": "Nở hoa muộn",
        "ex": ""
    },
    {
        "num": 16,
        "en": "Prevent shifts",
        "pos": "phr.",
        "ipa": "/prɪˈvent ʃɪfts/",
        "vi": "Ngăn cản sự dịch chuyển",
        "ex": ""
    },
    {
        "num": 17,
        "en": "Hinder movements",
        "pos": "phr.",
        "ipa": "/ˈhɪn.də ˈmuːv.mənts/",
        "vi": "Cản trở sự di chuyển",
        "ex": ""
    },
    {
        "num": 18,
        "en": "Block migrations",
        "pos": "phr.",
        "ipa": "/blɒk maɪˈɡreɪ.ʃəns/",
        "vi": "Chặn lại các cuộc di cư",
        "ex": ""
    },
    {
        "num": 19,
        "en": "Facilitate shifts",
        "pos": "phr.",
        "ipa": "/fəˈsɪl.ɪ.teɪt ʃɪfts/",
        "vi": "Tạo điều kiện cho sự dịch chuyển",
        "ex": ""
    },
    {
        "num": 20,
        "en": "Encourage movements",
        "pos": "phr.",
        "ipa": "/ɪnˈkʌr.ɪdʒ ˈmuːv.mənts/",
        "vi": "Khuyến khích sự di chuyển",
        "ex": ""
    },
    {
        "num": 21,
        "en": "Be at risk",
        "pos": "idiom",
        "ipa": "/bi ət rɪsk/",
        "vi": "Đang gặp rủi ro, nguy hiểm",
        "ex": ""
    },
    {
        "num": 22,
        "en": "Be in danger",
        "pos": "idiom",
        "ipa": "/bi ɪn ˈdeɪn.dʒə/",
        "vi": "Đang trong vòng nguy hiểm",
        "ex": ""
    },
    {
        "num": 23,
        "en": "Be vulnerable",
        "pos": "phr.",
        "ipa": "/bi ˈvʌl.nər.ə.bəl/",
        "vi": "Dễ bị tổn thương",
        "ex": ""
    },
    {
        "num": 24,
        "en": "Be under threat",
        "pos": "idiom",
        "ipa": "/bi ˈʌn.də θret/",
        "vi": "Đang bị đe dọa",
        "ex": ""
    },
    {
        "num": 25,
        "en": "Be safe",
        "pos": "phr.",
        "ipa": "/bi seɪf/",
        "vi": "Được an toàn",
        "ex": ""
    },
    {
        "num": 26,
        "en": "Be secure",
        "pos": "phr.",
        "ipa": "/bi sɪˈkjʊə/",
        "vi": "Được bảo đảm an toàn",
        "ex": ""
    },
    {
        "num": 27,
        "en": "Be protected",
        "pos": "phr.",
        "ipa": "/bi prəˈtek.tɪd/",
        "vi": "Được bảo vệ",
        "ex": ""
    },
    {
        "num": 28,
        "en": "Become extinct",
        "pos": "phr.",
        "ipa": "/bɪˈkʌm ɪkˈstɪŋkt/",
        "vi": "Trở nên tuyệt chủng",
        "ex": ""
    },
    {
        "num": 29,
        "en": "Die out",
        "pos": "phr. v.",
        "ipa": "/daɪ aʊt/",
        "vi": "Chết dần, tuyệt chủng",
        "ex": ""
    },
    {
        "num": 30,
        "en": "Vanish",
        "pos": "v.",
        "ipa": "/ˈvæn.ɪʃ/",
        "vi": "Biến mất hoàn toàn",
        "ex": ""
    },
    {
        "num": 31,
        "en": "Flourish",
        "pos": "v.",
        "ipa": "/ˈflʌr.ɪʃ/",
        "vi": "Hưng thịnh, phát triển rực rỡ",
        "ex": ""
    },
    {
        "num": 32,
        "en": "Adjust quickly",
        "pos": "phr.",
        "ipa": "/əˈdʒʌst ˈkwɪk.li/",
        "vi": "Thích nghi một cách nhanh chóng",
        "ex": ""
    },
    {
        "num": 33,
        "en": "Adapt rapidly",
        "pos": "phr.",
        "ipa": "/əˈdæpt ˈræp.ɪd.li/",
        "vi": "Thích ứng nhanh chóng",
        "ex": ""
    },
    {
        "num": 34,
        "en": "Respond slowly",
        "pos": "phr.",
        "ipa": "/rɪˈspɒnd ˈsləʊ.li/",
        "vi": "Phản ứng chậm chạp",
        "ex": ""
    },
    {
        "num": 35,
        "en": "Fail to adapt",
        "pos": "phr.",
        "ipa": "/feɪl tu əˈdæpt/",
        "vi": "Không thể thích ứng",
        "ex": ""
    },
    {
        "num": 36,
        "en": "Put / Place stress on sth",
        "pos": "idiom",
        "ipa": "/pʊt stres ɒn/",
        "vi": "Gây áp lực lên cái gì",
        "ex": ""
    },
    {
        "num": 37,
        "en": "Burden",
        "pos": "v.",
        "ipa": "/ˈbɜː.dən/",
        "vi": "Đè gánh nặng lên",
        "ex": ""
    },
    {
        "num": 38,
        "en": "Relieve",
        "pos": "v.",
        "ipa": "/rɪˈliːv/",
        "vi": "Làm dịu đi, làm bớt đi",
        "ex": ""
    },
    {
        "num": 39,
        "en": "Ease",
        "pos": "v.",
        "ipa": "/iːz/",
        "vi": "Làm giảm bớt (áp lực)",
        "ex": ""
    },
    {
        "num": 40,
        "en": "Alleviate",
        "pos": "v.",
        "ipa": "/əˈliː.vi.eɪt/",
        "vi": "Làm nhẹ bớt, giảm nhẹ",
        "ex": ""
    },
    {
        "num": 41,
        "en": "Observe shifts",
        "pos": "phr.",
        "ipa": "/əbˈzɜːv ʃɪfts/",
        "vi": "Quan sát thấy sự thay đổi / dịch chuyển",
        "ex": ""
    },
    {
        "num": 42,
        "en": "Notice changes",
        "pos": "phr.",
        "ipa": "/ˈnəʊ.tɪs tʃeɪndʒɪz/",
        "vi": "Nhận thấy những thay đổi",
        "ex": ""
    },
    {
        "num": 43,
        "en": "Detect movements",
        "pos": "phr.",
        "ipa": "/dɪˈtekt ˈmuːv.mənts/",
        "vi": "Phát hiện sự di chuyển",
        "ex": ""
    },
    {
        "num": 44,
        "en": "Shift their ranges",
        "pos": "phr.",
        "ipa": "/ʃɪft ðeə ˈreɪndʒɪz/",
        "vi": "Thay đổi phạm vi (sinh sống)",
        "ex": ""
    },
    {
        "num": 45,
        "en": "Change habitats",
        "pos": "phr.",
        "ipa": "/tʃeɪndʒ ˈhæb.ɪ.tæts/",
        "vi": "Thay đổi môi trường sống",
        "ex": ""
    },
    {
        "num": 46,
        "en": "Relocate",
        "pos": "v.",
        "ipa": "/ˌriː.ləʊˈkeɪt/",
        "vi": "Di dời, chuyển chỗ",
        "ex": ""
    },
    {
        "num": 47,
        "en": "Move territories",
        "pos": "phr.",
        "ipa": "/muːv ˈter.ɪ.tər.iz/",
        "vi": "Di chuyển lãnh thổ",
        "ex": ""
    },
    {
        "num": 48,
        "en": "Human development",
        "pos": "n.",
        "ipa": "/ˈhjuː.mən dɪˈvel.əp.mənt/",
        "vi": "Sự phát triển của con người (đô thị hóa)",
        "ex": ""
    },
    {
        "num": 49,
        "en": "Urbanization",
        "pos": "n.",
        "ipa": "/ˌɜː.bən.aɪˈzeɪ.ʃən/",
        "vi": "Đô thị hóa",
        "ex": ""
    },
    {
        "num": 50,
        "en": "Industrialization",
        "pos": "n.",
        "ipa": "/ɪnˌdʌs.tri.ə.laɪˈzeɪ.ʃən/",
        "vi": "Công nghiệp hóa",
        "ex": ""
    },
    {
        "num": 51,
        "en": "Unique ecosystems",
        "pos": "n.",
        "ipa": "/juːˈniːk ˈiː.kəʊˌsɪs.təms/",
        "vi": "Các hệ sinh thái độc đáo",
        "ex": ""
    },
    {
        "num": 52,
        "en": "Distinct environments",
        "pos": "n.",
        "ipa": "/dɪˈstɪŋkt ɪnˈvaɪ.rən.mənts/",
        "vi": "Những môi trường riêng biệt, khác biệt",
        "ex": ""
    },
    {
        "num": 53,
        "en": "One-of-a-kind habitats",
        "pos": "n.",
        "ipa": "/ˌwʌn.əv.əˈkaɪnd ˈhæb.ɪ.tæts/",
        "vi": "Những môi trường sống độc nhất vô nhị",
        "ex": ""
    },
    {
        "num": 54,
        "en": "Project species extinction",
        "pos": "phr.",
        "ipa": "/prəˈdʒekt ˈspiː.ʃiːz ɪkˈstɪŋk.ʃən/",
        "vi": "Dự báo sự tuyệt chủng của các loài",
        "ex": ""
    },
    {
        "num": 55,
        "en": "Forecast / Predict species loss",
        "pos": "phr.",
        "ipa": "/ˈfɔː.kɑːst ˈspiː.ʃiːz lɒs/",
        "vi": "Dự báo sự mất mát của các loài",
        "ex": ""
    },
    {
        "num": 56,
        "en": "Be committed to extinction",
        "pos": "idiom",
        "ipa": "/bi kəˈmɪt.ɪd tu ɪkˈstɪŋk.ʃən/",
        "vi": "Bị đẩy đến bờ vực tuyệt chủng",
        "ex": ""
    },
    {
        "num": 57,
        "en": "Be doomed to die out",
        "pos": "phr.",
        "ipa": "/bi duːmd tə daɪ aʊt/",
        "vi": "Chắc chắn sẽ chết mòn/tuyệt chủng",
        "ex": ""
    },
    {
        "num": 58,
        "en": "Be driven to extinction",
        "pos": "phr.",
        "ipa": "/bi ˈdrɪv.ən tu ɪkˈstɪŋk.ʃən/",
        "vi": "Bị dồn đến chỗ tuyệt chủng",
        "ex": ""
    },
    {
        "num": 59,
        "en": "Widespread bleaching",
        "pos": "n.",
        "ipa": "/ˌwaɪdˈspred ˈbliː.tʃɪŋ/",
        "vi": "Hiện tượng tẩy trắng (san hô) trên diện rộng",
        "ex": ""
    },
    {
        "num": 60,
        "en": "Extensive bleaching",
        "pos": "n.",
        "ipa": "/ɪkˈsten.sɪv ˈbliː.tʃɪŋ/",
        "vi": "Sự tẩy trắng trên diện rộng",
        "ex": ""
    },
    {
        "num": 61,
        "en": "Massive bleaching",
        "pos": "n.",
        "ipa": "/ˈmæs.ɪv ˈbliː.tʃɪŋ/",
        "vi": "Sự tẩy trắng hàng loạt",
        "ex": ""
    },
    {
        "num": 62,
        "en": "Annual migration patterns",
        "pos": "n.",
        "ipa": "/ˈæn.ju.əl maɪˈɡreɪ.ʃən ˈpæt.əns/",
        "vi": "Các mô hình / tập tính di cư hàng năm",
        "ex": ""
    },
    {
        "num": 63,
        "en": "Dwindling",
        "pos": "adj.",
        "ipa": "/ˈdwɪn.dlɪŋ/",
        "vi": "Nhỏ dần, thu hẹp, cạn kiệt",
        "ex": ""
    },
    {
        "num": 64,
        "en": "Shrinking",
        "pos": "adj.",
        "ipa": "/ˈʃrɪŋ.kɪŋ/",
        "vi": "Co lại, thu hẹp lại",
        "ex": ""
    },
    {
        "num": 65,
        "en": "Diminishing",
        "pos": "adj.",
        "ipa": "/dɪˈmɪn.ɪ.ʃɪŋ/",
        "vi": "Giảm bớt, thu nhỏ lại",
        "ex": ""
    },
    {
        "num": 66,
        "en": "Expanding",
        "pos": "adj.",
        "ipa": "/ɪkˈspæn.dɪŋ/",
        "vi": "Mở rộng, phát triển",
        "ex": ""
    },
    {
        "num": 67,
        "en": "Growing",
        "pos": "adj.",
        "ipa": "/ˈɡrəʊ.ɪŋ/",
        "vi": "Đang phát triển, lớn lên",
        "ex": ""
    },
    {
        "num": 68,
        "en": "Rising",
        "pos": "adj.",
        "ipa": "/ˈraɪ.zɪŋ/",
        "vi": "Đang tăng lên",
        "ex": ""
    },
    {
        "num": 69,
        "en": "Extinct",
        "pos": "adj.",
        "ipa": "/ɪkˈstɪŋkt/",
        "vi": "Đã tuyệt chủng",
        "ex": ""
    },
    {
        "num": 70,
        "en": "Vanished",
        "pos": "adj.",
        "ipa": "/ˈvæn.ɪʃt/",
        "vi": "Đã biến mất",
        "ex": ""
    },
    {
        "num": 71,
        "en": "Dead",
        "pos": "adj.",
        "ipa": "/ded/",
        "vi": "Đã chết",
        "ex": ""
    },
    {
        "num": 72,
        "en": "Lost",
        "pos": "adj.",
        "ipa": "/lɒst/",
        "vi": "Đã mất tích, thất lạc",
        "ex": ""
    },
    {
        "num": 73,
        "en": "Wiped out",
        "pos": "adj.",
        "ipa": "/waɪpt aʊt/",
        "vi": "Bị xóa sổ hoàn toàn",
        "ex": ""
    },
    {
        "num": 74,
        "en": "Alive",
        "pos": "adj.",
        "ipa": "/əˈlaɪv/",
        "vi": "Còn sống",
        "ex": ""
    },
    {
        "num": 75,
        "en": "Extant",
        "pos": "adj.",
        "ipa": "/ɪkˈstænt/",
        "vi": "Hiện còn tồn tại (chưa tuyệt chủng)",
        "ex": ""
    },
    {
        "num": 76,
        "en": "Living",
        "pos": "adj.",
        "ipa": "/ˈlɪv.ɪŋ/",
        "vi": "Đang sống",
        "ex": ""
    },
    {
        "num": 77,
        "en": "Surviving",
        "pos": "adj.",
        "ipa": "/səˈvaɪ.vɪŋ/",
        "vi": "Còn sống sót",
        "ex": ""
    },
    {
        "num": 78,
        "en": "Delicate",
        "pos": "adj.",
        "ipa": "/ˈdel.ɪ.kət/",
        "vi": "Mong manh, thanh tú, tinh tế",
        "ex": ""
    },
    {
        "num": 79,
        "en": "Easily damaged",
        "pos": "phr.",
        "ipa": "/ˈiː.zɪ.li ˈdæm.ɪdʒd/",
        "vi": "Dễ bị hư hại",
        "ex": ""
    },
    {
        "num": 80,
        "en": "Prolonged",
        "pos": "adj.",
        "ipa": "/prəˈlɒŋd/",
        "vi": "Kéo dài",
        "ex": ""
    },
    {
        "num": 81,
        "en": "Extended",
        "pos": "adj.",
        "ipa": "/ɪkˈsten.dɪd/",
        "vi": "Được mở rộng, kéo dài thêm",
        "ex": ""
    },
    {
        "num": 82,
        "en": "Lengthy",
        "pos": "adj.",
        "ipa": "/ˈleŋ.θi/",
        "vi": "Dài dòng, kéo dài",
        "ex": ""
    },
    {
        "num": 83,
        "en": "Sustained",
        "pos": "adj.",
        "ipa": "/səˈsteɪnd/",
        "vi": "Được duy trì liên tục",
        "ex": ""
    },
    {
        "num": 84,
        "en": "Short",
        "pos": "adj.",
        "ipa": "/ʃɔːt/",
        "vi": "Ngắn",
        "ex": ""
    },
    {
        "num": 85,
        "en": "Shortened",
        "pos": "adj.",
        "ipa": "/ˈʃɔː.tənd/",
        "vi": "Bị rút ngắn",
        "ex": ""
    },
    {
        "num": 86,
        "en": "Widespread",
        "pos": "adj.",
        "ipa": "/ˌwaɪdˈspred/",
        "vi": "Diện rộng, phổ biến",
        "ex": ""
    },
    {
        "num": 87,
        "en": "Extensive",
        "pos": "adj.",
        "ipa": "/ɪkˈsten.sɪv/",
        "vi": "Rộng rãi, bao quát",
        "ex": ""
    },
    {
        "num": 88,
        "en": "Prevalent",
        "pos": "adj.",
        "ipa": "/ˈprev.əl.ənt/",
        "vi": "Thịnh hành, phổ biến khắp nơi",
        "ex": ""
    },
    {
        "num": 89,
        "en": "Broad",
        "pos": "adj.",
        "ipa": "/brɔːd/",
        "vi": "Rộng, bao la",
        "ex": ""
    },
    {
        "num": 90,
        "en": "Limited",
        "pos": "adj.",
        "ipa": "/ˈlɪm.ɪ.tɪd/",
        "vi": "Hạn chế, có giới hạn",
        "ex": ""
    },
    {
        "num": 91,
        "en": "Localized",
        "pos": "adj.",
        "ipa": "/ˈləʊ.kəl.aɪzd/",
        "vi": "Cục bộ, giới hạn trong một khu vực",
        "ex": ""
    },
    {
        "num": 92,
        "en": "Narrow",
        "pos": "adj.",
        "ipa": "/ˈnær.əʊ/",
        "vi": "Hẹp",
        "ex": ""
    },
    {
        "num": 93,
        "en": "Immensity",
        "pos": "n.",
        "ipa": "/ɪˈmen.sə.ti/",
        "vi": "Sự bao la, rộng lớn",
        "ex": ""
    },
    {
        "num": 94,
        "en": "Aggravate",
        "pos": "v.",
        "ipa": "/ˈæɡ.rə.veɪt/",
        "vi": "Làm bực mình, làm xấu thêm",
        "ex": ""
    },
    {
        "num": 95,
        "en": "Compound",
        "pos": "v.",
        "ipa": "/kəmˈpaʊnd/",
        "vi": "Làm phức tạp thêm, trầm trọng thêm",
        "ex": ""
    },
    {
        "num": 96,
        "en": "Mitigate",
        "pos": "v.",
        "ipa": "/ˈmɪt.ɪ.ɡeɪt/",
        "vi": "Làm giảm nhẹ, làm dịu đi",
        "ex": ""
    },
    {
        "num": 97,
        "en": "Soothe",
        "pos": "v.",
        "ipa": "/suːð/",
        "vi": "Xoa dịu, dỗ dành",
        "ex": ""
    },
    {
        "num": 98,
        "en": "Heal",
        "pos": "v.",
        "ipa": "/hiːl/",
        "vi": "Chữa lành, hàn gắn",
        "ex": ""
    },
    {
        "num": 99,
        "en": "Resilience",
        "pos": "n.",
        "ipa": "/rɪˈzɪl.i.əns/",
        "vi": "Khả năng phục hồi, sự kiên cường",
        "ex": ""
    },
    {
        "num": 100,
        "en": "Flexibility",
        "pos": "n.",
        "ipa": "/ˌflek.səˈbɪl.ə.ti/",
        "vi": "Sự linh hoạt, mềm dẻo",
        "ex": ""
    },
    {
        "num": 101,
        "en": "Toughness",
        "pos": "n.",
        "ipa": "/ˈtʌf.nəs/",
        "vi": "Sự cứng rắn, dẻo dai",
        "ex": ""
    },
    {
        "num": 102,
        "en": "Endurance",
        "pos": "n.",
        "ipa": "/ɪnˈdʒʊə.rəns/",
        "vi": "Sức chịu đựng, sự nhẫn nại",
        "ex": ""
    },
    {
        "num": 103,
        "en": "Vulnerability",
        "pos": "n.",
        "ipa": "/ˌvʌl.nər.əˈbɪl.ə.ti/",
        "vi": "Sự dễ bị tổn thương",
        "ex": ""
    },
    {
        "num": 104,
        "en": "Fragility",
        "pos": "n.",
        "ipa": "/frəˈdʒɪl.ə.ti/",
        "vi": "Sự mong manh, dễ vỡ",
        "ex": ""
    },
    {
        "num": 105,
        "en": "Weakness",
        "pos": "n.",
        "ipa": "/ˈwiːk.nəs/",
        "vi": "Điểm yếu, sự yếu đuối",
        "ex": ""
    },
    {
        "num": 106,
        "en": "Be made available to sb",
        "pos": "phr.",
        "ipa": "/bi meɪd əˈveɪ.lə.bəl tə/",
        "vi": "Được cung cấp sẵn cho ai đó sử dụng",
        "ex": ""
    },
    {
        "num": 107,
        "en": "Be provided for",
        "pos": "phr.",
        "ipa": "/bi prəˈvaɪ.dɪd fɔː/",
        "vi": "Được cung cấp cho",
        "ex": ""
    },
    {
        "num": 108,
        "en": "Be accessible to",
        "pos": "phr.",
        "ipa": "/bi əkˈses.ə.bəl tuː/",
        "vi": "Có thể tiếp cận được bởi",
        "ex": ""
    },
    {
        "num": 109,
        "en": "Be hidden from",
        "pos": "phr.",
        "ipa": "/bi ˈhɪd.ən frəm/",
        "vi": "Bị giấu khỏi",
        "ex": ""
    },
    {
        "num": 110,
        "en": "Be restricted from",
        "pos": "phr.",
        "ipa": "/bi rɪˈstrɪk.tɪd frəm/",
        "vi": "Bị hạn chế khỏi",
        "ex": ""
    },
    {
        "num": 111,
        "en": "Provide users with access to sth",
        "pos": "phr.",
        "ipa": "/prəˈvaɪd ˈjuː.zəz wɪð ˈæk.ses tu/",
        "vi": "Cung cấp cho người dùng quyền truy cập vào cái gì",
        "ex": ""
    },
    {
        "num": 112,
        "en": "Grant entry to",
        "pos": "phr.",
        "ipa": "/ɡrɑːnt ˈen.tri tuː/",
        "vi": "Cấp quyền truy cập vào",
        "ex": ""
    },
    {
        "num": 113,
        "en": "Allow usage of",
        "pos": "phr.",
        "ipa": "/əˈlaʊ ˈjuː.zɪdʒ əv/",
        "vi": "Cho phép sử dụng",
        "ex": ""
    },
    {
        "num": 114,
        "en": "Deny access to",
        "pos": "phr.",
        "ipa": "/dɪˈnaɪ ˈæk.ses tuː/",
        "vi": "Từ chối quyền truy cập vào",
        "ex": ""
    },
    {
        "num": 115,
        "en": "Block users from",
        "pos": "phr.",
        "ipa": "/blɒk ˈjuː.zəz frəm/",
        "vi": "Chặn người dùng khỏi",
        "ex": ""
    },
    {
        "num": 116,
        "en": "Central mission",
        "pos": "n.",
        "ipa": "/ˈsen.trəl ˈmɪʃ.ən/",
        "vi": "Sứ mệnh trung tâm / cốt lõi",
        "ex": ""
    },
    {
        "num": 117,
        "en": "Core objective",
        "pos": "n.",
        "ipa": "/kɔːr əbˈdʒek.tɪv/",
        "vi": "Mục tiêu cốt lõi",
        "ex": ""
    },
    {
        "num": 118,
        "en": "Primary goal",
        "pos": "n.",
        "ipa": "/ˈpraɪ.mə.ri ɡəʊl/",
        "vi": "Mục tiêu chính",
        "ex": ""
    },
    {
        "num": 119,
        "en": "Main aim",
        "pos": "n.",
        "ipa": "/meɪn eɪm/",
        "vi": "Mục đích chính",
        "ex": ""
    },
    {
        "num": 120,
        "en": "Secondary aim",
        "pos": "n.",
        "ipa": "/ˈsek.ən.dri eɪm/",
        "vi": "Mục đích phụ",
        "ex": ""
    },
    {
        "num": 121,
        "en": "Minor objective",
        "pos": "n.",
        "ipa": "/ˈmaɪ.nər əbˈdʒek.tɪv/",
        "vi": "Mục tiêu nhỏ / phụ",
        "ex": ""
    },
    {
        "num": 122,
        "en": "Fulfill a mission",
        "pos": "phr.",
        "ipa": "/fʊlˈfɪl ə ˈmɪʃ.ən/",
        "vi": "Thực thi / hoàn thành sứ mệnh",
        "ex": ""
    },
    {
        "num": 123,
        "en": "Accomplish a goal",
        "pos": "phr.",
        "ipa": "/əˈkʌm.plɪʃ ə ɡəʊl/",
        "vi": "Đạt được mục tiêu",
        "ex": ""
    },
    {
        "num": 124,
        "en": "Achieve an objective",
        "pos": "phr.",
        "ipa": "/əˈtʃiːv ən əbˈdʒek.tɪv/",
        "vi": "Đạt được mục tiêu",
        "ex": ""
    },
    {
        "num": 125,
        "en": "Fail a mission",
        "pos": "phr.",
        "ipa": "/feɪl ə ˈmɪʃ.ən/",
        "vi": "Thất bại sứ mệnh",
        "ex": ""
    },
    {
        "num": 126,
        "en": "Abandon a mission",
        "pos": "phr.",
        "ipa": "/əˈbæn.dən ə ˈmɪʃ.ən/",
        "vi": "Từ bỏ sứ mệnh",
        "ex": ""
    },
    {
        "num": 127,
        "en": "Gain information",
        "pos": "phr.",
        "ipa": "/ɡeɪn ˌɪn.fəˈmeɪ.ʃən/",
        "vi": "Thu thập / lấy thông tin",
        "ex": ""
    },
    {
        "num": 128,
        "en": "Acquire data",
        "pos": "phr.",
        "ipa": "/əˈkwaɪə ˈdeɪ.tə/",
        "vi": "Thu thập dữ liệu",
        "ex": ""
    },
    {
        "num": 129,
        "en": "Obtain knowledge",
        "pos": "phr.",
        "ipa": "/əbˈteɪn ˈnɒl.ɪdʒ/",
        "vi": "Đạt được kiến thức",
        "ex": ""
    },
    {
        "num": 130,
        "en": "Lose information",
        "pos": "phr.",
        "ipa": "/luːz ˌɪn.fəˈmeɪ.ʃən/",
        "vi": "Đánh mất thông tin",
        "ex": ""
    },
    {
        "num": 131,
        "en": "Miss data",
        "pos": "phr.",
        "ipa": "/mɪs ˈdeɪ.tə/",
        "vi": "Bỏ lỡ dữ liệu",
        "ex": ""
    },
    {
        "num": 132,
        "en": "Supplement and enhance",
        "pos": "phr.",
        "ipa": "/ˈsʌp.lɪ.mənt ənd ɪnˈhɑːns/",
        "vi": "Bổ sung và nâng cao",
        "ex": ""
    },
    {
        "num": 133,
        "en": "Complement and improve",
        "pos": "phr.",
        "ipa": "/ˈkɒm.plɪ.mənt ənd ɪmˈpruːv/",
        "vi": "Bổ sung và cải thiện",
        "ex": ""
    },
    {
        "num": 134,
        "en": "Boost",
        "pos": "v.",
        "ipa": "/buːst/",
        "vi": "Thúc đẩy, nâng cao",
        "ex": ""
    },
    {
        "num": 135,
        "en": "Reduce and degrade",
        "pos": "phr.",
        "ipa": "/rɪˈdʒuːs ənd dɪˈɡreɪd/",
        "vi": "Giảm bớt và làm suy thoái",
        "ex": ""
    },
    {
        "num": 136,
        "en": "Diminish",
        "pos": "v.",
        "ipa": "/dɪˈmɪn.ɪʃ/",
        "vi": "Làm giảm bớt, suy yếu",
        "ex": ""
    },
    {
        "num": 137,
        "en": "A variety of materials",
        "pos": "phr.",
        "ipa": "/ə vəˈraɪ.ə.ti əv məˈtɪə.ri.əlz/",
        "vi": "Đa dạng các loại tài liệu",
        "ex": ""
    },
    {
        "num": 138,
        "en": "A wide range of materials",
        "pos": "phr.",
        "ipa": "/ə waɪd reɪndʒ əv məˈtɪə.ri.əlz/",
        "vi": "Nhiều loại tài liệu",
        "ex": ""
    },
    {
        "num": 139,
        "en": "An array of materials",
        "pos": "phr.",
        "ipa": "/ən əˈreɪ əv məˈtɪə.ri.əlz/",
        "vi": "Một loạt các tài liệu",
        "ex": ""
    },
    {
        "num": 140,
        "en": "Pass down to succeeding generations",
        "pos": "phr.",
        "ipa": "/pɑːs daʊn tə səkˈsiː.dɪŋ ˌdʒen.əˈreɪ.ʃənz/",
        "vi": "Truyền lại cho các thế hệ nối tiếp",
        "ex": ""
    },
    {
        "num": 141,
        "en": "Hand down",
        "pos": "phr. v.",
        "ipa": "/hænd daʊn/",
        "vi": "Truyền lại",
        "ex": ""
    },
    {
        "num": 142,
        "en": "Transmit to future generations",
        "pos": "phr.",
        "ipa": "/trænzˈmɪt tə ˈfjuː.tʃə ˌdʒen.əˈreɪ.ʃənz/",
        "vi": "Truyền lại cho thế hệ tương lai",
        "ex": ""
    },
    {
        "num": 143,
        "en": "Personal interests",
        "pos": "n.",
        "ipa": "/ˈpɜː.sən.əl ˈɪn.trəsts/",
        "vi": "Những mối quan tâm / sở thích cá nhân",
        "ex": ""
    },
    {
        "num": 144,
        "en": "Individual passions",
        "pos": "n.",
        "ipa": "/ˌɪn.dɪˈvɪdʒ.u.əl ˈpæʃ.ənz/",
        "vi": "Đam mê cá nhân",
        "ex": ""
    },
    {
        "num": 145,
        "en": "Hobbies",
        "pos": "n.",
        "ipa": "/ˈhɒb.iz/",
        "vi": "Sở thích",
        "ex": ""
    },
    {
        "num": 146,
        "en": "Locate sources of information",
        "pos": "phr.",
        "ipa": "/ləʊˈkeɪt ˈsɔː.sɪz əv ˌɪn.fəˈmeɪ.ʃən/",
        "vi": "Định vị / Tìm kiếm các nguồn thông tin",
        "ex": ""
    },
    {
        "num": 147,
        "en": "Find materials",
        "pos": "phr.",
        "ipa": "/faɪnd məˈtɪə.ri.əlz/",
        "vi": "Tìm kiếm tài liệu",
        "ex": ""
    },
    {
        "num": 148,
        "en": "Pinpoint references",
        "pos": "phr.",
        "ipa": "/ˈpɪn.pɔɪnt ˈref.ər.ənsɪz/",
        "vi": "Xác định chính xác tài liệu tham khảo",
        "ex": ""
    },
    {
        "num": 149,
        "en": "Develop study habits",
        "pos": "phr.",
        "ipa": "/dɪˈvel.əp ˈstʌd.i ˈhæb.ɪts/",
        "vi": "Phát triển thói quen học tập",
        "ex": ""
    },
    {
        "num": 150,
        "en": "Form learning routines",
        "pos": "phr.",
        "ipa": "/fɔːm ˈlɜː.nɪŋ ruːˈtiːnz/",
        "vi": "Hình thành thói quen học tập",
        "ex": ""
    },
    {
        "num": 151,
        "en": "Build academic habits",
        "pos": "phr.",
        "ipa": "/bɪld ˌæk.əˈdem.ɪk ˈhæb.ɪts/",
        "vi": "Xây dựng thói quen học thuật",
        "ex": ""
    },
    {
        "num": 152,
        "en": "Cultural institutions",
        "pos": "n.",
        "ipa": "/ˈkʌl.tʃər.əl ˌɪn.stɪˈtʃuː.ʃənz/",
        "vi": "Các thể chế / cơ quan văn hóa",
        "ex": ""
    },
    {
        "num": 153,
        "en": "Heritage organizations",
        "pos": "n.",
        "ipa": "/ˈher.ɪ.tɪdʒ ˌɔː.ɡən.aɪˈzeɪ.ʃənz/",
        "vi": "Các tổ chức di sản",
        "ex": ""
    },
    {
        "num": 154,
        "en": "Cultural establishments",
        "pos": "n.",
        "ipa": "/ˈkʌl.tʃər.əl ɪˈstæb.lɪʃ.mənts/",
        "vi": "Các cơ sở văn hóa",
        "ex": ""
    },
    {
        "num": 155,
        "en": "Access to information",
        "pos": "n.",
        "ipa": "/ˈæk.ses tu ˌɪn.fəˈmeɪ.ʃən/",
        "vi": "Quyền/ khả năng tiếp nhận thông tin",
        "ex": ""
    },
    {
        "num": 156,
        "en": "Informational materials",
        "pos": "n.",
        "ipa": "/ˌɪn.fəˈmeɪ.ʃən.əl məˈtɪə.ri.əlz/",
        "vi": "Tài liệu thông tin",
        "ex": ""
    },
    {
        "num": 157,
        "en": "Public policy issues",
        "pos": "n.",
        "ipa": "/ˈpʌb.lɪk ˈpɒl.ə.si ˈɪʃ.uːz/",
        "vi": "Các vấn đề về chính sách công",
        "ex": ""
    },
    {
        "num": 158,
        "en": "Research legislation",
        "pos": "phr.",
        "ipa": "/rɪˈsɜːtʃ ˌledʒ.ɪˈsleɪ.ʃən/",
        "vi": "Nghiên cứu luật pháp",
        "ex": ""
    },
    {
        "num": 159,
        "en": "Classroom experiences",
        "pos": "n.",
        "ipa": "/ˈklɑːs.ruːm ɪkˈspɪə.ri.ənsɪz/",
        "vi": "Trải nghiệm học tập trên lớp",
        "ex": ""
    },
    {
        "num": 160,
        "en": "Electronic formats",
        "pos": "n.",
        "ipa": "/ɪˌlekˈtrɒn.ɪk ˈfɔː.mæts/",
        "vi": "Các định dạng điện tử",
        "ex": ""
    },
    {
        "num": 161,
        "en": "Contemporary libraries",
        "pos": "n.",
        "ipa": "/kənˈtem.pər.ər.i ˈlaɪ.brər.iz/",
        "vi": "Các thư viện đương đại/hiện đại",
        "ex": ""
    },
    {
        "num": 162,
        "en": "Printed materials",
        "pos": "n.",
        "ipa": "/ˈprɪn.tɪd məˈtɪə.ri.əlz/",
        "vi": "Tài liệu in ấn",
        "ex": ""
    },
    {
        "num": 163,
        "en": "Audio-visual databases",
        "pos": "n.",
        "ipa": "/ˌɔː.di.əʊˈvɪʒ.u.əl ˈdeɪ.tə.beɪsɪz/",
        "vi": "Cơ sở dữ liệu nghe nhìn",
        "ex": ""
    },
    {
        "num": 164,
        "en": "Remote sites",
        "pos": "n.",
        "ipa": "/rɪˈməʊt saɪts/",
        "vi": "Các địa điểm từ xa",
        "ex": ""
    },
    {
        "num": 165,
        "en": "Contemporary",
        "pos": "adj.",
        "ipa": "/kənˈtem.pər.ər.i/",
        "vi": "Đương đại, cùng thời",
        "ex": ""
    },
    {
        "num": 166,
        "en": "Modern",
        "pos": "adj.",
        "ipa": "/ˈmɒd.ən/",
        "vi": "Hiện đại",
        "ex": ""
    },
    {
        "num": 167,
        "en": "Current",
        "pos": "adj.",
        "ipa": "/ˈkʌr.ənt/",
        "vi": "Hiện hành, hiện tại",
        "ex": ""
    },
    {
        "num": 168,
        "en": "Present-day",
        "pos": "adj.",
        "ipa": "/ˌprez.əntˈdeɪ/",
        "vi": "Ngày nay",
        "ex": ""
    },
    {
        "num": 169,
        "en": "Old-fashioned",
        "pos": "adj.",
        "ipa": "/ˌəʊldˈfæʃ.ənd/",
        "vi": "Lỗi thời, cổ hủ",
        "ex": ""
    },
    {
        "num": 170,
        "en": "Ancient",
        "pos": "adj.",
        "ipa": "/ˈeɪn.ʃənt/",
        "vi": "Cổ đại, xa xưa",
        "ex": ""
    },
    {
        "num": 171,
        "en": "Traditional",
        "pos": "adj.",
        "ipa": "/trəˈdɪʃ.ən.əl/",
        "vi": "Truyền thống",
        "ex": ""
    },
    {
        "num": 172,
        "en": "Remote",
        "pos": "adj.",
        "ipa": "/rɪˈməʊt/",
        "vi": "Xa xôi, hẻo lánh",
        "ex": ""
    },
    {
        "num": 173,
        "en": "Distant",
        "pos": "adj.",
        "ipa": "/ˈdɪs.tənt/",
        "vi": "Xa cách, xa xôi",
        "ex": ""
    },
    {
        "num": 174,
        "en": "Faraway",
        "pos": "adj.",
        "ipa": "/ˈfɑː.rə.weɪ/",
        "vi": "Xa xăm",
        "ex": ""
    },
    {
        "num": 175,
        "en": "Isolated",
        "pos": "adj.",
        "ipa": "/ˈaɪ.sə.leɪ.tɪd/",
        "vi": "Bị cô lập, biệt lập",
        "ex": ""
    },
    {
        "num": 176,
        "en": "Nearby",
        "pos": "adj.",
        "ipa": "/ˌnɪəˈbaɪ/",
        "vi": "Gần đây",
        "ex": ""
    },
    {
        "num": 177,
        "en": "Close",
        "pos": "adj.",
        "ipa": "/kləʊs/",
        "vi": "Gần gũi, sát gần",
        "ex": ""
    },
    {
        "num": 178,
        "en": "Accessible",
        "pos": "adj.",
        "ipa": "/əkˈses.ə.bəl/",
        "vi": "Có thể tiếp cận được",
        "ex": ""
    },
    {
        "num": 179,
        "en": "Preserve",
        "pos": "v.",
        "ipa": "/prɪˈzɜːv/",
        "vi": "Bảo tồn, gìn giữ",
        "ex": ""
    },
    {
        "num": 180,
        "en": "Conserve",
        "pos": "v.",
        "ipa": "/kənˈsɜːv/",
        "vi": "Bảo tồn, giữ gìn",
        "ex": ""
    },
    {
        "num": 181,
        "en": "Protect",
        "pos": "v.",
        "ipa": "/prəˈtekt/",
        "vi": "Bảo vệ",
        "ex": ""
    },
    {
        "num": 182,
        "en": "Maintain",
        "pos": "v.",
        "ipa": "/meɪnˈteɪn/",
        "vi": "Duy trì, bảo dưỡng",
        "ex": ""
    },
    {
        "num": 183,
        "en": "Destroy",
        "pos": "v.",
        "ipa": "/dɪˈstrɔɪ/",
        "vi": "Phá hủy",
        "ex": ""
    },
    {
        "num": 184,
        "en": "Ruin",
        "pos": "v.",
        "ipa": "/ˈruː.ɪn/",
        "vi": "Làm hỏng, tàn phá",
        "ex": ""
    },
    {
        "num": 185,
        "en": "Neglect",
        "pos": "v.",
        "ipa": "/nɪˈɡlekt/",
        "vi": "Bỏ bê, thờ ơ",
        "ex": ""
    },
    {
        "num": 186,
        "en": "Essential",
        "pos": "adj.",
        "ipa": "/ɪˈsen.ʃəl/",
        "vi": "Thiết yếu, vô cùng quan trọng",
        "ex": ""
    },
    {
        "num": 187,
        "en": "Crucial",
        "pos": "adj.",
        "ipa": "/ˈkruː.ʃəl/",
        "vi": "Cực kỳ quan trọng",
        "ex": ""
    },
    {
        "num": 188,
        "en": "Vital",
        "pos": "adj.",
        "ipa": "/ˈvaɪ.təl/",
        "vi": "Có tính sống còn",
        "ex": ""
    },
    {
        "num": 189,
        "en": "Necessary",
        "pos": "adj.",
        "ipa": "/ˈnes.ə.ser.i/",
        "vi": "Cần thiết",
        "ex": ""
    },
    {
        "num": 190,
        "en": "Indispensable",
        "pos": "adj.",
        "ipa": "/ˌɪn.dɪˈspen.sə.bəl/",
        "vi": "Không thể thiếu được",
        "ex": ""
    },
    {
        "num": 191,
        "en": "Unnecessary",
        "pos": "adj.",
        "ipa": "/ʌnˈnes.ə.ser.i/",
        "vi": "Không cần thiết",
        "ex": ""
    },
    {
        "num": 192,
        "en": "Trivial",
        "pos": "adj.",
        "ipa": "/ˈtrɪv.i.əl/",
        "vi": "Tầm thường, vặt vãnh",
        "ex": ""
    },
    {
        "num": 193,
        "en": "Optional",
        "pos": "adj.",
        "ipa": "/ˈɒp.ʃən.əl/",
        "vi": "Tùy chọn, không bắt buộc",
        "ex": ""
    },
    {
        "num": 194,
        "en": "Recreational",
        "pos": "adj.",
        "ipa": "/ˌrek.riˈeɪ.ʃən.əl/",
        "vi": "(Thuộc về) Giải trí",
        "ex": ""
    },
    {
        "num": 195,
        "en": "Entertaining",
        "pos": "adj.",
        "ipa": "/ˌen.təˈteɪ.nɪŋ/",
        "vi": "Có tính giải trí",
        "ex": ""
    },
    {
        "num": 196,
        "en": "Leisurely",
        "pos": "adj.",
        "ipa": "/ˈleʒ.ə.li/",
        "vi": "Nhàn nhã, ung dung",
        "ex": ""
    },
    {
        "num": 197,
        "en": "Relaxing",
        "pos": "adj.",
        "ipa": "/rɪˈlæk.sɪŋ/",
        "vi": "Thư giãn",
        "ex": ""
    },
    {
        "num": 198,
        "en": "Professional",
        "pos": "adj.",
        "ipa": "/prəˈfeʃ.ən.əl/",
        "vi": "Chuyên nghiệp",
        "ex": ""
    },
    {
        "num": 199,
        "en": "Academic",
        "pos": "adj.",
        "ipa": "/ˌæk.əˈdem.ɪk/",
        "vi": "(Thuộc về) Học thuật",
        "ex": ""
    },
    {
        "num": 200,
        "en": "Serious",
        "pos": "adj.",
        "ipa": "/ˈsɪə.ri.əs/",
        "vi": "Nghiêm túc",
        "ex": ""
    },
    {
        "num": 201,
        "en": "Supplement",
        "pos": "v.",
        "ipa": "/ˈsʌp.lɪ.mənt/",
        "vi": "Bổ sung, thêm vào",
        "ex": ""
    },
    {
        "num": 202,
        "en": "Add to",
        "pos": "phr. v.",
        "ipa": "/æd tuː/",
        "vi": "Thêm vào",
        "ex": ""
    },
    {
        "num": 203,
        "en": "Complement",
        "pos": "v.",
        "ipa": "/ˈkɒm.plɪ.mənt/",
        "vi": "Làm đầy đủ, làm hoàn thiện",
        "ex": ""
    },
    {
        "num": 204,
        "en": "Enrich",
        "pos": "v.",
        "ipa": "/ɪnˈrɪtʃ/",
        "vi": "Làm phong phú thêm",
        "ex": ""
    },
    {
        "num": 205,
        "en": "Subtract",
        "pos": "v.",
        "ipa": "/səbˈtrækt/",
        "vi": "Trừ đi",
        "ex": ""
    },
    {
        "num": 206,
        "en": "Deduct",
        "pos": "v.",
        "ipa": "/dɪˈdʌkt/",
        "vi": "Khấu trừ",
        "ex": ""
    },
    {
        "num": 207,
        "en": "Lessen",
        "pos": "v.",
        "ipa": "/ˈles.ən/",
        "vi": "Làm giảm đi, vơi đi",
        "ex": ""
    },
    {
        "num": 208,
        "en": "Succeeding",
        "pos": "adj.",
        "ipa": "/səkˈsiː.dɪŋ/",
        "vi": "Kế tiếp, nối tiếp",
        "ex": ""
    },
    {
        "num": 209,
        "en": "Following",
        "pos": "adj.",
        "ipa": "/ˈfɒl.əʊ.ɪŋ/",
        "vi": "Tiếp theo",
        "ex": ""
    },
    {
        "num": 210,
        "en": "Subsequent",
        "pos": "adj.",
        "ipa": "/ˈsʌb.sɪ.kwənt/",
        "vi": "Xảy ra sau, theo sau",
        "ex": ""
    },
    {
        "num": 211,
        "en": "Next",
        "pos": "adj.",
        "ipa": "/nekst/",
        "vi": "Kế tiếp",
        "ex": ""
    },
    {
        "num": 212,
        "en": "Preceding",
        "pos": "adj.",
        "ipa": "/prɪˈsiː.dɪŋ/",
        "vi": "Đi trước",
        "ex": ""
    },
    {
        "num": 213,
        "en": "Former",
        "pos": "adj.",
        "ipa": "/ˈfɔː.mə/",
        "vi": "Trước đây, cựu",
        "ex": ""
    },
    {
        "num": 214,
        "en": "Previous",
        "pos": "adj.",
        "ipa": "/ˈpriː.vi.əs/",
        "vi": "Trước đó",
        "ex": ""
    },
    {
        "num": 215,
        "en": "Obtain",
        "pos": "v.",
        "ipa": "/əbˈteɪn/",
        "vi": "Đạt được, thu được",
        "ex": ""
    },
    {
        "num": 216,
        "en": "Acquire",
        "pos": "v.",
        "ipa": "/əˈkwaɪə/",
        "vi": "Thu nhận, được",
        "ex": ""
    },
    {
        "num": 217,
        "en": "Gain",
        "pos": "v.",
        "ipa": "/ɡeɪn/",
        "vi": "Giành được",
        "ex": ""
    },
    {
        "num": 218,
        "en": "Earn",
        "pos": "v.",
        "ipa": "/ɜːn/",
        "vi": "Kiếm được",
        "ex": ""
    },
    {
        "num": 219,
        "en": "Attain",
        "pos": "v.",
        "ipa": "/əˈteɪn/",
        "vi": "Đạt tới, giành được",
        "ex": ""
    },
    {
        "num": 220,
        "en": "Lose",
        "pos": "v.",
        "ipa": "/luːz/",
        "vi": "Đánh mất",
        "ex": ""
    },
    {
        "num": 221,
        "en": "Forfeit",
        "pos": "v.",
        "ipa": "/ˈfɔː.fɪt/",
        "vi": "Bị tước, để mất",
        "ex": ""
    },
    {
        "num": 222,
        "en": "Surrender",
        "pos": "v.",
        "ipa": "/səˈren.də/",
        "vi": "Từ bỏ, đầu hàng",
        "ex": ""
    },
    {
        "num": 223,
        "en": "Metropolitan areas",
        "pos": "n.",
        "ipa": "/ˌmet.rəˈpɒl.ɪ.tən ˈeə.ri.əz/",
        "vi": "Khu vực đô thị / siêu đô thị",
        "ex": ""
    },
    {
        "num": 224,
        "en": "Urban areas",
        "pos": "n.",
        "ipa": "/ˈɜː.bən ˈeə.ri.əz/",
        "vi": "Khu vực đô thị",
        "ex": ""
    },
    {
        "num": 225,
        "en": "Cities",
        "pos": "n.",
        "ipa": "/ˈsɪt.iz/",
        "vi": "Thành phố",
        "ex": ""
    },
    {
        "num": 226,
        "en": "Rural areas",
        "pos": "n.",
        "ipa": "/ˈrʊə.rəl ˈeə.ri.əz/",
        "vi": "Khu vực nông thôn",
        "ex": ""
    },
    {
        "num": 227,
        "en": "Countryside",
        "pos": "n.",
        "ipa": "/ˈkʌn.tri.saɪd/",
        "vi": "Nông thôn",
        "ex": ""
    },
    {
        "num": 228,
        "en": "Be closely associated with",
        "pos": "phr.",
        "ipa": "/bi ˈkləʊs.li əˈsəʊ.si.eɪ.tɪd wɪð/",
        "vi": "Có liên quan chặt chẽ với",
        "ex": ""
    },
    {
        "num": 229,
        "en": "Be closely linked to",
        "pos": "phr.",
        "ipa": "/bi ˈkləʊs.li lɪŋkt tuː/",
        "vi": "Được liên kết chặt chẽ với",
        "ex": ""
    },
    {
        "num": 230,
        "en": "Be connected with",
        "pos": "phr.",
        "ipa": "/bi kəˈnek.tɪd wɪð/",
        "vi": "Được kết nối / liên quan với",
        "ex": ""
    },
    {
        "num": 231,
        "en": "Result from",
        "pos": "phr. v.",
        "ipa": "/rɪˈzʌlt frəm/",
        "vi": "Bắt nguồn từ / Xuất phát từ",
        "ex": ""
    },
    {
        "num": 232,
        "en": "Result in",
        "pos": "phr. v.",
        "ipa": "/rɪˈzʌlt ɪn/",
        "vi": "Dẫn đến",
        "ex": ""
    },
    {
        "num": 233,
        "en": "Put stress on",
        "pos": "idiom",
        "ipa": "/pʊt stres ɒn/",
        "vi": "Gây áp lực lên (tài nguyên, hệ thống)",
        "ex": ""
    },
    {
        "num": 234,
        "en": "Place a burden on",
        "pos": "idiom",
        "ipa": "/pleɪs ə ˈbɜː.dən ɒn/",
        "vi": "Đặt gánh nặng lên",
        "ex": ""
    },
    {
        "num": 235,
        "en": "Put pressure on",
        "pos": "idiom",
        "ipa": "/pʊt ˈpreʃ.ə ɒn/",
        "vi": "Đặt áp lực lên",
        "ex": ""
    },
    {
        "num": 236,
        "en": "Mechanized farming",
        "pos": "n.",
        "ipa": "/ˈmek.ə.naɪzd ˈfɑː.mɪŋ/",
        "vi": "Nông nghiệp / Canh tác được cơ giới hóa",
        "ex": ""
    },
    {
        "num": 237,
        "en": "Manual farming",
        "pos": "n.",
        "ipa": "/ˈmæn.ju.əl ˈfɑː.mɪŋ/",
        "vi": "Canh tác thủ công",
        "ex": ""
    },
    {
        "num": 238,
        "en": "Engage in",
        "pos": "phr. v.",
        "ipa": "/ɪnˈɡeɪdʒ ɪn/",
        "vi": "Tham gia vào",
        "ex": ""
    },
    {
        "num": 239,
        "en": "Participate in",
        "pos": "phr. v.",
        "ipa": "/pɑːˈtɪs.ɪ.peɪt ɪn/",
        "vi": "Tham gia vào",
        "ex": ""
    },
    {
        "num": 240,
        "en": "Take part in",
        "pos": "idiom",
        "ipa": "/teɪk pɑːt ɪn/",
        "vi": "Tham gia vào",
        "ex": ""
    },
    {
        "num": 241,
        "en": "Be involved in",
        "pos": "phr.",
        "ipa": "/bi ɪnˈvɒlvd ɪn/",
        "vi": "Liên quan / Tham gia vào",
        "ex": ""
    },
    {
        "num": 242,
        "en": "Boost productivity",
        "pos": "phr.",
        "ipa": "/buːst ˌprɒd.ʌkˈtɪv.ə.ti/",
        "vi": "Thúc đẩy / Nâng cao năng suất",
        "ex": ""
    },
    {
        "num": 243,
        "en": "Increase productivity",
        "pos": "phr.",
        "ipa": "/ɪnˈkriːs ˌprɒd.ʌkˈtɪv.ə.ti/",
        "vi": "Gia tăng năng suất",
        "ex": ""
    },
    {
        "num": 244,
        "en": "Enhance productivity",
        "pos": "phr.",
        "ipa": "/ɪnˈhɑːns ˌprɒd.ʌkˈtɪv.ə.ti/",
        "vi": "Nâng cao năng suất",
        "ex": ""
    },
    {
        "num": 245,
        "en": "Sanction the value",
        "pos": "phr.",
        "ipa": "/ˈsæŋk.ʃən ðə ˈvæl.juː/",
        "vi": "Tán thành / công nhận giá trị (của việc gì)",
        "ex": ""
    },
    {
        "num": 246,
        "en": "Family planning",
        "pos": "n.",
        "ipa": "/ˌfæm.əl.i ˈplæn.ɪŋ/",
        "vi": "Kế hoạch hóa gia đình",
        "ex": ""
    },
    {
        "num": 247,
        "en": "Have difficulty doing sth",
        "pos": "struct.",
        "ipa": "/hæv ˈdɪf.ɪ.kəl.ti ˈduː.ɪŋ/",
        "vi": "Gặp khó khăn trong việc làm gì",
        "ex": ""
    },
    {
        "num": 248,
        "en": "Available resources",
        "pos": "n.",
        "ipa": "/əˈveɪ.lə.bəl rɪˈzɔː.sɪz/",
        "vi": "Nguồn tài nguyên có sẵn",
        "ex": ""
    },
    {
        "num": 249,
        "en": "Extremely high level of poverty",
        "pos": "phr.",
        "ipa": "/ɪkˈstriːm.li haɪ ˈlev.əl əv ˈpɒv.ə.ti/",
        "vi": "Mức độ nghèo đói cao",
        "ex": ""
    },
    {
        "num": 250,
        "en": "Population density",
        "pos": "n.",
        "ipa": "/ˌpɒp.jəˈleɪ.ʃən ˈden.sɪ.ti/",
        "vi": "Mật độ dân số",
        "ex": ""
    },
    {
        "num": 251,
        "en": "Contribute to sth",
        "pos": "phr. v.",
        "ipa": "/kənˈtrɪb.juːt tə/",
        "vi": "Góp phần gây ra / dẫn đến điều gì",
        "ex": ""
    },
    {
        "num": 252,
        "en": "Cultural norms",
        "pos": "n.",
        "ipa": "/ˈkʌl.tʃər.əl nɔːmz/",
        "vi": "Các chuẩn mực văn hóa",
        "ex": ""
    },
    {
        "num": 253,
        "en": "High standards of living",
        "pos": "n.",
        "ipa": "/haɪ ˈstæn.dədz əv ˈlɪv.ɪŋ/",
        "vi": "Mức sống cao",
        "ex": ""
    },
    {
        "num": 254,
        "en": "At the other end of the spectrum",
        "pos": "idiom",
        "ipa": "/ət ði ˈʌð.ər end əv ðə ˈspek.trəm/",
        "vi": "Ở một thái cực ngược lại hoàn toàn",
        "ex": ""
    },
    {
        "num": 255,
        "en": "Commercial fertilizers",
        "pos": "n.",
        "ipa": "/kəˈmɜː.ʃəl ˈfɜː.tɪ.laɪ.zəz/",
        "vi": "Phân bón thương mại / công nghiệp",
        "ex": ""
    },
    {
        "num": 256,
        "en": "Large-scale irrigation",
        "pos": "n.",
        "ipa": "/ˌlɑːdʒˈskeɪl ˌɪr.ɪˈɡeɪ.ʃən/",
        "vi": "Hệ thống tưới tiêu / thủy lợi quy mô lớn",
        "ex": ""
    },
    {
        "num": 257,
        "en": "Level of poverty",
        "pos": "n.",
        "ipa": "/ˈlev.əl əv ˈpɒv.ə.ti/",
        "vi": "Mức độ nghèo đói",
        "ex": ""
    },
    {
        "num": 258,
        "en": "Agricultural productivity",
        "pos": "n.",
        "ipa": "/ˌæɡ.rɪˈkʌl.tʃər.əl ˌprɒd.ʌkˈtɪv.ə.ti/",
        "vi": "Năng suất nông nghiệp",
        "ex": ""
    },
    {
        "num": 259,
        "en": "Labor-intensive",
        "pos": "adj.",
        "ipa": "/ˌleɪ.bər.ɪnˈten.sɪv/",
        "vi": "Đòi hỏi nhiều sức lao động",
        "ex": ""
    },
    {
        "num": 260,
        "en": "Subsistence activities",
        "pos": "n.",
        "ipa": "/səbˈsɪs.təns ækˈtɪv.ɪ.tiz/",
        "vi": "Hoạt động tự cung tự cấp",
        "ex": ""
    },
    {
        "num": 261,
        "en": "Subsistence farming",
        "pos": "n.",
        "ipa": "/səbˈsɪs.təns ˈfɑː.mɪŋ/",
        "vi": "Canh tác tự cung tự cấp",
        "ex": ""
    },
    {
        "num": 262,
        "en": "Overpopulation",
        "pos": "n.",
        "ipa": "/ˌəʊ.vəˌpɒp.jəˈleɪ.ʃən/",
        "vi": "Sự bùng nổ dân số",
        "ex": ""
    },
    {
        "num": 263,
        "en": "Overcrowding",
        "pos": "n.",
        "ipa": "/ˌəʊ.vəˈkraʊ.dɪŋ/",
        "vi": "Sự đông đúc quá mức",
        "ex": ""
    },
    {
        "num": 264,
        "en": "Underpopulation",
        "pos": "n.",
        "ipa": "/ˌʌn.dəˌpɒp.jəˈleɪ.ʃən/",
        "vi": "Sự thiếu hụt dân số",
        "ex": ""
    },
    {
        "num": 265,
        "en": "Excessively",
        "pos": "adv.",
        "ipa": "/ɪkˈses.ɪv.li/",
        "vi": "Một cách thái quá, quá mức",
        "ex": ""
    },
    {
        "num": 266,
        "en": "Extremely",
        "pos": "adv.",
        "ipa": "/ɪkˈstriːm.li/",
        "vi": "Vô cùng, tột độ",
        "ex": ""
    },
    {
        "num": 267,
        "en": "Overly",
        "pos": "adv.",
        "ipa": "/ˈəʊ.vəl.i/",
        "vi": "Quá mức",
        "ex": ""
    },
    {
        "num": 268,
        "en": "Heavily",
        "pos": "adv.",
        "ipa": "/ˈhev.əl.i/",
        "vi": "Nặng nề, rất nhiều",
        "ex": ""
    },
    {
        "num": 269,
        "en": "Moderately",
        "pos": "adv.",
        "ipa": "/ˈmɒd.ər.ət.li/",
        "vi": "Một cách vừa phải",
        "ex": ""
    },
    {
        "num": 270,
        "en": "Reasonably",
        "pos": "adv.",
        "ipa": "/ˈriː.zən.ə.bli/",
        "vi": "Một cách hợp lý",
        "ex": ""
    },
    {
        "num": 271,
        "en": "Infertile",
        "pos": "adj.",
        "ipa": "/ɪnˈfɜː.taɪl/",
        "vi": "Khô cằn, bạc màu, vô sinh",
        "ex": ""
    },
    {
        "num": 272,
        "en": "Barren",
        "pos": "adj.",
        "ipa": "/ˈbær.ən/",
        "vi": "Khô cằn, cằn cỗi",
        "ex": ""
    },
    {
        "num": 273,
        "en": "Unproductive",
        "pos": "adj.",
        "ipa": "/ˌʌn.prəˈdʌk.tɪv/",
        "vi": "Không sinh lợi, không năng suất",
        "ex": ""
    },
    {
        "num": 274,
        "en": "Fertile",
        "pos": "adj.",
        "ipa": "/ˈfɜː.taɪl/",
        "vi": "Màu mỡ, phì nhiêu",
        "ex": ""
    },
    {
        "num": 275,
        "en": "Fruitful",
        "pos": "adj.",
        "ipa": "/ˈfruːt.fəl/",
        "vi": "Sai quả, màu mỡ, sinh lợi",
        "ex": ""
    },
    {
        "num": 276,
        "en": "Productive",
        "pos": "adj.",
        "ipa": "/prəˈdʌk.tɪv/",
        "vi": "Năng suất, hữu ích",
        "ex": ""
    },
    {
        "num": 277,
        "en": "Asset",
        "pos": "n.",
        "ipa": "/ˈæs.et/",
        "vi": "Tài sản, vốn quý, lợi thế",
        "ex": ""
    },
    {
        "num": 278,
        "en": "Benefit",
        "pos": "n.",
        "ipa": "/ˈben.ɪ.fɪt/",
        "vi": "Lợi ích",
        "ex": ""
    },
    {
        "num": 279,
        "en": "Advantage",
        "pos": "n.",
        "ipa": "/ədˈvɑːn.tɪdʒ/",
        "vi": "Lợi thế",
        "ex": ""
    },
    {
        "num": 280,
        "en": "Resource",
        "pos": "n.",
        "ipa": "/rɪˈzɔːs/",
        "vi": "Tài nguyên, nguồn lực",
        "ex": ""
    },
    {
        "num": 281,
        "en": "Liability",
        "pos": "n.",
        "ipa": "/ˌlaɪ.əˈbɪl.ə.ti/",
        "vi": "Trách nhiệm pháp lý, gánh nặng",
        "ex": ""
    },
    {
        "num": 282,
        "en": "Disadvantage",
        "pos": "n.",
        "ipa": "/ˌdɪs.ədˈvɑːn.tɪdʒ/",
        "vi": "Sự bất lợi",
        "ex": ""
    },
    {
        "num": 283,
        "en": "Subsistence",
        "pos": "n.",
        "ipa": "/səbˈsɪs.təns/",
        "vi": "Sự tự cung tự cấp, sinh kế",
        "ex": ""
    },
    {
        "num": 284,
        "en": "Survival",
        "pos": "n.",
        "ipa": "/səˈvaɪ.vəl/",
        "vi": "Sự sinh tồn",
        "ex": ""
    },
    {
        "num": 285,
        "en": "Existence",
        "pos": "n.",
        "ipa": "/ɪɡˈzɪs.təns/",
        "vi": "Sự tồn tại",
        "ex": ""
    },
    {
        "num": 286,
        "en": "Manual",
        "pos": "adj.",
        "ipa": "/ˈmæn.ju.əl/",
        "vi": "Làm bằng tay, thủ công",
        "ex": ""
    },
    {
        "num": 287,
        "en": "Physical",
        "pos": "adj.",
        "ipa": "/ˈfɪz.ɪ.kəl/",
        "vi": "(Thuộc về) Thể chất, vật lý",
        "ex": ""
    },
    {
        "num": 288,
        "en": "Hand-operated",
        "pos": "adj.",
        "ipa": "/ˈhændˌɒp.ər.eɪ.tɪd/",
        "vi": "Vận hành bằng tay",
        "ex": ""
    },
    {
        "num": 289,
        "en": "Automated",
        "pos": "adj.",
        "ipa": "/ˈɔː.tə.meɪ.tɪd/",
        "vi": "Tự động hóa",
        "ex": ""
    },
    {
        "num": 290,
        "en": "Mechanized",
        "pos": "adj.",
        "ipa": "/ˈmek.ə.naɪzd/",
        "vi": "Cơ giới hóa",
        "ex": ""
    },
    {
        "num": 291,
        "en": "Abundance",
        "pos": "n.",
        "ipa": "/əˈbʌn.dəns/",
        "vi": "Sự dồi dào, phong phú",
        "ex": ""
    },
    {
        "num": 292,
        "en": "Plenty",
        "pos": "n.",
        "ipa": "/ˈplen.ti/",
        "vi": "Sự sung túc, nhiều",
        "ex": ""
    },
    {
        "num": 293,
        "en": "Wealth",
        "pos": "n.",
        "ipa": "/welθ/",
        "vi": "Sự giàu có, dồi dào",
        "ex": ""
    },
    {
        "num": 294,
        "en": "Copiousness",
        "pos": "n.",
        "ipa": "/ˈkəʊ.pi.əs.nəs/",
        "vi": "Sự phong phú, dư dật",
        "ex": ""
    },
    {
        "num": 295,
        "en": "Scarcity",
        "pos": "n.",
        "ipa": "/ˈskeə.sɪ.ti/",
        "vi": "Sự khan hiếm",
        "ex": ""
    },
    {
        "num": 296,
        "en": "Lack",
        "pos": "n.",
        "ipa": "/læk/",
        "vi": "Sự thiếu hụt",
        "ex": ""
    },
    {
        "num": 297,
        "en": "Shortage",
        "pos": "n.",
        "ipa": "/ˈʃɔː.tɪdʒ/",
        "vi": "Sự thiếu thốn",
        "ex": ""
    },
    {
        "num": 298,
        "en": "Consequence",
        "pos": "n.",
        "ipa": "/ˈkɒn.sɪ.kwəns/",
        "vi": "Hậu quả",
        "ex": ""
    },
    {
        "num": 299,
        "en": "Repercussion",
        "pos": "n.",
        "ipa": "/ˌriː.pəˈkʌʃ.ən/",
        "vi": "Hậu quả (thường xấu)",
        "ex": ""
    },
    {
        "num": 300,
        "en": "Cause",
        "pos": "n.",
        "ipa": "/kɔːz/",
        "vi": "Nguyên nhân",
        "ex": ""
    },
    {
        "num": 301,
        "en": "Condense into liquid",
        "pos": "phr.",
        "ipa": "/kənˈdens ˈɪn.tu ˈlɪk.wɪd/",
        "vi": "Ngưng tụ thành chất lỏng",
        "ex": ""
    },
    {
        "num": 302,
        "en": "Turn into liquid",
        "pos": "phr.",
        "ipa": "/tɜːn ˈɪn.tu ˈlɪk.wɪd/",
        "vi": "Trở thành chất lỏng",
        "ex": ""
    },
    {
        "num": 303,
        "en": "Evaporate",
        "pos": "v.",
        "ipa": "/ɪˈvæp.ər.eɪt/",
        "vi": "Bay hơi",
        "ex": ""
    },
    {
        "num": 304,
        "en": "Lead to",
        "pos": "phr. v.",
        "ipa": "/liːd tuː/",
        "vi": "Dẫn đến",
        "ex": ""
    },
    {
        "num": 305,
        "en": "Bring about",
        "pos": "phr. v.",
        "ipa": "/brɪŋ əˈbaʊt/",
        "vi": "Mang lại, gây ra",
        "ex": ""
    },
    {
        "num": 306,
        "en": "Release heat",
        "pos": "phr.",
        "ipa": "/rɪˈliːs hiːt/",
        "vi": "Tỏa nhiệt, giải phóng nhiệt",
        "ex": ""
    },
    {
        "num": 307,
        "en": "Give off heat",
        "pos": "phr.",
        "ipa": "/ɡɪv ɒf hiːt/",
        "vi": "Tỏa nhiệt",
        "ex": ""
    },
    {
        "num": 308,
        "en": "Emit heat",
        "pos": "phr.",
        "ipa": "/ɪˈmɪt hiːt/",
        "vi": "Phát ra nhiệt",
        "ex": ""
    },
    {
        "num": 309,
        "en": "Absorb heat",
        "pos": "phr.",
        "ipa": "/əbˈzɔːb hiːt/",
        "vi": "Hấp thụ nhiệt",
        "ex": ""
    },
    {
        "num": 310,
        "en": "Speed up",
        "pos": "phr. v.",
        "ipa": "/spiːd ʌp/",
        "vi": "Tăng tốc",
        "ex": ""
    },
    {
        "num": 311,
        "en": "Accelerate",
        "pos": "v.",
        "ipa": "/əkˈsel.ə.reɪt/",
        "vi": "Thúc đẩy, tăng tốc",
        "ex": ""
    },
    {
        "num": 312,
        "en": "Quicken",
        "pos": "v.",
        "ipa": "/ˈkwɪk.ən/",
        "vi": "Làm nhanh hơn",
        "ex": ""
    },
    {
        "num": 313,
        "en": "Slow down",
        "pos": "phr. v.",
        "ipa": "/sləʊ daʊn/",
        "vi": "Chậm lại",
        "ex": ""
    },
    {
        "num": 314,
        "en": "Decelerate",
        "pos": "v.",
        "ipa": "/ˌdiːˈsel.ə.reɪt/",
        "vi": "Giảm tốc độ",
        "ex": ""
    },
    {
        "num": 315,
        "en": "Qualify as",
        "pos": "phr. v.",
        "ipa": "/ˈkwɒl.ɪ.faɪ æz/",
        "vi": "Đủ điều kiện là, được coi là",
        "ex": ""
    },
    {
        "num": 316,
        "en": "Be categorized as",
        "pos": "phr.",
        "ipa": "/bi ˈkæt.ə.ɡər.aɪzd æz/",
        "vi": "Được phân loại là",
        "ex": ""
    },
    {
        "num": 317,
        "en": "Count as",
        "pos": "phr. v.",
        "ipa": "/kaʊnt æz/",
        "vi": "Được tính là",
        "ex": ""
    },
    {
        "num": 318,
        "en": "Weather professionals",
        "pos": "n.",
        "ipa": "/ˈweð.ə prəˈfeʃ.ən.əlz/",
        "vi": "Chuyên gia thời tiết",
        "ex": ""
    },
    {
        "num": 319,
        "en": "Weather researchers",
        "pos": "n.",
        "ipa": "/ˈweð.ə rɪˈsɜː.tʃəz/",
        "vi": "Nhà nghiên cứu thời tiết",
        "ex": ""
    },
    {
        "num": 320,
        "en": "Meteorologists",
        "pos": "n.",
        "ipa": "/ˌmiː.ti.əˈrɒl.ə.dʒɪsts/",
        "vi": "Nhà khí tượng học",
        "ex": ""
    },
    {
        "num": 321,
        "en": "Be to blame for something",
        "pos": "idiom",
        "ipa": "/bi tə bleɪm fɔː ˈsʌm.θɪŋ/",
        "vi": "Là nguyên nhân gây ra điều gì, chịu trách nhiệm cho",
        "ex": ""
    },
    {
        "num": 322,
        "en": "Be responsible for",
        "pos": "phr.",
        "ipa": "/bi rɪˈspɒn.sə.bəl fɔː/",
        "vi": "Chịu trách nhiệm cho",
        "ex": ""
    },
    {
        "num": 323,
        "en": "Be the cause of",
        "pos": "phr.",
        "ipa": "/bi ðə kɔːz əv/",
        "vi": "Là nguyên nhân của",
        "ex": ""
    },
    {
        "num": 324,
        "en": "Forecast accurately",
        "pos": "phr.",
        "ipa": "/ˈfɔː.kɑːst ˈæk.jə.rət.li/",
        "vi": "Dự báo một cách chính xác",
        "ex": ""
    },
    {
        "num": 325,
        "en": "Predict precisely",
        "pos": "phr.",
        "ipa": "/prɪˈdɪkt prɪˈsaɪs.li/",
        "vi": "Dự đoán chính xác",
        "ex": ""
    },
    {
        "num": 326,
        "en": "Take a high death toll",
        "pos": "idiom",
        "ipa": "/teɪk ə haɪ deθ təʊl/",
        "vi": "Gây ra tỷ lệ tử vong cao",
        "ex": ""
    },
    {
        "num": 327,
        "en": "Cause massive casualties",
        "pos": "phr.",
        "ipa": "/kɔːz ˈmæs.ɪv ˈkæʒ.u.əl.tiz/",
        "vi": "Gây ra thương vong lớn",
        "ex": ""
    },
    {
        "num": 328,
        "en": "On the way",
        "pos": "idiom",
        "ipa": "/ɒn ðə weɪ/",
        "vi": "Đang đến, đang trên đường tới",
        "ex": ""
    },
    {
        "num": 329,
        "en": "Approaching",
        "pos": "adj.",
        "ipa": "/əˈprəʊ.tʃɪŋ/",
        "vi": "Đang đến gần",
        "ex": ""
    },
    {
        "num": 330,
        "en": "Coming",
        "pos": "adj.",
        "ipa": "/ˈkʌm.ɪŋ/",
        "vi": "Đang tới",
        "ex": ""
    },
    {
        "num": 331,
        "en": "Sweet-sounding names",
        "pos": "n.",
        "ipa": "/swiːt ˈsaʊn.dɪŋ neɪmz/",
        "vi": "Những cái tên nghe ngọt ngào/êm tai",
        "ex": ""
    },
    {
        "num": 332,
        "en": "Rotating storms",
        "pos": "n.",
        "ipa": "/rəʊˈteɪ.tɪŋ stɔːmz/",
        "vi": "Bão xoáy",
        "ex": ""
    },
    {
        "num": 333,
        "en": "Blow at speeds of",
        "pos": "phr.",
        "ipa": "/bləʊ ət spiːdz əv/",
        "vi": "Thổi với tốc độ...",
        "ex": ""
    },
    {
        "num": 334,
        "en": "Long-term forecasts",
        "pos": "n.",
        "ipa": "/ˌlɒŋˈtɜːm ˈfɔː.kɑːsts/",
        "vi": "Dự báo dài hạn",
        "ex": ""
    },
    {
        "num": 335,
        "en": "Computer assistance",
        "pos": "n.",
        "ipa": "/kəmˈpjuː.tər əˈsɪs.təns/",
        "vi": "Sự hỗ trợ của máy tính",
        "ex": ""
    },
    {
        "num": 336,
        "en": "Push seawater inland",
        "pos": "phr.",
        "ipa": "/pʊʃ ˈsiːˌwɔː.tər ˈɪn.lænd/",
        "vi": "Đẩy nước biển vào sâu trong đất liền",
        "ex": ""
    },
    {
        "num": 337,
        "en": "Storm surge",
        "pos": "n.",
        "ipa": "/ˈstɔːm ˌsɜːdʒ/",
        "vi": "Nước biển dâng do bão",
        "ex": ""
    },
    {
        "num": 338,
        "en": "Push against",
        "pos": "phr. v.",
        "ipa": "/pʊʃ əˈɡeɪnst/",
        "vi": "Đẩy vào, tác động lực vào",
        "ex": ""
    },
    {
        "num": 339,
        "en": "Draw air upward",
        "pos": "phr.",
        "ipa": "/drɔː eər ˈʌp.wəd/",
        "vi": "Kéo/Hút không khí bay lên",
        "ex": ""
    },
    {
        "num": 340,
        "en": "Create a cycle",
        "pos": "phr.",
        "ipa": "/kriˈeɪt ə ˈsaɪ.kəl/",
        "vi": "Tạo ra một chu kỳ / vòng tuần hoàn",
        "ex": ""
    },
    {
        "num": 341,
        "en": "The northern hemispheres",
        "pos": "n.",
        "ipa": "/ðə ˈnɔː.ðən ˈhem.ɪ.sfɪəz/",
        "vi": "Bán cầu Bắc",
        "ex": ""
    },
    {
        "num": 342,
        "en": "The southern hemispheres",
        "pos": "n.",
        "ipa": "/ðə ˈsʌð.ən ˈhem.ɪ.sfɪəz/",
        "vi": "Bán cầu Nam",
        "ex": ""
    },
    {
        "num": 343,
        "en": "Water vapor",
        "pos": "n.",
        "ipa": "/ˈwɔː.tə ˈveɪ.pə/",
        "vi": "Hơi nước",
        "ex": ""
    },
    {
        "num": 344,
        "en": "Humid",
        "pos": "adj.",
        "ipa": "/ˈhjuː.mɪd/",
        "vi": "Ẩm ướt (có nhiều hơi nước)",
        "ex": ""
    },
    {
        "num": 345,
        "en": "Moist",
        "pos": "adj.",
        "ipa": "/mɔɪst/",
        "vi": "Ẩm ướt",
        "ex": ""
    },
    {
        "num": 346,
        "en": "Damp",
        "pos": "adj.",
        "ipa": "/dæmp/",
        "vi": "Ẩm thấp, ẩm ướt",
        "ex": ""
    },
    {
        "num": 347,
        "en": "Muggy",
        "pos": "adj.",
        "ipa": "/ˈmʌɡ.i/",
        "vi": "Nồm ẩm, oi bức",
        "ex": ""
    },
    {
        "num": 348,
        "en": "Dry",
        "pos": "adj.",
        "ipa": "/draɪ/",
        "vi": "Khô hạn",
        "ex": ""
    },
    {
        "num": 349,
        "en": "Arid",
        "pos": "adj.",
        "ipa": "/ˈær.ɪd/",
        "vi": "Khô cằn",
        "ex": ""
    },
    {
        "num": 350,
        "en": "Condense",
        "pos": "v.",
        "ipa": "/kənˈdens/",
        "vi": "Ngưng tụ, đặc lại",
        "ex": ""
    },
    {
        "num": 351,
        "en": "Precipitate",
        "pos": "v.",
        "ipa": "/prɪˈsɪp.ɪ.teɪt/",
        "vi": "Kết tủa, làm ngưng tụ",
        "ex": ""
    },
    {
        "num": 352,
        "en": "Thicken",
        "pos": "v.",
        "ipa": "/ˈθɪk.ən/",
        "vi": "Làm đặc lại",
        "ex": ""
    },
    {
        "num": 353,
        "en": "Vaporize",
        "pos": "v.",
        "ipa": "/ˈveɪ.pər.aɪz/",
        "vi": "Bốc hơi, hóa hơi",
        "ex": ""
    },
    {
        "num": 354,
        "en": "Equator",
        "pos": "n.",
        "ipa": "/ɪˈkweɪ.tə/",
        "vi": "Đường xích đạo",
        "ex": ""
    },
    {
        "num": 355,
        "en": "Surge",
        "pos": "n., v.",
        "ipa": "/sɜːdʒ/",
        "vi": "Sự dâng lên, trào lên đột ngột",
        "ex": ""
    },
    {
        "num": 356,
        "en": "Rush",
        "pos": "n., v.",
        "ipa": "/rʌʃ/",
        "vi": "Sự xô đẩy, vội vã",
        "ex": ""
    },
    {
        "num": 357,
        "en": "Gush",
        "pos": "n., v.",
        "ipa": "/ɡʌʃ/",
        "vi": "Phun trào, tuôn ra",
        "ex": ""
    },
    {
        "num": 358,
        "en": "Rise",
        "pos": "n., v.",
        "ipa": "/raɪz/",
        "vi": "Tăng lên, dâng lên",
        "ex": ""
    },
    {
        "num": 359,
        "en": "Upsurge",
        "pos": "n.",
        "ipa": "/ˈʌp.sɜːdʒ/",
        "vi": "Sự bùng nổ, dâng trào",
        "ex": ""
    },
    {
        "num": 360,
        "en": "Decrease",
        "pos": "n., v.",
        "ipa": "/dɪˈkriːs/",
        "vi": "Sự suy giảm, giảm bớt",
        "ex": ""
    },
    {
        "num": 361,
        "en": "Drop",
        "pos": "n., v.",
        "ipa": "/drɒp/",
        "vi": "Sự tụt giảm, rơi",
        "ex": ""
    },
    {
        "num": 362,
        "en": "Accurately",
        "pos": "adv.",
        "ipa": "/ˈæk.jə.rət.li/",
        "vi": "Một cách chính xác",
        "ex": ""
    },
    {
        "num": 363,
        "en": "Precisely",
        "pos": "adv.",
        "ipa": "/prɪˈsaɪs.li/",
        "vi": "Một cách chính xác, tỉ mỉ",
        "ex": ""
    },
    {
        "num": 364,
        "en": "Exactly",
        "pos": "adv.",
        "ipa": "/ɪɡˈzækt.li/",
        "vi": "Chính xác",
        "ex": ""
    },
    {
        "num": 365,
        "en": "Correctly",
        "pos": "adv.",
        "ipa": "/kəˈrekt.li/",
        "vi": "Một cách đúng đắn",
        "ex": ""
    },
    {
        "num": 366,
        "en": "Inaccurately",
        "pos": "adv.",
        "ipa": "/ɪnˈæk.jə.rət.li/",
        "vi": "Không chính xác",
        "ex": ""
    },
    {
        "num": 367,
        "en": "Vaguely",
        "pos": "adv.",
        "ipa": "/ˈveɪɡ.li/",
        "vi": "Mơ hồ, không rõ ràng",
        "ex": ""
    },
    {
        "num": 368,
        "en": "Evacuate",
        "pos": "v.",
        "ipa": "/ɪˈvæk.ju.eɪt/",
        "vi": "Sơ tán, di tản",
        "ex": ""
    },
    {
        "num": 369,
        "en": "Clear out",
        "pos": "phr. v.",
        "ipa": "/klɪər aʊt/",
        "vi": "Dọn sạch, rời đi",
        "ex": ""
    },
    {
        "num": 370,
        "en": "Empty",
        "pos": "v.",
        "ipa": "/ˈemp.ti/",
        "vi": "Làm trống",
        "ex": ""
    },
    {
        "num": 371,
        "en": "Move out",
        "pos": "phr. v.",
        "ipa": "/muːv aʊt/",
        "vi": "Dọn ra ngoài, chuyển đi",
        "ex": ""
    },
    {
        "num": 372,
        "en": "Remain",
        "pos": "v.",
        "ipa": "/rɪˈmeɪn/",
        "vi": "Còn lại, ở lại",
        "ex": ""
    },
    {
        "num": 373,
        "en": "Stay",
        "pos": "v.",
        "ipa": "/steɪ/",
        "vi": "Ở lại",
        "ex": ""
    },
    {
        "num": 374,
        "en": "Assistance",
        "pos": "n.",
        "ipa": "/əˈsɪs.təns/",
        "vi": "Sự giúp đỡ, hỗ trợ",
        "ex": ""
    },
    {
        "num": 375,
        "en": "Help",
        "pos": "n.",
        "ipa": "/help/",
        "vi": "Sự giúp đỡ",
        "ex": ""
    },
    {
        "num": 376,
        "en": "Aid",
        "pos": "n.",
        "ipa": "/eɪd/",
        "vi": "Viện trợ, sự giúp đỡ",
        "ex": ""
    },
    {
        "num": 377,
        "en": "Support",
        "pos": "n.",
        "ipa": "/səˈpɔːt/",
        "vi": "Sự ủng hộ, hỗ trợ",
        "ex": ""
    },
    {
        "num": 378,
        "en": "Hindrance",
        "pos": "n.",
        "ipa": "/ˈhɪn.drəns/",
        "vi": "Sự cản trở",
        "ex": ""
    },
    {
        "num": 379,
        "en": "Obstruction",
        "pos": "n.",
        "ipa": "/əbˈstrʌk.ʃən/",
        "vi": "Sự ách tắc, cản trở",
        "ex": ""
    },
    {
        "num": 380,
        "en": "Strength",
        "pos": "n.",
        "ipa": "/streŋθ/",
        "vi": "Cường độ, sức mạnh",
        "ex": ""
    },
    {
        "num": 381,
        "en": "Power",
        "pos": "n.",
        "ipa": "/ˈpaʊ.ə/",
        "vi": "Sức mạnh, năng lượng",
        "ex": ""
    },
    {
        "num": 382,
        "en": "Intensity",
        "pos": "n.",
        "ipa": "/ɪnˈten.sə.ti/",
        "vi": "Cường độ",
        "ex": ""
    },
    {
        "num": 383,
        "en": "Force",
        "pos": "n.",
        "ipa": "/fɔːs/",
        "vi": "Lực lượng, sức mạnh",
        "ex": ""
    },
    {
        "num": 384,
        "en": "Frailty",
        "pos": "n.",
        "ipa": "/ˈfreɪl.ti/",
        "vi": "Sự yếu ớt, mỏng manh",
        "ex": ""
    },
    {
        "num": 385,
        "en": "Combination",
        "pos": "n.",
        "ipa": "/ˌkɒm.bɪˈneɪ.ʃən/",
        "vi": "Sự kết hợp",
        "ex": ""
    },
    {
        "num": 386,
        "en": "Mixture",
        "pos": "n.",
        "ipa": "/ˈmɪks.tʃə/",
        "vi": "Hỗn hợp",
        "ex": ""
    },
    {
        "num": 387,
        "en": "Blend",
        "pos": "n.",
        "ipa": "/blend/",
        "vi": "Sự pha trộn",
        "ex": ""
    },
    {
        "num": 388,
        "en": "Synthesis",
        "pos": "n.",
        "ipa": "/ˈsɪn.θə.sɪs/",
        "vi": "Sự tổng hợp",
        "ex": ""
    },
    {
        "num": 389,
        "en": "Separation",
        "pos": "n.",
        "ipa": "/ˌsep.ərˈeɪ.ʃən/",
        "vi": "Sự chia cắt, phân tách",
        "ex": ""
    },
    {
        "num": 390,
        "en": "Division",
        "pos": "n.",
        "ipa": "/dɪˈvɪʒ.ən/",
        "vi": "Sự phân chia",
        "ex": ""
    },
    {
        "num": 391,
        "en": "Gain weight",
        "pos": "phr.",
        "ipa": "/ɡeɪn weɪt/",
        "vi": "Tăng cân",
        "ex": ""
    },
    {
        "num": 392,
        "en": "Put on weight",
        "pos": "phr.",
        "ipa": "/pʊt ɒn weɪt/",
        "vi": "Tăng cân",
        "ex": ""
    },
    {
        "num": 393,
        "en": "Lose weight",
        "pos": "phr.",
        "ipa": "/luːz weɪt/",
        "vi": "Giảm cân",
        "ex": ""
    },
    {
        "num": 394,
        "en": "Do the trick",
        "pos": "idiom",
        "ipa": "/duː ðə trɪk/",
        "vi": "Mang lại hiệu quả như mong muốn, giải quyết được vấn đề",
        "ex": ""
    },
    {
        "num": 395,
        "en": "Work",
        "pos": "v.",
        "ipa": "/wɜːk/",
        "vi": "Có tác dụng, mang lại hiệu quả",
        "ex": ""
    },
    {
        "num": 396,
        "en": "Be effective",
        "pos": "phr.",
        "ipa": "/bi ɪˈfek.tɪv/",
        "vi": "Có hiệu quả",
        "ex": ""
    },
    {
        "num": 397,
        "en": "Succeed",
        "pos": "v.",
        "ipa": "/səkˈsiːd/",
        "vi": "Thành công",
        "ex": ""
    },
    {
        "num": 398,
        "en": "Fail",
        "pos": "v.",
        "ipa": "/feɪl/",
        "vi": "Thất bại",
        "ex": ""
    },
    {
        "num": 399,
        "en": "Be ineffective",
        "pos": "phr.",
        "ipa": "/bi ˌɪn.ɪˈfek.tɪv/",
        "vi": "Không có hiệu quả",
        "ex": ""
    },
    {
        "num": 400,
        "en": "Be at a new high",
        "pos": "phr.",
        "ipa": "/bi ət ə njuː haɪ/",
        "vi": "Đạt đến một mức cao kỷ lục mới",
        "ex": ""
    },
    {
        "num": 401,
        "en": "Reach a peak",
        "pos": "phr.",
        "ipa": "/riːtʃ ə piːk/",
        "vi": "Đạt đến đỉnh điểm",
        "ex": ""
    },
    {
        "num": 402,
        "en": "Hit a record high",
        "pos": "phr.",
        "ipa": "/hɪt ə ˈrek.ɔːd haɪ/",
        "vi": "Đạt mức cao kỷ lục",
        "ex": ""
    },
    {
        "num": 403,
        "en": "A solution to a problem",
        "pos": "n.",
        "ipa": "/ə səˈluː.ʃən tu ə ˈprɒb.ləm/",
        "vi": "Giải pháp cho một vấn đề",
        "ex": ""
    },
    {
        "num": 404,
        "en": "An answer to",
        "pos": "phr.",
        "ipa": "/ən ˈɑːn.sə tuː/",
        "vi": "Lời giải đáp cho",
        "ex": ""
    },
    {
        "num": 405,
        "en": "A remedy for",
        "pos": "phr.",
        "ipa": "/ə ˈrem.ə.di fɔː/",
        "vi": "Phương thuốc / giải pháp cho",
        "ex": ""
    },
    {
        "num": 406,
        "en": "See sth as sth",
        "pos": "phr.",
        "ipa": "/siː ˈsʌm.θɪŋ æz ˈsʌm.θɪŋ/",
        "vi": "Coi cái gì như là...",
        "ex": ""
    },
    {
        "num": 407,
        "en": "Regard sth as",
        "pos": "phr.",
        "ipa": "/rɪˈɡɑːd ˈsʌm.θɪŋ æz/",
        "vi": "Xem cái gì như là",
        "ex": ""
    },
    {
        "num": 408,
        "en": "Consider sth to be",
        "pos": "phr.",
        "ipa": "/kənˈsɪd.ə ˈsʌm.θɪŋ tə bi/",
        "vi": "Cân nhắc/coi cái gì là",
        "ex": ""
    },
    {
        "num": 409,
        "en": "View sth as",
        "pos": "phr.",
        "ipa": "/vjuː ˈsʌm.θɪŋ æz/",
        "vi": "Nhìn nhận cái gì như là",
        "ex": ""
    },
    {
        "num": 410,
        "en": "Permanent weight loss",
        "pos": "n.",
        "ipa": "/ˈpɜː.mə.nənt weɪt lɒs/",
        "vi": "Việc giảm cân vĩnh viễn / lâu dài",
        "ex": ""
    },
    {
        "num": 411,
        "en": "Temporary weight loss",
        "pos": "n.",
        "ipa": "/ˈtem.pər.ər.i weɪt lɒs/",
        "vi": "Việc giảm cân tạm thời",
        "ex": ""
    },
    {
        "num": 412,
        "en": "Initial results",
        "pos": "n.",
        "ipa": "/ɪˈnɪʃ.əl rɪˈzʌlts/",
        "vi": "Những kết quả ban đầu",
        "ex": ""
    },
    {
        "num": 413,
        "en": "Final results",
        "pos": "n.",
        "ipa": "/ˈfaɪ.nəl rɪˈzʌlts/",
        "vi": "Kết quả cuối cùng",
        "ex": ""
    },
    {
        "num": 414,
        "en": "Long-term results",
        "pos": "n.",
        "ipa": "/ˌlɒŋˈtɜːm rɪˈzʌlts/",
        "vi": "Kết quả lâu dài",
        "ex": ""
    },
    {
        "num": 415,
        "en": "Be fed up with sth",
        "pos": "idiom",
        "ipa": "/bi fed ʌp wɪð/",
        "vi": "Chán ngấy với việc gì",
        "ex": ""
    },
    {
        "num": 416,
        "en": "Be sick of",
        "pos": "phr.",
        "ipa": "/bi sɪk əv/",
        "vi": "Chán ngán",
        "ex": ""
    },
    {
        "num": 417,
        "en": "Be tired of",
        "pos": "phr.",
        "ipa": "/bi ˈtaɪəd əv/",
        "vi": "Mệt mỏi với",
        "ex": ""
    },
    {
        "num": 418,
        "en": "Have had enough of",
        "pos": "idiom",
        "ipa": "/hæv hæd ɪˈnʌf əv/",
        "vi": "Đã chịu đựng đủ, chán ngấy",
        "ex": ""
    },
    {
        "num": 419,
        "en": "Turn to",
        "pos": "phr. v.",
        "ipa": "/tɜːn tuː/",
        "vi": "Tìm đến (ai/cái gì để được giúp đỡ)",
        "ex": ""
    },
    {
        "num": 420,
        "en": "Resort to",
        "pos": "phr. v.",
        "ipa": "/rɪˈzɔːt tuː/",
        "vi": "Phải dùng đến, viện đến",
        "ex": ""
    },
    {
        "num": 421,
        "en": "Dietary changes",
        "pos": "n.",
        "ipa": "/ˈdaɪ.ə.tər.i ˈtʃeɪn.dʒɪz/",
        "vi": "Những thay đổi trong chế độ ăn uống",
        "ex": ""
    },
    {
        "num": 422,
        "en": "The number of",
        "pos": "phr.",
        "ipa": "/ðə ˈnʌm.bər əv/",
        "vi": "Số lượng... (+ Danh từ số nhiều)",
        "ex": ""
    },
    {
        "num": 423,
        "en": "Fad diets",
        "pos": "n.",
        "ipa": "/fæd ˈdaɪ.əts/",
        "vi": "Chế độ ăn kiêng theo phong trào / trào lưu",
        "ex": ""
    },
    {
        "num": 424,
        "en": "Frantically search for",
        "pos": "phr.",
        "ipa": "/ˈfræn.tɪ.kəl.i sɜːtʃ fɔː/",
        "vi": "Tìm kiếm một cách điên cuồng / ráo riết",
        "ex": ""
    },
    {
        "num": 425,
        "en": "Harmless",
        "pos": "adj.",
        "ipa": "/ˈhɑːm.ləs/",
        "vi": "Vô hại, không gây hại",
        "ex": ""
    },
    {
        "num": 426,
        "en": "Safe",
        "pos": "adj.",
        "ipa": "/seɪf/",
        "vi": "An toàn",
        "ex": ""
    },
    {
        "num": 427,
        "en": "Benign",
        "pos": "adj.",
        "ipa": "/bɪˈnaɪn/",
        "vi": "Lành tính, vô hại",
        "ex": ""
    },
    {
        "num": 428,
        "en": "Innocent",
        "pos": "adj.",
        "ipa": "/ˈɪn.ə.sənt/",
        "vi": "Vô tội, ngây thơ, không có hại",
        "ex": ""
    },
    {
        "num": 429,
        "en": "Harmful",
        "pos": "adj.",
        "ipa": "/ˈhɑːm.fəl/",
        "vi": "Có hại",
        "ex": ""
    },
    {
        "num": 430,
        "en": "Dangerous",
        "pos": "adj.",
        "ipa": "/ˈdeɪn.dʒər.əs/",
        "vi": "Nguy hiểm",
        "ex": ""
    },
    {
        "num": 431,
        "en": "Toxic",
        "pos": "adj.",
        "ipa": "/ˈtɒk.sɪk/",
        "vi": "Độc hại",
        "ex": ""
    },
    {
        "num": 432,
        "en": "Permanent",
        "pos": "adj.",
        "ipa": "/ˈpɜː.mə.nənt/",
        "vi": "Vĩnh viễn, lâu dài",
        "ex": ""
    },
    {
        "num": 433,
        "en": "Lasting",
        "pos": "adj.",
        "ipa": "/ˈlɑːs.tɪŋ/",
        "vi": "Lâu dài, bền vững",
        "ex": ""
    },
    {
        "num": 434,
        "en": "Enduring",
        "pos": "adj.",
        "ipa": "/ɪnˈdʒʊə.rɪŋ/",
        "vi": "Lâu dài, dai dẳng",
        "ex": ""
    },
    {
        "num": 435,
        "en": "Forever",
        "pos": "adv., adj.",
        "ipa": "/fəˈrev.ə/",
        "vi": "Mãi mãi",
        "ex": ""
    },
    {
        "num": 436,
        "en": "Temporary",
        "pos": "adj.",
        "ipa": "/ˈtem.pər.ər.i/",
        "vi": "Tạm thời",
        "ex": ""
    },
    {
        "num": 437,
        "en": "Fleeting",
        "pos": "adj.",
        "ipa": "/ˈfliː.tɪŋ/",
        "vi": "Thoáng qua, lướt qua nhanh",
        "ex": ""
    },
    {
        "num": 438,
        "en": "Brief",
        "pos": "adj.",
        "ipa": "/briːf/",
        "vi": "Ngắn gọn, chốc lát",
        "ex": ""
    },
    {
        "num": 439,
        "en": "Estimate",
        "pos": "v.",
        "ipa": "/ˈes.tɪ.meɪt/",
        "vi": "Ước tính, phỏng đoán",
        "ex": ""
    },
    {
        "num": 440,
        "en": "Guess",
        "pos": "v.",
        "ipa": "/ɡes/",
        "vi": "Đoán",
        "ex": ""
    },
    {
        "num": 441,
        "en": "Calculate roughly",
        "pos": "phr.",
        "ipa": "/ˈkæl.kjə.leɪt ˈrʌf.li/",
        "vi": "Tính toán sơ bộ",
        "ex": ""
    },
    {
        "num": 442,
        "en": "Assess",
        "pos": "v.",
        "ipa": "/əˈses/",
        "vi": "Đánh giá",
        "ex": ""
    },
    {
        "num": 443,
        "en": "Measure exactly",
        "pos": "phr.",
        "ipa": "/ˈmeʒ.ər ɪɡˈzækt.li/",
        "vi": "Đo đạc chính xác",
        "ex": ""
    },
    {
        "num": 444,
        "en": "Reckless",
        "pos": "adj.",
        "ipa": "/ˈrek.ləs/",
        "vi": "Liều lĩnh, thiếu thận trọng",
        "ex": ""
    },
    {
        "num": 445,
        "en": "Careless",
        "pos": "adj.",
        "ipa": "/ˈkeə.ləs/",
        "vi": "Bất cẩn",
        "ex": ""
    },
    {
        "num": 446,
        "en": "Rash",
        "pos": "adj.",
        "ipa": "/ræʃ/",
        "vi": "Hấp tấp, thiếu suy nghĩ",
        "ex": ""
    },
    {
        "num": 447,
        "en": "Irresponsible",
        "pos": "adj.",
        "ipa": "/ˌɪr.ɪˈspɒn.sə.bəl/",
        "vi": "Vô trách nhiệm",
        "ex": ""
    },
    {
        "num": 448,
        "en": "Careful",
        "pos": "adj.",
        "ipa": "/ˈkeə.fəl/",
        "vi": "Cẩn thận",
        "ex": ""
    },
    {
        "num": 449,
        "en": "Cautious",
        "pos": "adj.",
        "ipa": "/ˈkɔː.ʃəs/",
        "vi": "Thận trọng",
        "ex": ""
    },
    {
        "num": 450,
        "en": "Prudent",
        "pos": "adj.",
        "ipa": "/ˈpruː.dənt/",
        "vi": "Khôn ngoan, cẩn trọng",
        "ex": ""
    },
    {
        "num": 451,
        "en": "Moderate",
        "pos": "adj.",
        "ipa": "/ˈmɒd.ər.ət/",
        "vi": "Điều độ, có chừng mực",
        "ex": ""
    },
    {
        "num": 452,
        "en": "Reasonable",
        "pos": "adj.",
        "ipa": "/ˈriː.zən.ə.bəl/",
        "vi": "Hợp lý, vừa phải",
        "ex": ""
    },
    {
        "num": 453,
        "en": "Temperate",
        "pos": "adj.",
        "ipa": "/ˈtem.pər.ət/",
        "vi": "Ôn hòa, có chừng mực",
        "ex": ""
    },
    {
        "num": 454,
        "en": "Balanced",
        "pos": "adj.",
        "ipa": "/ˈbæl.ənst/",
        "vi": "Cân bằng",
        "ex": ""
    },
    {
        "num": 455,
        "en": "Extreme",
        "pos": "adj.",
        "ipa": "/ɪkˈstriːm/",
        "vi": "Cực đoan, tột độ",
        "ex": ""
    },
    {
        "num": 456,
        "en": "Excessive",
        "pos": "adj.",
        "ipa": "/ɪkˈses.ɪv/",
        "vi": "Quá mức, thái quá",
        "ex": ""
    },
    {
        "num": 457,
        "en": "Immoderate",
        "pos": "adj.",
        "ipa": "/ɪˈmɒd.ər.ət/",
        "vi": "Không điều độ, thái quá",
        "ex": ""
    },
    {
        "num": 458,
        "en": "Severe",
        "pos": "adj.",
        "ipa": "/sɪˈvɪə/",
        "vi": "Nghiêm trọng, dữ dội",
        "ex": ""
    },
    {
        "num": 459,
        "en": "Radical",
        "pos": "adj.",
        "ipa": "/ˈræd.ɪ.kəl/",
        "vi": "Căn bản, quyết liệt (triệt để)",
        "ex": ""
    },
    {
        "num": 460,
        "en": "Mild",
        "pos": "adj.",
        "ipa": "/maɪld/",
        "vi": "Nhẹ nhàng, ôn hòa",
        "ex": ""
    },
    {
        "num": 461,
        "en": "Prohibit",
        "pos": "v.",
        "ipa": "/prəˈhɪb.ɪt/",
        "vi": "Cấm đoán",
        "ex": ""
    },
    {
        "num": 462,
        "en": "Ban",
        "pos": "v.",
        "ipa": "/bæn/",
        "vi": "Cấm",
        "ex": ""
    },
    {
        "num": 463,
        "en": "Forbid",
        "pos": "v.",
        "ipa": "/fəˈbɪd/",
        "vi": "Cấm",
        "ex": ""
    },
    {
        "num": 464,
        "en": "Outlaw",
        "pos": "v.",
        "ipa": "/ˈaʊt.lɔː/",
        "vi": "Đưa ra ngoài vòng pháp luật, cấm",
        "ex": ""
    },
    {
        "num": 465,
        "en": "Prevent",
        "pos": "v.",
        "ipa": "/prɪˈvent/",
        "vi": "Ngăn chặn",
        "ex": ""
    },
    {
        "num": 466,
        "en": "Allow",
        "pos": "v.",
        "ipa": "/əˈlaʊ/",
        "vi": "Cho phép",
        "ex": ""
    },
    {
        "num": 467,
        "en": "Permit",
        "pos": "v.",
        "ipa": "/pəˈmɪt/",
        "vi": "Cho phép",
        "ex": ""
    },
    {
        "num": 468,
        "en": "Authorize",
        "pos": "v.",
        "ipa": "/ˈɔː.θər.aɪz/",
        "vi": "Cấp quyền, ủy quyền",
        "ex": ""
    },
    {
        "num": 469,
        "en": "Entirely",
        "pos": "adv.",
        "ipa": "/ɪnˈtaɪə.li/",
        "vi": "Hoàn toàn, trọn vẹn",
        "ex": ""
    },
    {
        "num": 470,
        "en": "Completely",
        "pos": "adv.",
        "ipa": "/kəmˈpliːt.li/",
        "vi": "Hoàn toàn",
        "ex": ""
    },
    {
        "num": 471,
        "en": "Totally",
        "pos": "adv.",
        "ipa": "/ˈtəʊ.təl.i/",
        "vi": "Toàn bộ, hoàn toàn",
        "ex": ""
    },
    {
        "num": 472,
        "en": "Absolutely",
        "pos": "adv.",
        "ipa": "/ˌæb.səˈluːt.li/",
        "vi": "Tuyệt đối",
        "ex": ""
    },
    {
        "num": 473,
        "en": "Partially",
        "pos": "adv.",
        "ipa": "/ˈpɑː.ʃəl.i/",
        "vi": "Một phần",
        "ex": ""
    },
    {
        "num": 474,
        "en": "Incompletely",
        "pos": "adv.",
        "ipa": "/ˌɪn.kəmˈpliːt.li/",
        "vi": "Không hoàn toàn",
        "ex": ""
    },
    {
        "num": 475,
        "en": "Ecologically sound",
        "pos": "phr.",
        "ipa": "/ɪˌkɒl.ə.dʒɪ.kəl.i ˈsaʊnd/",
        "vi": "Lành mạnh / tốt cho hệ sinh thái",
        "ex": ""
    },
    {
        "num": 476,
        "en": "Environmentally friendly",
        "pos": "adj.",
        "ipa": "/ɪnˌvaɪ.rənˌmen.təl.i ˈfrend.li/",
        "vi": "Thân thiện với môi trường",
        "ex": ""
    },
    {
        "num": 477,
        "en": "Eco-friendly",
        "pos": "adj.",
        "ipa": "/ˌiː.kəʊˈfrend.li/",
        "vi": "Thân thiện với sinh thái",
        "ex": ""
    },
    {
        "num": 478,
        "en": "Environmentally damaging",
        "pos": "adj.",
        "ipa": "/ɪnˌvaɪ.rənˌmen.təl.i ˈdæm.ɪ.dʒɪŋ/",
        "vi": "Gây hại cho môi trường",
        "ex": ""
    },
    {
        "num": 479,
        "en": "Decrease reliance on sth",
        "pos": "phr.",
        "ipa": "/dɪˈkriːs rɪˈlaɪ.əns ɒn/",
        "vi": "Giảm bớt sự phụ thuộc vào điều gì",
        "ex": ""
    },
    {
        "num": 480,
        "en": "Reduce dependence on",
        "pos": "phr.",
        "ipa": "/rɪˈdʒuːs dɪˈpen.dəns ɒn/",
        "vi": "Giảm sự phụ thuộc vào",
        "ex": ""
    },
    {
        "num": 481,
        "en": "Increase reliance on",
        "pos": "phr.",
        "ipa": "/ɪnˈkriːs rɪˈlaɪ.əns ɒn/",
        "vi": "Tăng sự phụ thuộc vào",
        "ex": ""
    },
    {
        "num": 482,
        "en": "Equate to sth",
        "pos": "phr. v.",
        "ipa": "/ɪˈkweɪt tuː/",
        "vi": "Đồng nghĩa với / Tương đương với điều gì",
        "ex": ""
    },
    {
        "num": 483,
        "en": "Amount to",
        "pos": "phr. v.",
        "ipa": "/əˈmaʊnt tuː/",
        "vi": "Tương đương với, lên tới",
        "ex": ""
    },
    {
        "num": 484,
        "en": "Correspond to",
        "pos": "phr. v.",
        "ipa": "/ˌkɒr.ɪˈspɒnd tuː/",
        "vi": "Tương ứng với",
        "ex": ""
    },
    {
        "num": 485,
        "en": "Be equivalent to",
        "pos": "phr.",
        "ipa": "/bi ɪˈkwɪv.əl.ənt tuː/",
        "vi": "Tương đương với",
        "ex": ""
    },
    {
        "num": 486,
        "en": "Provide for needs",
        "pos": "phr.",
        "ipa": "/prəˈvaɪd fɔː niːdz/",
        "vi": "Cung cấp / đáp ứng cho nhu cầu",
        "ex": ""
    },
    {
        "num": 487,
        "en": "Supply",
        "pos": "v.",
        "ipa": "/səˈplaɪ/",
        "vi": "Cung cấp",
        "ex": ""
    },
    {
        "num": 488,
        "en": "Cater to",
        "pos": "phr. v.",
        "ipa": "/ˈkeɪ.tə tuː/",
        "vi": "Phục vụ, đáp ứng",
        "ex": ""
    },
    {
        "num": 489,
        "en": "Meet the needs",
        "pos": "phr.",
        "ipa": "/miːt ðə niːdz/",
        "vi": "Đáp ứng nhu cầu",
        "ex": ""
    },
    {
        "num": 490,
        "en": "Work in partnership with",
        "pos": "phr.",
        "ipa": "/wɜːk ɪn ˈpɑːt.nə.ʃɪp wɪð/",
        "vi": "Hợp tác làm việc cùng với...",
        "ex": ""
    },
    {
        "num": 491,
        "en": "Collaborate with",
        "pos": "phr. v.",
        "ipa": "/kəˈlæb.ə.reɪt wɪð/",
        "vi": "Hợp tác với",
        "ex": ""
    },
    {
        "num": 492,
        "en": "Team up with",
        "pos": "phr. v.",
        "ipa": "/tiːm ʌp wɪð/",
        "vi": "Phối hợp, lập nhóm với",
        "ex": ""
    },
    {
        "num": 493,
        "en": "Work together with",
        "pos": "phr.",
        "ipa": "/wɜːk təˈɡeð.ə wɪð/",
        "vi": "Làm việc cùng với",
        "ex": ""
    },
    {
        "num": 494,
        "en": "Fundamental in nature",
        "pos": "phr.",
        "ipa": "/ˌfʌn.dəˈmen.təl ɪn ˈneɪ.tʃə/",
        "vi": "Có bản chất nền tảng / cốt lõi",
        "ex": ""
    },
    {
        "num": 495,
        "en": "Basic",
        "pos": "adj.",
        "ipa": "/ˈbeɪ.sɪk/",
        "vi": "Cơ bản",
        "ex": ""
    },
    {
        "num": 496,
        "en": "Foundational",
        "pos": "adj.",
        "ipa": "/faʊnˈdeɪ.ʃən.əl/",
        "vi": "Thuộc về nền tảng",
        "ex": ""
    },
    {
        "num": 497,
        "en": "Prompt sb into careers",
        "pos": "phr.",
        "ipa": "/prɒmpt ˈɪn.tu kəˈrɪəz/",
        "vi": "Thúc đẩy / định hướng ai đó vào con đường nghề nghiệp",
        "ex": ""
    },
    {
        "num": 498,
        "en": "Encourage",
        "pos": "v.",
        "ipa": "/ɪnˈkʌr.ɪdʒ/",
        "vi": "Khuyến khích",
        "ex": ""
    },
    {
        "num": 499,
        "en": "Inspire",
        "pos": "v.",
        "ipa": "/ɪnˈspaɪə/",
        "vi": "Truyền cảm hứng",
        "ex": ""
    },
    {
        "num": 500,
        "en": "Motivate",
        "pos": "v.",
        "ipa": "/ˈməʊ.tɪ.veɪt/",
        "vi": "Thúc đẩy, tạo động lực",
        "ex": ""
    },
    {
        "num": 501,
        "en": "At varying capacities",
        "pos": "phr.",
        "ipa": "/ət ˈveə.ri.ɪŋ kəˈpæs.ə.tiz/",
        "vi": "Ở các công suất / mức độ khác nhau",
        "ex": ""
    },
    {
        "num": 502,
        "en": "Petroleum-intensive",
        "pos": "adj.",
        "ipa": "/pəˈtrəʊ.li.əm ɪnˈten.sɪv/",
        "vi": "Tiêu tốn / sử dụng nhiều xăng dầu",
        "ex": ""
    },
    {
        "num": 503,
        "en": "Food security",
        "pos": "n.",
        "ipa": "/fuːd sɪˈkjʊə.rə.ti/",
        "vi": "An ninh lương thực",
        "ex": ""
    },
    {
        "num": 504,
        "en": "Concentric",
        "pos": "adj.",
        "ipa": "/kənˈsen.trɪk/",
        "vi": "Đồng tâm (có cùng tâm)",
        "ex": ""
    },
    {
        "num": 505,
        "en": "Eccentric",
        "pos": "adj.",
        "ipa": "/ɪkˈsen.trɪk/",
        "vi": "Lệch tâm (hoặc kỳ quặc)",
        "ex": ""
    },
    {
        "num": 506,
        "en": "Resilient",
        "pos": "adj.",
        "ipa": "/rɪˈzɪl.i.ənt/",
        "vi": "Kiên cường, mau phục hồi",
        "ex": ""
    },
    {
        "num": 507,
        "en": "Tough",
        "pos": "adj.",
        "ipa": "/tʌf/",
        "vi": "Cứng rắn, dai sức",
        "ex": ""
    },
    {
        "num": 508,
        "en": "Strong",
        "pos": "adj.",
        "ipa": "/strɒŋ/",
        "vi": "Khỏe mạnh, vững vàng",
        "ex": ""
    },
    {
        "num": 509,
        "en": "Adaptable",
        "pos": "adj.",
        "ipa": "/əˈdæp.tə.bəl/",
        "vi": "Có thể thích nghi",
        "ex": ""
    },
    {
        "num": 510,
        "en": "Vulnerable",
        "pos": "adj.",
        "ipa": "/ˈvʌl.nər.ə.bəl/",
        "vi": "Dễ bị tổn thương",
        "ex": ""
    },
    {
        "num": 511,
        "en": "Fragile",
        "pos": "adj.",
        "ipa": "/ˈfrædʒ.aɪl/",
        "vi": "Mỏng manh, dễ vỡ",
        "ex": ""
    },
    {
        "num": 512,
        "en": "Weak",
        "pos": "adj.",
        "ipa": "/wiːk/",
        "vi": "Yếu ớt",
        "ex": ""
    },
    {
        "num": 513,
        "en": "Critical",
        "pos": "adj.",
        "ipa": "/ˈkrɪt.ɪ.kəl/",
        "vi": "Rất quan trọng, then chốt",
        "ex": ""
    },
    {
        "num": 514,
        "en": "Unimportant",
        "pos": "adj.",
        "ipa": "/ˌʌn.ɪmˈpɔː.tənt/",
        "vi": "Không quan trọng",
        "ex": ""
    },
    {
        "num": 515,
        "en": "Prosperity",
        "pos": "n.",
        "ipa": "/prɒsˈper.ə.ti/",
        "vi": "Sự thịnh vượng, phồn vinh",
        "ex": ""
    },
    {
        "num": 516,
        "en": "Success",
        "pos": "n.",
        "ipa": "/səkˈses/",
        "vi": "Sự thành công",
        "ex": ""
    },
    {
        "num": 517,
        "en": "Affluence",
        "pos": "n.",
        "ipa": "/ˈæf.lu.əns/",
        "vi": "Sự sung túc, giàu có",
        "ex": ""
    },
    {
        "num": 518,
        "en": "Poverty",
        "pos": "n.",
        "ipa": "/ˈpɒv.ə.ti/",
        "vi": "Sự nghèo đói",
        "ex": ""
    },
    {
        "num": 519,
        "en": "Hardship",
        "pos": "n.",
        "ipa": "/ˈhɑːd.ʃɪp/",
        "vi": "Sự gian khổ, khó khăn",
        "ex": ""
    },
    {
        "num": 520,
        "en": "Decline",
        "pos": "n.",
        "ipa": "/dɪˈklaɪn/",
        "vi": "Sự suy thoái, sụt giảm",
        "ex": ""
    },
    {
        "num": 521,
        "en": "Integration",
        "pos": "n.",
        "ipa": "/ˌɪn.tɪˈɡreɪ.ʃən/",
        "vi": "Sự hội nhập, tích hợp",
        "ex": ""
    },
    {
        "num": 522,
        "en": "Incorporation",
        "pos": "n.",
        "ipa": "/ɪnˌkɔː.pərˈeɪ.ʃən/",
        "vi": "Sự sáp nhập, hợp nhất",
        "ex": ""
    },
    {
        "num": 523,
        "en": "Robust",
        "pos": "adj.",
        "ipa": "/rəʊˈbʌst/",
        "vi": "Mạnh mẽ, vững chắc",
        "ex": ""
    },
    {
        "num": 524,
        "en": "Vigorous",
        "pos": "adj.",
        "ipa": "/ˈvɪɡ.ər.əs/",
        "vi": "Sôi nổi, mãnh liệt, khỏe mạnh",
        "ex": ""
    },
    {
        "num": 525,
        "en": "Sturdy",
        "pos": "adj.",
        "ipa": "/ˈstɜː.di/",
        "vi": "Cứng cáp, vững chắc",
        "ex": ""
    },
    {
        "num": 526,
        "en": "Frail",
        "pos": "adj.",
        "ipa": "/freɪl/",
        "vi": "Yếu ớt, mỏng manh",
        "ex": ""
    },
    {
        "num": 527,
        "en": "Skeptical",
        "pos": "adj.",
        "ipa": "/ˈskep.tɪ.kəl/",
        "vi": "Hoài nghi, đa nghi",
        "ex": ""
    },
    {
        "num": 528,
        "en": "Doubtful",
        "pos": "adj.",
        "ipa": "/ˈdaʊt.fəl/",
        "vi": "Đầy nghi ngờ",
        "ex": ""
    },
    {
        "num": 529,
        "en": "Cynical",
        "pos": "adj.",
        "ipa": "/ˈsɪn.ɪ.kəl/",
        "vi": "Hoài nghi, cay độc",
        "ex": ""
    },
    {
        "num": 530,
        "en": "Dubious",
        "pos": "adj.",
        "ipa": "/ˈdʒuː.bi.əs/",
        "vi": "Đáng ngờ, không đáng tin",
        "ex": ""
    },
    {
        "num": 531,
        "en": "Convinced",
        "pos": "adj.",
        "ipa": "/kənˈvɪnst/",
        "vi": "Bị thuyết phục, tin chắc",
        "ex": ""
    },
    {
        "num": 532,
        "en": "Certain",
        "pos": "adj.",
        "ipa": "/ˈsɜː.tən/",
        "vi": "Chắc chắn",
        "ex": ""
    },
    {
        "num": 533,
        "en": "Trusting",
        "pos": "adj.",
        "ipa": "/ˈtrʌs.tɪŋ/",
        "vi": "Hay tin người, đầy tin tưởng",
        "ex": ""
    },
    {
        "num": 534,
        "en": "Provocative",
        "pos": "adj.",
        "ipa": "/prəˈvɒk.ə.tɪv/",
        "vi": "Khiêu khích, trêu chọc",
        "ex": ""
    },
    {
        "num": 535,
        "en": "Annoying",
        "pos": "adj.",
        "ipa": "/əˈnɔɪ.ɪŋ/",
        "vi": "Gây khó chịu, bực mình",
        "ex": ""
    },
    {
        "num": 536,
        "en": "Irritating",
        "pos": "adj.",
        "ipa": "/ˈɪr.ɪ.teɪ.tɪŋ/",
        "vi": "Gây cáu gắt, chọc tức",
        "ex": ""
    },
    {
        "num": 537,
        "en": "Soothing",
        "pos": "adj.",
        "ipa": "/ˈsuː.ðɪŋ/",
        "vi": "Dịu dàng, êm ái",
        "ex": ""
    },
    {
        "num": 538,
        "en": "Calming",
        "pos": "adj.",
        "ipa": "/ˈkɑː.mɪŋ/",
        "vi": "Làm dịu đi, an thần",
        "ex": ""
    },
    {
        "num": 539,
        "en": "Proper behavior",
        "pos": "phr.",
        "ipa": "/ˌprɒp.ə bɪˈheɪ.vjə/",
        "vi": "Hành vi đúng mực / chuẩn mực",
        "ex": ""
    },
    {
        "num": 540,
        "en": "Appropriate conduct",
        "pos": "phr.",
        "ipa": "/əˈprəʊ.pri.ət ˈkɒn.dʌkt/",
        "vi": "Hành vi thích hợp",
        "ex": ""
    },
    {
        "num": 541,
        "en": "Good manners",
        "pos": "n.",
        "ipa": "/ɡʊd ˈmæn.əz/",
        "vi": "Cư xử tốt, lịch sự",
        "ex": ""
    },
    {
        "num": 542,
        "en": "Improper behavior",
        "pos": "phr.",
        "ipa": "/ɪmˈprɒp.ə bɪˈheɪ.vjə/",
        "vi": "Hành vi không đúng mực",
        "ex": ""
    },
    {
        "num": 543,
        "en": "Bad manners",
        "pos": "n.",
        "ipa": "/bæd ˈmæn.əz/",
        "vi": "Cư xử tệ, vô phép",
        "ex": ""
    },
    {
        "num": 544,
        "en": "Inappropriate conduct",
        "pos": "phr.",
        "ipa": "/ˌɪn.əˈprəʊ.pri.ət ˈkɒn.dʌkt/",
        "vi": "Hành vi không thích hợp",
        "ex": ""
    },
    {
        "num": 545,
        "en": "Show respect for sb",
        "pos": "phr.",
        "ipa": "/ʃəʊ rɪˈspekt fɔː/",
        "vi": "Thể hiện sự tôn trọng đối với ai",
        "ex": ""
    },
    {
        "num": 546,
        "en": "Express respect for sb",
        "pos": "phr.",
        "ipa": "/ɪkˈspres rɪˈspekt fɔː/",
        "vi": "Bày tỏ sự tôn trọng đối với ai",
        "ex": ""
    },
    {
        "num": 547,
        "en": "Display reverence",
        "pos": "phr.",
        "ipa": "/dɪˈspleɪ ˈrev.ər.əns/",
        "vi": "Thể hiện sự tôn kính",
        "ex": ""
    },
    {
        "num": 548,
        "en": "Show esteem",
        "pos": "phr.",
        "ipa": "/ʃəʊ ɪˈstiːm/",
        "vi": "Thể hiện sự quý trọng",
        "ex": ""
    },
    {
        "num": 549,
        "en": "Show disrespect",
        "pos": "phr.",
        "ipa": "/ʃəʊ ˌdɪs.rɪˈspekt/",
        "vi": "Thể hiện sự thiếu tôn trọng",
        "ex": ""
    },
    {
        "num": 550,
        "en": "Insult",
        "pos": "v., n.",
        "ipa": "/ˈɪn.sʌlt/",
        "vi": "Xúc phạm / Lời xúc phạm",
        "ex": ""
    },
    {
        "num": 551,
        "en": "Cultural differences",
        "pos": "n.",
        "ipa": "/ˈkʌl.tʃər.əl ˈdɪf.ər.ənsɪz/",
        "vi": "Những sự khác biệt về văn hóa",
        "ex": ""
    },
    {
        "num": 552,
        "en": "Cultural distinctions",
        "pos": "n.",
        "ipa": "/ˈkʌl.tʃər.əl dɪˈstɪŋk.ʃənz/",
        "vi": "Những điểm khác biệt văn hóa",
        "ex": ""
    },
    {
        "num": 553,
        "en": "Cultural disparities",
        "pos": "n.",
        "ipa": "/ˈkʌl.tʃər.əl dɪˈspær.ə.tiz/",
        "vi": "Sự chênh lệch / khác biệt văn hóa",
        "ex": ""
    },
    {
        "num": 554,
        "en": "Cultural similarities",
        "pos": "n.",
        "ipa": "/ˈkʌl.tʃər.əl ˌsɪm.ɪˈlær.ə.tiz/",
        "vi": "Sự tương đồng về văn hóa",
        "ex": ""
    },
    {
        "num": 555,
        "en": "With relatively little ceremony",
        "pos": "phr.",
        "ipa": "/wɪð ˈrel.ə.tɪv.li ˈlɪt.əl ˈser.ɪ.mə.ni/",
        "vi": "Với nghi thức tương đối đơn giản / không cầu kỳ",
        "ex": ""
    },
    {
        "num": 556,
        "en": "Informally",
        "pos": "adv.",
        "ipa": "/ɪnˈfɔː.mə.li/",
        "vi": "Một cách không chính thức, thân mật",
        "ex": ""
    },
    {
        "num": 557,
        "en": "Casually",
        "pos": "adv.",
        "ipa": "/ˈkæʒ.u.ə.li/",
        "vi": "Một cách tự nhiên, bình thường",
        "ex": ""
    },
    {
        "num": 558,
        "en": "Without fuss",
        "pos": "phr.",
        "ipa": "/wɪˈðaʊt fʌs/",
        "vi": "Không cầu kỳ, rườm rà",
        "ex": ""
    },
    {
        "num": 559,
        "en": "Formally",
        "pos": "adv.",
        "ipa": "/ˈfɔː.mə.li/",
        "vi": "Một cách trang trọng",
        "ex": ""
    },
    {
        "num": 560,
        "en": "With great pomp",
        "pos": "phr.",
        "ipa": "/wɪð ɡreɪt pɒmp/",
        "vi": "Với sự phô trương, hoành tráng",
        "ex": ""
    },
    {
        "num": 561,
        "en": "Ceremoniously",
        "pos": "adv.",
        "ipa": "/ˌser.ɪˈməʊ.ni.əs.li/",
        "vi": "Rất kiểu cách, trang trọng",
        "ex": ""
    },
    {
        "num": 562,
        "en": "Travel abroad",
        "pos": "phr.",
        "ipa": "/ˈtræv.əl əˈbrɔːd/",
        "vi": "Đi du lịch nước ngoài",
        "ex": ""
    },
    {
        "num": 563,
        "en": "Travel overseas",
        "pos": "phr.",
        "ipa": "/ˈtræv.əl ˌəʊ.vəˈsiːz/",
        "vi": "Du lịch nước ngoài",
        "ex": ""
    },
    {
        "num": 564,
        "en": "Go abroad",
        "pos": "phr.",
        "ipa": "/ɡəʊ əˈbrɔːd/",
        "vi": "Đi ra nước ngoài",
        "ex": ""
    },
    {
        "num": 565,
        "en": "Express one's thanks",
        "pos": "phr.",
        "ipa": "/ɪkˈspres wʌnz θæŋks/",
        "vi": "Bày tỏ lời cảm ơn",
        "ex": ""
    },
    {
        "num": 566,
        "en": "Show gratitude",
        "pos": "phr.",
        "ipa": "/ʃəʊ ˈɡræt.ɪ.tʃuːd/",
        "vi": "Thể hiện lòng biết ơn",
        "ex": ""
    },
    {
        "num": 567,
        "en": "Give thanks",
        "pos": "phr.",
        "ipa": "/ɡɪv θæŋks/",
        "vi": "Gửi lời cảm ơn",
        "ex": ""
    },
    {
        "num": 568,
        "en": "Express appreciation",
        "pos": "phr.",
        "ipa": "/ɪkˈspres əˌpriː.ʃiˈeɪ.ʃən/",
        "vi": "Bày tỏ sự trân trọng",
        "ex": ""
    },
    {
        "num": 569,
        "en": "Appear confusing to sb",
        "pos": "phr.",
        "ipa": "/əˈpɪə kənˈfjuː.zɪŋ tuː/",
        "vi": "Trở nên bối rối / khó hiểu đối với ai",
        "ex": ""
    },
    {
        "num": 570,
        "en": "Seem puzzling",
        "pos": "phr.",
        "ipa": "/siːm ˈpʌz.lɪŋ/",
        "vi": "Có vẻ khó hiểu",
        "ex": ""
    },
    {
        "num": 571,
        "en": "Be baffling",
        "pos": "phr.",
        "ipa": "/bi ˈbæf.lɪŋ/",
        "vi": "Gây bối rối",
        "ex": ""
    },
    {
        "num": 572,
        "en": "Bewildering",
        "pos": "adj.",
        "ipa": "/bɪˈwɪl.dər.ɪŋ/",
        "vi": "Gây hoang mang, bối rối",
        "ex": ""
    },
    {
        "num": 573,
        "en": "Typically refuse",
        "pos": "phr.",
        "ipa": "/ˈtɪp.ɪ.kəl.i rɪˈfjuːz/",
        "vi": "Thường từ chối",
        "ex": ""
    },
    {
        "num": 574,
        "en": "Normally decline",
        "pos": "phr.",
        "ipa": "/ˈnɔː.mə.li dɪˈklaɪn/",
        "vi": "Bình thường sẽ từ chối",
        "ex": ""
    },
    {
        "num": 575,
        "en": "Usually reject",
        "pos": "phr.",
        "ipa": "/ˈjuː.ʒu.ə.li rɪˈdʒekt/",
        "vi": "Thường bác bỏ",
        "ex": ""
    },
    {
        "num": 576,
        "en": "Offer a gift to sb",
        "pos": "phr.",
        "ipa": "/ˈɒf.ər ə ɡɪft tuː/",
        "vi": "Tặng / trao quà cho ai đó",
        "ex": ""
    },
    {
        "num": 577,
        "en": "Refuse to take a gift",
        "pos": "phr.",
        "ipa": "/rɪˈfjuːz tə teɪk ə ɡɪft/",
        "vi": "Từ chối nhận quà",
        "ex": ""
    },
    {
        "num": 578,
        "en": "Rules of etiquette",
        "pos": "n.",
        "ipa": "/ruːlz əv ˈet.ɪ.ket/",
        "vi": "Quy tắc ứng xử / phép lịch sự",
        "ex": ""
    },
    {
        "num": 579,
        "en": "Write a book on sth",
        "pos": "phr.",
        "ipa": "/raɪt ə bʊk ɒn/",
        "vi": "Viết sách về chủ đề gì",
        "ex": ""
    },
    {
        "num": 580,
        "en": "Social situations",
        "pos": "n.",
        "ipa": "/ˈsəʊ.ʃəl ˌsɪt.ʃuˈeɪ.ʃənz/",
        "vi": "Các tình huống xã hội",
        "ex": ""
    },
    {
        "num": 581,
        "en": "Give a gift",
        "pos": "phr.",
        "ipa": "/ɡɪv ə ɡɪft/",
        "vi": "Tặng một món quà",
        "ex": ""
    },
    {
        "num": 582,
        "en": "Receive a gift",
        "pos": "phr.",
        "ipa": "/rɪˈsiːv ə ɡɪft/",
        "vi": "Nhận một món quà",
        "ex": ""
    },
    {
        "num": 583,
        "en": "Etiquette",
        "pos": "n.",
        "ipa": "/ˈet.ɪ.ket/",
        "vi": "Nghi thức xã giao, phép lịch sự",
        "ex": ""
    },
    {
        "num": 584,
        "en": "Manners",
        "pos": "n.",
        "ipa": "/ˈmæn.əz/",
        "vi": "Cách cư xử, phép lịch sự",
        "ex": ""
    },
    {
        "num": 585,
        "en": "Protocol",
        "pos": "n.",
        "ipa": "/ˈprəʊ.tə.kɒl/",
        "vi": "Nghi thức ngoại giao",
        "ex": ""
    },
    {
        "num": 586,
        "en": "Decorum",
        "pos": "n.",
        "ipa": "/dɪˈkɔː.rəm/",
        "vi": "Sự đúng mực, đoan trang",
        "ex": ""
    },
    {
        "num": 587,
        "en": "Rudeness",
        "pos": "n.",
        "ipa": "/ˈruːd.nəs/",
        "vi": "Sự thô lỗ",
        "ex": ""
    },
    {
        "num": 588,
        "en": "Impoliteness",
        "pos": "n.",
        "ipa": "/ˌɪm.pəˈlaɪt.nəs/",
        "vi": "Sự bất lịch sự",
        "ex": ""
    },
    {
        "num": 589,
        "en": "Proper",
        "pos": "adj.",
        "ipa": "/ˈprɒp.ə/",
        "vi": "Đúng đắn, thích đáng, chuẩn mực",
        "ex": ""
    },
    {
        "num": 590,
        "en": "Appropriate",
        "pos": "adj.",
        "ipa": "/əˈprəʊ.pri.ət/",
        "vi": "Thích hợp",
        "ex": ""
    },
    {
        "num": 591,
        "en": "Correct",
        "pos": "adj.",
        "ipa": "/kəˈrekt/",
        "vi": "Chính xác, đúng",
        "ex": ""
    },
    {
        "num": 592,
        "en": "Suitable",
        "pos": "adj.",
        "ipa": "/ˈsuː.tə.bəl/",
        "vi": "Phù hợp",
        "ex": ""
    },
    {
        "num": 593,
        "en": "Improper",
        "pos": "adj.",
        "ipa": "/ɪmˈprɒp.ə/",
        "vi": "Không đúng mực",
        "ex": ""
    },
    {
        "num": 594,
        "en": "Inappropriate",
        "pos": "adj.",
        "ipa": "/ˌɪn.əˈprəʊ.pri.ət/",
        "vi": "Không thích hợp",
        "ex": ""
    },
    {
        "num": 595,
        "en": "Wrong",
        "pos": "adj.",
        "ipa": "/rɒŋ/",
        "vi": "Sai trái",
        "ex": ""
    },
    {
        "num": 596,
        "en": "Ceremony",
        "pos": "n.",
        "ipa": "/ˈser.ɪ.mə.ni/",
        "vi": "Nghi lễ, sự khách sáo, hình thức",
        "ex": ""
    },
    {
        "num": 597,
        "en": "Formality",
        "pos": "n.",
        "ipa": "/fɔːˈmæl.ə.ti/",
        "vi": "Tính hình thức, thủ tục",
        "ex": ""
    },
    {
        "num": 598,
        "en": "Ritual",
        "pos": "n.",
        "ipa": "/ˈrɪtʃ.u.əl/",
        "vi": "Nghi thức",
        "ex": ""
    },
    {
        "num": 599,
        "en": "Rite",
        "pos": "n.",
        "ipa": "/raɪt/",
        "vi": "Lễ nghi",
        "ex": ""
    },
    {
        "num": 600,
        "en": "Informality",
        "pos": "n.",
        "ipa": "/ˌɪn.fɔːˈmæl.ə.ti/",
        "vi": "Sự thân mật, không nghi thức",
        "ex": ""
    },
    {
        "num": 601,
        "en": "Casualness",
        "pos": "n.",
        "ipa": "/ˈkæʒ.u.əl.nəs/",
        "vi": "Sự bình thường, tự nhiên",
        "ex": ""
    },
    {
        "num": 602,
        "en": "Confusing",
        "pos": "adj.",
        "ipa": "/kənˈfjuː.zɪŋ/",
        "vi": "Gây bối rối, khó hiểu",
        "ex": ""
    },
    {
        "num": 603,
        "en": "Puzzling",
        "pos": "adj.",
        "ipa": "/ˈpʌz.lɪŋ/",
        "vi": "Khó hiểu, làm bối rối",
        "ex": ""
    },
    {
        "num": 604,
        "en": "Baffling",
        "pos": "adj.",
        "ipa": "/ˈbæf.lɪŋ/",
        "vi": "Gây trở ngại, làm khó hiểu",
        "ex": ""
    },
    {
        "num": 605,
        "en": "Perplexing",
        "pos": "adj.",
        "ipa": "/pəˈplek.sɪŋ/",
        "vi": "Rắc rối, khó hiểu",
        "ex": ""
    },
    {
        "num": 606,
        "en": "Clear",
        "pos": "adj.",
        "ipa": "/klɪə/",
        "vi": "Rõ ràng",
        "ex": ""
    },
    {
        "num": 607,
        "en": "Obvious",
        "pos": "adj.",
        "ipa": "/ˈɒb.vi.əs/",
        "vi": "Hiển nhiên",
        "ex": ""
    },
    {
        "num": 608,
        "en": "Straightforward",
        "pos": "adj.",
        "ipa": "/ˌstreɪtˈfɔː.wəd/",
        "vi": "Dễ hiểu, thẳng thắn",
        "ex": ""
    },
    {
        "num": 609,
        "en": "Typically",
        "pos": "adv.",
        "ipa": "/ˈtɪp.ɪ.kəl.i/",
        "vi": "Thông thường, điển hình",
        "ex": ""
    },
    {
        "num": 610,
        "en": "Normally",
        "pos": "adv.",
        "ipa": "/ˈnɔː.mə.li/",
        "vi": "Bình thường",
        "ex": ""
    },
    {
        "num": 611,
        "en": "Usually",
        "pos": "adv.",
        "ipa": "/ˈjuː.ʒu.ə.li/",
        "vi": "Thường xuyên",
        "ex": ""
    },
    {
        "num": 612,
        "en": "Generally",
        "pos": "adv.",
        "ipa": "/ˈdʒen.ər.əl.i/",
        "vi": "Nhìn chung, nói chung",
        "ex": ""
    },
    {
        "num": 613,
        "en": "Unusually",
        "pos": "adv.",
        "ipa": "/ʌnˈjuː.ʒu.ə.li/",
        "vi": "Khác thường",
        "ex": ""
    },
    {
        "num": 614,
        "en": "Rarely",
        "pos": "adv.",
        "ipa": "/ˈreə.li/",
        "vi": "Hiếm khi",
        "ex": ""
    },
    {
        "num": 615,
        "en": "Abnormally",
        "pos": "adv.",
        "ipa": "/æbˈnɔː.mə.li/",
        "vi": "Bất thường",
        "ex": ""
    },
    {
        "num": 616,
        "en": "Refuse",
        "pos": "v.",
        "ipa": "/rɪˈfjuːz/",
        "vi": "Từ chối, khước từ",
        "ex": ""
    },
    {
        "num": 617,
        "en": "Reject",
        "pos": "v.",
        "ipa": "/rɪˈdʒekt/",
        "vi": "Loại bỏ, bác bỏ",
        "ex": ""
    },
    {
        "num": 618,
        "en": "Turn down",
        "pos": "phr. v.",
        "ipa": "/tɜːn daʊn/",
        "vi": "Từ chối",
        "ex": ""
    },
    {
        "num": 619,
        "en": "Accept",
        "pos": "v.",
        "ipa": "/əkˈsept/",
        "vi": "Chấp nhận",
        "ex": ""
    },
    {
        "num": 620,
        "en": "Agree",
        "pos": "v.",
        "ipa": "/əˈɡriː/",
        "vi": "Đồng ý",
        "ex": ""
    },
    {
        "num": 621,
        "en": "Consent",
        "pos": "v.",
        "ipa": "/kənˈsent/",
        "vi": "Tán thành, ưng thuận",
        "ex": ""
    },
    {
        "num": 622,
        "en": "Respect",
        "pos": "n.",
        "ipa": "/rɪˈspekt/",
        "vi": "Sự tôn trọng, kính trọng",
        "ex": ""
    },
    {
        "num": 623,
        "en": "Esteem",
        "pos": "n.",
        "ipa": "/ɪˈstiːm/",
        "vi": "Sự quý trọng",
        "ex": ""
    },
    {
        "num": 624,
        "en": "Regard",
        "pos": "n.",
        "ipa": "/rɪˈɡɑːd/",
        "vi": "Sự quan tâm, kính trọng",
        "ex": ""
    },
    {
        "num": 625,
        "en": "Reverence",
        "pos": "n.",
        "ipa": "/ˈrev.ər.əns/",
        "vi": "Sự tôn kính",
        "ex": ""
    },
    {
        "num": 626,
        "en": "Disrespect",
        "pos": "n.",
        "ipa": "/ˌdɪs.rɪˈspekt/",
        "vi": "Sự thiếu tôn trọng",
        "ex": ""
    },
    {
        "num": 627,
        "en": "Contempt",
        "pos": "n.",
        "ipa": "/kənˈtempt/",
        "vi": "Sự khinh thường",
        "ex": ""
    },
    {
        "num": 628,
        "en": "Scorn",
        "pos": "n.",
        "ipa": "/skɔːn/",
        "vi": "Sự khinh miệt",
        "ex": ""
    },
    {
        "num": 629,
        "en": "Highly respected",
        "pos": "phr.",
        "ipa": "/ˌhaɪ.li rɪˈspek.tɪd/",
        "vi": "Rất được tôn trọng / kính trọng",
        "ex": ""
    },
    {
        "num": 630,
        "en": "Well-regarded",
        "pos": "adj.",
        "ipa": "/ˌwel rɪˈɡɑː.dɪd/",
        "vi": "Được đánh giá cao, kính trọng",
        "ex": ""
    },
    {
        "num": 631,
        "en": "Highly esteemed",
        "pos": "adj.",
        "ipa": "/ˌhaɪ.li ɪˈstiːmd/",
        "vi": "Rất được kính trọng",
        "ex": ""
    },
    {
        "num": 632,
        "en": "Disrespected",
        "pos": "adj.",
        "ipa": "/ˌdɪs.rɪˈspek.tɪd/",
        "vi": "Bị thiếu tôn trọng, bị xem thường",
        "ex": ""
    },
    {
        "num": 633,
        "en": "Looked down upon",
        "pos": "phr.",
        "ipa": "/lʊkt daʊn əˈpɒn/",
        "vi": "Bị coi khinh",
        "ex": ""
    },
    {
        "num": 634,
        "en": "Count on",
        "pos": "phr. v.",
        "ipa": "/kaʊnt ɒn/",
        "vi": "Trông cậy vào, tin tưởng vào",
        "ex": ""
    },
    {
        "num": 635,
        "en": "Rely on",
        "pos": "phr. v.",
        "ipa": "/rɪˈlaɪ ɒn/",
        "vi": "Dựa vào, tin tưởng vào",
        "ex": ""
    },
    {
        "num": 636,
        "en": "Depend on",
        "pos": "phr. v.",
        "ipa": "/dɪˈpend ɒn/",
        "vi": "Phụ thuộc vào, dựa dẫm vào",
        "ex": ""
    },
    {
        "num": 637,
        "en": "Bank on",
        "pos": "phr. v.",
        "ipa": "/bæŋk ɒn/",
        "vi": "Trông mong vào, hy vọng vào",
        "ex": ""
    },
    {
        "num": 638,
        "en": "In exchange for sth",
        "pos": "phr.",
        "ipa": "/ɪn ɪksˈtʃeɪndʒ fɔː/",
        "vi": "Để đổi lấy cái gì",
        "ex": ""
    },
    {
        "num": 639,
        "en": "In return for",
        "pos": "phr.",
        "ipa": "/ɪn rɪˈtɜːn fɔː/",
        "vi": "Để đổi lại",
        "ex": ""
    },
    {
        "num": 640,
        "en": "The wee hours",
        "pos": "idiom",
        "ipa": "/ðə wiː ˈaʊ.əz/",
        "vi": "Lúc rạng sáng / Nửa đêm về sáng",
        "ex": ""
    },
    {
        "num": 641,
        "en": "Early morning hours",
        "pos": "n.",
        "ipa": "/ˈɜː.li ˈmɔː.nɪŋ ˈaʊ.əz/",
        "vi": "Những giờ sáng sớm",
        "ex": ""
    },
    {
        "num": 642,
        "en": "Soon after midnight",
        "pos": "phr.",
        "ipa": "/suːn ˈɑːf.tə ˈmɪd.naɪt/",
        "vi": "Ngay sau nửa đêm",
        "ex": ""
    },
    {
        "num": 643,
        "en": "Follow special customs",
        "pos": "phr.",
        "ipa": "/ˈfɒl.əʊ ˈspeʃ.əl ˈkʌs.təmz/",
        "vi": "Tuân theo các phong tục đặc biệt",
        "ex": ""
    },
    {
        "num": 644,
        "en": "Observe customs",
        "pos": "phr.",
        "ipa": "/əbˈzɜːv ˈkʌs.təmz/",
        "vi": "Tuân thủ phong tục",
        "ex": ""
    },
    {
        "num": 645,
        "en": "Practice customs",
        "pos": "phr.",
        "ipa": "/ˈpræk.tɪs ˈkʌs.təmz/",
        "vi": "Thực hành phong tục",
        "ex": ""
    },
    {
        "num": 646,
        "en": "Be in charge of",
        "pos": "phr.",
        "ipa": "/bi ɪn tʃɑːdʒ əv/",
        "vi": "Phụ trách, chịu trách nhiệm",
        "ex": ""
    },
    {
        "num": 647,
        "en": "Take care of",
        "pos": "phr. v.",
        "ipa": "/teɪk keər əv/",
        "vi": "Chăm lo, đảm nhận",
        "ex": ""
    },
    {
        "num": 648,
        "en": "Add up to sth",
        "pos": "phr. v.",
        "ipa": "/æd ʌp tuː/",
        "vi": "Cộng lại thành / Lên đến (con số)",
        "ex": ""
    },
    {
        "num": 649,
        "en": "Baby teeth",
        "pos": "n.",
        "ipa": "/ˈbeɪ.bi tiːθ/",
        "vi": "Răng sữa",
        "ex": ""
    },
    {
        "num": 650,
        "en": "Fall out",
        "pos": "phr. v.",
        "ipa": "/fɔːl aʊt/",
        "vi": "Rụng đi (răng, tóc)",
        "ex": ""
    },
    {
        "num": 651,
        "en": "Have the custom of",
        "pos": "phr.",
        "ipa": "/hæv ðə ˈkʌs.təm əv/",
        "vi": "Có phong tục làm gì",
        "ex": ""
    },
    {
        "num": 652,
        "en": "According to tradition",
        "pos": "phr.",
        "ipa": "/əˈkɔː.dɪŋ tə trəˈdɪʃ.ən/",
        "vi": "Theo truyền thống",
        "ex": ""
    },
    {
        "num": 653,
        "en": "The exact origins",
        "pos": "n.",
        "ipa": "/ði ɪɡˈzækt ˈɒr.ɪ.dʒɪnz/",
        "vi": "Nguồn gốc chính xác",
        "ex": ""
    },
    {
        "num": 654,
        "en": "Be considered sth",
        "pos": "phr.",
        "ipa": "/bi kənˈsɪd.əd/",
        "vi": "Được coi là / xem như là...",
        "ex": ""
    },
    {
        "num": 655,
        "en": "Guardian angel",
        "pos": "n.",
        "ipa": "/ˈɡɑː.di.ən ˈeɪn.dʒəl/",
        "vi": "Thiên thần hộ mệnh",
        "ex": ""
    },
    {
        "num": 656,
        "en": "Feed sth to sb/sth",
        "pos": "v.",
        "ipa": "/fiːd tuː/",
        "vi": "Cho ai/con vật gì ăn cái gì",
        "ex": ""
    },
    {
        "num": 657,
        "en": "Custom",
        "pos": "n.",
        "ipa": "/ˈkʌs.təm/",
        "vi": "Phong tục, tập quán",
        "ex": ""
    },
    {
        "num": 658,
        "en": "Tradition",
        "pos": "n.",
        "ipa": "/trəˈdɪʃ.ən/",
        "vi": "Truyền thống",
        "ex": ""
    },
    {
        "num": 659,
        "en": "Practice",
        "pos": "n.",
        "ipa": "/ˈpræk.tɪs/",
        "vi": "Thói quen, thông lệ",
        "ex": ""
    },
    {
        "num": 660,
        "en": "Habit",
        "pos": "n.",
        "ipa": "/ˈhæb.ɪt/",
        "vi": "Thói quen",
        "ex": ""
    },
    {
        "num": 661,
        "en": "Magpie",
        "pos": "n.",
        "ipa": "/ˈmæɡ.paɪ/",
        "vi": "Chim ác là",
        "ex": ""
    },
    {
        "num": 662,
        "en": "Similar",
        "pos": "adj.",
        "ipa": "/ˈsɪm.ɪ.lə/",
        "vi": "Tương tự, giống nhau",
        "ex": ""
    },
    {
        "num": 663,
        "en": "Alike",
        "pos": "adj.",
        "ipa": "/əˈlaɪk/",
        "vi": "Giống nhau",
        "ex": ""
    },
    {
        "num": 664,
        "en": "Identical",
        "pos": "adj.",
        "ipa": "/aɪˈden.tɪ.kəl/",
        "vi": "Giống hệt nhau",
        "ex": ""
    },
    {
        "num": 665,
        "en": "Comparable",
        "pos": "adj.",
        "ipa": "/ˈkɒm.pər.ə.bəl/",
        "vi": "Có thể so sánh được, tương đương",
        "ex": ""
    },
    {
        "num": 666,
        "en": "Different",
        "pos": "adj.",
        "ipa": "/ˈdɪf.ər.ənt/",
        "vi": "Khác biệt",
        "ex": ""
    },
    {
        "num": 667,
        "en": "Distinct",
        "pos": "adj.",
        "ipa": "/dɪˈstɪŋkt/",
        "vi": "Khác biệt, riêng biệt",
        "ex": ""
    },
    {
        "num": 668,
        "en": "Unlike",
        "pos": "adj.",
        "ipa": "/ʌnˈlaɪk/",
        "vi": "Không giống",
        "ex": ""
    },
    {
        "num": 669,
        "en": "Admire",
        "pos": "v.",
        "ipa": "/ədˈmaɪə/",
        "vi": "Ngưỡng mộ, khâm phục",
        "ex": ""
    },
    {
        "num": 670,
        "en": "Honor",
        "pos": "v., n.",
        "ipa": "/ˈɒn.ə/",
        "vi": "Tôn vinh, danh dự",
        "ex": ""
    },
    {
        "num": 671,
        "en": "Despise",
        "pos": "v.",
        "ipa": "/dɪˈspaɪz/",
        "vi": "Khinh thường",
        "ex": ""
    },
    {
        "num": 672,
        "en": "Mystery",
        "pos": "n.",
        "ipa": "/ˈmɪs.tər.i/",
        "vi": "Điều bí ẩn, huyền bí",
        "ex": ""
    },
    {
        "num": 673,
        "en": "Enigma",
        "pos": "n.",
        "ipa": "/ɪˈnɪɡ.mə/",
        "vi": "Điều bí ẩn, người khó hiểu",
        "ex": ""
    },
    {
        "num": 674,
        "en": "Puzzle",
        "pos": "n.",
        "ipa": "/ˈpʌz.əl/",
        "vi": "Câu đố, điều khó hiểu",
        "ex": ""
    },
    {
        "num": 675,
        "en": "Secret",
        "pos": "n.",
        "ipa": "/ˈsiː.krət/",
        "vi": "Bí mật",
        "ex": ""
    },
    {
        "num": 676,
        "en": "Clear fact",
        "pos": "n.",
        "ipa": "/klɪə fækt/",
        "vi": "Sự thật rõ ràng",
        "ex": ""
    },
    {
        "num": 677,
        "en": "Known truth",
        "pos": "n.",
        "ipa": "/nəʊn truːθ/",
        "vi": "Sự thật đã biết",
        "ex": ""
    },
    {
        "num": 678,
        "en": "Origin",
        "pos": "n.",
        "ipa": "/ˈɒr.ɪ.dʒɪn/",
        "vi": "Nguồn gốc, xuất xứ",
        "ex": ""
    },
    {
        "num": 679,
        "en": "Beginning",
        "pos": "n.",
        "ipa": "/bɪˈɡɪn.ɪŋ/",
        "vi": "Sự khởi đầu",
        "ex": ""
    },
    {
        "num": 680,
        "en": "Root",
        "pos": "n.",
        "ipa": "/ruːt/",
        "vi": "Gốc rễ",
        "ex": ""
    },
    {
        "num": 681,
        "en": "Source",
        "pos": "n.",
        "ipa": "/sɔːs/",
        "vi": "Nguồn, nguồn gốc",
        "ex": ""
    },
    {
        "num": 682,
        "en": "End",
        "pos": "n.",
        "ipa": "/end/",
        "vi": "Kết thúc",
        "ex": ""
    },
    {
        "num": 683,
        "en": "Conclusion",
        "pos": "n.",
        "ipa": "/kənˈkluː.ʒən/",
        "vi": "Phần kết, kết luận",
        "ex": ""
    },
    {
        "num": 684,
        "en": "Rate",
        "pos": "n.",
        "ipa": "/reɪt/",
        "vi": "Mức giá, tỷ lệ",
        "ex": ""
    },
    {
        "num": 685,
        "en": "Price",
        "pos": "n.",
        "ipa": "/praɪs/",
        "vi": "Giá cả",
        "ex": ""
    },
    {
        "num": 686,
        "en": "Charge",
        "pos": "n.",
        "ipa": "/tʃɑːdʒ/",
        "vi": "Chi phí, tiền thù lao",
        "ex": ""
    },
    {
        "num": 687,
        "en": "Fee",
        "pos": "n.",
        "ipa": "/fiː/",
        "vi": "Lệ phí",
        "ex": ""
    },
    {
        "num": 688,
        "en": "Ratio",
        "pos": "n.",
        "ipa": "/ˈreɪ.ʃi.əʊ/",
        "vi": "Tỷ lệ (toán học/thống kê)",
        "ex": ""
    },
    {
        "num": 689,
        "en": "Be richly supplied with sth",
        "pos": "phr.",
        "ipa": "/bi ˈrɪtʃ.li səˈplaɪd wɪð/",
        "vi": "Được cung cấp phong phú/dồi dào cái gì",
        "ex": ""
    },
    {
        "num": 690,
        "en": "Living organisms",
        "pos": "n.",
        "ipa": "/ˈlɪv.ɪŋ ˈɔː.ɡən.ɪ.zəmz/",
        "vi": "Các sinh vật sống",
        "ex": ""
    },
    {
        "num": 691,
        "en": "Co-exist",
        "pos": "v.",
        "ipa": "/ˌkəʊ.ɪɡˈzɪst/",
        "vi": "Cùng tồn tại",
        "ex": ""
    },
    {
        "num": 692,
        "en": "Complex, interrelated communities",
        "pos": "n.",
        "ipa": "/ˈkɒm.pleks ˌɪn.tə.rɪˈleɪ.tɪd kəˈmjuː.nə.tiz/",
        "vi": "Các cộng đồng phức tạp, có mối quan hệ mật thiết",
        "ex": ""
    },
    {
        "num": 693,
        "en": "Depend on one another",
        "pos": "phr.",
        "ipa": "/dɪˈpend ɒn wʌn əˈnʌð.ə/",
        "vi": "Phụ thuộc lẫn nhau",
        "ex": ""
    },
    {
        "num": 694,
        "en": "Set off a chain reaction",
        "pos": "idiom",
        "ipa": "/set ɒf ə tʃeɪn riˈæk.ʃən/",
        "vi": "Gây ra một phản ứng dây chuyền",
        "ex": ""
    },
    {
        "num": 695,
        "en": "The bottom of the food chain",
        "pos": "n.",
        "ipa": "/ðə ˈbɒt.əm əv ðə fuːd tʃeɪn/",
        "vi": "Đáy/Cuối của chuỗi thức ăn",
        "ex": ""
    },
    {
        "num": 696,
        "en": "Seem inconsequential",
        "pos": "phr.",
        "ipa": "/siːm ˌɪn.kɒn.sɪˈkwen.ʃəl/",
        "vi": "Có vẻ không quan trọng / tầm thường",
        "ex": ""
    },
    {
        "num": 697,
        "en": "Threaten the survival of sth",
        "pos": "phr.",
        "ipa": "/ˈθret.ən ðə səˈvaɪ.vəl əv/",
        "vi": "Đe dọa sự sống còn của...",
        "ex": ""
    },
    {
        "num": 698,
        "en": "Larger predators",
        "pos": "n.",
        "ipa": "/ˈlɑː.dʒə ˈpred.ə.təz/",
        "vi": "Những loài thú săn mồi lớn hơn",
        "ex": ""
    },
    {
        "num": 699,
        "en": "Prey upon / Prey on sth",
        "pos": "phr. v.",
        "ipa": "/preɪ əˈpɒn/",
        "vi": "Săn, ăn thịt loài nào",
        "ex": ""
    },
    {
        "num": 700,
        "en": "Ripple effect",
        "pos": "n.",
        "ipa": "/ˈrɪp.əl ɪˈfekt/",
        "vi": "Hiệu ứng gợn sóng (sự lan truyền hệ quả)",
        "ex": ""
    },
    {
        "num": 701,
        "en": "Bring along",
        "pos": "phr. v.",
        "ipa": "/brɪŋ əˈlɒŋ/",
        "vi": "Mang theo (về phía người nói/điểm đến)",
        "ex": ""
    },
    {
        "num": 702,
        "en": "Break down",
        "pos": "phr. v.",
        "ipa": "/breɪk daʊn/",
        "vi": "Hỏng hóc (máy móc), suy sụp, phân hủy",
        "ex": ""
    },
    {
        "num": 703,
        "en": "Break up",
        "pos": "phr. v.",
        "ipa": "/breɪk ʌp/",
        "vi": "Chia tay, đập vụn",
        "ex": ""
    },
    {
        "num": 704,
        "en": "Cut down on",
        "pos": "phr. v.",
        "ipa": "/kʌt daʊn ɒn/",
        "vi": "Cắt giảm, giảm bớt",
        "ex": ""
    },
    {
        "num": 705,
        "en": "Drop sb off",
        "pos": "phr. v.",
        "ipa": "/drɒp ɒf/",
        "vi": "Trả ai xuống xe, đưa ai đến nơi nào đó",
        "ex": ""
    },
    {
        "num": 706,
        "en": "Get down",
        "pos": "phr. v.",
        "ipa": "/ɡet daʊn/",
        "vi": "Đi xuống, làm ai đó buồn bã",
        "ex": ""
    },
    {
        "num": 707,
        "en": "Opt for",
        "pos": "phr. v.",
        "ipa": "/ɒpt fɔː/",
        "vi": "Lựa chọn (thường là giải pháp tốt hơn)",
        "ex": ""
    },
    {
        "num": 708,
        "en": "Show sb around",
        "pos": "phr. v.",
        "ipa": "/ʃəʊ əˈraʊnd/",
        "vi": "Dẫn ai đó đi tham quan vòng quanh",
        "ex": ""
    },
    {
        "num": 709,
        "en": "Take in",
        "pos": "phr. v.",
        "ipa": "/teɪk ɪn/",
        "vi": "Hấp thụ, hiểu (thông tin), thu hẹp (quần áo)",
        "ex": ""
    },
    {
        "num": 710,
        "en": "Take off",
        "pos": "phr. v.",
        "ipa": "/teɪk ɒf/",
        "vi": "Cất cánh (máy bay), thành công nhanh chóng",
        "ex": ""
    },
    {
        "num": 711,
        "en": "Take over",
        "pos": "phr. v.",
        "ipa": "/teɪk ˈəʊ.və/",
        "vi": "Tiếp quản (một công ty, vị trí)",
        "ex": ""
    },
    {
        "num": 712,
        "en": "Take up",
        "pos": "phr. v.",
        "ipa": "/teɪk ʌp/",
        "vi": "Bắt đầu một sở thích/thói quen mới",
        "ex": ""
    },
    {
        "num": 713,
        "en": "Throw away",
        "pos": "phr. v.",
        "ipa": "/θrəʊ əˈweɪ/",
        "vi": "Vứt đi",
        "ex": ""
    },
    {
        "num": 714,
        "en": "Turn up",
        "pos": "phr. v.",
        "ipa": "/tɜːn ʌp/",
        "vi": "Xuất hiện, đến",
        "ex": ""
    },
    {
        "num": 715,
        "en": "Hidden gem",
        "pos": "idiom",
        "ipa": "/ˈhɪd.ən dʒem/",
        "vi": "\"Viên ngọc ẩn\" (địa điểm đẹp ít người biết)",
        "ex": ""
    },
    {
        "num": 716,
        "en": "Get your hands dirty",
        "pos": "idiom",
        "ipa": "/ɡet jɔː hændz ˈdɜː.ti/",
        "vi": "Tự tay làm việc gì đó (làm vườn, cơ khí...)",
        "ex": ""
    },
    {
        "num": 717,
        "en": "In view of sth",
        "pos": "idiom",
        "ipa": "/ɪn vjuː əv/",
        "vi": "Xét đến, bởi vì (cân nhắc một sự việc)",
        "ex": ""
    },
    {
        "num": 718,
        "en": "Without the hassle of",
        "pos": "phr.",
        "ipa": "/wɪˈðaʊt ðə ˈhæs.əl əv/",
        "vi": "Không phải chịu sự phiền phức của...",
        "ex": ""
    },
    {
        "num": 719,
        "en": "Carbon footprint",
        "pos": "n. phr.",
        "ipa": "/ˌkɑː.bən ˈfʊt.prɪnt/",
        "vi": "Lượng khí thải carbon",
        "ex": ""
    },
    {
        "num": 720,
        "en": "Greenhouse gas emissions",
        "pos": "n. phr.",
        "ipa": "/ˌɡriːn.haʊs ˈɡæs ɪˈmɪʃ.ənz/",
        "vi": "Sự phát thải/Lượng khí thải nhà kính",
        "ex": ""
    },
    {
        "num": 721,
        "en": "Manage waste",
        "pos": "phr.",
        "ipa": "/ˈmæn.ɪdʒ weɪst/",
        "vi": "Quản lý, xử lý rác",
        "ex": ""
    },
    {
        "num": 722,
        "en": "Marine life",
        "pos": "n. phr.",
        "ipa": "/məˈriːn laɪf/",
        "vi": "Sinh vật biển",
        "ex": ""
    },
    {
        "num": 723,
        "en": "Plant-based diet",
        "pos": "n. phr.",
        "ipa": "/ˈplɑːnt.beɪst ˈdaɪ.ət/",
        "vi": "Chế độ ăn dựa trên thực vật",
        "ex": ""
    },
    {
        "num": 724,
        "en": "Single-use plastics",
        "pos": "n. phr.",
        "ipa": "/ˌsɪŋ.ɡəlˈjuːs ˈplæs.tɪks/",
        "vi": "Nhựa dùng một lần",
        "ex": ""
    },
    {
        "num": 725,
        "en": "A large amount of",
        "pos": "phr.",
        "ipa": "/ə lɑːdʒ əˈmaʊnt əv/",
        "vi": "Một lượng lớn... (đi với N không đếm được)",
        "ex": ""
    },
    {
        "num": 726,
        "en": "A local perspective",
        "pos": "n. phr.",
        "ipa": "/ə ˈləʊ.kəl pəˈspek.tɪv/",
        "vi": "Góc nhìn của người bản địa",
        "ex": ""
    },
    {
        "num": 727,
        "en": "Be interested in",
        "pos": "phr.",
        "ipa": "/bi ˈɪn.trəs.tɪd ɪn/",
        "vi": "Quan tâm, hứng thú với",
        "ex": ""
    },
    {
        "num": 728,
        "en": "Community center",
        "pos": "n. phr.",
        "ipa": "/kəˈmjuː.nə.ti ˌsen.tə/",
        "vi": "Trung tâm cộng đồng",
        "ex": ""
    },
    {
        "num": 729,
        "en": "Creative side",
        "pos": "n. phr.",
        "ipa": "/kriˈeɪ.tɪv saɪd/",
        "vi": "Khía cạnh sáng tạo",
        "ex": ""
    },
    {
        "num": 730,
        "en": "Language exchange",
        "pos": "n. phr.",
        "ipa": "/ˈlæŋ.ɡwɪdʒ ɪksˈtʃeɪndʒ/",
        "vi": "Giao lưu ngôn ngữ",
        "ex": ""
    },
    {
        "num": 731,
        "en": "Make friends",
        "pos": "phr.",
        "ipa": "/meɪk frendz/",
        "vi": "Kết bạn",
        "ex": ""
    },
    {
        "num": 732,
        "en": "Native speaker",
        "pos": "n. phr.",
        "ipa": "/ˌneɪ.tɪv ˈspiː.kə/",
        "vi": "Người bản xứ",
        "ex": ""
    },
    {
        "num": 733,
        "en": "Point of departure",
        "pos": "n. phr.",
        "ipa": "/pɔɪnt əv dɪˈpɑː.tʃə/",
        "vi": "Điểm khởi hành, điểm xuất phát",
        "ex": ""
    },
    {
        "num": 734,
        "en": "Scenic walk",
        "pos": "n. phr.",
        "ipa": "/ˈsiː.nɪk wɔːk/",
        "vi": "Chuyến đi dạo ngắm cảnh",
        "ex": ""
    },
    {
        "num": 735,
        "en": "Similar tastes",
        "pos": "n. phr.",
        "ipa": "/ˈsɪm.ɪ.lə teɪsts/",
        "vi": "Gu giống nhau, sở thích tương đồng",
        "ex": ""
    },
    {
        "num": 736,
        "en": "Solo traveler",
        "pos": "n. phr.",
        "ipa": "/ˈsəʊ.ləʊ ˈtræv.əl.ə/",
        "vi": "Khách du lịch một mình, du lịch bụi",
        "ex": ""
    },
    {
        "num": 737,
        "en": "Space available",
        "pos": "n. phr.",
        "ipa": "/speɪs əˈveɪ.lə.bəl/",
        "vi": "Không gian/Chỗ trống có sẵn",
        "ex": ""
    },
    {
        "num": 738,
        "en": "Travel preferences",
        "pos": "n. phr.",
        "ipa": "/ˈtræv.əl ˈpref.ər.ənsɪz/",
        "vi": "Những ưu tiên khi đi du lịch",
        "ex": ""
    },
    {
        "num": 739,
        "en": "Wide range of",
        "pos": "phr.",
        "ipa": "/waɪd reɪndʒ əv/",
        "vi": "Một loạt / Rất nhiều sự lựa chọn đa dạng",
        "ex": ""
    },
    {
        "num": 740,
        "en": "Wonder about",
        "pos": "phr. v.",
        "ipa": "/ˈwʌn.dər əˈbaʊt/",
        "vi": "Tự hỏi về chủ đề/người nào đó",
        "ex": ""
    },
    {
        "num": 741,
        "en": "Accumulate",
        "pos": "v.",
        "ipa": "/əˈkjuː.mjə.leɪt/",
        "vi": "Tích lũy, tích tụ",
        "ex": ""
    },
    {
        "num": 742,
        "en": "Devastate",
        "pos": "v.",
        "ipa": "/ˈdev.ə.steɪt/",
        "vi": "Tàn phá, phá hủy",
        "ex": ""
    },
    {
        "num": 743,
        "en": "Discard",
        "pos": "v.",
        "ipa": "/dɪˈskɑːd/",
        "vi": "Vứt bỏ, loại bỏ",
        "ex": ""
    },
    {
        "num": 744,
        "en": "Distribute",
        "pos": "v.",
        "ipa": "/dɪˈstrɪb.juːt/",
        "vi": "Phân phát, phân phối",
        "ex": ""
    },
    {
        "num": 745,
        "en": "Drown",
        "pos": "v.",
        "ipa": "/draʊn/",
        "vi": "Chết đuối",
        "ex": ""
    },
    {
        "num": 746,
        "en": "Enhance",
        "pos": "v.",
        "ipa": "/ɪnˈhɑːns/",
        "vi": "Nâng cao, làm tăng lên (trải nghiệm)",
        "ex": ""
    },
    {
        "num": 747,
        "en": "Inquire",
        "pos": "v.",
        "ipa": "/ɪnˈkwaɪə/",
        "vi": "Hỏi thăm, dò hỏi",
        "ex": ""
    },
    {
        "num": 748,
        "en": "Minimize",
        "pos": "v.",
        "ipa": "/ˈmɪn.ɪ.maɪz/",
        "vi": "Giảm thiểu đến mức tối đa",
        "ex": ""
    },
    {
        "num": 749,
        "en": "Nourish",
        "pos": "v.",
        "ipa": "/ˈnʌr.ɪʃ/",
        "vi": "Nuôi dưỡng",
        "ex": ""
    },
    {
        "num": 750,
        "en": "Reconnect",
        "pos": "v.",
        "ipa": "/ˌriː.kəˈnekt/",
        "vi": "Kết nối lại, liên lạc lại",
        "ex": ""
    },
    {
        "num": 751,
        "en": "Repurpose",
        "pos": "v.",
        "ipa": "/ˌriːˈpɜː.pəs/",
        "vi": "Thay đổi mục đích sử dụng, tái sử dụng",
        "ex": ""
    },
    {
        "num": 752,
        "en": "Seek",
        "pos": "v.",
        "ipa": "/siːk/",
        "vi": "Tìm kiếm, cố gắng có được",
        "ex": ""
    },
    {
        "num": 753,
        "en": "Threaten",
        "pos": "v.",
        "ipa": "/ˈθret.ən/",
        "vi": "Đe dọa",
        "ex": ""
    },
    {
        "num": 754,
        "en": "Triumph",
        "pos": "v., n.",
        "ipa": "/ˈtraɪ.əmf/",
        "vi": "Chiến thắng, thành công vang dội",
        "ex": ""
    },
    {
        "num": 755,
        "en": "Utilize",
        "pos": "v.",
        "ipa": "/ˈjuː.tɪ.laɪz/",
        "vi": "Tận dụng, sử dụng hiệu quả",
        "ex": ""
    },
    {
        "num": 756,
        "en": "Verify",
        "pos": "v.",
        "ipa": "/ˈver.ɪ.faɪ/",
        "vi": "Xác minh tính chân thực",
        "ex": ""
    },
    {
        "num": 757,
        "en": "Circumstance",
        "pos": "n.",
        "ipa": "/ˈsɜː.kəm.stɑːns/",
        "vi": "Hoàn cảnh, tình huống",
        "ex": ""
    },
    {
        "num": 758,
        "en": "Companion",
        "pos": "n.",
        "ipa": "/kəmˈpæn.jən/",
        "vi": "Người đồng hành, bạn đồng hành",
        "ex": ""
    },
    {
        "num": 759,
        "en": "Contributor",
        "pos": "n.",
        "ipa": "/kənˈtrɪb.jə.tə/",
        "vi": "Tác nhân, người/vật đóng góp vào",
        "ex": ""
    },
    {
        "num": 760,
        "en": "Deforestation",
        "pos": "n.",
        "ipa": "/diːˌfɒr.ɪˈsteɪ.ʃən/",
        "vi": "Nạn phá rừng, sự chặt phá rừng",
        "ex": ""
    },
    {
        "num": 761,
        "en": "Destination",
        "pos": "n.",
        "ipa": "/ˌdes.tɪˈneɪ.ʃən/",
        "vi": "Điểm đến",
        "ex": ""
    },
    {
        "num": 762,
        "en": "Ecosystem",
        "pos": "n.",
        "ipa": "/ˈiː.kəʊˌsɪs.təm/",
        "vi": "Hệ sinh thái",
        "ex": ""
    },
    {
        "num": 763,
        "en": "Enthusiasm",
        "pos": "n.",
        "ipa": "/ɪnˈθjuː.zi.æz.əm/",
        "vi": "Sự nhiệt tình, niềm đam mê",
        "ex": ""
    },
    {
        "num": 764,
        "en": "Equivalent",
        "pos": "n., adj.",
        "ipa": "/ɪˈkwɪv.əl.ənt/",
        "vi": "Sự/Vật tương đương",
        "ex": ""
    },
    {
        "num": 765,
        "en": "Getaway",
        "pos": "n.",
        "ipa": "/ˈɡet.ə.weɪ/",
        "vi": "Chuyến đi chơi ngắn ngày",
        "ex": ""
    },
    {
        "num": 766,
        "en": "Hassle",
        "pos": "n.",
        "ipa": "/ˈhæs.əl/",
        "vi": "Sự phiền phức, rắc rối",
        "ex": ""
    },
    {
        "num": 767,
        "en": "Humanity",
        "pos": "n.",
        "ipa": "/hjuːˈmæn.ə.ti/",
        "vi": "Nhân loại",
        "ex": ""
    },
    {
        "num": 768,
        "en": "Impact",
        "pos": "n.",
        "ipa": "/ˈɪm.pækt/",
        "vi": "Tác động, ảnh hưởng",
        "ex": ""
    },
    {
        "num": 769,
        "en": "Insight",
        "pos": "n.",
        "ipa": "/ˈɪn.saɪt/",
        "vi": "Sự hiểu biết sâu sắc, thông tin hữu ích",
        "ex": ""
    },
    {
        "num": 770,
        "en": "Landfill",
        "pos": "n.",
        "ipa": "/ˈlænd.fɪl/",
        "vi": "Bãi rác, bãi chôn lấp rác",
        "ex": ""
    },
    {
        "num": 771,
        "en": "Longitude",
        "pos": "n.",
        "ipa": "/ˈlɒŋ.ɡɪ.tʃuːd/",
        "vi": "Kinh độ (Khoảng cách Đông - Tây)",
        "ex": ""
    },
    {
        "num": 772,
        "en": "Materials",
        "pos": "n.",
        "ipa": "/məˈtɪə.ri.əlz/",
        "vi": "Vật liệu, dụng cụ (họa cụ)",
        "ex": ""
    },
    {
        "num": 773,
        "en": "Perspective",
        "pos": "n.",
        "ipa": "/pəˈspek.tɪv/",
        "vi": "Góc nhìn, quan điểm",
        "ex": ""
    },
    {
        "num": 774,
        "en": "Platform",
        "pos": "n.",
        "ipa": "/ˈplæt.fɔːm/",
        "vi": "Nền tảng (ứng dụng/trang web)",
        "ex": ""
    },
    {
        "num": 775,
        "en": "Preference",
        "pos": "n.",
        "ipa": "/ˈpref.ər.əns/",
        "vi": "Sự thích hơn, sở thích ưu tiên",
        "ex": ""
    },
    {
        "num": 776,
        "en": "Authentic",
        "pos": "adj.",
        "ipa": "/ɔːˈθen.tɪk/",
        "vi": "Chân thực, đích thực (nguyên bản)",
        "ex": ""
    },
    {
        "num": 777,
        "en": "Exclusive",
        "pos": "adj.",
        "ipa": "/ɪkˈskluː.sɪv/",
        "vi": "Độc quyền, dành riêng",
        "ex": ""
    },
    {
        "num": 778,
        "en": "Like-minded",
        "pos": "adj.",
        "ipa": "/ˌlaɪkˈmaɪn.dɪd/",
        "vi": "Cùng chí hướng, cùng sở thích/suy nghĩ",
        "ex": ""
    },
    {
        "num": 779,
        "en": "Stormy",
        "pos": "adj.",
        "ipa": "/ˈstɔː.mi/",
        "vi": "Có bão, giông bão",
        "ex": ""
    },
    {
        "num": 780,
        "en": "Sustainable",
        "pos": "adj.",
        "ipa": "/səˈsteɪ.nə.bəl/",
        "vi": "Bền vững (không gây hại cho môi trường)",
        "ex": ""
    },
    {
        "num": 781,
        "en": "Sustainably",
        "pos": "adv.",
        "ipa": "/səˈsteɪ.nə.bə.li/",
        "vi": "Một cách bền vững",
        "ex": ""
    },
    {
        "num": 782,
        "en": "Take place",
        "pos": "phr. v.",
        "ipa": "/teɪk pleɪs/",
        "vi": "Diễn ra (sự kiện có kế hoạch)",
        "ex": ""
    },
    {
        "num": 783,
        "en": "Meet up (with)",
        "pos": "phr. v.",
        "ipa": "/miːt ʌp/",
        "vi": "Gặp gỡ ai đó",
        "ex": ""
    },
    {
        "num": 784,
        "en": "Run into",
        "pos": "phr. v.",
        "ipa": "/rʌn ˈɪn.tuː/",
        "vi": "Tình cờ gặp ai đó",
        "ex": ""
    },
    {
        "num": 785,
        "en": "Hang out (with)",
        "pos": "phr. v.",
        "ipa": "/hæŋ aʊt/",
        "vi": "Đi chơi, dành thời gian với",
        "ex": ""
    },
    {
        "num": 786,
        "en": "Join in",
        "pos": "phr. v.",
        "ipa": "/dʒɔɪn ɪn/",
        "vi": "Tham gia vào (hoạt động đang diễn ra)",
        "ex": ""
    },
    {
        "num": 787,
        "en": "Bring in",
        "pos": "phr. v.",
        "ipa": "/brɪŋ ɪn/",
        "vi": "Thu hút, mang lại (lợi nhuận/người)",
        "ex": ""
    },
    {
        "num": 788,
        "en": "Work out",
        "pos": "phr. v.",
        "ipa": "/wɜːk aʊt/",
        "vi": "Tìm ra giải pháp, tập thể dục",
        "ex": ""
    },
    {
        "num": 789,
        "en": "Bridge the gap",
        "pos": "idiom",
        "ipa": "/brɪdʒ ðə ɡæp/",
        "vi": "Rút ngắn khoảng cách",
        "ex": ""
    },
    {
        "num": 790,
        "en": "In the palm of your hand",
        "pos": "idiom",
        "ipa": "/ɪn ðə pɑːm əv jɔː hænd/",
        "vi": "Trong tầm tay, kiểm soát hoàn toàn",
        "ex": ""
    },
    {
        "num": 791,
        "en": "Set a new standard",
        "pos": "phr.",
        "ipa": "/set ə njuː ˈstæn.dəd/",
        "vi": "Thiết lập một tiêu chuẩn mới",
        "ex": ""
    },
    {
        "num": 792,
        "en": "Hands-on training",
        "pos": "n. phr.",
        "ipa": "/ˌhændzˈɒn ˈtreɪ.nɪŋ/",
        "vi": "Đào tạo thực hành thực tế",
        "ex": ""
    },
    {
        "num": 793,
        "en": "Hands-on learning",
        "pos": "n. phr.",
        "ipa": "/ˌhændzˈɒn ˈlɜː.nɪŋ/",
        "vi": "Học tập thực hành thực tế",
        "ex": ""
    },
    {
        "num": 794,
        "en": "Fast-track path",
        "pos": "n. phr.",
        "ipa": "/fɑːst træk pɑːθ/",
        "vi": "Con đường tắt dẫn đến thành công",
        "ex": ""
    },
    {
        "num": 795,
        "en": "Thought-provoking topics",
        "pos": "n. phr.",
        "ipa": "/θɔːt prəˈvəʊ.kɪŋ ˈtɒp.ɪks/",
        "vi": "Những chủ đề kích thích tư duy",
        "ex": ""
    },
    {
        "num": 796,
        "en": "Brisk walk",
        "pos": "n. phr.",
        "ipa": "/brɪsk wɔːk/",
        "vi": "Đi bộ nhanh",
        "ex": ""
    },
    {
        "num": 797,
        "en": "Balanced diet",
        "pos": "n. phr.",
        "ipa": "/ˌbæl.ənst ˈdaɪ.ət/",
        "vi": "Chế độ ăn uống cân bằng",
        "ex": ""
    },
    {
        "num": 798,
        "en": "Unprecedented",
        "pos": "adj.",
        "ipa": "/ʌnˈpres.ɪ.den.tɪd/",
        "vi": "Chưa từng có tiền lệ (C1)",
        "ex": ""
    },
    {
        "num": 799,
        "en": "Exemplify",
        "pos": "v.",
        "ipa": "/ɪɡˈzem.plɪ.faɪ/",
        "vi": "Là ví dụ điển hình cho (C1)",
        "ex": ""
    },
    {
        "num": 800,
        "en": "Vibrant",
        "pos": "adj.",
        "ipa": "/ˈvaɪ.brənt/",
        "vi": "Rực rỡ, đầy sức sống (B2)",
        "ex": ""
    },
    {
        "num": 801,
        "en": "Compelling",
        "pos": "adj.",
        "ipa": "/kəmˈpel.ɪŋ/",
        "vi": "Hấp dẫn, thuyết phục (B2)",
        "ex": ""
    },
    {
        "num": 802,
        "en": "Foster",
        "pos": "v.",
        "ipa": "/ˈfɒs.tə/",
        "vi": "Nuôi dưỡng, thúc đẩy (B2)",
        "ex": ""
    },
    {
        "num": 803,
        "en": "Showcase",
        "pos": "v.",
        "ipa": "/ˈʃəʊ.keɪs/",
        "vi": "Trình diễn, phô diễn (B2)",
        "ex": ""
    },
    {
        "num": 804,
        "en": "Obsolete",
        "pos": "adj.",
        "ipa": "/ˌɒb.səlˈiːt/",
        "vi": "Lỗi thời, bị thay thế hoàn toàn (C2)",
        "ex": ""
    },
    {
        "num": 805,
        "en": "Get on with",
        "pos": "phr. v.",
        "ipa": "/ɡet ɒn wɪð/",
        "vi": "Hòa hợp với ai đó",
        "ex": ""
    },
    {
        "num": 806,
        "en": "Keep away from",
        "pos": "phr. v.",
        "ipa": "/kiːp əˈweɪ frəm/",
        "vi": "Tránh xa cái gì đó",
        "ex": ""
    },
    {
        "num": 807,
        "en": "Keep up with",
        "pos": "phr. v.",
        "ipa": "/kiːp ʌp wɪð/",
        "vi": "Theo kịp ai đó hoặc xu hướng/cái gì đó",
        "ex": ""
    },
    {
        "num": 808,
        "en": "Put up with",
        "pos": "phr. v.",
        "ipa": "/pʊt ʌp wɪð/",
        "vi": "Chịu đựng ai đó hoặc cái gì đó",
        "ex": ""
    },
    {
        "num": 809,
        "en": "Turn into",
        "pos": "phr. v.",
        "ipa": "/tɜːn ˈɪn.tuː/",
        "vi": "Biến thành (Ví dụ: biến thách thức thành cơ hội)",
        "ex": ""
    },
    {
        "num": 810,
        "en": "Affordable housing",
        "pos": "n. phr.",
        "ipa": "/əˈfɔː.də.bəl ˈhaʊ.zɪŋ/",
        "vi": "Nhà ở giá rẻ",
        "ex": ""
    },
    {
        "num": 811,
        "en": "Make a difference",
        "pos": "phr.",
        "ipa": "/meɪk ə ˈdɪf.ər.əns/",
        "vi": "Tạo nên sự khác biệt",
        "ex": ""
    },
    {
        "num": 812,
        "en": "Mass-produced souvenirs",
        "pos": "n. phr.",
        "ipa": "/ˌmæs.prəˈdʒuːst ˌsuː.vənˈɪəz/",
        "vi": "Quà lưu niệm được sản xuất hàng loạt",
        "ex": ""
    },
    {
        "num": 813,
        "en": "Traffic congestion",
        "pos": "n. phr.",
        "ipa": "/ˈtræf.ɪk kənˈdʒes.tʃən/",
        "vi": "Tình trạng tắc nghẽn giao thông",
        "ex": ""
    },
    {
        "num": 814,
        "en": "At risk of",
        "pos": "phr.",
        "ipa": "/ət rɪsk əv/",
        "vi": "Đang có nguy cơ (bị gì đó)",
        "ex": ""
    },
    {
        "num": 815,
        "en": "At the forefront of",
        "pos": "phr.",
        "ipa": "/ət ðə ˈfɔː.frʌnt əv/",
        "vi": "Đang dẫn đầu trong việc gì đó",
        "ex": ""
    },
    {
        "num": 816,
        "en": "Leave a lasting impact on",
        "pos": "phr.",
        "ipa": "/liːv ə ˈlɑː.stɪŋ ˈɪm.pækt ɒn/",
        "vi": "Để lại một dấu ấn lâu dài đối với",
        "ex": ""
    },
    {
        "num": 817,
        "en": "Miss an opportunity",
        "pos": "phr.",
        "ipa": "/mɪs ən ˌɒp.əˈtʃuː.nə.ti/",
        "vi": "Bỏ lỡ một cơ hội",
        "ex": ""
    },
    {
        "num": 818,
        "en": "Raise awareness about",
        "pos": "phr.",
        "ipa": "/reɪz əˈweə.nəs əˈbaʊt/",
        "vi": "Nâng cao nhận thức về một vấn đề",
        "ex": ""
    },
    {
        "num": 819,
        "en": "Share something with",
        "pos": "phr.",
        "ipa": "/ʃeə ˈsʌm.θɪŋ wɪð/",
        "vi": "Chia sẻ cái gì đó với ai đó",
        "ex": ""
    },
    {
        "num": 820,
        "en": "Bustling",
        "pos": "adj.",
        "ipa": "/ˈbʌs.lɪŋ/",
        "vi": "Sôi động, nhộn nhịp (nền kinh tế/thành phố)",
        "ex": ""
    },
    {
        "num": 821,
        "en": "Captivate",
        "pos": "v.",
        "ipa": "/ˈkæp.tɪ.veɪt/",
        "vi": "Thu hút, làm say đắm (khán giả, người xem)",
        "ex": ""
    },
    {
        "num": 822,
        "en": "Contaminate",
        "pos": "v.",
        "ipa": "/kənˈtæm.ɪ.neɪt/",
        "vi": "Làm ô nhiễm (nguồn nước, thực phẩm)",
        "ex": ""
    },
    {
        "num": 823,
        "en": "Feasible",
        "pos": "adj.",
        "ipa": "/ˈfiː.zə.bəl/",
        "vi": "Khả thi, có thể thực hiện được",
        "ex": ""
    },
    {
        "num": 824,
        "en": "Influx",
        "pos": "n.",
        "ipa": "/ˈɪn.flʌks/",
        "vi": "Sự đổ xô, dòng người/vật chảy vào",
        "ex": ""
    },
    {
        "num": 825,
        "en": "Infrastructure",
        "pos": "n.",
        "ipa": "/ˈɪn.frəˌstrʌk.tʃə/",
        "vi": "Cơ sở hạ tầng (đường sá, cầu cống, điện)",
        "ex": ""
    },
    {
        "num": 826,
        "en": "Innovative",
        "pos": "adj.",
        "ipa": "/ˈɪn.ə.və.tɪv/",
        "vi": "Đổi mới, mang tính sáng tạo",
        "ex": ""
    },
    {
        "num": 827,
        "en": "Mesmerizing",
        "pos": "adj.",
        "ipa": "/ˈmez.mə.raɪ.zɪŋ/",
        "vi": "Đầy mê hoặc, quyến rũ không thể rời mắt",
        "ex": ""
    },
    {
        "num": 828,
        "en": "Overwhelm",
        "pos": "v.",
        "ipa": "/ˌəʊ.vəˈwelm/",
        "vi": "Làm quá tải, lấn át",
        "ex": ""
    },
    {
        "num": 829,
        "en": "Substandard",
        "pos": "adj.",
        "ipa": "/ˌsʌbˈstæn.dəd/",
        "vi": "Không đạt chuẩn (điều kiện sống...)",
        "ex": ""
    },
    {
        "num": 830,
        "en": "Inhabitant",
        "pos": "(n)",
        "ipa": "/ɪnˈhæb.ɪ.tənt/",
        "vi": "Cư dân",
        "ex": ""
    },
    {
        "num": 831,
        "en": "Jump at",
        "pos": "phr. v.",
        "ipa": "/dʒʌmp ət/",
        "vi": "Chớp lấy (cơ hội) ngay lập tức",
        "ex": ""
    },
    {
        "num": 832,
        "en": "Portrait",
        "pos": "(n)",
        "ipa": "/ˈpɔː.trɪt/",
        "vi": "Bức chân dung",
        "ex": ""
    },
    {
        "num": 833,
        "en": "Cosmos",
        "pos": "(n)",
        "ipa": "/ˈkɒz.mɒs/",
        "vi": "Vũ trụ",
        "ex": ""
    },
    {
        "num": 834,
        "en": "Feel up to",
        "pos": "phr. v.",
        "ipa": "/fiːl ʌp tuː/",
        "vi": "Cảm thấy đủ sức/hứng thú làm gì",
        "ex": ""
    },
    {
        "num": 835,
        "en": "Harmonious",
        "pos": "(adj)",
        "ipa": "/hɑːˈməʊ.ni.əs/",
        "vi": "Hài hòa, êm ấm",
        "ex": ""
    },
    {
        "num": 836,
        "en": "Congestion",
        "pos": "(n)",
        "ipa": "/kənˈdʒes.tʃən/",
        "vi": "Sự tắc nghẽn (giao thông)",
        "ex": ""
    },
    {
        "num": 837,
        "en": "Overprotective",
        "pos": "(adj)",
        "ipa": "/ˌəʊ.və.prəˈtek.tɪv/",
        "vi": "Bao bọc, bảo vệ quá mức",
        "ex": ""
    },
    {
        "num": 838,
        "en": "Call it a day",
        "pos": "idiom",
        "ipa": "/kɔːl ɪt ə deɪ/",
        "vi": "Kết thúc một ngày làm việc/hoạt động",
        "ex": ""
    },
    {
        "num": 839,
        "en": "Acquaintance",
        "pos": "(n)",
        "ipa": "/əˈkweɪn.təns/",
        "vi": "Người quen (không quá thân)",
        "ex": ""
    },
    {
        "num": 840,
        "en": "Vocation",
        "pos": "(n)",
        "ipa": "/vəʊˈkeɪ.ʃən/",
        "vi": "Nghề nghiệp (thiên hướng, đam mê)",
        "ex": ""
    },
    {
        "num": 841,
        "en": "Get by",
        "pos": "phr. v.",
        "ipa": "/ɡet baɪ/",
        "vi": "Xoay xở sống sót (thường là về tài chính)",
        "ex": ""
    },
    {
        "num": 842,
        "en": "Hit the nail on the head",
        "pos": "idiom",
        "ipa": "/hɪt ðə neɪl ɒn ðə hed/",
        "vi": "Nói trúng phóc, hoàn toàn chính xác",
        "ex": ""
    },
    {
        "num": 843,
        "en": "Competence",
        "pos": "(n)",
        "ipa": "/ˈkɒm.pɪ.təns/",
        "vi": "Năng lực, khả năng",
        "ex": ""
    },
    {
        "num": 844,
        "en": "Breathtaking",
        "pos": "(adj)",
        "ipa": "/ˈbreθˌteɪ.kɪŋ/",
        "vi": "Đẹp đến ngộp thở",
        "ex": ""
    },
    {
        "num": 845,
        "en": "Extrovert",
        "pos": "(n)",
        "ipa": "/ˈek.strə.vɜːt/",
        "vi": "Người hướng ngoại",
        "ex": ""
    },
    {
        "num": 846,
        "en": "Proliferation",
        "pos": "(n)",
        "ipa": "/prəˌlɪf.ərˈeɪ.ʃən/",
        "vi": "Sự gia tăng nhanh chóng",
        "ex": ""
    },
    {
        "num": 847,
        "en": "Build up",
        "pos": "phr. v.",
        "ipa": "/bɪld ʌp/",
        "vi": "Tích lũy, xây dựng, tăng cường",
        "ex": ""
    },
    {
        "num": 848,
        "en": "Keep one's chin up",
        "pos": "idiom",
        "ipa": "/kiːp wʌnz tʃɪn ʌp/",
        "vi": "Lạc quan lên, đừng nản chí",
        "ex": ""
    },
    {
        "num": 849,
        "en": "Hygiene",
        "pos": "(n)",
        "ipa": "/ˈhaɪ.dʒiːn/",
        "vi": "Vệ sinh (cá nhân, cộng đồng)",
        "ex": ""
    },
    {
        "num": 850,
        "en": "Pass away",
        "pos": "phr. v.",
        "ipa": "/pɑːs əˈweɪ/",
        "vi": "Qua đời (cách nói lịch sự của \"die\")",
        "ex": ""
    },
    {
        "num": 851,
        "en": "Sedentary",
        "pos": "(adj)",
        "ipa": "/ˈsed.ən.tər.i/",
        "vi": "Ít vận động, ngồi nhiều",
        "ex": ""
    },
    {
        "num": 852,
        "en": "Acculturation",
        "pos": "(n)",
        "ipa": "/əˌkʌl.tʃərˈeɪ.ʃən/",
        "vi": "Sự giao thoa văn hóa",
        "ex": ""
    },
    {
        "num": 853,
        "en": "Come off",
        "pos": "phr. v.",
        "ipa": "/kʌm ɒf/",
        "vi": "Thành công (= succeed), bong/tróc ra",
        "ex": ""
    },
    {
        "num": 854,
        "en": "Façade",
        "pos": "(n)",
        "ipa": "/fəˈsɑːd/",
        "vi": "Mặt tiền của tòa nhà",
        "ex": ""
    },
    {
        "num": 855,
        "en": "Make up",
        "pos": "phr. v.",
        "ipa": "/meɪk ʌp/",
        "vi": "Trang điểm, bịa chuyện, làm hòa, chiếm",
        "ex": ""
    },
    {
        "num": 856,
        "en": "Fertility",
        "pos": "(n)",
        "ipa": "/fəˈtɪl.ə.ti/",
        "vi": "Khả năng sinh sản, tỷ lệ sinh",
        "ex": ""
    },
    {
        "num": 857,
        "en": "Backpacking",
        "pos": "(n)",
        "ipa": "/ˈbækˌpæk.ɪŋ/",
        "vi": "Du lịch bụi",
        "ex": ""
    },
    {
        "num": 858,
        "en": "Here and there",
        "pos": "idiom",
        "ipa": "/hɪər ənd ðeə/",
        "vi": "Khắp mọi nơi (= high and low)",
        "ex": ""
    },
    {
        "num": 859,
        "en": "Blueprint",
        "pos": "(n)",
        "ipa": "/ˈbluː.prɪnt/",
        "vi": "Bản thiết kế, kế hoạch chi tiết",
        "ex": ""
    },
    {
        "num": 860,
        "en": "The ball is in your court",
        "pos": "idiom",
        "ipa": "/ðə bɔːl ɪz ɪn jɔː kɔːt/",
        "vi": "Quyết định hiện tại tùy thuộc vào bạn",
        "ex": ""
    },
    {
        "num": 861,
        "en": "Carbon-neutral",
        "pos": "(adj)",
        "ipa": "/ˌkɑː.bənˈnjuː.trəl/",
        "vi": "Trung hòa carbon",
        "ex": ""
    },
    {
        "num": 862,
        "en": "Deterrent",
        "pos": "(n)",
        "ipa": "/dɪˈter.ənt/",
        "vi": "Biện pháp răn đe, rào cản",
        "ex": ""
    },
    {
        "num": 863,
        "en": "Era",
        "pos": "(n)",
        "ipa": "/ˈɪə.rə/",
        "vi": "Kỷ nguyên, thời đại",
        "ex": ""
    },
    {
        "num": 864,
        "en": "Run out of",
        "pos": "phr. v.",
        "ipa": "/rʌn aʊt əv/",
        "vi": "Dùng hết, cạn kiệt cái gì",
        "ex": ""
    },
    {
        "num": 865,
        "en": "Simulation",
        "pos": "(n)",
        "ipa": "/ˌsɪm.jəˈleɪ.ʃən/",
        "vi": "Sự mô phỏng",
        "ex": ""
    },
    {
        "num": 866,
        "en": "Disruptive",
        "pos": "(adj)",
        "ipa": "/dɪsˈrʌp.tɪv/",
        "vi": "Đột phá (thay đổi hoàn toàn cục diện)",
        "ex": ""
    },
    {
        "num": 867,
        "en": "Chronic",
        "pos": "(adj)",
        "ipa": "/ˈkrɒn.ɪk/",
        "vi": "Mãn tính (bệnh)",
        "ex": ""
    },
    {
        "num": 868,
        "en": "Vandalism",
        "pos": "(n)",
        "ipa": "/ˈvæn.dəl.ɪ.zəm/",
        "vi": "Tội phá hoại của công",
        "ex": ""
    },
    {
        "num": 869,
        "en": "Break a leg",
        "pos": "idiom",
        "ipa": "/breɪk ə leɡ/",
        "vi": "Chúc may mắn (trước khi thi đấu/biểu diễn)",
        "ex": ""
    },
    {
        "num": 870,
        "en": "Put all one's eggs in one basket",
        "pos": "idiom",
        "ipa": "/pʊt ɔːl wʌnz eɡz ɪn wʌn ˈbɑː.skɪt/",
        "vi": "Bỏ hết trứng vào một rổ (chấp nhận rủi ro)",
        "ex": ""
    },
    {
        "num": 871,
        "en": "Let sleeping dogs lie",
        "pos": "idiom",
        "ipa": "/let ˈsliː.pɪŋ dɒɡz laɪ/",
        "vi": "Đừng gợi lại chuyện không hay trong quá khứ",
        "ex": ""
    },
    {
        "num": 872,
        "en": "Extraterrestrial",
        "pos": "(adj)",
        "ipa": "/ˌek.strə.təˈres.tri.əl/",
        "vi": "Thuộc về ngoài hành tinh",
        "ex": ""
    },
    {
        "num": 873,
        "en": "Not someone's cup of tea",
        "pos": "idiom",
        "ipa": "/nɒt wʌnz kʌp əv tiː/",
        "vi": "Không phải gu/sở thích của ai đó",
        "ex": ""
    },
    {
        "num": 874,
        "en": "Circulation",
        "pos": "(n)",
        "ipa": "/ˌsɜː.kjəˈleɪ.ʃən/",
        "vi": "Lượng phát hành (báo chí)",
        "ex": ""
    },
    {
        "num": 875,
        "en": "Find out",
        "pos": "phr. v.",
        "ipa": "/faɪnd aʊt/",
        "vi": "Tìm ra, phát hiện ra thông tin",
        "ex": ""
    },
    {
        "num": 876,
        "en": "Frontier",
        "pos": "(n)",
        "ipa": "/ˈfrʌn.tɪə/",
        "vi": "Ranh giới, ranh giới khám phá",
        "ex": ""
    },
    {
        "num": 877,
        "en": "Speak of the devil",
        "pos": "idiom",
        "ipa": "/spiːk əv ðə ˈdev.əl/",
        "vi": "Vừa nhắc tào tháo, tào tháo tới",
        "ex": ""
    },
    {
        "num": 878,
        "en": "Commemorate",
        "pos": "(v)",
        "ipa": "/kəˈmem.ə.reɪt/",
        "vi": "Tưởng niệm, kỷ niệm",
        "ex": ""
    },
    {
        "num": 879,
        "en": "Imprisonment",
        "pos": "(n)",
        "ipa": "/ɪmˈprɪz.ən.mənt/",
        "vi": "Hình phạt tù",
        "ex": ""
    },
    {
        "num": 880,
        "en": "Put away",
        "pos": "phr. v.",
        "ipa": "/pʊt əˈweɪ/",
        "vi": "Cất đi",
        "ex": ""
    },
    {
        "num": 881,
        "en": "Carry on",
        "pos": "phr. v.",
        "ipa": "/ˈkær.i ɒn/",
        "vi": "Tiếp tục (= continue)",
        "ex": ""
    },
    {
        "num": 882,
        "en": "Egalitarian",
        "pos": "(adj)",
        "ipa": "/ɪˌɡæl.ɪˈteə.ri.ən/",
        "vi": "Bình đẳng",
        "ex": ""
    },
    {
        "num": 883,
        "en": "Give someone the cold shoulder",
        "pos": "idiom",
        "ipa": "/ɡɪv ˈsʌm.wʌn ðə kəʊld ˈʃəʊl.də/",
        "vi": "Phớt lờ, lạnh nhạt với ai",
        "ex": ""
    },
    {
        "num": 884,
        "en": "Get round to",
        "pos": "phr. v.",
        "ipa": "/ɡet raʊnd tuː/",
        "vi": "Cuối cùng cũng có thời gian làm việc gì",
        "ex": ""
    },
    {
        "num": 885,
        "en": "Hectic",
        "pos": "(adj)",
        "ipa": "/ˈhek.tɪk/",
        "vi": "Bận rộn, tất bật",
        "ex": ""
    },
    {
        "num": 886,
        "en": "Drop off",
        "pos": "phr. v.",
        "ipa": "/drɒp ɒf/",
        "vi": "Ngủ gật, sụt giảm, thả ai/đồ vật xuống xe",
        "ex": ""
    },
    {
        "num": 887,
        "en": "Satellite",
        "pos": "(n)",
        "ipa": "/ˈsæt.əl.aɪt/",
        "vi": "Vệ tinh",
        "ex": ""
    },
    {
        "num": 888,
        "en": "Ancestor",
        "pos": "(n)",
        "ipa": "/ˈæn.ses.tə/",
        "vi": "Tổ tiên",
        "ex": ""
    },
    {
        "num": 889,
        "en": "Quantum",
        "pos": "(n/adj)",
        "ipa": "/ˈkwɒn.təm/",
        "vi": "Lượng tử",
        "ex": ""
    },
    {
        "num": 890,
        "en": "Let down",
        "pos": "phr. v.",
        "ipa": "/let daʊn/",
        "vi": "Làm ai đó thất vọng",
        "ex": ""
    },
    {
        "num": 891,
        "en": "Close down",
        "pos": "phr. v.",
        "ipa": "/kləʊz daʊn/",
        "vi": "Đóng cửa hẳn, phá sản (doanh nghiệp)",
        "ex": ""
    },
    {
        "num": 892,
        "en": "Get along (with)",
        "pos": "phr. v.",
        "ipa": "/ɡet əˈlɒŋ wɪð/",
        "vi": "Có mối quan hệ hòa hợp với ai",
        "ex": ""
    },
    {
        "num": 893,
        "en": "Census",
        "pos": "(n)",
        "ipa": "/ˈsen.səs/",
        "vi": "Cuộc điều tra dân số",
        "ex": ""
    },
    {
        "num": 894,
        "en": "Inflation",
        "pos": "(n)",
        "ipa": "/ɪnˈfleɪ.ʃən/",
        "vi": "Lạm phát",
        "ex": ""
    },
    {
        "num": 895,
        "en": "Bias",
        "pos": "(n)",
        "ipa": "/ˈbaɪ.əs/",
        "vi": "Sự thiên vị, thành kiến",
        "ex": ""
    },
    {
        "num": 896,
        "en": "Canvas",
        "pos": "(n)",
        "ipa": "/ˈkæn.vəs/",
        "vi": "Tranh sơn dầu, giá vẽ",
        "ex": ""
    },
    {
        "num": 897,
        "en": "Ecological footprint",
        "pos": "(n)",
        "ipa": "/ˌiː.kəˈlɒdʒ.ɪ.kəl ˈfʊt.prɪnt/",
        "vi": "Dấu chân sinh thái",
        "ex": ""
    },
    {
        "num": 898,
        "en": "Benevolent",
        "pos": "(adj)",
        "ipa": "/bəˈnev.əl.ənt/",
        "vi": "Nhân từ, rộng lượng",
        "ex": ""
    },
    {
        "num": 899,
        "en": "Put down",
        "pos": "phr. v.",
        "ipa": "/pʊt daʊn/",
        "vi": "Đặt xuống, hạ nhục ai đó",
        "ex": ""
    },
    {
        "num": 900,
        "en": "Stand for",
        "pos": "phr. v.",
        "ipa": "/stænd fɔː/",
        "vi": "Viết tắt của, đại diện, ủng hộ",
        "ex": ""
    },
    {
        "num": 901,
        "en": "Asteroid",
        "pos": "(n)",
        "ipa": "/ˈæs.tər.ɔɪd/",
        "vi": "Tiểu hành tinh",
        "ex": ""
    },
    {
        "num": 902,
        "en": "Souvenir",
        "pos": "(n)",
        "ipa": "/ˌsuː.vənˈɪə/",
        "vi": "Quà lưu niệm",
        "ex": ""
    },
    {
        "num": 903,
        "en": "Neck and neck",
        "pos": "idiom",
        "ipa": "/nek ənd nek/",
        "vi": "Ngang tài ngang sức, sát nút nhau",
        "ex": ""
    },
    {
        "num": 904,
        "en": "Corruption",
        "pos": "(n)",
        "ipa": "/kəˈrʌp.ʃən/",
        "vi": "Nạn tham nhũng",
        "ex": ""
    },
    {
        "num": 905,
        "en": "Hand in",
        "pos": "phr. v.",
        "ipa": "/hænd ɪn/",
        "vi": "Nộp (bài tập, giấy tờ)",
        "ex": ""
    },
    {
        "num": 906,
        "en": "Ozone layer",
        "pos": "(n)",
        "ipa": "/ˈəʊ.zəʊn ˌleɪ.ə/",
        "vi": "Tầng ô-zôn",
        "ex": ""
    },
    {
        "num": 907,
        "en": "Fight off",
        "pos": "phr. v.",
        "ipa": "/faɪt ɒf/",
        "vi": "Đẩy lùi (bệnh tật, kẻ thù)",
        "ex": ""
    },
    {
        "num": 908,
        "en": "Standardize",
        "pos": "(v)",
        "ipa": "/ˈstæn.də.daɪz/",
        "vi": "Tiêu chuẩn hóa (bài thi)",
        "ex": ""
    },
    {
        "num": 909,
        "en": "Orchestra",
        "pos": "(n)",
        "ipa": "/ˈɔː.kɪ.strə/",
        "vi": "Dàn nhạc giao hưởng",
        "ex": ""
    },
    {
        "num": 910,
        "en": "Hypothesis",
        "pos": "(n)",
        "ipa": "/haɪˈpɒθ.ə.sɪs/",
        "vi": "Giả thuyết",
        "ex": ""
    },
    {
        "num": 911,
        "en": "Tariff",
        "pos": "(n)",
        "ipa": "/ˈtær.ɪf/",
        "vi": "Thuế quan xuất nhập khẩu",
        "ex": ""
    },
    {
        "num": 912,
        "en": "Hand over",
        "pos": "phr. v.",
        "ipa": "/hænd ˈəʊ.və/",
        "vi": "Giao nộp, bàn giao (quyền lực, đồ vật)",
        "ex": ""
    },
    {
        "num": 913,
        "en": "Get something off one's chest",
        "pos": "idiom",
        "ipa": "/ɡet ˈsʌm.θɪŋ ɒf wʌnz tʃest/",
        "vi": "Thổ lộ tâm tư để nhẹ lòng",
        "ex": ""
    },
    {
        "num": 914,
        "en": "Advocate",
        "pos": "(v/n)",
        "ipa": "/ˈæd.və.keɪt/",
        "vi": "Ủng hộ, người biện hộ",
        "ex": ""
    },
    {
        "num": 915,
        "en": "Death rate",
        "pos": "(n)",
        "ipa": "/deθ reɪt/",
        "vi": "Tỷ lệ tử",
        "ex": ""
    },
    {
        "num": 916,
        "en": "Catch up with",
        "pos": "phr. v.",
        "ipa": "/kætʃ ʌp wɪð/",
        "vi": "Bắt kịp, theo kịp ai/cái gì",
        "ex": ""
    },
    {
        "num": 917,
        "en": "Inspiration",
        "pos": "(n)",
        "ipa": "/ˌɪn.spɪˈreɪ.ʃən/",
        "vi": "Nguồn cảm hứng",
        "ex": ""
    },
    {
        "num": 918,
        "en": "Draw up",
        "pos": "phr. v.",
        "ipa": "/drɔː ʌp/",
        "vi": "Lên kế hoạch, soạn thảo (văn bản)",
        "ex": ""
    },
    {
        "num": 919,
        "en": "Delinquent",
        "pos": "(adj/n)",
        "ipa": "/dɪˈlɪŋ.kwənt/",
        "vi": "Kẻ phạm pháp (thanh thiếu niên)",
        "ex": ""
    },
    {
        "num": 920,
        "en": "Captivating",
        "pos": "(adj)",
        "ipa": "/ˈkæp.tɪ.veɪ.tɪŋ/",
        "vi": "Đầy cuốn hút, quyến rũ",
        "ex": ""
    },
    {
        "num": 921,
        "en": "Hand out",
        "pos": "phr. v.",
        "ipa": "/hænd aʊt/",
        "vi": "Phân phát",
        "ex": ""
    },
    {
        "num": 922,
        "en": "Come up",
        "pos": "phr. v.",
        "ipa": "/kʌm ʌp/",
        "vi": "Xảy ra bất ngờ, được nhắc đến",
        "ex": ""
    },
    {
        "num": 923,
        "en": "Make a long story short",
        "pos": "idiom",
        "ipa": "/meɪk ə lɒŋ ˈstɔː.ri ʃɔːt/",
        "vi": "Nói tóm lại là",
        "ex": ""
    },
    {
        "num": 924,
        "en": "Greenhouse effect",
        "pos": "(n)",
        "ipa": "/ˈɡriːn.haʊs ɪˌfekt/",
        "vi": "Hiệu ứng nhà kính",
        "ex": ""
    },
    {
        "num": 925,
        "en": "Homicide",
        "pos": "(n)",
        "ipa": "/ˈhɒm.ɪ.saɪd/",
        "vi": "Tội giết người",
        "ex": ""
    },
    {
        "num": 926,
        "en": "Under the weather",
        "pos": "idiom",
        "ipa": "/ˈʌn.də ðə ˈweð.ə/",
        "vi": "Thấy không được khỏe, hơi ốm",
        "ex": ""
    },
    {
        "num": 927,
        "en": "Metropolitan",
        "pos": "(adj)",
        "ipa": "/ˌmet.rəˈpɒl.ɪ.tən/",
        "vi": "Thuộc về khu đô thị lớn",
        "ex": ""
    },
    {
        "num": 928,
        "en": "Call in",
        "pos": "phr. v.",
        "ipa": "/kɔːl ɪn/",
        "vi": "Mời đến, gọi chuyên gia đến giúp",
        "ex": ""
    },
    {
        "num": 929,
        "en": "Philanthropy",
        "pos": "(n)",
        "ipa": "/fɪˈlæn.θrə.pi/",
        "vi": "Công tác từ thiện, lòng nhân ái",
        "ex": ""
    },
    {
        "num": 930,
        "en": "Monumental",
        "pos": "(adj)",
        "ipa": "/ˌmɒn.jəˈmen.təl/",
        "vi": "Hùng vĩ, vĩ đại (công trình)",
        "ex": ""
    },
    {
        "num": 931,
        "en": "Burn the midnight oil",
        "pos": "idiom",
        "ipa": "/bɜːn ðə ˈmɪd.naɪt ɔɪl/",
        "vi": "Thức khuya để học bài, làm việc",
        "ex": ""
    },
    {
        "num": 932,
        "en": "Take after",
        "pos": "phr. v.",
        "ipa": "/teɪk ˈɑːf.tə/",
        "vi": "Giống ai đó (về ngoại hình/tính cách)",
        "ex": ""
    },
    {
        "num": 933,
        "en": "Look over",
        "pos": "phr. v.",
        "ipa": "/lʊk ˈəʊ.və/",
        "vi": "Kiểm tra nhanh, xem xét lướt qua",
        "ex": ""
    },
    {
        "num": 934,
        "en": "Encryption",
        "pos": "(n)",
        "ipa": "/ɪnˈkrɪp.ʃən/",
        "vi": "Sự mã hóa (dữ liệu)",
        "ex": ""
    },
    {
        "num": 935,
        "en": "Call on",
        "pos": "phr. v.",
        "ipa": "/kɔːl ɒn/",
        "vi": "Kêu gọi, ghé thăm ai một lát",
        "ex": ""
    },
    {
        "num": 936,
        "en": "Exhibition",
        "pos": "(n)",
        "ipa": "/ˌek.sɪˈbɪʃ.ən/",
        "vi": "Buổi triển lãm",
        "ex": ""
    },
    {
        "num": 937,
        "en": "Juvenile",
        "pos": "(adj/n)",
        "ipa": "/ˈdʒuː.vən.aɪl/",
        "vi": "Vị thành niên",
        "ex": ""
    },
    {
        "num": 938,
        "en": "Smuggling",
        "pos": "(n)",
        "ipa": "/ˈsmʌɡ.lɪŋ/",
        "vi": "Nạn buôn lậu",
        "ex": ""
    },
    {
        "num": 939,
        "en": "Bump into",
        "pos": "phr. v.",
        "ipa": "/bʌmp ˈɪn.tuː/",
        "vi": "Tình cờ gặp ai (= Run into)",
        "ex": ""
    },
    {
        "num": 940,
        "en": "Kill two birds with one stone",
        "pos": "idiom",
        "ipa": "/kɪl tuː bɜːdz wɪð wʌn stəʊn/",
        "vi": "Một mũi tên trúng hai đích",
        "ex": ""
    },
    {
        "num": 941,
        "en": "Upbringing",
        "pos": "(n)",
        "ipa": "/ˈʌpˌbrɪŋ.ɪŋ/",
        "vi": "Sự nuôi dưỡng, dạy dỗ",
        "ex": ""
    },
    {
        "num": 942,
        "en": "Keep an eye on",
        "pos": "idiom",
        "ipa": "/kiːp ən aɪ ɒn/",
        "vi": "Để mắt tới, trông chừng",
        "ex": ""
    },
    {
        "num": 943,
        "en": "Get the hang of something",
        "pos": "idiom",
        "ipa": "/ɡet ðə hæŋ əv ˈsʌm.θɪŋ/",
        "vi": "Nắm bắt được cách làm cái gì đó",
        "ex": ""
    },
    {
        "num": 944,
        "en": "Go on",
        "pos": "phr. v.",
        "ipa": "/ɡəʊ ɒn/",
        "vi": "Tiếp tục, xảy ra",
        "ex": ""
    },
    {
        "num": 945,
        "en": "Stagnant",
        "pos": "(adj)",
        "ipa": "/ˈstæɡ.nənt/",
        "vi": "Trì trệ, ứ đọng",
        "ex": ""
    },
    {
        "num": 946,
        "en": "Excavation",
        "pos": "(n)",
        "ipa": "/ˌeks.kəˈveɪ.ʃən/",
        "vi": "Sự khai quật",
        "ex": ""
    },
    {
        "num": 947,
        "en": "Early bird",
        "pos": "(n)",
        "ipa": "/ˈɜː.li bɜːd/",
        "vi": "Người dậy sớm",
        "ex": ""
    },
    {
        "num": 948,
        "en": "Diligent",
        "pos": "(adj)",
        "ipa": "/ˈdɪl.ɪ.dʒənt/",
        "vi": "Siêng năng, cần mẫn",
        "ex": ""
    },
    {
        "num": 949,
        "en": "Breeding",
        "pos": "(n)",
        "ipa": "/ˈbriː.dɪŋ/",
        "vi": "Sự sinh sản, nhân giống",
        "ex": ""
    },
    {
        "num": 950,
        "en": "Prescription",
        "pos": "(n)",
        "ipa": "/prɪˈskrɪp.ʃən/",
        "vi": "Đơn thuốc",
        "ex": ""
    },
    {
        "num": 951,
        "en": "Astronaut",
        "pos": "(n)",
        "ipa": "/ˈæs.trə.nɔːt/",
        "vi": "Phi hành gia",
        "ex": ""
    },
    {
        "num": 952,
        "en": "Multitasking",
        "pos": "(n)",
        "ipa": "/ˌmʌl.tiˈtɑːs.kɪŋ/",
        "vi": "Kỹ năng làm nhiều việc cùng lúc",
        "ex": ""
    },
    {
        "num": 953,
        "en": "Fly off the handle",
        "pos": "idiom",
        "ipa": "/flaɪ ɒf ðə ˈhæn.dəl/",
        "vi": "Dễ nổi cáu, bỗng nhiên tức giận",
        "ex": ""
    },
    {
        "num": 954,
        "en": "Algorithm",
        "pos": "(n)",
        "ipa": "/ˈæl.ɡə.rɪ.ðəm/",
        "vi": "Thuật toán",
        "ex": ""
    },
    {
        "num": 955,
        "en": "Hold up",
        "pos": "phr. v.",
        "ipa": "/həʊld ʌp/",
        "vi": "Trì hoãn (= delay), cướp bóc",
        "ex": ""
    },
    {
        "num": 956,
        "en": "Offspring",
        "pos": "(n)",
        "ipa": "/ˈɒf.sprɪŋ/",
        "vi": "Con cái",
        "ex": ""
    },
    {
        "num": 957,
        "en": "Ecological",
        "pos": "(adj)",
        "ipa": "/ˌiː.kəˈlɒdʒ.ɪ.kəl/",
        "vi": "Thuộc về sinh thái",
        "ex": ""
    },
    {
        "num": 958,
        "en": "Pragmatic",
        "pos": "(adj)",
        "ipa": "/præɡˈmæt.ɪk/",
        "vi": "Thực tế, thực dụng",
        "ex": ""
    },
    {
        "num": 959,
        "en": "Reconcile",
        "pos": "(v)",
        "ipa": "/ˈrek.ən.saɪl/",
        "vi": "Làm hòa, hòa giải",
        "ex": ""
    },
    {
        "num": 960,
        "en": "Save for a rainy day",
        "pos": "idiom",
        "ipa": "/seɪv fɔːr ə ˈreɪ.ni deɪ/",
        "vi": "Tiết kiệm phòng khi khó khăn",
        "ex": ""
    },
    {
        "num": 961,
        "en": "By the skin of one's teeth",
        "pos": "idiom",
        "ipa": "/baɪ ðə skɪn əv wʌnz tiːθ/",
        "vi": "Suýt soát, trong gang tấc",
        "ex": ""
    },
    {
        "num": 962,
        "en": "Step up one's game",
        "pos": "idiom",
        "ipa": "/step ʌp wʌnz ɡeɪm/",
        "vi": "Nỗ lực hơn nữa để làm tốt hơn",
        "ex": ""
    },
    {
        "num": 963,
        "en": "Patriotism",
        "pos": "(n)",
        "ipa": "/ˈpæt.ri.ə.tɪ.zəm/",
        "vi": "Lòng yêu nước",
        "ex": ""
    },
    {
        "num": 964,
        "en": "Civilization",
        "pos": "(n)",
        "ipa": "/ˌsɪv.əl.aɪˈzeɪ.ʃən/",
        "vi": "Nền văn minh",
        "ex": ""
    },
    {
        "num": 965,
        "en": "Abide by",
        "pos": "phr. v.",
        "ipa": "/əˈbaɪd baɪ/",
        "vi": "Tuân thủ (luật lệ, quy định, thỏa thuận)",
        "ex": ""
    },
    {
        "num": 966,
        "en": "Sibling",
        "pos": "(n)",
        "ipa": "/ˈsɪb.lɪŋ/",
        "vi": "Anh chị em ruột",
        "ex": ""
    },
    {
        "num": 967,
        "en": "Malnutrition",
        "pos": "(n)",
        "ipa": "/ˌmæl.njuːˈtrɪʃ.ən/",
        "vi": "Tình trạng suy dinh dưỡng",
        "ex": ""
    },
    {
        "num": 968,
        "en": "Viable",
        "pos": "(adj)",
        "ipa": "/ˈvaɪ.ə.bəl/",
        "vi": "Khả thi (phương án, sự sống)",
        "ex": ""
    },
    {
        "num": 969,
        "en": "Unwind",
        "pos": "(v)",
        "ipa": "/ʌnˈwaɪnd/",
        "vi": "Thư giãn, xả hơi",
        "ex": ""
    },
    {
        "num": 970,
        "en": "Come into",
        "pos": "phr. v.",
        "ipa": "/kʌm ˈɪn.tuː/",
        "vi": "Thừa kế (tài sản)",
        "ex": ""
    },
    {
        "num": 971,
        "en": "Itinerary",
        "pos": "(n)",
        "ipa": "/aɪˈtɪn.ər.ər.i/",
        "vi": "Lịch trình chuyến đi",
        "ex": ""
    },
    {
        "num": 972,
        "en": "Misinformation",
        "pos": "(n)",
        "ipa": "/ˌmɪs.ɪn.fəˈmeɪ.ʃən/",
        "vi": "Thông tin sai lệch",
        "ex": ""
    },
    {
        "num": 973,
        "en": "Drop by / in",
        "pos": "phr. v.",
        "ipa": "/drɒp baɪ/ - /ɪn/",
        "vi": "Tạt qua thăm ai một lúc",
        "ex": ""
    },
    {
        "num": 974,
        "en": "Bring round",
        "pos": "phr. v.",
        "ipa": "/brɪŋ raʊnd/",
        "vi": "Làm ai tỉnh lại, thuyết phục ai đổi ý",
        "ex": ""
    },
    {
        "num": 975,
        "en": "Discrimination",
        "pos": "(n)",
        "ipa": "/dɪˌskrɪm.ɪˈneɪ.ʃən/",
        "vi": "Sự phân biệt đối xử",
        "ex": ""
    },
    {
        "num": 976,
        "en": "Give away",
        "pos": "phr. v.",
        "ipa": "/ɡɪv əˈweɪ/",
        "vi": "Cho đi, phân phát, tiết lộ (bí mật)",
        "ex": ""
    },
    {
        "num": 977,
        "en": "Break out",
        "pos": "phr. v.",
        "ipa": "/breɪk aʊt/",
        "vi": "Bùng nổ (chiến tranh, dịch bệnh)",
        "ex": ""
    },
    {
        "num": 978,
        "en": "Degradation",
        "pos": "(n)",
        "ipa": "/ˌdeɡ.rəˈdeɪ.ʃən/",
        "vi": "Sự suy thoái (môi trường, đất)",
        "ex": ""
    },
    {
        "num": 979,
        "en": "Ancestry",
        "pos": "(n)",
        "ipa": "/ˈæn.ses.tri/",
        "vi": "Nguồn gốc dòng dõi",
        "ex": ""
    },
    {
        "num": 980,
        "en": "Back down",
        "pos": "phr. v.",
        "ipa": "/bæk daʊn/",
        "vi": "Nhượng bộ, rút lui (khỏi cuộc tranh cãi)",
        "ex": ""
    },
    {
        "num": 981,
        "en": "Look forward to",
        "pos": "phr. v.",
        "ipa": "/lʊk ˈfɔː.wəd tuː/",
        "vi": "Mong đợi, trông chờ (+ V-ing)",
        "ex": ""
    },
    {
        "num": 982,
        "en": "Catch on",
        "pos": "phr. v.",
        "ipa": "/kætʃ ɒn/",
        "vi": "Trở nên phổ biến, hiểu ra vấn đề",
        "ex": ""
    },
    {
        "num": 983,
        "en": "Leave out",
        "pos": "phr. v.",
        "ipa": "/liːv aʊt/",
        "vi": "Bỏ sót, loại trừ ra",
        "ex": ""
    },
    {
        "num": 984,
        "en": "A penny for your thoughts",
        "pos": "idiom",
        "ipa": "/ə ˈpen.i fɔː jɔː θɔːts/",
        "vi": "Bạn đang nghĩ gì vậy? (Hỏi người khác)",
        "ex": ""
    },
    {
        "num": 985,
        "en": "Disseminate",
        "pos": "(v)",
        "ipa": "/dɪˈsem.ɪ.neɪt/",
        "vi": "Phổ biến, gieo rắc (tin tức)",
        "ex": ""
    },
    {
        "num": 986,
        "en": "Herbivore",
        "pos": "(n)",
        "ipa": "/ˈhɜː.bɪ.vɔː/",
        "vi": "Động vật ăn cỏ",
        "ex": ""
    },
    {
        "num": 987,
        "en": "Proportion",
        "pos": "(n)",
        "ipa": "/prəˈpɔː.ʃən/",
        "vi": "Tỷ lệ, phần tương xứng",
        "ex": ""
    },
    {
        "num": 988,
        "en": "Rivalry",
        "pos": "(n)",
        "ipa": "/ˈraɪ.vəl.ri/",
        "vi": "Sự ganh đua, cạnh tranh",
        "ex": ""
    },
    {
        "num": 989,
        "en": "A piece of cake",
        "pos": "idiom",
        "ipa": "/ə piːs əv keɪk/",
        "vi": "Rất dễ dàng, dễ như ăn bánh",
        "ex": ""
    },
    {
        "num": 990,
        "en": "Subconscious",
        "pos": "(n)",
        "ipa": "/sʌbˈkɒn.ʃəs/",
        "vi": "Tiềm thức",
        "ex": ""
    },
    {
        "num": 991,
        "en": "Expedition",
        "pos": "(n)",
        "ipa": "/ˌek.spəˈdɪʃ.ən/",
        "vi": "Cuộc thám hiểm",
        "ex": ""
    },
    {
        "num": 992,
        "en": "Go against",
        "pos": "phr. v.",
        "ipa": "/ɡəʊ əˈɡenst/",
        "vi": "Đi ngược lại, làm trái với, phản đối",
        "ex": ""
    },
    {
        "num": 993,
        "en": "Expectancy",
        "pos": "(n)",
        "ipa": "/ɪkˈspek.tən.si/",
        "vi": "Tuổi thọ dự kiến",
        "ex": ""
    },
    {
        "num": 994,
        "en": "Probation",
        "pos": "(n)",
        "ipa": "/prəˈbeɪ.ʃən/",
        "vi": "Thời gian thử việc",
        "ex": ""
    },
    {
        "num": 995,
        "en": "Orphanage",
        "pos": "(n)",
        "ipa": "/ˈɔː.fən.ɪdʒ/",
        "vi": "Trại trẻ mồ côi",
        "ex": ""
    },
    {
        "num": 996,
        "en": "Get over",
        "pos": "phr. v.",
        "ipa": "/ɡet ˈəʊ.və/",
        "vi": "Vượt qua, bình phục (sau bệnh, cú sốc)",
        "ex": ""
    },
    {
        "num": 997,
        "en": "Solitude",
        "pos": "(n)",
        "ipa": "/ˈsɒl.ɪ.tʃuːd/",
        "vi": "Trạng thái ở một mình (tích cực)",
        "ex": ""
    },
    {
        "num": 998,
        "en": "Have an egg on one's face",
        "pos": "idiom",
        "ipa": "/hæv ən eɡ ɒn wʌnz feɪs/",
        "vi": "Trông thật ngu ngốc, xấu hổ",
        "ex": ""
    },
    {
        "num": 999,
        "en": "Compassion",
        "pos": "(n)",
        "ipa": "/kəmˈpæʃ.ən/",
        "vi": "Lòng trắc ẩn, sự thương xót",
        "ex": ""
    },
    {
        "num": 1000,
        "en": "Interactive",
        "pos": "(adj)",
        "ipa": "/ˌɪn.təˈræk.tɪv/",
        "vi": "Có tính tương tác",
        "ex": ""
    },
    {
        "num": 1001,
        "en": "Monument",
        "pos": "(n)",
        "ipa": "/ˈmɒn.jə.mənt/",
        "vi": "Đài tưởng niệm",
        "ex": ""
    },
    {
        "num": 1002,
        "en": "Cut back",
        "pos": "phr. v.",
        "ipa": "/kʌt bæk/",
        "vi": "Cắt giảm (sản xuất, chi tiêu)",
        "ex": ""
    },
    {
        "num": 1003,
        "en": "Draw back",
        "pos": "phr. v.",
        "ipa": "/drɔː bæk/",
        "vi": "Rút lui",
        "ex": ""
    },
    {
        "num": 1004,
        "en": "Initiative",
        "pos": "(n)",
        "ipa": "/ɪˈnɪʃ.ə.tɪv/",
        "vi": "Sáng kiến, bước đầu",
        "ex": ""
    },
    {
        "num": 1005,
        "en": "Cut corners",
        "pos": "idiom",
        "ipa": "/kʌt ˈkɔː.nəz/",
        "vi": "Làm ẩu, đi tắt để tiết kiệm thời gian/tiền",
        "ex": ""
    },
    {
        "num": 1006,
        "en": "Let off",
        "pos": "phr. v.",
        "ipa": "/let ɒf/",
        "vi": "Tha bổng, không phạt (hoặc phạt rất nhẹ)",
        "ex": ""
    },
    {
        "num": 1007,
        "en": "Gravity",
        "pos": "(n)",
        "ipa": "/ˈɡræv.ə.ti/",
        "vi": "Trọng lực",
        "ex": ""
    },
    {
        "num": 1008,
        "en": "Truancy",
        "pos": "(n)",
        "ipa": "/ˈtruː.ən.si/",
        "vi": "Sự trốn học",
        "ex": ""
    },
    {
        "num": 1009,
        "en": "Pass over",
        "pos": "phr. v.",
        "ipa": "/pɑːs ˈəʊ.və/",
        "vi": "Bỏ qua, lờ đi (không thăng chức cho ai)",
        "ex": ""
    },
    {
        "num": 1010,
        "en": "Mammal",
        "pos": "(n)",
        "ipa": "/ˈmæm.əl/",
        "vi": "Động vật có vú",
        "ex": ""
    },
    {
        "num": 1011,
        "en": "Play it by ear",
        "pos": "idiom",
        "ipa": "/pleɪ ɪt baɪ ɪə/",
        "vi": "Tùy cơ ứng biến, không lập kế hoạch trước",
        "ex": ""
    },
    {
        "num": 1012,
        "en": "Incarceration",
        "pos": "(n)",
        "ipa": "/ɪnˌkɑː.sərˈeɪ.ʃən/",
        "vi": "Sự bỏ tù, giam giữ",
        "ex": ""
    },
    {
        "num": 1013,
        "en": "Disorder",
        "pos": "(n)",
        "ipa": "/dɪˈsɔː.də/",
        "vi": "Rối loạn (tâm lý)",
        "ex": ""
    },
    {
        "num": 1014,
        "en": "Assimilate",
        "pos": "(v)",
        "ipa": "/əˈsɪm.ɪ.leɪt/",
        "vi": "Tiếp thu, đồng hóa (kiến thức)",
        "ex": ""
    },
    {
        "num": 1015,
        "en": "At the drop of a hat",
        "pos": "idiom",
        "ipa": "/ət ðə drɒp əv ə hæt/",
        "vi": "Ngay lập tức, không chần chừ",
        "ex": ""
    },
    {
        "num": 1016,
        "en": "Blockbuster",
        "pos": "(n)",
        "ipa": "/ˈblɒkˌbʌs.tə/",
        "vi": "Phim bom tấn",
        "ex": ""
    },
    {
        "num": 1017,
        "en": "Species",
        "pos": "(n)",
        "ipa": "/ˈspiː.ʃiːz/",
        "vi": "Giống loài",
        "ex": ""
    },
    {
        "num": 1018,
        "en": "Steal someone's thunder",
        "pos": "idiom",
        "ipa": "/stiːl ˈsʌm.wʌnz ˈθʌn.də/",
        "vi": "Cướp công, giành lấy sự chú ý của ai",
        "ex": ""
    },
    {
        "num": 1019,
        "en": "Biodiversity",
        "pos": "(n)",
        "ipa": "/ˌbaɪ.əʊ.daɪˈvɜː.sə.ti/",
        "vi": "Đa dạng sinh học",
        "ex": ""
    },
    {
        "num": 1020,
        "en": "Fringe benefits",
        "pos": "(n)",
        "ipa": "/frɪndʒ ˈben.ɪ.fɪts/",
        "vi": "Phúc lợi phụ (ngoài lương)",
        "ex": ""
    },
    {
        "num": 1021,
        "en": "Put forward",
        "pos": "phr. v.",
        "ipa": "/pʊt ˈfɔː.wəd/",
        "vi": "Đề xuất (ý tưởng), giới thiệu (nhân sự)",
        "ex": ""
    },
    {
        "num": 1022,
        "en": "Carry out",
        "pos": "phr. v.",
        "ipa": "/ˈkær.i aʊt/",
        "vi": "Tiến hành, thực hiện (kế hoạch, khảo sát)",
        "ex": ""
    },
    {
        "num": 1023,
        "en": "Point out",
        "pos": "phr. v.",
        "ipa": "/pɔɪnt aʊt/",
        "vi": "Chỉ ra, vạch ra",
        "ex": ""
    },
    {
        "num": 1024,
        "en": "Come across",
        "pos": "phr. v.",
        "ipa": "/kʌm əˈkrɒs/",
        "vi": "Tình cờ gặp, tình cờ thấy",
        "ex": ""
    },
    {
        "num": 1025,
        "en": "Ask after",
        "pos": "phr. v.",
        "ipa": "/ɑːsk ˈɑːf.tə/",
        "vi": "Hỏi thăm sức khỏe của ai",
        "ex": ""
    },
    {
        "num": 1026,
        "en": "Emigration",
        "pos": "(n)",
        "ipa": "/ˌem.ɪˈɡreɪ.ʃən/",
        "vi": "Sự xuất cư",
        "ex": ""
    },
    {
        "num": 1027,
        "en": "Get at",
        "pos": "phr. v.",
        "ipa": "/ɡet ət/",
        "vi": "Ám chỉ, chạm tới, với lấy",
        "ex": ""
    },
    {
        "num": 1028,
        "en": "Cost an arm and a leg",
        "pos": "idiom",
        "ipa": "/kɒst ən ɑːm ənd ə leɡ/",
        "vi": "Rất đắt đỏ",
        "ex": ""
    },
    {
        "num": 1029,
        "en": "Give off",
        "pos": "phr. v.",
        "ipa": "/ɡɪv ɒf/",
        "vi": "Tỏa ra (mùi hương, nhiệt độ, ánh sáng)",
        "ex": ""
    },
    {
        "num": 1030,
        "en": "In the heat of the moment",
        "pos": "idiom",
        "ipa": "/ɪn ðə hiːt əv ðə ˈməʊ.mənt/",
        "vi": "Trong lúc đang nóng giận/kích động",
        "ex": ""
    },
    {
        "num": 1031,
        "en": "Try out",
        "pos": "phr. v.",
        "ipa": "/traɪ aʊt/",
        "vi": "Thử nghiệm (máy móc, phương pháp)",
        "ex": ""
    },
    {
        "num": 1032,
        "en": "Brush up (on)",
        "pos": "phr. v.",
        "ipa": "/brʌʃ ʌp (ɒn)/",
        "vi": "Ôn tập lại, trau dồi lại kiến thức cũ",
        "ex": ""
    },
    {
        "num": 1033,
        "en": "Predator",
        "pos": "(n)",
        "ipa": "/ˈpred.ə.tə/",
        "vi": "Thú săn mồi",
        "ex": ""
    },
    {
        "num": 1034,
        "en": "Epidemic",
        "pos": "(n/adj)",
        "ipa": "/ˌep.ɪˈdem.ɪk/",
        "vi": "Bệnh dịch / Lan truyền nhanh",
        "ex": ""
    },
    {
        "num": 1035,
        "en": "Interface",
        "pos": "(n)",
        "ipa": "/ˈɪn.tə.feɪs/",
        "vi": "Giao diện",
        "ex": ""
    },
    {
        "num": 1036,
        "en": "Empathy",
        "pos": "(n)",
        "ipa": "/ˈem.pə.θi/",
        "vi": "Sự đồng cảm, thấu cảm",
        "ex": ""
    },
    {
        "num": 1037,
        "en": "Come forward",
        "pos": "phr. v.",
        "ipa": "/kʌm ˈfɔː.wəd/",
        "vi": "Đứng ra giúp đỡ, cung cấp thông tin",
        "ex": ""
    },
    {
        "num": 1038,
        "en": "Abstract",
        "pos": "(adj)",
        "ipa": "/ˈæb.strækt/",
        "vi": "Trừu tượng",
        "ex": ""
    },
    {
        "num": 1039,
        "en": "Aesthetic",
        "pos": "(adj/n)",
        "ipa": "/esˈθet.ɪk/",
        "vi": "Có tính thẩm mỹ / Thẩm mỹ học",
        "ex": ""
    },
    {
        "num": 1040,
        "en": "Prosecutor",
        "pos": "(n)",
        "ipa": "/ˈprɒs.ɪ.kjuː.tə/",
        "vi": "Công tố viên, người khởi tố",
        "ex": ""
    },
    {
        "num": 1041,
        "en": "A blessing in disguise",
        "pos": "idiom",
        "ipa": "/ə ˈbles.ɪŋ ɪn dɪsˈɡaɪz/",
        "vi": "Trong cái rủi có cái may",
        "ex": ""
    },
    {
        "num": 1042,
        "en": "Genre",
        "pos": "(n)",
        "ipa": "/ˈʒɒn.rə/",
        "vi": "Thể loại (phim, nhạc, sách)",
        "ex": ""
    },
    {
        "num": 1043,
        "en": "Masterpiece",
        "pos": "(n)",
        "ipa": "/ˈmɑː.stə.piːs/",
        "vi": "Kiệt tác",
        "ex": ""
    },
    {
        "num": 1044,
        "en": "Prehistoric",
        "pos": "(adj)",
        "ipa": "/ˌpriː.hɪˈstɒr.ɪk/",
        "vi": "Thuộc thời tiền sử",
        "ex": ""
    },
    {
        "num": 1045,
        "en": "Mainstream",
        "pos": "(adj)",
        "ipa": "/ˈmeɪn.striːm/",
        "vi": "Đại trà, xu hướng chủ đạo",
        "ex": ""
    },
    {
        "num": 1046,
        "en": "Outskirts",
        "pos": "(n)",
        "ipa": "/ˈaʊt.skɜːts/",
        "vi": "Vùng ngoại ô",
        "ex": ""
    },
    {
        "num": 1047,
        "en": "Wear out",
        "pos": "phr. v.",
        "ipa": "/weər aʊt/",
        "vi": "Làm ai kiệt sức, làm rách/mòn đồ vật",
        "ex": ""
    },
    {
        "num": 1048,
        "en": "Paparazzi",
        "pos": "(n)",
        "ipa": "/ˌpæp.ərˈæt.si/",
        "vi": "Thợ săn ảnh (người nổi tiếng)",
        "ex": ""
    },
    {
        "num": 1049,
        "en": "Make for",
        "pos": "phr. v.",
        "ipa": "/meɪk fɔː/",
        "vi": "Đi về hướng, góp phần làm ra cái gì",
        "ex": ""
    },
    {
        "num": 1050,
        "en": "Fabricate",
        "pos": "(v)",
        "ipa": "/ˈfæb.rɪ.keɪt/",
        "vi": "Bịa đặt (thông tin)",
        "ex": ""
    },
    {
        "num": 1051,
        "en": "Emission",
        "pos": "(n)",
        "ipa": "/ɪˈmɪʃ.ən/",
        "vi": "Khí thải",
        "ex": ""
    },
    {
        "num": 1052,
        "en": "End up",
        "pos": "phr. v.",
        "ipa": "/end ʌp/",
        "vi": "Có kết cục, cuối cùng thì (trở thành gì)",
        "ex": ""
    },
    {
        "num": 1053,
        "en": "Peer",
        "pos": "(n)",
        "ipa": "/pɪə/",
        "vi": "Bạn đồng trang lứa",
        "ex": ""
    },
    {
        "num": 1054,
        "en": "The early bird catches the worm",
        "pos": "idiom",
        "ipa": "/ði ˈɜː.li bɜːd ˈkætʃ.ɪz ðə wɜːm/",
        "vi": "Trâu chậm uống nước đục (Đến sớm có lợi)",
        "ex": ""
    },
    {
        "num": 1055,
        "en": "Catastrophic",
        "pos": "(adj)",
        "ipa": "/ˌkæt.əˈstrɒf.ɪk/",
        "vi": "Thảm khốc, thê thảm",
        "ex": ""
    },
    {
        "num": 1056,
        "en": "Phenomenon",
        "pos": "(n)",
        "ipa": "/fəˈnɒm.ɪ.nən/",
        "vi": "Hiện tượng",
        "ex": ""
    },
    {
        "num": 1057,
        "en": "Explosion",
        "pos": "(n)",
        "ipa": "/ɪkˈspləʊ.ʒən/",
        "vi": "Sự bùng nổ (dân số)",
        "ex": ""
    },
    {
        "num": 1058,
        "en": "Boom",
        "pos": "(n/v)",
        "ipa": "/buːm/",
        "vi": "Sự bùng nổ (dân số, kinh tế)",
        "ex": ""
    },
    {
        "num": 1059,
        "en": "Interpersonal",
        "pos": "(adj)",
        "ipa": "/ˌɪn.təˈpɜː.sən.əl/",
        "vi": "Giữa các cá nhân với nhau",
        "ex": ""
    },
    {
        "num": 1060,
        "en": "Workaholic",
        "pos": "(n)",
        "ipa": "/ˌwɜː.kəˈhɒl.ɪk/",
        "vi": "Người nghiện công việc",
        "ex": ""
    },
    {
        "num": 1061,
        "en": "Entrepreneur",
        "pos": "(n)",
        "ipa": "/ˌɒn.trə.prəˈnɜː/",
        "vi": "Doanh nhân",
        "ex": ""
    },
    {
        "num": 1062,
        "en": "Once in a blue moon",
        "pos": "idiom",
        "ipa": "/wʌns ɪn ə bluː muːn/",
        "vi": "Rất hiếm khi",
        "ex": ""
    },
    {
        "num": 1063,
        "en": "Malicious",
        "pos": "(adj)",
        "ipa": "/məˈlɪʃ.əs/",
        "vi": "Độc hại (phần mềm, mã độc)",
        "ex": ""
    },
    {
        "num": 1064,
        "en": "Empowerment",
        "pos": "(n)",
        "ipa": "/ɪmˈpaʊə.mənt/",
        "vi": "Sự trao quyền, cấp quyền",
        "ex": ""
    },
    {
        "num": 1065,
        "en": "Cognitive",
        "pos": "(adj)",
        "ipa": "/ˈkɒɡ.nə.tɪv/",
        "vi": "Thuộc về nhận thức",
        "ex": ""
    },
    {
        "num": 1066,
        "en": "Hang up",
        "pos": "phr. v.",
        "ipa": "/hæŋ ʌp/",
        "vi": "Cúp máy điện thoại",
        "ex": ""
    },
    {
        "num": 1067,
        "en": "Cut in",
        "pos": "phr. v.",
        "ipa": "/kʌt ɪn/",
        "vi": "Ngắt lời (= Interrupt)",
        "ex": ""
    },
    {
        "num": 1068,
        "en": "Rote learning",
        "pos": "(n)",
        "ipa": "/rəʊt ˈlɜː.nɪŋ/",
        "vi": "Học vẹt",
        "ex": ""
    },
    {
        "num": 1069,
        "en": "Delusion",
        "pos": "(n)",
        "ipa": "/dɪˈluː.ʒən/",
        "vi": "Ảo giác, ảo tưởng",
        "ex": ""
    },
    {
        "num": 1070,
        "en": "Invasion",
        "pos": "(n)",
        "ipa": "/ɪnˈveɪ.ʒən/",
        "vi": "Sự xâm phạm (sự riêng tư)",
        "ex": ""
    },
    {
        "num": 1071,
        "en": "Assimilation",
        "pos": "(n)",
        "ipa": "/əˌsɪm.ɪˈleɪ.ʃən/",
        "vi": "Sự đồng hóa văn hóa",
        "ex": ""
    },
    {
        "num": 1072,
        "en": "Cybercrime",
        "pos": "(n)",
        "ipa": "/ˈsaɪ.bə.kraɪm/",
        "vi": "Tội phạm mạng",
        "ex": ""
    },
    {
        "num": 1073,
        "en": "Deprivation",
        "pos": "(n)",
        "ipa": "/ˌdep.rɪˈveɪ.ʃən/",
        "vi": "Sự thiếu thốn",
        "ex": ""
    },
    {
        "num": 1074,
        "en": "Show off",
        "pos": "phr. v.",
        "ipa": "/ʃəʊ ɒf/",
        "vi": "Khoe khoang",
        "ex": ""
    },
    {
        "num": 1075,
        "en": "Don't judge a book by its cover",
        "pos": "idiom",
        "ipa": "/dəʊnt dʒʌdʒ ə bʊk baɪ ɪts ˈkʌv.ə/",
        "vi": "Đừng trông mặt mà bắt hình dong",
        "ex": ""
    },
    {
        "num": 1076,
        "en": "Cost of living",
        "pos": "(n)",
        "ipa": "/kɒst əv ˈlɪv.ɪŋ/",
        "vi": "Chi phí sinh hoạt",
        "ex": ""
    },
    {
        "num": 1077,
        "en": "Bring down",
        "pos": "phr. v.",
        "ipa": "/brɪŋ daʊn/",
        "vi": "Làm giảm (giá cả), hạ bệ (chính phủ)",
        "ex": ""
    },
    {
        "num": 1078,
        "en": "Give back",
        "pos": "phr. v.",
        "ipa": "/ɡɪv bæk/",
        "vi": "Trả lại (đồ đã mượn)",
        "ex": ""
    },
    {
        "num": 1079,
        "en": "Intimate",
        "pos": "(adj)",
        "ipa": "/ˈɪn.tɪ.mət/",
        "vi": "Thân mật, sâu sắc",
        "ex": ""
    },
    {
        "num": 1080,
        "en": "Catch someone red-handed",
        "pos": "idiom",
        "ipa": "/kætʃ ˈsʌm.wʌn redˈhæn.dɪd/",
        "vi": "Bắt quả tang ai đang làm việc xấu",
        "ex": ""
    },
    {
        "num": 1081,
        "en": "Look up",
        "pos": "phr. v.",
        "ipa": "/lʊk ʌp/",
        "vi": "Tra cứu (từ điển, danh bạ)",
        "ex": ""
    },
    {
        "num": 1082,
        "en": "Speculate",
        "pos": "(v)",
        "ipa": "/ˈspek.jə.leɪt/",
        "vi": "Suy đoán, phỏng đoán",
        "ex": ""
    },
    {
        "num": 1083,
        "en": "Habitual",
        "pos": "(adj)",
        "ipa": "/həˈbɪtʃ.u.əl/",
        "vi": "Thường xuyên, thành thói quen",
        "ex": ""
    },
    {
        "num": 1084,
        "en": "Rule out",
        "pos": "phr. v.",
        "ipa": "/ruːl aʊt/",
        "vi": "Loại trừ khả năng xảy ra",
        "ex": ""
    },
    {
        "num": 1085,
        "en": "Tertiary education",
        "pos": "(n)",
        "ipa": "/ˈtɜː.ʃər.i ˌedʒ.ʊˈkeɪ.ʃən/",
        "vi": "Giáo dục bậc đại học/cao đẳng",
        "ex": ""
    },
    {
        "num": 1086,
        "en": "Demographic",
        "pos": "(n/adj)",
        "ipa": "/ˌdem.əˈɡræf.ɪk/",
        "vi": "Nhóm nhân khẩu học",
        "ex": ""
    },
    {
        "num": 1087,
        "en": "Fall through",
        "pos": "phr. v.",
        "ipa": "/fɔːl θruː/",
        "vi": "Hỏng, thất bại (kế hoạch không diễn ra)",
        "ex": ""
    },
    {
        "num": 1088,
        "en": "Life span",
        "pos": "(n)",
        "ipa": "/laɪf spæn/",
        "vi": "Vòng đời, tuổi thọ",
        "ex": ""
    },
    {
        "num": 1089,
        "en": "Look up to",
        "pos": "phr. v.",
        "ipa": "/lʊk ʌp tuː/",
        "vi": "Kính trọng, ngưỡng mộ ai",
        "ex": ""
    },
    {
        "num": 1090,
        "en": "Bankruptcy",
        "pos": "(n)",
        "ipa": "/ˈbæŋ.krəp.si/",
        "vi": "Sự phá sản",
        "ex": ""
    },
    {
        "num": 1091,
        "en": "Exhibit",
        "pos": "(v/n)",
        "ipa": "/ɪɡˈzɪb.ɪt/",
        "vi": "Trưng bày / Vật trưng bày",
        "ex": ""
    },
    {
        "num": 1092,
        "en": "Commute",
        "pos": "(v/n)",
        "ipa": "/kəˈmjuːt/",
        "vi": "Đi làm xa (mỗi ngày)",
        "ex": ""
    },
    {
        "num": 1093,
        "en": "Censorship",
        "pos": "(n)",
        "ipa": "/ˈsen.sə.ʃɪp/",
        "vi": "Sự kiểm duyệt",
        "ex": ""
    },
    {
        "num": 1094,
        "en": "Shelter",
        "pos": "(n)",
        "ipa": "/ˈʃel.tə/",
        "vi": "Mái ấm, nơi trú ẩn",
        "ex": ""
    },
    {
        "num": 1095,
        "en": "Eradicate",
        "pos": "(v)",
        "ipa": "/ɪˈræd.ɪ.keɪt/",
        "vi": "Xóa bỏ, tiêu diệt hoàn toàn",
        "ex": ""
    },
    {
        "num": 1096,
        "en": "Put off",
        "pos": "phr. v.",
        "ipa": "/pʊt ɒf/",
        "vi": "Trì hoãn (= postpone, delay)",
        "ex": ""
    },
    {
        "num": 1097,
        "en": "Cross out",
        "pos": "phr. v.",
        "ipa": "/krɒs aʊt/",
        "vi": "Gạch bỏ",
        "ex": ""
    },
    {
        "num": 1098,
        "en": "Clear up",
        "pos": "phr. v.",
        "ipa": "/klɪər ʌp/",
        "vi": "Dọn dẹp, (thời tiết) quang đãng",
        "ex": ""
    },
    {
        "num": 1099,
        "en": "Underprivileged",
        "pos": "(adj)",
        "ipa": "/ˌʌn.dəˈprɪv.əl.ɪdʒd/",
        "vi": "Thiệt thòi, kém may mắn",
        "ex": ""
    },
    {
        "num": 1100,
        "en": "Susceptible",
        "pos": "(adj)",
        "ipa": "/səˈsep.tə.bəl/",
        "vi": "Dễ mắc phải (bệnh tật), nhạy cảm",
        "ex": ""
    },
    {
        "num": 1101,
        "en": "Illiteracy",
        "pos": "(n)",
        "ipa": "/ɪˈlɪt.ər.ə.si/",
        "vi": "Nạn mù chữ",
        "ex": ""
    },
    {
        "num": 1102,
        "en": "Balance",
        "pos": "(n)",
        "ipa": "/ˈbæl.əns/",
        "vi": "Sự cân bằng",
        "ex": ""
    },
    {
        "num": 1103,
        "en": "Back up",
        "pos": "phr. v.",
        "ipa": "/bæk ʌp/",
        "vi": "Ủng hộ, sao lưu (dữ liệu)",
        "ex": ""
    },
    {
        "num": 1104,
        "en": "Pensioner",
        "pos": "(n)",
        "ipa": "/ˈpen.ʃən.ə/",
        "vi": "Người được hưởng lương hưu",
        "ex": ""
    },
    {
        "num": 1105,
        "en": "Terrestrial",
        "pos": "(adj)",
        "ipa": "/təˈres.tri.əl/",
        "vi": "Sống trên cạn",
        "ex": ""
    },
    {
        "num": 1106,
        "en": "Figure out",
        "pos": "phr. v.",
        "ipa": "/ˈfɪɡ.ər aʊt/",
        "vi": "Hiểu ra, tìm ra (câu trả lời, giải pháp)",
        "ex": ""
    },
    {
        "num": 1107,
        "en": "Trustworthy",
        "pos": "(adj)",
        "ipa": "/ˈtrʌstˌwɜː.ði/",
        "vi": "Đáng tin cậy",
        "ex": ""
    },
    {
        "num": 1108,
        "en": "Part and parcel",
        "pos": "idiom",
        "ipa": "/pɑːt ənd ˈpɑː.səl/",
        "vi": "Phần quan trọng, thiết yếu không thể thiếu",
        "ex": ""
    },
    {
        "num": 1109,
        "en": "Minimalism",
        "pos": "(n)",
        "ipa": "/ˈmɪn.ɪ.məl.ɪ.zəm/",
        "vi": "Lối sống tối giản",
        "ex": ""
    },
    {
        "num": 1110,
        "en": "Heritage",
        "pos": "(n)",
        "ipa": "/ˈher.ɪ.tɪdʒ/",
        "vi": "Di sản",
        "ex": ""
    },
    {
        "num": 1111,
        "en": "Excursion",
        "pos": "(n)",
        "ipa": "/ɪkˈskɜː.ʃən/",
        "vi": "Chuyến tham quan ngắn",
        "ex": ""
    },
    {
        "num": 1112,
        "en": "Deterioration",
        "pos": "(n)",
        "ipa": "/dɪˌtɪə.ri.əˈreɪ.ʃən/",
        "vi": "Sự xuống cấp, suy tàn",
        "ex": ""
    },
    {
        "num": 1113,
        "en": "Keep out",
        "pos": "phr. v.",
        "ipa": "/kiːp aʊt/",
        "vi": "Ngăn không cho vào",
        "ex": ""
    },
    {
        "num": 1114,
        "en": "Break in",
        "pos": "phr. v.",
        "ipa": "/breɪk ɪn/",
        "vi": "Ngắt lời, đột nhập",
        "ex": ""
    },
    {
        "num": 1115,
        "en": "Extinction",
        "pos": "(n)",
        "ipa": "/ɪkˈstɪŋk.ʃən/",
        "vi": "Sự tuyệt chủng",
        "ex": ""
    },
    {
        "num": 1116,
        "en": "Get rid of",
        "pos": "phr. v.",
        "ipa": "/ɡet rɪd əv/",
        "vi": "Loại bỏ, vứt bỏ",
        "ex": ""
    },
    {
        "num": 1117,
        "en": "Platonic",
        "pos": "(adj)",
        "ipa": "/pləˈtɒn.ɪk/",
        "vi": "Tình bạn thuần khiết, trong sáng",
        "ex": ""
    },
    {
        "num": 1118,
        "en": "Statistics",
        "pos": "(n)",
        "ipa": "/stəˈtɪs.tɪks/",
        "vi": "Số liệu thống kê",
        "ex": ""
    },
    {
        "num": 1119,
        "en": "Get away with",
        "pos": "phr. v.",
        "ipa": "/ɡet əˈweɪ wɪð/",
        "vi": "Thoát tội, làm sai mà không bị phạt",
        "ex": ""
    },
    {
        "num": 1120,
        "en": "Clean up",
        "pos": "phr. v.",
        "ipa": "/kliːn ʌp/",
        "vi": "Dọn dẹp sạch sẽ",
        "ex": ""
    },
    {
        "num": 1121,
        "en": "Receptive",
        "pos": "(adj)",
        "ipa": "/rɪˈsep.tɪv/",
        "vi": "Dễ tiếp thu (ý tưởng mới)",
        "ex": ""
    },
    {
        "num": 1122,
        "en": "Hold your horses",
        "pos": "idiom",
        "ipa": "/həʊld jɔː ˈhɔː.sɪz/",
        "vi": "Bình tĩnh nào, đừng vội",
        "ex": ""
    },
    {
        "num": 1123,
        "en": "Mix up",
        "pos": "phr. v.",
        "ipa": "/mɪks ʌp/",
        "vi": "Nhầm lẫn (người/vật này với người/vật kia)",
        "ex": ""
    },
    {
        "num": 1124,
        "en": "Deal with",
        "pos": "phr. v.",
        "ipa": "/diːl wɪð/",
        "vi": "Giải quyết, đối phó",
        "ex": ""
    },
    {
        "num": 1125,
        "en": "Bear with",
        "pos": "phr. v.",
        "ipa": "/beə wɪð/",
        "vi": "Kiên nhẫn với ai/cái gì",
        "ex": ""
    },
    {
        "num": 1126,
        "en": "Do without",
        "pos": "phr. v.",
        "ipa": "/duː wɪˈðaʊt/",
        "vi": "Xoay xở mà không có cái gì",
        "ex": ""
    },
    {
        "num": 1127,
        "en": "Back to the drawing board",
        "pos": "idiom",
        "ipa": "/bæk tuː ðə ˈdrɔː.ɪŋ bɔːd/",
        "vi": "Bắt đầu làm lại từ đầu (vì thất bại)",
        "ex": ""
    },
    {
        "num": 1128,
        "en": "Dawn on",
        "pos": "phr. v.",
        "ipa": "/dɔːn ɒn/",
        "vi": "Chợt nhận ra điều gì",
        "ex": ""
    },
    {
        "num": 1129,
        "en": "Detrimental",
        "pos": "(adj)",
        "ipa": "/ˌdet.rɪˈmen.təl/",
        "vi": "Có hại, bất lợi",
        "ex": ""
    },
    {
        "num": 1130,
        "en": "Metropolis",
        "pos": "(n)",
        "ipa": "/məˈtrɒp.əl.ɪs/",
        "vi": "Đô thị lớn, trung tâm",
        "ex": ""
    },
    {
        "num": 1131,
        "en": "Delinquency",
        "pos": "(n)",
        "ipa": "/dɪˈlɪŋ.kwən.si/",
        "vi": "Sự phạm pháp (thường chỉ người trẻ)",
        "ex": ""
    },
    {
        "num": 1132,
        "en": "Come round",
        "pos": "phr. v.",
        "ipa": "/kʌm raʊnd/",
        "vi": "Tỉnh lại, thay đổi ý kiến (nhượng bộ)",
        "ex": ""
    },
    {
        "num": 1133,
        "en": "Virtual reality (VR)",
        "pos": "(n)",
        "ipa": "/ˌvɜː.tʃu.əl riˈæl.ə.ti/",
        "vi": "Thực tế ảo",
        "ex": ""
    },
    {
        "num": 1134,
        "en": "Neurotic",
        "pos": "(adj)",
        "ipa": "/njʊəˈrɒt.ɪk/",
        "vi": "Suy nhược thần kinh, ám ảnh",
        "ex": ""
    },
    {
        "num": 1135,
        "en": "The elephant in the room",
        "pos": "idiom",
        "ipa": "/ði ˈel.ɪ.fənt ɪn ðə ruːm/",
        "vi": "Vấn đề nhức nhối ai cũng biết nhưng lảng tránh",
        "ex": ""
    },
    {
        "num": 1136,
        "en": "Implement",
        "pos": "(v)",
        "ipa": "/ˈɪm.plɪ.ment/",
        "vi": "Tiến hành, thực thi (kế hoạch)",
        "ex": ""
    },
    {
        "num": 1137,
        "en": "Make off",
        "pos": "phr. v.",
        "ipa": "/meɪk ɒf/",
        "vi": "Bỏ trốn (thường đi kèm với đồ ăn cắp)",
        "ex": ""
    },
    {
        "num": 1138,
        "en": "Mutual",
        "pos": "(adj)",
        "ipa": "/ˈmjuː.tʃu.əl/",
        "vi": "Lẫn nhau, chung (lợi ích, tôn trọng)",
        "ex": ""
    },
    {
        "num": 1139,
        "en": "Afforestation",
        "pos": "(n)",
        "ipa": "/əˌfɒr.ɪˈsteɪ.ʃən/",
        "vi": "Sự trồng cây gây rừng",
        "ex": ""
    },
    {
        "num": 1140,
        "en": "Call off",
        "pos": "phr. v.",
        "ipa": "/kɔːl ɒf/",
        "vi": "Hủy bỏ (= cancel)",
        "ex": ""
    },
    {
        "num": 1141,
        "en": "Antique",
        "pos": "(n/adj)",
        "ipa": "/ænˈtiːk/",
        "vi": "Đồ cổ / Cổ xưa",
        "ex": ""
    },
    {
        "num": 1142,
        "en": "Depletion",
        "pos": "(n)",
        "ipa": "/dɪˈpliː.ʃən/",
        "vi": "Sự suy kiệt (tài nguyên)",
        "ex": ""
    },
    {
        "num": 1143,
        "en": "The best of both worlds",
        "pos": "idiom",
        "ipa": "/ðə best əv bəʊθ wɜːldz/",
        "vi": "Vẹn cả đôi đường",
        "ex": ""
    },
    {
        "num": 1144,
        "en": "Blow up",
        "pos": "phr. v.",
        "ipa": "/bləʊ ʌp/",
        "vi": "Nổ tung, tức giận",
        "ex": ""
    },
    {
        "num": 1145,
        "en": "Endangered",
        "pos": "(adj)",
        "ipa": "/ɪnˈdeɪn.dʒəd/",
        "vi": "Bị đe dọa tuyệt chủng",
        "ex": ""
    },
    {
        "num": 1146,
        "en": "Fundraiser",
        "pos": "(n)",
        "ipa": "/ˈfʌndˌreɪ.zə/",
        "vi": "Sự kiện gây quỹ / Người gây quỹ",
        "ex": ""
    },
    {
        "num": 1147,
        "en": "Globetrotter",
        "pos": "(n)",
        "ipa": "/ˈɡləʊbˌtrɒt.ə/",
        "vi": "Người du lịch khắp thế giới",
        "ex": ""
    },
    {
        "num": 1148,
        "en": "Sustainability",
        "pos": "(n)",
        "ipa": "/səˌsteɪ.nəˈbɪl.ə.ti/",
        "vi": "Sự bền vững",
        "ex": ""
    },
    {
        "num": 1149,
        "en": "Restoration",
        "pos": "(n)",
        "ipa": "/ˌres.tərˈeɪ.ʃən/",
        "vi": "Sự trùng tu, phục hồi",
        "ex": ""
    },
    {
        "num": 1150,
        "en": "Solidarity",
        "pos": "(n)",
        "ipa": "/ˌsɒl.ɪˈdær.ə.ti/",
        "vi": "Tình đoàn kết",
        "ex": ""
    },
    {
        "num": 1151,
        "en": "Get across",
        "pos": "phr. v.",
        "ipa": "/ɡet əˈkrɒs/",
        "vi": "Truyền đạt được ý tưởng cho người khác hiểu",
        "ex": ""
    },
    {
        "num": 1152,
        "en": "Biodegradable",
        "pos": "(adj)",
        "ipa": "/ˌbaɪ.əʊ.dɪˈɡreɪ.də.bəl/",
        "vi": "Có thể phân hủy sinh học",
        "ex": ""
    },
    {
        "num": 1153,
        "en": "Density",
        "pos": "(n)",
        "ipa": "/ˈden.sɪ.ti/",
        "vi": "Mật độ (dân số)",
        "ex": ""
    },
    {
        "num": 1154,
        "en": "Go down",
        "pos": "phr. v.",
        "ipa": "/ɡəʊ daʊn/",
        "vi": "Giảm xuống (giá cả, nhiệt độ)",
        "ex": ""
    },
    {
        "num": 1155,
        "en": "Introvert",
        "pos": "(n)",
        "ipa": "/ˈɪn.trə.vɜːt/",
        "vi": "Người hướng nội",
        "ex": ""
    },
    {
        "num": 1156,
        "en": "Bear out",
        "pos": "phr. v.",
        "ipa": "/beər aʊt/",
        "vi": "Xác nhận, chứng thực (lời nói, sự thật)",
        "ex": ""
    },
    {
        "num": 1157,
        "en": "Do up",
        "pos": "phr. v.",
        "ipa": "/duː ʌp/",
        "vi": "Trang trí lại, sửa chữa, cài/thắt (áo, giày)",
        "ex": ""
    },
    {
        "num": 1158,
        "en": "Maternal / Paternal",
        "pos": "(adj)",
        "ipa": "/məˈtɜː.nəl/ - /pəˈtɜː.nəl/",
        "vi": "Thuộc họ ngoại / Thuộc họ nội",
        "ex": ""
    },
    {
        "num": 1159,
        "en": "Night owl",
        "pos": "(n)",
        "ipa": "/naɪt aʊl/",
        "vi": "Cú đêm (người hay thức khuya)",
        "ex": ""
    },
    {
        "num": 1160,
        "en": "See eye to eye",
        "pos": "idiom",
        "ipa": "/siː aɪ tuː aɪ/",
        "vi": "Hoàn toàn đồng ý với ai",
        "ex": ""
    },
    {
        "num": 1161,
        "en": "Set up",
        "pos": "phr. v.",
        "ipa": "/set ʌp/",
        "vi": "Thành lập, thiết lập (= establish)",
        "ex": ""
    },
    {
        "num": 1162,
        "en": "Pass out",
        "pos": "phr. v.",
        "ipa": "/pɑːs aʊt/",
        "vi": "Ngất xỉu",
        "ex": ""
    },
    {
        "num": 1163,
        "en": "Clickbait",
        "pos": "(n)",
        "ipa": "/ˈklɪk.beɪt/",
        "vi": "Mồi nhấp chuột (câu view)",
        "ex": ""
    },
    {
        "num": 1164,
        "en": "Mitigation",
        "pos": "(n)",
        "ipa": "/ˌmɪt.ɪˈɡeɪ.ʃən/",
        "vi": "Sự giảm nhẹ (hậu quả, thiên tai)",
        "ex": ""
    },
    {
        "num": 1165,
        "en": "Now and then / Now and again",
        "pos": "idiom",
        "ipa": "/naʊ ənd ðen/ - /əˈɡen/",
        "vi": "Thỉnh thoảng (= sometimes)",
        "ex": ""
    },
    {
        "num": 1166,
        "en": "Break off",
        "pos": "phr. v.",
        "ipa": "/breɪk ɒf/",
        "vi": "Cắt đứt (quan hệ), đột ngột ngừng nói/làm gì",
        "ex": ""
    },
    {
        "num": 1167,
        "en": "Burn out",
        "pos": "phr. v.",
        "ipa": "/bɜːn aʊt/",
        "vi": "Kiệt sức (vì làm việc quá nhiều)",
        "ex": ""
    },
    {
        "num": 1168,
        "en": "Dysfunctional",
        "pos": "(adj)",
        "ipa": "/dɪsˈfʌŋk.ʃən.əl/",
        "vi": "Bất thường, rối loạn (gia đình)",
        "ex": ""
    },
    {
        "num": 1169,
        "en": "Plagiarism",
        "pos": "(n)",
        "ipa": "/ˈpleɪ.dʒər.ɪ.zəm/",
        "vi": "Đạo văn",
        "ex": ""
    },
    {
        "num": 1170,
        "en": "Trend",
        "pos": "(n)",
        "ipa": "/trend/",
        "vi": "Xu hướng",
        "ex": ""
    },
    {
        "num": 1171,
        "en": "Pay off",
        "pos": "phr. v.",
        "ipa": "/peɪ ɒf/",
        "vi": "Trả hết nợ, đền đáp xứng đáng",
        "ex": ""
    },
    {
        "num": 1172,
        "en": "Recession",
        "pos": "(n)",
        "ipa": "/rɪˈseʃ.ən/",
        "vi": "Tình trạng suy thoái kinh tế",
        "ex": ""
    },
    {
        "num": 1173,
        "en": "Cosmopolitan",
        "pos": "(adj)",
        "ipa": "/ˌkɒz.məˈpɒl.ɪ.tən/",
        "vi": "Mang tầm quốc tế, đa sắc tộc",
        "ex": ""
    },
    {
        "num": 1174,
        "en": "Exacerbate",
        "pos": "(v)",
        "ipa": "/ɪɡˈzæs.ə.beɪt/",
        "vi": "Làm trầm trọng thêm",
        "ex": ""
    },
    {
        "num": 1175,
        "en": "Therapist",
        "pos": "(n)",
        "ipa": "/ˈθer.ə.pɪst/",
        "vi": "Bác sĩ trị liệu",
        "ex": ""
    },
    {
        "num": 1176,
        "en": "Empirical",
        "pos": "(adj)",
        "ipa": "/ɪmˈpɪr.ɪ.kəl/",
        "vi": "Dựa trên kinh nghiệm, thực nghiệm",
        "ex": ""
    },
    {
        "num": 1177,
        "en": "Go down with",
        "pos": "phr. v.",
        "ipa": "/ɡəʊ daʊn wɪð/",
        "vi": "Bị ốm, mắc bệnh (= Come down with)",
        "ex": ""
    },
    {
        "num": 1178,
        "en": "Off the top of one's head",
        "pos": "idiom",
        "ipa": "/ɒf ðə tɒp əv wʌnz hed/",
        "vi": "Bật ra trong đầu (nói ngay không cần nghĩ)",
        "ex": ""
    },
    {
        "num": 1179,
        "en": "Know the ropes",
        "pos": "idiom",
        "ipa": "/nəʊ ðə rəʊps/",
        "vi": "Nắm vững tình hình, biết rõ cách làm việc",
        "ex": ""
    },
    {
        "num": 1180,
        "en": "Diagnosis",
        "pos": "(n)",
        "ipa": "/ˌdaɪ.əɡˈnəʊ.sɪs/",
        "vi": "Sự chẩn đoán (bệnh)",
        "ex": ""
    },
    {
        "num": 1181,
        "en": "Come up with",
        "pos": "phr. v.",
        "ipa": "/kʌm ʌp wɪð/",
        "vi": "Nảy ra, nghĩ ra (ý tưởng, giải pháp)",
        "ex": ""
    },
    {
        "num": 1182,
        "en": "Make out",
        "pos": "phr. v.",
        "ipa": "/meɪk aʊt/",
        "vi": "Nhìn ra, nghe ra, hiểu ra (khó khăn)",
        "ex": ""
    },
    {
        "num": 1183,
        "en": "Longevity",
        "pos": "(n)",
        "ipa": "/lɒnˈdʒev.ə.ti/",
        "vi": "Tuổi thọ",
        "ex": ""
    },
    {
        "num": 1184,
        "en": "Binge-watch",
        "pos": "(v)",
        "ipa": "/ˈbɪndʒ.wɒtʃ/",
        "vi": "Cày phim (xem liên tục)",
        "ex": ""
    },
    {
        "num": 1185,
        "en": "Get on",
        "pos": "phr. v.",
        "ipa": "/ɡet ɒn/",
        "vi": "Tiến bộ, lên xe (bus, tàu), hòa thuận",
        "ex": ""
    },
    {
        "num": 1186,
        "en": "Enlightening",
        "pos": "(adj)",
        "ipa": "/ɪnˈlaɪ.tən.ɪŋ/",
        "vi": "Làm sáng tỏ, khai sáng",
        "ex": ""
    },
    {
        "num": 1187,
        "en": "Deprived",
        "pos": "(adj)",
        "ipa": "/dɪˈpraɪvd/",
        "vi": "Thiếu thốn, bần cùng (khu vực)",
        "ex": ""
    },
    {
        "num": 1188,
        "en": "Poaching",
        "pos": "(n)",
        "ipa": "/ˈpəʊ.tʃɪŋ/",
        "vi": "Nạn săn trộm",
        "ex": ""
    },
    {
        "num": 1189,
        "en": "Spill the beans",
        "pos": "idiom",
        "ipa": "/spɪl ðə biːnz/",
        "vi": "Tiết lộ bí mật",
        "ex": ""
    },
    {
        "num": 1190,
        "en": "Colleague",
        "pos": "(n)",
        "ipa": "/ˈkɒl.iːɡ/",
        "vi": "Đồng nghiệp",
        "ex": ""
    },
    {
        "num": 1191,
        "en": "Indigenous",
        "pos": "(adj)",
        "ipa": "/ɪnˈdɪdʒ.ɪ.nəs/",
        "vi": "Bản địa, bản xứ",
        "ex": ""
    },
    {
        "num": 1192,
        "en": "Complex",
        "pos": "(n)",
        "ipa": "/ˈkɒm.pleks/",
        "vi": "Sự mặc cảm",
        "ex": ""
    },
    {
        "num": 1193,
        "en": "Industrious",
        "pos": "(adj)",
        "ipa": "/ɪnˈdʌs.tri.əs/",
        "vi": "Chăm chỉ (= Hard-working)",
        "ex": ""
    },
    {
        "num": 1194,
        "en": "Cyberattack",
        "pos": "(n)",
        "ipa": "/ˈsaɪ.bər.əˌtæk/",
        "vi": "Cuộc tấn công mạng",
        "ex": ""
    },
    {
        "num": 1195,
        "en": "Insomnia",
        "pos": "(n)",
        "ipa": "/ɪnˈsɒm.ni.ə/",
        "vi": "Chứng mất ngủ",
        "ex": ""
    },
    {
        "num": 1196,
        "en": "Campaign",
        "pos": "(n)",
        "ipa": "/kæmˈpeɪn/",
        "vi": "Chiến dịch",
        "ex": ""
    },
    {
        "num": 1197,
        "en": "Devastating",
        "pos": "(adj)",
        "ipa": "/ˈdev.ə.steɪ.tɪŋ/",
        "vi": "Tàn phá, hủy hoại",
        "ex": ""
    },
    {
        "num": 1198,
        "en": "Miss the boat",
        "pos": "idiom",
        "ipa": "/mɪs ðə bəʊt/",
        "vi": "Bỏ lỡ cơ hội",
        "ex": ""
    },
    {
        "num": 1199,
        "en": "Look into",
        "pos": "phr. v.",
        "ipa": "/lʊk ˈɪn.tuː/",
        "vi": "Điều tra, xem xét kĩ (= investigate)",
        "ex": ""
    },
    {
        "num": 1200,
        "en": "Magnificent",
        "pos": "(adj)",
        "ipa": "/mæɡˈnɪf.ɪ.sənt/",
        "vi": "Tráng lệ, nguy nga",
        "ex": ""
    },
    {
        "num": 1201,
        "en": "Aging",
        "pos": "(n/adj)",
        "ipa": "/ˈeɪ.dʒɪŋ/",
        "vi": "Sự già hóa (dân số)",
        "ex": ""
    },
    {
        "num": 1202,
        "en": "Subordinate",
        "pos": "(n)",
        "ipa": "/səˈbɔː.dɪ.nət/",
        "vi": "Cấp dưới, nhân viên dưới quyền",
        "ex": ""
    },
    {
        "num": 1203,
        "en": "Inequality",
        "pos": "(n)",
        "ipa": "/ˌɪn.ɪˈkwɒl.ə.ti/",
        "vi": "Sự bất bình đẳng",
        "ex": ""
    },
    {
        "num": 1204,
        "en": "Ethnocentrism",
        "pos": "(n)",
        "ipa": "/ˌeθ.nəʊˈsen.trɪ.zəm/",
        "vi": "Chủ nghĩa vị chủng",
        "ex": ""
    },
    {
        "num": 1205,
        "en": "Hospitality",
        "pos": "(n)",
        "ipa": "/ˌhɒs.pɪˈtæl.ə.ti/",
        "vi": "Lòng hiếu khách",
        "ex": ""
    },
    {
        "num": 1206,
        "en": "Go out",
        "pos": "phr. v.",
        "ipa": "/ɡəʊ aʊt/",
        "vi": "Mất điện, đi chơi",
        "ex": ""
    },
    {
        "num": 1207,
        "en": "Actions speak louder than words",
        "pos": "idiom",
        "ipa": "/ˈæk.ʃənz spiːk ˈlaʊ.də ðæn wɜːdz/",
        "vi": "Hành động có ý nghĩa hơn lời nói",
        "ex": ""
    },
    {
        "num": 1208,
        "en": "Conservationist",
        "pos": "(n)",
        "ipa": "/ˌkɒn.səˈveɪ.ʃən.ɪst/",
        "vi": "Nhà bảo tồn thiên nhiên",
        "ex": ""
    },
    {
        "num": 1209,
        "en": "Give someone the benefit of the doubt",
        "pos": "idiom",
        "ipa": "/ɡɪv ðə ˈben.ɪ.fɪt əv ðə daʊt/",
        "vi": "Chọn tin tưởng ai đó dẫu còn nhiều nghi ngờ",
        "ex": ""
    },
    {
        "num": 1210,
        "en": "Drop out (of)",
        "pos": "phr. v.",
        "ipa": "/drɒp aʊt əv/",
        "vi": "Bỏ học giữa chừng",
        "ex": ""
    },
    {
        "num": 1211,
        "en": "Chronological",
        "pos": "(adj)",
        "ipa": "/ˌkrɒn.əˈlɒdʒ.ɪ.kəl/",
        "vi": "Theo trình tự thời gian",
        "ex": ""
    },
    {
        "num": 1212,
        "en": "Look after",
        "pos": "phr. v.",
        "ipa": "/lʊk ˈɑːf.tə/",
        "vi": "Chăm sóc (= take care of)",
        "ex": ""
    },
    {
        "num": 1213,
        "en": "Fluctuate",
        "pos": "(v)",
        "ipa": "/ˈflʌk.tʃu.eɪt/",
        "vi": "Dao động, biến động (giá cả)",
        "ex": ""
    },
    {
        "num": 1214,
        "en": "Scholarship / Bursary",
        "pos": "(n)",
        "ipa": "/ˈskɒl.ə.ʃɪp/ - /ˈbɜː.sər.i/",
        "vi": "Học bổng / Trợ cấp học tập",
        "ex": ""
    },
    {
        "num": 1215,
        "en": "Taboo",
        "pos": "(n)",
        "ipa": "/təˈbuː/",
        "vi": "Điều cấm kỵ",
        "ex": ""
    },
    {
        "num": 1216,
        "en": "Face up to",
        "pos": "phr. v.",
        "ipa": "/feɪs ʌp tuː/",
        "vi": "Đối mặt với (khó khăn, sự thật)",
        "ex": ""
    },
    {
        "num": 1217,
        "en": "Empathize",
        "pos": "(v)",
        "ipa": "/ˈem.pə.θaɪz/",
        "vi": "Cảm thông (đặt mình vào vị trí)",
        "ex": ""
    },
    {
        "num": 1218,
        "en": "Cover up",
        "pos": "phr. v.",
        "ipa": "/ˈkʌv.ər ʌp/",
        "vi": "Che giấu sự thật/tội lỗi",
        "ex": ""
    },
    {
        "num": 1219,
        "en": "Routine",
        "pos": "(n)",
        "ipa": "/ruːˈtiːn/",
        "vi": "Thói quen hàng ngày",
        "ex": ""
    },
    {
        "num": 1220,
        "en": "Drop a brick",
        "pos": "idiom",
        "ipa": "/drɒp ə brɪk/",
        "vi": "Lỡ lời, nói điều làm người khác xấu hổ",
        "ex": ""
    },
    {
        "num": 1221,
        "en": "Keep on",
        "pos": "phr. v.",
        "ipa": "/kiːp ɒn/",
        "vi": "Tiếp tục làm gì",
        "ex": ""
    },
    {
        "num": 1222,
        "en": "Give in",
        "pos": "phr. v.",
        "ipa": "/ɡɪv ɪn/",
        "vi": "Đầu hàng, nhượng bộ",
        "ex": ""
    },
    {
        "num": 1223,
        "en": "Come down with",
        "pos": "phr. v.",
        "ipa": "/kʌm daʊn wɪð/",
        "vi": "Bị mắc bệnh (thường là bệnh nhẹ như cảm)",
        "ex": ""
    },
    {
        "num": 1224,
        "en": "Rehearsal",
        "pos": "(n)",
        "ipa": "/rɪˈhɜː.səl/",
        "vi": "Sự diễn tập",
        "ex": ""
    },
    {
        "num": 1225,
        "en": "Outbreak",
        "pos": "(n)",
        "ipa": "/ˈaʊt.breɪk/",
        "vi": "Sự bùng phát (dịch bệnh)",
        "ex": ""
    },
    {
        "num": 1226,
        "en": "Sensationalism",
        "pos": "(n)",
        "ipa": "/senˈseɪ.ʃən.əl.ɪ.zəm/",
        "vi": "Xu hướng giật gân, câu view",
        "ex": ""
    },
    {
        "num": 1227,
        "en": "Gross Domestic Product",
        "pos": "(n)",
        "ipa": "/ɡrəʊs dəˌmes.tɪk ˈprɒd.ʌkt/",
        "vi": "Tổng sản phẩm quốc nội (GDP)",
        "ex": ""
    },
    {
        "num": 1228,
        "en": "Donate",
        "pos": "(v)",
        "ipa": "/dəʊˈneɪt/",
        "vi": "Quyên góp, hiến tặng",
        "ex": ""
    },
    {
        "num": 1229,
        "en": "Come up against",
        "pos": "phr. v.",
        "ipa": "/kʌm ʌp əˈɡenst/",
        "vi": "Đối mặt với (khó khăn, thử thách)",
        "ex": ""
    },
    {
        "num": 1230,
        "en": "Revitalize",
        "pos": "(v)",
        "ipa": "/ˌriːˈvaɪ.təl.aɪz/",
        "vi": "Tiếp thêm sinh lực, làm sống lại",
        "ex": ""
    },
    {
        "num": 1231,
        "en": "Come about",
        "pos": "phr. v.",
        "ipa": "/kʌm əˈbaʊt/",
        "vi": "Xảy ra (= happen)",
        "ex": ""
    },
    {
        "num": 1232,
        "en": "Patriarchal",
        "pos": "(adj)",
        "ipa": "/ˌpeɪ.triˈɑː.kəl/",
        "vi": "Thuộc chế độ phụ quyền, gia trưởng",
        "ex": ""
    },
    {
        "num": 1233,
        "en": "Unspoilt",
        "pos": "(adj)",
        "ipa": "/ʌnˈspɔɪlt/",
        "vi": "Hoang sơ, chưa bị phá hủy",
        "ex": ""
    },
    {
        "num": 1234,
        "en": "Preventative",
        "pos": "(adj)",
        "ipa": "/prɪˈven.tə.tɪv/",
        "vi": "Mang tính phòng ngừa",
        "ex": ""
    },
    {
        "num": 1235,
        "en": "Gridlock",
        "pos": "(n)",
        "ipa": "/ˈɡrɪd.lɒk/",
        "vi": "Sự kẹt xe cứng ngắc",
        "ex": ""
    },
    {
        "num": 1236,
        "en": "Out of order",
        "pos": "idiom",
        "ipa": "/aʊt əv ˈɔː.də/",
        "vi": "Hỏng hóc (thường dùng cho máy móc)",
        "ex": ""
    },
    {
        "num": 1237,
        "en": "No brainer",
        "pos": "idiom",
        "ipa": "/nəʊ ˈbreɪ.nə/",
        "vi": "Quyết định dễ dàng, không cần suy nghĩ",
        "ex": ""
    },
    {
        "num": 1238,
        "en": "Breakthrough",
        "pos": "(n)",
        "ipa": "/ˈbreɪk.θruː/",
        "vi": "Bước đột phá",
        "ex": ""
    },
    {
        "num": 1239,
        "en": "Aptitude",
        "pos": "(n)",
        "ipa": "/ˈæp.tɪ.tʃuːd/",
        "vi": "Năng khiếu, năng lực bẩm sinh",
        "ex": ""
    },
    {
        "num": 1240,
        "en": "Call up",
        "pos": "phr. v.",
        "ipa": "/kɔːl ʌp/",
        "vi": "Gọi điện thoại, gọi nhập ngũ, gợi nhớ",
        "ex": ""
    },
    {
        "num": 1241,
        "en": "Care for",
        "pos": "phr. v.",
        "ipa": "/keə fɔː/",
        "vi": "Quan tâm, chăm sóc, thích",
        "ex": ""
    },
    {
        "num": 1242,
        "en": "Take a rain check",
        "pos": "idiom",
        "ipa": "/teɪk ə reɪn tʃek/",
        "vi": "Hẹn dịp khác nhé (lời từ chối lịch sự)",
        "ex": ""
    },
    {
        "num": 1243,
        "en": "Commuter",
        "pos": "(n)",
        "ipa": "/kəˈmjuː.tə/",
        "vi": "Người đi lại thường xuyên (đi làm)",
        "ex": ""
    },
    {
        "num": 1244,
        "en": "Archaeology",
        "pos": "(n)",
        "ipa": "/ˌɑː.kiˈɒl.ə.dʒi/",
        "vi": "Khảo cổ học",
        "ex": ""
    },
    {
        "num": 1245,
        "en": "Migration",
        "pos": "(n)",
        "ipa": "/maɪˈɡreɪ.ʃən/",
        "vi": "Sự di cư",
        "ex": ""
    },
    {
        "num": 1246,
        "en": "Bite off more than you can chew",
        "pos": "idiom",
        "ipa": "/baɪt ɒf mɔː ðæn juː kæn tʃuː/",
        "vi": "Tham thực cực thân, nhận quá nhiều việc",
        "ex": ""
    },
    {
        "num": 1247,
        "en": "Hit the books",
        "pos": "idiom",
        "ipa": "/hɪt ðə bʊks/",
        "vi": "Cắm đầu vào học, học gạo",
        "ex": ""
    },
    {
        "num": 1248,
        "en": "Rejuvenate",
        "pos": "(v)",
        "ipa": "/rɪˈdʒuː.vən.eɪt/",
        "vi": "Làm trẻ lại, sảng khoái lại",
        "ex": ""
    },
    {
        "num": 1249,
        "en": "Let the cat out of the bag",
        "pos": "idiom",
        "ipa": "/let ðə kæt aʊt əv ðə bæɡ/",
        "vi": "Lỡ miệng tiết lộ bí mật",
        "ex": ""
    },
    {
        "num": 1250,
        "en": "Promotion",
        "pos": "(n)",
        "ipa": "/prəˈməʊ.ʃən/",
        "vi": "Sự thăng chức",
        "ex": ""
    },
    {
        "num": 1251,
        "en": "Pull through",
        "pos": "phr. v.",
        "ipa": "/pʊl θruː/",
        "vi": "Qua khỏi cơn bệnh nặng, phục hồi",
        "ex": ""
    },
    {
        "num": 1252,
        "en": "Go along with",
        "pos": "phr. v.",
        "ipa": "/ɡəʊ əˈlɒŋ wɪð/",
        "vi": "Đồng ý với ai/ý kiến nào đó",
        "ex": ""
    },
    {
        "num": 1253,
        "en": "Sick and tired of",
        "pos": "idiom",
        "ipa": "/sɪk ənd ˈtaɪəd əv/",
        "vi": "Vô cùng chán ngấy việc gì",
        "ex": ""
    },
    {
        "num": 1254,
        "en": "Multi-national",
        "pos": "(adj)",
        "ipa": "/ˌmʌl.tiˈnæʃ.ən.əl/",
        "vi": "Đa quốc gia",
        "ex": ""
    },
    {
        "num": 1255,
        "en": "Conformity",
        "pos": "(n)",
        "ipa": "/kənˈfɔː.mə.ti/",
        "vi": "Sự tuân thủ (chuẩn mực xã hội)",
        "ex": ""
    },
    {
        "num": 1256,
        "en": "Monotonous",
        "pos": "(adj)",
        "ipa": "/məˈnɒt.ən.əs/",
        "vi": "Đơn điệu, nhàm chán",
        "ex": ""
    },
    {
        "num": 1257,
        "en": "Stand up for",
        "pos": "phr. v.",
        "ipa": "/stænd ʌp fɔː/",
        "vi": "Bảo vệ, bênh vực (bản thân, người khác)",
        "ex": ""
    },
    {
        "num": 1258,
        "en": "Revenue",
        "pos": "(n)",
        "ipa": "/ˈrev.ən.juː/",
        "vi": "Doanh thu",
        "ex": ""
    },
    {
        "num": 1259,
        "en": "Get down to",
        "pos": "phr. v.",
        "ipa": "/ɡet daʊn tuː/",
        "vi": "Bắt đầu nghiêm túc làm việc gì",
        "ex": ""
    },
    {
        "num": 1260,
        "en": "Sculpture",
        "pos": "(n)",
        "ipa": "/ˈskʌlp.tʃə/",
        "vi": "Nghệ thuật điêu khắc, bức tượng",
        "ex": ""
    },
    {
        "num": 1261,
        "en": "Interdependence",
        "pos": "(n)",
        "ipa": "/ˌɪn.tə.dɪˈpen.dəns/",
        "vi": "Sự phụ thuộc lẫn nhau",
        "ex": ""
    },
    {
        "num": 1262,
        "en": "Go off",
        "pos": "phr. v.",
        "ipa": "/ɡəʊ ɒf/",
        "vi": "Nổ (bom), reo (chuông), thiu (thức ăn)",
        "ex": ""
    },
    {
        "num": 1263,
        "en": "Put through",
        "pos": "phr. v.",
        "ipa": "/pʊt θruː/",
        "vi": "Nối máy điện thoại",
        "ex": ""
    },
    {
        "num": 1264,
        "en": "Charitable",
        "pos": "(adj)",
        "ipa": "/ˈtʃær.ɪ.tə.bəl/",
        "vi": "Mang tính từ thiện",
        "ex": ""
    },
    {
        "num": 1265,
        "en": "Rehabilitate",
        "pos": "(v)",
        "ipa": "/ˌriː.həˈbɪl.ɪ.teɪt/",
        "vi": "Cải tạo, phục hồi nhân phẩm",
        "ex": ""
    },
    {
        "num": 1266,
        "en": "Norm",
        "pos": "(n)",
        "ipa": "/nɔːm/",
        "vi": "Chuẩn mực (văn hóa, xã hội)",
        "ex": ""
    },
    {
        "num": 1267,
        "en": "State-of-the-art",
        "pos": "(adj)",
        "ipa": "/ˌsteɪt.əv.ðiːˈɑːt/",
        "vi": "Hiện đại nhất, kỹ thuật mới nhất",
        "ex": ""
    },
    {
        "num": 1268,
        "en": "Jump on the bandwagon",
        "pos": "idiom",
        "ipa": "/dʒʌmp ɒn ðə ˈbændˌwæɡ.ən/",
        "vi": "Chạy theo phong trào, hùa theo số đông",
        "ex": ""
    },
    {
        "num": 1269,
        "en": "Breadwinner",
        "pos": "(n)",
        "ipa": "/ˈbredˌwɪn.ə/",
        "vi": "Trụ cột gia đình",
        "ex": ""
    },
    {
        "num": 1270,
        "en": "Active",
        "pos": "(adj)",
        "ipa": "/ˈæk.tɪv/",
        "vi": "Năng động",
        "ex": ""
    },
    {
        "num": 1271,
        "en": "A hot potato",
        "pos": "idiom",
        "ipa": "/ə hɒt pəˈteɪ.təʊ/",
        "vi": "Vấn đề nan giải, nóng hổi",
        "ex": ""
    },
    {
        "num": 1272,
        "en": "Layover",
        "pos": "(n)",
        "ipa": "/ˈleɪˌəʊ.və/",
        "vi": "Thời gian chờ nối chuyến bay",
        "ex": ""
    },
    {
        "num": 1273,
        "en": "Habitat",
        "pos": "(n)",
        "ipa": "/ˈhæb.ɪ.tæt/",
        "vi": "Môi trường sống",
        "ex": ""
    },
    {
        "num": 1274,
        "en": "Carry off",
        "pos": "phr. v.",
        "ipa": "/ˈkær.i ɒf/",
        "vi": "Thành công (trong một việc khó khăn)",
        "ex": ""
    },
    {
        "num": 1275,
        "en": "Turn away",
        "pos": "phr. v.",
        "ipa": "/tɜːn əˈweɪ/",
        "vi": "Từ chối không cho vào",
        "ex": ""
    },
    {
        "num": 1276,
        "en": "Every cloud has a silver lining",
        "pos": "idiom",
        "ipa": "/ˈev.ri klaʊd hæz ə ˈsɪl.və ˈlaɪ.nɪŋ/",
        "vi": "Sau cơn mưa trời lại sáng",
        "ex": ""
    },
    {
        "num": 1277,
        "en": "Automation",
        "pos": "(n)",
        "ipa": "/ˌɔː.təˈmeɪ.ʃən/",
        "vi": "Sự tự động hóa",
        "ex": ""
    },
    {
        "num": 1278,
        "en": "Renovation",
        "pos": "(n)",
        "ipa": "/ˌren.əˈveɪ.ʃən/",
        "vi": "Sự trùng tu, đổi mới",
        "ex": ""
    },
    {
        "num": 1279,
        "en": "Nuptial",
        "pos": "(adj)",
        "ipa": "/ˈnʌp.ʃəl/",
        "vi": "Thuộc về hôn nhân, lễ cưới",
        "ex": ""
    },
    {
        "num": 1280,
        "en": "Telescope",
        "pos": "(n)",
        "ipa": "/ˈtel.ɪ.skəʊp/",
        "vi": "Kính thiên văn",
        "ex": ""
    },
    {
        "num": 1281,
        "en": "Generation gap",
        "pos": "(n)",
        "ipa": "/ˌdʒen.əˈreɪ.ʃən ɡæp/",
        "vi": "Khoảng cách thế hệ",
        "ex": ""
    },
    {
        "num": 1282,
        "en": "Picturesque",
        "pos": "(adj)",
        "ipa": "/ˌpɪk.tʃərˈesk/",
        "vi": "Đẹp như tranh vẽ",
        "ex": ""
    },
    {
        "num": 1283,
        "en": "In vain",
        "pos": "idiom",
        "ipa": "/ɪn veɪn/",
        "vi": "Vô ích, không thành công",
        "ex": ""
    },
    {
        "num": 1284,
        "en": "Compromise",
        "pos": "(v/n)",
        "ipa": "/ˈkɒm.prə.maɪz/",
        "vi": "Thỏa hiệp",
        "ex": ""
    },
    {
        "num": 1285,
        "en": "Database",
        "pos": "(n)",
        "ipa": "/ˈdeɪ.tə.beɪs/",
        "vi": "Cơ sở dữ liệu",
        "ex": ""
    },
    {
        "num": 1286,
        "en": "Productivity",
        "pos": "(n)",
        "ipa": "/ˌprɒd.ʌkˈtɪv.ə.ti/",
        "vi": "Năng suất làm việc",
        "ex": ""
    },
    {
        "num": 1287,
        "en": "Urban sprawl",
        "pos": "(n)",
        "ipa": "/ˈɜː.bən sprɔːl/",
        "vi": "Sự mở rộng đô thị (mất kiểm soát)",
        "ex": ""
    },
    {
        "num": 1288,
        "en": "Think over",
        "pos": "phr. v.",
        "ipa": "/θɪŋk ˈəʊ.və/",
        "vi": "Suy nghĩ kỹ càng trước khi quyết định",
        "ex": ""
    },
    {
        "num": 1289,
        "en": "Inseparable",
        "pos": "(adj)",
        "ipa": "/ɪnˈsep.ər.ə.bəl/",
        "vi": "Không thể tách rời (rất thân)",
        "ex": ""
    },
    {
        "num": 1290,
        "en": "Prosperous",
        "pos": "(adj)",
        "ipa": "/ˈprɒs.pər.əs/",
        "vi": "Phồn vinh, thịnh vượng",
        "ex": ""
    },
    {
        "num": 1291,
        "en": "Appreciate",
        "pos": "(v)",
        "ipa": "/əˈpriː.ʃi.eɪt/",
        "vi": "Thưởng thức, trân trọng",
        "ex": ""
    },
    {
        "num": 1292,
        "en": "Taste of your own medicine",
        "pos": "idiom",
        "ipa": "/teɪst əv jɔːr əʊn ˈmed.ɪ.sən/",
        "vi": "Gậy ông đập lưng ông",
        "ex": ""
    },
    {
        "num": 1293,
        "en": "Cry over spilt milk",
        "pos": "idiom",
        "ipa": "/kraɪ ˈəʊ.və spɪlt mɪlk/",
        "vi": "Tiếc nuối chuyện đã qua, ván đã đóng thuyền",
        "ex": ""
    },
    {
        "num": 1294,
        "en": "Read between the lines",
        "pos": "idiom",
        "ipa": "/riːd bɪˈtwiːn ðə laɪnz/",
        "vi": "Hiểu ý ngầm, ẩn ý đằng sau",
        "ex": ""
    },
    {
        "num": 1295,
        "en": "Procrastinate",
        "pos": "(v)",
        "ipa": "/prəˈkræs.tɪ.neɪt/",
        "vi": "Trì hoãn, chần chừ",
        "ex": ""
    },
    {
        "num": 1296,
        "en": "Subsidize",
        "pos": "(v)",
        "ipa": "/ˈsʌb.sɪ.daɪz/",
        "vi": "Trợ cấp, bao cấp",
        "ex": ""
    },
    {
        "num": 1297,
        "en": "Ring a bell",
        "pos": "idiom",
        "ipa": "/rɪŋ ə bel/",
        "vi": "Nghe quen quen, gợi nhớ đến điều gì",
        "ex": ""
    },
    {
        "num": 1298,
        "en": "Let bygones be bygones",
        "pos": "idiom",
        "ipa": "/let ˈbaɪ.ɡɒnz bi ˈbaɪ.ɡɒnz/",
        "vi": "Chuyện cũ bỏ qua",
        "ex": ""
    },
    {
        "num": 1299,
        "en": "Cut out",
        "pos": "phr. v.",
        "ipa": "/kʌt aʊt/",
        "vi": "Cắt bỏ, chết máy, rất phù hợp",
        "ex": ""
    },
    {
        "num": 1300,
        "en": "Break into",
        "pos": "phr. v.",
        "ipa": "/breɪk ˈɪn.tuː/",
        "vi": "Đột nhập vào",
        "ex": ""
    },
    {
        "num": 1301,
        "en": "Off the beaten track",
        "pos": "(adj)",
        "ipa": "/ɒf ðə ˌbiː.tən ˈtræk/",
        "vi": "Nơi vắng vẻ, ít người biết đến",
        "ex": ""
    },
    {
        "num": 1302,
        "en": "Crop up",
        "pos": "phr. v.",
        "ipa": "/krɒp ʌp/",
        "vi": "Xảy ra bất ngờ (= Come up)",
        "ex": ""
    },
    {
        "num": 1303,
        "en": "Irreversible",
        "pos": "(adj)",
        "ipa": "/ˌɪr.ɪˈvɜː.sə.bəl/",
        "vi": "Không thể đảo ngược",
        "ex": ""
    },
    {
        "num": 1304,
        "en": "Genetic",
        "pos": "(adj)",
        "ipa": "/dʒəˈnet.ɪk/",
        "vi": "Thuộc về di truyền",
        "ex": ""
    },
    {
        "num": 1305,
        "en": "Back out",
        "pos": "phr. v.",
        "ipa": "/bæk aʊt/",
        "vi": "Nuốt lời, rút lại lời hứa",
        "ex": ""
    },
    {
        "num": 1306,
        "en": "Choreography",
        "pos": "(n)",
        "ipa": "/ˌkɒr.iˈɒɡ.rə.fi/",
        "vi": "Nghệ thuật biên đạo múa",
        "ex": ""
    },
    {
        "num": 1307,
        "en": "Autonomous",
        "pos": "(adj)",
        "ipa": "/ɔːˈtɒn.ə.məs/",
        "vi": "Tự chủ, tự lập",
        "ex": ""
    },
    {
        "num": 1308,
        "en": "Break away",
        "pos": "phr. v.",
        "ipa": "/breɪk əˈweɪ/",
        "vi": "Trốn thoát, rời bỏ (nhóm, đảng phái)",
        "ex": ""
    },
    {
        "num": 1309,
        "en": "Evoke",
        "pos": "(v)",
        "ipa": "/ɪˈvəʊk/",
        "vi": "Gợi lên (cảm xúc, ký ức)",
        "ex": ""
    },
    {
        "num": 1310,
        "en": "Captivity",
        "pos": "(n)",
        "ipa": "/kæpˈtɪv.ə.ti/",
        "vi": "Tình trạng bị giam cầm (động vật)",
        "ex": ""
    },
    {
        "num": 1311,
        "en": "Sympathy",
        "pos": "(n)",
        "ipa": "/ˈsɪm.pə.θi/",
        "vi": "Sự thông cảm",
        "ex": ""
    },
    {
        "num": 1312,
        "en": "Call for",
        "pos": "phr. v.",
        "ipa": "/kɔːl fɔː/",
        "vi": "Đòi hỏi, yêu cầu",
        "ex": ""
    },
    {
        "num": 1313,
        "en": "Flora and fauna",
        "pos": "(n)",
        "ipa": "/ˈflɔː.rə ənd ˈfɔː.nə/",
        "vi": "Hệ thực vật và động vật",
        "ex": ""
    },
    {
        "num": 1314,
        "en": "Fall behind",
        "pos": "phr. v.",
        "ipa": "/fɔːl bɪˈhaɪnd/",
        "vi": "Tụt lại phía sau",
        "ex": ""
    },
    {
        "num": 1315,
        "en": "Addictive",
        "pos": "(adj)",
        "ipa": "/əˈdɪk.tɪv/",
        "vi": "Gây nghiện (mạng xã hội)",
        "ex": ""
    },
    {
        "num": 1316,
        "en": "Skyscraper",
        "pos": "(n)",
        "ipa": "/ˈskaɪˌskreɪ.pə/",
        "vi": "Tòa nhà chọc trời",
        "ex": ""
    },
    {
        "num": 1317,
        "en": "Draw a blank",
        "pos": "idiom",
        "ipa": "/drɔː ə blæŋk/",
        "vi": "Chẳng nhớ ra được gì, đầu óc trống rỗng",
        "ex": ""
    },
    {
        "num": 1318,
        "en": "Altruistic",
        "pos": "(adj)",
        "ipa": "/ˌæl.truˈɪs.tɪk/",
        "vi": "Vị tha, không ích kỷ",
        "ex": ""
    },
    {
        "num": 1319,
        "en": "Wear off",
        "pos": "phr. v.",
        "ipa": "/weər ɒf/",
        "vi": "Mất dần tác dụng (thuốc, cảm giác)",
        "ex": ""
    },
    {
        "num": 1320,
        "en": "Prominent",
        "pos": "(adj)",
        "ipa": "/ˈprɒm.ɪ.nənt/",
        "vi": "Nổi bật, xuất chúng",
        "ex": ""
    },
    {
        "num": 1321,
        "en": "Ignorance is bliss",
        "pos": "idiom",
        "ipa": "/ˈɪɡ.nər.əns ɪz blɪs/",
        "vi": "Không biết thì không đau lòng",
        "ex": ""
    },
    {
        "num": 1322,
        "en": "Ask for",
        "pos": "phr. v.",
        "ipa": "/ɑːsk fɔː/",
        "vi": "Yêu cầu, xin",
        "ex": ""
    },
    {
        "num": 1323,
        "en": "Grassroots",
        "pos": "(adj/n)",
        "ipa": "/ˈɡrɑːs.ruːts/",
        "vi": "Từ cơ sở, từ quần chúng nhân dân",
        "ex": ""
    },
    {
        "num": 1324,
        "en": "Tech-savvy",
        "pos": "(adj)",
        "ipa": "/tek ˈsæv.i/",
        "vi": "Am hiểu công nghệ",
        "ex": ""
    },
    {
        "num": 1325,
        "en": "Look through",
        "pos": "phr. v.",
        "ipa": "/lʊk θruː/",
        "vi": "Đọc lướt qua",
        "ex": ""
    },
    {
        "num": 1326,
        "en": "Stand by",
        "pos": "phr. v.",
        "ipa": "/stænd baɪ/",
        "vi": "Sẵn sàng hành động, ủng hộ/bên cạnh ai",
        "ex": ""
    },
    {
        "num": 1327,
        "en": "High-rise",
        "pos": "(n/adj)",
        "ipa": "/ˈhaɪ.raɪz/",
        "vi": "Tòa nhà cao tầng",
        "ex": ""
    },
    {
        "num": 1328,
        "en": "Labor-saving",
        "pos": "(adj)",
        "ipa": "/ˈleɪ.bəˌseɪ.vɪŋ/",
        "vi": "Tiết kiệm sức lao động",
        "ex": ""
    },
    {
        "num": 1329,
        "en": "Go the extra mile",
        "pos": "idiom",
        "ipa": "/ɡəʊ ði ˈek.strə maɪl/",
        "vi": "Nỗ lực hết mình, làm nhiều hơn mức yêu cầu",
        "ex": ""
    },
    {
        "num": 1330,
        "en": "By leaps and bounds",
        "pos": "idiom",
        "ipa": "/baɪ liːps ənd baʊndz/",
        "vi": "Tiến bộ rất nhanh, vượt bậc",
        "ex": ""
    },
    {
        "num": 1331,
        "en": "Resign",
        "pos": "(v)",
        "ipa": "/rɪˈzaɪn/",
        "vi": "Từ chức",
        "ex": ""
    },
    {
        "num": 1332,
        "en": "Nurture",
        "pos": "(v)",
        "ipa": "/ˈnɜː.tʃə/",
        "vi": "Nuôi nấng, bồi dưỡng",
        "ex": ""
    },
    {
        "num": 1333,
        "en": "Tell off",
        "pos": "phr. v.",
        "ipa": "/tel ɒf/",
        "vi": "La mắng, rầy la",
        "ex": ""
    },
    {
        "num": 1334,
        "en": "Offender",
        "pos": "(n)",
        "ipa": "/əˈfen.də/",
        "vi": "Người phạm tội",
        "ex": ""
    },
    {
        "num": 1335,
        "en": "Stand out",
        "pos": "phr. v.",
        "ipa": "/stænd aʊt/",
        "vi": "Nổi bật, dễ nhận thấy",
        "ex": ""
    },
    {
        "num": 1336,
        "en": "Hold on",
        "pos": "phr. v.",
        "ipa": "/həʊld ɒn/",
        "vi": "Giữ máy (điện thoại), chờ đợi",
        "ex": ""
    },
    {
        "num": 1337,
        "en": "Keep one's fingers crossed",
        "pos": "idiom",
        "ipa": "/kiːp wʌnz ˈfɪŋ.ɡəz krɒst/",
        "vi": "Mong điều tốt đẹp sẽ đến (cầu may)",
        "ex": ""
    },
    {
        "num": 1338,
        "en": "Artifact",
        "pos": "(n)",
        "ipa": "/ˈɑː.tɪ.fækt/",
        "vi": "Cổ vật, hiện vật nhân tạo",
        "ex": ""
    },
    {
        "num": 1339,
        "en": "Blow over",
        "pos": "phr. v.",
        "ipa": "/bləʊ ˈəʊ.və/",
        "vi": "Qua đi, bị lãng quên (bê bối, tin đồn, bão)",
        "ex": ""
    },
    {
        "num": 1340,
        "en": "Look out",
        "pos": "phr. v.",
        "ipa": "/lʊk aʊt/",
        "vi": "Cẩn thận, coi chừng (= Watch out)",
        "ex": ""
    },
    {
        "num": 1341,
        "en": "Optimistic",
        "pos": "(adj)",
        "ipa": "/ˌɒp.tɪˈmɪs.tɪk/",
        "vi": "Lạc quan",
        "ex": ""
    },
    {
        "num": 1342,
        "en": "Caught between two stools",
        "pos": "idiom",
        "ipa": "/kɔːt bɪˈtwiːn tuː stuːlz/",
        "vi": "Tiến thoái lưỡng nan (do dự giữa 2 lựa chọn)",
        "ex": ""
    },
    {
        "num": 1343,
        "en": "It takes two to tango",
        "pos": "idiom",
        "ipa": "/ɪt teɪks tuː tə ˈtæŋ.ɡəʊ/",
        "vi": "Có lửa mới có khói (cả 2 bên đều có lỗi)",
        "ex": ""
    },
    {
        "num": 1344,
        "en": "Show up",
        "pos": "phr. v.",
        "ipa": "/ʃəʊ ʌp/",
        "vi": "Xuất hiện, đến (= turn up)",
        "ex": ""
    },
    {
        "num": 1345,
        "en": "Best thing since sliced bread",
        "pos": "idiom",
        "ipa": "/best θɪŋ sɪns slaɪst bred/",
        "vi": "Một ý tưởng/phát minh tuyệt vời",
        "ex": ""
    },
    {
        "num": 1346,
        "en": "Dynasty",
        "pos": "(n)",
        "ipa": "/ˈdɪn.ə.sti/",
        "vi": "Triều đại",
        "ex": ""
    },
    {
        "num": 1347,
        "en": "Bribery",
        "pos": "(n)",
        "ipa": "/ˈbraɪ.bər.i/",
        "vi": "Sự hối lộ",
        "ex": ""
    },
    {
        "num": 1348,
        "en": "Alienation",
        "pos": "(n)",
        "ipa": "/ˌeɪ.li.əˈneɪ.ʃən/",
        "vi": "Sự xa lánh, ghẻ lạnh",
        "ex": ""
    },
    {
        "num": 1349,
        "en": "Catch out",
        "pos": "phr. v.",
        "ipa": "/kætʃ aʊt/",
        "vi": "Bắt quả tang, lừa ai mắc bẫy",
        "ex": ""
    },
    {
        "num": 1350,
        "en": "Contagious",
        "pos": "(adj)",
        "ipa": "/kənˈteɪ.dʒəs/",
        "vi": "Dễ lây lan (bệnh truyền nhiễm)",
        "ex": ""
    },
    {
        "num": 1351,
        "en": "Immigration",
        "pos": "(n)",
        "ipa": "/ˌɪm.ɪˈɡreɪ.ʃən/",
        "vi": "Sự nhập cư",
        "ex": ""
    },
    {
        "num": 1352,
        "en": "Pandemic",
        "pos": "(n)",
        "ipa": "/pænˈdem.ɪk/",
        "vi": "Đại dịch toàn cầu",
        "ex": ""
    },
    {
        "num": 1353,
        "en": "Sanctuary",
        "pos": "(n)",
        "ipa": "/ˈsæŋk.tʃʊə.ri/",
        "vi": "Khu bảo tồn, nơi tôn nghiêm",
        "ex": ""
    },
    {
        "num": 1354,
        "en": "Mutation",
        "pos": "(n)",
        "ipa": "/mjuːˈteɪ.ʃən/",
        "vi": "Sự đột biến (gen)",
        "ex": ""
    },
    {
        "num": 1355,
        "en": "Sleep on it",
        "pos": "idiom",
        "ipa": "/sliːp ɒn ɪt/",
        "vi": "Cần thời gian suy nghĩ trước khi quyết định",
        "ex": ""
    },
    {
        "num": 1356,
        "en": "Pass on",
        "pos": "phr. v.",
        "ipa": "/pɑːs ɒn/",
        "vi": "Truyền lại, chuyển tiếp (thông điệp, bệnh)",
        "ex": ""
    },
    {
        "num": 1357,
        "en": "Set off / out",
        "pos": "phr. v.",
        "ipa": "/set ɒf/ - /aʊt/",
        "vi": "Khởi hành, bắt đầu một chuyến đi",
        "ex": ""
    },
    {
        "num": 1358,
        "en": "Take on",
        "pos": "phr. v.",
        "ipa": "/teɪk ɒn/",
        "vi": "Đảm nhận (công việc), tuyển dụng",
        "ex": ""
    },
    {
        "num": 1359,
        "en": "Headhunter",
        "pos": "(n)",
        "ipa": "/ˈhedˌhʌn.tə/",
        "vi": "Chuyên gia săn đầu người",
        "ex": ""
    },
    {
        "num": 1360,
        "en": "Slum",
        "pos": "(n)",
        "ipa": "/slʌm/",
        "vi": "Khu ổ chuột",
        "ex": ""
    },
    {
        "num": 1361,
        "en": "Pull someone's leg",
        "pos": "idiom",
        "ipa": "/pʊl ˈsʌm.wʌnz leɡ/",
        "vi": "Trêu chọc, nói đùa với ai đó",
        "ex": ""
    },
    {
        "num": 1362,
        "en": "Go by",
        "pos": "phr. v.",
        "ipa": "/ɡəʊ baɪ/",
        "vi": "(Thời gian) trôi qua",
        "ex": ""
    },
    {
        "num": 1363,
        "en": "Couch potato",
        "pos": "idiom",
        "ipa": "/ˈkaʊtʃ pəˌteɪ.təʊ/",
        "vi": "Người lười biếng, chỉ ngồi xem tivi",
        "ex": ""
    },
    {
        "num": 1364,
        "en": "Superstition",
        "pos": "(n)",
        "ipa": "/ˌsuː.pəˈstɪʃ.ən/",
        "vi": "Sự mê tín dị đoan",
        "ex": ""
    },
    {
        "num": 1365,
        "en": "Bite the bullet",
        "pos": "idiom",
        "ipa": "/baɪt ðə ˈbʊl.ɪt/",
        "vi": "Cắn răng chịu đựng (làm việc khó khăn)",
        "ex": ""
    },
    {
        "num": 1366,
        "en": "Make up for",
        "pos": "phr. v.",
        "ipa": "/meɪk ʌp fɔː/",
        "vi": "Đền bù, bù đắp cho",
        "ex": ""
    },
    {
        "num": 1367,
        "en": "Marginalize",
        "pos": "(v)",
        "ipa": "/ˈmɑː.dʒɪ.nəl.aɪz/",
        "vi": "Yếu thế hóa, gạt ra lề xã hội",
        "ex": ""
    },
    {
        "num": 1368,
        "en": "Rational",
        "pos": "(adj)",
        "ipa": "/ˈræʃ.ən.əl/",
        "vi": "Có lý trí, dựa trên lý trí",
        "ex": ""
    },
    {
        "num": 1369,
        "en": "Hit the sack / Hit the hay",
        "pos": "idiom",
        "ipa": "/hɪt ðə sæk/ - /heɪ/",
        "vi": "Đi ngủ",
        "ex": ""
    },
    {
        "num": 1370,
        "en": "Bring up",
        "pos": "phr. v.",
        "ipa": "/brɪŋ ʌp/",
        "vi": "Nuôi dưỡng, đề cập tới (vấn đề)",
        "ex": ""
    },
    {
        "num": 1371,
        "en": "Intangible",
        "pos": "(adj)",
        "ipa": "/ɪnˈtæn.dʒə.bəl/",
        "vi": "Phi vật thể (di sản)",
        "ex": ""
    },
    {
        "num": 1372,
        "en": "Redundant",
        "pos": "(adj)",
        "ipa": "/rɪˈdʌn.dənt/",
        "vi": "Bị sa thải (thừa nhân lực), dư thừa",
        "ex": ""
    },
    {
        "num": 1373,
        "en": "Evolve",
        "pos": "(v)",
        "ipa": "/ɪˈvɒlv/",
        "vi": "Tiến hóa",
        "ex": ""
    },
    {
        "num": 1374,
        "en": "Outsourcing",
        "pos": "(n)",
        "ipa": "/ˈaʊtˌsɔː.sɪŋ/",
        "vi": "Thuê ngoài (dịch vụ, nhân lực)",
        "ex": ""
    },
    {
        "num": 1375,
        "en": "Anxiety",
        "pos": "(n)",
        "ipa": "/æŋˈzaɪ.ə.ti/",
        "vi": "Sự lo âu, chứng lo âu",
        "ex": ""
    },
    {
        "num": 1376,
        "en": "Trauma",
        "pos": "(n)",
        "ipa": "/ˈtrɔː.mə/",
        "vi": "Chấn thương (tâm lý), cú sốc",
        "ex": ""
    },
    {
        "num": 1377,
        "en": "Fill in / out",
        "pos": "phr. v.",
        "ipa": "/fɪl ɪn/ - /aʊt/",
        "vi": "Điền thông tin vào (đơn từ)",
        "ex": ""
    },
    {
        "num": 1378,
        "en": "Manipulate",
        "pos": "(v)",
        "ipa": "/məˈnɪp.jə.leɪt/",
        "vi": "Thao túng, điều khiển",
        "ex": ""
    },
    {
        "num": 1379,
        "en": "Mortality",
        "pos": "(n)",
        "ipa": "/mɔːˈtæl.ə.ti/",
        "vi": "Tỷ lệ tử vong",
        "ex": ""
    },
    {
        "num": 1380,
        "en": "Turn out",
        "pos": "phr. v.",
        "ipa": "/tɜːn aʊt/",
        "vi": "Hóa ra là, xuất hiện (để tham gia sự kiện)",
        "ex": ""
    },
    {
        "num": 1381,
        "en": "Landmark",
        "pos": "(n)",
        "ipa": "/ˈlænd.mɑːk/",
        "vi": "Địa danh, cột mốc nổi bật",
        "ex": ""
    },
    {
        "num": 1382,
        "en": "Cut to the chase",
        "pos": "idiom",
        "ipa": "/kʌt tuː ðə tʃeɪs/",
        "vi": "Đi thẳng vào vấn đề chính",
        "ex": ""
    },
    {
        "num": 1383,
        "en": "Sponsor",
        "pos": "(v/n)",
        "ipa": "/ˈspɒn.sə/",
        "vi": "Tài trợ / Nhà tài trợ",
        "ex": ""
    },
    {
        "num": 1384,
        "en": "Fall for",
        "pos": "phr. v.",
        "ipa": "/fɔːl fɔː/",
        "vi": "Yêu ai, bị lừa (tin vào trò đùa)",
        "ex": ""
    },
    {
        "num": 1385,
        "en": "Mindset",
        "pos": "(n)",
        "ipa": "/ˈmaɪnd.set/",
        "vi": "Tư duy, nếp nghĩ",
        "ex": ""
    },
    {
        "num": 1386,
        "en": "Cohabitation",
        "pos": "(n)",
        "ipa": "/kəʊˌhæb.ɪˈteɪ.ʃən/",
        "vi": "Sống thử, sống chung chưa kết hôn",
        "ex": ""
    },
    {
        "num": 1387,
        "en": "Put out",
        "pos": "phr. v.",
        "ipa": "/pʊt aʊt/",
        "vi": "Dập tắt (lửa, thuốc lá)",
        "ex": ""
    },
    {
        "num": 1388,
        "en": "Account for",
        "pos": "phr. v.",
        "ipa": "/əˈkaʊnt fɔː/",
        "vi": "Chiếm (tỉ lệ), giải thích nguyên nhân",
        "ex": ""
    },
    {
        "num": 1389,
        "en": "Symmetrical",
        "pos": "(adj)",
        "ipa": "/sɪˈmet.rɪ.kəl/",
        "vi": "Đối xứng (kiến trúc)",
        "ex": ""
    },
    {
        "num": 1390,
        "en": "Extracurricular",
        "pos": "(adj)",
        "ipa": "/ˌek.strə.kəˈrɪk.jə.lə/",
        "vi": "Ngoại khóa (hoạt động)",
        "ex": ""
    },
    {
        "num": 1391,
        "en": "Take it with a grain of salt",
        "pos": "idiom",
        "ipa": "/teɪk ɪt wɪð ə ɡreɪn əv sɒlt/",
        "vi": "Bán tín bán nghi, không tin hoàn toàn",
        "ex": ""
    },
    {
        "num": 1392,
        "en": "Voluntary",
        "pos": "(adj)",
        "ipa": "/ˈvɒl.ən.tər.i/",
        "vi": "Tự nguyện",
        "ex": ""
    },
    {
        "num": 1393,
        "en": "Diversity",
        "pos": "(n)",
        "ipa": "/daɪˈvɜː.sə.ti/",
        "vi": "Sự đa dạng",
        "ex": ""
    },
    {
        "num": 1394,
        "en": "Make ends meet",
        "pos": "idiom",
        "ipa": "/meɪk endz miːt/",
        "vi": "Xoay xở đủ sống, kiếm đủ tiền để sống",
        "ex": ""
    },
    {
        "num": 1395,
        "en": "Out of the blue",
        "pos": "idiom",
        "ipa": "/aʊt əv ðə bluː/",
        "vi": "Bất thình lình, hoàn toàn bất ngờ",
        "ex": ""
    },
    {
        "num": 1396,
        "en": "Ecotourism",
        "pos": "(n)",
        "ipa": "/ˈiː.kəʊˌtʊə.rɪ.zəm/",
        "vi": "Du lịch sinh thái",
        "ex": ""
    },
    {
        "num": 1397,
        "en": "Live up to",
        "pos": "phr. v.",
        "ipa": "/lɪv ʌp tuː/",
        "vi": "Đáp ứng được kỳ vọng, xứng đáng với",
        "ex": ""
    },
    {
        "num": 1398,
        "en": "Stopover",
        "pos": "(n)",
        "ipa": "/ˈstɒpˌəʊ.və/",
        "vi": "Điểm dừng chân",
        "ex": ""
    },
    {
        "num": 1399,
        "en": "Improvise",
        "pos": "(v)",
        "ipa": "/ˈɪm.prə.vaɪz/",
        "vi": "Ứng biến (không cần kịch bản)",
        "ex": ""
    },
    {
        "num": 1400,
        "en": "Relic",
        "pos": "(n)",
        "ipa": "/ˈrel.ɪk/",
        "vi": "Di tích, cổ vật",
        "ex": ""
    },
    {
        "num": 1401,
        "en": "Well-being",
        "pos": "(n)",
        "ipa": "/ˌwelˈbiː.ɪŋ/",
        "vi": "Tình trạng hạnh phúc, khỏe mạnh",
        "ex": ""
    },
    {
        "num": 1402,
        "en": "Check in",
        "pos": "phr. v.",
        "ipa": "/tʃek ɪn/",
        "vi": "Làm thủ tục vào (khách sạn, sân bay)",
        "ex": ""
    },
    {
        "num": 1403,
        "en": "Down the drain",
        "pos": "idiom",
        "ipa": "/daʊn ðə dreɪn/",
        "vi": "Đổ sông đổ biển (công sức, tiền bạc)",
        "ex": ""
    },
    {
        "num": 1404,
        "en": "Cross that bridge when you come to it",
        "pos": "idiom",
        "ipa": "/krɒs ðæt brɪdʒ wen juː kʌm tuː ɪt/",
        "vi": "Tới đâu hay tới đó, chuyện chưa tới đừng lo",
        "ex": ""
    },
    {
        "num": 1405,
        "en": "Folklore",
        "pos": "(n)",
        "ipa": "/ˈfəʊk.lɔː/",
        "vi": "Văn hóa dân gian",
        "ex": ""
    },
    {
        "num": 1406,
        "en": "Cutting-edge",
        "pos": "(adj)",
        "ipa": "/ˌkʌt.ɪŋˈedʒ/",
        "vi": "Tiên tiến nhất, hiện đại nhất",
        "ex": ""
    },
    {
        "num": 1407,
        "en": "Give up",
        "pos": "phr. v.",
        "ipa": "/ɡɪv ʌp/",
        "vi": "Từ bỏ (thói quen, nỗ lực)",
        "ex": ""
    },
    {
        "num": 1408,
        "en": "Dialect",
        "pos": "(n)",
        "ipa": "/ˈdaɪ.ə.lekt/",
        "vi": "Phương ngữ, tiếng địa phương",
        "ex": ""
    },
    {
        "num": 1409,
        "en": "Birth rate",
        "pos": "(n)",
        "ipa": "/bɜːθ reɪt/",
        "vi": "Tỷ lệ sinh",
        "ex": ""
    },
    {
        "num": 1410,
        "en": "Pull over",
        "pos": "phr. v.",
        "ipa": "/pʊl ˈəʊ.və/",
        "vi": "Tấp xe vào lề đường",
        "ex": ""
    },
    {
        "num": 1411,
        "en": "Immunity",
        "pos": "(n)",
        "ipa": "/ɪˈmjuː.nə.ti/",
        "vi": "Sự miễn dịch",
        "ex": ""
    },
    {
        "num": 1412,
        "en": "Microbiology",
        "pos": "(n)",
        "ipa": "/ˌmaɪ.krəʊ.baɪˈɒl.ə.dʒi/",
        "vi": "Vi sinh vật học",
        "ex": ""
    },
    {
        "num": 1413,
        "en": "Fall back on",
        "pos": "phr. v.",
        "ipa": "/fɔːl bæk ɒn/",
        "vi": "Phải dựa vào (khi kế hoạch khác thất bại)",
        "ex": ""
    },
    {
        "num": 1414,
        "en": "Overcrowded",
        "pos": "(adj)",
        "ipa": "/ˌəʊ.vəˈkraʊ.dɪd/",
        "vi": "Quá đông đúc",
        "ex": ""
    },
    {
        "num": 1415,
        "en": "Alienate",
        "pos": "(v)",
        "ipa": "/ˈeɪ.li.ə.neɪt/",
        "vi": "Xa lánh, làm cho ai xa lánh",
        "ex": ""
    },
    {
        "num": 1416,
        "en": "Propaganda",
        "pos": "(n)",
        "ipa": "/ˌprɒp.əˈɡæn.də/",
        "vi": "Sự tuyên truyền",
        "ex": ""
    },
    {
        "num": 1417,
        "en": "Radiation",
        "pos": "(n)",
        "ipa": "/ˌreɪ.diˈeɪ.ʃən/",
        "vi": "Bức xạ, phóng xạ",
        "ex": ""
    },
    {
        "num": 1418,
        "en": "So far so good",
        "pos": "idiom",
        "ipa": "/səʊ fɑː səʊ ɡʊd/",
        "vi": "Mọi thứ vẫn tốt đẹp tính đến hiện tại",
        "ex": ""
    },
    {
        "num": 1419,
        "en": "Broadcast",
        "pos": "(v/n)",
        "ipa": "/ˈbrɔːd.kɑːst/",
        "vi": "Phát sóng (truyền hình, radio)",
        "ex": ""
    },
    {
        "num": 1420,
        "en": "Boil down to",
        "pos": "phr. v.",
        "ipa": "/bɔɪl daʊn tuː/",
        "vi": "Chung quy lại là, vấn đề chính là",
        "ex": ""
    },
    {
        "num": 1421,
        "en": "Fraud",
        "pos": "(n)",
        "ipa": "/frɔːd/",
        "vi": "Sự gian lận, lừa đảo",
        "ex": ""
    },
    {
        "num": 1422,
        "en": "Go up",
        "pos": "phr. v.",
        "ipa": "/ɡəʊ ʌp/",
        "vi": "Tăng lên",
        "ex": ""
    },
    {
        "num": 1423,
        "en": "Off the record",
        "pos": "idiom",
        "ipa": "/ɒf ðə ˈrek.ɔːd/",
        "vi": "Không chính thức, không được ghi vào sổ",
        "ex": ""
    },
    {
        "num": 1424,
        "en": "Monopoly",
        "pos": "(n)",
        "ipa": "/məˈnɒp.əl.i/",
        "vi": "Sự độc quyền",
        "ex": ""
    },
    {
        "num": 1425,
        "en": "Stereotype",
        "pos": "(n)",
        "ipa": "/ˈster.i.ə.taɪp/",
        "vi": "Định kiến, khuôn mẫu",
        "ex": ""
    },
    {
        "num": 1426,
        "en": "Phobia",
        "pos": "(n)",
        "ipa": "/ˈfəʊ.bi.ə/",
        "vi": "Hội chứng sợ hãi vô lý",
        "ex": ""
    },
    {
        "num": 1427,
        "en": "Grow up",
        "pos": "phr. v.",
        "ipa": "/ɡrəʊ ʌp/",
        "vi": "Lớn lên, trưởng thành",
        "ex": ""
    },
    {
        "num": 1428,
        "en": "Contribute",
        "pos": "(v)",
        "ipa": "/kənˈtrɪb.juːt/",
        "vi": "Đóng góp, cống hiến",
        "ex": ""
    },
    {
        "num": 1429,
        "en": "Cheer up",
        "pos": "phr. v.",
        "ipa": "/tʃɪər ʌp/",
        "vi": "Vui lên, làm ai đó vui lên",
        "ex": ""
    },
    {
        "num": 1430,
        "en": "Rule of thumb",
        "pos": "idiom",
        "ipa": "/ruːl əv θʌm/",
        "vi": "Nguyên tắc chung dựa trên kinh nghiệm",
        "ex": ""
    },
    {
        "num": 1431,
        "en": "Privatization",
        "pos": "(n)",
        "ipa": "/ˌpraɪ.və.taɪˈzeɪ.ʃən/",
        "vi": "Sự tư nhân hóa",
        "ex": ""
    },
    {
        "num": 1432,
        "en": "Curriculum",
        "pos": "(n)",
        "ipa": "/kəˈrɪk.jə.ləm/",
        "vi": "Chương trình giảng dạy",
        "ex": ""
    },
    {
        "num": 1433,
        "en": "Depression",
        "pos": "(n)",
        "ipa": "/dɪˈpreʃ.ən/",
        "vi": "Căn bệnh trầm cảm",
        "ex": ""
    },
    {
        "num": 1434,
        "en": "Hold back",
        "pos": "phr. v.",
        "ipa": "/həʊld bæk/",
        "vi": "Kìm nén (cảm xúc), ngăn lại, che giấu",
        "ex": ""
    },
    {
        "num": 1435,
        "en": "Compensation",
        "pos": "(n)",
        "ipa": "/ˌkɒm.penˈseɪ.ʃən/",
        "vi": "Sự bồi thường, lương và phúc lợi",
        "ex": ""
    },
    {
        "num": 1436,
        "en": "Cyberbullying",
        "pos": "(n)",
        "ipa": "/ˈsaɪ.bəˌbʊl.i.ɪŋ/",
        "vi": "Bắt nạt trên mạng",
        "ex": ""
    },
    {
        "num": 1437,
        "en": "Marginalized",
        "pos": "(adj)",
        "ipa": "/ˈmɑː.dʒɪ.nəl.aɪzd/",
        "vi": "Bị gạt ra ngoài lề (xã hội)",
        "ex": ""
    },
    {
        "num": 1438,
        "en": "Look for",
        "pos": "phr. v.",
        "ipa": "/lʊk fɔː/",
        "vi": "Tìm kiếm",
        "ex": ""
    },
    {
        "num": 1439,
        "en": "Beat about/around the bush",
        "pos": "idiom",
        "ipa": "/biːt əˈbaʊt ðə bʊʃ/",
        "vi": "Nói vòng vo tam quốc, không vào trọng tâm",
        "ex": ""
    },
    {
        "num": 1440,
        "en": "Dedicate",
        "pos": "(v)",
        "ipa": "/ˈded.ɪ.keɪt/",
        "vi": "Cống hiến, tận tâm",
        "ex": ""
    },
    {
        "num": 1441,
        "en": "Narrow down",
        "pos": "phr. v.",
        "ipa": "/ˈnær.əʊ daʊn/",
        "vi": "Thu hẹp (danh sách, các sự lựa chọn)",
        "ex": ""
    },
    {
        "num": 1442,
        "en": "Carnivore",
        "pos": "(n)",
        "ipa": "/ˈkɑː.nɪ.vɔː/",
        "vi": "Động vật ăn thịt",
        "ex": ""
    },
    {
        "num": 1443,
        "en": "Get through",
        "pos": "phr. v.",
        "ipa": "/ɡet θruː/",
        "vi": "Hoàn thành, liên lạc được, thi đỗ",
        "ex": ""
    },
    {
        "num": 1444,
        "en": "Come out",
        "pos": "phr. v.",
        "ipa": "/kʌm aʊt/",
        "vi": "Xuất bản, lộ ra (sự thật), nở (hoa)",
        "ex": ""
    },
    {
        "num": 1445,
        "en": "Renewable",
        "pos": "(adj)",
        "ipa": "/rɪˈnjuː.ə.bəl/",
        "vi": "Có thể tái tạo (năng lượng)",
        "ex": ""
    },
    {
        "num": 1446,
        "en": "Pessimistic",
        "pos": "(adj)",
        "ipa": "/ˌpes.ɪˈmɪs.tɪk/",
        "vi": "Bi quan",
        "ex": ""
    },
    {
        "num": 1447,
        "en": "Bring out",
        "pos": "phr. v.",
        "ipa": "/brɪŋ aʊt/",
        "vi": "Xuất bản (sách), làm nổi bật (phẩm chất)",
        "ex": ""
    },
    {
        "num": 1448,
        "en": "Barking up the wrong tree",
        "pos": "idiom",
        "ipa": "/ˈbɑː.kɪŋ ʌp ðə rɒŋ triː/",
        "vi": "Trách nhầm người, đi sai hướng",
        "ex": ""
    },
    {
        "num": 1449,
        "en": "Sanitation",
        "pos": "(n)",
        "ipa": "/ˌsæn.ɪˈteɪ.ʃən/",
        "vi": "Hệ thống vệ sinh (nước thải, rác)",
        "ex": ""
    },
    {
        "num": 1450,
        "en": "Sluggish",
        "pos": "(adj)",
        "ipa": "/ˈslʌɡ.ɪʃ/",
        "vi": "Uể oải, lờ đờ",
        "ex": ""
    },
    {
        "num": 1451,
        "en": "Comprehensive",
        "pos": "(adj)",
        "ipa": "/ˌkɒm.prɪˈhen.sɪv/",
        "vi": "Toàn diện, bao quát",
        "ex": ""
    },
    {
        "num": 1452,
        "en": "Amenity",
        "pos": "(n)",
        "ipa": "/əˈmiː.nə.ti/",
        "vi": "Tiện nghi, cơ sở vật chất",
        "ex": ""
    },
    {
        "num": 1453,
        "en": "Domestic violence",
        "pos": "(n)",
        "ipa": "/dəˌmes.tɪk ˈvaɪə.ləns/",
        "vi": "Bạo lực gia đình",
        "ex": ""
    },
    {
        "num": 1454,
        "en": "Put on",
        "pos": "phr. v.",
        "ipa": "/pʊt ɒn/",
        "vi": "Mặc (quần áo), tăng (cân), tổ chức",
        "ex": ""
    },
    {
        "num": 1455,
        "en": "Cut off",
        "pos": "phr. v.",
        "ipa": "/kʌt ɒf/",
        "vi": "Ngừng cung cấp (điện, nước), cắt đứt",
        "ex": ""
    },
    {
        "num": 1456,
        "en": "Gothic",
        "pos": "(adj)",
        "ipa": "/ˈɡɒθ.ɪk/",
        "vi": "Kiến trúc Gô-tích",
        "ex": ""
    },
    {
        "num": 1457,
        "en": "Go in for",
        "pos": "phr. v.",
        "ipa": "/ɡəʊ ɪn fɔː/",
        "vi": "Tham gia (kỳ thi, cuộc thi), đam mê",
        "ex": ""
    },
    {
        "num": 1458,
        "en": "Go without",
        "pos": "phr. v.",
        "ipa": "/ɡəʊ wɪˈðaʊt/",
        "vi": "Nhịn, chịu thiếu thốn cái gì",
        "ex": ""
    },
    {
        "num": 1459,
        "en": "Delegate",
        "pos": "(v)",
        "ipa": "/ˈdel.ɪ.ɡeɪt/",
        "vi": "Giao phó, ủy quyền",
        "ex": ""
    },
    {
        "num": 1460,
        "en": "Pursuit",
        "pos": "(n)",
        "ipa": "/pəˈsjuːt/",
        "vi": "Đam mê theo đuổi, sở thích",
        "ex": ""
    },
    {
        "num": 1461,
        "en": "Hit the roof / Hit the ceiling",
        "pos": "idiom",
        "ipa": "/hɪt ðə ruːf/ - /ˈsiː.lɪŋ/",
        "vi": "Cực kỳ tức giận",
        "ex": ""
    },
    {
        "num": 1462,
        "en": "Sophisticated",
        "pos": "(adj)",
        "ipa": "/səˈfɪs.tɪ.keɪ.tɪd/",
        "vi": "Tinh vi, phức tạp (công nghệ)",
        "ex": ""
    },
    {
        "num": 1463,
        "en": "Tabloid",
        "pos": "(n)",
        "ipa": "/ˈtæb.lɔɪd/",
        "vi": "Báo lá cải",
        "ex": ""
    },
    {
        "num": 1464,
        "en": "On cloud nine / Over the moon",
        "pos": "idiom",
        "ipa": "/ɒn klaʊd naɪn/ - /ˈəʊ.və ðə muːn/",
        "vi": "Vô cùng sung sướng, hạnh phúc",
        "ex": ""
    },
    {
        "num": 1465,
        "en": "Curiosity killed the cat",
        "pos": "idiom",
        "ipa": "/ˌkjʊə.riˈɒs.ə.ti kɪld ðə kæt/",
        "vi": "Tò mò hại thân",
        "ex": ""
    },
    {
        "num": 1466,
        "en": "Inquisitive",
        "pos": "(adj)",
        "ipa": "/ɪnˈkwɪz.ə.tɪv/",
        "vi": "Ham học hỏi, tò mò",
        "ex": ""
    },
    {
        "num": 1467,
        "en": "Vocational",
        "pos": "(adj)",
        "ipa": "/vəʊˈkeɪ.ʃən.əl/",
        "vi": "Thuộc về học nghề, hướng nghiệp",
        "ex": ""
    },
    {
        "num": 1468,
        "en": "Do wonders (for someone/sth)",
        "pos": "idiom",
        "ipa": "/duː ˈwʌn.dəz/",
        "vi": "Có tác dụng kỳ diệu, cực kỳ tốt cho...",
        "ex": ""
    },
    {
        "num": 1469,
        "en": "Instinct",
        "pos": "(n)",
        "ipa": "/ˈɪn.stɪŋkt/",
        "vi": "Bản năng",
        "ex": ""
    },
    {
        "num": 1470,
        "en": "Far cry from",
        "pos": "idiom",
        "ipa": "/fɑː kraɪ frəm/",
        "vi": "Hoàn toàn khác biệt với",
        "ex": ""
    },
    {
        "num": 1471,
        "en": "Go over",
        "pos": "phr. v.",
        "ipa": "/ɡəʊ ˈəʊ.və/",
        "vi": "Kiểm tra kĩ lưỡng (= examine)",
        "ex": ""
    },
    {
        "num": 1472,
        "en": "Deep-rooted",
        "pos": "(adj)",
        "ipa": "/diːp ˈruː.tɪd/",
        "vi": "Ăn sâu bám rễ, lâu đời",
        "ex": ""
    },
    {
        "num": 1473,
        "en": "Conflict",
        "pos": "(n)",
        "ipa": "/ˈkɒn.flɪkt/",
        "vi": "Sự xung đột",
        "ex": ""
    },
    {
        "num": 1474,
        "en": "Fall out (with)",
        "pos": "phr. v.",
        "ipa": "/fɔːl aʊt wɪð/",
        "vi": "Cãi vã, bất hòa với ai",
        "ex": ""
    },
    {
        "num": 1475,
        "en": "Remuneration",
        "pos": "(n)",
        "ipa": "/rɪˌmjuː.nərˈeɪ.ʃən/",
        "vi": "Tiền thù lao, tiền trả công",
        "ex": ""
    },
    {
        "num": 1476,
        "en": "Let out",
        "pos": "phr. v.",
        "ipa": "/let aʊt/",
        "vi": "Phóng thích, để lộ bí mật, nới lỏng quần áo",
        "ex": ""
    },
    {
        "num": 1477,
        "en": "Awe-inspiring",
        "pos": "(adj)",
        "ipa": "/ˈɔː.ɪnˌspaɪə.rɪŋ/",
        "vi": "Đẹp kinh ngạc, đáng nể",
        "ex": ""
    },
    {
        "num": 1478,
        "en": "Pristine",
        "pos": "(adj)",
        "ipa": "/ˈprɪs.tiːn/",
        "vi": "Hoang sơ, nguyên sơ",
        "ex": ""
    },
    {
        "num": 1479,
        "en": "Do away with",
        "pos": "phr. v.",
        "ipa": "/duː əˈweɪ wɪð/",
        "vi": "Bãi bỏ, loại bỏ (= get rid of, abolish)",
        "ex": ""
    },
    {
        "num": 1480,
        "en": "Anonymous",
        "pos": "(adj)",
        "ipa": "/əˈnɒn.ɪ.məs/",
        "vi": "Vô danh, ẩn danh",
        "ex": ""
    },
    {
        "num": 1481,
        "en": "Chalk and cheese",
        "pos": "idiom",
        "ipa": "/tʃɔːk ənd tʃiːz/",
        "vi": "Hoàn toàn khác biệt",
        "ex": ""
    },
    {
        "num": 1482,
        "en": "Prey",
        "pos": "(n)",
        "ipa": "/preɪ/",
        "vi": "Con mồi",
        "ex": ""
    },
    {
        "num": 1483,
        "en": "Lucrative",
        "pos": "(adj)",
        "ipa": "/ˈluː.krə.tɪv/",
        "vi": "Sinh lời, kiếm được nhiều tiền",
        "ex": ""
    },
    {
        "num": 1484,
        "en": "Leave no stone unturned",
        "pos": "idiom",
        "ipa": "/liːv nəʊ stəʊn ʌnˈtɜːnd/",
        "vi": "Tìm mọi ngóc ngách, thử mọi cách",
        "ex": ""
    },
    {
        "num": 1485,
        "en": "Kinship",
        "pos": "(n)",
        "ipa": "/ˈkɪn.ʃɪp/",
        "vi": "Tình máu mủ, quan hệ họ hàng",
        "ex": ""
    },
    {
        "num": 1486,
        "en": "Check out",
        "pos": "phr. v.",
        "ipa": "/tʃek aʊt/",
        "vi": "Làm thủ tục ra, kiểm tra (thông tin)",
        "ex": ""
    },
    {
        "num": 1487,
        "en": "Add insult to injury",
        "pos": "idiom",
        "ipa": "/æd ˈɪn.sʌlt tuː ˈɪn.dʒər.i/",
        "vi": "Thêm dầu vào lửa, làm tình hình tồi tệ hơn",
        "ex": ""
    },
    {
        "num": 1488,
        "en": "Take aback",
        "pos": "phr. v.",
        "ipa": "/teɪk əˈbæk/",
        "vi": "Làm ngạc nhiên, sửng sốt (thường bị động)",
        "ex": ""
    },
    {
        "num": 1489,
        "en": "Non-profit",
        "pos": "(adj)",
        "ipa": "/ˌnɒnˈprɒf.ɪt/",
        "vi": "Phi lợi nhuận",
        "ex": ""
    },
    {
        "num": 1490,
        "en": "Fascinating",
        "pos": "(adj)",
        "ipa": "/ˈfæs.ən.eɪ.tɪŋ/",
        "vi": "Hấp dẫn, lôi cuốn",
        "ex": ""
    },
    {
        "num": 1491,
        "en": "Literacy",
        "pos": "(n)",
        "ipa": "/ˈlɪt.ər.ə.si/",
        "vi": "Sự biết đọc, biết viết",
        "ex": ""
    },
    {
        "num": 1492,
        "en": "Ubiquitous",
        "pos": "(adj)",
        "ipa": "/juːˈbɪk.wɪ.təs/",
        "vi": "Có mặt ở khắp mọi nơi",
        "ex": ""
    },
    {
        "num": 1493,
        "en": "Densely-populated",
        "pos": "(adj)",
        "ipa": "/ˈden.sli ˈpɒp.jə.leɪ.tɪd/",
        "vi": "Dân cư đông đúc",
        "ex": ""
    },
    {
        "num": 1494,
        "en": "Lay off",
        "pos": "phr. v.",
        "ipa": "/leɪ ɒf/",
        "vi": "Sa thải (vì công ty ít việc)",
        "ex": ""
    },
    {
        "num": 1495,
        "en": "Deficit",
        "pos": "(n)",
        "ipa": "/ˈdef.ɪ.sɪt/",
        "vi": "Sự thâm hụt (ngân sách)",
        "ex": ""
    },
    {
        "num": 1496,
        "en": "Look down on",
        "pos": "phr. v.",
        "ipa": "/lʊk daʊn ɒn/",
        "vi": "Khinh thường, coi thường ai",
        "ex": ""
    },
    {
        "num": 1497,
        "en": "Look back on",
        "pos": "phr. v.",
        "ipa": "/lʊk bæk ɒn/",
        "vi": "Nhìn lại, nhớ lại quá khứ",
        "ex": ""
    },
    {
        "num": 1498,
        "en": "Pedagogy",
        "pos": "(n)",
        "ipa": "/ˈped.ə.ɡɒdʒ.i/",
        "vi": "Phương pháp giảng dạy, sư phạm",
        "ex": ""
    },
    {
        "num": 1499,
        "en": "Quaint",
        "pos": "(adj)",
        "ipa": "/kweɪnt/",
        "vi": "Đẹp cổ kính, lạ lùng",
        "ex": ""
    },
    {
        "num": 1500,
        "en": "Obesity",
        "pos": "(n)",
        "ipa": "/əʊˈbiː.sə.ti/",
        "vi": "Bệnh béo phì",
        "ex": ""
    },
    {
        "num": 1501,
        "en": "Glitch",
        "pos": "(n)",
        "ipa": "/ɡlɪtʃ/",
        "vi": "Lỗi kỹ thuật nhỏ (phần mềm)",
        "ex": ""
    },
    {
        "num": 1502,
        "en": "Desertification",
        "pos": "(n)",
        "ipa": "/dɪˌzɜː.tɪ.fɪˈkeɪ.ʃən/",
        "vi": "Sự sa mạc hóa",
        "ex": ""
    },
    {
        "num": 1503,
        "en": "Commodity",
        "pos": "(n)",
        "ipa": "/kəˈmɒd.ə.ti/",
        "vi": "Hàng hóa",
        "ex": ""
    },
    {
        "num": 1504,
        "en": "Orbit",
        "pos": "(n/v)",
        "ipa": "/ˈɔː.bɪt/",
        "vi": "Quỹ đạo / Quay quanh quỹ đạo",
        "ex": ""
    },
    {
        "num": 1505,
        "en": "Get out of hand",
        "pos": "idiom",
        "ipa": "/ɡet aʊt əv hænd/",
        "vi": "Mất kiểm soát (= out of control)",
        "ex": ""
    },
    {
        "num": 1506,
        "en": "impoverished",
        "pos": "adj.",
        "ipa": "/ɪmˈpɒv.ər.ɪʃt/",
        "vi": "Nghèo túng, bần cùng",
        "ex": ""
    },
    {
        "num": 1507,
        "en": "destitute",
        "pos": "adj.",
        "ipa": "/ˈdes.tɪ.tʃuːt/",
        "vi": "Thiếu thốn cùng cực, cơ cực",
        "ex": ""
    },
    {
        "num": 1508,
        "en": "badly-off",
        "pos": "adj.",
        "ipa": "/ˌbæd.liˈɒf/",
        "vi": "Nghèo túng, khó khăn",
        "ex": ""
    },
    {
        "num": 1509,
        "en": "penniless",
        "pos": "adj.",
        "ipa": "/ˈpen.i.ləs/",
        "vi": "Không một xu dính túi",
        "ex": ""
    },
    {
        "num": 1510,
        "en": "disadvantaged",
        "pos": "adj.",
        "ipa": "/ˌdɪs.ədˈvɑːn.tɪdʒd/",
        "vi": "Bị thiệt thòi (về kinh tế, xã hội)",
        "ex": ""
    },
    {
        "num": 1511,
        "en": "socially disadvantaged",
        "pos": "adj. phr.",
        "ipa": "/ˈsəʊ.ʃəl.i ˌdɪs.ədˈvɑːn.tɪdʒd/",
        "vi": "Thiệt thòi về mặt xã hội",
        "ex": ""
    },
    {
        "num": 1512,
        "en": "unfortunate",
        "pos": "adj.",
        "ipa": "/ʌnˈfɔː.tʃən.ət/",
        "vi": "Kém may mắn, bất hạnh",
        "ex": ""
    },
    {
        "num": 1513,
        "en": "purchase",
        "pos": "v.",
        "ipa": "/ˈpɜː.tʃəs/",
        "vi": "Mua sắm, tậu (trang trọng)",
        "ex": ""
    },
    {
        "num": 1514,
        "en": "expend",
        "pos": "v.",
        "ipa": "/ɪkˈspend/",
        "vi": "Tiêu xài, sử dụng (thời gian, tiền bạc)",
        "ex": ""
    },
    {
        "num": 1515,
        "en": "shell out",
        "pos": "phr. v.",
        "ipa": "/ʃel aʊt/",
        "vi": "Trả một khoản tiền lớn (informal)",
        "ex": ""
    },
    {
        "num": 1516,
        "en": "spending",
        "pos": "n.",
        "ipa": "/ˈspen.dɪŋ/",
        "vi": "Sự chi tiêu",
        "ex": ""
    },
    {
        "num": 1517,
        "en": "expenditure",
        "pos": "n.",
        "ipa": "/ɪkˈspen.dɪ.tʃər/",
        "vi": "Chi phí, sự tiêu dùng (trang trọng)",
        "ex": ""
    },
    {
        "num": 1518,
        "en": "set aside",
        "pos": "phr. v.",
        "ipa": "/set əˈsaɪd/",
        "vi": "Dành dụm, để dành",
        "ex": ""
    },
    {
        "num": 1519,
        "en": "put aside",
        "pos": "phr. v.",
        "ipa": "/pʊt əˈsaɪd/",
        "vi": "Dành dụm, gác lại",
        "ex": ""
    },
    {
        "num": 1520,
        "en": "take out a loan",
        "pos": "phrase",
        "ipa": "/teɪk aʊt ə ləʊn/",
        "vi": "Làm thủ tục vay vốn",
        "ex": ""
    },
    {
        "num": 1521,
        "en": "loan",
        "pos": "n. / v.",
        "ipa": "/ləʊn/",
        "vi": "Khoản vay / Cho vay",
        "ex": ""
    },
    {
        "num": 1522,
        "en": "avenue",
        "pos": "n.",
        "ipa": "/ˈæv.ə.njuː/",
        "vi": "Đại lộ",
        "ex": ""
    },
    {
        "num": 1523,
        "en": "lane",
        "pos": "n.",
        "ipa": "/leɪn/",
        "vi": "Làn đường, ngõ hẻm",
        "ex": ""
    },
    {
        "num": 1524,
        "en": "route",
        "pos": "n.",
        "ipa": "/ruːt/",
        "vi": "Tuyến đường, lộ trình",
        "ex": ""
    },
    {
        "num": 1525,
        "en": "track",
        "pos": "n.",
        "ipa": "/træk/",
        "vi": "Đường mòn, đường đua",
        "ex": ""
    },
    {
        "num": 1526,
        "en": "crash",
        "pos": "n. / v.",
        "ipa": "/kræʃ/",
        "vi": "Vụ va chạm, đâm sầm",
        "ex": ""
    },
    {
        "num": 1527,
        "en": "collision",
        "pos": "n.",
        "ipa": "/kəˈlɪʒ.ən/",
        "vi": "Sự va chạm, sự xung đột",
        "ex": ""
    },
    {
        "num": 1528,
        "en": "rapid",
        "pos": "adj.",
        "ipa": "/ˈræp.ɪd/",
        "vi": "Nhanh chóng (tốc độ)",
        "ex": ""
    },
    {
        "num": 1529,
        "en": "swift",
        "pos": "adj.",
        "ipa": "/swɪft/",
        "vi": "Nhanh, mau lẹ",
        "ex": ""
    },
    {
        "num": 1530,
        "en": "speedy",
        "pos": "adj.",
        "ipa": "/ˈspiː.di/",
        "vi": "Nhanh chóng, mau lẹ",
        "ex": ""
    },
    {
        "num": 1531,
        "en": "brisk",
        "pos": "adj.",
        "ipa": "/brɪsk/",
        "vi": "Nhanh nhảu, phát đạt",
        "ex": ""
    },
    {
        "num": 1532,
        "en": "agile",
        "pos": "adj.",
        "ipa": "/ˈædʒ.aɪl/",
        "vi": "Nhanh nhẹn, lanh lợi",
        "ex": ""
    },
    {
        "num": 1533,
        "en": "nimble",
        "pos": "adj.",
        "ipa": "/ˈnɪm.bəl/",
        "vi": "Lanh lẹ, linh hoạt",
        "ex": ""
    },
    {
        "num": 1534,
        "en": "meteoric",
        "pos": "adj.",
        "ipa": "/ˌmiː.tiˈɒr.ɪk/",
        "vi": "Nhanh như sao băng (thành công)",
        "ex": ""
    },
    {
        "num": 1535,
        "en": "rapidly",
        "pos": "adv.",
        "ipa": "/ˈræp.ɪd.li/",
        "vi": "Một cách nhanh chóng",
        "ex": ""
    },
    {
        "num": 1536,
        "en": "a matter of speculation",
        "pos": "n. phr.",
        "ipa": "/ə ˈmæt.ər əv ˌspek.jəˈleɪ.ʃən/",
        "vi": "Vấn đề mang tính suy đoán",
        "ex": ""
    },
    {
        "num": 1537,
        "en": "supposition",
        "pos": "n.",
        "ipa": "/ˌsʌp.əˈzɪʃ.ən/",
        "vi": "Sự giả định, giả thuyết",
        "ex": ""
    },
    {
        "num": 1538,
        "en": "assume",
        "pos": "v.",
        "ipa": "/əˈsjuːm/",
        "vi": "Giả sử, cho rằng",
        "ex": ""
    },
    {
        "num": 1539,
        "en": "presume",
        "pos": "v.",
        "ipa": "/prɪˈzjuːm/",
        "vi": "Đoán chừng, cầm chắc",
        "ex": ""
    },
    {
        "num": 1540,
        "en": "anticipated",
        "pos": "adj.",
        "ipa": "/ænˈtɪs.ɪ.peɪ.tɪd/",
        "vi": "Được mong đợi, dự kiến",
        "ex": ""
    },
    {
        "num": 1541,
        "en": "expected",
        "pos": "adj.",
        "ipa": "/ɪkˈspek.tɪd/",
        "vi": "Được kỳ vọng, dự kiến",
        "ex": ""
    },
    {
        "num": 1542,
        "en": "predicted",
        "pos": "adj.",
        "ipa": "/prɪˈdɪk.tɪd/",
        "vi": "Được dự báo",
        "ex": ""
    },
    {
        "num": 1543,
        "en": "premise",
        "pos": "n.",
        "ipa": "/ˈprem.ɪs/",
        "vi": "Tiền đề",
        "ex": ""
    },
    {
        "num": 1544,
        "en": "assumption",
        "pos": "n.",
        "ipa": "/əˈsʌmp.ʃən/",
        "vi": "Sự giả định, giả thiết",
        "ex": ""
    },
    {
        "num": 1545,
        "en": "preconception",
        "pos": "n.",
        "ipa": "/ˌpriː.kənˈsep.ʃən/",
        "vi": "Định kiến, quan niệm hình thành trước",
        "ex": ""
    },
    {
        "num": 1546,
        "en": "abroad",
        "pos": "adv.",
        "ipa": "/əˈbrɔːd/",
        "vi": "Ở nước ngoài",
        "ex": ""
    },
    {
        "num": 1547,
        "en": "overseas",
        "pos": "adv. / adj.",
        "ipa": "/ˌəʊ.vəˈsiːz/",
        "vi": "Hải ngoại, nước ngoài",
        "ex": ""
    },
    {
        "num": 1548,
        "en": "abrupt",
        "pos": "adj.",
        "ipa": "/əˈbrʌpt/",
        "vi": "Bất ngờ, đột ngột",
        "ex": ""
    },
    {
        "num": 1549,
        "en": "sudden",
        "pos": "adj.",
        "ipa": "/ˈsʌd.ən/",
        "vi": "Đột ngột",
        "ex": ""
    },
    {
        "num": 1550,
        "en": "inadvertent",
        "pos": "adj.",
        "ipa": "/ˌɪn.ədˈvɜː.tənt/",
        "vi": "Vô ý, không cố ý",
        "ex": ""
    },
    {
        "num": 1551,
        "en": "unexpected",
        "pos": "adj.",
        "ipa": "/ˌʌn.ɪkˈspek.tɪd/",
        "vi": "Bất ngờ, không lường trước",
        "ex": ""
    },
    {
        "num": 1552,
        "en": "recondite",
        "pos": "adj.",
        "ipa": "/ˈrek.ən.daɪt/",
        "vi": "Khó hiểu, uyên áo",
        "ex": ""
    },
    {
        "num": 1553,
        "en": "not concrete",
        "pos": "adj. phr.",
        "ipa": "/nɒt ˈkɒŋ.kriːt/",
        "vi": "Không cụ thể",
        "ex": ""
    },
    {
        "num": 1554,
        "en": "obscure",
        "pos": "adj.",
        "ipa": "/əbˈskjʊər/",
        "vi": "Mờ mịt, ít người biết đến",
        "ex": ""
    },
    {
        "num": 1555,
        "en": "unclear",
        "pos": "adj.",
        "ipa": "/ʌnˈklɪər/",
        "vi": "Không rõ ràng",
        "ex": ""
    },
    {
        "num": 1556,
        "en": "hidden",
        "pos": "adj.",
        "ipa": "/ˈhɪd.ən/",
        "vi": "Bị che giấu, khuất lấp",
        "ex": ""
    },
    {
        "num": 1557,
        "en": "vague",
        "pos": "adj.",
        "ipa": "/veɪɡ/",
        "vi": "Mơ hồ, mập mờ",
        "ex": ""
    },
    {
        "num": 1558,
        "en": "conceal",
        "pos": "v.",
        "ipa": "/kənˈsiːl/",
        "vi": "Che giấu, giấu giếm",
        "ex": ""
    },
    {
        "num": 1559,
        "en": "absurd",
        "pos": "adj.",
        "ipa": "/əbˈsɜːd/",
        "vi": "Vô lý, lố bịch",
        "ex": ""
    },
    {
        "num": 1560,
        "en": "ridiculous",
        "pos": "adj.",
        "ipa": "/rɪˈdɪk.jə.ləs/",
        "vi": "Nực cười, buồn cười",
        "ex": ""
    },
    {
        "num": 1561,
        "en": "irrational",
        "pos": "adj.",
        "ipa": "/ɪˈræʃ.ən.əl/",
        "vi": "Phi lý, không có lý trí",
        "ex": ""
    },
    {
        "num": 1562,
        "en": "not logical",
        "pos": "adj. phr.",
        "ipa": "/nɒt ˈlɒdʒ.ɪ.kəl/",
        "vi": "Không logic",
        "ex": ""
    },
    {
        "num": 1563,
        "en": "groundless",
        "pos": "adj.",
        "ipa": "/ˈɡraʊnd.ləs/",
        "vi": "Không có căn cứ",
        "ex": ""
    },
    {
        "num": 1564,
        "en": "unfounded",
        "pos": "adj.",
        "ipa": "/ʌnˈfaʊn.dɪd/",
        "vi": "Không có cơ sở, vô căn cứ",
        "ex": ""
    },
    {
        "num": 1565,
        "en": "acceleration",
        "pos": "n.",
        "ipa": "/əkˌsel.əˈreɪ.ʃən/",
        "vi": "Sự gia tốc, sự tăng tốc",
        "ex": ""
    },
    {
        "num": 1566,
        "en": "speeding up",
        "pos": "n. phr.",
        "ipa": "/ˈspiː.dɪŋ ʌp/",
        "vi": "Việc tăng tốc",
        "ex": ""
    },
    {
        "num": 1567,
        "en": "immediately",
        "pos": "adv.",
        "ipa": "/ɪˈmiː.di.ət.li/",
        "vi": "Ngay lập tức",
        "ex": ""
    },
    {
        "num": 1568,
        "en": "promptly",
        "pos": "adv.",
        "ipa": "/ˈprɒmpt.li/",
        "vi": "Một cách mau lẹ, đúng giờ",
        "ex": ""
    },
    {
        "num": 1569,
        "en": "at once",
        "pos": "phrase",
        "ipa": "/ət wʌns/",
        "vi": "Ngay lập tức, cùng lúc",
        "ex": ""
    },
    {
        "num": 1570,
        "en": "instantly",
        "pos": "adv.",
        "ipa": "/ˈɪn.stənt.li/",
        "vi": "Ngay tức khắc",
        "ex": ""
    },
    {
        "num": 1571,
        "en": "urgently",
        "pos": "adv.",
        "ipa": "/ˈɜː.dʒənt.li/",
        "vi": "Một cách khẩn cấp",
        "ex": ""
    },
    {
        "num": 1572,
        "en": "closest",
        "pos": "adj.",
        "ipa": "/ˈkləʊ.sɪst/",
        "vi": "Gần nhất, thân thiết nhất",
        "ex": ""
    },
    {
        "num": 1573,
        "en": "instant",
        "pos": "adj.",
        "ipa": "/ˈɪn.stənt/",
        "vi": "Tức thì, khoảnh khắc",
        "ex": ""
    },
    {
        "num": 1574,
        "en": "accentuate",
        "pos": "v.",
        "ipa": "/əkˈsen.tʃu.eɪt/",
        "vi": "Làm nổi bật, nhấn mạnh",
        "ex": ""
    },
    {
        "num": 1575,
        "en": "emphasize",
        "pos": "v.",
        "ipa": "/ˈem.fə.saɪz/",
        "vi": "Nhấn mạnh",
        "ex": ""
    },
    {
        "num": 1576,
        "en": "stress",
        "pos": "v.",
        "ipa": "/stres/",
        "vi": "Nhấn mạnh",
        "ex": ""
    },
    {
        "num": 1577,
        "en": "highlight",
        "pos": "v.",
        "ipa": "/ˈhaɪ.laɪt/",
        "vi": "Làm nổi bật",
        "ex": ""
    },
    {
        "num": 1578,
        "en": "press",
        "pos": "v.",
        "ipa": "/pres/",
        "vi": "Thúc ép, nhấn",
        "ex": ""
    },
    {
        "num": 1579,
        "en": "acceptable",
        "pos": "adj.",
        "ipa": "/əkˈsep.tə.bəl/",
        "vi": "Có thể chấp nhận",
        "ex": ""
    },
    {
        "num": 1580,
        "en": "permissible",
        "pos": "adj.",
        "ipa": "/pəˈmɪs.ə.bəl/",
        "vi": "Được phép, có thể chấp nhận",
        "ex": ""
    },
    {
        "num": 1581,
        "en": "legitimate",
        "pos": "adj.",
        "ipa": "/lɪˈdʒɪt.ə.mət/",
        "vi": "Hợp pháp, chính đáng",
        "ex": ""
    },
    {
        "num": 1582,
        "en": "enable",
        "pos": "v.",
        "ipa": "/ɪˈneɪ.bəl/",
        "vi": "Cho phép, tạo điều kiện",
        "ex": ""
    },
    {
        "num": 1583,
        "en": "justified",
        "pos": "adj.",
        "ipa": "/ˈdʒʌs.tɪ.faɪd/",
        "vi": "Đáng được, có lý do chính đáng",
        "ex": ""
    },
    {
        "num": 1584,
        "en": "legal",
        "pos": "adj.",
        "ipa": "/ˈliː.ɡəl/",
        "vi": "Hợp pháp, thuộc về pháp luật",
        "ex": ""
    },
    {
        "num": 1585,
        "en": "easy to reach",
        "pos": "adj. phr.",
        "ipa": "/ˈiː.zi tuː riːtʃ/",
        "vi": "Dễ dàng tiếp cận",
        "ex": ""
    },
    {
        "num": 1586,
        "en": "obtainable",
        "pos": "adj.",
        "ipa": "/əbˈteɪ.nə.bəl/",
        "vi": "Có thể đạt được, có thể mua được",
        "ex": ""
    },
    {
        "num": 1587,
        "en": "accommodate",
        "pos": "v.",
        "ipa": "/əˈkɒm.ə.deɪt/",
        "vi": "Cung cấp chỗ ở, đáp ứng",
        "ex": ""
    },
    {
        "num": 1588,
        "en": "adjust to",
        "pos": "phr. v.",
        "ipa": "/əˈdʒʌst tuː/",
        "vi": "Điều chỉnh cho phù hợp",
        "ex": ""
    },
    {
        "num": 1589,
        "en": "adapted",
        "pos": "adj.",
        "ipa": "/əˈdæp.tɪd/",
        "vi": "Được thích nghi, điều chỉnh",
        "ex": ""
    },
    {
        "num": 1590,
        "en": "modified",
        "pos": "adj.",
        "ipa": "/ˈmɒd.ɪ.faɪd/",
        "vi": "Được sửa đổi, biến cải",
        "ex": ""
    },
    {
        "num": 1591,
        "en": "alter",
        "pos": "v.",
        "ipa": "/ˈɒl.tər/",
        "vi": "Thay đổi, biến đổi",
        "ex": ""
    },
    {
        "num": 1592,
        "en": "reschedule",
        "pos": "v.",
        "ipa": "/ˌriːˈʃedʒ.uːl/",
        "vi": "Lên lại lịch trình",
        "ex": ""
    },
    {
        "num": 1593,
        "en": "altered",
        "pos": "adj.",
        "ipa": "/ˈɒl.təd/",
        "vi": "Bị thay đổi",
        "ex": ""
    },
    {
        "num": 1594,
        "en": "convert",
        "pos": "v.",
        "ipa": "/kənˈvɜːt/",
        "vi": "Chuyển đổi",
        "ex": ""
    },
    {
        "num": 1595,
        "en": "transform",
        "pos": "v.",
        "ipa": "/trænsˈfɔːm/",
        "vi": "Biến đổi hoàn toàn",
        "ex": ""
    },
    {
        "num": 1596,
        "en": "transition",
        "pos": "n.",
        "ipa": "/trænˈzɪʃ.ən/",
        "vi": "Sự chuyển tiếp, chuyển đổi",
        "ex": ""
    },
    {
        "num": 1597,
        "en": "modification",
        "pos": "n.",
        "ipa": "/ˌmɒd.ɪ.fɪˈkeɪ.ʃən/",
        "vi": "Sự sửa đổi, biến cải",
        "ex": ""
    },
    {
        "num": 1598,
        "en": "alteration",
        "pos": "n.",
        "ipa": "/ˌɒl.təˈreɪ.ʃən/",
        "vi": "Sự thay đổi, chỉnh sửa",
        "ex": ""
    },
    {
        "num": 1599,
        "en": "transform into",
        "pos": "phr. v.",
        "ipa": "/trænsˈfɔːm ˈɪn.tuː/",
        "vi": "Chuyển hóa thành",
        "ex": ""
    },
    {
        "num": 1600,
        "en": "adjustment",
        "pos": "n.",
        "ipa": "/əˈdʒʌst.mənt/",
        "vi": "Sự điều chỉnh",
        "ex": ""
    },
    {
        "num": 1601,
        "en": "accompany",
        "pos": "v.",
        "ipa": "/əˈkʌm.pə.ni/",
        "vi": "Đi kèm, hộ tống",
        "ex": ""
    },
    {
        "num": 1602,
        "en": "attendant",
        "pos": "n.",
        "ipa": "/əˈten.dənt/",
        "vi": "Người phục vụ, người tham dự",
        "ex": ""
    },
    {
        "num": 1603,
        "en": "accompanying",
        "pos": "adj.",
        "ipa": "/əˈkʌm.pə.ni.ɪŋ/",
        "vi": "Đi kèm",
        "ex": ""
    },
    {
        "num": 1604,
        "en": "engage",
        "pos": "v.",
        "ipa": "/ɪnˈɡeɪdʒ/",
        "vi": "Tham gia, thu hút",
        "ex": ""
    },
    {
        "num": 1605,
        "en": "involve",
        "pos": "v.",
        "ipa": "/ɪnˈvɒlv/",
        "vi": "Kéo theo, liên quan đến",
        "ex": ""
    },
    {
        "num": 1606,
        "en": "accomplished",
        "pos": "adj.",
        "ipa": "/əˈkʌm.plɪʃt/",
        "vi": "Tài ba, đã hoàn thành",
        "ex": ""
    },
    {
        "num": 1607,
        "en": "achieved",
        "pos": "adj.",
        "ipa": "/əˈtʃiːvd/",
        "vi": "Đã đạt được",
        "ex": ""
    },
    {
        "num": 1608,
        "en": "achieve",
        "pos": "v.",
        "ipa": "/əˈtʃiːv/",
        "vi": "Đạt được",
        "ex": ""
    },
    {
        "num": 1609,
        "en": "perform",
        "pos": "v.",
        "ipa": "/pəˈfɔːm/",
        "vi": "Biểu diễn, thực hiện",
        "ex": ""
    },
    {
        "num": 1610,
        "en": "complete",
        "pos": "v.",
        "ipa": "/kəmˈpliːt/",
        "vi": "Hoàn thành, trọn vẹn",
        "ex": ""
    },
    {
        "num": 1611,
        "en": "conclude",
        "pos": "v.",
        "ipa": "/kənˈkluːd/",
        "vi": "Kết luận, kết thúc",
        "ex": ""
    },
    {
        "num": 1612,
        "en": "execute",
        "pos": "v.",
        "ipa": "/ˈek.sɪ.kjuːt/",
        "vi": "Thực thi, tiến hành",
        "ex": ""
    },
    {
        "num": 1613,
        "en": "reach",
        "pos": "v.",
        "ipa": "/riːtʃ/",
        "vi": "Đạt tới, vươn tới",
        "ex": ""
    },
    {
        "num": 1614,
        "en": "conduct",
        "pos": "v.",
        "ipa": "/kənˈdʌkt/",
        "vi": "Tiến hành, cư xử",
        "ex": ""
    },
    {
        "num": 1615,
        "en": "terminate",
        "pos": "v.",
        "ipa": "/ˈtɜː.mɪ.neɪt/",
        "vi": "Chấm dứt, kết thúc",
        "ex": ""
    },
    {
        "num": 1616,
        "en": "accorded",
        "pos": "v.",
        "ipa": "/əˈkɔː.dɪd/",
        "vi": "Được ban cho, phù hợp",
        "ex": ""
    },
    {
        "num": 1617,
        "en": "granted",
        "pos": "v.",
        "ipa": "/ˈɡrɑːn.tɪd/",
        "vi": "Được cấp, cứ cho là",
        "ex": ""
    },
    {
        "num": 1618,
        "en": "inherit",
        "pos": "v.",
        "ipa": "/ɪnˈher.ɪt/",
        "vi": "Thừa kế",
        "ex": ""
    },
    {
        "num": 1619,
        "en": "grant",
        "pos": "v. / n.",
        "ipa": "/ɡrɑːnt/",
        "vi": "Ban cho, trợ cấp",
        "ex": ""
    },
    {
        "num": 1620,
        "en": "accordingly",
        "pos": "adv.",
        "ipa": "/əˈkɔː.dɪŋ.li/",
        "vi": "Một cách phù hợp, do đó",
        "ex": ""
    },
    {
        "num": 1621,
        "en": "consequently",
        "pos": "adv.",
        "ipa": "/ˈkɒn.sɪ.kwənt.li/",
        "vi": "Hậu quả là, do đó",
        "ex": ""
    },
    {
        "num": 1622,
        "en": "therefore",
        "pos": "adv.",
        "ipa": "/ˈðeə.fɔːr/",
        "vi": "Vì thế, do đó",
        "ex": ""
    },
    {
        "num": 1623,
        "en": "thus",
        "pos": "adv.",
        "ipa": "/ðʌs/",
        "vi": "Như vậy, do đó",
        "ex": ""
    },
    {
        "num": 1624,
        "en": "as a result",
        "pos": "phrase",
        "ipa": "/əz ə rɪˈzʌlt/",
        "vi": "Kết quả là",
        "ex": ""
    },
    {
        "num": 1625,
        "en": "interpret",
        "pos": "v.",
        "ipa": "/ɪnˈtɜː.prɪt/",
        "vi": "Phiên dịch, giải thích",
        "ex": ""
    },
    {
        "num": 1626,
        "en": "clarify",
        "pos": "v.",
        "ipa": "/ˈklær.ɪ.faɪ/",
        "vi": "Làm rõ, làm sáng tỏ",
        "ex": ""
    },
    {
        "num": 1627,
        "en": "simplify",
        "pos": "v.",
        "ipa": "/ˈsɪm.plɪ.faɪ/",
        "vi": "Đơn giản hóa",
        "ex": ""
    },
    {
        "num": 1628,
        "en": "demonstrate",
        "pos": "v.",
        "ipa": "/ˈdem.ən.streɪt/",
        "vi": "Chứng minh, minh họa",
        "ex": ""
    },
    {
        "num": 1629,
        "en": "elucidate",
        "pos": "v.",
        "ipa": "/ɪˈluː.sɪ.deɪt/",
        "vi": "Làm sáng tỏ, giải thích",
        "ex": ""
    },
    {
        "num": 1630,
        "en": "identify",
        "pos": "v.",
        "ipa": "/aɪˈden.tɪ.faɪ/",
        "vi": "Nhận diện, nhận dạng",
        "ex": ""
    },
    {
        "num": 1631,
        "en": "pile up",
        "pos": "phr. v.",
        "ipa": "/paɪl ʌp/",
        "vi": "Chất đống",
        "ex": ""
    },
    {
        "num": 1632,
        "en": "clustering",
        "pos": "n.",
        "ipa": "/ˈklʌs.tər.ɪŋ/",
        "vi": "Tập hợp, kết chùm",
        "ex": ""
    },
    {
        "num": 1633,
        "en": "gathering",
        "pos": "n.",
        "ipa": "/ˈɡæð.ər.ɪŋ/",
        "vi": "Sự tụ tập, thu thập",
        "ex": ""
    },
    {
        "num": 1634,
        "en": "precise",
        "pos": "adj.",
        "ipa": "/prɪˈsaɪs/",
        "vi": "Chính xác, rõ ràng",
        "ex": ""
    },
    {
        "num": 1635,
        "en": "accurate",
        "pos": "adj.",
        "ipa": "/ˈæk.jə.rət/",
        "vi": "Chính xác, chuẩn xác",
        "ex": ""
    },
    {
        "num": 1636,
        "en": "precision",
        "pos": "n.",
        "ipa": "/prɪˈsɪʒ.ən/",
        "vi": "Sự chính xác",
        "ex": ""
    },
    {
        "num": 1637,
        "en": "accuracy",
        "pos": "n.",
        "ipa": "/ˈæk.jə.rə.si/",
        "vi": "Độ chính xác",
        "ex": ""
    },
    {
        "num": 1638,
        "en": "acknowledge",
        "pos": "v.",
        "ipa": "/əkˈnɒl.ɪdʒ/",
        "vi": "Công nhận, thừa nhận",
        "ex": ""
    },
    {
        "num": 1639,
        "en": "concede",
        "pos": "v.",
        "ipa": "/kənˈsiːd/",
        "vi": "Nhượng bộ, thừa nhận",
        "ex": ""
    },
    {
        "num": 1640,
        "en": "recognize",
        "pos": "v.",
        "ipa": "/ˈrek.əɡ.naɪz/",
        "vi": "Nhận ra, công nhận",
        "ex": ""
    },
    {
        "num": 1641,
        "en": "truly",
        "pos": "adv.",
        "ipa": "/ˈtruː.li/",
        "vi": "Sự thật, chân thật",
        "ex": ""
    },
    {
        "num": 1642,
        "en": "genuine",
        "pos": "adj.",
        "ipa": "/ˈdʒen.ju.ɪn/",
        "vi": "Thật, chân thành",
        "ex": ""
    },
    {
        "num": 1643,
        "en": "fashion",
        "pos": "n.",
        "ipa": "/ˈfæʃ.ən/",
        "vi": "Phong cách, cách thức",
        "ex": ""
    },
    {
        "num": 1644,
        "en": "added",
        "pos": "adj.",
        "ipa": "/æd.ɪd/",
        "vi": "Thêm vào",
        "ex": ""
    },
    {
        "num": 1645,
        "en": "additional",
        "pos": "adj.",
        "ipa": "/əˈdɪʃ.ən.əl/",
        "vi": "Bổ sung, phụ",
        "ex": ""
    },
    {
        "num": 1646,
        "en": "supplementary",
        "pos": "adj.",
        "ipa": "/ˌsʌp.lɪˈmen.tər.i/",
        "vi": "Phụ trợ, bổ sung",
        "ex": ""
    },
    {
        "num": 1647,
        "en": "surplus",
        "pos": "n. / adj.",
        "ipa": "/ˈsɜː.pləs/",
        "vi": "Thặng dư, dư thừa",
        "ex": ""
    },
    {
        "num": 1648,
        "en": "excess",
        "pos": "n. / adj.",
        "ipa": "/ɪkˈses/",
        "vi": "Sự vượt mức, dư thừa",
        "ex": ""
    },
    {
        "num": 1649,
        "en": "unnecessary repetition",
        "pos": "n. phr.",
        "ipa": "/ʌnˈnes.ə.ser.i ˌrep.əˈtɪʃ.ən/",
        "vi": "Sự lặp lại không cần thiết",
        "ex": ""
    },
    {
        "num": 1650,
        "en": "adhere",
        "pos": "v.",
        "ipa": "/ədˈhɪə/",
        "vi": "Dính chặt, tuân thủ",
        "ex": ""
    },
    {
        "num": 1651,
        "en": "stick together",
        "pos": "phr. v.",
        "ipa": "/stɪk təˈɡeð.ə/",
        "vi": "Gắn kết với nhau",
        "ex": ""
    },
    {
        "num": 1652,
        "en": "link",
        "pos": "n. / v.",
        "ipa": "/lɪŋk/",
        "vi": "Liên kết, mắt xích",
        "ex": ""
    },
    {
        "num": 1653,
        "en": "associate",
        "pos": "v.",
        "ipa": "/əˈsəʊ.si.eɪt/",
        "vi": "Liên tưởng, cộng tác",
        "ex": ""
    },
    {
        "num": 1654,
        "en": "couple",
        "pos": "n. / v.",
        "ipa": "/ˈkʌp.əl/",
        "vi": "Cặp đôi, nối lại",
        "ex": ""
    },
    {
        "num": 1655,
        "en": "combine with",
        "pos": "phr. v.",
        "ipa": "/kəmˈbaɪn wɪð/",
        "vi": "Kết hợp với",
        "ex": ""
    },
    {
        "num": 1656,
        "en": "cling",
        "pos": "v.",
        "ipa": "/klɪŋ/",
        "vi": "Bám chặt, níu kéo",
        "ex": ""
    },
    {
        "num": 1657,
        "en": "adjacent",
        "pos": "adj.",
        "ipa": "/əˈdʒeɪ.sənt/",
        "vi": "Liền kề, sát vách",
        "ex": ""
    },
    {
        "num": 1658,
        "en": "adjoin",
        "pos": "v.",
        "ipa": "/əˈdʒɔɪn/",
        "vi": "Nối liền, sát cạnh",
        "ex": ""
    },
    {
        "num": 1659,
        "en": "vicinity",
        "pos": "n.",
        "ipa": "/vɪˈsɪn.ə.ti/",
        "vi": "Vùng lân cận",
        "ex": ""
    },
    {
        "num": 1660,
        "en": "neighboring",
        "pos": "adj.",
        "ipa": "/ˈneɪ.bər.ɪŋ/",
        "vi": "Láng giềng, kế bên",
        "ex": ""
    },
    {
        "num": 1661,
        "en": "adjunct",
        "pos": "n.",
        "ipa": "/ˈædʒ.ʌŋkt/",
        "vi": "Phần phụ, người phụ tá",
        "ex": ""
    },
    {
        "num": 1662,
        "en": "appendage",
        "pos": "n.",
        "ipa": "/əˈpen.dɪdʒ/",
        "vi": "Phụ lục, phần thêm vào",
        "ex": ""
    },
    {
        "num": 1663,
        "en": "assist",
        "pos": "v.",
        "ipa": "/əˈsɪst/",
        "vi": "Trợ giúp, hỗ trợ",
        "ex": ""
    },
    {
        "num": 1664,
        "en": "facilitate",
        "pos": "v.",
        "ipa": "/fəˈsɪl.ɪ.teɪt/",
        "vi": "Tạo điều kiện dễ dàng",
        "ex": ""
    },
    {
        "num": 1665,
        "en": "aids",
        "pos": "n.",
        "ipa": "/eɪdz/",
        "vi": "Các công cụ hỗ trợ",
        "ex": ""
    },
    {
        "num": 1666,
        "en": "backing",
        "pos": "n.",
        "ipa": "/ˈbæk.ɪŋ/",
        "vi": "Sự hậu thuẫn",
        "ex": ""
    },
    {
        "num": 1667,
        "en": "admit",
        "pos": "v.",
        "ipa": "/ədˈmɪt/",
        "vi": "Thừa nhận, cho phép vào",
        "ex": ""
    },
    {
        "num": 1668,
        "en": "let in",
        "pos": "phr. v.",
        "ipa": "/let ɪn/",
        "vi": "Cho phép vào",
        "ex": ""
    },
    {
        "num": 1669,
        "en": "adorn",
        "pos": "v.",
        "ipa": "/əˈdɔːn/",
        "vi": "Tô điểm, trang hoàng",
        "ex": ""
    },
    {
        "num": 1670,
        "en": "decorate",
        "pos": "v.",
        "ipa": "/ˈdek.ə.reɪt/",
        "vi": "Trang trí",
        "ex": ""
    },
    {
        "num": 1671,
        "en": "embellish",
        "pos": "v.",
        "ipa": "/ɪmˈbel.ɪʃ/",
        "vi": "Thêm thắt, làm đẹp",
        "ex": ""
    },
    {
        "num": 1672,
        "en": "advance",
        "pos": "n. / v.",
        "ipa": "/ədˈvɑːns/",
        "vi": "Tiến bộ, trả trước",
        "ex": ""
    },
    {
        "num": 1673,
        "en": "improvement",
        "pos": "n.",
        "ipa": "/ɪmˈpruːv.mənt/",
        "vi": "Sự cải thiện",
        "ex": ""
    },
    {
        "num": 1674,
        "en": "recover",
        "pos": "v.",
        "ipa": "/rɪˈkʌv.ər/",
        "vi": "Hồi phục, khôi phục",
        "ex": ""
    },
    {
        "num": 1675,
        "en": "development",
        "pos": "n.",
        "ipa": "/dɪˈvel.əp.mənt/",
        "vi": "Sự phát triển",
        "ex": ""
    },
    {
        "num": 1676,
        "en": "break through",
        "pos": "phr. v.",
        "ipa": "/breɪk θruː/",
        "vi": "Đột phá",
        "ex": ""
    },
    {
        "num": 1677,
        "en": "improving",
        "pos": "adj.",
        "ipa": "/ɪmˈpruː.vɪŋ/",
        "vi": "Đang cải thiện",
        "ex": ""
    },
    {
        "num": 1678,
        "en": "advanced",
        "pos": "adj.",
        "ipa": "/ədˈvɑːnst/",
        "vi": "Tiên tiến, cao cấp",
        "ex": ""
    },
    {
        "num": 1679,
        "en": "progressive",
        "pos": "adj.",
        "ipa": "/prəˈɡres.ɪv/",
        "vi": "Tiến bộ, lũy tiến",
        "ex": ""
    },
    {
        "num": 1680,
        "en": "refined",
        "pos": "adj.",
        "ipa": "/rɪˈfaɪnd/",
        "vi": "Tinh chế, thanh tao",
        "ex": ""
    },
    {
        "num": 1681,
        "en": "unique",
        "pos": "adj.",
        "ipa": "/juːˈniːk/",
        "vi": "Độc nhất vô nhị",
        "ex": ""
    },
    {
        "num": 1682,
        "en": "ongoing",
        "pos": "adj.",
        "ipa": "/ˈɒnˌɡəʊ.ɪŋ/",
        "vi": "Đang diễn ra",
        "ex": ""
    },
    {
        "num": 1683,
        "en": "advent",
        "pos": "n.",
        "ipa": "/ˈæd.vent/",
        "vi": "Sự ra đời, sự xuất hiện",
        "ex": ""
    },
    {
        "num": 1684,
        "en": "arrival",
        "pos": "n.",
        "ipa": "/əˈraɪ.vəl/",
        "vi": "Sự đến nơi",
        "ex": ""
    },
    {
        "num": 1685,
        "en": "introduce",
        "pos": "v.",
        "ipa": "/ˌɪn.trəˈdʒuːs/",
        "vi": "Giới thiệu",
        "ex": ""
    },
    {
        "num": 1686,
        "en": "compose",
        "pos": "v.",
        "ipa": "/kəmˈpəʊz/",
        "vi": "Soạn nhạc, cấu thành",
        "ex": ""
    },
    {
        "num": 1687,
        "en": "initiation",
        "pos": "n.",
        "ipa": "/ɪˌnɪʃ.iˈeɪ.ʃən/",
        "vi": "Sự khởi xướng",
        "ex": ""
    },
    {
        "num": 1688,
        "en": "launching",
        "pos": "n.",
        "ipa": "/ˈlɔːn.tʃɪŋ/",
        "vi": "Sự ra mắt, phóng",
        "ex": ""
    },
    {
        "num": 1689,
        "en": "initiate",
        "pos": "v.",
        "ipa": "/ɪˈnɪʃ.i.eɪt/",
        "vi": "Khởi xướng, bắt đầu",
        "ex": ""
    },
    {
        "num": 1690,
        "en": "develop",
        "pos": "v.",
        "ipa": "/dɪˈvel.əp/",
        "vi": "Phát triển",
        "ex": ""
    },
    {
        "num": 1691,
        "en": "adverse",
        "pos": "adj.",
        "ipa": "/ˈæd.vɜːs/",
        "vi": "Bất lợi, có hại",
        "ex": ""
    },
    {
        "num": 1692,
        "en": "negative",
        "pos": "adj.",
        "ipa": "/ˈneɡ.ə.tɪv/",
        "vi": "Tiêu cực, âm tính",
        "ex": ""
    },
    {
        "num": 1693,
        "en": "unfavorable",
        "pos": "adj.",
        "ipa": "/ʌnˈfeɪ.vər.ə.bəl/",
        "vi": "Không thuận lợi",
        "ex": ""
    },
    {
        "num": 1694,
        "en": "deteriorate",
        "pos": "v.",
        "ipa": "/dɪˈtɪə.ri.ə.reɪt/",
        "vi": "Xuống cấp, tồi tệ đi",
        "ex": ""
    },
    {
        "num": 1695,
        "en": "injurious",
        "pos": "adj.",
        "ipa": "/ɪnˈdʒʊə.ri.əs/",
        "vi": "Có hại, làm tổn thương",
        "ex": ""
    },
    {
        "num": 1696,
        "en": "deleterious",
        "pos": "adj.",
        "ipa": "/ˌdel.ɪˈtɪə.ri.əs/",
        "vi": "Gây hại, độc hại",
        "ex": ""
    },
    {
        "num": 1697,
        "en": "atrocious",
        "pos": "adj.",
        "ipa": "/əˈtrəʊ.ʃəs/",
        "vi": "Tồi tệ, tàn ác",
        "ex": ""
    },
    {
        "num": 1698,
        "en": "inauspicious",
        "pos": "adj.",
        "ipa": "/ˌɪn.ɔːˈspɪʃ.əs/",
        "vi": "Rủi ro, không may",
        "ex": ""
    },
    {
        "num": 1699,
        "en": "inimical",
        "pos": "adj.",
        "ipa": "/ɪˈnɪm.ɪ.kəl/",
        "vi": "Thù địch, độc hại",
        "ex": ""
    },
    {
        "num": 1700,
        "en": "detriment",
        "pos": "n.",
        "ipa": "/ˈdet.rɪ.mənt/",
        "vi": "Sự tổn hại",
        "ex": ""
    },
    {
        "num": 1701,
        "en": "ill",
        "pos": "adj.",
        "ipa": "/ɪl/",
        "vi": "Bệnh, tồi tệ",
        "ex": ""
    },
    {
        "num": 1702,
        "en": "advocating",
        "pos": "v. / adj.",
        "ipa": "/ˈæd.və.keɪt.ɪŋ/",
        "vi": "Ủng hộ, tán thành",
        "ex": ""
    },
    {
        "num": 1703,
        "en": "recommending",
        "pos": "v. / adj.",
        "ipa": "/ˌrek.əˈmend.ɪŋ/",
        "vi": "Khuyến nghị",
        "ex": ""
    },
    {
        "num": 1704,
        "en": "put forth",
        "pos": "phr. v.",
        "ipa": "/pʊt fɔːθ/",
        "vi": "Đề xuất, đưa ra",
        "ex": ""
    },
    {
        "num": 1705,
        "en": "propose",
        "pos": "v.",
        "ipa": "/prəˈpəʊz/",
        "vi": "Đề nghị, cầu hôn",
        "ex": ""
    },
    {
        "num": 1706,
        "en": "indicating",
        "pos": "v. / adj.",
        "ipa": "/ˈɪn.dɪ.keɪt.ɪŋ/",
        "vi": "Chỉ ra, biểu thị",
        "ex": ""
    },
    {
        "num": 1707,
        "en": "assuming",
        "pos": "adj.",
        "ipa": "/əˈsjuːm.ɪŋ/",
        "vi": "Kiêu ngạo, giả sử",
        "ex": ""
    },
    {
        "num": 1708,
        "en": "recommend",
        "pos": "v.",
        "ipa": "/ˌrek.əˈmend/",
        "vi": "Khuyên bảo, đề cử",
        "ex": ""
    },
    {
        "num": 1709,
        "en": "affection",
        "pos": "n.",
        "ipa": "/əˈfek.ʃən/",
        "vi": "Sự yêu mến, tình cảm",
        "ex": ""
    },
    {
        "num": 1710,
        "en": "fondness",
        "pos": "n.",
        "ipa": "/ˈfɒnd.nəs/",
        "vi": "Sự yêu thích",
        "ex": ""
    },
    {
        "num": 1711,
        "en": "compassionate",
        "pos": "adj.",
        "ipa": "/kəmˈpæʃ.ən.ət/",
        "vi": "Có lòng trắc ẩn",
        "ex": ""
    },
    {
        "num": 1712,
        "en": "showing care for others",
        "pos": "phrase",
        "ipa": "/ˈʃəʊ.ɪŋ keə fɔːr ˈʌð.əz/",
        "vi": "Thể hiện sự quan tâm",
        "ex": ""
    },
    {
        "num": 1713,
        "en": "wealthy",
        "pos": "adj.",
        "ipa": "/ˈwel.θi/",
        "vi": "Giàu có",
        "ex": ""
    },
    {
        "num": 1714,
        "en": "well-off",
        "pos": "adj.",
        "ipa": "/ˌwelˈɒf/",
        "vi": "Khá giả",
        "ex": ""
    },
    {
        "num": 1715,
        "en": "affluent",
        "pos": "adj.",
        "ipa": "/ˈæf.lu.ənt/",
        "vi": "Giàu có, sung túc",
        "ex": ""
    },
    {
        "num": 1716,
        "en": "burgeoning",
        "pos": "adj.",
        "ipa": "/ˈbɜː.dʒən.ɪŋ/",
        "vi": "Phát triển nhanh chóng",
        "ex": ""
    },
    {
        "num": 1717,
        "en": "thriving",
        "pos": "adj.",
        "ipa": "/ˈθraɪ.vɪŋ/",
        "vi": "Thịnh vượng, phát triển tốt",
        "ex": ""
    },
    {
        "num": 1718,
        "en": "prosper",
        "pos": "v.",
        "ipa": "/ˈprɒs.pər/",
        "vi": "Phồn vinh, thành công",
        "ex": ""
    },
    {
        "num": 1719,
        "en": "luxuriant",
        "pos": "adj.",
        "ipa": "/lʌɡˈʒʊə.ri.ənt/",
        "vi": "Tươi tốt, um tùm",
        "ex": ""
    },
    {
        "num": 1720,
        "en": "make recovery from",
        "pos": "phrase",
        "ipa": "/meɪk rɪˈkʌv.ər.i frəm/",
        "vi": "Khôi phục từ",
        "ex": ""
    },
    {
        "num": 1721,
        "en": "overcome",
        "pos": "v.",
        "ipa": "/ˌəʊ.vəˈkʌm/",
        "vi": "Vượt qua, chiến thắng",
        "ex": ""
    },
    {
        "num": 1722,
        "en": "manage without",
        "pos": "phrase",
        "ipa": "/ˈmæn.ɪdʒ wɪˈðaʊt/",
        "vi": "Xoay xở mà không có",
        "ex": ""
    },
    {
        "num": 1723,
        "en": "address",
        "pos": "v.",
        "ipa": "/əˈdres/",
        "vi": "Giải quyết",
        "ex": ""
    },
    {
        "num": 1724,
        "en": "resolve",
        "pos": "v.",
        "ipa": "/rɪˈzɒlv/",
        "vi": "Giải quyết, quyết tâm",
        "ex": ""
    },
    {
        "num": 1725,
        "en": "handle",
        "pos": "v.",
        "ipa": "/ˈhæn.dəl/",
        "vi": "Xử lý, cầm nắm",
        "ex": ""
    },
    {
        "num": 1726,
        "en": "tackle",
        "pos": "v.",
        "ipa": "/ˈtæk.əl/",
        "vi": "Xử lý (vấn đề khó)",
        "ex": ""
    },
    {
        "num": 1727,
        "en": "contingent",
        "pos": "adj.",
        "ipa": "/kənˈtɪn.dʒənt/",
        "vi": "Phụ thuộc, ngẫu nhiên",
        "ex": ""
    },
    {
        "num": 1728,
        "en": "relies on",
        "pos": "phr. v.",
        "ipa": "/rɪˈlaɪz ɒn/",
        "vi": "Dựa vào",
        "ex": ""
    },
    {
        "num": 1729,
        "en": "draw on",
        "pos": "phr. v.",
        "ipa": "/drɔː ɒn/",
        "vi": "Tận dụng (kinh nghiệm/nguồn)",
        "ex": ""
    },
    {
        "num": 1730,
        "en": "be dependent on",
        "pos": "phrase",
        "ipa": "/bi dɪˈpen.dənt ɒn/",
        "vi": "Bị phụ thuộc vào",
        "ex": ""
    },
    {
        "num": 1731,
        "en": "derived from",
        "pos": "adj. phr.",
        "ipa": "/dɪˈraɪvd frəm/",
        "vi": "Bắt nguồn từ",
        "ex": ""
    },
    {
        "num": 1732,
        "en": "yet",
        "pos": "adv.",
        "ipa": "/jet/",
        "vi": "Tuy nhiên, chưa",
        "ex": ""
    },
    {
        "num": 1733,
        "en": "nevertheless",
        "pos": "adv.",
        "ipa": "/ˌnev.ə.ðəˈles/",
        "vi": "Tuy nhiên",
        "ex": ""
    },
    {
        "num": 1734,
        "en": "in spite of that",
        "pos": "phrase",
        "ipa": "/ɪn spaɪt əv ðæt/",
        "vi": "Dù vậy",
        "ex": ""
    },
    {
        "num": 1735,
        "en": "compensate for",
        "pos": "phr. v.",
        "ipa": "/ˈkɒm.pən.seɪt fɔː/",
        "vi": "Bồi thường cho",
        "ex": ""
    },
    {
        "num": 1736,
        "en": "make amends",
        "pos": "phrase",
        "ipa": "/meɪk əˈmendz/",
        "vi": "Chuộc lỗi, đền bù",
        "ex": ""
    },
    {
        "num": 1737,
        "en": "value",
        "pos": "v. / n.",
        "ipa": "/ˈvæl.juː/",
        "vi": "Trân trọng, định giá",
        "ex": ""
    },
    {
        "num": 1738,
        "en": "cut back on",
        "pos": "phr. v.",
        "ipa": "/kʌt bæk ɒn/",
        "vi": "Cắt giảm chi tiêu/lượng",
        "ex": ""
    },
    {
        "num": 1739,
        "en": "reduce",
        "pos": "v.",
        "ipa": "/rɪˈdʒuːs/",
        "vi": "Giảm bớt",
        "ex": ""
    },
    {
        "num": 1740,
        "en": "cut down",
        "pos": "phr. v.",
        "ipa": "/kʌt daʊn/",
        "vi": "Chặt đốn, giảm bớt",
        "ex": ""
    },
    {
        "num": 1741,
        "en": "chop",
        "pos": "v.",
        "ipa": "/tʃɒp/",
        "vi": "Băm, chặt",
        "ex": ""
    },
    {
        "num": 1742,
        "en": "dwindle",
        "pos": "v.",
        "ipa": "/ˈdwɪn.dəl/",
        "vi": "Teo tóp, hao hụt",
        "ex": ""
    },
    {
        "num": 1743,
        "en": "demise",
        "pos": "n.",
        "ipa": "/dɪˈmaɪz/",
        "vi": "Sự sụp đổ, cái chết",
        "ex": ""
    },
    {
        "num": 1744,
        "en": "downturn",
        "pos": "n.",
        "ipa": "/ˈdaʊn.tɜːn/",
        "vi": "Sự suy thoái",
        "ex": ""
    },
    {
        "num": 1745,
        "en": "reduction",
        "pos": "n.",
        "ipa": "/rɪˈdʌk.ʃən/",
        "vi": "Sự giảm bớt",
        "ex": ""
    },
    {
        "num": 1746,
        "en": "abort",
        "pos": "v.",
        "ipa": "/əˈbɔːt/",
        "vi": "Hủy bỏ, phá thai",
        "ex": ""
    },
    {
        "num": 1747,
        "en": "abolish",
        "pos": "v.",
        "ipa": "/əˈbɒl.ɪʃ/",
        "vi": "Bãi bỏ (luật lệ)",
        "ex": ""
    },
    {
        "num": 1748,
        "en": "damaged",
        "pos": "adj.",
        "ipa": "/ˈdæm.ɪdʒd/",
        "vi": "Bị hư hại",
        "ex": ""
    },
    {
        "num": 1749,
        "en": "defective",
        "pos": "adj.",
        "ipa": "/dɪˈfek.tɪv/",
        "vi": "Bị lỗi, có khuyết điểm",
        "ex": ""
    },
    {
        "num": 1750,
        "en": "faulty",
        "pos": "adj.",
        "ipa": "/ˈfɒl.ti/",
        "vi": "Có lỗi, sai sót",
        "ex": ""
    },
    {
        "num": 1751,
        "en": "malfunctional",
        "pos": "adj.",
        "ipa": "/ˌmælˈfʌŋk.ʃən.əl/",
        "vi": "Trục trặc, hỏng hóc",
        "ex": ""
    },
    {
        "num": 1752,
        "en": "get away",
        "pos": "phr. v.",
        "ipa": "/ɡet əˈweɪ/",
        "vi": "Chạy trốn, đi nghỉ",
        "ex": ""
    },
    {
        "num": 1753,
        "en": "escape from",
        "pos": "phr. v.",
        "ipa": "/ɪˈskeɪp frəm/",
        "vi": "Thoát khỏi",
        "ex": ""
    },
    {
        "num": 1754,
        "en": "occur",
        "pos": "v.",
        "ipa": "/əˈkɜːr/",
        "vi": "Xảy ra",
        "ex": ""
    },
    {
        "num": 1755,
        "en": "flyer",
        "pos": "n.",
        "ipa": "/ˈflaɪ.ər/",
        "vi": "Tờ rơi quảng cáo",
        "ex": ""
    },
    {
        "num": 1756,
        "en": "brochure",
        "pos": "n.",
        "ipa": "/ˈbrəʊ.ʃər/",
        "vi": "Cuốn sách nhỏ (quảng cáo)",
        "ex": ""
    },
    {
        "num": 1757,
        "en": "pamphlet",
        "pos": "n.",
        "ipa": "/ˈpæm.flət/",
        "vi": "Sách nhỏ (thông tin/chính trị)",
        "ex": ""
    },
    {
        "num": 1758,
        "en": "booklet",
        "pos": "n.",
        "ipa": "/ˈbʊk.lət/",
        "vi": "Sách mỏng",
        "ex": ""
    },
    {
        "num": 1759,
        "en": "leaflet",
        "pos": "n.",
        "ipa": "/ˈliːf.lət/",
        "vi": "Tờ truyền đơn",
        "ex": ""
    },
    {
        "num": 1760,
        "en": "expenses",
        "pos": "n.",
        "ipa": "/ɪkˈspensɪz/",
        "vi": "Chi phí, công tác phí",
        "ex": ""
    },
    {
        "num": 1761,
        "en": "exorbitant",
        "pos": "adj.",
        "ipa": "/ɪɡˈzɔː.bɪ.tənt/",
        "vi": "Đắt cắt cổ",
        "ex": ""
    },
    {
        "num": 1762,
        "en": "proliferate",
        "pos": "v.",
        "ipa": "/prəˈlɪf.ər.eɪt/",
        "vi": "Sinh sôi nảy nở nhanh",
        "ex": ""
    },
    {
        "num": 1763,
        "en": "increase rapidly",
        "pos": "phrase",
        "ipa": "/ɪnˈkriːs ˈræp.ɪd.li/",
        "vi": "Tăng nhanh",
        "ex": ""
    },
    {
        "num": 1764,
        "en": "escalate",
        "pos": "v.",
        "ipa": "/ˈes.kə.leɪt/",
        "vi": "Leo thang, tăng cao",
        "ex": ""
    },
    {
        "num": 1765,
        "en": "alternative",
        "pos": "adj.",
        "ipa": "/ɒlˈtɜː.nə.tɪv/",
        "vi": "Thay thế (vật liệu, giải pháp)",
        "ex": ""
    },
    {
        "num": 1766,
        "en": "significantly",
        "pos": "adv.",
        "ipa": "/sɪɡˈnɪf.ɪ.kənt.li/",
        "vi": "Một cách đáng kể",
        "ex": ""
    },
    {
        "num": 1767,
        "en": "signify",
        "pos": "v.",
        "ipa": "/ˈsɪɡ.nɪ.faɪ/",
        "vi": "Biểu thị, có nghĩa là",
        "ex": ""
    },
    {
        "num": 1768,
        "en": "ensure",
        "pos": "v.",
        "ipa": "/ɪnˈʃɔː/",
        "vi": "Đảm bảo",
        "ex": ""
    },
    {
        "num": 1769,
        "en": "strict regulation",
        "pos": "n. phr.",
        "ipa": "/strɪkt ˌreɡ.jəˈleɪ.ʃən/",
        "vi": "Quy định nghiêm ngặt",
        "ex": ""
    },
    {
        "num": 1770,
        "en": "penalize",
        "pos": "v.",
        "ipa": "/ˈpiː.nəl.aɪz/",
        "vi": "Trừng phạt, xử phạt",
        "ex": ""
    },
    {
        "num": 1771,
        "en": "corporate behavior",
        "pos": "n. phr.",
        "ipa": "/ˈkɔː.pər.ət bɪˈheɪ.vjə/",
        "vi": "Hành vi của doanh nghiệp",
        "ex": ""
    },
    {
        "num": 1772,
        "en": "indigenous group",
        "pos": "n. phr.",
        "ipa": "/ɪnˈdɪdʒ.ɪ.nəs ɡruːp/",
        "vi": "Nhóm người bản địa",
        "ex": ""
    },
    {
        "num": 1773,
        "en": "conservation",
        "pos": "n.",
        "ipa": "/ˌkɒn.səˈveɪ.ʃən/",
        "vi": "Sự bảo tồn (thiên nhiên)",
        "ex": ""
    },
    {
        "num": 1774,
        "en": "human-induced",
        "pos": "adj.",
        "ipa": "/ˈhjuː.mən ɪnˈdʒuːst/",
        "vi": "Do con người gây ra",
        "ex": ""
    },
    {
        "num": 1775,
        "en": "illegal logging",
        "pos": "n. phr.",
        "ipa": "/ɪˈliː.ɡəl ˈlɒɡ.ɪŋ/",
        "vi": "Nạn khai thác gỗ trái phép",
        "ex": ""
    },
    {
        "num": 1776,
        "en": "hold accountable for",
        "pos": "phrase",
        "ipa": "/həʊld əˈkaʊn.tə.bəl fɔː/",
        "vi": "Bắt chịu trách nhiệm về",
        "ex": ""
    },
    {
        "num": 1777,
        "en": "cherish",
        "pos": "v.",
        "ipa": "/ˈtʃer.ɪʃ/",
        "vi": "Trân trọng, yêu thương",
        "ex": ""
    },
    {
        "num": 1778,
        "en": "gratitude",
        "pos": "n.",
        "ipa": "/ˈɡræt.ɪ.tʃuːd/",
        "vi": "Lòng biết ơn",
        "ex": ""
    },
    {
        "num": 1779,
        "en": "unity",
        "pos": "n.",
        "ipa": "/ˈjuː.nə.ti/",
        "vi": "Sự đoàn kết, thống nhất",
        "ex": ""
    },
    {
        "num": 1780,
        "en": "symbolic",
        "pos": "adj.",
        "ipa": "/sɪmˈbɒl.ɪk/",
        "vi": "Mang tính biểu tượng",
        "ex": ""
    },
    {
        "num": 1781,
        "en": "sustainable travel",
        "pos": "n. phr.",
        "ipa": "/səˈsteɪ.nə.bəl ˈtræv.əl/",
        "vi": "Du lịch bền vững",
        "ex": ""
    },
    {
        "num": 1782,
        "en": "conscious effort",
        "pos": "n. phr.",
        "ipa": "/ˈkɒn.ʃəs ˈef.ət/",
        "vi": "Nỗ lực có ý thức",
        "ex": ""
    },
    {
        "num": 1783,
        "en": "exception",
        "pos": "n.",
        "ipa": "/ɪkˈsep.ʃən/",
        "vi": "Ngoại lệ",
        "ex": ""
    },
    {
        "num": 1784,
        "en": "clear one's mind",
        "pos": "phrase",
        "ipa": "/klɪə wʌnz maɪnd/",
        "vi": "Làm thư thái đầu óc",
        "ex": ""
    },
    {
        "num": 1785,
        "en": "bilingualism",
        "pos": "n.",
        "ipa": "/baɪˈlɪŋ.ɡwə.lɪ.zəm/",
        "vi": "Việc sử dụng song ngữ",
        "ex": ""
    },
    {
        "num": 1786,
        "en": "concentration",
        "pos": "n.",
        "ipa": "/ˌkɒn.sənˈtreɪ.ʃən/",
        "vi": "Sự tập trung",
        "ex": ""
    },
    {
        "num": 1787,
        "en": "cognitive flexibility",
        "pos": "n. phr.",
        "ipa": "/ˈkɒɡ.nə.tɪv ˌflek.səˈbɪl.ə.ti/",
        "vi": "Sự linh hoạt về nhận thức",
        "ex": ""
    },
    {
        "num": 1788,
        "en": "cross-cultural",
        "pos": "adj.",
        "ipa": "/ˌkrɒsˈkʌl.tʃər.əl/",
        "vi": "Giao thoa văn hóa",
        "ex": ""
    },
    {
        "num": 1789,
        "en": "diverse perspective",
        "pos": "n. phr.",
        "ipa": "/daɪˈvɜːs pəˈspek.tɪv/",
        "vi": "Góc nhìn đa dạng",
        "ex": ""
    },
    {
        "num": 1790,
        "en": "engage with",
        "pos": "phr. v.",
        "ipa": "/ɪnˈɡeɪdʒ wɪð/",
        "vi": "Giao lưu, tương tác với",
        "ex": ""
    },
    {
        "num": 1791,
        "en": "monolingual",
        "pos": "n. / adj.",
        "ipa": "/ˌmɒn.əˈlɪŋ.ɡwəl/",
        "vi": "Người chỉ nói một ngôn ngữ",
        "ex": ""
    },
    {
        "num": 1792,
        "en": "enroll",
        "pos": "v.",
        "ipa": "/ɪnˈrəʊl/",
        "vi": "Ghi danh, đăng ký học",
        "ex": ""
    },
    {
        "num": 1793,
        "en": "in-person",
        "pos": "adj.",
        "ipa": "/ˌɪnˈpɜː.sən/",
        "vi": "Trực tiếp (mặt đối mặt)",
        "ex": ""
    },
    {
        "num": 1794,
        "en": "embrace",
        "pos": "v.",
        "ipa": "/ɪmˈbreɪs/",
        "vi": "Đón nhận, ôm lấy",
        "ex": ""
    },
    {
        "num": 1795,
        "en": "cultural diversity",
        "pos": "n. phr.",
        "ipa": "/ˈkʌl.tʃər.əl daɪˈvɜː.sə.ti/",
        "vi": "Sự đa dạng văn hóa",
        "ex": ""
    },
    {
        "num": 1796,
        "en": "thrive on",
        "pos": "phr. v.",
        "ipa": "/θraɪv ɒn/",
        "vi": "Phát triển mạnh nhờ vào",
        "ex": ""
    },
    {
        "num": 1797,
        "en": "inclusive society",
        "pos": "n. phr.",
        "ipa": "/ɪnˈkluː.sɪv səˈsaɪ.ə.ti/",
        "vi": "Xã hội hòa nhập",
        "ex": ""
    },
    {
        "num": 1798,
        "en": "harness the potential",
        "pos": "phrase",
        "ipa": "/ˈhɑː.nəs ðə pəˈten.ʃəl/",
        "vi": "Khai thác tiềm năng",
        "ex": ""
    },
    {
        "num": 1799,
        "en": "genetically modified",
        "pos": "adj.",
        "ipa": "/dʒəˈnet.ɪ.kəl.i ˈmɒd.ɪ.faɪd/",
        "vi": "Biến đổi gen",
        "ex": ""
    },
    {
        "num": 1800,
        "en": "drop out",
        "pos": "phr. v.",
        "ipa": "/drɒp aʊt/",
        "vi": "Bỏ học giữa chừng",
        "ex": ""
    },
    {
        "num": 1801,
        "en": "drop by",
        "pos": "phr. v.",
        "ipa": "/drɒp baɪ/",
        "vi": "Tạt qua thăm ai một lúc",
        "ex": ""
    },
    {
        "num": 1802,
        "en": "fill in",
        "pos": "phr. v.",
        "ipa": "/fɪl ɪn/",
        "vi": "Điền thông tin vào",
        "ex": ""
    },
    {
        "num": 1803,
        "en": "get along",
        "pos": "phr. v.",
        "ipa": "/ɡet əˈlɒŋ/",
        "vi": "Hòa hợp với ai",
        "ex": ""
    },
    {
        "num": 1804,
        "en": "odds and ends",
        "pos": "idiom",
        "ipa": "/ɒdz ənd endz/",
        "vi": "Những thứ lặt vặt, vụn vặt",
        "ex": ""
    },
    {
        "num": 1805,
        "en": "spick and span",
        "pos": "idiom",
        "ipa": "/spɪk ənd spæn/",
        "vi": "Ngăn nắp, gọn gàng và sạch sẽ",
        "ex": ""
    },
    {
        "num": 1806,
        "en": "wear and tear",
        "pos": "idiom",
        "ipa": "/weər ənd teə/",
        "vi": "Sự hao mòn, hư hỏng do sử dụng",
        "ex": ""
    },
    {
        "num": 1807,
        "en": "ups and downs",
        "pos": "idiom",
        "ipa": "/ʌps ənd daʊnz/",
        "vi": "Sự thăng trầm, lúc lên lúc xuống",
        "ex": ""
    },
    {
        "num": 1808,
        "en": "ins and outs",
        "pos": "idiom",
        "ipa": "/ɪnz ənd aʊts/",
        "vi": "Toàn bộ chi tiết ngóc ngách",
        "ex": ""
    },
    {
        "num": 1809,
        "en": "safe and sound",
        "pos": "idiom",
        "ipa": "/seɪf ənd saʊnd/",
        "vi": "Bình an vô sự",
        "ex": ""
    },
    {
        "num": 1810,
        "en": "flesh and blood",
        "pos": "idiom",
        "ipa": "/fleʃ ənd blʌd/",
        "vi": "Người máu mủ ruột thịt",
        "ex": ""
    },
    {
        "num": 1811,
        "en": "out of the question",
        "pos": "idiom",
        "ipa": "/aʊt əv ðə ˈkwes.tʃən/",
        "vi": "Không thể xảy ra, không đáng bàn",
        "ex": ""
    },
    {
        "num": 1812,
        "en": "on the verge of",
        "pos": "idiom",
        "ipa": "/ɒn ðə vɜːdʒ əv/",
        "vi": "Đứng trước nguy cơ, bờ vực",
        "ex": ""
    },
    {
        "num": 1813,
        "en": "at a loss",
        "pos": "idiom",
        "ipa": "/ət ə lɒs/",
        "vi": "Bối rối, không biết phải nói/làm gì",
        "ex": ""
    },
    {
        "num": 1814,
        "en": "for good",
        "pos": "idiom",
        "ipa": "/fɔː ɡʊd/",
        "vi": "Mãi mãi",
        "ex": ""
    },
    {
        "num": 1815,
        "en": "by means of",
        "pos": "prep. phr.",
        "ipa": "/baɪ miːnz əv/",
        "vi": "Bằng cách nào, thông qua phương tiện gì",
        "ex": ""
    },
    {
        "num": 1816,
        "en": "in terms of",
        "pos": "prep. phr.",
        "ipa": "/ɪn tɜːmz əv/",
        "vi": "Xét về mặt, liên quan tới",
        "ex": ""
    },
    {
        "num": 1817,
        "en": "with a view to",
        "pos": "prep. phr.",
        "ipa": "/wɪð ə vjuː tuː/",
        "vi": "Với mục đích làm gì (+ V-ing)",
        "ex": ""
    },
    {
        "num": 1818,
        "en": "on behalf of",
        "pos": "prep. phr.",
        "ipa": "/ɒn bɪˈhɑːf əv/",
        "vi": "Thay mặt cho ai",
        "ex": ""
    },
    {
        "num": 1819,
        "en": "in favor of",
        "pos": "prep. phr.",
        "ipa": "/ɪn ˈfeɪ.vər əv/",
        "vi": "Ủng hộ, tán thành",
        "ex": ""
    },
    {
        "num": 1820,
        "en": "by mistake",
        "pos": "prep. phr.",
        "ipa": "/baɪ mɪˈsteɪk/",
        "vi": "Tình cờ, do nhầm lẫn",
        "ex": ""
    },
    {
        "num": 1821,
        "en": "on purpose",
        "pos": "prep. phr.",
        "ipa": "/ɒn ˈpɜː.pəs/",
        "vi": "Cố ý, có chủ đích",
        "ex": ""
    },
    {
        "num": 1822,
        "en": "in advance",
        "pos": "prep. phr.",
        "ipa": "/ɪn ədˈvɑːns/",
        "vi": "Làm trước, chuẩn bị trước",
        "ex": ""
    },
    {
        "num": 1823,
        "en": "at all costs",
        "pos": "idiom",
        "ipa": "/ət ɔːl kɒsts/",
        "vi": "Bằng mọi giá",
        "ex": ""
    },
    {
        "num": 1824,
        "en": "in the long run",
        "pos": "idiom",
        "ipa": "/ɪn ðə lɒŋ rʌn/",
        "vi": "Về lâu về dài",
        "ex": ""
    },
    {
        "num": 1825,
        "en": "take for granted",
        "pos": "idiom",
        "ipa": "/teɪk fɔː ˈɡrɑːn.tɪd/",
        "vi": "Coi điều gì là hiển nhiên",
        "ex": ""
    },
    {
        "num": 1826,
        "en": "make up one's mind",
        "pos": "idiom",
        "ipa": "/meɪk ʌp wʌnz maɪnd/",
        "vi": "Đưa ra quyết định",
        "ex": ""
    },
    {
        "num": 1827,
        "en": "bear in mind",
        "pos": "idiom",
        "ipa": "/beər ɪn maɪnd/",
        "vi": "Ghi nhớ điều gì",
        "ex": ""
    },
    {
        "num": 1828,
        "en": "make a mess of",
        "pos": "idiom",
        "ipa": "/meɪk ə mes əv/",
        "vi": "Làm hỏng việc, gây lộn xộn",
        "ex": ""
    },
    {
        "num": 1829,
        "en": "have a go at",
        "pos": "idiom",
        "ipa": "/hæv ə ɡəʊ ət/",
        "vi": "Thử làm việc gì đó",
        "ex": ""
    },
    {
        "num": 1830,
        "en": "catch sight of",
        "pos": "idiom",
        "ipa": "/kætʃ saɪt əv/",
        "vi": "Vô tình nhìn thấy, bắt gặp",
        "ex": ""
    },
    {
        "num": 1831,
        "en": "make allowance for",
        "pos": "idiom",
        "ipa": "/meɪk əˈlaʊ.əns fɔː/",
        "vi": "Chiếu cố, thông cảm cho ai",
        "ex": ""
    },
    {
        "num": 1832,
        "en": "take into account",
        "pos": "idiom",
        "ipa": "/teɪk ˈɪn.tuː əˈkaʊnt/",
        "vi": "Cân nhắc, tính đến",
        "ex": ""
    },
    {
        "num": 1833,
        "en": "make use of",
        "pos": "idiom",
        "ipa": "/meɪk juːz əv/",
        "vi": "Tận dụng, sử dụng hiệu quả",
        "ex": ""
    },
    {
        "num": 1834,
        "en": "take pride in",
        "pos": "idiom",
        "ipa": "/teɪk praɪd ɪn/",
        "vi": "Tự hào về điều gì/ai đó",
        "ex": ""
    },
    {
        "num": 1835,
        "en": "lose touch with",
        "pos": "idiom",
        "ipa": "/luːz tʌtʃ wɪð/",
        "vi": "Mất liên lạc",
        "ex": ""
    },
    {
        "num": 1836,
        "en": "keep in touch",
        "pos": "idiom",
        "ipa": "/kiːp ɪn tʌtʃ/",
        "vi": "Giữ liên lạc",
        "ex": ""
    },
    {
        "num": 1837,
        "en": "give somebody a hand",
        "pos": "idiom",
        "ipa": "/ɡɪv ˈsʌm.bə.di ə hænd/",
        "vi": "Giúp đỡ ai đó một tay",
        "ex": ""
    },
    {
        "num": 1838,
        "en": "pay a compliment on",
        "pos": "idiom",
        "ipa": "/peɪ ə ˈkɒm.plɪ.mənt ɒn/",
        "vi": "Khen ngợi ai về điều gì",
        "ex": ""
    },
    {
        "num": 1839,
        "en": "do someone a favor",
        "pos": "idiom",
        "ipa": "/duː ˈsʌm.wʌn ə ˈfeɪ.və/",
        "vi": "Làm giúp ai một việc",
        "ex": ""
    },
    {
        "num": 1840,
        "en": "take turns",
        "pos": "idiom",
        "ipa": "/teɪk tɜːnz/",
        "vi": "Luân phiên, đổi ca cho nhau",
        "ex": ""
    },
    {
        "num": 1841,
        "en": "out of date",
        "pos": "idiom",
        "ipa": "/aʊt əv deɪt/",
        "vi": "Lỗi thời, hết hạn",
        "ex": ""
    },
    {
        "num": 1842,
        "en": "wrestle with",
        "pos": "phr. v.",
        "ipa": "/ˈres.əl wɪð/",
        "vi": "Vật lộn với, cố gắng giải quyết (C2)",
        "ex": ""
    },
    {
        "num": 1843,
        "en": "urban population",
        "pos": "collocation",
        "ipa": "/ˈɜː.bən ˌpɒp.jəˈleɪ.ʃən/",
        "vi": "Dân số thành thị",
        "ex": ""
    },
    {
        "num": 1844,
        "en": "mass-produced",
        "pos": "adj.",
        "ipa": "/ˌmæs.prəˈdʒuːst/",
        "vi": "Sản xuất hàng loạt (C1)",
        "ex": ""
    },
    {
        "num": 1845,
        "en": "market-driven",
        "pos": "adj.",
        "ipa": "/ˈmɑː.kɪt ˌdrɪv.ən/",
        "vi": "Định hướng thị trường (C1)",
        "ex": ""
    },
    {
        "num": 1846,
        "en": "sufficient",
        "pos": "adj.",
        "ipa": "/səˈfɪʃ.ənt/",
        "vi": "Đầy đủ, đủ (B2)",
        "ex": ""
    },
    {
        "num": 1847,
        "en": "water-borne disease",
        "pos": "collocation",
        "ipa": "/ˈwɔː.tə.bɔːn dɪˈziːz/",
        "vi": "Bệnh lây qua đường nước",
        "ex": ""
    },
    {
        "num": 1848,
        "en": "dysentery",
        "pos": "n.",
        "ipa": "/ˈdɪs.ən.tri/",
        "vi": "Bệnh kiết lỵ (Y học)",
        "ex": ""
    },
    {
        "num": 1849,
        "en": "succumb to",
        "pos": "phr. v.",
        "ipa": "/səˈkʌm tuː/",
        "vi": "Gục ngã trước, đầu hàng (C2)",
        "ex": ""
    },
    {
        "num": 1850,
        "en": "incidence",
        "pos": "n.",
        "ipa": "/ˈɪn.sɪ.dəns/",
        "vi": "Tỷ lệ mắc phải (bệnh tật, tội phạm) (C1)",
        "ex": ""
    },
    {
        "num": 1851,
        "en": "deduce",
        "pos": "v.",
        "ipa": "/dɪˈdʒuːs/",
        "vi": "Suy luận, suy diễn (C1)",
        "ex": ""
    },
    {
        "num": 1852,
        "en": "fundamental",
        "pos": "adj.",
        "ipa": "/ˌfʌn.dəˈmen.təl/",
        "vi": "Cơ bản, nền tảng (B2)",
        "ex": ""
    },
    {
        "num": 1853,
        "en": "former glory",
        "pos": "collocation",
        "ipa": "/ˈfɔː.mə ˈɡlɔː.ri/",
        "vi": "Ánh hào quang thuở trước",
        "ex": ""
    },
    {
        "num": 1854,
        "en": "spectacular",
        "pos": "adj.",
        "ipa": "/spekˈtæk.jə.lə/",
        "vi": "Ngoạn mục, ngoạn mục (B2)",
        "ex": ""
    },
    {
        "num": 1855,
        "en": "bygone era",
        "pos": "collocation",
        "ipa": "/ˈbaɪ.ɡɒn ˈɪə.rə/",
        "vi": "Thời đại đã qua (C2)",
        "ex": ""
    },
    {
        "num": 1856,
        "en": "irrigation",
        "pos": "n.",
        "ipa": "/ˌɪr.ɪˈɡeɪ.ʃən/",
        "vi": "Thủy lợi, sự tưới tiêu (C1)",
        "ex": ""
    },
    {
        "num": 1857,
        "en": "utilitarian",
        "pos": "adj.",
        "ipa": "/ˌjuː.tɪ.lɪˈteə.ri.ən/",
        "vi": "Thiết thực, vì mục đích sử dụng (C2)",
        "ex": ""
    },
    {
        "num": 1858,
        "en": "heyday",
        "pos": "n.",
        "ipa": "/ˈheɪ.deɪ/",
        "vi": "Thời hoàng kim (C1)",
        "ex": ""
    },
    {
        "num": 1859,
        "en": "comprise",
        "pos": "v.",
        "ipa": "/kəmˈpraɪz/",
        "vi": "Bao gồm, cấu thành (C1)",
        "ex": ""
    },
    {
        "num": 1860,
        "en": "descend",
        "pos": "v.",
        "ipa": "/dɪˈsend/",
        "vi": "Đi xuống, dốc xuống (C1)",
        "ex": ""
    },
    {
        "num": 1861,
        "en": "relentless",
        "pos": "adj.",
        "ipa": "/rɪˈlent.ləs/",
        "vi": "Không ngừng nghỉ, gay gắt (C2)",
        "ex": ""
    },
    {
        "num": 1862,
        "en": "derelict",
        "pos": "adj.",
        "ipa": "/ˈder.ə.lɪkt/",
        "vi": "Bị bỏ hoang, vô chủ (C1)",
        "ex": ""
    },
    {
        "num": 1863,
        "en": "divert",
        "pos": "v.",
        "ipa": "/daɪˈvɜːt/",
        "vi": "Chuyển hướng (C1)",
        "ex": ""
    },
    {
        "num": 1864,
        "en": "hallmark",
        "pos": "n.",
        "ipa": "/ˈhɔːl.mɑːk/",
        "vi": "Dấu ấn, đặc điểm nhận dạng (C2)",
        "ex": ""
    },
    {
        "num": 1865,
        "en": "aesthetically",
        "pos": "adv.",
        "ipa": "/esˈθet.ɪ.kəl.i/",
        "vi": "Về mặt thẩm mỹ (C1)",
        "ex": ""
    },
    {
        "num": 1866,
        "en": "striking",
        "pos": "adj.",
        "ipa": "/ˈstraɪ.kɪŋ/",
        "vi": "Nổi bật, đáng chú ý (B2)",
        "ex": ""
    },
    {
        "num": 1867,
        "en": "ornate",
        "pos": "adj.",
        "ipa": "/ɔːˈneɪt/",
        "vi": "Trang trí công phu (C2)",
        "ex": ""
    },
    {
        "num": 1868,
        "en": "traverse",
        "pos": "v.",
        "ipa": "/trəˈvɜːs/",
        "vi": "Đi ngang qua, băng qua (C2)",
        "ex": ""
    },
    {
        "num": 1869,
        "en": "conviction",
        "pos": "n.",
        "ipa": "/kənˈvɪk.ʃən/",
        "vi": "Niềm tin mãnh liệt, sự kết án (C1)",
        "ex": ""
    },
    {
        "num": 1870,
        "en": "aristocrat",
        "pos": "n.",
        "ipa": "/ˈær.ɪ.stə.kræt/",
        "vi": "Quý tộc (C2)",
        "ex": ""
    },
    {
        "num": 1871,
        "en": "mass tourism",
        "pos": "collocation",
        "ipa": "/mæs ˈtʊə.rɪ.zəm/",
        "vi": "Du lịch đại chúng",
        "ex": ""
    },
    {
        "num": 1872,
        "en": "commercial",
        "pos": "adj.",
        "ipa": "/kəˈmɜː.ʃəl/",
        "vi": "Thuộc về thương mại (B2)",
        "ex": ""
    },
    {
        "num": 1873,
        "en": "fragmentation",
        "pos": "n.",
        "ipa": "/ˌfræɡ.menˈteɪ.ʃən/",
        "vi": "Sự phân mảnh, vỡ vụn (C2)",
        "ex": ""
    },
    {
        "num": 1874,
        "en": "gross domestic product (GDP)",
        "pos": "collocation",
        "ipa": "/ɡrəʊs dəˌmes.tɪk ˈprɒd.ʌkt/",
        "vi": "Tổng sản phẩm quốc nội",
        "ex": ""
    },
    {
        "num": 1875,
        "en": "amorphous",
        "pos": "adj.",
        "ipa": "/əˈmɔː.fəs/",
        "vi": "Vô định hình, không có hình dạng (C2)",
        "ex": ""
    },
    {
        "num": 1876,
        "en": "institutionalise",
        "pos": "v.",
        "ipa": "/ˌɪn.stɪˈtʃuː.ʃən.ə.laɪz/",
        "vi": "Thể chế hóa (C2)",
        "ex": ""
    },
    {
        "num": 1877,
        "en": "extraordinary",
        "pos": "adj.",
        "ipa": "/ɪkˈstrɔː.dɪn.ər.i/",
        "vi": "Phi thường, kỳ lạ (B2)",
        "ex": ""
    },
    {
        "num": 1878,
        "en": "seafaring",
        "pos": "adj.",
        "ipa": "/ˈsiːˌfeə.rɪŋ/",
        "vi": "Đi biển, đi biển thành thạo (C2)",
        "ex": ""
    },
    {
        "num": 1879,
        "en": "descendant",
        "pos": "n.",
        "ipa": "/dɪˈsen.dənt/",
        "vi": "Hậu duệ, con cháu (C1)",
        "ex": ""
    },
    {
        "num": 1880,
        "en": "colonise",
        "pos": "v.",
        "ipa": "/ˈkɒl.ə.naɪz/",
        "vi": "Thực dân hóa, chiếm làm thuộc địa (C1)",
        "ex": ""
    },
    {
        "num": 1881,
        "en": "prevailing wind",
        "pos": "collocation",
        "ipa": "/prɪˈveɪ.lɪŋ wɪnd/",
        "vi": "Gió thịnh hành",
        "ex": ""
    },
    {
        "num": 1882,
        "en": "navigational aid",
        "pos": "collocation",
        "ipa": "/ˌnæv.ɪˈɡeɪ.ʃən.əl eɪd/",
        "vi": "Thiết bị hỗ trợ điều hướng",
        "ex": ""
    },
    {
        "num": 1883,
        "en": "expansion",
        "pos": "n.",
        "ipa": "/ɪkˈspæn.ʃən/",
        "vi": "Sự mở rộng (B2)",
        "ex": ""
    },
    {
        "num": 1884,
        "en": "archeological",
        "pos": "adj.",
        "ipa": "/ˌɑː.ki.əˈlɒdʒ.ɪ.kəl/",
        "vi": "Thuộc khảo cổ học (C1)",
        "ex": ""
    },
    {
        "num": 1885,
        "en": "excavate",
        "pos": "v.",
        "ipa": "/ˈeks.kə.veɪt/",
        "vi": "Khai quật (C2)",
        "ex": ""
    },
    {
        "num": 1886,
        "en": "unearth",
        "pos": "v.",
        "ipa": "/ˈʌn.ɜːθ/",
        "vi": "Đào lên, phát hiện (C2)",
        "ex": ""
    },
    {
        "num": 1887,
        "en": "menace",
        "pos": "n.",
        "ipa": "/ˈmen.ɪs/",
        "vi": "Mối đe dọa nguy hiểm (C1)",
        "ex": ""
    },
    {
        "num": 1888,
        "en": "squad",
        "pos": "n.",
        "ipa": "/skwɒd/",
        "vi": "Đội, nhóm (cứu hỏa/cảnh sát) (C1)",
        "ex": ""
    },
    {
        "num": 1889,
        "en": "blaze",
        "pos": "n.",
        "ipa": "/bleɪz/",
        "vi": "Đám cháy lớn (C1)",
        "ex": ""
    },
    {
        "num": 1890,
        "en": "erratic",
        "pos": "adj.",
        "ipa": "/ɪˈræt.ɪk/",
        "vi": "Thất thường, không thể đoán trước (C2)",
        "ex": ""
    },
    {
        "num": 1891,
        "en": "megafire",
        "pos": "n.",
        "ipa": "/ˈmeɡ.ə.faɪər/",
        "vi": "Siêu hỏa hoạn",
        "ex": ""
    },
    {
        "num": 1892,
        "en": "precipitation",
        "pos": "n.",
        "ipa": "/prɪˌsɪp.ɪˈteɪ.ʃən/",
        "vi": "Lượng mưa, sự kết tủa (C2)",
        "ex": ""
    },
    {
        "num": 1893,
        "en": "eradication",
        "pos": "n.",
        "ipa": "/ɪˌræd.ɪˈkeɪ.ʃən/",
        "vi": "Sự xóa sổ, nhổ rễ (C2)",
        "ex": ""
    },
    {
        "num": 1894,
        "en": "underbrush",
        "pos": "n.",
        "ipa": "/ˈʌn.də.brʌʃ/",
        "vi": "Bụi rậm, tầng cây thấp",
        "ex": ""
    },
    {
        "num": 1895,
        "en": "scorch",
        "pos": "v.",
        "ipa": "/skɔːtʃ/",
        "vi": "Làm cháy sém (C2)",
        "ex": ""
    },
    {
        "num": 1896,
        "en": "evolutionary",
        "pos": "adj.",
        "ipa": "/ˌiː.vəˈluː.ʃən.ər.i/",
        "vi": "Thuộc về tiến hóa (C1)",
        "ex": ""
    },
    {
        "num": 1897,
        "en": "trait",
        "pos": "n.",
        "ipa": "/treɪt/",
        "vi": "Đặc điểm, nét tiêu biểu (C1)",
        "ex": ""
    },
    {
        "num": 1898,
        "en": "throwback",
        "pos": "n.",
        "ipa": "/ˈθrəʊ.bæk/",
        "vi": "Sự trở lại đặc điểm của tổ tiên (C2)",
        "ex": ""
    },
    {
        "num": 1899,
        "en": "embryo",
        "pos": "n.",
        "ipa": "/ˈem.bri.əʊ/",
        "vi": "Phôi thai (C1)",
        "ex": ""
    },
    {
        "num": 1900,
        "en": "demographic trend",
        "pos": "collocation",
        "ipa": "/ˌdem.əˈɡræf.ɪk trend/",
        "vi": "Xu hướng nhân khẩu học",
        "ex": ""
    },
    {
        "num": 1901,
        "en": "conservative estimate",
        "pos": "collocation",
        "ipa": "/kənˈsɜː.və.tɪv ˈes.tɪ.mət/",
        "vi": "Ước tính dè dặt/tối thiểu",
        "ex": ""
    },
    {
        "num": 1902,
        "en": "traditional farming",
        "pos": "collocation",
        "ipa": "/trəˈdɪʃ.ən.əl ˈfɑː.mɪŋ/",
        "vi": "Canh tác truyền thống",
        "ex": ""
    },
    {
        "num": 1903,
        "en": "hothouse",
        "pos": "n.",
        "ipa": "/ˈhɒt.haʊs/",
        "vi": "Nhà kính trồng cây (C1)",
        "ex": ""
    },
    {
        "num": 1904,
        "en": "in vogue",
        "pos": "idiom",
        "ipa": "/ɪn vəʊɡ/",
        "vi": "Đang thịnh hành, đang là mốt (C2)",
        "ex": ""
    },
    {
        "num": 1905,
        "en": "scale up",
        "pos": "phr. v.",
        "ipa": "/skeɪl ʌp/",
        "vi": "Mở rộng quy mô (C1)",
        "ex": ""
    },
    {
        "num": 1906,
        "en": "drastically",
        "pos": "adv.",
        "ipa": "/ˈdræs.tɪ.kəl.i/",
        "vi": "Một cách quyết liệt, đáng kể (C1)",
        "ex": ""
    },
    {
        "num": 1907,
        "en": "artificial",
        "pos": "adj.",
        "ipa": "/ˌɑː.tɪˈfɪʃ.əl/",
        "vi": "Nhân tạo (B2)",
        "ex": ""
    },
    {
        "num": 1908,
        "en": "optimal",
        "pos": "adj.",
        "ipa": "/ˈɒp.tɪ.məl/",
        "vi": "Tối ưu (C1)",
        "ex": ""
    },
    {
        "num": 1909,
        "en": "dismantle",
        "pos": "v.",
        "ipa": "/dɪˈsmæn.təl/",
        "vi": "Tháo dỡ (C1)",
        "ex": ""
    },
    {
        "num": 1910,
        "en": "chlorophyll",
        "pos": "n.",
        "ipa": "/ˈklɒr.ə.fɪl/",
        "vi": "Diệp lục (Sinh học)",
        "ex": ""
    },
    {
        "num": 1911,
        "en": "molecule",
        "pos": "n.",
        "ipa": "/ˈmɒl.ɪ.kjuːl/",
        "vi": "Phân tử (Hóa học)",
        "ex": ""
    },
    {
        "num": 1912,
        "en": "deplete",
        "pos": "v.",
        "ipa": "/dɪˈpliːt/",
        "vi": "Làm cạn kiệt (C1)",
        "ex": ""
    },
    {
        "num": 1913,
        "en": "paradox",
        "pos": "n.",
        "ipa": "/ˈpær.ə.dɒks/",
        "vi": "Nghịch lý (C1)",
        "ex": ""
    },
    {
        "num": 1914,
        "en": "pigment",
        "pos": "n.",
        "ipa": "/ˈpɪɡ.mənt/",
        "vi": "Sắc tố (C1)",
        "ex": ""
    },
    {
        "num": 1915,
        "en": "intuition",
        "pos": "n.",
        "ipa": "/ˌɪn.tʃuˈɪʃ.ən/",
        "vi": "Trực giác (C2)",
        "ex": ""
    },
    {
        "num": 1916,
        "en": "evaluate",
        "pos": "v.",
        "ipa": "/ɪˈvæl.ju.eɪt/",
        "vi": "Đánh giá (B2)",
        "ex": ""
    },
    {
        "num": 1917,
        "en": "qualitative",
        "pos": "adj.",
        "ipa": "/ˈkwɒl.ɪ.tə.tɪv/",
        "vi": "Định tính, thuộc chất lượng (C1)",
        "ex": ""
    },
    {
        "num": 1918,
        "en": "metacognition",
        "pos": "n.",
        "ipa": "/ˌmet.ə.kɒɡˈnɪʃ.ən/",
        "vi": "Siêu nhận thức (Tâm lý học)",
        "ex": ""
    },
    {
        "num": 1919,
        "en": "autonomy",
        "pos": "n.",
        "ipa": "/ɔːˈtɒn.ə.mi/",
        "vi": "Quyền tự chủ (C1)",
        "ex": ""
    },
    {
        "num": 1920,
        "en": "outstrip",
        "pos": "v.",
        "ipa": "/ˌaʊtˈstrɪp/",
        "vi": "Vượt xa (C2)",
        "ex": ""
    },
    {
        "num": 1921,
        "en": "institution",
        "pos": "n.",
        "ipa": "/ˌɪn.stɪˈtʃuː.ʃən/",
        "vi": "Thể chế, viện (B2)",
        "ex": ""
    },
    {
        "num": 1922,
        "en": "reproduction",
        "pos": "n.",
        "ipa": "/ˌriː.prəˈdʌk.ʃən/",
        "vi": "Bản sao, sự sinh sản (C1)",
        "ex": ""
    },
    {
        "num": 1923,
        "en": "monetary",
        "pos": "adj.",
        "ipa": "/ˈmʌn.ɪ.tri/",
        "vi": "Thuộc về tiền tệ (C1)",
        "ex": ""
    },
    {
        "num": 1924,
        "en": "spontaneous",
        "pos": "adj.",
        "ipa": "/spɒnˈteɪ.ni.əs/",
        "vi": "Tự phát, ngẫu hứng (C1)",
        "ex": ""
    },
    {
        "num": 1925,
        "en": "sheer",
        "pos": "adj.",
        "ipa": "/ʃɪə/",
        "vi": "Hoàn toàn, tuyệt đối (C1)",
        "ex": ""
    },
    {
        "num": 1926,
        "en": "superficial",
        "pos": "adj.",
        "ipa": "/ˌsuː.pəˈfɪʃ.əl/",
        "vi": "Hời hợt, nông cạn (C1)",
        "ex": ""
    },
    {
        "num": 1927,
        "en": "geo-engineering",
        "pos": "n.",
        "ipa": "/ˌdʒiː.əʊˌen.dʒɪˈnɪə.rɪŋ/",
        "vi": "Kỹ thuật can thiệp khí hậu (C2)",
        "ex": ""
    },
    {
        "num": 1928,
        "en": "backup",
        "pos": "n.",
        "ipa": "/ˈbæk.ʌp/",
        "vi": "Dự phòng (B2)",
        "ex": ""
    },
    {
        "num": 1929,
        "en": "stimulate",
        "pos": "v.",
        "ipa": "/ˈstɪm.jə.leɪt/",
        "vi": "Kích thích (B2)",
        "ex": ""
    },
    {
        "num": 1930,
        "en": "aerosol",
        "pos": "n.",
        "ipa": "/ˈeə.rə.sɒl/",
        "vi": "Bình xịt, son khí (C1)",
        "ex": ""
    },
    {
        "num": 1931,
        "en": "stratosphere",
        "pos": "n.",
        "ipa": "/ˈstræt.ə.sfɪər/",
        "vi": "Tầng bình lưu (C2)",
        "ex": ""
    },
    {
        "num": 1932,
        "en": "scrutiny",
        "pos": "n.",
        "ipa": "/ˈskruː.tɪ.ni/",
        "vi": "Sự kiểm tra kỹ lưỡng (C2)",
        "ex": ""
    },
    {
        "num": 1933,
        "en": "dimension",
        "pos": "n.",
        "ipa": "/ˌdaɪˈmen.ʃən/",
        "vi": "Khía cạnh, chiều (kích thước) (C1)",
        "ex": ""
    },
    {
        "num": 1934,
        "en": "overbearing",
        "pos": "adj.",
        "ipa": "/ˌəʊ.vəˈbeə.rɪŋ/",
        "vi": "Hống hách, độc đoán (C2)",
        "ex": ""
    },
    {
        "num": 1935,
        "en": "interchange",
        "pos": "n.",
        "ipa": "/ˈɪn.tə.tʃeɪndʒ/",
        "vi": "Sự trao đổi (thông tin, ý tưởng) (C1)",
        "ex": ""
    },
    {
        "num": 1936,
        "en": "forward-looking",
        "pos": "adj.",
        "ipa": "/ˌfɔː.wədˈlʊk.ɪŋ/",
        "vi": "Hướng tới tương lai, tân tiến (C1)",
        "ex": ""
    },
    {
        "num": 1937,
        "en": "collaborative",
        "pos": "adj.",
        "ipa": "/kəˈlæb.ər.ə.tɪv/",
        "vi": "Có tính hợp tác (C1)",
        "ex": ""
    },
    {
        "num": 1938,
        "en": "opt out of",
        "pos": "phr. v.",
        "ipa": "/ɒpt aʊt/",
        "vi": "Quyết định không tham gia (C1)",
        "ex": ""
    },
    {
        "num": 1939,
        "en": "tap into",
        "pos": "phr. v.",
        "ipa": "/tæp ˈɪn.tuː/",
        "vi": "Khai thác, sử dụng (C2)",
        "ex": ""
    },
    {
        "num": 1940,
        "en": "simultaneously",
        "pos": "adv.",
        "ipa": "/ˌsɪm.əlˈteɪ.ni.əs.li/",
        "vi": "Đồng thời (C1)",
        "ex": ""
    },
    {
        "num": 1941,
        "en": "constraint",
        "pos": "n.",
        "ipa": "/kənˈstreɪnt/",
        "vi": "Sự hạn chế, ràng buộc (C1)",
        "ex": ""
    },
    {
        "num": 1942,
        "en": "authority",
        "pos": "n.",
        "ipa": "/ɔːˈθɒr.ə.ti/",
        "vi": "Uy quyền, giới chức trách (B2)",
        "ex": ""
    },
    {
        "num": 1943,
        "en": "marginalise",
        "pos": "v.",
        "ipa": "/ˈmɑː.dʒɪ.nəl.aɪz/",
        "vi": "Gạt ra ngoài lề, làm cho kém quan trọng (C2)",
        "ex": ""
    },
    {
        "num": 1944,
        "en": "emerge",
        "pos": "v.",
        "ipa": "/ɪˈmɜːdʒ/",
        "vi": "Xuất hiện, nổi lên (B2)",
        "ex": ""
    },
    {
        "num": 1945,
        "en": "reverse",
        "pos": "v.",
        "ipa": "/rɪˈvɜːs/",
        "vi": "Đảo ngược (C1)",
        "ex": ""
    },
    {
        "num": 1946,
        "en": "culprit",
        "pos": "n.",
        "ipa": "/ˈkʌl.prɪt/",
        "vi": "Thủ phạm, nguyên nhân (C1)",
        "ex": ""
    },
    {
        "num": 1947,
        "en": "cohesion",
        "pos": "n.",
        "ipa": "/kəʊˈhiː.ʒən/",
        "vi": "Sự gắn kết (C1)",
        "ex": ""
    },
    {
        "num": 1948,
        "en": "saturation",
        "pos": "n.",
        "ipa": "/ˌsætʃ.ərˈeɪ.ʃən/",
        "vi": "Sự bão hòa (C2)",
        "ex": ""
    },
    {
        "num": 1949,
        "en": "artery",
        "pos": "n.",
        "ipa": "/ˈɑː.tər.i/",
        "vi": "Huyết mạch, tuyến đường chính (C2)",
        "ex": ""
    },
    {
        "num": 1950,
        "en": "revitalise",
        "pos": "v.",
        "ipa": "/ˌriːˈvaɪ.təl.aɪz/",
        "vi": "Phục hồi, đem lại sức sống mới (C1)",
        "ex": ""
    },
    {
        "num": 1951,
        "en": "hurdle",
        "pos": "n.",
        "ipa": "/ˈhɜː.dəl/",
        "vi": "Rào cản, trở ngại (C1)",
        "ex": ""
    },
    {
        "num": 1952,
        "en": "restrictive",
        "pos": "adj.",
        "ipa": "/rɪˈstrɪk.tɪv/",
        "vi": "Bị hạn chế, giới hạn (C1)",
        "ex": ""
    },
    {
        "num": 1953,
        "en": "lay waste to",
        "pos": "collocation",
        "ipa": "/leɪ weɪst tuː/",
        "vi": "Tàn phá, phá hủy hoàn toàn",
        "ex": ""
    },
    {
        "num": 1954,
        "en": "settle down",
        "pos": "phr. v.",
        "ipa": "/ˈset.əl daʊn/",
        "vi": "Ổn định cuộc sống (B2)",
        "ex": ""
    },
    {
        "num": 1955,
        "en": "step down",
        "pos": "phr. v.",
        "ipa": "/step daʊn/",
        "vi": "Từ chức (C1)",
        "ex": ""
    },
    {
        "num": 1956,
        "en": "track down",
        "pos": "phr. v.",
        "ipa": "/træk daʊn/",
        "vi": "Lùng sục, tìm ra (C1)",
        "ex": ""
    },
    {
        "num": 1957,
        "en": "wipe out",
        "pos": "phr. v.",
        "ipa": "/waɪp aʊt/",
        "vi": "Xóa sổ, tiêu diệt hoàn toàn (C1)",
        "ex": ""
    },
    {
        "num": 1958,
        "en": "embark on",
        "pos": "phr. v.",
        "ipa": "/ɪmˈbɑːk ɒn/",
        "vi": "Bắt đầu (một dự án lớn) (C1)",
        "ex": ""
    },
    {
        "num": 1959,
        "en": "stem from",
        "pos": "phr. v.",
        "ipa": "/stem frəm/",
        "vi": "Bắt nguồn từ (C1)",
        "ex": ""
    },
    {
        "num": 1960,
        "en": "a drop in the ocean",
        "pos": "idiom",
        "ipa": "/ə drɒp ɪn ði ˈəʊ.ʃən/",
        "vi": "Hạt muối bỏ biển (nhỏ nhoi) (C1)",
        "ex": ""
    },
    {
        "num": 1961,
        "en": "beat around the bush",
        "pos": "idiom",
        "ipa": "/biːt əˈraʊnd ðə bʊʃ/",
        "vi": "Nói vòng vo (C1)",
        "ex": ""
    },
    {
        "num": 1962,
        "en": "on the fence",
        "pos": "idiom",
        "ipa": "/ɒn ðə fens/",
        "vi": "Lưỡng lự, chưa quyết định (C1)",
        "ex": ""
    },
    {
        "num": 1963,
        "en": "take with a grain of salt",
        "pos": "idiom",
        "ipa": "/teɪk wɪð ə ɡreɪn əv sɒlt/",
        "vi": "Bán tín bán nghi (C1)",
        "ex": ""
    },
    {
        "num": 1964,
        "en": "wrap up",
        "pos": "phr. v.",
        "ipa": "/ræp ʌp/",
        "vi": "Hoàn thành, kết thúc (C1)",
        "ex": ""
    },
    {
        "num": 1965,
        "en": "zero in on",
        "pos": "phr. v.",
        "ipa": "/ˈzɪə.rəʊ ɪn ɒn/",
        "vi": "Tập trung cao độ vào (C2)",
        "ex": ""
    },
    {
        "num": 1966,
        "en": "meet criteria",
        "pos": "collocation",
        "ipa": "/miːt kraɪˈtɪə.ri.ə/",
        "vi": "Đáp ứng tiêu chí",
        "ex": ""
    },
    {
        "num": 1967,
        "en": "deeply ingrained",
        "pos": "collocation",
        "ipa": "/ˈdiːp.li ɪnˈɡreɪnd/",
        "vi": "Ăn sâu bám rễ",
        "ex": ""
    },
    {
        "num": 1968,
        "en": "profound effect",
        "pos": "collocation",
        "ipa": "/prəˈfaʊnd ɪˈfekt/",
        "vi": "Ảnh hưởng sâu sắc",
        "ex": ""
    },
    {
        "num": 1969,
        "en": "striking resemblance",
        "pos": "collocation",
        "ipa": "/ˈstraɪ.kɪŋ rɪˈzem.bləns/",
        "vi": "Sự giống nhau đáng kinh ngạc",
        "ex": ""
    },
    {
        "num": 1970,
        "en": "vast majority",
        "pos": "collocation",
        "ipa": "/vɑːst məˈdʒɒr.ə.ti/",
        "vi": "Đại đa số",
        "ex": ""
    },
    {
        "num": 1971,
        "en": "compelling motivation",
        "pos": "collocation",
        "ipa": "/kəmˈpel.ɪŋ ˌməʊ.tɪˈveɪ.ʃən/",
        "vi": "Động cơ mạnh mẽ",
        "ex": ""
    },
    {
        "num": 1972,
        "en": "unprecedented scale",
        "pos": "collocation",
        "ipa": "/ʌnˈpres.ɪ.den.tɪd skeɪl/",
        "vi": "Quy mô chưa từng có",
        "ex": ""
    },
    {
        "num": 1973,
        "en": "viable solution",
        "pos": "collocation",
        "ipa": "/ˈvaɪ.ə.bəl səˈluː.ʃən/",
        "vi": "Giải pháp khả thi",
        "ex": ""
    },
    {
        "num": 1974,
        "en": "integral part",
        "pos": "collocation",
        "ipa": "/ˈɪn.tɪ.ɡrəl pɑːt/",
        "vi": "Phần thiết yếu",
        "ex": ""
    },
    {
        "num": 1975,
        "en": "pervasive influence",
        "pos": "collocation",
        "ipa": "/pəˈveɪ.sɪv ˈɪn.flu.əns/",
        "vi": "Ảnh hưởng lan tỏa",
        "ex": ""
    },
    {
        "num": 1976,
        "en": "empirical evidence",
        "pos": "collocation",
        "ipa": "/ɪmˈpɪr.ɪ.kəl ˈev.ɪ.dəns/",
        "vi": "Bằng chứng thực nghiệm",
        "ex": ""
    },
    {
        "num": 1977,
        "en": "inevitable outcome",
        "pos": "collocation",
        "ipa": "/ɪˈnev.ɪ.tə.bəl ˈaʊt.kʌm/",
        "vi": "Kết quả tất yếu",
        "ex": ""
    },
    {
        "num": 1978,
        "en": "robust growth",
        "pos": "collocation",
        "ipa": "/rəʊˈbʌst ɡrəʊθ/",
        "vi": "Tăng trưởng mạnh mẽ",
        "ex": ""
    },
    {
        "num": 1979,
        "en": "unanimous agreement",
        "pos": "collocation",
        "ipa": "/juːˈnæn.ɪ.məs əˈɡriː.mənt/",
        "vi": "Sự đồng thuận tuyệt đối",
        "ex": ""
    },
    {
        "num": 1980,
        "en": "widespread belief",
        "pos": "collocation",
        "ipa": "/ˈwaɪd.spred bɪˈliːf/",
        "vi": "Niềm tin phổ biến",
        "ex": ""
    },
    {
        "num": 1981,
        "en": "allocate resources",
        "pos": "collocation",
        "ipa": "/ˈæl.ə.keɪt rɪˈzɔːsɪz/",
        "vi": "Phân bổ nguồn lực",
        "ex": ""
    },
    {
        "num": 1982,
        "en": "combat inflation",
        "pos": "collocation",
        "ipa": "/ˈkɒm.bæt ɪnˈfleɪ.ʃən/",
        "vi": "Chống lạm phát",
        "ex": ""
    },
    {
        "num": 1983,
        "en": "mitigate impact",
        "pos": "collocation",
        "ipa": "/ˈmɪt.ɪ.ɡeɪt ˈɪm.pækt/",
        "vi": "Giảm thiểu tác động",
        "ex": ""
    },
    {
        "num": 1984,
        "en": "provoke controversy",
        "pos": "collocation",
        "ipa": "/prəˈvəʊk ˈkɒn.trə.vɜː.si/",
        "vi": "Gây tranh cãi",
        "ex": ""
    },
    {
        "num": 1985,
        "en": "undergo transformation",
        "pos": "collocation",
        "ipa": "/ˌʌn.dəˈɡəʊ ˌtræns.fəˈmeɪ.ʃən/",
        "vi": "Trải qua sự biến đổi",
        "ex": ""
    },
    {
        "num": 1986,
        "en": "yield result",
        "pos": "collocation",
        "ipa": "/jiːld rɪˈzʌlt/",
        "vi": "Mang lại kết quả",
        "ex": ""
    },
    {
        "num": 1987,
        "en": "assert authority",
        "pos": "collocation",
        "ipa": "/əˈsɜːt ɔːˈθɒr.ə.ti/",
        "vi": "Khẳng định uy quyền",
        "ex": ""
    },
    {
        "num": 1988,
        "en": "avert crisis",
        "pos": "collocation",
        "ipa": "/əˈvɜːt ˈkraɪ.sɪs/",
        "vi": "Ngăn chặn khủng hoảng",
        "ex": ""
    },
    {
        "num": 1989,
        "en": "bolster confidence",
        "pos": "collocation",
        "ipa": "/ˈbəʊl.stə ˈkɒn.fɪ.dəns/",
        "vi": "Củng cố niềm tin",
        "ex": ""
    },
    {
        "num": 1990,
        "en": "circumvent rules",
        "pos": "collocation",
        "ipa": "/ˌsɜː.kəmˈvent ruːlz/",
        "vi": "Lách luật",
        "ex": ""
    },
    {
        "num": 1991,
        "en": "convey message",
        "pos": "collocation",
        "ipa": "/kənˈveɪ ˈmes.ɪdʒ/",
        "vi": "Truyền tải thông điệp",
        "ex": ""
    },
    {
        "num": 1992,
        "en": "defy explanation",
        "pos": "collocation",
        "ipa": "/dɪˈfaɪ ˌek.spləˈneɪ.ʃən/",
        "vi": "Không thể giải thích được",
        "ex": ""
    },
    {
        "num": 1993,
        "en": "elicit response",
        "pos": "collocation",
        "ipa": "/iˈlɪs.ɪt rɪˈspɒns/",
        "vi": "Khơi gợi phản ứng",
        "ex": ""
    },
    {
        "num": 1994,
        "en": "encompass range",
        "pos": "collocation",
        "ipa": "/ɪnˈkʌm.pəs reɪndʒ/",
        "vi": "Bao gồm phạm vi",
        "ex": ""
    },
    {
        "num": 1995,
        "en": "engender trust",
        "pos": "collocation",
        "ipa": "/ɪnˈdʒen.də trʌst/",
        "vi": "Tạo ra sự tin tưởng",
        "ex": ""
    },
    {
        "num": 1996,
        "en": "entail risks",
        "pos": "collocation",
        "ipa": "/ɪnˈteɪl rɪsks/",
        "vi": "Đòi hỏi/chứa đựng rủi ro",
        "ex": ""
    },
    {
        "num": 1997,
        "en": "exacerbate situation",
        "pos": "collocation",
        "ipa": "/ɪɡˈzæs.ə.beɪt ˌsɪtʃ.uˈeɪ.ʃən/",
        "vi": "Làm tình hình tệ hơn",
        "ex": ""
    },
    {
        "num": 1998,
        "en": "expedite process",
        "pos": "collocation",
        "ipa": "/ˈek.spə.daɪt ˈprəʊ.ses/",
        "vi": "Thúc đẩy quá trình",
        "ex": ""
    },
    {
        "num": 1999,
        "en": "fabricate story",
        "pos": "collocation",
        "ipa": "/ˈfæb.rɪ.keɪt ˈstɔː.ri/",
        "vi": "Bịa đặt câu chuyện",
        "ex": ""
    },
    {
        "num": 2000,
        "en": "facilitate learning",
        "pos": "collocation",
        "ipa": "/fəˈsɪl.ɪ.teɪt ˈlɜː.nɪŋ/",
        "vi": "Tạo điều kiện cho việc học",
        "ex": ""
    },
    {
        "num": 2001,
        "en": "galvanize support",
        "pos": "collocation",
        "ipa": "/ˈɡæl.və.naɪz səˈpɔːt/",
        "vi": "Kích động sự ủng hộ",
        "ex": ""
    },
    {
        "num": 2002,
        "en": "hamper progress",
        "pos": "collocation",
        "ipa": "/ˈhæm.pə ˈprəʊ.ɡres/",
        "vi": "Cản trở tiến độ",
        "ex": ""
    },
    {
        "num": 2003,
        "en": "harness energy",
        "pos": "collocation",
        "ipa": "/ˈhɑː.nəs ˈen.ə.dʒi/",
        "vi": "Khai thác năng lượng",
        "ex": ""
    },
    {
        "num": 2004,
        "en": "impair ability",
        "pos": "collocation",
        "ipa": "/ɪmˈpeər əˈbɪl.ə.ti/",
        "vi": "Làm suy giảm khả năng",
        "ex": ""
    },
    {
        "num": 2005,
        "en": "impede growth",
        "pos": "collocation",
        "ipa": "/ɪmˈpiːd ɡrəʊθ/",
        "vi": "Cản trở sự phát triển",
        "ex": ""
    },
    {
        "num": 2006,
        "en": "instigate change",
        "pos": "collocation",
        "ipa": "/ˈɪn.stɪ.ɡeɪt tʃeɪndʒ/",
        "vi": "Khởi xướng sự thay đổi",
        "ex": ""
    },
    {
        "num": 2007,
        "en": "jeopardize safety",
        "pos": "collocation",
        "ipa": "/ˈdʒep.ə.daɪz ˈseɪf.ti/",
        "vi": "Gây nguy hiểm cho an toàn",
        "ex": ""
    },
    {
        "num": 2008,
        "en": "manipulate data",
        "pos": "collocation",
        "ipa": "/məˈnɪp.jə.leɪt ˈdeɪ.tə/",
        "vi": "Thao túng dữ liệu",
        "ex": ""
    },
    {
        "num": 2009,
        "en": "obscure meaning",
        "pos": "collocation",
        "ipa": "/əbˈskjʊə ˈmiː.nɪŋ/",
        "vi": "Làm mờ đi ý nghĩa",
        "ex": ""
    },
    {
        "num": 2010,
        "en": "optimize performance",
        "pos": "collocation",
        "ipa": "/ˈɒp.tɪ.maɪz pəˈfɔː.məns/",
        "vi": "Tối ưu hóa hiệu suất",
        "ex": ""
    },
    {
        "num": 2011,
        "en": "perpetuate myth",
        "pos": "collocation",
        "ipa": "/pəˈpetʃ.u.eɪt mɪθ/",
        "vi": "Duy trì lầm tưởng",
        "ex": ""
    },
    {
        "num": 2012,
        "en": "precipitate crisis",
        "pos": "collocation",
        "ipa": "/prɪˈsɪp.ɪ.teɪt ˈkraɪ.sɪs/",
        "vi": "Gây ra cuộc khủng hoảng",
        "ex": ""
    },
    {
        "num": 2013,
        "en": "preclude possibility",
        "pos": "collocation",
        "ipa": "/prɪˈkluːd ˌpɒs.əˈbɪl.ə.ti/",
        "vi": "Loại trừ khả năng",
        "ex": ""
    },
    {
        "num": 2014,
        "en": "rectify mistake",
        "pos": "collocation",
        "ipa": "/ˈrek.tɪ.faɪ mɪˈsteɪk/",
        "vi": "Sửa chữa sai lầm",
        "ex": ""
    },
    {
        "num": 2015,
        "en": "relinquish control",
        "pos": "collocation",
        "ipa": "/rɪˈlɪŋ.kwɪʃ kənˈtrəʊl/",
        "vi": "Từ bỏ quyền kiểm soát",
        "ex": ""
    },
    {
        "num": 2016,
        "en": "repudiate claim",
        "pos": "collocation",
        "ipa": "/rɪˈpjuː.di.eɪt kleɪm/",
        "vi": "Bác bỏ yêu sách",
        "ex": ""
    },
    {
        "num": 2017,
        "en": "scrutinize document",
        "pos": "collocation",
        "ipa": "/ˈskruː.tɪ.naɪz ˈdɒk.jə.mənt/",
        "vi": "Xem xét kỹ tài liệu",
        "ex": ""
    },
    {
        "num": 2018,
        "en": "thwart plan",
        "pos": "collocation",
        "ipa": "/θwɔːt plæn/",
        "vi": "Cản trở kế hoạch",
        "ex": ""
    },
    {
        "num": 2019,
        "en": "undermine authority",
        "pos": "collocation",
        "ipa": "/ˌʌn.dəˈmaɪn ɔːˈθɒr.ə.ti/",
        "vi": "Làm suy yếu quyền lực",
        "ex": ""
    },
    {
        "num": 2020,
        "en": "underscore importance",
        "pos": "collocation",
        "ipa": "/ˌʌn.dəˈskɔːr ɪmˈpɔː.təns/",
        "vi": "Nhấn mạnh tầm quan trọng",
        "ex": ""
    },
    {
        "num": 2021,
        "en": "vindicate decision",
        "pos": "collocation",
        "ipa": "/ˈvɪn.dɪ.keɪt dɪˈsɪʒ.ən/",
        "vi": "Chứng minh quyết định là đúng",
        "ex": ""
    },
    {
        "num": 2022,
        "en": "abstract concept",
        "pos": "collocation",
        "ipa": "/ˈæb.strækt ˈkɒn.sept/",
        "vi": "Khái niệm trừu tượng",
        "ex": ""
    },
    {
        "num": 2023,
        "en": "accessible format",
        "pos": "collocation",
        "ipa": "/əkˈses.ə.bəl ˈfɔː.mæt/",
        "vi": "Định dạng dễ tiếp cận",
        "ex": ""
    },
    {
        "num": 2024,
        "en": "accommodate needs",
        "pos": "collocation",
        "ipa": "/əˈkɒm.ə.deɪt niːdz/",
        "vi": "Đáp ứng nhu cầu",
        "ex": ""
    },
    {
        "num": 2025,
        "en": "acute shortage",
        "pos": "collocation",
        "ipa": "/əˈkjuːt ˈʃɔː.tɪdʒ/",
        "vi": "Sự thiếu hụt nghiêm trọng",
        "ex": ""
    },
    {
        "num": 2026,
        "en": "adequate preparation",
        "pos": "collocation",
        "ipa": "/ˈæd.ə.kwət ˌprep.ərˈeɪ.ʃən/",
        "vi": "Sự chuẩn bị đầy đủ",
        "ex": ""
    },
    {
        "num": 2027,
        "en": "allocate funds",
        "pos": "collocation",
        "ipa": "/ˈæl.ə.keɪt fʌndz/",
        "vi": "Phân bổ quỹ",
        "ex": ""
    },
    {
        "num": 2028,
        "en": "ambiguous answer",
        "pos": "collocation",
        "ipa": "/æmˈbɪɡ.ju.əs ˈɑːn.sə/",
        "vi": "Câu trả lời mơ hồ",
        "ex": ""
    },
    {
        "num": 2029,
        "en": "analogous situation",
        "pos": "collocation",
        "ipa": "/əˈnæl.ə.ɡəs ˌsɪtʃ.uˈeɪ.ʃən/",
        "vi": "Tình huống tương tự",
        "ex": ""
    },
    {
        "num": 2030,
        "en": "anomalous result",
        "pos": "collocation",
        "ipa": "/əˈnɒm.ə.ləs rɪˈzʌlt/",
        "vi": "Kết quả dị thường",
        "ex": ""
    },
    {
        "num": 2031,
        "en": "arbitrary decision",
        "pos": "collocation",
        "ipa": "/ˈɑː.bɪ.trər.i dɪˈsɪʒ.ən/",
        "vi": "Quyết định tùy tiện",
        "ex": ""
    },
    {
        "num": 2032,
        "en": "ascertain facts",
        "pos": "collocation",
        "ipa": "/ˌæs.əˈteɪn fækts/",
        "vi": "Xác minh sự thật",
        "ex": ""
    },
    {
        "num": 2033,
        "en": "assess value",
        "pos": "collocation",
        "ipa": "/əˈses ˈvæl.juː/",
        "vi": "Đánh giá giá trị",
        "ex": ""
    },
    {
        "num": 2034,
        "en": "authoritative source",
        "pos": "collocation",
        "ipa": "/ɔːˈθɒr.ɪ.tə.tɪv sɔːs/",
        "vi": "Nguồn có thẩm quyền",
        "ex": ""
    },
    {
        "num": 2035,
        "en": "capacity building",
        "pos": "collocation",
        "ipa": "/kəˈpæs.ə.ti ˈbɪl.dɪŋ/",
        "vi": "Nâng cao năng lực",
        "ex": ""
    },
    {
        "num": 2036,
        "en": "cohesive group",
        "pos": "collocation",
        "ipa": "/kəʊˈhiː.sɪv ɡruːp/",
        "vi": "Nhóm gắn kết",
        "ex": ""
    },
    {
        "num": 2037,
        "en": "comprehend fully",
        "pos": "collocation",
        "ipa": "/kəmˈprɪ.hend ˈfʊl.i/",
        "vi": "Hiểu hoàn toàn",
        "ex": ""
    },
    {
        "num": 2038,
        "en": "conceal identity",
        "pos": "collocation",
        "ipa": "/kənˈsiːl aɪˈden.tɪ.ti/",
        "vi": "Che giấu danh tính",
        "ex": ""
    },
    {
        "num": 2039,
        "en": "concede defeat",
        "pos": "collocation",
        "ipa": "/kənˈsiːd dɪˈfiːt/",
        "vi": "Thừa nhận thất bại",
        "ex": ""
    },
    {
        "num": 2040,
        "en": "concurrent events",
        "pos": "collocation",
        "ipa": "/kənˈkɒm.ɪ.tənt ɪˈvents/",
        "vi": "Sự kiện đồng thời",
        "ex": ""
    },
    {
        "num": 2041,
        "en": "condemn violence",
        "pos": "collocation",
        "ipa": "/kənˈdem ˈvaɪə.ləns/",
        "vi": "Lên án bạo lực",
        "ex": ""
    },
    {
        "num": 2042,
        "en": "condense information",
        "pos": "collocation",
        "ipa": "/kənˈdens ˌɪn.fəˈmeɪ.ʃən/",
        "vi": "Cô đọng thông tin",
        "ex": ""
    },
    {
        "num": 2043,
        "en": "conform to rules",
        "pos": "collocation",
        "ipa": "/kənˈfɔːm tuː ruːlz/",
        "vi": "Tuân theo quy tắc",
        "ex": ""
    },
    {
        "num": 2044,
        "en": "confound expectations",
        "pos": "collocation",
        "ipa": "/kənˈfaʊnd ˌek.spekˈteɪ.ʃənz/",
        "vi": "Làm trái với mong đợi",
        "ex": ""
    },
    {
        "num": 2045,
        "en": "consensus decision",
        "pos": "collocation",
        "ipa": "/kənˈsen.səs dɪˈsɪʒ.ən/",
        "vi": "Quyết định đồng thuận",
        "ex": ""
    },
    {
        "num": 2046,
        "en": "consolidate power",
        "pos": "collocation",
        "ipa": "/kənˈsɒl.ɪ.deɪt ˈpaʊə/",
        "vi": "Củng cố quyền lực",
        "ex": ""
    },
    {
        "num": 2047,
        "en": "constrain growth",
        "pos": "collocation",
        "ipa": "/kənˈstreɪn ɡrəʊθ/",
        "vi": "Hạn chế tăng trưởng",
        "ex": ""
    },
    {
        "num": 2048,
        "en": "contaminate water",
        "pos": "collocation",
        "ipa": "/kənˈtæm.ɪ.neɪt ˈwɔː.tə/",
        "vi": "Làm ô nhiễm nước",
        "ex": ""
    },
    {
        "num": 2049,
        "en": "contemplate future",
        "pos": "collocation",
        "ipa": "/ˈkɒn.təm.pleɪt ˈfjuː.tʃə/",
        "vi": "Suy ngẫm về tương lai",
        "ex": ""
    },
    {
        "num": 2050,
        "en": "contradict statement",
        "pos": "collocation",
        "ipa": "/ˌkɒn.trəˈdɪkt ˈsteɪt.mənt/",
        "vi": "Mâu thuẫn với tuyên bố",
        "ex": ""
    },
    {
        "num": 2051,
        "en": "convey emotion",
        "pos": "collocation",
        "ipa": "/kənˈveɪ ɪˈməʊ.ʃən/",
        "vi": "Truyền tải cảm xúc",
        "ex": ""
    },
    {
        "num": 2052,
        "en": "coordinate effort",
        "pos": "collocation",
        "ipa": "/kəʊˈɔː.dɪ.neɪt ˈef.ət/",
        "vi": "Phối hợp nỗ lực",
        "ex": ""
    },
    {
        "num": 2053,
        "en": "counter argument",
        "pos": "collocation",
        "ipa": "/ˈkaʊn.tər ˈɑː.ɡjə.mənt/",
        "vi": "Lập luận phản bác",
        "ex": ""
    },
    {
        "num": 2054,
        "en": "defer decision",
        "pos": "collocation",
        "ipa": "/dɪˈfɜː dɪˈsɪʒ.ən/",
        "vi": "Trì hoãn quyết định",
        "ex": ""
    },
    {
        "num": 2055,
        "en": "deflect attention",
        "pos": "collocation",
        "ipa": "/dɪˈflekt əˈten.ʃən/",
        "vi": "Đánh lạc hướng sự chú ý",
        "ex": ""
    },
    {
        "num": 2056,
        "en": "delegate task",
        "pos": "collocation",
        "ipa": "/ˈdel.ɪ.ɡeɪt tɑːsk/",
        "vi": "Giao phó nhiệm vụ",
        "ex": ""
    },
    {
        "num": 2057,
        "en": "deliberate action",
        "pos": "collocation",
        "ipa": "/dɪˈlɪb.ər.ət ˈæk.ʃən/",
        "vi": "Hành động có chủ ý",
        "ex": ""
    },
    {
        "num": 2058,
        "en": "denote meaning",
        "pos": "collocation",
        "ipa": "/dɪˈnəʊt ˈmiː.nɪŋ/",
        "vi": "Biểu thị ý nghĩa",
        "ex": ""
    },
    {
        "num": 2059,
        "en": "deny allegation",
        "pos": "collocation",
        "ipa": "/dɪˈnaɪ ˌæl.əˈɡeɪ.ʃən/",
        "vi": "Phủ nhận cáo buộc",
        "ex": ""
    },
    {
        "num": 2060,
        "en": "deplete resource",
        "pos": "collocation",
        "ipa": "/dɪˈpliːt rɪˈzɔːs/",
        "vi": "Cạn kiệt nguồn tài nguyên",
        "ex": ""
    },
    {
        "num": 2061,
        "en": "deplore violence",
        "pos": "collocation",
        "ipa": "/dɪˈplɔː ˈvaɪə.ləns/",
        "vi": "Cực lực phản đối bạo lực",
        "ex": ""
    },
    {
        "num": 2062,
        "en": "designate area",
        "pos": "collocation",
        "ipa": "/ˈdez.ɪɡ.neɪt ˈeə.ri.ə/",
        "vi": "Chỉ định khu vực",
        "ex": ""
    },
    {
        "num": 2063,
        "en": "detect anomaly",
        "pos": "collocation",
        "ipa": "/dɪˈtekt əˈnɒm.ə.li/",
        "vi": "Phát hiện sự bất thường",
        "ex": ""
    },
    {
        "num": 2064,
        "en": "deteriorate health",
        "pos": "collocation",
        "ipa": "/dɪˈtɪə.ri.ə.reɪt helθ/",
        "vi": "Suy giảm sức khỏe",
        "ex": ""
    },
    {
        "num": 2065,
        "en": "determine cause",
        "pos": "collocation",
        "ipa": "/dɪˈtɜː.mɪn kɔːz/",
        "vi": "Xác định nguyên nhân",
        "ex": ""
    },
    {
        "num": 2066,
        "en": "devote time",
        "pos": "collocation",
        "ipa": "/dɪˈvəʊt taɪm/",
        "vi": "Dành thời gian",
        "ex": ""
    },
    {
        "num": 2067,
        "en": "diffuse tension",
        "pos": "collocation",
        "ipa": "/dɪˈfjuːz ˈten.ʃən/",
        "vi": "Xoa dịu căng thẳng",
        "ex": ""
    },
    {
        "num": 2068,
        "en": "discard plan",
        "pos": "collocation",
        "ipa": "/dɪˈskɑːd plæn/",
        "vi": "Loại bỏ kế hoạch",
        "ex": ""
    },
    {
        "num": 2069,
        "en": "discern difference",
        "pos": "collocation",
        "ipa": "/dɪˈsɜːn ˈdɪf.ər.əns/",
        "vi": "Nhận ra sự khác biệt",
        "ex": ""
    },
    {
        "num": 2070,
        "en": "disclose information",
        "pos": "collocation",
        "ipa": "/dɪˈskləʊz ˌɪn.fəˈmeɪ.ʃən/",
        "vi": "Tiết lộ thông tin",
        "ex": ""
    },
    {
        "num": 2071,
        "en": "discrete element",
        "pos": "collocation",
        "ipa": "/dɪˈskriːt ˈel.ɪ.mənt/",
        "vi": "Phần tử riêng biệt",
        "ex": ""
    },
    {
        "num": 2072,
        "en": "disparage effort",
        "pos": "collocation",
        "ipa": "/dɪˈspær.ɪdʒ ˈef.ət/",
        "vi": "Chê bai nỗ lực",
        "ex": ""
    },
    {
        "num": 2073,
        "en": "disperse crowd",
        "pos": "collocation",
        "ipa": "/dɪˈspɜːs kraʊd/",
        "vi": "Giải tán đám đông",
        "ex": ""
    },
    {
        "num": 2074,
        "en": "dispute claim",
        "pos": "collocation",
        "ipa": "/dɪˈspjuːt kleɪm/",
        "vi": "Bác bỏ tuyên bố",
        "ex": ""
    },
    {
        "num": 2075,
        "en": "dissect problem",
        "pos": "collocation",
        "ipa": "/daɪˈsekt ˈprɒb.ləm/",
        "vi": "Mổ xẻ vấn đề",
        "ex": ""
    },
    {
        "num": 2076,
        "en": "dissipate energy",
        "pos": "collocation",
        "ipa": "/ˈdɪs.ɪ.peɪt ˈen.ə.dʒi/",
        "vi": "Tiêu tán năng lượng",
        "ex": ""
    },
    {
        "num": 2077,
        "en": "dissolve partnership",
        "pos": "collocation",
        "ipa": "/dɪˈzɒlv ˈpɑːt.nə.ʃɪp/",
        "vi": "Giải tán quan hệ đối tác",
        "ex": ""
    },
    {
        "num": 2078,
        "en": "distort truth",
        "pos": "collocation",
        "ipa": "/dɪˈstɔːt truːθ/",
        "vi": "Xuyên tạc sự thật",
        "ex": ""
    },
    {
        "num": 2079,
        "en": "diversify portfolio",
        "pos": "collocation",
        "ipa": "/daɪˈvɜː.sɪ.faɪ pɔːtˈfəʊ.li.əʊ/",
        "vi": "Đa dạng hóa danh mục đầu tư",
        "ex": ""
    },
    {
        "num": 2080,
        "en": "divert attention",
        "pos": "collocation",
        "ipa": "/daɪˈvɜːt əˈten.ʃən/",
        "vi": "Chuyển hướng sự chú ý",
        "ex": ""
    },
    {
        "num": 2081,
        "en": "divulge secret",
        "pos": "collocation",
        "ipa": "/daɪˈvʌldʒ ˈsiː.krət/",
        "vi": "Tiết lộ bí mật",
        "ex": ""
    },
    {
        "num": 2082,
        "en": "domain of expertise",
        "pos": "n. phr.",
        "ipa": "/dəʊˈmeɪn əv ˌek.spɜːˈtiːz/",
        "vi": "Lĩnh vực chuyên môn",
        "ex": ""
    },
    {
        "num": 2083,
        "en": "draw inference",
        "pos": "collocation",
        "ipa": "/drɔː ɪnˈfɪə.rəns/",
        "vi": "Rút ra kết luận",
        "ex": ""
    },
    {
        "num": 2084,
        "en": "duplicate document",
        "pos": "collocation",
        "ipa": "/ˈdʒuː.plɪ.kət ˈdɒk.jə.mənt/",
        "vi": "Sao chép tài liệu",
        "ex": ""
    },
    {
        "num": 2085,
        "en": "dynamic environment",
        "pos": "collocation",
        "ipa": "/daɪˈnæm.ɪk ɪnˈvaɪ.rən.mənt/",
        "vi": "Môi trường năng động",
        "ex": ""
    },
    {
        "num": 2086,
        "en": "elevate status",
        "pos": "collocation",
        "ipa": "/ɪˈlev.eɪt ˈsteɪ.təs/",
        "vi": "Nâng cao vị thế",
        "ex": ""
    },
    {
        "num": 2087,
        "en": "eliminate risk",
        "pos": "collocation",
        "ipa": "/ɪˈlɪm.ɪ.neɪt rɪsk/",
        "vi": "Loại trừ rủi ro",
        "ex": ""
    },
    {
        "num": 2088,
        "en": "internal frontier",
        "pos": "collocation",
        "ipa": "/ɪnˈtɜː.nəl ˈfrʌn.tɪə/",
        "vi": "Ranh giới nội bộ",
        "ex": ""
    },
    {
        "num": 2089,
        "en": "labour intensive",
        "pos": "adj. phr.",
        "ipa": "/ˈleɪ.bər ɪnˈten.sɪv/",
        "vi": "Thâm dụng lao động",
        "ex": ""
    },
    {
        "num": 2090,
        "en": "haulage",
        "pos": "n.",
        "ipa": "/ˈhɔː.lɪdʒ/",
        "vi": "Việc vận tải hàng hóa",
        "ex": ""
    },
    {
        "num": 2091,
        "en": "uncoupling",
        "pos": "n.",
        "ipa": "/ʌnˈkʌp.lɪŋ/",
        "vi": "Sự tách rời",
        "ex": ""
    },
    {
        "num": 2092,
        "en": "competitive",
        "pos": "adj.",
        "ipa": "/kəmˈpet.ɪ.tɪv/",
        "vi": "Có tính cạnh tranh",
        "ex": ""
    },
    {
        "num": 2093,
        "en": "syndrome",
        "pos": "n.",
        "ipa": "/ˈsɪn.drəʊm/",
        "vi": "Hội chứng",
        "ex": ""
    },
    {
        "num": 2094,
        "en": "veteran",
        "pos": "n.",
        "ipa": "/ˈvet.ər.ən/",
        "vi": "Người kỳ cựu",
        "ex": ""
    },
    {
        "num": 2095,
        "en": "engagement",
        "pos": "n.",
        "ipa": "/ɪnˈɡeɪdʒ.mənt/",
        "vi": "Sự tham gia, cam kết",
        "ex": ""
    },
    {
        "num": 2096,
        "en": "accomplishment",
        "pos": "n.",
        "ipa": "/əˈkʌm.plɪʃ.mənt/",
        "vi": "Thành tựu",
        "ex": ""
    },
    {
        "num": 2097,
        "en": "march to a different drum",
        "pos": "idiom",
        "ipa": "/mɑːtʃ tuː ə ˈdɪf.ər.ənt drʌm/",
        "vi": "Hành động độc lập, khác biệt",
        "ex": ""
    },
    {
        "num": 2098,
        "en": "sip",
        "pos": "v.",
        "ipa": "/sɪp/",
        "vi": "Nhấp từng ngụm",
        "ex": ""
    },
    {
        "num": 2099,
        "en": "forge",
        "pos": "v.",
        "ipa": "/fɔːdʒ/",
        "vi": "Giả mạo, tạo dựng",
        "ex": ""
    },
    {
        "num": 2100,
        "en": "macabre",
        "pos": "adj.",
        "ipa": "/məˈkɑː.brə/",
        "vi": "Rùng rợn, đáng sợ",
        "ex": ""
    },
    {
        "num": 2101,
        "en": "original",
        "pos": "adj. / n.",
        "ipa": "/əˈrɪdʒ.ən.əl/",
        "vi": "Nguyên bản",
        "ex": ""
    },
    {
        "num": 2102,
        "en": "manuscript",
        "pos": "n.",
        "ipa": "/ˈmæn.jə.skrɪpt/",
        "vi": "Bản thảo",
        "ex": ""
    },
    {
        "num": 2103,
        "en": "reliable",
        "pos": "adj.",
        "ipa": "/rɪˈlaɪ.ə.bəl/",
        "vi": "Đáng tin cậy",
        "ex": ""
    },
    {
        "num": 2104,
        "en": "display",
        "pos": "v. / n.",
        "ipa": "/dɪˈspleɪ/",
        "vi": "Trưng bày",
        "ex": ""
    },
    {
        "num": 2105,
        "en": "primitive",
        "pos": "adj.",
        "ipa": "/ˈprɪm.ɪ.tɪv/",
        "vi": "Nguyên thủy",
        "ex": ""
    },
    {
        "num": 2106,
        "en": "game",
        "pos": "n.",
        "ipa": "/ɡeɪm/",
        "vi": "Thú săn bắn",
        "ex": ""
    },
    {
        "num": 2107,
        "en": "availability",
        "pos": "n.",
        "ipa": "/əˌveɪ.ləˈbɪl.ə.ti/",
        "vi": "Sự có sẵn",
        "ex": ""
    },
    {
        "num": 2108,
        "en": "inexpensive",
        "pos": "adj.",
        "ipa": "/ˌɪn.ɪkˈspen.sɪv/",
        "vi": "Rẻ, không đắt",
        "ex": ""
    },
    {
        "num": 2109,
        "en": "deciduous",
        "pos": "adj.",
        "ipa": "/dɪˈsɪdʒ.u.əs/",
        "vi": "Rụng lá",
        "ex": ""
    },
    {
        "num": 2110,
        "en": "shed",
        "pos": "v.",
        "ipa": "/ʃed/",
        "vi": "Rụng (lá, lông)",
        "ex": ""
    },
    {
        "num": 2111,
        "en": "twig",
        "pos": "n.",
        "ipa": "/twɪɡ/",
        "vi": "Cành cây nhỏ",
        "ex": ""
    },
    {
        "num": 2112,
        "en": "pioneer",
        "pos": "n.",
        "ipa": "/ˌpaɪəˈnɪə/",
        "vi": "Người tiên phong",
        "ex": ""
    },
    {
        "num": 2113,
        "en": "boundary",
        "pos": "n.",
        "ipa": "/ˈbaʊn.dər.i/",
        "vi": "Biên giới, ranh giới",
        "ex": ""
    },
    {
        "num": 2114,
        "en": "oral history",
        "pos": "collocation",
        "ipa": "/ˈɔː.rəl ˈhɪs.tər.i/",
        "vi": "Lịch sử truyền miệng",
        "ex": ""
    },
    {
        "num": 2115,
        "en": "myth",
        "pos": "n.",
        "ipa": "/mɪθ/",
        "vi": "Thần thoại",
        "ex": ""
    },
    {
        "num": 2116,
        "en": "navigation",
        "pos": "n.",
        "ipa": "/ˌnæv.ɪˈɡeɪ.ʃən/",
        "vi": "Sự định hướng",
        "ex": ""
    },
    {
        "num": 2117,
        "en": "unintentional",
        "pos": "adj.",
        "ipa": "/ˌʌn.ɪnˈten.ʃən.əl/",
        "vi": "Vô ý, không chủ ý",
        "ex": ""
    },
    {
        "num": 2118,
        "en": "halt",
        "pos": "v.",
        "ipa": "/hɒlt/",
        "vi": "Ngừng, tạm dừng",
        "ex": ""
    },
    {
        "num": 2119,
        "en": "conservative",
        "pos": "adj.",
        "ipa": "/kənˈsɜː.və.tɪv/",
        "vi": "Bảo thủ, dè dặt",
        "ex": ""
    },
    {
        "num": 2120,
        "en": "multi-storey",
        "pos": "adj.",
        "ipa": "/ˌmʌl.tiˈstɔː.ri/",
        "vi": "Nhiều tầng",
        "ex": ""
    },
    {
        "num": 2121,
        "en": "assert",
        "pos": "v.",
        "ipa": "/əˈsɜːt/",
        "vi": "Khẳng định, quả quyết",
        "ex": ""
    },
    {
        "num": 2122,
        "en": "bold",
        "pos": "adj.",
        "ipa": "/bəʊld/",
        "vi": "Dũng cảm, táo bạo",
        "ex": ""
    },
    {
        "num": 2123,
        "en": "bulk",
        "pos": "n.",
        "ipa": "/bʌlk/",
        "vi": "Phần lớn, kích thước lớn",
        "ex": ""
    },
    {
        "num": 2124,
        "en": "clarity",
        "pos": "n.",
        "ipa": "/ˈklær.ə.ti/",
        "vi": "Sự rõ ràng",
        "ex": ""
    },
    {
        "num": 2125,
        "en": "coherent",
        "pos": "adj.",
        "ipa": "/kəʊˈhɪə.rənt/",
        "vi": "Mạch lạc",
        "ex": ""
    },
    {
        "num": 2126,
        "en": "compatible",
        "pos": "adj.",
        "ipa": "/kəmˈpæt.ə.bəl/",
        "vi": "Tương thích",
        "ex": ""
    },
    {
        "num": 2127,
        "en": "complexity",
        "pos": "n.",
        "ipa": "/kəmˈplek.sə.ti/",
        "vi": "Sự phức tạp",
        "ex": ""
    },
    {
        "num": 2128,
        "en": "configuration",
        "pos": "n.",
        "ipa": "/kənˌfɪɡ.əˈreɪ.ʃən/",
        "vi": "Cấu hình, hình thể",
        "ex": ""
    },
    {
        "num": 2129,
        "en": "correlate",
        "pos": "v.",
        "ipa": "/ˈkɒr.ə.leɪt/",
        "vi": "Tương quan",
        "ex": ""
    },
    {
        "num": 2130,
        "en": "decode",
        "pos": "v.",
        "ipa": "/dɪˈkəʊd/",
        "vi": "Giải mã",
        "ex": ""
    },
    {
        "num": 2131,
        "en": "denote",
        "pos": "v.",
        "ipa": "/dɪˈnəʊt/",
        "vi": "Biểu thị",
        "ex": ""
    },
    {
        "num": 2132,
        "en": "deprive",
        "pos": "v.",
        "ipa": "/dɪˈpraɪv/",
        "vi": "Tước đoạt",
        "ex": ""
    },
    {
        "num": 2133,
        "en": "derive",
        "pos": "v.",
        "ipa": "/dɪˈraɪv/",
        "vi": "Bắt nguồn",
        "ex": ""
    },
    {
        "num": 2134,
        "en": "diverge",
        "pos": "v.",
        "ipa": "/daɪˈvɜːdʒ/",
        "vi": "Rẽ ra, khác biệt",
        "ex": ""
    },
    {
        "num": 2135,
        "en": "elaborate",
        "pos": "adj. / v.",
        "ipa": "/iˈlæb.ər.ət/",
        "vi": "Tỉ mỉ, chi tiết",
        "ex": ""
    },
    {
        "num": 2136,
        "en": "embody",
        "pos": "v.",
        "ipa": "/ɪmˈbɒd.i/",
        "vi": "Hiện thân",
        "ex": ""
    },
    {
        "num": 2137,
        "en": "emit",
        "pos": "v.",
        "ipa": "/ˈem.ɪt/",
        "vi": "Phát ra",
        "ex": ""
    },
    {
        "num": 2138,
        "en": "encompass",
        "pos": "v.",
        "ipa": "/ɪnˈkʌm.pəs/",
        "vi": "Bao gồm",
        "ex": ""
    },
    {
        "num": 2139,
        "en": "entity",
        "pos": "n.",
        "ipa": "/ˈen.tɪ.ti/",
        "vi": "Thực thể",
        "ex": ""
    },
    {
        "num": 2140,
        "en": "explicit",
        "pos": "adj.",
        "ipa": "/ɪkˈsplɪs.ɪt/",
        "vi": "Rõ ràng",
        "ex": ""
    },
    {
        "num": 2141,
        "en": "extract",
        "pos": "v.",
        "ipa": "/ɪkˈstrækt/",
        "vi": "Chiết xuất",
        "ex": ""
    },
    {
        "num": 2142,
        "en": "fragment",
        "pos": "n.",
        "ipa": "/ˈfræɡ.mənt/",
        "vi": "Mảnh vỡ",
        "ex": ""
    },
    {
        "num": 2143,
        "en": "hierarchy",
        "pos": "n.",
        "ipa": "/ˈhaɪə.rɑː.ki/",
        "vi": "Hệ thống cấp bậc",
        "ex": ""
    },
    {
        "num": 2144,
        "en": "ideology",
        "pos": "n.",
        "ipa": "/ˌaɪ.diˈɒl.ə.dʒi/",
        "vi": "Hệ tư tưởng",
        "ex": ""
    },
    {
        "num": 2145,
        "en": "implicitly",
        "pos": "adv.",
        "ipa": "/ɪmˈplɪs.ɪt.li/",
        "vi": "Ngầm",
        "ex": ""
    },
    {
        "num": 2146,
        "en": "incentive",
        "pos": "n.",
        "ipa": "/ɪnˈsen.tɪv/",
        "vi": "Động lực",
        "ex": ""
    },
    {
        "num": 2147,
        "en": "incorporate",
        "pos": "v.",
        "ipa": "/ɪnˈkɔː.pər.eɪt/",
        "vi": "Kết hợp",
        "ex": ""
    },
    {
        "num": 2148,
        "en": "inject",
        "pos": "v.",
        "ipa": "/ɪnˈdʒekt/",
        "vi": "Tiêm",
        "ex": ""
    },
    {
        "num": 2149,
        "en": "insert",
        "pos": "v.",
        "ipa": "/ɪnˈsɜːt/",
        "vi": "Chèn vào",
        "ex": ""
    },
    {
        "num": 2150,
        "en": "integrity",
        "pos": "n.",
        "ipa": "/ɪnˈteɡ.rə.ti/",
        "vi": "Sự chính trực",
        "ex": ""
    },
    {
        "num": 2151,
        "en": "intervene",
        "pos": "v.",
        "ipa": "/ˌɪn.təˈviːn/",
        "vi": "Can thiệp",
        "ex": ""
    },
    {
        "num": 2152,
        "en": "magnitude",
        "pos": "n.",
        "ipa": "/ˈmæɡ.nɪ.tʃuːd/",
        "vi": "Độ lớn, tầm quan trọng",
        "ex": ""
    },
    {
        "num": 2153,
        "en": "margin",
        "pos": "n.",
        "ipa": "/ˈmɑː.dʒɪn/",
        "vi": "Lề, mép",
        "ex": ""
    },
    {
        "num": 2154,
        "en": "metaphor",
        "pos": "n.",
        "ipa": "/ˈmet.ə.fɔː/",
        "vi": "Ẩn dụ",
        "ex": ""
    },
    {
        "num": 2155,
        "en": "migrate",
        "pos": "v.",
        "ipa": "/maɪˈɡreɪt/",
        "vi": "Di cư",
        "ex": ""
    },
    {
        "num": 2156,
        "en": "minimal",
        "pos": "adj.",
        "ipa": "/ˈmɪn.ɪ.məl/",
        "vi": "Tối thiểu",
        "ex": ""
    },
    {
        "num": 2157,
        "en": "modify",
        "pos": "v.",
        "ipa": "/ˈmɒd.ɪ.faɪ/",
        "vi": "Sửa đổi",
        "ex": ""
    },
    {
        "num": 2158,
        "en": "narrative",
        "pos": "n.",
        "ipa": "/ˈnær.ə.tɪv/",
        "vi": "Câu chuyện",
        "ex": ""
    },
    {
        "num": 2159,
        "en": "notation",
        "pos": "n.",
        "ipa": "/nəʊˈteɪ.ʃən/",
        "vi": "Ký hiệu",
        "ex": ""
    },
    {
        "num": 2160,
        "en": "novelty",
        "pos": "n.",
        "ipa": "/ˈnɒv.əl.ti/",
        "vi": "Sự mới lạ",
        "ex": ""
    },
    {
        "num": 2161,
        "en": "overlap",
        "pos": "v.",
        "ipa": "/ˌəʊ.vəˈlæp/",
        "vi": "Trồng lặp",
        "ex": ""
    },
    {
        "num": 2162,
        "en": "oversee",
        "pos": "v.",
        "ipa": "/ˌəʊ.vəˈsiː/",
        "vi": "Giám sát",
        "ex": ""
    },
    {
        "num": 2163,
        "en": "paradigm",
        "pos": "n.",
        "ipa": "/ˈpær.ə.daɪm/",
        "vi": "Mô hình",
        "ex": ""
    },
    {
        "num": 2164,
        "en": "peripheral",
        "pos": "adj.",
        "ipa": "/pəˈrɪf.ər.əl/",
        "vi": "Ngoại vi",
        "ex": ""
    },
    {
        "num": 2165,
        "en": "persist",
        "pos": "v.",
        "ipa": "/pəˈsɪst/",
        "vi": "Kiên trì",
        "ex": ""
    },
    {
        "num": 2166,
        "en": "pose",
        "pos": "v.",
        "ipa": "/pəʊz/",
        "vi": "Đặt ra",
        "ex": ""
    },
    {
        "num": 2167,
        "en": "proceed",
        "pos": "v.",
        "ipa": "/prəˈsiːd/",
        "vi": "Tiếp tục",
        "ex": ""
    },
    {
        "num": 2168,
        "en": "random",
        "pos": "adj.",
        "ipa": "/ˈræn.dəm/",
        "vi": "Ngẫu nhiên",
        "ex": ""
    },
    {
        "num": 2169,
        "en": "refine",
        "pos": "v.",
        "ipa": "/rɪˈfaɪn/",
        "vi": "Tinh chế, trau chuốt",
        "ex": ""
    },
    {
        "num": 2170,
        "en": "regime",
        "pos": "n.",
        "ipa": "/reɪˈʒiːm/",
        "vi": "Chế độ",
        "ex": ""
    },
    {
        "num": 2171,
        "en": "reproduce",
        "pos": "v.",
        "ipa": "/ˌriː.prəˈdʒuːs/",
        "vi": "Tái sản xuất",
        "ex": ""
    },
    {
        "num": 2172,
        "en": "retain",
        "pos": "v.",
        "ipa": "/rɪˈteɪn/",
        "vi": "Giữ lại",
        "ex": ""
    },
    {
        "num": 2173,
        "en": "sequence",
        "pos": "n.",
        "ipa": "/ˈsiː.kwəns/",
        "vi": "Trình tự",
        "ex": ""
    },
    {
        "num": 2174,
        "en": "simultaneous",
        "pos": "adj.",
        "ipa": "/ˌsɪm.əlˈteɪ.ni.əs/",
        "vi": "Đồng thời",
        "ex": ""
    },
    {
        "num": 2175,
        "en": "specify",
        "pos": "v.",
        "ipa": "/ˈspes.ɪ.faɪ/",
        "vi": "Chỉ định",
        "ex": ""
    },
    {
        "num": 2176,
        "en": "sphere",
        "pos": "n.",
        "ipa": "/sfɪə/",
        "vi": "Hình cầu, phạm vi",
        "ex": ""
    },
    {
        "num": 2177,
        "en": "substitute",
        "pos": "v. / n.",
        "ipa": "/ˈsʌb.stɪ.tʃuːt/",
        "vi": "Thay thế",
        "ex": ""
    },
    {
        "num": 2178,
        "en": "suspend",
        "pos": "v.",
        "ipa": "/səˈspend/",
        "vi": "Đình chỉ",
        "ex": ""
    },
    {
        "num": 2179,
        "en": "symmetry",
        "pos": "n.",
        "ipa": "/ˈsɪm.ə.tri/",
        "vi": "Sự đối xứng",
        "ex": ""
    },
    {
        "num": 2180,
        "en": "synthesize",
        "pos": "v.",
        "ipa": "/ˈsɪn.θə.saɪz/",
        "vi": "Tổng hợp",
        "ex": ""
    },
    {
        "num": 2181,
        "en": "template",
        "pos": "n.",
        "ipa": "/ˈtem.pleɪt/",
        "vi": "Bản mẫu",
        "ex": ""
    },
    {
        "num": 2182,
        "en": "tension",
        "pos": "n.",
        "ipa": "/ˈten.ʃən/",
        "vi": "Sự căng thẳng",
        "ex": ""
    },
    {
        "num": 2183,
        "en": "trace",
        "pos": "v. / n.",
        "ipa": "/treɪs/",
        "vi": "Theo dấu",
        "ex": ""
    },
    {
        "num": 2184,
        "en": "transparent",
        "pos": "adj.",
        "ipa": "/trænˈspær.ənt/",
        "vi": "Trong suốt",
        "ex": ""
    },
    {
        "num": 2185,
        "en": "uniform",
        "pos": "adj.",
        "ipa": "/ˈjuː.nɪ.fɔːm/",
        "vi": "Đồng nhất",
        "ex": ""
    },
    {
        "num": 2186,
        "en": "valid",
        "pos": "adj.",
        "ipa": "/ˈvæl.ɪd/",
        "vi": "Hợp lệ",
        "ex": ""
    },
    {
        "num": 2187,
        "en": "violate",
        "pos": "v.",
        "ipa": "/ˈvaɪ.ə.leɪt/",
        "vi": "Vi phạm",
        "ex": ""
    },
    {
        "num": 2188,
        "en": "yield",
        "pos": "v. / n.",
        "ipa": "/jiːld/",
        "vi": "Sản lượng, mang lại",
        "ex": ""
    },
    {
        "num": 2189,
        "en": "controversy",
        "pos": "n.",
        "ipa": "/ˈkɒn.trə.vɜː.si/",
        "vi": "Sự tranh cãi",
        "ex": ""
    },
    {
        "num": 2190,
        "en": "inevitable",
        "pos": "adj.",
        "ipa": "/ɪˈnev.ɪ.tə.bəl/",
        "vi": "Không thể tránh khỏi",
        "ex": ""
    },
    {
        "num": 2191,
        "en": "invoke",
        "pos": "v.",
        "ipa": "/ɪnˈvəʊk/",
        "vi": "Kêu gọi, viện dẫn",
        "ex": ""
    },
    {
        "num": 2192,
        "en": "passive",
        "pos": "adj.",
        "ipa": "/ˈpæs.ɪv/",
        "vi": "Bị động",
        "ex": ""
    },
    {
        "num": 2193,
        "en": "scenario",
        "pos": "n.",
        "ipa": "/sɪˈnɑː.ri.əʊ/",
        "vi": "Kịch bản",
        "ex": ""
    },
    {
        "num": 2194,
        "en": "thesis",
        "pos": "n.",
        "ipa": "/ˈθiː.sɪs/",
        "vi": "Luận án",
        "ex": ""
    },
    {
        "num": 2195,
        "en": "volume",
        "pos": "n.",
        "ipa": "/ˈvɒl.juːm/",
        "vi": "Thể tích",
        "ex": ""
    },
    {
        "num": 2196,
        "en": "luxurious",
        "pos": "adj.",
        "ipa": "/lʌɡˈʒʊə.ri.əs/",
        "vi": "Sang trọng, xa xỉ (C1)",
        "ex": ""
    },
    {
        "num": 2197,
        "en": "fine material",
        "pos": "collocation",
        "ipa": "/faɪn məˈtɪə.ri.əl/",
        "vi": "Chất liệu mịn màng, cao cấp",
        "ex": ""
    },
    {
        "num": 2198,
        "en": "cocoon",
        "pos": "n.",
        "ipa": "/kəˈkuːn/",
        "vi": "Cái kén (tằm)",
        "ex": ""
    },
    {
        "num": 2199,
        "en": "protective shell",
        "pos": "collocation",
        "ipa": "/prəˈtek.tɪv ʃel/",
        "vi": "Lớp vỏ bảo vệ",
        "ex": ""
    },
    {
        "num": 2200,
        "en": "mulberry silkworm",
        "pos": "n. phr.",
        "ipa": "/ˈmʌl.bər.i ˈsɪlk.wɜːm/",
        "vi": "Con tằm ăn lá dâu",
        "ex": ""
    },
    {
        "num": 2201,
        "en": "insect larvae",
        "pos": "n. phr.",
        "ipa": "/ˈɪn.sekt ˈlɑː.viː/",
        "vi": "Ấu trùng côn trùng",
        "ex": ""
    },
    {
        "num": 2202,
        "en": "legend has it that",
        "pos": "idiom",
        "ipa": "/ˈledʒ.ənd hæz ɪt ðæt/",
        "vi": "Theo truyền thuyết kể rằng (C2)",
        "ex": ""
    },
    {
        "num": 2203,
        "en": "account",
        "pos": "n.",
        "ipa": "/əˈkaʊnt/",
        "vi": "Bản báo cáo, câu chuyện kể lại (C1)",
        "ex": ""
    },
    {
        "num": 2204,
        "en": "destruction",
        "pos": "n.",
        "ipa": "/dɪˈstrʌk.ʃən/",
        "vi": "Sự tàn phá, sự hủy hoại (B2)",
        "ex": ""
    },
    {
        "num": 2205,
        "en": "unravel",
        "pos": "v.",
        "ipa": "/ʌnˈræv.əl/",
        "vi": "Tháo gỡ, xổ ra (sợi chỉ/bí ẩn) (C2)",
        "ex": ""
    },
    {
        "num": 2206,
        "en": "fine thread",
        "pos": "collocation",
        "ipa": "/faɪn θred/",
        "vi": "Sợi chỉ mảnh",
        "ex": ""
    },
    {
        "num": 2207,
        "en": "wind",
        "pos": "v.",
        "ipa": "/waɪnd/",
        "vi": "Cuốn, cuộn (sợi dây) (B2)",
        "ex": ""
    },
    {
        "num": 2208,
        "en": "subsequently",
        "pos": "adv.",
        "ipa": "/ˈsʌb.sɪ.kwənt.li/",
        "vi": "Sau đó (C1)",
        "ex": ""
    },
    {
        "num": 2209,
        "en": "rear",
        "pos": "v.",
        "ipa": "/rɪər/",
        "vi": "Nuôi dưỡng (động vật, trẻ em) (C1)",
        "ex": ""
    },
    {
        "num": 2210,
        "en": "grove",
        "pos": "n.",
        "ipa": "/ɡrəʊv/",
        "vi": "Lùm cây, khu rừng nhỏ (C2)",
        "ex": ""
    },
    {
        "num": 2211,
        "en": "devise",
        "pos": "v.",
        "ipa": "/dɪˈvaɪz/",
        "vi": "Phát minh, nghĩ ra (C2)",
        "ex": ""
    },
    {
        "num": 2212,
        "en": "reel",
        "pos": "n.",
        "ipa": "/riːl/",
        "vi": "Cuộn, ống chỉ",
        "ex": ""
    },
    {
        "num": 2213,
        "en": "weave into fabric",
        "pos": "collocation",
        "ipa": "/wiːv ˈɪn.tuː ˈfæb.rɪk/",
        "vi": "Dệt thành vải",
        "ex": ""
    },
    {
        "num": 2214,
        "en": "cultivation",
        "pos": "n.",
        "ipa": "/ˌkʌl.tɪˈveɪ.ʃən/",
        "vi": "Sự canh tác, sự chăn nuôi (C1)",
        "ex": ""
    },
    {
        "num": 2215,
        "en": "millennium",
        "pos": "n.",
        "ipa": "/mɪˈlen.i.əm/",
        "vi": "Thiên niên kỷ (C1)",
        "ex": ""
    },
    {
        "num": 2216,
        "en": "originally",
        "pos": "adv.",
        "ipa": "/əˈrɪdʒ.ən.əl.i/",
        "vi": "Ban đầu (B2)",
        "ex": ""
    },
    {
        "num": 2217,
        "en": "solely",
        "pos": "adv.",
        "ipa": "/ˈsəʊl.li/",
        "vi": "Độc nhất, chỉ riêng (C1)",
        "ex": ""
    },
    {
        "num": 2218,
        "en": "restrict to",
        "pos": "phr. v.",
        "ipa": "/rɪˈstrɪkt tuː/",
        "vi": "Giới hạn đối với (B2)",
        "ex": ""
    },
    {
        "num": 2219,
        "en": "harvesting",
        "pos": "n.",
        "ipa": "/ˈhɑː.vɪs.tɪŋ/",
        "vi": "Việc thu hoạch",
        "ex": ""
    },
    {
        "num": 2220,
        "en": "peasant",
        "pos": "n.",
        "ipa": "/ˈpez.ənt/",
        "vi": "Nông dân, tá điền (C1)",
        "ex": ""
    },
    {
        "num": 2221,
        "en": "caste",
        "pos": "n.",
        "ipa": "/kɑːst/",
        "vi": "Đẳng cấp, tầng lớp xã hội (C2)",
        "ex": ""
    },
    {
        "num": 2222,
        "en": "diplomatic gift",
        "pos": "collocation",
        "ipa": "/ˌdɪp.ləˈmæt.ɪk ɡɪft/",
        "vi": "Món quà ngoại giao",
        "ex": ""
    },
    {
        "num": 2223,
        "en": "instrument",
        "pos": "n.",
        "ipa": "/ˈɪn.strə.mənt/",
        "vi": "Nhạc cụ, dụng cụ (B2)",
        "ex": ""
    },
    {
        "num": 2224,
        "en": "currency",
        "pos": "n.",
        "ipa": "/ˈkʌr.ən.si/",
        "vi": "Tiền tệ (B2)",
        "ex": ""
    },
    {
        "num": 2225,
        "en": "trade route",
        "pos": "collocation",
        "ipa": "/treɪd ruːt/",
        "vi": "Tuyến đường thương mại",
        "ex": ""
    },
    {
        "num": 2226,
        "en": "merchant",
        "pos": "n.",
        "ipa": "/ˈmɜː.tʃənt/",
        "vi": "Thương gia, nhà buôn (C1)",
        "ex": ""
    },
    {
        "num": 2227,
        "en": "precious commodity",
        "pos": "collocation",
        "ipa": "/ˈpreʃ.əs kəˈmɒd.ə.ti/",
        "vi": "Hàng hóa quý giá",
        "ex": ""
    },
    {
        "num": 2228,
        "en": "strictly guard",
        "pos": "collocation",
        "ipa": "/ˈstrɪkt.li ɡɑːd/",
        "vi": "Canh giữ nghiêm ngặt",
        "ex": ""
    },
    {
        "num": 2229,
        "en": "smuggle",
        "pos": "v.",
        "ipa": "/ˈsmʌɡ.əl/",
        "vi": "Buôn lậu, lén lút mang qua (C2)",
        "ex": ""
    },
    {
        "num": 2230,
        "en": "monk",
        "pos": "n.",
        "ipa": "/mʌŋk/",
        "vi": "Thầy tu, nhà sư (B2)",
        "ex": ""
    },
    {
        "num": 2231,
        "en": "hollow",
        "pos": "adj.",
        "ipa": "/ˈhɒl.əʊ/",
        "vi": "Rỗng tuếch (B2)",
        "ex": ""
    },
    {
        "num": 2232,
        "en": "conquer",
        "pos": "v.",
        "ipa": "/ˈkɒŋ.kər/",
        "vi": "Chinh phục, xâm chiếm (C1)",
        "ex": ""
    },
    {
        "num": 2233,
        "en": "imperial",
        "pos": "adj.",
        "ipa": "/ɪmˈpɪə.ri.əl/",
        "vi": "Thuộc về hoàng gia, đế quốc (C2)",
        "ex": ""
    },
    {
        "num": 2234,
        "en": "empire",
        "pos": "n.",
        "ipa": "/ˈem.paɪər/",
        "vi": "Đế quốc (B2)",
        "ex": ""
    },
    {
        "num": 2235,
        "en": "industrialisation",
        "pos": "n.",
        "ipa": "/ɪnˌdʌs.tri.ə.laɪˈzeɪ.ʃən/",
        "vi": "Sự công nghiệp hóa (C1)",
        "ex": ""
    },
    {
        "num": 2236,
        "en": "downfall",
        "pos": "n.",
        "ipa": "/ˈdaʊn.fɔːl/",
        "vi": "Sự sụp đổ (C2)",
        "ex": ""
    },
    {
        "num": 2237,
        "en": "parachute",
        "pos": "n.",
        "ipa": "/ˈpær.ə.ʃuːt/",
        "vi": "Cái dù (nhảy dù) (B2)",
        "ex": ""
    },
    {
        "num": 2238,
        "en": "synthetic",
        "pos": "adj.",
        "ipa": "/sɪnˈθet.ɪk/",
        "vi": "Nhân tạo, tổng hợp (C1)",
        "ex": ""
    },
    {
        "num": 2239,
        "en": "stifle",
        "pos": "v.",
        "ipa": "/ˈstaɪ.fəl/",
        "vi": "Bóp nghẹt, kìm hãm (C2)",
        "ex": ""
    },
    {
        "num": 2240,
        "en": "re-emerge",
        "pos": "v.",
        "ipa": "/ˌriː.ɪˈmɜːdʒ/",
        "vi": "Xuất hiện trở lại",
        "ex": ""
    },
    {
        "num": 2241,
        "en": "raw material",
        "pos": "collocation",
        "ipa": "/rɔː məˈtɪə.ri.əl/",
        "vi": "Nguyên liệu thô (B2)",
        "ex": ""
    },
    {
        "num": 2242,
        "en": "bark",
        "pos": "n.",
        "ipa": "/bɑːk/",
        "vi": "Vỏ cây (C1)",
        "ex": ""
    },
    {
        "num": 2243,
        "en": "elastic",
        "pos": "adj.",
        "ipa": "/ɪˈlæs.tɪk/",
        "vi": "Đàn hồi, co giãn (C1)",
        "ex": ""
    },
    {
        "num": 2244,
        "en": "buoyant",
        "pos": "adj.",
        "ipa": "/ˈbɔɪ.ənt/",
        "vi": "Nổi trên mặt nước, sôi nổi (C2)",
        "ex": ""
    },
    {
        "num": 2245,
        "en": "fire-resistant",
        "pos": "adj.",
        "ipa": "/ˈfaɪə.rɪˌzɪs.tənt/",
        "vi": "Chống cháy",
        "ex": ""
    },
    {
        "num": 2246,
        "en": "seal",
        "pos": "v.",
        "ipa": "/siːl/",
        "vi": "Niêm phong, bịt kín (C1)",
        "ex": ""
    },
    {
        "num": 2247,
        "en": "sarcophagi",
        "pos": "n.",
        "ipa": "/sɑːˈkɒf.ə.ɡaɪ/",
        "vi": "Quan tài đá (thời cổ đại)",
        "ex": ""
    },
    {
        "num": 2248,
        "en": "beehive",
        "pos": "n.",
        "ipa": "/ˈbiː.haɪv/",
        "vi": "Tổ ong",
        "ex": ""
    },
    {
        "num": 2249,
        "en": "insulate",
        "pos": "v.",
        "ipa": "/ˈɪn.sjə.leɪt/",
        "vi": "Cách nhiệt, cách điện (C1)",
        "ex": ""
    },
    {
        "num": 2250,
        "en": "trunk",
        "pos": "n.",
        "ipa": "/trʌŋk/",
        "vi": "Thân cây (B2)",
        "ex": ""
    },
    {
        "num": 2251,
        "en": "cellular structure",
        "pos": "collocation",
        "ipa": "/ˈsel.jə.lər ˈstrʌk.tʃər/",
        "vi": "Cấu trúc tế bào",
        "ex": ""
    },
    {
        "num": 2252,
        "en": "replicate",
        "pos": "v.",
        "ipa": "/ˈrep.lɪ.keɪt/",
        "vi": "Tái tạo, sao chép (C2)",
        "ex": ""
    },
    {
        "num": 2253,
        "en": "squash",
        "pos": "v.",
        "ipa": "/skwɒʃ/",
        "vi": "Ép, nén, đè bẹp (C1)",
        "ex": ""
    },
    {
        "num": 2254,
        "en": "spring back",
        "pos": "phr. v.",
        "ipa": "/sprɪŋ bæk/",
        "vi": "Bật nảy trở lại",
        "ex": ""
    },
    {
        "num": 2255,
        "en": "release pressure",
        "pos": "collocation",
        "ipa": "/rɪˈliːs ˈpreʃ.ər/",
        "vi": "Giải phóng áp lực",
        "ex": ""
    },
    {
        "num": 2256,
        "en": "grape vine",
        "pos": "n. phr.",
        "ipa": "/ɡreɪp vaɪn/",
        "vi": "Cây nho",
        "ex": ""
    },
    {
        "num": 2257,
        "en": "thrive in",
        "pos": "phr. v.",
        "ipa": "/θraɪv ɪn/",
        "vi": "Phát triển tốt trong (môi trường) (C1)",
        "ex": ""
    },
    {
        "num": 2258,
        "en": "moisture",
        "pos": "n.",
        "ipa": "/ˈmɔɪs.tʃər/",
        "vi": "Hơi ẩm, độ ẩm (C1)",
        "ex": ""
    },
    {
        "num": 2259,
        "en": "nutrient",
        "pos": "n.",
        "ipa": "/ˈnjuː.tri.ənt/",
        "vi": "Chất dinh dưỡng (C1)",
        "ex": ""
    },
    {
        "num": 2260,
        "en": "strip",
        "pos": "v.",
        "ipa": "/strɪp/",
        "vi": "Lột (vỏ, quần áo) (C1)",
        "ex": ""
    },
    {
        "num": 2261,
        "en": "harvest",
        "pos": "v.",
        "ipa": "/ˈhɑː.vɪst/",
        "vi": "Thu hoạch (B2)",
        "ex": ""
    },
    {
        "num": 2262,
        "en": "mechanical",
        "pos": "adj.",
        "ipa": "/məˈkæn.ɪ.kəl/",
        "vi": "Thuộc về cơ khí, máy móc (B2)",
        "ex": ""
    },
    {
        "num": 2263,
        "en": "acoustic",
        "pos": "adj.",
        "ipa": "/əˈkuː.stɪk/",
        "vi": "Thuộc về âm thanh, thính giác (C1)",
        "ex": ""
    },
    {
        "num": 2264,
        "en": "thermal",
        "pos": "adj.",
        "ipa": "/ˈθɜː.məl/",
        "vi": "Thuộc về nhiệt (C1)",
        "ex": ""
    },
    {
        "num": 2265,
        "en": "spoil",
        "pos": "v.",
        "ipa": "/spɔɪl/",
        "vi": "Làm hỏng, làm ôi thiu (B2)",
        "ex": ""
    },
    {
        "num": 2266,
        "en": "chemical compound",
        "pos": "collocation",
        "ipa": "/ˈkem.ɪ.kəl ˈkɒm.paʊnd/",
        "vi": "Hợp chất hóa học",
        "ex": ""
    },
    {
        "num": 2267,
        "en": "mould",
        "pos": "n.",
        "ipa": "/məʊld/",
        "vi": "Nấm mốc (C2)",
        "ex": ""
    },
    {
        "num": 2268,
        "en": "interaction",
        "pos": "n.",
        "ipa": "/ˌɪn.təˈræk.ʃən/",
        "vi": "Sự tương tác (C1)",
        "ex": ""
    },
    {
        "num": 2269,
        "en": "stopper",
        "pos": "n.",
        "ipa": "/ˈstɒp.ər/",
        "vi": "Nút chai",
        "ex": ""
    },
    {
        "num": 2270,
        "en": "differentiate",
        "pos": "v.",
        "ipa": "/ˌdɪf.əˈren.ʃi.eɪt/",
        "vi": "Phân biệt (C1)",
        "ex": ""
    },
    {
        "num": 2271,
        "en": "productive activity",
        "pos": "collocation",
        "ipa": "/prəˈdʌk.tɪv ækˈtɪv.ɪ.ti/",
        "vi": "Hoạt động sản xuất",
        "ex": ""
    },
    {
        "num": 2272,
        "en": "heavily dependent on",
        "pos": "collocation",
        "ipa": "/ˈhev.ɪ.li dɪˈpen.dənt ɒn/",
        "vi": "Phụ thuộc nặng nề vào",
        "ex": ""
    },
    {
        "num": 2273,
        "en": "entrenched",
        "pos": "adj.",
        "ipa": "/ɪnˈtrentʃt/",
        "vi": "Ăn sâu bám rễ, khó thay đổi (C2)",
        "ex": ""
    },
    {
        "num": 2274,
        "en": "volatility",
        "pos": "n.",
        "ipa": "/ˌvɒl.əˈtɪl.ə.ti/",
        "vi": "Sự biến động (giá cả) (C2)",
        "ex": ""
    },
    {
        "num": 2275,
        "en": "input market",
        "pos": "collocation",
        "ipa": "/ˈɪn.pʊt ˈmɑː.kɪt/",
        "vi": "Thị trường đầu vào",
        "ex": ""
    },
    {
        "num": 2276,
        "en": "smallholder",
        "pos": "n.",
        "ipa": "/ˈsmɔːlˌhəʊl.dər/",
        "vi": "Hộ nông dân nhỏ",
        "ex": ""
    },
    {
        "num": 2277,
        "en": "counter-intuitively",
        "pos": "adv.",
        "ipa": "/ˌkaʊn.tər.ɪnˈtʃuː.ɪ.tɪv.li/",
        "vi": "Ngược đời, trái với lẽ thường (C2)",
        "ex": ""
    },
    {
        "num": 2278,
        "en": "address a challenge",
        "pos": "collocation",
        "ipa": "/əˈdres ə ˈtʃæl.ɪndʒ/",
        "vi": "Giải quyết một thách thức",
        "ex": ""
    },
    {
        "num": 2279,
        "en": "underlying cause",
        "pos": "collocation",
        "ipa": "/ˌʌn.dəˈlaɪ.ɪŋ kɔːz/",
        "vi": "Nguyên nhân sâu xa (C1)",
        "ex": ""
    },
    {
        "num": 2280,
        "en": "inability",
        "pos": "n.",
        "ipa": "/ˌɪn.əˈbɪl.ə.ti/",
        "vi": "Sự bất lực, không có khả năng (C1)",
        "ex": ""
    },
    {
        "num": 2281,
        "en": "dependency",
        "pos": "n.",
        "ipa": "/dɪˈpen.dən.si/",
        "vi": "Sự phụ thuộc (C2)",
        "ex": ""
    },
    {
        "num": 2282,
        "en": "fossil fuel",
        "pos": "collocation",
        "ipa": "/ˈfɒs.əl ˌfjuː.əl/",
        "vi": "Nhiên liệu hóa thạch (B2)",
        "ex": ""
    },
    {
        "num": 2283,
        "en": "unsupportive",
        "pos": "adj.",
        "ipa": "/ˌʌn.səˈpɔː.tɪv/",
        "vi": "Không ủng hộ, không hỗ trợ",
        "ex": ""
    },
    {
        "num": 2284,
        "en": "essayist",
        "pos": "n.",
        "ipa": "/ˈes.eɪ.ɪst/",
        "vi": "Người viết tiểu luận",
        "ex": ""
    },
    {
        "num": 2285,
        "en": "intervention",
        "pos": "n.",
        "ipa": "/ˌɪn.təˈven.ʃən/",
        "vi": "Sự can thiệp (C1)",
        "ex": ""
    },
    {
        "num": 2286,
        "en": "procurement",
        "pos": "n.",
        "ipa": "/prəˈkjʊə.mənt/",
        "vi": "Sự thu mua (hàng hóa) (C2)",
        "ex": ""
    },
    {
        "num": 2287,
        "en": "dictate",
        "pos": "v.",
        "ipa": "/dɪkˈteɪt/",
        "vi": "Ra lệnh, sai khiến, quyết định (C1)",
        "ex": ""
    },
    {
        "num": 2288,
        "en": "private sector",
        "pos": "collocation",
        "ipa": "/ˈpraɪ.vət ˈsek.tər/",
        "vi": "Khu vực kinh tế tư nhân",
        "ex": ""
    },
    {
        "num": 2289,
        "en": "intermediary",
        "pos": "n.",
        "ipa": "/ˌɪn.təˈmiː.di.ə.ri/",
        "vi": "Người trung gian, khâu trung gian (C2)",
        "ex": ""
    },
    {
        "num": 2290,
        "en": "purchaser",
        "pos": "n.",
        "ipa": "/ˈpɜː.tʃə.sər/",
        "vi": "Người mua (C1)",
        "ex": ""
    },
    {
        "num": 2291,
        "en": "cooperative",
        "pos": "n.",
        "ipa": "/kəʊˈɒp.ər.ə.tɪv/",
        "vi": "Hợp tác xã (C1)",
        "ex": ""
    },
    {
        "num": 2292,
        "en": "stakeholder",
        "pos": "n.",
        "ipa": "/ˈsteɪkˌhəʊl.dər/",
        "vi": "Các bên liên quan (C1)",
        "ex": ""
    },
    {
        "num": 2293,
        "en": "bargaining power",
        "pos": "collocation",
        "ipa": "/ˈbɑː.ɡɪn.ɪŋ paʊər/",
        "vi": "Quyền thương lượng",
        "ex": ""
    },
    {
        "num": 2294,
        "en": "distribution",
        "pos": "n.",
        "ipa": "/ˌdɪs.trɪˈbjuː.ʃən/",
        "vi": "Sự phân phối (C1)",
        "ex": ""
    },
    {
        "num": 2295,
        "en": "consumer",
        "pos": "n.",
        "ipa": "/kənˈsjuː.mər/",
        "vi": "Người tiêu dùng (B2)",
        "ex": ""
    },
    {
        "num": 2296,
        "en": "compensate",
        "pos": "v.",
        "ipa": "/ˈkɒm.pən.seɪt/",
        "vi": "Bồi thường, đền bù (C1)",
        "ex": ""
    },
    {
        "num": 2297,
        "en": "weather-related",
        "pos": "adj.",
        "ipa": "/ˈweð.ər.rɪˌleɪ.tɪd/",
        "vi": "Liên quan đến thời tiết",
        "ex": ""
    },
    {
        "num": 2298,
        "en": "adoption",
        "pos": "n.",
        "ipa": "/əˈdɒp.ʃən/",
        "vi": "Sự áp dụng, việc nhận nuôi (C1)",
        "ex": ""
    },
    {
        "num": 2299,
        "en": "variability",
        "pos": "n.",
        "ipa": "/ˌveə.ri.əˈbɪl.ə.ti/",
        "vi": "Sự biến động, tính hay thay đổi (C2)",
        "ex": ""
    },
    {
        "num": 2300,
        "en": "airborne",
        "pos": "adj.",
        "ipa": "/ˈeə.bɔːn/",
        "vi": "Ở trên không, di chuyển bằng đường không (C2)",
        "ex": ""
    },
    {
        "num": 2301,
        "en": "reintroduction",
        "pos": "n.",
        "ipa": "/ˌriː.ɪn.trəˈdʌk.ʃən/",
        "vi": "Sự đưa (động vật/thực vật) về lại tự nhiên",
        "ex": ""
    },
    {
        "num": 2302,
        "en": "spiny",
        "pos": "adj.",
        "ipa": "/ˈspaɪ.ni/",
        "vi": "Có nhiều gai",
        "ex": ""
    },
    {
        "num": 2303,
        "en": "uneven",
        "pos": "adj.",
        "ipa": "/ʌnˈiː.vən/",
        "vi": "Không bằng phẳng, gồ ghề (C1)",
        "ex": ""
    },
    {
        "num": 2304,
        "en": "plain",
        "pos": "n.",
        "ipa": "/pleɪn/",
        "vi": "Đồng bằng (B2)",
        "ex": ""
    },
    {
        "num": 2305,
        "en": "lunar landscape",
        "pos": "collocation",
        "ipa": "/ˈluː.nər ˈlænd.skeɪp/",
        "vi": "Phong cảnh giống mặt trăng (cằn cỗi)",
        "ex": ""
    },
    {
        "num": 2306,
        "en": "vegetation",
        "pos": "n.",
        "ipa": "/ˌvedʒ.ɪˈteɪ.ʃən/",
        "vi": "Thảm thực vật (C1)",
        "ex": ""
    },
    {
        "num": 2307,
        "en": "skirt",
        "pos": "n.",
        "ipa": "/skɜːt/",
        "vi": "Rìa, mép (núi/rừng) (C2)",
        "ex": ""
    },
    {
        "num": 2308,
        "en": "respite",
        "pos": "n.",
        "ipa": "/ˈres.paɪt/",
        "vi": "Thời gian nghỉ ngơi, sự dịu đi (C2)",
        "ex": ""
    },
    {
        "num": 2309,
        "en": "terrain",
        "pos": "n.",
        "ipa": "/təˈreɪn/",
        "vi": "Địa hình (C1)",
        "ex": ""
    },
    {
        "num": 2310,
        "en": "inhospitable",
        "pos": "adj.",
        "ipa": "/ˌɪn.hɒsˈpɪt.ə.bəl/",
        "vi": "Khắc nghiệt, không thể sống được (C2)",
        "ex": ""
    },
    {
        "num": 2311,
        "en": "ancestral",
        "pos": "adj.",
        "ipa": "/ænˈses.trəl/",
        "vi": "Thuộc về tổ tiên (C2)",
        "ex": ""
    },
    {
        "num": 2312,
        "en": "exceed",
        "pos": "v.",
        "ipa": "/ɪkˈsiːd/",
        "vi": "Vượt quá (C1)",
        "ex": ""
    },
    {
        "num": 2313,
        "en": "archipelago",
        "pos": "n.",
        "ipa": "/ˌɑː.kɪˈpel.ə.ɡəʊ/",
        "vi": "Quần đảo",
        "ex": ""
    },
    {
        "num": 2314,
        "en": "pirate",
        "pos": "n.",
        "ipa": "/ˈpaɪə.rət/",
        "vi": "Cướp biển (B2)",
        "ex": ""
    },
    {
        "num": 2315,
        "en": "whaling ship",
        "pos": "n. phr.",
        "ipa": "/ˈweɪ.lɪŋ ʃɪp/",
        "vi": "Tàu săn cá voi",
        "ex": ""
    },
    {
        "num": 2316,
        "en": "exploitation",
        "pos": "n.",
        "ipa": "/ˌek.splɔɪˈteɪ.ʃən/",
        "vi": "Sự khai thác, sự bóc lột (C1)",
        "ex": ""
    },
    {
        "num": 2317,
        "en": "captive-bred",
        "pos": "adj.",
        "ipa": "/ˈkæp.tɪv bred/",
        "vi": "Được nhân giống trong môi trường nuôi nhốt",
        "ex": ""
    },
    {
        "num": 2318,
        "en": "alien species",
        "pos": "collocation",
        "ipa": "/ˈeɪ.li.ən ˈspiː.ʃiːz/",
        "vi": "Loài ngoại lai",
        "ex": ""
    },
    {
        "num": 2319,
        "en": "logistical challenge",
        "pos": "collocation",
        "ipa": "/ləˈdʒɪs.tɪ.kəl ˈtʃæl.ɪndʒ/",
        "vi": "Thử thách về hậu cần",
        "ex": ""
    },
    {
        "num": 2320,
        "en": "helicopter",
        "pos": "n.",
        "ipa": "/ˈhel.ɪˌkɒp.tər/",
        "vi": "Máy bay trực thăng (B1)",
        "ex": ""
    },
    {
        "num": 2321,
        "en": "payload",
        "pos": "n.",
        "ipa": "/ˈpeɪ.ləʊd/",
        "vi": "Tải trọng (hàng hóa mang theo)",
        "ex": ""
    },
    {
        "num": 2322,
        "en": "roam",
        "pos": "v.",
        "ipa": "/rəʊm/",
        "vi": "Đi lang thang (C1)",
        "ex": ""
    },
    {
        "num": 2323,
        "en": "territory",
        "pos": "n.",
        "ipa": "/ˈter.ɪ.tər.i/",
        "vi": "Lãnh thổ, khu vực (B2)",
        "ex": ""
    },
    {
        "num": 2324,
        "en": "mature",
        "pos": "v. / adj.",
        "ipa": "/məˈtʃʊər/",
        "vi": "Trưởng thành, chín chắn (B2)",
        "ex": ""
    },
    {
        "num": 2325,
        "en": "hazard",
        "pos": "n.",
        "ipa": "/ˈhæz.əd/",
        "vi": "Mối nguy hiểm (C1)",
        "ex": ""
    },
    {
        "num": 2326,
        "en": "trail",
        "pos": "n.",
        "ipa": "/treɪl/",
        "vi": "Dấu vết, đường mòn (C1)",
        "ex": ""
    },
    {
        "num": 2327,
        "en": "outnumber",
        "pos": "v.",
        "ipa": "/ˌaʊtˈnʌm.bər/",
        "vi": "Áp đảo về số lượng (C1)",
        "ex": ""
    },
    {
        "num": 2328,
        "en": "obsidian",
        "pos": "n.",
        "ipa": "/əbˈsɪd.i.ən/",
        "vi": "Đá vỏ chai (Đá núi lửa)",
        "ex": ""
    },
    {
        "num": 2329,
        "en": "volcano",
        "pos": "n.",
        "ipa": "/vɒlˈkeɪ.nəʊ/",
        "vi": "Núi lửa (B2)",
        "ex": ""
    },
    {
        "num": 2330,
        "en": "intense",
        "pos": "adj.",
        "ipa": "/ɪnˈtens/",
        "vi": "Cực kỳ, dữ dội, cường độ cao (C1)",
        "ex": ""
    },
    {
        "num": 2331,
        "en": "eruption",
        "pos": "n.",
        "ipa": "/ɪˈrʌp.ʃən/",
        "vi": "Sự phun trào (núi lửa) (C1)",
        "ex": ""
    },
    {
        "num": 2332,
        "en": "spear",
        "pos": "n.",
        "ipa": "/spɪər/",
        "vi": "Cái giáo, cái mác",
        "ex": ""
    },
    {
        "num": 2333,
        "en": "archaeologist",
        "pos": "n.",
        "ipa": "/ˌɑː.kiˈɒl.ə.dʒɪst/",
        "vi": "Nhà khảo cổ học (C1)",
        "ex": ""
    },
    {
        "num": 2334,
        "en": "glaze",
        "pos": "n.",
        "ipa": "/ɡleɪz/",
        "vi": "Lớp men (gốm, sứ)",
        "ex": ""
    },
    {
        "num": 2335,
        "en": "bead",
        "pos": "n.",
        "ipa": "/biːd/",
        "vi": "Hạt chuỗi (vòng cổ)",
        "ex": ""
    },
    {
        "num": 2336,
        "en": "molten",
        "pos": "adj.",
        "ipa": "/ˈməʊl.tən/",
        "vi": "Nóng chảy (kim loại, thủy tinh) (C2)",
        "ex": ""
    },
    {
        "num": 2337,
        "en": "glass blowing",
        "pos": "collocation",
        "ipa": "/ɡlɑːs ˈbləʊ.ɪŋ/",
        "vi": "Nghề thổi thủy tinh",
        "ex": ""
    },
    {
        "num": 2338,
        "en": "impurity",
        "pos": "n.",
        "ipa": "/ɪmˈpjʊə.rə.ti/",
        "vi": "Tạp chất (C2)",
        "ex": ""
    },
    {
        "num": 2339,
        "en": "tint",
        "pos": "v.",
        "ipa": "/tɪnt/",
        "vi": "Nhuộm màu nhẹ, pha màu",
        "ex": ""
    },
    {
        "num": 2340,
        "en": "collapse",
        "pos": "v.",
        "ipa": "/kəˈlæps/",
        "vi": "Sụp đổ (C1)",
        "ex": ""
    },
    {
        "num": 2341,
        "en": "reputation",
        "pos": "n.",
        "ipa": "/ˌrep.jəˈteɪ.ʃən/",
        "vi": "Danh tiếng (B2)",
        "ex": ""
    },
    {
        "num": 2342,
        "en": "craft",
        "pos": "n.",
        "ipa": "/krɑːft/",
        "vi": "Nghề thủ công (B2)",
        "ex": ""
    },
    {
        "num": 2343,
        "en": "counter-clockwise",
        "pos": "adv.",
        "ipa": "/ˌkaʊn.təˈklɒk.waɪz/",
        "vi": "Ngược chiều kim đồng hồ",
        "ex": ""
    },
    {
        "num": 2344,
        "en": "optical",
        "pos": "adj.",
        "ipa": "/ˈɒp.tɪ.kəl/",
        "vi": "Thuộc về quang học, thị giác (C1)",
        "ex": ""
    },
    {
        "num": 2345,
        "en": "astronomical",
        "pos": "adj.",
        "ipa": "/ˌæs.trəˈnɒm.ɪ.kəl/",
        "vi": "Thuộc về thiên văn học (C1)",
        "ex": ""
    },
    {
        "num": 2346,
        "en": "engineering",
        "pos": "n.",
        "ipa": "/ˌen.dʒɪˈnɪə.rɪŋ/",
        "vi": "Ngành kỹ thuật (B2)",
        "ex": ""
    },
    {
        "num": 2347,
        "en": "revolutionise",
        "pos": "v.",
        "ipa": "/ˌrev.əˈluː.ʃən.aɪz/",
        "vi": "Cách mạng hóa (C1)",
        "ex": ""
    },
    {
        "num": 2348,
        "en": "architecture",
        "pos": "n.",
        "ipa": "/ˈɑː.kɪ.tek.tʃər/",
        "vi": "Kiến trúc (B2)",
        "ex": ""
    },
    {
        "num": 2349,
        "en": "transparency",
        "pos": "n.",
        "ipa": "/trænˈspær.ən.si/",
        "vi": "Sự trong suốt, minh bạch (C1)",
        "ex": ""
    },
    {
        "num": 2350,
        "en": "domestic",
        "pos": "adj.",
        "ipa": "/dəˈmes.tɪk/",
        "vi": "Trong nhà, nội địa (B2)",
        "ex": ""
    },
    {
        "num": 2351,
        "en": "recycling",
        "pos": "n.",
        "ipa": "/ˌriːˈsaɪ.klɪŋ/",
        "vi": "Việc tái chế (B2)",
        "ex": ""
    },
    {
        "num": 2352,
        "en": "cull",
        "pos": "v.",
        "ipa": "/kʌl/",
        "vi": "Thu gom, phân loại (loại bỏ thứ kém)",
        "ex": ""
    },
    {
        "num": 2353,
        "en": "furnace",
        "pos": "n.",
        "ipa": "/ˈfɜː.nɪs/",
        "vi": "Lò luyện kim, lò nung",
        "ex": ""
    },
    {
        "num": 2354,
        "en": "environmental",
        "pos": "adj.",
        "ipa": "/ɪnˌvaɪ.rənˈmen.təl/",
        "vi": "Thuộc về môi trường (B2)",
        "ex": ""
    },
    {
        "num": 2355,
        "en": "versatile",
        "pos": "adj.",
        "ipa": "/ˈvɜː.sə.taɪl/",
        "vi": "Đa năng, linh hoạt (C1)",
        "ex": ""
    },
    {
        "num": 2356,
        "en": "container",
        "pos": "n.",
        "ipa": "/kənˈteɪ.nər/",
        "vi": "Đồ chứa, hộp đựng (B2)",
        "ex": ""
    },
    {
        "num": 2357,
        "en": "fleet",
        "pos": "n.",
        "ipa": "/fliːt/",
        "vi": "Hạm đội, đội tàu (C1)",
        "ex": ""
    },
    {
        "num": 2358,
        "en": "off the coast",
        "pos": "phrase",
        "ipa": "/ɒf ðə kəʊst/",
        "vi": "Ngoài khơi",
        "ex": ""
    },
    {
        "num": 2359,
        "en": "vessel",
        "pos": "n.",
        "ipa": "/ˈves.əl/",
        "vi": "Tàu lớn, thuyền (C1)",
        "ex": ""
    },
    {
        "num": 2360,
        "en": "outdated",
        "pos": "adj.",
        "ipa": "/ˌaʊtˈdeɪ.tɪd/",
        "vi": "Lỗi thời, lạc hậu (C1)",
        "ex": ""
    },
    {
        "num": 2361,
        "en": "overladen",
        "pos": "adj.",
        "ipa": "/ˌəʊ.vəˈleɪ.dən/",
        "vi": "Chở quá tải",
        "ex": ""
    },
    {
        "num": 2362,
        "en": "mishandle",
        "pos": "v.",
        "ipa": "/ˌmɪsˈhæn.dəl/",
        "vi": "Quản lý tồi, xử lý sai (C2)",
        "ex": ""
    },
    {
        "num": 2363,
        "en": "undisciplined",
        "pos": "adj.",
        "ipa": "/ʌnˈdɪs.ə.plɪnd/",
        "vi": "Vô kỷ luật",
        "ex": ""
    },
    {
        "num": 2364,
        "en": "undisputed",
        "pos": "adj.",
        "ipa": "/ˌʌn.dɪˈspjuː.tɪd/",
        "vi": "Không thể chối cãi, không bàn cãi (C2)",
        "ex": ""
    },
    {
        "num": 2365,
        "en": "sink",
        "pos": "v.",
        "ipa": "/sɪŋk/",
        "vi": "Chìm (tàu, thuyền) (B1)",
        "ex": ""
    },
    {
        "num": 2366,
        "en": "seabed",
        "pos": "n.",
        "ipa": "/ˈsiː.bed/",
        "vi": "Đáy biển",
        "ex": ""
    },
    {
        "num": 2367,
        "en": "starboard",
        "pos": "n.",
        "ipa": "/ˈstɑː.bəd/",
        "vi": "Mạn phải (tàu thuyền)",
        "ex": ""
    },
    {
        "num": 2368,
        "en": "angle",
        "pos": "n.",
        "ipa": "/ˈæŋ.ɡəl/",
        "vi": "Góc độ (B2)",
        "ex": ""
    },
    {
        "num": 2369,
        "en": "hull",
        "pos": "n.",
        "ipa": "/hʌl/",
        "vi": "Thân tàu (phần dưới nước)",
        "ex": ""
    },
    {
        "num": 2370,
        "en": "trap",
        "pos": "n. / v.",
        "ipa": "/træp/",
        "vi": "Cạm bẫy, giữ lại (B2)",
        "ex": ""
    },
    {
        "num": 2371,
        "en": "erode",
        "pos": "v.",
        "ipa": "/ɪˈrəʊd/",
        "vi": "Xói mòn, ăn mòn (C1)",
        "ex": ""
    },
    {
        "num": 2372,
        "en": "marine organism",
        "pos": "collocation",
        "ipa": "/məˈriːn ˈɔː.ɡən.ɪ.zəm/",
        "vi": "Sinh vật biển",
        "ex": ""
    },
    {
        "num": 2373,
        "en": "intact",
        "pos": "adj.",
        "ipa": "/ɪnˈtækt/",
        "vi": "Còn nguyên vẹn (C1)",
        "ex": ""
    },
    {
        "num": 2374,
        "en": "gear",
        "pos": "n.",
        "ipa": "/ɡɪər/",
        "vi": "Trang bị, thiết bị (B2)",
        "ex": ""
    },
    {
        "num": 2375,
        "en": "timber",
        "pos": "n.",
        "ipa": "/ˈtɪm.bər/",
        "vi": "Gỗ xây dựng (C1)",
        "ex": ""
    },
    {
        "num": 2376,
        "en": "protrude",
        "pos": "v.",
        "ipa": "/prəˈtruːd/",
        "vi": "Nhô ra, thò ra",
        "ex": ""
    },
    {
        "num": 2377,
        "en": "uncover",
        "pos": "v.",
        "ipa": "/ʌnˈkʌv.ər/",
        "vi": "Khám phá, đào lên (C1)",
        "ex": ""
    },
    {
        "num": 2378,
        "en": "fade",
        "pos": "v.",
        "ipa": "/feɪd/",
        "vi": "Phai mờ, biến mất dần (C1)",
        "ex": ""
    },
    {
        "num": 2379,
        "en": "climax",
        "pos": "n.",
        "ipa": "/ˈklaɪ.mæks/",
        "vi": "Đỉnh điểm, cao trào (C2)",
        "ex": ""
    },
    {
        "num": 2380,
        "en": "framework",
        "pos": "n.",
        "ipa": "/ˈfreɪm.wɜːk/",
        "vi": "Khung, sườn (C1)",
        "ex": ""
    },
    {
        "num": 2381,
        "en": "salvage",
        "pos": "n. / v.",
        "ipa": "/ˈsæl.vɪdʒ/",
        "vi": "Sự trục vớt, cứu hộ (C2)",
        "ex": ""
    },
    {
        "num": 2382,
        "en": "collaboration",
        "pos": "n.",
        "ipa": "/kəˌlæb.əˈreɪ.ʃən/",
        "vi": "Sự hợp tác (C1)",
        "ex": ""
    },
    {
        "num": 2383,
        "en": "amateur",
        "pos": "n.",
        "ipa": "/ˈæm.ə.tər/",
        "vi": "Người nghiệp dư (C1)",
        "ex": ""
    },
    {
        "num": 2384,
        "en": "archive",
        "pos": "n.",
        "ipa": "/ˈɑː.kaɪv/",
        "vi": "Cơ quan lưu trữ, kho lưu trữ (C1)",
        "ex": ""
    },
    {
        "num": 2385,
        "en": "artefact",
        "pos": "n.",
        "ipa": "/ˈɑː.tə.fækt/",
        "vi": "Cổ vật, đồ tạo tác (C1)",
        "ex": ""
    },
    {
        "num": 2386,
        "en": "cannon",
        "pos": "n.",
        "ipa": "/ˈkæn.ən/",
        "vi": "Súng đại bác",
        "ex": ""
    },
    {
        "num": 2387,
        "en": "bow",
        "pos": "n.",
        "ipa": "/bəʊ/",
        "vi": "Cây cung",
        "ex": ""
    },
    {
        "num": 2388,
        "en": "bowman",
        "pos": "n.",
        "ipa": "/ˈbəʊ.mən/",
        "vi": "Cung thủ",
        "ex": ""
    },
    {
        "num": 2389,
        "en": "skeleton",
        "pos": "n.",
        "ipa": "/ˈskel.ə.tən/",
        "vi": "Bộ xương (B2)",
        "ex": ""
    },
    {
        "num": 2390,
        "en": "identity",
        "pos": "n.",
        "ipa": "/aɪˈden.tɪ.ti/",
        "vi": "Danh tính (B2)",
        "ex": ""
    },
    {
        "num": 2391,
        "en": "biomedical",
        "pos": "adj.",
        "ipa": "/ˌbaɪ.əʊˈmed.ɪ.kəl/",
        "vi": "Y sinh học",
        "ex": ""
    },
    {
        "num": 2392,
        "en": "precious",
        "pos": "adj.",
        "ipa": "/ˈpreʃ.əs/",
        "vi": "Quý giá (B2)",
        "ex": ""
    },
    {
        "num": 2393,
        "en": "untangle",
        "pos": "v.",
        "ipa": "/ʌnˈtæŋ.ɡəl/",
        "vi": "Gỡ rối, làm sáng tỏ",
        "ex": ""
    },
    {
        "num": 2394,
        "en": "split",
        "pos": "v.",
        "ipa": "/splɪt/",
        "vi": "Chia rẽ, tách ra (B2)",
        "ex": ""
    },
    {
        "num": 2395,
        "en": "virtually",
        "pos": "adv.",
        "ipa": "/ˈvɜː.tʃu.ə.li/",
        "vi": "Hầu như, gần như (C1)",
        "ex": ""
    },
    {
        "num": 2396,
        "en": "fraternal",
        "pos": "adj.",
        "ipa": "/frəˈtɜː.nəl/",
        "vi": "Thuộc về anh em, (sinh đôi) khác trứng",
        "ex": ""
    },
    {
        "num": 2397,
        "en": "quantify",
        "pos": "v.",
        "ipa": "/ˈkwɒn.tɪ.faɪ/",
        "vi": "Định lượng (C2)",
        "ex": ""
    },
    {
        "num": 2398,
        "en": "extent",
        "pos": "n.",
        "ipa": "/ɪkˈstent/",
        "vi": "Mức độ, phạm vi (B2)",
        "ex": ""
    },
    {
        "num": 2399,
        "en": "ailment",
        "pos": "n.",
        "ipa": "/ˈeɪl.mənt/",
        "vi": "Căn bệnh (nhẹ)",
        "ex": ""
    },
    {
        "num": 2400,
        "en": "heredity",
        "pos": "n.",
        "ipa": "/hɪˈred.ə.ti/",
        "vi": "Sự di truyền (C2)",
        "ex": ""
    },
    {
        "num": 2401,
        "en": "pinpoint",
        "pos": "v.",
        "ipa": "/ˈpɪn.pɔɪnt/",
        "vi": "Xác định chính xác (vị trí/nguyên nhân) (C2)",
        "ex": ""
    },
    {
        "num": 2402,
        "en": "inheritance",
        "pos": "n.",
        "ipa": "/ɪnˈher.ɪ.təns/",
        "vi": "Sự thừa kế, di truyền (C2)",
        "ex": ""
    },
    {
        "num": 2403,
        "en": "interplay",
        "pos": "n.",
        "ipa": "/ˈɪn.tə.pleɪ/",
        "vi": "Sự tác động qua lại, tương tác (C2)",
        "ex": ""
    },
    {
        "num": 2404,
        "en": "determine",
        "pos": "v.",
        "ipa": "/dɪˈtɜː.mɪn/",
        "vi": "Quyết định, xác định (C1)",
        "ex": ""
    },
    {
        "num": 2405,
        "en": "date back to",
        "pos": "phr. v.",
        "ipa": "/deɪt bæk tuː/",
        "vi": "Bắt nguồn từ, có từ thời",
        "ex": ""
    },
    {
        "num": 2406,
        "en": "coin",
        "pos": "v.",
        "ipa": "/kɔɪn/",
        "vi": "Tạo ra một từ/cụm từ mới (C2)",
        "ex": ""
    },
    {
        "num": 2407,
        "en": "phrase",
        "pos": "n.",
        "ipa": "/freɪz/",
        "vi": "Cụm từ (B2)",
        "ex": ""
    },
    {
        "num": 2408,
        "en": "statistical",
        "pos": "adj.",
        "ipa": "/stəˈtɪs.tɪ.kəl/",
        "vi": "Thuộc về thống kê (C1)",
        "ex": ""
    },
    {
        "num": 2409,
        "en": "invisible",
        "pos": "adj.",
        "ipa": "/ɪnˈvɪz.ə.bəl/",
        "vi": "Vô hình (B2)",
        "ex": ""
    },
    {
        "num": 2410,
        "en": "epigenetics",
        "pos": "n.",
        "ipa": "/ˌep.ɪ.dʒəˈnet.ɪks/",
        "vi": "Biểu sinh học (Sinh học)",
        "ex": ""
    },
    {
        "num": 2411,
        "en": "component",
        "pos": "n.",
        "ipa": "/kəmˈpəʊ.nənt/",
        "vi": "Thành phần, cấu thành (C1)",
        "ex": ""
    },
    {
        "num": 2412,
        "en": "mechanism",
        "pos": "n.",
        "ipa": "/ˈmek.ə.nɪ.zəm/",
        "vi": "Cơ chế (C1)",
        "ex": ""
    },
    {
        "num": 2413,
        "en": "pregnancy",
        "pos": "n.",
        "ipa": "/ˈpreɡ.nən.si/",
        "vi": "Sự mang thai (B2)",
        "ex": ""
    },
    {
        "num": 2414,
        "en": "hardwired",
        "pos": "adj.",
        "ipa": "/hɑːdˈwaɪəd/",
        "vi": "Được lập trình sẵn, bẩm sinh",
        "ex": ""
    },
    {
        "num": 2415,
        "en": "unalterable",
        "pos": "adj.",
        "ipa": "/ʌnˈɒl.tər.ə.bəl/",
        "vi": "Không thể thay đổi",
        "ex": ""
    },
    {
        "num": 2416,
        "en": "groundbreaking",
        "pos": "adj.",
        "ipa": "/ˈɡraʊndˌbreɪ.kɪŋ/",
        "vi": "Đột phá, mang tính tiên phong (C1)",
        "ex": ""
    },
    {
        "num": 2417,
        "en": "randomly",
        "pos": "adv.",
        "ipa": "/ˈræn.dəm.li/",
        "vi": "Một cách ngẫu nhiên (B2)",
        "ex": ""
    },
    {
        "num": 2418,
        "en": "schizophrenia",
        "pos": "n.",
        "ipa": "/ˌskɪt.səˈfriː.ni.ə/",
        "vi": "Bệnh tâm thần phân liệt",
        "ex": ""
    },
    {
        "num": 2419,
        "en": "bipolar",
        "pos": "adj.",
        "ipa": "/baɪˈpəʊ.lər/",
        "vi": "Rối loạn lưỡng cực (Tâm lý học)",
        "ex": ""
    },
    {
        "num": 2420,
        "en": "proponent",
        "pos": "n.",
        "ipa": "/prəˈpəʊ.nənt/",
        "vi": "Người ủng hộ, người đề xướng (C2)",
        "ex": ""
    },
    {
        "num": 2421,
        "en": "vertical",
        "pos": "adj.",
        "ipa": "/ˈvɜː.tɪ.kəl/",
        "vi": "Thẳng đứng (C1)",
        "ex": ""
    },
    {
        "num": 2422,
        "en": "year-round",
        "pos": "adj.",
        "ipa": "/ˌjɪəˈraʊnd/",
        "vi": "Quanh năm",
        "ex": ""
    },
    {
        "num": 2423,
        "en": "extreme weather",
        "pos": "collocation",
        "ipa": "/ɪkˈstriːm ˈweð.ər/",
        "vi": "Thời tiết cực đoan",
        "ex": ""
    },
    {
        "num": 2424,
        "en": "take their toll",
        "pos": "idiom",
        "ipa": "/teɪk ðeər təʊl/",
        "vi": "Gây thiệt hại lớn",
        "ex": ""
    },
    {
        "num": 2425,
        "en": "optimum",
        "pos": "adj.",
        "ipa": "/ˈɒp.tɪ.məm/",
        "vi": "Tối ưu, tốt nhất (C1)",
        "ex": ""
    },
    {
        "num": 2426,
        "en": "pest",
        "pos": "n.",
        "ipa": "/pest/",
        "vi": "Sâu bọ, côn trùng gây hại (C1)",
        "ex": ""
    },
    {
        "num": 2427,
        "en": "eliminate",
        "pos": "v.",
        "ipa": "/ɪˈlɪm.ɪ.neɪt/",
        "vi": "Loại trừ, loại bỏ (C1)",
        "ex": ""
    },
    {
        "num": 2428,
        "en": "fertiliser",
        "pos": "n.",
        "ipa": "/ˈfɜː.tɪ.laɪ.zər/",
        "vi": "Phân bón (C1)",
        "ex": ""
    },
    {
        "num": 2429,
        "en": "reliance",
        "pos": "n.",
        "ipa": "/rɪˈlaɪ.əns/",
        "vi": "Sự phụ thuộc (C2)",
        "ex": ""
    },
    {
        "num": 2430,
        "en": "tractor",
        "pos": "n.",
        "ipa": "/ˈtræk.tər/",
        "vi": "Máy kéo (nông nghiệp)",
        "ex": ""
    },
    {
        "num": 2431,
        "en": "plough",
        "pos": "n. / v.",
        "ipa": "/plaʊ/",
        "vi": "Cái cày, cày bừa",
        "ex": ""
    },
    {
        "num": 2432,
        "en": "shipping",
        "pos": "n.",
        "ipa": "/ˈʃɪp.ɪŋ/",
        "vi": "Sự vận chuyển hàng hóa (C1)",
        "ex": ""
    },
    {
        "num": 2433,
        "en": "drawback",
        "pos": "n.",
        "ipa": "/ˈdrɔː.bæk/",
        "vi": "Điểm hạn chế, nhược điểm (C1)",
        "ex": ""
    },
    {
        "num": 2434,
        "en": "artificial light",
        "pos": "collocation",
        "ipa": "/ˌɑː.tɪˈfɪʃ.əl laɪt/",
        "vi": "Ánh sáng nhân tạo",
        "ex": ""
    },
    {
        "num": 2435,
        "en": "variation",
        "pos": "n.",
        "ipa": "/ˌveə.riˈeɪ.ʃən/",
        "vi": "Sự biến thiên, sự thay đổi (C2)",
        "ex": ""
    },
    {
        "num": 2436,
        "en": "implication",
        "pos": "n.",
        "ipa": "/ˌɪm.plɪˈkeɪ.ʃən/",
        "vi": "Hàm ý, hệ quả (C2)",
        "ex": ""
    },
    {
        "num": 2437,
        "en": "facility",
        "pos": "n.",
        "ipa": "/fəˈsɪl.ə.ti/",
        "vi": "Cơ sở vật chất (B2)",
        "ex": ""
    },
    {
        "num": 2438,
        "en": "ambitious",
        "pos": "adj.",
        "ipa": "/æmˈbɪʃ.əs/",
        "vi": "Đầy tham vọng (B2)",
        "ex": ""
    },
    {
        "num": 2439,
        "en": "grand",
        "pos": "adj.",
        "ipa": "/ɡrænd/",
        "vi": "Vĩ đại, hoành tráng (B2)",
        "ex": ""
    },
    {
        "num": 2440,
        "en": "strategy",
        "pos": "n.",
        "ipa": "/ˈstræt.ə.dʒi/",
        "vi": "Chiến lược (B2)",
        "ex": ""
    },
    {
        "num": 2441,
        "en": "formation",
        "pos": "n.",
        "ipa": "/fɔːˈmeɪ.ʃən/",
        "vi": "Sự hình thành (C1)",
        "ex": ""
    },
    {
        "num": 2442,
        "en": "scheme",
        "pos": "n.",
        "ipa": "/skiːm/",
        "vi": "Kế hoạch, dự án (C1)",
        "ex": ""
    },
    {
        "num": 2443,
        "en": "solar radiation",
        "pos": "collocation",
        "ipa": "/ˈsəʊ.lər ˌreɪ.diˈeɪ.ʃən/",
        "vi": "Bức xạ mặt trời",
        "ex": ""
    },
    {
        "num": 2444,
        "en": "scrutinise",
        "pos": "v.",
        "ipa": "/ˈskruː.tɪ.naɪz/",
        "vi": "Nhìn chăm chú, xem xét kỹ lưỡng (C2)",
        "ex": ""
    },
    {
        "num": 2445,
        "en": "caution",
        "pos": "n.",
        "ipa": "/ˈkɔː.ʃən/",
        "vi": "Sự cẩn trọng (C1)",
        "ex": ""
    },
    {
        "num": 2446,
        "en": "faith",
        "pos": "n.",
        "ipa": "/feɪθ/",
        "vi": "Niềm tin (C1)",
        "ex": ""
    },
    {
        "num": 2447,
        "en": "outpace",
        "pos": "v.",
        "ipa": "/ˌaʊtˈpeɪs/",
        "vi": "Phát triển nhanh hơn, vượt qua",
        "ex": ""
    },
    {
        "num": 2448,
        "en": "capacity",
        "pos": "n.",
        "ipa": "/kəˈpæs.ə.ti/",
        "vi": "Sức chứa, khả năng (B2)",
        "ex": ""
    },
    {
        "num": 2449,
        "en": "context",
        "pos": "n.",
        "ipa": "/ˈkɒn.tekst/",
        "vi": "Bối cảnh (B2)",
        "ex": ""
    },
    {
        "num": 2450,
        "en": "motivation",
        "pos": "n.",
        "ipa": "/ˌməʊ.tɪˈveɪ.ʃən/",
        "vi": "Động lực (B2)",
        "ex": ""
    },
    {
        "num": 2451,
        "en": "afford",
        "pos": "v.",
        "ipa": "/əˈfɔːd/",
        "vi": "Có khả năng chi trả, mang lại (B2)",
        "ex": ""
    },
    {
        "num": 2452,
        "en": "crucial role",
        "pos": "collocation",
        "ipa": "/ˈkruː.ʃəl rəʊl/",
        "vi": "Vai trò then chốt",
        "ex": ""
    },
    {
        "num": 2453,
        "en": "relatively",
        "pos": "adv.",
        "ipa": "/ˈrel.ə.tɪv.li/",
        "vi": "Tương đối (B2)",
        "ex": ""
    },
    {
        "num": 2454,
        "en": "creation",
        "pos": "n.",
        "ipa": "/kriˈeɪ.ʃən/",
        "vi": "Sự tạo ra, sự sáng tạo (B2)",
        "ex": ""
    },
    {
        "num": 2455,
        "en": "segment",
        "pos": "n.",
        "ipa": "/ˈseɡ.mənt/",
        "vi": "Phân khúc, mảng (C1)",
        "ex": ""
    },
    {
        "num": 2456,
        "en": "fragmented",
        "pos": "adj.",
        "ipa": "/fræɡˈmen.tɪd/",
        "vi": "Phân mảnh, vỡ vụn (C2)",
        "ex": ""
    },
    {
        "num": 2457,
        "en": "dynamic",
        "pos": "adj.",
        "ipa": "/daɪˈnæm.ɪk/",
        "vi": "Năng động, liên tục thay đổi (B2)",
        "ex": ""
    },
    {
        "num": 2458,
        "en": "profound",
        "pos": "adj.",
        "ipa": "/prəˈfaʊnd/",
        "vi": "Sâu sắc, uyên thâm (C2)",
        "ex": ""
    },
    {
        "num": 2459,
        "en": "metric",
        "pos": "n.",
        "ipa": "/ˈmet.rɪk/",
        "vi": "Đơn vị đo lường, chỉ số",
        "ex": ""
    },
    {
        "num": 2460,
        "en": "concept",
        "pos": "n.",
        "ipa": "/ˈkɒn.sept/",
        "vi": "Khái niệm (B2)",
        "ex": ""
    },
    {
        "num": 2461,
        "en": "subjective",
        "pos": "adj.",
        "ipa": "/səbˈdʒek.tɪv/",
        "vi": "Chủ quan (C1)",
        "ex": ""
    },
    {
        "num": 2462,
        "en": "methodology",
        "pos": "n.",
        "ipa": "/ˌmeθ.əˈdɒl.ə.dʒi/",
        "vi": "Phương pháp luận (C1)",
        "ex": ""
    },
    {
        "num": 2463,
        "en": "discrepancy",
        "pos": "n.",
        "ipa": "/dɪˈskrep.ən.si/",
        "vi": "Sự sai lệch, sự khác biệt (C2)",
        "ex": ""
    },
    {
        "num": 2464,
        "en": "variable",
        "pos": "n.",
        "ipa": "/ˈveə.ri.ə.bəl/",
        "vi": "Biến số (C1)",
        "ex": ""
    },
    {
        "num": 2465,
        "en": "validity",
        "pos": "n.",
        "ipa": "/vəˈlɪd.ə.ti/",
        "vi": "Tính hợp lệ, tính đúng đắn (C2)",
        "ex": ""
    },
    {
        "num": 2466,
        "en": "underlying",
        "pos": "adj.",
        "ipa": "/ˌʌn.dəˈlaɪ.ɪŋ/",
        "vi": "Nằm ẩn bên dưới, sâu xa (C1)",
        "ex": ""
    },
    {
        "num": 2467,
        "en": "objective",
        "pos": "adj.",
        "ipa": "/əbˈdʒek.tɪv/",
        "vi": "Khách quan (C1)",
        "ex": ""
    },
    {
        "num": 2468,
        "en": "perceive",
        "pos": "v.",
        "ipa": "/pəˈsiːv/",
        "vi": "Nhận thức, nhìn nhận (C1)",
        "ex": ""
    },
    {
        "num": 2469,
        "en": "implicit",
        "pos": "adj.",
        "ipa": "/ɪmˈplɪs.ɪt/",
        "vi": "Ngầm, không nói ra (C2)",
        "ex": ""
    },
    {
        "num": 2470,
        "en": "terminology",
        "pos": "n.",
        "ipa": "/ˌtɜː.mɪˈnɒl.ə.dʒi/",
        "vi": "Thuật ngữ chuyên ngành (C1)",
        "ex": ""
    },
    {
        "num": 2471,
        "en": "consensus",
        "pos": "n.",
        "ipa": "/kənˈsen.səs/",
        "vi": "Sự đồng thuận (C1)",
        "ex": ""
    },
    {
        "num": 2472,
        "en": "dispute",
        "pos": "n. / v.",
        "ipa": "/dɪˈspjuːt/",
        "vi": "Tranh cãi, tranh chấp (C1)",
        "ex": ""
    },
    {
        "num": 2473,
        "en": "formulate",
        "pos": "v.",
        "ipa": "/ˈfɔː.mjə.leɪt/",
        "vi": "Hình thành, xây dựng (công thức, ý tưởng) (C2)",
        "ex": ""
    },
    {
        "num": 2474,
        "en": "notion",
        "pos": "n.",
        "ipa": "/ˈnəʊ.ʃən/",
        "vi": "Khái niệm, quan niệm (C1)",
        "ex": ""
    },
    {
        "num": 2475,
        "en": "quantitative",
        "pos": "adj.",
        "ipa": "/ˈkwɒn.tɪ.tə.tɪv/",
        "vi": "Định lượng (số lượng) (C1)",
        "ex": ""
    },
    {
        "num": 2476,
        "en": "exploit",
        "pos": "v.",
        "ipa": "/ɪkˈsplɔɪt/",
        "vi": "Khai thác, lợi dụng (C1)",
        "ex": ""
    },
    {
        "num": 2477,
        "en": "trigger",
        "pos": "v.",
        "ipa": "/ˈtrɪɡ.ər/",
        "vi": "Gây ra, kích hoạt (C1)",
        "ex": ""
    },
    {
        "num": 2478,
        "en": "intrinsic",
        "pos": "adj.",
        "ipa": "/ɪnˈtrɪn.zɪk/",
        "vi": "Thuộc bản chất, nội tại (C2)",
        "ex": ""
    },
    {
        "num": 2479,
        "en": "ambiguous",
        "pos": "adj.",
        "ipa": "/æmˈbɪɡ.ju.əs/",
        "vi": "Mơ hồ, nhập nhằng (C2)",
        "ex": ""
    },
    {
        "num": 2480,
        "en": "concurrent",
        "pos": "adj.",
        "ipa": "/kənˈkʌr.ənt/",
        "vi": "Xảy ra đồng thời (C2)",
        "ex": ""
    },
    {
        "num": 2481,
        "en": "validate",
        "pos": "v.",
        "ipa": "/ˈvæl.ɪ.deɪt/",
        "vi": "Xác nhận, phê chuẩn (C2)",
        "ex": ""
    },
    {
        "num": 2482,
        "en": "trajectory",
        "pos": "n.",
        "ipa": "/trəˈdʒek.tər.i/",
        "vi": "Quỹ đạo, quỹ hướng phát triển",
        "ex": ""
    },
    {
        "num": 2483,
        "en": "allocate",
        "pos": "v.",
        "ipa": "/ˈæl.ə.keɪt/",
        "vi": "Phân bổ (C1)",
        "ex": ""
    },
    {
        "num": 2484,
        "en": "offset",
        "pos": "v.",
        "ipa": "/ˌɒfˈset/",
        "vi": "Bù đắp, bù lại (C2)",
        "ex": ""
    },
    {
        "num": 2485,
        "en": "cumulative",
        "pos": "adj.",
        "ipa": "/ˈkjuː.mjə.lə.tɪv/",
        "vi": "Tích lũy, dồn lại (C2)",
        "ex": ""
    },
    {
        "num": 2486,
        "en": "analogy",
        "pos": "n.",
        "ipa": "/əˈnæl.ə.dʒi/",
        "vi": "Sự tương tự, phép loại suy (C2)",
        "ex": ""
    },
    {
        "num": 2487,
        "en": "coincide",
        "pos": "v.",
        "ipa": "/ˌkəʊ.ɪnˈsaɪd/",
        "vi": "Trùng hợp (C1)",
        "ex": ""
    },
    {
        "num": 2488,
        "en": "finite",
        "pos": "adj.",
        "ipa": "/ˈfaɪ.naɪt/",
        "vi": "Có hạn (C1)",
        "ex": ""
    },
    {
        "num": 2489,
        "en": "infinite",
        "pos": "adj.",
        "ipa": "/ˈɪn.fɪ.nət/",
        "vi": "Vô hạn (C1)",
        "ex": ""
    },
    {
        "num": 2490,
        "en": "arbitrary",
        "pos": "adj.",
        "ipa": "/ˈɑː.bɪ.trər.i/",
        "vi": "Tùy ý, độc đoán (C2)",
        "ex": ""
    },
    {
        "num": 2491,
        "en": "conform",
        "pos": "v.",
        "ipa": "/kənˈfɔːm/",
        "vi": "Tuân thủ, phù hợp với (C1)",
        "ex": ""
    },
    {
        "num": 2492,
        "en": "discrete",
        "pos": "adj.",
        "ipa": "/dɪˈskriːt/",
        "vi": "Riêng biệt, rời rạc (C2)",
        "ex": ""
    },
    {
        "num": 2493,
        "en": "append",
        "pos": "v.",
        "ipa": "/əˈpend/",
        "vi": "Nối vào, đính kèm",
        "ex": ""
    },
    {
        "num": 2494,
        "en": "predominant",
        "pos": "adj.",
        "ipa": "/prɪˈdɒm.ɪ.nənt/",
        "vi": "Chiếm ưu thế, nổi bật (C1)",
        "ex": ""
    },
    {
        "num": 2495,
        "en": "sustain",
        "pos": "v.",
        "ipa": "/səˈsteɪn/",
        "vi": "Duy trì, chống đỡ (C1)",
        "ex": ""
    },
    {
        "num": 2496,
        "en": "undergo",
        "pos": "v.",
        "ipa": "/ˌʌn.dəˈɡəʊ/",
        "vi": "Trải qua (sự thay đổi/kiểm tra) (C1)",
        "ex": ""
    },
    {
        "num": 2497,
        "en": "rigid",
        "pos": "adj.",
        "ipa": "/ˈrɪdʒ.ɪd/",
        "vi": "Cứng nhắc, không linh hoạt (C1)",
        "ex": ""
    },
    {
        "num": 2498,
        "en": "spatial",
        "pos": "adj.",
        "ipa": "/ˈspeɪ.ʃəl/",
        "vi": "Thuộc không gian (C2)",
        "ex": ""
    },
    {
        "num": 2499,
        "en": "temporal",
        "pos": "adj.",
        "ipa": "/ˈtem.pər.əl/",
        "vi": "Thuộc thời gian",
        "ex": ""
    },
    {
        "num": 2500,
        "en": "simulate",
        "pos": "v.",
        "ipa": "/ˈsɪm.jə.leɪt/",
        "vi": "Mô phỏng (C1)",
        "ex": ""
    },
    {
        "num": 2501,
        "en": "visual",
        "pos": "adj.",
        "ipa": "/ˈvɪʒ.u.əl/",
        "vi": "Thuộc thị giác (B2)",
        "ex": ""
    },
    {
        "num": 2502,
        "en": "verbal",
        "pos": "adj.",
        "ipa": "/ˈvɜː.bəl/",
        "vi": "Bằng lời nói (C1)",
        "ex": ""
    },
    {
        "num": 2503,
        "en": "auditory",
        "pos": "adj.",
        "ipa": "/ˈɔː.dɪ.tər.i/",
        "vi": "Thuộc thính giác",
        "ex": ""
    },
    {
        "num": 2504,
        "en": "logical deduction",
        "pos": "collocation",
        "ipa": "/ˈlɒdʒ.ɪ.kəl dɪˈdʌk.ʃən/",
        "vi": "Sự suy luận logic",
        "ex": ""
    },
    {
        "num": 2505,
        "en": "underlying assumption",
        "pos": "collocation",
        "ipa": "/ˌʌn.dəˈlaɪ.ɪŋ əˈsʌmp.ʃən/",
        "vi": "Giả định ngầm/cơ bản",
        "ex": ""
    },
    {
        "num": 2506,
        "en": "intrinsic motivation",
        "pos": "collocation",
        "ipa": "/ɪnˈtrɪn.zɪk ˌməʊ.tɪˈveɪ.ʃən/",
        "vi": "Động lực nội tại",
        "ex": ""
    },
    {
        "num": 2507,
        "en": "paradigm shift",
        "pos": "collocation",
        "ipa": "/ˈpær.ə.daɪm ʃɪft/",
        "vi": "Sự chuyển biến mô hình (nhận thức)",
        "ex": ""
    },
    {
        "num": 2508,
        "en": "cognitive ability",
        "pos": "collocation",
        "ipa": "/ˈkɒɡ.nə.tɪv əˈbɪl.ə.ti/",
        "vi": "Khả năng nhận thức",
        "ex": ""
    },
    {
        "num": 2509,
        "en": "qualitative research",
        "pos": "collocation",
        "ipa": "/ˈkwɒl.ɪ.tə.tɪv rɪˈsɜːtʃ/",
        "vi": "Nghiên cứu định tính",
        "ex": ""
    },
    {
        "num": 2510,
        "en": "quantitative analysis",
        "pos": "collocation",
        "ipa": "/ˈkwɒn.tɪ.tə.tɪv əˈnæl.ə.sɪs/",
        "vi": "Phân tích định lượng",
        "ex": ""
    },
    {
        "num": 2511,
        "en": "robust framework",
        "pos": "collocation",
        "ipa": "/rəʊˈbʌst ˈfreɪm.wɜːk/",
        "vi": "Khung (lý thuyết) vững chắc",
        "ex": ""
    },
    {
        "num": 2512,
        "en": "dynamic process",
        "pos": "collocation",
        "ipa": "/daɪˈnæm.ɪk ˈprəʊ.ses/",
        "vi": "Quá trình biến động/năng động",
        "ex": ""
    },
    {
        "num": 2513,
        "en": "radical transformation",
        "pos": "collocation",
        "ipa": "/ˈræd.ɪ.kəl ˌtræns.fəˈmeɪ.ʃən/",
        "vi": "Sự thay đổi triệt để",
        "ex": ""
    },
    {
        "num": 2514,
        "en": "subtle distinction",
        "pos": "collocation",
        "ipa": "/ˈsʌt.əl dɪˈstɪŋk.ʃən/",
        "vi": "Sự khác biệt tinh tế",
        "ex": ""
    },
    {
        "num": 2515,
        "en": "viable alternative",
        "pos": "collocation",
        "ipa": "/ˈvaɪ.ə.bəl ɒlˈtɜː.nə.tɪv/",
        "vi": "Giải pháp thay thế khả thi",
        "ex": ""
    },
    {
        "num": 2516,
        "en": "profound impact",
        "pos": "collocation",
        "ipa": "/prəˈfaʊnd ˈɪm.pækt/",
        "vi": "Tác động sâu sắc",
        "ex": ""
    },
    {
        "num": 2517,
        "en": "inevitably lead to",
        "pos": "collocation",
        "ipa": "/ɪˈnev.ɪ.tə.bli liːd tuː/",
        "vi": "Tất yếu dẫn đến",
        "ex": ""
    },
    {
        "num": 2518,
        "en": "play a pivotal role",
        "pos": "collocation",
        "ipa": "/pleɪ ə ˈpɪv.ə.təl rəʊl/",
        "vi": "Đóng vai trò then chốt",
        "ex": ""
    },
    {
        "num": 2519,
        "en": "spark a debate",
        "pos": "collocation",
        "ipa": "/spɑːk ə dɪˈbeɪt/",
        "vi": "Châm ngòi cho cuộc tranh luận",
        "ex": ""
    },
    {
        "num": 2520,
        "en": "challenge the status quo",
        "pos": "collocation",
        "ipa": "/ˈtʃæl.ɪndʒ ðə ˌsteɪ.təs ˈkwəʊ/",
        "vi": "Thách thức hiện trạng",
        "ex": ""
    },
    {
        "num": 2521,
        "en": "draw a conclusion",
        "pos": "collocation",
        "ipa": "/drɔː ə kənˈkluː.ʒən/",
        "vi": "Rút ra kết luận",
        "ex": ""
    },
    {
        "num": 2522,
        "en": "pose a threat",
        "pos": "collocation",
        "ipa": "/pəʊz ə θret/",
        "vi": "Đặt ra mối đe dọa",
        "ex": ""
    },
    {
        "num": 2523,
        "en": "yield results",
        "pos": "collocation",
        "ipa": "/jiːld rɪˈzʌlts/",
        "vi": "Mang lại kết quả",
        "ex": ""
    },
    {
        "num": 2524,
        "en": "mitigate the effects",
        "pos": "collocation",
        "ipa": "/ˈmɪt.ɪ.ɡeɪt ði ɪˈfekts/",
        "vi": "Giảm nhẹ tác động",
        "ex": ""
    },
    {
        "num": 2525,
        "en": "tackle a problem",
        "pos": "collocation",
        "ipa": "/ˈtæk.əl ə ˈprɒb.ləm/",
        "vi": "Giải quyết vấn đề",
        "ex": ""
    },
    {
        "num": 2526,
        "en": "shed light on",
        "pos": "idiom",
        "ipa": "/ʃed laɪt ɒn/",
        "vi": "Làm sáng tỏ",
        "ex": ""
    },
    {
        "num": 2527,
        "en": "bear fruit",
        "pos": "idiom",
        "ipa": "/beə fruːt/",
        "vi": "Đơm hoa kết trái, mang lại kết quả tốt",
        "ex": ""
    },
    {
        "num": 2528,
        "en": "root cause",
        "pos": "collocation",
        "ipa": "/ruːt kɔːz/",
        "vi": "Nguyên nhân gốc rễ",
        "ex": ""
    },
    {
        "num": 2529,
        "en": "broad consensus",
        "pos": "collocation",
        "ipa": "/brɔːd kənˈsen.səs/",
        "vi": "Sự đồng thuận rộng rãi",
        "ex": ""
    },
    {
        "num": 2530,
        "en": "conflicting views",
        "pos": "collocation",
        "ipa": "/ˈkɒn.flɪkt.ɪŋ vjuːz/",
        "vi": "Quan điểm trái chiều",
        "ex": ""
    },
    {
        "num": 2531,
        "en": "inherent flaw",
        "pos": "collocation",
        "ipa": "/ɪnˈher.ənt flɔː/",
        "vi": "Lỗ hổng vốn có",
        "ex": ""
    },
    {
        "num": 2532,
        "en": "long-term implications",
        "pos": "collocation",
        "ipa": "/ˌlɒŋˈtɜːm ˌɪm.plɪˈkeɪ.ʃənz/",
        "vi": "Hệ lụy lâu dài",
        "ex": ""
    },
    {
        "num": 2533,
        "en": "plausible explanation",
        "pos": "collocation",
        "ipa": "/ˈplɔː.zə.bəl ˌek.spləˈneɪ.ʃən/",
        "vi": "Lời giải thích có vẻ hợp lý",
        "ex": ""
    },
    {
        "num": 2534,
        "en": "theoretical framework",
        "pos": "collocation",
        "ipa": "/θɪəˈret.ɪ.kəl ˈfreɪm.wɜːk/",
        "vi": "Khung lý thuyết",
        "ex": ""
    },
    {
        "num": 2535,
        "en": "pragmatic approach",
        "pos": "collocation",
        "ipa": "/præɡˈmæt.ɪk əˈprəʊtʃ/",
        "vi": "Cách tiếp cận thực tế",
        "ex": ""
    },
    {
        "num": 2536,
        "en": "prominent figure",
        "pos": "collocation",
        "ipa": "/ˈprɒm.ɪ.nənt ˈfɪɡ.ər/",
        "vi": "Nhân vật kiệt xuất",
        "ex": ""
    },
    {
        "num": 2537,
        "en": "hierarchical structure",
        "pos": "collocation",
        "ipa": "/ˌhaɪəˈrɑː.kɪ.kəl ˈstrʌk.tʃər/",
        "vi": "Cấu trúc phân cấp",
        "ex": ""
    },
    {
        "num": 2538,
        "en": "demographic shift",
        "pos": "collocation",
        "ipa": "/ˌdem.əˈɡræf.ɪk ʃɪft/",
        "vi": "Sự dịch chuyển nhân khẩu học",
        "ex": ""
    },
    {
        "num": 2539,
        "en": "ecological balance",
        "pos": "collocation",
        "ipa": "/ˌiː.kəˈlɒdʒ.ɪ.kəl ˈbæl.əns/",
        "vi": "Cân bằng sinh thái",
        "ex": ""
    },
    {
        "num": 2540,
        "en": "technological breakthrough",
        "pos": "collocation",
        "ipa": "/ˌtek.nəˈlɒdʒ.ɪ.kəl ˈbreɪk.θruː/",
        "vi": "Đột phá công nghệ",
        "ex": ""
    },
    {
        "num": 2541,
        "en": "archaeological site",
        "pos": "collocation",
        "ipa": "/ˌɑː.ki.əˈlɒdʒ.ɪ.kəl saɪt/",
        "vi": "Di chỉ khảo cổ",
        "ex": ""
    },
    {
        "num": 2542,
        "en": "evolutionary path",
        "pos": "collocation",
        "ipa": "/ˌiː.vəˈluː.ʃən.ər.i pɑːθ/",
        "vi": "Con đường tiến hóa",
        "ex": ""
    },
    {
        "num": 2543,
        "en": "genetic makeup",
        "pos": "collocation",
        "ipa": "/dʒəˈnet.ɪk ˈmeɪk.ʌp/",
        "vi": "Cấu trúc di truyền",
        "ex": ""
    },
    {
        "num": 2544,
        "en": "psychological wellbeing",
        "pos": "collocation",
        "ipa": "/ˌsaɪ.kəˈlɒdʒ.ɪ.kəl ˌwelˈbiː.ɪŋ/",
        "vi": "Sức khỏe tâm lý",
        "ex": ""
    },
    {
        "num": 2545,
        "en": "social stratification",
        "pos": "collocation",
        "ipa": "/ˈsəʊ.ʃəl ˌstræt.ɪ.fɪˈkeɪ.ʃən/",
        "vi": "Phân tầng xã hội",
        "ex": ""
    },
    {
        "num": 2546,
        "en": "economic discrepancy",
        "pos": "collocation",
        "ipa": "/iː.kəˈnɒm.ɪk dɪˈskrep.ən.si/",
        "vi": "Sự chênh lệch kinh tế",
        "ex": ""
    },
    {
        "num": 2547,
        "en": "agricultural yield",
        "pos": "collocation",
        "ipa": "/ˌæɡ.rɪˈkʌl.tʃər.əl jiːld/",
        "vi": "Sản lượng nông nghiệp",
        "ex": ""
    },
    {
        "num": 2548,
        "en": "climate variability",
        "pos": "collocation",
        "ipa": "/ˈklaɪ.mət ˌveə.ri.əˈbɪl.ə.ti/",
        "vi": "Biến động khí hậu",
        "ex": ""
    },
    {
        "num": 2549,
        "en": "maritime history",
        "pos": "collocation",
        "ipa": "/ˈmær.ɪ.taɪm ˈhɪs.tər.i/",
        "vi": "Lịch sử hàng hải",
        "ex": ""
    },
    {
        "num": 2550,
        "en": "linguistic diversity",
        "pos": "collocation",
        "ipa": "/lɪŋˈɡwɪs.tɪk daɪˈvɜː.sə.ti/",
        "vi": "Đa dạng ngôn ngữ",
        "ex": ""
    },
    {
        "num": 2551,
        "en": "historical artefact",
        "pos": "collocation",
        "ipa": "/hɪˈstɒr.ɪ.kəl ˈɑː.tə.fækt/",
        "vi": "Cổ vật lịch sử",
        "ex": ""
    }
];
