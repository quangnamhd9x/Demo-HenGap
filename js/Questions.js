class Question {                                                //tạo đối lớp chứa các thuộc tính
    constructor(listAnswer, answer, correctAnswer, money) {
        this.listAnswer = listAnswer;
        this.answer = answer;
        this.correctAnswer = correctAnswer;
        this.money = money;
    }

    checkAnswer(answer) {
        return answer === this.correctAnswer;           //Check đáp án người dùng chọn nếu đúng với giá trị trong mảng
    }
}

let timeCount;                                  // biến đếm thời gian mặc định ban đầu là không giá trị
let message;                                    // khai báo biến chứa đoạn tin thông báo

let timeID = setInterval(function () {
    document.getElementById('timeCountDown').innerHTML = timeCount + " giây";   // hiển thị giây ngoài màn hình
    timeCount--;                                 // trừ giá trị của biến đếm thời gian
    countdown();                                // gọi hàm check điều khiện thua hết giây
}, 1000);                               // 1000ms = 1 giây tương ứng bị trừ


function countdown() {
    if (timeCount < 0) {
        clearInterval(timeID);                      //clear time để về giá trị ban đầu là không giá trị
        message = window.confirm('Hết giờ rồi :( Chơi lại lần nữa nhé!');
        reload()                                    // load lại trang hiện tại
    }
}

let question1 = new Question(" Câu 1: Mỗi năm có 7 tháng có 31 ngày. Đố bạn có bao nhiêu tháng có  28 ngày? ", ["A.12", "B.1", "C.2", "D.7"], "A.12", "1.000.000 VNĐ");
let question2 = new Question(" Câu 2: Một ly thủy tính đựng đầy nước, làm thế nào để lấy nước ở dưới đáy ly mà không đổ nước ra ngoài?", ["A.Đập đáy trai", "B.Lấy ống hút", "C.Đổ nước sang trai khác", "D.Không lấy được"], "B.Lấy ống hút", "1.500.000 VNĐ");
let question3 = new Question(" Câu 3: Big Ben là tên của ...?", ["A. Một con vật", "B. Một người nổi tiếng ", "C. Một cuốn sách", "D. Một chiếc đồng hồ"], "D. Một chiếc đồng hồ", "2.000.000 VNĐ");
let question4 = new Question(" Câu 4: Liên Xô tham gia chiến tranh Thế Giới thứ II vào năm nào ?", ["A. 1917", "B. 1944", "C. 1939", "D. 1941"], "D. 1941", "2.500.000 VNĐ");
let question5 = new Question(" Câu 5: Loại củ nào giúp vết thương mau lành, không để lại sẹo?", ["A. Gừng", "B. Hành", "C. Ớt", "D. Nghệ"], "D. Nghệ", "5.000.000 VNĐ");
let question6 = new Question(" Câu 6: Hoa hậu Thế Giới Việt Nam năm 2019 là ai?", ["A. Đỗ Mỹ Linh", "B. Lương Thùy Linh", "C. Trần Tiểu Vy", "D. Nguyễn Trần Khánh Vân "], "B. Lương Thùy Linh ", "6.000.000 VNĐ");
let question7 = new Question(" Câu 7: Bên trái đường có một căn nhà xanh, bên phải đường có một căn nhà đỏ.Hỏi nhà trắng ở đâu?", ["A. Ở giữa", "B. Ở phía sau ", "C. Ở nước Mỹ", "D. Không có nhà trắng"], "C. Ở nước Mỹ", "8.000.000 VNĐ");
let question8 = new Question(" Câu 8: Quần đảo Trường Sa thuộc tỉnh nào ở nước ta?", ["A. Khánh Hòa", "B. Bình Thuận", "C. Đà Nẵng", "D. Bà Rịa-Vũng Tàu"], "A. Khánh Hòa", "10.000.000 VNĐ");
let question9 = new Question(" Câu 9: Cầu thủ nào là vua phá lưới giải ngoại hạng Anh mùa giải 2019-2020?", ["A. Aubameyang", "B. Raheem Sterling", "C. Mohamed Salah", "D. Jamie Vardy"], "D. Jamie Vardy", "12.000.000 VNĐ");
let question10 = new Question(" Câu 10: Vật liệu nào được dùng để rèn những cây kiếm Katana huyền thoại của Nhật Bản?", ["A. Takashi", "B. Tamahagane", "C. Orihaco", "D. Katanashi"], "D. Katanashi", "15.000.000 VNĐ");

let questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
let getQuestion = document.getElementById('question');     // lấy câu hỏi bằng id question được gọi

function showQuestion(question_1) {                             // mặc định show question 1 trong mảng Question
    timeCount = 15;
    getQuestion.innerHTML = question_1.listAnswer;                // lấy question 1 trong listAnswer
    getQuestion.setAttribute("indexQuestion", questions.indexOf(question_1));
    for (let i = 0; i < 10; i++) {
        let getAnswer = document.getElementById('answer' + (i + 1));   // i bắt đầu từ 0 nên +1 cho hợp lý :))
        getAnswer.innerHTML = question_1.answer[i];                 //hiển thị dữ liệu ra ngoài html
    }
}

showQuestion(question1);

function checkAnswer(id) {                                  //gọi hàm check giá trị id
    musicbackground.innerHTML = soundTrue.getSound();                   //nhạc nền mới vào game
    let answer = document.getElementById(id).innerHTML;                 //gọi biến kết quả theo checkAnswer(id) bên html  ví dụ câu 1 thì answer = A.12
    let getQuestionId = document.getElementById('question');    // lấy id câu hỏi tương ứng question1 là id = 1
    let indexQuestion = parseInt(getQuestionId.getAttribute("indexQuestion")); // lấy index câu hỏi tương ứng vị trí câu hỏi trong mảng question ví dụ question1 là index = 0;
console.log(answer)
    if (!confirm("Bạn chắc chắn phương án này chứ?")) {
        return;
    }
    if (questions[indexQuestion].checkAnswer(answer)) {        // điều kiện true nếu người dùng ấn vào đúng A.12 ở câu 1 thì alert thông báo
        alert('Chúc mừng bạn đã trả lời đúng, ring tiền ^^');
        document.getElementById('result').innerHTML = "Tiền thưởng: " + "<b>" + (questions[indexQuestion].money) + "</b>";

        if (indexQuestion === 10) {                             // nếu chơi đến câu hỏi 10 tại vị trí thứ 10 và > index 9 trong mảng questions là win tất
            musicbackground.innerHTML = musicWinAll.getSound()
            alert("Bạn thật xuất sắc, chúc mừng bạn đã vượt qua toàn bộ câu hỏi <3");
            timeCount = 1
            // window.reload();
        }
        next(indexQuestion);
        timeCount = 15;
    } else {
        musicbackground.innerHTML = soundFalse.getSound();
        alert('Sai mất rồi! chơi lại nào :)');
        reload();
    }
}

function next(index) {                      // đến câu hỏi tiếp theo, theo index trong mảng question
    ++index;
    showQuestion(questions[index]);             // gọi lại hàm show này để tạo câu hỏi tiếp theo
}

function reload() {
    location.replace("index.html");             // load lại trang index ban đầu khi kết thúc trò chơi
}
