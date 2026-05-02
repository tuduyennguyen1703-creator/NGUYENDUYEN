const vocabList = [
    {
        "id": 1,
        "word": "Wake up",
        "type": "phr. v.",
        "pronunciation": "/weɪk ʌp/",
        "meaning": "Tỉnh giấc, thức giấc.",
        "example": "I usually wake up at 6 AM every morning."
    },
    {
        "id": 2,
        "word": "Get up",
        "type": "phr. v.",
        "pronunciation": "/ɡet ʌp/",
        "meaning": "Thức dậy, ra khỏi giường.",
        "example": "She gets up early to do morning exercises."
    },
    {
        "id": 3,
        "word": "Put on",
        "type": "phr. v.",
        "pronunciation": "/pʊt ɒn/",
        "meaning": "Mặc (quần áo), mang (giày), đội (mũ).",
        "example": "It's cold outside, so put on your coat."
    },
    {
        "id": 4,
        "word": "Take off",
        "type": "phr. v.",
        "pronunciation": "/teɪk ɒf/",
        "meaning": "Cởi (quần áo, giày), cất cánh (máy bay).",
        "example": "Please take off your shoes before entering the house."
    },
    {
        "id": 5,
        "word": "Turn on",
        "type": "phr. v.",
        "pronunciation": "/tɜːn ɒn/",
        "meaning": "Bật (đèn, tivi, máy móc).",
        "example": "It's getting dark. Can you turn on the lights?"
    },
    {
        "id": 6,
        "word": "Turn off",
        "type": "phr. v.",
        "pronunciation": "/tɜːn ɒf/",
        "meaning": "Tắt (đèn, thiết bị điện).",
        "example": "Remember to turn off the fans when you leave the room."
    },
    {
        "id": 7,
        "word": "Turn up",
        "type": "phr. v.",
        "pronunciation": "/tɜːn ʌp/",
        "meaning": "Vặn to (âm lượng), xuất hiện.",
        "example": "I can't hear the music. Please turn it up."
    },
    {
        "id": 8,
        "word": "Turn down",
        "type": "phr. v.",
        "pronunciation": "/tɜːn daʊn/",
        "meaning": "Vặn nhỏ (âm lượng), từ chối.",
        "example": "The TV is too loud; please turn it down."
    },
    {
        "id": 9,
        "word": "Look for",
        "type": "phr. v.",
        "pronunciation": "/lʊk fɔː/",
        "meaning": "Tìm kiếm.",
        "example": "What are you looking for? – My keys."
    },
    {
        "id": 10,
        "word": "Look after",
        "type": "phr. v.",
        "pronunciation": "/lʊk ˈɑːf.tə/",
        "meaning": "Chăm sóc, trông nom.",
        "example": "I have to look after my baby sister tonight."
    },
    {
        "id": 11,
        "word": "Look at",
        "type": "phr. v.",
        "pronunciation": "/lʊk ət/",
        "meaning": "Nhìn vào, ngắm nhìn.",
        "example": "Look at the blackboard, please!"
    },
    {
        "id": 12,
        "word": "Look up",
        "type": "phr. v.",
        "pronunciation": "/lʊk ʌp/",
        "meaning": "Tra cứu (từ điển, thông tin).",
        "example": "If you don't know the word, look it up in a dictionary."
    },
    {
        "id": 13,
        "word": "Look out",
        "type": "phr. v.",
        "pronunciation": "/lʊk aʊt/",
        "meaning": "Coi chừng, cẩn thận.",
        "example": "Look out! There's a car coming."
    },
    {
        "id": 14,
        "word": "Look forward to",
        "type": "phr. v.",
        "pronunciation": "/lʊk ˈfɔː.wəd tuː/",
        "meaning": "Mong đợi, háo hức chờ đón (+ V-ing).",
        "example": "I am looking forward to hearing from you."
    },
    {
        "id": 15,
        "word": "Go out",
        "type": "phr. v.",
        "pronunciation": "/ɡəʊ aʊt/",
        "meaning": "Đi ra ngoài, đi chơi.",
        "example": "We often go out for dinner on weekends."
    },
    {
        "id": 16,
        "word": "Go on",
        "type": "phr. v.",
        "pronunciation": "/ɡəʊ ɒn/",
        "meaning": "Tiếp tục (= continue).",
        "example": "Please go on reading the text."
    },
    {
        "id": 17,
        "word": "Go away",
        "type": "phr. v.",
        "pronunciation": "/ɡəʊ əˈweɪ/",
        "meaning": "Rời đi, biến mất, đi du lịch xa.",
        "example": "They are going away for the summer holiday."
    },
    {
        "id": 18,
        "word": "Go back",
        "type": "phr. v.",
        "pronunciation": "/ɡəʊ bæk/",
        "meaning": "Quay lại, trở về.",
        "example": "I forgot my umbrella, I need to go back home."
    },
    {
        "id": 19,
        "word": "Go down",
        "type": "phr. v.",
        "pronunciation": "/ɡəʊ daʊn/",
        "meaning": "Đi xuống, giảm xuống.",
        "example": "The price of petrol has gone down recently."
    },
    {
        "id": 20,
        "word": "Go up",
        "type": "phr. v.",
        "pronunciation": "/ɡəʊ ʌp/",
        "meaning": "Đi lên, tăng lên.",
        "example": "The number of students has gone up this year."
    },
    {
        "id": 21,
        "word": "Get in",
        "type": "phr. v.",
        "pronunciation": "/ɡet ɪn/",
        "meaning": "Lên (ô tô, taxi), đi vào.",
        "example": "Get in the car, we are late!"
    },
    {
        "id": 22,
        "word": "Get out (of)",
        "type": "phr. v.",
        "pronunciation": "/ɡet aʊt əv/",
        "meaning": "Ra khỏi (ô tô, phòng), thoát khỏi.",
        "example": "He got out of the taxi and walked away."
    },
    {
        "id": 23,
        "word": "Get on",
        "type": "phr. v.",
        "pronunciation": "/ɡet ɒn/",
        "meaning": "Lên (xe buýt, tàu hỏa, máy bay).",
        "example": "We got on the bus at the central station."
    },
    {
        "id": 24,
        "word": "Get off",
        "type": "phr. v.",
        "pronunciation": "/ɡet ɒf/",
        "meaning": "Xuống (xe buýt, tàu hỏa, máy bay).",
        "example": "We need to get off at the next stop."
    },
    {
        "id": 25,
        "word": "Get over",
        "type": "phr. v.",
        "pronunciation": "/ɡet ˈəʊ.və/",
        "meaning": "Vượt qua (bệnh tật, khó khăn).",
        "example": "It took her a long time to get over the flu."
    },
    {
        "id": 26,
        "word": "Get along (with)",
        "type": "phr. v.",
        "pronunciation": "/ɡet əˈlɒŋ wɪð/",
        "meaning": "Hòa thuận, có mối quan hệ tốt.",
        "example": "I get along very well with my classmates."
    },
    {
        "id": 27,
        "word": "Come in",
        "type": "phr. v.",
        "pronunciation": "/kʌm ɪn/",
        "meaning": "Đi vào.",
        "example": "Knock on the door before you come in."
    },
    {
        "id": 28,
        "word": "Come back",
        "type": "phr. v.",
        "pronunciation": "/kʌm bæk/",
        "meaning": "Quay trở lại.",
        "example": "When will your parents come back from Hanoi?"
    },
    {
        "id": 29,
        "word": "Come out",
        "type": "phr. v.",
        "pronunciation": "/kʌm aʊt/",
        "meaning": "Đi ra, xuất bản, tung ra.",
        "example": "Her new book will come out next month."
    },
    {
        "id": 30,
        "word": "Come over",
        "type": "phr. v.",
        "pronunciation": "/kʌm ˈəʊ.və/",
        "meaning": "Ghé thăm nhà.",
        "example": "Why don't you come over for dinner tonight?"
    },
    {
        "id": 31,
        "word": "Stand up",
        "type": "phr. v.",
        "pronunciation": "/stænd ʌp/",
        "meaning": "Đứng lên.",
        "example": "The students stand up when the teacher enters."
    },
    {
        "id": 32,
        "word": "Sit down",
        "type": "phr. v.",
        "pronunciation": "/sɪt daʊn/",
        "meaning": "Ngồi xuống.",
        "example": "Please sit down and open your books."
    },
    {
        "id": 33,
        "word": "Write down",
        "type": "phr. v.",
        "pronunciation": "/raɪt daʊn/",
        "meaning": "Ghi chép lại.",
        "example": "Write down the new words in your notebook."
    },
    {
        "id": 34,
        "word": "Read out",
        "type": "phr. v.",
        "pronunciation": "/riːd aʊt/",
        "meaning": "Đọc to lên.",
        "example": "Can you read out the answer for question 1?"
    },
    {
        "id": 35,
        "word": "Point out",
        "type": "phr. v.",
        "pronunciation": "/pɔɪnt aʊt/",
        "meaning": "Chỉ ra, vạch ra.",
        "example": "The teacher pointed out my mistakes in the essay."
    },
    {
        "id": 36,
        "word": "Find out",
        "type": "phr. v.",
        "pronunciation": "/faɪnd aʊt/",
        "meaning": "Tìm ra, phát hiện ra thông tin.",
        "example": "I need to find out what time the train leaves."
    },
    {
        "id": 37,
        "word": "Pick up",
        "type": "phr. v.",
        "pronunciation": "/pɪk ʌp/",
        "meaning": "Nhặt lên, đón ai đó.",
        "example": "My dad will pick me up after school."
    },
    {
        "id": 38,
        "word": "Put down",
        "type": "phr. v.",
        "pronunciation": "/pʊt daʊn/",
        "meaning": "Đặt xuống, bỏ xuống.",
        "example": "Put your pens down; the test is over."
    },
    {
        "id": 39,
        "word": "Put away",
        "type": "phr. v.",
        "pronunciation": "/pʊt əˈweɪ/",
        "meaning": "Cất đi (vào đúng vị trí).",
        "example": "Put your toys away before dinner."
    },
    {
        "id": 40,
        "word": "Put out",
        "type": "phr. v.",
        "pronunciation": "/pʊt aʊt/",
        "meaning": "Dập tắt (lửa, thuốc lá).",
        "example": "The firefighters quickly put out the fire."
    },
    {
        "id": 41,
        "word": "Put off",
        "type": "phr. v.",
        "pronunciation": "/pʊt ɒf/",
        "meaning": "Trì hoãn (= postpone).",
        "example": "The meeting was put off because of the storm."
    },
    {
        "id": 42,
        "word": "Take out",
        "type": "phr. v.",
        "pronunciation": "/teɪk aʊt/",
        "meaning": "Lấy ra, đổ (rác).",
        "example": "It's your turn to take out the garbage."
    },
    {
        "id": 43,
        "word": "Take away",
        "type": "phr. v.",
        "pronunciation": "/teɪk əˈweɪ/",
        "meaning": "Mang đi, lấy đi (thức ăn mua mang về).",
        "example": "Two burgers to take away, please."
    },
    {
        "id": 44,
        "word": "Take up",
        "type": "phr. v.",
        "pronunciation": "/teɪk ʌp/",
        "meaning": "Bắt đầu một thói quen/sở thích mới.",
        "example": "He took up swimming to stay healthy."
    },
    {
        "id": 45,
        "word": "Take over",
        "type": "phr. v.",
        "pronunciation": "/teɪk ˈəʊ.və/",
        "meaning": "Tiếp quản, thay thế.",
        "example": "She will take over as manager next week."
    },
    {
        "id": 46,
        "word": "Take after",
        "type": "phr. v.",
        "pronunciation": "/teɪk ˈɑːf.tə/",
        "meaning": "Giống ai đó (về ngoại hình, tính cách).",
        "example": "Mary takes after her mother; they both have blue eyes."
    },
    {
        "id": 47,
        "word": "Bring up",
        "type": "phr. v.",
        "pronunciation": "/brɪŋ ʌp/",
        "meaning": "Nuôi nấng, dạy dỗ.",
        "example": "He was brought up by his grandparents."
    },
    {
        "id": 48,
        "word": "Bring back",
        "type": "phr. v.",
        "pronunciation": "/brɪŋ bæk/",
        "meaning": "Mang lại, gợi nhớ lại.",
        "example": "This old song brings back a lot of memories."
    },
    {
        "id": 49,
        "word": "Give up",
        "type": "phr. v.",
        "pronunciation": "/ɡɪv ʌp/",
        "meaning": "Từ bỏ (thói quen, cố gắng).",
        "example": "You should give up smoking; it's bad for your health."
    },
    {
        "id": 50,
        "word": "Give back",
        "type": "phr. v.",
        "pronunciation": "/ɡɪv bæk/",
        "meaning": "Trả lại.",
        "example": "I will give back your book tomorrow."
    },
    {
        "id": 51,
        "word": "Give out",
        "type": "phr. v.",
        "pronunciation": "/ɡɪv aʊt/",
        "meaning": "Phân phát (= distribute).",
        "example": "The teacher gave out the exam papers."
    },
    {
        "id": 52,
        "word": "Give in",
        "type": "phr. v.",
        "pronunciation": "/ɡɪv ɪn/",
        "meaning": "Đầu hàng, nhượng bộ.",
        "example": "After a long argument, he finally gave in."
    },
    {
        "id": 53,
        "word": "Run out (of)",
        "type": "phr. v.",
        "pronunciation": "/rʌn aʊt əv/",
        "meaning": "Hết, cạn kiệt.",
        "example": "We have run out of milk; I'll go buy some."
    },
    {
        "id": 54,
        "word": "Run away",
        "type": "phr. v.",
        "pronunciation": "/rʌn əˈweɪ/",
        "meaning": "Bỏ chạy, trốn đi.",
        "example": "The thief ran away when he saw the police."
    },
    {
        "id": 55,
        "word": "Run into",
        "type": "phr. v.",
        "pronunciation": "/rʌn ˈɪn.tuː/",
        "meaning": "Tình cờ gặp.",
        "example": "I ran into my old teacher at the supermarket."
    },
    {
        "id": 56,
        "word": "Keep on",
        "type": "phr. v.",
        "pronunciation": "/kiːp ɒn/",
        "meaning": "Tiếp tục làm gì.",
        "example": "Keep on trying, and you will succeed."
    },
    {
        "id": 57,
        "word": "Keep up with",
        "type": "phr. v.",
        "pronunciation": "/kiːp ʌp wɪð/",
        "meaning": "Bắt kịp, theo kịp.",
        "example": "He walks so fast that I can't keep up with him."
    },
    {
        "id": 58,
        "word": "Hold on",
        "type": "phr. v.",
        "pronunciation": "/həʊld ɒn/",
        "meaning": "Chờ một chút, giữ máy (điện thoại).",
        "example": "Hold on a minute, I'll go get her."
    },
    {
        "id": 59,
        "word": "Carry on",
        "type": "phr. v.",
        "pronunciation": "/ˈkær.i ɒn/",
        "meaning": "Tiếp tục (= continue).",
        "example": "Carry on with your work while I am away."
    },
    {
        "id": 60,
        "word": "Carry out",
        "type": "phr. v.",
        "pronunciation": "/ˈkær.i aʊt/",
        "meaning": "Tiến hành, thực hiện.",
        "example": "The scientists are carrying out a new experiment."
    },
    {
        "id": 61,
        "word": "Break down",
        "type": "phr. v.",
        "pronunciation": "/breɪk daʊn/",
        "meaning": "Bị hỏng (máy móc, xe cộ).",
        "example": "Our car broke down on the way to the beach."
    },
    {
        "id": 62,
        "word": "Break in / into",
        "type": "phr. v.",
        "pronunciation": "/breɪk ɪn/",
        "meaning": "Đột nhập vào nhà.",
        "example": "Someone broke into my house and stole my laptop."
    },
    {
        "id": 63,
        "word": "Catch up (with)",
        "type": "phr. v.",
        "pronunciation": "/kætʃ ʌp/",
        "meaning": "Đuổi kịp, theo kịp.",
        "example": "Go ahead, I will catch up with you later."
    },
    {
        "id": 64,
        "word": "Check in",
        "type": "phr. v.",
        "pronunciation": "/tʃek ɪn/",
        "meaning": "Làm thủ tục nhận phòng (khách sạn).",
        "example": "We checked in at the hotel at 2 PM."
    },
    {
        "id": 65,
        "word": "Check out",
        "type": "phr. v.",
        "pronunciation": "/tʃek aʊt/",
        "meaning": "Làm thủ tục trả phòng.",
        "example": "Don't forget to return the keys when you check out."
    },
    {
        "id": 66,
        "word": "Clear up",
        "type": "phr. v.",
        "pronunciation": "/klɪər ʌp/",
        "meaning": "Quang đãng (thời tiết), dọn dẹp.",
        "example": "I hope the weather clears up this afternoon."
    },
    {
        "id": 67,
        "word": "Clean up",
        "type": "phr. v.",
        "pronunciation": "/kliːn ʌp/",
        "meaning": "Dọn dẹp sạch sẽ.",
        "example": "We need to clean up the classroom before going home."
    },
    {
        "id": 68,
        "word": "Wash up",
        "type": "phr. v.",
        "pronunciation": "/wɒʃ ʌp/",
        "meaning": "Rửa bát đĩa, rửa mặt mũi tay chân.",
        "example": "I'll help you wash up after dinner."
    },
    {
        "id": 69,
        "word": "Tidy up",
        "type": "phr. v.",
        "pronunciation": "/ˈtaɪ.di ʌp/",
        "meaning": "Dọn dẹp gọn gàng.",
        "example": "Please tidy up your bedroom; it's a mess."
    },
    {
        "id": 70,
        "word": "Dress up",
        "type": "phr. v.",
        "pronunciation": "/dres ʌp/",
        "meaning": "Ăn mặc diện, hóa trang.",
        "example": "Kids love to dress up for Halloween."
    },
    {
        "id": 71,
        "word": "Grow up",
        "type": "phr. v.",
        "pronunciation": "/ɡrəʊ ʌp/",
        "meaning": "Lớn lên, trưởng thành.",
        "example": "What do you want to be when you grow up?"
    },
    {
        "id": 72,
        "word": "Hurry up",
        "type": "phr. v.",
        "pronunciation": "/ˈhʌr.i ʌp/",
        "meaning": "Nhanh lên.",
        "example": "Hurry up, or we will miss the bus!"
    },
    {
        "id": 73,
        "word": "Show up",
        "type": "phr. v.",
        "pronunciation": "/ʃəʊ ʌp/",
        "meaning": "Xuất hiện, đến nơi.",
        "example": "We waited for an hour, but he didn't show up."
    },
    {
        "id": 74,
        "word": "Show off",
        "type": "phr. v.",
        "pronunciation": "/ʃəʊ ɒf/",
        "meaning": "Khoe khoang.",
        "example": "He likes to show off his new smartphone."
    },
    {
        "id": 75,
        "word": "Set up",
        "type": "phr. v.",
        "pronunciation": "/set ʌp/",
        "meaning": "Thành lập, cài đặt, thiết lập.",
        "example": "They set up a club to help poor children."
    },
    {
        "id": 76,
        "word": "Set off",
        "type": "phr. v.",
        "pronunciation": "/set ɒf/",
        "meaning": "Khởi hành, bắt đầu chuyến đi.",
        "example": "We will set off early in the morning to avoid traffic."
    },
    {
        "id": 77,
        "word": "Pay back",
        "type": "phr. v.",
        "pronunciation": "/peɪ bæk/",
        "meaning": "Trả lại tiền đã mượn.",
        "example": "Can you lend me 50k? I will pay you back tomorrow."
    },
    {
        "id": 78,
        "word": "Fall down",
        "type": "phr. v.",
        "pronunciation": "/fɔːl daʊn/",
        "meaning": "Ngã xuống (đất).",
        "example": "The little boy fell down and started crying."
    },
    {
        "id": 79,
        "word": "Fill in",
        "type": "phr. v.",
        "pronunciation": "/fɪl ɪn/",
        "meaning": "Điền vào (chỗ trống, biểu mẫu).",
        "example": "Please fill in your name and address here."
    },
    {
        "id": 80,
        "word": "Hand in",
        "type": "phr. v.",
        "pronunciation": "/hænd ɪn/",
        "meaning": "Nộp bài, giao nộp.",
        "example": "Don't forget to hand in your homework on Friday."
    },
    {
        "id": 81,
        "word": "Hand out",
        "type": "phr. v.",
        "pronunciation": "/hænd aʊt/",
        "meaning": "Phân phát.",
        "example": "The monitor handed out the worksheets to the class."
    },
    {
        "id": 82,
        "word": "Throw away",
        "type": "phr. v.",
        "pronunciation": "/θrəʊ əˈweɪ/",
        "meaning": "Vứt đi.",
        "example": "Don't throw away these plastic bottles; we can recycle them."
    },
    {
        "id": 83,
        "word": "Try on",
        "type": "phr. v.",
        "pronunciation": "/traɪ ɒn/",
        "meaning": "Mặc thử (quần áo).",
        "example": "Can I try this shirt on, please?"
    },
    {
        "id": 84,
        "word": "Try out",
        "type": "phr. v.",
        "pronunciation": "/traɪ aʊt/",
        "meaning": "Thử nghiệm (máy móc, ý tưởng).",
        "example": "I want to try out the new bike before buying it."
    },
    {
        "id": 85,
        "word": "Hang out",
        "type": "phr. v.",
        "pronunciation": "/hæŋ aʊt/",
        "meaning": "Đi chơi, tụ tập bạn bè.",
        "example": "Teenagers like to hang out at the mall."
    },
    {
        "id": 86,
        "word": "Hang up",
        "type": "phr. v.",
        "pronunciation": "/hæŋ ʌp/",
        "meaning": "Treo lên, cúp máy điện thoại.",
        "example": "He hung up the phone without saying goodbye."
    },
    {
        "id": 87,
        "word": "Calm down",
        "type": "phr. v.",
        "pronunciation": "/kɑːm daʊn/",
        "meaning": "Bình tĩnh lại.",
        "example": "Calm down and tell me exactly what happened."
    },
    {
        "id": 88,
        "word": "Cheer up",
        "type": "phr. v.",
        "pronunciation": "/tʃɪər ʌp/",
        "meaning": "Vui lên nào.",
        "example": "Cheer up! The test wasn't that bad."
    },
    {
        "id": 89,
        "word": "Cross out",
        "type": "phr. v.",
        "pronunciation": "/krɒs aʊt/",
        "meaning": "Gạch bỏ (từ bị viết sai).",
        "example": "If you make a mistake, just cross it out."
    },
    {
        "id": 90,
        "word": "Drop in",
        "type": "phr. v.",
        "pronunciation": "/drɒp ɪn/",
        "meaning": "Ghé thăm một lát.",
        "example": "I'll drop in to see you on my way home."
    },
    {
        "id": 91,
        "word": "Drop off",
        "type": "phr. v.",
        "pronunciation": "/drɒp ɒf/",
        "meaning": "Cho ai xuống xe, ngủ gật.",
        "example": "Can you drop me off at the school gate?"
    },
    {
        "id": 92,
        "word": "Drop out (of)",
        "type": "phr. v.",
        "pronunciation": "/drɒp aʊt/",
        "meaning": "Bỏ học giữa chừng.",
        "example": "He dropped out of high school to work."
    },
    {
        "id": 93,
        "word": "Eat out",
        "type": "phr. v.",
        "pronunciation": "/iːt aʊt/",
        "meaning": "Đi ăn ở nhà hàng.",
        "example": "I don't want to cook tonight; let's eat out."
    },
    {
        "id": 94,
        "word": "Fall behind",
        "type": "phr. v.",
        "pronunciation": "/fɔːl bɪˈhaɪnd/",
        "meaning": "Tụt hậu, chậm hơn người khác.",
        "example": "If you don't study hard, you will fall behind your classmates."
    },
    {
        "id": 95,
        "word": "Figure out",
        "type": "phr. v.",
        "pronunciation": "/ˈfɪɡ.ər aʊt/",
        "meaning": "Tìm ra cách giải quyết, hiểu ra.",
        "example": "I can't figure out how to solve this math problem."
    },
    {
        "id": 96,
        "word": "Fill up",
        "type": "phr. v.",
        "pronunciation": "/fɪl ʌp/",
        "meaning": "Đổ đầy (xăng, nước).",
        "example": "We need to fill up the tank before the trip."
    },
    {
        "id": 97,
        "word": "Get back",
        "type": "phr. v.",
        "pronunciation": "/ɡet bæk/",
        "meaning": "Quay trở lại, nhận lại.",
        "example": "I lent him my book, but I never got it back."
    },
    {
        "id": 98,
        "word": "Give away",
        "type": "phr. v.",
        "pronunciation": "/ɡɪv əˈweɪ/",
        "meaning": "Cho đi (miễn phí), quyên góp.",
        "example": "She gave away all her old clothes to charity."
    },
    {
        "id": 99,
        "word": "Make up",
        "type": "phr. v.",
        "pronunciation": "/meɪk ʌp/",
        "meaning": "Bịa chuyện, trang điểm, làm hòa.",
        "example": "He made up a story about why he was late."
    },
    {
        "id": 100,
        "word": "Pass away",
        "type": "phr. v.",
        "pronunciation": "/pɑːs əˈweɪ/",
        "meaning": "Qua đời (cách nói lịch sự).",
        "example": "His grandfather passed away last year."
    },
    {
        "id": 101,
        "word": "Apply for",
        "type": "phr. v.",
        "pronunciation": "/əˈplaɪ fɔː/",
        "meaning": "Nộp đơn xin (việc, học bổng).",
        "example": "I decided to apply for a job at the local bank."
    },
    {
        "id": 102,
        "word": "Apologize for",
        "type": "phr. v.",
        "pronunciation": "/əˈpɒl.ə.dʒaɪz fɔː/",
        "meaning": "Xin lỗi vì điều gì.",
        "example": "He apologized for being late to the meeting."
    },
    {
        "id": 103,
        "word": "Ask after",
        "type": "phr. v.",
        "pronunciation": "/ɑːsk ˈɑːf.tə/",
        "meaning": "Hỏi thăm sức khỏe của ai.",
        "example": "My mother always asks after you when I call her."
    },
    {
        "id": 104,
        "word": "Ask out",
        "type": "phr. v.",
        "pronunciation": "/ɑːsk aʊt/",
        "meaning": "Mời ai đi chơi/hẹn hò.",
        "example": "He finally asked her out to dinner."
    },
    {
        "id": 105,
        "word": "Back up",
        "type": "phr. v.",
        "pronunciation": "/bæk ʌp/",
        "meaning": "Ủng hộ, sao lưu (dữ liệu).",
        "example": "Make sure to back up your files on a USB."
    },
    {
        "id": 106,
        "word": "Believe in",
        "type": "phr. v.",
        "pronunciation": "/bɪˈliːv ɪn/",
        "meaning": "Tin tưởng vào (sự tồn tại/khả năng).",
        "example": "Do you believe in ghosts?"
    },
    {
        "id": 107,
        "word": "Belong to",
        "type": "phr. v.",
        "pronunciation": "/bɪˈlɒŋ tuː/",
        "meaning": "Thuộc về ai đó.",
        "example": "This beautiful house belongs to my uncle."
    },
    {
        "id": 108,
        "word": "Blow up",
        "type": "phr. v.",
        "pronunciation": "/bləʊ ʌp/",
        "meaning": "Nổ tung, thổi phồng (bong bóng).",
        "example": "The terrorists tried to blow up the bridge."
    },
    {
        "id": 109,
        "word": "Break into",
        "type": "phr. v.",
        "pronunciation": "/breɪk ˈɪn.tuː/",
        "meaning": "Đột nhập vào.",
        "example": "A thief broke into my house and stole my laptop."
    },
    {
        "id": 110,
        "word": "Break out",
        "type": "phr. v.",
        "pronunciation": "/breɪk aʊt/",
        "meaning": "Bùng nổ, bùng phát (cháy, chiến tranh).",
        "example": "A fire broke out in the kitchen yesterday."
    },
    {
        "id": 111,
        "word": "Break up",
        "type": "phr. v.",
        "pronunciation": "/breɪk ʌp/",
        "meaning": "Chia tay, kết thúc (năm học).",
        "example": "They broke up after two years of dating."
    },
    {
        "id": 112,
        "word": "Bring about",
        "type": "phr. v.",
        "pronunciation": "/brɪŋ əˈbaʊt/",
        "meaning": "Gây ra, đem lại sự thay đổi.",
        "example": "The internet brought about big changes in our lives."
    },
    {
        "id": 113,
        "word": "Brush up (on)",
        "type": "phr. v.",
        "pronunciation": "/brʌʃ ʌp/",
        "meaning": "Ôn tập lại, trau dồi lại.",
        "example": "I need to brush up on my English before going abroad."
    },
    {
        "id": 114,
        "word": "Call back",
        "type": "phr. v.",
        "pronunciation": "/kɔːl bæk/",
        "meaning": "Gọi điện thoại lại.",
        "example": "I am busy now, I will call you back later."
    },
    {
        "id": 115,
        "word": "Call for",
        "type": "phr. v.",
        "pronunciation": "/kɔːl fɔː/",
        "meaning": "Đòi hỏi, yêu cầu cần thiết.",
        "example": "This difficult situation calls for immediate action."
    },
    {
        "id": 116,
        "word": "Call off",
        "type": "phr. v.",
        "pronunciation": "/kɔːl ɒf/",
        "meaning": "Hủy bỏ (= cancel).",
        "example": "They called off the football match due to the storm."
    },
    {
        "id": 117,
        "word": "Care for",
        "type": "phr. v.",
        "pronunciation": "/keə fɔː/",
        "meaning": "Chăm sóc, thích.",
        "example": "She stayed at home to care for her sick grandmother."
    },
    {
        "id": 118,
        "word": "Catch on",
        "type": "phr. v.",
        "pronunciation": "/kætʃ ɒn/",
        "meaning": "Trở nên phổ biến, được ưa chuộng.",
        "example": "This new fashion trend is starting to catch on."
    },
    {
        "id": 119,
        "word": "Close down",
        "type": "phr. v.",
        "pronunciation": "/kləʊz daʊn/",
        "meaning": "Đóng cửa hẳn, phá sản.",
        "example": "The old factory closed down last year."
    },
    {
        "id": 120,
        "word": "Come across",
        "type": "phr. v.",
        "pronunciation": "/kʌm əˈkrɒs/",
        "meaning": "Tình cờ gặp/tìm thấy.",
        "example": "I came across an old photo of us today."
    },
    {
        "id": 121,
        "word": "Come down with",
        "type": "phr. v.",
        "pronunciation": "/kʌm daʊn wɪð/",
        "meaning": "Bị ốm, mắc bệnh nhẹ.",
        "example": "I think I’m coming down with a cold."
    },
    {
        "id": 122,
        "word": "Come up with",
        "type": "phr. v.",
        "pronunciation": "/kʌm ʌp wɪð/",
        "meaning": "Nảy ra (ý tưởng, giải pháp).",
        "example": "He came up with a great idea for the project."
    },
    {
        "id": 123,
        "word": "Consist of",
        "type": "phr. v.",
        "pronunciation": "/kənˈsɪst əv/",
        "meaning": "Bao gồm (= be made of).",
        "example": "Water consists of hydrogen and oxygen."
    },
    {
        "id": 124,
        "word": "Cope with",
        "type": "phr. v.",
        "pronunciation": "/kəʊp wɪð/",
        "meaning": "Đối phó, đương đầu.",
        "example": "It's hard to cope with so much stress at work."
    },
    {
        "id": 125,
        "word": "Count on",
        "type": "phr. v.",
        "pronunciation": "/kaʊnt ɒn/",
        "meaning": "Tin cậy, dựa dẫm vào (= rely on).",
        "example": "You can always count on me when you need help."
    },
    {
        "id": 126,
        "word": "Cut down on",
        "type": "phr. v.",
        "pronunciation": "/kʌt daʊn ɒn/",
        "meaning": "Cắt giảm bớt.",
        "example": "You should cut down on sugar to lose weight."
    },
    {
        "id": 127,
        "word": "Cut off",
        "type": "phr. v.",
        "pronunciation": "/kʌt ɒf/",
        "meaning": "Cắt đứt, ngừng cung cấp (điện, nước).",
        "example": "They cut off the electricity because we didn't pay the bill."
    },
    {
        "id": 128,
        "word": "Deal with",
        "type": "phr. v.",
        "pronunciation": "/diːl wɪð/",
        "meaning": "Giải quyết, đối phó, làm ăn với.",
        "example": "I have a lot of emails to deal with this morning."
    },
    {
        "id": 129,
        "word": "Depend on",
        "type": "phr. v.",
        "pronunciation": "/dɪˈpend ɒn/",
        "meaning": "Phụ thuộc vào.",
        "example": "My decision depends on the weather tomorrow."
    },
    {
        "id": 130,
        "word": "Die out",
        "type": "phr. v.",
        "pronunciation": "/daɪ aʊt/",
        "meaning": "Tuyệt chủng, biến mất hoàn toàn.",
        "example": "Dinosaurs died out millions of years ago."
    },
    {
        "id": 131,
        "word": "Do without",
        "type": "phr. v.",
        "pronunciation": "/duː wɪˈðaʊt/",
        "meaning": "Xoay xở mà không có cái gì.",
        "example": "I simply can't do without my smartphone."
    },
    {
        "id": 132,
        "word": "Draw up",
        "type": "phr. v.",
        "pronunciation": "/drɔːr ʌp/",
        "meaning": "Soạn thảo (kế hoạch, hợp đồng).",
        "example": "The lawyer drew up a contract for the two companies."
    },
    {
        "id": 133,
        "word": "Dress down",
        "type": "phr. v.",
        "pronunciation": "/dres daʊn/",
        "meaning": "Ăn mặc xuề xòa, thoải mái.",
        "example": "Employees are allowed to dress down on Fridays."
    },
    {
        "id": 134,
        "word": "Drop by / in",
        "type": "phr. v.",
        "pronunciation": "/drɒp baɪ/",
        "meaning": "Tạt qua, ghé thăm một lát.",
        "example": "Drop by my house for a cup of tea if you have time."
    },
    {
        "id": 135,
        "word": "End up",
        "type": "phr. v.",
        "pronunciation": "/end ʌp/",
        "meaning": "Cuối cùng lại (trở thành, dẫn đến).",
        "example": "We got lost and ended up in a strange village."
    },
    {
        "id": 136,
        "word": "Face up to",
        "type": "phr. v.",
        "pronunciation": "/feɪs ʌp tuː/",
        "meaning": "Dũng cảm đối mặt với.",
        "example": "You must face up to your responsibilities."
    },
    {
        "id": 137,
        "word": "Fall apart",
        "type": "phr. v.",
        "pronunciation": "/fɔːl əˈpɑːt/",
        "meaning": "Vỡ vụn, rách nát, sụp đổ.",
        "example": "These old shoes are falling apart."
    },
    {
        "id": 138,
        "word": "Fall out (with)",
        "type": "phr. v.",
        "pronunciation": "/fɔːl aʊt/",
        "meaning": "Cãi vã, bất hòa với ai.",
        "example": "He fell out with his best friend over a silly game."
    },
    {
        "id": 139,
        "word": "Fill out",
        "type": "phr. v.",
        "pronunciation": "/fɪl aʊt/",
        "meaning": "Điền vào (biểu mẫu, tờ khai).",
        "example": "Please fill out this application form in black ink."
    },
    {
        "id": 140,
        "word": "Focus on",
        "type": "phr. v.",
        "pronunciation": "/ˈfəʊ.kəs ɒn/",
        "meaning": "Tập trung vào.",
        "example": "Turn off the TV; you need to focus on your homework."
    },
    {
        "id": 141,
        "word": "Get away",
        "type": "phr. v.",
        "pronunciation": "/ɡet əˈweɪ/",
        "meaning": "Trốn thoát, đi nghỉ mát.",
        "example": "We are hoping to get away for a few days next week."
    },
    {
        "id": 142,
        "word": "Get by",
        "type": "phr. v.",
        "pronunciation": "/ɡet baɪ/",
        "meaning": "Sống sót, xoay xở (về tài chính).",
        "example": "How does she get by on such a small salary?"
    },
    {
        "id": 143,
        "word": "Get down to",
        "type": "phr. v.",
        "pronunciation": "/ɡet daʊn tuː/",
        "meaning": "Bắt tay vào việc một cách nghiêm túc.",
        "example": "Stop talking and get down to business!"
    },
    {
        "id": 144,
        "word": "Give off",
        "type": "phr. v.",
        "pronunciation": "/ɡɪv ɒf/",
        "meaning": "Tỏa ra (mùi hương, nhiệt, ánh sáng).",
        "example": "The fire gives off a lot of heat."
    },
    {
        "id": 145,
        "word": "Go ahead",
        "type": "phr. v.",
        "pronunciation": "/ɡəʊ əˈhed/",
        "meaning": "Bắt đầu, tiến hành, cứ tự nhiên.",
        "example": "\"Can I use your pen?\" – \"Sure, go ahead.\""
    },
    {
        "id": 146,
        "word": "Go along with",
        "type": "phr. v.",
        "pronunciation": "/ɡəʊ əˈlɒŋ wɪð/",
        "meaning": "Đồng ý với ai/ý kiến nào đó.",
        "example": "I go along with everything you just said."
    },
    {
        "id": 147,
        "word": "Go off",
        "type": "phr. v.",
        "pronunciation": "/ɡəʊ ɒf/",
        "meaning": "Nổ (bom), reo (chuông), ôi thiu (thức ăn).",
        "example": "My alarm clock goes off at 6 AM every day."
    },
    {
        "id": 148,
        "word": "Go over",
        "type": "phr. v.",
        "pronunciation": "/ɡəʊ ˈəʊ.və/",
        "meaning": "Kiểm tra lại cẩn thận (= examine).",
        "example": "Let's go over the plan one more time."
    },
    {
        "id": 149,
        "word": "Go through",
        "type": "phr. v.",
        "pronunciation": "/ɡəʊ θruː/",
        "meaning": "Trải qua (khó khăn), xem xét kỹ.",
        "example": "She went through a difficult time after the accident."
    },
    {
        "id": 150,
        "word": "Grow out of",
        "type": "phr. v.",
        "pronunciation": "/ɡrəʊ aʊt əv/",
        "meaning": "Lớn quá không mặc vừa quần áo nữa.",
        "example": "My son has already grown out of his new shoes."
    },
    {
        "id": 151,
        "word": "Hand over",
        "type": "phr. v.",
        "pronunciation": "/hænd ˈəʊ.və/",
        "meaning": "Giao nộp, bàn giao quyền lực/đồ vật.",
        "example": "The thief was forced to hand over the stolen money."
    },
    {
        "id": 152,
        "word": "Hold back",
        "type": "phr. v.",
        "pronunciation": "/həʊld bæk/",
        "meaning": "Kiềm chế (cảm xúc), giữ lại.",
        "example": "She tried to hold back her tears during the movie."
    },
    {
        "id": 153,
        "word": "Hold up",
        "type": "phr. v.",
        "pronunciation": "/həʊld ʌp/",
        "meaning": "Trì hoãn (= delay), cướp bóc.",
        "example": "Sorry I'm late, I was held up in traffic."
    },
    {
        "id": 154,
        "word": "Join in",
        "type": "phr. v.",
        "pronunciation": "/dʒɔɪn ɪn/",
        "meaning": "Tham gia vào một hoạt động.",
        "example": "We are playing a game. Do you want to join in?"
    },
    {
        "id": 155,
        "word": "Keep away",
        "type": "phr. v.",
        "pronunciation": "/kiːp əˈweɪ/",
        "meaning": "Tránh xa.",
        "example": "Keep away from the edge of the cliff!"
    },
    {
        "id": 156,
        "word": "Keep out",
        "type": "phr. v.",
        "pronunciation": "/kiːp aʊt/",
        "meaning": "Không cho phép vào.",
        "example": "The sign on the door said \"Private - Keep out\"."
    },
    {
        "id": 157,
        "word": "Knock down",
        "type": "phr. v.",
        "pronunciation": "/nɒk daʊn/",
        "meaning": "Đánh ngã, phá dỡ (tòa nhà).",
        "example": "They are going to knock down the old hospital."
    },
    {
        "id": 158,
        "word": "Knock out",
        "type": "phr. v.",
        "pronunciation": "/nɒk aʊt/",
        "meaning": "Đánh ngất, hạ đo ván.",
        "example": "The boxer knocked out his opponent in the first round."
    },
    {
        "id": 159,
        "word": "Leave out",
        "type": "phr. v.",
        "pronunciation": "/liːv aʊt/",
        "meaning": "Bỏ sót, loại trừ ra.",
        "example": "You left out an important detail in your story."
    },
    {
        "id": 160,
        "word": "Let down",
        "type": "phr. v.",
        "pronunciation": "/let daʊn/",
        "meaning": "Làm ai đó thất vọng.",
        "example": "I promised to help him, and I won't let him down."
    },
    {
        "id": 161,
        "word": "Let in",
        "type": "phr. v.",
        "pronunciation": "/let ɪn/",
        "meaning": "Cho phép vào trong.",
        "example": "Open the window to let in some fresh air."
    },
    {
        "id": 162,
        "word": "Live on",
        "type": "phr. v.",
        "pronunciation": "/lɪv ɒn/",
        "meaning": "Sống dựa vào (tiền, loại thức ăn).",
        "example": "These animals live mainly on fruit and insects."
    },
    {
        "id": 163,
        "word": "Live up to",
        "type": "phr. v.",
        "pronunciation": "/lɪv ʌp tuː/",
        "meaning": "Đáp ứng được kỳ vọng.",
        "example": "The movie didn't live up to my expectations."
    },
    {
        "id": 164,
        "word": "Look back on",
        "type": "phr. v.",
        "pronunciation": "/lʊk bæk ɒn/",
        "meaning": "Nhìn lại, hồi tưởng lại quá khứ.",
        "example": "When I look back on my childhood, I smile."
    },
    {
        "id": 165,
        "word": "Look down on",
        "type": "phr. v.",
        "pronunciation": "/lʊk daʊn ɒn/",
        "meaning": "Coi thường, khinh thường ai.",
        "example": "You shouldn't look down on people who are poor."
    },
    {
        "id": 166,
        "word": "Look into",
        "type": "phr. v.",
        "pronunciation": "/lʊk ˈɪn.tuː/",
        "meaning": "Điều tra, xem xét kỹ lưỡng.",
        "example": "The police are looking into the cause of the accident."
    },
    {
        "id": 167,
        "word": "Look round",
        "type": "phr. v.",
        "pronunciation": "/lʊk raʊnd/",
        "meaning": "Ngó nghiêng, đi thăm quan xung quanh.",
        "example": "We spent the afternoon looking round the city."
    },
    {
        "id": 168,
        "word": "Look up to",
        "type": "phr. v.",
        "pronunciation": "/lʊk ʌp tuː/",
        "meaning": "Kính trọng, ngưỡng mộ ai.",
        "example": "I always look up to my father; he is my hero."
    },
    {
        "id": 169,
        "word": "Make out",
        "type": "phr. v.",
        "pronunciation": "/meɪk aʊt/",
        "meaning": "Nhìn rõ, nghe rõ, hiểu được.",
        "example": "The writing is so small I can't make out what it says."
    },
    {
        "id": 170,
        "word": "Make up for",
        "type": "phr. v.",
        "pronunciation": "/meɪk ʌp fɔː/",
        "meaning": "Đền bù, bù đắp cho.",
        "example": "Nothing can make up for the loss of a child."
    },
    {
        "id": 171,
        "word": "Pass down",
        "type": "phr. v.",
        "pronunciation": "/pɑːs daʊn/",
        "meaning": "Truyền lại (cho thế hệ sau).",
        "example": "This ring was passed down from my grandmother."
    },
    {
        "id": 172,
        "word": "Pass out",
        "type": "phr. v.",
        "pronunciation": "/pɑːs aʊt/",
        "meaning": "Ngất xỉu.",
        "example": "It was so hot in the room that she passed out."
    },
    {
        "id": 173,
        "word": "Pay attention to",
        "type": "phr. v.",
        "pronunciation": "/peɪ əˈten.ʃən tuː/",
        "meaning": "Chú ý tới.",
        "example": "Please pay attention to the teacher's instructions."
    },
    {
        "id": 174,
        "word": "Pay off",
        "type": "phr. v.",
        "pronunciation": "/peɪ ɒf/",
        "meaning": "Thanh toán hết nợ, đền đáp xứng đáng.",
        "example": "All her hard work finally paid off when she passed."
    },
    {
        "id": 175,
        "word": "Pull down",
        "type": "phr. v.",
        "pronunciation": "/pʊl daʊn/",
        "meaning": "Phá hủy, kéo đổ (tòa nhà).",
        "example": "They pulled down the old cinema to build a supermarket."
    },
    {
        "id": 176,
        "word": "Pull over",
        "type": "phr. v.",
        "pronunciation": "/pʊl ˈəʊ.və/",
        "meaning": "Tấp xe vào lề đường.",
        "example": "The police officer signaled the driver to pull over."
    },
    {
        "id": 177,
        "word": "Put forward",
        "type": "phr. v.",
        "pronunciation": "/pʊt ˈfɔː.wəd/",
        "meaning": "Đề xuất (ý kiến, kế hoạch).",
        "example": "He put forward a new plan to save money."
    },
    {
        "id": 178,
        "word": "Put through",
        "type": "phr. v.",
        "pronunciation": "/pʊt θruː/",
        "meaning": "Nối máy điện thoại cho ai.",
        "example": "Could you put me through to the manager, please?"
    },
    {
        "id": 179,
        "word": "Put up",
        "type": "phr. v.",
        "pronunciation": "/pʊt ʌp/",
        "meaning": "Dựng lên (lều), cho ai ở nhờ.",
        "example": "We put up a tent in the forest for the night."
    },
    {
        "id": 180,
        "word": "Put up with",
        "type": "phr. v.",
        "pronunciation": "/pʊt ʌp wɪð/",
        "meaning": "Chịu đựng.",
        "example": "I can't put up with his bad behavior anymore."
    },
    {
        "id": 181,
        "word": "Rely on",
        "type": "phr. v.",
        "pronunciation": "/rɪˈlaɪ ɒn/",
        "meaning": "Dựa dẫm, tin cậy vào (= depend on).",
        "example": "You can always rely on him to keep a secret."
    },
    {
        "id": 182,
        "word": "Ring up",
        "type": "phr. v.",
        "pronunciation": "/rɪŋ ʌp/",
        "meaning": "Gọi điện thoại.",
        "example": "I will ring up the clinic to make an appointment."
    },
    {
        "id": 183,
        "word": "Run after",
        "type": "phr. v.",
        "pronunciation": "/rʌn ˈɑːf.tə/",
        "meaning": "Đuổi theo.",
        "example": "The dog ran after the postman."
    },
    {
        "id": 184,
        "word": "Run over",
        "type": "phr. v.",
        "pronunciation": "/rʌn ˈəʊ.və/",
        "meaning": "Cán qua, đâm phải (bằng xe cộ).",
        "example": "The poor cat was run over by a truck."
    },
    {
        "id": 185,
        "word": "See off",
        "type": "phr. v.",
        "pronunciation": "/siː ɒf/",
        "meaning": "Tiễn ai đó (ở sân bay, nhà ga).",
        "example": "We went to the airport to see my sister off."
    },
    {
        "id": 186,
        "word": "Send for",
        "type": "phr. v.",
        "pronunciation": "/send fɔː/",
        "meaning": "Mời đến, gọi ai đến giúp.",
        "example": "His illness is serious; we must send for a doctor."
    },
    {
        "id": 187,
        "word": "Set in",
        "type": "phr. v.",
        "pronunciation": "/set ɪn/",
        "meaning": "Bắt đầu và có vẻ sẽ kéo dài (mùa, thời tiết).",
        "example": "Winter has set in early this year."
    },
    {
        "id": 188,
        "word": "Settle down",
        "type": "phr. v.",
        "pronunciation": "/ˈset.əl daʊn/",
        "meaning": "Ổn định cuộc sống, bình tĩnh lại.",
        "example": "After traveling the world, he decided to settle down and get married."
    },
    {
        "id": 189,
        "word": "Stand for",
        "type": "phr. v.",
        "pronunciation": "/stænd fɔː/",
        "meaning": "Viết tắt cho chữ gì, đại diện cho.",
        "example": "What does \"WHO\" stand for?"
    },
    {
        "id": 190,
        "word": "Stand out",
        "type": "phr. v.",
        "pronunciation": "/stænd aʊt/",
        "meaning": "Nổi bật, dễ nhận thấy.",
        "example": "Her bright red dress made her stand out in the crowd."
    },
    {
        "id": 191,
        "word": "Stay up",
        "type": "phr. v.",
        "pronunciation": "/steɪ ʌp/",
        "meaning": "Thức khuya.",
        "example": "We stayed up late to watch the football match."
    },
    {
        "id": 192,
        "word": "Sum up",
        "type": "phr. v.",
        "pronunciation": "/sʌm ʌp/",
        "meaning": "Tóm tắt lại.",
        "example": "To sum up, the project was a great success."
    },
    {
        "id": 193,
        "word": "Take aback",
        "type": "phr. v.",
        "pronunciation": "/teɪk əˈbæk/",
        "meaning": "Làm ngạc nhiên, sửng sốt (thường bị động).",
        "example": "I was taken aback by his rude answer."
    },
    {
        "id": 194,
        "word": "Take back",
        "type": "phr. v.",
        "pronunciation": "/teɪk bæk/",
        "meaning": "Nhận lại, rút lại lời nói.",
        "example": "I take back what I said; I was wrong."
    },
    {
        "id": 195,
        "word": "Take down",
        "type": "phr. v.",
        "pronunciation": "/teɪk daʊn/",
        "meaning": "Ghi chép lại (= write down), tháo dỡ xuống.",
        "example": "Did you take down the teacher's email address?"
    },
    {
        "id": 196,
        "word": "Take in",
        "type": "phr. v.",
        "pronunciation": "/teɪk ɪn/",
        "meaning": "Hiểu, lừa gạt, thu hẹp quần áo.",
        "example": "Don't be taken in by his lies."
    },
    {
        "id": 197,
        "word": "Take on",
        "type": "phr. v.",
        "pronunciation": "/teɪk ɒn/",
        "meaning": "Đảm nhận (công việc), tuyển dụng.",
        "example": "The company is taking on 50 new employees."
    },
    {
        "id": 198,
        "word": "Talk over",
        "type": "phr. v.",
        "pronunciation": "/tɔːk ˈəʊ.və/",
        "meaning": "Thảo luận, bàn bạc kỹ.",
        "example": "We need to talk over the plan before deciding."
    },
    {
        "id": 199,
        "word": "Tear up",
        "type": "phr. v.",
        "pronunciation": "/teər ʌp/",
        "meaning": "Xé nát.",
        "example": "She was so angry that she tore up his letter."
    },
    {
        "id": 200,
        "word": "Tell off",
        "type": "phr. v.",
        "pronunciation": "/tel ɒf/",
        "meaning": "La mắng, rầy la.",
        "example": "The teacher told him off for talking in class."
    },
    {
        "id": 201,
        "word": "Add up",
        "type": "phr. v.",
        "pronunciation": "/æd ʌp/",
        "meaning": "Có ý nghĩa, hợp lý, tính tổng.",
        "example": "His story just doesn't add up; I think he's lying."
    },
    {
        "id": 202,
        "word": "Allow for",
        "type": "phr. v.",
        "pronunciation": "/əˈlaʊ fɔː/",
        "meaning": "Tính đến, xem xét đến (sự cố/chi phí).",
        "example": "You should allow for traffic delays when driving to the airport."
    },
    {
        "id": 203,
        "word": "Answer back",
        "type": "phr. v.",
        "pronunciation": "/ˈɑːn.sə bæk/",
        "meaning": "Cãi lại, trả treo.",
        "example": "The child was punished for answering his mother back."
    },
    {
        "id": 204,
        "word": "Back away",
        "type": "phr. v.",
        "pronunciation": "/bæk əˈweɪ/",
        "meaning": "Lùi lại (vì sợ), nhượng bộ.",
        "example": "She saw the snake and slowly backed away."
    },
    {
        "id": 205,
        "word": "Bargain for",
        "type": "phr. v.",
        "pronunciation": "/ˈbɑː.ɡɪn fɔː/",
        "meaning": "Dự tính, mong đợi điều gì xảy ra.",
        "example": "The exam was much harder than I had bargained for."
    },
    {
        "id": 206,
        "word": "Black out",
        "type": "phr. v.",
        "pronunciation": "/blæk aʊt/",
        "meaning": "Ngất xỉu, tắt điện hoàn toàn.",
        "example": "He blacked out for a few minutes after the accident."
    },
    {
        "id": 207,
        "word": "Block out",
        "type": "phr. v.",
        "pronunciation": "/blɒk aʊt/",
        "meaning": "Che khuất (ánh sáng), cố quên đi (ký ức).",
        "example": "She tried to block out the memory of the crash."
    },
    {
        "id": 208,
        "word": "Blow away",
        "type": "phr. v.",
        "pronunciation": "/bləʊ əˈweɪ/",
        "meaning": "Thổi bay, làm ai đó vô cùng kinh ngạc.",
        "example": "The ending of the movie completely blew me away."
    },
    {
        "id": 209,
        "word": "Boil over",
        "type": "phr. v.",
        "pronunciation": "/bɔɪl ˈəʊ.və/",
        "meaning": "Trào ra (nước sôi), mất bình tĩnh.",
        "example": "The tension between the two groups finally boiled over."
    },
    {
        "id": 210,
        "word": "Book up",
        "type": "phr. v.",
        "pronunciation": "/bʊk ʌp/",
        "meaning": "Đặt hết chỗ.",
        "example": "The hotels are fully booked up for the summer."
    },
    {
        "id": 211,
        "word": "Boss around",
        "type": "phr. v.",
        "pronunciation": "/bɒs əˈraʊnd/",
        "meaning": "Hống hách, sai khiến người khác.",
        "example": "I'm tired of him bossing everyone around in the office."
    },
    {
        "id": 212,
        "word": "Breeze through",
        "type": "phr. v.",
        "pronunciation": "/briːz θruː/",
        "meaning": "Vượt qua (kỳ thi/khó khăn) một cách dễ dàng.",
        "example": "She studied hard and breezed through the final exam."
    },
    {
        "id": 213,
        "word": "Bring forward",
        "type": "phr. v.",
        "pronunciation": "/brɪŋ ˈfɔː.wəd/",
        "meaning": "Dời lịch lên sớm hơn.",
        "example": "The meeting has been brought forward to Tuesday."
    },
    {
        "id": 214,
        "word": "Brush off",
        "type": "phr. v.",
        "pronunciation": "/brʌʃ ɒf/",
        "meaning": "Phớt lờ, không bận tâm đến (lời chỉ trích).",
        "example": "He just brushed off the criticism and kept working."
    },
    {
        "id": 215,
        "word": "Bump up",
        "type": "phr. v.",
        "pronunciation": "/bʌmp ʌp/",
        "meaning": "Tăng lên (giá cả, số lượng).",
        "example": "The airlines bump up their prices during the holidays."
    },
    {
        "id": 216,
        "word": "Burn down",
        "type": "phr. v.",
        "pronunciation": "/bɜːn daʊn/",
        "meaning": "Bị thiêu rụi, cháy rụi (tòa nhà).",
        "example": "The old wooden house burned down last night."
    },
    {
        "id": 217,
        "word": "Butt in",
        "type": "phr. v.",
        "pronunciation": "/bʌt ɪn/",
        "meaning": "Xen vào, nói leo (cắt lời người khác).",
        "example": "Please don't butt in while I'm talking!"
    },
    {
        "id": 218,
        "word": "Call round",
        "type": "phr. v.",
        "pronunciation": "/kɔːl raʊnd/",
        "meaning": "Ghé thăm nhà ai đó một lát.",
        "example": "I'll call round tomorrow to see how you are."
    },
    {
        "id": 219,
        "word": "Catch up on",
        "type": "phr. v.",
        "pronunciation": "/kætʃ ʌp ɒn/",
        "meaning": "Làm bù (việc chưa làm), cập nhật tin tức.",
        "example": "I need to catch up on some sleep this weekend."
    },
    {
        "id": 220,
        "word": "Chance upon",
        "type": "phr. v.",
        "pronunciation": "/tʃɑːns əˈpɒn/",
        "meaning": "Tình cờ gặp/tìm thấy (= come across).",
        "example": "I chanced upon an amazing restaurant in the alley."
    },
    {
        "id": 221,
        "word": "Change over",
        "type": "phr. v.",
        "pronunciation": "/tʃeɪndʒ ˈəʊ.və/",
        "meaning": "Chuyển đổi (hệ thống, cách làm việc).",
        "example": "The school changed over to a new grading system."
    },
    {
        "id": 222,
        "word": "Chase after",
        "type": "phr. v.",
        "pronunciation": "/tʃeɪs ˈɑːf.tə/",
        "meaning": "Đuổi theo (ai/cái gì).",
        "example": "The dog chased after the postman down the street."
    },
    {
        "id": 223,
        "word": "Check over",
        "type": "phr. v.",
        "pronunciation": "/tʃek ˈəʊ.və/",
        "meaning": "Kiểm tra kỹ lưỡng (để tìm lỗi).",
        "example": "Always check your essay over before handing it in."
    },
    {
        "id": 224,
        "word": "Check up on",
        "type": "phr. v.",
        "pronunciation": "/tʃek ʌp ɒn/",
        "meaning": "Kiểm tra xem ai đó đang làm gì/ra sao.",
        "example": "My parents used to call just to check up on me."
    },
    {
        "id": 225,
        "word": "Chew over",
        "type": "phr. v.",
        "pronunciation": "/tʃuː ˈəʊ.və/",
        "meaning": "Suy nghĩ, ngẫm nghĩ kỹ về một vấn đề.",
        "example": "I need a few days to chew over your proposal."
    },
    {
        "id": 226,
        "word": "Chop down",
        "type": "phr. v.",
        "pronunciation": "/tʃɒp daʊn/",
        "meaning": "Đốn hạ (cây cối).",
        "example": "They chopped down the old oak tree in the park."
    },
    {
        "id": 227,
        "word": "Clear away",
        "type": "phr. v.",
        "pronunciation": "/klɪər əˈweɪ/",
        "meaning": "Dọn dẹp đi (đồ vật sau khi dùng xong).",
        "example": "Let me help you clear away the dinner plates."
    },
    {
        "id": 228,
        "word": "Clear out",
        "type": "phr. v.",
        "pronunciation": "/klɪər aʊt/",
        "meaning": "Dọn sạch đồ đạc, dọn đi.",
        "example": "I spent the whole morning clearing out my closet."
    },
    {
        "id": 229,
        "word": "Cloud over",
        "type": "phr. v.",
        "pronunciation": "/klaʊd ˈəʊ.və/",
        "meaning": "Kéo mây mù (trời), sa sầm nét mặt.",
        "example": "The sky clouded over and it started to rain."
    },
    {
        "id": 230,
        "word": "Come apart",
        "type": "phr. v.",
        "pronunciation": "/kʌm əˈpɑːt/",
        "meaning": "Vỡ ra, bung ra, vỡ lở.",
        "example": "The cheap toy came apart in the child's hands."
    },
    {
        "id": 231,
        "word": "Come in for",
        "type": "phr. v.",
        "pronunciation": "/kʌm ɪn fɔː/",
        "meaning": "Hứng chịu (lời chỉ trích, phản đối).",
        "example": "The mayor came in for a lot of criticism."
    },
    {
        "id": 232,
        "word": "Come through",
        "type": "phr. v.",
        "pronunciation": "/kʌm θruː/",
        "meaning": "Vượt qua (nguy hiểm), hoàn thành tốt.",
        "example": "It was a difficult surgery, but he came through it well."
    },
    {
        "id": 233,
        "word": "Come up to",
        "type": "phr. v.",
        "pronunciation": "/kʌm ʌp tuː/",
        "meaning": "Đạt tới, đáp ứng được (kỳ vọng).",
        "example": "The food didn't come up to our expectations."
    },
    {
        "id": 234,
        "word": "Count out",
        "type": "phr. v.",
        "pronunciation": "/kaʊnt aʊt/",
        "meaning": "Không tính đến, loại ra khỏi kế hoạch.",
        "example": "I'm too tired to go to the party, so count me out."
    },
    {
        "id": 235,
        "word": "Cry out",
        "type": "phr. v.",
        "pronunciation": "/kraɪ aʊt/",
        "meaning": "Hét lên, kêu la (vì đau đớn/sợ hãi).",
        "example": "She cried out in pain when she burned her hand."
    },
    {
        "id": 236,
        "word": "Cut across",
        "type": "phr. v.",
        "pronunciation": "/kʌt əˈkrɒs/",
        "meaning": "Đi tắt qua, ảnh hưởng đến nhiều nhóm.",
        "example": "We cut across the field to get to school faster."
    },
    {
        "id": 237,
        "word": "Die away",
        "type": "phr. v.",
        "pronunciation": "/daɪ əˈweɪ/",
        "meaning": "Nhỏ dần rồi tắt hẳn (âm thanh).",
        "example": "The sound of the train slowly died away in the distance."
    },
    {
        "id": 238,
        "word": "Die down",
        "type": "phr. v.",
        "pronunciation": "/daɪ daʊn/",
        "meaning": "Dịu đi, lắng xuống (bão, tiếng ồn, dư luận).",
        "example": "We waited for the storm to die down before going out."
    },
    {
        "id": 239,
        "word": "Dig up",
        "type": "phr. v.",
        "pronunciation": "/dɪɡ ʌp/",
        "meaning": "Đào lên, tìm ra thông tin bí mật/đã bị quên.",
        "example": "The journalist dug up some shocking information about the actor."
    },
    {
        "id": 240,
        "word": "Dish out",
        "type": "phr. v.",
        "pronunciation": "/dɪʃ aʊt/",
        "meaning": "Phân phát, đưa cho nhiều người.",
        "example": "The volunteer dished out hot soup to the homeless."
    },
    {
        "id": 241,
        "word": "Doze off",
        "type": "phr. v.",
        "pronunciation": "/dəʊz ɒf/",
        "meaning": "Ngủ gật.",
        "example": "I dozed off during the boring lecture."
    },
    {
        "id": 242,
        "word": "Drag on",
        "type": "phr. v.",
        "pronunciation": "/dræɡ ɒn/",
        "meaning": "Kéo dài lê thê (gây nhàm chán).",
        "example": "The meeting dragged on for over three hours."
    },
    {
        "id": 243,
        "word": "Draw in",
        "type": "phr. v.",
        "pronunciation": "/drɔːr ɪn/",
        "meaning": "Kéo dài ra (ngày tàn), lôi kéo ai vào rắc rối.",
        "example": "Don't let them draw you into their argument."
    },
    {
        "id": 244,
        "word": "Dream up",
        "type": "phr. v.",
        "pronunciation": "/driːm ʌp/",
        "meaning": "Bịa ra, nghĩ ra (ý tưởng khác thường/điên rồ).",
        "example": "He dreamed up a crazy plan to make a million dollars."
    },
    {
        "id": 245,
        "word": "Drink up",
        "type": "phr. v.",
        "pronunciation": "/drɪŋk ʌp/",
        "meaning": "Uống cạn, uống hết.",
        "example": "Drink up your milk! We need to leave soon."
    },
    {
        "id": 246,
        "word": "Drive off",
        "type": "phr. v.",
        "pronunciation": "/draɪv ɒf/",
        "meaning": "Lái xe đi mất.",
        "example": "The bank robbers got in the car and drove off."
    },
    {
        "id": 247,
        "word": "Drop behind",
        "type": "phr. v.",
        "pronunciation": "/drɒp bɪˈhaɪnd/",
        "meaning": "Tụt lại phía sau.",
        "example": "He dropped behind the rest of the runners."
    },
    {
        "id": 248,
        "word": "Dry up",
        "type": "phr. v.",
        "pronunciation": "/draɪ ʌp/",
        "meaning": "Khô cạn (sông ngòi, nguồn cung).",
        "example": "During the drought, the river completely dried up."
    },
    {
        "id": 249,
        "word": "Eat up",
        "type": "phr. v.",
        "pronunciation": "/iːt ʌp/",
        "meaning": "Ăn sạch, ăn hết.",
        "example": "Eat up your vegetables if you want dessert."
    },
    {
        "id": 250,
        "word": "Embark on",
        "type": "phr. v.",
        "pronunciation": "/ɪmˈbɑːk ɒn/",
        "meaning": "Bắt đầu, dấn thân vào (dự án/hành trình mới).",
        "example": "She is about to embark on a new career as a writer."
    },
    {
        "id": 251,
        "word": "Explain away",
        "type": "phr. v.",
        "pronunciation": "/ɪkˈspleɪn əˈweɪ/",
        "meaning": "Thanh minh, lấp liếm để trốn tội.",
        "example": "You can't just explain away your mistakes by blaming others."
    },
    {
        "id": 252,
        "word": "Fade away",
        "type": "phr. v.",
        "pronunciation": "/feɪd əˈweɪ/",
        "meaning": "Mờ dần, phai nhạt dần (màu sắc, ký ức).",
        "example": "Her childhood memories gradually faded away."
    },
    {
        "id": 253,
        "word": "Fall in with",
        "type": "phr. v.",
        "pronunciation": "/fɔːl ɪn wɪð/",
        "meaning": "Đồng ý với, chơi cùng một nhóm.",
        "example": "He fell in with a bad crowd and started skipping school."
    },
    {
        "id": 254,
        "word": "Feel for",
        "type": "phr. v.",
        "pronunciation": "/fiːl fɔː/",
        "meaning": "Đồng cảm, thương cảm với ai.",
        "example": "I really feel for the victims of the earthquake."
    },
    {
        "id": 255,
        "word": "Fight back",
        "type": "phr. v.",
        "pronunciation": "/faɪt bæk/",
        "meaning": "Đánh trả, kìm nén (nước mắt).",
        "example": "She tried to fight back her tears when she heard the news."
    },
    {
        "id": 256,
        "word": "Fill in for",
        "type": "phr. v.",
        "pronunciation": "/fɪl ɪn fɔː/",
        "meaning": "Làm thay, thế chỗ cho ai đó tạm thời.",
        "example": "I'm filling in for Mary while she is on maternity leave."
    },
    {
        "id": 257,
        "word": "Finish off",
        "type": "phr. v.",
        "pronunciation": "/ˈfɪn.ɪʃ ɒf/",
        "meaning": "Hoàn thành nốt phần cuối cùng.",
        "example": "I just need an hour to finish off this report."
    },
    {
        "id": 258,
        "word": "Fit in",
        "type": "phr. v.",
        "pronunciation": "/fɪt ɪn/",
        "meaning": "Hòa nhập với môi trường/nhóm.",
        "example": "He had no trouble fitting in at his new school."
    },
    {
        "id": 259,
        "word": "Fix up",
        "type": "phr. v.",
        "pronunciation": "/fɪks ʌp/",
        "meaning": "Sắp xếp (cuộc hẹn), sửa chữa lại.",
        "example": "We fixed up the old house and sold it for a profit."
    },
    {
        "id": 260,
        "word": "Flick through",
        "type": "phr. v.",
        "pronunciation": "/flɪk θruː/",
        "meaning": "Lật xem lướt qua (sách, tạp chí).",
        "example": "I flicked through the magazine while waiting for the dentist."
    },
    {
        "id": 261,
        "word": "Follow up",
        "type": "phr. v.",
        "pronunciation": "/ˈfɒl.əʊ ʌp/",
        "meaning": "Theo dõi, tiếp tục xử lý việc gì.",
        "example": "The police are following up on several leads."
    },
    {
        "id": 262,
        "word": "Freeze up",
        "type": "phr. v.",
        "pronunciation": "/friːz ʌp/",
        "meaning": "Cứng đơ người (vì quá sợ hãi/hồi hộp).",
        "example": "I completely froze up during the job interview."
    },
    {
        "id": 263,
        "word": "Get ahead",
        "type": "phr. v.",
        "pronunciation": "/ɡet əˈhed/",
        "meaning": "Tiến bộ, thăng tiến, thành công.",
        "example": "You need to work hard if you want to get ahead in life."
    },
    {
        "id": 264,
        "word": "Get away from",
        "type": "phr. v.",
        "pronunciation": "/ɡet əˈweɪ frəm/",
        "meaning": "Trốn thoát, rời bỏ (nơi ồn ào/khó chịu).",
        "example": "I just wanted to get away from the noisy city."
    },
    {
        "id": 265,
        "word": "Get behind",
        "type": "phr. v.",
        "pronunciation": "/ɡet bɪˈhaɪnd/",
        "meaning": "Tụt hậu (trong công việc/thanh toán), ủng hộ.",
        "example": "I've got behind with my homework this week."
    },
    {
        "id": 266,
        "word": "Get into",
        "type": "phr. v.",
        "pronunciation": "/ɡet ˈɪn.tuː/",
        "meaning": "Bắt đầu có hứng thú với, đi vào (xe ô tô).",
        "example": "She's really getting into yoga lately."
    },
    {
        "id": 267,
        "word": "Get out of",
        "type": "phr. v.",
        "pronunciation": "/ɡet aʊt əv/",
        "meaning": "Trốn tránh trách nhiệm, từ bỏ thói quen.",
        "example": "He always tries to get out of doing the dishes."
    },
    {
        "id": 268,
        "word": "Get over with",
        "type": "phr. v.",
        "pronunciation": "/ɡet ˈəʊ.və wɪð/",
        "meaning": "Làm cho xong chuyện không vui/khó chịu.",
        "example": "Let's just do the exam and get it over with!"
    },
    {
        "id": 269,
        "word": "Get up to",
        "type": "phr. v.",
        "pronunciation": "/ɡet ʌp tuː/",
        "meaning": "Làm chuyện gì đó (thường là mờ ám, nghịch ngợm).",
        "example": "What did the kids get up to while I was out?"
    },
    {
        "id": 270,
        "word": "Go about",
        "type": "phr. v.",
        "pronunciation": "/ɡəʊ əˈbaʊt/",
        "meaning": "Bắt đầu làm gì, giải quyết việc gì.",
        "example": "How should I go about applying for a visa?"
    },
    {
        "id": 271,
        "word": "Go after",
        "type": "phr. v.",
        "pronunciation": "/ɡəʊ ˈɑːf.tə/",
        "meaning": "Theo đuổi (mục tiêu, kẻ trộm).",
        "example": "You should go after your dreams."
    },
    {
        "id": 272,
        "word": "Go back on",
        "type": "phr. v.",
        "pronunciation": "/ɡəʊ bæk ɒn/",
        "meaning": "Nuốt lời, thất hứa.",
        "example": "He went back on his promise to lend me the money."
    },
    {
        "id": 273,
        "word": "Go for",
        "type": "phr. v.",
        "pronunciation": "/ɡəʊ fɔː/",
        "meaning": "Lựa chọn, tấn công.",
        "example": "I think I'll go for the chocolate cake."
    },
    {
        "id": 274,
        "word": "Go under",
        "type": "phr. v.",
        "pronunciation": "/ɡəʊ ˈʌn.də/",
        "meaning": "Phá sản, chìm xuống.",
        "example": "Many small businesses went under during the pandemic."
    },
    {
        "id": 275,
        "word": "Grow on",
        "type": "phr. v.",
        "pronunciation": "/ɡrəʊ ɒn/",
        "meaning": "Dần dần khiến ai đó thích hơn.",
        "example": "I didn't like this song at first, but it's growing on me."
    },
    {
        "id": 276,
        "word": "Hand back",
        "type": "phr. v.",
        "pronunciation": "/hænd bæk/",
        "meaning": "Trả lại (vật đã mượn/tịch thu).",
        "example": "The teacher handed back the graded tests."
    },
    {
        "id": 277,
        "word": "Hang around",
        "type": "phr. v.",
        "pronunciation": "/hæŋ əˈraʊnd/",
        "meaning": "Lảng vảng, quanh quẩn không làm gì đặc biệt.",
        "example": "They spent the afternoon hanging around the mall."
    },
    {
        "id": 278,
        "word": "Head for",
        "type": "phr. v.",
        "pronunciation": "/hed fɔː/",
        "meaning": "Hướng về phía, đi về hướng.",
        "example": "It's getting late; we should head for home."
    },
    {
        "id": 279,
        "word": "Hear from",
        "type": "phr. v.",
        "pronunciation": "/hɪə frəm/",
        "meaning": "Nhận được tin (thư, điện thoại) của ai.",
        "example": "Have you heard from John recently?"
    },
    {
        "id": 280,
        "word": "Hit upon",
        "type": "phr. v.",
        "pronunciation": "/hɪt əˈpɒn/",
        "meaning": "Chợt nảy ra, bất ngờ tìm ra (giải pháp).",
        "example": "We hit upon a great idea for the marketing campaign."
    },
    {
        "id": 281,
        "word": "Hold down",
        "type": "phr. v.",
        "pronunciation": "/həʊld daʊn/",
        "meaning": "Giữ được (công việc), đè ai/vật gì xuống.",
        "example": "It's hard for him to hold down a stable job."
    },
    {
        "id": 282,
        "word": "Hold out",
        "type": "phr. v.",
        "pronunciation": "/həʊld aʊt/",
        "meaning": "Cầm cự, sống sót, chìa tay ra.",
        "example": "How long can they hold out without food and water?"
    },
    {
        "id": 283,
        "word": "Iron out",
        "type": "phr. v.",
        "pronunciation": "/ˈaɪ.ən aʊt/",
        "meaning": "Giải quyết rắc rối, ủi phẳng nếp nhăn.",
        "example": "We need a meeting to iron out the details of the contract."
    },
    {
        "id": 284,
        "word": "Keep back",
        "type": "phr. v.",
        "pronunciation": "/kiːp bæk/",
        "meaning": "Giấu giếm, giữ lại, lùi lại.",
        "example": "I feel like you are keeping something back from me."
    },
    {
        "id": 285,
        "word": "Keep down",
        "type": "phr. v.",
        "pronunciation": "/kiːp daʊn/",
        "meaning": "Cố không nôn mửa, kìm hãm (giá cả/âm thanh).",
        "example": "The medicine helped me keep my food down."
    },
    {
        "id": 286,
        "word": "Lash out",
        "type": "phr. v.",
        "pronunciation": "/læʃ aʊt/",
        "meaning": "Tấn công dữ dội (bằng lời nói hoặc hành động).",
        "example": "He lashed out at the reporter who asked the rude question."
    },
    {
        "id": 287,
        "word": "Laugh off",
        "type": "phr. v.",
        "pronunciation": "/lɑːf ɒf/",
        "meaning": "Cười trừ, bỏ qua chuyện gì như thể nó không quan trọng.",
        "example": "She just laughed off the silly rumors."
    },
    {
        "id": 288,
        "word": "Lay down",
        "type": "phr. v.",
        "pronunciation": "/leɪ daʊn/",
        "meaning": "Đặt ra (luật lệ), bỏ vũ khí xuống.",
        "example": "The new rules lay down strict safety standards."
    },
    {
        "id": 289,
        "word": "Lay out",
        "type": "phr. v.",
        "pronunciation": "/leɪ aʊt/",
        "meaning": "Chi tiêu nhiều tiền, trình bày rõ ràng.",
        "example": "He laid out a detailed plan for the project."
    },
    {
        "id": 290,
        "word": "Leave behind",
        "type": "phr. v.",
        "pronunciation": "/liːv bɪˈhaɪnd/",
        "meaning": "Bỏ lại phía sau, quên không mang theo.",
        "example": "I accidentally left my umbrella behind in the taxi."
    },
    {
        "id": 291,
        "word": "Lie down",
        "type": "phr. v.",
        "pronunciation": "/laɪ daʊn/",
        "meaning": "Nằm xuống nghỉ ngơi.",
        "example": "I have a headache; I need to go lie down."
    },
    {
        "id": 292,
        "word": "Live down",
        "type": "phr. v.",
        "pronunciation": "/lɪv daʊn/",
        "meaning": "Làm cho người ta quên đi (một lỗi lầm/sự xấu hổ).",
        "example": "If I fail this test, I will never live it down."
    },
    {
        "id": 293,
        "word": "Lock out",
        "type": "phr. v.",
        "pronunciation": "/lɒk aʊt/",
        "meaning": "Khóa cửa không cho vào, vô tình nhốt mình bên ngoài.",
        "example": "I lost my keys and locked myself out of the apartment."
    },
    {
        "id": 294,
        "word": "Log in",
        "type": "phr. v.",
        "pronunciation": "/lɒɡ ɪn/",
        "meaning": "Đăng nhập vào hệ thống/máy tính.",
        "example": "You need a password to log in to the network."
    },
    {
        "id": 295,
        "word": "Look ahead",
        "type": "phr. v.",
        "pronunciation": "/lʊk əˈhed/",
        "meaning": "Nhìn về tương lai, lo xa.",
        "example": "A good manager must always look ahead and plan carefully."
    },
    {
        "id": 296,
        "word": "Look on",
        "type": "phr. v.",
        "pronunciation": "/lʊk ɒn/",
        "meaning": "Đứng xem (mà không can thiệp/giúp đỡ).",
        "example": "A large crowd looked on as the firefighters worked."
    },
    {
        "id": 297,
        "word": "Move in",
        "type": "phr. v.",
        "pronunciation": "/muːv ɪn/",
        "meaning": "Chuyển đến nơi ở mới.",
        "example": "We bought a new house and will move in next Friday."
    },
    {
        "id": 298,
        "word": "Move out",
        "type": "phr. v.",
        "pronunciation": "/muːv aʊt/",
        "meaning": "Chuyển đi, dọn ra khỏi nơi ở.",
        "example": "Her lease is up, so she has to move out by the 30th."
    },
    {
        "id": 299,
        "word": "Name after",
        "type": "phr. v.",
        "pronunciation": "/neɪm ˈɑːf.tə/",
        "meaning": "Đặt tên theo tên của ai đó.",
        "example": "He was named after his grandfather."
    },
    {
        "id": 300,
        "word": "Wipe out",
        "type": "phr. v.",
        "pronunciation": "/waɪp aʊt/",
        "meaning": "Tiêu diệt, xóa sổ hoàn toàn, làm kiệt sức.",
        "example": "The disease wiped out the entire population of the village."
    },
    {
        "id": 301,
        "word": "Pass off",
        "type": "phr. v.",
        "pronunciation": "/pɑːs ɒf/",
        "meaning": "Xảy ra, diễn ra (thường tốt đẹp); giả vờ.",
        "example": "The meeting passed off without any problems."
    },
    {
        "id": 302,
        "word": "Play down",
        "type": "phr. v.",
        "pronunciation": "/pleɪ daʊn/",
        "meaning": "Nói giảm, làm giảm tầm quan trọng.",
        "example": "The government tried to play down the severity of the crisis."
    },
    {
        "id": 303,
        "word": "Play up",
        "type": "phr. v.",
        "pronunciation": "/pleɪ ʌp/",
        "meaning": "Dở chứng, hỏng hóc (máy móc); làm nũng.",
        "example": "My old laptop is acting weird and playing up again."
    },
    {
        "id": 304,
        "word": "Pull off",
        "type": "phr. v.",
        "pronunciation": "/pʊl ɒf/",
        "meaning": "Thành công thực hiện một việc rất khó.",
        "example": "It was a difficult task, but she managed to pull it off."
    },
    {
        "id": 305,
        "word": "Pull out",
        "type": "phr. v.",
        "pronunciation": "/pʊl aʊt/",
        "meaning": "Rút lui khỏi (thỏa thuận, cuộc đua).",
        "example": "The investor decided to pull out of the project at the last minute."
    },
    {
        "id": 306,
        "word": "Push for",
        "type": "phr. v.",
        "pronunciation": "/pʊʃ fɔː/",
        "meaning": "Đòi hỏi, gây áp lực để có được điều gì.",
        "example": "The workers are pushing for higher wages and better conditions."
    },
    {
        "id": 307,
        "word": "Put across",
        "type": "phr. v.",
        "pronunciation": "/pʊt əˈkrɒs/",
        "meaning": "Truyền đạt (ý tưởng) một cách rõ ràng.",
        "example": "He is a great teacher who puts his ideas across very well."
    },
    {
        "id": 308,
        "word": "Put aside",
        "type": "phr. v.",
        "pronunciation": "/pʊt əˈsaɪd/",
        "meaning": "Tiết kiệm, gạt sang một bên (bất đồng).",
        "example": "Let's put our differences aside and work together."
    },
    {
        "id": 309,
        "word": "Put down to",
        "type": "phr. v.",
        "pronunciation": "/pʊt daʊn tuː/",
        "meaning": "Quy cho là do (nguyên nhân).",
        "example": "I put his bad temper down to his lack of sleep."
    },
    {
        "id": 310,
        "word": "Read up on",
        "type": "phr. v.",
        "pronunciation": "/riːd ʌp ɒn/",
        "meaning": "Tìm hiểu, đọc thêm tài liệu về chủ đề gì.",
        "example": "You should read up on the company before the interview."
    },
    {
        "id": 311,
        "word": "Result in",
        "type": "phr. v.",
        "pronunciation": "/rɪˈzʌlt ɪn/",
        "meaning": "Dẫn đến kết quả (= lead to).",
        "example": "The heavy rain resulted in severe flooding."
    },
    {
        "id": 312,
        "word": "Result from",
        "type": "phr. v.",
        "pronunciation": "/rɪˈzʌlt frəm/",
        "meaning": "Bắt nguồn từ, do (= be caused by).",
        "example": "His poor health results from years of heavy smoking."
    },
    {
        "id": 313,
        "word": "Run through",
        "type": "phr. v.",
        "pronunciation": "/rʌn θruː/",
        "meaning": "Tập dượt lại; tiêu sạch tiền.",
        "example": "Let's run through the presentation one more time."
    },
    {
        "id": 314,
        "word": "Run down",
        "type": "phr. v.",
        "pronunciation": "/rʌn daʊn/",
        "meaning": "Chỉ trích gay gắt; đâm phải (bằng xe).",
        "example": "Stop running yourself down; you did a great job!"
    },
    {
        "id": 315,
        "word": "Run up against",
        "type": "phr. v.",
        "pronunciation": "/rʌn ʌp əˈɡenst/",
        "meaning": "Đối mặt với khó khăn/sự phản đối bất ngờ.",
        "example": "The new law ran up against a lot of opposition."
    },
    {
        "id": 316,
        "word": "Save up",
        "type": "phr. v.",
        "pronunciation": "/seɪv ʌp/",
        "meaning": "Tiết kiệm tiền cho một mục đích cụ thể.",
        "example": "I am saving up for a trip to Europe next year."
    },
    {
        "id": 317,
        "word": "Scrape through",
        "type": "phr. v.",
        "pronunciation": "/skreɪp θruː/",
        "meaning": "Vừa đủ điểm qua, chật vật vượt qua.",
        "example": "He didn't study much but managed to scrape through the exam."
    },
    {
        "id": 318,
        "word": "See through",
        "type": "phr. v.",
        "pronunciation": "/siː θruː/",
        "meaning": "Nhìn thấu (sự lừa dối/bản chất).",
        "example": "I could easily see through his fake excuses."
    },
    {
        "id": 319,
        "word": "Settle for",
        "type": "phr. v.",
        "pronunciation": "/ˈset.əl fɔː/",
        "meaning": "Chấp nhận thứ gì dù nó không hẳn là tốt nhất.",
        "example": "I wanted a red car, but I had to settle for a silver one."
    },
    {
        "id": 320,
        "word": "Shake off",
        "type": "phr. v.",
        "pronunciation": "/ʃeɪk ɒf/",
        "meaning": "Thoát khỏi (bệnh tật, người đeo bám).",
        "example": "I hope I can shake off this terrible cold before the trip."
    },
    {
        "id": 321,
        "word": "Shut down",
        "type": "phr. v.",
        "pronunciation": "/ʃʌt daʊn/",
        "meaning": "Tắt máy, đóng cửa (nhà máy, hệ thống).",
        "example": "Remember to shut down your computer before leaving."
    },
    {
        "id": 322,
        "word": "Sign up",
        "type": "phr. v.",
        "pronunciation": "/saɪn ʌp/",
        "meaning": "Đăng ký tham gia (khóa học, câu lạc bộ).",
        "example": "I decided to sign up for a Spanish class this summer."
    },
    {
        "id": 323,
        "word": "Sink in",
        "type": "phr. v.",
        "pronunciation": "/sɪŋk ɪn/",
        "meaning": "Được thấu hiểu, được nhận thức đầy đủ.",
        "example": "It took a while for the shocking news to sink in."
    },
    {
        "id": 324,
        "word": "Slip up",
        "type": "phr. v.",
        "pronunciation": "/slɪp ʌp/",
        "meaning": "Mắc lỗi, phạm sai lầm nhỏ.",
        "example": "The accountant slipped up and made a calculation error."
    },
    {
        "id": 325,
        "word": "Sort out",
        "type": "phr. v.",
        "pronunciation": "/sɔːt aʊt/",
        "meaning": "Phân loại, giải quyết (vấn đề, rắc rối).",
        "example": "Don't worry, we will sort out this problem together."
    },
    {
        "id": 326,
        "word": "Spark off",
        "type": "phr. v.",
        "pronunciation": "/spɑːk ɒf/",
        "meaning": "Châm ngòi, gây ra (cuộc bạo loạn, tranh cãi).",
        "example": "The police's action sparked off a wave of protests."
    },
    {
        "id": 327,
        "word": "Spell out",
        "type": "phr. v.",
        "pronunciation": "/spel aʊt/",
        "meaning": "Giải thích rất rõ ràng, cặn kẽ.",
        "example": "Do I really have to spell it out for you?"
    },
    {
        "id": 328,
        "word": "Stand back",
        "type": "phr. v.",
        "pronunciation": "/stænd bæk/",
        "meaning": "Lùi lại phía sau, giữ khoảng cách.",
        "example": "Stand back from the edge of the platform!"
    },
    {
        "id": 329,
        "word": "Stand up to",
        "type": "phr. v.",
        "pronunciation": "/stænd ʌp tuː/",
        "meaning": "Dũng cảm chống lại, đương đầu với.",
        "example": "She finally stood up to the bullies at school."
    },
    {
        "id": 330,
        "word": "Step down",
        "type": "phr. v.",
        "pronunciation": "/step daʊn/",
        "meaning": "Từ chức, nhường lại vị trí.",
        "example": "The CEO will step down next month due to health issues."
    },
    {
        "id": 331,
        "word": "Step up",
        "type": "phr. v.",
        "pronunciation": "/step ʌp/",
        "meaning": "Tăng cường, đẩy mạnh.",
        "example": "We need to step up our efforts to protect the environment."
    },
    {
        "id": 332,
        "word": "Stick to",
        "type": "phr. v.",
        "pronunciation": "/stɪk tuː/",
        "meaning": "Tuân theo, bám sát (kế hoạch, luật lệ).",
        "example": "You must stick to the rules during the competition."
    },
    {
        "id": 333,
        "word": "Stir up",
        "type": "phr. v.",
        "pronunciation": "/stɜːr ʌp/",
        "meaning": "Gây rắc rối, khơi mào (kỷ niệm, sự thù hằn).",
        "example": "He loves stirring up trouble between his friends."
    },
    {
        "id": 334,
        "word": "Strike up",
        "type": "phr. v.",
        "pronunciation": "/straɪk ʌp/",
        "meaning": "Bắt đầu trò chuyện, kết bạn.",
        "example": "It's easy for her to strike up a conversation with strangers."
    },
    {
        "id": 335,
        "word": "Take apart",
        "type": "phr. v.",
        "pronunciation": "/teɪk əˈpɑːt/",
        "meaning": "Tháo rời ra (máy móc, thiết bị).",
        "example": "My brother took the radio apart to see how it works."
    },
    {
        "id": 336,
        "word": "Take to",
        "type": "phr. v.",
        "pronunciation": "/teɪk tuː/",
        "meaning": "Bắt đầu thích, hình thành thói quen.",
        "example": "He has taken to waking up early to run every morning."
    },
    {
        "id": 337,
        "word": "Take up with",
        "type": "phr. v.",
        "pronunciation": "/teɪk ʌp wɪð/",
        "meaning": "Dành thời gian, kết bạn với (thường là người xấu).",
        "example": "She has taken up with a group of bad teenagers."
    },
    {
        "id": 338,
        "word": "Talk into",
        "type": "phr. v.",
        "pronunciation": "/tɔːk ˈɪn.tuː/",
        "meaning": "Thuyết phục ai làm gì.",
        "example": "My friends talked me into going to the concert."
    },
    {
        "id": 339,
        "word": "Talk out of",
        "type": "phr. v.",
        "pronunciation": "/tɔːk aʊt əv/",
        "meaning": "Thuyết phục ai đừng làm gì.",
        "example": "I managed to talk her out of buying that expensive bag."
    },
    {
        "id": 340,
        "word": "Tear down",
        "type": "phr. v.",
        "pronunciation": "/teə daʊn/",
        "meaning": "Phá hủy, dỡ bỏ (công trình, tòa nhà).",
        "example": "They are planning to tear down the old bridge."
    },
    {
        "id": 341,
        "word": "Tell apart",
        "type": "phr. v.",
        "pronunciation": "/tel əˈpɑːt/",
        "meaning": "Phân biệt (giữa hai người/vật giống nhau).",
        "example": "The twins are so similar that I can't tell them apart."
    },
    {
        "id": 342,
        "word": "Think up",
        "type": "phr. v.",
        "pronunciation": "/θɪŋk ʌp/",
        "meaning": "Bịa ra, nghĩ ra một cái cớ/ý tưởng.",
        "example": "I need to think up a good excuse for being late."
    },
    {
        "id": 343,
        "word": "Throw up",
        "type": "phr. v.",
        "pronunciation": "/θrəʊ ʌp/",
        "meaning": "Nôn mửa, từ bỏ.",
        "example": "He ate too much candy and threw up."
    },
    {
        "id": 344,
        "word": "Tie down",
        "type": "phr. v.",
        "pronunciation": "/taɪ daʊn/",
        "meaning": "Ràng buộc, trói buộc (sự tự do).",
        "example": "He doesn't want to get married because he doesn't want to be tied down."
    },
    {
        "id": 345,
        "word": "Touch on",
        "type": "phr. v.",
        "pronunciation": "/tʌtʃ ɒn/",
        "meaning": "Đề cập ngắn gọn đến một vấn đề.",
        "example": "In his speech, he only touched on the economic issues."
    },
    {
        "id": 346,
        "word": "Track down",
        "type": "phr. v.",
        "pronunciation": "/træk daʊn/",
        "meaning": "Truy lùng, tìm ra bằng sự theo dõi.",
        "example": "The police finally tracked down the stolen vehicle."
    },
    {
        "id": 347,
        "word": "Trade in",
        "type": "phr. v.",
        "pronunciation": "/treɪd ɪn/",
        "meaning": "Đổi đồ cũ lấy đồ mới (có các thêm tiền).",
        "example": "I traded in my old phone for the latest model."
    },
    {
        "id": 348,
        "word": "Turn against",
        "type": "phr. v.",
        "pronunciation": "/tɜːn əˈɡenst/",
        "meaning": "Quay lưng lại với, trở nên thù địch.",
        "example": "The public turned against the politician after the scandal."
    },
    {
        "id": 349,
        "word": "Turn to",
        "type": "phr. v.",
        "pronunciation": "/tɜːn tuː/",
        "meaning": "Nhờ vả, trông cậy vào ai lúc khó khăn.",
        "example": "Whenever I have a problem, I always turn to my mom."
    },
    {
        "id": 350,
        "word": "Use up",
        "type": "phr. v.",
        "pronunciation": "/juːz ʌp/",
        "meaning": "Dùng hết sạch (tài nguyên, tiền bạc).",
        "example": "Don't use up all the hot water; I need to take a shower."
    },
    {
        "id": 351,
        "word": "Walk out on",
        "type": "phr. v.",
        "pronunciation": "/wɔːk aʊt ɒn/",
        "meaning": "Bỏ rơi ai đó (người phụ thuộc vào mình).",
        "example": "He walked out on his wife and children."
    },
    {
        "id": 352,
        "word": "Ward off",
        "type": "phr. v.",
        "pronunciation": "/wɔːd ɒf/",
        "meaning": "Xua đuổi, ngăn ngừa (bệnh tật, nguy hiểm).",
        "example": "Eating garlic is believed to ward off colds."
    },
    {
        "id": 353,
        "word": "Watch out",
        "type": "phr. v.",
        "pronunciation": "/wɒtʃ aʊt/",
        "meaning": "Coi chừng, cẩn thận.",
        "example": "Watch out! The floor is very slippery."
    },
    {
        "id": 354,
        "word": "Weigh up",
        "type": "phr. v.",
        "pronunciation": "/weɪ ʌp/",
        "meaning": "Cân nhắc kỹ lưỡng (ưu, nhược điểm).",
        "example": "We must weigh up the pros and cons before deciding."
    },
    {
        "id": 355,
        "word": "Wind down",
        "type": "phr. v.",
        "pronunciation": "/waɪnd daʊn/",
        "meaning": "Thư giãn, xả hơi, từ từ giảm dần hoạt động.",
        "example": "After a long week at work, I like to wind down by reading."
    },
    {
        "id": 356,
        "word": "Wind up",
        "type": "phr. v.",
        "pronunciation": "/waɪnd ʌp/",
        "meaning": "Kết thúc, làm ai tức giận.",
        "example": "Our conversation wound up with an argument."
    },
    {
        "id": 357,
        "word": "Work off",
        "type": "phr. v.",
        "pronunciation": "/wɜːk ɒf/",
        "meaning": "Loại bỏ căng thẳng/cân nặng bằng cách vận động.",
        "example": "I went for a run to work off my frustration."
    },
    {
        "id": 358,
        "word": "Wrap up",
        "type": "phr. v.",
        "pronunciation": "/ræp ʌp/",
        "meaning": "Kết thúc (cuộc họp), mặc ấm.",
        "example": "Let's wrap up this meeting; it's getting late."
    },
    {
        "id": 359,
        "word": "Write off",
        "type": "phr. v.",
        "pronunciation": "/raɪt ɒf/",
        "meaning": "Loại bỏ, coi như vô dụng/bị phá hủy hoàn toàn.",
        "example": "His car was completely written off in the crash."
    },
    {
        "id": 360,
        "word": "Yield to",
        "type": "phr. v.",
        "pronunciation": "/jiːld tuː/",
        "meaning": "Đầu hàng, nhượng bộ, nhường đường.",
        "example": "You must yield to incoming traffic at the intersection."
    },
    {
        "id": 361,
        "word": "Zoom in",
        "type": "phr. v.",
        "pronunciation": "/zuːm ɪn/",
        "meaning": "Phóng to (hình ảnh, bản đồ).",
        "example": "Can you zoom in on the picture so I can see his face?"
    },
    {
        "id": 362,
        "word": "Zoom out",
        "type": "phr. v.",
        "pronunciation": "/zuːm aʊt/",
        "meaning": "Thu nhỏ (hình ảnh).",
        "example": "Zoom out to see the whole map."
    },
    {
        "id": 363,
        "word": "Opt out",
        "type": "phr. v.",
        "pronunciation": "/ɒpt aʊt/",
        "meaning": "Rút lui, không tham gia vào nữa.",
        "example": "Employees can choose to opt out of the pension scheme."
    },
    {
        "id": 364,
        "word": "Phase out",
        "type": "phr. v.",
        "pronunciation": "/feɪz aʊt/",
        "meaning": "Loại bỏ dần dần, ngưng sử dụng dần.",
        "example": "The airline is planning to phase out these old aircraft."
    },
    {
        "id": 365,
        "word": "Pencil in",
        "type": "phr. v.",
        "pronunciation": "/ˈpen.səl ɪn/",
        "meaning": "Lên lịch tạm thời (có thể thay đổi).",
        "example": "Let's pencil in a meeting for next Tuesday."
    },
    {
        "id": 366,
        "word": "Pick on",
        "type": "phr. v.",
        "pronunciation": "/pɪk ɒn/",
        "meaning": "Bắt nạt, trêu chọc ai liên tục.",
        "example": "Older kids used to pick on him at school."
    },
    {
        "id": 367,
        "word": "Pin down",
        "type": "phr. v.",
        "pronunciation": "/pɪn daʊn/",
        "meaning": "Bắt ai đưa ra quyết định/lời hứa rõ ràng.",
        "example": "It's hard to pin him down to a specific date for the party."
    },
    {
        "id": 368,
        "word": "Piece together",
        "type": "phr. v.",
        "pronunciation": "/piːs təˈɡeð.ə/",
        "meaning": "Chắp vá, xâu chuỗi thông tin để hiểu rõ.",
        "example": "Detectives are still piecing together the details of the crime."
    },
    {
        "id": 369,
        "word": "Pile up",
        "type": "phr. v.",
        "pronunciation": "/paɪl ʌp/",
        "meaning": "Chất đống, tích tụ.",
        "example": "Bills are piling up, and I don't have the money to pay them."
    },
    {
        "id": 370,
        "word": "Plump for",
        "type": "phr. v.",
        "pronunciation": "/plʌmp fɔː/",
        "meaning": "Chọn cái gì (sau khi đã suy nghĩ cẩn thận).",
        "example": "I think I'll plump for the chocolate ice cream."
    },
    {
        "id": 371,
        "word": "Press ahead/on",
        "type": "phr. v.",
        "pronunciation": "/pres əˈhed/",
        "meaning": "Quyết tâm tiếp tục (dù có khó khăn).",
        "example": "Despite the rain, they pressed ahead with the marathon."
    },
    {
        "id": 372,
        "word": "Pull together",
        "type": "phr. v.",
        "pronunciation": "/pʊl təˈɡeð.ə/",
        "meaning": "Hợp tác, làm việc cùng nhau.",
        "example": "If we all pull together, we can finish this project on time."
    },
    {
        "id": 373,
        "word": "Put back",
        "type": "phr. v.",
        "pronunciation": "/pʊt bæk/",
        "meaning": "Đặt lại chỗ cũ, lùi lịch.",
        "example": "Please put the book back when you're finished."
    },
    {
        "id": 374,
        "word": "Put together",
        "type": "phr. v.",
        "pronunciation": "/pʊt təˈɡeð.ə/",
        "meaning": "Lắp ráp, gom lại với nhau.",
        "example": "It took me hours to put the furniture together."
    },
    {
        "id": 375,
        "word": "Put towards",
        "type": "phr. v.",
        "pronunciation": "/pʊt təˈwɔːdz/",
        "meaning": "Đóng góp tiền vào một khoản chi.",
        "example": "I'm putting 10% of my salary towards a new car."
    },
    {
        "id": 376,
        "word": "Rake in",
        "type": "phr. v.",
        "pronunciation": "/reɪk ɪn/",
        "meaning": "Kiếm được rất nhiều tiền một cách dễ dàng.",
        "example": "That new blockbuster movie is raking in millions of dollars."
    },
    {
        "id": 377,
        "word": "Reflect on",
        "type": "phr. v.",
        "pronunciation": "/rɪˈflekt ɒn/",
        "meaning": "Suy ngẫm về (quá khứ/hành động).",
        "example": "He took a moment to reflect on his achievements."
    },
    {
        "id": 378,
        "word": "Rest on",
        "type": "phr. v.",
        "pronunciation": "/rest ɒn/",
        "meaning": "Dựa vào, phụ thuộc vào.",
        "example": "The entire plan rests on her agreeing to help us."
    },
    {
        "id": 379,
        "word": "Revolve around",
        "type": "phr. v.",
        "pronunciation": "/rɪˈvɒlv əˈraʊnd/",
        "meaning": "Xoay quanh (lấy làm trung tâm).",
        "example": "Her whole life revolves around her children."
    },
    {
        "id": 380,
        "word": "Ring back",
        "type": "phr. v.",
        "pronunciation": "/rɪŋ bæk/",
        "meaning": "Gọi điện thoại lại.",
        "example": "He's not here right now; can you ring back later?"
    },
    {
        "id": 381,
        "word": "Root for",
        "type": "phr. v.",
        "pronunciation": "/ruːt fɔː/",
        "meaning": "Cổ vũ cho, ủng hộ ai chiến thắng.",
        "example": "We are all rooting for you to win the championship!"
    },
    {
        "id": 382,
        "word": "Rough out",
        "type": "phr. v.",
        "pronunciation": "/rʌf aʊt/",
        "meaning": "Phác thảo sơ bộ (chưa chi tiết).",
        "example": "The architect roughed out the design on a piece of paper."
    },
    {
        "id": 383,
        "word": "Rub out",
        "type": "phr. v.",
        "pronunciation": "/rʌb aʊt/",
        "meaning": "Tẩy, xóa (bằng gôm).",
        "example": "You made a mistake, just rub it out and try again."
    },
    {
        "id": 384,
        "word": "Rule in",
        "type": "phr. v.",
        "pronunciation": "/ruːl ɪn/",
        "meaning": "Tính đến, bao gồm vào khả năng có thể xảy ra.",
        "example": "The police haven't ruled in any suspects yet."
    },
    {
        "id": 385,
        "word": "Sail through",
        "type": "phr. v.",
        "pronunciation": "/seɪl θruː/",
        "meaning": "Vượt qua bài thi cực kỳ dễ dàng.",
        "example": "She studied hard and sailed through all her final exams."
    },
    {
        "id": 386,
        "word": "Settle in",
        "type": "phr. v.",
        "pronunciation": "/ˈset.əl ɪn/",
        "meaning": "Làm quen, thích nghi với nơi ở/công việc mới.",
        "example": "How are you settling in at your new apartment?"
    },
    {
        "id": 387,
        "word": "Settle on",
        "type": "phr. v.",
        "pronunciation": "/ˈset.əl ɒn/",
        "meaning": "Đưa ra quyết định cuối cùng.",
        "example": "We finally settled on a name for our baby."
    },
    {
        "id": 388,
        "word": "Shave off",
        "type": "phr. v.",
        "pronunciation": "/ʃeɪv ɒf/",
        "meaning": "Cạo râu, giảm bớt (chi phí, thời gian).",
        "example": "He shaved off his beard for the summer."
    },
    {
        "id": 389,
        "word": "Shoot down",
        "type": "phr. v.",
        "pronunciation": "/ʃuːt daʊn/",
        "meaning": "Bác bỏ lập tức (ý tưởng, đề xuất).",
        "example": "My boss shot down my idea before I could even explain it."
    },
    {
        "id": 390,
        "word": "Slip away",
        "type": "phr. v.",
        "pronunciation": "/slɪp əˈweɪ/",
        "meaning": "Lặng lẽ rời đi; trôi qua mất (cơ hội).",
        "example": "We managed to slip away from the boring party early."
    },
    {
        "id": 391,
        "word": "Shrink from",
        "type": "phr. v.",
        "pronunciation": "/ʃrɪŋk frəm/",
        "meaning": "Chùn bước, lảng tránh (trách nhiệm/việc khó).",
        "example": "A true leader will never shrink from taking responsibility."
    },
    {
        "id": 392,
        "word": "Single out",
        "type": "phr. v.",
        "pronunciation": "/ˈsɪŋ.ɡəl aʊt/",
        "meaning": "Chọn ra một người/vật để chỉ trích/khen ngợi.",
        "example": "It's unfair to single him out for punishment when everyone broke the rule."
    },
    {
        "id": 393,
        "word": "Smash up",
        "type": "phr. v.",
        "pronunciation": "/smæʃ ʌp/",
        "meaning": "Đập phá hư hỏng nặng.",
        "example": "The hooligans smashed up the bus stop."
    },
    {
        "id": 394,
        "word": "Smooth over",
        "type": "phr. v.",
        "pronunciation": "/smuːð ˈəʊ.və/",
        "meaning": "Làm dịu đi tình hình, giải quyết xích mích.",
        "example": "She stepped in to smooth over the argument between her brothers."
    },
    {
        "id": 395,
        "word": "Snow under",
        "type": "phr. v.",
        "pronunciation": "/snəʊ ˈʌn.də/",
        "meaning": "Ngập đầu trong công việc (thường dùng bị động).",
        "example": "I am currently snowed under with assignments."
    },
    {
        "id": 396,
        "word": "Speak out",
        "type": "phr. v.",
        "pronunciation": "/spiːk aʊt/",
        "meaning": "Lên tiếng bảo vệ/phản đối công khai.",
        "example": "She decided to speak out against the unfair policy."
    },
    {
        "id": 397,
        "word": "Spring up",
        "type": "phr. v.",
        "pronunciation": "/sprɪŋ ʌp/",
        "meaning": "Mọc lên như nấm, xuất hiện đột ngột.",
        "example": "Many new cafes have sprung up in this neighborhood recently."
    },
    {
        "id": 398,
        "word": "Stand in for",
        "type": "phr. v.",
        "pronunciation": "/stænd ɪn fɔː/",
        "meaning": "Làm thay, thế chỗ cho ai đó vắng mặt.",
        "example": "I'm standing in for the manager while she is on vacation."
    },
    {
        "id": 399,
        "word": "Stick out",
        "type": "phr. v.",
        "pronunciation": "/stɪk aʊt/",
        "meaning": "Nhô ra, nổi bật, dễ nhận thấy.",
        "example": "His bright pink shirt made him stick out in the crowd."
    },
    {
        "id": 400,
        "word": "Sweep away",
        "type": "phr. v.",
        "pronunciation": "/swiːp əˈweɪ/",
        "meaning": "Cuốn trôi, phá hủy hoàn toàn.",
        "example": "The tsunami swept away entire coastal villages."
    }
];

const vocabData = vocabList.map(item => ({
    num: item.id,
    en: item.word,
    pos: item.type,
    ipa: item.pronunciation,
    vi: item.meaning,
    ex: item.example
}));