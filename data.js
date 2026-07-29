const TAROT_DATABASE = [
    { 
        name: "The Fool", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/RWS_Tarot_00_Fool.jpg/500px-RWS_Tarot_00_Fool.jpg", 
        upright: "Tarot Fool xuôi báo hiệu của hành trình mới tươi sáng hơn, thành công hơn. Là bài này mong muốn bạn sẽ mạnh mẽ bước cho dù gặp khó khăn thì mọi chuyện cũng sẽ ổn. Bạn cần tin tưởng vào bản thân của mình. Vì thế mà bạn cần sống hạnh phúc hơn, trải nghiệm nhiều điều mới hơn.", 
        reversed: "Tarot Fool ngược lại cho thấy bạn chưa thật sự sẵn sàng cho hành trình mới. Thế nhưng trong trường hợp này rất có thể sự việc đã bắt đầu và bạn cần tiếp tục. Không những vậy, lá bài ngược còn cảnh báo bạn có thể bị lợi dụng, phải gánh chịu hậu quả do quyết định trước đó. Nếu bạn đang đứng trước cơ hội lớn, hãy thật sự cẩn thận nhé." 
    },
    { 
        name: "The Magician", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/RWS_Tarot_01_Magician.jpg/500px-RWS_Tarot_01_Magician.jpg", 
        upright: "The Magician Tarot xuôi ngụ ý bạn đang trong giai đoạn sở hữu nguồn năng lượng mạnh mẽ và khả năng sáng tạo dồi dào. Đây là một điềm báo tích cực, bạn cần hành động ngay vì cả vũ trụ đang ủng hộ bạn!", 
        reversed: "The Magician Tarot ngược cho thấy dấu hiệu của sự lừa gạt hoặc hành động thao túng tâm lý. Có vẻ như mọi vấn đề của bạn đang không được thuận lợi như mong đợi." 
    },
    { 
        name: "The High Priestess", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/500px-RWS_Tarot_02_High_Priestess.jpg", 
        upright: "The High Priestess xuôi khuyên bạn nên tin vào trực giác của mình. Đây là thời điểm để lắng nghe bên trong, quan sát nhiều hơn là lên tiếng. Nó tượng trưng cho sự thông tuệ, bình tĩnh và khả năng thấu hiểu những thứ không hiển hiện rõ ràng.", 
        reversed: "The High Priestess ngược cảnh báo về sự mất kết nối với bản thân. Bạn có thể đang bị xao nhãng bởi ý kiến của người khác hoặc bỏ qua những linh cảm quan trọng. Nó cũng ám chỉ những bí mật bị phơi bày theo cách không mong muốn hoặc sự nhầm lẫn trong suy nghĩ." 
    },
    { 
        name: "The Empress", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/RWS_Tarot_03_Empress.jpg/500px-RWS_Tarot_03_Empress.jpg", 
        upright: "The Empress xuôi có sự gắn kết đặc biệt tới phần nữ tính sâu thẳm bên trong con người. Mở rộng ra, đó không chỉ là vẻ đẹp mà còn là sự dịu dàng, ân cần, chăm chỉ, sáng tạo, khoái cảm và khả năng sinh sản. Trải bài xuôi cũng có thể là dấu hiệu của việc bạn trong giai đoạn thu thai, sắp làm mẹ hoặc cho ra đời một dự án, một “đứa con tinh thần” nào đó.", 
        reversed: "The Empress ngược nhuốm màu khó khăn, đại diện cho sự bối rối, sai lệch về quan điểm, góc nhìn trong một mối quan hệ, công việc. Đây là thời điểm bạn có nhiều ý tưởng, dự định, tâm sự nhưng phải kìm nén vì không tìm được người đủ tin tưởng. Vì vậy, hãy dành nhiều thời gian hơn để hiểu và nhìn nhận lại bản thân cũng như những người bạn, người đồng hành bên cạnh." 
    },
    { 
        name: "The Emperor", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/RWS_Tarot_04_Emperor.jpg/500px-RWS_Tarot_04_Emperor.jpg", 
        upright: "The Emperor xuôi cho thấy bạn sắp đạt được mục tiêu trong công việc, tình yêu cũng có tiến triển tốt, tài chính ổn định, sức khỏe ít có vấn đề.", 
        reversed: "The Emperor ngược cho thấy sự nghiệp của bạn đang có những bấp bênh do thiếu nhất quán, tài chính đang có những rắc rối, tình yêu dễ có những bất hòa, dễ bị căng thẳng." 
    },
    { 
        name: "The Hierophant", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/RWS_Tarot_05_Hierophant.jpg/500px-RWS_Tarot_05_Hierophant.jpg", 
        upright: "The Hierophant xuôi cho thấy bạn chấp nhận các niềm tin và quan điểm truyền thống. Bạn cảm thấy thoải mái khi làm những gì người khác làm, thay vì đổi mới hoặc áp dụng một cách tiếp cận khác thường. Nó biểu thị một giai đoạn không suy nghĩ, khi đó, bạn hành động mà không xem xét các quy tắc và hoàn cảnh từ quan điểm của bạn.", 
        reversed: "The Hierophant ngược cho thấy đã đến lúc bạn cần phá vỡ các quy tắc và có sự thay đổi, cũng có thể chỉ ra rằng bạn dễ cảm thấy hối hận hoặc xấu hổ về hành vi, quyết định mà bạn đã đưa ra trong suốt cuộc đời mình. Bạn nên loại bỏ bản thân khỏi sự xấu hổ của xã hội và hành động theo tiêu chuẩn của bạn." 
    },
    { 
        name: "The Lovers", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/RWS_Tarot_06_Lovers.jpg/500px-RWS_Tarot_06_Lovers.jpg", 
        upright: "The Lovers xuôi đại diện cho sự hòa hợp, những lựa chọn quan trọng và sức mạnh của các mối liên kết. Bạn đang đứng trước những quyết định đòi hỏi sự thống nhất giữa lý trí và cảm xúc, là bài học về việc chọn lựa những gì thực sự phù hợp với giá trị đạo đức và niềm tin của bạn.", 
        reversed: "The Lovers ngược thường mang ý nghĩa khá tiêu cực, chỉ sự bất hòa, mông lung trong mối quan hệ và cuộc sống, khó khăn trong việc kết nối với người khác hoặc chính bản thân mình, thường do để cảm xúc nhất thời dẫn dắt sai hướng. Bạn phải nhìn nhận lại những giá trị cốt lõi và chịu trách nhiệm cho các quyết định của mình để tìm lại sự cân bằng." 
    },
    { 
        name: "The Chariot", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/RWS_Tarot_07_Chariot.jpg/500px-RWS_Tarot_07_Chariot.jpg", 
        upright: "The Chariot xuôi thường tượng trưng cho sự kiểm soát mạnh mẽ, tham vọng lớn. Bạn muốn hoàn thành mục tiêu mà mình đặt ra, đó không chỉ là niềm đam mê mà còn là khẳng định năng lực. Đây cũng là một lời nhắc nhở bạn cần giữ vững tinh thần học tập. Bạn cần vận dụng cả trí tuệ và bản lĩnh để đạt mục tiêu.", 
        reversed: "Lá bài The Chariot ngược báo hiệu sự thay đổi từ nơi này đến nơi khác hoặc đó là thay đổi từ sâu bên trong tiềm thức của bạn. Tuy nhiên bạn đừng nóng vội mà để cảm giác đánh lừa mình, hãy tập trung vào mục tiêu cụ thể và không đi lan man." 
    },
    { 
        name: "Strength", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/RWS_Tarot_08_Strength.jpg/330px-RWS_Tarot_08_Strength.jpg", 
        upright: "Strength xuôi cho thấy bạn nên dành thời gian để suy ngẫm về mọi khía cạnh trong cuộc sống, từ công việc cho đến mối quan hệ. Đừng để bạn thân chìm vào nỗi sợ, luôn suy nghĩ tích cực sẽ giúp đầu óc của bạn tỉnh táo trong mọi tình huống.", 
        reversed: "Strength ngược nhắc nhở bạn cần trân trọng hiện tại, cảm nhận được sự may mắn đối với những gì mình đang có trong cuộc sống. Đây cũng chính là chìa khóa để bạn có được nhiều điều thú vị và tuyệt vời hơn cho bản thân."
    },
    { 
        name: "The Hermit", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/RWS_Tarot_09_Hermit.jpg/500px-RWS_Tarot_09_Hermit.jpg", 
        upright: "The Hermit xuôi tượng trưng cho giai đoạn tìm kiếm và giác ngộ tâm linh ở con người. Ở thời điểm này, bạn cần dành nhiều thời gian cho bản thân hơn, tránh xa bộn bề lo toan hàng ngày để tìm kiếm những giá trị tinh thần đích thực. Đây là cách khôn ngoan để phục hồi sau khó khăn và tìm kiếm những hướng đi mới.", 
        reversed: "The Hermit ngược nói rằng bản thân đang sống quá ẩn mình và khép kín. ‘”Cánh cửa” tâm hồn đã khép lại quá lâu và đây là thời điểm hoàn hảo để bạn quay trở lại với thế giới và những người yêu thương. Bạn không cần sợ hãi hay lo lắng về những phát hiện mới của bản thân trong thời gian “ẩn cư”. Hãy thật tự tin và có màn trở lại đầy ngoạn mục."
    },
    { 
        name: "Wheel of Fortune", 
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg", 
        upright: "The Wheel of Fortune xuôi nhẹ nhàng gửi đến bạn thông điệp trân trọng hiện tại, sống tích cực lạc quan và luôn ở trong tâm thế chuẩn bị trước những khó khăn, thử thách.", 
        reversed: "The Wheel of Fortune ngược tượng trưng cho những thay đổi tích cực nhưng thường bị chống lại bởi những người muốn phá vỡ quy luật cuộc sống."
    },
    { 
        name: "Justice", 
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg", 
        upright: "Justice xuôi thường tượng trưng cho khao khát biết sự thật, luật nhân quả. Cũng có thể các vấn đề về pháp lý, giấy tờ bạn vướng vào sẽ có chuyển biến tích cực. Ngoài ra còn cho biết bạn nên học cách chịu trách nhiệm với những hành động của mình, không đổ lỗi cho bất kỳ ai, chấp nhận lời nhận xét của những người xung quanh.", 
        reversed: "Justice Tarot ngược cho thấy bạn đang không trung thực với mọi người và chính bản thân mình. Bạn đã để những cơ hội thấu hiểu bản thân và đặc biệt bạn luôn trốn tránh trách nhiệm cho các hành động không đúng. Ngoài ra còn cho biết bạn thấy mọi thứ đang đi không đúng hướng nhưng lại không thể làm gì, lúc này cần phải học cách tích cực chấp nhận thay vì cứ mãi suy nghĩ."
    },
    { 
        name: "The Hanged Man", 
        url: "https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg", 
        upright: "The Hanged Man xuôi cho thấy cần xác định xem nó ám chỉ bạn hay đối tượng khác có liên quan đến bạn. Đã đến lúc bạn bỏ đi thái độ sống thiếu tích cực để hướng đến điều tốt đẹp hơn. Hãy cho đi và cần suy ngẫm nhiều hơn để thấy được điều gì mới thực sự có giá trị với bạn.", 
        reversed: "The Hanged Man ngược báo hiệu đây là thời điểm mà bạn nên buông bỏ một quan điểm hay mối quan hệ không cần thiết. Trước sự thay đổi bạn đừng cố đấu tranh với nó mà hay “thuận theo tự nhiên”."
    },
    { 
        name: "Death", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/RWS_Tarot_13_Death.jpg/960px-RWS_Tarot_13_Death.jpg", 
        upright: "Death xuôi báo hiệu bạn sắp có một sự chuyển biến quan trọng trong cuộc đời. Giai đoạn mệt mỏi, đau khổ sắp kết thúc, bắt đầu cho một khởi đầu mới. Dù không biết trước được tương lai sẽ ra sao, chỉ cần buông bỏ quá khứ, may mắn sẽ mỉm cười. Cũng nói đến khi kết thúc điều gì đó, bạn phải chịu một số mất mát, đau thương để lại. Nhưng chỉ cần bạn chấp nhận cố gắng để vượt qua thì mọi thứ sẽ tốt đẹp lên.", 
        reversed: "Death ngược thể hiện bạn đang không chấp nhận sự thay đổi, cố gắng để chống lại nó. Bạn cảm thấy không hài lòng với những thay đổi ở hiện tại, bạn day dứt, nuối tiếc quá khứ, luôn chìm đắm trong đau khổ. Tuy nhiên, nếu cứ mãi như vậy, bạn sẽ bị đẩy vào thế giới tối tăm. Bạn hãy tin tưởng vào sự biến đổi tất yếu của tạo hóa, tin vào tương lai phía trước, buông bỏ quá khứ đau thương và tiến lên."
    },
    { 
        name: "Temperance", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/RWS_Tarot_14_Temperance.jpg/960px-RWS_Tarot_14_Temperance.jpg", 
        upright: "Temperance xuôi quá khứ cho thấy bạn có nền tảng vững chắc, có thể an tâm tựa vào để thực hiện những mục tiêu trong cuộc đời. Ở hiện tại, bạn nên có sự cân bằng để vượt qua những bất hòa không đáng có. Cuối cùng, lời nhắn nhủ từ tương lai khuyên chúng ta cần giữ vững thế trung lập, ưu tiên thỏa hiệp và không tham gia vào các cuộc xung đột để có sự thanh thản trong tâm hồn.", 
        reversed: "Temperance Tarot ngược là cảnh báo đến lúc bạn cần sống chậm lại để nhìn nhận lại đâu là cuộc sống mình thực sự mong muốn. Không ai có thể giúp bạn ngoài chính bản thân mình nên hãy lắng nghe tâm hồn mình, từ những dòng suy nghĩ đến những lời thủ thỉ của tâm hồn."
    },
    { 
        name: "The Devil", 
        url: "https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg", 
        upright: "The Devil xuôi cho thấy bạn nhiều tham vọng và đang chìm đắm trong chúng. Có thể bạn nhận ra sự nguy hại nhưng không thoát ra được và trở nên bất lực, chán nản, mất kiểm soát. Tuy nhiên mọi thứ đều chỉ là ảo ảnh, vận mệnh do bạn quyết định, hãy cố vượt qua, đừng chịu sự tiêu cực, thao túng hay chỉ trích từ bất cứ ai. Nó cũng thể hiện bạn đang quá quan tâm đến địa vị, quyền lực, tiền bạc, có thể gây cho bạn nhiều rắc rối trong cuộc sống.", 
        reversed: "The Devil ngược cho thấy bạn đang dần nhận thức được những điều tồi tệ, bẫy mình mắc phải. Bạn bắt đầu có động lực để thay đổi hoàn cảnh, chống lại những thứ tiêu cực. Nó cũng đề cập đến việc bạn may mắn thoát khỏi một tình huống hay một người xấu, gây nguy hiểm đến mình. Bạn cảm thấy biết ơn vì đã tránh được nó và rút ra những kinh nghiệm quý giá."
    },
    { 
        name: "The Tower", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/RWS_Tarot_16_Tower.jpg/960px-RWS_Tarot_16_Tower.jpg", 
        upright: "The Tower xuôi mang một chút tích cực, tượng trưng cho sự lột xác của bạn trong khía cạnh nào đó như ngoại hình hay tính cách. Bạn sẽ trở nên quyết đoán, mạnh mẽ hơn, có những điều khởi sắc trong cuộc sống. Tuy nhiên, đôi khi The Tower xuôi cũng là sự cảnh báo sự thể hiện không biết tiết chế của bạn trong cuộc sống sẽ gây ra hậu quả khôn lường.", 
        reversed: "The Tower ngược đưa ra những dự đoán liên quan đến khủng hoảng của bạn trong cuộc sống. Bạn có thể phải loay hoay, xoay sở mọi việc trong tình trạng khó khăn, thậm chí là bất lực, không thể giải quyết vấn đề. Bạn cần phải hết sức bình tĩnh, chấp nhận và mạnh mẽ để vượt qua những khó khăn, sự sụp đổ này."
    },
    { 
        name: "The Star", 
        url: "https://tellmytarot.com/images/cartes/17-the-star.jpg", 
        upright: "The Star xuôi cho thấy bạn đang được vũ trụ ban phước lành, bao bọc và che chở cho bạn. Bạn đang bước sang một thời kỳ mới đầy hy vọng và dự định.", 
        reversed: "The Star Tarot ngược mang ý nghĩa là vô vọng, thiếu niềm tin, thiếu sự sáng tạo. Có thể với những tình huống, sự việc diễn ra trong quá khứ khiến bạn rơi vào tuyệt vọng, thiếu sức sống. Tuy nhiên lá bài này lại cho biết mọi thứ không đến mức tồi tệ như vậy, chỉ cần bạn chịu trách nhiệm với chính nó là được."
    },
    { 
        name: "The Moon", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/RWS_Tarot_18_Moon.jpg/960px-RWS_Tarot_18_Moon.jpg", 
        upright: "The Moon Tarot xuôi nói rằng bạn đang bước trên con đường ẩn chứa nhiều hiểm họa. Tuy nhiên, một nửa sự thật thì không phải là thật, đôi khi đó chỉ là trò lừa đảo mà thôi.", 
        reversed: "The Moon ngược chỉ ra rằng những bí mật sắp được sáng tỏ. Nó cũng là dấu hiệu của sự giải phóng bản thân khỏi nỗi sợ hãi hoặc những năng lượng tiêu cực."
    },
    { 
        name: "The Sun", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/RWS_Tarot_19_Sun.jpg/250px-RWS_Tarot_19_Sun.jpg", 
        upright: "The Sun cho thấy những dấu hiệu của sự tích cực, lạc quan, vui vẻ, tự do. Mọi thứ đối với bạn đều tốt đẹp, bạn sẽ cảm thấy tự tin, giải phóng được bản thân, mang đến nguồn năng lượng tích cực lan tỏa ra cho mọi người xung quanh. Ở một số trường hợp, lá bài này cũng đại diện cho sự thật. Nếu bạn là nạn nhân của sự lừa dối, The Sun xuôi sẽ chỉ ra cho bạn biết toàn bộ vấn đề.", 
        reversed: "The Sun ngược mang một chút tiêu cực, song cũng không phải là điều gì quá xấu. Nó thể hiện bạn đang chán nản, buồn bã về điều gì đó. Bạn thiếu nhiệt tình, không nhiều năng lượng, không xác định được mục tiêu, con đường đi phía trước. Ngoài ra, nó cũng có thể nói đến việc bạn quá tự tin, nhiệt tình đến mức khiến bản thân trở nên xấu đi trong mắt người khác."
    },
    { 
        name: "Judgement", 
        url: "https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg", 
        upright: "Judgement xuôi xuất hiện là dấu hiệu cho thấy bạn đã trải qua một sự thức tỉnh tâm linh với khả năng tự nhận thức ngày càng cao. Giờ đây, bạn minh mẫn và điềm tĩnh, biết vị trí mình đang đứng và xác định được mình cần làm gì để thành công.", 
        reversed: "Judgement ngược biểu thị rằng bạn đang để nỗi sợ hãi và sự thiếu tin cản trở những quyết định hướng đến mục tiêu tích cực. Bạn có thể bỏ lỡ những cơ hội tốt trong cuộc sống."
    },
    { 
        name: "The World", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/RWS_Tarot_21_World.jpg/960px-RWS_Tarot_21_World.jpg", 
        upright: "The World xuôi xuất hiện, bạn đang bừng sáng với cảm giác viên mãn và tôn vinh những thành tựu. Thành công này mở ra cánh cửa ra thế giới, và đây là thời điểm lý tưởng để bạn vươn ra biển lớn.", 
        reversed: "The World ngược cho thấy bạn đang ở rất gần đích đến nhưng lại bị khựng lại do sự thiếu kiên nhẫn hoặc lo sợ thay đổi. Năng lượng tích cực vẫn còn đó, chỉ là chưa được khai phá hết."
    },
    { 
        name: "Ace of Wands", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Wands01.jpg/960px-Wands01.jpg", 
        upright: "Ace of Wands xuôi mang ý nghĩa táo bạo nhất. Nó thể hiện cho sự sáng tạo nhưng không phải học từ sách vở mà là từ chính tiếng nói của bạn, từ ý chí, năng lượng, sự nhiệt huyết tràn đầy của bạn. Điều này giúp bạn dễ dàng phát triển ngay cả khi ở trong môi trường mới. Đôi khi nó còn mang đến cho bạn những cơ hội, thử thách đòi hỏi bạn phải có bản lĩnh để mạo hiểm thử sức.", 
        reversed: "Ace of Wands ngược báo hiệu cho những vấn đề khó khăn, tiêu cực trong cuộc sống của bạn. Đôi khi bạn sẽ bị mất phương hướng, không biết bản thân mình muốn điều gì, không thoát khỏi những chán nản, cảm giác tồi tệ. Thậm chí ngay cả khi có mục tiêu, bạn vẫn trì hoãn, không có động lực để làm. Hãy dành thời gian nghỉ ngơi, cân bằng lại cuộc sống, cũng không nên quá vội vàng quyết định điều gì ở thời điểm này."
    },
    { 
        name: "Two of Wands", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Wands02.jpg/960px-Wands02.jpg", 
        upright: "Two of Wands xuôi thể hiện sự tươi sáng, báo hiệu tương lai của bạn đang vô cùng xán lạn và có xu hướng khởi sắc hơn nữa trong khoảng thời gian tiếp theo. Theo đó, hãy nắm bắt cơ hội, dựa vào niềm tin và nguồn năng lượng tích cực để tạo nên kỳ tích.", 
        reversed: "Two of Wands ngược cho thấy bạn hãy dành thời gian xác định rõ ràng mục tiêu ngắn hạn, dài hạn để tìm ra con đường thực sự phù hợp. Việc này không đơn giản nhưng chỉ cần bạn nghiêm túc, những chông gai sẽ ngả về sau nhường chỗ cho tương lai đầy xán lạn."
    },
    { 
        name: "Three of Wands", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Wands03.jpg/250px-Wands03.jpg", 
        upright: "Three of Wands xuôi cho thấy mọi thứ đang diễn ra như mong đợi, bạn có thể sẽ trải nghiệm được một số thành công quan trọng sau khi đã vượt qua được giai đoạn khó khăn.", 
        reversed: "Three of Wands ngược ngụ ý về những hạn chế, thiếu tiến bộ hoặc không hài lòng với sự lựa chọn. Lá bài cũng biểu thị tầm nhìn hạn hẹp hoặc không có kế hoạch cụ thể cho việc phát triển bản thân ở tương lai."
    },
    { 
        name: "Four of Wands", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Wands04.jpg/960px-Wands04.jpg", 
        upright: "Four of Wands xuôi mang ý nghĩa rất tích cực, nhưng nó cũng là lời cảnh báo bạn cần giữ đầu óc tỉnh táo để có những quyết định nhạy bén nhất. Với những công sức bạn bỏ ra, hãy thưởng cho bản thân một chút niềm vui bằng thời gian nghỉ ngơi, hay những cuộc vui tận hưởng thành quả.", 
        reversed: "Four of Wands ngược, nó báo hiệu những điều tốt đẹp sẽ xuất hiện bất ngờ trong cuộc sống của bạn. Tuy nhiên, bạn không được bỏ công việc qua một bên để hưởng thụ mà cần nỗ lực, san sẻ cùng người khác nhằm nhận về những thành công bền vững."
    },
    { 
        name: "Five of Wands", 
        url: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Wands05.jpg", 
        upright: "Fives of Wands cho thấy sự xung đột cá nhân, “cái tôi” giận giữ, trận chiến, sự thiếu hợp tác. Lá bài này khuyến khích bạn tôn trọng người khác và lắng nghe họ để giải quyết mâu thuẫn. Đồng thời, nó cũng khuyên bạn chấp nhận sự cạnh tranh như một cách để cải thiện bản thân.", 
        reversed: "Five of Wands ngược đại diện cho sự kết thúc tranh luận, xung đột, bất đồng. Nó cho thấy bạn biết cách thoát khỏi cuộc tranh cãi. Tuy nhiên, tùy thuộc vào cách bạn giải quyết vấn đề, kết quả có thể là tốt hoặc không tốt. Nó cũng đại diện cho việc kìm nén sự tức giận hoặc thất vọng của bạn. Nhưng đừng quên rằng, những cảm xúc dồn nén này có thể “ăn mòn” bạn từ bên trong."
    },
    { 
        name: "Six of Wands", 
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Wands06.jpg", 
        upright: "Six of Wands xuôi truyền tải những thông điệp về sự thành công, chiến thắng, được công nhận. Bạn sẽ được nhiều người khen ngợi, tán thưởng và giành giải thưởng cao quý vì đã đạt được thành tích tốt. Đôi khi cũng thể hiện bạn sắp được nhà lãnh đạo cao chú ý đến. Đây là cơ hội tốt để bạn show tài năng của mình, tạo tiền đề để phát triển hơn trong tương lai.", 
        reversed: "Six of Wands ngược cho thấy dường như bạn đang hoài nghi về khả năng của bản thân hoặc tham vọng quá lớn, khao khát về danh tiếng. Điều này dẫn đến việc bạn không thỏa mãn với hiện tại. Ngoài ra nó cũng thể hiện bạn quá thành công nên trở thành một người kiêu căng, ngạo mạn, tự cao tự đại. Bạn không chấp nhận mình sai, không chịu học hỏi, chính điều đó có thể khiến bạn rơi vào thất bại."
    },
    { 
        name: "Seven of Wands", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Wands07.jpg/960px-Wands07.jpg", 
        upright: "Seven of Wands xuôi đem đến tin vui báo hiệu bạn sẽ giành được lợi thế lớn trong mọi tình huống ở tương lai. Mọi thứ đã vào đúng quỹ đạo nên dù có hơi mất cân bằng, bạn cũng nhanh chóng chiếm thế thượng phong.", 
        reversed: "Seven of Wands ngược cho thấy bạn đang lo âu quá độ, nhượng bộ, rụt rè, thỏa hiệp, thiếu can đảm và kiệt quệ. Cách tháo gỡ tốt nhất là tìm được nguyên nhân và nhờ đến sự giúp đỡ của những người có kinh nghiệm."
    },
    { 
        name: "Eight of Wands", 
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Wands08.jpg", 
        upright: "Eight of Wands xuôi, nó thể hiện cho những hành động diễn ra vội vàng, tốc độ, gấp rút. Bất kỳ việc gì vào tay bạn đều sẽ được thực hiện nhanh chóng, hoàn thành đúng mục tiêu. Nó cũng đại diện cho những khó khăn, thử thách trong cuộc sống của bạn sắp kết thúc. Bạn sắp đón nhận một sự tăng trưởng, phát triển nào đó đột ngột. Bạn hãy kiên nhẫn chờ đợi vì cơ hội đang dần đến rồi đó.", 
        reversed: "Eight of Wands ngược nói đến sự chậm chạp, trì hoãn, thiếu tốc độ. Đồng thời nó cũng báo hiệu khởi đầu muộn, thời điểm không thích hợp hoặc bạn đã bỏ lỡ cơ hội tốt. Bất kể việc gì thực hiện lúc này đều không mang lại kết quả khả quan, khiến bạn cảm thấy chán nản, mất kiên nhẫn, thiếu kiểm soát. Hãy nhanh chóng lấy lại năng lượng tích cực, thoải mái tinh thần, mọi chuyện sẽ sớm ổn lại."
    },
    { 
        name: "Nine of Wands", 
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Tarot_Nine_of_Wands.jpg", 
        upright: "Nine of Wands xuôi đại diện cho những trận chiến đang diễn ra là trận chiến đầy mệt mỏi, khiến bạn cạn kiệt năng lượng. Nhưng nó cũng cho thấy bạn là một người can đảm, bền bỉ, có ý chí cao. Khi lá bài này xuất hiện, bạn có thể bị tổn thương, mọi thứ có thể không diễn ra theo cách bạn mong đợi, nhưng nếu bạn tiếp tục kiên trì và dũng cảm tiến lên thì bạn sẽ gặt hái được thành công.", 
        reversed: "Nine of Wands ngược cho thấy bạn đã chiến đấu trong một thời gian dài để giữ vững vị trí của mình nhưng chướng ngại vẫn cứ xuất hiện thường xuyên. Bạn đã đến rất gần mục tiêu của mình và việc từ bỏ bây giờ đồng nghĩa với việc lãng phí tất cả nỗ lực đã bỏ ra. Nếu mệt mỏi, đừng ngại nhờ sự giúp đỡ từ xung quanh."
    },
    { 
        name: "Ten of Wands", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Wands10.jpg/960px-Wands10.jpg", 
        upright: "Ten of Wands xuôi nói đến những ý tưởng, kế hoạch ban đầu của bạn là tốt, song về sau nó lại trở thành gánh nặng. Bạn tiếp nhận quá nhiều thứ và bị quá tải, trách nhiệm đè nặng dẫn đến căng thẳng, mệt mỏi. Nó cũng báo hiệu cho sự chậm trễ, trì hoãn, mất tập trung. Điều này khiến bạn lạc lối và gặp khó khăn để giải quyết các vấn đề. Niềm vui, sự tự phát đã biến mất khỏi cuộc sống của bạn.", 
        reversed: "Ten of Wands ngược đại diện cho những trách nhiệm, căng thẳng quá lớn và bạn không thể vượt qua. Cũng vì thế mà bạn tìm cách để giảm thiểu những áp lực, tìm kiếm phương pháp tốt hơn cho bản thân. Ngoài ra, lá bài này cũng nói đến việc bạn đang bị ràng buộc bởi nghĩa vụ nào đó. Bạn cam chịu số phận hoặc là không đủ sức lực để đối mặt. Bạn dường như buông bỏ, trốn tránh mọi thứ."
    },
    { 
        name: "Page of Wands", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Wands11.jpg/250px-Wands11.jpg", 
        upright: "Page of Wands xuôi là lá bài của sự bắt đầu, mang theo tinh thần của một người trẻ tuổi đầy hoài bão và sẵn sàng khám phá. Thường báo hiệu những tin tức tốt lành sắp đến hoặc các thư từ quan trọng mang tính tích cực. Hãy giữ vững sự phấn khích và năng động để biến những ý tưởng thành hiện thực.", 
        reversed: "Ngọn lửa của Page of Wands ngược dễ trở nên bộc phát tiêu cực hoặc bị dập tắt bởi sự thiếu kiên trì, hấp tấp, thiếu kiên nhẫn, dễ dẫn đến những quyết định sai lầm. Hãy cẩn trọng với sự cả tin và việc quá vội vàng khi chưa chuẩn bị kỹ lưỡng."
    },
    { 
        name: "Knight of Wands", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Wands12.jpg/960px-Wands12.jpg", 
        upright: "Knight of Wands xuôi chỉ ra rằng mọi thứ đang diễn ra tốt hơn những gì bạn kỳ vọng. Mặc dù vậy thì bạn vẫn cần cẩn thận bởi sự bốc đồng và thiếu kiên nhẫn sẽ khiến bạn gặp những tình huống khó xử.", 
        reversed: "Knight of Wands ngược chỉ ra rằng mọi thứ đang diễn ra không tốt như bạn tưởng. Bất kỳ hành động mạo hiểm nào bạn thực hiện đều có khả năng gặp phải sự chậm trễ hoặc thất bại."
    },
    { 
        name: "Queen of Wands", 
        url: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Wands13.jpg", 
        upright: "Queen of Wands xuôi đại diện cho một người làm chủ được cuộc sống, cho thấy mọi việc đang tiến triển theo chiều hướng tích cực nhờ vào năng lượng tự tin và sự giúp đỡ từ những nguồn lực xung quanh. Lá bài này khích lệ bạn duy trì năng lượng tích cực nhưng cũng nhắc nhở sự tỉnh táo trong quản lý tài chính.", 
        reversed: "Queen of Wands ngược cho thấy bạn đang đối mặt với những thử thách trong công việc và tình cảm, thường liên quan đến tầm ảnh hưởng của một người phụ nữ lớn tuổi. Nó nhắc nhở bạn giữ vững bản lĩnh. Đừng để những tác động tiêu cực từ người khác làm lung lay sự tự tin vốn có của mình."
    },
    { 
        name: "King of Wands", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Wands14.jpg/250px-Wands14.jpg", 
        upright: "King of Wands xuôi đại diện cho sức mạnh thực sự trong mọi tình huống. Đây là một dấu hiệu tuyệt vời nếu bạn đang phải đối mặt với một vấn đề dường như không thể giải quyết định. Sự xuất hiện của lá bài King of Wands cho thấy bạn chỉ tìm thấy câu trả lời mình mong muốn khi bạn nắm lấy sức mạnh cá nhân.", 
        reversed: "King of Wands ngược tượng trưng cho những khía cạnh tiêu cực là kiêu ngạo, bản chất bốc đồng và ích kỷ. Người rút được King of Wands ngược rất cực đoan và sẽ không bao giờ dừng lại cho đến khi đạt được điều mình muốn. Lá bài này thường đại diện cho những người tham công tiếc việc, dễ cáu kỉnh và bốc đồng."
    },
    { 
        name: "Ace of Pentacles", 
        url: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Pents01.jpg", 
        upright: "Ace of Pentacles xuôi thường đại diện cho một vận may bất ngờ. Nếu lá bài này là một phần trong trải bài Tarot của bạn, cho dù đó là về tiền bạc, tình yêu, sức khỏe hay sự nghiệp, thì sẽ có nhiều điều tuyệt vời đến với bạn trong thời gian tới. Để nhận được vận may, cần nuôi dưỡng nó bằng năng lượng, thời gian hoặc tiền bạc.", 
        reversed: "Ace of Pentacles ngược là một lời cảnh báo về những bất ổn. Bạn có thể coi Ace of Pentacles ngược như một lá cờ đỏ, để dừng lại và xem xét nghiêm túc những kế hoạch, dự định mà bạn định triển khai. Nếu bạn chi tiêu quá mức, đổ tiền vào các khoản đầu tư rủi ro, hãy dừng lại càng nhanh càng tốt. Thay vì tiêu tiền, bạn nên tập trung lập kế hoạch và ổn định hơn."
    },
    { 
        name: "Two of Pentacles", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Pents02.jpg/250px-Pents02.jpg", 
        upright: "Two of Pentacles xuôi cho thấy hiện tại có thể bạn đang cố gắng sắp xếp theo thứ tự ưu tiên về vai trò và trách nhiệm của mình. Có thể việc bận rộn làm bạn không biết đâu là việc quan trọng để quản lý thời gian hiệu quả. Nó còn cho thấy bạn đang hoàn thành khá tốt nhiệm vụ và thích nghi nhanh. Tuy nhiên ranh giới giữa cân bằng và hoàn hảo cực mong manh, hãy chia năng lượng hợp lý.", 
        reversed: "Two of Pentacles ngược nói rằng bạn đang tốn quá nhiều công sức cho công việc, bạn vật lộn với lịch trình dày đặc của mình. Nếu như tình trạng này kéo dài sẽ ảnh hưởng nghiêm trọng đến sức khỏe và tinh thần, vì vậy bạn nên cân nhắc nghỉ ngơi ở giai đoạn này."
    },
    { 
        name: "Three of Pentacles", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Pents03.jpg/250px-Pents03.jpg", 
        upright: "Three of Pentacles xuôi đại diện cho sự liên kết chặt chẽ trong môi trường tập thể. Cụ thể, mỗi cá nhân đều cần có trách nhiệm riêng và không ngừng nỗ lực, cố gắng giúp đội nhóm đạt được kết quả cao nhất. Bên cạnh đó, nó cũng khuyên bạn nên tìm đến sự hỗ trợ từ những người xung quanh để mọi việc trong công việc và cuộc sống diễn ra suôn sẻ, thuận lợi hơn.", 
        reversed: "Three of Pentacles ngược cho thấy bạn không nỗ lực và cố gắng, bạn luôn giữ một thái độ thờ ơ trong tất cả mọi việc, không có động lực phát triển. Ngoài ra, trước những sai lầm trong quá khứ, bạn cũng không biết rút kinh nghiệm và thay đổi."
    },
    { 
        name: "Four of Pentacles", 
        url: "https://upload.wikimedia.org/wikipedia/commons/3/35/Pents04.jpg", 
        upright: "Four of Pentacles xuôi cho thấy bạn đang lo sợ về vấn đề tiền bạc hoặc cảm thấy không an toàn với các khoản đầu tư. Bạn cần nhìn nhận vào thực tế để đánh giá sự lo lắng đó của bản thân có thực sự cần thiết hay không. Bạn nên quên đi nỗi sợ để sống với thực tại và hạnh phúc nhất.", 
        reversed: "Four of Pentacles ngược cho thấy bạn sẽ bắt đầu chuyển từ giai đoạn kiểm soát và sợ hãi sang giai đoạn mở lòng. Điều này có nghĩa là bạn đã nhận ra nỗi sợ không giải quyết được vấn đề, thay vào đó nhìn nhận thực tế vấn đề để tìm lối đi mới tích cực và đem về nhiều lợi ích hơn."
    },
    { 
        name: "Five of Pentacles", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Pents05.jpg/960px-Pents05.jpg", 
        upright: "Five of Pentacles xuôi xuất hiện là một tín hiệu không mấy khả quan. Nó đại diện cho những khó khăn, vấp ngã và thất bại mà bạn có thể phải đối mặt ở hiện tại. Bạn gặp khó khăn trong tất cả mọi thứ.", 
        reversed: "Five of Pentacles ngược mang đến những ý nghĩa rất tích cực. Hay nói cách khác, nó chính là đại diện cho một sự khởi đầu mới đầy tươi sáng và hy vọng, chấm dứt thời kỳ khó khăn."
    },
    { 
        name: "Six of Pentacles", 
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Pents06.jpg", 
        upright: "Six of Pentacles xuôi là đại diện cho lòng tốt, sự sẻ chia trong cuộc sống. Nó có thể là sự hỗ trợ về mặt vật chất như quà tặng, tiền bạc… hay giá trị tinh thần như thời gian, kiến thức, trí tuệ.", 
        reversed: "Six of Pentacles ngược là đại diện cho sự thiếu hào phóng, sự sẻ chia không xuất phát từ tâm mà đi kèm với những điều kiện ràng buộc. Hãy cẩn thận về những người bạn cho vay tiền."
    },
    { 
        name: "Seven of Pentacles", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Pents07.jpg/250px-Pents07.jpg", 
        upright: "Seven of Pentacles xuôi cho thấy rằng bạn đã làm việc rất chăm chỉ và sự nỗ lực của bạn sẽ sớm được đền đáp. Nếu bạn đã kiên trì với một điều gì đó, bạn sẽ sớm gặt hái được thành quả. Ngoài ra nó cũng biểu thị rằng bạn đang ở ngã ba và bạn cần xem xét mọi thứ để đưa ra quyết định chính xác. Giờ là lúc tập trung vào những gì bạn muốn đạt được và biến nó thành hiện thực.", 
        reversed: "Seven of Pentacles ngược chỉ ra rằng dù bạn đã làm việc rất chăm chỉ nhưng kết quả bạn nhận được không xứng đáng. Nó cũng có thể cho thấy bạn đang đảm đương quá nhiều việc, làm quá sức. Bạn có thể cảm thấy không được đền đáp dù nỗ lực rất nhiều. Mặc khác nó cũng cho thấy sự thiếu nỗ lực, trì hoãn, lười biếng và cũng biểu thị sự thay đổi kế hoạch hoặc thiếu định hướng cuộc đời."
    },
    { 
        name: "Eight of Pentacles", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Pents08.jpg/960px-Pents08.jpg", 
        upright: "Eight of Pentacles xuôi xuất hiện, nó đại diện cho một khoảng thời gian làm việc chăm chỉ, nỗ lực và không ngừng cố gắng của bạn. Công sức bạn bỏ ra chắc chắn sẽ được đền đáp một cách xứng đáng.", 
        reversed: "Eight of Pentacles ngược chỉ ra sự lười biếng, thiếu nỗ lực, kém tập trung vào công việc. Hay nó có thể cho thấy bạn chỉ tập trung vào một khía cạnh, lĩnh vực nào đó mà bỏ bê hết những giá trị tình cảm xung quanh như gia đình, bạn bè."
    },
    { 
        name: "Nine of Pentacles", 
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Pents09.jpg", 
        upright: "Nine of Pentacles xuôi thể hiện một tín hiệu tích cực về mặt kinh tế cũng như tinh thần của bạn. Nó cũng cho biết đây là thời điểm bạn được nghỉ ngơi sau cả một quá trình dài nỗ lực và cố gắng vất vả. Tuy nhiên, không chỉ chú ý đến sự đủ đầy về mặt vật chất, chăm sóc sức khỏe tinh thần và học cách để trở nên hạnh phúc cũng là điều vô cùng quan trọng.", 
        reversed: "Nine of Pentacles ngược là một điềm báo không mấy tích cực. Nó cho biết bạn đang có xu hướng buông thả bản thân sau những thành công đã gặt hái được trong công việc và cuộc sống."
    },
    { 
        name: "Ten of Pentacles", 
        url: "https://upload.wikimedia.org/wikipedia/commons/4/42/Pents10.jpg", 
        upright: "Ten of Pentacles xuôi là một lá bài vô cùng may mắn, hướng đến sự đủ đầy cả về vật chất và tinh thần sau khoảng thời gian nỗ lực không ngừng nghỉ. Tất cả những ước mơ của bạn đều sẽ được thực hiện trong giai đoạn này.", 
        reversed: "Ten of Pentacles ngược là đại diện cho sự bất ổn trong cuộc sống của bạn. Khi lá bài này xuất hiện, có thể bạn sẽ gặp phải những thay đổi bất ngờ hoặc mất mát lớn. Suy nghĩ tích cực thì đây sẽ là bài học để bạn mạnh mẽ và trưởng thành hơn."
    },
    { 
        name: "Page of Pentacles", 
        url: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Pents11.jpg", 
        upright: "SPage of Pentacles xuôi liên quan đến những điều tích cực đối với bạn như sự nghiệp, tài chính, sức khỏe. Nó thể hiện cho một khởi đầu mới vững chắc, tạo nền tảng tốt cho sự thành công sau này. Và nếu bạn đưa ra những quyết định đúng đắn ở thời điểm hiện tại thì việc đạt được mục tiêu là điều rất dễ dàng.", 
        reversed: "Page of Pentacles ngược nói về việc bạn đang thiếu tập trung trong việc thực hiện điều gì đó. Dù bạn thông minh, khôn khéo, có ý chí, song vì quá nhiều tham vọng nên bạn thường hành động một cách dàn trải, không trọng tâm. Thậm chí còn có thể mắc vào điều không tốt về tiền bạc. Nó cũng nói đến việc bạn đang thiếu quyết đoán, trì hoãn trong công việc, cuộc sống."
    },
    { 
        name: "Knight of Pentacles", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Pents12.jpg/960px-Pents12.jpg", 
        upright: "Knight of Pentacles xuôi khuyên bạn nên tập trung hết công xuất vào việc giải quyết các vấn đề. Sự chăm chỉ và cố gắng của bạn trong thời gian dài sẽ nhận được quả ngọt.", 
        reversed: " Knight of Pentacles ngược cho thấy bạn đang chán nản với cuộc sống và công việc hiện tại. Bạn nên mở lòng để đón nhận những thay đổi mới mẻ đầy thú vị."
    },
    { 
        name: "Queen of Pentacles", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pents13.jpg/960px-Pents13.jpg", 
        upright: "Queen of Pentacles xuôi cho thấy bạn là thông minh, tài năng, biết cách tiếp cận các vấn đề hợp lý, thiết thực, sáng suốt trong những quyết định của mình. Bạn độc lập về tài chính, đạt được địa vị xã hội cao. Đồng thời, chuyện tình cảm, sức khỏe của bạn cũng khá tốt.", 
        reversed: "Queen of Pentacles ngược nói về sự đố kỵ, ghen ghét của bạn với người thành công hơn. Bạn tham lam, gần như sống tách biệt với mọi người vì lo sợ sẽ thiệt thòi, ảnh hưởng đến quyền lợi. Bên cạnh đó nó cũng cho thấy bạn đang đặt niềm tin sai chỗ, thường xuyên mất tập trung và mắc phải sai lầm nghiêm trọng. Hãy thoát ra khỏi tiêu cực, lấy lại tinh thần và bước tiếp."
    },
    { 
        name: "King of Pentacles", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Pents14.jpg/250px-Pents14.jpg", 
        upright: "King of Pentacles xuôi cho thấy bạn nên tận dụng hết nguồn năng lượng, năng lực của bản thân để sống và làm việc thì bạn sẽ nhận được kết quả tốt nhất. Bạn đã và đang đạt đến đỉnh cao của thành công. Nếu bạn đang căng thẳng, hãy thư giãn nhiều hơn để mọi thứ trong cuộc sống được diễn ra nhẹ nhàng nhất.", 
        reversed: "King of Pentacles ngược cho thấy đây là giai đoạn thử thách về vật chất và tinh thần. Bạn cần tu dưỡng thái độ tích cực và sẵn sàng điều chỉnh mục tiêu để vượt qua khó khăn.. Có thể bạn đang quá sa đà vào vật chất hoặc kiểm soát. Để xoay chuyển tình thế, bạn cần sự linh hoạt và ưu tiên cho sức khỏe tinh thần."
    },
    { 
        name: "Ace of Swords", 
        url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Swords01.jpg", 
        upright: "Ace of Swords xuôi là dấu hiệu của sự khởi đầu, tích cực có, tiêu cực cũng có thường trực trong cuộc sống. Nó mang đến thông điệp kêu gọi sự can đảm, ý chí và sự quyết tâm và đại diện cho một giai đoạn của cái nhìn sâu sắc.", 
        reversed: "Ace of Swords ngược cảnh báo nhắc nhở bạn cẩn thận với suy nghĩ, sự thiếu ý tưởng, mất trí nhớ, quyết định sai, giao tiếp kém,… Nó cho thấy bạn đang bắt đầu trở nên hỗn loạn."
    },
    { 
        name: "Two of Swords", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Swords02.jpg/960px-Swords02.jpg", 
        upright: "Two of Swords xuôi cảnh báo một mối quan hệ không được tốt cho lắm, đó có thể là tình bạn, tình yêu hoặc đối tác kinh doanh. Lúc này bạn cần phải xem xét kỹ lưỡng mối quan hệ của mình một cách bình đẳng, liệu rằng bạn có đang đối xử bình đẳng. Trong trường hợp không cân bằng thì Two of Swords ngầm nhắc bạn cần trao đổi, chia sẻ cởi mở hơn.", 
        reversed: "Two of Swords ngược đem đến nhiều tín hiệu tích cực. Nó báo hiệu đến lúc bạn mở lòng mình, phát triển thêm những mối quan hệ mới. Thế nhưng bạn cũng không nên lơ là và cần để mắt đến các khía cạnh khác nhau trong cuộc sống. Nếu nó làm cho bạn mất cân bằng thì ngay lập tức phải đối diện và buông bỏ."
    },
    { 
        name: "Three of Swords", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Swords03.jpg/120px-Swords03.jpg", 
        upright: "Three of Swords xuôi cho thấy bạn đang ở trong một tình cảnh bất hạnh, nhiều phiền muộn, đau khổ. Bạn dường như mất tập trung, dính vào xung đột, hiểu lầm nghiêm trọng. Nó cũng chỉ ra vấn đề về sức khỏe tâm thần ở mức độ đỉnh điểm. Tuy nhiên lá bài này không quá xấu vì khi rơi vào khó khăn bạn sẽ nhận ra nhiều bài học quý giá.", 
        reversed: "Three of Swords ngược đại diện cho việc bạn sẽ vượt qua được những muộn phiền, bất hạnh, giải phóng nỗi đau. Sự giải phóng này có thể mở đường cho năng lượng sáng tạo, một cơ hội để biến nỗi đau thành nghệ thuật. Tuy nhiên, lá bài này cũng có mặt trái cho thấy bạn đang cố gắng để kìm nén, chôn chặt nỗi đau. Bạn không để người khác biết, một mình tự chịu đựng."
    },
    { 
        name: "Four of Swords", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Swords04.jpg/960px-Swords04.jpg", 
        upright: "Four of Swords xuôi xuất hiện là một lời nhắc nhở bạn nên sống chậm lại, tái tạo năng lượng trước khi bắt đầu những thử thách tiếp theo. Đây là thời điểm tốt để xây dựng sức mạnh tinh thần.", 
        reversed: "Four of Swords ngược ngầm ám chỉ bạn hoặc người nào đó bên cạnh đang bị kiệt sức trong mọi khía cạnh cuộc sống. Đồng thời, lá bài cảnh báo đây không phải lúc thích hợp để bạn ép bản thân vượt qua giới hạn chịu đựng mà không để cơ thể nghỉ ngơi."
    },
    { 
        name: "Five of Swords", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Swords05.jpg/960px-Swords05.jpg", 
        upright: "Five of Swords xuôi đại diện cho tham vọng theo cách khá tiêu cực. Quá nhiều tham vọng mà không thực sự quan tâm đến hậu quả hoặc những người xung quanh không bao giờ là điều tốt. Trong cuộc chiến này, bạn có thể mất đi một số bạn bè.", 
        reversed: "Five of Swords ngược cho thấy những gì bạn muốn là sự xung đột kết thúc để bạn quên đi và tha thứ. Bạn biết chiến thắng không phải tất cả và muốn tập trung năng lượng của mình vào điều gì tích cực hơn. Ngoài ra cách diễn giải khác là bạo lực leo thang và sự trả thù nghiêm trọng. Nó cũng có thể là dấu hiệu người nào đó phải chịu trách nhiệm về những gì mình đã làm."
    },
    { 
        name: "Six of Swords", 
        url: "https://upload.wikimedia.org/wikipedia/commons/2/29/Swords06.jpg", 
        upright: "Six of Swords xuôi thể hiện sự căng thẳng và trạng thái gò bó bên trong bạn. Có vẻ như mọi thứ đang diễn ra không giống như bạn mong đợi nhưng hãy kiên nhẫn vì chúng đang chuyển biến theo chiều hướng tốt.", 
        reversed: "Six of Swords ngược cho biết thời gian này có thể bạn sẽ có những khám phá mới hoặc quyết định mới. Tuy vậy khả năng truyền đạt kém khiến điều bạn muốn thể hiện ra không được như ý muốn. Bạn đang cố gắng thoát ra khỏi quá khứ."
    },
    { 
        name: "Seven of Swords", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Swords07.jpg/960px-Swords07.jpg", 
        upright: "Seven of Swords xuôi dự đoán bạn sắp gặp một cuộc xung đột nên hãy thật cẩn thận, đặc biệt là với những suy nghĩ không được hay ho. Theo đó, hãy làm mọi thứ một cách công khai, minh bạch để ai muốn đổ lỗi, quy chụp những điều cho bạn không có cơ hội đạt được ý đồ.", 
        reversed: "Seven of Swords ngược gửi đến bạn thông điệp ý nghĩa là “mọi tội lỗi không đem đến bất kỳ lợi ích nào”. Hãy nghĩ nhiều đến trường hợp bị phát giác, bạn sẽ tỉnh táo và dần loại bỏ những ý đồ không hay này. Đây lời nhắc nhở về sự tỉnh ngộ. Nó thúc đẩy bạn từ bỏ những con đường tắt không chính thống để quay lại với sự minh bạch và trách nhiệm."
    },
    { 
        name: "Eight of Swords", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Swords08.jpg/960px-Swords08.jpg", 
        upright: "Eight of Swords trong trải bài xuôi cho thấy bạn đang bị kìm hãm vì những nỗi sợ không tên. Suy nghĩ về những điều tích cực là cách tốt nhất để giúp bạn tiến lên. Ngoài ra, nó cho thấy bạn đang mù quáng tin vào nhận định của bản thân.", 
        reversed: "Eight of Swords ngược xuất hiện cho thấy bạn đã thực sự sẵn sàng thay đổi. Dù đã sẵn sàng nhưng tâm lý bạn vẫn chưa ổn định nên hãy cố gắng vượt qua mọi nỗi sợ và tìm kiếm sự giúp đỡ bất cứ khi nào bản thân thấy cần."
    },
    { 
        name: "Nine of Swords", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Swords09.jpg/960px-Swords09.jpg", 
        upright: "Nine of Swords xuôi cho thấy sự sợ hãi, lo lắng, những gánh nặng, suy nghĩ tiêu cực. Điều này khiến bạn cảm thấy bị ngộp thở, không thể đối phó lại được. Bên cạnh đó, lá bài này còn thể hiện sự đau khổ trong tinh thần của bạn. Có thể bạn đang hối hận, thấy tội lỗi về điều gì đó bản thân đã gây ra. Bạn ước được quay trở lại quá khứ để cứu vãn tình hình.", 
        reversed: "Nine of Swords ngược cho thấy bạn vẫn bị chìm đắm trong những cơn ác mộng, khủng bố về tinh thần. Những sang chấn tâm lý ở quá khứ có thể sẽ quay trở lại dày vò bạn. Tuy nhiên có tia sáng le lói dành cho bạn, bạn có thể phục hồi về sức khỏe, giải tỏa được một số điều tiêu cực trong cuộc sống, giải quyết được những vấn đề trong công việc, tình cảm."
    },
    { 
        name: "Ten of Swords", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Swords10.jpg/120px-Swords10.jpg", 
        upright: "Ten of Swords xuôi cho thấy một cánh cửa nào đó của bạn sẽ phải khép lại. Tuy nhiên, sẽ có một cánh cửa mới được mở ra cho bạn hướng phát triển tốt hơn. Điều quan trọng nhất là bạn phải tin vào chính mình, biết cách đứng dậy sau thất bại.", 
        reversed: "Ten of Swords ngược cho thấy bạn đã vượt qua được thời điểm khó khăn nhất trong cuộc đời của mình. Bạn đã có những giải pháp và kế hoạch rất hay để chờ đón điều tốt lành sắp tới. Hãy lấy sai lầm trước đó làm bài học để bản thân trở nên tốt đẹp và giỏi giang hơn."
    },
    { 
        name: "Page of Swords", 
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Swords11.jpg", 
        upright: "Page of Swords xuôi đại diện cho khoảng thời gian quá khứ quan trọng khi bạn nói ra điều có ảnh hưởng đến cuộc sống. Hiện tại nó thể hiện điều nói lúc trước là thật hoặc bạn đang tìm thêm thông tin, lúc này lá bài khác giúp bạn đưa ra quyết định đúng đắn. Tương lai thể hiện bạn chuẩn bị đón nhận điều mới, hãy dùng trí tuệ và khiêm tốn để điều hướng xung đột.", 
        reversed: "Page of Swords ngược là đại diện cho một người có ở đời thật, họ hiện diện trong cuộc sống của bạn. Người đó có thể lớn hơn bạn, có xu hướng thích can thiệp vào chuyện của người khác. Nó cảnh báo về sự bốc đồng trong lời nói và những kiến thức nông cạn, giả tạo từ những người xung quanh và bạn nên tỉnh táo trước những thông tin chưa kiểm chứng."
    },
    { 
        name: "Knight of Swords", 
        url: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Swords12.jpg", 
        upright: "Knight Of Swords xuôi xuất hiện cho thấy những điều khá tích cực. Bạn đang tràn đầy năng lượng, sức sống để tiến tới mục tiêu của mình mà không quan tâm đến khó khăn. Điều duy nhất bạn nghĩ tới là chiến đấu và thành công. Tuy nhiên quyết tâm quá lớn có thể trở nên mù quáng. Hậu quả nhận về sẽ rất lớn khiến bạn có thể rơi vào bất ổn, nguy hiểm.", 
        reversed: "Knight Of Swords ngược thể hiện sự bốc đồng, thiếu kiên nhẫn của bạn khi xử lý, giải quyết vấn đề trong cuộc sống. Có thể bạn giàu năng lượng nhưng không có bất kỳ định hướng nào rõ ràng, cụ thể và điều đó khiến bạn vội vàng, xốc nổi, đánh mất cơ hội quý giá. Ngoài ra nó cũng cho thấy bạn đang bị phân tán bởi điều gì đó, không chuẩn bị cho những điều mình sẽ làm."
    },
    { 
        name: "Queen of Swords", 
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords13.jpg", 
        upright: "Queen of Swords xuôi cho biết trong thời gian này bạn đang sử dụng đầu óc để suy nghĩ, phân tích nhiều hơn là việc lắng nghe cảm xúc. Giai đoạn này có thể điều đó sẽ tốt cho bạn bởi bạn không bị phân tâm từ nguyên nhân bên ngoài. Từ đó giúp bạn hiểu ra điều mình mong muốn là gì và bước những bước đi đầu tiên.", 
        reversed: "Queen of Swords ngược thể hiện ý nghĩa bị chỉ trích quá nhiều, thiếu sự đồng cảm, chịu đựng nhiều cay đắng, thù hận,… Bạn nên cẩn thận với những người xung quanh bởi họ có thể kéo bạn xuống bằng cách tung tin đồn ác ý. Bạn cũng nên tập trung hơn vào hướng đi của bản thân."
    },
    { 
        name: "King of Swords", 
        url: "https://upload.wikimedia.org/wikipedia/commons/3/33/Swords14.jpg", 
        upright: "Ngoài việc là biểu tượng của một người đàn ông có quyền lực và có chính kiến, King of Swords xuôi cũng nhắc nhở bạn cần thực hiện một thay đổi lớn liên quan đến hành vi, lối tư duy và kỳ vọng của bản thân trong thời gian sắp tới. Đây là lúc bạn nên gạt bỏ cảm xúc, giữ sự khách quan.", 
        reversed: "King of Swords ngược đại diện cho một người đàn ông lạm dụng quyền lực, thao túng, vô lý, thiếu đạo đức, thậm chí là gây tổn thương cho bạn. Ngoài ra, nó cũng cho thấy bạn đang thiếu định hướng trong thời gian này."
    },
    { 
        name: "Ace of Cups", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Cups01.jpg/960px-Cups01.jpg", 
        upright: "Ace of Cups xuôi cho biết đây là giai đoạn bạn cần chấm dứt một chặng đường, mối quan hệ nào đó để bắt đầu một hành trình mới. Mặc dù những điều trong quá khứ gây ra cho bạn nhiều tổn thương lớn nhưng bạn hãy cố gắng vượt qua, cho bản thân mình một cơ hội tốt hơn.", 
        reversed: "Ace of Cups ngược thể hiện cho những điều thiếu tích cực hơn, bạn có thể sẽ đánh mất điều gì đó trong cuộc sống, vấn đề tình cảm, tài chính. Những tổn thương bạn gặp phải sẽ kéo dài. Cuộc sống của bạn ở hiện tại không được như trong quá khứ."
    },
    { 
        name: "Two of Cups", 
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Cups02.jpg", 
        upright: "Two of Cups xuôi mang đến thông điệp tích cực về tình cảm, tình bạn và hợp tác. Đây là dấu hiệu cho thấy sự gắn kết, đồng cảm và hòa hợp giữa hai người, cũng như cơ hội thành công trong các mối quan hệ cá nhân hoặc công việc. Nó nhắc nhở về tầm quan trọng của lắng nghe và tôn trọng lẫn nhau.", 
        reversed: "Two of Cups ngược cảnh báo về rạn nứt, mâu thuẫn và thiếu thấu hiểu trong các mối quan hệ. Lá bài này cho thấy sự căng thẳng, tranh chấp hoặc ích kỷ có thể xuất hiện, đồng thời nhắc nhở phải cởi mở và tôn trọng lẫn nhau để duy trì sự hòa hợp."
    },
    { 
        name: "Three of Cups", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Cups03.jpg/250px-Cups03.jpg", 
        upright: "Three of Cups xuôi nói đến sự đoàn tụ, tập hợp của nhiều người. Cũng có thể là ai đó trong quá khứ bỗng xuất hiện trở lại cuộc sống của bạn. Khi gặp lá bài này, bạn có thể mong đợi sự kiện hạnh phúc, vui vẻ đối với mình. Đây là lá bài tích cực, bạn sẽ có khoảng thời gian vô cùng tuyệt vời, nhiều năng lượng, cảm xúc tốt đẹp.", 
        reversed: "Three of Cups ngược nói đến những khía cạnh kém tích cực nhưng không quá tệ. Bạn đang bị cuốn vào guồng quay của cuộc sống, mất cân bằng và không có thời gian gặp gỡ bạn bè, người thân, thậm chí mất liên lạc với bạn cũ, không có sự kết nối nào với mọi người. Nó cũng chỉ ra rằng bạn đang ăn chơi sa đà quá mức, bạn cần phải cân bằng lại cuộc sống của mình."
    },
    { 
        name: "Four of Cups", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Cups04.jpg/960px-Cups04.jpg", 
        upright: "Four of Cups xuôi đại diện cho sự hối hận, bỏ lỡ cơ hội, trì trệ, thờ ơ, vỡ mộng, tập trung vào những điều tiêu cực, chỉ quan tâm đến bản thân, buồn chán, hoài niệm, thất vọng, mệt mỏi, mơ mộng. Nó yêu cầu bạn phải tự đánh giá lại thái độ của mình để có thể kéo bản thân ra khỏi lối mòn này.", 
        reversed: "Four of Cups ngược đại diện cho việc nắm bắt cơ hội, buông bỏ hối tiếc, chấm dứt sự trì trệ, động lực, nhiệt tình, chủ động, tập trung, say mê cuộc sống, tái tạo năng lượng. Lá bài này báo hiệu rằng bạn đang mong muốn một khởi đầu mới."
    },
    { 
        name: "Five of Cups", 
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Cups05.jpg", 
        upright: "Five of Cups cho thấy bạn đang rơi vào hoàn cảnh bế tắc. Khi sự việc diễn ra không giống với mong đợi của bạn, nó khiến bạn chán nản và có xu hướng đổ lỗi cho chính mình, bị cảm xúc tiêu cực nuốt trọn con người. Sự tha thứ cho bản thân và mọi người là điều rất cần thiết. Chỉ khi bạn buông bỏ được thì mới đủ sẵn sàng tiến lên phía trước.", 
        reversed: "Five of Cups ngược nói rằng bạn đã và đang trải qua thất bại, vấp ngã bởi nhiều thách thức. Bạn thất vọng và tự xem mình là kẻ thua cuộc. Tuy nhiên bạn chỉ đang trốn tránh thực tại và không muốn người khác biết đến sai lầm của mình. Sau dần bạn sẽ nhận ra và bắt đầu thay đổi suy nghĩ và hành động của mình."
    },
    { 
        name: "Six of Cups", 
        url: "https://upload.wikimedia.org/wikipedia/commons/1/17/Cups06.jpg", 
        upright: "Six of Cups xuôi cho thấy bạn không nên sống quá lâu trong mộng tưởng về những ngày tươi đẹp trước đây. Bạn cần nhìn nhận sự thật rằng đó là quá khứ để tạo động lực tiếp tục xây dựng lên những thứ tốt đẹp hơn cho bản thân.", 
        reversed: "Six of Cups ngược đang muốn nhắc bạn nên tập trung nhiều hơn vào hiện tại để hướng đến tương lai. Đừng để bản thân lạc lối quá lâu trong những hồi tưởng về thời thơ ấu, quá khứ. Tốt nhất bạn nên sống cho hôm nay và mai sau."
    },
    { 
        name: "Seven of Cups", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Cups07.jpg/960px-Cups07.jpg", 
        upright: "Seven of Cups nói đến việc bạn đang có rất nhiều sự lựa chọn, nhiều cơ hội mở ra. Điều này vô tình khiến bạn choáng ngợp và không biết cách để tập trung, đưa ra quyết định tốt nhất. Nó cũng cho thấy bạn dường như đang quá chìm đắm với những suy nghĩ, mơ ước xa vời, viển vông. Bạn cần phải hành động, đừng chỉ dừng ở những suy nghĩ.", 
        reversed: "Seven of Cups ngược cho biết bạn đang tìm kiếm sự rõ ràng sau một khoảng thời gian đắm chìm trong mơ mộng, tưởng tượng. Bạn có thể bắt đầu hành động quyết đoán, mạnh mẽ hơn, tìm thấy con đường đi chính xác cho mình. Tuy nhiên, ở trường hợp khác, lá bài này lại đề cập đến vấn đề bạn thiếu các lựa chọn, cơ hội, đang bị mắc kẹt trong điều gì đó."
    },
    { 
        name: "Eight of Cups", 
        url: "https://upload.wikimedia.org/wikipedia/commons/6/60/Cups08.jpg", 
        upright: "Eight of Cups xuôi là phản chiếu về sự bắt đầu một hành trình phiêu lưu mới. Đây là thời điểm tuyệt vời để bạn thay đổi mọi thứ của bản thân để trở nên tốt đẹp hơn. Bạn sẽ dùng chính của cải, vật chất và thành công ở hiện tại để đánh đổi với những thứ ý nghĩa hơn ở tương lai.", 
        reversed: "Eight of Cups ngược cho thấy bạn đang có sự thiếu quyết đoán trong việc lựa chọn thay đổi. Do nhiều yếu tố chi phối khiến cảm xúc của bạn bị lấn át, 8 of Cups khuyên bạn không nên quá cảm tính mà cần dùng lý trí để suy nghĩ và nhìn nhận vấn đề."
    },
    { 
        name: "Nine of Cups", 
        url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Cups09.jpg", 
        upright: "Nine of Cups xuôi cho biết cho dù điều may mắn hay điều xấu đến với bạn thì bạn cũng cần tự nhủ là hãy cố gắng, cẩn thận với hành động. Có thể cơ hội đang mở ra trước mắt nhưng cũng đừng đi quá xa. Bạn cần đảm bảo những việc đang làm có ích cho mục tiêu cuối cùng. Tương lai đang vô cùng ưu ái bạn, vì vậy hãy tiếp tục tập trung và cố gắng.", 
        reversed: "Nine of Cups ngược xuất hiện trên trải bài thì nó chính là thông điệp mà các đấng tối cao muốn bạn phải dành thời gian suy nghĩ về điều bản thân mong muốn. Là bài ngược nói rằng bạn đang tìm kiếm cảm giác được thỏa mãn hạnh phúc. Bạn nên ngừng việc đề cao giá trị vật chất, thay vào đó hãy chú trọng đến ý nghĩa của sự tồn tại hơn."
    },
    { 
        name: "Ten of Cups", 
        url: "https://upload.wikimedia.org/wikipedia/commons/8/84/Cups10.jpg", 
        upright: "Ten of Cups xuôi mang hàm ý về một cuộc sống gia đình hạnh phúc, hạnh phúc không chỉ đến với bạn mà còn đến với những người thân yêu mà bạn quan tâm nhất. Đây là một lá bài mang ý nghĩa tích cực dù nó xuất hiện trong bối cảnh nào đi nữa.", 
        reversed: "Ten of Cups ngược chỉ ra rằng bạn không nắm rõ nguyên nhân tạo nên sự hạnh phúc mà bản thân đang tận hưởng. Nguyên nhân này có thể ngay trước mắt bạn nhưng bạn không hề biết. Nhưng nhìn chung thì nó vẫn mang ý nghĩa tích cực."
    },
    { 
        name: "Page of Cups", 
        url: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Cups11.jpg", 
        upright: "Page of Cups xuôi thường kết nối với cơ hội tuyệt vời. Đây là dấu hiệu cho thấy sợi dây tâm trí được kết nối với cái tôi mạnh mẽ hơn bao giờ hết. Thông điệp được đưa đến là bạn nên cởi mở, tự tin với những ý tưởng sáng tạo ngẫu hứng bởi đó rất có thể là mách bảo của trực giác hoặc thông điệp vũ trụ ưu ái sắp xếp riêng cho bạn.", 
        reversed: "Page of Cups chiều đảo ngược khắc họa hình ảnh một người ham vui, chưa đủ chín chắn, ổn định, gặp nhiều rắc rối và tắc nghẽn trong cảm xúc. Đây là mẫu người có xu hướng đối mặt với khủng hoảng hiện sinh và cố gắng tìm sự an toàn trong vỏ ốc của chính mình."
    },
    { 
        name: "Knight of Cups", 
        url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Cups12.jpg", 
        upright: "Knight of Cups xuôi báo hiệu có thể sắp có một sứ giả hay ai đó xuất hiện, mang đến cho bạn những cảm xúc tích cực hơn. Nó cũng cho thấy Mọi việc đang chuyển biến tốt đẹp nhờ vào khả năng giao tiếp khéo léo và thái độ lạc quan của bạn. Để thành công, bạn chỉ cần giữ vững sự chân thành và tinh tế trong cách đối nhân xử thế.", 
        reversed: "Knight of Cups ngược biểu thị rằng bạn đang để cảm xúc chi phối quá nhiều đến hoạt động, cuộc sống, thường ở trong trạng thái ủ rũ, chán nản, không kiểm soát được mình. Hoặc bạn có thể sẽ phải thất vọng về một điều gì đó mà bản thân đã kỳ vọng quá nhiều."
    },
    { 
        name: "Queen of Cups", 
        url: "https://upload.wikimedia.org/wikipedia/commons/6/62/Cups13.jpg", 
        upright: "Queen of Cups xuôi đại diện cho cảm xúc, sự thông cảm và lắng nghe. Sự ấm áp, ân cần, tấm lòng từ bì đối với bản thân và những người xung quanh luôn thu về nguồn năng lượng tích cực như vầng hào quang ngời sáng.", 
        reversed: "Queen of Cups ngược là dấu hiệu cho thấy bạn đang mất liên kết với cảm xúc bên trong. Bạn gần như “nổ tung” khi không thể bộc lộ cảm xúc, mong muốn của bản thân để giải tỏa và thoát khỏi chuỗi cảm xúc tiêu cực đang ngự trị trong tâm hồn. Nếu không có hướng giải quyết sớm, bạn sẽ phải vật lộn trong mớ “hỗn độn”."
    },
    { 
        name: "King of Cups", 
        url: "https://upload.wikimedia.org/wikipedia/commons/0/04/Cups14.jpg", 
        upright: "King of Cups xuôi mang ý nghĩa tích cực về mặt cảm xúc. Bạn có thể kiểm soát tốt bản thân trong các tình huống, đồng thời sẽ nhận thức sâu sắc hơn về bản thân. Mặt khác, nó cũng nói đến việc bạn sẽ nhận được sự giúp đỡ nào đó từ những người đàn ông bên cạnh.", 
        reversed: "King of Cups ngược thể hiện những vấn đề khá tiêu cực về mặt cảm xúc. Bạn có thể mất cân bằng, đảo lộn tâm trí và khó duy trì được cảm xúc tích cực với mọi người. Thời điểm này bạn sẽ gặp rất nhiều người đưa ra những lời khuyên khác nhau. Lúc này bạn cần phải tỉnh táo, tham khảo một cách có chọn lọc, cẩn thận cho quyết định của mình."
    }
];