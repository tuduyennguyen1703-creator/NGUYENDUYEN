const vocabList = [
    {
        "id": 1,
        "word": "By leaps and bounds",
        "type": "idiom",
        "pronunciation": "/baɪ liːps ənd baʊndz/",
        "meaning": "Tiến bộ rất nhanh, vượt bậc.",
        "example": "Her English has improved by leaps and bounds this year."
    },
    {
        "id": 2,
        "word": "Chalk and cheese",
        "type": "idiom",
        "pronunciation": "/tʃɔːk ənd tʃiːz/",
        "meaning": "Khác nhau hoàn toàn.",
        "example": "Even though they are twins, they are as different as chalk and cheese."
    },
    {
        "id": 3,
        "word": "Part and parcel",
        "type": "idiom",
        "pronunciation": "/pɑːt ənd ˈpɑː.səl/",
        "meaning": "Phần quan trọng, thiết yếu không thể thiếu.",
        "example": "Stress is part and parcel of working in customer service."
    },
    {
        "id": 4,
        "word": "Odds and ends",
        "type": "idiom",
        "pronunciation": "/ɒdz ənd endz/",
        "meaning": "Những thứ lặt vặt, vụn vặt.",
        "example": "I just need to pack a few odds and ends before we leave."
    },
    {
        "id": 5,
        "word": "Spick and span",
        "type": "idiom",
        "pronunciation": "/spɪk ənd spæn/",
        "meaning": "Ngăn nắp, gọn gàng và sạch sẽ.",
        "example": "She spent all day cleaning to make the house spick and span."
    },
    {
        "id": 6,
        "word": "Wear and tear",
        "type": "idiom",
        "pronunciation": "/weər ənd teə/",
        "meaning": "Sự hao mòn, hư hỏng do sử dụng qua thời gian.",
        "example": "The seats in the old car are showing signs of wear and tear."
    },
    {
        "id": 7,
        "word": "Ups and downs",
        "type": "idiom",
        "pronunciation": "/ʌps ənd daʊnz/",
        "meaning": "Sự thăng trầm, lúc lên lúc xuống.",
        "example": "Every relationship has its ups and downs."
    },
    {
        "id": 8,
        "word": "Ins and outs",
        "type": "idiom",
        "pronunciation": "/ɪnz ənd aʊts/",
        "meaning": "Toàn bộ chi tiết, ngóc ngách của một vấn đề.",
        "example": "I know the ins and outs of this software perfectly."
    },
    {
        "id": 9,
        "word": "Safe and sound",
        "type": "idiom",
        "pronunciation": "/seɪf ənd saʊnd/",
        "meaning": "Bình an vô sự.",
        "example": "Despite the terrible storm, they arrived home safe and sound."
    },
    {
        "id": 10,
        "word": "Flesh and blood",
        "type": "idiom",
        "pronunciation": "/fleʃ ənd blʌd/",
        "meaning": "Người máu mủ ruột thịt.",
        "example": "I have to help him; he is my own flesh and blood."
    },
    {
        "id": 11,
        "word": "High and low / Here and there",
        "type": "idiom",
        "pronunciation": "/haɪ ənd ləʊ/",
        "meaning": "Khắp mọi nơi.",
        "example": "We searched high and low for the missing keys."
    },
    {
        "id": 12,
        "word": "Now and then / From time to time",
        "type": "idiom",
        "pronunciation": "/naʊ ənd ðen/",
        "meaning": "Thỉnh thoảng.",
        "example": "I still like to play video games every now and then."
    },
    {
        "id": 13,
        "word": "Sooner or later",
        "type": "idiom",
        "pronunciation": "/ˈsuː.nər ɔː ˈleɪ.tə/",
        "meaning": "Không sớm thì muộn.",
        "example": "He's going to find out the truth sooner or later."
    },
    {
        "id": 14,
        "word": "Day in, day out",
        "type": "idiom",
        "pronunciation": "/deɪ ɪn deɪ aʊt/",
        "meaning": "Ngày qua ngày (sự lặp đi lặp lại nhàm chán).",
        "example": "I'm tired of eating the same food day in, day out."
    },
    {
        "id": 15,
        "word": "Touch and go",
        "type": "idiom",
        "pronunciation": "/tʌtʃ ənd ɡəʊ/",
        "meaning": "Không chắc chắn, đầy rủi ro.",
        "example": "His health was touch and go after the surgery."
    },
    {
        "id": 16,
        "word": "Off the peg / Off the rack",
        "type": "idiom",
        "pronunciation": "/ɒf ðə peɡ/",
        "meaning": "Đồ may sẵn (không phải may đo).",
        "example": "I bought this suit off the peg, but it fits perfectly."
    },
    {
        "id": 17,
        "word": "Out of the question",
        "type": "idiom",
        "pronunciation": "/aʊt əv ðə ˈkwes.tʃən/",
        "meaning": "Không thể xảy ra, không đáng bàn tới.",
        "example": "Buying a new car right now is out of the question."
    },
    {
        "id": 18,
        "word": "On the verge/brink of",
        "type": "idiom",
        "pronunciation": "/ɒn ðə vɜːdʒ əv/",
        "meaning": "Đứng trước nguy cơ, bờ vực.",
        "example": "The company is on the verge of bankruptcy."
    },
    {
        "id": 19,
        "word": "At a loss",
        "type": "idiom",
        "pronunciation": "/ət ə lɒs/",
        "meaning": "Bối rối, không biết phải nói/làm gì.",
        "example": "When I heard the news, I was completely at a loss for words."
    },
    {
        "id": 20,
        "word": "For good",
        "type": "idiom",
        "pronunciation": "/fɔː ɡʊd/",
        "meaning": "Mãi mãi.",
        "example": "He is leaving the country for good next week."
    },
    {
        "id": 21,
        "word": "By means of",
        "type": "prep. phr.",
        "pronunciation": "/baɪ miːnz əv/",
        "meaning": "Bằng cách nào, thông qua phương tiện gì.",
        "example": "The load was lifted by means of a crane."
    },
    {
        "id": 22,
        "word": "In terms of",
        "type": "prep. phr.",
        "pronunciation": "/ɪn tɜːmz əv/",
        "meaning": "Xét về mặt, liên quan tới.",
        "example": "In terms of salary, this job is better than the old one."
    },
    {
        "id": 23,
        "word": "With a view to + V-ing",
        "type": "prep. phr.",
        "pronunciation": "/wɪð ə vjuː tuː/",
        "meaning": "Với mục đích làm gì.",
        "example": "He bought the land with a view to building a house."
    },
    {
        "id": 24,
        "word": "On behalf of",
        "type": "prep. phr.",
        "pronunciation": "/ɒn bɪˈhɑːf əv/",
        "meaning": "Thay mặt cho ai.",
        "example": "On behalf of the company, I would like to welcome you."
    },
    {
        "id": 25,
        "word": "In favor of",
        "type": "prep. phr.",
        "pronunciation": "/ɪn ˈfeɪ.vər əv/",
        "meaning": "Ủng hộ, tán thành.",
        "example": "Are you in favor of banning plastic bags?"
    },
    {
        "id": 26,
        "word": "By mistake / accident / chance",
        "type": "prep. phr.",
        "pronunciation": "/baɪ mɪˈsteɪk/",
        "meaning": "Tình cờ, ngẫu nhiên, do nhầm lẫn.",
        "example": "I picked up the wrong umbrella by mistake."
    },
    {
        "id": 27,
        "word": "On purpose",
        "type": "prep. phr.",
        "pronunciation": "/ɒn ˈpɜː.pəs/",
        "meaning": "Cố ý, có chủ đích.",
        "example": "I didn't break the glass on purpose!"
    },
    {
        "id": 28,
        "word": "In advance",
        "type": "prep. phr.",
        "pronunciation": "/ɪn ədˈvɑːns/",
        "meaning": "Làm trước, chuẩn bị trước.",
        "example": "You need to book the tickets in advance."
    },
    {
        "id": 29,
        "word": "At all costs",
        "type": "idiom",
        "pronunciation": "/ət ɔːl kɒsts/",
        "meaning": "Bằng mọi giá.",
        "example": "We must win this competition at all costs."
    },
    {
        "id": 30,
        "word": "In the long run",
        "type": "idiom",
        "pronunciation": "/ɪn ðə lɒŋ rʌn/",
        "meaning": "Về lâu về dài.",
        "example": "Saving money now will benefit you in the long run."
    },
    {
        "id": 31,
        "word": "Take something for granted",
        "type": "idiom",
        "pronunciation": "/teɪk ˈsʌm.θɪŋ fɔː ˈɡrɑːn.tɪd/",
        "meaning": "Coi điều gì là hiển nhiên (không trân trọng).",
        "example": "We often take our parents' love for granted."
    },
    {
        "id": 32,
        "word": "Make up one's mind",
        "type": "idiom",
        "pronunciation": "/meɪk ʌp wʌnz maɪnd/",
        "meaning": "Đưa ra quyết định.",
        "example": "Have you made up your mind about where to go for the holiday?"
    },
    {
        "id": 33,
        "word": "Bear / Keep in mind",
        "type": "idiom",
        "pronunciation": "/beər ɪn maɪnd/",
        "meaning": "Ghi nhớ điều gì.",
        "example": "Please bear in mind that the deadline is tomorrow."
    },
    {
        "id": 34,
        "word": "Make a mess of",
        "type": "idiom",
        "pronunciation": "/meɪk ə mes əv/",
        "meaning": "Làm hỏng việc, gây lộn xộn.",
        "example": "He tried to fix the sink but just made a mess of it."
    },
    {
        "id": 35,
        "word": "Have a go at something",
        "type": "idiom",
        "pronunciation": "/hæv ə ɡəʊ ət ˈsʌm.θɪŋ/",
        "meaning": "Thử làm việc gì đó.",
        "example": "I've never tried skiing, but I'd like to have a go at it."
    },
    {
        "id": 36,
        "word": "Catch sight / a glimpse of",
        "type": "idiom",
        "pronunciation": "/kætʃ saɪt əv/",
        "meaning": "Vô tình nhìn thấy, bắt gặp.",
        "example": "I caught sight of him in the crowded market."
    },
    {
        "id": 37,
        "word": "Make allowance(s) for",
        "type": "idiom",
        "pronunciation": "/meɪk əˈlaʊ.ənsɪz fɔː/",
        "meaning": "Chiếu cố, thông cảm cho tình trạng của ai.",
        "example": "We should make allowances for his lack of experience."
    },
    {
        "id": 38,
        "word": "Take account of",
        "type": "idiom",
        "pronunciation": "/teɪk əˈkaʊnt əv/",
        "meaning": "Cân nhắc, tính đến một yếu tố nào đó.",
        "example": "You must take account of the bad weather when planning the trip."
    },
    {
        "id": 39,
        "word": "Make use of",
        "type": "idiom",
        "pronunciation": "/meɪk juːz əv/",
        "meaning": "Tận dụng, sử dụng hiệu quả.",
        "example": "Try to make good use of your free time to learn English."
    },
    {
        "id": 40,
        "word": "Take pride in",
        "type": "idiom",
        "pronunciation": "/teɪk praɪd ɪn/",
        "meaning": "Tự hào về điều gì/ai đó.",
        "example": "He takes great pride in his children's achievements."
    },
    {
        "id": 41,
        "word": "Be on good terms with",
        "type": "idiom",
        "pronunciation": "/bi ɒn ɡʊd tɜːmz wɪð/",
        "meaning": "Có mối quan hệ tốt với ai.",
        "example": "I am on good terms with all my neighbors."
    },
    {
        "id": 42,
        "word": "Lose touch with",
        "type": "idiom",
        "pronunciation": "/luːz tʌtʃ wɪð/",
        "meaning": "Mất liên lạc.",
        "example": "I lost touch with her after we graduated from high school."
    },
    {
        "id": 43,
        "word": "Keep in touch",
        "type": "idiom",
        "pronunciation": "/kiːp ɪn tʌtʃ/",
        "meaning": "Giữ liên lạc.",
        "example": "Let's keep in touch even after you move to Canada."
    },
    {
        "id": 44,
        "word": "Have a lot in common",
        "type": "idiom",
        "pronunciation": "/hæv ə lɒt ɪn ˈkɒm.ən/",
        "meaning": "Có nhiều điểm chung.",
        "example": "My best friend and I have a lot in common."
    },
    {
        "id": 45,
        "word": "Give somebody a hand",
        "type": "idiom",
        "pronunciation": "/ɡɪv ˈsʌm.bə.di ə hænd/",
        "meaning": "Giúp đỡ ai đó một tay.",
        "example": "Could you give me a hand with these heavy boxes?"
    },
    {
        "id": 46,
        "word": "Pay a compliment on",
        "type": "idiom",
        "pronunciation": "/peɪ ə ˈkɒm.plɪ.mənt/",
        "meaning": "Khen ngợi ai về điều gì.",
        "example": "She paid him a compliment on his excellent presentation."
    },
    {
        "id": 47,
        "word": "Do someone a favor",
        "type": "idiom",
        "pronunciation": "/duː ˈsʌm.wʌn ə ˈfeɪ.və/",
        "meaning": "Làm giúp ai một việc.",
        "example": "Could you do me a favor and open the door?"
    },
    {
        "id": 48,
        "word": "Take turns",
        "type": "idiom",
        "pronunciation": "/teɪk tɜːnz/",
        "meaning": "Luân phiên, đổi ca cho nhau.",
        "example": "The students take turns cleaning the classroom."
    },
    {
        "id": 49,
        "word": "Put up with",
        "type": "phr. v.",
        "pronunciation": "/pʊt ʌp wɪð/",
        "meaning": "Chịu đựng.",
        "example": "I can't put up with this terrible noise any longer."
    },
    {
        "id": 50,
        "word": "Get the better of",
        "type": "idiom",
        "pronunciation": "/ɡet ðə ˈbet.ər əv/",
        "meaning": "Đánh bại, áp đảo (cảm xúc lấn át lý trí).",
        "example": "Her curiosity got the better of her, and she opened the letter."
    },
    {
        "id": 51,
        "word": "Out of order",
        "type": "idiom",
        "pronunciation": "/aʊt əv ˈɔː.də/",
        "meaning": "Bị hỏng (máy móc).",
        "example": "I'm sorry, the coffee machine is out of order today."
    },
    {
        "id": 52,
        "word": "Out of date",
        "type": "idiom",
        "pronunciation": "/aʊt əv deɪt/",
        "meaning": "Lỗi thời, hết hạn.",
        "example": "This map is out of date; they've built a new road here."
    },
    {
        "id": 53,
        "word": "Up to date",
        "type": "idiom",
        "pronunciation": "/ʌp tuː deɪt/",
        "meaning": "Cập nhật mới nhất.",
        "example": "We use the most up-to-date technology in our factory."
    },
    {
        "id": 54,
        "word": "Out of reach",
        "type": "idiom",
        "pronunciation": "/aʊt əv riːtʃ/",
        "meaning": "Ngoài tầm với.",
        "example": "Keep these medicines out of reach of children."
    },
    {
        "id": 55,
        "word": "Out of stock",
        "type": "idiom",
        "pronunciation": "/aʊt əv stɒk/",
        "meaning": "Hết hàng.",
        "example": "The shoes you want are currently out of stock."
    },
    {
        "id": 56,
        "word": "Stand a chance of",
        "type": "idiom",
        "pronunciation": "/stænd ə tʃɑːns əv/",
        "meaning": "Có cơ hội thành công.",
        "example": "Without studying, you don't stand a chance of passing."
    },
    {
        "id": 57,
        "word": "Have a knack for",
        "type": "idiom",
        "pronunciation": "/hæv ə næk fɔː/",
        "meaning": "Có năng khiếu, tài năng bẩm sinh về việc gì.",
        "example": "She has a knack for learning new languages quickly."
    },
    {
        "id": 58,
        "word": "Fall short of",
        "type": "idiom",
        "pronunciation": "/fɔːl ʃɔːt əv/",
        "meaning": "Không đạt tới kỳ vọng, thiếu hụt.",
        "example": "The hotel fell short of our expectations."
    },
    {
        "id": 59,
        "word": "Be bound to",
        "type": "idiom",
        "pronunciation": "/bi baʊnd tuː/",
        "meaning": "Chắc chắn sẽ xảy ra.",
        "example": "You've studied so hard, you're bound to pass the exam."
    },
    {
        "id": 60,
        "word": "Without fail",
        "type": "idiom",
        "pronunciation": "/wɪˈðaʊt feɪl/",
        "meaning": "Không ngoại lệ, luôn luôn.",
        "example": "He visits his grandmother every Sunday without fail."
    },
    {
        "id": 61,
        "word": "Take its toll (on)",
        "type": "idiom",
        "pronunciation": "/teɪk ɪts təʊl/",
        "meaning": "Gây thiệt hại, ảnh hưởng xấu (qua thời gian).",
        "example": "Years of smoking have taken their toll on his health."
    },
    {
        "id": 62,
        "word": "Do wonders for",
        "type": "idiom",
        "pronunciation": "/duː ˈwʌn.dəz fɔː/",
        "meaning": "Có tác dụng tuyệt vời/rất tốt cho.",
        "example": "A holiday will do wonders for your mental health."
    },
    {
        "id": 63,
        "word": "Play an important role in",
        "type": "idiom",
        "pronunciation": "/pleɪ ən ɪmˈpɔː.tənt rəʊl ɪn/",
        "meaning": "Đóng vai trò quan trọng trong.",
        "example": "Education plays an important role in a child's development."
    },
    {
        "id": 64,
        "word": "Have an influence/impact on",
        "type": "idiom",
        "pronunciation": "/hæv ən ˈɪn.flu.əns ɒn/",
        "meaning": "Có ảnh hưởng đến.",
        "example": "Parents have a huge impact on their children's behavior."
    },
    {
        "id": 65,
        "word": "Make a contribution to",
        "type": "idiom",
        "pronunciation": "/meɪk ə ˌkɒn.trɪˈbjuː.ʃən/",
        "meaning": "Đóng góp vào.",
        "example": "He made a significant contribution to the project."
    },
    {
        "id": 66,
        "word": "Make sense of",
        "type": "idiom",
        "pronunciation": "/meɪk sens əv/",
        "meaning": "Hiểu được một điều gì đó phức tạp/khó hiểu.",
        "example": "I can't make sense of this complicated instruction manual."
    },
    {
        "id": 67,
        "word": "Take advantage of",
        "type": "idiom",
        "pronunciation": "/teɪk ədˈvɑːn.tɪdʒ əv/",
        "meaning": "Tận dụng, lợi dụng.",
        "example": "You should take advantage of this rare opportunity."
    },
    {
        "id": 68,
        "word": "Give way to",
        "type": "idiom",
        "pronunciation": "/ɡɪv weɪ tuː/",
        "meaning": "Nhường chỗ cho, bị thay thế bởi.",
        "example": "The old buildings gave way to a new shopping mall."
    },
    {
        "id": 69,
        "word": "Make up for",
        "type": "phr. v.",
        "pronunciation": "/meɪk ʌp fɔː/",
        "meaning": "Bù đắp cho.",
        "example": "He bought her some flowers to make up for being late."
    },
    {
        "id": 70,
        "word": "Set fire to / Set on fire",
        "type": "idiom",
        "pronunciation": "/set faɪə tuː/",
        "meaning": "Châm lửa, đốt cháy.",
        "example": "The rioters set fire to several cars in the street."
    },
    {
        "id": 71,
        "word": "By word of mouth",
        "type": "idiom",
        "pronunciation": "/baɪ wɜːd əv maʊθ/",
        "meaning": "Truyền miệng.",
        "example": "The restaurant doesn't advertise; it gets customers by word of mouth."
    },
    {
        "id": 72,
        "word": "In vain",
        "type": "idiom",
        "pronunciation": "/ɪn veɪn/",
        "meaning": "Uổng công, vô ích.",
        "example": "They tried in vain to save the drowning man."
    },
    {
        "id": 73,
        "word": "Under pressure",
        "type": "idiom",
        "pronunciation": "/ˈʌn.də ˈpreʃ.ə/",
        "meaning": "Chịu áp lực.",
        "example": "She works well under pressure."
    },
    {
        "id": 74,
        "word": "From scratch",
        "type": "idiom",
        "pronunciation": "/frɒm skrætʃ/",
        "meaning": "Làm lại từ đầu, từ con số không.",
        "example": "We had to start the whole project from scratch."
    },
    {
        "id": 75,
        "word": "For the time being",
        "type": "idiom",
        "pronunciation": "/fɔː ðə taɪm ˈbiː.ɪŋ/",
        "meaning": "Trong lúc này, tạm thời.",
        "example": "You can stay in my spare room for the time being."
    },
    {
        "id": 76,
        "word": "To the best of my knowledge",
        "type": "idiom",
        "pronunciation": "/tuː ðə best əv maɪ ˈnɒl.ɪdʒ/",
        "meaning": "Theo như tôi biết thì.",
        "example": "To the best of my knowledge, she is still living in Paris."
    },
    {
        "id": 77,
        "word": "By no means",
        "type": "idiom",
        "pronunciation": "/baɪ nəʊ miːnz/",
        "meaning": "Hoàn toàn không.",
        "example": "It is by no means certain that we will win the match."
    },
    {
        "id": 78,
        "word": "On no account",
        "type": "idiom",
        "pronunciation": "/ɒn nəʊ əˈkaʊnt/",
        "meaning": "Tuyệt đối không (dùng trong đảo ngữ).",
        "example": "On no account should you leave the door unlocked."
    },
    {
        "id": 79,
        "word": "In brief",
        "type": "idiom",
        "pronunciation": "/ɪn briːf/",
        "meaning": "Tóm lại.",
        "example": "In brief, the meeting was a complete disaster."
    },
    {
        "id": 80,
        "word": "Let alone",
        "type": "idiom",
        "pronunciation": "/let əˈləʊn/",
        "meaning": "Huống hồ là, nói gì đến.",
        "example": "He can't afford a bicycle, let alone a car."
    },
    {
        "id": 81,
        "word": "Keep pace with / Keep up with",
        "type": "idiom",
        "pronunciation": "/kiːp peɪs wɪð/",
        "meaning": "Bắt kịp, theo kịp.",
        "example": "Older workers often struggle to keep pace with new technology."
    },
    {
        "id": 82,
        "word": "Pay attention to",
        "type": "idiom",
        "pronunciation": "/peɪ əˈten.ʃən tuː/",
        "meaning": "Chú ý tới.",
        "example": "Please pay attention to the teacher's instructions."
    },
    {
        "id": 83,
        "word": "Make a fuss (about)",
        "type": "idiom",
        "pronunciation": "/meɪk ə fʌs/",
        "meaning": "Làm ầm ĩ, làm quá lên.",
        "example": "She made a huge fuss about the soup being too cold."
    },
    {
        "id": 84,
        "word": "Keep an eye out for",
        "type": "idiom",
        "pronunciation": "/kiːp ən aɪ aʊt fɔː/",
        "meaning": "Chú ý theo dõi, canh chừng.",
        "example": "Keep an eye out for a gas station; we're running low on fuel."
    },
    {
        "id": 85,
        "word": "Be in charge of",
        "type": "prep. phr.",
        "pronunciation": "/bi ɪn tʃɑːdʒ əv/",
        "meaning": "Chịu trách nhiệm, quản lý.",
        "example": "She is in charge of the marketing department."
    },
    {
        "id": 86,
        "word": "Come to an end",
        "type": "idiom",
        "pronunciation": "/kʌm tuː ən end/",
        "meaning": "Kết thúc.",
        "example": "The peaceful era finally came to an end."
    },
    {
        "id": 87,
        "word": "Put an end to",
        "type": "idiom",
        "pronunciation": "/pʊt ən end tuː/",
        "meaning": "Chấm dứt một điều gì đó.",
        "example": "The teacher put an end to the students' chatting."
    },
    {
        "id": 88,
        "word": "Lose one's nerve",
        "type": "idiom",
        "pronunciation": "/luːz wʌnz nɜːv/",
        "meaning": "Mất can đảm, chùn bước.",
        "example": "He lost his nerve right before giving the speech."
    },
    {
        "id": 89,
        "word": "Take something amiss",
        "type": "idiom",
        "pronunciation": "/teɪk ˈsʌm.θɪŋ əˈmɪs/",
        "meaning": "Bị phật ý, hiểu lầm ý tốt.",
        "example": "I was just joking, please don't take it amiss."
    },
    {
        "id": 90,
        "word": "Cast an eye over",
        "type": "idiom",
        "pronunciation": "/kɑːst ən aɪ ˈəʊ.və/",
        "meaning": "Nhìn lướt qua, kiểm tra nhanh.",
        "example": "Could you cast an eye over my essay and check for mistakes?"
    },
    {
        "id": 91,
        "word": "As a matter of fact",
        "type": "idiom",
        "pronunciation": "/əz ə ˈmæt.ər əv fækt/",
        "meaning": "Thực tế là, thực ra.",
        "example": "I didn't fail the test; as a matter of fact, I got an A."
    },
    {
        "id": 92,
        "word": "Make do with",
        "type": "idiom",
        "pronunciation": "/meɪk duː wɪð/",
        "meaning": "Dùng tạm, xoay xở với những gì đang có.",
        "example": "We don't have enough chairs, so some people will have to make do with sitting on the floor."
    },
    {
        "id": 93,
        "word": "In particular",
        "type": "prep. phr.",
        "pronunciation": "/ɪn pəˈtɪk.jə.lə/",
        "meaning": "Nói riêng, cụ thể là.",
        "example": "I loved the whole movie, the ending in particular."
    },
    {
        "id": 94,
        "word": "Pros and cons",
        "type": "idiom",
        "pronunciation": "/prəʊz ənd kɒnz/",
        "meaning": "Ưu và nhược điểm.",
        "example": "Let's weigh the pros and cons before making a decision."
    },
    {
        "id": 95,
        "word": "Take your time",
        "type": "idiom",
        "pronunciation": "/teɪk jɔː taɪm/",
        "meaning": "Cứ từ từ, không cần vội.",
        "example": "There's no rush to finish the test, so take your time."
    },
    {
        "id": 96,
        "word": "In danger of",
        "type": "prep. phr.",
        "pronunciation": "/ɪn ˈdeɪn.dʒər əv/",
        "meaning": "Có nguy cơ.",
        "example": "The polar bear is in danger of extinction."
    },
    {
        "id": 97,
        "word": "Be aware of",
        "type": "prep. phr.",
        "pronunciation": "/bi əˈweər əv/",
        "meaning": "Nhận thức được, biết về.",
        "example": "Are you aware of the new rules?"
    },
    {
        "id": 98,
        "word": "Attribute something to",
        "type": "idiom",
        "pronunciation": "/əˈtrɪb.juːt ˈsʌm.θɪŋ tuː/",
        "meaning": "Quy cho, cho rằng cái gì là do đâu.",
        "example": "He attributed his success to hard work and dedication."
    },
    {
        "id": 99,
        "word": "Put into practice",
        "type": "idiom",
        "pronunciation": "/pʊt ˈɪn.tuː ˈpræk.tɪs/",
        "meaning": "Đưa vào thực tiễn.",
        "example": "It's a good idea in theory, but hard to put into practice."
    },
    {
        "id": 100,
        "word": "Keep a record of",
        "type": "idiom",
        "pronunciation": "/kiːp ə ˈrek.ɔːd əv/",
        "meaning": "Ghi chép, lưu giữ thông tin.",
        "example": "You should keep a record of all your expenses."
    },
    {
        "id": 101,
        "word": "Out of this world",
        "type": "idiom",
        "pronunciation": "/aʊt əv ðɪs wɜːld/",
        "meaning": "Tuyệt vời, vượt ngoài sức tưởng tượng.",
        "example": "The food at that new Italian restaurant is simply out of this world."
    },
    {
        "id": 102,
        "word": "Pay through the nose",
        "type": "idiom",
        "pronunciation": "/peɪ θruː ðə nəʊz/",
        "meaning": "Trả một cái giá cắt cổ cho việc gì.",
        "example": "We paid through the nose to get the car fixed during the holiday."
    },
    {
        "id": 103,
        "word": "Go through the roof",
        "type": "idiom",
        "pronunciation": "/ɡəʊ θruː ðə ruːf/",
        "meaning": "Tăng vọt (giá cả) hoặc vô cùng tức giận.",
        "example": "When I told my dad I crashed his car, he went through the roof."
    },
    {
        "id": 104,
        "word": "On the house",
        "type": "idiom",
        "pronunciation": "/ɒn ðə haʊs/",
        "meaning": "Miễn phí (do quán chiêu đãi).",
        "example": "The manager apologized for the delay and told us the drinks were on the house."
    },
    {
        "id": 105,
        "word": "Under the counter",
        "type": "idiom",
        "pronunciation": "/ˈʌn.də ðə ˈkaʊn.tə/",
        "meaning": "Bán chui, giao dịch lén lút (trái pháp luật).",
        "example": "They were illegally selling the restricted medicine under the counter."
    },
    {
        "id": 106,
        "word": "A needle in a haystack",
        "type": "idiom",
        "pronunciation": "/ə ˈniː.dəl ɪn ə ˈheɪ.stæk/",
        "meaning": "Mò kim đáy bể, vô cùng khó tìm.",
        "example": "Finding my lost ring in this huge park is like looking for a needle in a haystack."
    },
    {
        "id": 107,
        "word": "In the dark",
        "type": "idiom",
        "pronunciation": "/ɪn ðə dɑːk/",
        "meaning": "Bị giữ bí mật, mù mờ không biết gì.",
        "example": "The workers were kept in the dark about the company's plans to close the factory."
    },
    {
        "id": 108,
        "word": "Look on the bright side",
        "type": "idiom",
        "pronunciation": "/lʊk ɒn ðə braɪt saɪd/",
        "meaning": "Nhìn vào mặt tích cực của vấn đề (lạc quan lên).",
        "example": "Look on the bright side: at least you didn't get hurt in the accident."
    },
    {
        "id": 109,
        "word": "Take it easy",
        "type": "idiom",
        "pronunciation": "/teɪk ɪt ˈiː.zi/",
        "meaning": "Cứ bình tĩnh, thư giãn đi (đừng căng thẳng quá).",
        "example": "You've been working too hard lately; you need to take it easy for a few days."
    },
    {
        "id": 110,
        "word": "Thành ngữ / Cụm từ",
        "type": "Loại từ",
        "pronunciation": "Phiên âm (UK)",
        "meaning": "Nghĩa Tiếng Việt",
        "example": "Ví dụ minh họa"
    },
    {
        "id": 111,
        "word": "At the eleventh hour",
        "type": "idiom",
        "pronunciation": "/ət ði ɪˈlev.ənθ aʊə/",
        "meaning": "Vào phút chót, phút 89.",
        "example": "The government canceled the project at the eleventh hour."
    },
    {
        "id": 112,
        "word": "Keep a straight face",
        "type": "idiom",
        "pronunciation": "/kiːp ə streɪt feɪs/",
        "meaning": "Cố nhịn cười, giữ vẻ mặt nghiêm túc.",
        "example": "I tried to keep a straight face, but his haircut was too funny."
    },
    {
        "id": 113,
        "word": "A memory like a sieve",
        "type": "idiom",
        "pronunciation": "/ə ˈmem.ər.i laɪk ə sɪv/",
        "meaning": "Não cá vàng, trí nhớ rất kém (như cái rây).",
        "example": "I have to write everything down because I have a memory like a sieve."
    },
    {
        "id": 114,
        "word": "As clear as mud",
        "type": "idiom",
        "pronunciation": "/əz klɪər əz mʌd/",
        "meaning": "Khó hiểu, mập mờ, hoàn toàn không rõ ràng.",
        "example": "His explanation of the new grammar rule was as clear as mud."
    },
    {
        "id": 115,
        "word": "Cost the earth",
        "type": "idiom",
        "pronunciation": "/kɒst ði ɜːθ/",
        "meaning": "Rất đắt đỏ, tốn một gia tài.",
        "example": "She wears designer clothes that must cost the earth."
    },
    {
        "id": 116,
        "word": "Have a whale of a time",
        "type": "idiom",
        "pronunciation": "/hæv ə weɪl əv ə taɪm/",
        "meaning": "Có một khoảng thời gian tuyệt vời, rất vui vẻ.",
        "example": "We had a whale of a time at the music festival last night."
    },
    {
        "id": 117,
        "word": "Make one's blood boil",
        "type": "idiom",
        "pronunciation": "/meɪk wʌnz blʌd bɔɪl/",
        "meaning": "Làm ai đó sôi máu, vô cùng tức giận.",
        "example": "Seeing people abandon their pets makes my blood boil."
    },
    {
        "id": 118,
        "word": "On the same wavelength",
        "type": "idiom",
        "pronunciation": "/ɒn ðə seɪm ˈweɪv.leŋθ/",
        "meaning": "Cùng tần số, cùng suy nghĩ và quan điểm.",
        "example": "Luckily, my boss and I are completely on the same wavelength."
    },
    {
        "id": 119,
        "word": "Light at the end of the tunnel",
        "type": "idiom",
        "pronunciation": "/laɪt ət ði end əv ðə ˈtʌn.əl/",
        "meaning": "Tia hy vọng sau một thời gian dài khó khăn.",
        "example": "After months of job hunting, I finally see the light at the end of the tunnel."
    },
    {
        "id": 120,
        "word": "Take sb under one's wing",
        "type": "idiom",
        "pronunciation": "/teɪk ˈsʌm.bə.di ˈʌn.də wʌnz wɪŋ/",
        "meaning": "Che chở, dìu dắt và bảo bọc ai đó.",
        "example": "When I joined the company, the senior manager took me under his wing."
    },
    {
        "id": 121,
        "word": "Walk on air",
        "type": "idiom",
        "pronunciation": "/wɔːk ɒn eə/",
        "meaning": "Cực kỳ sung sướng, lâng lâng như đi trên mây.",
        "example": "She's been walking on air since she passed the university entrance exam."
    },
    {
        "id": 122,
        "word": "Go bananas / Go nuts",
        "type": "idiom",
        "pronunciation": "/ɡəʊ bəˈnɑː.nəz/",
        "meaning": "Nổi điên, hoặc cực kỳ phấn khích.",
        "example": "The crowd went bananas when the band came on stage."
    },
    {
        "id": 123,
        "word": "A wet blanket",
        "type": "idiom",
        "pronunciation": "/ə wet ˈblæŋ.kɪt/",
        "meaning": "Kẻ phá đám, làm mất vui.",
        "example": "Don't invite him to the party; he is such a wet blanket."
    },
    {
        "id": 124,
        "word": "An eager beaver",
        "type": "idiom",
        "pronunciation": "/ən ˈiː.ɡə ˈbiː.və/",
        "meaning": "Người cực kỳ nhiệt tình, chăm chỉ.",
        "example": "She is an eager beaver who always arrives at work an hour early."
    },
    {
        "id": 125,
        "word": "At a loose end",
        "type": "idiom",
        "pronunciation": "/ət ə luːs end/",
        "meaning": "Rảnh rỗi, không có việc gì làm.",
        "example": "If you are at a loose end this weekend, let's go see a movie."
    },
    {
        "id": 126,
        "word": "Be full of beans",
        "type": "idiom",
        "pronunciation": "/bi fʊl əv biːnz/",
        "meaning": "Tràn đầy năng lượng, sôi nổi.",
        "example": "The kids were full of beans after eating all that candy."
    },
    {
        "id": 127,
        "word": "Come clean (about)",
        "type": "idiom",
        "pronunciation": "/kʌm kliːn/",
        "meaning": "Thú nhận toàn bộ sự thật.",
        "example": "It's time to come clean and tell your parents you lost the money."
    },
    {
        "id": 128,
        "word": "Draw the line",
        "type": "idiom",
        "pronunciation": "/drɔː ðə laɪn/",
        "meaning": "Đặt ra giới hạn (không cho phép vượt qua).",
        "example": "I don't mind a joke, but I draw the line at personal insults."
    },
    {
        "id": 129,
        "word": "Drive sb around the bend",
        "type": "idiom",
        "pronunciation": "/draɪv əˈraʊnd ðə bend/",
        "meaning": "Làm ai phát điên, vô cùng bực mình.",
        "example": "This slow internet connection is driving me around the bend."
    },
    {
        "id": 130,
        "word": "Drop a hint",
        "type": "idiom",
        "pronunciation": "/drɒp ə hɪnt/",
        "meaning": "Nói bóng gió, gợi ý khéo.",
        "example": "I dropped a hint that I wanted a new phone for my birthday."
    },
    {
        "id": 131,
        "word": "Drop somebody a line",
        "type": "idiom",
        "pronunciation": "/drɒp ˈsʌm.bə.di ə laɪn/",
        "meaning": "Viết cho ai một bức thư/tin nhắn ngắn.",
        "example": "Drop me a line when you arrive in London!"
    },
    {
        "id": 132,
        "word": "Eat like a horse",
        "type": "idiom",
        "pronunciation": "/iːt laɪk ə hɔːs/",
        "meaning": "Ăn rất nhiều, ăn khỏe.",
        "example": "My brother is incredibly thin, even though he eats like a horse."
    },
    {
        "id": 133,
        "word": "Eat like a bird",
        "type": "idiom",
        "pronunciation": "/iːt laɪk ə bɜːd/",
        "meaning": "Ăn rất ít.",
        "example": "She's on a strict diet and eats like a bird."
    },
    {
        "id": 134,
        "word": "Find fault with",
        "type": "idiom",
        "pronunciation": "/faɪnd fɒlt wɪð/",
        "meaning": "Bắt bẻ, bới lông tìm vết.",
        "example": "He always finds fault with everything I do."
    },
    {
        "id": 135,
        "word": "Get on one's nerves",
        "type": "idiom",
        "pronunciation": "/ɡet ɒn wʌnz nɜːvz/",
        "meaning": "Làm ai đó phát cáu, bực mình.",
        "example": "His constant whistling is really getting on my nerves."
    },
    {
        "id": 136,
        "word": "Get out of bed on the wrong side",
        "type": "idiom",
        "pronunciation": "/ɡet aʊt əv bed ɒn ðə rɒŋ saɪd/",
        "meaning": "Thức dậy với tâm trạng cáu kỉnh, bực bội.",
        "example": "You're very grumpy today. Did you get out of bed on the wrong side?"
    },
    {
        "id": 137,
        "word": "Give somebody a ring",
        "type": "idiom",
        "pronunciation": "/ɡɪv ˈsʌm.bə.di ə rɪŋ/",
        "meaning": "Gọi điện thoại cho ai đó.",
        "example": "Give me a ring when you finish work."
    },
    {
        "id": 138,
        "word": "Go to one's head",
        "type": "idiom",
        "pronunciation": "/ɡəʊ tuː wʌnz hed/",
        "meaning": "Khiến ai đó trở nên kiêu ngạo (ảo tưởng sức mạnh).",
        "example": "Don't let all this praise go to your head."
    },
    {
        "id": 139,
        "word": "Have a word with",
        "type": "idiom",
        "pronunciation": "/hæv ə wɜːd wɪð/",
        "meaning": "Nói chuyện riêng với ai (thường để khuyên răn).",
        "example": "I need to have a word with you about your recent test scores."
    },
    {
        "id": 140,
        "word": "In hot water",
        "type": "idiom",
        "pronunciation": "/ɪn hɒt ˈwɔː.tə/",
        "meaning": "Đang gặp rắc rối lớn.",
        "example": "He found himself in hot water after lying to his boss."
    },
    {
        "id": 141,
        "word": "Keep an open mind",
        "type": "idiom",
        "pronunciation": "/kiːp ən ˈəʊ.pən maɪnd/",
        "meaning": "Giữ thái độ cởi mở, chưa vội phán xét.",
        "example": "Try to keep an open mind until you've heard all the facts."
    },
    {
        "id": 142,
        "word": "Keep one's word",
        "type": "collocation",
        "pronunciation": "/kiːp wʌnz wɜːd/",
        "meaning": "Giữ lời hứa.",
        "example": "He is a reliable man who always keeps his word."
    },
    {
        "id": 143,
        "word": "Know by heart",
        "type": "idiom",
        "pronunciation": "/nəʊ baɪ hɑːt/",
        "meaning": "Học thuộc lòng, nhớ như in.",
        "example": "She has practiced the song so much that she knows it by heart."
    },
    {
        "id": 144,
        "word": "Lose face",
        "type": "idiom",
        "pronunciation": "/luːz feɪs/",
        "meaning": "Mất mặt, mất thể diện.",
        "example": "The government will lose face if they don't fulfill their promises."
    },
    {
        "id": 145,
        "word": "Lose heart",
        "type": "idiom",
        "pronunciation": "/luːz hɑːt/",
        "meaning": "Nản lòng, thoái chí.",
        "example": "Don't lose heart; you still have another chance to pass the exam."
    },
    {
        "id": 146,
        "word": "Make a fortune",
        "type": "collocation",
        "pronunciation": "/meɪk ə ˈfɔː.tʃuːn/",
        "meaning": "Kiếm được một gia tài, làm giàu.",
        "example": "He made a fortune selling real estate."
    },
    {
        "id": 147,
        "word": "Go out of one's way",
        "type": "idiom",
        "pronunciation": "/ɡəʊ aʊt əv wʌnz weɪ/",
        "meaning": "Cất công, chịu khó làm việc gì (đặc biệt để giúp ai).",
        "example": "They went out of their way to make us feel welcome."
    },
    {
        "id": 148,
        "word": "On second thoughts",
        "type": "idiom",
        "pronunciation": "/ɒn ˈsek.ənd θɔːts/",
        "meaning": "Sau khi suy nghĩ lại.",
        "example": "I'll have tea, please. Actually, on second thoughts, I'll have coffee."
    },
    {
        "id": 149,
        "word": "Out of breath",
        "type": "collocation",
        "pronunciation": "/aʊt əv breθ/",
        "meaning": "Hụt hơi, thở không ra hơi.",
        "example": "I was out of breath after running up the stairs."
    },
    {
        "id": 150,
        "word": "Out of sorts",
        "type": "idiom",
        "pronunciation": "/aʊt əv sɔːts/",
        "meaning": "Thấy khó ở, ốm vặt, tâm trạng không vui.",
        "example": "I'm feeling a bit out of sorts today, maybe I'm catching a cold."
    },
    {
        "id": 151,
        "word": "Pass the buck",
        "type": "idiom",
        "pronunciation": "/pɑːs ðə bʌk/",
        "meaning": "Đùn đẩy trách nhiệm cho người khác.",
        "example": "Instead of admitting his mistake, he tried to pass the buck to his team."
    },
    {
        "id": 152,
        "word": "Pay tribute to",
        "type": "collocation",
        "pronunciation": "/peɪ ˈtrɪb.juːt tuː/",
        "meaning": "Bày tỏ lòng thành kính, tưởng nhớ.",
        "example": "The concert was organized to pay tribute to the late singer."
    },
    {
        "id": 153,
        "word": "Play truant",
        "type": "collocation",
        "pronunciation": "/pleɪ ˈtruː.ənt/",
        "meaning": "Trốn học.",
        "example": "Parents should be fined if their children constantly play truant."
    },
    {
        "id": 154,
        "word": "Put two and two together",
        "type": "idiom",
        "pronunciation": "/pʊt tuː ənd tuː təˈɡeð.ə/",
        "meaning": "Tự suy luận, xâu chuỗi sự việc để hiểu ra vấn đề.",
        "example": "When I saw them holding hands, I put two and two together."
    },
    {
        "id": 155,
        "word": "Hit the jackpot",
        "type": "idiom",
        "pronunciation": "/hɪt ðə ˈdʒæk.pɒt/",
        "meaning": "Trúng mánh, đột nhiên nhận được nhiều tiền/thành công.",
        "example": "He really hit the jackpot when he bought that rare comic book."
    },
    {
        "id": 156,
        "word": "Shed crocodile tears",
        "type": "idiom",
        "pronunciation": "/ʃed ˈkrɒk.ə.daɪl tɪəz/",
        "meaning": "Rơi nước mắt cá sấu (giả vờ khóc/buồn).",
        "example": "She shed crocodile tears when her rival lost the match."
    },
    {
        "id": 157,
        "word": "Sleep like a log",
        "type": "idiom",
        "pronunciation": "/sliːp laɪk ə lɒɡ/",
        "meaning": "Ngủ say như chết, ngủ rất ngon.",
        "example": "I was so exhausted that I slept like a log last night."
    },
    {
        "id": 158,
        "word": "Smell a rat",
        "type": "idiom",
        "pronunciation": "/smel ə ræt/",
        "meaning": "Cảm thấy có điều gì đó mờ ám, đáng nghi.",
        "example": "He said he was sick, but I smelled a rat when I saw him at the mall."
    },
    {
        "id": 159,
        "word": "Stand on one's own two feet",
        "type": "idiom",
        "pronunciation": "/stænd ɒn wʌnz əʊn tuː fiːt/",
        "meaning": "Tự lập, không dựa dẫm vào ai.",
        "example": "It's time for you to get a job and stand on your own two feet."
    },
    {
        "id": 160,
        "word": "Take offence (at)",
        "type": "collocation",
        "pronunciation": "/teɪk əˈfens/",
        "meaning": "Mích lòng, cảm thấy bị xúc phạm.",
        "example": "She took offence at my innocent comment about her dress."
    },
    {
        "id": 161,
        "word": "Take the initiative",
        "type": "collocation",
        "pronunciation": "/teɪk ði ɪˈnɪʃ.ə.tɪv/",
        "meaning": "Nắm thế chủ động, khởi xướng.",
        "example": "You should take the initiative and ask for a promotion."
    },
    {
        "id": 162,
        "word": "A pack of lies",
        "type": "idiom",
        "pronunciation": "/ə pæk əv laɪz/",
        "meaning": "Một loạt lời nói dối trắng trợn.",
        "example": "Everything he told the police was a pack of lies."
    },
    {
        "id": 163,
        "word": "Turn over a new leaf",
        "type": "idiom",
        "pronunciation": "/tɜːn ˈəʊ.vər ə njuː liːf/",
        "meaning": "Bước sang trang mới (thay đổi bản thân tốt hơn).",
        "example": "He promised to turn over a new leaf and stop drinking."
    },
    {
        "id": 164,
        "word": "Word for word",
        "type": "idiom",
        "pronunciation": "/wɜːd fɔː wɜːd/",
        "meaning": "Từng từ một, chính xác y đúc.",
        "example": "She memorized the poem and repeated it word for word."
    },
    {
        "id": 165,
        "word": "A breath of fresh air",
        "type": "idiom",
        "pronunciation": "/ə breθ əv freʃ eə/",
        "meaning": "Một luồng gió mới (sự thay đổi mới mẻ, dễ chịu).",
        "example": "Her enthusiasm is a breath of fresh air in this boring office."
    },
    {
        "id": 166,
        "word": "Be on the safe side",
        "type": "idiom",
        "pronunciation": "/bi ɒn ðə seɪf saɪd/",
        "meaning": "Cho chắc ăn, phòng hờ rủi ro.",
        "example": "Take an umbrella just to be on the safe side."
    },
    {
        "id": 167,
        "word": "Go off the rails",
        "type": "idiom",
        "pronunciation": "/ɡəʊ ɒf ðə reɪlz/",
        "meaning": "Đi chệch hướng, trở nên mất kiểm soát/hư hỏng.",
        "example": "He was a good student until he went off the rails in high school."
    },
    {
        "id": 168,
        "word": "Behind closed doors",
        "type": "idiom",
        "pronunciation": "/bɪˈhaɪnd kləʊzd dɔːz/",
        "meaning": "Kín cổng cao tường, họp kín không công khai.",
        "example": "The negotiation was held behind closed doors."
    },
    {
        "id": 169,
        "word": "Behind the times",
        "type": "idiom",
        "pronunciation": "/bɪˈhaɪnd ðə taɪmz/",
        "meaning": "Lạc hậu, lỗi thời.",
        "example": "My grandfather doesn't use a smartphone; he's a bit behind the times."
    },
    {
        "id": 170,
        "word": "Blow one's top",
        "type": "idiom",
        "pronunciation": "/bləʊ wʌnz tɒp/",
        "meaning": "Tức giận điên cuồng.",
        "example": "My boss is going to blow his top when he sees this mistake."
    },
    {
        "id": 171,
        "word": "Break the news",
        "type": "idiom",
        "pronunciation": "/breɪk ðə njuːz/",
        "meaning": "Báo một tin tức (thường là tin buồn/bất ngờ).",
        "example": "Who is going to break the news of his death to his family?"
    },
    {
        "id": 172,
        "word": "Catch one's breath",
        "type": "idiom",
        "pronunciation": "/kætʃ wʌnz breθ/",
        "meaning": "Lấy lại hơi (sau khi vận động mạnh).",
        "example": "Wait a minute, I need to catch my breath before we keep running."
    },
    {
        "id": 173,
        "word": "Clear one's throat",
        "type": "idiom",
        "pronunciation": "/klɪə wʌnz θrəʊt/",
        "meaning": "Hắng giọng (để chuẩn bị nói hoặc gây chú ý).",
        "example": "He cleared his throat and began his speech."
    },
    {
        "id": 174,
        "word": "Come to terms with",
        "type": "idiom",
        "pronunciation": "/kʌm tuː tɜːmz wɪð/",
        "meaning": "Dần chấp nhận một sự thật đau lòng.",
        "example": "It took her a long time to come to terms with her father's death."
    },
    {
        "id": 175,
        "word": "Cross one's mind",
        "type": "idiom",
        "pronunciation": "/krɒs wʌnz maɪnd/",
        "meaning": "Chợt nảy ra trong đầu, lướt qua tâm trí.",
        "example": "It never crossed my mind that he might be lying."
    },
    {
        "id": 176,
        "word": "Do someone good",
        "type": "idiom",
        "pronunciation": "/duː ˈsʌm.wʌn ɡʊd/",
        "meaning": "Có lợi cho ai, làm ai thấy tốt hơn.",
        "example": "A week by the sea will do you good."
    },
    {
        "id": 177,
        "word": "Fall to pieces",
        "type": "idiom",
        "pronunciation": "/fɔːl tuː ˈpiː.sɪz/",
        "meaning": "Sụp đổ tinh thần, suy sụp hoàn toàn.",
        "example": "She fell to pieces when she heard the tragic news."
    },
    {
        "id": 178,
        "word": "Get the gist of",
        "type": "idiom",
        "pronunciation": "/ɡet ðə dʒɪst əv/",
        "meaning": "Nắm được ý chính.",
        "example": "I didn't understand every word, but I got the gist of the article."
    },
    {
        "id": 179,
        "word": "Give somebody a lift/ride",
        "type": "collocation",
        "pronunciation": "/ɡɪv ˈsʌm.bə.di ə lɪft/",
        "meaning": "Cho ai đi nhờ xe.",
        "example": "My car is in the garage; can you give me a lift to work?"
    },
    {
        "id": 180,
        "word": "Not have a clue",
        "type": "idiom",
        "pronunciation": "/nɒt hæv ə kluː/",
        "meaning": "Hoàn toàn không biết gì.",
        "example": "I don't have a clue how to fix this broken television."
    },
    {
        "id": 181,
        "word": "Hold one's breath",
        "type": "idiom",
        "pronunciation": "/həʊld wʌnz breθ/",
        "meaning": "Nín thở (do hồi hộp/chờ đợi).",
        "example": "The audience held their breath as the acrobat performed the stunt."
    },
    {
        "id": 182,
        "word": "In a hurry",
        "type": "prep. phr.",
        "pronunciation": "/ɪn ə ˈhʌr.i/",
        "meaning": "Đang vội.",
        "example": "I can't talk right now; I'm in a hurry to catch my train."
    },
    {
        "id": 183,
        "word": "Keep a secret",
        "type": "collocation",
        "pronunciation": "/kiːp ə ˈsiː.krət/",
        "meaning": "Giữ bí mật.",
        "example": "Can you keep a secret? I'm planning to propose to her."
    },
    {
        "id": 184,
        "word": "Keep one's temper",
        "type": "idiom",
        "pronunciation": "/kiːp wʌnz ˈtem.pə/",
        "meaning": "Kiềm chế cơn giận, giữ bình tĩnh.",
        "example": "He provoked me, but I managed to keep my temper."
    },
    {
        "id": 185,
        "word": "Learn the hard way",
        "type": "idiom",
        "pronunciation": "/lɜːn ðə hɑːd weɪ/",
        "meaning": "Học được bài học từ chính sai lầm, thất bại.",
        "example": "He wouldn't listen to my advice, so he had to learn the hard way."
    },
    {
        "id": 186,
        "word": "Make an exception",
        "type": "collocation",
        "pronunciation": "/meɪk ən ɪkˈsep.ʃən/",
        "meaning": "Đưa ra ngoại lệ, phá lệ.",
        "example": "We don't usually accept late applications, but we'll make an exception."
    },
    {
        "id": 187,
        "word": "Make fun of",
        "type": "collocation",
        "pronunciation": "/meɪk fʌn əv/",
        "meaning": "Chế nhạo, trêu chọc ai.",
        "example": "It's cruel to make fun of people with disabilities."
    },
    {
        "id": 188,
        "word": "Make room for",
        "type": "collocation",
        "pronunciation": "/meɪk ruːm fɔː/",
        "meaning": "Nhường chỗ cho.",
        "example": "We moved the sofa to make room for the Christmas tree."
    },
    {
        "id": 189,
        "word": "Mind one's own business",
        "type": "idiom",
        "pronunciation": "/maɪnd wʌnz əʊn ˈbɪz.nɪs/",
        "meaning": "Lo chuyện của mình đi (đừng xen vào chuyện người khác).",
        "example": "Stop asking about my salary and mind your own business!"
    },
    {
        "id": 190,
        "word": "On the point of",
        "type": "prep. phr.",
        "pronunciation": "/ɒn ðə pɔɪnt əv/",
        "meaning": "Sắp sửa làm gì.",
        "example": "I was on the point of leaving when the phone rang."
    },
    {
        "id": 191,
        "word": "Out of practice",
        "type": "idiom",
        "pronunciation": "/aʊt əv ˈpræk.tɪs/",
        "meaning": "Bị lụt nghề (do lâu không rèn luyện).",
        "example": "I used to play the piano well, but I'm completely out of practice now."
    },
    {
        "id": 192,
        "word": "Put pressure on",
        "type": "collocation",
        "pronunciation": "/pʊt ˈpreʃ.ər ɒn/",
        "meaning": "Gây áp lực cho ai.",
        "example": "Parents should not put too much pressure on their children."
    },
    {
        "id": 193,
        "word": "Take exception to",
        "type": "idiom",
        "pronunciation": "/teɪk ɪkˈsep.ʃən tuː/",
        "meaning": "Phản đối, phật ý với điều gì.",
        "example": "I take great exception to your unfair comments."
    },
    {
        "id": 194,
        "word": "Take pity on",
        "type": "collocation",
        "pronunciation": "/teɪk ˈpɪt.i ɒn/",
        "meaning": "Động lòng thương xót ai.",
        "example": "We took pity on the stray dog and brought it inside."
    },
    {
        "id": 195,
        "word": "Bear a resemblance to",
        "type": "collocation",
        "pronunciation": "/beər ə rɪˈzem.bləns tuː/",
        "meaning": "Giống với (người/vật nào đó).",
        "example": "The child bears a striking resemblance to his grandfather."
    },
    {
        "id": 196,
        "word": "A close shave/call",
        "type": "idiom",
        "pronunciation": "/ə kləʊs ʃeɪv/",
        "meaning": "Thoát chết/thoát nạn trong gang tấc.",
        "example": "The car missed me by inches; that was a close shave!"
    },
    {
        "id": 197,
        "word": "Get to the bottom of",
        "type": "idiom",
        "pronunciation": "/ɡet tuː ðə ˈbɒt.əm əv/",
        "meaning": "Tìm ra ngọn ngành, nguyên nhân sâu xa của vấn đề.",
        "example": "The police are trying to get to the bottom of the murder case."
    },
    {
        "id": 198,
        "word": "Keep someone company",
        "type": "collocation",
        "pronunciation": "/kiːp ˈsʌm.wʌn ˈkʌm.pə.ni/",
        "meaning": "Ở lại bầu bạn với ai để họ đỡ buồn/cô đơn.",
        "example": "I'll stay here and keep you company while you wait."
    },
    {
        "id": 199,
        "word": "Leave much to be desired",
        "type": "idiom",
        "pronunciation": "/liːv mʌtʃ tuː bi dɪˈzaɪəd/",
        "meaning": "Chưa được tốt lắm, còn nhiều thiếu sót.",
        "example": "His performance in the final match left much to be desired."
    },
    {
        "id": 200,
        "word": "Make a point of",
        "type": "idiom",
        "pronunciation": "/meɪk ə pɔɪnt əv/",
        "meaning": "Chú ý làm việc gì vì cho rằng nó quan trọng.",
        "example": "I always make a point of arriving early for interviews."
    },
    {
        "id": 201,
        "word": "Make a scene",
        "type": "idiom",
        "pronunciation": "/meɪk ə siːn/",
        "meaning": "Làm ầm ĩ ở nơi công cộng.",
        "example": "Please don't make a scene here in the restaurant!"
    },
    {
        "id": 202,
        "word": "Broaden one's horizons",
        "type": "idiom",
        "pronunciation": "/ˈbrɔː.dən wʌnz həˈraɪ.zənz/",
        "meaning": "Mở rộng tầm nhìn, vốn hiểu biết.",
        "example": "Traveling abroad is a great way to broaden your horizons."
    },
    {
        "id": 203,
        "word": "A foregone conclusion",
        "type": "idiom",
        "pronunciation": "/ə ˈfɔː.ɡɒn kənˈkluː.ʒən/",
        "meaning": "Kết quả đã được dự đoán trước, không thể thay đổi.",
        "example": "The team's victory was a foregone conclusion."
    },
    {
        "id": 204,
        "word": "A leap in the dark",
        "type": "idiom",
        "pronunciation": "/ə liːp ɪn ðə dɑːk/",
        "meaning": "Hành động mạo hiểm, nhắm mắt làm liều.",
        "example": "Starting a business during a recession is a leap in the dark."
    },
    {
        "id": 205,
        "word": "Be at odds with",
        "type": "idiom",
        "pronunciation": "/bi ət ɒdz wɪð/",
        "meaning": "Bất đồng quan điểm, mâu thuẫn với.",
        "example": "He is always at odds with his father over politics."
    },
    {
        "id": 206,
        "word": "Beyond a shadow of a doubt",
        "type": "idiom",
        "pronunciation": "/bɪˈjɒnd ə ˈʃæd.əʊ əv ə daʊt/",
        "meaning": "Không còn mảy may nghi ngờ gì nữa.",
        "example": "He is, beyond a shadow of a doubt, the best player on the team."
    },
    {
        "id": 207,
        "word": "By all means",
        "type": "idiom",
        "pronunciation": "/baɪ ɔːl miːnz/",
        "meaning": "Cứ tự nhiên, dĩ nhiên rồi (dùng khi đồng ý).",
        "example": "\"Can I borrow your pen?\" – \"Yes, by all means.\""
    },
    {
        "id": 208,
        "word": "Down on one's luck",
        "type": "idiom",
        "pronunciation": "/daʊn ɒn wʌnz lʌk/",
        "meaning": "Gặp vận xui, khó khăn (đặc biệt về tiền bạc).",
        "example": "He's been down on his luck since he lost his job."
    },
    {
        "id": 209,
        "word": "Far and wide",
        "type": "idiom",
        "pronunciation": "/fɑːr ənd waɪd/",
        "meaning": "Khắp mọi nơi, rải rác ở diện rộng.",
        "example": "People came from far and wide to attend the festival."
    },
    {
        "id": 210,
        "word": "For the sake of",
        "type": "prep. phr.",
        "pronunciation": "/fɔː ðə seɪk əv/",
        "meaning": "Vì lợi ích của, vì mục đích.",
        "example": "They stayed together for the sake of their children."
    },
    {
        "id": 211,
        "word": "Over the moon",
        "type": "idiom",
        "pronunciation": "/ˌəʊ.və ðə ˈmuːn/",
        "meaning": "Cực kỳ vui sướng, hạnh phúc.",
        "example": "She was over the moon when she got her exam results."
    },
    {
        "id": 212,
        "word": "On cloud nine",
        "type": "idiom",
        "pronunciation": "/ɒn klaʊd naɪn/",
        "meaning": "Rất vui vẻ, lâng lâng trên mây.",
        "example": "He was on cloud nine after winning the match."
    },
    {
        "id": 213,
        "word": "Jump for joy",
        "type": "idiom",
        "pronunciation": "/dʒʌmp fɔː dʒɔɪ/",
        "meaning": "Nhảy cẫng lên vì vui sướng.",
        "example": "The children jumped for joy when they saw the gifts."
    },
    {
        "id": 214,
        "word": "Tickled pink",
        "type": "idiom",
        "pronunciation": "/ˈtɪk.əld pɪŋk/",
        "meaning": "Rất hài lòng, vô cùng thích thú.",
        "example": "I was tickled pink by her lovely compliment."
    },
    {
        "id": 215,
        "word": "Down in the dumps",
        "type": "idiom",
        "pronunciation": "/daʊn ɪn ðə dʌmps/",
        "meaning": "Buồn bã, chán nản.",
        "example": "He's been down in the dumps since he failed the test."
    },
    {
        "id": 216,
        "word": "Feeling blue",
        "type": "idiom",
        "pronunciation": "/ˈfiː.lɪŋ bluː/",
        "meaning": "Cảm thấy buồn bã, u sầu.",
        "example": "I'm feeling a bit blue today because of the rain."
    },
    {
        "id": 217,
        "word": "See red",
        "type": "idiom",
        "pronunciation": "/siː red/",
        "meaning": "Cực kỳ tức giận.",
        "example": "People who drop litter make me see red."
    },
    {
        "id": 218,
        "word": "Scared stiff",
        "type": "idiom",
        "pronunciation": "/skeəd stɪf/",
        "meaning": "Sợ cứng người, sợ điếng người.",
        "example": "I was scared stiff when I heard that strange noise."
    },
    {
        "id": 219,
        "word": "Butterflies in one's stomach",
        "type": "idiom",
        "pronunciation": "/ˈbʌt.ə.flaɪz ɪn wʌnz ˈstʌm.ək/",
        "meaning": "Bồn chồn, lo lắng (trước sự kiện lớn).",
        "example": "I had butterflies in my stomach before the interview."
    },
    {
        "id": 220,
        "word": "In high spirits",
        "type": "idiom",
        "pronunciation": "/ɪn haɪ ˈspɪr.ɪts/",
        "meaning": "Tinh thần phấn chấn, vui vẻ.",
        "example": "The team was in high spirits after the victory."
    },
    {
        "id": 221,
        "word": "Pass with flying colors",
        "type": "idiom",
        "pronunciation": "/pɑːs wɪð ˈflaɪ.ɪŋ ˈkʌl.əz/",
        "meaning": "Vượt qua xuất sắc (kỳ thi/thử thách).",
        "example": "She passed her driving test with flying colors."
    },
    {
        "id": 222,
        "word": "Hit the books",
        "type": "idiom",
        "pronunciation": "/hɪt ðə bʊks/",
        "meaning": "Bắt đầu học bài, cắm đầu vào học.",
        "example": "I have an exam tomorrow, so I need to hit the books."
    },
    {
        "id": 223,
        "word": "Learn the ropes",
        "type": "idiom",
        "pronunciation": "/lɜːn ðə rəʊps/",
        "meaning": "Học cách làm việc, làm quen công việc.",
        "example": "It took him a few weeks to learn the ropes at his new job."
    },
    {
        "id": 224,
        "word": "A piece of cake",
        "type": "idiom",
        "pronunciation": "/ə piːs əv keɪk/",
        "meaning": "Rất dễ dàng.",
        "example": "Don't worry, the math test will be a piece of cake."
    },
    {
        "id": 225,
        "word": "Ace a test",
        "type": "idiom",
        "pronunciation": "/eɪs ə test/",
        "meaning": "Đạt điểm tuyệt đối/rất cao trong bài thi.",
        "example": "He studied really hard and aced the chemistry test."
    },
    {
        "id": 226,
        "word": "Hit the nail on the head",
        "type": "idiom",
        "pronunciation": "/hɪt ðə neɪl ɒn ðə hed/",
        "meaning": "Nói trúng phóc, làm chính xác.",
        "example": "You hit the nail on the head with that excellent answer!"
    },
    {
        "id": 227,
        "word": "Miss the boat",
        "type": "idiom",
        "pronunciation": "/mɪs ðə bəʊt/",
        "meaning": "Bỏ lỡ cơ hội.",
        "example": "If you don't apply for the scholarship now, you'll miss the boat."
    },
    {
        "id": 228,
        "word": "Blow one's chance",
        "type": "idiom",
        "pronunciation": "/bləʊ wʌnz tʃɑːns/",
        "meaning": "Đánh mất cơ hội.",
        "example": "He blew his chance to work in Paris by being late for the interview."
    },
    {
        "id": 229,
        "word": "Fall flat on one's face",
        "type": "idiom",
        "pronunciation": "/fɔːl flæt ɒn wʌnz feɪs/",
        "meaning": "Thất bại thảm hại.",
        "example": "The project fell flat on its face due to poor planning."
    },
    {
        "id": 230,
        "word": "Back to square one",
        "type": "idiom",
        "pronunciation": "/bæk tuː skweə wʌn/",
        "meaning": "Trở lại vạch xuất phát, làm lại từ đầu.",
        "example": "The deal collapsed, so we are back to square one."
    },
    {
        "id": 231,
        "word": "Beat the clock",
        "type": "idiom",
        "pronunciation": "/biːt ðə klɒk/",
        "meaning": "Hoàn thành việc gì trước thời hạn.",
        "example": "They managed to beat the clock and submit the report on time."
    },
    {
        "id": 232,
        "word": "Against the clock",
        "type": "idiom",
        "pronunciation": "/əˈɡenst ðə klɒk/",
        "meaning": "Chạy đua với thời gian.",
        "example": "We are working against the clock to finish this project."
    },
    {
        "id": 233,
        "word": "In the nick of time",
        "type": "idiom",
        "pronunciation": "/ɪn ðə nɪk əv taɪm/",
        "meaning": "Vừa kịp lúc, sát nút.",
        "example": "The doctor arrived in the nick of time to save the patient."
    },
    {
        "id": 234,
        "word": "Once in a blue moon",
        "type": "idiom",
        "pronunciation": "/wʌns ɪn ə bluː muːn/",
        "meaning": "Rất hiếm khi xảy ra.",
        "example": "I only eat fast food once in a blue moon."
    },
    {
        "id": 235,
        "word": "Time flies",
        "type": "idiom",
        "pronunciation": "/taɪm flaɪz/",
        "meaning": "Thời gian trôi qua nhanh.",
        "example": "Time flies when you're having fun with friends!"
    },
    {
        "id": 236,
        "word": "Around the clock",
        "type": "idiom",
        "pronunciation": "/əˈraʊnd ðə klɒk/",
        "meaning": "Suốt ngày đêm (24/24).",
        "example": "The local pharmacy is open around the clock."
    },
    {
        "id": 237,
        "word": "Call it a day",
        "type": "idiom",
        "pronunciation": "/kɔːl ɪt ə deɪ/",
        "meaning": "Kết thúc công việc trong ngày.",
        "example": "We've done enough work for now. Let's call it a day."
    },
    {
        "id": 238,
        "word": "Kill time",
        "type": "idiom",
        "pronunciation": "/kɪl taɪm/",
        "meaning": "Giết thời gian (chờ đợi).",
        "example": "We killed time by playing cards while waiting for the train."
    },
    {
        "id": 239,
        "word": "On the spur of the moment",
        "type": "idiom",
        "pronunciation": "/ɒn ðə spɜːr əv ðə ˈməʊ.mənt/",
        "meaning": "Quyết định bốc đồng, không chuẩn bị.",
        "example": "We decided to go to the beach on the spur of the moment."
    },
    {
        "id": 240,
        "word": "Better late than never",
        "type": "idiom",
        "pronunciation": "/ˈbet.ə leɪt ðæn ˈnev.ə/",
        "meaning": "Thà muộn còn hơn không.",
        "example": "He finally apologized. Well, better late than never!"
    },
    {
        "id": 241,
        "word": "Break the ice",
        "type": "idiom",
        "pronunciation": "/breɪk ði aɪs/",
        "meaning": "Phá vỡ sự ngại ngùng ban đầu.",
        "example": "He told a funny joke to break the ice at the meeting."
    },
    {
        "id": 242,
        "word": "Spill the beans",
        "type": "idiom",
        "pronunciation": "/spɪl ðə biːnz/",
        "meaning": "Tiết lộ bí mật.",
        "example": "Come on, spill the beans! What did she tell you?"
    },
    {
        "id": 243,
        "word": "Let the cat out of the bag",
        "type": "idiom",
        "pronunciation": "/let ðə kæt aʊt əv ðə bæɡ/",
        "meaning": "Vô tình để lộ bí mật.",
        "example": "I wanted it to be a surprise, but my brother let the cat out of the bag."
    },
    {
        "id": 244,
        "word": "See eye to eye",
        "type": "idiom",
        "pronunciation": "/siː aɪ tuː aɪ/",
        "meaning": "Đồng tình, cùng quan điểm.",
        "example": "My father and I don't always see eye to eye on politics."
    },
    {
        "id": 245,
        "word": "Bite your tongue",
        "type": "idiom",
        "pronunciation": "/baɪt jɔː tʌŋ/",
        "meaning": "Cố nhịn không nói ra điều gì.",
        "example": "I had to bite my tongue so I wouldn't say something rude."
    },
    {
        "id": 246,
        "word": "Hear it on the grapevine",
        "type": "idiom",
        "pronunciation": "/hɪər ɪt ɒn ðə ˈɡreɪp.vaɪn/",
        "meaning": "Nghe đồn đại, nghe loáng thoáng.",
        "example": "I heard on the grapevine that she is moving to London."
    },
    {
        "id": 247,
        "word": "Keep someone in the loop",
        "type": "idiom",
        "pronunciation": "/kiːp ˈsʌm.wʌn ɪn ðə luːp/",
        "meaning": "Cập nhật thông tin cho ai đó.",
        "example": "Please keep me in the loop about the project updates."
    },
    {
        "id": 248,
        "word": "Beat around the bush",
        "type": "idiom",
        "pronunciation": "/biːt əˈraʊnd ðə bʊʃ/",
        "meaning": "Nói vòng vo tam quốc.",
        "example": "Stop beating around the bush and tell me what happened!"
    },
    {
        "id": 249,
        "word": "Get straight to the point",
        "type": "idiom",
        "pronunciation": "/ɡet streɪt tuː ðə pɔɪnt/",
        "meaning": "Đi thẳng vào vấn đề.",
        "example": "Let's get straight to the point: we are running out of money."
    },
    {
        "id": 250,
        "word": "Give someone the cold shoulder",
        "type": "idiom",
        "pronunciation": "/ɡɪv ˈsʌm.wʌn ðə kəʊld ˈʃəʊl.də/",
        "meaning": "Cố tình phớt lờ, lạnh nhạt với ai.",
        "example": "I thought we were friends, but she gave me the cold shoulder."
    },
    {
        "id": 251,
        "word": "Cost an arm and a leg",
        "type": "idiom",
        "pronunciation": "/kɒst ən ɑːm ənd ə leɡ/",
        "meaning": "Rất đắt đỏ.",
        "example": "Buying a house in this city costs an arm and a leg."
    },
    {
        "id": 252,
        "word": "Bring home the bacon",
        "type": "idiom",
        "pronunciation": "/brɪŋ həʊm ðə ˈbeɪ.kən/",
        "meaning": "Kiếm tiền nuôi gia đình.",
        "example": "My husband works two jobs to bring home the bacon."
    },
    {
        "id": 253,
        "word": "Break the bank",
        "type": "idiom",
        "pronunciation": "/breɪk ðə bæŋk/",
        "meaning": "Tiêu tốn hết sạch tiền.",
        "example": "You don't have to break the bank to buy a good smartphone."
    },
    {
        "id": 254,
        "word": "Bread and butter",
        "type": "idiom",
        "pronunciation": "/bred ənd ˈbʌt.ə/",
        "meaning": "Nguồn thu nhập chính, kế sinh nhai.",
        "example": "Teaching English is his bread and butter."
    },
    {
        "id": 255,
        "word": "Tighten one's belt",
        "type": "idiom",
        "pronunciation": "/ˈtaɪ.tən wʌnz belt/",
        "meaning": "Thắt lưng buộc bụng, chi tiêu tiết kiệm.",
        "example": "We need to tighten our belts during this economic crisis."
    },
    {
        "id": 256,
        "word": "Pour money down the drain",
        "type": "idiom",
        "pronunciation": "/pɔː ˈmʌn.i daʊn ðə dreɪn/",
        "meaning": "Ném tiền qua cửa sổ, lãng phí tiền.",
        "example": "Fixing that old car is just pouring money down the drain."
    },
    {
        "id": 257,
        "word": "Live paycheck to paycheck",
        "type": "idiom",
        "pronunciation": "/lɪv ˈpeɪ.tʃek tuː ˈpeɪ.tʃek/",
        "meaning": "Kiếm đồng nào xào đồng nấy.",
        "example": "Many families have to live paycheck to paycheck nowadays."
    },
    {
        "id": 258,
        "word": "A dime a dozen",
        "type": "idiom",
        "pronunciation": "/ə daɪm ə ˈdʌz.ən/",
        "meaning": "Rất phổ biến, tầm thường (giá trị thấp).",
        "example": "Blogs about travel are a dime a dozen these days."
    },
    {
        "id": 259,
        "word": "Born with a silver spoon",
        "type": "idiom",
        "pronunciation": "/bɔːn wɪð ə ˈsɪl.və spuːn/",
        "meaning": "Ngậm thìa vàng, sinh ra trong nhà giàu.",
        "example": "He never had to work hard; he was born with a silver spoon in his mouth."
    },
    {
        "id": 260,
        "word": "Make a killing",
        "type": "idiom",
        "pronunciation": "/meɪk ə ˈkɪl.ɪŋ/",
        "meaning": "Kiếm được rất nhiều tiền nhanh chóng.",
        "example": "They made a killing selling face masks last year."
    },
    {
        "id": 261,
        "word": "Burn the midnight oil",
        "type": "idiom",
        "pronunciation": "/bɜːn ðə ˈmɪd.naɪt ɔɪl/",
        "meaning": "Thức khuya làm việc/học bài.",
        "example": "I had to burn the midnight oil to finish my graduation thesis."
    },
    {
        "id": 262,
        "word": "Go the extra mile",
        "type": "idiom",
        "pronunciation": "/ɡəʊ ði ˈek.strə maɪl/",
        "meaning": "Nỗ lực nhiều hơn mức bình thường.",
        "example": "She always goes the extra mile to help her students."
    },
    {
        "id": 263,
        "word": "Pull one's weight",
        "type": "idiom",
        "pronunciation": "/pʊl wʌnz weɪt/",
        "meaning": "Làm tròn phần việc, trách nhiệm.",
        "example": "If you don't pull your weight, you will be kicked out of the group."
    },
    {
        "id": 264,
        "word": "Bite off more than you can chew",
        "type": "idiom",
        "pronunciation": "/baɪt ɒf mɔː ðæn juː kæn tʃuː/",
        "meaning": "Ôm đồm quá nhiều việc, cố làm quá sức.",
        "example": "Taking on three projects at once was biting off more than he could chew."
    },
    {
        "id": 265,
        "word": "Caught between a rock and a hard place",
        "type": "idiom",
        "pronunciation": "/kɔːt bɪˈtwiːn ə rɒk ənd ə hɑːd pleɪs/",
        "meaning": "Tiến thoái lưỡng nan.",
        "example": "I'm caught between a rock and a hard place regarding this decision."
    },
    {
        "id": 266,
        "word": "Cut corners",
        "type": "idiom",
        "pronunciation": "/kʌt ˈkɔː.nəz/",
        "meaning": "Đi tắt đón đầu, làm ẩu để bớt tiền/thời gian.",
        "example": "You should never cut corners when building a house."
    },
    {
        "id": 267,
        "word": "Hang in there",
        "type": "idiom",
        "pronunciation": "/hæŋ ɪn ðeə/",
        "meaning": "Kiên nhẫn, đừng bỏ cuộc.",
        "example": "Hang in there! The exam season will be over soon."
    },
    {
        "id": 268,
        "word": "Up in the air",
        "type": "idiom",
        "pronunciation": "/ʌp ɪn ði eə/",
        "meaning": "Chưa chắc chắn, chưa được quyết định.",
        "example": "Our holiday plans are still up in the air due to the bad weather."
    },
    {
        "id": 269,
        "word": "Tip of the iceberg",
        "type": "idiom",
        "pronunciation": "/tɪp əv ði ˈaɪs.bɜːɡ/",
        "meaning": "Bề nổi của tảng băng chìm.",
        "example": "These small protests are just the tip of the iceberg."
    },
    {
        "id": 270,
        "word": "Cross that bridge when you come to it",
        "type": "idiom",
        "pronunciation": "/krɒs ðæt brɪdʒ wen juː kʌm tuː ɪt/",
        "meaning": "Chuyện đến đâu hay đến đó, không lo vội.",
        "example": "We might run out of money, but we'll cross that bridge when we come to it."
    },
    {
        "id": 271,
        "word": "A blessing in disguise",
        "type": "idiom",
        "pronunciation": "/ə ˈbles.ɪŋ ɪn dɪsˈɡaɪz/",
        "meaning": "Trong cái rủi có cái may.",
        "example": "Losing that job was a blessing in disguise because I found a better one."
    },
    {
        "id": 272,
        "word": "Actions speak louder than words",
        "type": "idiom",
        "pronunciation": "/ˈæk.ʃənz spiːk ˈlaʊ.də ðæn wɜːdz/",
        "meaning": "Hành động có ý nghĩa hơn lời nói.",
        "example": "You keep saying you'll change, but actions speak louder than words."
    },
    {
        "id": 273,
        "word": "Don't judge a book by its cover",
        "type": "idiom",
        "pronunciation": "/dəʊnt dʒʌdʒ ə bʊk baɪ ɪts ˈkʌv.ə/",
        "meaning": "Đừng trông mặt mà bắt hình dong.",
        "example": "He looks messy, but he's a genius. Don't judge a book by its cover."
    },
    {
        "id": 274,
        "word": "Every cloud has a silver lining",
        "type": "idiom",
        "pronunciation": "/ˈev.ri klaʊd hæz ə ˈsɪl.və ˈlaɪ.nɪŋ/",
        "meaning": "Sau cơn mưa trời lại sáng.",
        "example": "I failed the interview, but every cloud has a silver lining – I got a better job."
    },
    {
        "id": 275,
        "word": "The best of both worlds",
        "type": "idiom",
        "pronunciation": "/ðə best əv bəʊθ wɜːldz/",
        "meaning": "Vẹn cả đôi đường.",
        "example": "Working from home offers the best of both worlds."
    },
    {
        "id": 276,
        "word": "Cry over spilled milk",
        "type": "idiom",
        "pronunciation": "/kraɪ ˈəʊ.və spɪld mɪlk/",
        "meaning": "Khóc lóc, hối tiếc chuyện đã qua.",
        "example": "It's no use crying over spilled milk. You just have to try again."
    },
    {
        "id": 277,
        "word": "Put all your eggs in one basket",
        "type": "idiom",
        "pronunciation": "/pʊt ɔːl jɔːr eɡz ɪn wʌn ˈbɑː.skɪt/",
        "meaning": "Liều lĩnh gom hết tài sản/cơ hội vào 1 thứ.",
        "example": "Diversify your investments; don't put all your eggs in one basket."
    },
    {
        "id": 278,
        "word": "Barking up the wrong tree",
        "type": "idiom",
        "pronunciation": "/ˈbɑː.kɪŋ ʌp ðə rɒŋ triː/",
        "meaning": "Nhầm lẫn, đoán sai hướng.",
        "example": "If you think I broke your phone, you're barking up the wrong tree."
    },
    {
        "id": 279,
        "word": "Taste of your own medicine",
        "type": "idiom",
        "pronunciation": "/teɪst əv jɔːr əʊn ˈmed.ɪ.sən/",
        "meaning": "Gậy ông đập lưng ông.",
        "example": "He got a taste of his own medicine when his friends ignored him."
    },
    {
        "id": 280,
        "word": "Out of the blue",
        "type": "idiom",
        "pronunciation": "/aʊt əv ðə bluː/",
        "meaning": "Hoàn toàn bất ngờ, không báo trước.",
        "example": "She called me completely out of the blue after five years."
    },
    {
        "id": 281,
        "word": "Fit as a fiddle",
        "type": "idiom",
        "pronunciation": "/fɪt əz ə ˈfɪd.əl/",
        "meaning": "Rất khỏe mạnh, sung sức.",
        "example": "My grandfather is 80, but he is still fit as a fiddle."
    },
    {
        "id": 282,
        "word": "Under the weather",
        "type": "idiom",
        "pronunciation": "/ˈʌn.də ðə ˈweð.ə/",
        "meaning": "Cảm thấy ốm nhẹ, mệt mỏi.",
        "example": "I won't go to the party tonight; I'm feeling a bit under the weather."
    },
    {
        "id": 283,
        "word": "Back on one's feet",
        "type": "idiom",
        "pronunciation": "/bæk ɒn wʌnz fiːt/",
        "meaning": "Khỏe lại sau trận ốm (hoặc khó khăn).",
        "example": "Thanks for helping me get back on my feet after the accident."
    },
    {
        "id": 284,
        "word": "Look the picture of health",
        "type": "idiom",
        "pronunciation": "/lʊk ðə ˈpɪk.tʃər əv helθ/",
        "meaning": "Trông cực kỳ khỏe mạnh.",
        "example": "After her long vacation, she looks the picture of health."
    },
    {
        "id": 285,
        "word": "On one's last legs",
        "type": "idiom",
        "pronunciation": "/ɒn wʌnz lɑːst leɡz/",
        "meaning": "Gần hỏng (đồ vật) hoặc kiệt sức.",
        "example": "My old laptop is incredibly slow; I think it's on its last legs."
    },
    {
        "id": 286,
        "word": "Blind as a bat",
        "type": "idiom",
        "pronunciation": "/blaɪnd əz ə bæt/",
        "meaning": "Mắt rất kém, không nhìn rõ.",
        "example": "Without my glasses, I am as blind as a bat."
    },
    {
        "id": 287,
        "word": "Have a sweet tooth",
        "type": "idiom",
        "pronunciation": "/hæv ə swiːt tuːθ/",
        "meaning": "Hảo ngọt (thích ăn đồ ngọt).",
        "example": "I have a sweet tooth and absolutely can't resist chocolate."
    },
    {
        "id": 288,
        "word": "Out of shape",
        "type": "idiom",
        "pronunciation": "/aʊt əv ʃeɪp/",
        "meaning": "Không thon gọn, thiếu tập thể dục.",
        "example": "I really need to start going to the gym; I'm terribly out of shape."
    },
    {
        "id": 289,
        "word": "A bitter pill to swallow",
        "type": "idiom",
        "pronunciation": "/ə ˈbɪt.ə pɪl tuː ˈswɒl.əʊ/",
        "meaning": "Sự thật đắng lòng phải chấp nhận.",
        "example": "Losing the final match was a bitter pill to swallow for the team."
    },
    {
        "id": 290,
        "word": "Kick the bucket",
        "type": "idiom",
        "pronunciation": "/kɪk ðə ˈbʌk.ɪt/",
        "meaning": "Chết, qua đời (cách nói lóng).",
        "example": "Before I kick the bucket, I want to travel around the world."
    },
    {
        "id": 291,
        "word": "Bite the bullet",
        "type": "idiom",
        "pronunciation": "/baɪt ðə ˈbʊl.ɪt/",
        "meaning": "Cắn răng chịu đựng, đối mặt việc khó.",
        "example": "I hate going to the dentist, but I'll just have to bite the bullet."
    },
    {
        "id": 292,
        "word": "Sit on the fence",
        "type": "idiom",
        "pronunciation": "/sɪt ɒn ðə fens/",
        "meaning": "Ba phải, lưỡng lự không quyết định.",
        "example": "You can't sit on the fence forever; you need to choose a side!"
    },
    {
        "id": 293,
        "word": "Take it with a grain of salt",
        "type": "idiom",
        "pronunciation": "/teɪk ɪt wɪð ə ɡreɪn əv sɒlt/",
        "meaning": "Nghe để tham khảo, không tin hoàn toàn.",
        "example": "Read his review, but take it with a grain of salt because he's biased."
    },
    {
        "id": 294,
        "word": "Jump the gun",
        "type": "idiom",
        "pronunciation": "/dʒʌmp ðə ɡʌn/",
        "meaning": "Hành động hấp tấp, cầm đèn chạy trước ô tô.",
        "example": "Don't jump the gun and announce the news before it's officially confirmed."
    },
    {
        "id": 295,
        "word": "Play it by ear",
        "type": "idiom",
        "pronunciation": "/pleɪ ɪt baɪ ɪə/",
        "meaning": "Tùy cơ ứng biến.",
        "example": "We don't have a strict itinerary for the trip; we'll just play it by ear."
    },
    {
        "id": 296,
        "word": "Throw in the towel",
        "type": "idiom",
        "pronunciation": "/θrəʊ ɪn ðə ˈtaʊ.əl/",
        "meaning": "Đầu hàng, nhận thua.",
        "example": "After hours of trying to fix the broken code, I threw in the towel."
    },
    {
        "id": 297,
        "word": "Turn a blind eye",
        "type": "idiom",
        "pronunciation": "/tɜːn ə blaɪnd aɪ/",
        "meaning": "Nhắm mắt làm ngơ.",
        "example": "The manager turned a blind eye to the employees coming in late."
    },
    {
        "id": 298,
        "word": "Let sleeping dogs lie",
        "type": "idiom",
        "pronunciation": "/let ˈsliː.pɪŋ dɒɡz laɪ/",
        "meaning": "Không khơi lại chuyện cũ, để yên ổn.",
        "example": "Don't mention the old argument; it's best to let sleeping dogs lie."
    },
    {
        "id": 299,
        "word": "Put your foot down",
        "type": "idiom",
        "pronunciation": "/pʊt jɔː fʊt daʊn/",
        "meaning": "Kiên quyết từ chối, giữ vững lập trường.",
        "example": "You need to put your foot down and tell him you won't do his homework."
    },
    {
        "id": 300,
        "word": "Hit the sack",
        "type": "idiom",
        "pronunciation": "/hɪt ðə sæk/",
        "meaning": "Đi ngủ.",
        "example": "It's past midnight and I'm exhausted, I'm going to hit the sack."
    },
    {
        "id": 301,
        "word": "Steal someone's thunder",
        "type": "idiom",
        "pronunciation": "/stiːl ˈsʌm.wʌnz ˈθʌn.də/",
        "meaning": "Tranh công, làm lu mờ sự chú ý của ai.",
        "example": "John stole my thunder by announcing his engagement at my birthday party."
    },
    {
        "id": 302,
        "word": "Rule of thumb",
        "type": "idiom",
        "pronunciation": "/ruːl əv θʌm/",
        "meaning": "Nguyên tắc kinh nghiệm thực tiễn.",
        "example": "As a rule of thumb, one cup of rice needs two cups of water to cook."
    },
    {
        "id": 303,
        "word": "Out of the frying pan...",
        "type": "idiom",
        "pronunciation": "/aʊt əv ðə ˈfraɪ.ɪŋ pæn/",
        "meaning": "Tránh vỏ dưa gặp vỏ dừa (and into the fire).",
        "example": "By quitting a bad job for an even worse one, he jumped out of the frying pan and into the fire."
    },
    {
        "id": 304,
        "word": "The elephant in the room",
        "type": "idiom",
        "pronunciation": "/ði ˈel.ɪ.fənt ɪn ðə ruːm/",
        "meaning": "Vấn đề nhức nhối ai cũng biết nhưng lảng tránh.",
        "example": "Let's address the elephant in the room: our massive company debt."
    },
    {
        "id": 305,
        "word": "Ring a bell",
        "type": "idiom",
        "pronunciation": "/rɪŋ ə bel/",
        "meaning": "Nghe quen quen nhưng không nhớ rõ.",
        "example": "That name rings a bell, but I can't quite remember where I met him."
    },
    {
        "id": 306,
        "word": "Add insult to injury",
        "type": "idiom",
        "pronunciation": "/æd ˈɪn.sʌlt tuː ˈɪn.dʒər.i/",
        "meaning": "Xát muối vào nỗi đau, làm mọi thứ tồi tệ hơn.",
        "example": "To add insult to injury, it started pouring rain right after my car broke down."
    },
    {
        "id": 307,
        "word": "So far so good",
        "type": "idiom",
        "pronunciation": "/səʊ fɑː səʊ ɡʊd/",
        "meaning": "Cho đến nay mọi thứ vẫn ổn.",
        "example": "We've driven 300 miles and the car is fine. So far, so good."
    },
    {
        "id": 308,
        "word": "Devil's advocate",
        "type": "idiom",
        "pronunciation": "/ˈdev.əlz ˈæd.və.kət/",
        "meaning": "Kẻ đóng vai ác, cố tình phản bác để tranh luận.",
        "example": "I don't actually disagree with you, I'm just playing devil's advocate."
    },
    {
        "id": 309,
        "word": "Bite off someone's head",
        "type": "idiom",
        "pronunciation": "/baɪt ɒf ˈsʌm.wʌnz hed/",
        "meaning": "Mắng chửi ai đó một cách vô cớ/giận dữ.",
        "example": "I just asked a simple question, there's no need to bite my head off!"
    },
    {
        "id": 310,
        "word": "Head over heels",
        "type": "idiom",
        "pronunciation": "/hed ˌəʊ.və ˈhiːlz/",
        "meaning": "Yêu say đắm, chìm đắm trong tình yêu.",
        "example": "They just met last month, but they are already head over heels in love."
    },
    {
        "id": 311,
        "word": "Raining cats and dogs",
        "type": "idiom",
        "pronunciation": "/ˌreɪ.nɪŋ kæts ənd dɒɡz/",
        "meaning": "Mưa tầm tã, mưa xối xả.",
        "example": "We can't go to the park today; it's raining cats and dogs."
    },
    {
        "id": 312,
        "word": "Curiosity killed the cat",
        "type": "idiom",
        "pronunciation": "/ˌkjʊə.riˈɒs.ə.ti kɪld ðə kæt/",
        "meaning": "Tò mò hại thân.",
        "example": "Don't ask too many questions about his past; curiosity killed the cat."
    },
    {
        "id": 313,
        "word": "Hold your horses",
        "type": "idiom",
        "pronunciation": "/həʊld jɔː ˈhɔː.sɪz/",
        "meaning": "Bình tĩnh nào, đừng vội vàng.",
        "example": "Hold your horses! We need to plan this carefully before starting."
    },
    {
        "id": 314,
        "word": "A wolf in sheep's clothing",
        "type": "idiom",
        "pronunciation": "/ə wʊlf ɪn ʃiːps ˈkləʊ.ðɪŋ/",
        "meaning": "Sói đội lốt cừu (kẻ xấu giả danh người tốt).",
        "example": "I wouldn't trust him; he is a wolf in sheep's clothing."
    },
    {
        "id": 315,
        "word": "The lion's share",
        "type": "idiom",
        "pronunciation": "/ðə ˈlaɪ.ənz ʃeə/",
        "meaning": "Phần lớn nhất của một cái gì đó.",
        "example": "The eldest son received the lion's share of the inheritance."
    },
    {
        "id": 316,
        "word": "A fish out of water",
        "type": "idiom",
        "pronunciation": "/ə fɪʃ aʊt əv ˈwɔː.tə/",
        "meaning": "Cảm thấy lúng túng, không thoải mái trong môi trường lạ.",
        "example": "As the only beginner in the advanced class, I felt like a fish out of water."
    },
    {
        "id": 317,
        "word": "Kill two birds with one stone",
        "type": "idiom",
        "pronunciation": "/kɪl tuː bɜːdz wɪð wʌn stəʊn/",
        "meaning": "Một mũi tên trúng hai đích (nhất cử lưỡng tiện).",
        "example": "Riding my bike to work kills two birds with one stone: it saves money and keeps me fit."
    },
    {
        "id": 318,
        "word": "Get off your high horse",
        "type": "idiom",
        "pronunciation": "/ɡet ɒf jɔː haɪ hɔːs/",
        "meaning": "Đừng kiêu ngạo nữa, hãy hạ mình xuống.",
        "example": "It's time he got off his high horse and admitted he was wrong."
    },
    {
        "id": 319,
        "word": "A copycat",
        "type": "idiom",
        "pronunciation": "/ə ˈkɒp.i.kæt/",
        "meaning": "Kẻ bắt chước người khác.",
        "example": "My little sister is such a copycat; she buys exactly what I buy."
    },
    {
        "id": 320,
        "word": "When pigs fly",
        "type": "idiom",
        "pronunciation": "/wen pɪɡz flaɪ/",
        "meaning": "Chuyện không tưởng, không bao giờ xảy ra.",
        "example": "He'll clean his room when pigs fly!"
    },
    {
        "id": 321,
        "word": "Couch potato",
        "type": "idiom",
        "pronunciation": "/ˈkaʊtʃ pəˌteɪ.təʊ/",
        "meaning": "Người lười biếng, suốt ngày nằm ườn xem TV.",
        "example": "Stop being a couch potato and go outside for a walk."
    },
    {
        "id": 322,
        "word": "Spill the tea",
        "type": "idiom",
        "pronunciation": "/spɪl ðə tiː/",
        "meaning": "Kể lể, buôn chuyện (Gossip).",
        "example": "Come on, spill the tea! What happened at the party?"
    },
    {
        "id": 323,
        "word": "A bad apple",
        "type": "idiom",
        "pronunciation": "/ə bæd ˈæp.əl/",
        "meaning": "Con sâu làm rầu nồi canh (kẻ tồi tệ trong tập thể).",
        "example": "There is always a bad apple in every class who disrupts the lesson."
    },
    {
        "id": 324,
        "word": "As cool as a cucumber",
        "type": "idiom",
        "pronunciation": "/əz kuːl əz ə ˈkjuː.kʌm.bə/",
        "meaning": "Cực kỳ bình tĩnh, không hề nao núng.",
        "example": "Despite the pressure of the interview, she remained as cool as a cucumber."
    },
    {
        "id": 325,
        "word": "The icing on the cake",
        "type": "idiom",
        "pronunciation": "/ði ˈaɪ.sɪŋ ɒn ðə keɪk/",
        "meaning": "Điều tốt đẹp thêm vào một thứ vốn đã tốt (phần thưởng thêm).",
        "example": "Getting promoted was great, but the pay rise was the icing on the cake."
    },
    {
        "id": 326,
        "word": "Have bigger fish to fry",
        "type": "idiom",
        "pronunciation": "/hæv ˈbɪɡ.ə fɪʃ tuː fraɪ/",
        "meaning": "Có việc khác quan trọng hơn phải làm.",
        "example": "I can't worry about this minor issue right now; I have bigger fish to fry."
    },
    {
        "id": 327,
        "word": "Sell like hotcakes",
        "type": "idiom",
        "pronunciation": "/sel laɪk ˈhɒt.keɪks/",
        "meaning": "Bán đắt như tôm tươi.",
        "example": "The new smartphone models are selling like hotcakes."
    },
    {
        "id": 328,
        "word": "In a nutshell",
        "type": "idiom",
        "pronunciation": "/ɪn ə ˈnʌt.ʃel/",
        "meaning": "Nói tóm lại, tóm gọn lại là.",
        "example": "In a nutshell, we ran out of money and had to cancel the trip."
    },
    {
        "id": 329,
        "word": "Egg on your face",
        "type": "idiom",
        "pronunciation": "/eɡ ɒn jɔː feɪs/",
        "meaning": "Bẽ mặt, xấu hổ vì làm sai chuyện gì đó.",
        "example": "The politician had egg on his face after his predictions proved completely wrong."
    },
    {
        "id": 330,
        "word": "Compare apples and oranges",
        "type": "idiom",
        "pronunciation": "/kəmˈpeər ˈæp.əlz ənd ˈɒr.ɪndʒɪz/",
        "meaning": "So sánh khập khiễng (hai thứ hoàn toàn khác nhau).",
        "example": "Comparing playing soccer to playing chess is like comparing apples and oranges."
    },
    {
        "id": 331,
        "word": "Catch someone red-handed",
        "type": "idiom",
        "pronunciation": "/kætʃ ˈsʌm.wʌn redˈhæn.dɪd/",
        "meaning": "Bắt quả tang ai đó đang làm việc xấu.",
        "example": "The police caught the thief red-handed stealing the jewelry."
    },
    {
        "id": 332,
        "word": "Black sheep (of the family)",
        "type": "idiom",
        "pronunciation": "/blæk ʃiːp/",
        "meaning": "Đứa con hư hỏng, thành viên cá biệt.",
        "example": "He's the black sheep of the family because he dropped out of school to join a band."
    },
    {
        "id": 333,
        "word": "White lie",
        "type": "idiom",
        "pronunciation": "/waɪt laɪ/",
        "meaning": "Lời nói dối vô hại.",
        "example": "I told a white lie about liking her new haircut so I wouldn't hurt her feelings."
    },
    {
        "id": 334,
        "word": "Green with envy",
        "type": "idiom",
        "pronunciation": "/ɡriːn wɪð ˈen.vi/",
        "meaning": "Cực kỳ ghen tị, ghen tị ra mặt.",
        "example": "My colleagues were green with envy when I got the promotion."
    },
    {
        "id": 335,
        "word": "Out of the red",
        "type": "idiom",
        "pronunciation": "/aʊt əv ðə red/",
        "meaning": "Thoát khỏi tình trạng nợ nần, hết thua lỗ.",
        "example": "Thanks to the new investor, the company is finally out of the red."
    },
    {
        "id": 336,
        "word": "Roll out the red carpet",
        "type": "idiom",
        "pronunciation": "/rəʊl aʊt ðə red ˈkɑː.pɪt/",
        "meaning": "Trải thảm đỏ, đón tiếp ai đó vô cùng nồng hậu.",
        "example": "The town rolled out the red carpet for the visiting president."
    },
    {
        "id": 337,
        "word": "In the black",
        "type": "idiom",
        "pronunciation": "/ɪn ðə blæk/",
        "meaning": "Sinh lời, có lãi (trong kinh doanh).",
        "example": "After months of hard work, our business is finally in the black."
    },
    {
        "id": 338,
        "word": "A grey area",
        "type": "idiom",
        "pronunciation": "/ə ɡreɪ ˈeə.ri.ə/",
        "meaning": "Vùng xám, điều không rõ ràng là đúng hay sai.",
        "example": "Downloading movies online is a bit of a grey area in copyright law."
    },
    {
        "id": 339,
        "word": "Give the green light",
        "type": "idiom",
        "pronunciation": "/ɡɪv ðə ɡriːn laɪt/",
        "meaning": "Bật đèn xanh, cho phép ai đó làm gì.",
        "example": "The manager gave us the green light to start the new project."
    },
    {
        "id": 340,
        "word": "Paint the town red",
        "type": "idiom",
        "pronunciation": "/peɪnt ðə taʊn red/",
        "meaning": "Đi chơi xả láng, ăn mừng tưng bừng.",
        "example": "After finishing our final exams, we decided to go out and paint the town red."
    },
    {
        "id": 341,
        "word": "Break a leg",
        "type": "idiom",
        "pronunciation": "/breɪk ə leɡ/",
        "meaning": "Chúc may mắn (trước khi lên sân khấu hoặc thi cử).",
        "example": "\"Break a leg!\" she shouted to the actor as he went on stage."
    },
    {
        "id": 342,
        "word": "Keep an eye on",
        "type": "idiom",
        "pronunciation": "/kiːp ən aɪ ɒn/",
        "meaning": "Để mắt tới, trông chừng cẩn thận.",
        "example": "Can you keep an eye on my bag while I go to the restroom?"
    },
    {
        "id": 343,
        "word": "All ears",
        "type": "idiom",
        "pronunciation": "/ɔːl ɪəz/",
        "meaning": "Chăm chú lắng nghe.",
        "example": "Tell me about your new job, I'm all ears!"
    },
    {
        "id": 344,
        "word": "Get cold feet",
        "type": "idiom",
        "pronunciation": "/ɡet kəʊld fiːt/",
        "meaning": "Mất can đảm, chùn bước vào phút chót.",
        "example": "He got cold feet just before the wedding and almost didn't show up."
    },
    {
        "id": 345,
        "word": "A pain in the neck",
        "type": "idiom",
        "pronunciation": "/ə peɪn ɪn ðə nek/",
        "meaning": "Một người hoặc vật vô cùng phiền toái, gây khó chịu.",
        "example": "Fixing this old printer is a real pain in the neck."
    },
    {
        "id": 346,
        "word": "Keep your chin up",
        "type": "idiom",
        "pronunciation": "/kiːp jɔː tʃɪn ʌp/",
        "meaning": "Ngẩng cao đầu, lạc quan lên (trong khó khăn).",
        "example": "Keep your chin up; things will get better soon!"
    },
    {
        "id": 347,
        "word": "Let your hair down",
        "type": "idiom",
        "pronunciation": "/let jɔː heə daʊn/",
        "meaning": "Xõa đi, thư giãn thoải mái.",
        "example": "You've been working too hard; you need to go out and let your hair down."
    },
    {
        "id": 348,
        "word": "Put your finger on something",
        "type": "idiom",
        "pronunciation": "/pʊt jɔː ˈfɪŋ.ɡər ɒn ˈsʌm.θɪŋ/",
        "meaning": "Chỉ ra/xác định chính xác nguyên nhân vấn đề.",
        "example": "Something is wrong with this machine, but I can't quite put my finger on it."
    },
    {
        "id": 349,
        "word": "Get something off your chest",
        "type": "idiom",
        "pronunciation": "/ɡet ˈsʌm.θɪŋ ɒf jɔː tʃest/",
        "meaning": "Nói ra điều bực bội/tâm sự để nhẹ lòng.",
        "example": "I need to get this off my chest: I was the one who broke your favorite mug."
    },
    {
        "id": 350,
        "word": "By the skin of your teeth",
        "type": "idiom",
        "pronunciation": "/baɪ ðə skɪn əv jɔː tiːθ/",
        "meaning": "Thoát hiểm trong gang tấc, hoàn thành việc sát nút.",
        "example": "He passed the final exam by the skin of his teeth."
    },
    {
        "id": 351,
        "word": "Speak of the devil",
        "type": "idiom",
        "pronunciation": "/spiːk əv ðə ˈdev.əl/",
        "meaning": "Nhắc tào tháo, tào tháo tới.",
        "example": "We were just talking about John, and speak of the devil, here he comes!"
    },
    {
        "id": 352,
        "word": "Give someone a piece of your mind",
        "type": "idiom",
        "pronunciation": "/ɡɪv ˈsʌm.wʌn ə piːs əv jɔː maɪnd/",
        "meaning": "Mắng cho một trận, bày tỏ sự bực tức.",
        "example": "I'm going to call the manager and give him a piece of my mind about this terrible service."
    },
    {
        "id": 353,
        "word": "Talk the talk and walk the walk",
        "type": "idiom",
        "pronunciation": "/tɔːk ðə tɔːk ənd wɔːk ðə wɔːk/",
        "meaning": "Nói được làm được.",
        "example": "He promises a lot, but let's see if he can talk the talk and walk the walk."
    },
    {
        "id": 354,
        "word": "Clear the air",
        "type": "idiom",
        "pronunciation": "/klɪə ði eə/",
        "meaning": "Xóa bỏ sự hiểu lầm, căng thẳng.",
        "example": "We had a long meeting to clear the air after our argument."
    },
    {
        "id": 355,
        "word": "At cross purposes",
        "type": "idiom",
        "pronunciation": "/ət krɒs ˈpɜː.pəs.ɪz/",
        "meaning": "Ông nói gà bà nói vịt (hiểu lầm ý nhau).",
        "example": "I think we're talking at cross purposes; I meant the other report, not this one."
    },
    {
        "id": 356,
        "word": "Preach to the choir",
        "type": "idiom",
        "pronunciation": "/priːtʃ tuː ðə kwaɪə/",
        "meaning": "Thuyết phục những người vốn đã đồng tình từ trước.",
        "example": "You don't need to convince me to recycle; you're preaching to the choir."
    },
    {
        "id": 357,
        "word": "Put words in someone's mouth",
        "type": "idiom",
        "pronunciation": "/pʊt wɜːdz ɪn ˈsʌm.wʌnz maʊθ/",
        "meaning": "Nhét chữ vào miệng người khác (xuyên tạc).",
        "example": "Stop putting words in my mouth; I never said I hated her!"
    },
    {
        "id": 358,
        "word": "Off the record",
        "type": "idiom",
        "pronunciation": "/ɒf ðə ˈrek.ɔːd/",
        "meaning": "Không chính thức, không được ghi âm hay công bố.",
        "example": "What I'm about to tell you is strictly off the record."
    },
    {
        "id": 359,
        "word": "Read between the lines",
        "type": "idiom",
        "pronunciation": "/riːd bɪˈtwiːn ðə laɪnz/",
        "meaning": "Hiểu được hàm ý, ý ngầm đằng sau câu chữ.",
        "example": "If you read between the lines, her email actually means she wants to resign."
    },
    {
        "id": 360,
        "word": "Talk behind someone's back",
        "type": "idiom",
        "pronunciation": "/tɔːk bɪˈhaɪnd ˈsʌm.wʌnz bæk/",
        "meaning": "Nói xấu sau lưng.",
        "example": "Real friends don't talk behind each other's backs."
    },
    {
        "id": 361,
        "word": "A storm in a teacup",
        "type": "idiom",
        "pronunciation": "/ə stɔːm ɪn ə ˈtiː.kʌp/",
        "meaning": "Chuyện bé xé ra to.",
        "example": "Their argument about the dishes was just a storm in a teacup."
    },
    {
        "id": 362,
        "word": "Take a rain check",
        "type": "idiom",
        "pronunciation": "/teɪk ə reɪn tʃek/",
        "meaning": "Xin khất vào dịp khác (từ chối khéo lời mời).",
        "example": "I'm too busy tonight, but can I take a rain check on that dinner?"
    },
    {
        "id": 363,
        "word": "Come rain or shine",
        "type": "idiom",
        "pronunciation": "/kʌm reɪn ɔː ʃaɪn/",
        "meaning": "Cho dù có chuyện gì xảy ra đi chăng nữa.",
        "example": "I'll be there for your graduation, come rain or shine."
    },
    {
        "id": 364,
        "word": "Head in the clouds",
        "type": "idiom",
        "pronunciation": "/hed ɪn ðə klaʊdz/",
        "meaning": "Đầu óc trên mây, viển vông, không thực tế.",
        "example": "He always has his head in the clouds and never pays attention in class."
    },
    {
        "id": 365,
        "word": "It never rains but it pours",
        "type": "idiom",
        "pronunciation": "/ɪt ˈnev.ə reɪnz bʌt ɪt pɔːz/",
        "meaning": "Họa vô đơn chí (chuyện xui xẻo thường đến cùng lúc).",
        "example": "First my car broke down, then I lost my keys. It never rains but it pours!"
    },
    {
        "id": 366,
        "word": "Weather the storm",
        "type": "idiom",
        "pronunciation": "/ˈweð.ə ðə stɔːm/",
        "meaning": "Vượt qua khó khăn, giông bão.",
        "example": "The company managed to weather the storm during the economic crisis."
    },
    {
        "id": 367,
        "word": "Get wind of something",
        "type": "idiom",
        "pronunciation": "/ɡet wɪnd əv ˈsʌm.θɪŋ/",
        "meaning": "Nghe phong phanh, biết được bí mật gì đó.",
        "example": "If the boss gets wind of this mistake, we'll be in big trouble."
    },
    {
        "id": 368,
        "word": "Go with the flow",
        "type": "idiom",
        "pronunciation": "/ɡəʊ wɪð ðə fləʊ/",
        "meaning": "Cuốn theo chiều gió, thuận theo tự nhiên.",
        "example": "Sometimes it's better to just relax and go with the flow."
    },
    {
        "id": 369,
        "word": "Make waves",
        "type": "idiom",
        "pronunciation": "/meɪk weɪvz/",
        "meaning": "Tạo ra sự chú ý, gây rắc rối hoặc thay đổi lớn.",
        "example": "She's new here, so she's trying not to make waves."
    },
    {
        "id": 370,
        "word": "Down to earth",
        "type": "idiom",
        "pronunciation": "/ˌdaʊn tu ˈɜːθ/",
        "meaning": "Thực tế, khiêm tốn, dễ gần.",
        "example": "Despite being a famous actor, he is very down to earth."
    },
    {
        "id": 371,
        "word": "Blood is thicker than water",
        "type": "idiom",
        "pronunciation": "/blʌd ɪz ˈθɪk.ə ðæn ˈwɔː.tə/",
        "meaning": "Một giọt máu đào hơn ao nước lã.",
        "example": "I will always help my brother because blood is thicker than water."
    },
    {
        "id": 372,
        "word": "Like father, like son",
        "type": "idiom",
        "pronunciation": "/laɪk ˈfɑː.ðə laɪk sʌn/",
        "meaning": "Cha nào con nấy.",
        "example": "He is just as stubborn as his dad; like father, like son!"
    },
    {
        "id": 373,
        "word": "A chip off the old block",
        "type": "idiom",
        "pronunciation": "/ə tʃɪp ɒf ði əʊld blɒk/",
        "meaning": "Con cái rất giống bố mẹ (về ngoại hình/tính cách).",
        "example": "John is a great carpenter, just like his dad. He's a chip off the old block."
    },
    {
        "id": 374,
        "word": "Two peas in a pod",
        "type": "idiom",
        "pronunciation": "/tuː piːz ɪn ə pɒd/",
        "meaning": "Giống nhau như đúc, cực kỳ thân thiết.",
        "example": "Those twins are like two peas in a pod; they do everything together."
    },
    {
        "id": 375,
        "word": "Fair-weather friend",
        "type": "idiom",
        "pronunciation": "/ˌfeə.weð.ə ˈfrend/",
        "meaning": "Người bạn chỉ ở bên lúc vui vẻ, khó khăn thì bỏ đi.",
        "example": "I thought she was a true friend, but she turned out to be a fair-weather friend when I lost my job."
    },
    {
        "id": 376,
        "word": "Thick as thieves",
        "type": "idiom",
        "pronunciation": "/θɪk əz θiːvz/",
        "meaning": "Cực kỳ ăn ý, khăng khít.",
        "example": "Ever since they met at the camp, those two have been as thick as thieves."
    },
    {
        "id": 377,
        "word": "Tie the knot",
        "type": "idiom",
        "pronunciation": "/taɪ ðə nɒt/",
        "meaning": "Kết hôn.",
        "example": "After five years of dating, they finally decided to tie the knot."
    },
    {
        "id": 378,
        "word": "To be in the same boat",
        "type": "idiom",
        "pronunciation": "/tə bi ɪn ðə seɪm bəʊt/",
        "meaning": "Cùng hội cùng thuyền, cùng chung hoàn cảnh.",
        "example": "We all lost our luggage at the airport, so we're all in the same boat."
    },
    {
        "id": 379,
        "word": "Build bridges",
        "type": "idiom",
        "pronunciation": "/bɪld ˈbrɪdʒ.ɪz/",
        "meaning": "Xây dựng hoặc hàn gắn lại mối quan hệ.",
        "example": "The new manager is trying to build bridges between the two rival departments."
    },
    {
        "id": 380,
        "word": "Know someone inside out",
        "type": "idiom",
        "pronunciation": "/nəʊ ˈsʌm.wʌn ˌɪn.saɪd ˈaʊt/",
        "meaning": "Hiểu ai đó rõ như lòng bàn tay.",
        "example": "We've been best friends for 20 years, so I know her inside out."
    },
    {
        "id": 381,
        "word": "Drop the ball",
        "type": "idiom",
        "pronunciation": "/drɒp ðə bɔːl/",
        "meaning": "Mắc sai lầm, bất cẩn làm hỏng việc.",
        "example": "I really dropped the ball on that project; I completely forgot the deadline."
    },
    {
        "id": 382,
        "word": "Hit below the belt",
        "type": "idiom",
        "pronunciation": "/hɪt bɪˈləʊ ðə belt/",
        "meaning": "Chơi xấu, công kích cá nhân (không công bằng).",
        "example": "Mentioning his recent divorce during the debate was hitting below the belt."
    },
    {
        "id": 383,
        "word": "The ball is in your court",
        "type": "idiom",
        "pronunciation": "/ðə bɔːl ɪz ɪn jɔː kɔːt/",
        "meaning": "Trách nhiệm hoặc quyết định giờ là ở bạn.",
        "example": "I've made my offer. Now the ball is in your court."
    },
    {
        "id": 384,
        "word": "Touch base",
        "type": "idiom",
        "pronunciation": "/tʌtʃ beɪs/",
        "meaning": "Gặp gỡ hoặc liên lạc ngắn để cập nhật tình hình.",
        "example": "Let's touch base next week to discuss the project's progress."
    },
    {
        "id": 385,
        "word": "Front runner",
        "type": "idiom",
        "pronunciation": "/ˈfrʌnt ˌrʌn.ə/",
        "meaning": "Người dẫn đầu, ứng cử viên sáng giá nhất.",
        "example": "She is currently the front runner for the mayoral election."
    },
    {
        "id": 386,
        "word": "Call the shots",
        "type": "idiom",
        "pronunciation": "/kɔːl ðə ʃɒts/",
        "meaning": "Là người đưa ra quyết định, nắm quyền kiểm soát.",
        "example": "In this team, the project manager calls the shots."
    },
    {
        "id": 387,
        "word": "Level playing field",
        "type": "idiom",
        "pronunciation": "/ˌlev.əl ˈpleɪ.ɪŋ fiːld/",
        "meaning": "Một sân chơi bình đẳng, công bằng cho tất cả.",
        "example": "The new regulations aim to create a level playing field for all businesses."
    },
    {
        "id": 388,
        "word": "Out of left field",
        "type": "idiom",
        "pronunciation": "/aʊt əv left fiːld/",
        "meaning": "Bất ngờ, hoàn toàn không lường trước được.",
        "example": "His resignation came completely out of left field."
    },
    {
        "id": 389,
        "word": "Keep your eye on the ball",
        "type": "idiom",
        "pronunciation": "/kiːp jɔːr aɪ ɒn ðə bɔːl/",
        "meaning": "Luôn chú ý, tập trung cao độ vào mục tiêu.",
        "example": "To succeed in business, you have to keep your eye on the ball."
    },
    {
        "id": 390,
        "word": "Hit a home run",
        "type": "idiom",
        "pronunciation": "/hɪt ə həʊm rʌn/",
        "meaning": "Đạt được thành công rực rỡ.",
        "example": "The marketing team really hit a home run with that new ad campaign."
    },
    {
        "id": 391,
        "word": "Up the creek without a paddle",
        "type": "idiom",
        "pronunciation": "/ʌp ðə kriːk wɪˈðaʊt ə ˈpæd.əl/",
        "meaning": "Tình cảnh vô cùng khó khăn, không lối thoát.",
        "example": "If we lose this client, we'll be up the creek without a paddle."
    },
    {
        "id": 392,
        "word": "On the right track",
        "type": "idiom",
        "pronunciation": "/ɒn ðə raɪt træk/",
        "meaning": "Đi đúng hướng, làm đúng cách.",
        "example": "We haven't solved the problem yet, but I think we are on the right track."
    },
    {
        "id": 393,
        "word": "Off the beaten path",
        "type": "idiom",
        "pronunciation": "/ɒf ðə ˌbiː.tən pɑːθ/",
        "meaning": "Nơi hẻo lánh, vắng vẻ, ít người biết đến.",
        "example": "We found a great little restaurant off the beaten path."
    },
    {
        "id": 394,
        "word": "Middle of nowhere",
        "type": "idiom",
        "pronunciation": "/ˈmɪd.əl əv ˈnəʊ.weə/",
        "meaning": "Đồng không mông quạnh, nơi khỉ ho cò gáy.",
        "example": "His car broke down in the middle of nowhere."
    },
    {
        "id": 395,
        "word": "Cross paths",
        "type": "idiom",
        "pronunciation": "/krɒs pɑːθs/",
        "meaning": "Tình cờ gặp mặt ai đó.",
        "example": "I hope we cross paths again in the future."
    },
    {
        "id": 396,
        "word": "Drive someone up the wall",
        "type": "idiom",
        "pronunciation": "/draɪv ˈsʌm.wʌn ʌp ðə wɔːl/",
        "meaning": "Làm ai đó phát điên, cực kỳ khó chịu.",
        "example": "That loud music is driving me up the wall!"
    },
    {
        "id": 397,
        "word": "Over the hill",
        "type": "idiom",
        "pronunciation": "/ˈəʊ.və ðə hɪl/",
        "meaning": "Bên kia sườn dốc (đã già, không còn đỉnh cao).",
        "example": "He's 50 now, but he certainly doesn't feel over the hill."
    },
    {
        "id": 398,
        "word": "Right up your alley",
        "type": "idiom",
        "pronunciation": "/raɪt ʌp jɔːr ˈæl.i/",
        "meaning": "Đúng sở trường, đúng sở thích/chuyên môn của bạn.",
        "example": "You love reading historical novels, so this book should be right up your alley."
    },
    {
        "id": 399,
        "word": "Go down in history",
        "type": "idiom",
        "pronunciation": "/ɡəʊ daʊn ɪn ˈhɪs.tər.i/",
        "meaning": "Ghi danh vào lịch sử, được nhớ mãi.",
        "example": "Neil Armstrong went down in history as the first man on the moon."
    },
    {
        "id": 400,
        "word": "Hit the road",
        "type": "idiom",
        "pronunciation": "/hɪt ðə rəʊd/",
        "meaning": "Lên đường, khởi hành.",
        "example": "It's getting late; I think we should hit the road."
    },
    {
        "id": 401,
        "word": "Get the ax",
        "type": "idiom",
        "pronunciation": "/ɡet ði æks/",
        "meaning": "Bị sa thải, đuổi việc.",
        "example": "Due to budget cuts, hundreds of workers got the ax."
    },
    {
        "id": 402,
        "word": "Think outside the box",
        "type": "idiom",
        "pronunciation": "/θɪŋk ˌaʊtˈsaɪd ðə bɒks/",
        "meaning": "Suy nghĩ sáng tạo, đột phá, vượt ra khuôn khổ.",
        "example": "To solve this problem, we really need to think outside the box."
    },
    {
        "id": 403,
        "word": "Get your foot in the door",
        "type": "idiom",
        "pronunciation": "/ɡet jɔː fʊt ɪn ðə dɔː/",
        "meaning": "Đặt được bước chân đầu tiên (có cơ hội khởi đầu).",
        "example": "An internship is a great way to get your foot in the door."
    },
    {
        "id": 404,
        "word": "Have a lot on your plate",
        "type": "idiom",
        "pronunciation": "/hæv ə lɒt ɒn jɔː pleɪt/",
        "meaning": "Có quá nhiều việc phải giải quyết.",
        "example": "I can't take on any more projects; I already have a lot on my plate."
    },
    {
        "id": 405,
        "word": "Go back to the drawing board",
        "type": "idiom",
        "pronunciation": "/ɡəʊ bæk tuː ðə ˈdrɔː.ɪŋ bɔːd/",
        "meaning": "Phải làm lại từ đầu (sau khi kế hoạch bị thất bại).",
        "example": "The prototype didn't work, so we have to go back to the drawing board."
    },
    {
        "id": 406,
        "word": "Get the short end of the stick",
        "type": "idiom",
        "pronunciation": "/ɡet ðə ʃɔːt end əv ðə stɪk/",
        "meaning": "Bị đối xử bất công, chịu thiệt thòi.",
        "example": "As the youngest child, I always felt like I got the short end of the stick."
    },
    {
        "id": 407,
        "word": "By the book",
        "type": "idiom",
        "pronunciation": "/baɪ ðə bʊk/",
        "meaning": "Làm theo đúng nguyên tắc, sách vở, luật lệ.",
        "example": "He is a very strict manager who does everything by the book."
    },
    {
        "id": 408,
        "word": "Pull strings",
        "type": "idiom",
        "pronunciation": "/pʊl strɪŋz/",
        "meaning": "Giật dây, dùng mối quan hệ bí mật để đạt mục đích.",
        "example": "He pulled some strings to get his son a job at the bank."
    },
    {
        "id": 409,
        "word": "Work your fingers to the bone",
        "type": "idiom",
        "pronunciation": "/wɜːk jɔː ˈfɪŋ.ɡəz tuː ðə bəʊn/",
        "meaning": "Làm việc vất vả, cực nhọc.",
        "example": "She worked her fingers to the bone to provide for her children."
    },
    {
        "id": 410,
        "word": "Slip through the cracks",
        "type": "idiom",
        "pronunciation": "/slɪp θruː ðə kræks/",
        "meaning": "Bị bỏ sót, không ai chú ý tới (thường là lỗi hệ thống).",
        "example": "Because the system was so chaotic, her application slipped through the cracks."
    },
    {
        "id": 411,
        "word": "A blessing and a curse",
        "type": "idiom",
        "pronunciation": "/ə ˈbles.ɪŋ ənd ə kɜːs/",
        "meaning": "Vừa là lợi thế, vừa là gánh nặng.",
        "example": "Being famous is often both a blessing and a curse."
    },
    {
        "id": 412,
        "word": "Add fuel to the fire",
        "type": "idiom",
        "pronunciation": "/æd ˈfjuː.əl tuː ðə faɪə/",
        "meaning": "Thêm dầu vào lửa (làm tình hình tệ hơn).",
        "example": "Shouting at him now will only add fuel to the fire."
    },
    {
        "id": 413,
        "word": "Jump on the bandwagon",
        "type": "idiom",
        "pronunciation": "/dʒʌmp ɒn ðə ˈbændˌwæɡ.ən/",
        "meaning": "Chạy theo phong trào, hùa theo số đông.",
        "example": "Many companies are jumping on the green energy bandwagon."
    },
    {
        "id": 414,
        "word": "Play second fiddle",
        "type": "idiom",
        "pronunciation": "/pleɪ ˈsek.ənd ˈfɪd.əl/",
        "meaning": "Đóng vai phụ, chịu lép vế trước người khác.",
        "example": "She is too ambitious to play second fiddle to anyone."
    },
    {
        "id": 415,
        "word": "Find one's feet",
        "type": "idiom",
        "pronunciation": "/faɪnd wʌnz fiːt/",
        "meaning": "Dần quen với môi trường mới và tự tin hơn.",
        "example": "It took him a few months to find his feet at the new university."
    },
    {
        "id": 416,
        "word": "A hot potato",
        "type": "idiom",
        "pronunciation": "/ə hɒt pəˈteɪ.təʊ/",
        "meaning": "Vấn đề nan giải, nhạy cảm và gây tranh cãi.",
        "example": "The issue of tax reform is a political hot potato."
    },
    {
        "id": 417,
        "word": "Go against the grain",
        "type": "idiom",
        "pronunciation": "/ɡəʊ əˈɡenst ðə ɡreɪn/",
        "meaning": "Làm trái lẽ thường, ngược sở thích/tự nhiên.",
        "example": "It goes against the grain to lie, but I had to do it."
    },
    {
        "id": 418,
        "word": "Take the plunge",
        "type": "idiom",
        "pronunciation": "/teɪk ðə plʌndʒ/",
        "meaning": "Liều lĩnh, quyết định làm một việc khó/mới.",
        "example": "After years of thinking about it, they took the plunge and opened a shop."
    },
    {
        "id": 419,
        "word": "A state of play",
        "type": "idiom",
        "pronunciation": "/ə steɪt əv pleɪ/",
        "meaning": "Tình hình hiện tại của một sự việc/dự án.",
        "example": "Let's have a meeting to discuss the current state of play."
    },
    {
        "id": 420,
        "word": "Rest on one's laurels",
        "type": "idiom",
        "pronunciation": "/rest ɒn wʌnz ˈlɒr.əlz/",
        "meaning": "Ngủ quên trên chiến thắng.",
        "example": "Just because you won doesn't mean you can rest on your laurels."
    },
    {
        "id": 421,
        "word": "Keep it under your hat",
        "type": "idiom",
        "pronunciation": "/kiːp ɪt ˈʌn.də jɔː hæt/",
        "meaning": "Giữ bí mật, không kể cho ai nghe.",
        "example": "I'm getting promoted, but keep it under your hat for now."
    },
    {
        "id": 422,
        "word": "Wear the trousers",
        "type": "idiom",
        "pronunciation": "/weə ðə ˈtraʊ.zəz/",
        "meaning": "Nắm quyền quyết định trong nhà/mối quan hệ.",
        "example": "It's obvious that Mary wears the trousers in that family."
    },
    {
        "id": 423,
        "word": "Fit like a glove",
        "type": "idiom",
        "pronunciation": "/fɪt laɪk ə ɡlʌv/",
        "meaning": "Vừa vặn hoàn hảo (thường nói về quần áo).",
        "example": "I love this new dress; it fits like a glove."
    },
    {
        "id": 424,
        "word": "In someone's shoes",
        "type": "idiom",
        "pronunciation": "/ɪn ˈsʌm.wʌnz ʃuːz/",
        "meaning": "Đặt mình vào vị trí, hoàn cảnh người khác.",
        "example": "Before judging him, try putting yourself in his shoes."
    },
    {
        "id": 425,
        "word": "Roll up one's sleeves",
        "type": "idiom",
        "pronunciation": "/rəʊl ʌp wʌnz sliːvz/",
        "meaning": "Xắn tay áo chuẩn bị làm việc chăm chỉ.",
        "example": "We have a lot of work to do, so let's roll up our sleeves."
    },
    {
        "id": 426,
        "word": "At the drop of a hat",
        "type": "idiom",
        "pronunciation": "/ət ðə drɒp əv ə hæt/",
        "meaning": "Làm việc gì ngay lập tức, không do dự.",
        "example": "If you need help, I'll be there at the drop of a hat."
    },
    {
        "id": 427,
        "word": "Pull your socks up",
        "type": "idiom",
        "pronunciation": "/pʊl jɔː sɒks ʌp/",
        "meaning": "Cố gắng chấn chỉnh thái độ, cải thiện phong độ.",
        "example": "You need to pull your socks up if you want to pass the exam."
    },
    {
        "id": 428,
        "word": "Have something up your sleeve",
        "type": "idiom",
        "pronunciation": "/hæv ˈsʌm.θɪŋ ʌp jɔː sliːv/",
        "meaning": "Có kế hoạch, vũ khí bí mật chưa tiết lộ.",
        "example": "I think the manager still has a few tricks up his sleeve."
    },
    {
        "id": 429,
        "word": "Talk through one's hat",
        "type": "idiom",
        "pronunciation": "/tɔːk θruː wʌnz hæt/",
        "meaning": "Nói khoác, nói linh tinh về điều không biết rõ.",
        "example": "Don't listen to him; he's just talking through his hat."
    },
    {
        "id": 430,
        "word": "Dressed to kill",
        "type": "idiom",
        "pronunciation": "/drest tuː kɪl/",
        "meaning": "Ăn mặc cực lộng lẫy, sành điệu để thu hút.",
        "example": "She arrived at the party dressed to kill."
    },
    {
        "id": 431,
        "word": "Smoke and mirrors",
        "type": "idiom",
        "pronunciation": "/sməʊk ənd ˈmɪr.əz/",
        "meaning": "Sự lừa phỉnh, dùng thủ thuật che đậy sự thật.",
        "example": "The company's financial success was just smoke and mirrors."
    },
    {
        "id": 432,
        "word": "Call a spade a spade",
        "type": "idiom",
        "pronunciation": "/kɔːl ə speɪd ə speɪd/",
        "meaning": "Nói thẳng, nói thật dù mất lòng người khác.",
        "example": "He is known for calling a spade a spade during meetings."
    },
    {
        "id": 433,
        "word": "Lead someone up the garden path",
        "type": "idiom",
        "pronunciation": "/liːd ˈsʌm.wʌn ʌp ðə ˈɡɑː.dən pɑːθ/",
        "meaning": "Lừa dối, đánh lừa ai đó.",
        "example": "I realized he was leading me up the garden path with his fake promises."
    },
    {
        "id": 434,
        "word": "Pull the wool over someone's eyes",
        "type": "idiom",
        "pronunciation": "/pʊl ðə wʊl ˈəʊ.və ˈsʌm.wʌnz aɪz/",
        "meaning": "Che mắt, lừa gạt ai.",
        "example": "You can't pull the wool over my eyes; I know the truth!"
    },
    {
        "id": 435,
        "word": "Take someone for a ride",
        "type": "idiom",
        "pronunciation": "/teɪk ˈsʌm.wʌn fɔːr ə raɪd/",
        "meaning": "Lừa gạt, lợi dụng ai đó.",
        "example": "I bought a fake watch. I've really been taken for a ride."
    },
    {
        "id": 436,
        "word": "Show one's true colors",
        "type": "idiom",
        "pronunciation": "/ʃəʊ wʌnz truː ˈkʌl.əz/",
        "meaning": "Bộc lộ bản chất thật sự.",
        "example": "When he was under pressure, he showed his true colors."
    },
    {
        "id": 437,
        "word": "Catch someone out",
        "type": "idiom",
        "pronunciation": "/kætʃ ˈsʌm.wʌn aʊt/",
        "meaning": "Bắt bài, phát hiện ai nói dối/mắc lỗi.",
        "example": "The teacher caught him out cheating on the test."
    },
    {
        "id": 438,
        "word": "Bare one's soul",
        "type": "idiom",
        "pronunciation": "/beə wʌnz səʊl/",
        "meaning": "Thổ lộ hết tâm can, bí mật thầm kín nhất.",
        "example": "She bared her soul to her best friend after the breakup."
    },
    {
        "id": 439,
        "word": "A snake in the grass",
        "type": "idiom",
        "pronunciation": "/ə sneɪk ɪn ðə ɡrɑːs/",
        "meaning": "Kẻ đâm sau lưng, người nguy hiểm ngầm.",
        "example": "Be careful with John; he is a snake in the grass."
    },
    {
        "id": 440,
        "word": "Stretch the truth",
        "type": "idiom",
        "pronunciation": "/stretʃ ðə truːθ/",
        "meaning": "Phóng đại sự thật, nói quá lên.",
        "example": "He didn't lie, but he certainly stretched the truth a bit."
    },
    {
        "id": 441,
        "word": "Worth its weight in gold",
        "type": "idiom",
        "pronunciation": "/wɜːθ ɪts weɪt ɪn ɡəʊld/",
        "meaning": "Rất có giá trị, vô cùng hữu ích.",
        "example": "A reliable employee is worth their weight in gold."
    },
    {
        "id": 442,
        "word": "Punch above one's weight",
        "type": "idiom",
        "pronunciation": "/pʌntʃ əˈbʌv wʌnz weɪt/",
        "meaning": "Vượt quá khả năng vốn có, làm việc vượt tầm.",
        "example": "The small tech startup is punching above its weight."
    },
    {
        "id": 443,
        "word": "The whole nine yards",
        "type": "idiom",
        "pronunciation": "/ðə həʊl naɪn jɑːdz/",
        "meaning": "Toàn bộ, không thiếu một thứ gì.",
        "example": "When I host a party, I go for the whole nine yards."
    },
    {
        "id": 444,
        "word": "A drop in the bucket",
        "type": "idiom",
        "pronunciation": "/ə drɒp ɪn ðə ˈbʌk.ɪt/",
        "meaning": "Một phần rất nhỏ bé, không thấm vào đâu.",
        "example": "The money raised is just a drop in the bucket compared to what we need."
    },
    {
        "id": 445,
        "word": "By and large",
        "type": "idiom",
        "pronunciation": "/baɪ ənd lɑːdʒ/",
        "meaning": "Nhìn chung, nói chung.",
        "example": "By and large, the new policy has been successful."
    },
    {
        "id": 446,
        "word": "Neck and neck",
        "type": "idiom",
        "pronunciation": "/nek ənd nek/",
        "meaning": "Ngang tài ngang sức, cạnh tranh sát nút.",
        "example": "The two candidates are neck and neck in the polls."
    },
    {
        "id": 447,
        "word": "Ten a penny",
        "type": "idiom",
        "pronunciation": "/ten ə ˈpen.i/",
        "meaning": "Rất phổ biến, nhan nhản, không có giá trị cao.",
        "example": "Romance novels like this are ten a penny these days."
    },
    {
        "id": 448,
        "word": "Go the whole hog",
        "type": "idiom",
        "pronunciation": "/ɡəʊ ðə həʊl hɒɡ/",
        "meaning": "Làm đến cùng, làm một cách triệt để.",
        "example": "Let's go the whole hog and paint the entire house!"
    },
    {
        "id": 449,
        "word": "Make a mountain out of a molehill",
        "type": "idiom",
        "pronunciation": "/meɪk ə ˈmaʊn.tɪn aʊt əv ə ˈməʊl.hɪl/",
        "meaning": "Chuyện bé xé ra to.",
        "example": "You only have a minor cold; don't make a mountain out of a molehill."
    },
    {
        "id": 450,
        "word": "Miles away",
        "type": "idiom",
        "pronunciation": "/maɪlz əˈweɪ/",
        "meaning": "Thẫn thờ, đầu óc lơ lửng tận đẩu tận đâu.",
        "example": "You didn't hear a word I said, did you? You were miles away."
    },
    {
        "id": 451,
        "word": "A flash in the pan",
        "type": "idiom",
        "pronunciation": "/ə flæʃ ɪn ðə pæn/",
        "meaning": "Thành công chớp nhoáng rồi tàn lụi.",
        "example": "The band's first hit was just a flash in the pan."
    },
    {
        "id": 452,
        "word": "Hit the ceiling / roof",
        "type": "idiom",
        "pronunciation": "/hɪt ðə ˈsiː.lɪŋ/ - /ruːf/",
        "meaning": "Tức giận tột độ.",
        "example": "My dad will hit the roof when he sees the broken window."
    },
    {
        "id": 453,
        "word": "The pot calling the kettle black",
        "type": "idiom",
        "pronunciation": "/ðə pɒt ˈkɔː.lɪŋ ðə ˈket.əl blæk/",
        "meaning": "Chó chê mèo lắm lông.",
        "example": "You calling me lazy is the pot calling the kettle black!"
    },
    {
        "id": 454,
        "word": "Throw the baby out with the bathwater",
        "type": "idiom",
        "pronunciation": "/θrəʊ ðə ˈbeɪ.bi aʊt wɪð ðə ˈbɑːθ.wɔː.tə/",
        "meaning": "Vứt bỏ thứ có giá trị cùng thứ vô ích.",
        "example": "We need to fix the system, not throw the baby out with the bathwater."
    },
    {
        "id": 455,
        "word": "On the same page",
        "type": "idiom",
        "pronunciation": "/ɒn ðə seɪm peɪdʒ/",
        "meaning": "Cùng suy nghĩ, hiểu ý nhau trong một vấn đề.",
        "example": "Before we begin, let's make sure everyone is on the same page."
    },
    {
        "id": 456,
        "word": "Read someone like a book",
        "type": "idiom",
        "pronunciation": "/riːd ˈsʌm.wʌn laɪk ə bʊk/",
        "meaning": "Đi guốc trong bụng ai, hiểu rất rõ suy nghĩ họ.",
        "example": "I've known him for years; I can read him like a book."
    },
    {
        "id": 457,
        "word": "Push the envelope",
        "type": "idiom",
        "pronunciation": "/pʊʃ ði ˈen.və.ləʊp/",
        "meaning": "Vượt ranh giới cũ, tạo sự đột phá.",
        "example": "The designer is known for pushing the envelope in fashion."
    },
    {
        "id": 458,
        "word": "Put the cart before the horse",
        "type": "idiom",
        "pronunciation": "/pʊt ðə kɑːt bɪˈfɔː ðə hɔːs/",
        "meaning": "Cầm đèn chạy trước ô tô, làm sai trình tự.",
        "example": "Buying furniture before buying a house is putting the cart before the horse."
    },
    {
        "id": 459,
        "word": "A cog in the machine",
        "type": "idiom",
        "pronunciation": "/ə kɒɡ ɪn ðə məˈʃiːn/",
        "meaning": "Nhân tố nhỏ nhoi trong một tổ chức/hệ thống.",
        "example": "I quit the corporate job because I felt like a mere cog in the machine."
    },
    {
        "id": 460,
        "word": "Hit the panic button",
        "type": "idiom",
        "pronunciation": "/hɪt ðə ˈpæn.ɪk ˈbʌt.ən/",
        "meaning": "Hốt hoảng, luống cuống tìm cách xử lý.",
        "example": "Don't hit the panic button yet; we still have time to fix this."
    },
    {
        "id": 461,
        "word": "Walk on eggshells",
        "type": "idiom",
        "pronunciation": "/wɔːk ɒn ˈeɡ.ʃelz/",
        "meaning": "Cực kỳ thận trọng để không làm phật ý ai.",
        "example": "I feel like I'm walking on eggshells around my boss today."
    },
    {
        "id": 462,
        "word": "Play with fire",
        "type": "idiom",
        "pronunciation": "/pleɪ wɪð faɪə/",
        "meaning": "Chơi với lửa, rước họa vào thân.",
        "example": "Investing all your money in that risky stock is playing with fire."
    },
    {
        "id": 463,
        "word": "Out on a limb",
        "type": "idiom",
        "pronunciation": "/aʊt ɒn ə lɪm/",
        "meaning": "Ở thế chênh vênh rủi ro không ai ủng hộ.",
        "example": "I went out on a limb and defended him, but he betrayed me."
    },
    {
        "id": 464,
        "word": "Stick one's neck out",
        "type": "idiom",
        "pronunciation": "/stɪk wʌnz nek aʊt/",
        "meaning": "Đánh liều, mạo hiểm vì ai/cái gì.",
        "example": "I'm not going to stick my neck out for someone who doesn't respect me."
    },
    {
        "id": 465,
        "word": "Skating on thin ice",
        "type": "idiom",
        "pronunciation": "/ˈskeɪ.tɪŋ ɒn θɪn aɪs/",
        "meaning": "Làm việc mạo hiểm, dễ dẫn đến rắc rối.",
        "example": "You are skating on thin ice by coming to work late every day."
    },
    {
        "id": 466,
        "word": "Dodge a bullet",
        "type": "idiom",
        "pronunciation": "/dɒdʒ ə ˈbʊl.ɪt/",
        "meaning": "Tránh được thảm họa, nguy hiểm/rắc rối lớn.",
        "example": "The project failed, but since I wasn't involved, I really dodged a bullet."
    },
    {
        "id": 467,
        "word": "Run the gauntlet",
        "type": "idiom",
        "pronunciation": "/rʌn ðə ˈɡɔːnt.lət/",
        "meaning": "Hứng chịu chỉ trích, thử thách từ nhiều phía.",
        "example": "He had to run the gauntlet of angry reporters outside the court."
    },
    {
        "id": 468,
        "word": "Sail close to the wind",
        "type": "idiom",
        "pronunciation": "/seɪl kləʊs tuː ðə wɪnd/",
        "meaning": "Hành động mạo hiểm, mấp mé vi phạm luật.",
        "example": "The company's tax strategies are sailing very close to the wind."
    },
    {
        "id": 469,
        "word": "Throw caution to the wind",
        "type": "idiom",
        "pronunciation": "/θrəʊ ˈkɔː.ʃən tuː ðə wɪnd/",
        "meaning": "Bất chấp rủi ro, không màng nguy hiểm.",
        "example": "She threw caution to the wind and quit her stable job to travel."
    },
    {
        "id": 470,
        "word": "A house of cards",
        "type": "idiom",
        "pronunciation": "/ə haʊs əv kɑːdz/",
        "meaning": "Kế hoạch/tổ chức lỏng lẻo, dễ sụp đổ.",
        "example": "Their business model is a house of cards waiting to collapse."
    },
    {
        "id": 471,
        "word": "Face the music",
        "type": "idiom",
        "pronunciation": "/feɪs ðə ˈmjuː.zɪk/",
        "meaning": "Chấp nhận chịu trận, đối mặt với hậu quả.",
        "example": "I failed the test, and now I have to go home and face the music."
    },
    {
        "id": 472,
        "word": "Change one's tune",
        "type": "idiom",
        "pronunciation": "/tʃeɪndʒ wʌnz tʃuːn/",
        "meaning": "Đổi giọng, thay đổi thái độ/ý kiến đột ngột.",
        "example": "He used to hate the idea, but he changed his tune when he saw the profits."
    },
    {
        "id": 473,
        "word": "Music to someone's ears",
        "type": "idiom",
        "pronunciation": "/ˈmjuː.zɪk tuː ˈsʌm.wʌnz ɪəz/",
        "meaning": "Tin vui, điều mà ai đó vô cùng muốn nghe.",
        "example": "Hearing that we got a bonus was music to my ears."
    },
    {
        "id": 474,
        "word": "Blow one's own trumpet",
        "type": "idiom",
        "pronunciation": "/bləʊ wʌnz əʊn ˈtrʌm.pɪt/",
        "meaning": "Tự cao tự đại, khoe khoang thành tích cá nhân.",
        "example": "I don't mean to blow my own trumpet, but I am the best salesperson here."
    },
    {
        "id": 475,
        "word": "Strike a chord",
        "type": "idiom",
        "pronunciation": "/straɪk ə kɔːd/",
        "meaning": "Gợi sự đồng cảm, đánh trúng tâm lý ai đó.",
        "example": "Her speech on equality really struck a chord with the audience."
    },
    {
        "id": 476,
        "word": "It takes two to tango",
        "type": "idiom",
        "pronunciation": "/ɪt teɪks tuː tə ˈtæŋ.ɡəʊ/",
        "meaning": "Có lửa mới có khói, cả hai bên đều có lỗi.",
        "example": "Stop blaming her entirely; it takes two to tango."
    },
    {
        "id": 477,
        "word": "As clear as a bell",
        "type": "idiom",
        "pronunciation": "/əz klɪər əz ə bel/",
        "meaning": "Rành rọt, rất dễ nghe, dễ hiểu.",
        "example": "The instructions you gave me were as clear as a bell."
    },
    {
        "id": 478,
        "word": "Jump through hoops",
        "type": "idiom",
        "pronunciation": "/dʒʌmp θruː huːps/",
        "meaning": "Vượt qua nhiều thủ tục rườm rà, khó khăn.",
        "example": "I had to jump through hoops to get my visa approved."
    },
    {
        "id": 479,
        "word": "The show must go on",
        "type": "idiom",
        "pronunciation": "/ðə ʃəʊ mʌst ɡəʊ ɒn/",
        "meaning": "Dù có biến cố gì thì mọi việc vẫn phải tiếp diễn.",
        "example": "We lost our lead singer, but the show must go on."
    },
    {
        "id": 480,
        "word": "Sound like a broken record",
        "type": "idiom",
        "pronunciation": "/saʊnd laɪk ə ˈbrəʊ.kən ˈrek.ɔːd/",
        "meaning": "Nói đi nói lại một điều gây nhàm chán.",
        "example": "I hate to sound like a broken record, but you need to clean your room!"
    },
    {
        "id": 481,
        "word": "Drag one's feet",
        "type": "idiom",
        "pronunciation": "/dræɡ wʌnz fiːt/",
        "meaning": "Làm chậm chạp, chần chừ không muốn làm.",
        "example": "The government is dragging its feet on environmental reform."
    },
    {
        "id": 482,
        "word": "On the ball",
        "type": "idiom",
        "pronunciation": "/ɒn ðə bɔːl/",
        "meaning": "Nhanh nhẹn, nhạy bén, hiểu rõ tình hình.",
        "example": "You need to be on the ball to succeed in this fast-paced industry."
    },
    {
        "id": 483,
        "word": "Lose track of time",
        "type": "idiom",
        "pronunciation": "/luːz træk əv taɪm/",
        "meaning": "Say sưa làm gì đến mức quên mất thời gian.",
        "example": "I was reading a great book and completely lost track of time."
    },
    {
        "id": 484,
        "word": "In the blink of an eye",
        "type": "idiom",
        "pronunciation": "/ɪn ðə blɪŋk əv ən aɪ/",
        "meaning": "Rất nhanh chóng, trong nháy mắt.",
        "example": "The thief grabbed her bag and disappeared in the blink of an eye."
    },
    {
        "id": 485,
        "word": "Hold one's ground",
        "type": "idiom",
        "pronunciation": "/həʊld wʌnz ɡraʊnd/",
        "meaning": "Giữ vững lập trường, không chịu lùi bước.",
        "example": "Despite the harsh criticism, she held her ground."
    },
    {
        "id": 486,
        "word": "Stop dead in one's tracks",
        "type": "idiom",
        "pronunciation": "/stɒp ded ɪn wʌnz træks/",
        "meaning": "Dừng lại đột ngột do vô cùng bất ngờ/sợ hãi.",
        "example": "I saw a huge snake and stopped dead in my tracks."
    },
    {
        "id": 487,
        "word": "Hit the ground running",
        "type": "idiom",
        "pronunciation": "/hɪt ðə ɡraʊnd ˈrʌn.ɪŋ/",
        "meaning": "Bắt tay ngay vào việc đầy năng lượng, hiệu quả.",
        "example": "We need a new manager who can hit the ground running."
    },
    {
        "id": 488,
        "word": "Step up one's game",
        "type": "idiom",
        "pronunciation": "/step ʌp wʌnz ɡeɪm/",
        "meaning": "Nỗ lực để làm tốt hơn, nâng cao phong độ.",
        "example": "If you want to make the varsity team, you must step up your game."
    },
    {
        "id": 489,
        "word": "Run out of steam",
        "type": "idiom",
        "pronunciation": "/rʌn aʊt əv stiːm/",
        "meaning": "Đuối sức, cạn kiệt năng lượng/nhiệt huyết.",
        "example": "I usually run out of steam by 4 PM on Fridays."
    },
    {
        "id": 490,
        "word": "Cut to the chase",
        "type": "idiom",
        "pronunciation": "/kʌt tuː ðə tʃeɪs/",
        "meaning": "Đi thẳng vào vấn đề chính, bỏ qua vòng vo.",
        "example": "We don't have much time, so let's cut to the chase."
    },
    {
        "id": 491,
        "word": "Tough cookie",
        "type": "idiom",
        "pronunciation": "/tʌf ˈkʊk.i/",
        "meaning": "Người cứng rắn, có bản lĩnh, khó khuất phục.",
        "example": "She survived the accident and recovered quickly; she's a tough cookie."
    },
    {
        "id": 492,
        "word": "A soft touch",
        "type": "idiom",
        "pronunciation": "/ə sɒft tʌtʃ/",
        "meaning": "Người hiền lành, dễ bị thuyết phục/lợi dụng.",
        "example": "My dad is a soft touch; he always buys me what I want."
    },
    {
        "id": 493,
        "word": "Larger than life",
        "type": "idiom",
        "pronunciation": "/ˈlɑː.dʒə ðæn laɪf/",
        "meaning": "Tính cách hào nhoáng, nổi bật, ấn tượng mạnh.",
        "example": "The legendary singer had a larger than life personality."
    },
    {
        "id": 494,
        "word": "Happy-go-lucky",
        "type": "idiom",
        "pronunciation": "/ˌhæp.i.ɡəʊˈlʌk.i/",
        "meaning": "Vô tư, lạc quan, không lo nghĩ tương lai.",
        "example": "My brother is a happy-go-lucky guy who never stresses about money."
    },
    {
        "id": 495,
        "word": "A smart cookie",
        "type": "idiom",
        "pronunciation": "/ə smɑːt ˈkʊk.i/",
        "meaning": "Người rất thông minh, lanh lợi.",
        "example": "She solved the complex puzzle in minutes; she's a smart cookie."
    },
    {
        "id": 496,
        "word": "Bear a grudge",
        "type": "idiom",
        "pronunciation": "/beər ə ɡrʌdʒ/",
        "meaning": "Thù dai, để bụng chuyện cũ.",
        "example": "It's been ten years, but he still bears a grudge against me."
    },
    {
        "id": 497,
        "word": "Lose one's temper",
        "type": "idiom",
        "pronunciation": "/luːz wʌnz ˈtem.pə/",
        "meaning": "Nổi giận, mất bình tĩnh.",
        "example": "Please try not to lose your temper with the children."
    },
    {
        "id": 498,
        "word": "Keep a cool head",
        "type": "idiom",
        "pronunciation": "/kiːp ə kuːl hed/",
        "meaning": "Giữ cái đầu lạnh, giữ tỉnh táo và bình tĩnh.",
        "example": "Even in an emergency, she always keeps a cool head."
    },
    {
        "id": 499,
        "word": "Thrilled to bits",
        "type": "idiom",
        "pronunciation": "/θrɪld tuː bɪts/",
        "meaning": "Cực kỳ hài lòng, vui sướng không tả xiết.",
        "example": "She was thrilled to bits with her new bicycle."
    },
    {
        "id": 500,
        "word": "At the end of one's tether",
        "type": "idiom",
        "pronunciation": "/ət ði end əv wʌnz ˈteð.ə/",
        "meaning": "Đến giới hạn chịu đựng, kiệt sức, hết cách.",
        "example": "With three crying babies, the mother was at the end of her tether."
    },
    {
        "id": 501,
        "word": "Leave no stone unturned",
        "type": "idiom",
        "pronunciation": "/liːv nəʊ stəʊn ʌnˈtɜːnd/",
        "meaning": "Tìm mọi ngóc ngách, làm mọi cách tìm ra điều gì.",
        "example": "The police will leave no stone unturned to find the missing child."
    },
    {
        "id": 502,
        "word": "Nip something in the bud",
        "type": "idiom",
        "pronunciation": "/nɪp ˈsʌm.θɪŋ ɪn ðə bʌd/",
        "meaning": "Ngăn chặn rắc rối ngay từ đầu (trong trứng nước).",
        "example": "We need to nip this rumor in the bud before it spreads."
    },
    {
        "id": 503,
        "word": "Give the benefit of the doubt",
        "type": "idiom",
        "pronunciation": "/ɡɪv ðə ˈben.ɪ.fɪt əv ðə daʊt/",
        "meaning": "Tạm tin tưởng vì không có bằng chứng sai.",
        "example": "I didn't see him steal it, so I'll give him the benefit of the doubt."
    },
    {
        "id": 504,
        "word": "Take the rough with the smooth",
        "type": "idiom",
        "pronunciation": "/teɪk ðə rʌf wɪð ðə smuːθ/",
        "meaning": "Chấp nhận cả những điều tốt và xấu.",
        "example": "Marriage isn't always easy; you have to take the rough with the smooth."
    },
    {
        "id": 505,
        "word": "A means to an end",
        "type": "idiom",
        "pronunciation": "/ə miːnz tuː ən end/",
        "meaning": "Phương tiện/công cụ để đạt mục đích cuối cùng.",
        "example": "For him, this boring job is just a means to an end to pay for college."
    },
    {
        "id": 506,
        "word": "Make ends meet",
        "type": "idiom",
        "pronunciation": "/meɪk endz miːt/",
        "meaning": "Xoay sở để đủ tiền trang trải cuộc sống.",
        "example": "With inflation rising, many families are struggling to make ends meet."
    },
    {
        "id": 507,
        "word": "The grass is always greener...",
        "type": "idiom",
        "pronunciation": "/ðə ɡrɑːs ɪz ˈɔːl.weɪz ˈɡriː.nə/",
        "meaning": "Đứng núi này trông núi nọ (on the other side).",
        "example": "He quit his job for a new one, but realized the grass is always greener..."
    },
    {
        "id": 508,
        "word": "Bite the hand that feeds you",
        "type": "idiom",
        "pronunciation": "/baɪt ðə hænd ðæt fiːdz juː/",
        "meaning": "Ăn cháo đá bát, vô ơn.",
        "example": "Insulting your boss is like biting the hand that feeds you."
    },
    {
        "id": 509,
        "word": "Leave someone in the lurch",
        "type": "idiom",
        "pronunciation": "/liːv ˈsʌm.wʌn ɪn ðə lɜːtʃ/",
        "meaning": "Bỏ rơi ai đó trong lúc hoạn nạn, khó khăn.",
        "example": "He promised to help me move, but he left me in the lurch."
    },
    {
        "id": 510,
        "word": "Burn your bridges",
        "type": "idiom",
        "pronunciation": "/bɜːn jɔː ˈbrɪdʒ.ɪz/",
        "meaning": "Cắt đứt đường lui, phá mối quan hệ.",
        "example": "Be polite when you resign; you don't want to burn your bridges."
    }
];